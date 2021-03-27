class RandomGenerator {

    // -------------1--------------
    static RandomDecimal(min, max){
        return Math.random() * (max - min) + min;
    }
    static RandomInteger(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    // -------------2--------------
    static SeededRandomDec(seed, min, max){
        let rand = require('random-seed').create(seed);
        return rand.floatBetween(min, max);
    }
    static SeededRandomInt(seed, min, max){
        let rand = require('random-seed').create(seed);
        return rand.intBetween(min, max);
    }
    // -------------3--------------
    static SeededRandomListDec(seed, min, max, n){
        let randlist = [];
        let rand = require('random-seed').create(seed);
        for(let i=0; i<n; i++){
            randlist.push(rand.floatBetween(min, max));
        }
        return randlist;
    }
    static SeededRandomListInt(seed, min, max, n){
        let randlist = [];
        let rand = require('random-seed').create(seed);
        for(let i=0; i<n; i++){
            randlist.push(rand.intBetween(min, max));
        }
        return randlist;
    }
    // -------------4--------------
    static RandomOneSelection(list){
        return list[this.RandomInteger(0, list.length - 1)];
    }
    // -------------5--------------
    static SeededRandomOneSelection(list, seed){
        return list[this.SeededRandomInt(seed, 0, list.length - 1)];
    }
    // -------------6--------------
    static RandomMultiSelection(list, n){
        let randlist = [];
        for(let i=0; i<n; i++){
            randlist.push(list[this.RandomInteger(0, list.length - 1)]);
        }
        return randlist;
    }
    // -------------7--------------
    static SeededRandomMultiSelection(list, seed, n){
        let randlist = [];
        let rand = require('random-seed').create(seed);
        for(let i=0; i<n; i++){
            randlist.push(list[rand.intBetween(0, list.length - 1)]);
        }
        return randlist;
    }

}

module.exports = RandomGenerator;