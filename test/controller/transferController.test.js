const request =  require('supertest');
const sinon = require('sinon');
const { expect } = require('chai')

const app = require('../../app');

//Mock
const transferService = require('../../service/transferService');

//Testes 
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

        it('Usando Mocks: Quando uso dados válidos o retorno será 201', async () => {
            //Mocar apenas a função Transfer do Service

            const transferServiceMock = sinon.stub(transferService, 'transfer');
            transferServiceMock.throws(new Error('Usuário remetente ou destinatário não encontrado'));
            
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "ana",
                    to: "luisa",
                    amount: 100
                });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');

            //Resetando o mock
            sinon.restore();
        });
    });
});