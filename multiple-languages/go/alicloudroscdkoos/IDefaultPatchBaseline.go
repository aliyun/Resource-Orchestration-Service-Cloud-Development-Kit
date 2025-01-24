package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `DefaultPatchBaseline`.
type IDefaultPatchBaseline interface {
	alicloudroscdkcore.IResource
	// Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
	AttrApprovalRules() interface{}
	// Attribute CreatedBy: The creator of the patch baseline.
	AttrCreatedBy() interface{}
	// Attribute CreatedDate: The time when the patch baseline was created.
	AttrCreatedDate() interface{}
	// Attribute Description: The description of the patch baseline.
	AttrDescription() interface{}
	// Attribute OperationSystem: The type of the operating system.
	AttrOperationSystem() interface{}
	// Attribute PatchBaselineId: The ID of the patch baseline.
	AttrPatchBaselineId() interface{}
	// Attribute PatchBaselineName: The name of the patch baseline.
	AttrPatchBaselineName() interface{}
	// Attribute ShareType: The share type of the patch baseline.
	AttrShareType() interface{}
	// Attribute UpdatedBy: The user who last modified the patch baseline.
	AttrUpdatedBy() interface{}
	// Attribute UpdatedDate: The time when the patch baseline was last modified.
	AttrUpdatedDate() interface{}
	Props() *DefaultPatchBaselineProps
}

// The jsii proxy for IDefaultPatchBaseline
type jsiiProxy_IDefaultPatchBaseline struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDefaultPatchBaseline) AttrApprovalRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApprovalRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDefaultPatchBaseline) AttrCreatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDefaultPatchBaseline) AttrCreatedDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDefaultPatchBaseline) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDefaultPatchBaseline) AttrOperationSystem() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperationSystem",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDefaultPatchBaseline) AttrPatchBaselineId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPatchBaselineId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDefaultPatchBaseline) AttrPatchBaselineName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPatchBaselineName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDefaultPatchBaseline) AttrShareType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrShareType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDefaultPatchBaseline) AttrUpdatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDefaultPatchBaseline) AttrUpdatedDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDefaultPatchBaseline) Props() *DefaultPatchBaselineProps {
	var returns *DefaultPatchBaselineProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

