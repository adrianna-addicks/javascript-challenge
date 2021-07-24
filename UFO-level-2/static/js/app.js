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
var filters={};


function otherfilter(){ 
    console.log ("other filter called")
    var element=d3.select(this).select("input")
    console.log (element)
    var elementvalue=element.property("value");
    console.log (elementvalue)
    var id=element.attr("id");
    if (elementvalue){
        filters[id]=elementvalue;


    }
    else{
        delete filters[id];
    }

    thirdfilter();
}

function thirdfilter (){
    var filterdata=tabledata
 Object.entries(filters).forEach(([key,value])=>{
     console.log(filters)
  var filterdata= filterdata.filter(row=>row[key]===value);   
 }) ;
//  console.log(filterdata)
 ufo(filterdata);  
}

d3.selectAll(".filters").on("change",otherfilter);