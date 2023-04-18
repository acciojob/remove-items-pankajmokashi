//your JS code here. If required.
let select = document.getElementById("colorSelect")
let button = document.querySelector("input")

function delete_ele(){
    for(let i = 0; i < select.length; i++)
    {
        if(select.children[i].innerText == select.value)
        {
            select.children[i].remove()
        }
    }
}
button.addEventListener("click", delete_ele)
