const techs = [
  "NinjaTrader 8",
  "MetaTrader 4",
  "MetaTrader 5",
  "TradingView",
  "cTrader",
  "QuantConnect",
  "Pine Script",
  "C#",
  "MQL5",
  "Python",
  "React",
  "MetaAPI",
  "AWS",
];

export default function LogoStrip() {
  return (
    <div className="logo-strip" aria-hidden="true">
      <div className="logo-track">
        {[...techs, ...techs].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
