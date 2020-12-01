let req=require("request");
let ch= require("cheerio");
let fs=require("fs");
req("http://www.bpitindia.com/electrical-and-electronics-engineering-faculty-profile.html",finding);
function finding(err,res,html){
    console.log(res.statusCode);
    let tool=ch.load(html);
    let outputDetails = tool("div.col-md-8")
    let outputNames = tool("div.col-md-4")
    for (let i = 0; i < outputNames.length; i++) {
        let name=tool(outputNames[i]).find("a.d_inline.fw_600").text();
     let rowteach = tool(outputDetails[i]).find("table.table.table-bordered.table-responsive").find("tbody tr");  
         let rowcol = tool(rowteach).find("td")
         let qualification= tool(rowcol[0]).text().trim();
         let email= tool(rowcol[2]).text().trim();
         let exp= tool(rowcol[4]).text().trim();
         let research= tool(rowcol[6]).text().trim();
          let public= tool(rowcol[8]).text().trim();
          let inter= tool(rowcol[10]).text().trim();
     
         console.log(`Name: ${name} \nQualification: ${qualification} \nEmail: ${email} \nExperience: ${exp} \nResearch: ${research} \nNational publications: ${public} \nInternational Publications: ${inter}`);
          console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
         staff(name,qualification,email,exp,research,public,inter);
         }

    }
   
   
    

function staff(name,qualification,email,exp,research,public,inter){
    if (fs.existsSync(name)) {
    }else{
        fs.mkdirSync(name);
    }
}