package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/datasource/internal"
)

// Represents a `PatchBaseline`.
type IPatchBaseline interface {
	alicloudroscdkcore.IResource
	// Attribute ApprovalRules: Accept the rules.
	AttrApprovalRules() interface{}
	// Attribute ApprovedPatches: Approved patch list.
	AttrApprovedPatches() interface{}
	// Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
	AttrApprovedPatchesEnableNonSecurity() interface{}
	// Attribute CreatedBy: Patch baseline creator.
	AttrCreatedBy() interface{}
	// Attribute CreateTime: Creation time.
	AttrCreateTime() interface{}
	// Attribute Description: Patches baseline description information.
	AttrDescription() interface{}
	// Attribute IsDefault: Whether it is the default patch baseline.
	AttrIsDefault() interface{}
	// Attribute OperationSystem: Operating system type.
	AttrOperationSystem() interface{}
	// Attribute PatchBaselineId: Patch baseline ID.
	AttrPatchBaselineId() interface{}
	// Attribute PatchBaselineName: The name of the patch baseline.
	AttrPatchBaselineName() interface{}
	// Attribute RejectedPatches: Reject the name of the patch.
	AttrRejectedPatches() interface{}
	// Attribute RejectedPatchesAction: The operation of rejecting the patch.
	AttrRejectedPatchesAction() interface{}
	// Attribute ResourceGroupId: Approve whether the patch includes updates other than security.
	AttrResourceGroupId() interface{}
	// Attribute ShareType: Patch baseline sharing type.
	AttrShareType() interface{}
	// Attribute Sources: Patch source configuration list.
	AttrSources() interface{}
	// Attribute Tags: Tags of patch baseline.
	AttrTags() interface{}
	// Attribute UpdatedBy: Patch baseline updater.
	AttrUpdatedBy() interface{}
	// Attribute UpdatedDate: Update time.
	AttrUpdatedDate() interface{}
	Props() *PatchBaselineProps
}

// The jsii proxy for IPatchBaseline
type jsiiProxy_IPatchBaseline struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPatchBaseline) AttrApprovalRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApprovalRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrApprovedPatches() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApprovedPatches",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrApprovedPatchesEnableNonSecurity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApprovedPatchesEnableNonSecurity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrCreatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrIsDefault() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsDefault",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrOperationSystem() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperationSystem",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrPatchBaselineId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPatchBaselineId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrPatchBaselineName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPatchBaselineName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrRejectedPatches() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRejectedPatches",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrRejectedPatchesAction() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRejectedPatchesAction",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrShareType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrShareType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrSources() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSources",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrUpdatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) AttrUpdatedDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPatchBaseline) Props() *PatchBaselineProps {
	var returns *PatchBaselineProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

