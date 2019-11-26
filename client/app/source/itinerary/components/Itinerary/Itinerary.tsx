import React, { useState } from 'react';
import { Container, Header, Left, Right, Body, Title, Content, Button, Icon, Subtitle, Card, CardItem, Radio, Spinner, Fab, Thumbnail } from 'native-base';

//import styles from './ItineraryStyles';
import { View, Text, Image, ScrollView } from 'react-native';
import { getItinerarySigned } from '../../api/itineraryAPI';
import { Itinerary as ItineraryModel } from './../../models/location';
import CreateNewItinerary from '../CreateItinerary/components/CreateItineraryStepper';
import styles from './ItineraryStyles';
import { Platform } from '@unimodules/core';

//App stack to go from list of itineraries --> specific itinerary
// const itineraries=require("./../../models/MockItineraryList.json");

export function Itinerary(props) {
    const { navigate } = props.navigation;    // Handle navigations
    const [itineraries, setItineraries] = useState(null);
    const [selected, setSelected] = useState(-1);
    const [newItineraryModalOpen, setNewItinerayModal] = useState(false);

    // Get itinerary on each render
    getItinerarySigned().then(res => {
        console.log("reloadItineraries");
        if (!itineraries && res != undefined) {
            setItineraries(res);
        }
    });

    const reload = () => {
        setItineraries(null);
        getItinerarySigned().then(res => {
            console.log("reloadItineraries");
            if (!itineraries && res != undefined) {
                setItineraries(res);
            }
        });
        
    }

    const goToItineraryViews = () => {
        navigate(/* carlos' part */);
    }

    const handleRadioButtonChange = (newRadioButtonValue: number) => {
        setSelected(newRadioButtonValue);
        console.log("User selected " + newRadioButtonValue);
    }

    // Check if user is in android/iOS platform so we can restrict write operations
    const mobilePlatform = Platform.OS === "android" || Platform.OS === "ios";
    
    return (
        <Container>
            <Header>
                <Body>
                    <Title>
                        Itinerary Page
                    </Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => reload()}>
                        <Icon name="refresh" />
                    </Button>

                    {mobilePlatform && 
                    <Button transparent onPress={() => setNewItinerayModal(true)}>
                        <Icon name="ios-add" />
                    </Button>}
                </Right>
            </Header>

            <ScrollView>
                {!itineraries && <Spinner color='blue' />}
                {itineraries && itineraries.map((element: ItineraryModel, index) => {
                    return (<Card key={index}>
                        <CardItem header button onPress={() => navigate("ViewItineraryEvents", { data: element })}>
                            {/* <Thumbnail source={require('./../../../login/assets/earth.png')} style={{maxWidth:30, maxHeight:30}}></Thumbnail> */}
                            <Text style={{ fontSize: 25 }}> {element.name} </Text>
                        </CardItem>
                        <CardItem style={{ flexDirection: 'row-reverse' }}>
                            <Icon name="map" onPress={() => navigate("GMap", { data: element })} />
                        </CardItem>
                        <CardItem button onPress={() => console.log(`Clicked the description of ${element.name}!`) /* carlos replace with yours*/}>
                            <Body>
                                {element.events && <Text>Number of Events: {element.events.length}</Text>}
                                {element.last_edit_time && <Text>Last Edited: {element.last_edit_time.toLocaleString()}</Text>}
                                <Right>

                                </Right>
                            </Body>
                        </CardItem>
                    </Card>);
                })}
            </ScrollView>

            {Platform.OS==="android" && 
             <Fab
                active={false}
                direction="up"
                containerStyle={{}}
                style={styles.blue}
                position="bottomRight"
                onPress={() => setNewItinerayModal(true)}>
                <Icon name="ios-add" />
            </Fab>
}
            {
                newItineraryModalOpen && 
                <CreateNewItinerary reloadItineraries={() => reload()} open={newItineraryModalOpen} close={() => setNewItinerayModal(false)} />
            }
        </Container>
    );
}