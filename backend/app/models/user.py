from .reconnaissance_gestes_temps_reel import ReconnaissanceGestesTempsReel
import os

# Get the absolute path to the current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Build the path to the model file
model_path = os.path.join(current_dir, 'model.p')

# Initialize gesture recognition with a unified labels dictionary
reconnaissance_gestes = ReconnaissanceGestesTempsReel(
    model_path, 
    {
        'A': 'A', 'A-2': 'A',
        'B': 'B', 'B-2': 'B',
        'C': 'C', 'C-2': 'C',
        'D': 'D', 'D-2': 'D'
    }
)

def get_reconnaissance_gestes():
    return reconnaissance_gestes
