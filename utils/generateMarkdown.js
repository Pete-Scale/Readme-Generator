// function to generate markdown for README
const generateMarkdown = (answers) => {
  const { title, description, installation, usage, license, credits, tests, github, email } = answers
  return `# ${title}

  `;
}

module.exports = generateMarkdown;
