import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Section from './components/section.js';
import About from './components/about.js';

export const sectionData=[
  {
      title:'Experience',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates delectus modi, optio iste obcaecati hic sit temporibus cum beatae? Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias iusto dicta impedit vel modi facere dolores mollitia distinctio quaerat.'
  },
  {
      title:'Qualification',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates delectus modi, optio iste obcaecati hic sit temporibus cum beatae? Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias iusto dicta impedit vel modi facere dolores mollitia distinctio quaerat.'
  },
  {
      title:'Projects',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates delectus modi, optio iste obcaecati hic sit temporibus cum beatae? Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias iusto dicta impedit vel modi facere dolores mollitia distinctio quaerat.'
  },
  ];



function App() {
  return (
    
    <div>
     <Header/>
     <About/> <hr/>
     {
      sectionData.map(item=>{
       return(
        <div><Section title={item.title} desc={item.desc} /><hr/></div>
       );
      })
     }
     <Footer/>
    </div>
    
  );
}

export default App;

// conditions = ternary
// loops = map.filter.reduce(those hof that returns something)