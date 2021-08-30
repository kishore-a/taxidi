import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Communications from 'react-native-communications';
/* 2. Or import single methods
 import {
  phonecall,
  email,
  text,
  web
} from 'react-native-communications';*/

// import SMS API
import SendSMS from 'react-native-sms';

const Emergency= () => {
//   const [mobileNumber, setMobileNumber] = useState('9999999999');
//   const [bodySMS, setBodySMS] = useState(
//     'Please follow https://aboutreact.com',
//   );
const mobileNumber='8754423475'
const bodySMS="NEED HELP EMERGENCY"

  const sendsms = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 10) {
      alert('Please insert correct contact number');
      return;
    }

    SendSMS.send(
      {
        // Message body
        body:"HI",
        // Recipients Number
        recipients: ["+918754423475"],
        // An array of types 
        // "completed" response when using android
        successTypes: ['sent', 'queued'],
      },
      (completed, cancelled, error) => {
        console.log("Hello")
        if (completed) {
          console.log('SMS Sent Completed');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured');
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        

      

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>
                        Communications.text(
                          '8754423475',
                          'Help_Me_Im_in_emergency'
                        )
                      }>
          <Text style={styles.buttonTextStyle}>
SOS
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Emergency;

const styles = StyleSheet.create({
  container: {
      alignItems:'center',
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    height: 200,
    width:200, 
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  buttonTextStyle: {
    fontWeight:'bold',
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});

// import React in our code
// import React, {useState} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';

// // import SMS API
// import SendSMS from 'react-native-sms';

// const App = () => {
//   const [mobileNumber, setMobileNumber] = useState('9999999999');
//   const [bodySMS, setBodySMS] = useState(
//     'Please follow https://aboutreact.com',
//   );

//   const initiateSMS = () => {
//     // Check for perfect 10 digit length
//     if (mobileNumber.length != 10) {
//       alert('Please insert correct contact number');
//       return;
//     }

//     SendSMS.send(
//       {
//         // Message body
//         body: bodySMS,
//         // Recipients Number
//         recipients: [mobileNumber],
//         // An array of types 
//         // "completed" response when using android
//         successTypes: ['sent', 'queued'],
//       },
//       (completed, cancelled, error) => {
//         if (completed) {
//           console.log('SMS Sent Completed');
//         } else if (cancelled) {
//           console.log('SMS Sent Cancelled');
//         } else if (error) {
//           console.log('Some error occured');
//         }
//       },
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           Example to Send Text SMS on Button Click in React Native
//         </Text>
//         <Text style={styles.titleTextsmall}>
//           Enter Mobile Number
//         </Text>
//         <TextInput
//           value={mobileNumber}
//           onChangeText={
//             (mobileNumber) => setMobileNumber(mobileNumber)
//           }
//           placeholder={'Enter Conatct Number to Call'}
//           keyboardType="numeric"
//           style={styles.textInput}
//         />
//         <Text style={styles.titleTextsmall}>
//           Enter SMS body
//         </Text>
//         <TextInput
//           value={bodySMS}
//           onChangeText={(bodySMS) => setBodySMS(bodySMS)}
//           placeholder={'Enter SMS body'}
//           style={styles.textInput}
//         />
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={initiateSMS}>
//           <Text style={styles.buttonTextStyle}>
//             Send Message
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     textAlign: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   titleTextsmall: {
//     marginVertical: 8,
//     fontSize: 16,
//   },
//   buttonStyle: {
//     justifyContent: 'center',
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#8ad24e',
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   textInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     width: '100%',
//     paddingHorizontal: 10,
//   },
// });
// import React from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
// } from 'react-native';

// // 1. Either import the whole module
// import Communications from 'react-native-communications';
// /* 2. Or import single methods
//  import {
//   phonecall,
//   email,
//   text,
//   web
// } from 'react-native-communications';*/

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           Make Phone Call, Send SMS or Email
//           Using React Native Communication
//         </Text>
//         {/* Call: phonecall(phoneNumber, prompt) */}
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={
//             () => Communications.phonecall('0123456789',true)
//           }>
//           <Text style={styles.buttonTextStyle}>
//             Make Phone Call
//           </Text>
//         </TouchableOpacity>
//         {/* Mail: email(to, cc, bcc, subject, body) */}
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={() =>
//             Communications.email(
//               [
//                 'aboutreact11@gmail.com',
//                 'hello@aboutreact.com'
//               ],
//               null,
//               null,
//               'Demo Subject',
//               'Demo Content for the mail',
//             )
//           }>
//           <Text style={styles.buttonTextStyle}>
//             Send an Email
//           </Text>
//         </TouchableOpacity>
//         {/* SMS: text(phoneNumber = null, body = null) */}
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={() =>
//             Communications.text(
//               '0123456789',
//               'Follow https://aboutreact.com'
//             )
//           }>
//           <Text style={styles.buttonTextStyle}>
//             Send a Text/iMessage
//           </Text>
//         </TouchableOpacity>
//         {/* Web: web(address = null)*/}
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={
//             () => Communications.web('https://aboutreact.com')
//           }>
//           <Text style={styles.buttonTextStyle}>
//             Open AboutReact
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   buttonStyle: {
//     justifyContent: 'center',
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#8ad24e',
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
// });