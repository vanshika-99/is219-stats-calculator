const Calculator = require('../Calculator');

class StatsOperations extends Calculator{
    static Mean(lst) {
        if(lst.length == 0){
            throw("ERROR: cannot accept empty array.");
        }
        let sum = this.Addition(lst);
        let num = lst.length;
        return this.Division(sum,num);
    }

    //Median
    static Median(lst){
        let num = lst.length;
        lst.sort();

        let half = Math.floor(num/2); //gets the middle index
        if(num % 2){ return lst[half]; } //if length is odd

        return ((lst[half-1]+lst[half])/2.0);
    }

    //Mode
    static Mode(lst) {
        let freq = 0, frequency, values = [];

        lst.forEach(function (num) {
            let foundNum = values.find((el) => {
                return el.num == num
            });

            if (foundNum) {
                foundNum.count++;
                if (foundNum.count > freq) {
                    frequency = num;
                    freq = foundNum;
                }
            } else {
                values.push({num: num, count: 1});
            }
        })
        return frequency;
    }

    //Variance
    static Variance(lst){
        let mean = this.Mean(lst);
        return this.Mean(lst.map(function(num){
            return Math.pow(num-mean, 2);
        }));
    }

    //Standard Deviation
    static StandardDeviation(lst){
        return Math.sqrt(this.Variance(lst));
    }

    //Quartiles
    static Quartile(lst, q){ //q can be 0.25, 0.5, 0.75
        let sorted = lst.sort(function(a,b,){return a-b});
        let idx = (sorted.length -1) * q;
        let base = Math.floor(idx);
        let rest = idx-base;
        if(sorted[base+1] !== undefined){
            return sorted[base] + rest * (sorted[base+1] - sorted[base]);
        }
        else { return sorted[base]; }
    }
    //Skewness
    static Skewness(lst){
        let total = 0;
        for (let i = 0; i < lst.length; i++){
            total += (lst[i] - this.Mean(lst)) *
                (lst[i] - this.Mean(lst)) *
                (lst[i] - this.Mean(lst));
        }

        return total / (lst.length * this.StandardDeviation(lst) *
            this.StandardDeviation(lst) *
            this.StandardDeviation(lst));
    }

    //Sample Correlation
    static SampleCorrelation(lst1, lst2) {
        let num = lst1.length;
        let lst1Mean = StatsOperations.Mean(lst1);
        let lst2Mean = StatsOperations.Mean(lst2);
        let numerator = -1 * num * lst1Mean * lst2Mean;
        for (let i = 0; i < num; i++) {
            numerator += lst1[i] * lst2[i];
        }
        let lst1Denom = (lst1.reduce((a, b) => a + b**2, 0) - num * lst1Mean**2) ** 0.5;
        let lst2Denom = (lst2.reduce((a, b) => a + b**2, 0) - num * lst2Mean**2) ** 0.5;
        return numerator / (lst1Denom * lst2Denom);
    }

    //Population Correlation
    static PopulationCorrelation (lst1, lst2) {
        let num = lst1.length;
        let lst1Mean = StatsOperations.Mean(lst1);
        let lst2Mean = StatsOperations.Mean(lst2);
        let cov = 0;
        for (let i = 0; i < num; i++) {
            cov += (lst1[i] - lst1Mean) * (lst2[i] = lst2Mean) / n;
        }
    }

    //Z-Score
    static ZScore (x, xMean, xStdDev) {
        return (x - xMean) / xStdDev;
    }

    //Mean Deviation/Mean Absolute Deviation;
    static MeanDeviation(lst) {
        let mean = StatsOperations.mean(lst);
        return lst.reduce((a,b) => a + Math.abs(b-mean), 0) / lst.length;
    }

}

module.exports = StatsOperations;