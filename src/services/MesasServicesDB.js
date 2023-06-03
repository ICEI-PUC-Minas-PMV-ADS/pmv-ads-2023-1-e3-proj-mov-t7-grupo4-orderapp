import Database from './DbServices';

const DB_EXEC = Database.getConnection();


export const insertMesa = async (param) => {
  let results = await DB_EXEC(`insert into mesas(nummesa)
  values(?)`, [param.nummesa]);
  console.log(results);
  return results.rowsAffected;
}

export const deleteMesa = async (id) => {
  let results = await DB_EXEC(`delete from mesas where nummesa=?`, [id]);
  //console.log(results);
  return results.rowsAffected;
}

export const insertItem = async (param) => {
  let results = await DB_EXEC(`insert into itens(nomeItem,categoria,preco)
  values(?,?,?)`, [param.nomeItem, param.categoria, param.preco]);
  console.log(results);
  return results.rowsAffected;
}

export const deleteItem = async (id) => {
  let results = await DB_EXEC(`delete from itens where id=?`, [id]);
  //console.log(results);
  return results.rowsAffected;
}

export const updateItem = async (param) => {
  let results = await DB_EXEC(`update itens set nomeItem=?, categoria=?, preco=?
  where id=?`, [param.nomeItem, param.categoria,param.preco, param.id]);
  //console.log(results);
  return results.rowsAffected;
}

export const deleteAllPedido = async (id) => {
  let results = await DB_EXEC(`delete from pedidos where nummesa=?`, [id]);
  //console.log(results);
  return results.rowsAffected;
}

export const insertPedido = async (param) => {
  let results = await DB_EXEC(`insert into pedidos(nummesa, itemMesa, preco, quantidade)
  values(?,?,?,?)`, [param.nummesa, param.itemMesa, param.preco, param.quantidade]);
  //console.log(results);
  return results.rowsAffected;
}

export const updatePedido = async (param) => {
  let results = await DB_EXEC(`update pedidos set nummesa=?, itemMesa=?, quantidade=?
  where id=?`, [param.nummesa, param.itemMesa,param.quantidade, param.id]);
  //console.log(results);
  return results.rowsAffected;
}

export const deletePedido = async (id) => {
  let results = await DB_EXEC(`delete from pedidos where id=?`, [id]);
  //console.log(results);
  return results.rowsAffected;
}