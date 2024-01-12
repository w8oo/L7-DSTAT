# L7-DSTAT

L7 DSTAT that count http requests

# Setup

```
git clone https://github.com/w8oo/L7-DSTAT.git

cd L7-DSTAT
```

```
npm init -y
npm install express
```

# config

you can edit the dstat port in index.js (Default port is 8082)

```
const PORT = process.env.PORT || <PORT>;
```

# Alternative

[layer7-dstat](https://github.com/filippofinke/layer7-dstat)

[Go-dstat](https://github.com/filippofinke/go-dstat)
