import { Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import Produtos from './pages/Produtos/Produtos'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produtos" exact component={Produtos} />
    </Switch>
  )
}

export default Routes