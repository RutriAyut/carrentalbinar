class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    driver,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.driver = driver;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div>
      <img src="${this.image}" class="search-img" alt="${this.manufacture}" width="270px">
      <p class="p-reguler"><b>${this.type}</b></p>
      <p class="p-bold">Rp.${this.rentPerDay} / Hari</p>
      <p>${this.description}</p>
      <p><i class="bi bi-people"></i> ${this.capacity} orang</p>
      <p><i class="bi bi-gear"></i> ${this.transmission}</p>
      <p><i class="bi bi-calendar"></i> Tahun ${this.year}</p>
      </div>
      <div class="btn-container">
      <button class="btn btn-default btn-select">Pilih Mobil</button>
      </div>
    `;
  }
}
