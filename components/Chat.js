import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const Chat = ({ db, route, navigation }) => {
  const [messages, setMessages] = useState([]);
  const { name, _id, backgroundColor } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  useEffect(() => {
    const unsubMessages = onSnapshot(
      collection(db, "messages"),
      (querySnapshot) => {
        const newMessages = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            _id: doc.id,
            text: data.text,
            createdAt: data.createdAt.toDate(),
            user: {
              _id: data.user._id,
              name: data.user.name,
              avatar: data.user.avatar,
            },
          };
        });

        // Sort messages by createdAt in descending order
        newMessages.sort((a, b) => b.createdAt - a.createdAt);
        setMessages(newMessages);
      }
    );

    // Clean up code
    return () => {
      if (unsubMessages) unsubMessages();
    };
  }, [db]);

  const onSend = (newMessages) => {
    // Assuming the current user's ID is stored in a variable like currentUserId
    const currentUserId = _id;

    const outgoingMessages = newMessages.map((message) => {
      return {
        _id: message._id,
        text: message.text,
        createdAt: message.createdAt,
        user: {
          _id: currentUserId, // Set the sender's _id
          name: name, // Set the sender's name
        },
      };
    });

    // Add the outgoing messages to the state
    setMessages((previousMessages) => [
      ...previousMessages,
      ...outgoingMessages,
    ]);

    // Send the outgoing messages to the database
    outgoingMessages.forEach((message) => {
      addDoc(collection(db, "messages"), message);
    });
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
          left: {
            backgroundColor: "#FFF",
          },
        }}
      />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: _id,
          name: name,
        }}
      />
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    margin: 10,
  },
});

export default Chat;
