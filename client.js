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

function newEmployee(firstName, lastName, empNumber, jobTitle, salary){
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
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeNumber = $('#empNumber').val();
    let jobTitle = $('#jobTitle').val();
    let salary = parseInt($('#salary').val());
    console.log('adding employee');

    newEmployee(firstName, lastName, employeeNumber, jobTitle, salary);
    appendEmployee();
    calculateCost();
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
        $('#employeeTable').append(
        `<tr> 
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.empNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>$${employee.salary}</td>
            <td><button class="deleteBtn">DELETE</button></td>
        </tr>`
        )
        console.log(employee.firstName);
    }

    //this function will append the employee with
    //all the inormation
}

function calculateCost(){
    let yearlyExpense = 0;
    for(let i=0; i<employeeInventory.length; i++){
        console.log(employeeInventory[i]);
        console.log(employeeInventory[i].salary);
        yearlyExpense = yearlyExpense + employeeInventory[i].salary;
        console.log(yearlyExpense);
    }
    monthlyExpense = yearlyExpense/12;
    console.log(monthlyExpense);
    $('#monthlyExpense').empty() 
    $('ul').append('<ul>'+monthlyExpense+ '</ul>') 
    return monthlyExpense;

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