
exports.up = function(knex) {
  return knex.schema.createTable(`cats`,(table)=>{
    table.increments(`id`);
    table.string(`name`);
    table.string(`breed`);
    table.string(`coat_color`);
    table.string(`favorite_treat`);
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(`cats`)
};
