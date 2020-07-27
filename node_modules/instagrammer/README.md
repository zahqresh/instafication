# instagrammer

[![license](https://img.shields.io/github/license/khaledalam/instagrammer.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/instagrammer.svg)](https://www.npmjs.com/package/instagrammer)

<img src="https://www.dpreview.com/files/p/articles/8326097332/icon.png" width="300">

NodeJS module NPM package that helps to scrape and load instagram profile media and useful information.

## Disclamer

Instagram has gone to great lengths to prevent scraping and other unauthorized access to their public content. This module is dependant on the markup the public-facing instagram.com. Should that change this module might also stop working as intended. It also only loads the 12 posts that are displayed on first-load without following pagination to load more images. You should take this into consideration when deciding whether this module will work for you.

## Installation

`npm i instagrammer`

## Usage

note: there are some limitation of loading instagram data, but it still usefull in most cases :)

### Get recent profile posts and media details

```
const IG = require("instagrammer");
const instagramUsername = "AsdamPodcast";

IG.profile(instagramUsername).then((data) => {
    const recentPost = data[0];
    console.log(recentPost);
});
```

Example output response:

```json
{
  "node": {
    "id": "2289200113878789071",
     "shortcode": "B_E31_3h2vP",
     "dimensions": { "height": 746, "width": 480 },
     "display_url":
      "https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/93603649_2611993775714054_5259993384970767717_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=jGCK60y7RwEAX8boRhD&oh=7844ea993f6f6888f5f3ff3fdbdc6fba&oe=5EA6D0E0",
     "gating_info": null,
     "fact_check_overall_rating": null,
     "fact_check_information": null,
     "media_preview":
      "ABsqrbh6j86XI9axYx3NaCK6A44A78Y/z+NAFo8Um4etRShiSoyRgencA1Txj/8AXQBFEhPYke1aDLtTazEKenH8z/8AWqJL4KMY/D/GmfbWkbDgFTxj/PegCfeQGAYkkD8hVINT1fbkDryM9gKqbjQBY8tP8n/61KQuABgY/Mn6/wAh0/Gm0UAAUDp3pNi0tFAH/9k=",
     "owner": { "id": "32593640820", "username": "asdampodcast" },
     "is_video": true,
     "accessibility_caption": null,
     "edge_media_to_caption": { "edges": [Array] },
     "edge_media_to_comment": { "count": 0 },
     "comments_disabled": false,
     "taken_at_timestamp": 1587114237,
     "edge_liked_by": { "count": 0 },
     "edge_media_preview_like": { "count": 0 },
     "location": null,
     "thumbnail_src":
      "https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/c0.133.480.480a/93603649_2611993775714054_5259993384970767717_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=jGCK60y7RwEAX8boRhD&oh=4b4cc5a6edeeef7111fbaa1b18952569&oe=5EA6DFD5",
     "thumbnail_resources": [ [Object], [Object], [Object], [Object], [Object] ],
     "felix_profile_grid_crop": null,
     "video_view_count": 9
  }
}
```

### Get post comments

```
const IG = require("instagrammer");
const post_id = "B-oJxU9g0ST";

IG.comments(post_id).then((data) => {
    const recentPost = data[0];
    console.log(recentPost);
});
```

Example output response:

```json
[ { "node":
     { "id": "18018715516279713",
       "text": "@asdampodcast",
       "created_at": 1587829462,
       "did_report_as_spam": false,
       "owner": [Object],
       "viewer_has_liked": false,
       "edge_liked_by": [Object],
       "is_restricted_pending": false,
       "edge_threaded_comments": [Object] } },
  { "node":
     { "id": "17914398049420103",
       "text": "for git",
       "created_at": 1587829582,
       "did_report_as_spam": false,
       "owner": [Object],
       "viewer_has_liked": false,
       "edge_liked_by": [Object],
       "is_restricted_pending": false,
       "edge_threaded_comments": [Object] } } ]
```
