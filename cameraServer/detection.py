from imageai.Detection import ObjectDetection
import os

# setup image detection api
execution_path = os.getcwd()
detector = ObjectDetection()
custom = detector.CustomObjects(person=True)

# using YOLOv3 so need yolo.h5 file in excution direction
detector.setModelTypeAsYOLOv3()
detector.setModelPath(os.path.join(execution_path, "yolo.h5"))
detector.loadModel()


def detecting(fileName, CheckedName) :
    detections = detector.detectCustomObjectsFromImage(custom_objects=custom,
                                                       input_image=os.path.join('./img/', fileName),
                                                       output_image_path=os.path.join('./img/checked/', CheckedName),
                                                       minimum_percentage_probability=30)
    return detections
