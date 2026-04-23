// Subtle energy streaks crossing the hero — thin horizontal light beams
// that travel across the screen. Inspired by Cloak's minimal, technical look.
const STREAKS = [
  { top: "12%", delay: "0s", duration: "6s", width: "30%", opacity: 0.5 },
  { top: "24%", delay: "2.4s", duration: "7.5s", width: "22%", opacity: 0.35 },
  { top: "38%", delay: "1.2s", duration: "8s", width: "38%", opacity: 0.45 },
  { top: "52%", delay: "4s", duration: "6.8s", width: "26%", opacity: 0.4 },
  { top: "66%", delay: "0.8s", duration: "9s", width: "34%", opacity: 0.38 },
  { top: "78%", delay: "3.2s", duration: "7s", width: "24%", opacity: 0.32 },
  { top: "88%", delay: "5s", duration: "8.5s", width: "30%", opacity: 0.42 },
];

const EnergyBolts = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
    >
      {STREAKS.map((s, i) => (
        <div
          key={i}
          className="absolute h-px animate-streak"
          style={{
            top: s.top,
            width: s.width,
            opacity: s.opacity,
            animationDelay: s.delay,
            animationDuration: s.duration,
            background:
              "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.9) 50%, transparent 100%)",
            boxShadow: "0 0 8px hsl(var(--primary) / 0.6)",
          }}
        />
      ))}
    </div>
  );
};

export default EnergyBolts;
