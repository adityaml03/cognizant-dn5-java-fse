
-- Scenario 1


DECLARE

age_years NUMBER;


BEGIN

FOR cust IN (
    SELECT CustomerID, DOB
    FROM Customers
)
LOOP

    age_years :=
        FLOOR(MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12);

    IF age_years > 60 THEN

        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = cust.CustomerID;

    END IF;

END LOOP;

COMMIT;


END;
/



-- Scenario 2


ALTER TABLE Customers
ADD IsVIP VARCHAR2(5);

DECLARE

BEGIN


FOR cust IN (
    SELECT CustomerID, Balance
    FROM Customers
)
LOOP

    IF cust.Balance > 10000 THEN

        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = cust.CustomerID;

    END IF;

END LOOP;

COMMIT;


END;
/

-- Scenario 3

BEGIN


FOR loan IN (
    SELECT LoanID,
           CustomerID,
           EndDate
    FROM Loans
    WHERE EndDate BETWEEN SYSDATE
                      AND SYSDATE + 30
)
LOOP

    DBMS_OUTPUT.PUT_LINE(
        'Reminder: Customer '
        || loan.CustomerID
        || ' has Loan '
        || loan.LoanID
        || ' due on '
        || TO_CHAR(loan.EndDate,'DD-MON-YYYY')
    );

END LOOP;


END;
/
