const callBack = () => console.log("I am a boss!")

function receivesAFunction(callBack){
    callBack()
}

const fn = function() {
    console.log(`Ohhhhhh yeaoaahhh`)
}

function returnsANamedFunction(){
    return fn
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymus")
    }
}