### Exchange Rate Calculator

This is a React + Vite web app which will tell you how many source coins you exchange for a target coin.

Right now there are only a few coins supported in the dropdown. To add additional coins update the `constants/exchangeCoins.ts` with the required values. This will add another option to the dropdown and populate the api properly for the price fetch request.

### Development Instrucitons
Clone the repository locally and run the following commands:
```
npm install
npm run dev
```

You will now have the site running locally and can visit `localhost:5173`

### Decisions
I chose to keep things lightweight, only using css and the required libraries to run @funkit/api-base. I wanted to theme things loosely after the fun.xyz site. I kept a dark theme and styled is as something that could fit in the current site.

### Improvements
Right now you can put as large of a values of source coins as you want and it will eventually stretch the exchange result text out of the div and show elipsises. I could improve this experience allowing a max source coin as well logic to turn large prices into a fixed precision number.

I also don't have logic I am happy with for the target coin result, it just shows three decimal places which is an okay precision it could be adjusted or dynamic. The thing I don't like about it is whenever you have a number for example `3` it will show as `3.000`. I would spend some time cleaning up this component next. 
### Links
[Deployed Site](https://fxyz.vercel.app/).