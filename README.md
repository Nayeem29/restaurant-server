# restaurant-management-server

**This is backend for restaurant management app. There is Three models: User, Cart and Menu**

### User
- User have multiple role: Admin, User
- JWT token is implemented, API is secured by this token
- Admin API is secured by Admin middleware
- User can signup and Admin can login
- Admin can make other user Admin

### Cart
- Cart is used by user
- User can add, remove and update their cart
- User can see their cart by matching the email

### Menu
- All the menu can be seen by users
- Only Admin can add, remove and update the menu items.