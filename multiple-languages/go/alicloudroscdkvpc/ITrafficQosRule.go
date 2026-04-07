package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `TrafficQosRule`.
type ITrafficQosRule interface {
	alicloudroscdkcore.IResource
	// Attribute DstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
	AttrDstCidr() interface{}
	// Attribute DstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
	AttrDstIpv6Cidr() interface{}
	// Attribute DstPortRange: QoS rule traffic matches the destination port number range.
	//
	// Value range: **0** to **65535**. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types.
	AttrDstPortRange() interface{}
	// Attribute MatchDscp: The DSCP value of the traffic matched by the QoS rule.
	//
	// Value range: **0** to **63**. If not, the value is -1.
	AttrMatchDscp() interface{}
	// Attribute Priority: QoS rule priority.
	//
	// Value range: **1** to **9000**. The larger the number, the higher the priority. The priority of a QoS rule cannot be repeated in the same QoS policy.
	AttrPriority() interface{}
	// Attribute Protocol: QoS rule protocol type.
	AttrProtocol() interface{}
	// Attribute QosId: The QoS policy ID.
	AttrQosId() interface{}
	// Attribute QueueId: The QoS queue ID.
	AttrQueueId() interface{}
	// Attribute RemarkingDscp: Modify The DSCP value in the flow.
	//
	// Value range: **0** to **63**. If the value is not modified, the value is -1.
	AttrRemarkingDscp() interface{}
	// Attribute RuleDescription: The description of the QoS rule.
	AttrRuleDescription() interface{}
	// Attribute RuleId: The ID of the QoS rule.
	AttrRuleId() interface{}
	// Attribute RuleName: The name of the QoS rule.
	AttrRuleName() interface{}
	// Attribute SrcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
	AttrSrcCidr() interface{}
	// Attribute SrcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
	AttrSrcIpv6Cidr() interface{}
	// Attribute SrcPortRange: The source port number of the QoS rule traffic matching.
	//
	// The value range is **0** to **65535**. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
	AttrSrcPortRange() interface{}
	Props() *TrafficQosRuleProps
}

// The jsii proxy for ITrafficQosRule
type jsiiProxy_ITrafficQosRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrafficQosRule) AttrDstCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDstCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrDstIpv6Cidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDstIpv6Cidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrDstPortRange() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDstPortRange",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrMatchDscp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMatchDscp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrPriority() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPriority",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrProtocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrQosId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQosId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrQueueId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrRemarkingDscp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemarkingDscp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrRuleDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrSrcCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSrcCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrSrcIpv6Cidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSrcIpv6Cidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) AttrSrcPortRange() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSrcPortRange",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficQosRule) Props() *TrafficQosRuleProps {
	var returns *TrafficQosRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

