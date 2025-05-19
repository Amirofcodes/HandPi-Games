from flask import Blueprint, jsonify, request
from ..services.game_service import game_service
from ..models.user import get_reconnaissance_gestes

api_game = Blueprint('api_game', __name__)
reconnaissance_gestes = get_reconnaissance_gestes()

@api_game.route('/api/v1/game/start', methods=['POST'])
def start_game():
    response = game_service.start_game()
    return jsonify(response), 200

@api_game.route('/api/v1/game/end', methods=['POST'])
def end_game():
    response = game_service.end_game()
    return jsonify(response), 200

@api_game.route('/api/v1/game/check', methods=['POST'])
def check_gesture():
    try:
        data = request.json
        if 'gesture' not in data:
            return jsonify({'message': 'Gesture data missing'}), 400
        gesture = data['gesture'].strip()
        response = game_service.check_gesture(gesture)
        return jsonify(response), 200
    except Exception as e:
        print(f"Error in check_gesture: {e}")
        return jsonify({'message': 'Error processing gesture'}), 500

@api_game.route('/start', methods=['POST'])
@api_game.route('/api/start', methods=['POST'])
def start_game_short():
    return start_game()

@api_game.route('/check', methods=['POST'])
@api_game.route('/api/check', methods=['POST'])
def check_gesture_short():
    return check_gesture()

@api_game.route('/check', methods=['GET'])
@api_game.route('/api/check', methods=['GET'])
def check_gesture_live():
    # Obtain the latest predicted gesture from the live video stream
    gesture = reconnaissance_gestes.get_last_prediction()
    response = game_service.check_gesture(gesture)
    return jsonify(response), 200
