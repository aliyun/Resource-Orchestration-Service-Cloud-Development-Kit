package datasource


// Properties for defining a `PatchBaseline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
type PatchBaselineProps struct {
	// Property patchBaselineName: The name of the patch baseline.
	PatchBaselineName interface{} `field:"required" json:"patchBaselineName" yaml:"patchBaselineName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

