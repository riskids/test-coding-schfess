import {StyleSheet ,View, Text, Image} from 'react-native';

const Profile = () => {
  return (
    <View style={{
          backgroundColor: 'white', 
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
          }}>
        <View style={{marginHorizontal:16}}>
        <View style={{
              flexDirection: 'row',
              justifyContent:'space-between', 
              alignItems:'center'}}>
              <View
                  style={{
                    flexDirection: 'row',
                    fontFamily: 'Roboto',
                  }}>
                  <Image style={{
                    width: 42, 
                    height: 42}} 
                    source={require('../../src/images/user.png')}/>
                  <View style={{ 
                    flexDirection:'column', 
                    marginLeft:16}}>
                    <Text style={{
                      fontSize: 15, 
                      fontWeight: 'bold', 
                      color: '#467D7F'}}>Budi Kurnia</Text>
                    <Text style={{ color: '#467D7F'}}>IX SMA</Text>
                  </View>
              </View>
            <Image
              style={{
                width: 30,
                height: 30
              }}
              source={require('../../src/images/ring.png')}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              borderRadius: 9,
              marginTop:15,
              backgroundColor: '#467D7F'
            }}>
            <View style={{
              flexDirection: 'row',
              alignItems:'center',
              justifyContent:'space-evenly',
              flex:1,
              paddingVertical:19
              }}>
              <View style={{
                flexDirection: 'column',
                flex:4
                }}>
                <Text style={{
                  color: '#FFFFFF', 
                  fontSize: 12, 
                  fontWeight: '700', 
                  fontHeight: 14}}>Sch Poin</Text>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center'}}>
                  <Image
                    style={{
                      height: 30, 
                      width: 30}}
                    source={require('../../src/images/star-circle.png')}
                  />
                  <Text style={{color: '#E6BC36', fontSize: 24, fontWeight: '700', fontHeight: 28}}>2523</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex:1,
                }}>
                <Image
                  style={{
                    height: 21, 
                    width: 21}}
                  source={require('../../src/images/add_circled.png')}
                />
                <Text style={styles.textProfile}>Isi Poin</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex:1
                }}>
                <Image
                  style={{height: 21, width: 21}}
                  source={require('../../src/images/circle.png')}
                />
                <Text style={styles.textProfile}>Tukar Poin</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#DDFFF8',
              flexDirection: 'row',
              marginTop: 15,
              paddingHorizontal: 6,
              height: 35,
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Image
              style={{height: 25, width: 25, paddingTop: 3, paddingButtom: 4}}
              source={require('../../src/images/annaunce.png')}
            />
            <Text style={{
              marginLeft:13,
              color:'#467D7F'
            }}>
              Berita info terkini seputar pendidikan...
            </Text>
          </View>
        </View>
          
        <View
          style={{
            flexDirection: 'row',
            marginTop: 13,
            marginHorizontal: 16,
            borderBottomWidth:1,
            borderBottomColor:'#E0E0E0',
            paddingVertical:5,
            alignItems: 'center',
          }}>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
            <Image
              style={{height: 25, width: 25, paddingTop: 3, paddingButtom: 4}}
              source={require('../../src/images/help.png')}
            />
            <Text style={{
              marginLeft: 6,
              color: '#828282'}}>Mau tanya apa sekarang?</Text>
            <Text style={{
              marginLeft: 3, 
              color: '#367D7F'}}>Klik untuk bertanya</Text>
            <Image
              style={{
                height: 24, 
                width: 15, 
                marginLeft:6,
                alignSelf:'flex-end'
              }}
              source={require('../../src/images/arrow_left_md.png')}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 16,
            marginRight: 16,
          }}>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textProfile:{
    marginTop:5,
    color: '#FFFFFF', 
    fontSize: 10, 
    fontHeight: 12, 
    fontWeight: '500',
  }
});

export default Profile;