package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `CompressionRule`.
type ICompressionRule interface {
	alicloudroscdkcore.IResource
	// Attribute Brotli: Brotli compression.
	AttrBrotli() interface{}
	// Attribute ConfigId: Config Id.
	AttrConfigId() interface{}
	// Attribute ConfigType: The type of the configuration.
	AttrConfigType() interface{}
	// Attribute Gzip: Gzip compression.
	AttrGzip() interface{}
	// Attribute Rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRule() interface{}
	// Attribute RuleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRuleEnable() interface{}
	// Attribute RuleName: Rule name.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRuleName() interface{}
	// Attribute Sequence: Order of rule execution.
	//
	// The smaller the value, the higher the priority for execution.
	AttrSequence() interface{}
	// Attribute SiteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	AttrSiteVersion() interface{}
	// Attribute Zstd: Zstd compression.
	AttrZstd() interface{}
	Props() *CompressionRuleProps
}

// The jsii proxy for ICompressionRule
type jsiiProxy_ICompressionRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICompressionRule) AttrBrotli() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBrotli",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompressionRule) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompressionRule) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompressionRule) AttrGzip() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGzip",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompressionRule) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompressionRule) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompressionRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompressionRule) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompressionRule) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompressionRule) AttrZstd() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZstd",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompressionRule) Props() *CompressionRuleProps {
	var returns *CompressionRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

