package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute BuyNumber: Number of servers.
	AttrBuyNumber() interface{}
	// Attribute ContainerImageScan: Container Image security scan.
	//
	// Interval type, value interval:[0,200000].
	AttrContainerImageScan() interface{}
	// Attribute ContainerImageScanNew: Container Image security scan.
	//
	// Interval type, value interval:[0,200000].
	AttrContainerImageScanNew() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute Honeypot: Number of cloud honeypot licenses.
	//
	// Interval type, value interval:[20,500].
	AttrHoneypot() interface{}
	// Attribute HoneypotSwitch: Cloud honeypot.
	AttrHoneypotSwitch() interface{}
	// Attribute InstanceId: The first ID of the resource.
	AttrInstanceId() interface{}
	// Attribute PaymentType: The payment type of the resource.
	AttrPaymentType() interface{}
	// Attribute RaspCount: Number of application protection licenses.
	//
	// Interval type, value interval:[1,100000000].
	AttrRaspCount() interface{}
	// Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.
	AttrRenewalPeriodUnit() interface{}
	// Attribute RenewalStatus: Automatic renewal status, value:.
	AttrRenewalStatus() interface{}
	// Attribute RenewPeriod: Automatic renewal cycle, in months.
	AttrRenewPeriod() interface{}
	// Attribute SasAntiRansomware: Anti-ransomware capacity.
	//
	// Unit: GB. Interval type, value interval:[0,9999999999].
	AttrSasAntiRansomware() interface{}
	// Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
	AttrSasCspm() interface{}
	// Attribute SasCspmSwitch: Cloud platform configuration check switch.
	AttrSasCspmSwitch() interface{}
	// Attribute SasSc: Security screen.
	AttrSasSc() interface{}
	// Attribute SasSdk: Number of malicious file detections.
	//
	// Unit: 10,000 times. Interval type, value interval:[10,9999999999].
	AttrSasSdk() interface{}
	// Attribute SasSdkSwitch: Malicious file detection SDK.
	AttrSasSdkSwitch() interface{}
	// Attribute SasSlsStorage: Log analysis storage capacity.
	//
	// Unit: GB. Interval type, value interval:[0,600000].
	AttrSasSlsStorage() interface{}
	// Attribute SasWebguardBoolean: Web tamper-proof switch.
	AttrSasWebguardBoolean() interface{}
	// Attribute SasWebguardOrderNum: Tamper-proof authorization number.
	AttrSasWebguardOrderNum() interface{}
	// Attribute ThreatAnalysis: Threat Analysis log storage capacity.
	//
	// Interval type, value interval:[0,9999999999].
	AttrThreatAnalysis() interface{}
	// Attribute ThreatAnalysisSwitch: Threat analysis.
	AttrThreatAnalysisSwitch() interface{}
	// Attribute VCore: Number of cores.
	AttrVCore() interface{}
	// Attribute VersionCode: Select the security center version.
	AttrVersionCode() interface{}
	// Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
	AttrVulCount() interface{}
	// Attribute VulSwitch: Vulnerability fix switch.
	AttrVulSwitch() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrBuyNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBuyNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrContainerImageScan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContainerImageScan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrContainerImageScanNew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContainerImageScanNew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrHoneypot() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHoneypot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrHoneypotSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHoneypotSwitch",
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

func (j *jsiiProxy_IInstance) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrRaspCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRaspCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrRenewalPeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRenewalPeriodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrRenewalStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRenewalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSasAntiRansomware() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSasAntiRansomware",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSasCspm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSasCspm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSasCspmSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSasCspmSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSasSc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSasSc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSasSdk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSasSdk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSasSdkSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSasSdkSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSasSlsStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSasSlsStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSasWebguardBoolean() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSasWebguardBoolean",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSasWebguardOrderNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSasWebguardOrderNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrThreatAnalysis() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrThreatAnalysis",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrThreatAnalysisSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrThreatAnalysisSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVCore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVCore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVersionCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVulCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVulCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVulSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVulSwitch",
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

