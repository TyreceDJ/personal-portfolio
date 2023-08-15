import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// const createScroll = async (): Promise<void> => {
//     // await sleep(4000);

//     document.documentElement.scroll({
//         behavior: 'smooth'
//     });

//     document.body.style.overflowY = 'auto';
//     document.body.style.overflowX = 'hidden';
//     document.body.style.position = 'relative';
// }

// function sleep(ms: number): Promise<void> {
//     return new Promise(resolve => setTimeout(resolve, ms));
// } 

// createScroll();

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
