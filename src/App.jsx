  import './App.css'
  import HomePage from './Pages/HomePage/HomePage'
  import Navbar from './Components/Navbar/Navbar'
  import MainPage from './Pages/MainPage/MainPage'

  function App() {
    return (
      <>
      <div className="section0">
        <Navbar />
      </div>
        <div className="container">
          <div className="section1">
            <HomePage />
          </div>
          <div className="angled-line" />
            <div className="section2">
            <MainPage />
          </div>
        </div>
      </>
    )
  }

  export default App
