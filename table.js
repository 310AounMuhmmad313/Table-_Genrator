let table= document.getElementById("V1") 
let range = document.getElementById("range");

function GenerateTable() {
    let value1= parseInt (table.value);
    let value2= parseInt (range.value);
    

    document.write(`
<h2 style="color: red; text-align: center;
 -webkit-text-stroke: 2px black;      
font: 44px Poppins; 
       font-weight: bold;
       ">
      Your Table 
      </h2>
`);
    
   
    for (let i = 1; i <= value2; i++) {
        document.write(`
            <table style="border: 1px solid black; width: 20%; margin: 0 auto;         background:linear-gradient(rgba(204, 33, 176, 0.59),rgba(81, 32, 145, 0.64)); "   >
           
            <tr style="border: 1px solid black;">
                <td style="border: 1px solid black; font: 44px Poppins; font-weight: bold; ">${value1}</td>
                <td style="border: 1px solid black; font: 44px Poppins; font-weight: bold; " >×</td>
                <td style="border: 1px solid black; font: 44px Poppins; font-weight: bold; ">${i}</td>
                <td style="border: 1px solid black; font: 44px Poppins; font-weight: bold; " >=</td>
                <td style="border: 1px solid blue; font: 44px Poppins; font-weight: bold; " >${value1 * i}</td>
            </tr>
          </table>
            
            `);
         
        }  
           document.write("<br>")
    

}
