package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `ResourceGroup`.
type IResourceGroup interface {
	alicloudroscdkcore.IResource
	// Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.
	AttrAccountId() interface{}
	// Attribute DisplayName: The display name of the resource group.
	AttrDisplayName() interface{}
	// Attribute Id: The ID of the resource group.
	AttrId() interface{}
	// Attribute Name: The unique identifier of the resource group.
	AttrName() interface{}
	// Attribute RegionStatuses: The status of the resource group in all regions.
	AttrRegionStatuses() interface{}
	Props() *ResourceGroupProps
}

// The jsii proxy for IResourceGroup
type jsiiProxy_IResourceGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceGroup) AttrAccountId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroup) AttrDisplayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisplayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroup) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroup) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroup) AttrRegionStatuses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRegionStatuses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroup) Props() *ResourceGroupProps {
	var returns *ResourceGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

