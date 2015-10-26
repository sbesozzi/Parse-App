// Create template for data
function PersonTemplate(data) {
  return `
  <li>${data.FirstName} was born in ${data.Birthplace} and is a ${data.Occupation}.</li>

  `;
};

export default PersonTemplate;