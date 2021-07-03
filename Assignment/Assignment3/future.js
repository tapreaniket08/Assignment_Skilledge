function disp()
        {
           var PV=Number(document.getElementById('ivnamo').value);
           //console.log(PV)
           var i=Number(document.getElementById('rate').value);
           //console.log(i)
           var n= Number(document.getElementById("Year").value)
           //console.log(n)
           var r=parseInt(Calculate(PV,i,n))
           //console.log(r);
           document.getElementById("result").value=r;           
       }

       function Calculate(PV,i,n){
          //FV = PV * (1 + i / 100)n
            var x=(1+i/100)
            var FV=PV*(Math.pow(x,n))
            return FV;
        }