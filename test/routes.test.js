const request = require('supertest')
const app = require('../src/server')

describe('Get Endpoints', () => {
    it('should create a new get', async () => {
        const res = await request(app)
            .get('/Usuario');
        expect(res.statusCode).toEqual(200);
    })
})