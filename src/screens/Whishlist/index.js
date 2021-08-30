import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import uuid from "react-native-uuid";
import Balance from '../../components/Balance'
// import Header from "./app/components/Header";
import Header from "../../components/Header"
import IncomeExpenses from '../../components/IncomeExpenses'
// import IncomeExpenses from "./app/components/IncomeExpenses";
// import TransactionList from "./app/components/TransactionList";
import TransactionList from '../../components/TransactionList'
// import AddTransaction from "./app/components/AddTransaction";
import AddTransaction from '../../components/AddTransaction'

export default function Whishlist() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      amount: "2000",
      name: "Deposit",
    },

  ]);

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) => {
      return prevTransactions.filter((transaction) => transaction.id !== id);
    });
  };

  const addTransaction = (e, transaction) => {
    e.preventDefault();

    setTransactions((prevTransactions) => {
      return [{ id: uuid.v1(), ...transaction }, ...prevTransactions];
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView style={styles.scrollView}>
          <Header />
          <View style={styles.bodyWrapper}>
            <Balance transactions={transactions} />
            <IncomeExpenses transactions={transactions} />
            <TransactionList
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
            <AddTransaction addTransaction={addTransaction} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollView: {},
  bodyWrapper: {
    alignSelf: "stretch",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
});
