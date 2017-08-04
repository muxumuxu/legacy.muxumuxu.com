# Muxu.Muxu

## Development

```
bundle install
bundle exec middleman
open http://localhost:4567
```

## Deployment on Surge

```
./deploy.sh
```

## SSL Deployment

[Here](https://guillaumemaka.com/2015/05/06/install-your-comodo-certificates-to-amazon-aws.html) A very useful resource

```
cd ssls/comodo/pem
surge ssl --pem ./CAChain.pem --domain https://muxumuxu.com
```
