let arr = [];



document.querySelector("#send").addEventListener("click" , function(e){
    let data = document.querySelector("#inp").value
    console.log(data);
    
    arr = [...arr , data]
    let message = document.querySelector("#message");
    document.getElementById("inp").value= " ";
    message.innerHTML = " "
    
    arr.forEach(function(alpha){
        let fieldset = document.createElement("fieldset")
        fieldset.style.cssText = ` max-width: 70rem;
            font-size: 2rem;
            border-radius: 2rem;
            margin-top:2rem;
            border: 0.1rem solid rgb(245, 174, 174);
            overflow-wrap: anywhere;`
        fieldset.innerHTML +=`<legend style = "color : white; ">Aayush</legend>


        <p id="actual-message">${alpha} </p>
        <button id = "emoji" style = " font-size:2rem; border-radius:2rem"><span>☺️</span></button>
        
        
        <select id="sel">
        <option value="😂">😂</option>
        <option value="❤️">❤️</option>
        <option value="😭">😭</option>
        <option value="😎">😎</option>
        </select>`
        
        message.append(fieldset)
        
        
    })
    
    //below logic is for reacting
    document.querySelector("#sel").addEventListener("change", function(e){
       document.querySelector("#emoji").innerHTML = e.target.value;
    })
    
    

})

