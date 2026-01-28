# Deployment Instructions

## Deploy to GitHub Pages

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the deployment command:
   ```bash
   npm run deploy
   ```

3. Configure GitHub Pages (first time only):
   - Go to repository Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select `gh-pages` branch and `/ (root)` folder
   - Click Save

4. Your site will be available at: https://susannahsoon5.github.io/ai-disrupt-website/

## Notes
- The first deployment may take a few minutes to appear
- Make sure all internal links use Next.js `<Link>` component for proper base path handling
