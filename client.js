console.log('js sourced');

$( document ).ready( handleReady );

function handleReady() {
    console.log('jQuery has joined the party');

    //click handlers for adding and deleting will go here
}

//functions to gather form information
//store the information  to calculate monthly costs
//append information to dom
//clear input fields(reset input val to empty string)
//somewhere to store employees

let employeeInventory = [];
//employee info will be stored here

function newEmployee(){
    //will take data and push into array creating the new employee object
    console.log(first-name, last-name, emp-number, job-title, salary);
    const employee ={
    
        firstName:first-name,
        lastName:last-name,
        employeeNumber:emp-number,
        jobTitle:job-title,
        salary:salary

    }
    inventory.push(employee)
    return true;
}

function addEmployee(){
    //take input from dom and then reset inputs to clear them
}

function appendEmployee(){
    //this function will append the employee with
    //all the inormation
}

function calculateCost(){
    //calculate monthly cost will include if statement
    //to change css class if monthly cost exceed 20,000
}
function toggleClass(){
    //will contain if statement to toggle between
    //red and not red - may not need to be seperate function
}

function deleteRow(){
    //this function will delete an employee when clicked on the employee
    //in base mode it will not affect the total calculation
}