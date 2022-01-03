public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
		role: string //opcional criar ENUM
  ): Promise<void> {
    try {
      await connection()
        .insert({
          id,
          email,
          name,
          password,
					role
        })
        .into(TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }