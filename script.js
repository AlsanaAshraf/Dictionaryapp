//searchinput
//searchbtn

const dictionary = (word)=>{

    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '57fd8ba3d5msh63d22cae04e2502p172ad0jsn6d440e122044',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word,options)
          .then(response => response.json())
          .then((response) => {

            
            wordheading.innerHTML = "Meaning of "+response.word;
            definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");

          })
          .catch(err => console.error(err));
        }   
searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)


}
)
