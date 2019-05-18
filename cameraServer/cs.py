#------------------

class Class:
    def __init__(self, name, maximum, today, current):
        self.className = name
        self.maxStudent = maximum
        self.todayMaxStudent = today
        self.before = 0
        self.currentStudent = current
        self.start()
        self.list = []

    def change_num(self, t):
        self.before = self.currentStudent
        self.currentStudent = t
        print("Current Students : "+str(self.currentStudent))

    def check(self, num):
        if self.currentStudent < self.before:
            print("Students Decreased")
            self.add_list(num)
            return True
        elif self.currentStudent > self.before:
            print("Students Increased")
            self.add_list(num)
            return True
        else:
            return False

    def start(self):
        print("Class : "+self.className)
        print("Original Students Number: "+str(self.todayMaxStudent))
        print("Current Students Number: "+str(self.currentStudent))

    def add_list(self, num):
        self.list.append(num)

#------------------
