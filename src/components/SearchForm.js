import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

const now= moment(); //get current date n time
console.log(now.format('MMM Do, YYYY'));

export default class SearchForm extends React.Component{
    state= {
        //createdAt: moment(),
        //startDate: moment().startOf('month'), // will be transfer
        //endDate: moment().endOf('month'), // will be transfer
        //calendarFocused:null
        pickupLocation: ''
    }

    onPickupLocationChange= (e) => {
        const pickupLocation= e.target.value;
        this.setState(() => ({pickupLocation}));
    }

    onSubmit= (e) => {
        e.preventDefault();
        this.props.onSubmit({
            pickupLocation: this.state.pickupLocation
        });
        console.log("Submit");
    }

    render(){
        return(
            <div>
                <div className="searchPage">
                    <div className="searchForm">
                        <form onSubmit={this.onSubmit}>
                            <input 
                                type="text"
                                placeholder="Pickup Place"
                                value={this.state.pickupLocation}
                                onChange={this.onPickupLocationChange}
                            />
                            <button>Find a car</button>
                        </form>
                    </div>
                </div> 
            </div>  
        )
    }
}