const { child } = require("../dom/dom.js");
const jsonColor = require('./style-data/color.json');
const jsonRound = require('./style-data/round.json');
const jsonSize = require('./style-data/size(h-w-auto).json');
const fs = require('fs');
const path = require('path');

const cssClass = { ...jsonSize, ...jsonColor, ...jsonRound };
let cssString = '';

for (let i = 0; i < child.length; i++) {
    const className = child[i];

    if (cssClass.hasOwnProperty(className)) {
        cssString += `.${className} {\n`;

        const classProperties = cssClass[className];
        for (const property in classProperties) {
            if (classProperties.hasOwnProperty(property)) {
                const value = classProperties[property];
                cssString += `  ${property}: ${value};\n`;
            }
        }

        cssString += `}\n\n`;
    }
}

console.log(cssString);

// CSSをファイルに書き込む
const outputFilePath = path.join(__dirname, 'output.css');
fs.writeFile(outputFilePath, cssString, 'utf8', (err) => {
    if (err) {
        console.error('Error writing CSS file:', err);
    } else {
        console.log('CSS file has been created successfully at', outputFilePath);
    }
});
