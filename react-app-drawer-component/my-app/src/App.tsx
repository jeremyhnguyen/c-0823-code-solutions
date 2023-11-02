import { AppDrawer } from './AppDrawer';

const items = [
  {
    id: 1,
    title: 'About',
  },
  {
    id: 2,
    title: 'Get Started',
  },
  {
    id: 3,
    title: 'Sign In',
  },
];

function App() {
  return <AppDrawer items={items} />;
}

export default App;
