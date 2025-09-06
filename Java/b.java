import java.util.*;
public class b {

    public static int sumkpairs(int arr[] , int n , int k){
    HashMap<Integer , Integer> hash = new HashMap<>();
    int count =0;
    for(int i =0;i<n;i++){
        if(hash.containsKey(k - arr[i])){
            count += hash.get(k-arr[i]);
        }
        if(hash.containsKey(arr[i])){
            hash.put(arr[i] , hash.get(arr[i])+1);
        }
        else{
            hash.put(arr[i] , 1);
        }
    }
    return count;
}
  
    public static void main(String[] args) {
        int n = 4;
        int k =6;
        int arr[] = {1 , 5, 7, 1};
        System.out.println(sumkpairs(arr, n, k));
    }
}
