import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { StudentSchema } from './schema/student.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {dbName:'nestdb'}),
    MongooseModule.forFeature([{name: 'Student', schema:StudentSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
