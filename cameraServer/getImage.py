import io
import socket
import struct
import numpy as np
from PIL import Image
import requests

'''
#호출 서버
라즈베리 파이로 부터 사진을 받아온 다음, 딥러닝을 사용해서 영상을 처리, 결과가 다를경우
해당 영상을 반환합니다.

#


'''
# Start a socket listening for connections on 0.0.0.0:8000 (0.0.0.0 means
# all interfaces)
#소켓서버 설정
server_socket = socket.socket()
server_socket.bind(('0.0.0.0', 8045))
server_socket.listen(0)

'''
#api호출 설정
API_HOST = 'http://'
headers = {'Authorization': 'Bearer [YOUR_ACCESS_TOKEN]'}
path = ''
'''
# Accept a single connection and make a file-like object out of it
connection = server_socket.accept()[0].makefile('rb')
i = 0

#사람 수 db에서 조회
numOfPeople = 30
curnum = numOfPeople
nextnum = numOfPeople

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
        image.save('img' + i + '.jpg')

        image = Image.open(image_stream)
        data = image

        i+=1

        print('Image is verified')

        #딥러닝 연동...

        #nextnum 받아 옴

        if curnum > nextnum:
            try:
                curnum-=1
                resp = requests.post(url, headers = headers, data = data)
            
            except Exception as ex:
                print('error occoured! connection not stableized')


finally:
    connection.close()
    server_socket.close()

