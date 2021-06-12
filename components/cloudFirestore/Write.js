import firebase from "firebase/app";
import "firebase/firestore";
import { useUser } from "../../firebase/useUser";
import Button from "react-bootstrap/Button";

const WriteToCloudFirestore = () => {
  const { user } = useUser();
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("mycollection")
        .doc(user.id)
        .set({
          string_data: "Deepthi vemprala",
          number_data: 2,
          boolean_data: true,
        })
        .then(alert("Data was sent to Firestore!"));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div style={{ margin: "5px 0" }}>
      <Button onClick={sendData} style={{ width: "20%" }}>
        {" "}
        Send Data to firestore{" "}
      </Button>
    </div>
  );
};

export default WriteToCloudFirestore;
