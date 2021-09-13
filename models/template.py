from fuzzer.fuzz import app
from flask import request, jsonify

@app.route("/addtemplate", methods=["POST"])
def add_tweet():
    try:
        title = request.json["title"]
        content = request.json["content"]
        return jsonify({"success": "true"})
    except Exception as e:
        print(e)
        return jsonify({"error": "Invalid form"})
