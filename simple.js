document.getElementById("home").onclick = function () {
    displayBlock(this.id);  
    activeClass(this.id);
}

document.getElementById("projects").onclick = function () {
    displayBlock(this.id);  
    activeClass(this.id);
}

document.getElementById("academic").onclick = function () {
    displayBlock(this.id);  
    activeClass(this.id);
}

document.getElementById("contact").onclick = function () {
    displayBlock(this.id);  
    activeClass(this.id);
}


function activeClass(id) {
    document.getElementById("home").className = "inactive";
    document.getElementById("academic").className = "inactive";
    document.getElementById("contact").className = "inactive";
    document.getElementById("projects").className = "inactive";
    document.getElementById(id).className = "active";
}

function displayBlock(id) {
    for(let i = 1; i <= 4; i++) 
        document.getElementById("content"+i).style.display = "none";
    document.getElementById(forward_id(id)).style.display = "grid";
}

function forward_id(id) {
    if(id == "home")
        return "content1";
    else if(id == "projects") 
        return "content2";
    else if(id == "academic")
        return "content3";
    return "content4";
}

