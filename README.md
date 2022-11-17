
# Assignment 
-----------------------------------------------------------------------------
You've recently started working as a QA Engineer on the 'Luma' team. The development team has finished building out the functionality for the 'Luma' e-commerce site (https://magento.softwaretestingboard.com/) and you and your fellow QA now have the task of creating an automation suite to test some of the workflows of the application. The QA manager has assigned you the following tasks:
Develop an automation suite that covers the following workflows:
 Authentication
SignUp (20 marks)
Adding a Product to your Cart (10 marks)
Purchasing a Product (10 marks)
 Verify Purchase in Order History (10 marks)
2. The QA manager would like for you to consider the following things during your implementation:
 Unhappy Path (5 marks)
 Data-Driven Tests (10 marks)
 Testing on multiple browsers (10 marks)

Total: 75 points

----------------------------------
## This would assume that one has webdriver io already installed and set.
## IF not follow the instructions to download and configure webdriver io.

-------------------------------

### Clone the branch and run 
```bash
npm i
```
#  How to run the tests
## In order to run the tests individually you need to follow the following:
##     1.) The Sign Up Test

```bash
npm run authentication_test
```
##     2.) Adding Item to a cart and purchasing a product 

```bash
npm run cart_test
```
## 3) Verify Purchase in the purchase history 

```bash
npm run verify_purchase_history
```



Your completed suite should be pushed to a remote GitHub repository and the link shared. It should include: Test Scripts and a Readme file with instructions on how to execute your tests
