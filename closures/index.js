// lexical scope -> A variable define outside of function can be accessible inside of another fun

function init() {
    var name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    displayName();
}
init();