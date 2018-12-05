import React from 'react';

import Item from './Item';
import ItemEdit from './ItemEdit';

import store from './store';

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    getData = () => {
        let items = store.getItems();
        this.setState({
            items: items
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        let { items } = this.state;

        return (
            <div className="grid-ctrl">
                <ItemEdit onChange={this.getData} />
                <div className="grid">
                    {
                        items.map((item, ix) => <Item key={ix} item={item} />)
                    }
                </div>
            </div>
        );
    }
}


export default Grid;