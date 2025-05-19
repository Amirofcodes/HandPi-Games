from flask import Blueprint, jsonify

api_user = Blueprint('api_user', __name__)

@api_user.route('/api/v1/user/profile', methods=['GET'])
def get_user_profile():
    # Placeholder for future user profile logic
    return jsonify({'username': 'Guest', 'games_played': 0, 'high_score': 0}), 200
