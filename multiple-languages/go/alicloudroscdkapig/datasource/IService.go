package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Service`.
type IService interface {
	alicloudroscdkcore.IResource
	// Attribute Addresses: A list of domain names or fixed addresses.
	AttrAddresses() interface{}
	// Attribute AiServiceConfig: AI service configuration when sourceType equals AI.
	AttrAiServiceConfig() interface{}
	// Attribute GatewayId: The ID of the Cloud Native API Gateway.
	AttrGatewayId() interface{}
	// Attribute GroupName: The service group name.
	AttrGroupName() interface{}
	// Attribute Namespace: The namespace of the service:.
	AttrNamespace() interface{}
	// Attribute Qualifier: The function version or alias.
	AttrQualifier() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute ServiceId: The ID of the service.
	AttrServiceId() interface{}
	// Attribute ServiceName: The name of the Service, need to fill in manually when sourceType is VIP/DNS/AI.
	AttrServiceName() interface{}
	// Attribute SourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
	AttrSourceType() interface{}
	Props() *ServiceProps
}

// The jsii proxy for IService
type jsiiProxy_IService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IService) AttrAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrAiServiceConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAiServiceConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrNamespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrQualifier() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQualifier",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrServiceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrSourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) Props() *ServiceProps {
	var returns *ServiceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

