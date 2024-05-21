"use strict";
console.log("register-sw.js")
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("<register-sw> Running")
        console.log(registration)
    }).catch(error =>{
        console.error("<register-sw> Serviceworker error")
        console.log(error)
    });
}else {
    console.error("<register-sw> Service workers are not supported.");
}



