class Vehicle {
  constructor(vin = vin, make = make, model = model) {}

  start() {
    this.running = true;
    console.log("running...");
  }
  stop() {
    this.running = false;
    console.log("stopped...");
  }
}

class Plane extends Vehicle {
  constructor(vin = vin, make = make, model = model, airline = airline) {
    super(vin, make, model);
  }
}
class Automobile extends Vehicle {
  constructor(vin, make, model, numberOfDoors ) {
    super(vin, make, model);
    this.numberOfDoors=numberOfDoors
  }
  honk() {
    console.log("Honk Honk");
  }
}
let v1 = new Vehicle("232323", "Honda", "Accord", false);
v1.stop();
let auto = new Automobile(2323,"Audi", "S7", 4)
console.log(auto.make);
auto.start()
