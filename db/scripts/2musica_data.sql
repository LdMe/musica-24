USE musica;

INSERT INTO artist(artist_id,name,is_alive)
VALUES (1,"Lady Gaga",1),(2,"Evaristo",1),(3,"Nacho",0);

INSERT INTO band(band_id,name) VALUES(1,"Monsters"),(2,"Gatillazo"),(3,"Cicatriz");

INSERT INTO genre(name) VALUES("Pop"),("Punk"),("Rock");

INSERT INTO band_has_artist (band_id,artist_id) 
VALUES (1,1),(2,2),(3,3);

SELECT * 
FROM artist
JOIN band_has_artist ON artist.artist_id=band_has_artist.artist_id
JOIN band ON band_has_artist.band_id=band.band_id;