import axios from 'axios';
import {makeAutoObservable} from 'mobx';

import {ILoginData, ISignupData, IUser} from "../interfaces";


export class AuthStore {
    public user: IUser | null;
    public isLoggedIn: boolean;
    public loading: boolean;


    public constructor() {
        this.user = null;
        this.isLoggedIn = false;
        this.loading = false;
        makeAutoObservable(this);
    }

    private setUser(value : IUser | null ): void {
        this.user = value;
    }

    public setIsLoggedIn(status: boolean) : void {
        this.isLoggedIn = status;
    }

    public setLoading(value: boolean) : void {
        this.loading = value;
    }

    public async login(data: ILoginData): Promise<boolean> {
        this.setLoading(true);
        this.setUser(null);

        try {
            const response = await axios.post('/auth/login',data)
            this.setUser(response.data);
            console.log(response.data);
            this.setIsLoggedIn(true);
            console.log(response)
            return true;
        }
        catch(error) {
            console.log(axios.isAxiosError(error) &&  error.message)
        } finally {
            this.setLoading(false)
        }
        return  false;
    }

    public async signup(data: ISignupData): Promise<boolean> {

        this.setLoading(true);
        this.setUser(null);

        try {
            const response = await axios.post('/auth/register',data)
            this.setUser(response.data);
            console.log(response.data)
            this.setIsLoggedIn(true);
            console.log(response)
            return true;
        }
        catch(error) {
            console.log(axios.isAxiosError(error) &&  error.message)
        } finally {
            this.setLoading(false)
        }
        return  false;
    }

    public async getUser() : Promise<void> {
        this.setUser(null);
        try {
            const response = await axios.get('/auth/tokenGetUserDetails');
            this.setUser(response.data);
            this.setIsLoggedIn(true);
        } catch (error) {
            console.log(axios.isAxiosError(error) &&  error.message)
        } finally {
            this.setLoading(false);
        }
    }
}