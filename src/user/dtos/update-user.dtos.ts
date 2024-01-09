import { IsString,IsOptional } from "class-validator";

export class updateUserDtos{

    @IsString()
    @IsOptional()
    email:string;

    @IsString()
    @IsOptional()
    password:string;
}