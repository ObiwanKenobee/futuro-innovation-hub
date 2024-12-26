import { useEffect, useState } from "react";

const stats = [
  { label: "Injury Risks Reduced", value: 85, suffix: "%" },
  { label: "Fan Engagement", value: 98, suffix: "% Satisfaction" },
  { label: "Player Performance Improved", value: 25, prefix: "+", suffix: "%" },
];

export const Stats = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          setCounters((prev) => {
            const next = [...prev];
            next[index] = Math.round((stat.value * i) / steps);
            return next;
          });
        }, stepDuration * i);
      }
    });
  }, []);

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529900748604-07564a03e7a6')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-lg"
            >
              <div className="text-4xl font-bold text-futuro-navy mb-2">
                {stat.prefix}
                {counters[index]}
                {stat.suffix}
              </div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};