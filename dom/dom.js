const styless = require('./getting.js');

const classList = styless();

var containing = [];
var number = [];
var child = [];

for (let i = 0; i < classList.length; i++) {
    if (classList[i].includes("[")) {
        containing.push(classList[i]);
    } else if (classList[i].includes("|")) {
        number.push(classList[i]);
    } else {
        child.push(classList[i]);
    }
}

function propaty({ containing }) {
    var conteiner = [];
    for (let i = 0; i < containing.length; i++) {
        let startIndex = containing[i].indexOf("[");
        let endIndex = containing[i].indexOf("]");
        if (startIndex !== -1 && endIndex !== -1) {
            let beforeBracket = containing[i].slice(0, startIndex);
            let insideBracket = containing[i].slice(startIndex + 1, endIndex);
            let insideBracketList = insideBracket.split(',').map(item => item.trim());

            conteiner.push({
                className: containing[i],
                beforeBracket: beforeBracket,
                insideBracket: insideBracketList
            });
        }
    }
    return conteiner;
}

function numbers({ number }) {
    var conteiner = [];
    for (let i = 0; i < number.length; i++) {
        let index = number[i].indexOf("|");
        if (index !== -1) {
            let beforePipe = number[i].slice(0, index);
            let afterPipe = number[i].slice(index + 1);
            let afterPipeList = afterPipe.split(',').map(item => item.trim());

            conteiner.push({
                className: number[i],
                beforePipe: beforePipe,
                afterPipe: afterPipeList
            });
        }
    }
    return conteiner;
}

module.exports = {
    propaty: propaty({ containing }),
    numbers: numbers({ number }),
    child: child
};
