package alicloudroscdkros


// Properties for defining a `Assert`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-assert
type AssertProps struct {
	// Property values: A list of values to assert.
	//
	// The items in the list are compared in order. The range of length is one to three.
	// - Three values are supported only if the operation is Equal or NotEqual.
	// - One value is supported only if the operation is Not.
	Values interface{} `field:"required" json:"values" yaml:"values"`
	// Property abortCreation: Whether to abort creation when the assert fails.
	//
	// Default is True.
	AbortCreation interface{} `field:"optional" json:"abortCreation" yaml:"abortCreation"`
	// Property errorMessage: The error message to be returned when the assert fails.
	ErrorMessage interface{} `field:"optional" json:"errorMessage" yaml:"errorMessage"`
	// Property operation: The type of assertion to make.
	//
	// The supported operations are:
	// Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, Contain, NotContain, And, Or, Not.
	// Default is Equal.
	Operation interface{} `field:"optional" json:"operation" yaml:"operation"`
}

