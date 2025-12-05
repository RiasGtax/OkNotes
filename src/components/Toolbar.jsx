import './Toolbar.css';

function Toolbar({ exportToPdf, isBold, isItalic, isUnderline, alignment, onBold, onItalic, onUnderline, onAlign }) {
    return (
        <div className="toolbar-container">
            <button
                className="toolbar-btn export-btn glass"
                onClick={exportToPdf}
                title="Export to PDF"
                aria-label="Export to PDF"
            >
                <span className="toolbar-btn-text">Export to PDF</span>
            </button>

            <div className="toolbar glass">
                <div className="toolbar-group">
                    <button
                        className={`toolbar-btn ${isBold ? 'active' : ''}`}
                        onClick={onBold}
                        title="Bold (Ctrl+B)"
                        aria-label="Toggle bold"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                        </svg>
                    </button>

                    <button
                        className={`toolbar-btn ${isItalic ? 'active' : ''}`}
                        onClick={onItalic}
                        title="Italic (Ctrl+I)"
                        aria-label="Toggle italic"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="4" x2="10" y2="4"></line>
                            <line x1="14" y1="20" x2="5" y2="20"></line>
                            <line x1="15" y1="4" x2="9" y2="20"></line>
                        </svg>
                    </button>

                    <button
                        className={`toolbar-btn ${isUnderline ? 'active' : ''}`}
                        onClick={onUnderline}
                        title="Underline (Ctrl+U)"
                        aria-label="Toggle underline"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
                            <line x1="4" y1="21" x2="20" y2="21"></line>
                        </svg>
                    </button>
                </div>

                <div className="toolbar-divider"></div>

                <div className="toolbar-group">
                    <button
                        className={`toolbar-btn ${alignment === 'left' ? 'active' : ''}`}
                        onClick={() => onAlign('left')}
                        title="Align Left"
                        aria-label="Align text left"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="17" y1="10" x2="3" y2="10"></line>
                            <line x1="21" y1="6" x2="3" y2="6"></line>
                            <line x1="21" y1="14" x2="3" y2="14"></line>
                            <line x1="17" y1="18" x2="3" y2="18"></line>
                        </svg>
                    </button>

                    <button
                        className={`toolbar-btn ${alignment === 'center' ? 'active' : ''}`}
                        onClick={() => onAlign('center')}
                        title="Align Center"
                        aria-label="Align text center"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="10" x2="6" y2="10"></line>
                            <line x1="21" y1="6" x2="3" y2="6"></line>
                            <line x1="21" y1="14" x2="3" y2="14"></line>
                            <line x1="18" y1="18" x2="6" y2="18"></line>
                        </svg>
                    </button>

                    <button
                        className={`toolbar-btn ${alignment === 'right' ? 'active' : ''}`}
                        onClick={() => onAlign('right')}
                        title="Align Right"
                        aria-label="Align text right"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="21" y1="10" x2="7" y2="10"></line>
                            <line x1="21" y1="6" x2="3" y2="6"></line>
                            <line x1="21" y1="14" x2="3" y2="14"></line>
                            <line x1="21" y1="18" x2="7" y2="18"></line>
                        </svg>
                    </button>

                    <button
                        className={`toolbar-btn ${alignment === 'justify' ? 'active' : ''}`}
                        onClick={() => onAlign('justify')}
                        title="Justify"
                        aria-label="Justify text"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="21" y1="10" x2="3" y2="10"></line>
                            <line x1="21" y1="6" x2="3" y2="6"></line>
                            <line x1="21" y1="14" x2="3" y2="14"></line>
                            <line x1="21" y1="18" x2="3" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;
