# OkNotes

A beautiful, modern text editor built with React and Vite, featuring rich text formatting and dual theme support.

![OkNotes](https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.6-646cff?style=flat-square&logo=vite)

## ✨ Features

### 📝 Text Formatting
- **Bold** - Click the toolbar button or press `Ctrl+B`
- **Italic** - Click the toolbar button or press `Ctrl+I`
- **Text Alignment** - Left, Center, Right, and Justify options
- **Keyboard Shortcuts** - Power user support with common shortcuts
- **Real-time State Tracking** - Active formatting indicators in the toolbar

### 🎨 Dual Theme System
- **Light Mode** - Clean white background with vibrant orange/red accents
- **Dark Mode** - Sleek dark background with purple/blue gradients
- **Theme Toggle** - Easy switching with a floating button (top-right corner)
- **Persistent Preferences** - Your theme choice is saved automatically
- **Smooth Transitions** - Seamless color changes between themes

### 💎 Premium Design
- **Glassmorphism Effects** - Modern frosted glass aesthetic
- **Smooth Animations** - Micro-interactions and hover effects
- **Responsive Layout** - Works beautifully on all screen sizes
- **Custom Scrollbar** - Themed to match the current color scheme
- **Accessibility** - ARIA labels, keyboard navigation, and high contrast

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd oknotes
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🎯 Usage

### Text Formatting
1. Click into the editor area
2. Select the text you want to format
3. Use the toolbar buttons or keyboard shortcuts:
   - **Bold**: Click B button or press `Ctrl+B`
   - **Italic**: Click I button or press `Ctrl+I`
   - **Align**: Click alignment buttons (left, center, right, justify)

### Theme Switching
- Click the sun/moon icon in the top-right corner to toggle between light and dark modes
- Your preference is automatically saved and will persist across sessions

## 🛠️ Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS Variables** - For dynamic theming
- **ContentEditable API** - For rich text editing
- **localStorage** - For theme persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── TextEditor.jsx      # Main editor component
│   ├── TextEditor.css      # Editor styles
│   ├── Toolbar.jsx         # Formatting toolbar
│   ├── Toolbar.css         # Toolbar styles
│   ├── ThemeToggle.jsx     # Theme switcher component
│   └── ThemeToggle.css     # Theme toggle styles
├── App.jsx                 # Main app component
├── App.css                 # App layout styles
├── index.css               # Global styles & theme system
└── main.jsx               # App entry point
```

## 🎨 Themes

### Light Mode (Default)
- Background: White with light grays
- Accents: Orange/Red (#ff5722, #ff6f3c, #ff4500)
- Text: Dark for high contrast
- Perfect for daytime use

### Dark Mode
- Background: Deep dark with dark grays
- Accents: Purple/Blue (#8b5cf6, #6366f1, #3b82f6)
- Text: Light for readability
- Perfect for nighttime use

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features Explained

### Theme System
The app uses CSS custom properties (variables) that automatically update based on a `data-theme` attribute on the HTML element. This allows for instant theme switching without page reloads.

### Text Editor
Built using the native `contentEditable` API with `document.execCommand()` for formatting. State management tracks the current formatting to highlight active toolbar buttons.

### Persistence
Theme preferences are stored in `localStorage` and automatically restored on page load.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Acknowledgments

- Icons from Feather Icons
- Fonts from Google Fonts (Inter & Merriweather)
- Built with React and Vite

---

**Made with ❤️ for beautiful writing**
