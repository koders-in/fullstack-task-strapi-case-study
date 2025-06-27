
import "./markdown.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function Markdown({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={`${className} reset-tailwind`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
