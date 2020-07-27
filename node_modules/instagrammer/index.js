const axios = require('axios');

// Author: Khaled Alam

const IG_username = 'AsdamPodcast';
const IG_POST_ID = 'B-oJxU9g0ST';

const getIGUrl = (username = IG_username) => 'https://www.instagram.com/' + username + '/?__a=1&is_video=true';

const getPOSTUrl = (post_id = IG_POST_ID) => 'https://www.instagram.com/p/' + post_id + '/?__a=1';


/**
 * Scrape instagram profile media and more useful information.
 * @since      1.0.0
 * @access     public
 *
 * @param {string} username      Instagram profile username.
 */
module.exports.profile = async(username = IG_username) => {

    try {
        const response = await axios.get(getIGUrl(username));

        let data = response.data.graphql.user.edge_owner_to_timeline_media.edges;

        console.log(data[0]);
        return data;
    } catch (error) {
        console.error('IG_profile_media', error);
        return error;
    }

}

/**
 * Scrape instagram post comments.
 * @since      1.0.3
 * @access     public
 *
 * @param {string} post_id      Instagram post id.
 */
module.exports.comments = async(post_id = IG_POST_ID) => {

    try {
        const response = await axios.get(getPOSTUrl(post_id));

        let data = response.data.graphql.shortcode_media.edge_media_to_parent_comment.edges;

        console.log(data)

        return data;
    } catch (error) {
        console.error('IG_post_comments', error);
        return error;
    }

}

// module.exports.comments('B-oJxU9g0ST');