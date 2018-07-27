let theme = 0
<<<<<<< HEAD
const themeChoice = ["newMain", "themeDebug", "darkTheme"];
=======
const themeChoice = ["newMain", "themeDebug"];
>>>>>>> 8c2f092c05138b2b393573c2a18babf0a5141167
const switchThemeNext = () => 
{
    theme += 1
    if(theme == themeChoice.length) 
    {
        theme = 0
    }
    linkCss.setAttribute("href", "DorothyCares%201.0.2%20Beta_files/themes/"+themeChoice[theme]+".css")
    document.getElementById("FirstTheme").innerHTML = themeChoice[theme]
    // console.log(linkCss)
}

const switchThemeBack = () => 
{
    theme -= 1
    if(theme < 0)
    {
        theme = themeChoice.length-1
    }
    linkCss.setAttribute("href", "DorothyCares%201.0.2%20Beta_files/themes/"+themeChoice[theme]+".css")
    document.getElementById("FirstTheme").innerHTML = themeChoice[theme]
    // console.log(linkCss)
}

document.getElementById("FirstTheme").innerHTML = themeChoice[theme]


// let divTheme = document.querySelector('.os-bar__theme');
let linkCss = document.querySelector('#thatlink');
// divTheme.addEventListener('click', switchTheme );

