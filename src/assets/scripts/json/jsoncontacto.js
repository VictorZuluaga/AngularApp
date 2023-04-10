fetch('assets/data/contacto.json')
	.then(response => response.json())
	.then(data => {		        
        const generic_container = document.querySelector(".generic-container");            
        generic_container.querySelector("h1").innerText = data.title;
        generic_container.querySelector(".description").innerText = data.description;

        const telephone = document.getElementById("telephone");
        telephone.querySelector("h2").innerText = data.telephone.title;
        telephone.querySelector("img").src = data.telephone.icon;
        const telephone_ul = telephone.querySelector("ul");
        for(let i=0;i<data.telephone.data.length;i++){  
            const fragment = document.createElement("li");
            fragment.textContent = data.telephone.data[i];
            telephone_ul.appendChild(fragment);
        }
        
        const address = document.getElementById("address");
        address.querySelector("h2").innerText = data.address.title;
        address.querySelector("img").src = data.address.icon;
        const address_ul = address.querySelector("ul");
        for(let i=0;i<data.address.data.length;i++){  
            const fragment = document.createElement("li");
            fragment.textContent = data.address.data[i];
            address_ul.appendChild(fragment);
        }

        const email = document.getElementById("email");
        email.querySelector("h2").innerText = data.email.title;
        email.querySelector("img").src = data.email.icon;
        const email_ul = email.querySelector("ul");
        for(let i=0;i<data.email.data.length;i++){  
            const fragment = document.createElement("li");
            fragment.textContent = data.email.data[i];
            email_ul.appendChild(fragment);
        }

	})