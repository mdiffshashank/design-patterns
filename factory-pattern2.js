const Cake = function () {
  this.print = () => console.log("This is a cake!");
};

const Bread = function () {
  this.print = () => console.log("This is a Bread");
};

function foodFactory() {
  this.create = function (foodType) {
    switch (foodType) {
      case "cake":
        return new Cake();
      default:
        return new Bread();
    }
  };
}

const factory = new foodFactory();

const cake = factory.create("cake");
cake.print();
