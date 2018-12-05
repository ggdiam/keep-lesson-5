import React from 'react';

class Item extends React.Component {
    render() {
        let { item } = this.props;

        if (item) {
            let { title, text } = item;

            return (
                <div className="item">
                    <p className="item-head">{title}</p>
                    <p>{text}</p>
                </div>
            );
        }
        
        return null;
    }
}

export default Item;
