package alicloudroscdkelasticsearch

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkelasticsearch/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute Domain: Instance connection domain (only VPC network access supported).
	AttrDomain() interface{}
	// Attribute InstanceChargeType: Instance charge type.
	AttrInstanceChargeType() interface{}
	// Attribute InstanceId: The ID of the Elasticsearch instance.
	AttrInstanceId() interface{}
	// Attribute KibanaDomain: Kibana console domain (Internet access supported).
	AttrKibanaDomain() interface{}
	// Attribute KibanaPort: Kibana console port.
	AttrKibanaPort() interface{}
	// Attribute Port:  Instance connection port.
	AttrPort() interface{}
	// Attribute PublicDomain: Instance public connection domain.
	AttrPublicDomain() interface{}
	// Attribute Status: The Elasticsearch instance status.
	//
	// Includes active, activating, inactive. Some operations are denied when status is not active.
	AttrStatus() interface{}
	// Attribute Version: Elasticsearch version.
	AttrVersion() interface{}
	// Attribute VSwitchId: The ID of VSwitch.
	AttrVSwitchId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrKibanaDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKibanaDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrKibanaPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKibanaPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPublicDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

