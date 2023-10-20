
import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';



const data = [
  {
    id: 1,
    path: require('./assets/ca_nau_lau.png'),
    shopName: "Devang",
    desciptions: "Cá nấu lẩu, nấu mì mini..."
  },
  {
    id: 2,
    path: require('./assets/ga_bo_toi.png'),
    shopName: "LTD Food",
    desciptions: "1KG KHÔ GÀ BƠ TỎI ..."
  },
  {
    id: 3,
    path: require('./assets/xa_can_cau.png'),
    shopName: "Thế giới đồ chơi",
    desciptions: "Xe cần cẩu đa năng"
  },
  {
    id: 4,
    path: require('./assets/do_choi_dang_mo_hinh.png'),
    shopName: "Thế giới đồ chơi",
    desciptions: "Đồ chơi dạng mô hình"
  },
  {
    id: 5,
    path: require('./assets/lanh_dao_gian_don.png'),
    shopName: "Minh Long Book",
    desciptions: "Lãnh đạo giản đơn"
  },
  {
    id: 6,
    path: require('./assets/hieu_long_con_tre.png'),
    shopName: "Minh Long Book",
    desciptions: "Hiểu lòng con trẻ"
  },
  {
    id: 7,
    path: require('./assets/trump1.png'),
    shopName: "Minh Long Book",
    desciptions: "Donald Trump Thiên tài lãnh đạo"
  },
]
const renderItem = ({ item }) => (
  <View style={{ width: '380px'}}>
    <View style={{ width: '380px', height: '80px', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: item.id === 1 ? '#FFFFFF' : '#E5E5E5', marginTop: item.id === 1 ? '5px' : '0px' }}>
      <Image
        source={item.path}
        style={{ width: '74px', height: '74px' }}
      />
      <View style={{ width: 180, right: 10, bottom: 10 }}>
        <Text style={{ marginTop: item.id === 7 ? '10px' : '0px' }}>{item.desciptions}</Text>
        <View style={{ marginTop: 10, color: '#E83030', flexDirection: 'row' }}>
          <Text style={{ color: item.id === 1 ? '#E83030' : '#7D5B5B' }}>Shop</Text>
          <Text style={{ color: (item.id === 1 || item.id === 2) ? '#FF0E0E' : '#000000', marginLeft: '10px' }}>{item.shopName}</Text>
        </View>
      </View>
      <Pressable style={{ width: '88px', height: '38px', right: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F31111' }}>
        <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Chat</Text>
      </Pressable>
    </View>
    <View style={{ width: '100%', height: '1px', backgroundColor: '#C4C4C4', marginTop: '0px' }} />
  </View>
);

export default function index1() {
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
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
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