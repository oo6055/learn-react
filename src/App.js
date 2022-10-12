import React from 'react';
import { Switch, Route , Redirect } from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { connect } from 'react-redux'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shot.component';
import { auth, createUserProfilDocument } from './firebase/firebase.utiles';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {

      if (user){
        const userRef = await createUserProfilDocument(user)
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data() 
            })
        })
      }
      setCurrentUser(user)
      
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
  return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/shop' component={ShopPage} />
          <Route excat path='/signin' render= {() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
        </Switch>
      </div>
  );
  }
}

const mapStateToProps = (state) => createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
