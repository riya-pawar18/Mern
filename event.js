function TablePrint()
{
    let a= parseInt(document.getElementById("tb1").value);
    let i;
    
    for(i=1;i<=10;i++)
    {
        document.getElementById("para").innerHTML+=`  ${i*a}`;
    }
}
