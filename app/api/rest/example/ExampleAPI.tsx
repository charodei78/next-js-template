import client from '../RestClient';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';


export default class ExampleApi {
  async findAll() {
    return await client.get('/examples/');
  }
  
  async findOne(id) {
    return await client.get(`/examples/${id}`);
  }
  
  async create(dto: CreateExampleDto) {
    return await client.post('/examples/', dto);
  }
  
  async update(id: string, dto: UpdateExampleDto) {
    return await client.patch(`/examples/${id}`, dto);
  }
  
  async remove(id: string) {
    return await client.delete(`/examples/${id}`);
  }
}
