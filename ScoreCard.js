const request = require('request');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;  

const Link = "https://www.espncricinfo.com/series/namibia-t20-tri-series-2022-1322177/jersey-vs-united-states-of-america-5th-match-1322185/full-scorecard";

/*
https://www.espncricinfo.com/series/tnpl-2022-1312873/ruby-trichy-warriors-vs-chepauk-super-gillies-12th-match-1312885/full-scorecard
const Link = "https://www.espncricinfo.com/series/namibia-t20-tri-series-2022-1322177/jersey-vs-united-states-of-america-5th-match-1322185/full-scorecard";
*/
request(Link, cb);

function cb(error, response, html) {
    if(error){
        console.error('error:', error); // Print the error if one occurred
    } else{
        // console.log('body:', html); // Print the HTML for the Google homepage.
        const dom = new JSDOM(html);
        const document = dom.window.document;
       // let maxScore = 0;
       //let nameOfHighScorer = "";
        let teams = document.querySelectorAll(".ds-text-tight-l.ds-font-bold.ds-text-tight-l.ds-font-bold");
        console.log("Match held between");
        console.log(teams[0].textContent);
        console.log(teams[1].textContent);
        let winner = document.querySelector(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title span");
        console.log(winner.textContent);

        let batsmanTable = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table"); //  
        console.log(batsmanTable.length," = No. of table of batsman of two teams");

        for(let i=0; i<batsmanTable.length; i++){
            let row = batsmanTable[i].querySelectorAll("tbody tr");
            console.log(row.length," = No. of content inside the batsman table");
            for(let j=0; j<row.length; j++){
                let tds = row[j].querySelectorAll("td");
               if(tds.length > 4){
                let name = tds[0].textContent;
                let score = tds[2].textContent;
                console.log("Name of Batsman--->",name,"    Score---> ",score);
                
        
           
            }    
        }     
        
       
    }
    console.log("Batsman Full Name And Date Of Birth");
    let batsmen = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table a");
    for(let i=0;i<batsmen.length;i++){
        let batsmanLink = batsmen[i].href;
        let completeBatsmanLink = "https://www.espncricinfo.com/"+batsmanLink;
        // console.log(completeBatsmanLink);
       
        request(completeBatsmanLink,cb2);
    }
      
    
        
    }
}

   function cb2(error,response,html){
   if(error){
  console.log(error);
   }else{
    const dom = new JSDOM(html);
    const document = dom.window.document;
    let playerDetail = document.querySelectorAll(".ds-p-4");
    console.log(playerDetail);
     let player = document.querySelectorAll("div h5");
     let fullName = player[0].textContent;
     let DOB = player[1].textContent;
     console.log("Full name : ",fullName," Date of Birth : ",DOB);
   }
 }