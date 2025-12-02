import { useState, useRef, useEffect } from 'react';
import Toolbar from './Toolbar';
import './TextEditor.css';

function TextEditor() {
    const editorRef = useRef(null);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [alignment, setAlignment] = useState('left');

    // Update formatting state based on current selection
    const updateFormattingState = () => {
        if (!editorRef.current) return;

        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        // Check bold state
        const bold = document.queryCommandState('bold');
        setIsBold(bold);

        // Check italic state
        const italic = document.queryCommandState('italic');
        setIsItalic(italic);

        // Check alignment
        const alignments = ['left', 'center', 'right', 'justify'];
        for (const align of alignments) {
            if (document.queryCommandState(`justify${align.charAt(0).toUpperCase() + align.slice(1)}`)) {
                setAlignment(align);
                break;
            }
        }
    };

    // Handle formatting commands
    const applyFormat = (command, value = null) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
        updateFormattingState();
    };

    const toggleBold = () => {
        applyFormat('bold');
    };

    const toggleItalic = () => {
        applyFormat('italic');
    };

    const setTextAlignment = (align) => {
        const alignmentCommands = {
            left: 'justifyLeft',
            center: 'justifyCenter',
            right: 'justifyRight',
            justify: 'justifyFull'
        };
        applyFormat(alignmentCommands[align]);
        setAlignment(align);
    };

    // Handle keyboard shortcuts
    const handleKeyDown = (e) => {
        if (e.ctrlKey || e.metaKey) {
            if (e.key === 'b') {
                e.preventDefault();
                toggleBold();
            } else if (e.key === 'i') {
                e.preventDefault();
                toggleItalic();
            }
        }
    };

    // Update state when selection changes
    useEffect(() => {
        const handleSelectionChange = () => {
            if (document.activeElement === editorRef.current) {
                updateFormattingState();
            }
        };

        document.addEventListener('selectionchange', handleSelectionChange);
        return () => {
            document.removeEventListener('selectionchange', handleSelectionChange);
        };
    }, []);

    return (
        <div className="text-editor-container animate-fade-in">
            <Toolbar
                isBold={isBold}
                isItalic={isItalic}
                alignment={alignment}
                onBold={toggleBold}
                onItalic={toggleItalic}
                onAlign={setTextAlignment}
            />

            <div
                ref={editorRef}
                className="editor-content glass"
                contentEditable
                suppressContentEditableWarning
                onKeyDown={handleKeyDown}
                onMouseUp={updateFormattingState}
                onKeyUp={updateFormattingState}
                spellCheck="true"
            >
                <p>Welcome to OkNotes! This is your canvas for ideas.</p>
                <p>Try selecting text and using the formatting tools above, or use keyboard shortcuts:</p>
                <ul>
                    <li><strong>Ctrl+B</strong> for bold</li>
                    <li><strong>Ctrl+I</strong> for italic</li>
                </ul>
                <p>Click the alignment buttons to change text alignment. Start typing to replace this text with your own thoughts!</p>
            </div>
        </div>
    );
}

export default TextEditor;
