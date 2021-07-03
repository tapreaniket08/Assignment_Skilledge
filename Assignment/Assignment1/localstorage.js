var data=[]
function Sub()
{   
    var id=document.getElementById('id').value;
    var name=document.getElementById('name').value;
    var price= document.getElementById('price').value;
    var descriptin=document.getElementById('descriptin').value
    var li={"id":id,"name":name,"price":price,"descriptin":descriptin};
    data.push(li);
    localStorage.All_data=JSON.stringify(data);
    disp();
}
function clr(){
   window.localStorage.clear();
}
function disp()
{  let full_li=JSON.parse(localStorage.getItem('All_data'));
  //  console.log(full_li)
  document.getElementById("Show_table").innerHTML = "";
    for(i in data){
        var a=data[i];
        console.log(i)        
        var final = "<tr><td>" + a.id+ "</td><td>" +
        a.name + "</td><td>" + "RS. " + a.price + "</td><td>"
        + a.descriptin + "</td><td>"
        + "<button style='background-color: red;font-weight: bold;'onclick='del(" + i + ")'>Delete</button></td></tr>";
         document.getElementById("Show_table").insertAdjacentHTML("beforeend", final);
    }
}
function del(ind){
     for(i in data){
        if(i==ind)
        {
            data.splice('ind',1);
            localStorage.All_data=JSON.stringify(data);
        }
        console.log("item is del");
    }
    disp()
    
}
