import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Modal } from "@precooked/react-modal";

interface MarkdownPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    markdownContent: string; // Prop para recibir el contenido Markdown
    backdropStyles?: React.CSSProperties;
    windowStyles?: React.CSSProperties;
    closeButtonStyles?: React.CSSProperties;
    closeIcon?: string;
    closeIconPaths?: any[];
    closeIconSize?: number;
    zIndex?: number;
}

const MarkdownPreviewModal: React.FC<MarkdownPreviewModalProps> = ({
    isOpen,
    onClose,
    markdownContent,
    backdropStyles,
    windowStyles,
    closeButtonStyles,
    closeIcon,
    closeIconPaths,
    closeIconSize,
    zIndex = 999
}) => {
    useEffect(() => {
        console.log(isOpen)
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            backdropStyles={backdropStyles}
            windowStyles={windowStyles}
            closeButtonStyles={closeButtonStyles}
            closeIcon={closeIcon}
            closeIconPaths={closeIconPaths}
            closeIconSize={closeIconSize}
            zIndex={zIndex}
        >
            <div style={{ padding: "20px", maxHeight: "70vh", overflowY: "auto" }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </Modal>
    );
};

export default MarkdownPreviewModal;