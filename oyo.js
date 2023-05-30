let url = 'http://localhost:3000/oyo'
function cheak()
{
    let cu_no=document.getElementById(c_no).value
    let cu_name=document.getElementById(c_name).value
    let cu_Mo_no=document.getElementById("c_Mo_no").value
    let cu_email=document.getElementById("email").value
    let cu_addres=document.getElementById("c_addrees").value 
    
}

function LOAD(e) {
    
    $.ajax({
        url: url,
        type: "GET",
        success: (posRes) => {
            console.log(posRes)
            let x = ``
            x = x + `<table border = 1px    
                            cellspacing = 10px
                            cellpadding = 10px
                            align = center>
                    <thead>
                        <tr>
                            <th>c_no</th>
                            <th>c_name</th>
                            <th>c_Mo_no</th>
                            <th>c_email_id</th>
                            <th>c_addrees</th>
                        </tr>
                    </thead>
                    <tbody>
            `
            for (let i = 0; i < posRes.length; i++) {
                x = x + `
                    <tr>
                        <td>${posRes[i].c_no}</td>
                        <td>${posRes[i].c_name}</td>
                        <td>${posRes[i].c_Mo_no}</td>
                        <td>${posRes[i].email}</td>
                        <td>${posRes[i].c_addrees}</td>
                    </tr>
                `
            }
            x = x + `</tbody>
                </table>`
            document.getElementById('op').innerHTML = x
        },
        error: (errRes) => {
            console.log(errRes)
        }
    })
}

//LOAD()
$(document).ready(() => {
    
    $('#getData').click(() => {
        LOAD()
    })
    $('#send').click((e) => {
        e.preventDefault()  //preventing default behaviour of browser
        let data = {
            "c_no": parseInt(document.getElementById('c_no').value),
            "c_name": document.getElementById("c_name").value,
            "c_Mo_no": parseInt(document.getElementById("c_Mo_no").value),
            "email": document.getElementById("email").value,
            "c_addrees" :document.getElementById("c_addrees").value
        }
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            success: (posRes) => {
                console.log(posRes)
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
        LOAD()
    })
    $('#update').click((e) => {
        e.preventDefault()
        let c_no= parseInt(document.getElementById('c_no').value)
        let data = {
            "c_name": document.getElementById("c_name").value,
            "c_Mo_no": parseInt(document.getElementById("c_Mo_no").value),
            "email": document.getElementById("email").value,
            "c_addrees" :document.getElementById("c_addrees").value
        }
        $.ajax({
            url: url + '/' + c_no,
            type: 'PUT',
            data: data,
            success: (posRes) => {
                console.log(posRes)
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
    })
    $('#delete').click((e) => {
        e.preventDefault()
        let c_no= parseInt(document.getElementById('c_no').value)
        $.ajax({
            url: url + '/' + c_no,
            type: 'DELETE',
            success: (posRes) => {
                console.log(posRes)
            },
            error: (errRes) => {
                console.log(errRes)
            }
        })
    })
})
