import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../actions';

//Store が持つ状態stateをどのようにpropsに混ぜ込むかを決める
//State情報をPropsとして扱うことができるということ。
const mapStateToProps = state => {
    return {
      searchField: state.searchField
    }
}

//Reducer にアクションを通知する関数dispatchをどのようにpropsに混ぜ込むかを決める
//Action関数をPropsとして扱うことができるということ。
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}
class App extends Component  {
    constructor(){
        super()
        this.state = {
            cats: [],
            searchfield:''
        }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ cats:users }));
    }

    render(){
        const {cats} = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !cats.length?
            <h1>Loading</h1> :
            (
           
                <div className='tc'>
                    <h1 className="f1">CatFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList cats={filteredCats} />
                    </Scroll>
                </div>
            );
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(App);