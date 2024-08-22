package datasource


// Properties for defining a `RosPatchBaseline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
type RosPatchBaselineProps struct {
	PatchBaselineName interface{} `field:"required" json:"patchBaselineName" yaml:"patchBaselineName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

