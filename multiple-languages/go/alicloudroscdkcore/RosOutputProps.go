package alicloudroscdkcore


type RosOutputProps struct {
	// The value of the property returned by Resource Orchestration Service.
	//
	// The value of an output can include literals, parameter references, pseudo-parameters,
	// a mapping value, or intrinsic functions.
	Value interface{} `field:"required" json:"value" yaml:"value"`
	// A condition to associate with this output value.
	//
	// If the condition evaluates
	// to `false`, this output value will not be included in the stack.
	Condition RosCondition `field:"optional" json:"condition" yaml:"condition"`
	// A String type that describes the output value.
	//
	// The description can be a maximum of 4 K in length.
	Description *string `field:"optional" json:"description" yaml:"description"`
	// The name used to export the value of this output across stacks.
	//
	// To import the value from another stack, use `Fn.importValue(exportName)`.
	ExportName *string `field:"optional" json:"exportName" yaml:"exportName"`
}

