import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)

if os.path.exists("env.py"):
    import env


app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
@app.route("/index.html")
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=(os.environ.get("PORT")),
            debug=True)  # change debug to False before deploying