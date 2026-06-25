public class FinancialForecast{



    public static double predictFutureValue( double currentValue,double growthRate,int years){
            
            if(years==0){
                return currentValue;
            }
            else{
                return predictFutureValue(currentValue*(growthRate+1),growthRate,years-1);
            }
    }
    public static void main(String[] args) {

        double result =
                predictFutureValue(10000, 0.10, 3);

        System.out.println(result);
    }
}