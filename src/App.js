import logo from './logo.svg';
import './App.css';
import FormContainer from './components/form.jsx';
import ImageContainer from './components/imagecontainer.jsx';
import Editor from './components/editor.jsx';
import "./static/index.css"
import ImageScroll from './components/imageselector.jsx';
import { useSelector, useDispatch } from 'react-redux'
import ImageDownloader from './components/image_downloader'
import NavBar from './components/navbar';

function App() {
  var img_url = useSelector((state) => state.meme.editedMemeUrl)
  console.log('--------', img_url)
  if (img_url == '') {
    return (
      <>
        <NavBar></NavBar>
        <Editor></Editor>
        <ImageScroll></ImageScroll>
      </>

    );
  }
  else {
    return (
      <>
        <NavBar></NavBar>
        <ImageDownloader img_url={img_url}></ImageDownloader>
      </>
    )
  }
}

export default App;
