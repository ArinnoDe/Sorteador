window.onload = function(){

    let sort = document.getElementById("sortear");
    let reset = document.getElementById("reset");

    sort.onclick = function(){
            addNumber();
         
        
        
    }

    reset.addEventListener("click", function(){
        location.reload();
    });


    function addNumber(){
        
        let ini = document.getElementById('ini').value;
        let fin = document.getElementById('fin').value;

        var num = document.getElementsByClassName("numeros")[0]; 
        num.innerHTML = '';
        var sorted = document.createTextNode(getRandomIntInclusive(ini, fin));

        num.appendChild(sorted);
        
    }


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }    
};