import * as firebase from 'firebase';
import { config } from '../firebaseconfig';

const errorHandler = (err) => err ? console.log(err) : console.log('success');


export const addCommentByMovieIdToFirebase = (id, comment) => {
    return firebase.database().ref('comments/byMovieIds/' + id + '/' + comment.id).set(comment, errorHandler);
};

export const addCommentByIdsToFirebase = (comment) => {
    return firebase.database().ref('comments/byIds/' + comment.id).set(comment, errorHandler);
};

export const addCommentIdToFirebase = (id) => {
    return firebase.database().ref('comments/allIds/' + id).set(id, errorHandler);
};

export const downloadCommentsFromFirebase = async () => {
    const data = await firebase.database().ref('comments/').once('value');
    return data.val();
};

export const initFirebase = () => {
    return firebase.initializeApp(config);
}