/**
 * I will use an Array to contain all metrics in my system.
 * This is because to access any metric randomly in an array
 * is in const time ie. O(1)
 */
var metrics = [
	{
		numberOfActiveCases: 3000,
		numberOfDeaths: 34,
		numberOfRecoveries: 50,
		newCases: 12,
		date: '29/01/2021'
	},{
		numberOfActiveCases: 4000,
		numberOfDeaths: 45,
		numberOfRecoveries: 50,
		newCases: 13,
		date: '29/03/2021'
	},{
		numberOfActiveCases: 3500,
		numberOfDeaths: 34,
		numberOfRecoveries: 50,
		newCases: 300,
		date: '29/01/2021'
	},{
		numberOfActiveCases: 1200,
		numberOfDeaths: 45,
		numberOfRecoveries: 50,
		newCases: 22,
		date: '29/04/2021'
	},{
		numberOfActiveCases: 500,
		numberOfDeaths: 34,
		numberOfRecoveries: 50,
		newCases: 300,
		date: '27/01/2021'
	},{
		numberOfActiveCases: 560,
		numberOfDeaths: 37,
		numberOfRecoveries: 50,
		newCases: 200,
		date: '29/01/2021'
	},{
		numberOfActiveCases: 3000,
		numberOfDeaths: 21,
		numberOfRecoveries: 50,
		newCases: 22,
		date: '29/08/2021'
	}
];

//
function getDailyStats(date) {
  // Find all metrics on a particular date
	return metrics.filter(metric => metric.date === date);
}

function getWeeklyStats(startDate) {
  startDate = getDayMonthYearFromDate(startDate).reverse();
  startDate = new Date(startDate);
  var endDate = new Date(startDate.valueOf() + /*Number of milliseconds in 7days*/604800000);
  return getCumulativeMetric(startDate, endDate);
}

function getMonthlyStats(startDate) {
  startDate = getDayMonthYearFromDate(startDate).reverse();
  startDate = new Date(startDate);
  var endDate = new Date(startDate.valueOf() + /*Number of milliseconds in 30days*/2592000000);
  return getCumulativeMetric(startDate, endDate);
}

function getMetrics(startDate, endDate){
 	let metricsInDateRange = getMetricsInDateRange(startDate, endDate);
	return getCumulativeMetric(startDate, endDate);
}

/*************************************************/
	// Helper functions
/*************************************************/

function getDayMonthYearFromDate(dateString){
  return dateString.toString().split("/");
}


function getCumulativeMetric(startDate, endDate){
  let metricsInDateRange = getMetricsInDateRange(startDate, endDate);
  
	//   cummulative metric data
  var commulatedMetric = {
    numberOfActiveCases: 0,
		numberOfDeaths: 0,
		numberOfRecoveries: 0,
		newCases: 0
  }
  
  if (metricsInDateRange.length === 0) return commulatedMetric
  else if (metricsInDateRange.length === 1) return metricsInDateRange[0];
  
  for(let metric of metricsInDateRange){
     commulatedMetric.numberOfActiveCases += metric.numberOfActiveCases;
     commulatedMetric.numberOfDeaths += metric.numberOfDeaths;
     commulatedMetric.numberOfRecoveries += metric.numberOfRecoveries;
     commulatedMetric.newCases += metric.newCases;
  }
  return commulatedMetric;
}

function getMetricsInDateRange(startDate, endDate){
   // finding milliseconds after Epoch time in 1970
  startDate = getDayMonthYearFromDate(startDate).reverse();
  startDate = new Date(startDate).getTime();
  endDate = getDayMonthYearFromDate(endDate).reverse();
  endDate = new Date(endDate).getTime();
  
//   getting all metrics in date range
 	return metrics.filter(metric => {
	    metric.date = getDayMonthYearFromDate(metric.date).reverse();
	    metric.date = new Date(metric.date);
	    	return metric.date >= startDate && metric.date <= endDate;
	  });
}

// Happy path
// Arrange: Required metric requires calling a specific function
// Act: console logging results returned by function
// Assert: Should accurate result for a given date range

// Error path
// Arrange: Error 
console.log(getMonthlyStats('29/03/2021'));