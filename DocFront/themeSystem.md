# Fonctionnement du système de thème

Une fois les variables déclarée on à mis en place le système de thème.  
Pour faire simple, on change avec JS la feuille de style en fonction du thème sur lequel on se trouve

Voici une partie du code qui explique comment cela fonctionne exactement :

```js

const linkCss = document.querySelector('#source-css');
const themeSelector = document.querySelector('#theme-selector');
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
let themeIndex = 0;
const fx = new TextScramble(themeSelector.querySelector('.theme-selector-title'));
let hoverThemeSelector = false;
let themeListIsVisible = false;
let delayApparition = 50;
let themeLoad, themeUnload;
/**
 * @function switchTheme
 * @description Change for another theme
 * @param {int|string} switchTo If 'int', switch to many theme before or after; if 'string', it must be a theme name
 */
let switchTheme = (switchTo) => {
    if (themeUnload != undefined){
        themeUnload();
    } 
    if(typeof switchTo == 'number'){
        themeIndex = (themeIndex + switchTo) % themeChoice.length;
        if(themeIndex < 0){
            themeIndex = themeChoice.length - 1;
        }
    }
    else if(typeof switchTo == 'string'){
        for(let i = themeChoice.length - 1; i >= 0; i--){
            if(themeChoice[i].fileName == switchTo){
                if(themeChoice[themeIndex].fileName == switchTo){
                    return; // We stop here to not "change" the theme with the same theme.
                }
                themeIndex = i;
            }
        }
    }

    linkCss.setAttribute("href", "/css/themes/"+themeChoice[themeIndex].fileName +".css");
    let themeScript = document.querySelector('#themeScript');
    if(checkIfThemeHaveScript()){
        themeScript.setAttribute("src", "/js/theme/" + themeChoice[themeIndex].fileName + ".js");
        themeScript.onload = ()=>{
            whenSwitchOnThisTheme();
        };
    }

    if (themeLoad != undefined){
        themeLoad();
    }

    fx.setText(themeChoice[themeIndex].publicName);
};

```

## Pour l'incrustation dans Dorothy (design)

On s'est finalement penché sur un onglet avec un bouton ( flèche ) suivant et précédent incrusté dans le "header" de dorothy.
Une liste est aussi déroulée si on clique sur le nom du thème
