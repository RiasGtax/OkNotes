import { useState, useRef, useEffect } from 'react';
import Toolbar from './Toolbar';
import './TextEditor.css';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';

// Try to assign vfs from different possible locations in the imported object
if (pdfFonts && pdfFonts.pdfMake && pdfFonts.pdfMake.vfs) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
} else if (pdfFonts && pdfFonts.vfs) {
    pdfMake.vfs = pdfFonts.vfs;
}



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



    const htmlToPdfmakeDefinition = (html) => {
        const ret = htmlToPdfmake(html);
        return ret;
    };

    const getFormattedDateTime = () => {
        const now = new Date();

        const dd = String(now.getDate()).padStart(2, '0');
        const mm = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const yyyy = now.getFullYear();

        const hh = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        const ss = String(now.getSeconds()).padStart(2, '0');

        return `${dd}-${mm}-${yyyy}-${hh}-${min}-${ss}`;
    }

    const exportToPdf = () => {
        const html = editorRef.current?.innerHTML;
        const content = htmlToPdfmakeDefinition(html);
        const docDefinition = {
            content: content
        };
        pdfMake.createPdf(docDefinition).download(getFormattedDateTime() + '.pdf');
    }

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
                exportToPdf={exportToPdf}
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
