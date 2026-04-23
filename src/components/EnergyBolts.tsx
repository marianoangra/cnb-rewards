// Subtle, professional energy bolts scattered across the hero background.
// Inspired by Cloak's understated, technical aesthetic.
const BOLTS = [
  { top: "8%", left: "6%", size: 14, delay: "0s", duration: "4.2s", rotate: -15, opacity: 0.35 },
  { top: "18%", left: "82%", size: 10, delay: "1.1s", duration: "3.6s", rotate: 20, opacity: 0.3 },
  { top: "32%", left: "14%", size: 12, delay: "2.4s", duration: "4.8s", rotate: 10, opacity: 0.28 },
  { top: "44%", left: "92%", size: 16, delay: "0.6s", duration: "5.1s", rotate: -25, opacity: 0.32 },
  { top: "58%", left: "4%", size: 11, delay: "3.2s", duration: "4.4s", rotate: 30, opacity: 0.26 },
  { top: "68%", left: "76%", size: 13, delay: "1.8s", duration: "3.9s", rotate: -10, opacity: 0.3 },
  { top: "78%", left: "22%", size: 9, delay: "2.9s", duration: "4.6s", rotate: 18, opacity: 0.24 },
  { top: "12%", left: "48%", size: 10, delay: "3.6s", duration: "5.3s", rotate: -5, opacity: 0.22 },
  { top: "85%", left: "58%", size: 12, delay: "0.9s", duration: "4.1s", rotate: 22, opacity: 0.28 },
  { top: "26%", left: "62%", size: 8, delay: "2.2s", duration: "3.7s", rotate: -20, opacity: 0.2 },
  { top: "52%", left: "38%", size: 11, delay: "4.0s", duration: "4.9s", rotate: 12, opacity: 0.24 },
  { top: "72%", left: "44%", size: 9, delay: "1.5s", duration: "4.3s", rotate: -28, opacity: 0.22 },
];

const EnergyBolts = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
    >
      {BOLTS.map((b, i) => (
        <svg
          key={i}
          width={b.size}
          height={b.size * 1.6}
          viewBox="0 0 10 16"
          className="absolute animate-spark"
          style={{
            top: b.top,
            left: b.left,
            transform: `rotate(${b.rotate}deg)`,
            animationDelay: b.delay,
            animationDuration: b.duration,
            opacity: b.opacity,
            color: "hsl(var(--primary))",
            filter: "drop-shadow(0 0 4px hsl(var(--primary) / 0.6))",
          }}
        >
          <path
            d="M6 0L0 9h4l-2 7 8-10H6l2-6z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.3"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
};

export default EnergyBolts;
