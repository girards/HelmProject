import { Branch } from './branch.entity';
import { Repository } from 'typeorm';
export declare class AppService {
    private readonly branchRepository;
    constructor(branchRepository: Repository<Branch>);
    getHello(): Promise<Branch>;
}
