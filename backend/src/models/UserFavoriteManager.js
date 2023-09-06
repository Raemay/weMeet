const { connectToDatabase } = require('../database');

async function insertUserFavorite(user_iduser, favorite_idfavorite) {
    try {
      const connection = await connectToDatabase();
  
      const [UserFavoriteRows] = await connection.query(
        "INSERT INTO user_has_favorite (user_iduser, favorite_idfavorite) VALUES (?, ?)", [user_iduser, favorite_idfavorite]
      );
  
      const newUserFavoriteId = UserFavoriteRows.insertId;
      console.log("UserFavorite inserted, ID:", newUserFavoriteId);
  
      return { status: 201, idUserFavorite: newUserFavoriteId };
    } catch (error) {
      console.error("Error:", error);
      return { status: 500, message: error.message || "Internal Server Error" };
    }
  }

  async function deleteUserFavorite(iduser , idfavorite) {
    const connection = await connectToDatabase();
    const sql = "DELETE FROM user_has_favorite WHERE user_iduser = ? AND favorite_idfavorite = ?";
  
    try {
      const [result] = await connection.query(sql, [iduser, idfavorite]);
      if (result.affectedRows === 1) {
        return { status: 200, message: {} }; // Suppression réussie, statut 200
      } else {
        return { status: 404, message: 'Relationship not found' }; // Utilisateur introuvable, statut 404
      }
    } catch (error) {
      console.error('Error on delete relationship :', error);
      return { status: 500, message: 'Error on delete relationship' };
    }
  }

  async function getAllUserFavorite() {
    try {
      const connection = await connectToDatabase();
      const sql = "SELECT * FROM user_has_favorite";
  
      const [rows] = await connection.query(sql);
  
      return { status: 200, message: rows };
    } catch (error) {
      console.error("Error on get UserFavorite", error);
      return { status: 500, message: error.message || "Internal Server Error" };
    }
  }

  async function fetchOneUserFavorite(iduser, idfavorite) {
    try {
      const connection = await connectToDatabase();
      const [rows] = await connection.query('SELECT * FROM user_has_favorite WHERE user_iduser = ? AND favorite_idfavorite = ?', [iduser, idfavorite]);
  
      if (rows.length === 0) {
        // Aucun utilisateur trouvé avec cet ID
        return { status: 404, message: "relationship not found" };
      }
  
      return { status: 200, message: rows[0] };
    } catch (error) {
      console.error('Error on get one relationship', error);
      throw error; // Vous pouvez également renvoyer un message d'erreur personnalisé si nécessaire
    }
  }
  
  
  module.exports = {
    fetchOneUserFavorite,
    getAllUserFavorite,
    deleteUserFavorite,
    insertUserFavorite
  };

// async function fetchUserFavoriteBy(filter) {
//     //search filter (that contain)
//     let { sql, values } = filterHelper.checkKindOfFilter(filter);

//     //order filter (sorting)

//     //date filter

//     return connection.promise().query(sql,values)
//     .then(async ([rows]) => {
//         return {status: 200, message: rows}
//     })
//     .catch(error => {
//         return {status: 500, message: error}
//     })

// }
