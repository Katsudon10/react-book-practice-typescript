import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ListTemplate } from './components/ListTemplate';
import books from './components/books';
import type { Book } from './components/Book';
import HookThemeButton from './components/HookThemeButton';
import MyThemeProvider from './components/MyThemeProvider';
import HookReducerUp from './components/HookReducerUp';
import StateFormUC from './components/StateFormUC';
import QueryPre from './components/QueryPre';
import { QueryClient, QueryClientProvider } from 'react-query';
import QueryBasic from './components/QueryBasic';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const cli = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={cli}>
      <QueryBasic />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
