db = {
    "user": "root",
    "password": "",
    "host": "localhost",
    "port": 3306,
    "database": "hoguma",
}

SQLALCHEMY_DATABASE_URI = f"mysql+mysqlconnector://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = "SECRET KEY"
