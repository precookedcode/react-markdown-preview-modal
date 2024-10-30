
# @precooked/react-markdown-preview-modal

![Precooked Logo](https://precookedcode.com/assets/logos/logo-horizontal-dark.svg)

`@precooked/react-markdown-preview-modal` is a modal component for rendering Markdown content in React projects. It supports GitHub Flavored Markdown (GFM) syntax, making it ideal for previews.

## Installation

```bash
npm install @precooked/react-markdown-preview-modal react-markdown remark-gfm
```

## Props

| Prop               | Type                   | Default     | Description                                                                                     |
|--------------------|------------------------|-------------|-------------------------------------------------------------------------------------------------|
| `isOpen`           | `boolean`              | **required** | Controls the modal's visibility.                                                                |
| `onClose`          | `() => void`           | **required** | Callback function to close the modal.                                                           |
| `markdownContent`  | `string`               | **required** | The Markdown content to display inside the modal.                                               |
| `backdropStyles`   | `React.CSSProperties`  | `undefined`  | Custom styles for the modal's backdrop.                                                         |
| `windowStyles`     | `React.CSSProperties`  | `undefined`  | Custom styles for the modal window.                                                             |
| `closeButtonStyles`| `React.CSSProperties`  | `undefined`  | Custom styles for the close button.                                                             |
| `closeIcon`        | `string`               | `"close"`    | Icon for the close button.                                                                      |
| `closeIconPaths`   | `any[]`                | `undefined`  | Custom paths for `DynamicIcon` if needed for the close button.                                  |
| `closeIconSize`    | `number`               | `24`         | Size of the close button icon.                                                                  |

## Example Usage

```tsx
import React, { useState } from 'react';
import MarkdownPreviewModal from '@precooked/react-markdown-preview-modal';

const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const markdownContent = `
# Sample Markdown
This is an example of **Markdown** content with support for GFM.

- List item 1
- List item 2
- [Link](https://example.com)

| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
`;

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Markdown Preview</button>
            <MarkdownPreviewModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                markdownContent={markdownContent}
                backdropStyles={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                windowStyles={{ padding: "20px", maxWidth: "600px" }}
            />
        </div>
    );
};

export default MyComponent;
```

## License

MIT

---

For more information, visit [Precooked](https://precookedcode.com).
