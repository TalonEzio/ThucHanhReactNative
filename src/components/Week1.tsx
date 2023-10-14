import { Image, ImageRequireSource, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { reactNativeImage } from "../assets/images"

type Week1Props = {
    image?: ImageRequireSource,
    content?:string
}
const Week1 = (props: Week1Props) => {
    const {
        image = reactNativeImage,
        content = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.    '
    } = props;
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={styles.imageInner} source={image} />
            </View>
            <View style={styles.text}>
                <Text style={styles.textContent}>{content}</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
    },
    image: {
        width: '40%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
    },
    imageInner:
    {
        width: '100%',
        height:100
        
    },
    text: {
        width: '60%',
    },
    textContent:
    {
        padding: 10
    },


})
export { Week1 }
