package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `DhcpOptionsSet`.
type IDhcpOptionsSet interface {
	alicloudroscdkcore.IResource
	// Attribute DhcpOptionsSetId: The ID of the DHCP options set that is created.
	AttrDhcpOptionsSetId() interface{}
	Props() *DhcpOptionsSetProps
}

// The jsii proxy for IDhcpOptionsSet
type jsiiProxy_IDhcpOptionsSet struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDhcpOptionsSet) AttrDhcpOptionsSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDhcpOptionsSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDhcpOptionsSet) Props() *DhcpOptionsSetProps {
	var returns *DhcpOptionsSetProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

