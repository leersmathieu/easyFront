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
- Le fichier `css/modules/_all.scss` se contente de charger les keyframes et mixins. Nous avons très peu travaillé sur ces aspects



## Ajouter le thème à la sélection
Ajouter le thème dans la sélection de thème ( ./js/themeSelector.js ) comme pour les autres 

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

## Comment créer un nouveau thème a partir des variables ? ( mode simple )

Dans ./css/module/variables dupliquer la feuille de variable "`_`défault.scss" et donner lui le nom adéquat.

Retourner dans la feuille du thème a la racine ( ./css ) et ajouter l'import de la feuille de variable  
(Veillez a placer cette ligne de code juste en dessous des variables par défault) comme ceci :

```scss
@import "modules/variables/default";
@import "modules/variables/NomFeuilleVariable";
@import "modules/all";
@import "themes/default/all";
```

Voilà, il ne reste plus qu'a modifier les variables ( de votre nouvelle feuille de variable ... ) et les changements prendront directement effet.

## Comment remanier entièrement le style d'un thème ? ( mode avancé )

On vas commencer par créer un nouveau dossier a l'intérieur du dossier thème ( ./css/theme/ )

Rajouter a l'intérieur de ce dossier une feuille "`_`all.scss" qui vas importer toutes les autres feuille que l'on mettra dans ce dossier. (Ne pas oublier du coup d'importer les feuilles dans ce fichier quand vous en rajoutez )

Pour modifier le code existant d'un thème il faut deja le voir. Tout se trouve dans ./css/theme/default

A partir de la, vous pouvez rajouter des feuilles scss dans votre nouveau dossier ( a coté du `_`all.scss) en fonction de vos besoin, en gardant le nom correspond a la feuille de style que vous modifiez.

exemple : Vous voulez modifiez le style du terminal. 

vous créer un nouveau fichier `_`terminal.scss ( ou copié carrément celui par défault ( ./css/theme/default/`_`terminal.scss ) si vous voulez garder la structure complète ) dans votre nouveau dossier a coté du "`_`all.scss" (et n'oublier pas de l'importer directement dans le "`_`all.scss".).
_Faites les modifications nécessaire..._

Il ne vous reste plus qu'a importer toutes vos modifs sur votre nouveau thème.
Donc dans ./css retourner sur votre nouvelle feuille de style et ajoutez l'import adéquat

Ce qui donne pour le darkthème par exemple ceci :

```scss
@import "modules/variables/default"; //importation variable par défault
@import "modules/variables/dark"; //importation nouvelle feuille de variable
@import "modules/all"; //importation de module ( pour le moment keyframes et mixins only )
@import "themes/default/all"; //importation du code du thème par défault
@import "theme/dark/all"; //importation du nouveau code pour le thème
```



