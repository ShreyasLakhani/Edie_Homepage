

function openNav(){
    document.querySelector(".aa").style.display ="block";
    document.querySelector(".aa").classList.add("active")
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";

}

function closeNav(){
    document.querySelector(".aa").style.display ="none";
    document.getElementById("open").style.display = "block";
    document.querySelector(".aa").classList.remove("active")
    
}