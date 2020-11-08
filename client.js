console.log('js sourced');

$( document ).ready( handleReady );

function handleReady() {
    console.log('jQuery has joined the party');
    $('#submit').on('click', addEmployee);

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
    //console.log(first-name, last-name, emp-number, job-title, salary);
    const employee ={
    
        firstName:firstName,
        lastName:lastName,
        employeeNumber:empNumber,
        jobTitle:jobTitle,
        salary:salary

    }
    employeeInventory.push(employee)
    return true;
}

function addEmployee(){
    //take input from dom and then reset inputs to clear them
    let firstName = $('firstName').val();
    let lastName = $('lastName').val();
    let employeeNumber = $('empNumber').val();
    let jobTitle = $('jobTitle').val();
    let salary = parseInt($('salary').val());
    console.log('adding employee');

    newEmployee(firstName, lastName, employeeNumber, jobTitle, salary);
    //calling function to trigger push to array
}

function appendEmployee(){
    console.log(employeeInventory);
    $('#employee-table').empty();
    for(let employee of employee){
        $('#employee-table').append(
        `<tr> 
            <td>${employee.first-name}</td>
            <td>${employee.last-name}</td>
            <td>${employee.emp-number}</td>
            <td>${employee.job-title}</td>
            <td>$${employee.salary}</td>
            <td><button class="deleteBtn">DELETE</button></td>
        </tr>`
        )
    }

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