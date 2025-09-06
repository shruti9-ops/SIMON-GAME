import java.util.*;
public class a{
    // 1. second largest
public static int  large( int arr[]){
    int largest = Integer.MIN_VALUE;
    int secondlargest = Integer.MIN_VALUE;
    for(int i =0;i<arr.length;i++){
        if(arr == null && arr.length <2){
            return Integer.MIN_VALUE;
        }
        if(arr[i]>largest){
            secondlargest = largest;
            largest = arr[i];
        }else if(arr[i] > secondlargest && arr[i]!= largest){
            secondlargest = arr[i];
        }
    }
    return secondlargest;
}
// 2. Merge two sorted array
public static int[] mergeSorted(int arr1[] , int arr2[]){
    // ArrayList<Integer> arr = new ArrayList<>();
    int m = arr1.length;
    int n = arr2.length;
    int newarr[]  = new int[m+n];
    int i = 0;
    int j =0;
    int k =0;
    while(i<m && j< n){
        if(arr1[i] <=arr2[j]){
            newarr[k++] = arr1[i++];
        }
        else{
            newarr[k++] = arr2[j++];
        }

    }
    while(i<m){
        newarr[k++] = arr1[i++];
    }
    while(j<n){
        newarr[k++] = arr2[i++];

    }
    return newarr;
    
}
// 3. Reverse a number
public static int reverse(int n){
    int m = n;
    int digit = 0;
    int a =0;
    while(m>0){
        a = m%10;
        digit = digit*10 + a;
        m = m/10;

    }
    return digit;

}
// 4. count the number of vowels
public static int count(String str){
    int count =0;
    for(int i = 0;i<str.length();i++){
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
            count += 1;
        }
    }
    return count;
}
// 5. Gcd of two numbers
public static int gcd(int a , int b){
    while(a%b != 0){
        int rem = a%b;
        b = a;
        a = rem;
    }
    return b;
}
// 6. Lcm of two numbers
public static int lcm(int a , int b){
    int n1 = a;
    int n2 = b;
    while(a%b != 0){
        int rem = a%b;
        b = a;
        a = rem;
    }
    int gcd = b;
    int lcm = (n1*n2)/gcd;
    return lcm;
}
//7. maximum of Arrays
public static int maximum(int arr[]){
    int n = arr.length;
    int max = Integer.MIN_VALUE;
    for(int i = 0;i<n;i++){
        
        if(arr[i]>max){
           max = arr[i];
        }
        
    }
    return max;
}
// 8.Minimum of array
public static int minimum(int arr[]){
    int n = arr.length;
    int min = Integer.MAX_VALUE;
    for(int i = 0;i<n;i++){
        
        if(arr[i]<min){
           min = arr[i];
        }
        
    }
    return min;
}
// 9.find the factorial
public static int factorial(int n){
    int facto =1;
    for(int i = 1;i<=n ;i++){
        facto *= i;
    }
    return facto;
}
// 10.find the fibonacci sequence
public static int fibo(int n){
    if(n<=1){
        return n;
    }
   return fibo(n-1)+fibo(n-2);
}
// 11.find the prime
public static void prime(int n){
    if(n==1){
        System.out.println("not prime");
    }
    int count = 1;
   for(int i =2;i<=n;i++){
    if(n%i == 0){
        count++;
    }
     
}
if(count>1){
        System.out.println("prime");
    } else{
        System.out.println("Not prime");
    }
}
// 12.find the gcd byrecursion
public static int gcdrec(int a , int b){
    if(a%b == 0){
        return b;
    }else if(b%a == 0){
        return a;
    }else{
        gcdrec(b%a , a);
    }
    return b;
}
// 13. find the factorial by rec
public static int factorev(int n){
    if(n<=1){
        return 1;
    }
    return n*factorev(n-1);
}
// 14. binarysearch
public static int  binarysearch(int arr[] , int target , int l ,int h){
    while(l<=h){
        int mid = (l+h)/2;
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid]>target){
            return binarysearch(arr, target , l , mid-1);
        }else{
           return  binarysearch(arr, target, mid+1, h);
        }
    }
    return -1;
}
// 15.bubble sort
 public static void bubblesort(int arr[]){
    for(int i =0;i<arr.length-1;i++){
        for(int j = 0;j<arr.length-i-1;j++)
        if(arr[j] <arr[j+1]){
            int t = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = t;
        }
    }
}

    public static void main(String args[]){
        int arr[] = {12 ,1,45,23,65};
        Arrays.sort(arr);
        int l = arr.length;
        System.out.println(arr[l - 2]);
        System.out.println(large(arr));
        String str = "aeriou";
       System.out.println(count(str));
       int arr2[] = {1,11,19,21 , 22,23};
       
       int[] a = mergeSorted(arr, arr2);
       for(int i =0;i<a.length;i++){
        System.out.print(a[i] + " ");
       }
       System.out.println();
    System.out.println(reverse(456));
       System.out.println(gcd(12, 24));
       System.out.println(lcm(12, 24));
       System.out.println(maximum(arr2));
       System.out.println(minimum(arr2));
       System.out.println(factorial(5));
       for(int i =0;i<5;i++){
        System.out.print(fibo(i) + " ");
       }
       prime(5);
       System.out.println(gcdrec(12 , 24));
       System.out.println(factorev(l));
  
       System.out.println(binarysearch(arr2, 22 , 0 , arr2.length-1));
        for(int i =0;i<arr2.length;i++){
            System.out.print(arr2[i] + " ");
        }
       int arr1[] = {12,32,1,34,13,54};
    bubblesort(arr1);
        System.out.println("Sorted array");
        for(int i =0;i<arr1.length;i++){
            System.out.print(arr1[i] + " ");
        }
    }
}
