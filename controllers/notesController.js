const db = require('../db/connection');

exports.createNote = (req, res) => {
    const { title, datetime, note } = req.body;
    const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    db.query(query, [title, datetime, note], (err, results) => {
        if (err) return res.status(500).send({ code: 500, message: 'Internal Server Error', error: err });
        res.status(201).send({ code: 201, message: 'Note created', data: { id: results.insertId } });
    });
};

exports.getAllNotes = (req, res) => {
    const query = 'SELECT * FROM notes';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send({ code: 500, message: 'Internal Server Error', error: err });
        res.status(200).send({ code: 200, message: 'Notes retrieved', data: results });
    });
};

exports.getNoteById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM notes WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send({ code: 500, message: 'Internal Server Error', error: err });
        if (results.length === 0) return res.status(404).send({ code: 404, message: 'Note not found' });
        res.status(200).send({ code: 200, message: 'Note retrieved', data: results[0] });
    });
};

exports.updateNote = (req, res) => {
    const { id } = req.params;
    const { title, datetime, note } = req.body;
    const query = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    db.query(query, [title, datetime, note, id], (err, results) => {
        if (err) return res.status(500).send({ code: 500, message: 'Internal Server Error', error: err });
        if (results.affectedRows === 0) return res.status(404).send({ code: 404, message: 'Note not found' });
        res.status(200).send({ code: 200, message: 'Note updated' });
    });
};

exports.deleteNote = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM notes WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send({ code: 500, message: 'Internal Server Error', error: err });
        if (results.affectedRows === 0) return res.status(404).send({ code: 404, message: 'Note not found' });
        res.status(200).send({ code: 200, message: 'Note deleted' });
    });
};
