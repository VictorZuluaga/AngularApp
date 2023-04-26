import {Article} from "./Article.schema";

export interface Articles{
    loadData(): Promise<Article>;
}   