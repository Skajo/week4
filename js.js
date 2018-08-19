
function addListItem ()
{
    const handler_list = document.getElementById("list");
    const element = document.createElement("li");  
    element.className = "single-task";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Tytuł zadania";

    const btn1 = document.createElement("a");
    btn1.className = "waves-effect waves-light btn-small completeBtn";
    btn1.onclick = function() { this.style.background = "#00e676"; this.style.color = "#fff"; input.style.textDecoration = "line-through"; };

    const icon1 = document.createElement("i");
    icon1.className = "material-icons left";
    icon1.textContent = "check";

    const btn2 = document.createElement("a");
    btn2.className = "waves-effect waves-light btn-small deleteBtn";
    btn2.onclick = function() {this.parentNode.parentNode.removeChild(this.parentNode);};

    const icon2 = document.createElement("i");
    icon2.className = "material-icons left";
    icon2.textContent = "clear";


    handler_list.appendChild(element);
    const handler_listItem = document.querySelectorAll(".single-task");

    for(i=0; i < handler_listItem.length; i++)
    {
        handler_listItem[i].appendChild(input);
        handler_listItem[i].appendChild(btn1);
        handler_listItem[i].appendChild(btn2);
    }

    const handler_btn1 = document.querySelectorAll(".completeBtn");
    const handler_btn2 = document.querySelectorAll(".deleteBtn");

    for(j=0; j<handler_btn1.length; j++)
    {
        handler_btn1[j].appendChild(icon1);
        handler_btn2[j].appendChild(icon2);
    }


    
}
