CREATE TABLE documents (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 name TEXT,
 created_at TEXT
);

CREATE TABLE customers (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 document_id INTEGER,
 name TEXT,
 address TEXT,
 phone TEXT,
 total_bill INTEGER,
 paid INTEGER,
 remaining INTEGER
);
