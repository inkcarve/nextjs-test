import * as React from 'react';
export default function (props) {
    return (React.createElement("div", { className: props.light ? 'light' : '' },
        format(new Date(props.lastUpdate)),
        React.createElement("style", null, "\n        div {\n          padding: 15px;\n          color: #82FA58;\n          display: inline-block;\n          font: 50px menlo, monaco, monospace;\n          background-color: #000;\n        }\n\n        .light {\n          background-color: #999;\n        }\n      ")));
};
var format = function (t) { return pad(t.getUTCHours()) + ":" + pad(t.getUTCMinutes()) + ":" + pad(t.getUTCSeconds()); };
var pad = function (n) { return n < 10 ? "0" + n : n; };
//# sourceMappingURL=Clock.js.map