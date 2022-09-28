function Observer() {
  this.observerContainer = [];
}

Observer.prototype.subscribe = function (callback) {
  this.observerContainer.push(callback);
};

/**
 * removes an element from the container
 */
Observer.prototype.unsubscribe = function (element) {
  const elementIndex = this.observerContainer.indexOf(element);
  if (elementIndex > -1) {
    this.observerContainer.splice(elementIndex, 1);
  }
};

/**
 * notifies all the element added to the container by calling
 * each subscribed components added to the container
 */
Observer.prototype.notifyAll = function (value) {
  this.observerContainer.forEach(function (observerElement) {
    observerElement(value);
  });
};

/**
 * get the reference of the views (input, display One
 * and display Two using class name)
 * */
const input = document.querySelector("number-input");
const documentOne = document.querySelector(".document-one");
const documentTwo = document.querySelector(".document-two");

/**
 * operation to manipulate user input for document one
 * */
const updateDocumentOne = function (text) {
  documentOne.textContent = parseInt(text) * 2;
};

/**
 * operation to manipulate user input for document two
 * */
const updateDocumentTwo = function (text) {
  documentTwo.textContent = parseInt(text) * 4;
};

const observable = new Observer();
observable.subscribe(updateDocumentOne);
observable.subscribe(updateDocumentTwo);

document
  .querySelector(".number-input")
  .addEventListener("keyup", function (event) {
    observable.notifyAll(event.target.value);
  });

/**
 * modify subscriptions upon a click of a button
 * */
document.getElementById("subscribe-one").addEventListener("click", function () {
  observable.subscribe(updateDocumentOne);
});

document
  .getElementById("unsubscribe-one")
  .addEventListener("click", function () {
    observable.unsubscribe(updateDocumentOne);
  });

document.getElementById("subscribe-two").addEventListener("click", function () {
  observable.subscribe(updateDocumentTwo);
});

document
  .getElementById("unsubscribe-two")
  .addEventListener("click", function () {
    observable.unsubscribe(updateDocumentTwo);
  });
