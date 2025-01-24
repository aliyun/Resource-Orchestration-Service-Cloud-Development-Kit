package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Prometheus`.
type IPrometheus interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: The ID of the cluster.
	AttrClusterId() interface{}
	// Attribute ClusterType: Instance type.
	AttrClusterType() interface{}
	// Attribute GrafanaInstanceId: Grafana workspace ID.
	AttrGrafanaInstanceId() interface{}
	// Attribute PaymentType: Payment Type.
	AttrPaymentType() interface{}
	// Attribute PrometheusName: The name of the resource.
	AttrPrometheusName() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SecurityGroupId: The ID of the security group.
	AttrSecurityGroupId() interface{}
	// Attribute SubClustersJson: Subcluster information of globalVeiw cluster.
	AttrSubClustersJson() interface{}
	// Attribute Tags: The tags of the prometheus.
	AttrTags() interface{}
	// Attribute UserId: User ID.
	AttrUserId() interface{}
	// Attribute VpcId: The ID of the virtual private cloud (VPC).
	AttrVpcId() interface{}
	// Attribute VSwitchId: The ID of the vSwitch.
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

