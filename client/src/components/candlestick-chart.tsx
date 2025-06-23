import { motion } from "framer-motion";

export default function CandlestickChart() {
  const candlesticks = [
    { position: "10%", height: "60%", isRed: false, delay: 0.5 },
    { position: "15%", height: "40%", isRed: true, delay: 0.8 },
    { position: "20%", height: "80%", isRed: false, delay: 1.1 },
    { position: "25%", height: "30%", isRed: true, delay: 1.4 },
    { position: "30%", height: "70%", isRed: false, delay: 1.7 },
    { position: "35%", height: "90%", isRed: false, delay: 2.0 },
    { position: "40%", height: "50%", isRed: true, delay: 2.3 },
    { position: "45%", height: "85%", isRed: false, delay: 2.6 },
    { position: "50%", height: "100%", isRed: false, delay: 3.0, isGodCandle: true },
    { position: "55%", height: "75%", isRed: false, delay: 2.9 },
    { position: "60%", height: "95%", isRed: false, delay: 3.2 },
    { position: "65%", height: "45%", isRed: true, delay: 3.5 },
    { position: "70%", height: "85%", isRed: false, delay: 3.8 },
    { position: "75%", height: "65%", isRed: false, delay: 4.1 },
    { position: "80%", height: "35%", isRed: true, delay: 4.4 },
    { position: "85%", height: "90%", isRed: false, delay: 4.7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative h-[200px] w-full">
        {candlesticks.map((candle, index) => (
          <motion.div
            key={index}
            className={`candlestick ${candle.isRed ? "red" : ""} ${candle.isGodCandle ? "god-candle" : ""}`}
            style={{
              left: candle.position,
              height: candle.height,
              width: candle.isGodCandle ? "12px" : "8px",
            }}
            initial={{ height: "0%", opacity: 0 }}
            animate={{ 
              height: candle.isGodCandle ? "200%" : candle.height, 
              opacity: 1 
            }}
            transition={{
              duration: candle.isGodCandle ? 1 : 0.5,
              delay: candle.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}
