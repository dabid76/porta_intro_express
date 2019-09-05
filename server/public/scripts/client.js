$(readyNow); 

function readyNow() {
    $('#submitBtn').on('click', handleSubmit);
    $('#employeeList').on('click', '.deleteEmployee', handleDelete);
    } // end function
let employees = [];

function handleSubmit(){
    console.log( 'submit click');
   let nameVal = $( '#firstName' ).val();
   let lastVal = $( '#lastName' ).val();
   let idVal = $( '#id' ).val();
   let titleVal = $( '#title' ).val();
   let annuVal = $( '#annual' ).val();

    if( nameVal === '' ){
    alert("Please fill out First Name");
    $('#firstName').addClass('error');

} else if( lastVal === ''){
    alert("Please fill out Last Name");
    $('#lastName').addClass('error');

} else if( idVal === ''){
    alert("Please fill out ID");
    $('#id').addClass('error');

} else if( titleVal === ''){
    alert("Please fill out Title");
    $('#title').addClass('error');

} else if( annuVal === ''){
    alert("Please fill out Annual Salary");
    $('#annual').addClass('error');

} else {
    $('#firstName').removeClass('error');
    $('#lastName').removeClass('error');
    $('#id').removeClass('error');
    $('#title').removeClass('error');
    $('#annual').removeClass('error');

let newInfo = {
    name: nameVal,
    last: lastVal,
    id: idVal,
    title: titleVal,
    annul: annuVal
} // end let newInfo

    employees.push(newInfo);
    listOfEmployees();

    $( '#firstName' ).val('');
    $( '#lastName' ).val('');
    $( '#id' ).val('');
    $( '#title' ).val('');
    $( '#annual' ).val('');
    } // if statement
} // end function

function listOfEmployees(){
    $('#employeeList').empty();
let totalMoney = 0;
    employees.forEach(function (person){
        let $tr = `
            <tr id="info">
                <td>${person.name}</td>
                <td>${person.last}</td>
                <td>${person.id}</td>
                <td>${person.title}</td>
                <td>${person.annul}</td>
                <td><button class="deleteEmployee" data-name="${person.name}">Delete</button></td>
            </tr>`; // end $tr
    $('#employeeList').append($tr);
    let monthly = person.annul / 12;
     totalMoney += monthly;
}) // end forEach

    $('#monthly').empty();
    $('#monthly').append('Total Monthly: $'+ totalMoney);
    if (totalMoney > 20000){
    $('#monthly').addClass('red');
} else {
    $('#monthly').removeClass('red');
    } // end else    
} // end listOfEmployees

function handleDelete(){

    let $name = $(this).data('name');
    console.log('button click');
    for (let i = 0; i < employees.length; i++){
    if ($name === employees[i].name){
    employees.splice(i, 1);
        } // end if
    } // end for
    listOfEmployees(); 
} // end handleDelete