
function addTask(){
    var todoText= document.getElementById("input").value;
    if(todoText.length == 0){
        alert("Kindly Enter valid Task!!")
    }

    else{
        document.getElementById("tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${todoText}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        document.getElementById("input").value = ""; 
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}