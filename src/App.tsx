import { useState } from 'react'

import JSONInput from './components/JSONInput'
import JSONViewer, { type JsonValue } from './components/JSONViewer'

import './App.css'

function App() {
  const [json, setJson] = useState<JsonValue | null>(null);

  return (
    <>
      <section id="center">
        <div>
        </div>
        <div>
          <h1>Explore JSON...</h1>
          <h2>powered by Vite + React</h2>
        </div>
        <div>
          <JSONInput onParse={setJson} />
        </div>
      </section>

      {json && <JSONViewer data={json} />}
    </>
  )
}

export default App
