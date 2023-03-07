import { ObjectType, Field, Float } from "type-graphql";
import { App } from "../apps.types";

@ObjectType()
export class ProductGraph {
  @Field(() => [String], { nullable: true })
  categories?: string[];

  @Field(() => [Float], { nullable: true })
  products?: number[];

  @Field(() => [Float], { nullable: true })
  views?: number[];
}
@ObjectType()
export class ProductsBarGraph {
  @Field(() => [String], { nullable: true })
  labels?: string[];

  @Field(() => [Float], { nullable: true })
  products?: number[];
}
@ObjectType()
export class CashGraph {
  @Field(() => [String], { nullable: true })
  categories?: string[];

  @Field(() => [Float], { nullable: true })
  cash?: number[];
}
@ObjectType()
export class Series {
  @Field(() => [String], { nullable: true })
  name?: string;
  @Field(() => [Float], { nullable: true })
  data?: number[];
}

@ObjectType()
export class ActiveJobs {
  @Field(() => [Series], { nullable: true })
  series?: Series[];
}

@ObjectType()
export class Dashboard {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  shortDescription?: string;

  @Field(() => [App])
  recentApps: App[];

  @Field(() => ProductGraph)
  productViews: ProductGraph;

  @Field(() => ProductsBarGraph)
  productsBar: ProductsBarGraph;

  @Field(() => CashGraph)
  cashFlow: CashGraph;
}
