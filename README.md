# evaluation-js-php-notes-de-musique

Convertisseur de Notes
Description

Cette application web permet de convertir des notes musicales sélectionnées par l'utilisateur via un formulaire HTML. La conversion est réalisée côté serveur grâce à un script PHP (convert.php) qui reçoit la note sélectionnée et renvoie la conversion correspondante.

L'interface utilisateur comprend :

Un formulaire avec une liste déroulante des notes musicales (do, ré, mi, fa, sol, la, si)

Une zone d'affichage du résultat de la conversion

Un script JavaScript (script.js) qui interagit avec le backend PHP de manière dynamique (via AJAX ou autre)

Contenu du projet

index.html : page HTML contenant le formulaire de sélection de note

convert.php : script PHP qui traite la note sélectionnée et retourne la conversion

style.css : fichier de style pour la présentation (optionnel)

script.js : script JavaScript pour gérer la soumission du formulaire et afficher la réponse sans recharger la page

Fonctionnement

L'utilisateur sélectionne une note dans la liste déroulante

Le formulaire envoie la note sélectionnée à convert.php (par AJAX si script.js est configuré ainsi)

Le script PHP traite la note et renvoie la conversion (par exemple, fréquence, notation en solfège, équivalent en notation anglo-saxonne, etc.)

Le résultat est affiché dynamiquement dans la page web dans la zone #resultat

Installation et utilisation

Copier les fichiers dans un environnement avec serveur PHP (ex. Apache, XAMPP, WAMP)

Ouvrir la page index.html dans un navigateur

Choisir une note dans le menu déroulant pour voir sa conversion s’afficher
