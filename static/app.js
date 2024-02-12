document.addEventListener("DOMContentLoaded", () => {
    const personaList = document.getElementById("persona-list");
    
});

function cargarPersonas(){ 
    fetch("/personas", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    })
    .then(response => response.json())
    .then(data => { 
    personaList.innerHTML = "";

    data.forEach(persona => {
        const personaDiv = document.createElement("div");
        personaDiv.innerHTML = `
        <strong> Nombre: </strong> ${persona.nombre} <br>
        <strong> Apellido: </strong> ${persona.apellido} <br>
        <strong> Email: </strong> ${persona.email} <br>
        <strong> DNI: </strong> ${persona.dni} <br>
        `;
        personaList.appendChild(personaDiv);
    });
}) 
}
