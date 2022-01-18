let staffParse = JSON.parse(staff);

let staffObj = staffParse.staff

console.log(staffObj)

function handle(staffObj) {
    let table = document.getElementById("table")
    for (let i = 0; i < staffObj.length; i++) {
        let row = `
        <tr>
        <td>${staffObj[i].title}</td>
        <td>${staffObj[i].name.fullName}</td>
        <td>${staffObj[i].position}</td>
        <td>${staffObj[i].homeAddress}</td>
        <td>${staffObj[i].phone.mobileNum}</td>
        <td>${staffObj[i].email.personalEmail}</td>
    </tr>`

        table.innerHTML += row;
    }
}
handle(staffObj);