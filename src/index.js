module.exports = function check(str, bracketsConfig) {
    let c = [];
    let arr = str.split("");
    let masOp = [];
    let masCl = [];
    bracketsConfig.forEach(function(item) {
        masOp.push(item[0]);
    });
    bracketsConfig.forEach(function(item) {
        masCl.push(item[1]);
    })
    c.push(arr[0]);
    arr.shift();
    arr.forEach(function(item) {
        if (masOp[masOp.indexOf(item)] === masCl[masCl.indexOf(item)]) {
            if (c[c.length-1] !== item) {
                c.push(item);
            } else {
                c.pop();
            }       
        } else if (masCl.includes(item)) {
            if (masOp[masCl.indexOf(item)] === c[c.length-1]) {
                c.pop();
            } else {
                c.push("err");
                return false;
            }
        } else if (masOp.includes(item)) {
            c.push(item);
        } 
    })
    if (c.length > 0) {
        return false
    } else {
        return true
    }
  }
