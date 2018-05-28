import React, {Component} from 'react';
import { View, Text, ListView, TouchableOpacity } from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import CustomListItem from "./CustomListItem";

class CustomListView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.data)
        };
    }

    openDetail = () => {
        this.setState({display: true});
    };

    _pressRow = (rowData, rowID) => {
        _data[rowID].showDetail = !rowData.showDetail;

        this.setState({
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(_data)
        });
    };

    renderRow = (rowData, sectionID, rowID, highlightRow) => {
        return (
            <CustomListItem 
                rowData 
                sectionID 
                rowID 
                highlightRow 
                _pressRow={this._pressRow} 
                openDetail={this.openDetail}
                navigateTo={this.navigateTo} />
        );
    };

    render() {
        return (<ListView
            style={{
            backgroundColor: "#c0392b"
        }}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}/>);
    }
}

export default CustomListView;