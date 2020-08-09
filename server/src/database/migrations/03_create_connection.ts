import Knex from 'knex';

export async function up(Knex: Knex) {

    return Knex.schema.createTable('connection', table => {
        
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

            table.timestamp('created_at')
                .defaultTo(Knex.raw('CURRENT_TIMESTAMP'))
                .notNullable()
    });
};
export async function down(knex: Knex) {
    return knex.schema.dropTable('connection');
};