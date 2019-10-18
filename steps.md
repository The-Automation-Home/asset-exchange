'createProperty'
 
In order to implement the logic for this transaction, we need to understand the properties of 
the assets and participants, and the 'createTransaction' logic. 


Participants
There is one participant, namely, 'User',  which has the following properties:


User

User ID: This is a unique ID, which is used to track the user details:
Datatype: String
Name of the User: The User provides his/her name, which is used to track the buyer details:
Datatype: String
Email of the User: The User provides his/her email ID, which can be used to track the user details:
Datatype: String
Identification number: This is a unique identification number for the User:
Datatype: Integer
Bank name: This is the name of the bank handling the transactions:
Datatype: String
Bank address: This is the address of the bank:
Datatype: String
Account number: This is the unique account number of the user that is registered with the bank:
Datatype: Integer
IFSC code: This is the IFSC code of the bank:
Datatype: String
Balance: This is the user's bank account balance:
Datatype: Integer
 

Assets
The system will have two types of assets, namely, 
'Property' and 'Property Listing'. 



Property 

Property ID: This is a unique ID for each property stored in the business network. 
It also acts as a primary key and is used to track the property details:
Datatype: String
Market price: This is the market price for the properties that are registered over the network:
Datatype: Integer
Registration date: This is the date on which a property is registered with the Composer application:
Datatype: DateTime
Property type: This is the information detailing the type of property, such as “2 BHK, 3 BHK or villa.” Students can define their own types:
Datatype: String
Location: This is the address of the property:
Datatype: String
Status: This attribute defines the status of a property: “Intent of Sale” or “Registered”:
Datatype: String
Default: Registered
Owner: This is a reference to the participant User, where the Id of the user is passed to specify the owner of the property:
Datatype: User
Transactions
The first phase of the project will include invoking the transaction 'createProperty' to add a new property over the network. 
Following are the details of this transaction.

 

createProperty: By invoking this transaction, the user will create a new property in the 'Property Asset Registry'.

 

Structure: The structure of the transaction will be as follows:

PID: This is a unique ID that represents a property:
Datatype: String
Market price: This is the market price of the properties that are registered over the network:
Datatype: Integer
Registration date: This is the date on which a property is registered with the Composer application:
Datatype: DateTime
Property type: This is the information detailing the type of property, such as “2 BHK, 3 BHK or villa.” Students can define their own types:
Datatype: String
Location: This is the address of the property:
Datatype: String
Transaction Flow: The transaction flow is as follows:

We Take the inputs (PID, Market Price, Registration Date, Property Type, Location) from the user for the 
new property that has to be registered with the system.
Check if the property already exists. If so, return an error to the user.
Create the property based on the inputs received from the user.
Add the property to the property asset registry.


Access Control
The following rules will govern the network:

Rule 1: Each user has access only to his/her properties:

Applicable participant: User
Applicable resource: Property
Rule 2: All users can run all the transactions:

Applicable participant: User
Applicable resource:  Transaction
Rule 3: The participants can view the system:

Applicable participant: Participant
Applicable resource: Composer system
Rule 4: The Network Admin User has access to all the resources:

Applicable participant: Network Admin User
Applicable resource: All participants and assets
Rule 5: The Network Admin System has access to all the resources:

Applicable participant: Network Admin System
Applicable resource: All participants and assets