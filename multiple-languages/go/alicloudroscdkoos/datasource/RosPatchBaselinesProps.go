package datasource


// Properties for defining a `RosPatchBaselines`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
type RosPatchBaselinesProps struct {
	OperationSystem interface{} `field:"optional" json:"operationSystem" yaml:"operationSystem"`
	PatchBaselineName interface{} `field:"optional" json:"patchBaselineName" yaml:"patchBaselineName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ShareType interface{} `field:"optional" json:"shareType" yaml:"shareType"`
}

