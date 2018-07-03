import {Injectable} from '@angular/core'
import  {IUser,  } from './user.model'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

@Injectable()
export class AuthService{
    currentUser:IUser
    loginUser(userName:string,password:string){
        this.currentUser={
            id:1,
            userName:userName,
            firstName:'Brenda',
            lastName:'Molina'
        }
    }

    isAuthenticaded(){
        return!!this.currentUser;
    }
}