Web Service Prototyping Tool
=============

このパッケージは、html,css,javascriptのみでサクッとウェブサービスのプロトタイプを作るためのツールです。
index.htmlの１ページのみでページ遷移が表現できるため、ヘッダーやフッター等の共通部分を何度も書く必要はありません。

0. このパッケージの中には、index.html,js,css,fonts が入っています。
0. javascriptは基本的にjqueryで書くことを想定しています。
0. cssはyuiのcssresetを使用しています。
0. アイコン用にfont-awesomeを入れてあります。
0. header等の共通部分を何度も書かなくて済むように、index.htmlのみでページ遷移が表現できるようになっています。

以下が簡単な利用方法になります。

利用方法
-------

最低限すぎる簡単な仕様ですが、下記のようにdivタグとaタグをを設定することでページ遷移を表現することが出来ます。
ページは基本的に`<div id="page-***"></div>`と記入してください。

* ページは`<div id="page-***"></div>` で表現可能です。
* トップページのみ`<div id="page-first"></div>` と初期設定で決まっています。
* リンクの設定は`<a id="page-***"></a>` で指定したページヘジャンプすることができます。

インストール方法
-----------

* zipでダウンロードするか、wget等で適宜ご利用ください。

デモ
-----

こちら [demo](http://shunsuketakahashi.me/web_proto) よりご確認頂けます。


その他
------------

ご連絡は適宜[twitter](http://twitter.com/shuntaka)または,[facebook](http://facebook.com/shunsuke.takahashi2)までお願いします。

