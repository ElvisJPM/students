var students = [
    {
        lname: "AVALOS KARLIS",
        name: "LAURA CRISTINA",
        age: 21,
        // birthday: {
        //     year: 2000,
        //     month: "November",
        //     day: 19
        // },
        career: "IDYGS"
    },
    {
        lname: "AVENDAÑO AVENDAÑO",
        name: "ARAM YAEL",
        age: 21,
        // birthday: {
        //     year: 2001,
        //     month: "Agosto",
        //     day: 18
        // },
        career: "IDYGS"
    },
    {
        lname: "CORTES CORREA",
        name: "BRANDON EDUARDO",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "DE LA CRUZ LOPEZ",
        name: "ALBINA JANETH",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "DE LA ROSA IBARRA",
        name: "ERICK ARMANDO",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "DE LEON MENDIOLA",
        name: "ANGELICA JANETH",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "GIRON LUEVANO",
        name: "EMMANUEL",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "GOMEZ MACIAS",
        name: "CESAR EDUARDO",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "GOMEZ PEREZ",
        name: "JUAN JESUS",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "GONZALEZ TORRES",
        name: "EDSON OZIEL",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "HERNANDEZ FRAGA",
        name: "SALATHIEL",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "HERNANDEZ PEREZ",
        name: "EMIR DANIEL",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "HINOJOSA ENRIQUEZ",
        name: "OBED",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "JARAMILLO MUÑIZ",
        name: "ALEXIS JAVIER",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "LOPEZ ALDAVA ",
        name: "CARLOS IVAN",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "MARTINEZ CRUZ",
        name: "MARLEN",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "MEDRANO VAZQUEZ ",
        name: "LUIS ALEJANDRO",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "MORALES SOSA",
        name: "DAVID ALEJANDRO",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "PADILLA AGUIRRE",
        name: "LUIS ARMANDO",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "PADRON FLORES",
        name: "EDNA VIVIANA",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "PADRON GOMEZ",
        name: "JOSE ENRIQUE",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "PEREZ MORALES ",
        name: "ELVIS JOSUE",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "PEREZ TRINIDAD",
        name: "LINCE HARIM",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "PEREZ ZARATE",
        name: "JAIME YADIN",
        age: 21,
        career: "IDYGS"
    },
    {
        lname: "RAMIREZ ROSALES",
        name: "ANGELA DANAE",
        age: 21,
        career: "IDYGS"
    },
    // {
    //     lname: "MORALES SOSA",
    //     name: "DAVID ALEJANDRO",
    //     age: 21,
    //     career: "IDYGS"
    // },
    // {
    //     lname: "MORALES SOSA",
    //     name: "DAVID ALEJANDRO",
    //     age: 21,
    //     career: "IDYGS"
    // },
    // {
    //     lname: "MORALES SOSA",
    //     name: "DAVID ALEJANDRO",
    //     age: 21,
    //     career: "IDYGS"
    // },
    // {
    //     lname: "MORALES SOSA",
    //     name: "DAVID ALEJANDRO",
    //     age: 21,
    //     career: "IDYGS"
    // },
    // {
    //     lname: "MORALES SOSA",
    //     name: "DAVID ALEJANDRO",
    //     age: 21,
    //     career: "IDYGS"
    // },
    // {
    //     lname: "MORALES SOSA",
    //     name: "DAVID ALEJANDRO",
    //     age: 21,
    //     career: "IDYGS"
    // },
    // {
    //     lname: "MORALES SOSA",
    //     name: "DAVID ALEJANDRO",
    //     age: 21,
    //     career: "IDYGS"
    // },
    // {
    //     lname: "MORALES SOSA",
    //     name: "DAVID ALEJANDRO",
    //     age: 21,
    //     career: "IDYGS"
    // },
    
    
]

var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < students.length; i++) {
    var templ = document.getElementById("tbodytempl").content.cloneNode(true);
    var tdnumber = templ.querySelector("span[name='tbodynumber']");
    var tdname = templ.querySelector("span[name='tbodyname']");
    var tdage = templ.querySelector("span[name='tbodyage']");
    var tdcareer = templ.querySelector("span[name='tbodycareer']");

    tdnumber.innerText = i + 1;
    tdname.innerText = students[i].lname + " " + students[i].name;
    tdage.innerText = students[i].age;
    tdcareer.innerText = students[i].career;

    table.append(templ); 
}

