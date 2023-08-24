Feature: Sign up and Log in
    Background: Launch URL
        Given I launch Automation Exercise URL
    Scenario: Sign Up in Automation Exercise
        When I fill in New User Sign up Form 'TestFirstName1 TestLastName1' 'testemail@email.com'
        Then I see Enter Account Information Form
        When I fill Enter Account Information Form 't3stp@ssw0rd234'
        And I fill Address Information Form 'TestFirstName1' 'TestLastName1' '123 Block, Street A' 'Australia' 'NSW' 'Sydney' '1234' '098765432'
        Then I see Account Created
    Scenario: Log In - Automation Exercise
        When I log in as 'testemail@email.com' 't3stp@ssw0rd234'
        Then I see Automation Exercise Homepage
        When I logout
        Then I see Automation Exercise Page
