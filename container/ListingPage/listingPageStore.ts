import {makeAutoObservable} from 'mobx';
import {Country} from "@/components/Card/ListCard";

class ListingPageStore {

    constructor() {
        makeAutoObservable(this);
    }

    countriesData: Country[] = [];
    isLoading: boolean = false;


    setCountriesData = (data : Country[]) => {
        this.countriesData = data;
    }

    setIsLoading = (bool : boolean) => {
        this.isLoading = bool;
    }

    get countries() {
        return this.countriesData;
    }


    fetchData = () => {
        this.setIsLoading(true)
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const massageData = data.map((country : any) => {
                    return {
                        name: country.name.common,
                        flag: country.flags.svg,
                        population: country.population,
                        region: country.region,
                        capital: country.capital,
                        currency: country.currency
                    }
                })
                this.setCountriesData(massageData);
                this.setIsLoading(false)
            });
    }

}

export const listingPageStore = new ListingPageStore();
