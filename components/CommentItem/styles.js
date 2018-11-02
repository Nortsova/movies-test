import { StyleSheet } from "react-native";

export default StyleSheet.create({
  commentBlock: {
    marginBottom: 15
  },
  comment: {
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginLeft: 2,
    marginRight: 2
  },
  commentRadius: {
    borderRadius: 6,
    backgroundColor: "#fff",
    overflow: "hidden",
    padding: 8
  },
  userName: {
    fontWeight: "bold",
    fontSize: 10,
    marginLeft: 5,
    marginBottom: 5
  }
});
