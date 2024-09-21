function calculate(){
    let mark1 = parseInt(document.getElementById("py").value);
    let mark2 = parseInt(document.getElementById("mc").value);
    let mark3 = parseInt(document.getElementById("ds").value);
    let mark4 = parseInt(document.getElementById("sw").value);

    total = mark1+mark2+mark3+mark4;
    average = total/4;

    document.getElementById("avg").innerHTML=""+average;

    if(mark1>=50 & mark2>=50 & mark3>=50 & mark4>=50){
             
        document.getElementById("result").innerHTML="PASS";
    }
    else{
        document.getElementById("result").innerHTML="FAIL";
    }
}

document.getElementById("btn").addEventListener("click",calculate);