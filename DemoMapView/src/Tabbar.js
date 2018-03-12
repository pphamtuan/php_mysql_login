import React, {Component} from 'react';
import {Container, Header, Tab, Tabs, TabHeading, Text, Icon, View, Fab} from 'native-base';
import MapScreen from './MapScreen/MapScreen';
import Account from './Account/Account';

export default class myTab extends Component{
    render() {
        return (
          <Container>

                <Tabs tabBarPosition = 'bottom' transparent style = {{backgroundColor: 'white'}}>
                    <Tab heading = {
                            <TabHeading>
                                <Icon iconFamily = 'FontAwesome' name = 'home'/>                            
                            </TabHeading>
                        }>
                            <MapScreen/>
                
                    </Tab>

                    <Tab heading = {
                            <TabHeading>
                                <Icon iconFamily = 'FontAwesome' name = 'person'/>
                            </TabHeading>
                        }>
                        <Account/>
                    </Tab>
                </Tabs>             
                              
          </Container>   
        );
    }
}
