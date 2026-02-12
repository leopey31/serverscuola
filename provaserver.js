<<<<<<< HEAD
<html>
    <head>
        <title>Esempio SQLite + AJAX + Python puro</title>
    </head>
    <body>
        <h2>Elenco studenti</h2>
        <ul id="lista"></ul>
        <script>
            fetch("http://localhost:8000/studenti")
            .then(r => r.json())
            .then(dati => {
            dati.forEach(riga => {
            const li = document.createElement("li");
            li.textContent = riga.nome + " - voto: " + riga.voto;
            lista.appendChild(li);
            });
            })
            .catch(err => console.error("Errore:", err));
        </script>
    </body>
=======
<html>
    <head>
        <title>Esempio SQLite + AJAX + Python puro</title>
    </head>
    <body>
        <h2>Elenco studenti</h2>
        <ul id="lista"></ul>
        <script>
            fetch("http://localhost:8000/studenti")
            .then(r => r.json())
            .then(dati => {
            dati.forEach(riga => {
            const li = document.createElement("li");
            li.textContent = riga.nome + " - voto: " + riga.voto;
            lista.appendChild(li);
            });
            })
            .catch(err => console.error("Errore:", err));
        </script>
    </body>
>>>>>>> 9fac89ef215a74d6acb0b53ac4a826d86e89c230
</html>