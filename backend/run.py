import os
from flask import Flask
from flask_cors import CORS
from app.routes.game_routes import api_game
from app.routes.user_routes import api_user
from app.routes.general_routes import api_general

app = Flask(__name__)
# Allow any origin, any header, any method
CORS(app,
     resources={r"/*": {"origins": "*"}},
     supports_credentials=False,
     allow_headers="*",
     methods=["GET", "POST", "OPTIONS"])

# Register Blueprints
app.register_blueprint(api_game)
app.register_blueprint(api_user)
app.register_blueprint(api_general)

@app.route('/healthz', methods=['GET'])
def health_check():
    return {"status": "healthy"}, 200

if __name__ == '__main__':
    app.run(
        host='0.0.0.0', 
        port=int(os.environ.get("PORT", 5001)), 
        debug=os.environ.get("FLASK_ENV") == "development"
    )
