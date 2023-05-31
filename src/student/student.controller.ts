import { Controller, Post, Param, Delete, Get, Put, Res, HttpStatus, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { response } from 'express';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post()
    async createStudent(@Res() response,@Body() createStudentDto: CreateStudentDto) {
        try{
            const newStudent = await this.studentService.createStudent(createStudentDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Student has been Created successfully',
                newStudent
            });
        }catch(err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: `Error: Student not created!`,
                error: 'Bad Request'
            });
        }
    }

    @Get() 
    async getStudents(@Res() response) {
        try {
            const studentData = await this.studentService.getAllStudents();
            return response.status(HttpStatus.OK).json({
                message: 'All Students Data found successfully', 
                studentData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Put('/:id')
    async updateStudent(@Res() response, @Param('id') studentId: string, @Body() updateStudentDto: UpdateStudentDto) {
        try {
            const existingStudent = await this.studentService.updateStudent(studentId, updateStudentDto);
            return response.status(HttpStatus.OK).json({
                message: 'Student has been successfully updated',
                existingStudent,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteStudent(@Res() response, @Param('id') studentId: string) {
        try {
            const deletedStudent = await this.studentService.deleteStudent(studentId)
            return response.status(HttpStatus.OK).json({
                message: 'Student Deleted Successfully',
                deletedStudent,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
