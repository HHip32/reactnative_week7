import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '42px', backgroundColor: '#1BA9FF', alignItems: 'center' }}>
        <View style={{ width: '90%', height: '42px', marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image
            source={require('./assets/ant-design_arrow-left-outlined.png')}
            style={{ width: '24px', height: '24px' }}
          />
          <Text style={{ color: '#FFFFFF', fontSize: 18, lineHeight: 23.44 }}>
            Chat
          </Text>
          <Image
            source={require('./assets/bi_cart-check.png')}
            style={{ width: '24px', height: '24px' }}
          />
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: '#000000', fontSize: 12, lineHeight: 17.03, width: '294px', height: '28.54px' }}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
        </Text>
      </View>
      <View style={{ width: '100%', height: '1px', backgroundColor: '#C4C4C4', marginTop: '20px' }} />
      <View style={{ width: '100%' }}>
        <View style={{ width: '100%', height: '80px', marginTop: '5px', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
          <Image
            source={require('./assets/ca_nau_lau.png')}
            style={{ width: '74px', height: '74px' }}
          />
          <View style={{ width: 180, right: 10, bottom: 15 }}>
            <Text>Cá nấu lẩu, nấu mì mini...</Text>
            <Text style={{ marginTop: 10, color: '#E83030' }}> Shop Devang</Text>
          </View>
          <Pressable style={{ width: '88px', height: '38px', right: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F31111' }}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Chat</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ width: '100%', height: '1px', backgroundColor: '#C4C4C4', marginTop: '0px' }} />
      <View style={{ width: '100%' }}>
        <View style={{ width: '100%', height: '80px', marginTop: '1px', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
          <Image
            source={require('./assets/ga_bo_toi.png')}
            style={{ width: '74px', height: '74px' }}
          />
          <View style={{ width: 180, right: 10, bottom: 15 }}>
            <Text>1KG KHô GÀ BƠ TỎI ...</Text>
            <View style={{ marginTop: 10, color: '#E83030', flexDirection:'row' }}>
              <Text style={{color: '#7D5B5B'}}>Shop</Text>
              <Text style={{color: '#FF0E0E', marginLeft: '10px'}}>LTD Food</Text>
            </View>
          </View>
          <Pressable style={{ width: '88px', height: '38px', right: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F31111' }}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Chat</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ width: '100%', height: '1px', backgroundColor: '#C4C4C4', marginTop: '0px' }} />
      <View style={{ width: '100%' }}>
        <View style={{ width: '100%', height: '80px', marginTop: '1px', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
          <Image
            source={require('./assets/xa_can_cau.png')}
            style={{ width: '74px', height: '74px' }}
          />
          <View style={{ width: 180, right: 10, bottom: 15 }}>
            <Text>Xe cần cẩu đa năng</Text>
            <View style={{ marginTop: 10, color: '#E83030', flexDirection:'row' }}>
              <Text style={{color: '#7D5B5B'}}>Shop</Text>
              <Text style={{color: '#000000', marginLeft: '10px'}}>Thế giới đồ chơi</Text>
            </View>
          </View>
          <Pressable style={{ width: '88px', height: '38px', right: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F31111' }}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Chat</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ width: '100%', height: '1px', backgroundColor: '#C4C4C4', marginTop: '0px' }} />
      <View style={{ width: '100%' }}>
        <View style={{ width: '100%', height: '80px', marginTop: '1px', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
          <Image
            source={require('./assets/do_choi_dang_mo_hinh.png')}
            style={{ width: '74px', height: '74px' }}
          />
          <View style={{ width: 180, right: 10, bottom: 15 }}>
            <Text>Đồ chơi dạng mô hình</Text>
            <View style={{ marginTop: 10, color: '#E83030', flexDirection:'row' }}>
              <Text style={{color: '#7D5B5B'}}>Shop</Text>
              <Text style={{color: '#000000', marginLeft: '10px'}}>Thế giới đồ chơi</Text>
            </View>
          </View>
          <Pressable style={{ width: '88px', height: '38px', right: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F31111' }}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Chat</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ width: '100%', height: '1px', backgroundColor: '#C4C4C4', marginTop: '0px' }} />
      <View style={{ width: '100%' }}>
        <View style={{ width: '100%', height: '80px', marginTop: '1px', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
          <Image
            source={require('./assets/lanh_dao_gian_don.png')}
            style={{ width: '74px', height: '74px' }}
          />
          <View style={{ width: 180, right: 10, bottom: 15 }}>
            <Text>Lãnh đạo giản đơn</Text>
            <View style={{ marginTop: 10, color: '#E83030', flexDirection:'row' }}>
              <Text style={{color: '#7D5B5B'}}>Shop</Text>
              <Text style={{color: '#000000', marginLeft: '10px'}}>Minh Long Book</Text>
            </View>
          </View>
          <Pressable style={{ width: '88px', height: '38px', right: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F31111' }}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Chat</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ width: '100%', height: '1px', backgroundColor: '#C4C4C4', marginTop: '0px' }} />
      <View style={{ width: '100%' }}>
        <View style={{ width: '100%', height: '80px', marginTop: '1px', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
          <Image
            source={require('./assets/hieu_long_con_tre.png')}
            style={{ width: '74px', height: '74px' }}
          />
          <View style={{ width: 180, right: 10, bottom: 15 }}>
            <Text>Hiểu lòng con trẻ</Text>
            <View style={{ marginTop: 10, color: '#E83030', flexDirection:'row' }}>
              <Text style={{color: '#7D5B5B'}}>Shop</Text>
              <Text style={{color: '#000000', marginLeft: '10px'}}>Minh Long Book</Text>
            </View>
          </View>
          <Pressable style={{ width: '88px', height: '38px', right: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F31111' }}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Chat</Text>
          </Pressable>
        </View>
      </View>
      <View style={{width: '100%', height: '49px', backgroundColor: '#1BA9FF', alignItems: 'center'}}>
        <View  style={{width: '90%', height: '49px',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image 
          source={require('./assets/group10.png')}
          style={{width: '23px', height: '14px'}}
          />
          <Image 
          source={require('./assets/vector.png')}
          style={{width: '24px', height: '24px'}}
          />
          <Image 
          source={require('./assets/vector1.png')}
          style={{width: '27px', height: '25px'}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5'
  },
});
