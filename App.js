import {ScrollView} from 'react-native';
import Profile from './src/components/Profile';
import Diskusi from './src/components/Diskusi';
import Event from './src/components/Event';
import Features from './src/components/Features';
import Artikel from './src/components/Artikel';
import Navbar from './src/components/Navbar';;

const App = () => {
  return (
    <>
    <ScrollView style={{
      backgroundColor: '#F9F9F9'}}>
      <Profile /> 
      <Diskusi />
      <Event /> 
      <Features />
      <Artikel /> 
    </ScrollView>
    <Navbar/>
    </>
  );
};

export default App;
