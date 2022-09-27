function genReadMe(data){
    return `
        # ${data.title}
        ${data.license}

        ### Description

        ${data.description}

        ### Table of Contents
        * Installation

        ## Installation
        Run the following commands to install:
        \`\`\`
        ${data.installation}
        \`\`\`

        ## Usage
        ${data.usage}

        ## Contributors
        ${data.contributors}

        ## Test
        ${data.test}

        ## A poignant Question
        ${data.question}


    `
}

module.exports = genReadMe;