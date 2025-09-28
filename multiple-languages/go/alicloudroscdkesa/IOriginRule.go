package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `OriginRule`.
type IOriginRule interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: Back-to-source rule configuration ID.
	AttrConfigId() interface{}
	// Attribute ConfigType: The configuration type.
	//
	// You can use this parameter to check the global configuration or rule configuration.
	AttrConfigType() interface{}
	// Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.
	AttrDnsRecord() interface{}
	// Attribute Follow302Enable: Return Source 302 follow switch.
	AttrFollow302Enable() interface{}
	// Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
	AttrFollow302MaxTries() interface{}
	// Attribute Follow302RetainArgs: Retain the original request parameter switch.
	AttrFollow302RetainArgs() interface{}
	// Attribute Follow302RetainHeader: Retain the original request header switch.
	AttrFollow302RetainHeader() interface{}
	// Attribute Follow302TargetHost: Modify the source host after 302.
	AttrFollow302TargetHost() interface{}
	// Attribute OriginHost: The HOST carried in the back-to-origin request.
	AttrOriginHost() interface{}
	// Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
	AttrOriginHttpPort() interface{}
	// Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.
	AttrOriginHttpsPort() interface{}
	// Attribute OriginMtls: The mtls switch.
	AttrOriginMtls() interface{}
	// Attribute OriginReadTimeout: Read timeout interval of the source station (s).
	AttrOriginReadTimeout() interface{}
	// Attribute OriginScheme: The protocol used by the back-to-origin request.
	AttrOriginScheme() interface{}
	// Attribute OriginSni: SNI carried in the back-to-origin request.
	AttrOriginSni() interface{}
	// Attribute OriginVerify: Source station certificate verification switch.
	AttrOriginVerify() interface{}
	// Attribute Range: Use the range sharding method to download the file from the source.
	AttrRange() interface{}
	// Attribute RangeChunkSize: range shard size.
	AttrRangeChunkSize() interface{}
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
	Props() *OriginRuleProps
}

// The jsii proxy for IOriginRule
type jsiiProxy_IOriginRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOriginRule) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrDnsRecord() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDnsRecord",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrFollow302Enable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFollow302Enable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrFollow302MaxTries() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFollow302MaxTries",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrFollow302RetainArgs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFollow302RetainArgs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrFollow302RetainHeader() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFollow302RetainHeader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrFollow302TargetHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFollow302TargetHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrOriginHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrOriginHttpPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginHttpPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrOriginHttpsPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginHttpsPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrOriginMtls() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginMtls",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrOriginReadTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginReadTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrOriginScheme() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginScheme",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrOriginSni() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginSni",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrOriginVerify() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginVerify",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrRange() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRange",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrRangeChunkSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRangeChunkSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginRule) Props() *OriginRuleProps {
	var returns *OriginRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

