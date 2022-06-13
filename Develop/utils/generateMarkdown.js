// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'other' || 'none') {
    return '';
  }else {
    return `[![Badge](https://img.shields.io/badge-${license}&success)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `[license](https://choosealicense.com/licenses/mit/)`;
  }
  if(license === 'APACHE 2.0'){
    return `[license](https://choosealicense.com/licenses/apache-2.0)`;
  }
  if(license === 'GNU GPL 3.0') {
    return `[license](https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  if(license === 'ISC') {
    return `[license](https://choosealicense.com/licenses/isc/)`;
  }
  else if (license === 'none') {
    return 'No License';
  }
  else {
    return '';
  }



}
'MIT',
'APACHE 2.0',
'GNU GPL 3.0',
'ISC',
'Other',
'none'

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
