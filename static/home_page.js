let xhttp = new XMLHttpRequest();    

xhttp.onload = function() {
  item_objects = JSON.parse(this.responseText);

  let item_text = document.getElementById("item");
  for(let i =0; i < item_objects.length; i++) {
    item_text.innerHTML += "<h2>" + item_objects[i].name  + "</h2>" + "  "  +  "<h2>" + item_objects[i].price +"</h2>";
    item_text.innerHTML += "<br>"

  }

}

xhttp.open("GET", "/items/search?name=", false);
xhttp.send();

