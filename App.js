import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, Image} from 'react-native';

export default function App() {
  const [weight,setWeight] = useState(0);
  const [length,setLength] = useState(0);
  const [width,setWidth] = useState(0);
  const [height,setHeight] = useState(0);
  const [status,setStatus] = useState(false);

  function shippingCalculator  () {
    const weightprice = (weight*2500)
    const volumeprice = (length*width*height)/100 * 120 
    const totalos = weightprice + volumeprice + 0;
    const totalfs = weightprice + volumeprice + 5000;
    const totalpf = weightprice + volumeprice + 15000;
    return(
      <View style={styles.summary}>
        <View style={styles.ocean}>
          <Text style={styles.heading1}>Ocean Shipping Charges</Text>
          <Text style={styles.summaryLine}>Your Weight : {weight}kg</Text>
          <Text style={styles.summaryLine}>Your Length : {length}cm</Text>
          <Text style={styles.summaryLine}>Your Width : {width}cm</Text>
          <Text style={styles.summaryLine}>Your Height : {height}cm</Text>
          <Text style={styles.summaryLine}>Total Amount to Pay : NGN{totalos}</Text>
        </View>
        <View style={styles.flight}>
          <Text style={styles.heading1}>Flight Charges</Text>
          <Text style={styles.summaryLine1}>Your Weight : {weight}kg</Text>
          <Text style={styles.summaryLine1}>Your Length : {length}cm</Text>
          <Text style={styles.summaryLine1}>Your Width : {width}cm</Text>
          <Text style={styles.summaryLine1}>Your Height : {height}cm</Text>
          <Text style={styles.summaryLine1}>Total Tax to Pay : NGN{totalfs}</Text>
        </View>
        <View style={styles.prif}>
          <Text style={styles.heading1}>Priority Flight Charges</Text>
          <Text style={styles.summaryLine2}>Your Weight : {weight}kg</Text>
          <Text style={styles.summaryLine2}>Your Length : {length}cm</Text>
          <Text style={styles.summaryLine2}>Your Width : {width}cm</Text>
          <Text style={styles.summaryLine2}>Your Height : {height}cm</Text>
          <Text style={styles.summaryLine2}>Total Tax to Pay : NGN{totalpf}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.logoWrapper}>
        <Image 
          source={require('./assets/images/download1.jpg')}
          style={styles.logo}
          />
        <Text style={styles.heading}>Shipping Cost Calculator</Text>  
      </View>

      {status == true ? shippingCalculator(): null}
      <TextInput 
      style={styles.input} 
      placeholder='weight (in kg)'
      onChangeText={(weightInput) => setWeight(weightInput)}
      />
      <TextInput 
      style={styles.input} 
      placeholder='length (in cm)'
      onChangeText={(lengthInput) => setLength(lengthInput)}
      />
      <TextInput 
      style={styles.input} 
      placeholder='width (in cm)'
      onChangeText={(widthInput) => setWidth(widthInput)}
      />
      <TextInput 
      style={styles.input} 
      placeholder='height (in cm)'
      onChangeText={(heightInput) => setHeight(heightInput)}
      />

      <Button title='CALCULATE COST' color={'#F54419'} onPress={() => { 
        shippingCalculator;
        setStatus(true);
        }}/>
      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
  },
  input:{
    paddingHorizontal:20,
    paddingVertical:14,
    borderWidth:1,
    borderColor:'#F54419',
    borderRadius:50,
    marginVertical:5
  },
  logoWrapper:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
  summary:{
    padding:10,
    backgroundColor:'#F54419',
    borderRadius:8,
  },
  ocean:{
    margin:30,
    padding:10,
    borderRadius:8,
    borderWidth:3,
    borderColor:'blue',
    backgroundImage:'linear-gradient(#E51AE8,skyblue)',
  },
  flight:{
    margin:30,
    padding:10,
    backgroundColor:'#F51948',
    borderRadius:8,
    borderWidth:3,
    borderColor:'orange',
    backgroundImage:'linear-gradient(#F51948,silver)',
  },
  prif:{
    margin:30,
    padding:10,
    borderRadius:8,
    borderWidth:3,
    borderColor:'#00FFFF',
    backgroundImage:'linear-gradient(#19F54B,#f3fa10)',
  },
  summaryLine:{
    borderBottomWidth:1,
    borderBottomColor:'blue',
    fontSize:20,
    marginBottom:4,
  },
  summaryLine1:{
    borderBottomWidth:1,
    borderBottomColor:'orange',
    fontSize:20,
    marginBottom:4,
  },
  summaryLine2:{
    borderBottomWidth:1,
    borderBottomColor:'#00FFFF',
    fontSize:20,
    marginBottom:4,
  },
  heading:{
    fontSize:28
  },
  heading1:{
    fontSize:28,
    textAlign:'center',
    marginBottom:10,
    color:'yellow'
  },
  logo:{
    width:80,
    height:80,
    borderRadius:50,
  },
})