type Props = { title: string; summary: string; image?: string; };
export default function PortfolioCard({ title, summary }: Props) {
  return (
    <div className="card">
      <div className="rounded-[12px] border border-hhBorder" style={{ aspectRatio: '16/10', background:'linear-gradient(135deg, rgba(58,141,255,.25), rgba(108,99,255,.25))' }} />
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p>{summary}</p>
    </div>
  );
}
