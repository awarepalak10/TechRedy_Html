let Students = []

function addStudent(e)
{
    e.preventDefault()

    let input = document.getElementById("StudName") // <> Ved Mahajan</>
    let name = input.value; // Ved Mahajan

    if(name === "")
    {
        alert("Please Enter Student Name")
        return;
    }

    Students.push(name)
    input.value = "";

    displayStudents();
}


function displayStudents()
{
    let list = document.getElementById("StudentList")
    list.innerHTML = "";


    
    Students.forEach((Student,index) => {
        let li = document.createElement("li")
        li.innerText = Student
        list.appendChild(li);
    })

}