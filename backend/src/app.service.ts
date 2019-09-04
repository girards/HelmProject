import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from './branch.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Branch)
    private readonly branchRepository: Repository<Branch>) {

    this.branchRepository.create({ name: 'none' }).save();
  }
  async getHello(): Promise<Branch> {
    return (await this.branchRepository.find())[0];
  }
}
