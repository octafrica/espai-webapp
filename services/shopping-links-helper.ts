import {envs} from "@/config/envs";

export class ShoppingLinksCreator {
    static createAmazonShoppingLink (url: string): string {
        const amz = new URL(url)
        amz.searchParams.append("tag", envs.amazonTagID as string)
        return amz.toString()
    }
}