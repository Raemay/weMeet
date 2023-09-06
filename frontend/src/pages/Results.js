import {View, StyleSheet, Text} from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'; 

export default function Results() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Results
            </Text>
            <Text style={{textAlign:"center", marginBottom: 20}}>
                Search : Lyon/Nature
            </Text>
            <View style={styles.flex}>
             <Card mode="outlined" style={styles.cardContainer}>
                <Card.Content>
                    <Avatar.Image source={require("../../../assets/avatarjulie.png")} style={{alignSelf:"center"}}/>
                    <Text style={{alignSelf:"center", margin:5}}>Julie</Text>
                    <Text style={{alignSelf:"center", color:"#3CB371"}}>2 Meets</Text>
                    <Text style={{alignSelf:"center", fontWeight:500}}>Lyon</Text>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" icon={"message"} textColor="white" style={{borderRadius: 10, backgroundColor:"#3CB371", marginHorizontal: 5}}>Message</Button>
                </Card.Actions>
             </Card>
             <Card mode="outlined" style={styles.cardContainer}>
                <Card.Content>
                    <Avatar.Image source={require("../../../assets/avatarjulie.png")} style={{alignSelf:"center"}}/>
                    <Text style={{alignSelf:"center", margin:5}}>Julie</Text>
                    <Text style={{alignSelf:"center", color:"#3CB371"}}>2 Meets</Text>
                    <Text style={{alignSelf:"center", fontWeight:500}}>Lyon</Text>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" icon={"message"} textColor="white" style={{borderRadius: 10, backgroundColor:"#3CB371", marginHorizontal: 5}}>Message</Button>
                </Card.Actions>
             </Card>
            </View>
            <View style={styles.flex}>
             <Card mode="outlined" style={styles.cardContainer}>
                <Card.Content>
                    <Avatar.Image source={require("../../../assets/avatarjulie.png")} style={{alignSelf:"center"}}/>
                    <Text style={{alignSelf:"center", margin:5}}>Julie</Text>
                    <Text style={{alignSelf:"center", color:"#3CB371"}}>2 Meets</Text>
                    <Text style={{alignSelf:"center", fontWeight:500}}>Lyon</Text>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" icon={"message"} textColor="white" style={{borderRadius: 10, backgroundColor:"#3CB371",  marginHorizontal: 5}}>Message</Button>
                </Card.Actions>
             </Card>
             <Card mode="outlined" style={styles.cardContainer}>
                <Card.Content>
                    <Avatar.Image source={require("../../../assets/avatarjulie.png")} style={{alignSelf:"center"}}/>
                    <Text style={{alignSelf:"center", margin:5}}>Julie</Text>
                    <Text style={{alignSelf:"center", color:"#3CB371"}}>2 Meets</Text>
                    <Text style={{alignSelf:"center", fontWeight:500}}>Lyon</Text>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" icon={"message"} textColor="white" style={{borderRadius: 10, backgroundColor:"#3CB371",  marginHorizontal: 5}}>Message</Button>
                </Card.Actions>
             </Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFAFA",
      },
      title: {
        fontSize: 26,
        color: "#3CB371",
        paddingTop: "5%",
        textAlign: "center",
        fontWeight: "500",
      },
      cardContainer : {
        width: "40%",
        height: "65%",
        borderColor:"#3CB371"
      }, 
      flex : {
        flex: 1, 
        flexDirection: "row",
        justifyContent:"space-around",
      }
})
