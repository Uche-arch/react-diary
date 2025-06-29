import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/livestocktracker.css";

function LiveStockTracker() {
  const [prices, setPrices] = useState([
    { name: "AAPL", price: 250, previous: 250 },
    { name: "GOOG", price: 320, previous: 320 },
    { name: "TSLA", price: 190, previous: 190 },
    { name: "META", price: 275, previous: 275 },
  ]);

  const [balance, setBalance] = useState(17037435);
  const [portfolio, setPortfolio] = useState({});

  useEffect(() => {
    let timeoutId;

    const updatePrices = () => {
      setPrices((prevPrices) =>
        prevPrices.map((stock) => {
          const change = getRandomChange();
          const updatedPrice = parseFloat((stock.price + change).toFixed(2));
          return {
            ...stock,
            previous: stock.price,
            price: updatedPrice,
          };
        })
      );

      const randomDelay = Math.floor(Math.random() * 5000) + 1000;
      timeoutId = setTimeout(updatePrices, randomDelay);
    };

    updatePrices();

    return () => clearTimeout(timeoutId);
  }, []);

  const getRandomChange = () => {
    const base = Math.random() * 20;
    return Math.random() > 0.5 ? base : -base;
  };

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const getDirection = (current, previous) => {
    if (current > previous) return "up";
    if (current < previous) return "down";
    return "same";
  };

  const handleBuy = (stock) => {
    if (balance >= stock.price) {
      setBalance((prev) => prev - stock.price);
      setPortfolio((prev) => ({
        ...prev,
        [stock.name]: (prev[stock.name] || 0) + 1,
      }));
    } else {
      alert("Insufficient balance to buy!");
    }
  };

  const handleSell = (stock) => {
    if (portfolio[stock.name]) {
      setBalance((prev) => prev + stock.price);
      setPortfolio((prev) => ({
        ...prev,
        [stock.name]: prev[stock.name] - 1,
      }));
    } else {
      alert("You don’t own this stock!");
    }
  };

  return (
    <motion.section
      className="lesson-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="lesson-title">📊 Live Stock Trading Simulator</h2>

      <p className="lesson-text">
        I built this project to feel like a real trader — watching prices go
        up/down, buying & selling stocks, and tracking balance.
      </p>

      <div className="balance" style={{ color: "green" }}>
        💼 Balance: <strong>${balance.toLocaleString()}</strong>
      </div>
      <div className="table-container">
        <table className="stock-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Price</th>
              <th>Change</th>
              <th>Owned</th>
              <th>Actions</th>
            </tr>
          </thead>
          <AnimatePresence>
            <tbody>
              {prices.map((stock, i) => {
                const direction = getDirection(stock.price, stock.previous);
                const arrow =
                  direction === "up" ? "🔼" : direction === "down" ? "🔽" : "⏺";
                const className =
                  direction === "up"
                    ? "price-up"
                    : direction === "down"
                    ? "price-down"
                    : "price-same";

                return (
                  <motion.tr
                    key={stock.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <td>
                      <strong>{stock.name}</strong>
                    </td>
                    <td className={`price-value ${className}`}>
                      {formatPrice(stock.price)}
                    </td>
                    <td className={`price-change ${className}`}>
                      {arrow}{" "}
                      {direction !== "same"
                        ? direction === "up"
                          ? "+"
                          : "-"
                        : ""}
                      {Math.abs(stock.price - stock.previous).toFixed(2)}
                    </td>
                    <td>{portfolio[stock.name] || 0}</td>
                    <td>
                      <button
                        onClick={() => handleBuy(stock)}
                        style={{ backgroundColor: "green" }}
                      >
                        Buy
                      </button>
                      <button
                        onClick={() => handleSell(stock)}
                        style={{ backgroundColor: "red" }}
                      >
                        Sell
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </AnimatePresence>
        </table>
      </div>
    </motion.section>
  );
}

export default LiveStockTracker;
