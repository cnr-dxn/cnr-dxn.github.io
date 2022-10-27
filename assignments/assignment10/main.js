const sam = {
    'first_name': 'Sam',
    'department': 'Tech',
    'designation': 'Manager',
    'salary': 40000.00,
    'raise_elligible': true
}
const mary = {
    'first_name': 'Mary',
    'department': 'Finance',
    'designation': 'Trainee',
    'salary': 18500.00,
    'raise_elligible': true
}
const bill = {
    'first_name': 'Bill',
    'department': 'HR',
    'designation': 'Executive',
    'salary': 21200.00,
    'raise_elligible': false
}
console.log("Problem 1: ", sam, mary, bill)


const employees = [sam, mary, bill];
const company = {
        'companyName': 'Tech Stars',
        'website': 'www.techstars.site',
        'employees': employees
}
console.log("Problem 2: ", company)

const employees_anna = [];
for (let i = 0; i < employees.length; i++){
    let curr_employee = Object.assign({}, employees[i]);
    employees_anna.push(curr_employee);
}
const anna = {
    'first_name': 'Anna',
    'department': 'Tech',
    'designation': 'Executive',
    'salary': 26500.00,
    'raise_elligible': false
}
employees_anna.push(anna)
console.log("Problem 3: ", employees_anna)

const employees_raised = [];
for (let i = 0; i < employees_anna.length; i++){
    let curr_employee = Object.assign({}, employees_anna[i]);
    employees_raised.push(curr_employee);
}
for (let i = 0; i < employees_raised.length; i++) {
    if (employees_raised[i]['raise_elligible']) {
        employees_raised[i]['salary'] = (employees_raised[i]['salary']) * 1.1
    }
}
console.log("Problem 4: ", employees_raised)

const employees_raised_wfh = [];
for (let i = 0; i < employees_raised.length; i++){
    let curr_employee = Object.assign({}, employees_raised[i]);
    employees_raised_wfh.push(curr_employee);
}
for (let i = 0; i < employees_raised_wfh.length; i++) {
    if ((employees_raised_wfh[i]['first_name'] == 'Anna') || (employees_raised_wfh[i]['first_name'] == 'Sam')) {
        employees_raised_wfh[i]['wfh'] = true;
    } else {
        employees_raised_wfh[i]['wfh'] = false;
    }
}
console.log("Problem 5: ", employees_raised_wfh)
