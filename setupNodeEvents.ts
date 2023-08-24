import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const path = require('path');

// import allureWriter from '@shelex/cypress-allure-plugin/writer';

export async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  if(config.hasOwnProperty('env') &&  config.env.hasOwnProperty('baseUrl')){
    config.baseUrl = config.env.baseUrl;
    console.log('baseurl is '+config.baseUrl);
  }
  
//  on("file:preprocessor",
 //   browserify(config, { typescript: require.resolve("typescript") })
 // );

  on(
    'file:preprocessor',
    webpackPreprocessor({
      webpackOptions: {
        resolve: {
          extensions: [ '.ts', '.js' ],
          alias: {
            page_objects: path.resolve(__dirname, 'cypress/page_objects/')
          }
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [ /node_modules/ ],
              use: [
                {
                  loader: 'ts-loader',
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );
  
  allureWriter(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
