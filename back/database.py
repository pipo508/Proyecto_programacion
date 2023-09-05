from flask_sqlalchemy import SQLAlchemy
#inicializar objeto sqlalchemy
db = SQLAlchemy()

USER_DB = 'postgres'
PASS_DB = 'Tiziano756'
URL_DB = 'localhost'
NAME_DB = 'proyectCaver'
FULL_URL_DB = f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'