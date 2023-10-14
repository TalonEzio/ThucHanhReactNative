import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { minusImage, pizzaImage, plusImage } from "../assets/images";
import React, { useState } from "react";
import { SelectItem } from "../components/SelectItem";
import { Separator } from "../components/Separator";
import { SelectList } from "../components/SelectList";
import { SelectItemViewModel } from "../assets/models/SelectItemViewModels";
const grayColor = '#d4d4d4';

const inputSizeList: SelectItemViewModel[] = [];
inputSizeList.push(new SelectItemViewModel(1, "Big", 19.99))
inputSizeList.push(new SelectItemViewModel(2, "Medium", 15.99))
inputSizeList.push(new SelectItemViewModel(3, "Small", 10.99))


const inputAddOnList: SelectItemViewModel[] = [];
inputAddOnList.push(new SelectItemViewModel(1, "Chicken", 2.34))
inputAddOnList.push(new SelectItemViewModel(2, "Photato", 5.5))

const OrderScreen = () => {

    const [selectedSize, setSelectedSize] = useState(0);
    const [orderCount, setOrderCount] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={pizzaImage} style={styles.headerImage} />
            </View>

            <View style={styles.content}>
                <Text style={styles.contentTitle}>Italian Supreme</Text>
                <Text style={styles.contentDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus deserunt pariatur</Text>

                <SelectList
                    listItem={inputSizeList}
                    title="Choose Size"
                    onChange={() => {

                    }} />

                <SelectList
                    listItem={inputAddOnList}
                    isRadio={false}
                    title="Choose Add On"
                    onChange={() => {

                    }} />


            </View>


            <View style={styles.footer}>
                <View style={styles.footerLeft}>
                    <TouchableOpacity onPress={() => {

                        setOrderCount(orderCount => --orderCount)
                    }}>
                        <Image source={minusImage} style={styles.footerMinus} />
                    </TouchableOpacity>
                    <Text style={styles.footerOrderCount}>
                        {orderCount}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        setOrderCount(orderCount => ++orderCount)
                    }}>
                        <Image source={plusImage} style={styles.footerPlus} />
                    </TouchableOpacity>
                </View>
                <View style={styles.footerRight}>
                    <TouchableOpacity style={styles.footerRightButton}>
                        <Text style={styles.footerRightText}>Add ($ {123})</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        footer:
        {
            flex: 1,
            backgroundColor: '#eee',
            flexDirection: 'row',
            alignItems: 'stretch'
        },
        footerLeft:
        {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 5,
            paddingLeft: 20,
            width: '50%'
        },
        footerMinus:
        {
            width: 20,
            height: 20,
            backgroundColor: '#545454',
            padding: 20
        },
        footerOrderCount:
        {
            fontSize: 20,
            paddingHorizontal: 10
        },
        footerPlus:
        {
            width: 20,
            height: 20,
            backgroundColor: '#545454',
            padding: 20
        },
        footerRight:
        {
            // backgroundColor: "red",
            width: '50%',
            justifyContent: 'center',
            paddingHorizontal:10

        },
        footerRightButton:
        {
            backgroundColor: '#82c544',
            color: 'white',
            borderRadius: 3


        }, footerRightText:
        {
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            paddingVertical: 5,
        },
        container:
        {
            flex: 1,
        },

        header:
        {
            flex: 3,
        },
        headerImage:
        {
            resizeMode: 'cover',
            width: '100%',
            height: '100%'
        },
        content:
        {
            flex: 8,

        },
        contentTitle:
        {
            fontWeight: 'bold',
            fontSize: 20,
            paddingLeft: 10,
            paddingTop: 15

        },
        contentDescription:
        {
            fontSize: 18,
            paddingLeft: 10,

        },

    }
)
export { OrderScreen }