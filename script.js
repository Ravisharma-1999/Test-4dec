let employees = [];
let idCounter = 1;

const form = document.getElementById('employeeForm');
const messageDiv = document.getElementById('message');
const employeeContainer = document.getElementById('employeeContainer');

document.getElementById('addEmployeeBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const profession = document.getElementById('profession').value.trim();
  const age = document.getElementById('age').value.trim();

  if (!name || !profession || !age) {
    showMessage('Please fill all fields!', 'error');
    return;
  }

  const employee = {
    id: idCounter++,
    name,
    profession,
    age: parseInt(age)
  };

  employees.push(employee);
  showMessage('Employee added successfully!', 'success');
  displayEmployees();
  form.reset();
});

function displayEmployees() {
  employeeContainer.innerHTML = '';
  employees.forEach((employee) => {
    const employeeDiv = document.createElement('div');
    employeeDiv.classList.add('employee-item');
    employeeDiv.innerHTML = `
      <span>ID: ${employee.id}, Name: ${employee.name}, Profession: ${employee.profession}, Age: ${employee.age}</span>
      <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
    `;
    employeeContainer.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  showMessage('Employee deleted successfully!', 'success');
  displayEmployees();
}

function showMessage(msg, type) {
  messageDiv.textContent = msg;
  messageDiv.className = `message ${type}`;
  messageDiv.style.display = 'block';
  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 3000);
}
