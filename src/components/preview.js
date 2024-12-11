import React, { useState } from "react";
import { createRoot } from "react-dom/client";
// import "https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js";

const Preview = () => {
  const initialMarkdown = `# Markdown Previewer
  
## Sub-heading
### Smaller heading

[This is a link](https://www.example.com)

\`Inline code\`

\`\`\`
Code block example
const sum = (a, b) => a + b;
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote example

![Image](https://via.placeholder.com/150)

**Bold text**
`;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const renderMarkdown = () => {
    return { __html: marked.parse(markdown, { breaks: true }) };
  };

  return (
    <div>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        style={{ width: "75%", height: "200px", marginBottom: "20px" }}
      />
      <div
        id="preview"
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          backgroundColor: "#f9f9f9",
        }}
        dangerouslySetInnerHTML={renderMarkdown()}
      />
    </div>
  );
};

export default Preview;