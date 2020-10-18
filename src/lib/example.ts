
import { DuplicatedKeyUniqueValueHashMap } from "datacell-collections";

main();

function main() {
    const hashmap = new DuplicatedKeyUniqueValueHashMap<string, string>();
    hashmap.put("001", "AAA");
    hashmap.put("001", "BBB");
    hashmap.put("001", "AAA");
    hashmap.put("002", "CCC");
    hashmap.put("003", "CCC");

    for (const iter = hashmap.keySet().iterator(); iter.hasNext();) {
        const k = iter.next();
        hashmap.getValues(k).forEach((elem) => {
            console.log(k + "\t" + elem);
        });
    }

}
