// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import P_Rightbar from './Component/P_Rightbar';
import P_Sidebar from './Component/P_Sidebar';
import './Component/styles/style.css';




function App() {

  return (

    <div className='app'>
      <div className='leftside'><P_Sidebar></P_Sidebar></div>
      <div className='rightside'><P_Rightbar></P_Rightbar></div>



    </div>







  );
}

export default App;
