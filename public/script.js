let currentNoteId = null;

async function fetchNote(id) {
  const res = await fetch(`/api?action=getNote&id=${id}`);
  return await res.json();
}

async function loadLatestNote() {
  const data = await fetch('/api?action=latestNote').then(r=>r.json());
  if(data.success){
    currentNoteId = data.note.id;
    document.getElementById('noteTitle').innerText = data.note.name;
    renderCustomers(data.note.customers || []);
  }
}

function renderCustomers(customers){
  const tbody = document.querySelector('#customerTable tbody');
  tbody.innerHTML = '';
  let totalTagihan=0, totalDiterima=0, totalSisa=0;
  customers.forEach((c,i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i+1}</td>
      <td>${c.name}</td>
      <td>${c.phone}</td>
      <td>${c.total}</td>
      <td>${c.paid}</td>
      <td>${c.remaining}</td>
      <td><button onclick="editCustomer(${i})">✏️</button></td>
      <td><button onclick="deleteCustomer(${i})">🗑️</button></td>
    `;
    tbody.appendChild(tr);
    totalTagihan+=c.total;
    totalDiterima+=c.paid;
    totalSisa+=c.remaining;
  });
  document.getElementById('totalTagihan').innerText = totalTagihan;
  document.getElementById('totalDiterima').innerText = totalDiterima;
  document.getElementById('totalSisa').innerText = totalSisa;
}

// Load on start
loadLatestNote();
