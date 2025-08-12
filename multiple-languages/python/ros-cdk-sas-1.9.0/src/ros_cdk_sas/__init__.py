'''
## Aliyun ROS SAS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as SAS from '@alicloud/ros-cdk-sas';
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.interface(jsii_type="@alicloud/ros-cdk-sas.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sas.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sas.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAS::Instance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b44a22556e75b5bb09a9a99d3fb16371630f283d6d96cf6feb0b7d0bddd787b0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68fa458eeca4f1b040765d41a7c2a66166dddaf3f2f55001177f6087923803b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad855369be860b59c4c8641c9c8da8657b381bf3ddc5148c9ec85c18c514dc62)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06c4a77b1382f8ed1ad1f55a39ad91628cbf676115c0f78c0c907d0fa4363378)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sas.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "pay_type": "payType",
        "anti_ransomware": "antiRansomware",
        "anti_ransomware_manage_service": "antiRansomwareManageService",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "cloud_honeypot": "cloudHoneypot",
        "configuration_assessment": "configurationAssessment",
        "container_image_scan": "containerImageScan",
        "edition": "edition",
        "log_analysis": "logAnalysis",
        "malicious_file_detection_sdk": "maliciousFileDetectionSdk",
        "period": "period",
        "period_unit": "periodUnit",
        "post_pay_instance_module": "postPayInstanceModule",
        "protected_servers": "protectedServers",
        "quota_for_application_protection": "quotaForApplicationProtection",
        "quota_for_cloud_honeypot": "quotaForCloudHoneypot",
        "quota_for_configuration_assessment": "quotaForConfigurationAssessment",
        "quota_for_malicious_file_detection_sdk": "quotaForMaliciousFileDetectionSdk",
        "quota_for_vulnerability_fixing": "quotaForVulnerabilityFixing",
        "quota_for_web_tamper_proofing": "quotaForWebTamperProofing",
        "threat_analysis": "threatAnalysis",
        "threat_analysis_log_storage_capacity": "threatAnalysisLogStorageCapacity",
        "v_core": "vCore",
        "vulnerability_fixing": "vulnerabilityFixing",
        "web_tamper_protection": "webTamperProtection",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        anti_ransomware: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        anti_ransomware_manage_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cloud_honeypot: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        configuration_assessment: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_image_scan: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_analysis: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        malicious_file_detection_sdk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_pay_instance_module: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.PostPayInstanceModuleProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        protected_servers: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_application_protection: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_cloud_honeypot: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_configuration_assessment: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_malicious_file_detection_sdk: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_vulnerability_fixing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_web_tamper_proofing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis_log_storage_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_core: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vulnerability_fixing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        web_tamper_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance

        :param pay_type: Property payType: The billing method of the firewall instance. Valid values: PayAsYouGo: pay-as-you-go Subscription: subscription
        :param anti_ransomware: Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business. We recommend that you configure a data protection capacity of 50GB for each server.
        :param anti_ransomware_manage_service: Property antiRansomwareManageService: Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response. Note:
        :param auto_pay: Property autoPay: Whether to auto pay the bill.Default: True.
        :param auto_renew: Property autoRenew: Whether to auto renew the prepay instance.Default: False.
        :param cloud_honeypot: Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner. You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
        :param configuration_assessment: Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.
        :param container_image_scan: Property containerImageScan: Security Center provides the container image scan feature to protect containers. Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
        :param edition: Property edition: The version of Security center.
        :param log_analysis: Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
        :param malicious_file_detection_sdk: Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This ensures the security of the running environment of your cloud services.
        :param period: Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year
        :param post_pay_instance_module: Property postPayInstanceModule: PayAsYouGo instance module configuration.
        :param protected_servers: Property protectedServers: Authorization is the same as the number of servers you have.
        :param quota_for_application_protection: Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime. The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
        :param quota_for_cloud_honeypot: Property quotaForCloudHoneypot:.
        :param quota_for_configuration_assessment: Property quotaForConfigurationAssessment:.
        :param quota_for_malicious_file_detection_sdk: Property quotaForMaliciousFileDetectionSdk:.
        :param quota_for_vulnerability_fixing: Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
        :param quota_for_web_tamper_proofing: Property quotaForWebTamperProofing:.
        :param threat_analysis: Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
        :param threat_analysis_log_storage_capacity: Property threatAnalysisLogStorageCapacity:.
        :param v_core: Property vCore: This parameter indicates the number of server vCPUs.
        :param vulnerability_fixing: Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
        :param web_tamper_protection: Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41c89e642bc20925ed3e5944bb243257066a747bfb7b24162a36f96e8f8ec685)
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument anti_ransomware", value=anti_ransomware, expected_type=type_hints["anti_ransomware"])
            check_type(argname="argument anti_ransomware_manage_service", value=anti_ransomware_manage_service, expected_type=type_hints["anti_ransomware_manage_service"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument cloud_honeypot", value=cloud_honeypot, expected_type=type_hints["cloud_honeypot"])
            check_type(argname="argument configuration_assessment", value=configuration_assessment, expected_type=type_hints["configuration_assessment"])
            check_type(argname="argument container_image_scan", value=container_image_scan, expected_type=type_hints["container_image_scan"])
            check_type(argname="argument edition", value=edition, expected_type=type_hints["edition"])
            check_type(argname="argument log_analysis", value=log_analysis, expected_type=type_hints["log_analysis"])
            check_type(argname="argument malicious_file_detection_sdk", value=malicious_file_detection_sdk, expected_type=type_hints["malicious_file_detection_sdk"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument post_pay_instance_module", value=post_pay_instance_module, expected_type=type_hints["post_pay_instance_module"])
            check_type(argname="argument protected_servers", value=protected_servers, expected_type=type_hints["protected_servers"])
            check_type(argname="argument quota_for_application_protection", value=quota_for_application_protection, expected_type=type_hints["quota_for_application_protection"])
            check_type(argname="argument quota_for_cloud_honeypot", value=quota_for_cloud_honeypot, expected_type=type_hints["quota_for_cloud_honeypot"])
            check_type(argname="argument quota_for_configuration_assessment", value=quota_for_configuration_assessment, expected_type=type_hints["quota_for_configuration_assessment"])
            check_type(argname="argument quota_for_malicious_file_detection_sdk", value=quota_for_malicious_file_detection_sdk, expected_type=type_hints["quota_for_malicious_file_detection_sdk"])
            check_type(argname="argument quota_for_vulnerability_fixing", value=quota_for_vulnerability_fixing, expected_type=type_hints["quota_for_vulnerability_fixing"])
            check_type(argname="argument quota_for_web_tamper_proofing", value=quota_for_web_tamper_proofing, expected_type=type_hints["quota_for_web_tamper_proofing"])
            check_type(argname="argument threat_analysis", value=threat_analysis, expected_type=type_hints["threat_analysis"])
            check_type(argname="argument threat_analysis_log_storage_capacity", value=threat_analysis_log_storage_capacity, expected_type=type_hints["threat_analysis_log_storage_capacity"])
            check_type(argname="argument v_core", value=v_core, expected_type=type_hints["v_core"])
            check_type(argname="argument vulnerability_fixing", value=vulnerability_fixing, expected_type=type_hints["vulnerability_fixing"])
            check_type(argname="argument web_tamper_protection", value=web_tamper_protection, expected_type=type_hints["web_tamper_protection"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pay_type": pay_type,
        }
        if anti_ransomware is not None:
            self._values["anti_ransomware"] = anti_ransomware
        if anti_ransomware_manage_service is not None:
            self._values["anti_ransomware_manage_service"] = anti_ransomware_manage_service
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if cloud_honeypot is not None:
            self._values["cloud_honeypot"] = cloud_honeypot
        if configuration_assessment is not None:
            self._values["configuration_assessment"] = configuration_assessment
        if container_image_scan is not None:
            self._values["container_image_scan"] = container_image_scan
        if edition is not None:
            self._values["edition"] = edition
        if log_analysis is not None:
            self._values["log_analysis"] = log_analysis
        if malicious_file_detection_sdk is not None:
            self._values["malicious_file_detection_sdk"] = malicious_file_detection_sdk
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if post_pay_instance_module is not None:
            self._values["post_pay_instance_module"] = post_pay_instance_module
        if protected_servers is not None:
            self._values["protected_servers"] = protected_servers
        if quota_for_application_protection is not None:
            self._values["quota_for_application_protection"] = quota_for_application_protection
        if quota_for_cloud_honeypot is not None:
            self._values["quota_for_cloud_honeypot"] = quota_for_cloud_honeypot
        if quota_for_configuration_assessment is not None:
            self._values["quota_for_configuration_assessment"] = quota_for_configuration_assessment
        if quota_for_malicious_file_detection_sdk is not None:
            self._values["quota_for_malicious_file_detection_sdk"] = quota_for_malicious_file_detection_sdk
        if quota_for_vulnerability_fixing is not None:
            self._values["quota_for_vulnerability_fixing"] = quota_for_vulnerability_fixing
        if quota_for_web_tamper_proofing is not None:
            self._values["quota_for_web_tamper_proofing"] = quota_for_web_tamper_proofing
        if threat_analysis is not None:
            self._values["threat_analysis"] = threat_analysis
        if threat_analysis_log_storage_capacity is not None:
            self._values["threat_analysis_log_storage_capacity"] = threat_analysis_log_storage_capacity
        if v_core is not None:
            self._values["v_core"] = v_core
        if vulnerability_fixing is not None:
            self._values["vulnerability_fixing"] = vulnerability_fixing
        if web_tamper_protection is not None:
            self._values["web_tamper_protection"] = web_tamper_protection

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: The billing method of the firewall instance.

        Valid values:
        PayAsYouGo: pay-as-you-go
        Subscription: subscription
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def anti_ransomware(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business.

        We recommend that you configure a data protection capacity of 50GB for each server.
        '''
        result = self._values.get("anti_ransomware")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def anti_ransomware_manage_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property antiRansomwareManageService: Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response.

        Note:
        '''
        result = self._values.get("anti_ransomware_manage_service")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Whether to auto pay the bill.Default: True.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether to auto renew the prepay instance.Default: False.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cloud_honeypot(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner.

        You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
        '''
        result = self._values.get("cloud_honeypot")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def configuration_assessment(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.'''
        result = self._values.get("configuration_assessment")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_image_scan(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property containerImageScan: Security Center provides the container image scan feature to protect containers.

        Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
        '''
        result = self._values.get("container_image_scan")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def edition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property edition: The version of Security center.'''
        result = self._values.get("edition")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_analysis(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server.

        Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
        '''
        result = self._values.get("log_analysis")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def malicious_file_detection_sdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.

        This ensures the security of the running environment of your cloud services.
        '''
        result = self._values.get("malicious_file_detection_sdk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the subscription duration.

        Valid values:
        Month
        Year
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def post_pay_instance_module(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PostPayInstanceModuleProperty"]]:
        '''Property postPayInstanceModule: PayAsYouGo instance module configuration.'''
        result = self._values.get("post_pay_instance_module")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PostPayInstanceModuleProperty"]], result)

    @builtins.property
    def protected_servers(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property protectedServers: Authorization is the same as the number of servers you have.'''
        result = self._values.get("protected_servers")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_application_protection(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime.

        The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
        '''
        result = self._values.get("quota_for_application_protection")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_cloud_honeypot(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property quotaForCloudHoneypot:.'''
        result = self._values.get("quota_for_cloud_honeypot")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_configuration_assessment(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property quotaForConfigurationAssessment:.'''
        result = self._values.get("quota_for_configuration_assessment")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_malicious_file_detection_sdk(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property quotaForMaliciousFileDetectionSdk:.'''
        result = self._values.get("quota_for_malicious_file_detection_sdk")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_vulnerability_fixing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month.

        The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
        '''
        result = self._values.get("quota_for_vulnerability_fixing")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_web_tamper_proofing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property quotaForWebTamperProofing:.'''
        result = self._values.get("quota_for_web_tamper_proofing")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner.

        The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
        '''
        result = self._values.get("threat_analysis")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis_log_storage_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property threatAnalysisLogStorageCapacity:.'''
        result = self._values.get("threat_analysis_log_storage_capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_core(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vCore: This parameter indicates the number of server vCPUs.'''
        result = self._values.get("v_core")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vulnerability_fixing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks.

        This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
        '''
        result = self._values.get("vulnerability_fixing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def web_tamper_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.'''
        result = self._values.get("web_tamper_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sas.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAS::Instance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06b1028af68a2cd116cc7bbc7920fe53b05b7c64ce96107dd79a1621e81f3633)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa515eb661a70e0dc0cd98a17fbbfb1b5eeafa9803dcab7873f31ba57b47e4c5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Instance Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5dd3ec25cbd46ac953d32408f37f66ebfc820af6bc7dc93df5f7bccc16a948e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method of the firewall instance. Valid values:
        PayAsYouGo: pay-as-you-go
        Subscription: subscription
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a987aadfe63378074ce04114170018975fb5dedb2e64ebe7e437d8e0c3d8c7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="antiRansomware")
    def anti_ransomware(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business. We recommend that you configure a data protection capacity of 50GB for each server.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "antiRansomware"))

    @anti_ransomware.setter
    def anti_ransomware(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23c7fa51e56286208ffad9e45b00c376fb7e3518fe65fce32036ac13f567061b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "antiRansomware", value)

    @builtins.property
    @jsii.member(jsii_name="antiRansomwareManageService")
    def anti_ransomware_manage_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        antiRansomwareManageService: Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response.
        Note:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "antiRansomwareManageService"))

    @anti_ransomware_manage_service.setter
    def anti_ransomware_manage_service(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d004da6d6d7d448248bbb8b05a922e57adc1c524f6d817c5afd5e75ca1d0c296)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "antiRansomwareManageService", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to auto pay the bill.Default: True
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__197a3e59bb90b85eb9f5a00e46b9e927ad32efbd12302d3aedc5e2f01bde1e04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto renew the prepay instance.Default: False
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd64ac3a1238ca0eff42499385bd6e70a47c1598e153ee47206d949e8a090997)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="cloudHoneypot")
    def cloud_honeypot(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner. You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cloudHoneypot"))

    @cloud_honeypot.setter
    def cloud_honeypot(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54dc55c8c35ca9a39aff35df1f3db09fc11b8cd15e789d9c140779e0a97a1b21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cloudHoneypot", value)

    @builtins.property
    @jsii.member(jsii_name="configurationAssessment")
    def configuration_assessment(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "configurationAssessment"))

    @configuration_assessment.setter
    def configuration_assessment(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__508189de4aa4458fc09d0fe2308134ceeda9c974f4dfacedefd6c546f103e9e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configurationAssessment", value)

    @builtins.property
    @jsii.member(jsii_name="containerImageScan")
    def container_image_scan(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: containerImageScan: Security Center provides the container image scan feature to protect containers. Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "containerImageScan"))

    @container_image_scan.setter
    def container_image_scan(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0937de126f2320c46f54532e8ba8ad443d9dc509d4933eb5df3603713c5123cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerImageScan", value)

    @builtins.property
    @jsii.member(jsii_name="edition")
    def edition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: edition: The version of Security center.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "edition"))

    @edition.setter
    def edition(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc5a790e2d4cd04ba05b0a6bb456c30c04681b5c3f2bd8bc3fcca32dd4a62adc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "edition", value)

    @builtins.property
    @jsii.member(jsii_name="logAnalysis")
    def log_analysis(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logAnalysis"))

    @log_analysis.setter
    def log_analysis(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f95d49fe3f678e354a002d7755f8ffcd3f07080f363059607405ac0442cfe40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logAnalysis", value)

    @builtins.property
    @jsii.member(jsii_name="maliciousFileDetectionSdk")
    def malicious_file_detection_sdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This ensures the security of the running environment of your cloud services.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maliciousFileDetectionSdk"))

    @malicious_file_detection_sdk.setter
    def malicious_file_detection_sdk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d9398b79a00dbd56229f525ca4e2c07ac8438a06bc58ac8d5a8a1f23c607886)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maliciousFileDetectionSdk", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
        If periodUnit is year, the valid range is 1, 2, 3
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7769481dbd243907f0571e387b5139f0f7dceb3199572f1407ad33f56b65ae17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__482e7e85d57748a54cb3a0856702086034702c72081c8231d0ceb3c2418f4468)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="postPayInstanceModule")
    def post_pay_instance_module(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PostPayInstanceModuleProperty"]]:
        '''
        :Property: postPayInstanceModule: PayAsYouGo instance module configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PostPayInstanceModuleProperty"]], jsii.get(self, "postPayInstanceModule"))

    @post_pay_instance_module.setter
    def post_pay_instance_module(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.PostPayInstanceModuleProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__283ef4f1acb5d00c1ee41cb7c20d2f12510f1d91b966b35f81c6dc8b3c432586)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "postPayInstanceModule", value)

    @builtins.property
    @jsii.member(jsii_name="protectedServers")
    def protected_servers(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protectedServers: Authorization is the same as the number of servers you have.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "protectedServers"))

    @protected_servers.setter
    def protected_servers(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39cb22e544921f5c9aed4eb5c7b4cfe7ad065208e8f96dbdbb6752d106e336ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protectedServers", value)

    @builtins.property
    @jsii.member(jsii_name="quotaForApplicationProtection")
    def quota_for_application_protection(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime. The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "quotaForApplicationProtection"))

    @quota_for_application_protection.setter
    def quota_for_application_protection(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfe5e0c2e796d45c34e9bb9f3e414980ab2350f7ed8111d6e9984b6ed3ab649d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quotaForApplicationProtection", value)

    @builtins.property
    @jsii.member(jsii_name="quotaForCloudHoneypot")
    def quota_for_cloud_honeypot(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForCloudHoneypot:
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "quotaForCloudHoneypot"))

    @quota_for_cloud_honeypot.setter
    def quota_for_cloud_honeypot(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__775d5136e5c23f141efcdfa31ac06100c667e10ef849ebb6771f69671ac650fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quotaForCloudHoneypot", value)

    @builtins.property
    @jsii.member(jsii_name="quotaForConfigurationAssessment")
    def quota_for_configuration_assessment(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForConfigurationAssessment:
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "quotaForConfigurationAssessment"))

    @quota_for_configuration_assessment.setter
    def quota_for_configuration_assessment(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e626cdcf6f4319d3bedb60debe7c2e19756c3ace0a2a9aecedd4a8b8ac55e185)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quotaForConfigurationAssessment", value)

    @builtins.property
    @jsii.member(jsii_name="quotaForMaliciousFileDetectionSdk")
    def quota_for_malicious_file_detection_sdk(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForMaliciousFileDetectionSdk:
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "quotaForMaliciousFileDetectionSdk"))

    @quota_for_malicious_file_detection_sdk.setter
    def quota_for_malicious_file_detection_sdk(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d23b0e9f076efad032deba84603c17993490020b6bb1e6f7faf531e0f9be8da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quotaForMaliciousFileDetectionSdk", value)

    @builtins.property
    @jsii.member(jsii_name="quotaForVulnerabilityFixing")
    def quota_for_vulnerability_fixing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "quotaForVulnerabilityFixing"))

    @quota_for_vulnerability_fixing.setter
    def quota_for_vulnerability_fixing(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe6e1bff5c676cdc9769dbd4c9aea19f593b0885987dc18f2c4bd86e6de00eec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quotaForVulnerabilityFixing", value)

    @builtins.property
    @jsii.member(jsii_name="quotaForWebTamperProofing")
    def quota_for_web_tamper_proofing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForWebTamperProofing:
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "quotaForWebTamperProofing"))

    @quota_for_web_tamper_proofing.setter
    def quota_for_web_tamper_proofing(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fe8d63fc1c4fe40c7fb79197266fc8271d52b8b6597989a73ec372736802625)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quotaForWebTamperProofing", value)

    @builtins.property
    @jsii.member(jsii_name="threatAnalysis")
    def threat_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "threatAnalysis"))

    @threat_analysis.setter
    def threat_analysis(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c6c17868ae07ef2febf19ccfaab110fbd4d7c1bafcef438817a860a193c81f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "threatAnalysis", value)

    @builtins.property
    @jsii.member(jsii_name="threatAnalysisLogStorageCapacity")
    def threat_analysis_log_storage_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: threatAnalysisLogStorageCapacity:
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "threatAnalysisLogStorageCapacity"))

    @threat_analysis_log_storage_capacity.setter
    def threat_analysis_log_storage_capacity(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0abe0141ce95bfe5b304793bfd2de2dada36e5304f32a0ded2c0e06f23a7bba1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "threatAnalysisLogStorageCapacity", value)

    @builtins.property
    @jsii.member(jsii_name="vCore")
    def v_core(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vCore: This parameter indicates the number of server vCPUs.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vCore"))

    @v_core.setter
    def v_core(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39cbf8edb0b8a1f042b4d38695e9ae278f8f75912148b93b4841eb0e65ae4c3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vCore", value)

    @builtins.property
    @jsii.member(jsii_name="vulnerabilityFixing")
    def vulnerability_fixing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vulnerabilityFixing"))

    @vulnerability_fixing.setter
    def vulnerability_fixing(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ebba2644340a1786636ef540b1e79f08e9c021677264705fb69b98aa8c779835)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vulnerabilityFixing", value)

    @builtins.property
    @jsii.member(jsii_name="webTamperProtection")
    def web_tamper_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "webTamperProtection"))

    @web_tamper_protection.setter
    def web_tamper_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26fe26e4db1f842e8f2d02fbd2b7cc9baeb28cd1e438a5c03e003739ece5e046)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "webTamperProtection", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sas.RosInstance.PostPayInstanceModuleProperty",
        jsii_struct_bases=[],
        name_mapping={
            "agentless_detection": "agentlessDetection",
            "cloud_security_posture_management": "cloudSecurityPostureManagement",
            "ctdr": "ctdr",
            "host_and_container_security": "hostAndContainerSecurity",
            "serverless_asset_protection": "serverlessAssetProtection",
            "vulnerability_fixing": "vulnerabilityFixing",
        },
    )
    class PostPayInstanceModuleProperty:
        def __init__(
            self,
            *,
            agentless_detection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloud_security_posture_management: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ctdr: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_and_container_security: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            serverless_asset_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vulnerability_fixing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param agentless_detection: 
            :param cloud_security_posture_management: 
            :param ctdr: 
            :param host_and_container_security: 
            :param serverless_asset_protection: 
            :param vulnerability_fixing: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e3175587476333655c67dbeceb3804324e6bbdf80ce6d9faa4fe00850be16c69)
                check_type(argname="argument agentless_detection", value=agentless_detection, expected_type=type_hints["agentless_detection"])
                check_type(argname="argument cloud_security_posture_management", value=cloud_security_posture_management, expected_type=type_hints["cloud_security_posture_management"])
                check_type(argname="argument ctdr", value=ctdr, expected_type=type_hints["ctdr"])
                check_type(argname="argument host_and_container_security", value=host_and_container_security, expected_type=type_hints["host_and_container_security"])
                check_type(argname="argument serverless_asset_protection", value=serverless_asset_protection, expected_type=type_hints["serverless_asset_protection"])
                check_type(argname="argument vulnerability_fixing", value=vulnerability_fixing, expected_type=type_hints["vulnerability_fixing"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if agentless_detection is not None:
                self._values["agentless_detection"] = agentless_detection
            if cloud_security_posture_management is not None:
                self._values["cloud_security_posture_management"] = cloud_security_posture_management
            if ctdr is not None:
                self._values["ctdr"] = ctdr
            if host_and_container_security is not None:
                self._values["host_and_container_security"] = host_and_container_security
            if serverless_asset_protection is not None:
                self._values["serverless_asset_protection"] = serverless_asset_protection
            if vulnerability_fixing is not None:
                self._values["vulnerability_fixing"] = vulnerability_fixing

        @builtins.property
        def agentless_detection(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: agentlessDetection: Whether to enable the agentless detection module.
            '''
            result = self._values.get("agentless_detection")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloud_security_posture_management(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudSecurityPostureManagement: Whether to enable the cloud security posture management module.
            '''
            result = self._values.get("cloud_security_posture_management")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ctdr(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ctdr: Whether to enable the cloud-native threat detection and response module.
            '''
            result = self._values.get("ctdr")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_and_container_security(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hostAndContainerSecurity: Whether to enable the host and container security module.
            '''
            result = self._values.get("host_and_container_security")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def serverless_asset_protection(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverlessAssetProtection: Whether to enable the serverless asset protection module.
            '''
            result = self._values.get("serverless_asset_protection")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vulnerability_fixing(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vulnerabilityFixing: Whether to enable the vulnerability fixing module.
            '''
            result = self._values.get("vulnerability_fixing")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PostPayInstanceModuleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sas.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "pay_type": "payType",
        "anti_ransomware": "antiRansomware",
        "anti_ransomware_manage_service": "antiRansomwareManageService",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "cloud_honeypot": "cloudHoneypot",
        "configuration_assessment": "configurationAssessment",
        "container_image_scan": "containerImageScan",
        "edition": "edition",
        "log_analysis": "logAnalysis",
        "malicious_file_detection_sdk": "maliciousFileDetectionSdk",
        "period": "period",
        "period_unit": "periodUnit",
        "post_pay_instance_module": "postPayInstanceModule",
        "protected_servers": "protectedServers",
        "quota_for_application_protection": "quotaForApplicationProtection",
        "quota_for_cloud_honeypot": "quotaForCloudHoneypot",
        "quota_for_configuration_assessment": "quotaForConfigurationAssessment",
        "quota_for_malicious_file_detection_sdk": "quotaForMaliciousFileDetectionSdk",
        "quota_for_vulnerability_fixing": "quotaForVulnerabilityFixing",
        "quota_for_web_tamper_proofing": "quotaForWebTamperProofing",
        "threat_analysis": "threatAnalysis",
        "threat_analysis_log_storage_capacity": "threatAnalysisLogStorageCapacity",
        "v_core": "vCore",
        "vulnerability_fixing": "vulnerabilityFixing",
        "web_tamper_protection": "webTamperProtection",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        anti_ransomware: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        anti_ransomware_manage_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cloud_honeypot: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        configuration_assessment: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_image_scan: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_analysis: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        malicious_file_detection_sdk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        post_pay_instance_module: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.PostPayInstanceModuleProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        protected_servers: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_application_protection: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_cloud_honeypot: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_configuration_assessment: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_malicious_file_detection_sdk: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_vulnerability_fixing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        quota_for_web_tamper_proofing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis_log_storage_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_core: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vulnerability_fixing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        web_tamper_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance

        :param pay_type: 
        :param anti_ransomware: 
        :param anti_ransomware_manage_service: 
        :param auto_pay: 
        :param auto_renew: 
        :param cloud_honeypot: 
        :param configuration_assessment: 
        :param container_image_scan: 
        :param edition: 
        :param log_analysis: 
        :param malicious_file_detection_sdk: 
        :param period: 
        :param period_unit: 
        :param post_pay_instance_module: 
        :param protected_servers: 
        :param quota_for_application_protection: 
        :param quota_for_cloud_honeypot: 
        :param quota_for_configuration_assessment: 
        :param quota_for_malicious_file_detection_sdk: 
        :param quota_for_vulnerability_fixing: 
        :param quota_for_web_tamper_proofing: 
        :param threat_analysis: 
        :param threat_analysis_log_storage_capacity: 
        :param v_core: 
        :param vulnerability_fixing: 
        :param web_tamper_protection: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__042d2136fab412130412f0c1c954f580cd99d6fa68a6ad84df43943baa0f02e0)
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument anti_ransomware", value=anti_ransomware, expected_type=type_hints["anti_ransomware"])
            check_type(argname="argument anti_ransomware_manage_service", value=anti_ransomware_manage_service, expected_type=type_hints["anti_ransomware_manage_service"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument cloud_honeypot", value=cloud_honeypot, expected_type=type_hints["cloud_honeypot"])
            check_type(argname="argument configuration_assessment", value=configuration_assessment, expected_type=type_hints["configuration_assessment"])
            check_type(argname="argument container_image_scan", value=container_image_scan, expected_type=type_hints["container_image_scan"])
            check_type(argname="argument edition", value=edition, expected_type=type_hints["edition"])
            check_type(argname="argument log_analysis", value=log_analysis, expected_type=type_hints["log_analysis"])
            check_type(argname="argument malicious_file_detection_sdk", value=malicious_file_detection_sdk, expected_type=type_hints["malicious_file_detection_sdk"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument post_pay_instance_module", value=post_pay_instance_module, expected_type=type_hints["post_pay_instance_module"])
            check_type(argname="argument protected_servers", value=protected_servers, expected_type=type_hints["protected_servers"])
            check_type(argname="argument quota_for_application_protection", value=quota_for_application_protection, expected_type=type_hints["quota_for_application_protection"])
            check_type(argname="argument quota_for_cloud_honeypot", value=quota_for_cloud_honeypot, expected_type=type_hints["quota_for_cloud_honeypot"])
            check_type(argname="argument quota_for_configuration_assessment", value=quota_for_configuration_assessment, expected_type=type_hints["quota_for_configuration_assessment"])
            check_type(argname="argument quota_for_malicious_file_detection_sdk", value=quota_for_malicious_file_detection_sdk, expected_type=type_hints["quota_for_malicious_file_detection_sdk"])
            check_type(argname="argument quota_for_vulnerability_fixing", value=quota_for_vulnerability_fixing, expected_type=type_hints["quota_for_vulnerability_fixing"])
            check_type(argname="argument quota_for_web_tamper_proofing", value=quota_for_web_tamper_proofing, expected_type=type_hints["quota_for_web_tamper_proofing"])
            check_type(argname="argument threat_analysis", value=threat_analysis, expected_type=type_hints["threat_analysis"])
            check_type(argname="argument threat_analysis_log_storage_capacity", value=threat_analysis_log_storage_capacity, expected_type=type_hints["threat_analysis_log_storage_capacity"])
            check_type(argname="argument v_core", value=v_core, expected_type=type_hints["v_core"])
            check_type(argname="argument vulnerability_fixing", value=vulnerability_fixing, expected_type=type_hints["vulnerability_fixing"])
            check_type(argname="argument web_tamper_protection", value=web_tamper_protection, expected_type=type_hints["web_tamper_protection"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pay_type": pay_type,
        }
        if anti_ransomware is not None:
            self._values["anti_ransomware"] = anti_ransomware
        if anti_ransomware_manage_service is not None:
            self._values["anti_ransomware_manage_service"] = anti_ransomware_manage_service
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if cloud_honeypot is not None:
            self._values["cloud_honeypot"] = cloud_honeypot
        if configuration_assessment is not None:
            self._values["configuration_assessment"] = configuration_assessment
        if container_image_scan is not None:
            self._values["container_image_scan"] = container_image_scan
        if edition is not None:
            self._values["edition"] = edition
        if log_analysis is not None:
            self._values["log_analysis"] = log_analysis
        if malicious_file_detection_sdk is not None:
            self._values["malicious_file_detection_sdk"] = malicious_file_detection_sdk
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if post_pay_instance_module is not None:
            self._values["post_pay_instance_module"] = post_pay_instance_module
        if protected_servers is not None:
            self._values["protected_servers"] = protected_servers
        if quota_for_application_protection is not None:
            self._values["quota_for_application_protection"] = quota_for_application_protection
        if quota_for_cloud_honeypot is not None:
            self._values["quota_for_cloud_honeypot"] = quota_for_cloud_honeypot
        if quota_for_configuration_assessment is not None:
            self._values["quota_for_configuration_assessment"] = quota_for_configuration_assessment
        if quota_for_malicious_file_detection_sdk is not None:
            self._values["quota_for_malicious_file_detection_sdk"] = quota_for_malicious_file_detection_sdk
        if quota_for_vulnerability_fixing is not None:
            self._values["quota_for_vulnerability_fixing"] = quota_for_vulnerability_fixing
        if quota_for_web_tamper_proofing is not None:
            self._values["quota_for_web_tamper_proofing"] = quota_for_web_tamper_proofing
        if threat_analysis is not None:
            self._values["threat_analysis"] = threat_analysis
        if threat_analysis_log_storage_capacity is not None:
            self._values["threat_analysis_log_storage_capacity"] = threat_analysis_log_storage_capacity
        if v_core is not None:
            self._values["v_core"] = v_core
        if vulnerability_fixing is not None:
            self._values["vulnerability_fixing"] = vulnerability_fixing
        if web_tamper_protection is not None:
            self._values["web_tamper_protection"] = web_tamper_protection

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method of the firewall instance. Valid values:
        PayAsYouGo: pay-as-you-go
        Subscription: subscription
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def anti_ransomware(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business. We recommend that you configure a data protection capacity of 50GB for each server.
        '''
        result = self._values.get("anti_ransomware")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def anti_ransomware_manage_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        antiRansomwareManageService: Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response.
        Note:
        '''
        result = self._values.get("anti_ransomware_manage_service")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to auto pay the bill.Default: True
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto renew the prepay instance.Default: False
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cloud_honeypot(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner. You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
        '''
        result = self._values.get("cloud_honeypot")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def configuration_assessment(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.
        '''
        result = self._values.get("configuration_assessment")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_image_scan(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: containerImageScan: Security Center provides the container image scan feature to protect containers. Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
        '''
        result = self._values.get("container_image_scan")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def edition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: edition: The version of Security center.
        '''
        result = self._values.get("edition")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_analysis(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
        '''
        result = self._values.get("log_analysis")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def malicious_file_detection_sdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This ensures the security of the running environment of your cloud services.
        '''
        result = self._values.get("malicious_file_detection_sdk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
        If periodUnit is year, the valid range is 1, 2, 3
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def post_pay_instance_module(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.PostPayInstanceModuleProperty]]:
        '''
        :Property: postPayInstanceModule: PayAsYouGo instance module configuration.
        '''
        result = self._values.get("post_pay_instance_module")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.PostPayInstanceModuleProperty]], result)

    @builtins.property
    def protected_servers(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protectedServers: Authorization is the same as the number of servers you have.
        '''
        result = self._values.get("protected_servers")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_application_protection(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime. The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
        '''
        result = self._values.get("quota_for_application_protection")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_cloud_honeypot(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForCloudHoneypot:
        '''
        result = self._values.get("quota_for_cloud_honeypot")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_configuration_assessment(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForConfigurationAssessment:
        '''
        result = self._values.get("quota_for_configuration_assessment")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_malicious_file_detection_sdk(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForMaliciousFileDetectionSdk:
        '''
        result = self._values.get("quota_for_malicious_file_detection_sdk")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_vulnerability_fixing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
        '''
        result = self._values.get("quota_for_vulnerability_fixing")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def quota_for_web_tamper_proofing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: quotaForWebTamperProofing:
        '''
        result = self._values.get("quota_for_web_tamper_proofing")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
        '''
        result = self._values.get("threat_analysis")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis_log_storage_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: threatAnalysisLogStorageCapacity:
        '''
        result = self._values.get("threat_analysis_log_storage_capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_core(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vCore: This parameter indicates the number of server vCPUs.
        '''
        result = self._values.get("v_core")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vulnerability_fixing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
        '''
        result = self._values.get("vulnerability_fixing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def web_tamper_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
        '''
        result = self._values.get("web_tamper_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IInstance",
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
]

publication.publish()

def _typecheckingstub__b44a22556e75b5bb09a9a99d3fb16371630f283d6d96cf6feb0b7d0bddd787b0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68fa458eeca4f1b040765d41a7c2a66166dddaf3f2f55001177f6087923803b2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad855369be860b59c4c8641c9c8da8657b381bf3ddc5148c9ec85c18c514dc62(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06c4a77b1382f8ed1ad1f55a39ad91628cbf676115c0f78c0c907d0fa4363378(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41c89e642bc20925ed3e5944bb243257066a747bfb7b24162a36f96e8f8ec685(
    *,
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    anti_ransomware: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    anti_ransomware_manage_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_honeypot: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    configuration_assessment: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_image_scan: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_analysis: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    malicious_file_detection_sdk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_pay_instance_module: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.PostPayInstanceModuleProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    protected_servers: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_application_protection: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_cloud_honeypot: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_configuration_assessment: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_malicious_file_detection_sdk: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_vulnerability_fixing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_web_tamper_proofing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis_log_storage_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_core: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vulnerability_fixing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    web_tamper_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06b1028af68a2cd116cc7bbc7920fe53b05b7c64ce96107dd79a1621e81f3633(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa515eb661a70e0dc0cd98a17fbbfb1b5eeafa9803dcab7873f31ba57b47e4c5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5dd3ec25cbd46ac953d32408f37f66ebfc820af6bc7dc93df5f7bccc16a948e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a987aadfe63378074ce04114170018975fb5dedb2e64ebe7e437d8e0c3d8c7a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23c7fa51e56286208ffad9e45b00c376fb7e3518fe65fce32036ac13f567061b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d004da6d6d7d448248bbb8b05a922e57adc1c524f6d817c5afd5e75ca1d0c296(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__197a3e59bb90b85eb9f5a00e46b9e927ad32efbd12302d3aedc5e2f01bde1e04(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd64ac3a1238ca0eff42499385bd6e70a47c1598e153ee47206d949e8a090997(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54dc55c8c35ca9a39aff35df1f3db09fc11b8cd15e789d9c140779e0a97a1b21(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__508189de4aa4458fc09d0fe2308134ceeda9c974f4dfacedefd6c546f103e9e1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0937de126f2320c46f54532e8ba8ad443d9dc509d4933eb5df3603713c5123cc(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc5a790e2d4cd04ba05b0a6bb456c30c04681b5c3f2bd8bc3fcca32dd4a62adc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f95d49fe3f678e354a002d7755f8ffcd3f07080f363059607405ac0442cfe40(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d9398b79a00dbd56229f525ca4e2c07ac8438a06bc58ac8d5a8a1f23c607886(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7769481dbd243907f0571e387b5139f0f7dceb3199572f1407ad33f56b65ae17(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__482e7e85d57748a54cb3a0856702086034702c72081c8231d0ceb3c2418f4468(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__283ef4f1acb5d00c1ee41cb7c20d2f12510f1d91b966b35f81c6dc8b3c432586(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.PostPayInstanceModuleProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39cb22e544921f5c9aed4eb5c7b4cfe7ad065208e8f96dbdbb6752d106e336ab(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfe5e0c2e796d45c34e9bb9f3e414980ab2350f7ed8111d6e9984b6ed3ab649d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__775d5136e5c23f141efcdfa31ac06100c667e10ef849ebb6771f69671ac650fb(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e626cdcf6f4319d3bedb60debe7c2e19756c3ace0a2a9aecedd4a8b8ac55e185(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d23b0e9f076efad032deba84603c17993490020b6bb1e6f7faf531e0f9be8da(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe6e1bff5c676cdc9769dbd4c9aea19f593b0885987dc18f2c4bd86e6de00eec(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fe8d63fc1c4fe40c7fb79197266fc8271d52b8b6597989a73ec372736802625(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c6c17868ae07ef2febf19ccfaab110fbd4d7c1bafcef438817a860a193c81f1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0abe0141ce95bfe5b304793bfd2de2dada36e5304f32a0ded2c0e06f23a7bba1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39cbf8edb0b8a1f042b4d38695e9ae278f8f75912148b93b4841eb0e65ae4c3b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebba2644340a1786636ef540b1e79f08e9c021677264705fb69b98aa8c779835(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26fe26e4db1f842e8f2d02fbd2b7cc9baeb28cd1e438a5c03e003739ece5e046(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3175587476333655c67dbeceb3804324e6bbdf80ce6d9faa4fe00850be16c69(
    *,
    agentless_detection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_security_posture_management: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ctdr: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_and_container_security: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_asset_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vulnerability_fixing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__042d2136fab412130412f0c1c954f580cd99d6fa68a6ad84df43943baa0f02e0(
    *,
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    anti_ransomware: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    anti_ransomware_manage_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_honeypot: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    configuration_assessment: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_image_scan: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_analysis: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    malicious_file_detection_sdk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    post_pay_instance_module: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.PostPayInstanceModuleProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    protected_servers: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_application_protection: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_cloud_honeypot: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_configuration_assessment: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_malicious_file_detection_sdk: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_vulnerability_fixing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    quota_for_web_tamper_proofing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis_log_storage_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_core: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vulnerability_fixing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    web_tamper_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
