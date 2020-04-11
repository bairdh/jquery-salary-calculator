

//[x]make files
//[x]make input
//[x]make table
//[x]collect input info
//[x]clear inputs
//[x]add info to table
//[x]calculate monthly costs
//[x]add monthly cost to DOM
//[x]monthly cost not over $20,000
//[]create delete button - no need to remove salary

//------- STRETCH GOAL -------------

//add Styling
// update total spent when employee is removed
//  -.text() GETTER
//  -.data()


console.log("I work!");

$(document).ready(readyNow);


function readyNow(){
    console.log('Ready Meow!');
    
    $('#addEmployeeBtn').on('click', getEmployeeInfo);
}

let employeeList = [];

function getEmployeeInfo()
{
    let first = $('#firstNameInput');
    let last = $('#lastNameInput');
    let id = $('#idInput');
    let title = $('#titleInput');
    let salary = $('#annualSalaryInput');

    let employee = {
        firstName: first.val(),
        lastName: last.val(),
        id: id.val(),
        title: title.val(),
        annualSalary: salary.val()

    };

    employeeList.push(employee);

    console.log(employeeList);

    first.val('');
    last.val('');
    id.val('');
    title.val('');
    salary.val('');
    
    addToTable();
    calculateMonthlyCost();
    
}

function addToTable(){
    $('td').remove();

    for (let employee of employeeList){
        $('#tableBody').append(`
        <tr class="employeeTr">
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
        </tr>`)

    }
}

function calculateMonthlyCost(){
    let total = 0;
    for(let person of employeeList){
        let monthly = person.annualSalary / 12;
        total = total + monthly;
    }

    let textTotal = total.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    $('#totalSpan').text(textTotal);

    if(total > 20000){
        $('#totalSpan').addClass('redText');

    }
}