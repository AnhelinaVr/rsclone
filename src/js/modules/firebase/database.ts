import firebase from "firebase/app";
import 'firebase/database';

async function getUserId() {
    const user = firebase.auth().currentUser;
    return user ? user.uid : null;
}

async function showBuckedDates(roomType: string) {
    const datesArray = [];
    await firebase.database().ref('users').orderByChild('roomType')
        .equalTo(roomType)
        .once("value", function (snapshot) {
            snapshot.forEach(function (userObj) {
                const date = userObj.val().dates;
                if (date) datesArray.push(date);
            });
        });
    return datesArray;
}

export function writeUserData(userId : string, name : string, email : string) : void {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
    });
}

export async function writeHotelRoom(roomType : string) {
    const UID = await getUserId();
    firebase.database().ref('users/' + UID).update({
        roomType: roomType,
    });
    const result = await showBuckedDates(roomType);
    return result;
}

export async function setRoomsDate(dates: string[]) {
    const UID = await getUserId();
    firebase.database().ref('users/' + UID).update({
        dates: dates,
    });
}

export async function setAdditionalInfo(info: { gender: string; age: string; income: string; }) {
    const UID = await getUserId();
    firebase.database().ref('users/' + UID).update({
        gender: info.gender,
        age: info.age,
        income: info.income,
    });
}

export async function removeUser(user: firebase.User) {
    const UID = user.uid; 
    firebase.database().ref('users/' + UID).remove() 
        .then(function() {
            console.log("Remove succeeded.");
        })
        .catch(function(error) {
            console.log("Remove failed: " + error.message)
        });
}

export async function showStatisticsData(parameter:string, value:string) {
    const paramArr = [];
    let counter = 0;
    await firebase.database().ref('users').orderByChild(parameter)
        .equalTo(value)
        .once("value", function (snapshot) {
            snapshot.forEach(function (userObj) {
                const data = userObj.val()[parameter];
                if (data)  {
                    paramArr.push(data);
                    counter += 1;
                }
            });
        });
    return counter;
}
