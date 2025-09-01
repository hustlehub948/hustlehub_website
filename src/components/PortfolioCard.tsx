type Props = { 
  title: string; 
  summary: string; 
  image?: string; 
};

export default function PortfolioCard({ title, summary, image }: Props) {
  return (
    <div className="rounded-2xl backdrop-blur-md bg-white/30 border border-white/20 shadow-lg p-4 transition hover:-translate-y-1 hover:shadow-xl">
      {/* Image / Placeholder */}
      <div
        className="rounded-[12px] overflow-hidden"
        style={{ aspectRatio: "16/10" }}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-blue-400/30 to-indigo-500/30" />
        )}
      </div>

      {/* Content */}
      <h3 className="mt-3 text-lg font-semibold text-hhDark">{title}</h3>
      <p className="mt-1 text-sm text-hhDark/70">{summary}</p>
    </div>
  );
}
