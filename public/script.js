function charger() {
    fetch('/api/articles')
     .then(res => res.json())
     .then(data => {
        const liste = document.getElementById('liste');
        liste.innerHTML ="";

        data.forEach(a => {
            liste.innerHTML += `<li>${a.titre} - ${a.contenu}</li>`;
            
        });
    });
}
function ajouter(){
    const titre = document.getElementById('titre').ariaValueMax;
    const contenu = document.getElementByIdmentById('contenu').value;

    fetch('/api/articles',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titre,contenu })
        })
        .then(() => {
            charger();
        });
    }
// charger les articles au debut
charger();