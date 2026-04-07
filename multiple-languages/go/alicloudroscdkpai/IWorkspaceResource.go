package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `WorkspaceResource`.
type IWorkspaceResource interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: Create UTC time in ISO8601 format.
	AttrCreateTime() interface{}
	// Attribute EnvType: Environment type, possible values:.
	AttrEnvType() interface{}
	// Attribute GroupName: Resource group name.
	//
	// If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
	AttrGroupName() interface{}
	// Attribute IsDefault: Whether it is the default resource, each resource type has a default resource.
	AttrIsDefault() interface{}
	// Attribute ResourceId: The resource ID.
	AttrResourceId() interface{}
	// Attribute ResourceType: Resource type, possible values:.
	AttrResourceType() interface{}
	// Attribute Spec: Resource configuration, required for public resource groups of DLC, enter the content.
	AttrSpec() interface{}
	// Attribute WorkspaceId: The ID of the workspace to which the workspace belongs.
	AttrWorkspaceId() interface{}
	// Attribute WorkspaceResourceName: The resource name.
	AttrWorkspaceResourceName() interface{}
	Props() *WorkspaceResourceProps
}

// The jsii proxy for IWorkspaceResource
type jsiiProxy_IWorkspaceResource struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWorkspaceResource) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResource) AttrEnvType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResource) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResource) AttrIsDefault() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsDefault",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResource) AttrResourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResource) AttrResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResource) AttrSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResource) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResource) AttrWorkspaceResourceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceResourceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResource) Props() *WorkspaceResourceProps {
	var returns *WorkspaceResourceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

