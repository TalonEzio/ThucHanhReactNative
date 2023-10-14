import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { doneImage } from "../assets/images";
import { Separator } from "./Separator";
const greenColor = '#93cd5e';
const grayColor = '#d4d4d4';
type SelectItemProps = {
    isRadioButton?: boolean,
    itemName?: string | number,
    itemPrice?: number,
    selected?: boolean,
    enableSeparator?: boolean,
    onSelect?: Function
}
const SelectItem = (props: SelectItemProps) => {

    const {
        isRadioButton = false,
        itemName = "Left Value",
        itemPrice = 12.34,
        selected = false,
        enableSeparator = true,
        onSelect = () => {
            Alert.alert('Please implement event')
        }
    } = props;

    const [isSelected, setSelected] = useState(selected);
    const event = {
        changeSelectStatus: () => {
            setSelected(x => !x)
        }
    }
    const styles = StyleSheet.create({
        container:
        {
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5
            // backgroundColor:'red'
        },
        containerLeft:
        {
            flexDirection: 'row',
            width: '50%'
        },
        containerRight:
        {
            width: '50%',
            alignItems: 'flex-end'
        },
        selectStatus:
        {
            aspectRatio: 1,
            borderWidth: 3,
            borderColor: isSelected ? greenColor : grayColor,
            borderRadius: isRadioButton ? 100 : 0,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'

        },
        selectStatusInner: {
            width: isRadioButton ? '70%' : '100%',
            height: isRadioButton ? '70%' : '100%',
            backgroundColor: isSelected ? greenColor : 'white',
            borderRadius: isRadioButton ? 100 : 0,

        },
        selectStatusIcon:
        {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: isRadioButton ? 0 : '100%'
        },

        selectName:
        {
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 10
        },
        selectPrice:
        {
            color: greenColor,
            fontSize: 20,
            fontWeight: '500'

        }
    })
    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity
                        style={[styles.selectStatus]}
                        onPress={
                            () => {
                                event.changeSelectStatus()
                                onSelect()
                            }
                        }
                    >
                        <Text style={styles.selectStatusInner}></Text>
                        <Image source={doneImage} style={styles.selectStatusIcon} />
                    </TouchableOpacity>
                    <Text style={styles.selectName}>{itemName}</Text>
                </View>

                <View style={styles.containerRight}>
                    <Text style={styles.selectPrice}>$ {itemPrice}</Text>
                </View>

            </View>
            
            <Separator size={enableSeparator ? 2 : 0} />
        </>

    )
}

export { SelectItem }