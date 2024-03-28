import pymongo
from pymongo import MongoClient
import certifi


def login(username: str, password: str):
    """
    Overview: Allows users to sign into existing accounts.
    Called when: Submit is clicked.
    parameters:
        username : string
        password: string
    Behavior:
        if username/password are present in database: 
            retrieves user object and redirects to Classes Overview
        Else, displays error message ""account not found""."	
    CRUD: GET info from user collection
    """
    url = 'mongodb+srv://tk:ilove395@cluster0.5itsxbk.mongodb.net/'
    client = pymongo.MongoClient(url)
    db = client['Cluster0']
    user = db['Users'].find_one({'username': username})
    print(user)
    print(len(username))
    print(username)

    if user and user['password'] == password:
        return ("account found!")
    else:
        return('account not found')


def signup(email, password, username):
    """
    Overview: Allows users to create accounts using their Gmail addresses	
    Called when: "Submit" is clicked.	
    parameters:
        username : string
        email address: string
        password : string
    Behavior: 
    If (password == confirm_password) and (length(password) > 8) and username and email do not already exist in database:
        creates new user object in database and displays success message 
    Else, displays appropriate error message"	POST info to user collection
    """
    url = 'mongodb+srv://tk:ilove395@cluster0.5itsxbk.mongodb.net/'
    client = pymongo.MongoClient(url)
    db = client['Cluster0']
    # Checks if password is at least 8 character long
    if len(password) < 8:
        return {'message': 'password must be at least 8 characters long'}
    # If the user is already in the database
    elif user := db['Users'].find_one({'username': username}) or db['Users'].find_one({'email_address': email}):
        #tell them nonono
        return {'message': 'account already exists!'}
    else:
        new_user = {"username":username, "email_address":email, "password":password}
        db['Users'].insert_one(new_user)
        return {'message': 'account created successfully'}

def get_user_classes(username: str):
    """
    Overview: Retrieves and displays user classes on login.	
    Called when: "Classes Overview" is loaded.	
    Parameters: 
        user email: string	
    Behavior: 
    Returns list of class objects that user is enrolled in, and displays.
    If user is not enrolled in any class, displays ""Not enrolled yet""."	
    CRUD: GET info from class collection
    """
    url = 'mongodb+srv://tk:ilove395@cluster0.5itsxbk.mongodb.net/'
    client = pymongo.MongoClient(url)
    db = client['Cluster0']
    
    #get user from db
    if user := db['Users'].find_one({'username': username}):
        #get class array from db
        classes = user['classes'] 
        #get each class object from db 
        class_obj_arr = []
        for i in range(len(classes)):
            classID = classes[i]
            class_obj = db['Classes'].find_one({'class_id': classID},{'_id': False})
            class_obj_arr.append(class_obj)
        #print(class_obj_arr)
        return class_obj_arr


def create_class():
    """
    Overview: Allows teachers to create classes	
    Called when: "Create a new class" is selected
    Parameters:
        user email: string
        classname: string"	
    Behavior: 
        If classname does not already exist, creates new ""class"" object with current user email as ""teacher_email"". 
        If class name already exists, displays appropriate message"	POST info to class collection
    """
    pass


def join_class(username: str, class_id: int):
    """
    Overview: Allows students to enroll in classes	
    Called when: user inputs a Class ID and hits enter	
    Parameters:
        class id: string
        user email: string
    Behavior:
        If user is not already in class, adds student to class and displays susccess message
        If user is in class, displays error message"	
    CRUD: PUT info to class collection
    """
    url = 'mongodb+srv://tk:ilove395@cluster0.5itsxbk.mongodb.net/'
    client = pymongo.MongoClient(url)
    db = client['Cluster0']
    
    class_id = int(class_id)
    #get user from db
    if userClass := db['Classes'].find_one({'class_id': class_id}):
        #get each class object from db 
        students = userClass['student_emails']
        print(username)
        print(students)
        for i in students:
            email = i.split('@')[0]
            print(email)
            if(email == username):
                return({'response': 'already joined'})

        #update class membership            
        update_result = db['Classes'].update_one({'class_id': class_id}, {"$push": {"student_emails": username+'@gmu.edu'}})
        #update user membership
        update_result2 = db['Users'].update_one({'username': username}, {"$push": {"classes": class_id}})


        return({'response': 'successfully added'})

    else:
        return({'response': "no class found"})

def get_roster():
     """
     Overview: Retrieves a roster of student enrolled in a specific class
     Called when: user "Classroom Layout / People" loads	
     Parameters:
        class id: string 	
    Behavior:
        If class has users, returns list of user emails and usernames
        If class does not have users, returns list with one object that says ""No Users Found""
        If class not found, throws error"	
    CRUD: GET info from class collection
    """
     pass

def get_grades():
    """
    Overview: Retrieves all grades for the currently logged in student	
    Called when: user "Classroom Layout / Grades" loads	
    Parameters: 
        User email: string
        class id: string
    Behavior:
        If user does not exist in class, displays error message
        Returns all assignments user has completed + feedback
        If user exists but has not submitted, displays message"	
    CRUD: GET info from users, assignments collection
    """
    pass
            
            
def get_assignments():
    """
    Overview: Retrieves all assignments in class	
    Called when:user "Classroom Layout / Assignments" loads
    Parameters:
        User email: string
        class id: string
    Behavior:
        If user does not exist in class, displays error message
        Returns all assignments 
        If no assignments exist, displays appropriate message"	
    CRUD: GET info from assignments collection
    """
    pass


def get_stream():
    """
    Overview: Retrieves all assignments + announcements in class
    Called when: user "Classroom Layout " loads	
    Parameters:
        User email: string
        class id: string
    Behavior: 
        If user does not exist in class, displays error message
        Returns all assignments 
        If no assignments exist, displays appropriate message"	
    CRUD: GET info from class, assignments collection
    """
    pass
    
def get_stream():
    """
    Overview: Retrieves all assignments + announcements in class
    Called when: user "Classroom Layout " loads
    Parameters:
        User email: string
        class id: string
    Behavior:
        If user does not exist in class, displays error message
        Returns all assignments 
        If no assignments exist, displays appropriate message"	
    CRUD: GET info from classes, assignments collection
    """
    pass

def set_background():
    """
    Overview: Teachers can upload new image	
    Called when: user selects "Customize" button
    Parameters: 
        img: jpg file	
    Behavior: 
        If valid file uploaded, sets new background image in SQL.
        Else throws error	
    CRUD: POST to classes assignment
    """
    pass

def get_grades():
    """
    Overview: Retrieves all grades for all students for all assignments and displays graded/ungraded assignments	
    Called when: user "Classroom Layout / Grades (Teachers) loads	
    Parameters:
        User email: string
        class id: string
    Behavior:
        If user does not exist in class, displays error message
        Returns all assignments + grades. 
        If user has submitted assignment + does not have grade, returns appropriate message
        If no assignments exist, displays appropriate message
    CRUD: GET info from assignments collection
    """
    pass


def update_grades():
    """
    Overview: Allows teachers to input new grades for a specific student for a specific assignment
    Called when: user selects "add grade" on assignment	
    Parameters:
        User email: string
        class id: string
        student email: string
    Behavior:
        Creates new grade for assignment for student in DB
    CRUD: PUT info to assignments collection
    """
    pass

def create_assignment():
    """
    Overview: Allows teachers to create new assignment	
    Called when: user selects "plus button" on page
    Parameters:
        User email: string
        class id: string
        file: file
        details: string
    Behavior:
        Creates new assignment in DB if all fields are valid
    CRUD: POST info to assignments collection
    """
    pass            
            
def modify_assignment():
    """
    Overview: Allows teachers to remove assignment	
    Called when: user selects edit assignment	
    Parameters:
        User email: string
        class id: string
        file: file
        details: string
    Behavior: 
        Modifies assignemnt as appropriate	
    CRUD: PUT info to assignments collection
    """
    pass
