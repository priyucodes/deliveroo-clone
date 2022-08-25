import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '8imn1xyo',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);

// RUN THIS to add exception for localhost (CORS policy)
// sanity cors add http://localhost:3000

export const urlFor = source => builder.image(source);

export default client;
