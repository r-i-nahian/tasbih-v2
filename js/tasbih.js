
var clicks = 0;
var n = 0;
function onClick() {
clicks += 1;

if(clicks == n)
{
     
    var r = confirm("Alhamdulillah . You have finish "+n+" dzikir. Will You start from the begining ?");
	if (r == true) {
    	clicks=0;
    	document.getElementById("clicks").innerHTML = clicks;
} 
else {

}
}
document.getElementById("clicks").innerHTML = clicks;
};
function onClick2() {
var r = confirm("This will reset the value of counter !");
if (r == true) {
    clicks=0;
    document.getElementById("clicks").innerHTML = clicks;
} 
else {

} 
};
function onClick3(){
n = prompt("How many times You want to do dzikir ? ", "");
n = parseInt(n);
if(n == clicks) 
{
    
} 
else {

}
};