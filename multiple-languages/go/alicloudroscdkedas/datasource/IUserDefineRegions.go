package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/datasource/internal"
)

// Represents a `UserDefineRegions`.
type IUserDefineRegions interface {
	alicloudroscdkcore.IResource
	// Attribute Ids: The list of user define region IDs.
	AttrIds() interface{}
	// Attribute UserDefineRegions: The list of user define regions.
	AttrUserDefineRegions() interface{}
	Props() *UserDefineRegionsProps
}

// The jsii proxy for IUserDefineRegions
type jsiiProxy_IUserDefineRegions struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserDefineRegions) AttrIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserDefineRegions) AttrUserDefineRegions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserDefineRegions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserDefineRegions) Props() *UserDefineRegionsProps {
	var returns *UserDefineRegionsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

