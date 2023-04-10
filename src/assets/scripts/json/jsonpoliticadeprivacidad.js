fetch('assets/data/politicadeprivacidad.json')
	.then(response => response.json())
	.then(data => {		        
        const generic_container = document.querySelector(".generic-container");            
        generic_container.querySelector("h1").innerText = data.title;
        const law_list = document.querySelector(".leyes");
        let leyes = data.data;
        for(let i=0;i<leyes.length;i++){
            let ley = leyes[i];

            let ley_element = document.createElement("div");
            ley_element.className = "ley";
            law_list.appendChild(ley_element);
            
            let ley_title = document.createElement("h2");
            ley_title.textContent = ley.title;            
            let ley_description = document.createElement("p");
            ley_description.textContent = ley.description;

            ley_element.appendChild(ley_title);
            ley_element.appendChild(ley_description);
        }
	})