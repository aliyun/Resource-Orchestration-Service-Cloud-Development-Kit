package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `Service`.
type IService interface {
	alicloudroscdkcore.IResource
	// Attribute AccessToken: Service Request authentication token.
	AttrAccessToken() interface{}
	// Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.
	AttrCallerUid() interface{}
	// Attribute Cpu: Number of service CPU cores.
	AttrCpu() interface{}
	// Attribute CreateTime: Creation time of the service.
	AttrCreateTime() interface{}
	// Attribute CurrentVersion: Current running version of the service.
	AttrCurrentVersion() interface{}
	// Attribute ExtraData: Service Extra Information.
	AttrExtraData() interface{}
	// Attribute Gpu: Number of service GPU cards.
	AttrGpu() interface{}
	// Attribute Image: Service Deployment Mirroring.
	AttrImage() interface{}
	// Attribute InternetEndpoint: Public network Endpoint of the service.
	AttrInternetEndpoint() interface{}
	// Attribute IntranetEndpoint: The intranet Endpoint of the service.
	AttrIntranetEndpoint() interface{}
	// Attribute Labels: Service Tag.
	AttrLabels() interface{}
	// Attribute LatestVersion: The latest version of the service.
	AttrLatestVersion() interface{}
	// Attribute Memory: Memory of service (MB).
	AttrMemory() interface{}
	// Attribute Message: Latest information on services.
	AttrMessage() interface{}
	// Attribute Namespace: The namespace to which the service belongs.
	AttrNamespace() interface{}
	// Attribute ParentUid: Primary account ID of the creator.
	AttrParentUid() interface{}
	// Attribute PendingInstance: Number of instances where the service is not currently ready.
	AttrPendingInstance() interface{}
	// Attribute Reason: Service deployment failure reason.
	AttrReason() interface{}
	// Attribute Resource: The ID of the resource group to which the service belongs.
	AttrResource() interface{}
	// Attribute ResourceAlias: Name of the resource group where the service resides.
	AttrResourceAlias() interface{}
	// Attribute Role: Grouping Service Role.
	AttrRole() interface{}
	// Attribute RoleAttrs: Grouping Service Role Properties.
	AttrRoleAttrs() interface{}
	// Attribute RunningInstance: Number of instances in service running.
	AttrRunningInstance() interface{}
	// Attribute SafetyLock: Service Security Lock Status.
	AttrSafetyLock() interface{}
	// Attribute ServiceConfig: Service configuration information.
	AttrServiceConfig() interface{}
	// Attribute ServiceGroup: Group to which the service belongs.
	AttrServiceGroup() interface{}
	// Attribute ServiceName: Service Name.
	AttrServiceName() interface{}
	// Attribute ServiceUid: Unique Service ID.
	AttrServiceUid() interface{}
	// Attribute TotalInstance: Total number of instances required by the service.
	AttrTotalInstance() interface{}
	// Attribute UpdateTime: Service Last Updated.
	AttrUpdateTime() interface{}
	// Attribute Weight: Packet Service Traffic Weight.
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

