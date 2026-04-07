package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `HoneypotNode`.
type IHoneypotNode interface {
	alicloudroscdkcore.IResource
	// Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.
	AttrAllowHoneypotAccessInternet() interface{}
	// Attribute AvailableProbeNum: The number of available probes.
	AttrAvailableProbeNum() interface{}
	// Attribute CreateTime: The time when the management node was created.
	AttrCreateTime() interface{}
	// Attribute NodeId: Honeypot management node id.
	AttrNodeId() interface{}
	// Attribute NodeName: The name of the management node.
	AttrNodeName() interface{}
	// Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.
	AttrSecurityGroupProbeIpList() interface{}
	Props() *HoneypotNodeProps
}

// The jsii proxy for IHoneypotNode
type jsiiProxy_IHoneypotNode struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHoneypotNode) AttrAllowHoneypotAccessInternet() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllowHoneypotAccessInternet",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotNode) AttrAvailableProbeNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAvailableProbeNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotNode) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotNode) AttrNodeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotNode) AttrNodeName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotNode) AttrSecurityGroupProbeIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupProbeIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotNode) Props() *HoneypotNodeProps {
	var returns *HoneypotNodeProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

