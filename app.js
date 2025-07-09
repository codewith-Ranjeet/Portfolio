// hamburger menu
const burger = document.createElement('div');

burger.className = 'hamburger';
burger.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.navbar').appendChild(burger);
burger.addEventListener('click', () => document.querySelector('.nav-elements').classList.toggle('active'));

// Email pop-up
function openForm() {
    document.getElementById("emailForm").classList.add("active");
}

function closeForm() {
    document.getElementById("emailForm").classList.remove("active");
}
