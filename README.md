# Unsplash Wallpaper Downloader

This script will download random images from unsplash.com 
and store them in a local folder, so that they can be displayed as wallpapers.


![Select the wallpaper folder in System Preferences - Desktop and Screen Saver](./doc/osx-display-settings.png "System Preferences - Desktop and Screen Saver")
 
 
## Setup
 
    npm install

### There's a manual part!
Now, you need to provide your Unsplash API credentials. 
Yea, that's a hassle but since you already have uncountably many accounts
at innumerable web services, one more won't hurt.
 
1. Go to [Unsplash](https://unsplash.com/developers) and register for a developer account
2. Create an application [here](https://unsplash.com/oauth/applications) (ignore the callbackUrl)
3. Edit `config/unsplash.js` and enter your `Application ID` and `secret`.

  

## Run

    npm start

This will download 15 random images to the `images/wallpaper` folder.


## Next steps

1. Setup your desktop to randomly display images in a folder as wallpapers. If your computer can't do this, buy a Mac.
2. Configure a cron job to move old images to `images/archive` and execute the script every X minutes. (The API key will allow 50 executions per hour)