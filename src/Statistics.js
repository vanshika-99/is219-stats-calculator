const StatsOperations = require('./Operations/StatsOperations');

class Statistics {
    Mean(lst) {
        return this.result = StatsOperations.Mean(lst);
    }
    Median(lst) {
        return this.Result = StatsOperations.Median(lst);
    }
    Mode(lst) {
        return this.Result = StatsOperations.Mode(lst);
    }
    Variance(lst) {
        return this.Result = StatsOperations.Variance(lst);
    }
    StandardDeviation(lst){
        return this.Result = StatsOperations.StandardDeviation(lst);
    }
    Quartile(lst, q) {
        return this.Result = StatsOperations.Quartile(lst, q);
    }
    Skewness(lst) {
        return this.Result = StatsOperations.Skewness(lst)
    }
}

module.exports = Statistics;