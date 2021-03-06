import React from 'react';
import { StyleSheet, Text, View, CheckBox, TouchableHighlight, Button, Input, ScrollView,I18nManager, TouchableOpacity, Image, TextInput, Dimensions, KeyboardAvoidingView, ImageBackground } from 'react-native';
import store from '../../store'
import { connect } from 'react-redux'
/* colors */
import colors from '../../colors'
import { Header } from 'react-navigation-stack';

/* menu */
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
export default class MainCategoryItem extends React.Component {
    componentDidMount(){
        // console.log( this.props);
        
    }
    setMenuRef = ref => {
        
        this._menu = ref;
    };

    hideMenu = (string) => {
        
        this._menu.hide();
    };

    showMenu = (string) => {
        this._menu.show();
    };
    makeCurrent(){
        this.props.makeCurrent(this.props.item)

    }
    deleteAdress(){
        this.props.deleteAdress(this.props.item)

    }
    render() {
        return (
            <View style={styles.flexItem} >
                <View style={{ flex: 1.5, alignItems: 'center' }}>
                    <Image source={require("../../assets/icons/marker.png")}
                        style={styles.Icon} />
                </View>
                <View style={{ flex: 9, }}>
                    {/* <Text style={{ fontFamily: 'Cairo-Regular', fontSize: 12 }}>Adress</Text> */}
                    <Text style={{ fontFamily: 'Cairo-Regular', fontSize: 12 }}>{this.props.item.street} {this.props.item.route},{this.props.item.neighbourhood}, {this.props.item.administrative_area}, {this.props.item.city}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: "100%", width: 30}}>
                    <Menu
                        style={{ borderRadius: 20 }}
                        ref={this.setMenuRef}

                        button={<TouchableOpacity onPress={this.showMenu} style={{
                        height:'100%',
                        alignItems:'center',
                        justifyContent:'center'
                    }}><Image source={require("../../assets/icons/dots.png")}
                            style={styles.Icon} /></TouchableOpacity>}
                    >
                        <MenuItem disabled={this.props.item.current} onPress={()=>{this.hideMenu(),this.makeCurrent()}}> <Image source={require("../../assets/icons/marker2.png")}
                            style={styles.smallIcon} 
                            />
                            <Text>{I18nManager.isRTL ? "الحالي" : "Make Current"}  </Text></MenuItem>
                        <MenuItem onPress={()=>{this.hideMenu(),this.deleteAdress()}}
                        >
                            <Image source={require("../../assets/icons/pin.png")}

                                style={styles.smallIcon} />
                            <Text>{I18nManager.isRTL ? "مسح" : "Delete"}  </Text>

                        </MenuItem>

                    </Menu>

                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    flexItem: {
        width: Dimensions.get('window').width * 343 / 375,
        height: Dimensions.get('window').height * 80 / 812,
        marginVertical: 10,
        marginHorizontal: Dimensions.get('window').width * (375 - 343) / (375 * 2),
        flexDirection: 'row',
        padding: 5,
        paddingTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,

        elevation: 2,
        // borderWidth:3,
        backgroundColor: colors.white,
        borderRadius: 15,

    },

    IconContainer: {
        flexDirection: 'row'
    },
    Icon: {
        width: 17,
        height: 17,
        resizeMode: "contain",

    },
    smallIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",

    },

});


