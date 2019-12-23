from flask import Flask, render_template
import requests
import json

app = Flask(__name__, template_folder='.')

@app.route('/')
def homepage():
	params = {
	'api_key': '{1a283ce9560c4ca7924e3a0d45572bee87542a871038d74364fb2601f435cb51}',
	}
	r = requests.get('https://api.intra.42.fr/v2/campus/benguerir/users?{api_key}', params=params)
	return render_template('test.html', movies=json.loads(r.text)['movies'])