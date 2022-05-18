// Write your solution in this file!

const employee = {
    name: "Dave",
    streetAddress: "110 Broadway"
}
    
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, name: 'Sam', streetAddress: '11 Broadway'}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let copy = {...employee}
    delete copy[key]
    return copy
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee.name
    return employee
}