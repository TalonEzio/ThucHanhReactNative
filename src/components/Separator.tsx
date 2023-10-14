import { Dimensions, Text, View } from "react-native"
const grayColor = '#d4d4d4';

const fullWidth = Dimensions.get('window').width;
type SeparatorProps = {
    width?: any ;
    color?: string;
    size?: number;
}
const Separator = (props: SeparatorProps) => {
    const
        {
            width = fullWidth,
            color = grayColor,
            size = 1
        } = props;
    return (
        <View
            style={
                {
                    width: width,
                    backgroundColor: color,
                    height: size
                }
            }>

        </View>

    )
}
export { Separator }