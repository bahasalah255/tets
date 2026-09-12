import AppRouter from './router.jsx'
import { QuoteProvider } from './context/QuoteContext.jsx'

export default function App() {
  return (
    <QuoteProvider>
      <AppRouter />
    </QuoteProvider>
  )
}
