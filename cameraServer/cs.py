import httplib2
import requests

class Class:
    def __init__(self):

        http = httplib2.Http()
        url = 'http://192.168.0.5:8001/api'
        response, content = http.request(url, 'GET')

        test = content.decode("utf-8")
        print(test)
        cont = test.split(',')

        CLASS = cont[0][14:-1]
        MAX_STUDENT = int(cont[1][13:])
        TODAY_MAX_STUDENT = int(cont[2][18:])
        CURRENT_STUDENT = int(cont[4][17:-1])

        self.className = CLASS
        self.maxStudent = MAX_STUDENT
        self.todayMaxStudent = TODAY_MAX_STUDENT
        self.before = 0
        self.currentStudent = CURRENT_STUDENT
        self.start()

        '''
        #--- for testing
        self.className = 'test'
        self.maxStudent = 15
        self.todayMaxStudent = 15
        self.before = 0
        self.currentStudent = 15
        self.start()
        #---
        '''

    def change_num(self, t):
        self.before = self.currentStudent
        self.currentStudent = t
        print("Current Students : "+str(self.currentStudent))

    def check(self):
        if self.currentStudent < self.before:
            print("Students Decreased")
            return 1
        elif self.currentStudent > self.before:
            print("Students Increased")
            return 2
        else:
            return False

    def start(self):
        print("Class : "+self.className)
        print("Original Students Number: "+str(self.todayMaxStudent))
        print("Current Students Number: "+str(self.currentStudent))

    def add_list(self, num):
        self.list.append(num)

    def send(self, before, after):
        data = open(before, 'rb').read()
        data2 = open(after, 'rb').read()
        files = {'before': data, 'after': data2}
        image_url = 'http://192.168.0.5:8001/upload/img'
        res = requests.post(image_url, files=files)
        print(res)
