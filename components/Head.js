import * as React from 'react';
import Head from 'next/head';
var core_scss = require('../scss/core.scss');
export default function () { return (React.createElement("div", null,
    React.createElement(Head, null,
        React.createElement("title", null, "My styled page"),
        React.createElement("meta", { charSet: "utf-8" }),
        React.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
        React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
        React.createElement("link", { href: "static/bootstrap/css/bootstrap.min.css", rel: "stylesheet" }),
        React.createElement("style", null, core_scss)))); };
//# sourceMappingURL=Head.js.map