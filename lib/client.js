import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'm3fjnm61',
    dataset: 'production',
    apiVersion:'2022-07-21',
    useCdn: true,
    token: process.env.NEXT_PUBILC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);