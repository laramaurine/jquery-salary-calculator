console.log('js sourced');

$( document ).ready( handleReady );

function handleReady() {
    console.log('jQuery has joined the party');
    $('#submit').on('click', addEmployee);
    $('#employeeTable').on('click', 'button.deleteBtn', deleteRow)
    //click handlers for adding and deleting will go here
}

let employeeInventory = [];
//employee info will be stored here

function newEmployee(){
    //will take data and push into array creating the new employee object 
    console.log(firstName, lastName, empNumber, jobTitle, salary);
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
    appendEmployee();
    console.log($('#firstName').val());
    //calling function to trigger push to array

    $('#firstName').val('');
    $('#lastName').val('');
    $('#empNumber').val('');
    $('#jobTitle').val('');
    $('#salary').val('');
    //clears input fields

}

function appendEmployee(){
    console.log(employeeInventory);
    $('#employeeTable').empty();
    for(let employee of employeeInventory){
        $('#employee-table').append(
        `<tr> 
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.empNumber}</td>
            <td>${employee.jobTitle}</td>
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
    console.log("clicked");
    $(this).closest('tr').remove();

    //this function will delete an employee when clicked on the employee
    //in base mode it will not affect the total calculation
}

//functions to gather form information
//store the information  to calculate monthly costs
//append information to dom
//clear input fields(reset input val to empty string)
//somewhere to store employees