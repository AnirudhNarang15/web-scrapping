let req=require("request");
let ch= require("cheerio");
let fs=require("fs");

req("http://www.bpitindia.com/electrical-and-electronics-engineering-faculty-profile.html",finding);
function finding(err,res,html){
    console.log(res.statusCode);
    let tool=ch.load(html);
    let output = tool("div.container")
    for (let i = 0; i < output.length; i++) {
        let name=tool(output[i]).find("a.d_inline").text();
        //console.log(name);
        let rowteach = tool(output[i]).find("table.table.table-bordered.table-responsive").find("tbody");
        //let details=tool(output[i]).find(".col-md-8.col-sm-6.col-xs-12.martop").text();  
       // console.log(name);
       for(let j=0;j<rowteach.length;j++){
         //let qualification = tool(rowteach[j]).html();
         let rowcol = tool(rowteach[j]).find("td")
         let qualification= tool(rowcol[0]).text().trim();
         let email= tool(rowcol[2]).text().trim();
         let exp= tool(rowcol[4]).text().trim();
         let research= tool(rowcol[6]).text().trim();
         let public= tool(rowcol[8]).text().trim();
         let inter= tool(rowcol[10]).text().trim();
         
        // console.log(qualification);
         console.log(`Name: ${name} \nQualification: ${qualification} \nEmail: ${email} \nExperience:${exp} \nResearch:${research} \nNational publications:${public} \nInternational Publications:${inter}`);
         console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
        }

    }
   //fs.writeFileSync("details.html",name + details);
   
    
}

