import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const TweetCard = ({
    id,
    author,
    fullText,
}) => {
    return (
        <View style={styles.singleItem}>
            <View style={styles.row}>
                <Image
                    source={{ uri: author.avatar }}
                    style={styles.avatar}
                />
                <View style={styles.tweetContent}>
                    <Text style={styles.description}>{fullText}</Text>
                </View>
            </View>
        </View>
    )
}

export default TweetCard

const styles = StyleSheet.create({
    singleItem: {
        // height: 120,
        // width: '100%',
        // flexDirection: 'row',
        // borderBottomWidth: 1,
        // borderBottomColor: '#e6e6e6',
        // paddingTop: 16,
        // marginTop: 16,

        margin: 8,
        padding: 8,
        minHeight: 44,
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        backgroundColor: 'ivory'
    },
    description: {
        fontSize: 14,
        color: 'darkslategray'
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 16,
        marginTop: 4,
    },
    row: {
        flexDirection: 'row',
    },
    tweetContent: {
        flexShrink: 1,
        flexGrow: 1
    }
})