package alicloudroscdkoos


// Properties for defining a `RosPatchBaseline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline
type RosPatchBaselineProps struct {
	ApprovalRules interface{} `field:"required" json:"approvalRules" yaml:"approvalRules"`
	OperationSystem interface{} `field:"required" json:"operationSystem" yaml:"operationSystem"`
	PatchBaselineName interface{} `field:"required" json:"patchBaselineName" yaml:"patchBaselineName"`
	ApprovedPatches interface{} `field:"optional" json:"approvedPatches" yaml:"approvedPatches"`
	ApprovedPatchesEnableNonSecurity interface{} `field:"optional" json:"approvedPatchesEnableNonSecurity" yaml:"approvedPatchesEnableNonSecurity"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	RejectedPatches interface{} `field:"optional" json:"rejectedPatches" yaml:"rejectedPatches"`
	RejectedPatchesAction interface{} `field:"optional" json:"rejectedPatchesAction" yaml:"rejectedPatchesAction"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Sources interface{} `field:"optional" json:"sources" yaml:"sources"`
	Tags *[]*RosPatchBaseline_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

