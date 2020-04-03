# All At Home (Aah!)

In Italy, during the covid lockdown, a common problem is to find food shops offering delivery service or pick-up points. Supermarkets and big operators are often stuck. Small local shops are working, but some of them are struggling for the increased demand.

The goal of this project is to make easier for people to find and buy from local places that offer home delivery and/or pick-up points. In this way queues and, as a consequence, human contacts can be more easily avoided.

This project has also a broader view. In these days, we learned that work from home and local shopping are possible. We would like to built a solid platform to allow people to buy local even after the epidemic is over.

## How can I help?

* Code and design
* Write technical documentation
* Share
* Suggest ideas
* Find a better name for the project

## Design principles

From a JSON file with a list of companies, we can generate a fully static webapp.

A static webapp is better than a dynamic one in an emergency context for the following reasons:

* More performant, pages are pre-rendered at compile time.
* More resilient, you do not need a complex infrastructure to run it
* It works offline, can be downloaded and does not require an Internet connection
* You are not tracked

## Getting started

Prerequirements: `nodejs` and `yarn`.

Copy a file `companies.json` with your companies in `mocks` folder. Companies should have the same format as in the example file.

Install `nodejs` dependencies.

```
yarn
```

Export the app.

```
$ yarn export
```

In `out` you can find the generated html. You can deploy it on github pages, on another hosting service or on your computer.

```
$ serve out
```

## Locale and i18n

Currently, we have only one i18n file for Italian. However, the app can be customised for your country and language.

* Put a json describing i18n labels in `src/locale`.
* Setup your locale and i18n labels In `src/pages/_app.tsx` 

## Adding dynamical behaviors (WIP)

The basic app is static, but we are working on more dynamic services.

If you set `showAddCompanyForm` to true in `next.config.js`, a button for adding new companies will appear in the toolbar.
When you click on it, a form for adding a new company appears. Form validation logic works, but the actual logic for adding a company is missing.

You need to provide this logic. E.g. http call to some REST APIs.

## Can I use your code in my country/town/neighborhood?

Yes! License is aGPL.

## Similar projects

* https://www.covid19italia.help/
* https://www.filaindiana.it/ 
* https://vicinoesicuro.it/

## References

* Where it started: [discussion on Covid19Italia](
https://github.com/emergenzeHack/covid19italia/issues/269) 🇮🇹
* [This thread](https://edgeryders.eu/t/what-did-we-discuss-during-the-covid19-community-response-call-1-what-will-we-do-next/12945) on Edgeryders


## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!


