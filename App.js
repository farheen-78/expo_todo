import  React,{useState} from 'react';
import { StyleSheet, ScrollView,Text,Image, View,Button,TouchableOpacity,TextInput,ImageBackground } from 'react-native';

export default function App() {
  const [value,setValue]=useState(null);
    const [arr,setArr]=useState([]);
    const addItem=()=>{
          setArr([...arr,value]) 
          setValue("");
    }
     const delItem=(i)=>{
       arr.splice(i,1)
       setArr([...arr])
    }
return(



      <View style={styles.container}>
   <ImageBackground style={{width:"100%",height:"100%"}} source={{uri:"https://image.freepik.com/free-photo/abstract-background-twilight-sky-background-pink-gradient-tone-color_63313-152.jpg"}}>
     <View  style={styles.todotxt}>
       <Image source={require('./assets/todo.png')} style={{width:100,height:70 ,resizeMode:'contain'}}/> 
    
      {/* <Text style={{color:'purple',fontSize:15}}>To Do Application</Text> */}
      </View>
      <View style={styles.inbtn}>
   <TextInput value={value}  style={styles.input} placeholder='Enter your todo'onChangeText={(e)=>setValue(e)}/>
   
   <View style={{height:30,width:30,marginTop:41}}>
   <Button  onPress={addItem} title={"+"}/>
   </View>
   </View>
  
  <ScrollView>
  
  {arr.map((v,i)=>{
    return(
      <View  key={i} style={styles.card}>

      <Text  style={{color:'black',fontSize:18}}>{v}
        
        <TouchableOpacity onPress={()=>delItem(i)}> 
        {/* // style={styles.delbtn}> */}
                  
          <Text style={styles.deltxt}>Delete    </Text>
          
          </TouchableOpacity>       
       
      </Text>

   
      </View>          
           )})}
           
     
  
           </ScrollView>
    
  
  
  
    </ImageBackground>  
      </View>
    );
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    todotxt:{
           height:70,
           width:'100%',
           backgroundColor:'#ffff',
           borderWidth:1,     
           justifyContent:'center',
           alignItems:'center',
           
           
          
    },
    inbtn:{
           flexDirection:'row',
           

    }, 
     input:{
      width:'80%',
      height:40,
      color:'black',
      borderRadius:10,
      backgroundColor:'white',
      marginLeft:20,
      marginTop:40,
      paddingLeft:10,
  
  
   },
 
    
  card:{

      marginTop:8,
     borderBottomWidth:1,
      borderBottomColor:'pink',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      
      },
      deltxt:{
    
        fontWeight:'bold',
        borderWidth:2,
        backgroundColor:'cyan',
        color:'black',
          alignItems:'center',
          justifyContent:'center',
          paddingLeft:12,
         textAlign:'center',
        borderRadius:7,
        marginLeft:80,
        marginTop:8,
        
    
        
       },
      
   
  

  });
  

  
    