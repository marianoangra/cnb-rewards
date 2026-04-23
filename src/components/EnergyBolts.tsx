// Subtle energy streaks crossing the hero — thin horizontal light beams
// that travel slowly across the screen. Kept very faint to avoid distraction.
const STREAKS = [
  { top: "14%", delay: "0s", duration: "12s", width: "22%", opacity: 0.18 },
  { top: "28%", delay: "4s", duration: "14s", width: "18%", opacity: 0.12 },
  { top: "42%", delay: "2s", duration: "13s", width: "26%", opacity: 0.16 },
  { top: "58%", delay: "6s", duration: "15s", width: "20%", opacity: 0.14 },
  { top: "72%", delay: "1.5s", duration: "16s", width: "24%", opacity: 0.13 },
  { top: "86%", delay: "8s", duration: "13.5s", width: "20%", opacity: 0.15 },
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
              "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.7) 50%, transparent 100%)",
            boxShadow: "0 0 3px hsl(var(--primary) / 0.25)",
          }}
        />
      ))}
    </div>
  );
};

export default EnergyBolts;
