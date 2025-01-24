package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenVbrHealthCheck`.
type ICenVbrHealthCheck interface {
	alicloudroscdkcore.IResource
	// Attribute CenId: The ID of the CEN instance.
	AttrCenId() interface{}
	// Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
	//
	// Default value: 2. Valid values: 2 to 3.  Unit: second.
	AttrHealthCheckInterval() interface{}
	// Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
	//
	// Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
	AttrHealthCheckSourceIp() interface{}
	// Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check.
	//
	// The destination IP address is the IP address of the client-facing interface on the VBR instance.
	AttrHealthCheckTargetIp() interface{}
	// Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.
	//
	// Default value: 8. Valid values: 3 to 8.  Unit: packet.
	AttrHealthyThreshold() interface{}
	// Attribute VbrInstanceId: The ID of the VBR instance.
	AttrVbrInstanceId() interface{}
	// Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
	AttrVbrInstanceOwnerId() interface{}
	// Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed.
	//
	// You can call the DescribeRegionsoperation to query region IDs.
	AttrVbrInstanceRegionId() interface{}
	Props() *CenVbrHealthCheckProps
}

// The jsii proxy for ICenVbrHealthCheck
type jsiiProxy_ICenVbrHealthCheck struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenVbrHealthCheck) AttrCenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenVbrHealthCheck) AttrHealthCheckInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenVbrHealthCheck) AttrHealthCheckSourceIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckSourceIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenVbrHealthCheck) AttrHealthCheckTargetIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckTargetIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenVbrHealthCheck) AttrHealthyThreshold() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthyThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenVbrHealthCheck) AttrVbrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVbrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenVbrHealthCheck) AttrVbrInstanceOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVbrInstanceOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenVbrHealthCheck) AttrVbrInstanceRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVbrInstanceRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenVbrHealthCheck) Props() *CenVbrHealthCheckProps {
	var returns *CenVbrHealthCheckProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

