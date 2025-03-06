

import Header from "./components/Header"
import Overview from "./components/Overview"
import OverviewContainer from "./components/OverviewContainer"
import { Users, Metrics} from "./data/users"

function App() {


  return (
    <main className="">
      <Header/>
      <div className="max-w-6xl mx-auto relative">
      <OverviewContainer Users={Users} />
      <Overview metrics={Metrics} />
      </div>
    </main>
  )
}

export default App
