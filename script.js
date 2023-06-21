//your JS code here. If required.
    let divElement=   document.getElementById("browser-info");
       let browserName = navigator.appName;
        let  version = navigator.appVersion;
       // let browserName = "manjeet";
         console.log(browserName,version)
		divElement.innerHTML= `You are using  + ${browserName} + version + ${version}`;
		