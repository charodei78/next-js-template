import client from '../GraphqlClient';
import { GraphQLTypes } from '../zeus';

export default class ExampleCardGql {
  async findAll() {
    return await client.query({
      users: {
        id: true,
      }
    });
  }
  
  async findOne(id) {
    return await client.query({
      user: [ { id }, { name: true, image: true } ],
    });
  }
  
  async create(dto: GraphQLTypes["CreateUserInput"]) {
    return await client.mutation({
      createUser: [{
        input: dto
      }, 
      {
        id: true
      }
    ]
    });
  }
  
  async update(id: string, dto: GraphQLTypes["UpdateUserInput"]) {
    return await client.mutation({
      updateUser: [{ input: { id, name: "newName" } }, { name: true, }]
    });
  }
  
  async remove(id: string) {
    return await client.mutation({
      removeUser: [{ id }, { name: true }]
    });
  }
}
