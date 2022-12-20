import { SearchInputContainer } from './styles'

export function SearchInput() {
  return (
    <SearchInputContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <input placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  )
}
