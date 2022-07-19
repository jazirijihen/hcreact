import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import HighchartsReactNative from '@highcharts/highcharts-react-native';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartOptions: {
                series: [{
                    data: [1, 3, 2]
                }]
            }
        };
    }
    render() {
        return (
            <View>
                <HighchartsReactNative
                    styles={styles.container}
                    options={this.state.chartOptions}
                    modules={modules}
                / >
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // height: 200,
        // width: 200,
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
});