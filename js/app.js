const profileCard = document.getElementById('profileCard');
const profileName = document.getElementById('profileName');
const profileProgram = document.getElementById('profileProgram');
const profileYear = document.getElementById('profileYear');
const profileStatus = document.getElementById('profileStatus');
const detailsPanel = document.getElementById('detailsPanel');
const studentIdDisplay = document.getElementById('studentIdDisplay');

const nameInput = document.getElementById('nameInput');
const programSelect = document.getElementById('programSelect');
const yearSelect = document.getElementById('yearSelect');
const statusSelect = document.getElementById('statusSelect');

const updateBtn = document.getElementById('updateBtn');
const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
const themeBtn = document.getElementById('themeBtn');
const resetBtn = document.getElementById('resetBtn');
const formMessage = document.getElementById('formMessage');

const initialData = {
  name: 'Maria Santos',
  program: 'BS Information Technology',
  year: '3rd Year',
  status: 'active',
  studentId: '2026-001'
};

function isValidStudentName(name) {
  const trimmed = name.trim();
  return trimmed.length >= 2;
}

function formatStudentStatus(status) {
  return status === 'active' ? 'Active' : 'Inactive';
}

function setStatus(status) {
  if (!profileCard) return;
  profileCard.classList.remove('active', 'inactive');
  profileCard.classList.add(status);
  profileCard.dataset.status = status;
  if (profileStatus) {
    profileStatus.textContent = formatStudentStatus(status);
  }
}

function updateProfile() {
  formMessage.textContent = '';
  const nameValue = nameInput.value;

  if (!isValidStudentName(nameValue)) {
    formMessage.textContent = 'Student name is required';
    return;
  }

  profileName.textContent = nameValue.trim();
  profileProgram.textContent = programSelect.value;
  profileYear.textContent = yearSelect.value;
  setStatus(statusSelect.value);
}

function toggleDetails() {
  detailsPanel.classList.toggle('hidden');
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function resetProfile() {
  profileName.textContent = initialData.name;
  profileProgram.textContent = initialData.program;
  profileYear.textContent = initialData.year;
  setStatus(initialData.status);
  studentIdDisplay.textContent = `Student ID: ${initialData.studentId}`;

  nameInput.value = '';
  programSelect.value = initialData.program;
  yearSelect.value = initialData.year;
  statusSelect.value = initialData.status;

  detailsPanel.classList.remove('hidden');
  document.body.classList.remove('dark-theme');
  formMessage.textContent = '';
}

updateBtn.addEventListener('click', updateProfile);
toggleDetailsBtn.addEventListener('click', toggleDetails);
themeBtn.addEventListener('click', toggleTheme);
resetBtn.addEventListener('click', resetProfile);

document.addEventListener('DOMContentLoaded', function () {
  profileName.textContent = initialData.name;
  profileProgram.textContent = initialData.program;
  profileYear.textContent = initialData.year;
  setStatus(initialData.status);
  studentIdDisplay.textContent = `Student ID: ${initialData.studentId}`;
});