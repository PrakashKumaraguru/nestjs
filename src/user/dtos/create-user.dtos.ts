import { IsEmail,IsString } from "class-validator";

export class createUserDtos {
   
    @IsEmail()
    email:string;

    @IsString()
    password:string;
}