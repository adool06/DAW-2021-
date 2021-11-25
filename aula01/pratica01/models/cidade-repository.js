const knex = require('../database');

module.exports = {
    
    find: () => {
        
        return knex.select('c.*', 'e.nome as estado_nome').from('cidade as c').innerJoin('estado as e', 'e.id', 'c.estado_id');
    },

    findById: (params) => {
   
        return knex.select('c.*', 'e.nome as estado_nome').from('cidade as c').innerJoin('estado as e', 'e.id', 'c.estado_id').where('c.id', params.id);
    }, 

    create: (params) => {
        
        return knex.insert(params).into('cidade');
    },

    update: (params) => {
        
        return knex('cidade').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('cidade').del().where('id', params.id);
    }
}