// This object represents a car
var car = {
  name: "Palio", 
  color: "White", 
  brand: "Fiat", 
  engine: "1.8", 
  set_name: function(name){
    this.name = name;
  }, 
  get_name: function(){
    return this.name;
  }, 
  set_color: function(color){
    this.color = color;
  }, 
  get_color: function(){
    return this.color;
  }, 
  set_brand: function(brand){
    this.brand = brand;
  }, 
  get_brand: function(){
    return this.brand;
  }, 
  set_engine: function(engine){
    this.engine = engine;
  }, 
  get_engine: function(){
    return this.engine;
  }
}

// This function shows the data of the car object
function show_data(){
  document.getElementById("name").innerHTML = car.get_name();
  document.getElementById("color").innerHTML = car.get_color();
  document.getElementById("brand").innerHTML = car.get_brand();
  document.getElementById("engine").innerHTML = car.get_engine();
}

// This function updates the data of the car object
function update_data(){
  // alert("This function hasn't been implemented yet");
  car.set_name(document.getElementById("name_2").value);
  car.set_color(document.getElementById("color_2").value);
  car.set_brand(document.getElementById("brand_2").value);
  car.set_engine(document.getElementById("engine_2").value);

  // Shows the data again, once it has been modified
  show_data();
}
