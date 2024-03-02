import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import javascript from 'highlight.js/lib/languages/javascript';


hljs.registerLanguage('javascript', javascript);

export default function Codeblock({ code }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="whitespace-pre-wrap">
      <code className="text-xs sm:text-sm lg:text-base">{code}</code>
    </pre>
  );
}
