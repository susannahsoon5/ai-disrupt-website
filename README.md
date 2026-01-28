# AI Community Site

Welcome to the AI Community Site! This project is built using Next.js, TypeScript, and Tailwind CSS to create a modern marketing and community website for an AI community.

## Features

- **Responsive Design**: The site is fully responsive and optimized for various devices.
- **Dynamic Pages**: Includes pages for About, Community, Events, Resources, and more.
- **Reusable Components**: Utilizes reusable UI components for consistency and maintainability.
- **Custom Hooks**: Implements custom hooks for managing authentication and state.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd ai-community-site
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` to view the application.

## Project Structure

The project is organized as follows:

```
ai-community-site
├── app                # Main application files
│   ├── layout.tsx    # Main layout with Navbar and Footer
│   ├── globals.css    # Global styles
│   ├── page.tsx      # Home page
│   ├── about         # About page
│   ├── community      # Community information
│   ├── events         # Events listing
│   ├── blog           # Blog section
│   ├── resources      # Learning resources
│   ├── contact        # Contact page
│   ├── dashboard      # User dashboard
│   └── api            # API routes
├── components         # Reusable components
│   ├── ui            # UI components (Button, Card, etc.)
│   ├── layout        # Layout components (Navbar, Footer)
│   ├── sections      # Section components (Hero, Features, etc.)
│   └── icons         # Icon components
├── hooks              # Custom hooks
├── lib                # Library functions
├── styles             # CSS styles
├── config             # Configuration files
├── data               # Sample data
├── public             # Public assets
├── .eslintrc.json     # ESLint configuration
├── .gitignore         # Git ignore file
├── next.config.js     # Next.js configuration
├── package.json       # Project metadata and dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.