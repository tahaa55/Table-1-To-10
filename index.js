function java(){
          let table = document.getElementById('table').value;
          let showresult;
          document.getElementById('show').innerHTML="";
          for (let x=1; x<=10; x++){
            showresult= table +" x " + x + " = " +table*x;
            let result = "<h3>"+showresult+"</h3>";
          
            document.getElementById('show').innerHTML+=result;
          }
        
}