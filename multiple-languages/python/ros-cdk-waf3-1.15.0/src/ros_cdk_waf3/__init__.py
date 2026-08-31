'''
## Aliyun ROS WAF3 Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as WAF3 from '@alicloud/ros-cdk-waf3';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-waf3.IInstance")
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

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-waf3.IInstance"

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


@jsii.interface(jsii_type="@alicloud/ros-cdk-waf3.ITgw")
class ITgw(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``TGW``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the WAF instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Access the cloud product port of WAF.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceProduct")
    def attr_resource_product(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceProduct: Access to WAF cloud products.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTgwId")
    def attr_tgw_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TgwId: The protection object ID of the transparent access resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TGWProps":
        ...


class _ITgwProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``TGW``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-waf3.ITgw"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the WAF instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Access the cloud product port of WAF.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceProduct")
    def attr_resource_product(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceProduct: Access to WAF cloud products.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceProduct"))

    @builtins.property
    @jsii.member(jsii_name="attrTgwId")
    def attr_tgw_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TgwId: The protection object ID of the transparent access resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTgwId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TGWProps":
        return typing.cast("TGWProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITgw).__jsii_proxy_class__ = lambda : _ITgwProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf3.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::WAF3::Instance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__04e6ffacadf3cf2b30a85ae8026d0f3977217d71a0a705242e6476dd1421e2b1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__754f7ff9788967aca4a85ab95e248fc7681f7a0db49869df32aca2f5458c1890)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__820b9fcb51776ce8a7fbf6c0cc6b91cc24a6396a209b28eee506824012931a91)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b41f14d239135d4d4f621a6a92ca99b46123d79aeb4d3d26459f903e3921c454)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf3.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "pay_type": "payType",
        "region": "region",
        "additional_protection_nodes": "additionalProtectionNodes",
        "api_security": "apiSecurity",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "bot_app_protection": "botAppProtection",
        "bot_web_protection": "botWebProtection",
        "domains_extension": "domainsExtension",
        "elastic_qps": "elasticQps",
        "exclusive_ip_address": "exclusiveIpAddress",
        "fraud_detection": "fraudDetection",
        "ignore_existing": "ignoreExisting",
        "intelligent_load_balancing": "intelligentLoadBalancing",
        "log_service": "logService",
        "log_storage": "logStorage",
        "period": "period",
        "period_unit": "periodUnit",
        "qps_extension": "qpsExtension",
        "traffic_billing_protection_threshold": "trafficBillingProtectionThreshold",
        "waf_version": "wafVersion",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        additional_protection_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        api_security: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bot_app_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bot_web_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domains_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        elastic_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclusive_ip_address: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fraud_detection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        intelligent_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qps_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        traffic_billing_protection_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        waf_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance

        :param pay_type: Property payType: The billing method of the firewall instance. Valid values: PayAsYouGo: pay-as-you-go Subscription: subscription
        :param region: Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo). If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
        :param additional_protection_nodes: Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests. You can add protection nodes to increase protection capabilities.
        :param api_security: Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur. After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
        :param auto_pay: Property autoPay: Whether to auto pay the bill.
        :param auto_renew: Property autoRenew: Whether to auto renew the prepay instance.
        :param bot_app_protection: Property botAppProtection: Bot management module for App protection.
        :param bot_web_protection: Property botWebProtection: Bot management module for Web application protection.
        :param domains_extension: Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
        :param elastic_qps: Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions. In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
        :param exclusive_ip_address: Property exclusiveIpAddress: Excluesive IP address number.
        :param fraud_detection: Property fraudDetection: You can enable this feature only after you enable the bot management module. If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
        :param ignore_existing: Property ignoreExisting: Whether to ignore existing WAF3 instance False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored. If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
        :param intelligent_load_balancing: Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
        :param log_service: Property logService: Log service for WAF instance.
        :param log_storage: Property logStorage: Log storage capacity.
        :param period: Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param qps_extension: Property qpsExtension: Extended QPS.
        :param traffic_billing_protection_threshold: Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
        :param waf_version: Property wafVersion: The version of WAF3.0.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dca669d9419f85df25c6d47ffeec4df4a9b5158718b2cb80cf15132b45324224)
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument additional_protection_nodes", value=additional_protection_nodes, expected_type=type_hints["additional_protection_nodes"])
            check_type(argname="argument api_security", value=api_security, expected_type=type_hints["api_security"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument bot_app_protection", value=bot_app_protection, expected_type=type_hints["bot_app_protection"])
            check_type(argname="argument bot_web_protection", value=bot_web_protection, expected_type=type_hints["bot_web_protection"])
            check_type(argname="argument domains_extension", value=domains_extension, expected_type=type_hints["domains_extension"])
            check_type(argname="argument elastic_qps", value=elastic_qps, expected_type=type_hints["elastic_qps"])
            check_type(argname="argument exclusive_ip_address", value=exclusive_ip_address, expected_type=type_hints["exclusive_ip_address"])
            check_type(argname="argument fraud_detection", value=fraud_detection, expected_type=type_hints["fraud_detection"])
            check_type(argname="argument ignore_existing", value=ignore_existing, expected_type=type_hints["ignore_existing"])
            check_type(argname="argument intelligent_load_balancing", value=intelligent_load_balancing, expected_type=type_hints["intelligent_load_balancing"])
            check_type(argname="argument log_service", value=log_service, expected_type=type_hints["log_service"])
            check_type(argname="argument log_storage", value=log_storage, expected_type=type_hints["log_storage"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument qps_extension", value=qps_extension, expected_type=type_hints["qps_extension"])
            check_type(argname="argument traffic_billing_protection_threshold", value=traffic_billing_protection_threshold, expected_type=type_hints["traffic_billing_protection_threshold"])
            check_type(argname="argument waf_version", value=waf_version, expected_type=type_hints["waf_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pay_type": pay_type,
            "region": region,
        }
        if additional_protection_nodes is not None:
            self._values["additional_protection_nodes"] = additional_protection_nodes
        if api_security is not None:
            self._values["api_security"] = api_security
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if bot_app_protection is not None:
            self._values["bot_app_protection"] = bot_app_protection
        if bot_web_protection is not None:
            self._values["bot_web_protection"] = bot_web_protection
        if domains_extension is not None:
            self._values["domains_extension"] = domains_extension
        if elastic_qps is not None:
            self._values["elastic_qps"] = elastic_qps
        if exclusive_ip_address is not None:
            self._values["exclusive_ip_address"] = exclusive_ip_address
        if fraud_detection is not None:
            self._values["fraud_detection"] = fraud_detection
        if ignore_existing is not None:
            self._values["ignore_existing"] = ignore_existing
        if intelligent_load_balancing is not None:
            self._values["intelligent_load_balancing"] = intelligent_load_balancing
        if log_service is not None:
            self._values["log_service"] = log_service
        if log_storage is not None:
            self._values["log_storage"] = log_storage
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if qps_extension is not None:
            self._values["qps_extension"] = qps_extension
        if traffic_billing_protection_threshold is not None:
            self._values["traffic_billing_protection_threshold"] = traffic_billing_protection_threshold
        if waf_version is not None:
            self._values["waf_version"] = waf_version

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
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).

        If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
        '''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def additional_protection_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests.

        You can add protection nodes to increase protection capabilities.
        '''
        result = self._values.get("additional_protection_nodes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def api_security(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur.

        After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
        '''
        result = self._values.get("api_security")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Whether to auto pay the bill.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether to auto renew the prepay instance.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bot_app_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property botAppProtection: Bot management module for App protection.'''
        result = self._values.get("bot_app_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bot_web_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property botWebProtection: Bot management module for Web application protection.'''
        result = self._values.get("bot_web_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domains_extension(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.'''
        result = self._values.get("domains_extension")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def elastic_qps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions.

        In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
        '''
        result = self._values.get("elastic_qps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclusive_ip_address(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property exclusiveIpAddress: Excluesive IP address number.'''
        result = self._values.get("exclusive_ip_address")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fraud_detection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fraudDetection: You can enable this feature only after you enable the bot management module.

        If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
        '''
        result = self._values.get("fraud_detection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ignore_existing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ignoreExisting: Whether to ignore existing WAF3 instance False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored. If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.'''
        result = self._values.get("ignore_existing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def intelligent_load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.'''
        result = self._values.get("intelligent_load_balancing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logService: Log service for WAF instance.'''
        result = self._values.get("log_service")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logStorage: Log storage capacity.'''
        result = self._values.get("log_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qps_extension(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property qpsExtension: Extended QPS.'''
        result = self._values.get("qps_extension")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def traffic_billing_protection_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.'''
        result = self._values.get("traffic_billing_protection_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def waf_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property wafVersion: The version of WAF3.0.'''
        result = self._values.get("waf_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    jsii_type="@alicloud/ros-cdk-waf3.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::WAF3::Instance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__63b42a348851f298edf9aad52903c399e9c1762ab264520eb51da5ac82bd61f6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__65a5c1ead39eb42c19f18ce656e467a6ab62d875cbfe929d353775b8c4618a81)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7a8ee05f683920ddd09cfafba589a14189213c6c9b92cca42e73b7862de640af)
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
            type_hints = typing.get_type_hints(_typecheckingstub__56b69d88aeb3958829be0e24d77bac313a130c82e6fc35ee20b7fb40f92e3d0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).
        If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "region"))

    @region.setter
    def region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ad694b958cb5129899515aaa8dfcfcbccba23c17064607f722c10b4fd1307f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "region", value)

    @builtins.property
    @jsii.member(jsii_name="additionalProtectionNodes")
    def additional_protection_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests. You can add protection nodes to increase protection capabilities.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "additionalProtectionNodes"))

    @additional_protection_nodes.setter
    def additional_protection_nodes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9642593f38f2875884ff27b54487221545fb64ac759af169bb6b67fcf135c1de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "additionalProtectionNodes", value)

    @builtins.property
    @jsii.member(jsii_name="apiSecurity")
    def api_security(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur. After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "apiSecurity"))

    @api_security.setter
    def api_security(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e759ae9f26a08b237e53b94507efb9e844c406d3c00aebadb203d94fa0d63ea5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "apiSecurity", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to auto pay the bill.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fd6c479df3fb2768d0aa7b9d8dae7367d9d3813ff941050ff3e046ce266986e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto renew the prepay instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64cac0ca85714921ebcdfd2d2dbcabbe692704af4fee32e44a4d1bc8b80726e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="botAppProtection")
    def bot_app_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: botAppProtection: Bot management module for App protection.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "botAppProtection"))

    @bot_app_protection.setter
    def bot_app_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd641f430f77e6cedffb59a66d5455e6e959ce1724688503206410dba83c0bfd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "botAppProtection", value)

    @builtins.property
    @jsii.member(jsii_name="botWebProtection")
    def bot_web_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: botWebProtection: Bot management module for Web application protection.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "botWebProtection"))

    @bot_web_protection.setter
    def bot_web_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__309512b25da9437344b050d675d3525985d6489f9725fd15a0b4fe2d9e32932e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "botWebProtection", value)

    @builtins.property
    @jsii.member(jsii_name="domainsExtension")
    def domains_extension(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domainsExtension"))

    @domains_extension.setter
    def domains_extension(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40d16a4bbaabdf3612433f2a45db7d97ceffc6e5a4439d7b45465c6b8d89adda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainsExtension", value)

    @builtins.property
    @jsii.member(jsii_name="elasticQps")
    def elastic_qps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions. In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "elasticQps"))

    @elastic_qps.setter
    def elastic_qps(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d89d8af52cbf3f062f6dbd91d7e430c59ade917ccbc4c99334f3f7b5dc7c6462)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "elasticQps", value)

    @builtins.property
    @jsii.member(jsii_name="exclusiveIpAddress")
    def exclusive_ip_address(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: exclusiveIpAddress: Excluesive IP address number.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "exclusiveIpAddress"))

    @exclusive_ip_address.setter
    def exclusive_ip_address(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__545ebe11011290fe6ae3958622be263ed3aa2d9f5c9856939c8263981208a164)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exclusiveIpAddress", value)

    @builtins.property
    @jsii.member(jsii_name="fraudDetection")
    def fraud_detection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fraudDetection: You can enable this feature only after you enable the bot management module. If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fraudDetection"))

    @fraud_detection.setter
    def fraud_detection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fd78f84ada0e5238e473579070cdf1d1ec7c2914f93b111c5e1e4f286fd2aeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fraudDetection", value)

    @builtins.property
    @jsii.member(jsii_name="ignoreExisting")
    def ignore_existing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ignoreExisting: Whether to ignore existing WAF3 instance
        False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it.
        True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored.
        If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ignoreExisting"))

    @ignore_existing.setter
    def ignore_existing(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e367ced785428a9817937c43b11f91d9da5bb15dc0b5dfea6a5dcb9ea389e4e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ignoreExisting", value)

    @builtins.property
    @jsii.member(jsii_name="intelligentLoadBalancing")
    def intelligent_load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: intelligentLoadBalancing: Intelligent load balancer for WAF instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "intelligentLoadBalancing"))

    @intelligent_load_balancing.setter
    def intelligent_load_balancing(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4422d894b9e965368c70ec4465687854c1ab316ff77a6ba21504f9acf4387a92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "intelligentLoadBalancing", value)

    @builtins.property
    @jsii.member(jsii_name="logService")
    def log_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logService: Log service for WAF instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logService"))

    @log_service.setter
    def log_service(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef273ab0c062a97ac6dc3ad042b5f18ccfaacad21e6e23364a366272f734bc87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logService", value)

    @builtins.property
    @jsii.member(jsii_name="logStorage")
    def log_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logStorage: Log storage capacity.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logStorage"))

    @log_storage.setter
    def log_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c495a1d5308e1afcda2c9f198e74eff600cc32ade9ee25d48d249871372c9d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logStorage", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__cbe1b7c988a5369bbf0e8553ab79c37e835b244ccb4aa39466b2ca259d93082a)
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
        Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__805ea4ce27a85f889175d889d5e745543bf7f836574ed2dad49a1c1a0f935971)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="qpsExtension")
    def qps_extension(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: qpsExtension: Extended QPS.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "qpsExtension"))

    @qps_extension.setter
    def qps_extension(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b9f783781266db687afa11e3c5e53e6aff6bb8df00fe030638aa6bd0ae8bcac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qpsExtension", value)

    @builtins.property
    @jsii.member(jsii_name="trafficBillingProtectionThreshold")
    def traffic_billing_protection_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "trafficBillingProtectionThreshold"))

    @traffic_billing_protection_threshold.setter
    def traffic_billing_protection_threshold(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69ba80ee477f815e49b50519f110d5a16725ddb12532cc1b931621d6f0ba98ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trafficBillingProtectionThreshold", value)

    @builtins.property
    @jsii.member(jsii_name="wafVersion")
    def waf_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: wafVersion: The version of WAF3.0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "wafVersion"))

    @waf_version.setter
    def waf_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1681fca2622775b7faab8f80489ef27f948012228567a37c6fa2a14a364fdc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "wafVersion", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf3.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "pay_type": "payType",
        "region": "region",
        "additional_protection_nodes": "additionalProtectionNodes",
        "api_security": "apiSecurity",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "bot_app_protection": "botAppProtection",
        "bot_web_protection": "botWebProtection",
        "domains_extension": "domainsExtension",
        "elastic_qps": "elasticQps",
        "exclusive_ip_address": "exclusiveIpAddress",
        "fraud_detection": "fraudDetection",
        "ignore_existing": "ignoreExisting",
        "intelligent_load_balancing": "intelligentLoadBalancing",
        "log_service": "logService",
        "log_storage": "logStorage",
        "period": "period",
        "period_unit": "periodUnit",
        "qps_extension": "qpsExtension",
        "traffic_billing_protection_threshold": "trafficBillingProtectionThreshold",
        "waf_version": "wafVersion",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        additional_protection_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        api_security: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bot_app_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bot_web_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domains_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        elastic_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclusive_ip_address: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fraud_detection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        intelligent_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qps_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        traffic_billing_protection_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        waf_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance

        :param pay_type: 
        :param region: 
        :param additional_protection_nodes: 
        :param api_security: 
        :param auto_pay: 
        :param auto_renew: 
        :param bot_app_protection: 
        :param bot_web_protection: 
        :param domains_extension: 
        :param elastic_qps: 
        :param exclusive_ip_address: 
        :param fraud_detection: 
        :param ignore_existing: 
        :param intelligent_load_balancing: 
        :param log_service: 
        :param log_storage: 
        :param period: 
        :param period_unit: 
        :param qps_extension: 
        :param traffic_billing_protection_threshold: 
        :param waf_version: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__513d467b820e48d862d88c50f5319626ef5243457cb1cc3b83dc6337f969b5b9)
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument additional_protection_nodes", value=additional_protection_nodes, expected_type=type_hints["additional_protection_nodes"])
            check_type(argname="argument api_security", value=api_security, expected_type=type_hints["api_security"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument bot_app_protection", value=bot_app_protection, expected_type=type_hints["bot_app_protection"])
            check_type(argname="argument bot_web_protection", value=bot_web_protection, expected_type=type_hints["bot_web_protection"])
            check_type(argname="argument domains_extension", value=domains_extension, expected_type=type_hints["domains_extension"])
            check_type(argname="argument elastic_qps", value=elastic_qps, expected_type=type_hints["elastic_qps"])
            check_type(argname="argument exclusive_ip_address", value=exclusive_ip_address, expected_type=type_hints["exclusive_ip_address"])
            check_type(argname="argument fraud_detection", value=fraud_detection, expected_type=type_hints["fraud_detection"])
            check_type(argname="argument ignore_existing", value=ignore_existing, expected_type=type_hints["ignore_existing"])
            check_type(argname="argument intelligent_load_balancing", value=intelligent_load_balancing, expected_type=type_hints["intelligent_load_balancing"])
            check_type(argname="argument log_service", value=log_service, expected_type=type_hints["log_service"])
            check_type(argname="argument log_storage", value=log_storage, expected_type=type_hints["log_storage"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument qps_extension", value=qps_extension, expected_type=type_hints["qps_extension"])
            check_type(argname="argument traffic_billing_protection_threshold", value=traffic_billing_protection_threshold, expected_type=type_hints["traffic_billing_protection_threshold"])
            check_type(argname="argument waf_version", value=waf_version, expected_type=type_hints["waf_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pay_type": pay_type,
            "region": region,
        }
        if additional_protection_nodes is not None:
            self._values["additional_protection_nodes"] = additional_protection_nodes
        if api_security is not None:
            self._values["api_security"] = api_security
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if bot_app_protection is not None:
            self._values["bot_app_protection"] = bot_app_protection
        if bot_web_protection is not None:
            self._values["bot_web_protection"] = bot_web_protection
        if domains_extension is not None:
            self._values["domains_extension"] = domains_extension
        if elastic_qps is not None:
            self._values["elastic_qps"] = elastic_qps
        if exclusive_ip_address is not None:
            self._values["exclusive_ip_address"] = exclusive_ip_address
        if fraud_detection is not None:
            self._values["fraud_detection"] = fraud_detection
        if ignore_existing is not None:
            self._values["ignore_existing"] = ignore_existing
        if intelligent_load_balancing is not None:
            self._values["intelligent_load_balancing"] = intelligent_load_balancing
        if log_service is not None:
            self._values["log_service"] = log_service
        if log_storage is not None:
            self._values["log_storage"] = log_storage
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if qps_extension is not None:
            self._values["qps_extension"] = qps_extension
        if traffic_billing_protection_threshold is not None:
            self._values["traffic_billing_protection_threshold"] = traffic_billing_protection_threshold
        if waf_version is not None:
            self._values["waf_version"] = waf_version

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
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).
        If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
        '''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def additional_protection_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests. You can add protection nodes to increase protection capabilities.
        '''
        result = self._values.get("additional_protection_nodes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def api_security(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur. After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
        '''
        result = self._values.get("api_security")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to auto pay the bill.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto renew the prepay instance.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bot_app_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: botAppProtection: Bot management module for App protection.
        '''
        result = self._values.get("bot_app_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bot_web_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: botWebProtection: Bot management module for Web application protection.
        '''
        result = self._values.get("bot_web_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domains_extension(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
        '''
        result = self._values.get("domains_extension")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def elastic_qps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions. In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
        '''
        result = self._values.get("elastic_qps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclusive_ip_address(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: exclusiveIpAddress: Excluesive IP address number.
        '''
        result = self._values.get("exclusive_ip_address")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fraud_detection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fraudDetection: You can enable this feature only after you enable the bot management module. If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
        '''
        result = self._values.get("fraud_detection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ignore_existing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ignoreExisting: Whether to ignore existing WAF3 instance
        False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it.
        True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored.
        If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
        '''
        result = self._values.get("ignore_existing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def intelligent_load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: intelligentLoadBalancing: Intelligent load balancer for WAF instance.
        '''
        result = self._values.get("intelligent_load_balancing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logService: Log service for WAF instance.
        '''
        result = self._values.get("log_service")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logStorage: Log storage capacity.
        '''
        result = self._values.get("log_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qps_extension(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: qpsExtension: Extended QPS.
        '''
        result = self._values.get("qps_extension")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def traffic_billing_protection_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
        '''
        result = self._values.get("traffic_billing_protection_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def waf_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: wafVersion: The version of WAF3.0.
        '''
        result = self._values.get("waf_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTGW(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf3.RosTGW",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::WAF3::TGW``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TGW`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTGWProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c43cec86c7d18907f0b33023b00ff86b3cc51488f837cd815f8244f2f667084)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1bdf9b965e3ce4f65c46139041c69b4e3017a1b0ddc645674b8a12a42cc85090)
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
        :Attribute: InstanceId: The ID of the WAF instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: Access the cloud product port of WAF.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceProduct")
    def attr_resource_product(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceProduct: Access to WAF cloud products.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceProduct"))

    @builtins.property
    @jsii.member(jsii_name="attrTgwId")
    def attr_tgw_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TgwId: The protection object ID of the transparent access resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTgwId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6d0a7c2e496de1d926bdbe5937c3c4d2d03746e0768d88be910652f0f3dfd8f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the WAF instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc0f1ae462d52258fa983b6049da644820bfa960899c2e6de5b322a132b4bcdf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="listen")
    def listen(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTGW.ListenProperty"]:
        '''
        :Property: listen: Listening information.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTGW.ListenProperty"], jsii.get(self, "listen"))

    @listen.setter
    def listen(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTGW.ListenProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__978fb7867f8504652caa17ffc68cf015c0f147d475af5f15bddf75a482ff8675)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listen", value)

    @builtins.property
    @jsii.member(jsii_name="redirect")
    def redirect(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTGW.RedirectProperty"]]:
        '''
        :Property: redirect: Forwarding information.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTGW.RedirectProperty"]], jsii.get(self, "redirect"))

    @redirect.setter
    def redirect(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTGW.RedirectProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13e7c97e695d00e9f24ff81aba515ef137dcb93dcd4fd5d64a33cb5ca4bb84d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "redirect", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19bc3f8a3a77bb6d827282d8bd160e5413cc1524fd526cb0ac55a556d00061a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="wafInstanceRegion")
    def waf_instance_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: wafInstanceRegion: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "wafInstanceRegion"))

    @waf_instance_region.setter
    def waf_instance_region(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a512e9b3ffff121892beabd22281f3410f9b5b5f4d7d7455c549a40d2d302ff9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "wafInstanceRegion", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-waf3.RosTGW.CertificatesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "applied_type": "appliedType",
            "certificate_id": "certificateId",
        },
    )
    class CertificatesProperty:
        def __init__(
            self,
            *,
            applied_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param applied_type: 
            :param certificate_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__628b6d39ec0ad1a28b80f9602283486c86387dd8005d57091d5709e45a65addf)
                check_type(argname="argument applied_type", value=applied_type, expected_type=type_hints["applied_type"])
                check_type(argname="argument certificate_id", value=certificate_id, expected_type=type_hints["certificate_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if applied_type is not None:
                self._values["applied_type"] = applied_type
            if certificate_id is not None:
                self._values["certificate_id"] = certificate_id

        @builtins.property
        def applied_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            appliedType: The certificate type for the HTTPS protocol. Valid values:
            default: Indicates the default certificate.
            extension: Indicates an extended certificate.
            '''
            result = self._values.get("applied_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def certificate_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: certificateId: The ID of the certificate that was added.
            '''
            result = self._values.get("certificate_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CertificatesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-waf3.RosTGW.ListenProperty",
        jsii_struct_bases=[],
        name_mapping={
            "port": "port",
            "protocol": "protocol",
            "resource_instance_id": "resourceInstanceId",
            "resource_product": "resourceProduct",
            "certificates": "certificates",
            "cipher_suite": "cipherSuite",
            "custom_ciphers": "customCiphers",
            "enable_tl_sv3": "enableTlSv3",
            "http2_enabled": "http2Enabled",
            "tls_version": "tlsVersion",
        },
    )
    class ListenProperty:
        def __init__(
            self,
            *,
            port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            resource_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            resource_product: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosTGW.CertificatesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            cipher_suite: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            custom_ciphers: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_tl_sv3: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http2_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tls_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param port: 
            :param protocol: 
            :param resource_instance_id: 
            :param resource_product: 
            :param certificates: 
            :param cipher_suite: 
            :param custom_ciphers: 
            :param enable_tl_sv3: 
            :param http2_enabled: 
            :param tls_version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c571c53702def49f82597d8623f3bac2e6bd29e05f54c61e1b0beee688e2d4e9)
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
                check_type(argname="argument resource_instance_id", value=resource_instance_id, expected_type=type_hints["resource_instance_id"])
                check_type(argname="argument resource_product", value=resource_product, expected_type=type_hints["resource_product"])
                check_type(argname="argument certificates", value=certificates, expected_type=type_hints["certificates"])
                check_type(argname="argument cipher_suite", value=cipher_suite, expected_type=type_hints["cipher_suite"])
                check_type(argname="argument custom_ciphers", value=custom_ciphers, expected_type=type_hints["custom_ciphers"])
                check_type(argname="argument enable_tl_sv3", value=enable_tl_sv3, expected_type=type_hints["enable_tl_sv3"])
                check_type(argname="argument http2_enabled", value=http2_enabled, expected_type=type_hints["http2_enabled"])
                check_type(argname="argument tls_version", value=tls_version, expected_type=type_hints["tls_version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "port": port,
                "protocol": protocol,
                "resource_instance_id": resource_instance_id,
                "resource_product": resource_product,
            }
            if certificates is not None:
                self._values["certificates"] = certificates
            if cipher_suite is not None:
                self._values["cipher_suite"] = cipher_suite
            if custom_ciphers is not None:
                self._values["custom_ciphers"] = custom_ciphers
            if enable_tl_sv3 is not None:
                self._values["enable_tl_sv3"] = enable_tl_sv3
            if http2_enabled is not None:
                self._values["http2_enabled"] = http2_enabled
            if tls_version is not None:
                self._values["tls_version"] = tls_version

        @builtins.property
        def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: port: Access the cloud product port of WAF.
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: protocol: Protocol type
            '''
            result = self._values.get("protocol")
            assert result is not None, "Required property 'protocol' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def resource_instance_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: resourceInstanceId: The instance ID of the cloud product connected to WAF.
            '''
            result = self._values.get("resource_instance_id")
            assert result is not None, "Required property 'resource_instance_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def resource_product(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: resourceProduct: Access to WAF cloud products.
            '''
            result = self._values.get("resource_product")
            assert result is not None, "Required property 'resource_product' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def certificates(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTGW.CertificatesProperty"]]]]:
            '''
            :Property: certificates: The domain name bound to the certificate.
            '''
            result = self._values.get("certificates")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTGW.CertificatesProperty"]]]], result)

        @builtins.property
        def cipher_suite(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            cipherSuite: The type of encryption suite to be added. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Values:
            1: Indicates adding all encryption suites.
            2: Indicates adding a strong encryption suite. This value can be selected only when the value of TLSVersion is tlsv1.2.
            99: Indicates adding a custom encryption suite.
            '''
            result = self._values.get("cipher_suite")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def custom_ciphers(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: customCiphers: Customize the encryption suite list. This parameter is used only when CipherSuite is set to 99.
            '''
            result = self._values.get("custom_ciphers")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_tl_sv3(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableTlSv3: Whether to support TSL1.3 version. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Value:
            true: indicates that TSL1.3 version is supported.
            false: indicates that TSL1.3 version is not supported.
            '''
            result = self._values.get("enable_tl_sv3")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http2_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            http2Enabled: Whether to enable HTTP2. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Values:
            true: Enable HTTP2.
            false (default): Disable HTTP2.
            '''
            result = self._values.get("http2_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tls_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            tlsVersion: The TLS version to be added. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Values:
            tlsv1
            tlsv1.1
            tlsv1.2
            '''
            result = self._values.get("tls_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ListenProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-waf3.RosTGW.RedirectProperty",
        jsii_struct_bases=[],
        name_mapping={
            "keepalive": "keepalive",
            "keepalive_requests": "keepaliveRequests",
            "keepalive_timeout": "keepaliveTimeout",
            "read_timeout": "readTimeout",
            "request_headers": "requestHeaders",
            "write_timeout": "writeTimeout",
            "xff_header_mode": "xffHeaderMode",
            "xff_headers": "xffHeaders",
            "xff_proto": "xffProto",
        },
    )
    class RedirectProperty:
        def __init__(
            self,
            *,
            keepalive: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            keepalive_requests: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            keepalive_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            read_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            request_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosTGW.RequestHeadersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            write_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            xff_header_mode: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            xff_headers: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            xff_proto: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param keepalive: 
            :param keepalive_requests: 
            :param keepalive_timeout: 
            :param read_timeout: 
            :param request_headers: 
            :param write_timeout: 
            :param xff_header_mode: 
            :param xff_headers: 
            :param xff_proto: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__683f7dcc6929316a03d843f43d3478f57a2aed4c504625f23bc0cb54ec57f610)
                check_type(argname="argument keepalive", value=keepalive, expected_type=type_hints["keepalive"])
                check_type(argname="argument keepalive_requests", value=keepalive_requests, expected_type=type_hints["keepalive_requests"])
                check_type(argname="argument keepalive_timeout", value=keepalive_timeout, expected_type=type_hints["keepalive_timeout"])
                check_type(argname="argument read_timeout", value=read_timeout, expected_type=type_hints["read_timeout"])
                check_type(argname="argument request_headers", value=request_headers, expected_type=type_hints["request_headers"])
                check_type(argname="argument write_timeout", value=write_timeout, expected_type=type_hints["write_timeout"])
                check_type(argname="argument xff_header_mode", value=xff_header_mode, expected_type=type_hints["xff_header_mode"])
                check_type(argname="argument xff_headers", value=xff_headers, expected_type=type_hints["xff_headers"])
                check_type(argname="argument xff_proto", value=xff_proto, expected_type=type_hints["xff_proto"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if keepalive is not None:
                self._values["keepalive"] = keepalive
            if keepalive_requests is not None:
                self._values["keepalive_requests"] = keepalive_requests
            if keepalive_timeout is not None:
                self._values["keepalive_timeout"] = keepalive_timeout
            if read_timeout is not None:
                self._values["read_timeout"] = read_timeout
            if request_headers is not None:
                self._values["request_headers"] = request_headers
            if write_timeout is not None:
                self._values["write_timeout"] = write_timeout
            if xff_header_mode is not None:
                self._values["xff_header_mode"] = xff_header_mode
            if xff_headers is not None:
                self._values["xff_headers"] = xff_headers
            if xff_proto is not None:
                self._values["xff_proto"] = xff_proto

        @builtins.property
        def keepalive(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            keepalive: Whether to maintain a long connection. Value:
            true (default): indicates to maintain a long connection.
            false: indicates not to maintain a long connection.
            '''
            result = self._values.get("keepalive")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def keepalive_requests(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keepaliveRequests: The number of requests for multiplexing long connections. Value range: 60~1000, unit: number.
            '''
            result = self._values.get("keepalive_requests")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def keepalive_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keepaliveTimeout: Idle long connection timeout, value range: 1~60, default 15, unit: second.
            '''
            result = self._values.get("keepalive_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def read_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: readTimeout: Read timeout duration, unit: seconds. Value range: 1~3600.
            '''
            result = self._values.get("read_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def request_headers(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTGW.RequestHeadersProperty"]]]]:
            '''
            :Property: requestHeaders: The traffic tag field and value of the domain name, used to tag traffic processed by WAF.
            '''
            result = self._values.get("request_headers")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTGW.RequestHeadersProperty"]]]], result)

        @builtins.property
        def write_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: writeTimeout: Write timeout duration, unit: seconds. Value range: 1~3600.
            '''
            result = self._values.get("write_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def xff_header_mode(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xffHeaderMode: The way WAF obtains the client's real IP. Value:
            0 (default): indicates that the client access traffic is not forwarded by other seven-layer proxies before reaching WAF.
            1: indicates that WAF reads the first value of the X-Forwarded-For (XFF) field in the request header as the client IP.
            2: indicates that WAF reads the custom field value set by you in the request header as the client IP.
            '''
            result = self._values.get("xff_header_mode")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def xff_headers(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: xffHeaders: Sets a custom field list for obtaining the client IP, expressed in the format of ["header1", "header2", ...].
            '''
            result = self._values.get("xff_headers")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def xff_proto(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xffProto: X-Forward-For-Proto The protocol of WAF. Value:
            true (default): indicates that the protocol of WAF is transmitted.
            false: indicates that the protocol of WAF is not transmitted.
            '''
            result = self._values.get("xff_proto")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RedirectProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-waf3.RosTGW.RequestHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class RequestHeadersProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0307023b9f178e20ffe5383b92cbcbb4bf459e39aba6752159623c46c94354e5)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The specified custom request header field.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Customize the value set by the request header field.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RequestHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf3.RosTGWProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "listen": "listen",
        "redirect": "redirect",
        "resource_group_id": "resourceGroupId",
        "waf_instance_region": "wafInstanceRegion",
    },
)
class RosTGWProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listen: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTGW.ListenProperty, typing.Dict[builtins.str, typing.Any]]],
        redirect: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTGW.RedirectProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        waf_instance_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTGW``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw

        :param instance_id: 
        :param listen: 
        :param redirect: 
        :param resource_group_id: 
        :param waf_instance_region: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8864e3ff7e54d95a6a102d7a5b63b92d72e0f5d1dad9cb66bd76f89a811f1226)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument listen", value=listen, expected_type=type_hints["listen"])
            check_type(argname="argument redirect", value=redirect, expected_type=type_hints["redirect"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument waf_instance_region", value=waf_instance_region, expected_type=type_hints["waf_instance_region"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "listen": listen,
        }
        if redirect is not None:
            self._values["redirect"] = redirect
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if waf_instance_region is not None:
            self._values["waf_instance_region"] = waf_instance_region

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the WAF instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listen(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTGW.ListenProperty]:
        '''
        :Property: listen: Listening information.
        '''
        result = self._values.get("listen")
        assert result is not None, "Required property 'listen' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTGW.ListenProperty], result)

    @builtins.property
    def redirect(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTGW.RedirectProperty]]:
        '''
        :Property: redirect: Forwarding information.
        '''
        result = self._values.get("redirect")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTGW.RedirectProperty]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def waf_instance_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: wafInstanceRegion: The ID of the resource group.
        '''
        result = self._values.get("waf_instance_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTGWProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf3.TGWProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "listen": "listen",
        "redirect": "redirect",
        "resource_group_id": "resourceGroupId",
        "waf_instance_region": "wafInstanceRegion",
    },
)
class TGWProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listen: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTGW.ListenProperty, typing.Dict[builtins.str, typing.Any]]],
        redirect: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTGW.RedirectProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        waf_instance_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``TGW``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw

        :param instance_id: Property instanceId: The ID of the WAF instance.
        :param listen: Property listen: Listening information.
        :param redirect: Property redirect: Forwarding information.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param waf_instance_region: Property wafInstanceRegion: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e51835aa65042d7f34913a59053ee598105cc5946d215a978057d6b811b81d30)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument listen", value=listen, expected_type=type_hints["listen"])
            check_type(argname="argument redirect", value=redirect, expected_type=type_hints["redirect"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument waf_instance_region", value=waf_instance_region, expected_type=type_hints["waf_instance_region"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "listen": listen,
        }
        if redirect is not None:
            self._values["redirect"] = redirect
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if waf_instance_region is not None:
            self._values["waf_instance_region"] = waf_instance_region

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the WAF instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listen(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTGW.ListenProperty]:
        '''Property listen: Listening information.'''
        result = self._values.get("listen")
        assert result is not None, "Required property 'listen' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTGW.ListenProperty], result)

    @builtins.property
    def redirect(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTGW.RedirectProperty]]:
        '''Property redirect: Forwarding information.'''
        result = self._values.get("redirect")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTGW.RedirectProperty]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def waf_instance_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property wafInstanceRegion: The ID of the resource group.'''
        result = self._values.get("waf_instance_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TGWProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITgw)
class Tgw(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf3.Tgw",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::WAF3::TGW``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTGW``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[TGWProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd50aaeb8a644bc2ddebc4c3a74fbc313b74a62aaa544aa6355b38710af0f301)
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
        '''Attribute InstanceId: The ID of the WAF instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Port: Access the cloud product port of WAF.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceProduct")
    def attr_resource_product(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceProduct: Access to WAF cloud products.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceProduct"))

    @builtins.property
    @jsii.member(jsii_name="attrTgwId")
    def attr_tgw_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TgwId: The protection object ID of the transparent access resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTgwId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> TGWProps:
        return typing.cast(TGWProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eed20a4c61c4fc55ace303e5643f5e1eedb010a78ab94fc3a37d854cd4048cf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f969a8ded39cb5fb8dd1eebf97903bf5e4afd25050555114463c702957b087c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bef83d92a2d5bdb8a7e7bbd9f8189c5beaec7999273cc5a667b08b137c239aeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "IInstance",
    "ITgw",
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
    "RosTGW",
    "RosTGWProps",
    "TGWProps",
    "Tgw",
]

publication.publish()

def _typecheckingstub__04e6ffacadf3cf2b30a85ae8026d0f3977217d71a0a705242e6476dd1421e2b1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__754f7ff9788967aca4a85ab95e248fc7681f7a0db49869df32aca2f5458c1890(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__820b9fcb51776ce8a7fbf6c0cc6b91cc24a6396a209b28eee506824012931a91(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b41f14d239135d4d4f621a6a92ca99b46123d79aeb4d3d26459f903e3921c454(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dca669d9419f85df25c6d47ffeec4df4a9b5158718b2cb80cf15132b45324224(
    *,
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    additional_protection_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    api_security: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bot_app_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bot_web_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domains_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    elastic_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclusive_ip_address: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fraud_detection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    intelligent_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qps_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    traffic_billing_protection_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    waf_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63b42a348851f298edf9aad52903c399e9c1762ab264520eb51da5ac82bd61f6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65a5c1ead39eb42c19f18ce656e467a6ab62d875cbfe929d353775b8c4618a81(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a8ee05f683920ddd09cfafba589a14189213c6c9b92cca42e73b7862de640af(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56b69d88aeb3958829be0e24d77bac313a130c82e6fc35ee20b7fb40f92e3d0e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ad694b958cb5129899515aaa8dfcfcbccba23c17064607f722c10b4fd1307f2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9642593f38f2875884ff27b54487221545fb64ac759af169bb6b67fcf135c1de(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e759ae9f26a08b237e53b94507efb9e844c406d3c00aebadb203d94fa0d63ea5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fd6c479df3fb2768d0aa7b9d8dae7367d9d3813ff941050ff3e046ce266986e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64cac0ca85714921ebcdfd2d2dbcabbe692704af4fee32e44a4d1bc8b80726e2(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd641f430f77e6cedffb59a66d5455e6e959ce1724688503206410dba83c0bfd(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__309512b25da9437344b050d675d3525985d6489f9725fd15a0b4fe2d9e32932e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40d16a4bbaabdf3612433f2a45db7d97ceffc6e5a4439d7b45465c6b8d89adda(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d89d8af52cbf3f062f6dbd91d7e430c59ade917ccbc4c99334f3f7b5dc7c6462(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__545ebe11011290fe6ae3958622be263ed3aa2d9f5c9856939c8263981208a164(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fd78f84ada0e5238e473579070cdf1d1ec7c2914f93b111c5e1e4f286fd2aeb(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e367ced785428a9817937c43b11f91d9da5bb15dc0b5dfea6a5dcb9ea389e4e3(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4422d894b9e965368c70ec4465687854c1ab316ff77a6ba21504f9acf4387a92(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef273ab0c062a97ac6dc3ad042b5f18ccfaacad21e6e23364a366272f734bc87(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c495a1d5308e1afcda2c9f198e74eff600cc32ade9ee25d48d249871372c9d2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbe1b7c988a5369bbf0e8553ab79c37e835b244ccb4aa39466b2ca259d93082a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__805ea4ce27a85f889175d889d5e745543bf7f836574ed2dad49a1c1a0f935971(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b9f783781266db687afa11e3c5e53e6aff6bb8df00fe030638aa6bd0ae8bcac(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69ba80ee477f815e49b50519f110d5a16725ddb12532cc1b931621d6f0ba98ca(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1681fca2622775b7faab8f80489ef27f948012228567a37c6fa2a14a364fdc1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__513d467b820e48d862d88c50f5319626ef5243457cb1cc3b83dc6337f969b5b9(
    *,
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    additional_protection_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    api_security: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bot_app_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bot_web_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domains_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    elastic_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclusive_ip_address: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fraud_detection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    intelligent_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qps_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    traffic_billing_protection_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    waf_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c43cec86c7d18907f0b33023b00ff86b3cc51488f837cd815f8244f2f667084(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTGWProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1bdf9b965e3ce4f65c46139041c69b4e3017a1b0ddc645674b8a12a42cc85090(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d0a7c2e496de1d926bdbe5937c3c4d2d03746e0768d88be910652f0f3dfd8f5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc0f1ae462d52258fa983b6049da644820bfa960899c2e6de5b322a132b4bcdf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__978fb7867f8504652caa17ffc68cf015c0f147d475af5f15bddf75a482ff8675(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTGW.ListenProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13e7c97e695d00e9f24ff81aba515ef137dcb93dcd4fd5d64a33cb5ca4bb84d7(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTGW.RedirectProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19bc3f8a3a77bb6d827282d8bd160e5413cc1524fd526cb0ac55a556d00061a1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a512e9b3ffff121892beabd22281f3410f9b5b5f4d7d7455c549a40d2d302ff9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__628b6d39ec0ad1a28b80f9602283486c86387dd8005d57091d5709e45a65addf(
    *,
    applied_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c571c53702def49f82597d8623f3bac2e6bd29e05f54c61e1b0beee688e2d4e9(
    *,
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_product: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTGW.CertificatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    cipher_suite: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    custom_ciphers: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_tl_sv3: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http2_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__683f7dcc6929316a03d843f43d3478f57a2aed4c504625f23bc0cb54ec57f610(
    *,
    keepalive: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    keepalive_requests: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    keepalive_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    read_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    request_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTGW.RequestHeadersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    write_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    xff_header_mode: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    xff_headers: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    xff_proto: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0307023b9f178e20ffe5383b92cbcbb4bf459e39aba6752159623c46c94354e5(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8864e3ff7e54d95a6a102d7a5b63b92d72e0f5d1dad9cb66bd76f89a811f1226(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listen: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTGW.ListenProperty, typing.Dict[builtins.str, typing.Any]]],
    redirect: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTGW.RedirectProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    waf_instance_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e51835aa65042d7f34913a59053ee598105cc5946d215a978057d6b811b81d30(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listen: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTGW.ListenProperty, typing.Dict[builtins.str, typing.Any]]],
    redirect: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTGW.RedirectProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    waf_instance_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd50aaeb8a644bc2ddebc4c3a74fbc313b74a62aaa544aa6355b38710af0f301(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TGWProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eed20a4c61c4fc55ace303e5643f5e1eedb010a78ab94fc3a37d854cd4048cf9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f969a8ded39cb5fb8dd1eebf97903bf5e4afd25050555114463c702957b087c8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bef83d92a2d5bdb8a7e7bbd9f8189c5beaec7999273cc5a667b08b137c239aeb(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
