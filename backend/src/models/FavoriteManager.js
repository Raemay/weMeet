const { connectToDatabase } = require('../database');

async function insertFavorite() {
    try {
      const connection = await connectToDatabase();
  
      const [favoriteRows] = await connection
        .query(
          "INSERT INTO favorite () VALUES ()"
        );
        
        const newFavoriteId = favoriteRows.insertId;
      console.log("Favorite inserted, ID:", newFavoriteId);
  
      return { status: 201, idfavorite: newFavoriteId };
    } catch (error) {
      console.error("Error:", error);
      return { status: 500, message: error.message || "Internal Server Error" };
    }
  }

  async function deleteFavorite(idfavorite) {
    const connection = await connectToDatabase();
    const sql = "DELETE FROM favorite WHERE idfavorite = ?";
  
    try {
      const [result] = await connection.query(sql, [idfavorite]);
      if (result.affectedRows === 1) {
        return { status: 200, message: {} }; // Suppression réussie, statut 200
      } else {
        return { status: 404, message: 'favorite not found' }; // Utilisateur introuvable, statut 404
      }
    } catch (error) {
      console.error('Error on delete favorite :', error);
      return { status: 500, message: 'Error on delete favorite' };
    }
  }

  async function getAllFavorite() {
    try {
      const connection = await connectToDatabase();
      const sql = "SELECT * FROM favorite";
  
      const [rows] = await connection.query(sql);
  
      return { status: 200, message: rows };
    } catch (error) {
      console.error("Error on get favorite", error);
      return { status: 500, message: error.message || "Internal Server Error" };
    }
  }

  async function fetchOneFavorite(idfavorite) {
    try {
      const connection = await connectToDatabase();
      const [rows] = await connection.query('SELECT * FROM favorite WHERE idfavorite = ?', [idfavorite]);
  
      if (rows.length === 0) {
        // Aucun utilisateur trouvé avec cet ID
        return { status: 404, message: "Favorite not found" };
      }
  
      return { status: 200, message: rows[0] };
    } catch (error) {
      console.error('Error on get one favorite', error);
      throw error; // Vous pouvez également renvoyer un message d'erreur personnalisé si nécessaire
    }
  }
  
  
  module.exports = {
    fetchOneFavorite,
    getAllFavorite,
    deleteFavorite,
    insertFavorite
  };

// async function fetchFavoriteBy(filter) {
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
