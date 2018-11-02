import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    commentInput: {
        height: 40,
        borderColor: '#6b52ae',
        borderWidth: 1,
        borderRadius: 30,
        margin: 10,
        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: '#fff',
    },
    commentInputWrapper: {
        backgroundColor: '#eee',
        position: 'relative',
    },
    commentSubmit: {
        backgroundColor: '#6b52ae',
        position: 'absolute',
        right: 10,
        top: 10,
        borderRadius: 30,
        paddingLeft: 25,
        paddingRight: 25,
        minWidth: 100,
        alignItems: 'center',
    },
    commentSubmitText: {
        color: '#fff',
        height: 40,
        lineHeight: 40,
    },
    fill: {
        flex: 1,
    },
    commentWrapper: {
        flex: 1,
        padding: 20,
    }
});