package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkafka/datasource/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
	AttrAllConfig() interface{}
	// Attribute AllowedList: White list.
	AttrAllowedList() interface{}
	// Attribute CreateTime: Creation time.
	AttrCreateTime() interface{}
	// Attribute DeployType: Deployment method.
	AttrDeployType() interface{}
	// Attribute DiskSize: Disk size.
	AttrDiskSize() interface{}
	// Attribute DiskType: Disk type.
	AttrDiskType() interface{}
	// Attribute DomainEndpoint: The domain name access point of the default access point.
	//
	// The Kafka instance supports domain name access points and IP access points.
	AttrDomainEndpoint() interface{}
	// Attribute EipMax: Peak public network traffic.
	AttrEipMax() interface{}
	// Attribute EndPoint: Access point.
	AttrEndPoint() interface{}
	// Attribute ExpiredTime: Expiration time.
	AttrExpiredTime() interface{}
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	// Attribute InstanceName: Note name.
	AttrInstanceName() interface{}
	// Attribute IoMax: Peak flow.
	AttrIoMax() interface{}
	// Attribute IoMaxSpec: Flow specifications (recommended).
	AttrIoMaxSpec() interface{}
	// Attribute MsgRetain: Message save time.
	AttrMsgRetain() interface{}
	// Attribute PaymentType: The paymen type of the resource.
	AttrPaymentType() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SaslDomainEndpoint: The domain name access point of the SASL access point.
	//
	// The Kafka instance supports domain name access points and IP access points.
	AttrSaslDomainEndpoint() interface{}
	// Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue.
	//
	// The value is 0.10.2 or 2.2.0.
	AttrServiceVersion() interface{}
	// Attribute SpecType: Instance type.
	AttrSpecType() interface{}
	// Attribute SslDomainEndpoint: The domain name of the SSL access point.
	//
	// The Kafka instance supports domain name access points and IP access points.
	AttrSslDomainEndpoint() interface{}
	// Attribute SslEndPoint: External access point.
	AttrSslEndPoint() interface{}
	// Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
	AttrTags() interface{}
	// Attribute TopicNumLimit: Maximum number of topic creation.
	AttrTopicNumLimit() interface{}
	// Attribute VpcId: VpcId.
	AttrVpcId() interface{}
	// Attribute VSwitchId: Switch id.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: The ID of the zone in which the instance is deployed.
	AttrZoneId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrAllConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrAllowedList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllowedList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDeployType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeployType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDiskType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDomainEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEipMax() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEipMax",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEndPoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndPoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
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

func (j *jsiiProxy_IInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrIoMax() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIoMax",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrIoMaxSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIoMaxSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrMsgRetain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMsgRetain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSaslDomainEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSaslDomainEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrServiceVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSpecType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpecType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSslDomainEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslDomainEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSslEndPoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslEndPoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrTopicNumLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopicNumLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
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

