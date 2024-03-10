'use server';

import {verify} from 'jsonwebtoken'
import {redirect, RedirectType} from "next/navigation";
import {SupportedMerchants} from "@/utils/constants";
import {ShoppingLinksCreator} from "@/services/shopping-links-helper";

interface ShoppingURL {
    url: string
    source: string
    iss: string
}

const ShoppingPage = async ({ params:{ id } }:{params: {id: string}}) => {
    let res: ShoppingURL | null = null;
    let url: string | null = null

    try {
        res = await new Promise((resolve, reject) => {
            verify(id, process.env.SHOPPING_URL_JWT_SECRET as string, {issuer: 'espai'}, (err, decoded:any) => {
                if (err) return reject(err);
                return resolve(decoded)
            })
        })

        if (!res?.url) {
            console.log('Invalid redirect url token!', id);
            return null
        }

        url = res.url
        if (res.source.toLowerCase() === SupportedMerchants.Amazon) {
            // When not amazon, we should create the url on the server
            url = ShoppingLinksCreator.createAmazonShoppingLink(res.url)
        }

        if (url == null) {
            // Display error page
        }
    }catch(e){
        console.log('Error occurred decoding url token', e)
    }

    if (url) {
        redirect(url)
    }
    return null
}

export default ShoppingPage