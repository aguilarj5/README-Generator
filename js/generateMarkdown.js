//returns badge URL
function renderLicenseBadge(license) {
  let badgeURL = '';

  if(license === 'Apache'){
    badgeURL = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    return badgeURL; 
  } else if(license === 'GNU') {
    badgeURL = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    return badgeURL;
  } else return badgeURL = 'https://img.shields.io/aur/license/c';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

//returns notice of which license was chosen
function renderLicenseSection(license) {
  let licenseTxt = '';

  if(license === 'Apache'){
    licenseTxt = 'Project protected under Apache License';
    return licenseTxt; 
  } else if (license === 'GNU') {
    licenseTxt = 'Project protected under GNU License';

    return licenseTxt;
  } else return licenseTxt = 'Project protected under MIT License';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(license) {

  return `# ${license} License

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};