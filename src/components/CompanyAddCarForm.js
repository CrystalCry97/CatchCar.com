import React from 'react';

export default class CompanyAddCarForm extends React.Component{
    state ={
        carBrand:'',
        airConditioning:'',
        gearBox:'',
        location:'',
        pricePerDay:'',
        carSeats:'',
        error:''
    };
    oncarBrandChange= (e) => {
        const carBrand= e.target.value;
        this.setState(() => ({carBrand}));
    };
    onAirConditioningChange= (e) =>{
        const airConditioning= e.target.value;
        this.setState(() => ({airConditioning}));
    };
    onGearBoxChange= (e) =>{
        const gearBox= e.target.value;
        this.setState(() => ({gearBox}));
    };
    onLocationChange= (e) =>{
        const location= e.target.value;
        this.setState(() => ({location}));
    };
    onCarSeatsChange= (e) =>{
        const carSeats= e.target.value;
        if(!carSeats || carSeats.match(/^\d{1}?$/)){
            this.setState(()=> ({carSeats}));
        }
    }
    onPricePerDayChange= (e) => {
        const pricePerDay= e.target.value;
        if(!pricePerDay || pricePerDay.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=> ({pricePerDay}));
        }
    };
    onSubmit = (e) =>{
        e.preventDefault();

        if(!this.state.carBrand){
            this.setState(()=> ({error: 'ERROR: Please provide brand car'}));
        } else if(!this.state.gearBox){
            this.setState(()=> ({error: 'ERROR: Please provide gear box'}));
        } else if(!this.state.location){
            this.setState(()=> ({error: 'ERROR: Please provide location'}));
        } else if(!this.state.pricePerDay){
            this.setState(()=> ({error: 'ERROR: Please provide price per day'}));
        } else{
            this.setState(()=> ({error: ''}));
            this.props.onSubmit({
                carBrand: this.state.carBrand,
                carSeats: parseInt(this.state.carSeats,10),
                airConditioning: this.state.airConditioning,
                gearBox: this.state.gearBox,
                location: this.state.location,
                pricePerDay: parseFloat(this.state.pricePerDay,10) * 100
            });
        }
    };
    render(){
        return(
            <div className="companyaddcarform__container">
                {this.state.error && <p><b>{this.state.error}</b></p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        className="companyaddcarform__input"
                        type="text"
                        placeholder="Brand Car"
                        autoFocus
                        value={this.state.carBrand}
                        onChange={this.oncarBrandChange}
                    />
                    <input 
                        className="companyaddcarform__input"
                        type="text"
                        placeholder="Number of car seats"
                        value={this.state.carSeats}
                        onChange={this.onCarSeatsChange}
                    />
                    <input
                        className="companyaddcarform__input" 
                        type="text"
                        placeholder="Air Conditioning"
                        value={this.state.airConditioning}
                        onChange={this.onAirConditioningChange}
                    />
                    <input
                        className="companyaddcarform__input" 
                        type="text"
                        placeholder="Gearbox"
                        value={this.state.gearBox}
                        onChange={this.onGearBoxChange}
                    />
                    <input
                        className="companyaddcarform__input" 
                        type="text"
                        placeholder="Location"
                        value={this.state.location}
                        onChange={this.onLocationChange}
                    />
                    <input 
                        className="companyaddcarform__input"
                        type="text"
                        placeholder="Price Per Day"
                        value={this.state.pricePerDay}
                        onChange={this.onPricePerDayChange}
                    />
                    <br />
                    <button>Add Car</button>
                </form>
            </div>
        )
    }
}