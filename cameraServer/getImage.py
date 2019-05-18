# --------- //added part
from imageai.Detection import ObjectDetection
import cs
import os
# ---------

import io
import socket
import struct
from PIL import Image


# ---------
execution_path = os.getcwd()
detector = ObjectDetection()
custom = detector.CustomObjects(person=True)

# using YOLOv3 so need yolo.h5 file in excution direction
detector.setModelTypeAsYOLOv3()
detector.setModelPath(os.path.join(execution_path, "yolo.h5"))
detector.loadModel()

num = 0
Human_num = 0
Cla = cs.Class("고자",20,19,19)

# ---------

# Start a socket listening for connections on 0.0.0.0:8000 (0.0.0.0 means
# all interfaces)
server_socket = socket.socket()
server_socket.bind(('0.0.0.0', 8045))
server_socket.listen(0)

# Accept a single connection and make a file-like object out of it
connection = server_socket.accept()[0].makefile('rb')
i = 0

try:
    while True:
        # Read the length of the image as a 32-bit unsigned int. If the
        # length is zero, quit the loop
        image_len = struct.unpack('<L', connection.read(struct.calcsize('<L')))[0]
        if not image_len:
            break
        # Construct a stream to hold the image data and read the image
        # data from the connection
        image_stream = io.BytesIO()
        image_stream.write(connection.read(image_len))
        # Rewind the stream, open it as an image with PIL and do some
        # processing on it
        image_stream.seek(0)
        image = Image.open(image_stream)
        print('Image is %dx%d' % image.size)
        image.verify()

        image = Image.open(image_stream)
        image.save('./img/'+str(i)+'img.jpg')
        print('Image is verified')

        # ---------
        filename = str(num) + "img.jpg"

        detections = detector.detectCustomObjectsFromImage(custom_objects=custom,
                                                           input_image=os.path.join('./img/', filename),
                                                           output_image_path=os.path.join('./img/checked/', filename),
                                                           minimum_percentage_probability=30)
        for eachObject in detections:
            Human_num = Human_num + 1

        # 사람 수 연산 결과와 다음 처리로 이동
        Cla.change_num(Human_num)
        if Cla.check(num):
            connection.send('data for light'.encode('utf-8'))
            print(Cla.list)

        num = num + 1
        Human_num = 0

        # 이미지 처리 이후 이상 상황이라고 가정


        # ---------

        i = i + 1

finally:
    connection.close()
    server_socket.close()