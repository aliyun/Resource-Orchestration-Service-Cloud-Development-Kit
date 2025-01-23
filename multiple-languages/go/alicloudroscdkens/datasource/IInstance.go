package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/datasource/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute DataDisk: Data disk specifications.
	AttrDataDisk() interface{}
	// Attribute EnsRegionId: The node ID.
	//
	// When ScheduleAreaLevel is Region, EnsRegionId is required. When ScheduleAreaLevel is Big,Middle,Small, EnsRegionId is invalid.
	AttrEnsRegionId() interface{}
	// Attribute HostName: The hostname of the instance.
	AttrHostName() interface{}
	// Attribute ImageId: The ID of the image.
	AttrImageId() interface{}
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	// Attribute InstanceName: The instance name.
	//
	// Example value: test-InstanceName. It must be 2 to 128 characters in length and must start with an uppercase or lowercase letter or a Chinese character. It cannot start with http:// or https. Can contain Chinese, English, numbers, half-width colons (:), underscores (_), periods (.
	AttrInstanceName() interface{}
	// Attribute InstanceType: The specification of the instance.
	//
	// Example value: ens.sn1.
	AttrInstanceType() interface{}
	// Attribute InternetMaxBandwidthOut: Maximum public network bandwidth.
	//
	// The field type is Long, and the precision may be lost during serialization/deserialization.
	AttrInternetMaxBandwidthOut() interface{}
	// Attribute NetworkId: The ID of the network.
	AttrNetworkId() interface{}
	// Attribute PaymentType: Instance payment method.
	AttrPaymentType() interface{}
	// Attribute PrivateIpAddress: The private IP address.
	//
	// Can only be used for node-level scheduling. If a private IP address is specified, the number of instances can only be one, and both the private IP address and the vSwitch ID are not empty, the private IP address takes effect.
	AttrPrivateIpAddress() interface{}
	// Attribute SecurityId: ID of the security group to which the instance belongs.
	AttrSecurityId() interface{}
	// Attribute SystemDisk: System Disk Specification.
	//
	// SystemDisk is a non-required parameter when InstanceType is x86_pm,x86_bmi,x86_bm,pc_bmi, or arm_bmi. SystemDisk is a required parameter when instanceType is other specification families.
	AttrSystemDisk() interface{}
	// Attribute VSwitchId: The ID of the vSwitch to which the instance belongs.
	AttrVSwitchId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrDataDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEnsRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnsRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrHostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
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

func (j *jsiiProxy_IInstance) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInternetMaxBandwidthOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrNetworkId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkId",
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

func (j *jsiiProxy_IInstance) AttrPrivateIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecurityId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSystemDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSystemDisk",
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

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

