import {Article} from "./Article.schema";

export interface Articles{
    loadData_article(): Promise<Article>;
}   