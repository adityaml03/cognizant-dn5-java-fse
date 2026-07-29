
-- Scenario 1
-- Process Monthly Interest

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN


UPDATE Accounts
SET Balance = Balance * 1.01
WHERE AccountType = 'Savings';

COMMIT;


END;
/



BEGIN
ProcessMonthlyInterest;
END;
/



-- Scenario 2
-- Update Employee Bonus

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(

p_department IN VARCHAR2,
p_bonus IN NUMBER


)
AS
BEGIN


UPDATE Employees
SET Salary = Salary * (1 + p_bonus / 100)
WHERE Department = p_department;

COMMIT;

END;
/


BEGIN
UpdateEmployeeBonus('HR',10);
END;
/

-- Scenario 3
-- Transfer Funds

CREATE OR REPLACE PROCEDURE TransferFunds(


p_fromAccount IN NUMBER,
p_toAccount IN NUMBER,
p_amount IN NUMBER


)
AS


v_balance NUMBER;


BEGIN


SELECT Balance
INTO v_balance
FROM Accounts
WHERE AccountID = p_fromAccount;

IF v_balance >= p_amount THEN

    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_fromAccount;

    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_toAccount;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Transfer Successful');

ELSE

    DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

END IF;


END;
/


BEGIN
TransferFunds(1,2,200);
END;
/
