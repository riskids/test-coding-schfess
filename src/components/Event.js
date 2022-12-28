import {StyleSheet, View, Text, TextInput, Image, ScrollView} from 'react-native';

const Event = () => {
  return (
    <View style={{backgroundColor: 'white',paddingVertical:27}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal:16
        }}>
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={require('../../src/images/event.png')}
        />
        <Text style={{
          fontSize: 15,
          fontWeight: '500',
          color: '#467D7F',
          fontHeight: 125,
          paddingLeft: 10,
        }}>Event</Text>
      </View>

      <View style={{
        flexDirection:'row',
        flex:1,
        marginTop:12,
        alignItems:'center',
        marginHorizontal:16
      }}>
        <View style={styles.sectionStyle}>
          <Image
            source={require('../../src/images/search.png')}
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="Cari event disini"
            underlineColorAndroid="transparent"
          />
        </View>
        <Image
          style={{
            width: 40,
            height: 40,
            marginLeft:5,
            borderRadius:5,
          }}
          source={require('../../src/images/setting.png')}
        />
      </View>

      <View>
        <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
          <View style={{}}>
            <Image
              style={{
                marginLeft: 16,
                marginTop: 11,
                marginRight: 20,
                width: 130,
                height: 184,
              }}
              source={require('../../src/images/education_fair.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginLeft: 16,
                  marginTop: 6,
                  marginRight: 4,
                  height: 10,
                  width: 10,
                }}
                source={require('../../src/images/calendar.png')}
              />
              <Text style={{fontSize: 9, color: '#467D7F', paddingTop: 5}}>
                2 Desember 2022
              </Text>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  marginLeft: 16,
                  marginTop: 6,
                }}>
                2021 Education Fair
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  width: 120,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet suspendisse id sed sit.
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  color: '#467D7F',
                }}>
                Selengkapnya
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{
                marginLeft: 16,
                marginTop: 11,
                marginRight: 20,
                width: 130,
                height: 184,
              }}
              source={require('../../src/images/design_thinking.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginLeft: 16,
                  marginTop: 6,
                  marginRight: 4,
                  height: 10,
                  width: 10,
                }}
                source={require('../../src/images/calendar.png')}
              />
              <Text style={{fontSize: 9, color: '#467D7F', paddingTop: 5}}>
                2 Februari 2022
              </Text>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  marginLeft: 16,
                  marginTop: 6,
                }}>
                Design Thinking
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  width: 120,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet suspendisse id sed sit.
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  color: '#467D7F',
                }}>
                Selengkapnya
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{
                marginLeft: 16,
                marginTop: 11,
                marginRight: 20,
                width: 130,
                height: 184,
                borderRadius: 7
              }}
              source={require('../../src/images/sexual_growth.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginLeft: 16,
                  marginTop: 6,
                  marginRight: 4,
                  height: 10,
                  width: 10,
                }}
                source={require('../../src/images/calendar.png')}
              />
              <Text style={{fontSize: 9, color: '#467D7F', paddingTop: 5}}>
                2 Februari 2022
              </Text>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  marginLeft: 16,
                  marginTop: 6,
                }}>
                Sexual Growth
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  width: 120,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet suspendisse id sed sit.
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  color: '#467D7F',
                }}>
                Selengkapnya
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    Color: '#424242',
    height: 40,
    borderRadius: 5,
    alignItems:'center',
    flex:9
  },
  imageStyle: {
    margin: 9,
    width:25,
    height: 25,
  },
});

export default Event;
