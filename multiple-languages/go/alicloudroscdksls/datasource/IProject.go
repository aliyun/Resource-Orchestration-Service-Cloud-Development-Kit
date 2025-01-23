package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/datasource/internal"
)

// Represents a `Project`.
type IProject interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time at which the project was created.
	AttrCreateTime() interface{}
	// Attribute DataRedundancyType: Data redundancy type.
	AttrDataRedundancyType() interface{}
	// Attribute Description: The description of the project.
	AttrDescription() interface{}
	// Attribute LastModifyTime: The time at which the project was last modified.
	AttrLastModifyTime() interface{}
	// Attribute Owner: The ID of the Alibaba Cloud account that is used to create the project.
	AttrOwner() interface{}
	// Attribute ProjectName: The name of the project.
	AttrProjectName() interface{}
	// Attribute Quota: Project quota.
	AttrQuota() interface{}
	// Attribute Region: The region to which the project belongs.
	AttrRegion() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the project belongs.
	AttrResourceGroupId() interface{}
	// Attribute Status: The status of the project.
	AttrStatus() interface{}
	Props() *ProjectProps
}

// The jsii proxy for IProject
type jsiiProxy_IProject struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProject) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrDataRedundancyType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataRedundancyType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrLastModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrOwner() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOwner",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrQuota() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQuota",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) Props() *ProjectProps {
	var returns *ProjectProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

