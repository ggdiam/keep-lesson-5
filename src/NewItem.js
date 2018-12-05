import React from 'react';

class NewItem extends React.Component {
    handleClick = (e) => {
        let { onClick } = this.props;
        onClick && onClick(e);
    }

    render() {
        return (
            <div className="new-item" onClick={this.handleClick}>
                <div className="new-item_inp">Заметка...</div>
            </div>
        );
    }
}

export default NewItem;
