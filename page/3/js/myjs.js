var myInput = document.getElementById("input");
var butShow = document.getElementById("butShow");

// butShow.onclick = function (){
//     // if(butShow.innerHTML =="show"){
//     //     butShow.innerHTML ="hide";
//     // }else{
//     //     butShow.innerHTML ="show";
//     // }
//     // هان ما بنقدر نعتمد على محتوى الhtml
//     if(butShow.getAttribute("data-text") == "show"){
//         butShow.innerHTML ="hide";
//         myInput.setAttribute("type" , "text");
//         butShow.setAttribute("data-text", "hide");
//     }else{
//         butShow.innerHTML ="show";
//         myInput.setAttribute("type" , "password");
//         butShow.setAttribute("data-text", "show");
//     }
// } 
butShow.addEventListener("click" , togglepasword);

function togglepasword (){
    // if(butShow.innerHTML =="show"){
    //     butShow.innerHTML ="hide";
    // }else{
    //     butShow.innerHTML ="show";
    // }
    // هان ما بنقدر نعتمد على محتوى الhtml
    if(butShow.getAttribute("data-text") == "show"){
        butShow.innerHTML ="hide";
        // ممكن انبدل butshow الى this
        myInput.setAttribute("type" , "text");
        butShow.setAttribute("data-text", "hide");
    }else{
        butShow.innerHTML ="show";
        myInput.setAttribute("type" , "password");
        butShow.setAttribute("data-text", "show");
    }
}