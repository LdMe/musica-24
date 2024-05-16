const confirmElements = document.getElementsByClassName("confirm");

for (const element of confirmElements) {
    element.addEventListener("click",(event)=>{
        console.log("borrando")
        if(!confirm("Are you sure?")){
            event.preventDefault();
        }
    })
}