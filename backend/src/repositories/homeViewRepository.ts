import { inject, injectable } from "tsyringe";
import HomeViewModel from "../models/homeViewModel";
import { IHomeView } from "../interfaces/homeViewInterface";

@injectable()
export class HomeViewRepository {
  constructor(@inject(HomeViewModel) private homeViewModel: HomeViewModel) {}
  async getHomeView(): Promise<IHomeView | null> {
    return await this.homeViewModel.getHomeView();
  }
  async putTitleSmall(titleNew: string): Promise<IHomeView | null> {
    return await this.homeViewModel.putTitleSmall(titleNew);
  }
}
