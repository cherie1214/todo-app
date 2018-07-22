import React from 'react';
import update from 'react-addons-update';
import PropTypes from 'prop-types';

export default class ContactDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit : false,
            name : '',
            phone: ''
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleToggle() {
        if(!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        } else {
            this.handleEdit();
        }

        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleEdit(){
        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleKeyPress(e) {
        if(e.charCode===13){
            this.handleToggle();
        }
    }

    render() {

        const details = (
            <div>
                <span>{this.props.contact.name} {this.props.contact.phone}</span>
            </div>
        );

        const edit = (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </p>
            </div>
        )

        const view = this.state.isEdit ?  edit : details;

        const blank = (<div>Not Seleted</div>);

        return(
            <div>
                <h3>세부 정보</h3>
                <span>{this.props.isSelected ? view : blank}</span>
                <p>
                    <button onClick={this.handleToggle}>
                        {this.state.isEdit ?  "확인" : "수정"}
                    </button>
                    <button onClick={this.props.onRemove}>삭제</button>
                </p>
            </div>
        );
    }
}
ContactDetails.propTypes = {
    contact: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
};

ContactDetails.defaultProps = {
    contact: {
        name:'',
        phone:''
    },
    onRemove: () => {console.error('onRemove not defined')},
    onEdit: () => {console.error('onRemove not defined')}
};
