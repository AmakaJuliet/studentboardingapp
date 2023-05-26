import { IsString, MaxLength, IsNotEmpty, IsNumber } from "class-validator";

export class CreateStudentDto{
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name:string;

    @IsNumber()
    @IsNotEmpty()
    readonly roleNumber:number;

    @IsNumber()
    @IsNotEmpty()
    readonly class:number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly gender:string;
    
    @IsNumber()
    @IsNotEmpty()
    readonly marks:number;
}