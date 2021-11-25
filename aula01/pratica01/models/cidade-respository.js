const knex = require('../database');

module.exports = {
    
    find: () => {
        //select * from cidade
        return knex.select('c.*', 'e.name as estado_name').from('cidade as c').innerJoin('estado as e', 'e.id', 'c.estado_id');
    },

    findById: (params) => {
        //select * from cidade where id = params.id
        return knex.select('c.*', 'e.name as estado_name').from('cidade as c').innerJoin('estado as e', 'e.id', 'c.estado_id').where('c.id', params.id);
    }, 

    create: (params) => {
        //insert into cidade(name, description, price, likes, estado_id) values (params.name, params.description, params.price, params.likes, price.estado_id)
        return knex.insert(params).into('cidade');
    },

    update: (params) => {
        
        return knex('cidade').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('cidade').del().where('id', params.id);
    }
}