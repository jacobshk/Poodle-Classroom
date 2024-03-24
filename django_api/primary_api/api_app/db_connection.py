import pymongo
from pymongo import MongoClient
import certifi

url = 'mongodb+srv://tk:ilove395@cluster0.5itsxbk.mongodb.net/'
client = pymongo.MongoClient(url)

db = client['Cluster0']

async def login(username, password):
    url = 'mongodb+srv://tk:ilove395@cluster0.5itsxbk.mongodb.net/'
    client = pymongo.MongoClient(url)
    db = client['Cluster0']

    user = await db['Users'].find_one({'username': username})
    if user and user['password'] == password:
        return user
    else:
        raise ValueError('account not found')
    
def signup(db, username, email_address, password, confirm_password):
    # Checks if password is at least 8 character long
    if len(password) < 8 or len(confirm_password) < 8:
        raise ValueError('password must be at least 8 characters long')
    # If the user is already in the database
    elif user := db['Users'].find_one({'username': username}) or db['Users'].find_one({'email_address': email_address}):
        # Update the user's information
        db['Users'].update_one({'_id': user['_id']}, {'$set': {'password': password}})
        return {'message': 'account updated successfully'}
    else:
        new_user = {"username":username, "email_address":email_address, "password":password}
        db['Users'].insert_one(new_user)
        return {'message': 'account created successfully'}
    
def create_class(db, collection, new_class):
    # Check if class already exists
    if db[collection].find_one({'class_id': new_class['class_id']}):
        return {'message': 'class already exists'}
    
    # If class does not exist, create it
    db[collection].insert_one(new_class)
    return {'message': 'class successfully created'}

def get_user_classes(db, email_address):
    # Finds user in database
    user = db['Users'].find_one({'email_address':email_address})
    print('user:', user)
    if user:
        user_classes = user.get('classes', [])
        print('user_classes:',user_classes)
        return user_classes
    else:
        return []

def join_class(db, user_email, class_id):
    # Checks if class exists
    if db['Classes'].find_one({'class_id':class_id}):
        # Checks if user is already enrolled in class
        if db['Classes'].find_one({'user_email':user_email}):
            return {'message': 'user is already enrolled in class'}    
        else:
            db['Classes'].update_one({'class_id':class_id}, {'$push': {'student_emails': user_email}})
            return {'message': 'User enrolled in class successfully!'}
    else:
        return {'message': 'Class not found'}
    
####################################    
### PUT YOUR CRUD FUNCTIONS HERE ###
####################################
    
    
# Mock database for testing
# class MockCollection:
#     def __init__(self):
#         self.data = []

#     def find_one(self, query):
#         for item in self.data:
#             if all(item.get(k) == v for k, v in query.items()):
#                 return item
#         return None

#     def insert_one(self, item):
#         self.data.append(item)

#     def find(self, query):
#         result = []
#         for item in self.data:
#             for k, v in query.items():
#                 if isinstance(v, dict) and '$in' in v:
#                     if item.get(k) in v['$in']:
#                         result.append(item)
#                 elif item.get(k) == v:
#                     result.append(item)
#         return result

# mock_db = {
#     'Users': MockCollection(),
#     'Classes': MockCollection()
# }

# # Test login function
# def test_login():
#     # Add a test user to the mock database
#     mock_db['Users'].insert_one({'username': 'test', 'password': 'test'})

#     # Test case where user is found
#     try:
#         result = login(mock_db, 'test', 'test')
#         print('Passed' if result == {'username': 'test', 'password': 'test'} else 'Failed')
#     except Exception as e:
#         print('Failed:', e)

#     # Test case where user is not found
#     try:
#         result = login(mock_db, 'test', 'wrong_password')
#         print('Failed: Did not raise ValueError')
#     except Exception as e:
#         print('Passed' if str(e) == 'account not found' else 'Failed:', e)

# # Test signup function
# def test_signup():
#     # Test case where user is successfully created
#     try:
#         result = signup(mock_db, 'new_user', 'new_user@gmail.com', 'password', 'password')
#         print('Passed' if result == {'message': 'account created successfully'} else 'Failed')
#     except Exception as e:
#         print('Failed:', e)

#     # Test case where user already exists
#     try:
#         result = signup(mock_db, 'test', 'test@gmail.com', 'password', 'password')
#         print('Failed: Did not raise ValueError')
#     except Exception as e:
#         print('Passed' if str(e) == 'user already exists' else 'Failed:', e)

# # Test get_user_classes function
# def test_get_user_classes():
#     # Add a test user and class to the mock database
#     mock_db['Classes'].insert_one({'class_id': 'class1'})  # Change 'classname' to 'class_id'
#     mock_db['Users'].insert_one({'email_address': 'test@gmail.com', 'classes': ['class1']})
#     mock_db['Users'].insert_one({'email_address': 'new_user@gmail.com', 'classes': []})  # Add a user who is not enrolled in any classes

#     # Test case where user is enrolled in a class
#     try:
#         result = get_user_classes(mock_db, 'test@gmail.com')
#         print('Passed' if result == [{'class_id': 'class1'}] else 'Failed')
#     except Exception as e:
#         print('Failed:', e)

#     # Test case where user is not enrolled in any classes
#     try:
#         result = get_user_classes(mock_db, 'new_user@gmail.com')
#         print('Passed' if result == {'message': 'user not enrolled yet'} else 'Failed')
#     except Exception as e:
#         print('Failed:', e)
# # Run the tests
# # test_login()
# # test_signup()
# # test_get_user_classes()

# def test_functions():
#     # Add classes into database
#     students = ['student1@gmu.edu', 'student2@gmu.edu']
#     teachers = ['teacher1@gmu.edu', 'teacher2@gmu.edu']
#     assignment_id = [123, 456, 789]
#     announcement_id = [123, 456, 789]

#     create_class(db, 'Classes', {
#         'bg_img': '',
#         'class_id': 12345,
#         'student_emails': students,
#         'teacher_emails': teachers,
#         'assignment_ids': assignment_id,
#         'announcement_ids': announcement_id
#     })
    
#     # Add users into the database
#     signup(db, 'student1', 'student1@gmu.edu', 'password123', 'password123')
#     signup(db, 'student2', 'student2@gmu.edu', 'password123', 'password123')

#     # Test get_user_classes function
#     print("Testing get_user_classes:\n")
#     user_classes = get_user_classes(db, 'student1@gmu.edu')
#     print('student1: ', user_classes)

#     user_classes = get_user_classes(db, 'student2@gmu.edu')
#     print('student2: ', user_classes)

#     # Test login function
#     print("\nTesting login:\n")
#     user = login(db, 'student1', 'password123')
#     print('student1: ', user)

#     user = login(db, 'student2', 'password123')
#     print('student2: ', user)
    
# test_functions()