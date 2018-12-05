import React from 'react';

import NewItem from './NewItem';
import store from './store';

class ItemEdit extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();

        this.state = {
            isEdit: false,
            title: '',
            text: ''
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleGlobalClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleGlobalClick);
    }

    handleGlobalClick = (e) => {
        if (this.ref && this.ref.current && this.ref.current.contains(e.target)) {
        } else {
            this.stopEdit();
        }
    }

    startEdit = () => {
        this.setState({ isEdit: true });
    }

    stopEdit = () => {
        let { onChange } = this.props;
        let { title, text } = this.state;

        if (title || text) {
            store.addItem({
                title: title,
                text: text
            });

            onChange && onChange();
        }

        this.setState({ isEdit: false, title: '', text: '' });
    }

    handleClick = (e) => {
        e.nativeEvent.stopImmediatePropagation();
        this.startEdit();
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <NewItem onClick={this.handleClick} />
                {this.renderEdit()}
            </div>
        )
    }

    renderEdit = () => {
        let { isEdit } = this.state;

        if (isEdit) {
            return (
                <div className="item-edit" ref={this.ref}>
                    <div className="item-edit-caption">
                        <input type="text" placeholder="Заголовок"
                            onChange={this.handleChange.bind(this, 'title')}
                        />
                    </div>
                    <div className="item-edit-body">
                        <textarea placeholder="Текст"
                            onChange={this.handleChange.bind(this, 'text')}
                        />
                    </div>
                </div>
            );
        }

        return null;
    }
}

export default ItemEdit;