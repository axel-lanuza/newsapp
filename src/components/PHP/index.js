import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Table from '../../components/Table/index';
import { Button, Search, Sort } from '../../components/Button/index';
import { Container, Row, Col, FormGroup }from 'react-bootstrap';
import { DEFAULT_HPP, DEFAULT_PAGE, DEFAULT_QUERY, PATH_BASE,
         PATH_SEARCH, PARAM_HPP, PARAM_PAGE, PARAM_SEARCH } from '../../constants/index';
import PropTypes from 'prop-types';
import { sortBy, update } from 'lodash';

const urlTemplate = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}${DEFAULT_PAGE}&${PARAM_HPP}${DEFAULT_HPP}`;
console.log(urlTemplate);

function isSearched(searchTerm) {
    return (item) => (!searchTerm && !searchTerm.length > 2)|| item.title.toLowerCase().includes(searchTerm.toLowerCase());
}

const withLoading = (Component) => ({isLoading, ...rest}) => isLoading ? <Loading message='Loading data...' /> : <Component {...rest} />;

const updateTopStories = (hits, page) => (prevState) => {
  const {searchKey, results} = prevState;
  const oldHits = results && results[searchKey] ? results[searchKey].hits : [];
  const updatedHits = [...oldHits, ...hits];

  return {
    results: {...results,[searchKey]: {hits: updatedHits, page}},
    isLoading: false
  }
};
class Php extends Component {
   // setting up internal component state
  // ES6 class can use constructor to initialize internal state
  constructor(props){
    // super props sets this.props to the constructor
    super(props);

    // setting up state
    this.state = {
      results: null,
      searchKey: '',
      searchTerm: 'PHP',
      isLoading: false,
    }

    // bind the functions to this (app component)
    this.removeItem = this.removeItem.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.fetchTopStories = this.fetchTopStories.bind(this);
    this.setTopStories = this.setTopStories.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkTopStoriesSearchTerm = this.checkTopStoriesSearchTerm.bind(this);
  }

  // check top stories search term
  checkTopStoriesSearchTerm(searchTerm) {
    return !this.state.results[searchTerm];
  }

  // set top stories
  setTopStories(result){
    // get the hits and page from result
    const { hits, page } = result;

    // this.setState((prevState) => {
    //   const {searchKey, results} = this.state;
    //   const oldHits = results && results[searchKey] ? results[searchKey].hits : [];
    //   const updatedHits = [...oldHits, ...hits];

    //   return {
    //     results: {...results,[searchKey]: {hits: updatedHits, page}},
    //     isLoading: false
    //   }
    // });

    this.setState(updateTopStories(hits, page));
  }

  // fetch top stories
  fetchTopStories(searchTerm, page){
    this.setState({
      isLoading: true
    })
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}
    &${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => {       
        return response.json()
      })
      .then(result => {
        return this.setTopStories(result);
      })
      .catch(e => e);
  }

  // component did mount
  componentDidMount() {
    const {searchTerm} = this.state;
    this.setState({
      searchKey: searchTerm
    });
    this.fetchTopStories(searchTerm, DEFAULT_PAGE);
  }

  // on search submit function
  onSubmit(event) {
    const {searchTerm} = this.state;
    this.setState({
      searchKey: searchTerm
    });
    if (this.checkTopStoriesSearchTerm(searchTerm)) {
      this.fetchTopStories(this.state.searchTerm, DEFAULT_PAGE);
    }
    event.preventDefault();
  }

 
 // lets rewrite removeItem function in ES6
 removeItem(id){
  const { results, searchKey } = this.state;
  const { hits, page } = results[searchKey];
  // const isNotId = item => item.objectID !== id;
  const updatedList = hits.filter(item => item.objectID !== id);
  // this.setState({ result: Object.assign({}, this.state.result, {hits: updatedList}) });
  this.setState({ 
    results: {
      ...results, 
      [searchKey]: { hits: updatedList, page } 
    } 
  });
 }

 // get input field value from search form
 searchValue(event){
  // console.log(event)
  this.setState({ searchTerm: event.target.value });
 }

  render() {

    const { results, searchTerm, searchKey, isLoading } = this.state;

    // if (!result) { return null; }
    const page = (results && results[searchKey] && results[searchKey].page) || 0;

    const list = (results && results[searchKey] && results[searchKey].hits) || [];

    return (
      <div>

        <Container fluid>
          <Row>
            <div className="jumbotron text-center">

            <Search
              onChange={ this.searchValue } 
              value={ searchTerm }
              onSubmit={ this.onSubmit }
            >NEWSAPP</Search>

            </div>
          </Row>
        </Container>
        <Container>
          <Row>
            <Table 
              list={ list }
              removeItem={ this.removeItem }
            /> 
          </Row>
        </Container>
        <Container>
          <Row>
            <div className="text-center alert">
                <ButtonWithLoading 
                    isLoading={ isLoading }
                    className="btn btn-success"
                    onClick= {
                      () => this.fetchTopStories(searchTerm, page + 1)
                    }
                  >
                  Load More Entries
                </ButtonWithLoading>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

const ButtonWithLoading = withLoading(Button);

export default Php;
