const request =  require('supertest');
const sinon = require('sinon');
const { expect } = require('chai')

const app = require('../../app');

describe('Transfer Controller', () => {
    describe('POST/transfer', () => {
        it('Quando uso dados válidos o retorno será 201', async () => {
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "ana",
                    to: "luisa",
                    amount: 100
                });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');
        });
    });
});