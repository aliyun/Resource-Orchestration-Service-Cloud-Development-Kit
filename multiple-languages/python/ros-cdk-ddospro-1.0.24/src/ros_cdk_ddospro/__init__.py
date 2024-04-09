'''
## Aliyun ROS DDOSPRO Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DDOSPRO from '@alicloud/ros-cdk-ddospro';
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


class PremiumInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ddospro.PremiumInstance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DDoSPro::PremiumInstance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPremiumInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["PremiumInstanceProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ca97bab53a387dbc815509b75afca7dd13ee8cd546d393eafe27c56326f51f8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6cbd5ca38cc52641e1881264d86c42c3ad114702dc93d2af9117d8ffa11d530a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd9ad0593de3168705e893ca58192d0288c0399a26891f98f524ca5164fd6dcd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PremiumInstanceProps":
        return typing.cast("PremiumInstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PremiumInstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db19532a8b52332c625d4c649fe895764874fa5046825b9a5cc4ef16863d08ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6aab4ca31627cc94ca929b8643b2e9897eed38c7afd2ff1e91ee06616ac330db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ddospro.PremiumInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "burst_bandwidth_mode": "burstBandwidthMode",
        "domain_count": "domainCount",
        "function_version": "functionVersion",
        "normal_bandwidth": "normalBandwidth",
        "normal_qps": "normalQps",
        "period": "period",
        "period_unit": "periodUnit",
        "port_count": "portCount",
        "product_plan": "productPlan",
        "tags": "tags",
    },
)
class PremiumInstanceProps:
    def __init__(
        self,
        *,
        burst_bandwidth_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        function_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        normal_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        normal_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        port_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosPremiumInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``PremiumInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance

        :param burst_bandwidth_mode: Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values: 0: disables the burstable clean bandwidth feature. 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method. 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
        :param domain_count: Property domainCount: The number of domain names that you want to protect. The value of DomainCount varies based on the value of ProductPlan. If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10. If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10. If you set ProductPlan to 2, you do not need to specify this parameter. If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        :param function_version: Property functionVersion: The function plan of the instance. Valid values: 0: the Standard function plan 1: the Enhanced function plan.
        :param normal_bandwidth: Property normalBandwidth: The clean bandwidth provided by the instance. Unit: Mbit/s. The value of NormalBandwidth varies based on the value of ProductPlan. If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300. If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300. If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100. If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
        :param normal_qps: Property normalQps: The clean QPS provided by the instance. The value of NormalQps varies based on the value of ProductPlan. If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100. If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100. If you set ProductPlan to 2, you do not need to specify this parameter. If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
        :param period: Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param port_count: Property portCount: The number of ports that you want to protect. The value of PortCount varies based on the value of ProductPlan. If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5. If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5. If you set ProductPlan to 2, you do not need to specify this parameter. If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        :param product_plan: Property productPlan: The mitigation plan of the instance. Valid values: 0: the Insurance mitigation plan 1: the Unlimited mitigation plan 2: the Chinese Mainland Acceleration (CMA) mitigation plan 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33b9c9df9785aa47941a76764139beab5cf0b2655ff0df91ee406d53cfcc5f09)
            check_type(argname="argument burst_bandwidth_mode", value=burst_bandwidth_mode, expected_type=type_hints["burst_bandwidth_mode"])
            check_type(argname="argument domain_count", value=domain_count, expected_type=type_hints["domain_count"])
            check_type(argname="argument function_version", value=function_version, expected_type=type_hints["function_version"])
            check_type(argname="argument normal_bandwidth", value=normal_bandwidth, expected_type=type_hints["normal_bandwidth"])
            check_type(argname="argument normal_qps", value=normal_qps, expected_type=type_hints["normal_qps"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument port_count", value=port_count, expected_type=type_hints["port_count"])
            check_type(argname="argument product_plan", value=product_plan, expected_type=type_hints["product_plan"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if burst_bandwidth_mode is not None:
            self._values["burst_bandwidth_mode"] = burst_bandwidth_mode
        if domain_count is not None:
            self._values["domain_count"] = domain_count
        if function_version is not None:
            self._values["function_version"] = function_version
        if normal_bandwidth is not None:
            self._values["normal_bandwidth"] = normal_bandwidth
        if normal_qps is not None:
            self._values["normal_qps"] = normal_qps
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if port_count is not None:
            self._values["port_count"] = port_count
        if product_plan is not None:
            self._values["product_plan"] = product_plan
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def burst_bandwidth_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.

        Valid values:
        0: disables the burstable clean bandwidth feature.
        1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
        2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
        '''
        result = self._values.get("burst_bandwidth_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domainCount: The number of domain names that you want to protect.

        The value of DomainCount varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        If you set ProductPlan to 2, you do not need to specify this parameter.
        If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        '''
        result = self._values.get("domain_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def function_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property functionVersion: The function plan of the instance.

        Valid values:
        0: the Standard function plan
        1: the Enhanced function plan.
        '''
        result = self._values.get("function_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def normal_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property normalBandwidth: The clean bandwidth provided by the instance.

        Unit: Mbit/s.
        The value of NormalBandwidth varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
        If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
        If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
        If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
        '''
        result = self._values.get("normal_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def normal_qps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property normalQps: The clean QPS provided by the instance.

        The value of NormalQps varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
        If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
        If you set ProductPlan to 2, you do not need to specify this parameter.
        If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
        '''
        result = self._values.get("normal_qps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.'''
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
    def port_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property portCount: The number of ports that you want to protect.

        The value of PortCount varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        If you set ProductPlan to 2, you do not need to specify this parameter.
        If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        '''
        result = self._values.get("port_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property productPlan: The mitigation plan of the instance.

        Valid values:
        0: the Insurance mitigation plan
        1: the Unlimited mitigation plan
        2: the Chinese Mainland Acceleration (CMA) mitigation plan
        3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
        '''
        result = self._values.get("product_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosPremiumInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosPremiumInstance.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PremiumInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ProInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ddospro.ProInstance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DDoSPro::ProInstance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosProInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ProInstanceProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e2c0ee9ebbc884f99cdb63a875d176538e2f18c4cb99a5bfbd35011c2010269)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8a368e1a791c38bec228fc3a0bfad301213d36f8dc3a63f1702c940f29d80c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a30902f16ce9ca2578e605aaa4e9e274d4b7d214e63d0fa88c9ce26cc5533bef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ProInstanceProps":
        return typing.cast("ProInstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ProInstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__849e63b645c4fa9b1d278612d183302e978260ab56e749dffae2102bc3effdac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a96947615cf513eff72d410f26039fe4aa08b021e16963f3507630ca59d00aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ddospro.ProInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_type": "addressType",
        "bandwidth": "bandwidth",
        "base_bandwidth": "baseBandwidth",
        "burst_bandwidth_mode": "burstBandwidthMode",
        "domain_count": "domainCount",
        "edition": "edition",
        "function_version": "functionVersion",
        "normal_qps": "normalQps",
        "period": "period",
        "period_unit": "periodUnit",
        "port_count": "portCount",
        "service_bandwidth": "serviceBandwidth",
        "service_partner": "servicePartner",
        "tags": "tags",
    },
)
class ProInstanceProps:
    def __init__(
        self,
        *,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        base_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        burst_bandwidth_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        function_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        normal_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        port_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_partner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosProInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ProInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance

        :param address_type: Property addressType: The IP version of the IP address. Valid values: Ipv4、Ipv6
        :param bandwidth: Property bandwidth: The burstable protection bandwidth. Unit: Gbit/s. The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
        :param base_bandwidth: Property baseBandwidth: The basic protection bandwidth. Unit: Gbit/s. Valid values: 30, 60, 100, 300, 400, 500, and 600.
        :param burst_bandwidth_mode: Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values: 0: disables the burstable clean bandwidth feature. 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method. 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
        :param domain_count: Property domainCount: The number of domain names that you want to protect. Valid values: 50 to 2000. The value must be a multiple of 10.
        :param edition: Property edition: The mitigation plan of the instance. Set the value to coop, which indicates the Profession mitigation plan.
        :param function_version: Property functionVersion: The function plan of the instance. Valid values: 0: the Standard function plan 1: the Enhanced function plan.
        :param normal_qps: Property normalQps: The clean queries per second (QPS) provided by the instance. Valid values: 3000 to 100000. The value must be a multiple of 100.
        :param period: Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param port_count: Property portCount: The number of ports that you want to protect. Valid values: 50 to 400. The value must be a multiple of 5.
        :param service_bandwidth: Property serviceBandwidth: The clean bandwidth provided by the instance. Unit: Mbit/s. Valid values: 100 to 5000. The value must be a multiple of 50.
        :param service_partner: Property servicePartner: The type of the protection line. Set the value to coop-line-001, which indicates the default protection line.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c44bbb8ec4583870dc506e63c23a9ac3be0833397db59206ab27de71af81cf4e)
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument base_bandwidth", value=base_bandwidth, expected_type=type_hints["base_bandwidth"])
            check_type(argname="argument burst_bandwidth_mode", value=burst_bandwidth_mode, expected_type=type_hints["burst_bandwidth_mode"])
            check_type(argname="argument domain_count", value=domain_count, expected_type=type_hints["domain_count"])
            check_type(argname="argument edition", value=edition, expected_type=type_hints["edition"])
            check_type(argname="argument function_version", value=function_version, expected_type=type_hints["function_version"])
            check_type(argname="argument normal_qps", value=normal_qps, expected_type=type_hints["normal_qps"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument port_count", value=port_count, expected_type=type_hints["port_count"])
            check_type(argname="argument service_bandwidth", value=service_bandwidth, expected_type=type_hints["service_bandwidth"])
            check_type(argname="argument service_partner", value=service_partner, expected_type=type_hints["service_partner"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_type is not None:
            self._values["address_type"] = address_type
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if base_bandwidth is not None:
            self._values["base_bandwidth"] = base_bandwidth
        if burst_bandwidth_mode is not None:
            self._values["burst_bandwidth_mode"] = burst_bandwidth_mode
        if domain_count is not None:
            self._values["domain_count"] = domain_count
        if edition is not None:
            self._values["edition"] = edition
        if function_version is not None:
            self._values["function_version"] = function_version
        if normal_qps is not None:
            self._values["normal_qps"] = normal_qps
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if port_count is not None:
            self._values["port_count"] = port_count
        if service_bandwidth is not None:
            self._values["service_bandwidth"] = service_bandwidth
        if service_partner is not None:
            self._values["service_partner"] = service_partner
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressType: The IP version of the IP address.

        Valid values: Ipv4、Ipv6
        '''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidth: The burstable protection bandwidth.

        Unit: Gbit/s.
        The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def base_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property baseBandwidth: The basic protection bandwidth.

        Unit: Gbit/s.
        Valid values: 30, 60, 100, 300, 400, 500, and 600.
        '''
        result = self._values.get("base_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def burst_bandwidth_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.

        Valid values:
        0: disables the burstable clean bandwidth feature.
        1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
        2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
        '''
        result = self._values.get("burst_bandwidth_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domainCount: The number of domain names that you want to protect.

        Valid values: 50 to 2000. The value must be a multiple of 10.
        '''
        result = self._values.get("domain_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def edition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property edition: The mitigation plan of the instance.

        Set the value to coop, which indicates the Profession mitigation plan.
        '''
        result = self._values.get("edition")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def function_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property functionVersion: The function plan of the instance.

        Valid values:
        0: the Standard function plan
        1: the Enhanced function plan.
        '''
        result = self._values.get("function_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def normal_qps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property normalQps: The clean queries per second (QPS) provided by the instance.

        Valid values: 3000 to 100000. The value must be a multiple of 100.
        '''
        result = self._values.get("normal_qps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.'''
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
    def port_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property portCount: The number of ports that you want to protect.

        Valid values: 50 to 400. The value must be a multiple of 5.
        '''
        result = self._values.get("port_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceBandwidth: The clean bandwidth provided by the instance.

        Unit: Mbit/s.
        Valid values: 100 to 5000. The value must be a multiple of 50.
        '''
        result = self._values.get("service_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_partner(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property servicePartner: The type of the protection line.

        Set the value to coop-line-001, which indicates the default protection line.
        '''
        result = self._values.get("service_partner")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosProInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosProInstance.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPremiumInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ddospro.RosPremiumInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DDoSPro::PremiumInstance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PremiumInstance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPremiumInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a99e16ce9cfb5e0990d1e19a0ed74921a9a224b5d6f16b65a595dd882fa5dd0e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7b6667fa6d3d4d01f6743dace84b8609c0102c701eaedb80bcf54bef657f2297)
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
        :Attribute: InstanceId: The ID of the instance.
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
            type_hints = typing.get_type_hints(_typecheckingstub__6266e87a0e25267b87ca4a713f726f3b4dcc480c2e65acebb7558799e8306c7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="burstBandwidthMode")
    def burst_bandwidth_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
        0: disables the burstable clean bandwidth feature.
        1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
        2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "burstBandwidthMode"))

    @burst_bandwidth_mode.setter
    def burst_bandwidth_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cefc3152534ca93ecafd9862989c517f35530f7b0b90a74439f4222b9379c394)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "burstBandwidthMode", value)

    @builtins.property
    @jsii.member(jsii_name="domainCount")
    def domain_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        domainCount: The number of domain names that you want to protect.
        The value of DomainCount varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        If you set ProductPlan to 2, you do not need to specify this parameter.
        If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domainCount"))

    @domain_count.setter
    def domain_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__380428772b09bdde45871864ecc937e7887df582194cc7fc24a1fa6d4b0a6bb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainCount", value)

    @builtins.property
    @jsii.member(jsii_name="functionVersion")
    def function_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        functionVersion: The function plan of the instance. Valid values:
        0: the Standard function plan
        1: the Enhanced function plan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "functionVersion"))

    @function_version.setter
    def function_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94889749c466e439277d9fdc4145a822986551d00d11d35995d8d81f84a5e45a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionVersion", value)

    @builtins.property
    @jsii.member(jsii_name="normalBandwidth")
    def normal_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        normalBandwidth: The clean bandwidth provided by the instance. Unit: Mbit/s.
        The value of NormalBandwidth varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
        If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
        If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
        If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "normalBandwidth"))

    @normal_bandwidth.setter
    def normal_bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c375f4b16fc441f382398c4f183e8498d68ad216f6cd7f3b76e0f33cc7aef25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "normalBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="normalQps")
    def normal_qps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        normalQps: The clean QPS provided by the instance.
        The value of NormalQps varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
        If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
        If you set ProductPlan to 2, you do not need to specify this parameter.
        If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "normalQps"))

    @normal_qps.setter
    def normal_qps(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__536d72c3ea8a579d18b65248a338a53c456c8b38196f2a039c3689789728f133)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "normalQps", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
        If PeriodUnit is Year, the valid range is 1, 2
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a7a7a4f4722388050d7ed36b6f982bbfde9dc40e090acf6c3bba4a5d602cc49)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f5fc6255ac4c8f3d21d09a8366dce377778580a1bc8bd82dbf79055a6fd42137)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="portCount")
    def port_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        portCount: The number of ports that you want to protect.
        The value of PortCount varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        If you set ProductPlan to 2, you do not need to specify this parameter.
        If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "portCount"))

    @port_count.setter
    def port_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1cdbb6288a2a674187cb77b61154bfd11b37caea8e799cb1befeee5463c15e17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "portCount", value)

    @builtins.property
    @jsii.member(jsii_name="productPlan")
    def product_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        productPlan: The mitigation plan of the instance. Valid values:
        0: the Insurance mitigation plan
        1: the Unlimited mitigation plan
        2: the Chinese Mainland Acceleration (CMA) mitigation plan
        3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "productPlan"))

    @product_plan.setter
    def product_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c25b1df443a5877fcd2648a0afd35b88806de85f765fa995d81c94104e3d6b8a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productPlan", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosPremiumInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosPremiumInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosPremiumInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c180226d9e42f003edbf0b5612dd961e17bb08011a675d0d4bd598e04df731b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ddospro.RosPremiumInstance.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d647de052945d5ace2a723703090aab896298ba7bd5d0ef9bd13a255dcd3ca68)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ddospro.RosPremiumInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "burst_bandwidth_mode": "burstBandwidthMode",
        "domain_count": "domainCount",
        "function_version": "functionVersion",
        "normal_bandwidth": "normalBandwidth",
        "normal_qps": "normalQps",
        "period": "period",
        "period_unit": "periodUnit",
        "port_count": "portCount",
        "product_plan": "productPlan",
        "tags": "tags",
    },
)
class RosPremiumInstanceProps:
    def __init__(
        self,
        *,
        burst_bandwidth_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        function_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        normal_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        normal_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        port_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosPremiumInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosPremiumInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance

        :param burst_bandwidth_mode: 
        :param domain_count: 
        :param function_version: 
        :param normal_bandwidth: 
        :param normal_qps: 
        :param period: 
        :param period_unit: 
        :param port_count: 
        :param product_plan: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e509db68cbc2a6b93f835fc7fc4874eab89c46ad0d88001ba8599e405f85e5de)
            check_type(argname="argument burst_bandwidth_mode", value=burst_bandwidth_mode, expected_type=type_hints["burst_bandwidth_mode"])
            check_type(argname="argument domain_count", value=domain_count, expected_type=type_hints["domain_count"])
            check_type(argname="argument function_version", value=function_version, expected_type=type_hints["function_version"])
            check_type(argname="argument normal_bandwidth", value=normal_bandwidth, expected_type=type_hints["normal_bandwidth"])
            check_type(argname="argument normal_qps", value=normal_qps, expected_type=type_hints["normal_qps"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument port_count", value=port_count, expected_type=type_hints["port_count"])
            check_type(argname="argument product_plan", value=product_plan, expected_type=type_hints["product_plan"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if burst_bandwidth_mode is not None:
            self._values["burst_bandwidth_mode"] = burst_bandwidth_mode
        if domain_count is not None:
            self._values["domain_count"] = domain_count
        if function_version is not None:
            self._values["function_version"] = function_version
        if normal_bandwidth is not None:
            self._values["normal_bandwidth"] = normal_bandwidth
        if normal_qps is not None:
            self._values["normal_qps"] = normal_qps
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if port_count is not None:
            self._values["port_count"] = port_count
        if product_plan is not None:
            self._values["product_plan"] = product_plan
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def burst_bandwidth_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
        0: disables the burstable clean bandwidth feature.
        1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
        2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
        '''
        result = self._values.get("burst_bandwidth_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        domainCount: The number of domain names that you want to protect.
        The value of DomainCount varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        If you set ProductPlan to 2, you do not need to specify this parameter.
        If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
        '''
        result = self._values.get("domain_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def function_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        functionVersion: The function plan of the instance. Valid values:
        0: the Standard function plan
        1: the Enhanced function plan.
        '''
        result = self._values.get("function_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def normal_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        normalBandwidth: The clean bandwidth provided by the instance. Unit: Mbit/s.
        The value of NormalBandwidth varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
        If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
        If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
        If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
        '''
        result = self._values.get("normal_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def normal_qps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        normalQps: The clean QPS provided by the instance.
        The value of NormalQps varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
        If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
        If you set ProductPlan to 2, you do not need to specify this parameter.
        If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
        '''
        result = self._values.get("normal_qps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
        If PeriodUnit is Year, the valid range is 1, 2
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
    def port_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        portCount: The number of ports that you want to protect.
        The value of PortCount varies based on the value of ProductPlan.
        If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        If you set ProductPlan to 2, you do not need to specify this parameter.
        If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
        '''
        result = self._values.get("port_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        productPlan: The mitigation plan of the instance. Valid values:
        0: the Insurance mitigation plan
        1: the Unlimited mitigation plan
        2: the Chinese Mainland Acceleration (CMA) mitigation plan
        3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
        '''
        result = self._values.get("product_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosPremiumInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosPremiumInstance.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPremiumInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ddospro.RosProInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DDoSPro::ProInstance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ProInstance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91071cfc3d0eceb23634781d5e42a1a2f8f6940cfb83f91bd11e2934d4c2573a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c1c354630207cd96107f3971c777954c8e746e5370a20968c620722fad9a513b)
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
        :Attribute: InstanceId: The ID of the instance.
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
            type_hints = typing.get_type_hints(_typecheckingstub__ea95fec57b6c7ce728f7f2e89635bd83e49326e1f602c9a5ddeba9d749a1d3d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="addressType")
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressType: The IP version of the IP address. Valid values: Ipv4、Ipv6
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressType"))

    @address_type.setter
    def address_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bb99c798657ff5e275077bef6dc4b3a7f3a7f15feccf6ad7b797315b7d12fb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressType", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        bandwidth: The burstable protection bandwidth. Unit: Gbit/s.
        The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__287e64d48d1ff2df0c6c91dee9ae71a50cbaf472a81cab59395f8f287053ee4b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="baseBandwidth")
    def base_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        baseBandwidth: The basic protection bandwidth. Unit: Gbit/s.
        Valid values: 30, 60, 100, 300, 400, 500, and 600.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "baseBandwidth"))

    @base_bandwidth.setter
    def base_bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a58801eb0d1049d427c3d2537c3cdf81b5ed4cceba22b0de4d1f43ad9f26125a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "baseBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="burstBandwidthMode")
    def burst_bandwidth_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
        0: disables the burstable clean bandwidth feature.
        1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
        2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "burstBandwidthMode"))

    @burst_bandwidth_mode.setter
    def burst_bandwidth_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c4d232b191f36e55b5f0d704f854d58c61c76f5398f215b4bd42c287783c125)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "burstBandwidthMode", value)

    @builtins.property
    @jsii.member(jsii_name="domainCount")
    def domain_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        domainCount: The number of domain names that you want to protect.
        Valid values: 50 to 2000. The value must be a multiple of 10.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domainCount"))

    @domain_count.setter
    def domain_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd833e5fb8208dd8e536d6dcc029cf9bfd64d9db38a1126af14db6ae7e231252)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainCount", value)

    @builtins.property
    @jsii.member(jsii_name="edition")
    def edition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: edition: The mitigation plan of the instance. Set the value to coop, which indicates the Profession mitigation plan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "edition"))

    @edition.setter
    def edition(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68ac7a3e0f7861de8b96acc26254e6298e68626d1c60be6eb4cbde35e645f688)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "edition", value)

    @builtins.property
    @jsii.member(jsii_name="functionVersion")
    def function_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        functionVersion: The function plan of the instance. Valid values:
        0: the Standard function plan
        1: the Enhanced function plan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "functionVersion"))

    @function_version.setter
    def function_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5949581b85535e5a239a6b8bce0f02689fc6379c7ad7af81ede737c1ff556309)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionVersion", value)

    @builtins.property
    @jsii.member(jsii_name="normalQps")
    def normal_qps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        normalQps: The clean queries per second (QPS) provided by the instance.
        Valid values: 3000 to 100000. The value must be a multiple of 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "normalQps"))

    @normal_qps.setter
    def normal_qps(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a01274d4a4b3dd6c07ca6fb95208f9c6228601e2acd51a6e725fb0816125631)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "normalQps", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
        If PeriodUnit is Year, the valid range is 1, 2
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6628bcf5811036da98d4460a694df52e5a2f98de047ff60053d38fa0642ae47f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e1c9edbfeb3d6b5c70e532db4e57e5d72b91c323921c65c9201fd5934d339e2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="portCount")
    def port_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        portCount: The number of ports that you want to protect.
        Valid values: 50 to 400. The value must be a multiple of 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "portCount"))

    @port_count.setter
    def port_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3828359a74af83fd2a3cab22b42aaf5791322fd15d8bf61e1368a3218f062440)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "portCount", value)

    @builtins.property
    @jsii.member(jsii_name="serviceBandwidth")
    def service_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        serviceBandwidth: The clean bandwidth provided by the instance. Unit: Mbit/s.
        Valid values: 100 to 5000. The value must be a multiple of 50.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceBandwidth"))

    @service_bandwidth.setter
    def service_bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b059371ee26bc7970cedd121dc51df7afd035156cd20483c68eb00fe2aa150e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="servicePartner")
    def service_partner(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: servicePartner: The type of the protection line. Set the value to coop-line-001, which indicates the default protection line.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "servicePartner"))

    @service_partner.setter
    def service_partner(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09a2f952ce4f933a42625bdd924cb7fdae05cacc6ed938f4a7a0c971ae8eb42f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "servicePartner", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosProInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosProInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosProInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__959edfbe54a57bf7469c7f7e2f7517803256234378ef4773b025f38fa68e4420)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ddospro.RosProInstance.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__dcb197886757f3a8d7f04ff2cae020e1a170b76e81448c92e4d84deef1cc1ee8)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ddospro.RosProInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_type": "addressType",
        "bandwidth": "bandwidth",
        "base_bandwidth": "baseBandwidth",
        "burst_bandwidth_mode": "burstBandwidthMode",
        "domain_count": "domainCount",
        "edition": "edition",
        "function_version": "functionVersion",
        "normal_qps": "normalQps",
        "period": "period",
        "period_unit": "periodUnit",
        "port_count": "portCount",
        "service_bandwidth": "serviceBandwidth",
        "service_partner": "servicePartner",
        "tags": "tags",
    },
)
class RosProInstanceProps:
    def __init__(
        self,
        *,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        base_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        burst_bandwidth_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        function_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        normal_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        port_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_partner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosProInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosProInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance

        :param address_type: 
        :param bandwidth: 
        :param base_bandwidth: 
        :param burst_bandwidth_mode: 
        :param domain_count: 
        :param edition: 
        :param function_version: 
        :param normal_qps: 
        :param period: 
        :param period_unit: 
        :param port_count: 
        :param service_bandwidth: 
        :param service_partner: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecad0fcb5a638f7a89dba11c887c8b939e3386c25d1e9da5d2f582b2def8a158)
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument base_bandwidth", value=base_bandwidth, expected_type=type_hints["base_bandwidth"])
            check_type(argname="argument burst_bandwidth_mode", value=burst_bandwidth_mode, expected_type=type_hints["burst_bandwidth_mode"])
            check_type(argname="argument domain_count", value=domain_count, expected_type=type_hints["domain_count"])
            check_type(argname="argument edition", value=edition, expected_type=type_hints["edition"])
            check_type(argname="argument function_version", value=function_version, expected_type=type_hints["function_version"])
            check_type(argname="argument normal_qps", value=normal_qps, expected_type=type_hints["normal_qps"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument port_count", value=port_count, expected_type=type_hints["port_count"])
            check_type(argname="argument service_bandwidth", value=service_bandwidth, expected_type=type_hints["service_bandwidth"])
            check_type(argname="argument service_partner", value=service_partner, expected_type=type_hints["service_partner"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_type is not None:
            self._values["address_type"] = address_type
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if base_bandwidth is not None:
            self._values["base_bandwidth"] = base_bandwidth
        if burst_bandwidth_mode is not None:
            self._values["burst_bandwidth_mode"] = burst_bandwidth_mode
        if domain_count is not None:
            self._values["domain_count"] = domain_count
        if edition is not None:
            self._values["edition"] = edition
        if function_version is not None:
            self._values["function_version"] = function_version
        if normal_qps is not None:
            self._values["normal_qps"] = normal_qps
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if port_count is not None:
            self._values["port_count"] = port_count
        if service_bandwidth is not None:
            self._values["service_bandwidth"] = service_bandwidth
        if service_partner is not None:
            self._values["service_partner"] = service_partner
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressType: The IP version of the IP address. Valid values: Ipv4、Ipv6
        '''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        bandwidth: The burstable protection bandwidth. Unit: Gbit/s.
        The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def base_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        baseBandwidth: The basic protection bandwidth. Unit: Gbit/s.
        Valid values: 30, 60, 100, 300, 400, 500, and 600.
        '''
        result = self._values.get("base_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def burst_bandwidth_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
        0: disables the burstable clean bandwidth feature.
        1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
        2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
        '''
        result = self._values.get("burst_bandwidth_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        domainCount: The number of domain names that you want to protect.
        Valid values: 50 to 2000. The value must be a multiple of 10.
        '''
        result = self._values.get("domain_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def edition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: edition: The mitigation plan of the instance. Set the value to coop, which indicates the Profession mitigation plan.
        '''
        result = self._values.get("edition")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def function_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        functionVersion: The function plan of the instance. Valid values:
        0: the Standard function plan
        1: the Enhanced function plan.
        '''
        result = self._values.get("function_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def normal_qps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        normalQps: The clean queries per second (QPS) provided by the instance.
        Valid values: 3000 to 100000. The value must be a multiple of 100.
        '''
        result = self._values.get("normal_qps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
        If PeriodUnit is Year, the valid range is 1, 2
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
    def port_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        portCount: The number of ports that you want to protect.
        Valid values: 50 to 400. The value must be a multiple of 5.
        '''
        result = self._values.get("port_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        serviceBandwidth: The clean bandwidth provided by the instance. Unit: Mbit/s.
        Valid values: 100 to 5000. The value must be a multiple of 50.
        '''
        result = self._values.get("service_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_partner(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: servicePartner: The type of the protection line. Set the value to coop-line-001, which indicates the default protection line.
        '''
        result = self._values.get("service_partner")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosProInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosProInstance.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "PremiumInstance",
    "PremiumInstanceProps",
    "ProInstance",
    "ProInstanceProps",
    "RosPremiumInstance",
    "RosPremiumInstanceProps",
    "RosProInstance",
    "RosProInstanceProps",
]

publication.publish()

def _typecheckingstub__5ca97bab53a387dbc815509b75afca7dd13ee8cd546d393eafe27c56326f51f8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[PremiumInstanceProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6cbd5ca38cc52641e1881264d86c42c3ad114702dc93d2af9117d8ffa11d530a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd9ad0593de3168705e893ca58192d0288c0399a26891f98f524ca5164fd6dcd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db19532a8b52332c625d4c649fe895764874fa5046825b9a5cc4ef16863d08ad(
    value: PremiumInstanceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6aab4ca31627cc94ca929b8643b2e9897eed38c7afd2ff1e91ee06616ac330db(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33b9c9df9785aa47941a76764139beab5cf0b2655ff0df91ee406d53cfcc5f09(
    *,
    burst_bandwidth_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    function_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    normal_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    normal_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosPremiumInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e2c0ee9ebbc884f99cdb63a875d176538e2f18c4cb99a5bfbd35011c2010269(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ProInstanceProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8a368e1a791c38bec228fc3a0bfad301213d36f8dc3a63f1702c940f29d80c1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a30902f16ce9ca2578e605aaa4e9e274d4b7d214e63d0fa88c9ce26cc5533bef(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__849e63b645c4fa9b1d278612d183302e978260ab56e749dffae2102bc3effdac(
    value: ProInstanceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a96947615cf513eff72d410f26039fe4aa08b021e16963f3507630ca59d00aa(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c44bbb8ec4583870dc506e63c23a9ac3be0833397db59206ab27de71af81cf4e(
    *,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    base_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    burst_bandwidth_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    function_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    normal_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_partner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosProInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a99e16ce9cfb5e0990d1e19a0ed74921a9a224b5d6f16b65a595dd882fa5dd0e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPremiumInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b6667fa6d3d4d01f6743dace84b8609c0102c701eaedb80bcf54bef657f2297(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6266e87a0e25267b87ca4a713f726f3b4dcc480c2e65acebb7558799e8306c7c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cefc3152534ca93ecafd9862989c517f35530f7b0b90a74439f4222b9379c394(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__380428772b09bdde45871864ecc937e7887df582194cc7fc24a1fa6d4b0a6bb7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94889749c466e439277d9fdc4145a822986551d00d11d35995d8d81f84a5e45a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c375f4b16fc441f382398c4f183e8498d68ad216f6cd7f3b76e0f33cc7aef25(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__536d72c3ea8a579d18b65248a338a53c456c8b38196f2a039c3689789728f133(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a7a7a4f4722388050d7ed36b6f982bbfde9dc40e090acf6c3bba4a5d602cc49(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5fc6255ac4c8f3d21d09a8366dce377778580a1bc8bd82dbf79055a6fd42137(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cdbb6288a2a674187cb77b61154bfd11b37caea8e799cb1befeee5463c15e17(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c25b1df443a5877fcd2648a0afd35b88806de85f765fa995d81c94104e3d6b8a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c180226d9e42f003edbf0b5612dd961e17bb08011a675d0d4bd598e04df731b(
    value: typing.Optional[typing.List[RosPremiumInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d647de052945d5ace2a723703090aab896298ba7bd5d0ef9bd13a255dcd3ca68(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e509db68cbc2a6b93f835fc7fc4874eab89c46ad0d88001ba8599e405f85e5de(
    *,
    burst_bandwidth_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    function_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    normal_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    normal_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosPremiumInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91071cfc3d0eceb23634781d5e42a1a2f8f6940cfb83f91bd11e2934d4c2573a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1c354630207cd96107f3971c777954c8e746e5370a20968c620722fad9a513b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea95fec57b6c7ce728f7f2e89635bd83e49326e1f602c9a5ddeba9d749a1d3d2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bb99c798657ff5e275077bef6dc4b3a7f3a7f15feccf6ad7b797315b7d12fb3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__287e64d48d1ff2df0c6c91dee9ae71a50cbaf472a81cab59395f8f287053ee4b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a58801eb0d1049d427c3d2537c3cdf81b5ed4cceba22b0de4d1f43ad9f26125a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c4d232b191f36e55b5f0d704f854d58c61c76f5398f215b4bd42c287783c125(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd833e5fb8208dd8e536d6dcc029cf9bfd64d9db38a1126af14db6ae7e231252(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68ac7a3e0f7861de8b96acc26254e6298e68626d1c60be6eb4cbde35e645f688(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5949581b85535e5a239a6b8bce0f02689fc6379c7ad7af81ede737c1ff556309(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a01274d4a4b3dd6c07ca6fb95208f9c6228601e2acd51a6e725fb0816125631(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6628bcf5811036da98d4460a694df52e5a2f98de047ff60053d38fa0642ae47f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1c9edbfeb3d6b5c70e532db4e57e5d72b91c323921c65c9201fd5934d339e2e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3828359a74af83fd2a3cab22b42aaf5791322fd15d8bf61e1368a3218f062440(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b059371ee26bc7970cedd121dc51df7afd035156cd20483c68eb00fe2aa150e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09a2f952ce4f933a42625bdd924cb7fdae05cacc6ed938f4a7a0c971ae8eb42f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__959edfbe54a57bf7469c7f7e2f7517803256234378ef4773b025f38fa68e4420(
    value: typing.Optional[typing.List[RosProInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcb197886757f3a8d7f04ff2cae020e1a170b76e81448c92e4d84deef1cc1ee8(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecad0fcb5a638f7a89dba11c887c8b939e3386c25d1e9da5d2f582b2def8a158(
    *,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    base_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    burst_bandwidth_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    function_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    normal_qps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_partner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosProInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
