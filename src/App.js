import Header from './components/header'
import FeedbackList from './components/feedbackList'
import FeedbackForm from './components/feedbackform';
import FeedbackStats from './components/feedbackstats';
import AboutPage from './components/pages/AboutPage';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import { FeedbackProvider } from './context/feedBackContext';
import AboutIconLink from './components/AbouticonLink';
function App() {

 return (
    <FeedbackProvider>
       <Router>
         <Header/>
           <div className="container">
             <AboutIconLink/>
           <Routes>
            <Route exact  path='/' element={
                  <>
             <FeedbackForm/>
             <FeedbackStats />
             <FeedbackList />
                </>
              }/>
        <Route exact path='/about' element={<AboutPage/>}/>
      
    </Routes>
  </div>
 </Router>
</FeedbackProvider>
  );
}

export default App;
