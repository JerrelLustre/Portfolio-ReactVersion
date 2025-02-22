import { CodeBlock } from "react-code-block";

export default function Codeblock({ code }) {

  return (
    <CodeBlock code={code} language="js">
    <CodeBlock.Code className="bg-black text-sm overflow-scroll my-2 md:my-0">
    <CodeBlock.LineContent>
      <CodeBlock.Token />
    </CodeBlock.LineContent>
    </CodeBlock.Code >
  </CodeBlock>
  );
}
