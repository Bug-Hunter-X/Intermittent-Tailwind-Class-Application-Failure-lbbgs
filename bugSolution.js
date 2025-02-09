```javascript
// Clean build directory before build process.  This resolves the intermittent issue.
//  implementation will vary based on the build tool used (e.g. npm run clean)

//Example using a shell script for cleanup:
// const { exec } = require('child_process');
// exec('rm -rf ./dist', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
// });

//Run Build after the cleanup:
// npm run build
```