module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        snug: {
          "primary": "#7D8CC4",
          "secondary": "#A7C8F2",
          "accent": "#A7C8F2",
          "neutral": "#FAF9F6",
          "base-100": "#FAF9F6",
          "info": "#A7C8F2",
          "success": "#8BC3A3",
          "warning": "#FBBF24",
          "error": "#F87171",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--btn-text-case": "capitalize",
          "--navbar-padding": "0.5rem",
        },
        "snug-dark": {
          "primary": "#7986CB",
          "secondary": "#6F9EDB",
          "accent": "#6F9EDB",
          "neutral": "#2A2E3B",
          "base-100": "#1E1E1E",
          "info": "#6F9EDB",
          "success": "#5EAD91",
          "warning": "#FBBF24",
          "error": "#F87171",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--btn-text-case": "capitalize",
          "--navbar-padding": "0.5rem",
        },
      },
    ],
    darkTheme: "snug-dark",
  },
}

