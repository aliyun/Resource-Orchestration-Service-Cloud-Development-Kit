package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcomputenest/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ServiceInstance`.
type IServiceInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Components: Cloud Marketplace additional billing items.
	AttrComponents() interface{}
	// Attribute CreateTime: The time when the serviceInstance was created.
	AttrCreateTime() interface{}
	// Attribute EnableInstanceOps: Indicates whether the service instance supports the operation feature.
	AttrEnableInstanceOps() interface{}
	// Attribute EnableUserPrometheus: Whether to enable Prometheus monitoring.
	AttrEnableUserPrometheus() interface{}
	// Attribute IsOperated: Indicates whether the hosted O&M feature is enabled for the service instance.
	AttrIsOperated() interface{}
	// Attribute LicenseEndTime: The expiration time of licence.
	AttrLicenseEndTime() interface{}
	// Attribute MarketInstanceId: The ID of the cloud marketplace instance.
	AttrMarketInstanceId() interface{}
	// Attribute NetworkConfig: The network configurations.
	AttrNetworkConfig() interface{}
	// Attribute Outputs: The outputs returned from creating the service instance.
	AttrOutputs() interface{}
	// Attribute Parameters: The parameters configured for the service instance.
	AttrParameters() interface{}
	// Attribute PredefinedParameterName: The name of the package .
	AttrPredefinedParameterName() interface{}
	// Attribute Progress: The deployment progress of the service instance.
	//
	// Unit: percentage.
	AttrProgress() interface{}
	// Attribute ResourceGroupId: The resource group ID.
	AttrResourceGroupId() interface{}
	// Attribute Service: The information about the service to which the service instance belongs.
	AttrService() interface{}
	// Attribute ServiceInstanceId: The ID of the service instance.
	AttrServiceInstanceId() interface{}
	// Attribute ServiceInstanceName: The name of the resource.
	AttrServiceInstanceName() interface{}
	// Attribute ServiceType: The type of the service.
	AttrServiceType() interface{}
	// Attribute Source: The source of the service instance.
	AttrSource() interface{}
	// Attribute StatusDetail: The description of the deployment state of the service instance.
	AttrStatusDetail() interface{}
	// Attribute SupplierUid: The Alibaba Cloud account ID of the service provider.
	AttrSupplierUid() interface{}
	// Attribute Tags: The tags of the service instance.
	AttrTags() interface{}
	// Attribute TemplateName: The name of the template.
	AttrTemplateName() interface{}
	// Attribute UpdateTime: The time when the serviceInstance was last updated.
	AttrUpdateTime() interface{}
	// Attribute UserId: The AliUid of the user.
	AttrUserId() interface{}
	Props() *ServiceInstanceProps
}

// The jsii proxy for IServiceInstance
type jsiiProxy_IServiceInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServiceInstance) AttrComponents() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrComponents",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrEnableInstanceOps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableInstanceOps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrEnableUserPrometheus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableUserPrometheus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrIsOperated() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsOperated",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrLicenseEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLicenseEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrMarketInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMarketInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrNetworkConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrOutputs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOutputs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrPredefinedParameterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPredefinedParameterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrProgress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProgress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrService() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrService",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrServiceInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrServiceInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrServiceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrSource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrStatusDetail() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatusDetail",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrSupplierUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupplierUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrTemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstance) Props() *ServiceInstanceProps {
	var returns *ServiceInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

