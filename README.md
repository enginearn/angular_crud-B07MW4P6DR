# CRUD

| CRUD | HTTP |
| :---: | :---: |
|Create|POST|
|Read|GET|
|UPDATE|PUT|
|Delete|DELETE|

## JSON-SERVER

<details>
<summary>Run Server</summary>

``` PowerShell
json-server --watch .\crudAppFetchAPIwithJSDB.json

  \{^_^}/ hi!

  Loading .\crudAppFetchAPIwithJSDB.json
  Done

  Resources
  http://localhost:3000/sites

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
```

</details>

## Angular

## Loopback-cli

<details>
<summary>Install loopback-cli 4</summary>

``` PowerShell
npm i -g @loopback/cli
```

</details>

<details>
<summary>Create project</summary>

``` PowerShell
lb4 app
? プロジェクト名: loopback4_app
? プロジェクトの説明: loopback
? プロジェクト・ルート・ディレクトリー: loopback4_app
? アプリケーション・クラス名: Loopback4AppApplication
? プロジェクトで有効にする機能を選択してください Enable eslint, Enable prettier, Enable mocha, Enable loopbackBuild, Enable vscode, Enable docker, Enable repositories, Enable services
    force loopback4_app\.yo-rc.json
   create loopback4_app\.eslintignore
   create loopback4_app\.eslintrc.js
   create loopback4_app\.mocharc.json
   create loopback4_app\.prettierignore
   create loopback4_app\.prettierrc
   create loopback4_app\DEVELOPING.md
   create loopback4_app\package.json
   create loopback4_app\tsconfig.json
   create loopback4_app\.vscode\launch.json
   create loopback4_app\.vscode\settings.json
   create loopback4_app\.vscode\tasks.json
   create loopback4_app\.gitignore
   create loopback4_app\.dockerignore
   create loopback4_app\Dockerfile
   create loopback4_app\README.md
   create loopback4_app\public\index.html
   create loopback4_app\src\application.ts
   create loopback4_app\src\index.ts
   create loopback4_app\src\migrate.ts
   create loopback4_app\src\openapi-spec.ts
   create loopback4_app\src\sequence.ts
   create loopback4_app\src\controllers\index.ts
   create loopback4_app\src\controllers\ping.controller.ts
   create loopback4_app\src\controllers\README.md
   create loopback4_app\src\datasources\README.md
   create loopback4_app\src\models\README.md
   create loopback4_app\src\repositories\README.md
   create loopback4_app\src\__tests__\README.md
   create loopback4_app\src\__tests__\acceptance\home-page.acceptance.ts
   create loopback4_app\src\__tests__\acceptance\ping.controller.acceptance.ts
   create loopback4_app\src\__tests__\acceptance\test-helper.ts

No change to package.json was detected. No package manager install will be executed.
npm WARN config cache-min This option has been deprecated in favor of `--prefer-offline`.
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility

added 568 packages, and audited 569 packages in 43s

78 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

アプリケーション loopback4_app は loopback4_app に作成されました。

次のステップ:

$ cd loopback4_app
$ npm start
```

</details>

<details>
<summary>npm start</summary>

``` PowerShell
npm start

> loopback4_app@0.0.1 prestart
> npm run rebuild


> loopback4_app@0.0.1 rebuild
> npm run clean && npm run build


> loopback4_app@0.0.1 clean
> lb-clean dist *.tsbuildinfo .eslintcache


> loopback4_app@0.0.1 build
> lb-tsc


> loopback4_app@0.0.1 start
> node -r source-map-support/register .

Server is running at http://[::1]:3000
Try http://[::1]:3000/ping
```

</details>


## References

<details>
[Web ページの背景を動く星空にした話 (with react-three-fiber)](https://zenn.dev/karno/articles/091f9f23dab30c)

[[JavaScript,Rails]Uncaught TypeError: Cannot read property 'length' of undefined のエラー解決例 - Qiita](https://qiita.com/KONTA2019/items/768348ee0ac5462648bd)

[Uncaught TypeError: Cannot read property ‘’ of undefinedの原因と対処法｜Webエンジニア Wiki](https://web-engineer-wiki.com/javascript/error-property-of-undefined/)

[JavaScript TypeError: Cannot Read Property Length of Undefined | Rollbar](https://rollbar.com/blog/javascript-typeerror-cannot-read-property-length-of-undefined-in-javascript/)

[Fetch API - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API)

[Rustプログラミング言語](https://www.rust-lang.org/ja)

[Angular 日本語ドキュメンテーション - ルーティングを使ったナビゲーションの追加](https://angular.jp/tutorial/toh-pt5)

[Angularのルーティング設定（基礎編） - Qiita](https://qiita.com/Yamamoto0525/items/e870713d9d05d2d36a80)

[AngularのNgModuleを使って、アプリの構成を管理する - Qiita](https://qiita.com/Yamamoto0525/items/c647f03a5ab56883e09e)

[Angular 日本語ドキュメンテーション](https://angular.jp/)

[Angular でコンポーネントを削除する | Delft スタック](https://www.delftstack.com/ja/howto/angular/angular-cli-remove-component/)

[angular — CLIでコンポーネントを削除するための最良の方法は何ですか](https://www.web-dev-qa-db-ja.com/ja/angular/cli%E3%81%A7%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E6%9C%80%E8%89%AF%E3%81%AE%E6%96%B9%E6%B3%95%E3%81%AF%E4%BD%95%E3%81%A7%E3%81%99%E3%81%8B/828556331/)

[angular - error TS2322: Type 'Event' is not assignable to type 'string'. [(ngModel)]="todoItem" (keyup) ="addTodo()" - Stack Overflow](https://stackoverflow.com/questions/66407703/error-ts2322-type-event-is-not-assignable-to-type-string-ngmodel-todo)

[AngularApp](http://localhost:4200/)

[知らないと危険！HTMLのtarget="_blank"でリンクを安全に新しいタブで開く方法 - WEBCAMP MEDIA](https://web-camp.io/magazine/archives/82442)

[TypeScriptに移行して気づいた10の事実](https://i-beam.org/2019/05/30/fact-about-typescript/)

[Installation | LoopBack Documentation](https://loopback.io/doc/en/lb3/Installation.html)

[Getting started | LoopBack Documentation](https://loopback.io/doc/en/lb4/Getting-started.html)

[NestJS vs. LoopBack 4: Which is best? - LogRocket Blog](https://blog.logrocket.com/nestjs-vs-loopback-which-is-best/)


</details>
