
exports.up = function(knex) {
    return knex.schema.createTable('products',(table)=>{
        table.increments();
        table.string('title');
        table.text('img');
        table.float('price');
        table.text('info');
        table.boolean('inCart');
        table.float('count');
        table.float('total');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('products');
  };
  