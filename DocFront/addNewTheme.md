# Comment créer un nouveau theme ?
## Créer le fichier .CSS
Pour commencer, il faut créer une nouvelle feuille scss ( dans le dossier `css/` ) avec un nom correspondant au thème que l'on veut créer.

Sur cette feuille importer le thème par défault :

```scss
@import "modules/variables/default";
@import "modules/all";
@import "themes/default/all";
```
- Les fichiers se trouvant dans le dossiers `css/modules/variables/` regroupent uniquement les variables, permettant de configurer certains aspects d'un style très simplement en changeant seulement la valeur d'une variable.
Le fichier `_default.scss` contient l'ensemble des variables, et sauf cas particulier, il faudra toujours importer ce fichier en premier lieu.
Les autres fichiers de variables, chacun propre à un thème, viennent écraser les valeurs de certaines variables.
- Le fichier `css/modules/_all.scss` se contente de charger les keyframes et mixins. Nous avons très peu travaillé sur ces aspects, donc on a un seul fichier de chaque, commun à tous les thèmes.
- Enfin, un dossier correspondant à chaque thème se trouve dans le dossier `css/themes/`.
Dans ce dossier, on trouve un fichier propre à chaque groupe d'éléments du DOM. Le fichier `_all.scss` se contente d'importer l'ensemble.

### Comment créer un nouveau thème à partir des variables ? ( mode simple )

Dans `css/modules/variables/`, créez une feuille avec le nom de votre thème (ex.: `css/modules/variables/_votreTheme.scss`). Dans cette feuille, dupliquer les variables que vous voulez écraser et/ou créez votre propre variable. Vous trouverez l'ensemble des variables existante dans la feuille de variable `_défault.scss`.

Retournez dans la feuille du thème ( `css/votreTheme.scss` ) et ajoutez l'import de la feuille de variable.
Veillez à placer cet import juste en dessous de l'import des variables par défault comme ceci :

```scss
@import "modules/variables/default";
@import "modules/variables/votreTheme";
@import "modules/all";
@import "themes/default/all";
```

Voilà, il ne reste plus qu'à modifier les variables et les changements prendront directement effet (n'oubliez pas de recompiler le CSS !).

**Note à propos de l'ajout de variables :** Si vous créez une nouvelle variable, faites le dans :
- Le fichier de votre thème si cette variable n'a du sens qu'avec votre thème.
- Le fichier `css/modules/variables/_defaults.scss` si votre variable doit être prise en compte par l'ensemble des thèmes.

### Comment remanier entièrement le style d'un thème ? ( mode avancé )

On va commencer par créer un nouveau dossier à l'intérieur du dossier thème (ex.: `/css/theme/votreTheme` )

Rajouter à l'intérieur de ce dossier une feuille `_all.scss` qui va importer toutes les autres feuilles que l'on mettra dans ce dossier. (Ne pas oublier du coup d'importer les feuilles dans ce fichier quand vous en rajoutez )

Pour modifier le code existant d'un thème il faut deja le voir. Tout se trouve dans `/css/theme/default/`.

À partir de là, vous pouvez rajouter des feuilles SCSS dans votre nouveau dossier (au même niveau que `_all.scss`) en fonction de vos besoins, en gardant le nom correspondant à la feuille de style que vous modifiez.

Par exemple, si vous voulez modifiez le style du terminal. 

Vous créer un nouveau fichier `_terminal.scss` ( ou copiez celui par défault si vous préférez : `css/theme/default/`_`terminal.scss`) dans votre nouveau dossier au même niveau `_all.scss` (et n'oubliez pas de l'importer directement dans le `_all.scss`).
_Faites les modifications nécessaire..._

Il ne vous reste plus qu'à importer toutes vos modifications sur votre nouveau thème.
Donc dans `css/`, retournez sur votre nouvelle feuille de style et ajoutez l'import adéquat.

Ce qui donne pour le *darkTheme* par exemple ceci :

```scss
@import "modules/variables/default"; // Importation des variables par défault
@import "modules/variables/dark"; // Importation des variables propre au thème
@import "modules/all";
@import "themes/default/all"; // Importation du style par défault
@import "theme/dark/all"; // Importation du style propre au thème
```


## Ajouter le thème à la sélection
Pour ajouter le thème dans la sélection de thèmes disponible sur le site, il faut l'inclure dans la liste.
Tout se passe dans le fichier `js/themeSelector.js`: 

```js
const themeChoice = [
    {
        publicName: "Standard",
        fileName: "turingTheme"
    }, {
        publicName: "Debug",
        fileName: "themeDebug"
    }, {
        publicName: "Night",
        fileName: "darkTheme"
    }, {
        publicName: "Retro",
        fileName: "retroTheme"
    }, {
        publicName: "Legacy",
        fileName: "newMain"
    }];
 ```
 Il y a deux clefs :
 - `publicName`: Le nom qui sera afficher dans la liste, c'est donc le nom que les utilisateurs verront.
 - `fileName`: Le nom de votre fichier CSS.
 
 À terme, une troisième clef devrait signifier si le thème est accessible uniquement sur la version dev ou non (par exemple, `devOnly: true/false`).
