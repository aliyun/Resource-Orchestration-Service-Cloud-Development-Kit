package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `AnycastEipAddress`.
type IAnycastEipAddress interface {
	alicloudroscdkcore.IResource
	// Attribute AliUid: The ID of the account to which the Anycast EIP belongs.
	AttrAliUid() interface{}
	// Attribute AnycastEipAddressName: The name of the Anycast EIP.
	AttrAnycastEipAddressName() interface{}
	// Attribute AnycastId: The ID of the Anycast EIP.
	AttrAnycastId() interface{}
	// Attribute Bandwidth: The maximum bandwidth of the Anycast EIP.
	//
	// Unit: Mbit/s.
	AttrBandwidth() interface{}
	// Attribute Bid: The BID of the account to which the Anycast EIP belongs.
	AttrBid() interface{}
	// Attribute CreateTime: The point in time at which the Anycast EIP was created.
	//
	// The time follows the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrCreateTime() interface{}
	// Attribute InternetChargeType: The billing method of the Anycast EIP.
	//
	// Only PostPaid may be returned, which indicates the pay-as-you-go billing method.
	AttrInternetChargeType() interface{}
	// Attribute IpAddress: The IP address of the Anycast EIP.
	AttrIpAddress() interface{}
	// Attribute PaymentType: The billing method of the Anycast EIP.
	AttrPaymentType() interface{}
	// Attribute ServiceLocation: The access area of the Anycast EIP.
	//
	// Only international may be returned, which indicates the areas outside the Chinese mainland.
	AttrServiceLocation() interface{}
	// Attribute Status: The status of the Anycast EIP.
	//
	// Valid values:
	// Associating
	// Unassociating
	// Allocated
	// Associated
	// Modifying
	// Releasing
	// Released.
	AttrStatus() interface{}
	// Attribute Tags: The tags of the EIP.
	AttrTags() interface{}
	Props() *AnycastEipAddressProps
}

// The jsii proxy for IAnycastEipAddress
type jsiiProxy_IAnycastEipAddress struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAnycastEipAddress) AttrAliUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAliUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrAnycastEipAddressName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAnycastEipAddressName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrAnycastId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAnycastId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrBid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrInternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrServiceLocation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceLocation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEipAddress) Props() *AnycastEipAddressProps {
	var returns *AnycastEipAddressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

