let currentNoteId = null;

async function fetchNote(id){
  const res = await fetch(`/?action=getNote&id=${id}`);
  return await res.json();
}

async function loadLatestNote(){
  const data = await fetch('/?action=latestNote').then(r=>r.json());
  if(data.success){
    const note = data.data[0];
    currentNoteId = note?.id;
    document.getElementById('noteTitle').innerText = note?.nama_catatan || 'Belum ada catatan';
    renderCustomers(note?.customers||[]);
  }
}

function renderCustomers(customers){
  const tbody = document.querySelector('#customerTable tbody');
  tbody.innerHTML='';
  let totalTagihan=0, totalDiterima=0, totalSisa=0;
  customers.forEach((c,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`
      <td>${i+1}</td>
      <td>${c.nama}</td>
      <td>${c.no_hp}</td>
      <td>${c.total_tagihan}</td>
      <td>${c.uang_diterima}</td>
      <td>${c.sisa_tagihan}</td>
      <td><button onclick="editCustomer(${i})">✏️</button></td>
      <td><button onclick="deleteCustomer(${i})">🗑️</button></td>
    `;
    tbody.appendChild(tr);
    totalTagihan+=c.total_tagihan;
    totalDiterima+=c.uang_diterima;
    totalSisa+=c.sisa_tagihan;
  });
  document.getElementById('totalTagihan').innerText = totalTagihan;
  document.getElementById('totalDiterima').innerText = totalDiterima;
  document.getElementById('totalSisa').innerText = totalSisa;
}

loadLatestNote();
