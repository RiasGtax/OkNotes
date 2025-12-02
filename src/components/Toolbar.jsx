import './Toolbar.css';

function Toolbar({ exportToPdf, isBold, isItalic, alignment, onBold, onItalic, onAlign }) {
    return (
        <div className="toolbar glass">
            <div className="toolbar-group export-group">
                <button
                    className="toolbar-btn export-btn"
                    onClick={exportToPdf}
                    title="Export to PDF"
                    aria-label="Export to PDF"
                >
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--color-accent-primary)" stopOpacity="1" />
                                <stop offset="50%" stopColor="var(--color-accent-secondary)" stopOpacity="1" />
                                <stop offset="100%" stopColor="var(--color-accent-tertiary)" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                        <rect width="32" height="32" rx="6" fill="url(#gradient)" />
                        <path d="M18 6H10C9.46957 6 8.96086 6.21071 8.58579 6.58579C8.21071 6.96086 8 7.46957 8 8V24C8 24.5304 8.21071 25.0391 8.58579 25.4142C8.96086 25.7893 9.46957 26 10 26H22C22.5304 26 23.0391 25.7893 23.4142 25.4142C23.7893 25.0391 24 24.5304 24 24V12L18 6Z" fill="white" />
                        <path d="M18 6V12H24" fill="white" opacity="0.7" />
                        <line x1="20" y1="17" x2="12" y2="17" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="20" y1="21" x2="12" y2="21" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
            <div className="toolbar-divider"></div>
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
    );
}

export default Toolbar;
