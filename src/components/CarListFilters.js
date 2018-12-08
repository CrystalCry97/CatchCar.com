import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setPickupLocationFilter, sortByRating, sortByPrice } from '../actions/filters';

class CarListFilters extends React.Component{
    state ={
        pickUpLocation:'',
        sortBy:''
    };

    onPickupLocationChange = (e) =>{
        const pickUpLocation= e.target.value;
        this.setState(()=> ({pickUpLocation}));
    };

    onSortByChange= (e) =>{
        const sortBy= e.target.value;
        this.setState(() => ({sortBy}));
    };

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.dispatch(setPickupLocationFilter(this.state.pickUpLocation));
        if(this.state.sortBy === "rating"){
            console.log("set: rating");
            this.props.dispatch(sortByRating());
        }else if (this.state.sortBy === "price"){
            console.log("set: price");
            this.props.dispatch(sortByPrice());
        }

    };

    render(){
        return (
            <div className="carlistfilters">
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Pickup location"
                        value={this.state.pickUpLocation}
                        onChange= {this.onPickupLocationChange}
                    />
                    <select value={this.state.sortBy} onChange={this.onSortByChange}>
                        <option value="rating">Rating</option>
                        <option value="price">Price</option>
                    </select>
                    <button>Find Cars</button>
                </form>

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