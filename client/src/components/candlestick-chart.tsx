import { motion } from "framer-motion";

export default function CandlestickChart() {
  const candlesticks = [
    { position: "5%", height: "25%", isRed: false, delay: 0.3 },
    { position: "10%", height: "30%", isRed: false, delay: 0.6 },
    { position: "15%", height: "20%", isRed: true, delay: 0.9 },
    { position: "20%", height: "40%", isRed: false, delay: 1.2 },
    { position: "25%", height: "35%", isRed: true, delay: 1.5 },
    { position: "30%", height: "50%", isRed: false, delay: 1.8 },
    { position: "35%", height: "55%", isRed: false, delay: 2.1 },
    { position: "40%", height: "45%", isRed: true, delay: 2.4 },
    { position: "45%", height: "65%", isRed: false, delay: 2.7 },
    { position: "50%", height: "70%", isRed: false, delay: 3.0 },
    { position: "55%", height: "60%", isRed: true, delay: 3.3 },
    { position: "60%", height: "80%", isRed: false, delay: 3.6 },
    { position: "65%", height: "85%", isRed: false, delay: 3.9 },
    { position: "70%", height: "75%", isRed: true, delay: 4.2 },
    { position: "75%", height: "95%", isRed: false, delay: 4.5 },
    { position: "80%", height: "100%", isRed: false, delay: 4.8, isGodCandle: true },
    { position: "85%", height: "90%", isRed: false, delay: 5.1 },
    { position: "90%", height: "105%", isRed: false, delay: 5.4 },
    { position: "95%", height: "110%", isRed: false, delay: 5.7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="relative h-[400px] w-full flex items-end justify-center">
        {candlesticks.map((candle, index) => (
          <motion.div
            key={index}
            className={`candlestick ${candle.isRed ? "red" : ""} ${candle.isGodCandle ? "god-candle" : ""}`}
            style={{
              position: "absolute",
              left: candle.position,
              bottom: "20%",
              width: candle.isGodCandle ? "14px" : "10px",
            }}
            initial={{ height: "0%", opacity: 0 }}
            animate={{ 
              height: candle.height, 
              opacity: 1 
            }}
            transition={{
              duration: candle.isGodCandle ? 1.2 : 0.6,
              delay: candle.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}
