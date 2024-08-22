package alicloudroscdkoos


// Properties for defining a `PatchBaseline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline
type PatchBaselineProps struct {
	// Property approvalRules: The rules of scanning and installing patches for the specified operating system.
	ApprovalRules interface{} `field:"required" json:"approvalRules" yaml:"approvalRules"`
	// Property operationSystem: The type of the operating system.
	OperationSystem interface{} `field:"required" json:"operationSystem" yaml:"operationSystem"`
	// Property patchBaselineName: The name of the patch baseline.
	PatchBaselineName interface{} `field:"required" json:"patchBaselineName" yaml:"patchBaselineName"`
	// Property approvedPatches: Approved patch list.
	ApprovedPatches interface{} `field:"optional" json:"approvedPatches" yaml:"approvedPatches"`
	// Property approvedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
	ApprovedPatchesEnableNonSecurity interface{} `field:"optional" json:"approvedPatchesEnableNonSecurity" yaml:"approvedPatchesEnableNonSecurity"`
	// Property description: The description of the patch baseline.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property rejectedPatches: Rejected patch list.
	RejectedPatches interface{} `field:"optional" json:"rejectedPatches" yaml:"rejectedPatches"`
	// Property rejectedPatchesAction: The operation of rejecting the patch.
	RejectedPatchesAction interface{} `field:"optional" json:"rejectedPatchesAction" yaml:"rejectedPatchesAction"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property sources: Patch source configuration list.
	Sources interface{} `field:"optional" json:"sources" yaml:"sources"`
	// Property tags: Tags of patch baseline.
	Tags *[]*RosPatchBaseline_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

