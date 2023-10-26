class App {
  constructor() {
    this.search = document.getElementById("btnFilterCar");
    this.result = document.getElementById("carsList");
    this.driver = document.getElementById("driver");
    this.time = document.getElementById("time");
    this.date = document.getElementById("date");
    this.passanger = document.getElementById("passanger");
  }

  async init() {
    //Search Btn listener
    this.search.onclick = this.run;

    //Select Time on change
    this.time.onchange = () => {
      this.validInput();
    };

    //Select Driver on change
    this.driver.onchange = () => {
      this.validInput();
    };

    //Date on Change
    this.date.onchange = () => {
      this.validInput();
    };
  }

  run = () => {
    this.clear();
    this.getCars();

    let carCount = Car.list.length;
    if (carCount == 0) {
      const node = document.createElement("div");
      node.classList.add("result-box");
      node.innerHTML = "status";
      this.result.appendChild(node);
    } else {
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.classList.add("result-box");
        node.innerHTML = car.render();
        this.result.appendChild(node);
      });
    }
  };

  clear = () => {
    let child = this.result.firstElementChild;

    while (child) {
      child.remove();
      child = this.result.firstElementChild;
    }
  };

  validInput = () => {
    let waktu = this.time.value;
    let sopir = this.driver.value;
    let date = this.date.value;
    if (waktu && sopir && date) {
      this.search.removeAttribute("disabled");
    }
  };

  getCars = () => {
    const cars = Data.listCars();
    const driverVal = this.driver.value;
    const dateVal = this.date.value;
    const timeVal = this.time.value;
    const dateTime = dateVal + timeVal;
    const passangerVal = this.passanger.value;
    if (!passangerVal) {
      const listCar = cars.filter(
        (i) =>
          i.driver === JSON.parse(driverVal) &&
          i.available === true &&
          i.availableAt >= dateTime
      );
      console.log(listCar);
      Car.init(listCar);
    } else {
      const listCar = cars.filter(
        (i) =>
          i.driver === JSON.parse(driverVal) &&
          i.available === true &&
          i.availableAt >= dateTime &&
          i.capacity > passangerVal
      );
      Car.init(listCar);
    }
  };
}
