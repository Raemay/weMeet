const { connectToDatabase } = require('../database');

async function insertUser(data) {
    try {
      const connection = await connectToDatabase();
      const bodyResponse = { ...data };
  
      const [userRows] = await connection
        .query(
          "INSERT INTO user (email, password, name, city, hobby, travelers, description) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [
            data.email,
            data.password,
            data.name,
            data.city,
            data.hobby,
            data.travelers,
            data.description,
          ]
        );
      bodyResponse.id = userRows.insertId;
      console.log("User inserted, ID:", userRows.insertId);
  
      return { status: 201, message: bodyResponse };
    } catch (error) {
      console.error("Error:", error);
      return { status: 500, message: error.message || "Internal Server Error" };
    }
  }
  

  async function updateUser(userId, newData) {
    try {
      const connection = await connectToDatabase();
      
      const sql = `
        UPDATE user
        SET
          email = ?,
          password = ?,
          name = ?,
          city = ?,
          hobby = ?,
          travelers = ?,
          description = ?
        WHERE iduser = ?`;
  
      const values = [
        newData.email,
        newData.password,
        newData.name,
        newData.city,
        newData.hobby,
        newData.travelers,
        newData.description,
        userId, // L'ID de l'utilisateur à mettre à jour
      ];
  
      const [result] = await connection.query(sql, values);
  
      if (result.affectedRows > 0) {
        return { status: 200, message: "Utilisateur mis à jour avec succès" };
      } else {
        return { status: 404, message: "Utilisateur non trouvé" };
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
      return { status: 500, message: error.message || "Internal Server Error" };
    }
  }

  async function deleteUser(id) {
    const connection = await connectToDatabase();
    const sql = "DELETE FROM user WHERE iduser = ?";
  
    try {
      const [result] = await connection.query(sql, [id]);
      if (result.affectedRows === 1) {
        return { status: 200, message: {} }; // Suppression réussie, statut 200
      } else {
        return { status: 404, message: 'Utilisateur non trouvé' }; // Utilisateur introuvable, statut 404
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      return { status: 500, message: 'Erreur lors de la suppression de l\'utilisateur' };
    }
  }

  async function getAllUsers() {
    try {
      const connection = await connectToDatabase();
      const sql = "SELECT * FROM user";
  
      const [rows] = await connection.query(sql);
  
      return { status: 200, message: rows };
    } catch (error) {
      console.error("Erreur lors de la récupération de tous les utilisateurs :", error);
      return { status: 500, message: error.message || "Internal Server Error" };
    }
  }

  async function fetchOneUser(userId) {
    try {
      const connection = await connectToDatabase();
      const [rows] = await connection.query('SELECT * FROM user WHERE iduser = ?', [userId]);
  
      if (rows.length === 0) {
        // Aucun utilisateur trouvé avec cet ID
        return { status: 404, message: "Utilisateur non trouvé" };
      }
  
      return { status: 200, message: rows[0] };
    } catch (error) {
      console.error('Erreur lors de la requête à la base de données :', error);
      throw error; // Vous pouvez également renvoyer un message d'erreur personnalisé si nécessaire
    }
  }
  
  
  module.exports = {
    fetchOneUser,
    getAllUsers,
    deleteUser,
    insertUser,
    updateUser
  };

// async function fetchUserBy(filter) {
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
