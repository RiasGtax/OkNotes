import TextEditor from './components/TextEditor';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="app">
      <ThemeToggle />
      <header className="app-header">
        <div className="logo-container">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h1 className="app-title">OkNotes</h1>
        </div>
        <p className="app-tagline">Write. Format. Create.</p>
      </header>

      <main className="app-main">
        <TextEditor />
      </main>
    </div>
  );
}

export default App;

