const rowElem = document.querySelector(".row");



// Milestone 0 array di oggetti 
const team = [
    {
        name: "Wayne Barnett",	
        role: "Founder & CEO", 
        img:  "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",	
        role: "Chief Editor", 
        img:  "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",	
        role: "Office Manager", 
        img:  "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",	
        role: "Social Media Manager", 
        img:  "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",	
        role: "Developer", 
        img:  "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",	
        role: "Graphic Designer", 
        img:  "barbara-ramos-graphic-designer.jpg"
    },
];

// Mileston 1 Stampare su console le informazioni
for (let i = 0; i < team.length; i++) {;
    // for (let key in team[i]) {
    // console.log(team[i][key]);
    // }

    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].img);
    
    // Milestone 2 inserimento nel DOM
    rowElem.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5">
        <div class="card" style="width: 18rem;">
            <img src="img/${team[i].img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${team[i].name}</h5>
                <p class="card-text">${team[i].role}</p>
            </div>
        </div>
    </div>`
}



