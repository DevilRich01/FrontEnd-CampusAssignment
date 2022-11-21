//Body Picture Art
let panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        deactivate();
        panel.classList.add('active')
    })
});

function deactivate(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}

