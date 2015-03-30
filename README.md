Web Service Prototyping Tool
=============

このパッケージは、html,css,javascriptのみでサクッとウェブサービスのプロトタイプを作るためのツールです。
index.htmlの１ページのみでページ遷移が表現できるため、ヘッダーやフッター等の共通部分を何度も書く必要はありません。

0.このパッケージの中には、index.html,js,css,fonts が入っています。
0.javascriptは基本的にjqueryで書くことを想定しています。
0.cssはyuiのcssresetを使用しています。
0.アイコン用にfont-awesomeを入れてあります。
0.header等の共通部分を何度も書かなくて済むように、index.htmlのみでページ遷移が表現できるようになっています。

以下が簡単な利用方法になります。

利用方法
-------

The following markups are supported.  The dependencies listed are required if
you wish to run the library. You can also run `script/bootstrap` to fetch them all.
最低限すぎる簡単な仕様ですが、下記のようにdivタグとaタグをを設定することでページ遷移を表現することが出来ます。
ページは基本的に<div id="page-***"></div>と記入してください。

* [.markdown, .mdown, .mkdn, .md](http://daringfireball.net/projects/markdown/) -- `gem install redcarpet` (https://github.com/vmg/redcarpet)
* [.textile](http://www.textism.com/tools/textile/) -- `gem install RedCloth`
* [.rdoc](http://rdoc.sourceforge.net/) -- `gem install rdoc -v 3.6.1`
* [.org](http://orgmode.org/) -- `gem install org-ruby`
* [.creole](http://wikicreole.org/) -- `gem install creole`
* [.mediawiki, .wiki](http://www.mediawiki.org/wiki/Help:Formatting) -- `gem install wikicloth`
* [.rst](http://docutils.sourceforge.net/rst.html) -- `easy_install docutils`
* [.asciidoc, .adoc, .asc](http://asciidoc.org/) -- `gem install asciidoctor` (http://asciidoctor.org)
* [.pod](http://search.cpan.org/dist/perl/pod/perlpod.pod) -- `Pod::Simple::HTML`
  comes with Perl >= 5.10. Lower versions should install [Pod::Simple](http://search.cpan.org/~dwheeler/Pod-Simple-3.28/lib/Pod/Simple.pod) from CPAN.

インストール方法
-----------

	zipでダウンロードするか、wget等で適宜ご利用ください。

デモ
-----

	こちら[demo](http://shunsuketakahashi.me/web_proto) よりご確認頂けます。


その他
------------

	ご連絡は適宜twitter(@shuntaka)または,facebook(shunsuke.takahashi2)までお願いします。

