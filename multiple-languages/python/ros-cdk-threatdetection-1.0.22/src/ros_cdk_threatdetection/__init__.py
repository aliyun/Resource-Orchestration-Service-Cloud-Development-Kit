'''
## Aliyun ROS THREATDETECTION Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as THREATDETECTION from '@alicloud/ros-cdk-threatdetection';
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


class AntiBruteForceRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.AntiBruteForceRule",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::AntiBruteForceRule``, which is used to create a defense rule against brute-force attacks.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAntiBruteForceRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AntiBruteForceRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f8659f87b10c0fcf9d9fbf71d229cd6d78fbd380def248ca47c590aaba71e92)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleId")
    def attr_anti_brute_force_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AntiBruteForceRuleId: The ID of the defense rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleName")
    def attr_anti_brute_force_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AntiBruteForceRuleName: The name of the defense rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultRule")
    def attr_default_rule(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.

        Valid values:

        - true: yes
        - false: no
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultRule"))

    @builtins.property
    @jsii.member(jsii_name="attrFailCount")
    def attr_fail_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFailCount"))

    @builtins.property
    @jsii.member(jsii_name="attrForbiddenTime")
    def attr_forbidden_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.

        Unit: minutes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrForbiddenTime"))

    @builtins.property
    @jsii.member(jsii_name="attrSpan")
    def attr_span(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Span: The period of time during which logon failures from an account are measured.

        Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpan"))

    @builtins.property
    @jsii.member(jsii_name="attrUuidList")
    def attr_uuid_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UuidList: The UUIDs of the server to which the defense rule is applied.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUuidList"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.AntiBruteForceRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "anti_brute_force_rule_name": "antiBruteForceRuleName",
        "fail_count": "failCount",
        "forbidden_time": "forbiddenTime",
        "span": "span",
        "uuid_list": "uuidList",
        "default_rule": "defaultRule",
    },
)
class AntiBruteForceRuleProps:
    def __init__(
        self,
        *,
        anti_brute_force_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        fail_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        forbidden_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        span: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        uuid_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        default_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AntiBruteForceRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule

        :param anti_brute_force_rule_name: Property antiBruteForceRuleName: The name of the defense rule.
        :param fail_count: Property failCount: The maximum number of failed logon attempts from an account. Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
        :param forbidden_time: Property forbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes. Valid values: - 5: 5 minutes - 15: 15 minutes - 30: 30 minutes - 60: 1 hour - 120: 2 hours - 360: 6 hours - 720: 12 hours - 1440: 24 hours - 10080: 7 days - 52560000: permanent
        :param span: Property span: The maximum period of time during which failed logon attempts from an account can occur. Unit: minutes. Valid values: - 1 - 2 - 5 - 10 - 15
        :param uuid_list: Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
        :param default_rule: Property defaultRule: Specifies whether to set the defense rule as the default rule. Valid values: - true: yes - false: no
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__833ae8cb35491a406ec6b074d3ea52516c205541d1800a976c9e12f1983661e2)
            check_type(argname="argument anti_brute_force_rule_name", value=anti_brute_force_rule_name, expected_type=type_hints["anti_brute_force_rule_name"])
            check_type(argname="argument fail_count", value=fail_count, expected_type=type_hints["fail_count"])
            check_type(argname="argument forbidden_time", value=forbidden_time, expected_type=type_hints["forbidden_time"])
            check_type(argname="argument span", value=span, expected_type=type_hints["span"])
            check_type(argname="argument uuid_list", value=uuid_list, expected_type=type_hints["uuid_list"])
            check_type(argname="argument default_rule", value=default_rule, expected_type=type_hints["default_rule"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "anti_brute_force_rule_name": anti_brute_force_rule_name,
            "fail_count": fail_count,
            "forbidden_time": forbidden_time,
            "span": span,
            "uuid_list": uuid_list,
        }
        if default_rule is not None:
            self._values["default_rule"] = default_rule

    @builtins.property
    def anti_brute_force_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property antiBruteForceRuleName: The name of the defense rule.'''
        result = self._values.get("anti_brute_force_rule_name")
        assert result is not None, "Required property 'anti_brute_force_rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def fail_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property failCount: The maximum number of failed logon attempts from an account.

        Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
        '''
        result = self._values.get("fail_count")
        assert result is not None, "Required property 'fail_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def forbidden_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property forbiddenTime: The period of time during which logons from an account are not allowed.

        Unit: minutes. Valid values:

        - 5: 5 minutes
        - 15: 15 minutes
        - 30: 30 minutes
        - 60: 1 hour
        - 120: 2 hours
        - 360: 6 hours
        - 720: 12 hours
        - 1440: 24 hours
        - 10080: 7 days
        - 52560000: permanent
        '''
        result = self._values.get("forbidden_time")
        assert result is not None, "Required property 'forbidden_time' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def span(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property span: The maximum period of time during which failed logon attempts from an account can occur.

        Unit: minutes. Valid values:

        - 1
        - 2
        - 5
        - 10
        - 15
        '''
        result = self._values.get("span")
        assert result is not None, "Required property 'span' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def uuid_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.'''
        result = self._values.get("uuid_list")
        assert result is not None, "Required property 'uuid_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def default_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultRule: Specifies whether to set the defense rule as the default rule.

        Valid values:

        - true: yes
        - false: no
        '''
        result = self._values.get("default_rule")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AntiBruteForceRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ThreatDetection::Instance``DATASOURCE::ThreatDetection::AntiBruteForceRules is used to query the basic information about defense rules against brute-force attacks.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__75942e5f058c894ba363dec82c603e65f0c217242931be81f99c562705118e39)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBuyNumber")
    def attr_buy_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BuyNumber: Number of servers.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBuyNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScan")
    def attr_container_image_scan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContainerImageScan: Container Image security scan.

        Interval type, value interval:[0,200000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerImageScan"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScanNew")
    def attr_container_image_scan_new(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContainerImageScanNew: Container Image security scan.

        Interval type, value interval:[0,200000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerImageScanNew"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypot")
    def attr_honeypot(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Honeypot: Number of cloud honeypot licenses.

        Interval type, value interval:[20,500].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypot"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotSwitch")
    def attr_honeypot_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HoneypotSwitch: Cloud honeypot.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRaspCount")
    def attr_rasp_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RaspCount: Number of application protection licenses.

        Interval type, value interval:[1,100000000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRaspCount"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalPeriodUnit")
    def attr_renewal_period_unit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalPeriodUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RenewalStatus: Automatic renewal status, value:.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewPeriod")
    def attr_renew_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RenewPeriod: Automatic renewal cycle, in months.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrSasAntiRansomware")
    def attr_sas_anti_ransomware(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SasAntiRansomware: Anti-ransomware capacity.

        Unit: GB. Interval type, value interval:[0,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasAntiRansomware"))

    @builtins.property
    @jsii.member(jsii_name="attrSasCspm")
    def attr_sas_cspm(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasCspm"))

    @builtins.property
    @jsii.member(jsii_name="attrSasCspmSwitch")
    def attr_sas_cspm_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SasCspmSwitch: Cloud platform configuration check switch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasCspmSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSc")
    def attr_sas_sc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SasSc: Security screen.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSc"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSdk")
    def attr_sas_sdk(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SasSdk: Number of malicious file detections.

        Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSdk"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSdkSwitch")
    def attr_sas_sdk_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SasSdkSwitch: Malicious file detection SDK.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSdkSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSlsStorage")
    def attr_sas_sls_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SasSlsStorage: Log analysis storage capacity.

        Unit: GB. Interval type, value interval:[0,600000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSlsStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardBoolean")
    def attr_sas_webguard_boolean(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SasWebguardBoolean: Web tamper-proof switch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasWebguardBoolean"))

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardOrderNum")
    def attr_sas_webguard_order_num(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SasWebguardOrderNum: Tamper-proof authorization number.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasWebguardOrderNum"))

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysis")
    def attr_threat_analysis(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ThreatAnalysis: Threat Analysis log storage capacity.

        Interval type, value interval:[0,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrThreatAnalysis"))

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysisSwitch")
    def attr_threat_analysis_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ThreatAnalysisSwitch: Threat analysis.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrThreatAnalysisSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrVCore")
    def attr_v_core(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VCore: Number of cores.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVCore"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionCode")
    def attr_version_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VersionCode: Select the security center version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionCode"))

    @builtins.property
    @jsii.member(jsii_name="attrVulCount")
    def attr_vul_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVulCount"))

    @builtins.property
    @jsii.member(jsii_name="attrVulSwitch")
    def attr_vul_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VulSwitch: Vulnerability fix switch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVulSwitch"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "payment_type": "paymentType",
        "version_code": "versionCode",
        "buy_number": "buyNumber",
        "container_image_scan": "containerImageScan",
        "container_image_scan_new": "containerImageScanNew",
        "honeypot": "honeypot",
        "honeypot_switch": "honeypotSwitch",
        "modify_type": "modifyType",
        "period": "period",
        "product_type": "productType",
        "rasp_count": "raspCount",
        "renewal_period_unit": "renewalPeriodUnit",
        "renewal_status": "renewalStatus",
        "renew_period": "renewPeriod",
        "sas_anti_ransomware": "sasAntiRansomware",
        "sas_cspm": "sasCspm",
        "sas_cspm_switch": "sasCspmSwitch",
        "sas_sc": "sasSc",
        "sas_sdk": "sasSdk",
        "sas_sdk_switch": "sasSdkSwitch",
        "sas_sls_storage": "sasSlsStorage",
        "sas_webguard_boolean": "sasWebguardBoolean",
        "sas_webguard_order_num": "sasWebguardOrderNum",
        "threat_analysis": "threatAnalysis",
        "threat_analysis_switch": "threatAnalysisSwitch",
        "v_core": "vCore",
        "vul_count": "vulCount",
        "vul_switch": "vulSwitch",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        buy_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_image_scan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_image_scan_new: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        honeypot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        honeypot_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rasp_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_anti_ransomware: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_cspm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_cspm_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sdk_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sls_storage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_webguard_boolean: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_webguard_order_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_core: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vul_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vul_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance

        :param payment_type: Property paymentType: The payment type of the resource.
        :param version_code: Property versionCode: Select the security center version. Value: - level7: Antivirus Edition. - level3: Premium version. - level2: Enterprise Edition. - level8: Ultimate. - level10: Purchase value-added services only.
        :param buy_number: Property buyNumber: Number of servers.
        :param container_image_scan: Property containerImageScan: Container Image security scan. Interval type, value interval:[0,200000]. .. epigraph:: The step size is 20, that is, only multiples of 20 can be filled in.
        :param container_image_scan_new: Property containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000]. .. epigraph:: The step size is 20, that is, only multiples of 20 can be filled in.
        :param honeypot: Property honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500]. .. epigraph:: This module can only be purchased when honeypot_switch = 1, starting with 20.
        :param honeypot_switch: Property honeypotSwitch: Cloud honeypot. Value: - 1: Yes. - 2: No.
        :param modify_type: Property modifyType: Change configuration type, value - Upgrade: Upgrade. - Downgrade: Downgrade.
        :param period: Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products. .. epigraph:: must be set when creating a prepaid instance.
        :param product_type: Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
        :param rasp_count: Property raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
        :param renewal_period_unit: Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month. - Y: years. .. epigraph:: Must be set when RenewalStatus = AutoRenewal.
        :param renewal_status: Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal. - ManualRenewal: manual renewal. Default ManualRenewal.
        :param renew_period: Property renewPeriod: Automatic renewal cycle, in months. .. epigraph:: When **RenewalStatus** is set to **AutoRenewal**, it must be set.
        :param sas_anti_ransomware: Property sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999]. .. epigraph:: The step size is 10, that is, only multiples of 10 can be filled in.
        :param sas_cspm: Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999]. .. epigraph:: You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
        :param sas_cspm_switch: Property sasCspmSwitch: Cloud platform configuration check switch. Value: - 0: No. - 1: Yes.
        :param sas_sc: Property sasSc: Security screen. Value: - true: Yes. - false: No.
        :param sas_sdk: Property sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999]. .. epigraph:: This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        :param sas_sdk_switch: Property sasSdkSwitch: Malicious file detection SDK.
        :param sas_sls_storage: Property sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000]. .. epigraph:: The step size is 10, that is, only multiples of 10 can be filled in.
        :param sas_webguard_boolean: Property sasWebguardBoolean: Web tamper-proof switch. Value: - 0: No. - 1: Yes.
        :param sas_webguard_order_num: Property sasWebguardOrderNum: Tamper-proof authorization number. Value: - 0: No - 1: Yes.
        :param threat_analysis: Property threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999]. .. epigraph:: This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        :param threat_analysis_switch: Property threatAnalysisSwitch: Threat analysis. Value: - 0: No. - 1: Yes.
        :param v_core: Property vCore: Number of cores.
        :param vul_count: Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000]. .. epigraph:: This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
        :param vul_switch: Property vulSwitch: Vulnerability fix switch. Value: - 0: No. - 1: Yes. .. epigraph:: When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d634b27a82f45ff70d30b663b3632c97500f94b6b81556222a6b8fe8f7b3f74d)
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument version_code", value=version_code, expected_type=type_hints["version_code"])
            check_type(argname="argument buy_number", value=buy_number, expected_type=type_hints["buy_number"])
            check_type(argname="argument container_image_scan", value=container_image_scan, expected_type=type_hints["container_image_scan"])
            check_type(argname="argument container_image_scan_new", value=container_image_scan_new, expected_type=type_hints["container_image_scan_new"])
            check_type(argname="argument honeypot", value=honeypot, expected_type=type_hints["honeypot"])
            check_type(argname="argument honeypot_switch", value=honeypot_switch, expected_type=type_hints["honeypot_switch"])
            check_type(argname="argument modify_type", value=modify_type, expected_type=type_hints["modify_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument product_type", value=product_type, expected_type=type_hints["product_type"])
            check_type(argname="argument rasp_count", value=rasp_count, expected_type=type_hints["rasp_count"])
            check_type(argname="argument renewal_period_unit", value=renewal_period_unit, expected_type=type_hints["renewal_period_unit"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument renew_period", value=renew_period, expected_type=type_hints["renew_period"])
            check_type(argname="argument sas_anti_ransomware", value=sas_anti_ransomware, expected_type=type_hints["sas_anti_ransomware"])
            check_type(argname="argument sas_cspm", value=sas_cspm, expected_type=type_hints["sas_cspm"])
            check_type(argname="argument sas_cspm_switch", value=sas_cspm_switch, expected_type=type_hints["sas_cspm_switch"])
            check_type(argname="argument sas_sc", value=sas_sc, expected_type=type_hints["sas_sc"])
            check_type(argname="argument sas_sdk", value=sas_sdk, expected_type=type_hints["sas_sdk"])
            check_type(argname="argument sas_sdk_switch", value=sas_sdk_switch, expected_type=type_hints["sas_sdk_switch"])
            check_type(argname="argument sas_sls_storage", value=sas_sls_storage, expected_type=type_hints["sas_sls_storage"])
            check_type(argname="argument sas_webguard_boolean", value=sas_webguard_boolean, expected_type=type_hints["sas_webguard_boolean"])
            check_type(argname="argument sas_webguard_order_num", value=sas_webguard_order_num, expected_type=type_hints["sas_webguard_order_num"])
            check_type(argname="argument threat_analysis", value=threat_analysis, expected_type=type_hints["threat_analysis"])
            check_type(argname="argument threat_analysis_switch", value=threat_analysis_switch, expected_type=type_hints["threat_analysis_switch"])
            check_type(argname="argument v_core", value=v_core, expected_type=type_hints["v_core"])
            check_type(argname="argument vul_count", value=vul_count, expected_type=type_hints["vul_count"])
            check_type(argname="argument vul_switch", value=vul_switch, expected_type=type_hints["vul_switch"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "payment_type": payment_type,
            "version_code": version_code,
        }
        if buy_number is not None:
            self._values["buy_number"] = buy_number
        if container_image_scan is not None:
            self._values["container_image_scan"] = container_image_scan
        if container_image_scan_new is not None:
            self._values["container_image_scan_new"] = container_image_scan_new
        if honeypot is not None:
            self._values["honeypot"] = honeypot
        if honeypot_switch is not None:
            self._values["honeypot_switch"] = honeypot_switch
        if modify_type is not None:
            self._values["modify_type"] = modify_type
        if period is not None:
            self._values["period"] = period
        if product_type is not None:
            self._values["product_type"] = product_type
        if rasp_count is not None:
            self._values["rasp_count"] = rasp_count
        if renewal_period_unit is not None:
            self._values["renewal_period_unit"] = renewal_period_unit
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if renew_period is not None:
            self._values["renew_period"] = renew_period
        if sas_anti_ransomware is not None:
            self._values["sas_anti_ransomware"] = sas_anti_ransomware
        if sas_cspm is not None:
            self._values["sas_cspm"] = sas_cspm
        if sas_cspm_switch is not None:
            self._values["sas_cspm_switch"] = sas_cspm_switch
        if sas_sc is not None:
            self._values["sas_sc"] = sas_sc
        if sas_sdk is not None:
            self._values["sas_sdk"] = sas_sdk
        if sas_sdk_switch is not None:
            self._values["sas_sdk_switch"] = sas_sdk_switch
        if sas_sls_storage is not None:
            self._values["sas_sls_storage"] = sas_sls_storage
        if sas_webguard_boolean is not None:
            self._values["sas_webguard_boolean"] = sas_webguard_boolean
        if sas_webguard_order_num is not None:
            self._values["sas_webguard_order_num"] = sas_webguard_order_num
        if threat_analysis is not None:
            self._values["threat_analysis"] = threat_analysis
        if threat_analysis_switch is not None:
            self._values["threat_analysis_switch"] = threat_analysis_switch
        if v_core is not None:
            self._values["v_core"] = v_core
        if vul_count is not None:
            self._values["vul_count"] = vul_count
        if vul_switch is not None:
            self._values["vul_switch"] = vul_switch

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property paymentType: The payment type of the resource.'''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property versionCode: Select the security center version.

        Value:

        - level7: Antivirus Edition.
        - level3: Premium version.
        - level2: Enterprise Edition.
        - level8: Ultimate.
        - level10: Purchase value-added services only.
        '''
        result = self._values.get("version_code")
        assert result is not None, "Required property 'version_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def buy_number(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property buyNumber: Number of servers.'''
        result = self._values.get("buy_number")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_image_scan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property containerImageScan: Container Image security scan.

        Interval type, value interval:[0,200000].
        .. epigraph::

           The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        result = self._values.get("container_image_scan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_image_scan_new(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property containerImageScanNew: Container Image security scan.

        Interval type, value interval:[0,200000].
        .. epigraph::

           The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        result = self._values.get("container_image_scan_new")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def honeypot(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property honeypot: Number of cloud honeypot licenses.

        Interval type, value interval:[20,500].
        .. epigraph::

           This module can only be purchased when honeypot_switch = 1, starting with 20.
        '''
        result = self._values.get("honeypot")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def honeypot_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property honeypotSwitch: Cloud honeypot.

        Value:

        - 1: Yes.
        - 2: No.
        '''
        result = self._values.get("honeypot_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property modifyType: Change configuration type, value - Upgrade: Upgrade.

        - Downgrade: Downgrade.
        '''
        result = self._values.get("modify_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: Prepaid cycle.

        The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        .. epigraph::

           must be set when creating a prepaid instance.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property productType: Product type, only China station needs to be set to sas, international station does not need to set.'''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rasp_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property raspCount: Number of application protection licenses.

        Interval type, value interval:[1,100000000].
        '''
        result = self._values.get("rasp_count")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month.

        - Y: years.

        .. epigraph::

           Must be set when RenewalStatus = AutoRenewal.
        '''
        result = self._values.get("renewal_period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.

        - ManualRenewal: manual renewal.
          Default ManualRenewal.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewPeriod: Automatic renewal cycle, in months.

        .. epigraph::

           When **RenewalStatus** is set to **AutoRenewal**, it must be set.
        '''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_anti_ransomware(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasAntiRansomware: Anti-ransomware capacity.

        Unit: GB. Interval type, value interval:[0,9999999999].
        .. epigraph::

           The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_anti_ransomware")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_cspm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].

        .. epigraph::

           You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_cspm")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_cspm_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasCspmSwitch: Cloud platform configuration check switch.

        Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("sas_cspm_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasSc: Security screen.

        Value:

        - true: Yes.
        - false: No.
        '''
        result = self._values.get("sas_sc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasSdk: Number of malicious file detections.

        Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        .. epigraph::

           This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_sdk")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sdk_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasSdkSwitch: Malicious file detection SDK.'''
        result = self._values.get("sas_sdk_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sls_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasSlsStorage: Log analysis storage capacity.

        Unit: GB. Interval type, value interval:[0,600000].
        .. epigraph::

           The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_sls_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_webguard_boolean(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasWebguardBoolean: Web tamper-proof switch.

        Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("sas_webguard_boolean")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_webguard_order_num(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sasWebguardOrderNum: Tamper-proof authorization number.

        Value:

        - 0: No
        - 1: Yes.
        '''
        result = self._values.get("sas_webguard_order_num")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property threatAnalysis: Threat Analysis log storage capacity.

        Interval type, value interval:[0,9999999999].
        .. epigraph::

           This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("threat_analysis")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property threatAnalysisSwitch: Threat analysis.

        Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("threat_analysis_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_core(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vCore: Number of cores.'''
        result = self._values.get("v_core")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vul_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].

        .. epigraph::

           This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
        '''
        result = self._values.get("vul_count")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vul_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vulSwitch: Vulnerability fix switch.

        Value:

        - 0: No.
        - 1: Yes.

        .. epigraph::

           When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
        '''
        result = self._values.get("vul_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAntiBruteForceRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosAntiBruteForceRule",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::AntiBruteForceRule``, which is used to create a defense rule against brute-force attacks.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AntiBruteForceRule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAntiBruteForceRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4f5e49fe6474e073db6dd4d70039e455c895e18161e7c28f6c21f3c84c0940e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__35cc99e373e0e82d27e976748a471f4a65213ecfc9de5ab23d462e4d1990437a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleId")
    def attr_anti_brute_force_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AntiBruteForceRuleId: The ID of the defense rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleName")
    def attr_anti_brute_force_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AntiBruteForceRuleName: The name of the defense rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultRule")
    def attr_default_rule(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DefaultRule: Specifies whether to set the defense rule as the default rule.
        Valid values:

        - true: yes
        - false: no
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultRule"))

    @builtins.property
    @jsii.member(jsii_name="attrFailCount")
    def attr_fail_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFailCount"))

    @builtins.property
    @jsii.member(jsii_name="attrForbiddenTime")
    def attr_forbidden_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ForbiddenTime: The period of time during which logons from an account are not allowed. Unit: minutes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrForbiddenTime"))

    @builtins.property
    @jsii.member(jsii_name="attrSpan")
    def attr_span(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Span: The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpan"))

    @builtins.property
    @jsii.member(jsii_name="attrUuidList")
    def attr_uuid_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UuidList: The UUIDs of the server to which the defense rule is applied.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUuidList"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="antiBruteForceRuleName")
    def anti_brute_force_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: antiBruteForceRuleName: The name of the defense rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "antiBruteForceRuleName"))

    @anti_brute_force_rule_name.setter
    def anti_brute_force_rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1813e54b2aec4b1cec245827eca09d795d1c3be24f7769971f4f2252fe6f5950)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "antiBruteForceRuleName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d8040a936974fcc6afb22cb1899651f8613194ba2287ae0c406753b9d21d0c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="failCount")
    def fail_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        failCount: The maximum number of failed logon attempts from an account.
        Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "failCount"))

    @fail_count.setter
    def fail_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02755fbb78929b92f6d36cc8d76c6099803e871a020c716d7a383cc249c0a8e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "failCount", value)

    @builtins.property
    @jsii.member(jsii_name="forbiddenTime")
    def forbidden_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        forbiddenTime: The period of time during which logons from an account are not allowed.
        Unit: minutes. Valid values:

        - 5: 5 minutes
        - 15: 15 minutes
        - 30: 30 minutes
        - 60: 1 hour
        - 120: 2 hours
        - 360: 6 hours
        - 720: 12 hours
        - 1440: 24 hours
        - 10080: 7 days
        - 52560000: permanent
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "forbiddenTime"))

    @forbidden_time.setter
    def forbidden_time(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3fae800ff0e50053dc1ef5a56f5a57a5631928267a28667605704d6ce238f07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "forbiddenTime", value)

    @builtins.property
    @jsii.member(jsii_name="span")
    def span(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        span: The maximum period of time during which failed logon attempts from an account can occur.
        Unit: minutes. Valid values:

        - 1
        - 2
        - 5
        - 10
        - 15
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "span"))

    @span.setter
    def span(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c9204843e8472833a4d8b1984c825632a49ffbe7650891c82a94a0b589ea4ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "span", value)

    @builtins.property
    @jsii.member(jsii_name="uuidList")
    def uuid_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: uuidList: The UUIDs of the servers to which you want to apply the defense rule.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "uuidList"))

    @uuid_list.setter
    def uuid_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94698ff5e2caebc141a70e4b6bb7d46f061f2fc91d222998a181baf02fb111dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uuidList", value)

    @builtins.property
    @jsii.member(jsii_name="defaultRule")
    def default_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultRule: Specifies whether to set the defense rule as the default rule.
        Valid values:

        - true: yes
        - false: no
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultRule"))

    @default_rule.setter
    def default_rule(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8211a5caa7daa6f4a87b5871c1e9c303dd12f9277f2429192c3c6c0ab46657af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultRule", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosAntiBruteForceRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "anti_brute_force_rule_name": "antiBruteForceRuleName",
        "fail_count": "failCount",
        "forbidden_time": "forbiddenTime",
        "span": "span",
        "uuid_list": "uuidList",
        "default_rule": "defaultRule",
    },
)
class RosAntiBruteForceRuleProps:
    def __init__(
        self,
        *,
        anti_brute_force_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        fail_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        forbidden_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        span: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        uuid_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        default_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAntiBruteForceRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule

        :param anti_brute_force_rule_name: 
        :param fail_count: 
        :param forbidden_time: 
        :param span: 
        :param uuid_list: 
        :param default_rule: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d101d0a61041898571c013b511320f2f140acab32dda658b6d40707e8d8bcb20)
            check_type(argname="argument anti_brute_force_rule_name", value=anti_brute_force_rule_name, expected_type=type_hints["anti_brute_force_rule_name"])
            check_type(argname="argument fail_count", value=fail_count, expected_type=type_hints["fail_count"])
            check_type(argname="argument forbidden_time", value=forbidden_time, expected_type=type_hints["forbidden_time"])
            check_type(argname="argument span", value=span, expected_type=type_hints["span"])
            check_type(argname="argument uuid_list", value=uuid_list, expected_type=type_hints["uuid_list"])
            check_type(argname="argument default_rule", value=default_rule, expected_type=type_hints["default_rule"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "anti_brute_force_rule_name": anti_brute_force_rule_name,
            "fail_count": fail_count,
            "forbidden_time": forbidden_time,
            "span": span,
            "uuid_list": uuid_list,
        }
        if default_rule is not None:
            self._values["default_rule"] = default_rule

    @builtins.property
    def anti_brute_force_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: antiBruteForceRuleName: The name of the defense rule.
        '''
        result = self._values.get("anti_brute_force_rule_name")
        assert result is not None, "Required property 'anti_brute_force_rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def fail_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        failCount: The maximum number of failed logon attempts from an account.
        Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
        '''
        result = self._values.get("fail_count")
        assert result is not None, "Required property 'fail_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def forbidden_time(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        forbiddenTime: The period of time during which logons from an account are not allowed.
        Unit: minutes. Valid values:

        - 5: 5 minutes
        - 15: 15 minutes
        - 30: 30 minutes
        - 60: 1 hour
        - 120: 2 hours
        - 360: 6 hours
        - 720: 12 hours
        - 1440: 24 hours
        - 10080: 7 days
        - 52560000: permanent
        '''
        result = self._values.get("forbidden_time")
        assert result is not None, "Required property 'forbidden_time' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def span(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        span: The maximum period of time during which failed logon attempts from an account can occur.
        Unit: minutes. Valid values:

        - 1
        - 2
        - 5
        - 10
        - 15
        '''
        result = self._values.get("span")
        assert result is not None, "Required property 'span' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def uuid_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: uuidList: The UUIDs of the servers to which you want to apply the defense rule.
        '''
        result = self._values.get("uuid_list")
        assert result is not None, "Required property 'uuid_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def default_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultRule: Specifies whether to set the defense rule as the default rule.
        Valid values:

        - true: yes
        - false: no
        '''
        result = self._values.get("default_rule")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAntiBruteForceRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ThreatDetection::Instance``DATASOURCE::ThreatDetection::AntiBruteForceRules is used to query the basic information about defense rules against brute-force attacks.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__6ea9ded8f595988af6486ec9ebf760fa91f399715ca94ad70c00d7e7989f1ce1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a8b2efbed5fd210748661ffc699a238b00891f6bdb2db7c17565926df54d84b1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBuyNumber")
    def attr_buy_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BuyNumber: Number of servers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBuyNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScan")
    def attr_container_image_scan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContainerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerImageScan"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerImageScanNew")
    def attr_container_image_scan_new(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContainerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerImageScanNew"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypot")
    def attr_honeypot(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypot"))

    @builtins.property
    @jsii.member(jsii_name="attrHoneypotSwitch")
    def attr_honeypot_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HoneypotSwitch: Cloud honeypot.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHoneypotSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The first ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The payment type of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRaspCount")
    def attr_rasp_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RaspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRaspCount"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalPeriodUnit")
    def attr_renewal_period_unit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RenewalPeriodUnit: Automatic renewal period unit, value:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalPeriodUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RenewalStatus: Automatic renewal status, value:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewPeriod")
    def attr_renew_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RenewPeriod: Automatic renewal cycle, in months.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrSasAntiRansomware")
    def attr_sas_anti_ransomware(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasAntiRansomware"))

    @builtins.property
    @jsii.member(jsii_name="attrSasCspm")
    def attr_sas_cspm(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasCspm"))

    @builtins.property
    @jsii.member(jsii_name="attrSasCspmSwitch")
    def attr_sas_cspm_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasCspmSwitch: Cloud platform configuration check switch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasCspmSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSc")
    def attr_sas_sc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasSc: Security screen.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSc"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSdk")
    def attr_sas_sdk(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSdk"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSdkSwitch")
    def attr_sas_sdk_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasSdkSwitch: Malicious file detection SDK.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSdkSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrSasSlsStorage")
    def attr_sas_sls_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasSlsStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardBoolean")
    def attr_sas_webguard_boolean(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasWebguardBoolean: Web tamper-proof switch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasWebguardBoolean"))

    @builtins.property
    @jsii.member(jsii_name="attrSasWebguardOrderNum")
    def attr_sas_webguard_order_num(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SasWebguardOrderNum: Tamper-proof authorization number.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSasWebguardOrderNum"))

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysis")
    def attr_threat_analysis(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ThreatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrThreatAnalysis"))

    @builtins.property
    @jsii.member(jsii_name="attrThreatAnalysisSwitch")
    def attr_threat_analysis_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ThreatAnalysisSwitch: Threat analysis.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrThreatAnalysisSwitch"))

    @builtins.property
    @jsii.member(jsii_name="attrVCore")
    def attr_v_core(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VCore: Number of cores.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVCore"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionCode")
    def attr_version_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VersionCode: Select the security center version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionCode"))

    @builtins.property
    @jsii.member(jsii_name="attrVulCount")
    def attr_vul_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VulCount: Vulnerability repair times, interval type, value range:[20,100000000].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVulCount"))

    @builtins.property
    @jsii.member(jsii_name="attrVulSwitch")
    def attr_vul_switch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VulSwitch: Vulnerability fix switch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVulSwitch"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7228f2d6db6256b40caf0967a0cb7320f5a50e00222960bbffa02c7d92d873d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: paymentType: The payment type of the resource.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__696c243a1391601966d944ad93dcdfad8c9ae0d0011ce40887c2e56db88b6995)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="versionCode")
    def version_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        versionCode: Select the security center version. Value:

        - level7: Antivirus Edition.
        - level3: Premium version.
        - level2: Enterprise Edition.
        - level8: Ultimate.
        - level10: Purchase value-added services only.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "versionCode"))

    @version_code.setter
    def version_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a65e4954ad7bfb7dd9a991c3079cf0bafeb7fc7f61cdded838248d1fed96cfbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "versionCode", value)

    @builtins.property
    @jsii.member(jsii_name="buyNumber")
    def buy_number(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: buyNumber: Number of servers.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "buyNumber"))

    @buy_number.setter
    def buy_number(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f72d60aa3ffaf36828d11ad4fa9efaaa0e70f7554790e7d844a391780aaf1de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "buyNumber", value)

    @builtins.property
    @jsii.member(jsii_name="containerImageScan")
    def container_image_scan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
        .. epigraph::

        The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "containerImageScan"))

    @container_image_scan.setter
    def container_image_scan(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b09cb3c1f73240d33518c74d9c494610b5453fe1c8398d485ca30cf855fa6294)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerImageScan", value)

    @builtins.property
    @jsii.member(jsii_name="containerImageScanNew")
    def container_image_scan_new(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
        .. epigraph::

        The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "containerImageScanNew"))

    @container_image_scan_new.setter
    def container_image_scan_new(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c281f671aa3db96ce307d540012fd93524037ba27f8447f30a3ad96a0997bf8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerImageScanNew", value)

    @builtins.property
    @jsii.member(jsii_name="honeypot")
    def honeypot(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
        .. epigraph::

        This module can only be purchased when honeypot_switch = 1, starting with 20.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "honeypot"))

    @honeypot.setter
    def honeypot(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e1730ac5646079649a32ac754b63872bf734dcd4fc304ec78e5992748580037)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "honeypot", value)

    @builtins.property
    @jsii.member(jsii_name="honeypotSwitch")
    def honeypot_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        honeypotSwitch: Cloud honeypot. Value:

        - 1: Yes.
        - 2: No.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "honeypotSwitch"))

    @honeypot_switch.setter
    def honeypot_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c98fc4e3dd40ccc1f7fa43179d11f22202338fcef56ed206b82a21b96ab8ccbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "honeypotSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="modifyType")
    def modify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        modifyType: Change configuration type, value

        - Upgrade: Upgrade.
        - Downgrade: Downgrade.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "modifyType"))

    @modify_type.setter
    def modify_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07b1a5c119710b00dc65696de70b19fe53f6d3a4173df44540afee6b651a3857)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modifyType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        .. epigraph::

        must be set when creating a prepaid instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f93ec6463505e07c8ed8aefacafbc6a9a14c8a4cf45823f96825c1dd5de9d679)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="productType")
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: productType: Product type, only China station needs to be set to sas, international station does not need to set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "productType"))

    @product_type.setter
    def product_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae7977f5516d2fc0f5ba0e78f78427e3bb57db2d751acc36d6de9964e2cca469)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productType", value)

    @builtins.property
    @jsii.member(jsii_name="raspCount")
    def rasp_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "raspCount"))

    @rasp_count.setter
    def rasp_count(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2774bac4b685828dd54d1dacfa7a418d236a391f4e0f49526f378763a3e0db6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "raspCount", value)

    @builtins.property
    @jsii.member(jsii_name="renewalPeriodUnit")
    def renewal_period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalPeriodUnit: Automatic renewal period unit, value:

        - M: month.
        - Y: years.

        .. epigraph::

        Must be set when RenewalStatus = AutoRenewal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewalPeriodUnit"))

    @renewal_period_unit.setter
    def renewal_period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30aa76dcf303193122a4541555fb8a98729d7b14d68d3aa8a86a03ceeec78c02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewalPeriodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="renewalStatus")
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: Automatic renewal status, value:

        - AutoRenewal: automatic renewal.
        - ManualRenewal: manual renewal.
        Default ManualRenewal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewalStatus"))

    @renewal_status.setter
    def renewal_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a7c076770cce20d055d898fdcd27583d716b8b86a73f1c0dc093e9f1cd4e3de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewalStatus", value)

    @builtins.property
    @jsii.member(jsii_name="renewPeriod")
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewPeriod: Automatic renewal cycle, in months.
        .. epigraph::

        When **RenewalStatus** is set to **AutoRenewal**, it must be set.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewPeriod"))

    @renew_period.setter
    def renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e61162da60e5c06fc3b07da02bfa23f881f6fc747f2b7eb174eab1a81bc062a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="sasAntiRansomware")
    def sas_anti_ransomware(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
        .. epigraph::

        The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasAntiRansomware"))

    @sas_anti_ransomware.setter
    def sas_anti_ransomware(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fab180aeaa2b07311ce5de5ed84d5e6e35a6e0537b67a5c75f864465ae21f3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasAntiRansomware", value)

    @builtins.property
    @jsii.member(jsii_name="sasCspm")
    def sas_cspm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
        .. epigraph::

        You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasCspm"))

    @sas_cspm.setter
    def sas_cspm(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2aab862db9d6876b198c7f5d714c7eb78c31c00a0e4264c20ae7db0c84f2c32)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasCspm", value)

    @builtins.property
    @jsii.member(jsii_name="sasCspmSwitch")
    def sas_cspm_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasCspmSwitch: Cloud platform configuration check switch. Value:

        - 0: No.
        - 1: Yes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasCspmSwitch"))

    @sas_cspm_switch.setter
    def sas_cspm_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fa113160d1544dff9578885c215c0227d34d0d707fa88c7a9b23f908d6d1804)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasCspmSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="sasSc")
    def sas_sc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSc: Security screen. Value:

        - true: Yes.
        - false: No.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasSc"))

    @sas_sc.setter
    def sas_sc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05159a17185b019f5332e79857ede4c630da520fdbcb74c65d72d1f3091347c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasSc", value)

    @builtins.property
    @jsii.member(jsii_name="sasSdk")
    def sas_sdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        .. epigraph::

        This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasSdk"))

    @sas_sdk.setter
    def sas_sdk(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87abd72a9aea30656c26bc11314a73efb2d9c98ab0372164f9decd0e085c5d73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasSdk", value)

    @builtins.property
    @jsii.member(jsii_name="sasSdkSwitch")
    def sas_sdk_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sasSdkSwitch: Malicious file detection SDK.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasSdkSwitch"))

    @sas_sdk_switch.setter
    def sas_sdk_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaaca46e4281aad3712865007757221d6ad0d60efb5dd384e3d9685987e4800f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasSdkSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="sasSlsStorage")
    def sas_sls_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
        .. epigraph::

        The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasSlsStorage"))

    @sas_sls_storage.setter
    def sas_sls_storage(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55fa02c0967a81b71236e88194d8b3949d7fad9a62cb478fd95b280150722a1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasSlsStorage", value)

    @builtins.property
    @jsii.member(jsii_name="sasWebguardBoolean")
    def sas_webguard_boolean(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasWebguardBoolean: Web tamper-proof switch. Value:

        - 0: No.
        - 1: Yes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasWebguardBoolean"))

    @sas_webguard_boolean.setter
    def sas_webguard_boolean(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e3533b6f50c672e107493122492d1e8b79510d42f05a1615a7a2658eaaa47cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasWebguardBoolean", value)

    @builtins.property
    @jsii.member(jsii_name="sasWebguardOrderNum")
    def sas_webguard_order_num(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasWebguardOrderNum: Tamper-proof authorization number. Value:

        - 0: No
        - 1: Yes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sasWebguardOrderNum"))

    @sas_webguard_order_num.setter
    def sas_webguard_order_num(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7b6dcff40c6c4efad8abc71bd6efaef546ee533c35e4bbe8129c2214d5dd8ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sasWebguardOrderNum", value)

    @builtins.property
    @jsii.member(jsii_name="threatAnalysis")
    def threat_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
        .. epigraph::

        This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "threatAnalysis"))

    @threat_analysis.setter
    def threat_analysis(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14b31150fe723a7b914798a93f36550596c4e4b4bec299098f8909d6fc5b7695)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "threatAnalysis", value)

    @builtins.property
    @jsii.member(jsii_name="threatAnalysisSwitch")
    def threat_analysis_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        threatAnalysisSwitch: Threat analysis. Value:

        - 0: No.
        - 1: Yes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "threatAnalysisSwitch"))

    @threat_analysis_switch.setter
    def threat_analysis_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afc00822c0a769f6e7849d12e7db79713bae4cf445ee73dd2f7dda3f8d5ca70b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "threatAnalysisSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="vCore")
    def v_core(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vCore: Number of cores.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vCore"))

    @v_core.setter
    def v_core(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6d77309e60298e9daed82eaf20af43ef25061e13ab9aaccc3df837b4d1a6e24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vCore", value)

    @builtins.property
    @jsii.member(jsii_name="vulCount")
    def vul_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
        .. epigraph::

        This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vulCount"))

    @vul_count.setter
    def vul_count(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__739b9d54bf5a52431ad5fba5d1325ace0f91a430cde68cf9d1fb0f137c1290ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vulCount", value)

    @builtins.property
    @jsii.member(jsii_name="vulSwitch")
    def vul_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vulSwitch: Vulnerability fix switch. Value:

        - 0: No.
        - 1: Yes.

        .. epigraph::

        When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vulSwitch"))

    @vul_switch.setter
    def vul_switch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7cecc45822ec2762adf7d4f7d073d7821f798285e5c9c651737058b05b28765)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vulSwitch", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "payment_type": "paymentType",
        "version_code": "versionCode",
        "buy_number": "buyNumber",
        "container_image_scan": "containerImageScan",
        "container_image_scan_new": "containerImageScanNew",
        "honeypot": "honeypot",
        "honeypot_switch": "honeypotSwitch",
        "modify_type": "modifyType",
        "period": "period",
        "product_type": "productType",
        "rasp_count": "raspCount",
        "renewal_period_unit": "renewalPeriodUnit",
        "renewal_status": "renewalStatus",
        "renew_period": "renewPeriod",
        "sas_anti_ransomware": "sasAntiRansomware",
        "sas_cspm": "sasCspm",
        "sas_cspm_switch": "sasCspmSwitch",
        "sas_sc": "sasSc",
        "sas_sdk": "sasSdk",
        "sas_sdk_switch": "sasSdkSwitch",
        "sas_sls_storage": "sasSlsStorage",
        "sas_webguard_boolean": "sasWebguardBoolean",
        "sas_webguard_order_num": "sasWebguardOrderNum",
        "threat_analysis": "threatAnalysis",
        "threat_analysis_switch": "threatAnalysisSwitch",
        "v_core": "vCore",
        "vul_count": "vulCount",
        "vul_switch": "vulSwitch",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        buy_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_image_scan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_image_scan_new: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        honeypot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        honeypot_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rasp_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_anti_ransomware: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_cspm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_cspm_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sdk_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_sls_storage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_webguard_boolean: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sas_webguard_order_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threat_analysis_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_core: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vul_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vul_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance

        :param payment_type: 
        :param version_code: 
        :param buy_number: 
        :param container_image_scan: 
        :param container_image_scan_new: 
        :param honeypot: 
        :param honeypot_switch: 
        :param modify_type: 
        :param period: 
        :param product_type: 
        :param rasp_count: 
        :param renewal_period_unit: 
        :param renewal_status: 
        :param renew_period: 
        :param sas_anti_ransomware: 
        :param sas_cspm: 
        :param sas_cspm_switch: 
        :param sas_sc: 
        :param sas_sdk: 
        :param sas_sdk_switch: 
        :param sas_sls_storage: 
        :param sas_webguard_boolean: 
        :param sas_webguard_order_num: 
        :param threat_analysis: 
        :param threat_analysis_switch: 
        :param v_core: 
        :param vul_count: 
        :param vul_switch: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19c7816fb2add7a906f0d7e5eab175b69dba2b08dfd15e8a635583417e9d39c3)
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument version_code", value=version_code, expected_type=type_hints["version_code"])
            check_type(argname="argument buy_number", value=buy_number, expected_type=type_hints["buy_number"])
            check_type(argname="argument container_image_scan", value=container_image_scan, expected_type=type_hints["container_image_scan"])
            check_type(argname="argument container_image_scan_new", value=container_image_scan_new, expected_type=type_hints["container_image_scan_new"])
            check_type(argname="argument honeypot", value=honeypot, expected_type=type_hints["honeypot"])
            check_type(argname="argument honeypot_switch", value=honeypot_switch, expected_type=type_hints["honeypot_switch"])
            check_type(argname="argument modify_type", value=modify_type, expected_type=type_hints["modify_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument product_type", value=product_type, expected_type=type_hints["product_type"])
            check_type(argname="argument rasp_count", value=rasp_count, expected_type=type_hints["rasp_count"])
            check_type(argname="argument renewal_period_unit", value=renewal_period_unit, expected_type=type_hints["renewal_period_unit"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument renew_period", value=renew_period, expected_type=type_hints["renew_period"])
            check_type(argname="argument sas_anti_ransomware", value=sas_anti_ransomware, expected_type=type_hints["sas_anti_ransomware"])
            check_type(argname="argument sas_cspm", value=sas_cspm, expected_type=type_hints["sas_cspm"])
            check_type(argname="argument sas_cspm_switch", value=sas_cspm_switch, expected_type=type_hints["sas_cspm_switch"])
            check_type(argname="argument sas_sc", value=sas_sc, expected_type=type_hints["sas_sc"])
            check_type(argname="argument sas_sdk", value=sas_sdk, expected_type=type_hints["sas_sdk"])
            check_type(argname="argument sas_sdk_switch", value=sas_sdk_switch, expected_type=type_hints["sas_sdk_switch"])
            check_type(argname="argument sas_sls_storage", value=sas_sls_storage, expected_type=type_hints["sas_sls_storage"])
            check_type(argname="argument sas_webguard_boolean", value=sas_webguard_boolean, expected_type=type_hints["sas_webguard_boolean"])
            check_type(argname="argument sas_webguard_order_num", value=sas_webguard_order_num, expected_type=type_hints["sas_webguard_order_num"])
            check_type(argname="argument threat_analysis", value=threat_analysis, expected_type=type_hints["threat_analysis"])
            check_type(argname="argument threat_analysis_switch", value=threat_analysis_switch, expected_type=type_hints["threat_analysis_switch"])
            check_type(argname="argument v_core", value=v_core, expected_type=type_hints["v_core"])
            check_type(argname="argument vul_count", value=vul_count, expected_type=type_hints["vul_count"])
            check_type(argname="argument vul_switch", value=vul_switch, expected_type=type_hints["vul_switch"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "payment_type": payment_type,
            "version_code": version_code,
        }
        if buy_number is not None:
            self._values["buy_number"] = buy_number
        if container_image_scan is not None:
            self._values["container_image_scan"] = container_image_scan
        if container_image_scan_new is not None:
            self._values["container_image_scan_new"] = container_image_scan_new
        if honeypot is not None:
            self._values["honeypot"] = honeypot
        if honeypot_switch is not None:
            self._values["honeypot_switch"] = honeypot_switch
        if modify_type is not None:
            self._values["modify_type"] = modify_type
        if period is not None:
            self._values["period"] = period
        if product_type is not None:
            self._values["product_type"] = product_type
        if rasp_count is not None:
            self._values["rasp_count"] = rasp_count
        if renewal_period_unit is not None:
            self._values["renewal_period_unit"] = renewal_period_unit
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if renew_period is not None:
            self._values["renew_period"] = renew_period
        if sas_anti_ransomware is not None:
            self._values["sas_anti_ransomware"] = sas_anti_ransomware
        if sas_cspm is not None:
            self._values["sas_cspm"] = sas_cspm
        if sas_cspm_switch is not None:
            self._values["sas_cspm_switch"] = sas_cspm_switch
        if sas_sc is not None:
            self._values["sas_sc"] = sas_sc
        if sas_sdk is not None:
            self._values["sas_sdk"] = sas_sdk
        if sas_sdk_switch is not None:
            self._values["sas_sdk_switch"] = sas_sdk_switch
        if sas_sls_storage is not None:
            self._values["sas_sls_storage"] = sas_sls_storage
        if sas_webguard_boolean is not None:
            self._values["sas_webguard_boolean"] = sas_webguard_boolean
        if sas_webguard_order_num is not None:
            self._values["sas_webguard_order_num"] = sas_webguard_order_num
        if threat_analysis is not None:
            self._values["threat_analysis"] = threat_analysis
        if threat_analysis_switch is not None:
            self._values["threat_analysis_switch"] = threat_analysis_switch
        if v_core is not None:
            self._values["v_core"] = v_core
        if vul_count is not None:
            self._values["vul_count"] = vul_count
        if vul_switch is not None:
            self._values["vul_switch"] = vul_switch

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: paymentType: The payment type of the resource.
        '''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        versionCode: Select the security center version. Value:

        - level7: Antivirus Edition.
        - level3: Premium version.
        - level2: Enterprise Edition.
        - level8: Ultimate.
        - level10: Purchase value-added services only.
        '''
        result = self._values.get("version_code")
        assert result is not None, "Required property 'version_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def buy_number(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: buyNumber: Number of servers.
        '''
        result = self._values.get("buy_number")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_image_scan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
        .. epigraph::

        The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        result = self._values.get("container_image_scan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_image_scan_new(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
        .. epigraph::

        The step size is 20, that is, only multiples of 20 can be filled in.
        '''
        result = self._values.get("container_image_scan_new")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def honeypot(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
        .. epigraph::

        This module can only be purchased when honeypot_switch = 1, starting with 20.
        '''
        result = self._values.get("honeypot")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def honeypot_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        honeypotSwitch: Cloud honeypot. Value:

        - 1: Yes.
        - 2: No.
        '''
        result = self._values.get("honeypot_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        modifyType: Change configuration type, value

        - Upgrade: Upgrade.
        - Downgrade: Downgrade.
        '''
        result = self._values.get("modify_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        .. epigraph::

        must be set when creating a prepaid instance.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: productType: Product type, only China station needs to be set to sas, international station does not need to set.
        '''
        result = self._values.get("product_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rasp_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
        '''
        result = self._values.get("rasp_count")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalPeriodUnit: Automatic renewal period unit, value:

        - M: month.
        - Y: years.

        .. epigraph::

        Must be set when RenewalStatus = AutoRenewal.
        '''
        result = self._values.get("renewal_period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: Automatic renewal status, value:

        - AutoRenewal: automatic renewal.
        - ManualRenewal: manual renewal.
        Default ManualRenewal.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewPeriod: Automatic renewal cycle, in months.
        .. epigraph::

        When **RenewalStatus** is set to **AutoRenewal**, it must be set.
        '''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_anti_ransomware(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
        .. epigraph::

        The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_anti_ransomware")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_cspm(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
        .. epigraph::

        You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_cspm")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_cspm_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasCspmSwitch: Cloud platform configuration check switch. Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("sas_cspm_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSc: Security screen. Value:

        - true: Yes.
        - false: No.
        '''
        result = self._values.get("sas_sc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sdk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        .. epigraph::

        This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_sdk")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sdk_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sasSdkSwitch: Malicious file detection SDK.
        '''
        result = self._values.get("sas_sdk_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_sls_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
        .. epigraph::

        The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("sas_sls_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_webguard_boolean(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasWebguardBoolean: Web tamper-proof switch. Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("sas_webguard_boolean")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sas_webguard_order_num(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sasWebguardOrderNum: Tamper-proof authorization number. Value:

        - 0: No
        - 1: Yes.
        '''
        result = self._values.get("sas_webguard_order_num")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
        .. epigraph::

        This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        '''
        result = self._values.get("threat_analysis")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threat_analysis_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        threatAnalysisSwitch: Threat analysis. Value:

        - 0: No.
        - 1: Yes.
        '''
        result = self._values.get("threat_analysis_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_core(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vCore: Number of cores.
        '''
        result = self._values.get("v_core")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vul_count(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
        .. epigraph::

        This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
        '''
        result = self._values.get("vul_count")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vul_switch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vulSwitch: Vulnerability fix switch. Value:

        - 0: No.
        - 1: Yes.

        .. epigraph::

        When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
        '''
        result = self._values.get("vul_switch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AntiBruteForceRule",
    "AntiBruteForceRuleProps",
    "Instance",
    "InstanceProps",
    "RosAntiBruteForceRule",
    "RosAntiBruteForceRuleProps",
    "RosInstance",
    "RosInstanceProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__9f8659f87b10c0fcf9d9fbf71d229cd6d78fbd380def248ca47c590aaba71e92(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AntiBruteForceRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__833ae8cb35491a406ec6b074d3ea52516c205541d1800a976c9e12f1983661e2(
    *,
    anti_brute_force_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fail_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    forbidden_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    span: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    uuid_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    default_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75942e5f058c894ba363dec82c603e65f0c217242931be81f99c562705118e39(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d634b27a82f45ff70d30b663b3632c97500f94b6b81556222a6b8fe8f7b3f74d(
    *,
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    buy_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_image_scan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_image_scan_new: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    honeypot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    honeypot_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rasp_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_anti_ransomware: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_cspm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_cspm_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sdk_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sls_storage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_webguard_boolean: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_webguard_order_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_core: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vul_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vul_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4f5e49fe6474e073db6dd4d70039e455c895e18161e7c28f6c21f3c84c0940e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAntiBruteForceRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35cc99e373e0e82d27e976748a471f4a65213ecfc9de5ab23d462e4d1990437a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1813e54b2aec4b1cec245827eca09d795d1c3be24f7769971f4f2252fe6f5950(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d8040a936974fcc6afb22cb1899651f8613194ba2287ae0c406753b9d21d0c8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02755fbb78929b92f6d36cc8d76c6099803e871a020c716d7a383cc249c0a8e8(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3fae800ff0e50053dc1ef5a56f5a57a5631928267a28667605704d6ce238f07(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c9204843e8472833a4d8b1984c825632a49ffbe7650891c82a94a0b589ea4ae(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94698ff5e2caebc141a70e4b6bb7d46f061f2fc91d222998a181baf02fb111dc(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8211a5caa7daa6f4a87b5871c1e9c303dd12f9277f2429192c3c6c0ab46657af(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d101d0a61041898571c013b511320f2f140acab32dda658b6d40707e8d8bcb20(
    *,
    anti_brute_force_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fail_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    forbidden_time: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    span: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    uuid_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    default_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ea9ded8f595988af6486ec9ebf760fa91f399715ca94ad70c00d7e7989f1ce1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8b2efbed5fd210748661ffc699a238b00891f6bdb2db7c17565926df54d84b1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7228f2d6db6256b40caf0967a0cb7320f5a50e00222960bbffa02c7d92d873d3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__696c243a1391601966d944ad93dcdfad8c9ae0d0011ce40887c2e56db88b6995(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a65e4954ad7bfb7dd9a991c3079cf0bafeb7fc7f61cdded838248d1fed96cfbd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f72d60aa3ffaf36828d11ad4fa9efaaa0e70f7554790e7d844a391780aaf1de(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b09cb3c1f73240d33518c74d9c494610b5453fe1c8398d485ca30cf855fa6294(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c281f671aa3db96ce307d540012fd93524037ba27f8447f30a3ad96a0997bf8b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e1730ac5646079649a32ac754b63872bf734dcd4fc304ec78e5992748580037(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c98fc4e3dd40ccc1f7fa43179d11f22202338fcef56ed206b82a21b96ab8ccbe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07b1a5c119710b00dc65696de70b19fe53f6d3a4173df44540afee6b651a3857(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f93ec6463505e07c8ed8aefacafbc6a9a14c8a4cf45823f96825c1dd5de9d679(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae7977f5516d2fc0f5ba0e78f78427e3bb57db2d751acc36d6de9964e2cca469(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2774bac4b685828dd54d1dacfa7a418d236a391f4e0f49526f378763a3e0db6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30aa76dcf303193122a4541555fb8a98729d7b14d68d3aa8a86a03ceeec78c02(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a7c076770cce20d055d898fdcd27583d716b8b86a73f1c0dc093e9f1cd4e3de(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e61162da60e5c06fc3b07da02bfa23f881f6fc747f2b7eb174eab1a81bc062a1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fab180aeaa2b07311ce5de5ed84d5e6e35a6e0537b67a5c75f864465ae21f3f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2aab862db9d6876b198c7f5d714c7eb78c31c00a0e4264c20ae7db0c84f2c32(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fa113160d1544dff9578885c215c0227d34d0d707fa88c7a9b23f908d6d1804(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05159a17185b019f5332e79857ede4c630da520fdbcb74c65d72d1f3091347c9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87abd72a9aea30656c26bc11314a73efb2d9c98ab0372164f9decd0e085c5d73(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaaca46e4281aad3712865007757221d6ad0d60efb5dd384e3d9685987e4800f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55fa02c0967a81b71236e88194d8b3949d7fad9a62cb478fd95b280150722a1d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e3533b6f50c672e107493122492d1e8b79510d42f05a1615a7a2658eaaa47cc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7b6dcff40c6c4efad8abc71bd6efaef546ee533c35e4bbe8129c2214d5dd8ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14b31150fe723a7b914798a93f36550596c4e4b4bec299098f8909d6fc5b7695(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afc00822c0a769f6e7849d12e7db79713bae4cf445ee73dd2f7dda3f8d5ca70b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6d77309e60298e9daed82eaf20af43ef25061e13ab9aaccc3df837b4d1a6e24(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__739b9d54bf5a52431ad5fba5d1325ace0f91a430cde68cf9d1fb0f137c1290ff(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7cecc45822ec2762adf7d4f7d073d7821f798285e5c9c651737058b05b28765(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19c7816fb2add7a906f0d7e5eab175b69dba2b08dfd15e8a635583417e9d39c3(
    *,
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    buy_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_image_scan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_image_scan_new: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    honeypot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    honeypot_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rasp_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_anti_ransomware: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_cspm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_cspm_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sdk: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sdk_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_sls_storage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_webguard_boolean: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_webguard_order_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threat_analysis_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_core: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vul_count: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vul_switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
