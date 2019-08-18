import { AppService } from "./app.service";
export declare class AppResolver {
    private readonly appService;
    constructor(appService: AppService);
    getBranch(): Promise<import("./branch.entity").Branch>;
}
