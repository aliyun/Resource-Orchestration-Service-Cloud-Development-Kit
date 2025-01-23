package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Prometheus`.
type IPrometheus interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: The ID of the Prometheus instance.
	AttrClusterId() interface{}
	// Attribute ClusterType: The type of the instance.
	AttrClusterType() interface{}
	// Attribute GrafanaInstanceId: The ID of the Grafana workspace.
	AttrGrafanaInstanceId() interface{}
	// Attribute PaymentType: The billing method.
	AttrPaymentType() interface{}
	// Attribute PrometheusName: The name of the instance.
	AttrPrometheusName() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
	AttrResourceGroupId() interface{}
	// Attribute SecurityGroupId: The ID of the security group.
	//
	// This parameter is returned only for Prometheus instances for ECS.
	AttrSecurityGroupId() interface{}
	// Attribute SubClustersJson: The child instances of the Prometheus instance for GlobalView.
	AttrSubClustersJson() interface{}
	// Attribute Tags: The tags of the instance.
	AttrTags() interface{}
	// Attribute UserId: The user ID.
	AttrUserId() interface{}
	// Attribute VpcId: The VPC ID.
	//
	// This parameter is returned only for Prometheus instances for ECS.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The vSwitch ID.
	//
	// This parameter is returned only for Prometheus instances for ECS.
	AttrVSwitchId() interface{}
	Props() *PrometheusProps
}

// The jsii proxy for IPrometheus
type jsiiProxy_IPrometheus struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPrometheus) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrGrafanaInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrPrometheusName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrometheusName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrSubClustersJson() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubClustersJson",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheus) Props() *PrometheusProps {
	var returns *PrometheusProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

