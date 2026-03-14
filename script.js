async function getAnalysis(){

let res = await fetch("/.netlify/functions/analysis");

let data = await res.json();

document.getElementById("analysis").innerHTML =
"Pass %: "+data.passPercentage+
"<br>Average SGPA: "+data.averageSGPA+
"<br>Topper: "+data.topper.usn;

}
