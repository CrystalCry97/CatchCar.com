import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setPickupLocationFilter, sortByRating, sortByPrice } from '../actions/filters';

class CarListFilters extends React.Component{
    state= {
        //calendar=null ....
    };
    
    render(){
        return (
            <div className="carlistfilters">
                    <input 
                        type="text" 
                        placeholder="Pickup location"
                        value={this.props.filters.location}
                        onChange= {(e) => {
                            this.props.dispatch(setPickupLocationFilter(e.target.value));
                            console.log(e.target.value)
                        }}
                    />
                    <select value={this.props.filters.sortBy} onChange={(e) => {
                        if(e.target.value === "rating"){
                            this.props.dispatch(sortByRating());
                        }
                        else if(e.target.value === "price"){
                            this.props.dispatch(sortByPrice());
                        }
                    }}>
                        <option value="rating">Rating</option>
                        <option value="price">Price</option>
                    </select>
            </div>
        );
    }

};

const mapStatetoProps = (state) => {
    return {
        filters:state.filters
    };
};


export default connect(mapStatetoProps)(CarListFilters);