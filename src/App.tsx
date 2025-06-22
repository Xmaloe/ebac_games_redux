import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App

// const [games, setGames] = useState<Game[]>([])
// const [carrinho, setCarrinho] = useState<Game[]>([]) **Foi criado o Reducer carrinho

// useEffect(() => {
//   fetch('/produtos')
//     .then((res) => res.json())
//     .then((res) => setGames(res))
// }, [])

// function adicionarAoCarrinho(jogo: Game) {
//   if (carrinho.find((game) => game.id === jogo.id)) {
//     alert('Item já adicionado')
//   } else {
//     setCarrinho([...carrinho, jogo])
//   }
// }

// return (
//     <Provider store={store}>
//         <GlobalStyle />
//         <div className="container">
//           <Header itensNoCarrinho={carrinho} />
//           <Produtos jogos={games} adicionarAoCarrinho={adicionarAoCarrinho} />
//         </div>
//     </Provider>
//   )
// }
