const Actor = require('../models/actor');

// Get all actors
const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find();
        res.json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single actor by ID
const getActorById = async (req, res) => {
    try {
        const actor = await Actor.findById(req.params.id);
        if (!actor) {
            return res.status(404).json({ message: 'Actor not found' });
        }
        res.json(actor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new actor
const createActor = async (req, res) => {
    const actor = new Actor({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
    });

    try {
        const newActor = await actor.save();
        res.status(201).json(newActor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an existing actor
const updateActor = async (req, res) => {
    try {
        const actor = await Actor.findById(req.params.id);
        if (!actor) {
            return res.status(404).json({ message: 'Actor not found' });
        }

        actor.name = req.body.name || actor.name;
        actor.age = req.body.age || actor.age;
        actor.gender = req.body.gender || actor.gender;

        const updatedActor = await actor.save();
        res.json(updatedActor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an actor
const deleteActor = async (req, res) => {
    try {
        const actor = await Actor.findById(req.params.id);
        if (!actor) {
            return res.status(404).json({ message: 'Actor not found' });
        }

        await actor.remove();
        res.json({ message: 'Actor deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllActors,
    getActorById,
    createActor,
    updateActor,
    deleteActor,
};