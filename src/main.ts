import './style.css';
import sum from './sum';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = sum(1,2,3).toString();
