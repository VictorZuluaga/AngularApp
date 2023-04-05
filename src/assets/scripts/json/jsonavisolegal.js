fetch('assets/data/avisolegal.json')
	.then(response => response.json())
	.then(data => {	                
        const generic_container = document.querySelector(".generic-container");            
        generic_container.querySelector("h1").innerText = data.title;
        const ordered_list = document.querySelector(".data");
        let leyes = data.data;
        for(let i=0;i<leyes.length;i++){
            let ley = leyes[i];
            let ley_element = document.createElement("li");
            ley_element.innerHTML = "<b>" + ley.title + "</b> " + ley.value;
            ordered_list.appendChild(ley_element);
        }
	})