import { useRef } from 'react'
import './App.css'
import fetchAPI from './services/fetchCEP'

function App() {
  const cepRef = useRef(null)
  const inputRef = useRef(null)
  const resultRef = useRef(null)

  async function handleSearch() {
    const inputValue = inputRef.current.value

    if(inputValue === '') {
      alert('Por favor, preencha um CEP')
    }
    
    try{
      const response = await fetchAPI(inputValue)
      cepRef.current = response
      resultRef.current.innerHTML = `
        <h3>${response.cep}</h3>
        <span>Rua: ${response.address}</span><br>
        <span>Bairro: ${response.district}</span><br>
        <span>Cidade: ${response.city} - ${response.state}</span><br>
        <span>DDD: ${response.ddd}</span>
      `
      inputRef.current.value = ''
    } catch {
      alert('Ocorreu um erro ao buscar!')
    }
  }

  return (
    <>
      <div>

        <h1>Buscando CEP</h1>
        <div class='input-area'>
          <input 
            type="text" 
            placeholder='Insira aqui o CEP'
            ref={inputRef}
            class="search__input"
          />
          {/* <button 
            onClick={handleSearch}
            class='find-cep'
            >  
              Procurar CEP
          </button> */}
          <button class="find-cep" onClick={handleSearch}>
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Buscar</span>
          </button>
        </div>

        <div>
          <main 
            ref={resultRef}>            
          </main>
        </div>
      </div>
    </>
  )
}

export default App
