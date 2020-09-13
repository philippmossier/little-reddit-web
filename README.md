# DOCS
Video 2h:45
'https://github.com/vercel/next.js'
'https://nextjs.org/docs'

## shell history

npx create-next-app --example with-tailwindcss little-reddit-web --use-npm
npm install -D stylelint stylelint-config-standard
npm install -D typescript @types/react @types/node
npm install react-hook-form

**update tailwindcss to latest version:**
npm install -D tailwindcss@^1.0
npm install @tailwindcss/ui
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react prettier eslint-config-prettier eslint-plugin-prettier
npm install tailwindcss-classnames (optional)

npm install urql graphql



















## HOW TO USE classnames()

the tailwindcss-classnames package is the same as the original classnames pkg (node_modules/classnames/README.md) but with types onTop

The `classNames` function takes any number of arguments which can be a string or object.
The argument `'foo'` is short for `{ foo: true }`. If the value associated with a given key is falsy, that key won't be included in the output.

```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

Arrays will be recursively flattened as per the rules above:

```js
var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```

```js
let buttonType = 'primary';
classNames({ [`btn-${buttonType}`]: true });
```

### Left border improvements for forms on invalid input

border-width: 1px 1px 1px 10px; border-style: solid; border-color: rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144); border-image: initial

## Tailwind CSS example

This is an example of using [Tailwind CSS](https://tailwindcss.com) in a Next.js project.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example is a basic starting point for using [Tailwind CSS](https://tailwindcss.com) with Next.js. It includes the following [PostCSS](https://github.com/postcss/postcss) plugins:

- [postcss-preset-env](https://preset-env.cssdb.org/) - Adds stage 2+ features and autoprefixes

To control the generated stylesheet's filesize, this example uses Tailwind CSS' [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.
