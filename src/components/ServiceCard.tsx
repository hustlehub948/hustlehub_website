type Props = { icon: string; title: string; desc: string; };
export default function ServiceCard({ icon, title, desc }: Props) {
  return (
    <div className="card">
      <div className="w-[42px] h-[42px] rounded-lg grid place-items-center text-white font-extrabold mb-2"
           style={{ backgroundImage: 'linear-gradient(90deg, #3A8DFF, #6C63FF)' }}>
        {icon}
      </div>
      <h3 className="mb-1 font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
