export interface ICategory {
  id?: string;
  name?: string;
  description?: string;
}

class CategoryModel implements ICategory {
  private _id?: string;

  private _name?: string;

  private _description?: string;

  public constructor({ id, description, name }: ICategory) {
    this.id = id;
    this.description = description;
    this.name = name;
  }

  public get id(): string | undefined {
    return this._id;
  }

  public set id(value: string | undefined) {
    this._id = value;
  }

  public get name(): string | undefined {
    return this._name;
  }

  public set name(value: string | undefined) {
    this._name = value;
  }

  public get description(): string | undefined {
    return this._description;
  }

  public set description(value: string | undefined) {
    this._description = value;
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description
    };
  }
}

export default CategoryModel;
