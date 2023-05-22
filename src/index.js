import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));
const IMAGES = [
    {
        title: "Fashion",
        images: [...Array(25).keys()].map((i) =>
            (
                require(`./assets/images/fashion/${(i+1).toString().padStart(2, '0')}-min.jpg`)
            ))
    }
    ,
    {
        title: "Milano Fashion Week",
        images: [...Array(30).keys()].map((i) =>{
            return  (
                require(`./assets/images/milanofashionweek/${(i+1).toString().padStart(2, '0')}-min.jpg`)
            )
        })


    },
    {
        title: "Artists",
        images: [...Array(30).keys()].map((i) =>
            (
                require(`./assets/images/artists/${(i+1).toString().padStart(2, '0')}-min.jpg`)
            ))
    }
]

root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {IMAGES};
