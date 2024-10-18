import { inject, injectable } from "tsyringe";
import { IHomeView } from "../interfaces/homeViewInterface";
import { HomeViewRepository } from "../repositories/homeViewRepository";

@injectable()
export class HomeViewService {
  constructor(
    @inject(HomeViewRepository) private homeViewRepository: HomeViewRepository
  ) {}
  async getHomeView(): Promise<IHomeView | null> {
    return await this.homeViewRepository.getHomeView();
  }
  async putTitleSmall(titleNew: string): Promise<IHomeView | null> {
    return await this.homeViewRepository.putTitleSmall(titleNew);
  }
}
