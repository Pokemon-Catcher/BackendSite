module.exports = function (server, db) {

    const query = async (queryText) => {
        const { result } = await pool.query(queryText)
        console.log(result)
    }

    const registration = (email, password, name, lastname) => {
        let queryText =
            `INSERT INTO users (email, password, name, lastname) 
            VALUES ('${email}','${password}','${name}','${lastname}'`;
        return query(queryText);
    }

    const login = (email, password) => {
        let queryText =
            `SELECT EXISTS(SELECT email, password
            FROM users WHERE email='${email}, password='${password}')`;
        return query(queryText);
    }

    const exist = (email, password) => {
        let queryText =
            `SELECT EXISTS(SELECT email, password
            FROM users WHERE email='${email}, password='${password}')`;
        return query(queryText);
    }

    server.post('/signin', (req, res) => {
        let body = req.body;
        if (req.body.email && req.body.password) { 
        res.send(login(req.body.email, req.body.password));
        }
        else res.send('you didn\'t signed in')
    });

    server.post('/signup', (req, res) => {
        let body = req.body;
        if (req.body.email && req.body.password && req.body.name && req.body.lastname) {
            console.log(body);
            res.send(registration(req.body.email, req.body.password, req.body.name, req.body.lastname).res);
        }
        else res.send('you didn\'t signed up')
    });

    server.get('/', (req, res) => {
        res.redirect('/index.html');
    })
};