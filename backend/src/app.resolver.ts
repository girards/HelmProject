import { Resolver, Query, Args } from "@nestjs/graphql";
import { AppService } from "./app.service";

@Resolver("Branch")
export class AppResolver {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Query()
  async getBranch() {
    return this.appService.getHello();
  }
}