const employees = [
  {
    id: 1,
    name: "shubham",
    address: "Pune",
    salary: 2000,
  },
  {
    id: 2,
    name: "akshay",
    address: "Mumbai",
    salary: 5000,
  },
  {
    id: 3,
    name: "Abhijeet",
    address: "Thane",
    salary: 3000,
  },
  {
    id: 4,
    name: "Rohit",
    address: "Pune",
    salary: 4000,
  },
  {
    id: 5,
    name: "Abhi",
    address: "Mumbai",
    salary: 4000,
  },
  {
    id: 6,
    name: "Abhi",
    address: "Thane",
    salary: 4000,
  },
  {
    id: 7,
    name: "Abhi",
    address: "Dubai",
    salary: 4000,
  },
  {
    id: 7,
    name: "Abhi",
    address: "Dubai",
    salary: 4000,
  },
];

function getTableData() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  const rows = employees.map((employee) => {
    return `<tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.address}</td>
                <td>${employee.salary}</td>
            </tr>`;
  });
  tbody.innerHTML = rows.join("");
}

getTableData();

function showOnCity(searchAddress) {
  const tbodyAllRows = document.querySelectorAll("#tbody tr td:nth-child(3)");

  tbodyAllRows.forEach((tbodyAllRow) => {
    if (searchAddress == tbodyAllRow.innerText) {
      tbodyAllRow.parentElement.style.display = "block";
    } else {
      tbodyAllRow.parentElement.style.display = "none";
    }
  });
}
