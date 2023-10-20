import { StyleSheet, Text, View, Image, FlatList, TextInput } from 'react-native';




const data = [
    {
        id: 1,
        path: require('./assets/giacchuyen.png'),
        desciptions: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%'
    },
    {
        id: 2,
        path: require('./assets/daynguon.png'),
        desciptions: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%'
    },
    {
        id: 3,
        path: require('./assets/dauchuyendoipsps2.png'),
        desciptions: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%'
    },
    {
        id: 4,
        path: require('./assets/dauchuyendoi1.png'),
        desciptions: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%'
    },
    {
        id: 5,
        path: require('./assets/carbusbtops2.png'),
        desciptions: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%'
    },
    {
        id: 6,
        path: require('./assets/daucam.png'),
        desciptions: 'Cáp chuyển từ Cổng USB sang PS2...',
        price: '69.900 đ',
        discount: '-39%'
    },
]

const renderItem = ({ item }) => (

    <View style={{ width: '50%', alignItems: 'center', marginTop: '20px' }}>
        <View>
            <Image
                source={item.path}
                style={{ width: '155px', height: '90px' }}
            />
        </View>
        <Text style={{ width: '111px', height: '28px', marginTop: '10px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '12px', lineHeight: '14.06px' }}>
            {item.desciptions}
        </Text>
        <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Image
                source={require('./assets/start.png')}
                style={{ width: '13px', height: '13px' }}
            />
            <Image
                source={require('./assets/start.png')}
                style={{ width: '13px', height: '13px' }}
            />
            <Image
                source={require('./assets/start.png')}
                style={{ width: '13px', height: '13px' }}
            />
            <Image
                source={require('./assets/start.png')}
                style={{ width: '13px', height: '13px' }}
            />
            <Image
                source={require('./assets/start.png')}
                style={{ width: '13px', height: '13px' }}
            />
            <Image
                source={require('./assets/start2.png')}
                style={{ width: '13px', height: '13px' }}
            />
            <Text>(15)</Text>
        </View>
        <View style={{ width: '60%', flexDirection: 'row' }}>
            <Text style={{ width: '49px', height: '14px', fontFamily: 'Roboto', fontWeight: '700', fontSize: '12px', lineHeight: '14.06px' }}>
                {item.price}
            </Text>
            <Text style={{ width: '26px', height: '14px', marginLeft: '20px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '12px', lineHeight: '14.06px', color: '#969DAA' }}>
                {item.discount}
            </Text>
        </View>
    </View>
)
export default function index2() {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '42px', backgroundColor: '#1BA9FF' }}>
                <View style={{ width: '90%', height: '42px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Image
                        source={require('./assets/ant-design_arrow-left-outlined.png')}
                        style={{ width: '24px', height: '24px' }}
                    />
                    <View style={{ height: '32px', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF' }}>

                        <View style={{ width: '36px', height: '32px', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('./assets/magnifier.png')}
                                style={{ width: '24px', height: '24px' }}
                            />
                        </View>
                        <TextInput
                            placeholder='Dây cáp usb'

                        />
                    </View>
                    <Image
                        source={require('./assets/bi_cart-check.png')}
                        style={{ width: '24px', height: '24px' }}
                    />
                    <Image
                        source={require('./assets/group2.png')}
                        style={{ width: '18px', height: '5px' }}
                    />
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center'
    },
})