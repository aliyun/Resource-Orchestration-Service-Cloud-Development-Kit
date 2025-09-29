package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `HttpsBasicConfiguration`.
type IHttpsBasicConfiguration interface {
	alicloudroscdkcore.IResource
	// Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
	AttrCiphersuite() interface{}
	// Attribute CiphersuiteGroup: Cipher suite group.
	//
	// Default is all cipher suites.
	AttrCiphersuiteGroup() interface{}
	// Attribute ConfigId: ConfigId of the configuration.
	AttrConfigId() interface{}
	// Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
	AttrConfigType() interface{}
	// Attribute Http2: Indicates whether HTTP2 is enabled.
	//
	// Default is on.
	AttrHttp2() interface{}
	// Attribute Http3: Whether to enable HTTP3, which is enabled by default.
	AttrHttp3() interface{}
	// Attribute Https: Whether to enable HTTPS.
	//
	// Default is enabled.
	AttrHttps() interface{}
	// Attribute OcspStapling: Indicates whether OCSP is enabled.
	//
	// Default is off.
	AttrOcspStapling() interface{}
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
	// Attribute Tls10: Whether to enable TLS1.0. Default is disabled.
	AttrTls10() interface{}
	// Attribute Tls11: Whether to enable TLS1.1. Default is enabled.
	AttrTls11() interface{}
	// Attribute Tls12: Whether to enable TLS1.2. Default is enabled.
	AttrTls12() interface{}
	// Attribute Tls13: Whether to enable TLS1.3. Default is enabled.
	AttrTls13() interface{}
	Props() *HttpsBasicConfigurationProps
}

// The jsii proxy for IHttpsBasicConfiguration
type jsiiProxy_IHttpsBasicConfiguration struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrCiphersuite() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCiphersuite",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrCiphersuiteGroup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCiphersuiteGroup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrHttp2() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttp2",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrHttp3() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttp3",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrHttps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrOcspStapling() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOcspStapling",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrTls10() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTls10",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrTls11() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTls11",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrTls12() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTls12",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) AttrTls13() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTls13",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsBasicConfiguration) Props() *HttpsBasicConfigurationProps {
	var returns *HttpsBasicConfigurationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

