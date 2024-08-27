### ビルド
```
docker build -t next-schedule-app .
```
⚫︎補足
- -t next-schedule-app: -tオプションは、Dockerイメージにタグを付けるために使用。ここではnext-schedule-appという名前のタグが付け。イメージにわかりやすい名前を付けることができる。

- . ドットは、Dockerfileが存在するディレクトリを指定し、現在のディレクトリ（.）がビルドコンテキストとして指定。Dockerはこのディレクトリ内のDockerfileを探し、その内容に基づいてイメージを作成。

### Docker Composeを使用
```
docker compose up -d
```

###  Dockerコンテナの実行
```
docker run -p 3000:3000 next-schedule-app
```

### コンテナを止める
```
docker compose down 
```
