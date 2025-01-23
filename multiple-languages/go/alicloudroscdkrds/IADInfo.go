package alicloudroscdkrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
)

// Represents a `ADInfo`.
type IADInfo interface {
	alicloudroscdkcore.IResource
	// Attribute ADDNS: Active directory domain name.
	AttrAddns() interface{}
	// Attribute DBInstanceId: The ID of the instance.
	AttrDbInstanceId() interface{}
	Props() *ADInfoProps
}

// The jsii proxy for IADInfo
type jsiiProxy_IADInfo struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IADInfo) AttrAddns() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddns",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IADInfo) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IADInfo) Props() *ADInfoProps {
	var returns *ADInfoProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

