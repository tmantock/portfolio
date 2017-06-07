package main

import "fmt"

func main() {
	n := 0
	// XOR operator returns a one for which for the either of the corresponding bits, but not both are ones.
	// 11000011
	// 11110110
	// =
	// 00110101
	x := 3124 ^ 4234

	fmt.Printf("0%b \n", 3124)
	fmt.Printf("%b \n", 4234)
	fmt.Printf("%b \n\n\n", x)

	for x != 0 {
		fmt.Printf("%b \n", x)
		x &= x - 1
		n++
	}

	fmt.Printf("%b \n", x)
}
