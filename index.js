// Write your solution in this fi
// const employeename= 'Sam';
// function updateEmployeeWithKeyAndValue(employee:  { [name: 'Sam',   streetAddress: '11 Broadway', ]});
const employee = {
    name: 'Sam',
}  

function updateEmployeeWithKeyAndValue(
    employee = employee,
    key = 'streetAddress',
    value = '11 Broadway'
){
    // const employeeCopy = Object.assign({}, employee,  { [key]: value });
    // return employeeCopy;
    return {
        ...employee,
        [key]: value
    };
}

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey( employee,key){
    const newObj ={...employee};
    delete newObj[key];
    return employee.slice, 
    newObj;
     
    
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
      delete employee[key];
      return employee;
}
                    



