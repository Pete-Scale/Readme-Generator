// function to generate markdown for README
const generateMarkdown = (answers) => {
  const { title, description, installation, usage, license, credits, tests, github, email } = answers
  return `# ${title}
          ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
          <br>
          ## Description
          ${description}
          ---
          ## Table of Contents

          [Description](#description)

          [Installation](#installation)

          [Usage](#usage)

          [License](#license)

          [Credits](#credits)

          [Tests](#tests)

          [Questions](#questions)
          ---


  `;
}

module.exports = generateMarkdown;
