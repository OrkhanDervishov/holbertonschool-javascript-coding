interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London',
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

const tableHeader: HTMLTableSectionElement =
  document.createElement('thead');

const headerRow: HTMLTableRowElement =
  document.createElement('tr');

const th1: HTMLTableCellElement =
  document.createElement('th');

th1.textContent = 'First Name';

const th2: HTMLTableCellElement =
  document.createElement('th');

th2.textContent = 'Location';

headerRow.appendChild(th1);
headerRow.appendChild(th2);

tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

const tableBody: HTMLTableSectionElement =
  document.createElement('tbody');

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement =
    document.createElement('tr');

  const firstNameCell: HTMLTableCellElement =
    document.createElement('td');

  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement =
    document.createElement('td');

  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);

document.body.appendChild(table);