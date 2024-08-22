package datasource


// Properties for defining a `PatchBaselines`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
type PatchBaselinesProps struct {
	// Property operationSystem: Operating system type.
	OperationSystem interface{} `field:"optional" json:"operationSystem" yaml:"operationSystem"`
	// Property patchBaselineName: The name of the patch baseline.
	PatchBaselineName interface{} `field:"optional" json:"patchBaselineName" yaml:"patchBaselineName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property shareType: Patch baseline sharing type.
	ShareType interface{} `field:"optional" json:"shareType" yaml:"shareType"`
}

