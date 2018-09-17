import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from '../../registerServiceWorker'

class App extends React.Component {
  public componentDidMount() {
    fetch('/api/test')
      .then(response => {
        this.setState({
          res: response,
        })
        return response.json()
      })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">fuck!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root') as HTMLElement,
)
registerServiceWorker()
