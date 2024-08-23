const url = 'https://blog.broadband.asia/wp-json/wp/v2/posts?per_page=10';
const imageUrlFetch = 'https://blog.broadband.asia/wp-json/wp/v2/media/';
const headers = {
  'Content-Type': 'application/json',
};

const getImageLink = async (id: any) => {
  try {
    const apiurl = `${imageUrlFetch}${id}`;
    const response = await fetch(apiurl, {
      method: 'GET',
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      const imageLink = data.guid.rendered;
      return imageLink;
    }
    return '';
  } catch (err) {
    return '';
  }
};

const BlogDataFetch = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });
      if (response.ok) {
        const data = await response.json();
        const customData = await Promise.all(
          data.map(async (post: any) => {
            const imageLink = await getImageLink(post.featured_media);
            return {
              id: post.id,
              title: post.title.rendered,
              link: post.link,
              imageLink: imageLink,
            };
          })
        );
        return customData;
      } else {
        return { error: 'Request failed' };
      }
    } catch (err) {
      return { error: 'An error occurred' };
    }
};

export async function GET(request: Request, response: Response) {

    try {
        const response = await BlogDataFetch();
        return new Response(JSON.stringify(response))
    } catch (err) {
        return new Response(JSON.stringify(
            { error: 'An error occurred' }
        ))
    }
    
}