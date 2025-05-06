// db.js
// Connects to MongoDB and provides a function to compute tierlist statistics.

const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB URI from .env or fallback
const uri = process.env.MONGO_URI || "mongodb://localhost:27017/mastertier";
const client = new MongoClient(uri);

/**
 * Handler for GET /api/stats
 * Connects to MongoDB and computes:
 *  - Total number of tierlists
 *  - Most used category across all tierlists
 *  - Most popular item name across all tierlists
 */
async function getStats(req, res) {
  try {
    await client.connect();
    const db = client.db(); // Uses the "mastertier" database
    const collection = db.collection('tierlists'); // Collection name based on your tierlist-creation-service

    // Count total number of tierlists
    const total = await collection.countDocuments();

    // Most used category (field is "categories" = array)
    const mostUsedCategory = await collection.aggregate([
      { $unwind: "$categories" },
      { $group: { _id: "$categories", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]).toArray();

    // Most popular item name (items is an array of objects with "name")
    const mostPopularItem = await collection.aggregate([
      { $unwind: "$items" },
      { $group: { _id: "$items.name", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]).toArray();

    res.json({
      totalTierlists: total,
      mostUsedCategory: mostUsedCategory[0]?._id || "N/A",
      mostPopularItem: mostPopularItem[0]?._id || "N/A"
    });
  } catch (error) {
    console.error("❌ MongoDB stats error:", error.stack || error);
    res.status(500).json({ error: "Failed to fetch statistics from database." });
  } finally {
    await client.close();
  }
}

module.exports = { getStats };



/**
 * Temporary debug route to list all tierlists seen by stats-service
 */
async function debugMongo(req, res) {
    try {
      await client.connect();
      const db = client.db(); // mastertier
      const collectionNames = await db.listCollections().toArray();
  
      const tierlists = await db.collection('tierlists').find().toArray();
  
      res.json({
        collections: collectionNames.map(c => c.name),
        tierlists,
      });
    } catch (error) {
      console.error("❌ Debug error:", error.stack || error);
      res.status(500).json({ error: "Debug failed" });
    } finally {
      await client.close();
    }
  }
  
  module.exports = { getStats, debugMongo };
  