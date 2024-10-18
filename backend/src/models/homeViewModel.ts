import { IHomeView } from "../interfaces/homeViewInterface";
import { injectable } from "tsyringe";

const homeViewInitial: IHomeView = {
  titleSmall: "Hey, I am Jose Cardona",
  title: "Designer - Dev FullStack",
  description: `Welcome to my portfolio featuring academic projects. 
    Explore
    Web Design: Concepts in Adobe XD.
    Functional Projects: Built with HTML, CSS, and JavaScript.
    Driven by Design Thinking for user-focused solutions.`,
  urlImage: `/images/me.png`,
};

@injectable()
export default class HomeViewModel {
  async getHomeView(): Promise<IHomeView | null> {
    return homeViewInitial;
  }
  async putTitleSmall(titleNew: string): Promise<IHomeView | null> {
    homeViewInitial.titleSmall = titleNew;
    return homeViewInitial;
  }
}
