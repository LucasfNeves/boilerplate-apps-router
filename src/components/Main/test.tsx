import { render, screen } from '@testing-library/react'
import { Main } from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    // render: renderiza o componente
    const { container } = render(<Main />)

    // busca a existência do elemento
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // gerar um snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
