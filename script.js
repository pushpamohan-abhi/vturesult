async function getResult(){

let usn=document.getElementById("usn").value;

let res = await fetch("/.netlify/functions/result?usn="+usn);

let data = await res.json();

document.getElementById("result").innerHTML =
"Name: "+data.name+
"<br>SGPA: "+data.sgpa;

}


async function getAnalysis(){

let res = await fetch("/.netlify/functions/analysis");

let data = await res.json();

document.getElementById("analysis").innerHTML =
"Pass Percentage: "+data.passPercentage+
"<br>Average SGPA: "+data.averageSGPA+
"<br>Topper: "+data.topper.usn;

}
