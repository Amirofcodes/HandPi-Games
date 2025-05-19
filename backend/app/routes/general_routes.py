from flask import Blueprint, Response
from ..models.user import get_reconnaissance_gestes

api_general = Blueprint('api_general', __name__)
reconnaissance_gestes = get_reconnaissance_gestes()

@api_general.route('/video_feed', methods=['GET'])
def video_feed():
    return Response(reconnaissance_gestes.gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@api_general.route('/', methods=['GET'])
def home():
    return '''<h1>HandPi Games Backend</h1><p>API is running...</p>''', 200

@api_general.route('/predict', methods=['GET'])
@api_general.route('/api/predict', methods=['GET'])
def predict_gesture():
    gesture = reconnaissance_gestes.get_last_prediction() if reconnaissance_gestes else 'Unknown'
    return {'gesture': gesture}, 200
