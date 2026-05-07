package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `DBResourceGroup`.
type IDBResourceGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ResourceGroupConfig: Resource group configuration.
	AttrResourceGroupConfig() interface{}
	// Attribute ResourceGroupName: Resource group name.
	AttrResourceGroupName() interface{}
	Props() *DBResourceGroupProps
}

// The jsii proxy for IDBResourceGroup
type jsiiProxy_IDBResourceGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBResourceGroup) AttrResourceGroupConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBResourceGroup) AttrResourceGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBResourceGroup) Props() *DBResourceGroupProps {
	var returns *DBResourceGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

