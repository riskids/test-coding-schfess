import {View, Text, Image, ScrollView} from 'react-native';

const Artikel = () => {
return (
      <View style={{ 
        backgroundColor: '#F9F9F9',
        marginBottom:60,
        
        }}>
      <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 14,
          marginRight: 10, alignItems: 'center'}}> 
        <Image
        style={{
          width: 24,
          height: 24,
          marginRight: 10
        }}
        source={require('../../src/images/artikel.png')}
        />
        <Text style={{ fontSize: 15, fontWeight: '500', fontHeight: 125, color: '#467D7F', }}> 
          Rekomendasi Artikel
        </Text>
        <View style={{ borderRadius: 15 ,height: 20, width: 52, backgroundColor: '#DDFFF8', marginLeft: 145, alignItems: 'center', paddingTop: 3}}>
          <Text style={{ color: '#90D5C7', fontSize: 10, fontWeight: '400', fontHeight: 11,}}>
            See All
          </Text>
        </View>
      </View>

      
      <View style={{ marginLeft: 13, marginTop: 8,}}>
        <Text style={{ fontSize: 12, fontWeight: '500', fontHeight: 125, color: '#828282', }}> Temukan Berbagai Artikel Bermanfaat Disini</Text>
        <Text style={{ fontSize: 10, fontWeight: '400', fontHeight: 124, color: '#BDBDBD', }}> Cocok buat kamu yang lagi doyan baca-baca nih~</Text>
      </View>


        <ScrollView horizontal={true} style={{ paddingLeft: 13, paddingTop: 15, flexDirection: 'row', }}>
          <View>
              <View style={{ height: 124, width: 300, backgroundColor: '#C4C4C4', borderTopLeftRadius: 20, borderTopRightRadius: 20}}> 
              </View>  
              <View style={{ height: 70, width: 300, backgroundColor: '#FFFFFF', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}> 
                <Text style={{ fontSize: 10, fontWeight: '500', fontHeight: 125, color: '#467D7F', marginLeft: 16, marginTop: 8, marginRight: 18,}}>
                  Adipiscing purus libero aliquam at sit diam.
                </Text>  
                <Text style={{ fontSize: 8, fontWeight: '300', fontHeight: 125, color: '#BDBDBD', marginLeft: 16, marginRight: 18, marginTop: 5, marginBottom: 8}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis mattis faucibus at. Tristique dignissim tincidunt leo.
                </Text>  
              </View>
          </View>
          <View style={{paddingLeft: 10}}>
              <View style={{ height: 124, width: 300, backgroundColor: '#C4C4C4', borderTopLeftRadius: 20, borderTopRightRadius: 20}}> 
              </View>  
              <View style={{ height: 70, width: 300, backgroundColor: '#FFFFFF', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}> 
                <Text style={{ fontSize: 10, fontWeight: '500', fontHeight: 125, color: '#467D7F', marginLeft: 16, marginTop: 8, marginRight: 18,}}>
                  Adipiscing purus libero aliquam at sit diam.
                </Text>  
                <Text style={{ fontSize: 8, fontWeight: '300', fontHeight: 125, color: '#BDBDBD', marginLeft: 16, marginRight: 18, marginTop: 5, marginBottom: 8}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis mattis faucibus at. Tristique dignissim tincidunt leo.
                </Text>  
              </View>
          </View>    
        </ScrollView>
    </View>
);
};

export default Artikel;