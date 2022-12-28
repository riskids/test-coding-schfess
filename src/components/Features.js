import {View, Text, Image} from 'react-native';

const Features = () => {
  return (
    <View style={{
      backgroundColor: 'white', 
      marginTop:7,
      paddingBottom:18}}>
      <View
        style={{
          marginLeft: 17,
          marginTop: 16,
          flexDirection: 'row',
        }}>
        <Image
          style={{height: 24, width: 24}}
          source={require('../../src/images/diamond.png')}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: '#467D7F',
            fontHeight: 125,
            paddingLeft: 10,
          }}>
          Features
        </Text>
      </View>
      <View>
        <View
          style={{
            flex:1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10,
            marginHorizontal:16
          }}>
          <View
            style={{
              flex:1,
              backgroundColor: '#DDFFF8',
              borderRadius: 10,
              padding:10,
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{height: 80, width: 80}}
                source={require('../../src/images/trivia2.png')}
              />
            </View>
            <View style={{
              marginTop:8
            }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                  fontHeight: 11,
                  color: '#467D7F',
                }}>
                Klik TRIVIA, biar tambah pengetahuan!
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  fontWeight: '400',
                  fontHeight: 125,
                  color: '#467D7F',
                  marginTop:3
                }}>
                Buat sekedar pengetahuan, mungkin beberapa informasi disini baru
                kamu tau loh. Jadi jangan berhenti buat nambah pengetahuanmu
              </Text>
            </View>
          </View>

          <View
            style={{
              flex:1,
              marginLeft:16,
              backgroundColor: '#FDD1D1',
              borderRadius: 10,
              padding:10
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{height: 80, width: 80}}
                source={require('../../src/images/utbk2.png')}
              />
            </View>
            <View style={{
              marginTop:8
            }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                  fontHeight: 11,
                  color: '#D97F7F',
                }}>
                Data Skor Rekapitulasi UTBK!
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  fontWeight: '400',
                  fontHeight: 125,
                  color: '#FA9B9B',
                  marginTop:3
                }}>
                Wajib Cek skor rekapitulasi UTBK sebelum pilih Perguruan Tinggi,
                jadi kamu bisa bikin strategi sendiri buat masuk ke Perguruan
                Tinggi yang dipilih
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Features;
