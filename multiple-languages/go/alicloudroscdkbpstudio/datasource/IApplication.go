package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbpstudio/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Application`.
type IApplication interface {
	alicloudroscdkcore.IResource
	// Attribute ApplicationId: The first ID of the resource.
	AttrApplicationId() interface{}
	// Attribute ApplicationName: Application name.
	AttrApplicationName() interface{}
	// Attribute ImageUrl: The Picture in the OSS Storage Address.
	AttrImageUrl() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the resource belongs.
	AttrResourceGroupId() interface{}
	// Attribute Status: The status of the resource.
	AttrStatus() interface{}
	Props() *ApplicationProps
}

// The jsii proxy for IApplication
type jsiiProxy_IApplication struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplication) AttrApplicationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApplicationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplication) AttrApplicationName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApplicationName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplication) AttrImageUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplication) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplication) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplication) Props() *ApplicationProps {
	var returns *ApplicationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

