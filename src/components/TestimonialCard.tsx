type Props = { 
  quote: string; 
  author: string; 
};

export default function TestimonialCard({ quote, author }: Props) {
  return (
    <div className="rounded-2xl backdrop-blur-md bg-white/30 border border-white/20 shadow-lg p-6 transition hover:-translate-y-1 hover:shadow-xl">
      {/* Quote */}
      <p className="italic text-hhDark/80 mb-3">&ldquo;{quote}&rdquo;</p>

      {/* Author */}
      <p className="text-sm font-semibold text-hhDark">— {author}</p>
    </div>
  );
}
