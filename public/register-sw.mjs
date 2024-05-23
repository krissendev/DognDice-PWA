"use strict";
console.log("is register-sw.mjs")
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.mjs").then(registration =>{
        //console.log("<register-sw> Running")
        //console.log(registration)
    }).catch(error =>{
        console.error("<register-sw> Serviceworker error")
        console.log(error)
    });
}else {
    console.error("<register-sw> Service workers are not supported.");
}



