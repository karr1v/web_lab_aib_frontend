# Лабораторная работа №1 
В лабораторной работе используются следующие ключи:
```
`-I` - Получать только HTTP заголовок, а все содержимое страницы игнорировать.  
`-s` - указывает на "тихий" (silent) режим выполнения, при котором CURL не выводит на экран информацию о ходе выполнения запроса.  
`-v` - Этот ключ делает подробный вывод информации о запросе.  
`-L` - Принимать и обрабатывать перенаправления.
`-k` - Отключает проверку SSL-сертификата.
`-User-agent "Yandex"` -  Указание серверу, какое программное обеспечение или устройство отправляет запрос, в этом случае "Yandex".  
```
## __[🎓 РГУПС](https://www.rgups.ru)__
- Скрипт: `curl rgups.ru -I -k -L -s -v`

```shell
* Connected to rgups.ru (80.72.224.90) port 80 # IP адрес веб сервера, порт к которому вы обращаетесь
> HEAD / HTTP/1.1 #протокол по которому осуществлялся запрос
> Host: rgups.ru #истинное значение хоста ресурса
> User-Agent: curl/8.2.1 #характеристики, по которым сервера и сетевые узлы могут определить тип приложения, операционную систему, производителя и/или версию пользовательского агента.
> Accept: */* #указывает, какие типы контента, выраженные как MIME типы, клиент может понять (*/* - Любой MIME type)
>
< HTTP/1.1 301 Moved Permanently #код ответа и его значение
< Server: nginx/1.19.1
< Date: Sun, 17 Sep 2023 10:14:15 GMT
< Content-Type: text/html #данные о формате данных которые содержатся в теле ответа
< Content-Length: 169 #размер отправленного получателю тела объекта в байтах
< Connection: keep-alive #определяет, остаётся ли сетевое соединение активным после завершения текущей транзакции. (keep-alive соединение остаётся и не завершается)
< Location: https://rgups.ru/  #URL-адрес, на который нужно перенаправить страницу
<
< HTTP/1.1 200 OK
< Server: nginx/1.19.1
< Date: Sun, 17 Sep 2023 10:14:15 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Powered-By: ProcessWire CMS
< Set-Cookie: wire=43657b9be71ca31b7de1f8a58851c7f8; path=/; HttpOnly; SameSite=Lax
< Expires: Thu, 19 Nov 1981 08:52:00 GMT
< Cache-Control: no-store, no-cache, must-revalidate
< Pragma: no-cache
<
```
- Ip: `80.72.224.90`
- Port: `80`
- Host: `rgups.ru`
- Cache-Control: `no-store, no-cache, must-revalidate`
- Content-Type: `text/html`
- Response code: `301 Moved Permanently`
- Protocol: `HTTP/1.1`

💃💃💃💃💃 пляшем дальше ->

## __[🐈Github](https://github.com/)__
- Скрипт:  `curl github.com -I -k -L -s -v `
```shell
* Connected to github.com (140.82.121.3) port 80
< HTTP/1.1 200 OK
< Server: GitHub.com
< Date: Sun, 17 Sep 2023 10:25:52 GMT
< Content-Type: text/html; charset=utf-8
< Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With
< content-language: en-US
< ETag: W/"106a205970b4b65a327d6bc5f44feb9d"
< Cache-Control: max-age=0, private, must-revalidate
< Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
< X-Frame-Options: deny
< X-Content-Type-Options: nosniff
< X-XSS-Protection: 0
< Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
< Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/; connect-src 'self' uploads.github.com www.githubstatus.com collector.github.com raw.githubusercontent.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.com logx.optimizely.com/v1/events objects-origin.githubusercontent.com *.actions.githubusercontent.com productionresultssa0.blob.core.windows.net/ productionresultssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ productionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/ productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.windows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.core.windows.net/ productionresultssa9.blob.core.windows.net/ wss://*.actions.githubusercontent.com github-production-repository-image-32fea6.s3.amazonaws.com github-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://alive.github.com github.githubassets.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com objects-origin.githubusercontent.com; frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.githubusercontent.com support.github.com; img-src 'self' data: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubusercontent.com secured-user-images.githubusercontent.com/ user-images.githubusercontent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com github-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.com spotlights-feed.github.com objects-origin.githubusercontent.com *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubusercontent.com github.githubassets.com; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/
< Set-Cookie: _gh_sess=xT4%2BDKvCwcqQpUsKFPQMSqQ1FBccYAApEXvWFbHD92gMa8R2QYV5pkAkmLvzqs2b8Fbr%2Fh5dNzO3JR2gD2WlkRRXqaIS6PivlPVh1QPmmiV6HRihUYFTOw8K3Kbusfrtio3BMWNn%2Fm7rqEWE2SFNUnf1aEb3fVG4D2ab5RkuKK1FboldeZCFHYinAZoyPrZ1K04%2FEESCF%2BKHZ7W8OJyQk3LVaiiGzWJFGbqsPUhd%2BoVcLPgO86Z8nhh9nIx7IX%2BOi1%2F0ZP52C2aqrpCxWmVY%2Bg%3D%3D--fIwX8XAo2WC7Fjim--nVzquz9b4FLY8hEzC9mK5g%3D%3D; Path=/; HttpOnly; Secure; SameSite=Lax
< Set-CookiHTTP/1.1 301 Moved Permanently
Content-Length: 0
Location: https://github.com/

```
- Ip: `140.82.121.3`
- Port: `80`
- Host: `github.com`
- Cache-Control: `max-age=0, private, must-revalidate`
- Content-Type: `text/html`
- Response code: `200 OK`
- Protocol: `HTTP/1.1`

💃💃💃💃💃 ->

## __[🚝 РЖД](https://www.rzd.ru/)__
- Скрипт: `curl rzd.ru -I -k -L -s -v --User-agent "Yandex"`

```shell
* Connected to www.rzd.ru (212.164.138.130) port 443
> HEAD / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
< Content-Length: 209317
< Connection: keep-alive
< Date: Sun, 17 Sep 2023 10:29:28 GMT
< Vary: Accept-Encoding
< X-UCM-Pod-Name: inex-ucm-776d97f9d-p87lc
< Strict-Transport-Security: max-age=15724800; includeSubDomains
< Via: nginx2
< X-Frame-Options: sameorigin
< Set-Cookie: session-cookie=1785a8ec53e50835bdcca0c118991a24f5b69c80b35752d451553e9b9d91271c7350850b2b6dd289ff7b1171eaa572cd; Max-Age=86400; Path=/; secure; HttpOnly
< X-XSS-Protection: 1; mode=block

```
- Ip: `212.164.138.130`
- Port: `443`
- Host: `rzd.ru`
- Cache-Control: `?`
- Content-Type: `text/html`
- Response code: `200`
- Protocol: `HTTP/1.1`

💃💃💃💃💃


## __[🦐 Яндекс](https://yandex.ru/)__
- Скрипт: `curl yandex.ru -I -k -L -s -v`
```shell
* Connected to yandex.ru (213.180.193.56) port 80
> HEAD / HTTP/1.1
> Host: yandex.ru
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 302 Moved temporarily
< Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version, Viewport-Width, DPR, Device-Memory, RTT, Downlink, ECT
< Cache-Control: max-age=1209600,private
< Date: Sun, 17 Sep 2023 10:36:59 GMT
< Location: https://dzen.ru/?yredirect=true
< NEL: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1}
< P3P: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
< Portal: Home
< Report-To: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]}
< X-Content-Type-Options: nosniff
< X-Robots-Tag: unavailable_after: 12 Sep 2022 00:00:00 PST
< X-Yandex-Req-Id: 1694947019874287-15148931531745759091-balancer-l7leveler-kubr-yp-vla-65-BAL-1770
< set-cookie: is_gdpr=0; Path=/; Domain=.yandex.ru; Expires=Tue, 16 Sep 2025 10:36:59 GMT
< set-cookie: is_gdpr_b=COj6IhD1zgEoAg==; Path=/; Domain=.yandex.ru; Expires=Tue, 16 Sep 2025 10:36:59 GMT
< set-cookie: _yasc=2UCucz860icj1xOTOT85PFJVDBdtuhISnhi4S3x1yAU0oI0+6XeIyjb2YniLkpuMiG4I; domain=.yandex.ru; path=/; expires=Wed, 14 Sep 2033 10:36:59 GMT; secure
<
> HEAD /?yredirect=true HTTP/1.1
> Host: dzen.ru
> User-Agent: curl/8.2.1
> Accept: */*
>
```
- Ip: `213.180.193.56`
- Port: `80`
- Host: `yandex.ru`
- Cache-Control: `max-age=1209600,private`
- Content-Type: `text/html`
- Response code: `302`
- Protocol: `HTTP/1.1`

💃💃💃💃💃

## __[🐍 Python](https://www.python.org/)__
- Скрипт: `curl python.org -I -v -L -k -s`
```shell

* Connected to www.python.org (146.75.120.223) port 443
> HEAD / HTTP/1.1
> Host: www.python.org
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Connection: keep-alive
< Content-Length: 50297
< Server: nginx
< Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< Accept-Ranges: bytes
< Date: Sun, 17 Sep 2023 10:44:05 GMT
< Age: 1732
< X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-etou8220039-FRA
< X-Cache: HIT, HIT
< X-Cache-Hits: 303, 5
< X-Timer: S1694947445.097518,VS0,VE0
< Vary: Cookie
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
<
```
- Ip: `146.75.120.223`
- Port: ` 443`
- Host: `www.python.org`
- Cache-Control: `?`
- Content-Type: `text/html; charset=utf-8`
- Response code: `200 OK`
- Protocol: `HTTP/1.1`

💃💃💃💃💃

## __[Saint 🌠 GIT](https://git-scm.com/)__
- Скрипт: `curl git-scm.com -I -v -L -k -s`
```shell
 Connected to git-scm.com (188.114.98.224) port 443
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Sun, 17 Sep 2023 10:52:24 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Frame-Options: SAMEORIGIN
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Download-Options: noopen
< X-Permitted-Cross-Domain-Policies: none
< Referrer-Policy: strict-origin-when-cross-origin
< Cache-Control: public, max-age=14400
< Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
< X-Request-Id: 5b655b2f-128f-4205-940e-13860b4aaf19
< X-Runtime: 0.008824
< Via: 1.1 vegur
< CF-Cache-Status: HIT
< Age: 1650
< Server: cloudflare
< CF-RAY: 8080ccabac974c79-HEL
```
- Ip: `188.114.99.224`
- Port: `443`
- Host: `git-scm.com`
- Cache-Control: `public, max-age=14400`
- Content-Type: `text/html; charset=utf-8`
- Response code: `200 OK`
- Protocol: `HTTP/1.1`

💃💃💃💃💃

## __[🐵 Jetbrains](https://www.jetbrains.com/)__
- Скрипт: `curl jetbrains.com -I -v -L -k -s`

```shell
* Connected to www.jetbrains.com (108.157.229.51) port 443
> HEAD / HTTP/1.1
> Host: www.jetbrains.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Content-Length: 47213
< Connection: keep-alive
< Date: Sun, 17 Sep 2023 10:52:30 GMT
< Server: nginx
< X-Content-Type-Options: nosniff
< Referrer-Policy: same-origin
< Expires: Sun, 17 Sep 2023 10:52:30 GMT
< Cache-Control: max-age=0
< Pragma: no-cache
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
< Strict-Transport-Security: max-age=31536000;
< Vary: Accept-Encoding
< Via: 1.1 41ce182e8f343263845579fafd1af6b8.cloudfront.net (CloudFront)
< Alt-Svc: h3=":443"; ma=86400
< Age: 223
< Set-Cookie: cf_country-region=RU-ROS; Domain=jetbrains.com; Path=/; Secure
< X-Cache: Hit from cloudfront
< X-Amz-Cf-Pop: ARN56-P2
< X-Amz-Cf-Id: 9ruYFje8hqPvwFGS1dxtCKRFADCO0S-nCDwPvUWemR5JQdszZKwAbQ==
<
```
- Ip: `108.157.229.51`
- Port: `443`
- Host: `www.jetbrains.com`
- Cache-Control: `max-age=0`
- Content-Type: `text/html; charset=utf-8`
- Response code: `200 OK`
- Protocol: `HTTP/1.1`

💃💃💃💃💃
## __[💪 VSC - this is best choose](https://code.visualstudio.com/)__
- Скрипт: `curl code.visualstudio.com -I -v -L -k -s`

```shell
* Connected to code.visualstudio.com (13.107.246.45) port 443
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Sun, 17 Sep 2023 11:01:30 GMT
< Content-Type: text/html; charset=utf-8
< Content-Length: 50213
< Connection: keep-alive
< ETag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"
< Strict-Transport-Security: max-age=31536000; includeSubDomains
< Content-Security-Policy: frame-ancestors 'self'
< X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Content-Type-Options: nosniff
< X-Powered-By: ASP.NET
< x-azure-ref: 20230917T110130Z-u68z1tf6u904v0nt3xk19aazhn00000005tg000000003p05
< X-Cache: CONFIG_NOCACHE
< Accept-Ranges: bytes
<
```
- Ip: `13.107.246.45`
- Port: `443`
- Host: `code.visualstudio.com`
- Cache-Control: `?`
- Content-Type: `text/html; charset=utf-8`
- Response code: `200 OK`
- Protocol: `HTTP/1.1`
----
## Готово!
![](https://i.pinimg.com/564x/f3/3a/b6/f33ab6078d8a72c1b2ce6db1e07ff2e0.jpg)

