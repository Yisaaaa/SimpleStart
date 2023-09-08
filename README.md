# Simple Start

### A simple yet customizable start page.

## Usage

1. Fork this repository

2. Enable the GitHub Pages `Settings → GitHub Pages → Source [master branch] → Save`

3. Set it as your browser's homepage by:

4. Going to settings

5. Search homepage

6. Set it to custom url

7. Copy and paste your Github Pages link

## Setting up weather

To be able to use [openweathermap](https://openweathermap.org/)'s api, you need to do the following:

1. Create an account in [openweathermap](https://openweathermap.org/).
2. Click your username
3. Then click My API keys
4. Copy your api key and paste it on `apiKey` on `config.js`.

You also need to get your coordinates (latitude and longitude) from [here](https://www.latlong.net/).

1. Put in the city where you live
2. Copy the latitude and longitude and paste it on `config.js`'s `latitude` and `longitude` field respectively

## Customization

### Name and Greetings

To change the name, time format and greetings, head over to `config.js` and edit the configs.

```js
// General
name: "Ryan",
twentyFourHourFormat: false,

// Greetings
greetingMorning: "Good morning, ",
greetingAfternoon: "Good afternoon, ",
greetingNight: "Good evening, ",
greetingSleep: "Go to sleep, ",
```

### Links

You can also change the default links on your `config.js` file.

```js
// Links
		// e.g. first column -> firstColumnContainer
    <order>ColumnContainer: {
        title: "Media",
        contents: [
            {
                name: "Youtube",
                url: "https://www.youtube.com/",
            },
            {
                name: "Spotify",
                url: "http://open.spotify.com/",
            },
            {
                name: "YoutubeMusic",
                url: "https://music.youtube.com/",
            },
            {
                name: "Netflix",
                url: "https://www.netflix.com/",
            },
        ],
    },
```

### Colors

In the `style.css` file, you can change the colors to your liking.

```js
:root {
    --background-color: #e83939; // Color of the background, imperial red by default
    --font-color: #343a40; // default font color
    --font-color-hover: #212529; // default font color on hover state
    --container-color: #fdf1f1; // color of links box or column
    --links-title-color: #ee3b4a; // font color of links box title
}
```
