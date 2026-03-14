async function fetchClass(){

let students=[];

for(let i=1;i<=120;i++){

let num = i.toString().padStart(3,"0");
let usn = "1BI21CS"+num;

let res = await fetch("/.netlify/functions/result?usn="+usn);
let data = await res.json();

students.push(data);

await new Promise(r=>setTimeout(r,1000));
}

analyzeResults(students);

}
