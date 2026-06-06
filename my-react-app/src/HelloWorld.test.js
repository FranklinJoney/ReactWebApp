import {render, screen} from '@testing-library/vue'
import HelloWorld from './components/HelloWorld.vue'

vi.mock('/icons.svg', () => ({
  default: '/icons.svg'
}))

test('renders HelloWorld message', () => {
    render(HelloWorld,{ props: {msg: 'Get started'}})
    expect(screen.getByText(/Get started/i)).toBeInTheDocument()
})