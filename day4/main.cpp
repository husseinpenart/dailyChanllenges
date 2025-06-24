#include <iostream>
#include <limits>
using namespace std;

int main()
{
    int num1 = 45;
    int num2 = 534;
    int sum = num1 + num2;
    cout << "sum of numbers:" << sum << endl;
    // auto sizeType = sizeof(char);
    // auto sizeType = sizeof(int);
    // auto sizeType = sizeof(float);
    // auto sizeType = sizeof(double);
    // auto sizeType = sizeof(long);
    // auto sizeType = sizeof(bool);
    auto sizeType = sizeof(long double); 
    cout << "size of types: " << sizeType << endl;
    cout << "minimum number: " << numeric_limits<int>::min() << endl;
    cout << "maximum number: " << numeric_limits<int>::max() << endl;
    return 0;
}
