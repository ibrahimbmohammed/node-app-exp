const { update } = require('./knex');
const knex = require('./knex');

module.exports = {
    getAll(query){
   const knexQuery =  knex('products')
    if(query.title){
        knexQuery.where('title',query.title)
    }
   
    return knexQuery
    }, 

    getOne(id){
        return knex('products').where("id", id).first()   },
    create(product){
        return knex('products').insert(product ,'*')
    },
    update(id,product){
      return knex('products').where('id',id).update(product)
    },
    delete(id){
        return knex('products').where('id',id).del()
    }
}