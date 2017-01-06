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

## Renewing SSL certificate

We use [letsencrypt](https://letsencrypt.org/) in order to verify our certificate.

```
brew install certbot
certbot certonly --manual --force-renewal --config-dir ./letsencrypt --logs-dir . --work-dir . -d muxumuxu.com
```

1. Answer `Yes` when prompted that your IP will be saved.
2. Next, `certbot` will ask you to make a file available at `http://muxumuxu.com/.well-known/acme-challenge/{prompted}` before continuing.
Put this file under `source/.well-known/acme-challenge` of this folder.
3. After that, you will have to concat generated `cert.pem` and `privkey.pem`, enter commands below to acheive that.

```
cd letsencrypt/live/muxumuxu.com
cat cert.pem privkey.pem > surge.pem
surge ssl --domain muxumuxu.com --pem surge.pem
```
