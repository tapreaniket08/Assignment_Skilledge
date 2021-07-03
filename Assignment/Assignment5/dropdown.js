function find() {
    console.log(document.getElementById("country").value)
    var c = document.getElementById("country").value
    if (c == "India") {
        let s_m = ["Maharashtra", "Gujrat", "Goa"]
        for (i = 1; i <= 3; i++) {
            //console.log("s".concat(i),s_m[i])
           // var a = "s".concat(i)
            //console.log(a)
            document.getElementById("s".concat(i)).innerHTML = s_m[i - 1];

        }
       
    }
   else if (c == "Canada") {
        let s_m = ["Alberta", "Manitoba", "Yukon"]
        for (i = 1; i <= 3; i++) {
            //console.log("s".concat(i),s_m[i])
            //var a = "s".concat(i)
            //console.log(a)
            document.getElementById("s".concat(i)).innerHTML = s_m[i - 1];

        }
    }
   else if (c == "Australia") {
        let s_m = ["Brisbane","Victoria ", "South Australia"]
        for (i = 1; i <= 3; i++) {
            //console.log("s".concat(i),s_m[i])
            //var a = "s".concat(i)
           // console.log(a)
            document.getElementById("s".concat(i)).innerHTML = s_m[i - 1];

        }
    }
   
}

function city(){
    var state=document.getElementById("state").value
   // console.log(state)
    if(state=="Maharashtra"){
    //console.log("hello")
     let c_m = ["Mumbai", "Pune"]
     for (i = 1; i <= 2; i++) {
            document.getElementById("c".concat(i)).innerHTML = c_m[i - 1];

        }   
    }
    if(state=="Gujrat"){
    //console.log("hello")
     let c_m = ["Ahmedabad", "Surat"]
     for (i = 1; i <= 2; i++) {
            document.getElementById("c".concat(i)).innerHTML = c_m[i - 1];

        }   
    }
    if(state=="Goa"){
    //console.log("hello")
     let c_m = ["Panaji", "Margao"]
     for (i = 1; i <= 2; i++) {
            document.getElementById("c".concat(i)).innerHTML = c_m[i - 1];

        }   
    }

    
    if(state=="Alberta"){
    //console.log("hello")
     let c_m = ["Calgary", "Edmonton"]
     for (i = 1; i <= 2; i++) {
            document.getElementById("c".concat(i)).innerHTML = c_m[i - 1];
        }   
    }

    if(state=="Manitoba"){
    //console.log("hello")
     let c_m = ["Winnipeg", "Brandon"]
     for (i = 1; i <= 2; i++) {
            document.getElementById("c".concat(i)).innerHTML = c_m[i - 1];
        }   
    }
    
    if(state=="Yukon"){
    //console.log("hello")
     let c_m = ["Carmacks","Dawson"]
     for (i = 1; i <= 2; i++) {
            document.getElementById("c".concat(i)).innerHTML = c_m[i - 1];
        }   
    }



    if(state=="Brisbane"){
    //console.log("hello")
     let c_m = ["Logan ","Moreton"]
     for (i = 1; i <= 2; i++) {
            document.getElementById("c".concat(i)).innerHTML = c_m[i - 1];
        }   
    }

    if(state=="Victoria"){
    //console.log("hello")
     let c_m = ["Melbourne ","Geelong"]
     for (i = 1; i <= 2; i++) {
            document.getElementById("c".concat(i)).innerHTML = c_m[i - 1];
        }   
    }

    if(state=="South Australic"){
    //console.log("hello")
     let c_m = ["Mount Gambier","Whyalla "]
     for (i = 1; i <= 2; i++) {
            document.getElementById("c".concat(i)).innerHTML = c_m[i - 1];
        }   
    }


}