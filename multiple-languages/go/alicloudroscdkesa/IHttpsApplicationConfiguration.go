package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `HttpsApplicationConfiguration`.
type IHttpsApplicationConfiguration interface {
	alicloudroscdkcore.IResource
	// Attribute AltSvc: Function switch, default off.
	AttrAltSvc() interface{}
	// Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.
	//
	// This parameter is disabled by default.
	AttrAltSvcClear() interface{}
	// Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.
	//
	// The default value is 86400 seconds.
	AttrAltSvcMa() interface{}
	// Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.
	//
	// This parameter is disabled by default.
	AttrAltSvcPersist() interface{}
	// Attribute ConfigId: Config Id.
	AttrConfigId() interface{}
	// Attribute ConfigType: The type of the configuration.
	AttrConfigType() interface{}
	// Attribute Hsts: Whether to enable HSTS.
	//
	// It is disabled by default.
	AttrHsts() interface{}
	// Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
	AttrHstsIncludeSubdomains() interface{}
	// Attribute HstsMaxAge: The expiration time of HSTS, in seconds.
	AttrHstsMaxAge() interface{}
	// Attribute HstsPreload: Whether to enable HSTS preloading.
	//
	// It is disabled by default.
	AttrHstsPreload() interface{}
	// Attribute HttpsForce: Whether to enable forced HTTPS.
	//
	// It is disabled by default.
	AttrHttpsForce() interface{}
	// Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.
	AttrHttpsForceCode() interface{}
	// Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.
	//
	// This parameter is disabled by default.
	AttrHttpsNoSniDeny() interface{}
	// Attribute HttpsSniVerify: Whether to enable SNI verification.
	//
	// It is disabled by default.
	AttrHttpsSniVerify() interface{}
	// Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
	AttrHttpsSniWhitelist() interface{}
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
	Props() *HttpsApplicationConfigurationProps
}

// The jsii proxy for IHttpsApplicationConfiguration
type jsiiProxy_IHttpsApplicationConfiguration struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrAltSvc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAltSvc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrAltSvcClear() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAltSvcClear",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrAltSvcMa() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAltSvcMa",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrAltSvcPersist() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAltSvcPersist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrHsts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHsts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrHstsIncludeSubdomains() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHstsIncludeSubdomains",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrHstsMaxAge() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHstsMaxAge",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrHstsPreload() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHstsPreload",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrHttpsForce() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpsForce",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrHttpsForceCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpsForceCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrHttpsNoSniDeny() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpsNoSniDeny",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrHttpsSniVerify() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpsSniVerify",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrHttpsSniWhitelist() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpsSniWhitelist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpsApplicationConfiguration) Props() *HttpsApplicationConfigurationProps {
	var returns *HttpsApplicationConfigurationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

