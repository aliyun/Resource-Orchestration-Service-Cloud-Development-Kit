package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/datasource/internal"
)

// Represents a `Service`.
type IService interface {
	alicloudroscdkcore.IResource
	// Attribute AccessToken: The request token of the service.
	AttrAccessToken() interface{}
	// Attribute CallerUid: The user ID of the account that is used to create the service.
	AttrCallerUid() interface{}
	// Attribute Cpu: The CPU that you applied for each instance.
	AttrCpu() interface{}
	// Attribute CreateTime: The time when the service was created.
	AttrCreateTime() interface{}
	// Attribute CurrentVersion: The current version of the model.
	AttrCurrentVersion() interface{}
	// Attribute ExtraData: The additional information about the service.
	AttrExtraData() interface{}
	// Attribute Gpu: The GPU that you applied for each instance.
	AttrGpu() interface{}
	// Attribute Image: The data image of the service.
	AttrImage() interface{}
	// Attribute InternetEndpoint: The public endpoint of the service.
	AttrInternetEndpoint() interface{}
	// Attribute IntranetEndpoint: The private endpoint of the service.
	AttrIntranetEndpoint() interface{}
	// Attribute Labels: The tags of the service.
	AttrLabels() interface{}
	// Attribute LatestVersion: The latest version of the service.
	AttrLatestVersion() interface{}
	// Attribute Memory: The memory that you applied for each instance.
	AttrMemory() interface{}
	// Attribute Message: The summary of the service.
	AttrMessage() interface{}
	// Attribute Namespace: The namespace of the service.
	AttrNamespace() interface{}
	// Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
	AttrParentUid() interface{}
	// Attribute PendingInstance: The number of instances for the suspended service.
	AttrPendingInstance() interface{}
	// Attribute Reason: The reason why the service is in the current state.
	AttrReason() interface{}
	// Attribute Resource: The resource group to which the service belongs.
	AttrResource() interface{}
	// Attribute ResourceAlias: The alias of the resource group to which the service belongs.
	AttrResourceAlias() interface{}
	// Attribute Role: The role of the service.
	AttrRole() interface{}
	// Attribute RoleAttrs: The additional attributes of the service role.
	AttrRoleAttrs() interface{}
	// Attribute RunningInstance: The number of instances for the running service.
	AttrRunningInstance() interface{}
	// Attribute SafetyLock: The security lock of the service.
	AttrSafetyLock() interface{}
	// Attribute ServiceConfig: The configurations of the service.
	AttrServiceConfig() interface{}
	// Attribute ServiceGroup: The group to which the service belongs.
	AttrServiceGroup() interface{}
	// Attribute ServiceName: The name of the service.
	AttrServiceName() interface{}
	// Attribute ServiceUid: The ID of the service.
	//
	// The value of this property is the same as the value of ServiceId.
	AttrServiceUid() interface{}
	// Attribute TotalInstance: The total number of instances of the service.
	AttrTotalInstance() interface{}
	// Attribute UpdateTime: The time when the service was updated.
	AttrUpdateTime() interface{}
	// Attribute Weight: The weight of the canary release for the service.
	AttrWeight() interface{}
	Props() *ServiceProps
}

// The jsii proxy for IService
type jsiiProxy_IService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IService) AttrAccessToken() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrCallerUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallerUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrCpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrCurrentVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCurrentVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrExtraData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExtraData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrGpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrImage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrInternetEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrIntranetEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIntranetEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrLabels() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLabels",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrLatestVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrMemory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrMessage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMessage",
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

func (j *jsiiProxy_IService) AttrParentUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParentUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrPendingInstance() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPendingInstance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrResource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrResourceAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrRole() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRole",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrRoleAttrs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoleAttrs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrRunningInstance() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRunningInstance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrSafetyLock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSafetyLock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrServiceConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrServiceGroup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceGroup",
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

func (j *jsiiProxy_IService) AttrServiceUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrTotalInstance() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTotalInstance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrWeight() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWeight",
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

