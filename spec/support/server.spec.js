var request = require('request');

describe('calc', () => {
    it('Mul 2 * 2',  () => {
        expect(2*2).toBe(4);
    })
})

describe('get commands', () => {
    it("should return 200 ok",  (done) =>{
        request.get('http://localhost:3000/commands', (err, res) => {
           // console.log(res);
            expect(res.statusCode).toEqual(200)
            done();
        })
    })

    it("should return a list, that not empty",  (done) =>{
        request.get('http://localhost:3000/commands', (err, res) => {
           // console.log(res);
            expect(JSON.parse(res.body).length).toBeGreaterThan(0);
            done();
        })
    })
})


