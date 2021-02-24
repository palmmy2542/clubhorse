from threading import Lock
from flask import Flask, render_template, session, request, \
    copy_current_request_context
from flask_socketio import SocketIO, emit, join_room, leave_room, \
    close_room, rooms, disconnect, send

async_mode = None

app = Flask(__name__)

app.config['SECRET_KEY'] = 'mysecret'

socketio = SocketIO(app, cors_allowed_origins="*")

app.debug = True

app.host = "localhost"

app.port = 24258

ROOMS = ["พักคุย :) รู้จักกันทางbio. ชอบใครFol.กันไป",
         "มาเม้าท์กันเถอะ", "เหงาง่า", "ถกประเด็นการเมือง", ]


@socketio.on("message")
def handleMessage(msg):
    print(msg)
    send({"msg": msg}, broadcast=True)
    return None


@socketio.on("sendFrom")
def handleSendForm(user):
    print(user)
    send({"msg": user}, broadcast=True)
    return None


@socketio.on('join')
def on_join(data):
    username = data["username"]
    room = data["room"]
    join_room(room)
    # Notofication about new user joined room
    send({"msg": username + " has joined the " + room + " room."}, room=room)


@socketio.on('leave')
def on_leave(data):
    leave_room(data['room'])
    # Notification about leaving users
    send({'msg': data['username'] + " has left the " +
          data['room']}, room=data['room'])


@socketio.on('new_room')
def new_room(data):
    ROOMS.append(data['new_room_name'])
    room = data['new_room_name']
    username = data['username']
    join_room(data['new_room_name'])
    # Notification about new user joined room
    send({"msg": username + " has created the " + room + " room."}, room=room)


if __name__ == '__main__':
    socketio.run(app,port="24258")
