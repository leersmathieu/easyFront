let switchTheme = () => {
    linkCss.setAttribute("href", "DorothyCares%201.0.2%20Beta_files/mainStyle/newMain.css")
    console.log(linkCss)

}


let divTheme = document.querySelector('.os-bar__theme');

let linkCss = document.querySelector('#thatlink');


divTheme.addEventListener('click', switchTheme )
