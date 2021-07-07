import React from 'react';
import {signup} from '../api/apiCalls';
import Input from '../components/Input';
import { withTranslation } from 'react-i18next';

class UserLoginPage extends React.Component{
    state = {
        username: null,
        password: null,
        pendingApiCall: false,
        errors:{}
    }
    onChange = event => {
        const { t } = this.props;
        const {name, value} = event.target;
        const errors = { ... this.state.errors}
        errors[name] = undefined
        this.setState({
            [name]:value,
            errors
        })
    }
    onClickLogin = async event => {
        event.preventDefault();
        const {username, password} = this.state;
        const body = {
            username,
            password
        };
        this.setState({pendingApiCall: true});
        try{
            const response = await signup(body);
        }catch(error){
            if(error.response.data.validationErrors){
               this.setState({ errors: error.response.data.validationErrors}); 
            }
            
        }
        this.setState({pendingApiCall: false});
    }
    
    render(){
        const {pendingApiCall, errors} = this.state;
        const {username, password} = errors;
        const {t} = this.props;
        return(
            <div className="container">
            <form>
                <h1 className="text-center">{t('Login')}</h1>
                <Input name="username" label={t('Username')} error={username} onChange={this.onChange} />
                <Input name="password" label={t('Password')} error={password} onChange={this.onChange} type="password" />
                <div className="form-group text-center">
                    <button className="btn btn-primary" onClick={this.onClickLogin} disabled={pendingApiCall}>
                        {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}{t('Login')}
                    </button>
                </div>
                
            </form>
            </div>

        );
    }
}

export default withTranslation()(UserLoginPage);