package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `IpSets`.
type IIpSets interface {
	alicloudroscdkcore.IResource
	// Attribute AccelerateRegionIds: The ID list of the accelerate region.
	AttrAccelerateRegionIds() interface{}
	// Attribute IpSetIds: The ID list of the ip set.
	AttrIpSetIds() interface{}
	// Attribute IpVersions: The IP version list of the accelerate region.
	AttrIpVersions() interface{}
	Props() *IpSetsProps
}

// The jsii proxy for IIpSets
type jsiiProxy_IIpSets struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpSets) AttrAccelerateRegionIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccelerateRegionIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpSets) AttrIpSetIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpSetIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpSets) AttrIpVersions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpVersions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpSets) Props() *IpSetsProps {
	var returns *IpSetsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

