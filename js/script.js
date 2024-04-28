const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit',(e) => {
    const cep = frm.cepOrigem.value

    switch(cep){
        case '06000000': resp.innerText = `${cep} - Pertence a cidade de Osasco - SP`
        break
        case '06300000': resp.innerText = `${cep} - Pertence a cidade de Carapicuiba - SP`
        break
        case '06400000': resp.innerText = `${cep} - Pertence a cidade de Barueri - SP`
        break
        case '06500000': resp.innerText = `${cep} - Pertence a cidade de Santana do Parnaiba - SP`
        break
        case '06650000': resp.innerText = `${cep} - Pertence a cidade de Itapevi - SP`
        break
        case '06600000': resp.innerText = `${cep} - Pertence a cidade de Jandira - SP`
        break
        case '06700000': resp.innerText = `${cep} - Pertence a cidade de Cotia - SP`
        break
        case '06730000': resp.innerText = `${cep} - Pertence a cidade de Vargem Grande Paulista - SP`
        break
        case '06750000': resp.innerText = `${cep} - Pertence a cidade de Taboão da Serra - SP`
        break
        case '06800000': resp.innerText = `${cep} - Pertence a cidade de Embu - SP`
        break
        case '06850000': resp.innerText = `${cep} - Pertence a cidade de Itapecerica da Serra - SP`
        break
        case '06900000': resp.innerText = `${cep} - Pertence a cidade de Embu-Guaçu - SP`
        break
        case '07000000': resp.innerText = `${cep} - Pertence a cidade de Guarulhos - SP`
        break
        case '07400000': resp.innerText = `${cep} - Pertence a cidade de Arujá - SPhy`
        break

        default: resp.innerText = `${cep} nao localizado nos nossos sistemas `
    }

    

    e.preventDefault()
})