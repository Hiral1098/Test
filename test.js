var container = document.getElementById("container");
 
 export const test=(n)=>{
for(let i=0;i<=n;i++){
    for(let j=0;j<=n-i;j++){
        // document.write("&nbsp;&nbsp;&nbsp;")
        container.innerHTML+="&nbsp;&nbsp;&nbsp;"
    }
    for(let k=0;k<2*i-1;k++){
        document.write(" * ")
        container.innerHTML+=" * " 
    }
    container.innerHTML+= "<br/>"  
    // document.write("<br/>")
}   
for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
        //document.write("&nbsp;&nbsp;&nbsp;")
        container.innerHTML+="&nbsp;&nbsp;&nbsp;"
    }
    for(let k=0;k<2*(n-i)-1;k++){
       // document.write(" * ")
       container.innerHTML+=" * "
    }
    container.innerHTML+="<br/>"
    //document.write("<br/>")
}

}
//test(5)

export function square(n){
    const MID=Math.round((n-1)/2)
for(let i=0;i<n;i++)
{
    // document.write("&nbsp;&nbsp;&nbsp;")
    for(let j=0;j<n;j++){
       
        if(i===0 || j===0 || i===n-1 || j===n-1 || j===MID && i===MID){
            //document.write("&nbsp;*&nbsp;&nbsp;")
            container.innerHTML+="&nbsp;*&nbsp;&nbsp;"
        }
        else{
            container.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            //document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        }
     
    }
    container.innerHTML+="<br/>"
    //document.write("<br/>")
}
}
//square(15)