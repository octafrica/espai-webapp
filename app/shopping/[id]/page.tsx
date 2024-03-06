import {verify} from 'jsonwebtoken'
import {redirect} from "next/navigation";

interface ShoppingURL {
    url: string
    source: string
    iss: string
}

const ShoppingPage = async ({ params:{ id } }:{params: {id: string}}) => {
    let res: ShoppingURL;
    try {
        res = await new Promise((resolve, reject) => {
            verify(id, process.env.SHOPPING_URL_JWT_SECRET as string, {issuer: 'espai'}, (err, decoded:any) => {
                if (err) return reject(err);
                return resolve(decoded)
            })
        })

        if (!res.url) console.log('Invalid redirect url token!', id);
    }catch(e){
        console.log('Error occurred decoding url token', id, e)
    }

    // @ts-ignore
    if (res.url) { // if defined
        // @ts-ignore
        redirect(res.url)
    }

    return null
}

export default ShoppingPage