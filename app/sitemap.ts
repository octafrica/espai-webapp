import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://espai.co',
            lastModified: new Date(),
            priority: 1
        },
        {
            url: 'https://espai.co/privacy',
        },
        {
            url: 'https://espai.co/terms',
        }
    ]
}