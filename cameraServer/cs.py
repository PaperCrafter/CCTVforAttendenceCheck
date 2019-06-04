import httplib2
import requests

class Class:
    def __init__(self):
        # ------------------------------------------------------------

        url_get = 'http://192.168.0.6:8001/getLectureInfo'
        # ip 주소 부분을 Webserver ip 주소로 변경

        # 아래 Send 부분의 주소도 Webserver IP로 바꿔줘야 함.

        # ------------------------------------------------------------

        # Get Data From Web Server
        http = httplib2.Http()
        response, content = http.request(url_get, 'GET')

        test = content.decode("utf-8")
        print(test)
        cont = test.split(',')

        # Parsing & Initiating
        CLASS = cont[0][14:-1]
        MAX_STUDENT = int(cont[1][13:])
        TODAY_MAX_STUDENT = int(cont[2][18:])
        CURRENT_STUDENT = int(cont[4][17:-1])

        self.className = CLASS
        self.maxStudent = MAX_STUDENT
        self.todayMaxStudent = TODAY_MAX_STUDENT

        self.before = CURRENT_STUDENT
        self.much_before = CURRENT_STUDENT
        self.currentStudent = CURRENT_STUDENT

        self.start()

    def change_num(self, t):
        self.much_before = self.before
        self.before = self.currentStudent
        self.currentStudent = t
        print("Current Students : "+str(self.currentStudent))

    def check(self):
        if self.before == self.currentStudent and self.much_before != self.currentStudent:
            if self.currentStudent < self.much_before:
                return 1
            elif self.currentStudent > self.much_before:
                return 2
        else:
            return False

    def start(self):
        print("Class : "+self.className)
        print("Original Students Number: "+str(self.todayMaxStudent))
        print("Current Students Number: "+str(self.currentStudent))

    def send(self, before, after):

        #------------------------------------------------------------

        image_url = 'http://192.168.0.6:8001/uploadImage'
        # ip 주소 부분을 Webserver ip 주소로 변경

        # ------------------------------------------------------------

        data = open(before, 'rb').read()
        data2 = open(after, 'rb').read()
        files = {'before': data, 'after': data2}

        res = requests.post(image_url, files=files)
        print(res)
