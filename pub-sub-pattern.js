/**
 * 
 * @returns https://dev.to/jsmanifest/the-publish-subscribe-pattern-in-javascript-5899
 */

function pubsub(){

    const subscribers = {};

    // when perticular event get published execute all the callbacks
    function publish(eventName,data){
        if(!Array.isArray(subscribers[eventName])){
            return;
        }
        subscribers[eventName].forEach(cb=>cb(data))
    }

    //suscribe to pertivular event and register callback
    function subscribe(eventName,callback){
        if(!Array.isArray(subscribers[eventName])){
            subscribers[eventName] =[];
        }
        subscribers[eventName].push(callback)
    }

    return {
        publish,
        subscribe,
    }
}

function showtheData(data){
    console.log(data);
}

const ps = pubsub();
ps.subscribe("show-data",showtheData);

ps.publish("show-data","200 INR");