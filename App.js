
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';




const parent = React.createElement("div",
{id:"parent"},[
    React.createElement("div",{id:"child"},
[
    React.createElement("h1",{ }, " I am Rakesh  tag"),
    React.createElement("h2",{ }, " I am Engineering Student tag")
]
),
React.createElement("div",{id:"child2"},
[
    React.createElement("h1",{ }, " I am h1 tag"),
    React.createElement("h2",{ }, " I am h1 tag")
]
)
]

);

const  heading =  React.createElement("h1", {id:"heading"}, "Hello World From React!");
console.log(parent); //object


         const root= ReactDOM.createRoot(document.getElementById("root"));
         root.render(parent);