from picamera import PiCamera
import time

camera = PiCamera()

camera.start_preview()
time.sleep(10)
camera.capture('/home/pi/Desktop/image.jpeg')
camera.stop_preview();
