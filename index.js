(() => {
    const number = document.getElementById("number-drinks-found");
    const input = document.getElementById("search-value").value;
    const btn = document.getElementById("search-send");


    btn.addEventListener("click", () => {
        async function getDrink(){
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            //try to display the number of drinks but always gives tha same number
            number.innerHTML = data.drinks.length;
        }
       getDrink();
    });


})();