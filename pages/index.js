import Head from 'next/head'
import {react,useState,useEffect} from 'react'
import Image from 'next/image'
import {Select} from 'antd'
const { Option } = Select;

import Header from './components/header';
//import 'mapbox-gl/dist/mapbox-gl.css';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 import Footer from './components/footer';
 import Searchbar from './components/searchbar';
 var axios = require('axios');
export default function Home() {
  const [pageIsMounted, setPageIsMounted] = useState(false)
  useEffect(() => {
    setPageIsMounted(true)
    var map = new mapboxgl.Map({
      container: 'YOUR_CONTAINER_ELEMENT_ID',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [72.877655,19.075983 ], zoom: 10 ,
    });
}, [])
const contentStyle = {
  height: '200px',
  width:"200px",
  boxShadow: '0 1px 1px rgb(0 0 0 / 8%), 0 2px 2px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 16%), 0 8px 8px rgb(0 0 0 / 20%)',
  background: 'white',
  margin:'10px',
  borderRadius: '16px'
};
function handleChange(value) {
  console.log(`selected ${value}`);
}

  mapboxgl.accessToken = 'pk.eyJ1Ijoicml5YW5lc3QiLCJhIjoiY2t2Y2JjNWI4Nm5qaDJvczczMW84YjFzdyJ9._b1tclRVmyGQZmUcoKfKhQ';

  return (
    <div >
      <Head>
        <title>Grace Property</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/onlyLogo.png" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <main >
        <Header/>
        <div style={{height:"700px",width:'100%',position:'relative'}}>
          <Searchbar/>
          <br/>        <br/>   
          <div>
            <div style={{height:"500px"}} id="YOUR_CONTAINER_ELEMENT_ID"></div>
          </div>
        </div>
          <br/>        <br/>   <br/>        <br/>
        <br/>        <br/>     
        <div>
            <h1>Properties</h1>
        <div  style={{display:'flex',overflowX:'scroll',verticalline:"middle"}}>
                
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
                </div>
                </div>

                <div>
            <h2>Projects in mumbai</h2>
        <div  style={{display:'flex',overflowX:'scroll',verticalline:"middle"}}>
                
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
                </div>
                </div>

                <div>
            <h1>News</h1>
        <div  style={{display:'flex',overflowX:'scroll',verticalline:"middle"}}>
                
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
                </div>
                </div>


        <br/>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      </main>

<Footer/>

    </div>
  )
}
