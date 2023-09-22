let home_btn = document.getElementById('home_btn')
let about_btn = document.getElementById('about_btn')
let info_btn = document.getElementById('info_btn')

console.log(info_btn);

let about_section = document.getElementById('about_section')
let info_section = document.getElementById('info_section')

home_btn.addEventListener('click', () => {
    about_section.classList.remove('active')
    info_section.classList.remove('active')
})

about_btn.addEventListener('click', () => {
    console.log("vao");

    about_section.classList.add('active')
    info_section.classList.remove('active')
})

// roadmap_btn.addEventListener('click', () => {
//     about_section.classList.remove('active')
//     info_section.classList.remove('active')
// })

info_btn.addEventListener('click', () => {
    console.log("vao");
    about_section.classList.remove('active')
    info_section.classList.add('active')
})


let wallet_token = document.getElementById('wallet_token')

wallet_token.addEventListener('click', e => {
    navigator.clipboard.writeText(e.target.innerText);
    alert('Text copied!')
})

let contract_section = document.getElementById('contract_section')
let contract_close_btn = document.getElementById('contract_close_btn')


contract_close_btn.addEventListener('click', () => {
    contract_section.classList.remove('active')
})