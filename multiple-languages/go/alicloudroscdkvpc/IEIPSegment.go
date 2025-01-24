package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `EIPSegment`.
type IEIPSegment interface {
	alicloudroscdkcore.IResource
	// Attribute EipAddresses: List of EIP addresses.
	//
	// like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
	AttrEipAddresses() interface{}
	// Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.
	AttrEipSegmentInstanceId() interface{}
	Props() *EIPSegmentProps
}

// The jsii proxy for IEIPSegment
type jsiiProxy_IEIPSegment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEIPSegment) AttrEipAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEipAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEIPSegment) AttrEipSegmentInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEipSegmentInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEIPSegment) Props() *EIPSegmentProps {
	var returns *EIPSegmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

