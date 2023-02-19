const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};
Add a script to your package.json file to run the build command:
json
Copy code
{
  "scripts": {
    "build": "webpack"
  }
}
Run the build command:
Copy code
npm run build
Your built files should now be located in the build folder.



