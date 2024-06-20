CREATE TABLE IF NOT EXISTS notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    datetime DATETIME NOT NULL,
    note TEXT NOT NULL
);

INSERT INTO notes (title, datetime, note) VALUES
('First Note', '2024-06-20 10:00:00', 'Ini adalah first note.'),
('Second Note', '2024-06-21 11:30:00', 'Ini adalah second note.'),
('Third Note', '2024-06-22 14:45:00', 'Ini adalah third note.');
