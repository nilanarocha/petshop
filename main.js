const clientInformation = [
  {
    cpf: 66809433023,
    name: 'Jairo',
  },
];

const table = document.querySelector('[data-content-table]');

const displayClient = (cpf, name) => {
  const line = document.createElement('tr');
  const lineContent = `
    <td>${cpf}</td>
    <td>${name}</td>

  `;
  line.innerHTML = lineContent;
  return line;
};

clientInformation.forEach((index) => {
  table.appendChild(displayClient(index.cpf, index.name));
});
