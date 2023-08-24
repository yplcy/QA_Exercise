// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
const allureReportHistory = 'allure-report/history';
const allureResultsHistory = 'allure-results/history';

fs.pathExists(allureReportHistory).then(exists => {
  if (exists) {
    fs.copy(allureReportHistory, allureResultsHistory)
      .then(() => console.log('History copied'))
      .catch(err => console.error(err));
  } else {
    console.log('No history to copy');
  }
});
