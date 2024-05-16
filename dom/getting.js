const cheerio = require('cheerio');
const fs = require('fs');

const styless = function() {
    // HTMLファイルを読み込む
    const html = fs.readFileSync('../index.html', 'utf-8');

    // cheerioを使用してHTMLをパースする
    const $ = cheerio.load(html);

    // HTML内の全ての要素のクラスを取得し、変数に格納する
    const allClasses = [];

    $('*').each(function() {
        const classes = $(this).attr('class');
        if (classes) {
            const classList = classes.split(' ');
            classList.forEach(className => {
                if (!allClasses.includes(className)) {
                    allClasses.push(className);
                }
            });
        }
    });

    return allClasses;
};

module.exports = styless;

