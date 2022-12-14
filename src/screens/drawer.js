import React from "react";
import { Image, ImageBackground, View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import DrawerItem from '../components/drawerItem';
// import { Avatar } from '@rneui/themed';
import { Avatar } from 'react-native-elements';
import {
    DrawerItemList
} from "@react-navigation/drawer";
import { Switch } from "native-base";

const Drawer = (props) => (
    <View style={styles.container}>
        <ImageBackground
            // source={require('../assets/drawer/finance.jpeg')}
            source={require('../assets/background/costa_verde.jpg')}
        >
            <View style={styles.topContainer}>
                <View style={styles.topDetails}>
                    {/* <Image style={styles.profile} source={require('../assets/drawer/profile.jpeg')} /> */}
                    <Avatar
                        size={64}
                        rounded
                        style={styles.profile}
                        // source={{ uri: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" }}
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" }}
                    >
                        <Avatar.Accessory
                            onPress={() => {
                                console.log('Accessory')
                            }}
                            size={23}
                        />
                    </Avatar>
                    <View>
                        <Text style={styles.name}>Martin Geoffrey</Text>
                        <View style={styles.row}>
                            <Icon name="map-marker" size={15} style={styles.icon} />
                            <Text style={styles.locationText}>New York, US</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
        <ScrollView>
            <DrawerItemList {...props} />
            {/* <View style={styles.itemContainer}>
                <DrawerItem iconName="chess-king" text="Finance Pro" />
                <DrawerItem iconName="account" text="Account" pro />
                <DrawerItem iconName="chart-timeline-variant" text="Data Usage" />
                <DrawerItem iconName="qrcode-scan" text="Scan QR Code" />
                <View style={styles.line} />
                <DrawerItem iconName="bell-ring" text="Notification" notification />
                <DrawerItem iconName="shield-link-variant" text="Privacy Policy" />
                <DrawerItem iconName="cog" text="Settings" />
            </View> */}
        </ScrollView>
        <View style={styles.bottomContainer}>
            <Text style={styles.appName}>Remesas Management</Text>
            <Text style={styles.versionText}>Version 1.0.1</Text>
        </View>
    </View>
)

export default Drawer;