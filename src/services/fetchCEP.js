const BASE_URL = 'https://cep.awesomeapi.com.br/json/'

async function fetchCEP(input) {
    const response = await fetch(`${BASE_URL}${input}`)
    const data = await response.json()
    return data
}

export default fetchCEP