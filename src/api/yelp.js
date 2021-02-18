import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer MwdSqOHtU-3cIcVIW4f6NxS_K6N5AmH__PhJ-59IaKYq_HQZowGio9KQYuaUYd579Ya1f9XW6JscVtzXklYHGEON2_ZwA2oCZiMmxPg9btWlMTCKANx00zWiWyDkX3Yx'
    }
});

