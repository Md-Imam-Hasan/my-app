import React from 'react'
import Card from './components/Card'
import Card2 from './components/Card2'
import Data from './data.json'
import State from './components/State'
import ConditionalRendering from './ConditionalRendering/index'
import EventHandleClass from './EventHandleClass/index'
import HooksUseState from './HooksUseState/index'
import Form from './components/Form/Form'


const appName = "TO DO APP"

function App() {
  return <div>
    <h1 className="heading">{appName}</h1>
    {Data.map((x, index) => <Card key={index} title={x.title} desc={x.desc} />
    )}
    <Card2 name="Hasan" desc="Home sweet Home" />
    <State />
    <ConditionalRendering />
    <EventHandleClass />
    <HooksUseState />
    <Form />
  </div>
}

export default App