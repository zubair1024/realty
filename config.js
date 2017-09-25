module.exports = {
    dbUrl: "mongodb://razrlab:gameofthrones@ds161022.mlab.com:61022/realty",
    listener: {
        ip: function () {
            // return '10.0.1.99'
        },
        //ports
        ports: {
            web: 80
        },
        //load balancer
        loadbalancer: {
            sourcePort: 6101,
            targets: [
                {
                    host: "127.0.0.1",
                    port: 80
                }
            ]
        }
    },
    distribution: {
        web: {
            ip: '127.0.0.1',
            port: 4100
        }
    }
};
