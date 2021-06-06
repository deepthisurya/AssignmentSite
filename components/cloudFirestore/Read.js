import firebase from "firebase/app";
import "firebase/firestore";

const ReadToCloudFirestore = () => {
    const readData = () => {
      try {
        firebase
          .firestore()
          .collection("mycollection")
          .doc('my_document')
          .onSnapshot(function (doc) {
            console.log(doc.data());
          });
        alert(
          "Data was successfully fetched from cloud firestore! Close this alert and check console for output."
        );
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }

    return <button onClick={readData}>Get Data From Firebase</button>;
  }

export default ReadToCloudFirestore;
