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
for (let i = 0; i < team.length; i++) {
    // const element = team[i];
    for (let key in team[i]) {
    console.log(team[i][key]);
    }
    // console.log(element.name);
    // console.log(element.role);
    // console.log(element.img);
}


