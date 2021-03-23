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
        return this.Result = StatsOperations.Skewness(lst);
    }
    SampleCorrelation(lst1, lst2) {
        return this.Result = StatsOperations.SampleCorrelation(lst1, lst2);
    }
    PopulationCorrelation(lst1, lst2) {
        return this.Result = StatsOperations.PopulationCorrelation(lst1, lst2);
    }
    ZScore(x, xMean, xStdDev) {
        return this.Result = StatsOperations.ZScore(x, xMean, xStdDev);
    }
    MeanDeviation(lst1) {
        return this.Result = StatsOperations.MeanDeviation(lst1);
    }
}

module.exports = Statistics;