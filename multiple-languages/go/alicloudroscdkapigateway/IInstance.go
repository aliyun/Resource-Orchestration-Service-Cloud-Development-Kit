package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute EgressIpv6Enable: Whether enable egress IPV6.
	AttrEgressIpv6Enable() interface{}
	// Attribute InstanceId: Instance ID.
	AttrInstanceId() interface{}
	// Attribute InstanceType: Instance type.
	AttrInstanceType() interface{}
	// Attribute InternetEgressAddress: Internet egress dddress.
	AttrInternetEgressAddress() interface{}
	// Attribute SupportIpv6: Whether support IPV6.
	AttrSupportIpv6() interface{}
	// Attribute VpcEgressAddress: VPC network egress address.
	AttrVpcEgressAddress() interface{}
	// Attribute VpcIntranetEnable: Whether enable VPC intranet.
	AttrVpcIntranetEnable() interface{}
	// Attribute VpcSlbIntranetEnable: Whether enable VPC SLB intranet.
	AttrVpcSlbIntranetEnable() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEgressIpv6Enable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEgressIpv6Enable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInternetEgressAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetEgressAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSupportIpv6() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupportIpv6",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcEgressAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcEgressAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcIntranetEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcIntranetEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcSlbIntranetEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcSlbIntranetEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

