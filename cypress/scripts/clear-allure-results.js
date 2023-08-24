// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
const allureResultsDir = './allure-results/';

fs.pathExists(allureResultsDir).then(exists => {
  if (exists) {
    const regex = /.-result.json$|.-container.json$|.-attachment.png$/;
    fs.readdirSync(allureResultsDir)
      .filter(f => regex.test(f))
      .map(f => fs.unlinkSync(allureResultsDir + f));
  }
});
