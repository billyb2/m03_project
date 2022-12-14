function search() {
    let item_search = document.getElementById("search");
    let item_price = document.getElementById("max price");


    alert(item_price);

  let xhttp = new XMLHttpRequest();    
    xhttp.onload = function() {
        item_objects = JSON.parse(this.responseText);

        let item_text = document.getElementById("item");
        item_text.innerHTML = ""; 

        for(let i = 0; i < item_objects.length; i++) {
            item_text.innerHTML += "<h2>" + item_objects[i].name  + "</h2>" + "  "  +  "<p>" + item_objects[i].price +"</p>";
            item_text.innerHTML += "<br>"

        }


    }
    xhttp.open("GET", "/items/search?name="+ item_search.value, false);

    xhttp.send();

}
