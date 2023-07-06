import UsernameForm from './UsernameForm';
import SignupForm from './SignupForm';
import ShoppingListForm from './ShoppingListForm';
import ShoppingList from './ShoppingList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsernameForm />
      <SignupForm />
      <ShoppingListForm />
      <ShoppingList />
    </>
  )
}

export default App
