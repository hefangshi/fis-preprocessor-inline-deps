var reg = /<link\s+([\s\S]*?["'\s\w\/\-])(?:>|$)|<!--inline\[([^\]]+)\]-->|<!--(?!\[)([\s\S]*?)(-->|$)/ig;
var hrefReg = /\shref\s*=\s*('|")(.*)[?&]__inline(?:[=&]|\1)/i;
var importReg = /\srel\s*=\s*('|")import\1/i;

module.exports = function (content, file, conf) {
    if (file.isHtmlLike) {
        addInlineDeps(content, file);
    }
    return content;
};

function addInlineDeps(content, file) {
    var result;
    while ((result = reg.exec(content))) {
        if (result[1]) {
            if(importReg.test(result[0])){
                var match = result[0].match(hrefReg);
                if (match) {
                    info = fis.uri.getId(match[2], file.dirname);
                    file.addRequire(info.id);
                }
            }
        }
    }
}