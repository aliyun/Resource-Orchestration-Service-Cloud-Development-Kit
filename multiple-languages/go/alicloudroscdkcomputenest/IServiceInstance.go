package alicloudroscdkcomputenest

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcomputenest/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ServiceInstance`.
type IServiceInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Components: Additional billing items.
	AttrComponents() interface{}
	// Attribute CreateTime: Creation time.
	AttrCreateTime() interface{}
	// Attribute EnableInstanceOps: Whether the service instance has the O & M function.
	AttrEnableInstanceOps() interface{}
	// Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.
	AttrEnableUserPrometheus() interface{}
	// Attribute IsOperated: Whether the generation O & M function of the service instance is enabled.
	AttrIsOperated() interface{}
	// Attribute LicenseEndTime: License expiration time.
	AttrLicenseEndTime() interface{}
	// Attribute MarketInstanceId: The ID of the cloud marketplace instance.
	AttrMarketInstanceId() interface{}
	// Attribute NetworkConfig: Network configuration information.
	AttrNetworkConfig() interface{}
	// Attribute Output: Create the output Field returned by the service instance.
	AttrOutput() interface{}
	// Attribute Outputs: Create the output Field returned by the service instance.
	AttrOutputs() interface{}
	// Attribute Parameters: The parameters entered by the deployment service instance.
	AttrParameters() interface{}
	// Attribute PredefinedParameterName: Package name.
	AttrPredefinedParameterName() interface{}
	// Attribute Progress: The deployment progress of the service instance.
	//
	// Unit:%.
	AttrProgress() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Service: Service details.
	AttrService() interface{}
	// Attribute ServiceInstanceId: The ID of the service instance.
	AttrServiceInstanceId() interface{}
	// Attribute ServiceInstanceName: The name of the resource.
	AttrServiceInstanceName() interface{}
	// Attribute ServiceType: Service type.
	AttrServiceType() interface{}
	// Attribute Source: The source of the service instance.
	AttrSource() interface{}
	// Attribute StatusDetail: The status description of the deployment instance.
	AttrStatusDetail() interface{}
	// Attribute SupplierUid: Service provider AliUid.
	AttrSupplierUid() interface{}
	// Attribute Tags: User-defined labels.
	AttrTags() interface{}
	// Attribute TemplateName: Template name.
	AttrTemplateName() interface{}
	// Attribute UpdateTime: Update time.
	AttrUpdateTime() interface{}
	// Attribute UserId: AliUid of the user.
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

func (j *jsiiProxy_IServiceInstance) AttrOutput() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOutput",
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

