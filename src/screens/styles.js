import { StyleSheet } from "react-native";
import { COLORS, FONTWEIGHT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        backgroundColor: 'rgba(0, 168, 224, 0.8)',
        // backgroundColor: 'rgba(99, 57, 116, 0.9)',
        height: SIZES.height / 5,
        justifyContent: 'flex-end',
        padding: 15,
    },
    topDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 15,
        borderColor: COLORS.white,
        borderWidth: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        color: COLORS.white,
        fontSize: SIZES.h2,
        fontWeight: FONTWEIGHT.bold,
        marginBottom: 2,
    },
    locationText: {
        color: COLORS.white,
        fontSize: SIZES.h4,
        fontWeight: FONTWEIGHT.weight500,
    },
    icon: {
        color: COLORS.white,
        marginRight: 5,
    },
    itemContainer: {
        marginTop: 10,
    },
    line: {
        // backgroundColor: COLORS.lightGrey,
        backgroundColor: '#DCDADD',
        height: 2,
        marginHorizontal: 15,
        marginVertical: 20,
    },
    bottomContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    appName: {
        color: COLORS.grey,
        fontSize: SIZES.h4,
        fontWeight: FONTWEIGHT.bold,
    },
    versionText: {
        color: COLORS.grey,
        fontSize: SIZES.h5,
        fontWeight: FONTWEIGHT.weight500,
    },
});

export default styles;