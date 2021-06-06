import firebase from "firebase/app";
import 'firebase/firestore'

const WriteToCloudFirestore = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('mycollection')
        .doc('my_document')
        .set({
          string_data: 'Deepthi vemprala',
          number_data: 2,
          boolean_data: true,
        })
        .then(alert("Data was sent to Firestore!"));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return(
    <button onClick={sendData}> Send Data to firestore </button>
  ) 
}

export default WriteToCloudFirestore
