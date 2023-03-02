import './App.css';
import Cards  from './Cards';
import Data from './Data';

function App() {

  return (
    <div className="App">
      <h1 style={{color:"red"}}>Collection of PrimeVideos</h1>
      <div>
      {Data.map((elem)=>{
        return(
          <Cards
          key={elem.id}
          imgsrc={elem.imgsrc}
          title={elem.title}
          fname={elem.fname}
          link={elem.link}
          />
          
        )
       
      })
    }
      </div>
      
    </div>
  )
}

export default App
