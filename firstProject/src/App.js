import React from "react";
import {View,Text,SafeAreaView,StyleSheet} from 'react-native';
import Card from './components/Card';

function App(){
    return(
        <SafeAreaView style={styles.container}>
            <Card title="Özlem Miğfer" text="Özgür olun."/>
            <Card title="James Clear" text="Ortamınızın kurbanı olmak zorunda değilsiniz.Mimarı da olabilirsiniz."/>
            <Card title="Emily Bronte" text="Ruhlarımız her neden yoğrulmuşsa, ikimizinki de aynı."/>
            <Card title="Stefan Zweig" text="Birisi barışı başlatmalı, tıpkı savaşı başlattığı gibi."/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        flex:1
    }
})


export default App;