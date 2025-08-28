type Props = { quote: string; author: string; };
export default function TestimonialCard({ quote, author }: Props) {
  return (
    <div className="card">
      <p className="italic">&ldquo;{quote}&rdquo;</p>
      <p>— {author}</p>
    </div>
  );
}
