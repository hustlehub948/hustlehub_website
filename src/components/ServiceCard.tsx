type Props = { 
  icon: string; 
  title: string; 
  desc: string; 
};

export default function ServiceCard({ icon, title, desc }: Props) {
  return (
    <div className="rounded-2xl backdrop-blur-md bg-white/30 border border-white/20 shadow-lg p-5 transition hover:-translate-y-1 hover:shadow-xl">
      {/* Icon */}
      <div
        className="w-[42px] h-[42px] rounded-lg grid place-items-center text-white font-extrabold mb-3"
        style={{ backgroundImage: "linear-gradient(90deg, #3A8DFF, #6C63FF)" }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-1 text-lg font-semibold text-hhDark">{title}</h3>

      {/* Description */}
      <p className="text-sm text-hhDark/70">{desc}</p>
    </div>
  );
}
