const PersonModule = (function() {
    //private variable
    const person = {
        name: 'Skay',
        age: 38
    }

    //private function
    function addProperty(propName, propValue) {
        person[propName] = propValue;
                //Displays the value of person object after a new property has been added
        console.log(`The Person object after addProperty function is executed is ${JSON.stringify(person)}`);
    }

    //Displays the initial value of the person object
    console.log(`The Initial value of Person object is ${JSON.stringify(person)}`);

    //You can return a variable or function that the outside world 
    //will have access to
    return {
        callAddPropertyFn: function(propName, propValue) {
                        //call the private function addProperty
            addProperty(propName, propValue);
        }
    }
}());

PersonModule.callAddPropertyFn('gender', 'Male');