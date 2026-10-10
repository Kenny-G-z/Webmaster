from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def home():
    # Flask automatically looks inside the 'templates' folder for this file!
    return render_template("index.html")

@app.route("/game")
def health_check():
    return jsonify(status="ok")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)