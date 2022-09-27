// we are goining to create process manager and process where at max 
// there is only one process manager can be created.
function Process (state){
    this.state = state
}

const Singleton = (function (){
    function ProcessManager(){
        this.numOfProcess = 0;
    }
    let pManager
    function createProcessManager(){
        return new ProcessManager();
    }
    return {
        getProcessManager : function(){
            return !pManager ? pManager = createProcessManager() : pManager;
        }
    }
})();

const processManger = Singleton.getProcessManager();
const processManger2 = Singleton.getProcessManager();

//oth the objects are same 
console.log(processManger === processManger2) 