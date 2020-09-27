# DOCS
Video 3h26
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
npm install -D @graphql-codegen/cli

npx graphql-codegen init
1: What type of application are you building? Application built with React
2: Where is your schema?: (path or url) http://localhost:4000/graphql
3: Where are your operations and fragments?: src/graphql/**/*.graphql
3: Pick plugins: TypeScript (required by other typescript plugins), TypeScript Operations (operations and fragments), TypeScript React Apollo (typed componen
ts and HOCs) SKIP apollo if using urql !
4: Where to write the output: src/generated/graphql.tsx
5: Do you want to generate an introspection file? No
6: How to name the config file? codegen.yml
7: What script in package.json should run the codegen? gen

Info: If we want urql instead of apollo we can edit yaml file(optional):
- For urql we need to edit codegen.yml and change `"typescript-react-apollo"` to `"typescript-urql"`
- also remove `"@graphql-codegen/typescript-react-apollo": "1.17.8"` from package.json and use urql `npm install -D @graphql-codegen/typescript-urql` instead

Info: For syntax highlighting graphql in .graphql files use `GraphQL for VSCode` vscode-extension

npm install @urql/exchange-graphcache

### Version without @graphql-codegen/typescript-urql:

tsx
```
import React, { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { CombinedError, useMutation } from 'urql';
import * as styles from '../page-styles/styles';
import { toErrorMap } from '../utils/toErrorMap';

type FormValues = {
  username: string;
  password: string;
};

type ResponseObject = {
  data?: {
    register: {
      errors?: [
        {
          field: string;
          message: string;
        },
      ];
      user?: {
        id: number;
        username: string;
        updatedAt: string;
        createdAt: string;
      };
    };
  };
  error?: CombinedError;
};

const REGISTER_MUT = `
mutation Register($username: String !, $password: String! ) {
  register (options: {username: $username, password: $password }){
    errors{
      field
      message
    } 
    user {
      id
      username
      createdAt
      updatedAt
    }
  }
}
`;

const Register: FC = (): ReactElement => {
  const [, registerMut] = useMutation(REGISTER_MUT); // without code-generated customHook
  const { register, handleSubmit, formState, setError, errors } = useForm<FormValues>();
  const { isSubmitting } = formState;

  const onSubmit = async (data: FormValues) => {
    const response: ResponseObject = await registerMut(data);

    // if no connection
    if (!response) console.log('Promise unresolved, check connection');
    if (response.error) console.log('Error occured in onSubmit:', response.error);

    // set error message on form inputField
    if (response.data?.register.errors) {
      console.log(toErrorMap(response.data.register.errors));
      const errorObj = toErrorMap(response.data.register.errors);
      if ('username' in errorObj) setError('username', { message: errorObj.username });
      if ('password' in errorObj) setError('password', { message: errorObj.password });
    }

    // successfull registered
    if (response && !response.error && !response.data?.register.errors && response.data)
      console.log('Successfull registered:', response.data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <img
          className={styles.headerLogo}
          src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
          alt="Workflow"
        />
        <h2 className={styles.headerTitle}>Sign in to your account</h2>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className={styles.usernameLabel}>
              Username
            </label>
            <div className={styles.usernameInputContainer}>
              <input name="username" ref={register({ required: true })} className={styles.usernameInputField} />
              {errors.username && <div className="text-red-500 font-bold text-sm">{errors.username.message}</div>}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="password" className={styles.passwordLabel}>
              Password
            </label>
            <div className={styles.passwordInputContainer}>
              <input name="password" ref={register({ required: true })} className={styles.passwordInputField} />
              {errors.password && <div className="text-red-500 font-bold text-sm">{errors.password.message}</div>}
            </div>
          </div>

          <div className="mt-6">
            {isSubmitting ? (
              <button type="submit" disabled={isSubmitting} className={styles.submitButton(isSubmitting)}>
                Sign in
              </button>
            ) : (
              <button type="submit" className={styles.submitButton(isSubmitting)}>
                Sign in
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

```








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
