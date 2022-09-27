// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)



function genReadMe(data){
   // when client chooses MIT then MIT badge is attached. when client chooses Apache, Apache badge is attached
   if (data.license === 'MIT'){
    data.license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
   } else {
    data.license = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
   };
return `
# ${data.title}
# ${data.license} 

### Description

${data.description}

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation
Run the following commands to install:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contributors
${data.contributing}

## Test
${data.test}

## Questions
${data.email}
${data.github}


`
}

module.exports = genReadMe;