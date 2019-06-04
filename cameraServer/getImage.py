# image detection & class
import cs
import detection as id

# for connection to Raspberry
import io
import socket
import struct
from PIL import Image

# variables
i = 0
num = 0
Human_num = 0

BeforeCheckedName='0img.jpg'
CheckedName='0img.jpg'

Cla = cs.Class()

# Start a socket listening for connections on 0.0.0.0:8000 (0.0.0.0 means
# all interfaces)
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('0.0.0.0', 8045))
server_socket.listen(0)

# Accept a single connection and make a file-like object out of it
connection = server_socket.accept()[0]
try:
    while True:

        # Read the length of the image as a 32-bit unsigned int. If the
        # length is zero, quit the loop
        image_len = struct.unpack('<L', connection.makefile('rb').read(struct.calcsize('<L')))[0]
        if not image_len:
            break

        # Construct a stream to hold the image data and read the image
        # data from the connection
        image_stream = io.BytesIO()
        image_stream.write(connection.makefile('rb').read(image_len))

        # Rewind the stream, open it as an image with PIL and do some
        # processing on it

        image_stream.seek(0)
        image = Image.open(image_stream)

        image.verify()

        image = Image.open(image_stream)
        image.save('./img/' + str(i) + 'img.jpg')

        # rename image_name for calc
        fileName = str(i) + "img.jpg"

        MuchBeforeCheckedName = BeforeCheckedName
        BeforeCheckedName = CheckedName
        CheckedName = str(num) + "img.jpg"

        # call image detection
        detections = id.detecting(fileName, CheckedName)

        for eachObject in detections:
            Human_num = Human_num + 1

        # reflecting human num and checking change
        Cla.change_num(Human_num)
        if Cla.check():
            before = './img/checked/' + MuchBeforeCheckedName
            after = './img/checked/' + BeforeCheckedName
            Cla.send(before, after)

        # send feedback to Raspberry
            if Cla.check() == 1:
                print("Students Decreased / image Num ==" + str(num-1))
                msg = 'dec'
                connection.send(msg.encode('utf-8'))
            elif Cla.check() == 2:
                print("Students Increased / image Num ==" + str(num-1))
                msg = 'inc'
                connection.send(msg.encode('utf-8'))
        else:
            msg = 'nope'
            connection.sendall(msg.encode('utf-8'))
            
        # variables change for image process
        i = i + 1
        if i > 30:
            i = 0

        num = num + 1
        Human_num = 0

finally:
    connection.close()
    server_socket.close()