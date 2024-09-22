import './app.css'
import App from './App.svelte'
import AddSpending from "./components/AddSpending.svelte"
import Home from "./components/Home.svelte"

export const routes = [
  { path: '/', component: Home },
  { path: '/add-spending', component: AddSpending },
];

const app = new App({
  target: document.getElementById('app')!,
  props: { routes },
})

export default app
