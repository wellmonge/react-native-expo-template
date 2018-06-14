import React, {Component} from 'react';
import { ListView } from "react-native";
import _data from '../models/dummyData';
import CustomListItem from "./CustomListItem";

class CustomListView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            display:false,
            dataSource: ds.cloneWithRows(this.props.data)
        };
    }

    _pressRow = (rowData, rowID) => {
        _data[rowID].showDetail = !rowData.showDetail;

        this.setState({
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(_data)
        });
    };

    navigateTo = () => {
        alert("teste")
        this.props
            .navigation
            .navigate("SettingsScreen");
 
    }

    renderRow = (rowData, sectionID, rowID, highlightRow) => {
        return (
            <CustomListItem 
                rowData={rowData}
                sectionID={sectionID}
                rowID ={rowID}
                highlightRow={highlightRow}
                _pressRow={this._pressRow.bind(this, rowData, rowID)}
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