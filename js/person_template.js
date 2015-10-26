// Create template for data
function PersonTemplate(data) {
  return `
  <li>${data.FirstName} is from ${data.Birthplace}</li>

  `;
};

export default PersonTemplate;