import { FindManyOptions, Repository } from 'typeorm';

/**
 * This class abstracts a bunch of common service operations created in nestjs.
 * It takes an entity type and provides a set of generic CRUD operations.
 */
export default abstract class Service<TEntity, TEntityCreate> {
  // this needs to be set so new entities can be created dynamically.
  abstract type: new (...args: any[]) => TEntity;

  // requires access to the main services database repository.
  constructor(private repository: Repository<TEntity>) {}

  async create(createDTO: TEntityCreate): Promise<TEntity> {
    console.info(`[${Service.name}:create] creating new entity`);
    let newEntity = new this.type();
    Object.assign(newEntity, createDTO);
    newEntity = await this.repository.save(newEntity);
    console.table(newEntity);
    return newEntity;
  }

  async findBy(query: FindManyOptions<TEntity>): Promise<Array<TEntity>> {
    console.info(`[${Service.name}:findBy] found entities`);
    const entitys = await this.repository.find(query);
    console.table(entitys);
    return entitys;
  }

  async findById(id: string): Promise<TEntity | null> {
    console.info(`[${Service.name}:findBy] found`);
    const entity = await this.repository.findOne(id);
    console.table(entity);
    return entity;
  }

  async update(
    id: string,
    updateDTO: Partial<TEntityCreate>
  ): Promise<TEntity> {
    console.info(`[${Service.name}:update] updating entity`);
    let entity = await this.repository.findOne(id);
    Object.assign(entity, updateDTO);
    entity = await this.repository.save(entity);
    console.table(entity);
    return entity;
  }

  async remove(id: string): Promise<void> {
    console.info(`[${Service.name}:remove] removing entity`);
    const entity = await this.repository.findOne(id);
    console.table(entity);
    await this.repository.delete(entity);
  }
}
