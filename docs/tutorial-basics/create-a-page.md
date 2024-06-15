---
sidebar_position: 1
---

# Create a screen

Add **in your App.tsx or Ap.js**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx or tsx or js
const ThemeProvider = require('./Styles/ThemeProvider').default;
const App = () => {
  return (
    <ThemeProvider value={theme}>
     <AllPack />
    </ThemeProvider>
  );
};
export default App;
```

Now your installation in complete

## Happy coding


