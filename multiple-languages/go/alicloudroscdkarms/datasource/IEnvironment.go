package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Environment`.
type IEnvironment interface {
	alicloudroscdkcore.IResource
	// Attribute BindResourceId: The id or vpcId of the bound container instance.
	AttrBindResourceId() interface{}
	// Attribute BindResourceType: Binding resource type.
	AttrBindResourceType() interface{}
	// Attribute BindVpcCidr: The network segment of the bound vpc.
	AttrBindVpcCidr() interface{}
	// Attribute EnvironmentId: The first ID of the resource.
	AttrEnvironmentId() interface{}
	// Attribute EnvironmentName: The name of the resource.
	AttrEnvironmentName() interface{}
	// Attribute EnvironmentSubType: Subtype of environment.
	AttrEnvironmentSubType() interface{}
	// Attribute EnvironmentType: Type of environment.
	AttrEnvironmentType() interface{}
	// Attribute FeePackage: Paid package.
	AttrFeePackage() interface{}
	// Attribute GrafanaDatasourceUid: The uid of the Grafana data source.
	AttrGrafanaDatasourceUid() interface{}
	// Attribute GrafanaFolderUid: Binding Grafana directory uid.
	AttrGrafanaFolderUid() interface{}
	// Attribute ManagedType: Hosting type.
	AttrManagedType() interface{}
	// Attribute PrometheusInstanceId: The ID of the prometheus instance.
	AttrPrometheusInstanceId() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tag of the resource.
	AttrTags() interface{}
	// Attribute UserId: User ID.
	AttrUserId() interface{}
	Props() *EnvironmentProps
}

// The jsii proxy for IEnvironment
type jsiiProxy_IEnvironment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnvironment) AttrBindResourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBindResourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrBindResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBindResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrBindVpcCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBindVpcCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrEnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrEnvironmentName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrEnvironmentSubType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentSubType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrEnvironmentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrFeePackage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFeePackage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrGrafanaDatasourceUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaDatasourceUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrGrafanaFolderUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaFolderUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrManagedType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrManagedType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrPrometheusInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrometheusInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) Props() *EnvironmentProps {
	var returns *EnvironmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

