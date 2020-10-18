"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var datacell_collections_1 = require("datacell-collections");
main();
function main() {
    var hashmap = new datacell_collections_1.DuplicatedKeyUniqueValueHashMap();
    hashmap.put("001", "AAA");
    hashmap.put("001", "BBB");
    hashmap.put("001", "AAA");
    hashmap.put("002", "CCC");
    hashmap.put("003", "CCC");
    var _loop_1 = function (iter) {
        var k = iter.next();
        hashmap.getValues(k).forEach(function (elem) {
            console.log(k + "\t" + elem);
        });
    };
    for (var iter = hashmap.keySet().iterator(); iter.hasNext();) {
        _loop_1(iter);
    }
}
