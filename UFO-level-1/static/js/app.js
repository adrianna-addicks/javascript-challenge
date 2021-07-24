var tabledata= data;

 var tbody=d3.select("tbody");
 function ufo(data){
 tbody.html("");
 data.forEach((rowdata)=>{
 var row= tbody.append("tr");
 Object.values(rowdata).forEach((value)=>{
 var cell =row.append("td");
 cell.text(value)    
 })    
 })    
 }
ufo(tabledata);

function ufofilter(){
var date =d3.select ("#datetime").property("value");
if (date){
    var filterdata=tabledata.filter(row=>row.datetime===date);

}
ufo(filterdata);
}

d3.selectAll("#filter-btn").on("click",ufofilter);