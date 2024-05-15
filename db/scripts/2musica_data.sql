USE musica;

INSERT INTO artist(artist_id,name,is_alive)


VALUES (1,"Lady Gaga",1),(2,"Evaristo",1),(3,"Nacho",0);

INSERT INTO band(band_id,name) VALUES(1,"Monsters"),(2,"Gatillazo"),(3,"Cicatriz");

INSERT INTO genre(name) VALUES("Pop"),("Punk"),("Rock");

INSERT INTO song(song_id, title, length, composer_id, genre_id) 
VALUES 
    (1, 'Bohemian Rhapsody', '5:55', 1, 1),
    (2, 'Stairway to Heaven', '8:02', 2, 2),
    (3, 'Imagine', '3:03', 3, 3),
    (4, 'Hotel California', '6:30', 4, 4),
    (5, 'Hey Jude', '7:11', 5, 5),
    (6, 'Smells Like Teen Spirit', '5:01', 6, 6),
    (7, 'Like a Rolling Stone', '6:13', 7, 7),
    (8, 'Yesterday', '2:05', 8, 8),
    (9, 'What a Wonderful World', '2:21', 9, 9),
    (10, 'Sound of Silence', '3:05', 10, 10);

INSERT INTO band_has_artist (band_id,artist_id) 
VALUES (1,1),(2,2),(3,3);

SELECT * 
FROM artist
JOIN band_has_artist ON artist.artist_id=band_has_artist.artist_id
JOIN band ON band_has_artist.band_id=band.band_id;