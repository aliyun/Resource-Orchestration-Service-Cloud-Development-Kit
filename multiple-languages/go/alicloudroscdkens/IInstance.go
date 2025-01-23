package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
	AttrAutoRenew() interface{}
	// Attribute AutoRenewPeriod: The time period of auto renew.
	//
	// it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
	AttrAutoRenewPeriod() interface{}
	// Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB.
	//
	// If you specify with your own image, make sure the system disk size bigger than image size.
	AttrDataDiskSize() interface{}
	// Attribute EnsRegionId: ENS Region Id.
	AttrEnsRegionId() interface{}
	// Attribute HostName: The hostname of the instance.
	AttrHostName() interface{}
	// Attribute ImageId: Image ID to create ens instance.
	AttrImageId() interface{}
	// Attribute InstanceId: InstanceId.
	AttrInstanceId() interface{}
	// Attribute InstanceName: Instance name.
	AttrInstanceName() interface{}
	// Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.
	AttrInstanceType() interface{}
	// Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
	AttrInternetChargeType() interface{}
	// Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
	AttrIpType() interface{}
	// Attribute KeyPairName: SSH key pair name.
	AttrKeyPairName() interface{}
	// Attribute PaymentType: Payment Type.only support value Subscription.
	AttrPaymentType() interface{}
	// Attribute Period: Prepaid time period.
	//
	// Unit is month, it could be from 1 to 9 or 12. Default value is 1.
	AttrPeriod() interface{}
	// Attribute PrivateIpAddress: Private IP for the instance created.
	AttrPrivateIpAddress() interface{}
	// Attribute PrivateIps: Private IP.
	AttrPrivateIps() interface{}
	// Attribute PublicIps: Public IP.
	AttrPublicIps() interface{}
	// Attribute Quantity: number of instances to create.
	AttrQuantity() interface{}
	// Attribute SystemDiskSize: Disk size of the system disk.
	AttrSystemDiskSize() interface{}
	// Attribute UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.
	//
	// The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
	AttrUniqueSuffix() interface{}
	// Attribute UserData: User data to pass to instance.
	//
	// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
	AttrUserData() interface{}
	// Attribute VSwitchId: The vSwitch Id to create ens instance.
	AttrVSwitchId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrAutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrAutoRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDataDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataDiskSize",
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

func (j *jsiiProxy_IInstance) AttrInternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrIpType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrKeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyPairName",
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

func (j *jsiiProxy_IInstance) AttrPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeriod",
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

func (j *jsiiProxy_IInstance) AttrPrivateIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPublicIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrQuantity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQuantity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSystemDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSystemDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrUniqueSuffix() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUniqueSuffix",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrUserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserData",
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

