package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Apps`.
type IApps interface {
	alicloudroscdkcore.IResource
	// Attribute AppIds: The list of The ApiGateway app ids.
	AttrAppIds() interface{}
	// Attribute Apps: The information about ApiGateway apps.
	AttrApps() interface{}
	Props() *AppsProps
}

// The jsii proxy for IApps
type jsiiProxy_IApps struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApps) AttrAppIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApps) AttrApps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApps) Props() *AppsProps {
	var returns *AppsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

