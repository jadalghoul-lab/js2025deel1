// Import our custom CSS
import '../scss/styles.scss'

// Import all Bootstrap JS
import * as bootstrap from 'bootstrap'

function addOfenen() {
    const exnaam = document.getElementById('ex1_ex').value;
    const exMinutes = parseInt(document.getElementById('ex1_min').value);
    const totalElement = document.getElementById('ex1_total');
    const listElement = document.getElementById('ex1_list');
    const feed = document.getElementById('ex1_feedback');

    if (!exnaam || !exMinutes || exMinutes <= 0) {
        feed.textContent = "Fout: Vul alle velden";
        feed.classList.add('alert-warning');
        return;
    }

    const newItem = document.createElement('li');
    newItem.className = exMinutes > 30 ? 'list-group-item list-group-item-warning' : 'list-group-item';
    newItem.textContent = `${exnaam} - ${exMinutes} min`;
    listElement.appendChild(newItem);



    let currentTotal = totalElement.textContent;
    currentTotal = exMinutes;
    totalElement.textContent = currentTotal;

    document.getElementById('ex1_ex').value = '';
    document.getElementById('ex1_min').value = '';
   let x =  listElement.children.length;

    if (listElement.children.length === 1) {
        feed.textContent = "Oefeningen toegevoegd.";
        feed.classList.remove('alert-warning', 'alert-danger');
        feed.classList.add('alert-success');
    } else {
        feed.classList.remove('alert-success', 'alert-danger');
        feed.classList.add('alert-info');
    }
}





document.getElementById('ex1_btn').addEventListener('click', addOfenen);
