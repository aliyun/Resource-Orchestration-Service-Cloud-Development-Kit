package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `HoneypotProbe`.
type IHoneypotProbe interface {
	alicloudroscdkcore.IResource
	// Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.
	AttrArp() interface{}
	// Attribute ControlNodeId: The ID of the management node.
	AttrControlNodeId() interface{}
	// Attribute DisplayName: The name of the probe.
	AttrDisplayName() interface{}
	// Attribute HoneypotBindList: The configuration of the probe.
	AttrHoneypotBindList() interface{}
	// Attribute HoneypotProbeId: The ID of the probe.
	AttrHoneypotProbeId() interface{}
	// Attribute Ping: Specifies whether to enable ping scan.
	AttrPing() interface{}
	// Attribute ProbeType: The type of the probe.
	AttrProbeType() interface{}
	// Attribute ProbeVersion: The version of the probe.
	AttrProbeVersion() interface{}
	// Attribute ServiceIpList: Listen to the IP address list.
	AttrServiceIpList() interface{}
	// Attribute Uuid: The UUID of the instance.
	AttrUuid() interface{}
	// Attribute VpcId: The ID of the VPC.
	AttrVpcId() interface{}
	Props() *HoneypotProbeProps
}

// The jsii proxy for IHoneypotProbe
type jsiiProxy_IHoneypotProbe struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHoneypotProbe) AttrArp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) AttrControlNodeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrControlNodeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) AttrDisplayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisplayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) AttrHoneypotBindList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHoneypotBindList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) AttrHoneypotProbeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHoneypotProbeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) AttrPing() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPing",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) AttrProbeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProbeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) AttrProbeVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProbeVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) AttrServiceIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) AttrUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHoneypotProbe) Props() *HoneypotProbeProps {
	var returns *HoneypotProbeProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

