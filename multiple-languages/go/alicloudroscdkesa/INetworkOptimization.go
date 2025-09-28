package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `NetworkOptimization`.
type INetworkOptimization interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: ConfigId of the configuration, which can be obtained by calling the ListNetworkOptimizations.
	AttrConfigId() interface{}
	// Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
	AttrConfigType() interface{}
	// Attribute Grpc: Whether to enable GRPC, default is disabled.
	AttrGrpc() interface{}
	// Attribute Http2Origin: Whether to enable HTTP2 origin, default is disabled.
	AttrHttp2Origin() interface{}
	// Attribute Rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRule() interface{}
	// Attribute RuleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRuleEnable() interface{}
	// Attribute RuleName: Rule name.
	AttrRuleName() interface{}
	// Attribute Sequence: Order of rule execution.
	//
	// The smaller the value, the higher the priority for execution.
	AttrSequence() interface{}
	// Attribute SiteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	AttrSiteVersion() interface{}
	// Attribute SmartRouting: Whether to enable smart routing service, default is disabled.
	AttrSmartRouting() interface{}
	// Attribute UploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
	AttrUploadMaxFilesize() interface{}
	// Attribute Websocket: Whether to enable Websocket, default is enabled.
	AttrWebsocket() interface{}
	Props() *NetworkOptimizationProps
}

// The jsii proxy for INetworkOptimization
type jsiiProxy_INetworkOptimization struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkOptimization) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrGrpc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrpc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrHttp2Origin() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttp2Origin",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrSmartRouting() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSmartRouting",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrUploadMaxFilesize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUploadMaxFilesize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) AttrWebsocket() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWebsocket",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkOptimization) Props() *NetworkOptimizationProps {
	var returns *NetworkOptimizationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

