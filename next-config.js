const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const withNextEnv = nextEnv();
//* what this does is plug this in for us from the .env file
// {
//   env: {
//     HELP_APP_URL=https://frontendmasters.com
//   }
// }

module.exports = withNextEnv();
