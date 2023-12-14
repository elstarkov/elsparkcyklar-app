// Load data from API call
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    let data = {};

    try {
        // For example
        const responseBikes = await fetch(`http://server:1338/v1/bikes`);
    
        if (responseBikes.status == '200') {
            const bike = await responseBikes.json();
            data['bike'] = bike.bike;
        } else {
            data['error'] = responseBikes.statusText;
        }

        // More API calls...
        // const responseCities = await fetch(`http://server:1338/v1/city`);
    
        // if (responseCities.status == '200') {
        //     const city = await responseCities.json();
        //     data['city'] = city.city;
        // } else {
        //     data['error'] = responseCities.statusText;
        // }

        return { props: { data } };
    } catch (error) {
        console.error('Fetch error:', error.message);
        data['error'] = error.message;

        return { props: { data } };
    }
}