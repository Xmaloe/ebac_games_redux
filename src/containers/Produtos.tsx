import { Game } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { adicionar } from '../store/reducers/carrinho'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetJogosQuery()
  const dispatch = useDispatch()

  function handleAdicionar(jogo: Game) {
    dispatch(adicionar(jogo))
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {jogos?.map((game) => (
        <Produto key={game.id} game={game} aoComprar={handleAdicionar} />
      ))}
    </S.Produtos>
  )
}

export default Produtos

// type Props = {
//   jogos: Game[]
//   // adicionarAoCarrinho: (jogo: Game) => void
// }
