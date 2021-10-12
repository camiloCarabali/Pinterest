import './App.css';
import PinterestLayout from './components/PinterestLayout';
import PinterestHeader from './components/PinterestHeader';
import PinterestHeaderResponsive from './components/PinterestHeaderResponsive';


const App = () => {
  if(window.innerWidth > 375){
    return (
      <div>
        <PinterestHeader />
        <PinterestLayout />  
      </div>
    );
  }else{
    return (
      <div>
        <PinterestHeaderResponsive />  
        <PinterestLayout />  
      </div>
    );
  }
};

export default App;