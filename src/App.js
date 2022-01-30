  import * as React from "react";

  import bg from './bg.png';
  import card from './card.png';


  import './App.css';

  function App() {








    return (
      <div className="App">

            <div className="row" style={{padding:'25px', background:`url(${bg})`, backgroundSize:'contain',height:'100%', minHeight:'772px'}}>


              <br />
              <div className="col-12">



                <div style={{background:`url(${card})`, backgroundSize:'cover', width:'100%', maxWidth:'992px', height:'759px', margin:'0 auto', display:'block', borderRadius:'15px'}}>
                  <br /> <br />
                  <p style={{fontSize:'14px',color:'#FB5843', textAlign:'center'}}><br /></p>

                  <h2 style={{fontSize:'32px',color:'white', textAlign:'center', fontWeight:'bold'}}> Buy $LQD</h2>

                  <br />
                  <div style={{ overflow: "hidden", margin: "0 auto", display:'block', maxWidth: "736px"}} >
                  <iframe title="avax dex" allowTransparency="true" src="https://dexavaxdarkonly.netlify.app/swap?outputCurrency=0xcF319837A5240b3dEf0D67De726ce4758CF0Bcc2" scrolling="no" style={{backgroundColor:'transparent', border: "0px none",height: "938px",marginTop: "-217px",width: "800px",maxWidth:'100%', marginBottom: "-132px"}} />
                  </div>

                </div>
              </div>
             </div>
      </div>
    );
  }

  export default App;
