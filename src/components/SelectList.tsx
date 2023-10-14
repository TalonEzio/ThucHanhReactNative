import { Alert, StyleSheet, Text, View } from "react-native"
import { SelectItem } from "./SelectItem";
import { SelectItemViewModel } from "../assets/models/SelectItemViewModels";
const grayColor = '#d4d4d4';

const list: SelectItemViewModel[] = [];
type SelectListProps = {
    listItem: SelectItemViewModel[];
    isRadio?: boolean;
    title?: string;
    onChange: Function;
}
const SelectList = (props: SelectListProps) => {
    const
        {
            listItem,
            isRadio = true,
            title = "Default title",
            onChange = () => { Alert.alert("test") }
        } = props;
    const event = {
        render: (listItem: SelectItemViewModel[]) => {
            return listItem.map(
                x => {
                    return (
                        <SelectItem itemName={x.name}
                            itemPrice={x.price}
                            isRadioButton={isRadio} key={x.id}
                            onSelect={onChange}
                        />
                    )
                }
            )
        }
    }
    return (
        <View>
            <View style={styles.list}>
                <Text style={styles.listTitle}>{title}</Text>
                <View style={styles.listSelect}>
                    <>
                        {
                            event.render(listItem)
                        }
                    </>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    list:
    {
        marginTop: 30,
    },
    listTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        paddingLeft: 5,
        paddingVertical: 5,
        backgroundColor: grayColor
    },
    listSelect:
    {

    },
})
export { SelectList }