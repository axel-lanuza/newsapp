import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, FormGroup }from 'react-bootstrap';

export class Search extends Component {

    componentDidMount() {
      this.input.focus();
    }
  
    render() {
  
      const { onChange, value, children, onSubmit } = this.props;
  
      return(
        <form onSubmit= {onSubmit}>
        <FormGroup>
  
          <h1 style={{ fontWeight: 'bold' }}>{ children }</h1> 
          <hr style={{ border: '2px solid black', width: '100%' }} />
  
          <div className="input-group">
  
          <input
            className="form-control width100 searchForm" 
            type="text" 
            value={value}
            onChange={onChange}
            ref={(node) => {this.input = node}}
          />
  
          <span className="input-group-btn">
            <button
              className="btn btn-primary searchBtn"
              type="submit"
            >
              Search
            </button>
          </span>
  
          </div>
  
          </FormGroup>
        </form>
      )
    }
  
}

export const Sort = ({ sortKey, onSort, children, className, activeSortKey }) => 
  {
    const sortClass = ['btn btn-default sortBtn'];
    if (sortKey === activeSortKey) {
      sortClass.push('btn btn-primary');
    }

    return (
      <Button 
        className={ sortClass.join(' ') }
        onClick={ () => onSort(sortKey)}
      >
        {children}
      </Button>
    )
}

export const Button = ({ onClick, children, className='' }) => 
  <button
    className={ className }  
    onClick={ onClick } >
    { children }
  </button>

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  className: '',
}
