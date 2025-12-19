from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Olá Mundo!'

@app.route('/about')
def about():
    return 'Sobre!'

@app.route('/downloads')
def downloads():
    return 'Sobre!'
