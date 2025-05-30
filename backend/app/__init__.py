from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.config import Config
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    CORS(app)  # 允許所有來源呼叫 API

    db.init_app(app)
    migrate.init_app(app, db)

    from app.routes import main_routes
    app.register_blueprint(main_routes.bp)

    return app

from app import models
