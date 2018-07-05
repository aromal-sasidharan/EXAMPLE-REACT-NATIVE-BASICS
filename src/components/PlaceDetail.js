import React from 'react'
import {Modal,View,Text,Image,StyleSheet,Button} from 'react-native'




const PlaceDetail = (props) => {

    var modelContent = null
    
    if(props.place){
        modelContent = (
            <View style={styles.detailContainer}>
                <Image resizeMode="contain" source={{uri:props.place.image}} style={styles.imageDetail}/>
                <Text style={styles.placeName}>{props.place.name} </Text>
            </View>
        )
    }
    return(
            <Modal  transparent={true} onRequestClose={props.onClose} visible={props.place !== null} animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {modelContent}
                        <View>
                            <Button title="Delete" color="red" onPress={props.onDeleteItem}/>
                            <Button title="Close" onPress={props.onClose}/>
                        </View>
                    </View>
                </View>
            </Modal>
        )
};

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:'rgba(52, 52, 52, 0.8)'
    },
    detailContainer:{
        alignItems:"center",
        flexDirection:"column",
    },
    imageDetail:{

        height:200,
        width:"100%",

    },
    placeName:{
        marginTop:10,
        fontWeight:"bold",
        fontSize:20

    },
    modalContent:{
        backgroundColor:"#D4D4D4",
        width:"75%",
        paddingBottom:10,
        paddingTop:10
    }
});
export default PlaceDetail;