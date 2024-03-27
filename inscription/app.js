$(document).ready(function() {
  $("#formulaire").submit(function(e) {
    e.preventDefault();
    var nom = $("#nom").val();
    var prenom = $("#prenom").val();
    var email = $("#email").val();
    var mdp = $("#mdp").val();

    // Vous pouvez ajouter ici du code pour envoyer les données du formulaire à un serveur ou une base de données
    
    alert("Merci de vous être inscrit, " + prenom + " " + nom + "! Votre email est " + email + " et votre mot de passe est " + mdp);
  });
});