const inputbox = document.getElementById("input-box");/for create input box/
const listcontaner = document.getElementById("list-cont");/for create a list/

function addtask(){/create a function for addtsk i will create in html file/
    if(inputbox.value === ''){/ if you input was empty so one message is /
        alert("please enter something!");
    }
    else{/ or aagar kuch enter hoga tho add item in list/
        let li = document.createElement("li");/ li mean list item or data create hoga li me /
        li.innerHTML = inputbox.value;/li hai aamaraa html ke under isliye innerhtml hai or inputbox enter karege tho vo add hoga li.innerhtml me/
        listcontaner.appendChild(li);/ display karene keliye kyuki hamara data list contaner me save joki hamare html list-cont karke enter kiya haia class tho li dat vaha pe show kare ga / 
        let span = document.createElement("span");/line 11 to 13 for close button/
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";/ ise kya hoga ki aagar aamne jo entr hai apahe vo show kr raha hai inputbox tho usko clear kare ke liyeye line rikha hai/
    saveData();/call karne ke liye/
}

listcontaner.addEventListener("click", function(e){/ if click contaner/
    if(e.target.tagName === "LI"){/  first vo check kare ga ki kha pe click kiya hai aamne  li me/
        e.target.classList.toggle("checked");/tho vo check kare ga aagr check hoga tho voremove kare ga /
        saveData();
    }
    else if(e.target.tagName === "SPAN"){/ aagar haam span pe click kare ge tho vo element remove kar dega/
        e.target.parentElement.remove();
        saveData();
    } 
}, false);

function saveData(){/ local stroge me data save karne ke liye /
    localStorage.setItem("data", listcontaner.innerHTML);
}
function showTask(){/ isme kya hoga ki ek bar bowser ko restart karege tho same data hi show karega/ 
    listcontaner.innerHTML = localStorage.getItem("data");
}
showTask();

