package alicloudroscdkedas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/internal"
)

// Represents a `K8sSlbBinding`.
type IK8sSlbBinding interface {
	alicloudroscdkcore.IResource
	// Attribute Address: The address of load balancer instance.
	AttrAddress() interface{}
	// Attribute AppId: The ID of the application.
	AttrAppId() interface{}
	// Attribute ChangeOrderId: The ID of the change process.
	AttrChangeOrderId() interface{}
	// Attribute LoadBalancerId: The ID of load balancer instance.
	AttrLoadBalancerId() interface{}
	// Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.
	AttrLoadBalancerName() interface{}
	Props() *K8sSlbBindingProps
}

// The jsii proxy for IK8sSlbBinding
type jsiiProxy_IK8sSlbBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IK8sSlbBinding) AttrAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sSlbBinding) AttrAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sSlbBinding) AttrChangeOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChangeOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sSlbBinding) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sSlbBinding) AttrLoadBalancerName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sSlbBinding) Props() *K8sSlbBindingProps {
	var returns *K8sSlbBindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

