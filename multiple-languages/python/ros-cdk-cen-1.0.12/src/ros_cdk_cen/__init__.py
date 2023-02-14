'''
## Aliyun ROS CEN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CEN from '@alicloud/ros-cdk-cen';
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


class CenBandwidthLimit(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenBandwidthLimit",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenBandwidthLimit``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CenBandwidthLimitProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenBandwidthLimit``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8337bdc8e41d25637e9d2bc0351aa1f20144af3d7e7e8d4562bb3a438bd02ddf)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.CenBandwidthLimitProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth_limit": "bandwidthLimit",
        "cen_id": "cenId",
        "local_region_id": "localRegionId",
        "opposite_region_id": "oppositeRegionId",
    },
)
class CenBandwidthLimitProps:
    def __init__(
        self,
        *,
        bandwidth_limit: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        local_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        opposite_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthLimit``.

        :param bandwidth_limit: Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        :param cen_id: Property cenId: The ID of the CEN instance.
        :param local_region_id: Property localRegionId: The ID of the local region.
        :param opposite_region_id: Property oppositeRegionId: The ID of the other interconnected region.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db1023289557f82c94ce1a97e1e68d9225b1021a66bcb90926b758aadc217413)
            check_type(argname="argument bandwidth_limit", value=bandwidth_limit, expected_type=type_hints["bandwidth_limit"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument local_region_id", value=local_region_id, expected_type=type_hints["local_region_id"])
            check_type(argname="argument opposite_region_id", value=opposite_region_id, expected_type=type_hints["opposite_region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth_limit": bandwidth_limit,
            "cen_id": cen_id,
            "local_region_id": local_region_id,
            "opposite_region_id": opposite_region_id,
        }

    @builtins.property
    def bandwidth_limit(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bandwidthLimit: The bandwidth configured for the interconnected regions communication.

        Minimal value: 1
        '''
        result = self._values.get("bandwidth_limit")
        assert result is not None, "Required property 'bandwidth_limit' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def local_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property localRegionId: The ID of the local region.'''
        result = self._values.get("local_region_id")
        assert result is not None, "Required property 'local_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def opposite_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property oppositeRegionId: The ID of the other interconnected region.'''
        result = self._values.get("opposite_region_id")
        assert result is not None, "Required property 'opposite_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenBandwidthLimitProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CenBandwidthPackage(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenBandwidthPackage",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenBandwidthPackage``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CenBandwidthPackageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenBandwidthPackage``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5beff2af37945582c617bd2a89d7f4b2993695d1d14c6942deab82114fbc2d54)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackageId")
    def attr_cen_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CenBandwidthPackageId: The ID of the bandwidth package.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenBandwidthPackageId"))


class CenBandwidthPackageAssociation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenBandwidthPackageAssociation",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenBandwidthPackageAssociation``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CenBandwidthPackageAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b96bb58fff7b53f04d5b76962ea9199a406f14132522fc930aef4da125884202)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.CenBandwidthPackageAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_bandwidth_package_id": "cenBandwidthPackageId",
        "cen_id": "cenId",
    },
)
class CenBandwidthPackageAssociationProps:
    def __init__(
        self,
        *,
        cen_bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        :param cen_bandwidth_package_id: Property cenBandwidthPackageId: The ID of the bandwidth package.
        :param cen_id: Property cenId: The ID of the CEN instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b57daf56bf1d08d36ce5538d9168ee48f59887787187f53c96e17b3126b516ea)
            check_type(argname="argument cen_bandwidth_package_id", value=cen_bandwidth_package_id, expected_type=type_hints["cen_bandwidth_package_id"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_bandwidth_package_id": cen_bandwidth_package_id,
            "cen_id": cen_id,
        }

    @builtins.property
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenBandwidthPackageId: The ID of the bandwidth package.'''
        result = self._values.get("cen_bandwidth_package_id")
        assert result is not None, "Required property 'cen_bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenBandwidthPackageAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.CenBandwidthPackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "geographic_region_a_id": "geographicRegionAId",
        "geographic_region_b_id": "geographicRegionBId",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "auto_renew_duration": "autoRenewDuration",
        "bandwidth_package_charge_type": "bandwidthPackageChargeType",
        "description": "description",
        "name": "name",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
    },
)
class CenBandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        geographic_region_a_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        geographic_region_b_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_package_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthPackage``.

        :param bandwidth: Property bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
        :param geographic_region_a_id: Property geographicRegionAId: The other area A to connect. Valid value: China | North-America | Asia-Pacific | Europe | Australia
        :param geographic_region_b_id: Property geographicRegionBId: The other area B to connect. Valid value: China | North-America | Asia-Pacific | Europe | Australia
        :param auto_pay: Property autoPay: Whether to automatically pay the bill. Valid value: true (default) false
        :param auto_renew: Property autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        :param auto_renew_duration: Property autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
        :param bandwidth_package_charge_type: Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
        :param description: Property description: The description of the bandwidth package. The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        :param name: Property name: The name of the bandwidth package. The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        :param period: Property period: The purchase period. The default value is 1.
        :param pricing_cycle: Property pricingCycle: The pricing cycle.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a852db736db051ed2fd481d5b22707baa20cd89666b68c59d5fee4ab3611843e)
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument geographic_region_a_id", value=geographic_region_a_id, expected_type=type_hints["geographic_region_a_id"])
            check_type(argname="argument geographic_region_b_id", value=geographic_region_b_id, expected_type=type_hints["geographic_region_b_id"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_duration", value=auto_renew_duration, expected_type=type_hints["auto_renew_duration"])
            check_type(argname="argument bandwidth_package_charge_type", value=bandwidth_package_charge_type, expected_type=type_hints["bandwidth_package_charge_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth": bandwidth,
            "geographic_region_a_id": geographic_region_a_id,
            "geographic_region_b_id": geographic_region_b_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if bandwidth_package_charge_type is not None:
            self._values["bandwidth_package_charge_type"] = bandwidth_package_charge_type
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bandwidth: The bandwidth in Mbps of the bandwidth package.

        The bandwidth cannot be less than 2 Mbps.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def geographic_region_a_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property geographicRegionAId: The other area A to connect.

        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        result = self._values.get("geographic_region_a_id")
        assert result is not None, "Required property 'geographic_region_a_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def geographic_region_b_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property geographicRegionBId: The other area B to connect.

        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        result = self._values.get("geographic_region_b_id")
        assert result is not None, "Required property 'geographic_region_b_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Whether to automatically pay the bill.

        Valid value:
        true (default)
        false
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Indicates whether automatic renewal is enabled.

        Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewDuration: Duration of each automatic renewals.

        It takes effect when AutoRenew is true.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_package_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidthPackageChargeType: The billing method.

        Valid value: PREPAY, POSTPAY (Default)
        '''
        result = self._values.get("bandwidth_package_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the bandwidth package.

        The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the bandwidth package.

        The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The purchase period.

        The default value is 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pricingCycle: The pricing cycle.'''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CenInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenInstance",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["CenInstanceProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20f4e9d1cb5f9a83bca352af0dc099f302685649577c9b3427ef149c26a43395)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CenId: The ID of the request.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))


class CenInstanceAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenInstanceAttachment",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenInstanceAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CenInstanceAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenInstanceAttachment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ccb67a3a96ee10afa08d4e3a2666e8d051a9e5ce46037bdd89224aae4a816db)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.CenInstanceAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "child_instance_id": "childInstanceId",
        "child_instance_region_id": "childInstanceRegionId",
        "child_instance_type": "childInstanceType",
        "child_instance_owner_id": "childInstanceOwnerId",
    },
)
class CenInstanceAttachmentProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenInstanceAttachment``.

        :param cen_id: Property cenId: The ID of the CEN instance.
        :param child_instance_id: Property childInstanceId: The ID of the network to attach.
        :param child_instance_region_id: Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        :param child_instance_type: Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        :param child_instance_owner_id: Property childInstanceOwnerId: The account ID to which the network belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8009717a71cdbcb248871f4c9230a7d34828f748387821c66eecb2efc494ef02)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument child_instance_id", value=child_instance_id, expected_type=type_hints["child_instance_id"])
            check_type(argname="argument child_instance_region_id", value=child_instance_region_id, expected_type=type_hints["child_instance_region_id"])
            check_type(argname="argument child_instance_type", value=child_instance_type, expected_type=type_hints["child_instance_type"])
            check_type(argname="argument child_instance_owner_id", value=child_instance_owner_id, expected_type=type_hints["child_instance_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_type": child_instance_type,
        }
        if child_instance_owner_id is not None:
            self._values["child_instance_owner_id"] = child_instance_owner_id

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property childInstanceId: The ID of the network to attach.'''
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property childInstanceRegionId: The ID of the region where the network is located.

        The ID of the region where the network is located.
        '''
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property childInstanceType: The type of the network to attach.

        Support VPC, VBR or CCN.
        '''
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property childInstanceOwnerId: The account ID to which the network belongs.'''
        result = self._values.get("child_instance_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenInstanceAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.CenInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "name": "name",
        "protection_level": "protectionLevel",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class CenInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protection_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosCenInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenInstance``.

        :param description: Property description: The description of the instance. The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        :param name: Property name: The name of the instance. The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        :param protection_level: Property protectionLevel: The level of CIDR block overlapping. Set the value to REDUCED. REDUCED indicates that the CIDR blocks can overlap with each other but must not be the same.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74c3b2a2a141f4c32075a0d8de9c2066a329bccf4054bd56f84615ce2c798371)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument protection_level", value=protection_level, expected_type=type_hints["protection_level"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if protection_level is not None:
            self._values["protection_level"] = protection_level
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the instance.

        The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the instance.

        The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property protectionLevel: The level of CIDR block overlapping.

        Set the value to REDUCED. REDUCED indicates that the
        CIDR blocks can overlap with each other but must not be the same.
        '''
        result = self._values.get("protection_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosCenInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosCenInstance.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CenRouteMap(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenRouteMap",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenRouteMap``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CenRouteMapProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenRouteMap``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b56fd51145278532add9fbc2fa337a7d5a486b0d762cb41c4b581bff304d300)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRouteMapId")
    def attr_route_map_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouteMapId: The ID of the route map.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteMapId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.CenRouteMapProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "cen_region_id": "cenRegionId",
        "map_result": "mapResult",
        "priority": "priority",
        "transmit_direction": "transmitDirection",
        "as_path_match_mode": "asPathMatchMode",
        "cidr_match_mode": "cidrMatchMode",
        "community_match_mode": "communityMatchMode",
        "community_operate_mode": "communityOperateMode",
        "description": "description",
        "destination_child_instance_types": "destinationChildInstanceTypes",
        "destination_cidr_blocks": "destinationCidrBlocks",
        "destination_instance_ids": "destinationInstanceIds",
        "destination_instance_ids_reverse_match": "destinationInstanceIdsReverseMatch",
        "destination_route_table_ids": "destinationRouteTableIds",
        "match_asns": "matchAsns",
        "match_community_set": "matchCommunitySet",
        "next_priority": "nextPriority",
        "operate_community_set": "operateCommunitySet",
        "preference": "preference",
        "prepend_as_path": "prependAsPath",
        "route_types": "routeTypes",
        "source_child_instance_types": "sourceChildInstanceTypes",
        "source_instance_ids": "sourceInstanceIds",
        "source_instance_ids_reverse_match": "sourceInstanceIdsReverseMatch",
        "source_region_ids": "sourceRegionIds",
        "source_route_table_ids": "sourceRouteTableIds",
    },
)
class CenRouteMapProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        map_result: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        transmit_direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        as_path_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cidr_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        community_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        community_operate_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_child_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        destination_cidr_blocks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        destination_instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        destination_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        match_asns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        match_community_set: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        next_priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        operate_community_set: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        preference: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prepend_as_path: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        route_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        source_child_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        source_instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        source_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_region_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        source_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenRouteMap``.

        :param cen_id: Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        :param cen_region_id: Property cenRegionId: The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs.
        :param map_result: Property mapResult: The route map behavior after all conditions are matched. Valid values: Permit: allows the routes that are matched. Deny: rejects the routes that are matched.
        :param priority: Property priority: The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority. Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
        :param transmit_direction: Property transmitDirection: The direction in which the route map is applied. Valid values: RegionIn: Routes are advertised to CEN gateways. For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region. RegionOut: Routes are advertised from CEN gateways. For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
        :param as_path_match_mode: Property asPathMatchMode: Match statements are used to match the AS paths. Valid values: Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful. Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
        :param cidr_match_mode: Property cidrMatchMode: Match statements are used to match the prefixes. Valid values: Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful. For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route. Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful. For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
        :param community_match_mode: Property communityMatchMode: Match statements are used to match the Communities. Valid values: Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful. Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
        :param community_operate_mode: Property communityOperateMode: Action statements are used to operate the Communities. Valid values: Additive: adds. Replace: replaces.
        :param description: Property description: The description of the route map.
        :param destination_child_instance_types: Property destinationChildInstanceTypes: Match statements are used to match the destination instance types. Valid values: VPC: VPCs. VBR: VBRs. CCN: CCN instances in mainland China. Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        :param destination_cidr_blocks: Property destinationCidrBlocks: Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks.
        :param destination_instance_ids: Property destinationInstanceIds: Match statements are used to match the destination instance IDs. You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs. Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        :param destination_instance_ids_reverse_match: Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. Valid values: false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful. true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
        :param destination_route_table_ids: Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs. Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
        :param match_asns: Property matchAsns: Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised. Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
        :param match_community_set: Property matchCommunitySet: Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported. Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        :param next_priority: Property nextPriority: The priority of the next associated route map. Valid values: 1 to 100. If the priority is not set, no next route map is associated with the current route map. If the priority is set to 1, the next route map is associated with the current route map. If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map. Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
        :param operate_community_set: Property operateCommunitySet: Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported. Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        :param preference: Property preference: Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
        :param prepend_as_path: Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes. For route maps that are applied in different directions, the requirements for AS paths to be attached are different: For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied. For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
        :param route_types: Property routeTypes: Match statements are used to match the route types. Valid values: System: system routes that are generated by the system. Custom: custom routes that are created by users. BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP. You can enter multiple types.
        :param source_child_instance_types: Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. Valid values: VPC: VPCs. VBR: VBRs. CCN: CCN instances in mainland China.
        :param source_instance_ids: Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes. You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
        :param source_instance_ids_reverse_match: Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. Valid values: false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful. true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
        :param source_region_ids: Property sourceRegionIds: Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs.
        :param source_route_table_ids: Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0465ed403a11d04f58a8ef466e6bf4fe97bf8be19be4ab53f2267d349ce209a)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument cen_region_id", value=cen_region_id, expected_type=type_hints["cen_region_id"])
            check_type(argname="argument map_result", value=map_result, expected_type=type_hints["map_result"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument transmit_direction", value=transmit_direction, expected_type=type_hints["transmit_direction"])
            check_type(argname="argument as_path_match_mode", value=as_path_match_mode, expected_type=type_hints["as_path_match_mode"])
            check_type(argname="argument cidr_match_mode", value=cidr_match_mode, expected_type=type_hints["cidr_match_mode"])
            check_type(argname="argument community_match_mode", value=community_match_mode, expected_type=type_hints["community_match_mode"])
            check_type(argname="argument community_operate_mode", value=community_operate_mode, expected_type=type_hints["community_operate_mode"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination_child_instance_types", value=destination_child_instance_types, expected_type=type_hints["destination_child_instance_types"])
            check_type(argname="argument destination_cidr_blocks", value=destination_cidr_blocks, expected_type=type_hints["destination_cidr_blocks"])
            check_type(argname="argument destination_instance_ids", value=destination_instance_ids, expected_type=type_hints["destination_instance_ids"])
            check_type(argname="argument destination_instance_ids_reverse_match", value=destination_instance_ids_reverse_match, expected_type=type_hints["destination_instance_ids_reverse_match"])
            check_type(argname="argument destination_route_table_ids", value=destination_route_table_ids, expected_type=type_hints["destination_route_table_ids"])
            check_type(argname="argument match_asns", value=match_asns, expected_type=type_hints["match_asns"])
            check_type(argname="argument match_community_set", value=match_community_set, expected_type=type_hints["match_community_set"])
            check_type(argname="argument next_priority", value=next_priority, expected_type=type_hints["next_priority"])
            check_type(argname="argument operate_community_set", value=operate_community_set, expected_type=type_hints["operate_community_set"])
            check_type(argname="argument preference", value=preference, expected_type=type_hints["preference"])
            check_type(argname="argument prepend_as_path", value=prepend_as_path, expected_type=type_hints["prepend_as_path"])
            check_type(argname="argument route_types", value=route_types, expected_type=type_hints["route_types"])
            check_type(argname="argument source_child_instance_types", value=source_child_instance_types, expected_type=type_hints["source_child_instance_types"])
            check_type(argname="argument source_instance_ids", value=source_instance_ids, expected_type=type_hints["source_instance_ids"])
            check_type(argname="argument source_instance_ids_reverse_match", value=source_instance_ids_reverse_match, expected_type=type_hints["source_instance_ids_reverse_match"])
            check_type(argname="argument source_region_ids", value=source_region_ids, expected_type=type_hints["source_region_ids"])
            check_type(argname="argument source_route_table_ids", value=source_route_table_ids, expected_type=type_hints["source_route_table_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "cen_region_id": cen_region_id,
            "map_result": map_result,
            "priority": priority,
            "transmit_direction": transmit_direction,
        }
        if as_path_match_mode is not None:
            self._values["as_path_match_mode"] = as_path_match_mode
        if cidr_match_mode is not None:
            self._values["cidr_match_mode"] = cidr_match_mode
        if community_match_mode is not None:
            self._values["community_match_mode"] = community_match_mode
        if community_operate_mode is not None:
            self._values["community_operate_mode"] = community_operate_mode
        if description is not None:
            self._values["description"] = description
        if destination_child_instance_types is not None:
            self._values["destination_child_instance_types"] = destination_child_instance_types
        if destination_cidr_blocks is not None:
            self._values["destination_cidr_blocks"] = destination_cidr_blocks
        if destination_instance_ids is not None:
            self._values["destination_instance_ids"] = destination_instance_ids
        if destination_instance_ids_reverse_match is not None:
            self._values["destination_instance_ids_reverse_match"] = destination_instance_ids_reverse_match
        if destination_route_table_ids is not None:
            self._values["destination_route_table_ids"] = destination_route_table_ids
        if match_asns is not None:
            self._values["match_asns"] = match_asns
        if match_community_set is not None:
            self._values["match_community_set"] = match_community_set
        if next_priority is not None:
            self._values["next_priority"] = next_priority
        if operate_community_set is not None:
            self._values["operate_community_set"] = operate_community_set
        if preference is not None:
            self._values["preference"] = preference
        if prepend_as_path is not None:
            self._values["prepend_as_path"] = prepend_as_path
        if route_types is not None:
            self._values["route_types"] = route_types
        if source_child_instance_types is not None:
            self._values["source_child_instance_types"] = source_child_instance_types
        if source_instance_ids is not None:
            self._values["source_instance_ids"] = source_instance_ids
        if source_instance_ids_reverse_match is not None:
            self._values["source_instance_ids_reverse_match"] = source_instance_ids_reverse_match
        if source_region_ids is not None:
            self._values["source_region_ids"] = source_region_ids
        if source_route_table_ids is not None:
            self._values["source_route_table_ids"] = source_route_table_ids

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenRegionId: The region where the CEN instance is deployed.

        You can call the DescribeRegions operation to query region IDs.
        '''
        result = self._values.get("cen_region_id")
        assert result is not None, "Required property 'cen_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def map_result(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property mapResult: The route map behavior after all conditions are matched.

        Valid values:
        Permit: allows the routes that are matched.
        Deny: rejects the routes that are matched.
        '''
        result = self._values.get("map_result")
        assert result is not None, "Required property 'map_result' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property priority: The priority of the route map.

        Valid values: 1 to 100 . A lower value indicates a higher priority.
        Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transmit_direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transmitDirection: The direction in which the route map is applied.

        Valid values:
        RegionIn: Routes are advertised to CEN gateways.
        For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
        RegionOut: Routes are advertised from CEN gateways.
        For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
        '''
        result = self._values.get("transmit_direction")
        assert result is not None, "Required property 'transmit_direction' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def as_path_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property asPathMatchMode: Match statements are used to match the AS paths.

        Valid values:
        Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
        Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
        '''
        result = self._values.get("as_path_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cidr_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cidrMatchMode: Match statements are used to match the prefixes.

        Valid values:
        Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
        Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
        '''
        result = self._values.get("cidr_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def community_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property communityMatchMode: Match statements are used to match the Communities.

        Valid values:
        Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
        Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
        '''
        result = self._values.get("community_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def community_operate_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property communityOperateMode: Action statements are used to operate the Communities.

        Valid values:
        Additive: adds.
        Replace: replaces.
        '''
        result = self._values.get("community_operate_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the route map.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property destinationChildInstanceTypes: Match statements are used to match the destination instance types.

        Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        result = self._values.get("destination_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def destination_cidr_blocks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property destinationCidrBlocks: Match statements are used to match the routing prefixes.

        The CIDR format is used. You can enter at most 32 CIDR blocks.
        '''
        result = self._values.get("destination_cidr_blocks")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property destinationInstanceIds: Match statements are used to match the destination instance IDs.

        You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
        Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        result = self._values.get("destination_instance_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements.

        Valid values:
        false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
        true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
        '''
        result = self._values.get("destination_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables.

        You can enter at most 32 route table IDs.
        Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
        '''
        result = self._values.get("destination_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def match_asns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property matchAsns: Match statements are used to match AS paths of the routes.

        An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
        Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
        '''
        result = self._values.get("match_asns")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def match_community_set(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property matchCommunitySet: Match statements are used to match the Communities.

        Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        result = self._values.get("match_community_set")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def next_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nextPriority: The priority of the next associated route map.

        Valid values: 1 to 100.
        If the priority is not set, no next route map is associated with the current route map.
        If the priority is set to 1, the next route map is associated with the current route map.
        If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
        Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
        '''
        result = self._values.get("next_priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def operate_community_set(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property operateCommunitySet: Action statements are used to operate the Communities.

        Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        result = self._values.get("operate_community_set")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def preference(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preference: Action statements are used to modify route priorities.

        Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
        '''
        result = self._values.get("preference")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prepend_as_path(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.

        For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
        For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
        For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
        '''
        result = self._values.get("prepend_as_path")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def route_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property routeTypes: Match statements are used to match the route types.

        Valid values:
        System: system routes that are generated by the system.
        Custom: custom routes that are created by users.
        BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
        You can enter multiple types.
        '''
        result = self._values.get("route_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def source_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes.

        Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        '''
        result = self._values.get("source_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.

        You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
        '''
        result = self._values.get("source_instance_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements.

        Valid values:
        false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
        true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
        '''
        result = self._values.get("source_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_region_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property sourceRegionIds: Match statements are used to match source region IDs of the routes.

        You can enter at most 32 region IDs.
        '''
        result = self._values.get("source_region_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def source_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes.

        You can enter at most 32 route table IDs.
        '''
        result = self._values.get("source_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenRouteMapProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CenRouteService(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenRouteService",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenRouteService``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CenRouteServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenRouteService``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d07302f1f1dac5bfb5d3613d257fb4f18996debb103027fe4c71b0493114f7b1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Id: The ID of the cloud service.

        It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.CenRouteServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_region_id": "accessRegionId",
        "cen_id": "cenId",
        "host": "host",
        "host_region_id": "hostRegionId",
        "host_vpc_id": "hostVpcId",
        "conflict_ignore": "conflictIgnore",
        "description": "description",
    },
)
class CenRouteServiceProps:
    def __init__(
        self,
        *,
        access_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        conflict_ignore: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenRouteService``.

        :param access_region_id: Property accessRegionId: The region where the cloud service is deployed.
        :param cen_id: Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        :param host: Property host: The domain or IP address of the cloud service.
        :param host_region_id: Property hostRegionId: The region where the cloud service is deployed. You can call the DescribeRegions operation to query region IDs. Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        :param host_vpc_id: Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
        :param conflict_ignore: Property conflictIgnore: Whether to ignore conflict when creating. If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped. Default false.
        :param description: Property description: The description of the cloud service.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d9a6bb6a2b5b9ec87085d63f5c19517acc961553308b2c5ffa01e3a00bdcd34)
            check_type(argname="argument access_region_id", value=access_region_id, expected_type=type_hints["access_region_id"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
            check_type(argname="argument host_region_id", value=host_region_id, expected_type=type_hints["host_region_id"])
            check_type(argname="argument host_vpc_id", value=host_vpc_id, expected_type=type_hints["host_vpc_id"])
            check_type(argname="argument conflict_ignore", value=conflict_ignore, expected_type=type_hints["conflict_ignore"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_region_id": access_region_id,
            "cen_id": cen_id,
            "host": host,
            "host_region_id": host_region_id,
            "host_vpc_id": host_vpc_id,
        }
        if conflict_ignore is not None:
            self._values["conflict_ignore"] = conflict_ignore
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def access_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessRegionId: The region where the cloud service is deployed.'''
        result = self._values.get("access_region_id")
        assert result is not None, "Required property 'access_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property host: The domain or IP address of the cloud service.'''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property hostRegionId: The region where the cloud service is deployed.

        You can call the DescribeRegions operation to query region IDs.
        Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        '''
        result = self._values.get("host_region_id")
        assert result is not None, "Required property 'host_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.'''
        result = self._values.get("host_vpc_id")
        assert result is not None, "Required property 'host_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def conflict_ignore(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property conflictIgnore: Whether to ignore conflict when creating.

        If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
        Default false.
        '''
        result = self._values.get("conflict_ignore")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the cloud service.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenRouteServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CenVbrHealthCheck(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenVbrHealthCheck",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenVbrHealthCheck``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CenVbrHealthCheckProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenVbrHealthCheck``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17fbef1f60464293ebbb5a05b7d542ea54ba08664134e0d80bc6e597c130e6e0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CenId: The ID of the CEN instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.

        Default value: 2. Valid values: 2 to 3.  Unit: second.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckSourceIp")
    def attr_health_check_source_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.

        Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckSourceIp"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTargetIp")
    def attr_health_check_target_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check.

        The destination IP address is the IP address of the client-facing interface on the VBR instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckTargetIp"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.

        Default value: 8. Valid values: 3 to 8.  Unit: packet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrVbrInstanceId")
    def attr_vbr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VbrInstanceId: The ID of the VBR instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVbrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVbrInstanceOwnerId")
    def attr_vbr_instance_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVbrInstanceOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVbrInstanceRegionId")
    def attr_vbr_instance_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed.

        You can call the DescribeRegionsoperation to query region IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVbrInstanceRegionId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.CenVbrHealthCheckProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "health_check_target_ip": "healthCheckTargetIp",
        "vbr_instance_id": "vbrInstanceId",
        "vbr_instance_region_id": "vbrInstanceRegionId",
        "health_check_interval": "healthCheckInterval",
        "health_check_source_ip": "healthCheckSourceIp",
        "healthy_threshold": "healthyThreshold",
        "vbr_instance_owner_id": "vbrInstanceOwnerId",
    },
)
class CenVbrHealthCheckProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        health_check_target_ip: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vbr_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vbr_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_source_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vbr_instance_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenVbrHealthCheck``.

        :param cen_id: Property cenId: The ID of the CEN instance.
        :param health_check_target_ip: Property healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
        :param vbr_instance_id: Property vbrInstanceId: The ID of the VBR instance.
        :param vbr_instance_region_id: Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
        :param health_check_interval: Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check. Default value: 2. Valid values: 2 to 3. Unit: second.
        :param health_check_source_ip: Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check. Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended). Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        :param healthy_threshold: Property healthyThreshold: Specifies the number of probe packets to be sent during the health check. Default value: 8. Valid values: 3 to 8. Unit: packet.
        :param vbr_instance_owner_id: Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef354aad2aa1fb15aa88dbeb9a98e4006526392c758da801d817a79517cbbe22)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument health_check_target_ip", value=health_check_target_ip, expected_type=type_hints["health_check_target_ip"])
            check_type(argname="argument vbr_instance_id", value=vbr_instance_id, expected_type=type_hints["vbr_instance_id"])
            check_type(argname="argument vbr_instance_region_id", value=vbr_instance_region_id, expected_type=type_hints["vbr_instance_region_id"])
            check_type(argname="argument health_check_interval", value=health_check_interval, expected_type=type_hints["health_check_interval"])
            check_type(argname="argument health_check_source_ip", value=health_check_source_ip, expected_type=type_hints["health_check_source_ip"])
            check_type(argname="argument healthy_threshold", value=healthy_threshold, expected_type=type_hints["healthy_threshold"])
            check_type(argname="argument vbr_instance_owner_id", value=vbr_instance_owner_id, expected_type=type_hints["vbr_instance_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "health_check_target_ip": health_check_target_ip,
            "vbr_instance_id": vbr_instance_id,
            "vbr_instance_region_id": vbr_instance_region_id,
        }
        if health_check_interval is not None:
            self._values["health_check_interval"] = health_check_interval
        if health_check_source_ip is not None:
            self._values["health_check_source_ip"] = health_check_source_ip
        if healthy_threshold is not None:
            self._values["healthy_threshold"] = healthy_threshold
        if vbr_instance_owner_id is not None:
            self._values["vbr_instance_owner_id"] = vbr_instance_owner_id

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def health_check_target_ip(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property healthCheckTargetIp: Specifies the destination IP address of the health check.

        The destination IP address is the IP address of the client-facing interface on the VBR instance.
        '''
        result = self._values.get("health_check_target_ip")
        assert result is not None, "Required property 'health_check_target_ip' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vbr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vbrInstanceId: The ID of the VBR instance.'''
        result = self._values.get("vbr_instance_id")
        assert result is not None, "Required property 'vbr_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vbr_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed.

        You can call the DescribeRegionsoperation to query region IDs.
        '''
        result = self._values.get("vbr_instance_region_id")
        assert result is not None, "Required property 'vbr_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.

        Default value: 2. Valid values: 2 to 3.  Unit: second.
        '''
        result = self._values.get("health_check_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.

        Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        '''
        result = self._values.get("health_check_source_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.

        Default value: 8. Valid values: 3 to 8.  Unit: packet.
        '''
        result = self._values.get("healthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vbr_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.'''
        result = self._values.get("vbr_instance_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenVbrHealthCheckProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ChildInstanceRouteEntryToAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.ChildInstanceRouteEntryToAttachment",
):
    '''A ROS resource type:  ``ALIYUN::CEN::ChildInstanceRouteEntryToAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ChildInstanceRouteEntryToAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::ChildInstanceRouteEntryToAttachment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a4fff216f80266f7168e4abc033ba217b8826c7df2d76f35053cfe082272c2f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CenId: The ID of the CEN instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationCidrBlock")
    def attr_destination_cidr_block(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DestinationCidrBlock: The destination CIDR block of the route.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDestinationCidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouteTableId: The ID of the route table configured on the network instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentId: The ID of the network instance connection.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.ChildInstanceRouteEntryToAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "destination_cidr_block": "destinationCidrBlock",
        "route_table_id": "routeTableId",
        "transit_router_attachment_id": "transitRouterAttachmentId",
    },
)
class ChildInstanceRouteEntryToAttachmentProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::ChildInstanceRouteEntryToAttachment``.

        :param cen_id: Property cenId: The ID of the CEN instance.
        :param destination_cidr_block: Property destinationCidrBlock: The destination CIDR block of the route.
        :param route_table_id: Property routeTableId: The ID of the route table configured on the network instance.
        :param transit_router_attachment_id: Property transitRouterAttachmentId: The ID of the network instance connection.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9113d65ba6f5ceb9cd8928770e7ae2ca96116c653e3df392f18a24e9cbdda8f2)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument destination_cidr_block", value=destination_cidr_block, expected_type=type_hints["destination_cidr_block"])
            check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
            check_type(argname="argument transit_router_attachment_id", value=transit_router_attachment_id, expected_type=type_hints["transit_router_attachment_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "destination_cidr_block": destination_cidr_block,
            "route_table_id": route_table_id,
            "transit_router_attachment_id": transit_router_attachment_id,
        }

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destinationCidrBlock: The destination CIDR block of the route.'''
        result = self._values.get("destination_cidr_block")
        assert result is not None, "Required property 'destination_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property routeTableId: The ID of the route table configured on the network instance.'''
        result = self._values.get("route_table_id")
        assert result is not None, "Required property 'route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterAttachmentId: The ID of the network instance connection.'''
        result = self._values.get("transit_router_attachment_id")
        assert result is not None, "Required property 'transit_router_attachment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ChildInstanceRouteEntryToAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenBandwidthLimit(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthLimit",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenBandwidthLimit``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenBandwidthLimitProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenBandwidthLimit``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__994ea21473966a37c3eb593b86ee8dc5555a50bc6e80523e34b0c1b00f4baa8e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9bea81a8eaf39b58bb572f5223934b13d07a98b7a854758e4f97ca731f6184f8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bandwidthLimit")
    def bandwidth_limit(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bandwidthLimit"))

    @bandwidth_limit.setter
    def bandwidth_limit(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18181212d6be8acda51a1407a8508705ffcd96173cfd4642afe22a108bf99641)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthLimit", value)

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c9f3a6599aba12e4a9a6756c7e63ece161ec3f79353f2805e61518271d73a5f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51091d6f4d9c7d29446628825a7014ff5578520c6f97af0bcf8987982f1df611)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="localRegionId")
    def local_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: localRegionId: The ID of the local region.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "localRegionId"))

    @local_region_id.setter
    def local_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98b70d52d9f1a5d2089e4c7a9e548b8ff8bb3f11c075494fa2b8251e7fd6c92f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="oppositeRegionId")
    def opposite_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: oppositeRegionId: The ID of the other interconnected region.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "oppositeRegionId"))

    @opposite_region_id.setter
    def opposite_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f6dcf29887701ea51382350d168e0a8ab9388a4496e9600c9848eb4f6981238)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "oppositeRegionId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthLimitProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth_limit": "bandwidthLimit",
        "cen_id": "cenId",
        "local_region_id": "localRegionId",
        "opposite_region_id": "oppositeRegionId",
    },
)
class RosCenBandwidthLimitProps:
    def __init__(
        self,
        *,
        bandwidth_limit: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        local_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        opposite_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthLimit``.

        :param bandwidth_limit: 
        :param cen_id: 
        :param local_region_id: 
        :param opposite_region_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3f1fa4604d011161d71f264b0c8a83c89466efb8f16b0dab5f60227759f9361)
            check_type(argname="argument bandwidth_limit", value=bandwidth_limit, expected_type=type_hints["bandwidth_limit"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument local_region_id", value=local_region_id, expected_type=type_hints["local_region_id"])
            check_type(argname="argument opposite_region_id", value=opposite_region_id, expected_type=type_hints["opposite_region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth_limit": bandwidth_limit,
            "cen_id": cen_id,
            "local_region_id": local_region_id,
            "opposite_region_id": opposite_region_id,
        }

    @builtins.property
    def bandwidth_limit(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        '''
        result = self._values.get("bandwidth_limit")
        assert result is not None, "Required property 'bandwidth_limit' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def local_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: localRegionId: The ID of the local region.
        '''
        result = self._values.get("local_region_id")
        assert result is not None, "Required property 'local_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def opposite_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: oppositeRegionId: The ID of the other interconnected region.
        '''
        result = self._values.get("opposite_region_id")
        assert result is not None, "Required property 'opposite_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenBandwidthLimitProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenBandwidthPackage(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthPackage",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenBandwidthPackage``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenBandwidthPackageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenBandwidthPackage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56d44d74b6c50a89527bfde13479de7b60420d81e81bd38dc559cceea6bb05b6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__55fff0c9d91bf29db597a5f122162c36bc0f62ab7a7eedf0cd2574a67b369a5e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackageId")
    def attr_cen_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenBandwidthPackageId: The ID of the bandwidth package.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenBandwidthPackageId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d4a631fadc261a4f98b28ebb437edf6abe15483e3890846b010caab99e7dc28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aaa825c96caac8f5ff373101846d5a35b64b5fc7d167e40b774f4cef232d92a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="geographicRegionAId")
    def geographic_region_a_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        geographicRegionAId: The other area A to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "geographicRegionAId"))

    @geographic_region_a_id.setter
    def geographic_region_a_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3205c66e27ead0d01875059118fe14916e586cce2e2e5ef948dbd3ce5407770e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "geographicRegionAId", value)

    @builtins.property
    @jsii.member(jsii_name="geographicRegionBId")
    def geographic_region_b_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        geographicRegionBId: The other area B to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "geographicRegionBId"))

    @geographic_region_b_id.setter
    def geographic_region_b_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b74eb44d235e48207fe3136829f5b3ae4003d1b2cd4fd52d21b68e2e0a16f57b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "geographicRegionBId", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Whether to automatically pay the bill. Valid value:
        true (default)
        false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f891fa3aeaa51fe36025db140eb9b7e88256c1dc4e0d2b4316988da0b66890d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2fd5acc17f8da77b556848648b4fa7609109116c9db0941ff30d55e8e33577d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewDuration")
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewDuration"))

    @auto_renew_duration.setter
    def auto_renew_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__468a438ed3b749e6c7e078f41def166e6ca9f77783f2f231b98f0faa2eeafce7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewDuration", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidthPackageChargeType")
    def bandwidth_package_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidthPackageChargeType"))

    @bandwidth_package_charge_type.setter
    def bandwidth_package_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0ba0d77addd4a1d680dc57b65d3e612d1d485bb5a751dcd4389eca459e56147)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthPackageChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the bandwidth package.
        The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a9b0e5aceb5d02a471b2b2f02f378da0f4e8fce5570f705585b5b997becd21b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the bandwidth package.
        The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__281e3aac4ae87361604897bb1ad9f2400ad995fcc72e6661b75c90ccd63cf879)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The purchase period. The default value is 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f052511f5f1e42034b2905450737da5e5cf45a07fdd72bdba2ed56c3796cc2f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle: The pricing cycle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__859d88d9476f54cb3ebcebe7b4561f3fdb92dda330cf2686a21ca8373639ad7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pricingCycle", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c415451207617c1addea7595850c3986b9d537f6917a63d2bddfbf28cef21a14)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


class RosCenBandwidthPackageAssociation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociation",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenBandwidthPackageAssociation``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenBandwidthPackageAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ce048fbe4fe24ca550d46f62fc12f530b5af69d43cdee0c11f610cf2e1df6ee)
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
            type_hints = typing.get_type_hints(_typecheckingstub__721e9f864b8e7b1c7cbd5ed4a8b4a2bacf5fc6fcd70363298375355ce99a452c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenBandwidthPackageId")
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenBandwidthPackageId: The ID of the bandwidth package.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenBandwidthPackageId"))

    @cen_bandwidth_package_id.setter
    def cen_bandwidth_package_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bf7402dec1749688a1bf80240eed94861413ab3497c0939753778456f03881e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenBandwidthPackageId", value)

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9907248eb8d2b1fb7db1ae81766f917415f2fcfa888e9e60718d86c9014a93d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb8218f7bab7635fba9f557b263b5f7af42ed8f76966d57e60a442d0a01c5d73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_bandwidth_package_id": "cenBandwidthPackageId",
        "cen_id": "cenId",
    },
)
class RosCenBandwidthPackageAssociationProps:
    def __init__(
        self,
        *,
        cen_bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        :param cen_bandwidth_package_id: 
        :param cen_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecafc154daf4d06dac7661a44fd8bc8e0531196a2064c6071d6d01ececa8636b)
            check_type(argname="argument cen_bandwidth_package_id", value=cen_bandwidth_package_id, expected_type=type_hints["cen_bandwidth_package_id"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_bandwidth_package_id": cen_bandwidth_package_id,
            "cen_id": cen_id,
        }

    @builtins.property
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenBandwidthPackageId: The ID of the bandwidth package.
        '''
        result = self._values.get("cen_bandwidth_package_id")
        assert result is not None, "Required property 'cen_bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenBandwidthPackageAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthPackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "geographic_region_a_id": "geographicRegionAId",
        "geographic_region_b_id": "geographicRegionBId",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "auto_renew_duration": "autoRenewDuration",
        "bandwidth_package_charge_type": "bandwidthPackageChargeType",
        "description": "description",
        "name": "name",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
    },
)
class RosCenBandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        geographic_region_a_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        geographic_region_b_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_package_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthPackage``.

        :param bandwidth: 
        :param geographic_region_a_id: 
        :param geographic_region_b_id: 
        :param auto_pay: 
        :param auto_renew: 
        :param auto_renew_duration: 
        :param bandwidth_package_charge_type: 
        :param description: 
        :param name: 
        :param period: 
        :param pricing_cycle: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__366283df7d08968d711d31ca6f578495904fb1b2ac53d8f3dce6ef0a72900f37)
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument geographic_region_a_id", value=geographic_region_a_id, expected_type=type_hints["geographic_region_a_id"])
            check_type(argname="argument geographic_region_b_id", value=geographic_region_b_id, expected_type=type_hints["geographic_region_b_id"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_duration", value=auto_renew_duration, expected_type=type_hints["auto_renew_duration"])
            check_type(argname="argument bandwidth_package_charge_type", value=bandwidth_package_charge_type, expected_type=type_hints["bandwidth_package_charge_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth": bandwidth,
            "geographic_region_a_id": geographic_region_a_id,
            "geographic_region_b_id": geographic_region_b_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if bandwidth_package_charge_type is not None:
            self._values["bandwidth_package_charge_type"] = bandwidth_package_charge_type
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def geographic_region_a_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        geographicRegionAId: The other area A to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        result = self._values.get("geographic_region_a_id")
        assert result is not None, "Required property 'geographic_region_a_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def geographic_region_b_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        geographicRegionBId: The other area B to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        result = self._values.get("geographic_region_b_id")
        assert result is not None, "Required property 'geographic_region_b_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Whether to automatically pay the bill. Valid value:
        true (default)
        false
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_package_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
        '''
        result = self._values.get("bandwidth_package_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the bandwidth package.
        The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the bandwidth package.
        The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The purchase period. The default value is 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle: The pricing cycle.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenInstance",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__443e94315a6284f91946772f0344492d7db2f46efe4069e9d17ef2dc62f1c3aa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c70d5d7ed39aec842996d098e77f53e18dd5af71abee8fdf0bba031dc74a9543)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenId: The ID of the request.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b864c02b3188a5b3d8203b25d89f73ecede8f14acc6322afdc4754ce53835f90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the instance.
        The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b17d79b7c3c4870f3ca1aebb4e02125ebe15dbebdc358c2bf30987f2f48aa9ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the instance.
        The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ac48ad3ace86d2d57c73efa040400477639a9b0d16eb929f768f7508cbd73a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="protectionLevel")
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        protectionLevel: The level of CIDR block overlapping.
        Set the value to REDUCED. REDUCED indicates that the
        CIDR blocks can overlap with each other but must not be the same.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "protectionLevel"))

    @protection_level.setter
    def protection_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22bcdd73cd192f63d2d18c7126bb7e1da66fab735f49c4566bf52f4315b80536)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protectionLevel", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a99dd759a3737c0c1819ae9caf6c3fcec364bc45639b73301f9b483b074b2f33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosCenInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosCenInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosCenInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f890eb55553ad48aa21a6b7f1b41ad52c30dda98d5399d903ec2108fe35e8b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cen.RosCenInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__2873545d71db82734698cc65ad33ff7a23a8f5f67ebbdb38326e0594bc55e3d4)
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


class RosCenInstanceAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenInstanceAttachment",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenInstanceAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenInstanceAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenInstanceAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d4267a588da37a2c1cc6dbdd9a775794fdd8ffd802839e972c60a8ffef03a6d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__14c33e286582d4708cd6afe579cdcc39f95e92e977f35be0b287df55a1ef39fa)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e703517d1823abd9c5de51b3ae96e75bb589517607fb20461e744fa3c7296b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="childInstanceId")
    def child_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceId: The ID of the network to attach.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "childInstanceId"))

    @child_instance_id.setter
    def child_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b55454ca7afa4719a72cce2fb62ad7c8099d6a8b1b54e9de764456e978262deb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "childInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="childInstanceRegionId")
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "childInstanceRegionId"))

    @child_instance_region_id.setter
    def child_instance_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__974911fc2d6c5a8132c66697aa4b7c73f3e6cf6ff29461603ec2d4fdfeee31bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "childInstanceRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="childInstanceType")
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "childInstanceType"))

    @child_instance_type.setter
    def child_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__307d0f533545cd70acd690eb8abe00aa1c67ea0750cf4df0b177a5ccdae9383d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "childInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41ff2bb9c62a0f7425beca1cf62e832752e5972bb058e8b24c40fd2bfd226de9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="childInstanceOwnerId")
    def child_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: childInstanceOwnerId: The account ID to which the network belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "childInstanceOwnerId"))

    @child_instance_owner_id.setter
    def child_instance_owner_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c8078f9597aafbc6bc1549be697cd4fa90c1f49bc1caf9179d184243210dc8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "childInstanceOwnerId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosCenInstanceAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "child_instance_id": "childInstanceId",
        "child_instance_region_id": "childInstanceRegionId",
        "child_instance_type": "childInstanceType",
        "child_instance_owner_id": "childInstanceOwnerId",
    },
)
class RosCenInstanceAttachmentProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenInstanceAttachment``.

        :param cen_id: 
        :param child_instance_id: 
        :param child_instance_region_id: 
        :param child_instance_type: 
        :param child_instance_owner_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fefce7acb52125a9a90e8e84ba1b09a726dc0556bb9a8b6ce6859ee379c51b5b)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument child_instance_id", value=child_instance_id, expected_type=type_hints["child_instance_id"])
            check_type(argname="argument child_instance_region_id", value=child_instance_region_id, expected_type=type_hints["child_instance_region_id"])
            check_type(argname="argument child_instance_type", value=child_instance_type, expected_type=type_hints["child_instance_type"])
            check_type(argname="argument child_instance_owner_id", value=child_instance_owner_id, expected_type=type_hints["child_instance_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_type": child_instance_type,
        }
        if child_instance_owner_id is not None:
            self._values["child_instance_owner_id"] = child_instance_owner_id

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceId: The ID of the network to attach.
        '''
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        '''
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        '''
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: childInstanceOwnerId: The account ID to which the network belongs.
        '''
        result = self._values.get("child_instance_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenInstanceAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosCenInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "name": "name",
        "protection_level": "protectionLevel",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosCenInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protection_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosCenInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenInstance``.

        :param description: 
        :param name: 
        :param protection_level: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b272693c09563785f64160e35f2303b41e9d875ad62cc4d4843144f63f4def95)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument protection_level", value=protection_level, expected_type=type_hints["protection_level"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if protection_level is not None:
            self._values["protection_level"] = protection_level
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the instance.
        The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the instance.
        The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        protectionLevel: The level of CIDR block overlapping.
        Set the value to REDUCED. REDUCED indicates that the
        CIDR blocks can overlap with each other but must not be the same.
        '''
        result = self._values.get("protection_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosCenInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosCenInstance.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenRouteMap(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenRouteMap",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenRouteMap``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenRouteMapProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenRouteMap``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1540fac6263b888f749e9ef0f09055c37996721f8fa1501777dc3f499012af5d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__09f5a466b9adb6a7db99d5b9fbf88450e5732ceff527cdc8e7a222f2996ceb22)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteMapId")
    def attr_route_map_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteMapId: The ID of the route map.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteMapId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc0d3849033366a7f059ae7b72f67fb438b8e6d24a7fbaec4ca2c1567191ec83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="cenRegionId")
    def cen_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenRegionId: The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenRegionId"))

    @cen_region_id.setter
    def cen_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8d0fb211801db88a4c77774d95e9fd3115a95e1eb4efdbd2b67f49d2ab8aa51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4983e68794c3f42a1cfe6cae09ef693ac40a48137f73d34e8757bc52e976a16c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="mapResult")
    def map_result(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        mapResult: The route map behavior after all conditions are matched. Valid values:
        Permit: allows the routes that are matched.
        Deny: rejects the routes that are matched.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "mapResult"))

    @map_result.setter
    def map_result(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2583f68ba32a52a602e87acdef1f49f3107f6e71e7e86dcb88e8ddd908ac208)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mapResult", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        priority: The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority.
        Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25fe8425ef73986e01081f1fa17721e39f2155377c4a0f798e6e9292df4bbf33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="transmitDirection")
    def transmit_direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        transmitDirection: The direction in which the route map is applied. Valid values:
        RegionIn: Routes are advertised to CEN gateways.
        For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
        RegionOut: Routes are advertised from CEN gateways.
        For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transmitDirection"))

    @transmit_direction.setter
    def transmit_direction(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8600f4b3ea35b482e333ffc58c8df443036dbab03eb136e6fdfff124b6db08b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transmitDirection", value)

    @builtins.property
    @jsii.member(jsii_name="asPathMatchMode")
    def as_path_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        asPathMatchMode: Match statements are used to match the AS paths. Valid values:
        Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
        Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "asPathMatchMode"))

    @as_path_match_mode.setter
    def as_path_match_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c435c0a68889e67b8579d95936f1f77d667cbe0ab2236395cfbb03576906a96f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "asPathMatchMode", value)

    @builtins.property
    @jsii.member(jsii_name="cidrMatchMode")
    def cidr_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cidrMatchMode: Match statements are used to match the prefixes. Valid values:
        Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
        Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cidrMatchMode"))

    @cidr_match_mode.setter
    def cidr_match_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe5956ec948a7aee65b6112f8daf06012c9b4c6bf6abb5ca7ad189650ecc869e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cidrMatchMode", value)

    @builtins.property
    @jsii.member(jsii_name="communityMatchMode")
    def community_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        communityMatchMode: Match statements are used to match the Communities. Valid values:
        Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
        Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "communityMatchMode"))

    @community_match_mode.setter
    def community_match_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ade31074d452814bc6948d8a30cff3d0e14adc4c4dd1635abe88dd226d0ba612)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "communityMatchMode", value)

    @builtins.property
    @jsii.member(jsii_name="communityOperateMode")
    def community_operate_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        communityOperateMode: Action statements are used to operate the Communities. Valid values:
        Additive: adds.
        Replace: replaces.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "communityOperateMode"))

    @community_operate_mode.setter
    def community_operate_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8451f66bd13497f2c4825de78f8d8ed00a02493e95fb9961b3f480ab97201b29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "communityOperateMode", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the route map.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c82cbddc5e419657c0145d2123c7d9b2c957f3ff2bc583fca7465400c4ae3d78)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="destinationChildInstanceTypes")
    def destination_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        destinationChildInstanceTypes: Match statements are used to match the destination instance types. Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "destinationChildInstanceTypes"))

    @destination_child_instance_types.setter
    def destination_child_instance_types(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__205e0eb1d3fe0079f7bb886542e256ceab195ef1758957aa277594cc43cdfa1c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationChildInstanceTypes", value)

    @builtins.property
    @jsii.member(jsii_name="destinationCidrBlocks")
    def destination_cidr_blocks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: destinationCidrBlocks: Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "destinationCidrBlocks"))

    @destination_cidr_blocks.setter
    def destination_cidr_blocks(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1af2cee621f8d4b1259d9be886464ed7e717a3e2ff82fb6437c24609d5955eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationCidrBlocks", value)

    @builtins.property
    @jsii.member(jsii_name="destinationInstanceIds")
    def destination_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        destinationInstanceIds: Match statements are used to match the destination instance IDs.
        You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
        Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "destinationInstanceIds"))

    @destination_instance_ids.setter
    def destination_instance_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4973f4fb88135bf517c59451cd9f0ef4bd4dfd6620b09061701a7c886de772c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationInstanceIds", value)

    @builtins.property
    @jsii.member(jsii_name="destinationInstanceIdsReverseMatch")
    def destination_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. Valid values:
        false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
        true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destinationInstanceIdsReverseMatch"))

    @destination_instance_ids_reverse_match.setter
    def destination_instance_ids_reverse_match(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42cfea9a86d2933555523cdc8565f630d6da8e6ebaf0bd74064625a90e25efc4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationInstanceIdsReverseMatch", value)

    @builtins.property
    @jsii.member(jsii_name="destinationRouteTableIds")
    def destination_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs.
        Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "destinationRouteTableIds"))

    @destination_route_table_ids.setter
    def destination_route_table_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27bcb80477741ef995bc62710d33d40df513b424c04ccd3f8f3fa5dc1aaebb57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationRouteTableIds", value)

    @builtins.property
    @jsii.member(jsii_name="matchAsns")
    def match_asns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        matchAsns: Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
        Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "matchAsns"))

    @match_asns.setter
    def match_asns(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd716d7d3ba0f7b4fbf311be7c632181587bd7784fee9b9262b282d25c569b35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "matchAsns", value)

    @builtins.property
    @jsii.member(jsii_name="matchCommunitySet")
    def match_community_set(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        matchCommunitySet: Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "matchCommunitySet"))

    @match_community_set.setter
    def match_community_set(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a766b34948416322e605049f79d6f7b89d6542839912da76c3065a153c5741f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "matchCommunitySet", value)

    @builtins.property
    @jsii.member(jsii_name="nextPriority")
    def next_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nextPriority: The priority of the next associated route map. Valid values: 1 to 100.
        If the priority is not set, no next route map is associated with the current route map.
        If the priority is set to 1, the next route map is associated with the current route map.
        If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
        Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nextPriority"))

    @next_priority.setter
    def next_priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0999163d2c247f5c769511932e8c6b40fddba38c4a4acffd133da968dd74c46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nextPriority", value)

    @builtins.property
    @jsii.member(jsii_name="operateCommunitySet")
    def operate_community_set(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        operateCommunitySet: Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "operateCommunitySet"))

    @operate_community_set.setter
    def operate_community_set(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54b8e0476aca246388eb92abef5d57f207bc6fd91219d1b40573534d6bf34660)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "operateCommunitySet", value)

    @builtins.property
    @jsii.member(jsii_name="preference")
    def preference(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preference: Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preference"))

    @preference.setter
    def preference(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bc5de5501006dcec4d8249a3e947e2a65b86e4a556423aa23926803fc040b5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preference", value)

    @builtins.property
    @jsii.member(jsii_name="prependAsPath")
    def prepend_as_path(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
        For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
        For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
        For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "prependAsPath"))

    @prepend_as_path.setter
    def prepend_as_path(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0ab374da1f07086a66ab0973014721ba415a9d8c75aff7e9d65162e2dc04bed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prependAsPath", value)

    @builtins.property
    @jsii.member(jsii_name="routeTypes")
    def route_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        routeTypes: Match statements are used to match the route types. Valid values:
        System: system routes that are generated by the system.
        Custom: custom routes that are created by users.
        BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
        You can enter multiple types.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "routeTypes"))

    @route_types.setter
    def route_types(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9520695a26de47aa343941759192575285f32d89d3b4b28ee64e0927ee14bcc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeTypes", value)

    @builtins.property
    @jsii.member(jsii_name="sourceChildInstanceTypes")
    def source_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "sourceChildInstanceTypes"))

    @source_child_instance_types.setter
    def source_child_instance_types(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a37f0408e91d1fd3b0c2f8639852b35d9c51aa307e4c3de3411f25b80e3c5bdc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceChildInstanceTypes", value)

    @builtins.property
    @jsii.member(jsii_name="sourceInstanceIds")
    def source_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
        You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "sourceInstanceIds"))

    @source_instance_ids.setter
    def source_instance_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17b44be92952f505ba4c1d1e43a3709e3008f4ee44e31b45c9f34d2b768e14df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceInstanceIds", value)

    @builtins.property
    @jsii.member(jsii_name="sourceInstanceIdsReverseMatch")
    def source_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. Valid values:
        false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
        true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceInstanceIdsReverseMatch"))

    @source_instance_ids_reverse_match.setter
    def source_instance_ids_reverse_match(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d18611d8da014bfcde0a6ebb510666205d8511a96885da59b8c47362d3ee336)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceInstanceIdsReverseMatch", value)

    @builtins.property
    @jsii.member(jsii_name="sourceRegionIds")
    def source_region_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: sourceRegionIds: Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "sourceRegionIds"))

    @source_region_ids.setter
    def source_region_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a09e394066d64a68e9f064ace3b80844be3a9188c2c1a9b802d7c6faa4693b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceRegionIds", value)

    @builtins.property
    @jsii.member(jsii_name="sourceRouteTableIds")
    def source_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "sourceRouteTableIds"))

    @source_route_table_ids.setter
    def source_route_table_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d33c7bf2bb037edd95be511e62cdcf258e181dc620f651ac554c8aebf7f57768)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceRouteTableIds", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosCenRouteMapProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "cen_region_id": "cenRegionId",
        "map_result": "mapResult",
        "priority": "priority",
        "transmit_direction": "transmitDirection",
        "as_path_match_mode": "asPathMatchMode",
        "cidr_match_mode": "cidrMatchMode",
        "community_match_mode": "communityMatchMode",
        "community_operate_mode": "communityOperateMode",
        "description": "description",
        "destination_child_instance_types": "destinationChildInstanceTypes",
        "destination_cidr_blocks": "destinationCidrBlocks",
        "destination_instance_ids": "destinationInstanceIds",
        "destination_instance_ids_reverse_match": "destinationInstanceIdsReverseMatch",
        "destination_route_table_ids": "destinationRouteTableIds",
        "match_asns": "matchAsns",
        "match_community_set": "matchCommunitySet",
        "next_priority": "nextPriority",
        "operate_community_set": "operateCommunitySet",
        "preference": "preference",
        "prepend_as_path": "prependAsPath",
        "route_types": "routeTypes",
        "source_child_instance_types": "sourceChildInstanceTypes",
        "source_instance_ids": "sourceInstanceIds",
        "source_instance_ids_reverse_match": "sourceInstanceIdsReverseMatch",
        "source_region_ids": "sourceRegionIds",
        "source_route_table_ids": "sourceRouteTableIds",
    },
)
class RosCenRouteMapProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        map_result: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        transmit_direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        as_path_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cidr_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        community_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        community_operate_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_child_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        destination_cidr_blocks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        destination_instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        destination_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        match_asns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        match_community_set: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        next_priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        operate_community_set: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        preference: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prepend_as_path: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        route_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        source_child_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        source_instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        source_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_region_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        source_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenRouteMap``.

        :param cen_id: 
        :param cen_region_id: 
        :param map_result: 
        :param priority: 
        :param transmit_direction: 
        :param as_path_match_mode: 
        :param cidr_match_mode: 
        :param community_match_mode: 
        :param community_operate_mode: 
        :param description: 
        :param destination_child_instance_types: 
        :param destination_cidr_blocks: 
        :param destination_instance_ids: 
        :param destination_instance_ids_reverse_match: 
        :param destination_route_table_ids: 
        :param match_asns: 
        :param match_community_set: 
        :param next_priority: 
        :param operate_community_set: 
        :param preference: 
        :param prepend_as_path: 
        :param route_types: 
        :param source_child_instance_types: 
        :param source_instance_ids: 
        :param source_instance_ids_reverse_match: 
        :param source_region_ids: 
        :param source_route_table_ids: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffd579ce0205d56a0fa98a785f1c5a43c0b62630ff742500b028fa17cdccc3f6)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument cen_region_id", value=cen_region_id, expected_type=type_hints["cen_region_id"])
            check_type(argname="argument map_result", value=map_result, expected_type=type_hints["map_result"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument transmit_direction", value=transmit_direction, expected_type=type_hints["transmit_direction"])
            check_type(argname="argument as_path_match_mode", value=as_path_match_mode, expected_type=type_hints["as_path_match_mode"])
            check_type(argname="argument cidr_match_mode", value=cidr_match_mode, expected_type=type_hints["cidr_match_mode"])
            check_type(argname="argument community_match_mode", value=community_match_mode, expected_type=type_hints["community_match_mode"])
            check_type(argname="argument community_operate_mode", value=community_operate_mode, expected_type=type_hints["community_operate_mode"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination_child_instance_types", value=destination_child_instance_types, expected_type=type_hints["destination_child_instance_types"])
            check_type(argname="argument destination_cidr_blocks", value=destination_cidr_blocks, expected_type=type_hints["destination_cidr_blocks"])
            check_type(argname="argument destination_instance_ids", value=destination_instance_ids, expected_type=type_hints["destination_instance_ids"])
            check_type(argname="argument destination_instance_ids_reverse_match", value=destination_instance_ids_reverse_match, expected_type=type_hints["destination_instance_ids_reverse_match"])
            check_type(argname="argument destination_route_table_ids", value=destination_route_table_ids, expected_type=type_hints["destination_route_table_ids"])
            check_type(argname="argument match_asns", value=match_asns, expected_type=type_hints["match_asns"])
            check_type(argname="argument match_community_set", value=match_community_set, expected_type=type_hints["match_community_set"])
            check_type(argname="argument next_priority", value=next_priority, expected_type=type_hints["next_priority"])
            check_type(argname="argument operate_community_set", value=operate_community_set, expected_type=type_hints["operate_community_set"])
            check_type(argname="argument preference", value=preference, expected_type=type_hints["preference"])
            check_type(argname="argument prepend_as_path", value=prepend_as_path, expected_type=type_hints["prepend_as_path"])
            check_type(argname="argument route_types", value=route_types, expected_type=type_hints["route_types"])
            check_type(argname="argument source_child_instance_types", value=source_child_instance_types, expected_type=type_hints["source_child_instance_types"])
            check_type(argname="argument source_instance_ids", value=source_instance_ids, expected_type=type_hints["source_instance_ids"])
            check_type(argname="argument source_instance_ids_reverse_match", value=source_instance_ids_reverse_match, expected_type=type_hints["source_instance_ids_reverse_match"])
            check_type(argname="argument source_region_ids", value=source_region_ids, expected_type=type_hints["source_region_ids"])
            check_type(argname="argument source_route_table_ids", value=source_route_table_ids, expected_type=type_hints["source_route_table_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "cen_region_id": cen_region_id,
            "map_result": map_result,
            "priority": priority,
            "transmit_direction": transmit_direction,
        }
        if as_path_match_mode is not None:
            self._values["as_path_match_mode"] = as_path_match_mode
        if cidr_match_mode is not None:
            self._values["cidr_match_mode"] = cidr_match_mode
        if community_match_mode is not None:
            self._values["community_match_mode"] = community_match_mode
        if community_operate_mode is not None:
            self._values["community_operate_mode"] = community_operate_mode
        if description is not None:
            self._values["description"] = description
        if destination_child_instance_types is not None:
            self._values["destination_child_instance_types"] = destination_child_instance_types
        if destination_cidr_blocks is not None:
            self._values["destination_cidr_blocks"] = destination_cidr_blocks
        if destination_instance_ids is not None:
            self._values["destination_instance_ids"] = destination_instance_ids
        if destination_instance_ids_reverse_match is not None:
            self._values["destination_instance_ids_reverse_match"] = destination_instance_ids_reverse_match
        if destination_route_table_ids is not None:
            self._values["destination_route_table_ids"] = destination_route_table_ids
        if match_asns is not None:
            self._values["match_asns"] = match_asns
        if match_community_set is not None:
            self._values["match_community_set"] = match_community_set
        if next_priority is not None:
            self._values["next_priority"] = next_priority
        if operate_community_set is not None:
            self._values["operate_community_set"] = operate_community_set
        if preference is not None:
            self._values["preference"] = preference
        if prepend_as_path is not None:
            self._values["prepend_as_path"] = prepend_as_path
        if route_types is not None:
            self._values["route_types"] = route_types
        if source_child_instance_types is not None:
            self._values["source_child_instance_types"] = source_child_instance_types
        if source_instance_ids is not None:
            self._values["source_instance_ids"] = source_instance_ids
        if source_instance_ids_reverse_match is not None:
            self._values["source_instance_ids_reverse_match"] = source_instance_ids_reverse_match
        if source_region_ids is not None:
            self._values["source_region_ids"] = source_region_ids
        if source_route_table_ids is not None:
            self._values["source_route_table_ids"] = source_route_table_ids

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenRegionId: The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs.
        '''
        result = self._values.get("cen_region_id")
        assert result is not None, "Required property 'cen_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def map_result(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        mapResult: The route map behavior after all conditions are matched. Valid values:
        Permit: allows the routes that are matched.
        Deny: rejects the routes that are matched.
        '''
        result = self._values.get("map_result")
        assert result is not None, "Required property 'map_result' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        priority: The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority.
        Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transmit_direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        transmitDirection: The direction in which the route map is applied. Valid values:
        RegionIn: Routes are advertised to CEN gateways.
        For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
        RegionOut: Routes are advertised from CEN gateways.
        For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
        '''
        result = self._values.get("transmit_direction")
        assert result is not None, "Required property 'transmit_direction' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def as_path_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        asPathMatchMode: Match statements are used to match the AS paths. Valid values:
        Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
        Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
        '''
        result = self._values.get("as_path_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cidr_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cidrMatchMode: Match statements are used to match the prefixes. Valid values:
        Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
        Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
        '''
        result = self._values.get("cidr_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def community_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        communityMatchMode: Match statements are used to match the Communities. Valid values:
        Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
        Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
        '''
        result = self._values.get("community_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def community_operate_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        communityOperateMode: Action statements are used to operate the Communities. Valid values:
        Additive: adds.
        Replace: replaces.
        '''
        result = self._values.get("community_operate_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the route map.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        destinationChildInstanceTypes: Match statements are used to match the destination instance types. Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        result = self._values.get("destination_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def destination_cidr_blocks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: destinationCidrBlocks: Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks.
        '''
        result = self._values.get("destination_cidr_blocks")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        destinationInstanceIds: Match statements are used to match the destination instance IDs.
        You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
        Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        result = self._values.get("destination_instance_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. Valid values:
        false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
        true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
        '''
        result = self._values.get("destination_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs.
        Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
        '''
        result = self._values.get("destination_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def match_asns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        matchAsns: Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
        Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
        '''
        result = self._values.get("match_asns")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def match_community_set(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        matchCommunitySet: Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        result = self._values.get("match_community_set")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def next_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nextPriority: The priority of the next associated route map. Valid values: 1 to 100.
        If the priority is not set, no next route map is associated with the current route map.
        If the priority is set to 1, the next route map is associated with the current route map.
        If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
        Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
        '''
        result = self._values.get("next_priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def operate_community_set(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        operateCommunitySet: Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        result = self._values.get("operate_community_set")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def preference(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preference: Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
        '''
        result = self._values.get("preference")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prepend_as_path(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
        For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
        For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
        For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
        '''
        result = self._values.get("prepend_as_path")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def route_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        routeTypes: Match statements are used to match the route types. Valid values:
        System: system routes that are generated by the system.
        Custom: custom routes that are created by users.
        BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
        You can enter multiple types.
        '''
        result = self._values.get("route_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def source_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        '''
        result = self._values.get("source_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
        You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
        '''
        result = self._values.get("source_instance_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. Valid values:
        false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
        true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
        '''
        result = self._values.get("source_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_region_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: sourceRegionIds: Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs.
        '''
        result = self._values.get("source_region_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def source_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs.
        '''
        result = self._values.get("source_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenRouteMapProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenRouteService(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenRouteService",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenRouteService``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenRouteServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenRouteService``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ebed3951924105ac5741d09366411266832e23836116a30ba768ec52bd18b7e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__828069bc70b24c46c3c63265863d70d8b316ef96c2a0f5b43334c4b9a2ca80d6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Id: The ID of the cloud service. It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessRegionId")
    def access_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessRegionId: The region where the cloud service is deployed.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessRegionId"))

    @access_region_id.setter
    def access_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__faee6e81a3711c68dcc3c2fc653c8f4912ab31edf646d01e8dbdd6a8393f22aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0054ee80725d5d69fbd763ab449a830188280861ef1ed2ee70168778f65cd1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eac8ef067474362c442f6733bcea051361b11005facb4725814f73410f1f4174)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="host")
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: host: The domain or IP address of the cloud service.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "host"))

    @host.setter
    def host(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d503239b31ed41fc0fdfd0f998a712e2fb6d1d67c3403c02afd44fc287368dff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "host", value)

    @builtins.property
    @jsii.member(jsii_name="hostRegionId")
    def host_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        hostRegionId: The region where the cloud service is deployed.
        You can call the DescribeRegions operation to query region IDs.
        Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "hostRegionId"))

    @host_region_id.setter
    def host_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7bf9d229820b050e71a430999ec208c8f779ef65c4d534049a3e0d9b4317125)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="hostVpcId")
    def host_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "hostVpcId"))

    @host_vpc_id.setter
    def host_vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7226f680592395d1de2c6324b5244c2bd53dc36fe4d64c0a40157d8ef51d2cca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostVpcId", value)

    @builtins.property
    @jsii.member(jsii_name="conflictIgnore")
    def conflict_ignore(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        conflictIgnore: Whether to ignore conflict when creating. If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
        Default false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "conflictIgnore"))

    @conflict_ignore.setter
    def conflict_ignore(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5dace5bbfd6f7d045ffd789fb53727e1fc8299b4d31c22d28c77c3f44f744a07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "conflictIgnore", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the cloud service.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c3e3a5ad09f008f793af8235158fe3a47c519f19aa4d5ce8b003fdf1f17d3cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosCenRouteServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_region_id": "accessRegionId",
        "cen_id": "cenId",
        "host": "host",
        "host_region_id": "hostRegionId",
        "host_vpc_id": "hostVpcId",
        "conflict_ignore": "conflictIgnore",
        "description": "description",
    },
)
class RosCenRouteServiceProps:
    def __init__(
        self,
        *,
        access_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        conflict_ignore: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenRouteService``.

        :param access_region_id: 
        :param cen_id: 
        :param host: 
        :param host_region_id: 
        :param host_vpc_id: 
        :param conflict_ignore: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eee51860e05fa499e6b4762f2c7690c859d219a8a78517f176f9efaa39b65c0f)
            check_type(argname="argument access_region_id", value=access_region_id, expected_type=type_hints["access_region_id"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
            check_type(argname="argument host_region_id", value=host_region_id, expected_type=type_hints["host_region_id"])
            check_type(argname="argument host_vpc_id", value=host_vpc_id, expected_type=type_hints["host_vpc_id"])
            check_type(argname="argument conflict_ignore", value=conflict_ignore, expected_type=type_hints["conflict_ignore"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_region_id": access_region_id,
            "cen_id": cen_id,
            "host": host,
            "host_region_id": host_region_id,
            "host_vpc_id": host_vpc_id,
        }
        if conflict_ignore is not None:
            self._values["conflict_ignore"] = conflict_ignore
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def access_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessRegionId: The region where the cloud service is deployed.
        '''
        result = self._values.get("access_region_id")
        assert result is not None, "Required property 'access_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: host: The domain or IP address of the cloud service.
        '''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        hostRegionId: The region where the cloud service is deployed.
        You can call the DescribeRegions operation to query region IDs.
        Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        '''
        result = self._values.get("host_region_id")
        assert result is not None, "Required property 'host_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
        '''
        result = self._values.get("host_vpc_id")
        assert result is not None, "Required property 'host_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def conflict_ignore(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        conflictIgnore: Whether to ignore conflict when creating. If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
        Default false.
        '''
        result = self._values.get("conflict_ignore")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the cloud service.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenRouteServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenVbrHealthCheck(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenVbrHealthCheck",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenVbrHealthCheck``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenVbrHealthCheckProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenVbrHealthCheck``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d60c79bde7822ea9d5c522725c8edc7236259f6d20dec9900c43945c08bfabcd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c4052c75abb2b64695215ef8d7ab8c05cd7d63e79fcc597191927705167fbc78)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenId: The ID of the CEN instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckSourceIp")
    def attr_health_check_source_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckSourceIp"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTargetIp")
    def attr_health_check_target_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckTargetIp"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrVbrInstanceId")
    def attr_vbr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VbrInstanceId: The ID of the VBR instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVbrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVbrInstanceOwnerId")
    def attr_vbr_instance_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVbrInstanceOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVbrInstanceRegionId")
    def attr_vbr_instance_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVbrInstanceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5618cb7ac85915e847aebfc5de1e9b0c8d0e582f057ba97cac1ac4af69995d08)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b00b297d7f44bfd2f8edd1891dc8f2e9c3ebf19dc3b5c62f92f1e592286c9f13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckTargetIp")
    def health_check_target_ip(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "healthCheckTargetIp"))

    @health_check_target_ip.setter
    def health_check_target_ip(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca4957727238b4f6f01955c2fb5d9c62c284669a42ded5b0c0ece9b22e08b72d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckTargetIp", value)

    @builtins.property
    @jsii.member(jsii_name="vbrInstanceId")
    def vbr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vbrInstanceId: The ID of the VBR instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vbrInstanceId"))

    @vbr_instance_id.setter
    def vbr_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccae7d8a74d1d14c12cd5d301b1f2cd9943ef9a6ad1ae2a35ca1828f378efbac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vbrInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="vbrInstanceRegionId")
    def vbr_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vbrInstanceRegionId"))

    @vbr_instance_region_id.setter
    def vbr_instance_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5ec98be1ea405a9a3e8f50df3b8387c86c4a1d4b9ddc1965cba31ab58c63636)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vbrInstanceRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckInterval")
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckInterval"))

    @health_check_interval.setter
    def health_check_interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfaf94e3f9f59112a1564ee447395a435122e7d82e4870733c879658d6114553)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckInterval", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckSourceIp")
    def health_check_source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckSourceIp"))

    @health_check_source_ip.setter
    def health_check_source_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e4f7441c6fa8190e3edbca81f89f0d66f8131d8e15edad759c8aa2293c31333)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckSourceIp", value)

    @builtins.property
    @jsii.member(jsii_name="healthyThreshold")
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthyThreshold"))

    @healthy_threshold.setter
    def healthy_threshold(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6813a6c473017024aeb7ee129e61f6ade4bdca036d49eae04f2e7fb845e74615)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthyThreshold", value)

    @builtins.property
    @jsii.member(jsii_name="vbrInstanceOwnerId")
    def vbr_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vbrInstanceOwnerId"))

    @vbr_instance_owner_id.setter
    def vbr_instance_owner_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4ba0ff45780cfb8c82abffe86cb065ef2a9f156ffdd473037fa9320218acba5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vbrInstanceOwnerId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosCenVbrHealthCheckProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "health_check_target_ip": "healthCheckTargetIp",
        "vbr_instance_id": "vbrInstanceId",
        "vbr_instance_region_id": "vbrInstanceRegionId",
        "health_check_interval": "healthCheckInterval",
        "health_check_source_ip": "healthCheckSourceIp",
        "healthy_threshold": "healthyThreshold",
        "vbr_instance_owner_id": "vbrInstanceOwnerId",
    },
)
class RosCenVbrHealthCheckProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        health_check_target_ip: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vbr_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vbr_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_source_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vbr_instance_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenVbrHealthCheck``.

        :param cen_id: 
        :param health_check_target_ip: 
        :param vbr_instance_id: 
        :param vbr_instance_region_id: 
        :param health_check_interval: 
        :param health_check_source_ip: 
        :param healthy_threshold: 
        :param vbr_instance_owner_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c5644ae3db3baedb45553b786cc903708deaa5e759e17059665f1798902dd3f)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument health_check_target_ip", value=health_check_target_ip, expected_type=type_hints["health_check_target_ip"])
            check_type(argname="argument vbr_instance_id", value=vbr_instance_id, expected_type=type_hints["vbr_instance_id"])
            check_type(argname="argument vbr_instance_region_id", value=vbr_instance_region_id, expected_type=type_hints["vbr_instance_region_id"])
            check_type(argname="argument health_check_interval", value=health_check_interval, expected_type=type_hints["health_check_interval"])
            check_type(argname="argument health_check_source_ip", value=health_check_source_ip, expected_type=type_hints["health_check_source_ip"])
            check_type(argname="argument healthy_threshold", value=healthy_threshold, expected_type=type_hints["healthy_threshold"])
            check_type(argname="argument vbr_instance_owner_id", value=vbr_instance_owner_id, expected_type=type_hints["vbr_instance_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "health_check_target_ip": health_check_target_ip,
            "vbr_instance_id": vbr_instance_id,
            "vbr_instance_region_id": vbr_instance_region_id,
        }
        if health_check_interval is not None:
            self._values["health_check_interval"] = health_check_interval
        if health_check_source_ip is not None:
            self._values["health_check_source_ip"] = health_check_source_ip
        if healthy_threshold is not None:
            self._values["healthy_threshold"] = healthy_threshold
        if vbr_instance_owner_id is not None:
            self._values["vbr_instance_owner_id"] = vbr_instance_owner_id

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def health_check_target_ip(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
        '''
        result = self._values.get("health_check_target_ip")
        assert result is not None, "Required property 'health_check_target_ip' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vbr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vbrInstanceId: The ID of the VBR instance.
        '''
        result = self._values.get("vbr_instance_id")
        assert result is not None, "Required property 'vbr_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vbr_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
        '''
        result = self._values.get("vbr_instance_region_id")
        assert result is not None, "Required property 'vbr_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
        '''
        result = self._values.get("health_check_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        '''
        result = self._values.get("health_check_source_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
        '''
        result = self._values.get("healthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vbr_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
        '''
        result = self._values.get("vbr_instance_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenVbrHealthCheckProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosChildInstanceRouteEntryToAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosChildInstanceRouteEntryToAttachment",
):
    '''A ROS template type:  ``ALIYUN::CEN::ChildInstanceRouteEntryToAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosChildInstanceRouteEntryToAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::ChildInstanceRouteEntryToAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dcd3d8a77c4258f725c4c5f225ba1b40506a45e7261eb1498376d7416a4efab)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e151daff33824ccf8d94ba4a7176c93e80cf22356ddea374a6bf1fc99e53f03e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenId: The ID of the CEN instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrDestinationCidrBlock")
    def attr_destination_cidr_block(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DestinationCidrBlock: The destination CIDR block of the route.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDestinationCidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteTableId: The ID of the route table configured on the network instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: The ID of the network instance connection.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58a694a33447c76ac4db9efd185add07a4ebd001799d854a8789f3bea042e525)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="destinationCidrBlock")
    def destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationCidrBlock: The destination CIDR block of the route.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destinationCidrBlock"))

    @destination_cidr_block.setter
    def destination_cidr_block(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35d3efbbbffaf9d052e9d81d93f108c908a9d037ed3e4c499006fb47e7f14fc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationCidrBlock", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9f5747f78398810640b9c7d2305cae2a40cb52583fe819766e16119bc4b2607)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="routeTableId")
    def route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: routeTableId: The ID of the route table configured on the network instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "routeTableId"))

    @route_table_id.setter
    def route_table_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4950c9ecdd6b479e13e2f991ff7fae178ddf8798ffeb707c456ce28dac73867)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeTableId", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterAttachmentId")
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterAttachmentId: The ID of the network instance connection.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterAttachmentId"))

    @transit_router_attachment_id.setter
    def transit_router_attachment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b41a01e68cc53890ed87bc8944a3bf17c678d86f2a319d1f8170880057923603)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterAttachmentId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosChildInstanceRouteEntryToAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "destination_cidr_block": "destinationCidrBlock",
        "route_table_id": "routeTableId",
        "transit_router_attachment_id": "transitRouterAttachmentId",
    },
)
class RosChildInstanceRouteEntryToAttachmentProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::ChildInstanceRouteEntryToAttachment``.

        :param cen_id: 
        :param destination_cidr_block: 
        :param route_table_id: 
        :param transit_router_attachment_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a16c88152b1546c20f12d0ced1f1bc39424dcea1fe8435866995f4775a8d458)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument destination_cidr_block", value=destination_cidr_block, expected_type=type_hints["destination_cidr_block"])
            check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
            check_type(argname="argument transit_router_attachment_id", value=transit_router_attachment_id, expected_type=type_hints["transit_router_attachment_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "destination_cidr_block": destination_cidr_block,
            "route_table_id": route_table_id,
            "transit_router_attachment_id": transit_router_attachment_id,
        }

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationCidrBlock: The destination CIDR block of the route.
        '''
        result = self._values.get("destination_cidr_block")
        assert result is not None, "Required property 'destination_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: routeTableId: The ID of the route table configured on the network instance.
        '''
        result = self._values.get("route_table_id")
        assert result is not None, "Required property 'route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterAttachmentId: The ID of the network instance connection.
        '''
        result = self._values.get("transit_router_attachment_id")
        assert result is not None, "Required property 'transit_router_attachment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosChildInstanceRouteEntryToAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRouteEntry(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosRouteEntry",
):
    '''A ROS template type:  ``ALIYUN::CEN::RouteEntry``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRouteEntryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::RouteEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d745136fcffdcce36c96005dc682ae623c4d74f334065a63b2b423f838a4f4f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f9548e1df303977bc2aefaf20889878aaa19dfc548de226c51da4f08feab461c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance where the route entry is published.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__314c50cde76b95f171835ba744224e49512185f374dab9d32062d94da69018b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="childInstanceId")
    def child_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceId: The ID of the attached network (VPC or VBR).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "childInstanceId"))

    @child_instance_id.setter
    def child_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cacac60a8269f9530a8588422dec8c34dc34ed3a6b5469f58025d2163bfcc1fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "childInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="childInstanceRegionId")
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "childInstanceRegionId"))

    @child_instance_region_id.setter
    def child_instance_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba5179ee03649e2c02c6d918ab3b8edcee4faa9b3d5275d6ab0a92cd3df61506)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "childInstanceRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="childInstanceRouteTableId")
    def child_instance_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "childInstanceRouteTableId"))

    @child_instance_route_table_id.setter
    def child_instance_route_table_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56e2b99700e30c341e9059964fddccfc26481b54b82880ac954e098ca80306f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "childInstanceRouteTableId", value)

    @builtins.property
    @jsii.member(jsii_name="childInstanceType")
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceType: The type of the network, value: VPC VBR
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "childInstanceType"))

    @child_instance_type.setter
    def child_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7927605c622f6e6045aac98b16de1df2f0f09038ab8001768983bd44c21f5b7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "childInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="destinationCidrBlock")
    def destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destinationCidrBlock"))

    @destination_cidr_block.setter
    def destination_cidr_block(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3b0efe0e6e5b1f6cda0d95be99fe79abe282d3fe2b7673ae27397340b26d2a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationCidrBlock", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88519a359aa5bbca70f605a1df9f3d1b814549ceeb956a1ec851fc389b4a5152)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosRouteEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "child_instance_id": "childInstanceId",
        "child_instance_region_id": "childInstanceRegionId",
        "child_instance_route_table_id": "childInstanceRouteTableId",
        "child_instance_type": "childInstanceType",
        "destination_cidr_block": "destinationCidrBlock",
    },
)
class RosRouteEntryProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::RouteEntry``.

        :param cen_id: 
        :param child_instance_id: 
        :param child_instance_region_id: 
        :param child_instance_route_table_id: 
        :param child_instance_type: 
        :param destination_cidr_block: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eab3bff1b638a144c7179dbf53455b314ec8f802beb1d44bb52683be655b519c)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument child_instance_id", value=child_instance_id, expected_type=type_hints["child_instance_id"])
            check_type(argname="argument child_instance_region_id", value=child_instance_region_id, expected_type=type_hints["child_instance_region_id"])
            check_type(argname="argument child_instance_route_table_id", value=child_instance_route_table_id, expected_type=type_hints["child_instance_route_table_id"])
            check_type(argname="argument child_instance_type", value=child_instance_type, expected_type=type_hints["child_instance_type"])
            check_type(argname="argument destination_cidr_block", value=destination_cidr_block, expected_type=type_hints["destination_cidr_block"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_route_table_id": child_instance_route_table_id,
            "child_instance_type": child_instance_type,
            "destination_cidr_block": destination_cidr_block,
        }

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance where the route entry is published.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceId: The ID of the attached network (VPC or VBR).
        '''
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        '''
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        '''
        result = self._values.get("child_instance_route_table_id")
        assert result is not None, "Required property 'child_instance_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: childInstanceType: The type of the network, value: VPC VBR
        '''
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        '''
        result = self._values.get("destination_cidr_block")
        assert result is not None, "Required property 'destination_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouter(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouter",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouter``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTransitRouterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouter``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f10690bdaa7125b92ea0ece9f3883e03ee68ac618f5c2301bafd18933087d67c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b5c8f426debc01edbc9b6c7ad2d865eec79cd7f1965b8a918a11d9dc1f77ae37)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AliUid: AliUid
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAliUid"))

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenId: CenId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrSystemTransitRouterRouteTableId")
    def attr_system_transit_router_route_table_id(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SystemTransitRouterRouteTableId: The system route table ID of transit router.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSystemTransitRouterRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterDescription")
    def attr_transit_router_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterDescription: TransitRouterDescription
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterId: TransitRouterId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterName")
    def attr_transit_router_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterName: TransitRouterName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterName"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Type: Type
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: CenId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__751fabe2845dc1ac5e2cb11b6507e8233769799e1bb22755ce439c98ff5fa343)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5982259195aa467491d913cac0a370b47042ae92c7a4822b4911310b7dcde916)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterDescription")
    def transit_router_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterDescription: TransitRouterDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterDescription"))

    @transit_router_description.setter
    def transit_router_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fae2521d2e4d871ba2d907fd734c60ee4b4815b3fc610cfa9004aa95087f0add)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterDescription", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterName")
    def transit_router_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterName: TransitRouterName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterName"))

    @transit_router_name.setter
    def transit_router_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__312a6738738e20f5cad6ebd4e9f1b7c5880fa28ebd0470c2a36302add0bf387a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterName", value)


class RosTransitRouterPeerAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachment",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterPeerAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTransitRouterPeerAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterPeerAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c0f15dad7b84f9e1aa2d8ca88e9ded9a53380910a6d3456d304f4f01d2e3325)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b2af7a54c81138b5f5451e0de8a615eb7631be5bc9b595cf560618b475152c5e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoPublishRouteEnabled")
    def attr_auto_publish_route_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoPublishRouteEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: Bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackageId")
    def attr_cen_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenBandwidthPackageId: BandwidthPackageId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenBandwidthPackageId"))

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenId: CenId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClientToken: ClientToken
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property
    @jsii.member(jsii_name="attrGeographicSpanId")
    def attr_geographic_span_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GeographicSpanId: GeographicSpanId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGeographicSpanId"))

    @builtins.property
    @jsii.member(jsii_name="attrPeerTransitRouterId")
    def attr_peer_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PeerTransitRouterId: PeerTransitRouterId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeerTransitRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrPeerTransitRouterOwnerId")
    def attr_peer_transit_router_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PeerTransitRouterOwnerId: PeerTransitRouterOwnerId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeerTransitRouterOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrPeerTransitRouterRegionId")
    def attr_peer_transit_router_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PeerTransitRouterRegionId: PeerTransitRouterRegionId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeerTransitRouterRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceType: ResourceType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: The first ID of the resource
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterId: TransitRouterId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__619e38b34b1e554ef8273bf72b297306898b8d652f97a4311520dbdeea6e5526)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="peerTransitRouterId")
    def peer_transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: peerTransitRouterId: PeerTransitRouterId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "peerTransitRouterId"))

    @peer_transit_router_id.setter
    def peer_transit_router_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60d464b1578bfb3cc76f5e665d094766e6b082cd3259bc25a77e275222206168)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "peerTransitRouterId", value)

    @builtins.property
    @jsii.member(jsii_name="autoPublishRouteEnabled")
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPublishRouteEnabled"))

    @auto_publish_route_enabled.setter
    def auto_publish_route_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a6eaeabfb76aa50bb788a596c5a15755aa9f006e819a3aab977136f1b283ef0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPublishRouteEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: Bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56364dc14649e1bc534d2011b85410b92a8ddcdf12ed25ae2e9ac1d3eb1d7da6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="cenBandwidthPackageId")
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cenBandwidthPackageId: BandwidthPackageId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cenBandwidthPackageId"))

    @cen_bandwidth_package_id.setter
    def cen_bandwidth_package_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6806ccafc1160fe3abdfb5858c9f25acfd9f7e1fa24e488d783cd2bdce18ed4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenBandwidthPackageId", value)

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89c74c529def7f4c15d12ff3797ca9b0b080083d80394e9c509e413d98d4cfc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="peerTransitRouterRegionId")
    def peer_transit_router_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: peerTransitRouterRegionId: PeerTransitRouterRegionId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "peerTransitRouterRegionId"))

    @peer_transit_router_region_id.setter
    def peer_transit_router_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28100e15740af4886095ae0d27c615215d39011b8f8afbd9363525fec17da5a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "peerTransitRouterRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterAttachmentDescription")
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterAttachmentDescription"))

    @transit_router_attachment_description.setter
    def transit_router_attachment_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca8e29cc7c76c7854244028962c954a66fc4bbeee51564e8a07e7657963d9cce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterAttachmentDescription", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterAttachmentName")
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterAttachmentName"))

    @transit_router_attachment_name.setter
    def transit_router_attachment_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d18091d0db46d4c05b03368d941f634c7988bc92b7cb63858c49cd49e83b4472)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterAttachmentName", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fbc000ce367c793cbb08944a0991496d412ee91b9dfeecf2201c559ddcf9483)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "peer_transit_router_id": "peerTransitRouterId",
        "auto_publish_route_enabled": "autoPublishRouteEnabled",
        "bandwidth": "bandwidth",
        "cen_bandwidth_package_id": "cenBandwidthPackageId",
        "cen_id": "cenId",
        "peer_transit_router_region_id": "peerTransitRouterRegionId",
        "transit_router_attachment_description": "transitRouterAttachmentDescription",
        "transit_router_attachment_name": "transitRouterAttachmentName",
        "transit_router_id": "transitRouterId",
    },
)
class RosTransitRouterPeerAttachmentProps:
    def __init__(
        self,
        *,
        peer_transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        peer_transit_router_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterPeerAttachment``.

        :param peer_transit_router_id: 
        :param auto_publish_route_enabled: 
        :param bandwidth: 
        :param cen_bandwidth_package_id: 
        :param cen_id: 
        :param peer_transit_router_region_id: 
        :param transit_router_attachment_description: 
        :param transit_router_attachment_name: 
        :param transit_router_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7963e6f4a34e0c35a77fee6b73317e44f49e3341c3aec80d1dd4c72e4c584d4)
            check_type(argname="argument peer_transit_router_id", value=peer_transit_router_id, expected_type=type_hints["peer_transit_router_id"])
            check_type(argname="argument auto_publish_route_enabled", value=auto_publish_route_enabled, expected_type=type_hints["auto_publish_route_enabled"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument cen_bandwidth_package_id", value=cen_bandwidth_package_id, expected_type=type_hints["cen_bandwidth_package_id"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument peer_transit_router_region_id", value=peer_transit_router_region_id, expected_type=type_hints["peer_transit_router_region_id"])
            check_type(argname="argument transit_router_attachment_description", value=transit_router_attachment_description, expected_type=type_hints["transit_router_attachment_description"])
            check_type(argname="argument transit_router_attachment_name", value=transit_router_attachment_name, expected_type=type_hints["transit_router_attachment_name"])
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "peer_transit_router_id": peer_transit_router_id,
        }
        if auto_publish_route_enabled is not None:
            self._values["auto_publish_route_enabled"] = auto_publish_route_enabled
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if cen_bandwidth_package_id is not None:
            self._values["cen_bandwidth_package_id"] = cen_bandwidth_package_id
        if cen_id is not None:
            self._values["cen_id"] = cen_id
        if peer_transit_router_region_id is not None:
            self._values["peer_transit_router_region_id"] = peer_transit_router_region_id
        if transit_router_attachment_description is not None:
            self._values["transit_router_attachment_description"] = transit_router_attachment_description
        if transit_router_attachment_name is not None:
            self._values["transit_router_attachment_name"] = transit_router_attachment_name
        if transit_router_id is not None:
            self._values["transit_router_id"] = transit_router_id

    @builtins.property
    def peer_transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: peerTransitRouterId: PeerTransitRouterId
        '''
        result = self._values.get("peer_transit_router_id")
        assert result is not None, "Required property 'peer_transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        result = self._values.get("auto_publish_route_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: Bandwidth
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cenBandwidthPackageId: BandwidthPackageId
        '''
        result = self._values.get("cen_bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def peer_transit_router_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: peerTransitRouterRegionId: PeerTransitRouterRegionId
        '''
        result = self._values.get("peer_transit_router_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterPeerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "transit_router_description": "transitRouterDescription",
        "transit_router_name": "transitRouterName",
    },
)
class RosTransitRouterProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouter``.

        :param cen_id: 
        :param transit_router_description: 
        :param transit_router_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ed2245dde7c6c0df408472f07d7fdd74c8558bee8b6ed8afb1880d28565f72c)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument transit_router_description", value=transit_router_description, expected_type=type_hints["transit_router_description"])
            check_type(argname="argument transit_router_name", value=transit_router_name, expected_type=type_hints["transit_router_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
        }
        if transit_router_description is not None:
            self._values["transit_router_description"] = transit_router_description
        if transit_router_name is not None:
            self._values["transit_router_name"] = transit_router_name

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: CenId
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterDescription: TransitRouterDescription
        '''
        result = self._values.get("transit_router_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterName: TransitRouterName
        '''
        result = self._values.get("transit_router_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterRouteEntry(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteEntry",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterRouteEntry``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTransitRouterRouteEntryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__397177d47830bf83ab87a32416484faba22c7c9a8c78b9ee0976501133a4fcf7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3f441459024d2e58780d4fc7ace3f6d2c26ea36bad9654229101b9b4c3ff0b6a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryDescription")
    def attr_transit_router_route_entry_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryDestinationCidrBlock")
    def attr_transit_router_route_entry_destination_cidr_block(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryDestinationCidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryId")
    def attr_transit_router_route_entry_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryId: The first ID of the resource
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryName")
    def attr_transit_router_route_entry_name(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryName: TransitRouterRouteEntryName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryName"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryNextHopId")
    def attr_transit_router_route_entry_next_hop_id(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryNextHopId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryNextHopType")
    def attr_transit_router_route_entry_next_hop_type(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryNextHopType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryType")
    def attr_transit_router_route_entry_type(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryType: TransitRouterRouteEntryType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__837b3d9bb67be193ed8e3951cbff7c7d88371d3f64cd33d4a0d09f5fe05986fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteEntryDestinationCidrBlock")
    def transit_router_route_entry_destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterRouteEntryDestinationCidrBlock"))

    @transit_router_route_entry_destination_cidr_block.setter
    def transit_router_route_entry_destination_cidr_block(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b78b3d40c9dd8d1be59102bda7fa0584ac660ce125abd715165808b2fc6191c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteEntryDestinationCidrBlock", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteEntryNextHopType")
    def transit_router_route_entry_next_hop_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterRouteEntryNextHopType"))

    @transit_router_route_entry_next_hop_type.setter
    def transit_router_route_entry_next_hop_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44c41c3ce45c2e15f2a088f9ee08b969010199a1b51a10e7830df21c60470740)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteEntryNextHopType", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteTableId")
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterRouteTableId"))

    @transit_router_route_table_id.setter
    def transit_router_route_table_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdf06cc2511d8d37c926d0c0f3e3e12c30235ca8ac5f12f40ecd508cf58ee477)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteTableId", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteEntryDescription")
    def transit_router_route_entry_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterRouteEntryDescription"))

    @transit_router_route_entry_description.setter
    def transit_router_route_entry_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27bb5794ad89f187ae3182614f8da1ae90489a3ef379876c3a4bed7ce05385ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteEntryDescription", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteEntryName")
    def transit_router_route_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryName: TransitRouterRouteEntryName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterRouteEntryName"))

    @transit_router_route_entry_name.setter
    def transit_router_route_entry_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eb7def64403cd8cb9d83f9ac291d6908573bcfa85afd0d7d2e07b87c771d187)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteEntryName", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteEntryNextHopId")
    def transit_router_route_entry_next_hop_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterRouteEntryNextHopId"))

    @transit_router_route_entry_next_hop_id.setter
    def transit_router_route_entry_next_hop_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3e7f989465954ab1ddd87acb946d1c97b7108b826153b50a055d2988a534c60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteEntryNextHopId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "transit_router_route_entry_destination_cidr_block": "transitRouterRouteEntryDestinationCidrBlock",
        "transit_router_route_entry_next_hop_type": "transitRouterRouteEntryNextHopType",
        "transit_router_route_table_id": "transitRouterRouteTableId",
        "transit_router_route_entry_description": "transitRouterRouteEntryDescription",
        "transit_router_route_entry_name": "transitRouterRouteEntryName",
        "transit_router_route_entry_next_hop_id": "transitRouterRouteEntryNextHopId",
    },
)
class RosTransitRouterRouteEntryProps:
    def __init__(
        self,
        *,
        transit_router_route_entry_destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_entry_next_hop_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_entry_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_entry_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_entry_next_hop_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteEntry``.

        :param transit_router_route_entry_destination_cidr_block: 
        :param transit_router_route_entry_next_hop_type: 
        :param transit_router_route_table_id: 
        :param transit_router_route_entry_description: 
        :param transit_router_route_entry_name: 
        :param transit_router_route_entry_next_hop_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99288ce5e9a39e555d55b8e2187c68a66a970596af2b362d4c8195bd921421cf)
            check_type(argname="argument transit_router_route_entry_destination_cidr_block", value=transit_router_route_entry_destination_cidr_block, expected_type=type_hints["transit_router_route_entry_destination_cidr_block"])
            check_type(argname="argument transit_router_route_entry_next_hop_type", value=transit_router_route_entry_next_hop_type, expected_type=type_hints["transit_router_route_entry_next_hop_type"])
            check_type(argname="argument transit_router_route_table_id", value=transit_router_route_table_id, expected_type=type_hints["transit_router_route_table_id"])
            check_type(argname="argument transit_router_route_entry_description", value=transit_router_route_entry_description, expected_type=type_hints["transit_router_route_entry_description"])
            check_type(argname="argument transit_router_route_entry_name", value=transit_router_route_entry_name, expected_type=type_hints["transit_router_route_entry_name"])
            check_type(argname="argument transit_router_route_entry_next_hop_id", value=transit_router_route_entry_next_hop_id, expected_type=type_hints["transit_router_route_entry_next_hop_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "transit_router_route_entry_destination_cidr_block": transit_router_route_entry_destination_cidr_block,
            "transit_router_route_entry_next_hop_type": transit_router_route_entry_next_hop_type,
            "transit_router_route_table_id": transit_router_route_table_id,
        }
        if transit_router_route_entry_description is not None:
            self._values["transit_router_route_entry_description"] = transit_router_route_entry_description
        if transit_router_route_entry_name is not None:
            self._values["transit_router_route_entry_name"] = transit_router_route_entry_name
        if transit_router_route_entry_next_hop_id is not None:
            self._values["transit_router_route_entry_next_hop_id"] = transit_router_route_entry_next_hop_id

    @builtins.property
    def transit_router_route_entry_destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
        '''
        result = self._values.get("transit_router_route_entry_destination_cidr_block")
        assert result is not None, "Required property 'transit_router_route_entry_destination_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_entry_next_hop_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
        '''
        result = self._values.get("transit_router_route_entry_next_hop_type")
        assert result is not None, "Required property 'transit_router_route_entry_next_hop_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_entry_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
        '''
        result = self._values.get("transit_router_route_entry_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_route_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryName: TransitRouterRouteEntryName
        '''
        result = self._values.get("transit_router_route_entry_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_route_entry_next_hop_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
        '''
        result = self._values.get("transit_router_route_entry_next_hop_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterRouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterRouteTable(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteTable",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterRouteTable``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTransitRouterRouteTableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteTable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f84da8f7a52a7022afffd94a0c1fedc17218c0d5e95e1a4a8ba5aa42223ec45b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cbbfbbd320b1070fc6657fcf8da795358809e51769a8320b71d17004ac2efd85)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClientToken: ClientToken
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterId: TransitRouterId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableDescription")
    def attr_transit_router_route_table_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableDescription: TransitRouterRouteTableDescription
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableName")
    def attr_transit_router_route_table_name(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableName: TransitRouterRouteTableName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableName"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableType")
    def attr_transit_router_route_table_type(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableType: TransitRouterRouteTableType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7f9ff66dd72cb74a22815935fd9e2d145bb6c585f13b14a050ab8844787adbe0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d465e365cf17ddf7275dc537cc4f9a3bcd179a2a9dcb0f50362792251d1a3a97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterId", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteTableDescription")
    def transit_router_route_table_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteTableDescription: TransitRouterRouteTableDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterRouteTableDescription"))

    @transit_router_route_table_description.setter
    def transit_router_route_table_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a5e98fb7babe05968013d9716283d3c0d9da8863b9ba34164c677a2bc8dc4fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteTableDescription", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteTableName")
    def transit_router_route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteTableName: TransitRouterRouteTableName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterRouteTableName"))

    @transit_router_route_table_name.setter
    def transit_router_route_table_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd94b112e3c02c820deeb2f67599be3b83eadffa26d77a9d6b0531626fd3da1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteTableName", value)


class RosTransitRouterRouteTableAssociation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteTableAssociation",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTransitRouterRouteTableAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e1fb30ced4f8efebc89bc5cd328819bfeee665d18610b0a69004acc6d131869)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8eb722cbf1a7106cfd56466a2597d7891d3b624d2e6c905777393c292e7e65c1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceId: ResourceId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceType: ResourceType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: TransitRouterAttachmentId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5d1b6d5ee1a2795095d3a89e5f9489f84ad5982b55fe90ffc0b18df0f0f9872a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterAttachmentId")
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterAttachmentId: TransitRouterAttachmentId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterAttachmentId"))

    @transit_router_attachment_id.setter
    def transit_router_attachment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82d75a0a6b8b4a5d9a31eb42c2c22df32cb665f308e41aac97b4be7a23a5b629)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterAttachmentId", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteTableId")
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterRouteTableId"))

    @transit_router_route_table_id.setter
    def transit_router_route_table_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__371ac27c7aca70a6d191a812a8108f3838de649f56dffdcb7c9ff91dbcc8e6a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteTableId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteTableAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "transit_router_attachment_id": "transitRouterAttachmentId",
        "transit_router_route_table_id": "transitRouterRouteTableId",
    },
)
class RosTransitRouterRouteTableAssociationProps:
    def __init__(
        self,
        *,
        transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.

        :param transit_router_attachment_id: 
        :param transit_router_route_table_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8408753bfc3a39991e3c9b65a59da7695399e664912f878453aa3e33d08eeb22)
            check_type(argname="argument transit_router_attachment_id", value=transit_router_attachment_id, expected_type=type_hints["transit_router_attachment_id"])
            check_type(argname="argument transit_router_route_table_id", value=transit_router_route_table_id, expected_type=type_hints["transit_router_route_table_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "transit_router_attachment_id": transit_router_attachment_id,
            "transit_router_route_table_id": transit_router_route_table_id,
        }

    @builtins.property
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterAttachmentId: TransitRouterAttachmentId
        '''
        result = self._values.get("transit_router_attachment_id")
        assert result is not None, "Required property 'transit_router_attachment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterRouteTableAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterRouteTablePropagation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteTablePropagation",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTransitRouterRouteTablePropagationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__452cf5052acf37a5091fcbf45ec0717a14a541ce21b30f29337c4a27f7896db1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cd7193fc7642f46606cd1936ffc70626be777093eb57cce6e60209ee49227c47)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceId: ResourceId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceType: ResourceType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: TransitRouterAttachmentId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2ddae4ac0ae3d917a987283256808ce973dea89cb200f0c69360402a17d12d91)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterAttachmentId")
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterAttachmentId: TransitRouterAttachmentId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterAttachmentId"))

    @transit_router_attachment_id.setter
    def transit_router_attachment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19ee82dd2b488fd6cac8468b81e01a67e29a2191fbd67fed431f15657ac1d497)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterAttachmentId", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteTableId")
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterRouteTableId"))

    @transit_router_route_table_id.setter
    def transit_router_route_table_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89909cf57b5f778ff7b3a3a8edc6df91dbe014715938b696b419ef0178b87352)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteTableId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteTablePropagationProps",
    jsii_struct_bases=[],
    name_mapping={
        "transit_router_attachment_id": "transitRouterAttachmentId",
        "transit_router_route_table_id": "transitRouterRouteTableId",
    },
)
class RosTransitRouterRouteTablePropagationProps:
    def __init__(
        self,
        *,
        transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.

        :param transit_router_attachment_id: 
        :param transit_router_route_table_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8329eb535c102195392936e4d3074bd249ba88d8ab85bfb4a7aab57f1cd3aecc)
            check_type(argname="argument transit_router_attachment_id", value=transit_router_attachment_id, expected_type=type_hints["transit_router_attachment_id"])
            check_type(argname="argument transit_router_route_table_id", value=transit_router_route_table_id, expected_type=type_hints["transit_router_route_table_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "transit_router_attachment_id": transit_router_attachment_id,
            "transit_router_route_table_id": transit_router_route_table_id,
        }

    @builtins.property
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterAttachmentId: TransitRouterAttachmentId
        '''
        result = self._values.get("transit_router_attachment_id")
        assert result is not None, "Required property 'transit_router_attachment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterRouteTablePropagationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "transit_router_id": "transitRouterId",
        "transit_router_route_table_description": "transitRouterRouteTableDescription",
        "transit_router_route_table_name": "transitRouterRouteTableName",
    },
)
class RosTransitRouterRouteTableProps:
    def __init__(
        self,
        *,
        transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_table_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTable``.

        :param transit_router_id: 
        :param transit_router_route_table_description: 
        :param transit_router_route_table_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7127cd3242ce491bf264ab5be91eb56c090c6bc722bff58e65f99d5859531704)
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
            check_type(argname="argument transit_router_route_table_description", value=transit_router_route_table_description, expected_type=type_hints["transit_router_route_table_description"])
            check_type(argname="argument transit_router_route_table_name", value=transit_router_route_table_name, expected_type=type_hints["transit_router_route_table_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "transit_router_id": transit_router_id,
        }
        if transit_router_route_table_description is not None:
            self._values["transit_router_route_table_description"] = transit_router_route_table_description
        if transit_router_route_table_name is not None:
            self._values["transit_router_route_table_name"] = transit_router_route_table_name

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        result = self._values.get("transit_router_id")
        assert result is not None, "Required property 'transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_table_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteTableDescription: TransitRouterRouteTableDescription
        '''
        result = self._values.get("transit_router_route_table_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteTableName: TransitRouterRouteTableName
        '''
        result = self._values.get("transit_router_route_table_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterRouteTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterVbrAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachment",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterVbrAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTransitRouterVbrAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterVbrAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b40b8b6d8844ffcad75c028f3f67efe41ea526acb74b519eddd46d57d24e5fa5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5b8b7ef89cf628feaf3436de40630ccf09c8737885f6903d88578ed7b5cd84d5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoPublishRouteEnabled")
    def attr_auto_publish_route_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoPublishRouteEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenId: CenId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClientToken: ClientToken
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceType: ResourceType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: The first ID of the resource
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterId: TransitRouterId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrVbrId")
    def attr_vbr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VbrId: VbrId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVbrId"))

    @builtins.property
    @jsii.member(jsii_name="attrVbrOwnerId")
    def attr_vbr_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VbrOwnerId: VbrOwnerId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVbrOwnerId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__feb5b1b1580349ec86a4834e4c4b589d8602743214526669375ffbf822a66cd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vbrId")
    def vbr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vbrId: VbrId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vbrId"))

    @vbr_id.setter
    def vbr_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72f3b35b028fe858482f612516544f0b9c7b7e8ba8afb1cd6dea53da4d2699a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vbrId", value)

    @builtins.property
    @jsii.member(jsii_name="autoPublishRouteEnabled")
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPublishRouteEnabled"))

    @auto_publish_route_enabled.setter
    def auto_publish_route_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0f88e57adc993af692ba89ecec0394b6a8789a8d09cb5e45292b1bb034cdaef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPublishRouteEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b13d69480483444b14a5c87a8945d9918586f47ad6fca457f1b97f4d55af53e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterAttachmentDescription")
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterAttachmentDescription"))

    @transit_router_attachment_description.setter
    def transit_router_attachment_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adcdc6b2bf7ba06cca75391cbc9a3d6357432a3bb0d1bacf39ac40ff9a088472)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterAttachmentDescription", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterAttachmentName")
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterAttachmentName"))

    @transit_router_attachment_name.setter
    def transit_router_attachment_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00c236d6207d19bfb5e3f2620e2e51e5da7abf1cf1206d4d2354180edd70442f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterAttachmentName", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd926b7d38931a913687c8aa1105166e3f617ef38bd1c9cffbbee31dfbf58d1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterId", value)

    @builtins.property
    @jsii.member(jsii_name="vbrOwnerId")
    def vbr_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vbrOwnerId: VbrOwnerId
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vbrOwnerId"))

    @vbr_owner_id.setter
    def vbr_owner_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd9cc9a6975a33b89fa535469a28bd65920d2ccd455ae63ae33e6f373458d912)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vbrOwnerId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "vbr_id": "vbrId",
        "auto_publish_route_enabled": "autoPublishRouteEnabled",
        "cen_id": "cenId",
        "transit_router_attachment_description": "transitRouterAttachmentDescription",
        "transit_router_attachment_name": "transitRouterAttachmentName",
        "transit_router_id": "transitRouterId",
        "vbr_owner_id": "vbrOwnerId",
    },
)
class RosTransitRouterVbrAttachmentProps:
    def __init__(
        self,
        *,
        vbr_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vbr_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterVbrAttachment``.

        :param vbr_id: 
        :param auto_publish_route_enabled: 
        :param cen_id: 
        :param transit_router_attachment_description: 
        :param transit_router_attachment_name: 
        :param transit_router_id: 
        :param vbr_owner_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__700916dde9b0f44f45e2431973eeefa2626963fcd1c636755938f66e6ae8aea8)
            check_type(argname="argument vbr_id", value=vbr_id, expected_type=type_hints["vbr_id"])
            check_type(argname="argument auto_publish_route_enabled", value=auto_publish_route_enabled, expected_type=type_hints["auto_publish_route_enabled"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument transit_router_attachment_description", value=transit_router_attachment_description, expected_type=type_hints["transit_router_attachment_description"])
            check_type(argname="argument transit_router_attachment_name", value=transit_router_attachment_name, expected_type=type_hints["transit_router_attachment_name"])
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
            check_type(argname="argument vbr_owner_id", value=vbr_owner_id, expected_type=type_hints["vbr_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vbr_id": vbr_id,
        }
        if auto_publish_route_enabled is not None:
            self._values["auto_publish_route_enabled"] = auto_publish_route_enabled
        if cen_id is not None:
            self._values["cen_id"] = cen_id
        if transit_router_attachment_description is not None:
            self._values["transit_router_attachment_description"] = transit_router_attachment_description
        if transit_router_attachment_name is not None:
            self._values["transit_router_attachment_name"] = transit_router_attachment_name
        if transit_router_id is not None:
            self._values["transit_router_id"] = transit_router_id
        if vbr_owner_id is not None:
            self._values["vbr_owner_id"] = vbr_owner_id

    @builtins.property
    def vbr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vbrId: VbrId
        '''
        result = self._values.get("vbr_id")
        assert result is not None, "Required property 'vbr_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        result = self._values.get("auto_publish_route_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vbr_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vbrOwnerId: VbrOwnerId
        '''
        result = self._values.get("vbr_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterVbrAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterVpcAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterVpcAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTransitRouterVpcAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterVpcAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8ed0f9af1ed367fa2cada4ab3cb772cc3d8eb77478ffe4a1aa2b63550c2a3f8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a472271b4b70e59942ea6cdf6ba559eab6a60e6e7ca75f8f377cff79ccd09429)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenId: CenId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClientToken: ClientToken
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceType: ResourceType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: The first ID of the resource
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterId: TransitRouterId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: VpcId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcOwnerId")
    def attr_vpc_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcOwnerId: VpcOwnerId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcOwnerId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__91ef8d398b689104d0c2964a127cefc0de02554c7730817b1302a07de77926e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: VpcId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d00058e390ce9af9fbec91cabafa9d86076e7919cce85d0d2b180c863a01122e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneMappings")
    def zone_mappings(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTransitRouterVpcAttachment.ZoneMappingsProperty"]]]:
        '''
        :Property: zoneMappings: ZoneMappingss
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTransitRouterVpcAttachment.ZoneMappingsProperty"]]], jsii.get(self, "zoneMappings"))

    @zone_mappings.setter
    def zone_mappings(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTransitRouterVpcAttachment.ZoneMappingsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f239a8d18c60d02be46ec74897536198a298e47b97b3e7a8b148cc27a9a2345)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneMappings", value)

    @builtins.property
    @jsii.member(jsii_name="autoCreateVpcRoute")
    def auto_create_vpc_route(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoCreateVpcRoute: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoCreateVpcRoute"))

    @auto_create_vpc_route.setter
    def auto_create_vpc_route(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d7adbd22a8ba159bd9166f321533144fe7b647db6dc5de3b35aa6a89108bb6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoCreateVpcRoute", value)

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__458914b09bf786611a31446af609983ac64b385136cfcaed0b97945105af301a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__447d22a96d275a1a7a0a658f5255eb59698169e494eca1b9e8d79ec13c4cffd4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b896a8a0fc3ba631090e94b8087b047da446bf0f57e4f1c7b9b7908111d4917e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="routeTableAssociationEnabled")
    def route_table_association_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeTableAssociationEnabled: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeTableAssociationEnabled"))

    @route_table_association_enabled.setter
    def route_table_association_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee190249ae3692df7a91728d9192ccccac4fa37445b145b607422b7617b91cb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeTableAssociationEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="routeTablePropagationEnabled")
    def route_table_propagation_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeTablePropagationEnabled: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeTablePropagationEnabled"))

    @route_table_propagation_enabled.setter
    def route_table_propagation_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__923c504834895086fdbb113d21dd95e5d0535a15b262733e56b4c36b06b59a02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeTablePropagationEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterAttachmentDescription")
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterAttachmentDescription"))

    @transit_router_attachment_description.setter
    def transit_router_attachment_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__296e6cf55be22f9ea49ec8e9ab1cea3f0399f2fb7ed8e890f35e866c66523472)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterAttachmentDescription", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterAttachmentName")
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterAttachmentName"))

    @transit_router_attachment_name.setter
    def transit_router_attachment_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9cdace4251d5908382c115ca4199f5154a990ad8d422f5ec03b3561a26aef82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterAttachmentName", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48aa6c1d6f0ec0d94a6743a28e7e3f64df064cbe6e138736d0bec7f41ca82ef8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcOwnerId")
    def vpc_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcOwnerId: VpcOwnerId
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcOwnerId"))

    @vpc_owner_id.setter
    def vpc_owner_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a538c47d890acc5ed9da6f9150c67851fe935bc258e21312917da431e711efc4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcOwnerId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment.ZoneMappingsProperty",
        jsii_struct_bases=[],
        name_mapping={"v_switch_id": "vSwitchId", "zone_id": "zoneId"},
    )
    class ZoneMappingsProperty:
        def __init__(
            self,
            *,
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param v_switch_id: 
            :param zone_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__70c32296ce6f263313d4670891ba779a3fa3185ef0f292e06fddaa455f9d7d69)
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "v_switch_id": v_switch_id,
                "zone_id": zone_id,
            }

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: VSwitchId
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: zoneId: ZoneId
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ZoneMappingsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "zone_mappings": "zoneMappings",
        "auto_create_vpc_route": "autoCreateVpcRoute",
        "cen_id": "cenId",
        "charge_type": "chargeType",
        "deletion_force": "deletionForce",
        "route_table_association_enabled": "routeTableAssociationEnabled",
        "route_table_propagation_enabled": "routeTablePropagationEnabled",
        "transit_router_attachment_description": "transitRouterAttachmentDescription",
        "transit_router_attachment_name": "transitRouterAttachmentName",
        "transit_router_id": "transitRouterId",
        "vpc_owner_id": "vpcOwnerId",
    },
)
class RosTransitRouterVpcAttachmentProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTransitRouterVpcAttachment.ZoneMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        auto_create_vpc_route: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_table_association_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_table_propagation_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterVpcAttachment``.

        :param vpc_id: 
        :param zone_mappings: 
        :param auto_create_vpc_route: 
        :param cen_id: 
        :param charge_type: 
        :param deletion_force: 
        :param route_table_association_enabled: 
        :param route_table_propagation_enabled: 
        :param transit_router_attachment_description: 
        :param transit_router_attachment_name: 
        :param transit_router_id: 
        :param vpc_owner_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b31e6d87c0cd00661402de8f2ae549e704108dcd2200bc61653476d3e56ba98)
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument zone_mappings", value=zone_mappings, expected_type=type_hints["zone_mappings"])
            check_type(argname="argument auto_create_vpc_route", value=auto_create_vpc_route, expected_type=type_hints["auto_create_vpc_route"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument route_table_association_enabled", value=route_table_association_enabled, expected_type=type_hints["route_table_association_enabled"])
            check_type(argname="argument route_table_propagation_enabled", value=route_table_propagation_enabled, expected_type=type_hints["route_table_propagation_enabled"])
            check_type(argname="argument transit_router_attachment_description", value=transit_router_attachment_description, expected_type=type_hints["transit_router_attachment_description"])
            check_type(argname="argument transit_router_attachment_name", value=transit_router_attachment_name, expected_type=type_hints["transit_router_attachment_name"])
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
            check_type(argname="argument vpc_owner_id", value=vpc_owner_id, expected_type=type_hints["vpc_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vpc_id": vpc_id,
            "zone_mappings": zone_mappings,
        }
        if auto_create_vpc_route is not None:
            self._values["auto_create_vpc_route"] = auto_create_vpc_route
        if cen_id is not None:
            self._values["cen_id"] = cen_id
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if route_table_association_enabled is not None:
            self._values["route_table_association_enabled"] = route_table_association_enabled
        if route_table_propagation_enabled is not None:
            self._values["route_table_propagation_enabled"] = route_table_propagation_enabled
        if transit_router_attachment_description is not None:
            self._values["transit_router_attachment_description"] = transit_router_attachment_description
        if transit_router_attachment_name is not None:
            self._values["transit_router_attachment_name"] = transit_router_attachment_name
        if transit_router_id is not None:
            self._values["transit_router_id"] = transit_router_id
        if vpc_owner_id is not None:
            self._values["vpc_owner_id"] = vpc_owner_id

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: VpcId
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]]:
        '''
        :Property: zoneMappings: ZoneMappingss
        '''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]], result)

    @builtins.property
    def auto_create_vpc_route(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoCreateVpcRoute: undefined
        '''
        result = self._values.get("auto_create_vpc_route")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType:
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_table_association_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeTableAssociationEnabled: undefined
        '''
        result = self._values.get("route_table_association_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_table_propagation_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeTablePropagationEnabled: undefined
        '''
        result = self._values.get("route_table_propagation_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcOwnerId: VpcOwnerId
        '''
        result = self._values.get("vpc_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterVpcAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RouteEntry(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RouteEntry",
):
    '''A ROS resource type:  ``ALIYUN::CEN::RouteEntry``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RouteEntryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::RouteEntry``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__010c0078047d57379ca276c77f5dc83dda63f2d3c6d0d1ad3626cc3292035ce3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.RouteEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "child_instance_id": "childInstanceId",
        "child_instance_region_id": "childInstanceRegionId",
        "child_instance_route_table_id": "childInstanceRouteTableId",
        "child_instance_type": "childInstanceType",
        "destination_cidr_block": "destinationCidrBlock",
    },
)
class RouteEntryProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        child_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::RouteEntry``.

        :param cen_id: Property cenId: The ID of the CEN instance where the route entry is published.
        :param child_instance_id: Property childInstanceId: The ID of the attached network (VPC or VBR).
        :param child_instance_region_id: Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        :param child_instance_route_table_id: Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
        :param child_instance_type: Property childInstanceType: The type of the network, value: VPC VBR.
        :param destination_cidr_block: Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e33c9cb8acc5a7373dc230d16295b8adbaff67f0dd5ea4b3f0600aaa34539a3)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument child_instance_id", value=child_instance_id, expected_type=type_hints["child_instance_id"])
            check_type(argname="argument child_instance_region_id", value=child_instance_region_id, expected_type=type_hints["child_instance_region_id"])
            check_type(argname="argument child_instance_route_table_id", value=child_instance_route_table_id, expected_type=type_hints["child_instance_route_table_id"])
            check_type(argname="argument child_instance_type", value=child_instance_type, expected_type=type_hints["child_instance_type"])
            check_type(argname="argument destination_cidr_block", value=destination_cidr_block, expected_type=type_hints["destination_cidr_block"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_route_table_id": child_instance_route_table_id,
            "child_instance_type": child_instance_type,
            "destination_cidr_block": destination_cidr_block,
        }

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the CEN instance where the route entry is published.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property childInstanceId: The ID of the attached network (VPC or VBR).'''
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.'''
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property childInstanceRouteTableId: The route table of the attached VBR or VPC.'''
        result = self._values.get("child_instance_route_table_id")
        assert result is not None, "Required property 'child_instance_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property childInstanceType: The type of the network, value: VPC VBR.'''
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destinationCidrBlock: The destination CIDR block of the route entry to publish.'''
        result = self._values.get("destination_cidr_block")
        assert result is not None, "Required property 'destination_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouter(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouter",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouter``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TransitRouterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouter``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__958a1a1242cf61cf141f56c581c0e105e0149fa05e8fdc9dd58ab0afa78e1099)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AliUid: AliUid.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAliUid"))

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CenId: CenId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrSystemTransitRouterRouteTableId")
    def attr_system_transit_router_route_table_id(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSystemTransitRouterRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterDescription")
    def attr_transit_router_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterDescription: TransitRouterDescription.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterId: TransitRouterId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterName")
    def attr_transit_router_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterName: TransitRouterName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterName"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Type: Type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))


class TransitRouterPeerAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterPeerAttachment",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterPeerAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TransitRouterPeerAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterPeerAttachment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dfb9f4f37613f5188eae40ba81b48dbd089411da43f71266dcaf3c8bcef26b2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAutoPublishRouteEnabled")
    def attr_auto_publish_route_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoPublishRouteEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Bandwidth: Bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackageId")
    def attr_cen_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CenBandwidthPackageId: BandwidthPackageId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenBandwidthPackageId"))

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CenId: CenId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClientToken: ClientToken.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property
    @jsii.member(jsii_name="attrGeographicSpanId")
    def attr_geographic_span_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GeographicSpanId: GeographicSpanId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGeographicSpanId"))

    @builtins.property
    @jsii.member(jsii_name="attrPeerTransitRouterId")
    def attr_peer_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PeerTransitRouterId: PeerTransitRouterId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeerTransitRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrPeerTransitRouterOwnerId")
    def attr_peer_transit_router_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PeerTransitRouterOwnerId: PeerTransitRouterOwnerId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeerTransitRouterOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrPeerTransitRouterRegionId")
    def attr_peer_transit_router_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PeerTransitRouterRegionId: PeerTransitRouterRegionId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeerTransitRouterRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceType: ResourceType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterId: TransitRouterId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterPeerAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "peer_transit_router_id": "peerTransitRouterId",
        "auto_publish_route_enabled": "autoPublishRouteEnabled",
        "bandwidth": "bandwidth",
        "cen_bandwidth_package_id": "cenBandwidthPackageId",
        "cen_id": "cenId",
        "peer_transit_router_region_id": "peerTransitRouterRegionId",
        "transit_router_attachment_description": "transitRouterAttachmentDescription",
        "transit_router_attachment_name": "transitRouterAttachmentName",
        "transit_router_id": "transitRouterId",
    },
)
class TransitRouterPeerAttachmentProps:
    def __init__(
        self,
        *,
        peer_transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        peer_transit_router_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterPeerAttachment``.

        :param peer_transit_router_id: Property peerTransitRouterId: PeerTransitRouterId.
        :param auto_publish_route_enabled: Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
        :param bandwidth: Property bandwidth: Bandwidth.
        :param cen_bandwidth_package_id: Property cenBandwidthPackageId: BandwidthPackageId.
        :param cen_id: Property cenId: CenId.
        :param peer_transit_router_region_id: Property peerTransitRouterRegionId: PeerTransitRouterRegionId.
        :param transit_router_attachment_description: Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
        :param transit_router_attachment_name: Property transitRouterAttachmentName: TransitRouterAttachmentName.
        :param transit_router_id: Property transitRouterId: TransitRouterId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f271f4b0d9fe0a7cfd8abdf42e57c01876be4c3e6e0cb35ad8b3479506d4727)
            check_type(argname="argument peer_transit_router_id", value=peer_transit_router_id, expected_type=type_hints["peer_transit_router_id"])
            check_type(argname="argument auto_publish_route_enabled", value=auto_publish_route_enabled, expected_type=type_hints["auto_publish_route_enabled"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument cen_bandwidth_package_id", value=cen_bandwidth_package_id, expected_type=type_hints["cen_bandwidth_package_id"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument peer_transit_router_region_id", value=peer_transit_router_region_id, expected_type=type_hints["peer_transit_router_region_id"])
            check_type(argname="argument transit_router_attachment_description", value=transit_router_attachment_description, expected_type=type_hints["transit_router_attachment_description"])
            check_type(argname="argument transit_router_attachment_name", value=transit_router_attachment_name, expected_type=type_hints["transit_router_attachment_name"])
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "peer_transit_router_id": peer_transit_router_id,
        }
        if auto_publish_route_enabled is not None:
            self._values["auto_publish_route_enabled"] = auto_publish_route_enabled
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if cen_bandwidth_package_id is not None:
            self._values["cen_bandwidth_package_id"] = cen_bandwidth_package_id
        if cen_id is not None:
            self._values["cen_id"] = cen_id
        if peer_transit_router_region_id is not None:
            self._values["peer_transit_router_region_id"] = peer_transit_router_region_id
        if transit_router_attachment_description is not None:
            self._values["transit_router_attachment_description"] = transit_router_attachment_description
        if transit_router_attachment_name is not None:
            self._values["transit_router_attachment_name"] = transit_router_attachment_name
        if transit_router_id is not None:
            self._values["transit_router_id"] = transit_router_id

    @builtins.property
    def peer_transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property peerTransitRouterId: PeerTransitRouterId.'''
        result = self._values.get("peer_transit_router_id")
        assert result is not None, "Required property 'peer_transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPublishRouteEnabled: AutoPublishRouteEnabled.'''
        result = self._values.get("auto_publish_route_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidth: Bandwidth.'''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cenBandwidthPackageId: BandwidthPackageId.'''
        result = self._values.get("cen_bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cenId: CenId.'''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def peer_transit_router_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property peerTransitRouterRegionId: PeerTransitRouterRegionId.'''
        result = self._values.get("peer_transit_router_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterAttachmentName: TransitRouterAttachmentName.'''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterId: TransitRouterId.'''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterPeerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "transit_router_description": "transitRouterDescription",
        "transit_router_name": "transitRouterName",
    },
)
class TransitRouterProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouter``.

        :param cen_id: Property cenId: CenId.
        :param transit_router_description: Property transitRouterDescription: TransitRouterDescription.
        :param transit_router_name: Property transitRouterName: TransitRouterName.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa1abdb5d8626db5e6d0948b993ac1554e6fb507f3d1380c8632a4b00a5501e5)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument transit_router_description", value=transit_router_description, expected_type=type_hints["transit_router_description"])
            check_type(argname="argument transit_router_name", value=transit_router_name, expected_type=type_hints["transit_router_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
        }
        if transit_router_description is not None:
            self._values["transit_router_description"] = transit_router_description
        if transit_router_name is not None:
            self._values["transit_router_name"] = transit_router_name

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: CenId.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterDescription: TransitRouterDescription.'''
        result = self._values.get("transit_router_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterName: TransitRouterName.'''
        result = self._values.get("transit_router_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouterRouteEntry(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteEntry",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterRouteEntry``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TransitRouterRouteEntryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteEntry``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7dc07b1ac57426316a8e10fb1e490b681207987a29491f0cfd482137b639dbcf)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryDescription")
    def attr_transit_router_route_entry_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryDestinationCidrBlock")
    def attr_transit_router_route_entry_destination_cidr_block(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryDestinationCidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryId")
    def attr_transit_router_route_entry_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteEntryId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryName")
    def attr_transit_router_route_entry_name(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryName"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryNextHopId")
    def attr_transit_router_route_entry_next_hop_id(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryNextHopId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryNextHopType")
    def attr_transit_router_route_entry_next_hop_type(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryNextHopType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteEntryType")
    def attr_transit_router_route_entry_type(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "transit_router_route_entry_destination_cidr_block": "transitRouterRouteEntryDestinationCidrBlock",
        "transit_router_route_entry_next_hop_type": "transitRouterRouteEntryNextHopType",
        "transit_router_route_table_id": "transitRouterRouteTableId",
        "transit_router_route_entry_description": "transitRouterRouteEntryDescription",
        "transit_router_route_entry_name": "transitRouterRouteEntryName",
        "transit_router_route_entry_next_hop_id": "transitRouterRouteEntryNextHopId",
    },
)
class TransitRouterRouteEntryProps:
    def __init__(
        self,
        *,
        transit_router_route_entry_destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_entry_next_hop_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_entry_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_entry_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_entry_next_hop_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteEntry``.

        :param transit_router_route_entry_destination_cidr_block: Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
        :param transit_router_route_entry_next_hop_type: Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
        :param transit_router_route_table_id: Property transitRouterRouteTableId: TransitRouterRouteTableId.
        :param transit_router_route_entry_description: Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
        :param transit_router_route_entry_name: Property transitRouterRouteEntryName: TransitRouterRouteEntryName.
        :param transit_router_route_entry_next_hop_id: Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd64f2bd0bf39f3d0d3ab70866be666087c86567e6b41b86de3fce8828799fd7)
            check_type(argname="argument transit_router_route_entry_destination_cidr_block", value=transit_router_route_entry_destination_cidr_block, expected_type=type_hints["transit_router_route_entry_destination_cidr_block"])
            check_type(argname="argument transit_router_route_entry_next_hop_type", value=transit_router_route_entry_next_hop_type, expected_type=type_hints["transit_router_route_entry_next_hop_type"])
            check_type(argname="argument transit_router_route_table_id", value=transit_router_route_table_id, expected_type=type_hints["transit_router_route_table_id"])
            check_type(argname="argument transit_router_route_entry_description", value=transit_router_route_entry_description, expected_type=type_hints["transit_router_route_entry_description"])
            check_type(argname="argument transit_router_route_entry_name", value=transit_router_route_entry_name, expected_type=type_hints["transit_router_route_entry_name"])
            check_type(argname="argument transit_router_route_entry_next_hop_id", value=transit_router_route_entry_next_hop_id, expected_type=type_hints["transit_router_route_entry_next_hop_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "transit_router_route_entry_destination_cidr_block": transit_router_route_entry_destination_cidr_block,
            "transit_router_route_entry_next_hop_type": transit_router_route_entry_next_hop_type,
            "transit_router_route_table_id": transit_router_route_table_id,
        }
        if transit_router_route_entry_description is not None:
            self._values["transit_router_route_entry_description"] = transit_router_route_entry_description
        if transit_router_route_entry_name is not None:
            self._values["transit_router_route_entry_name"] = transit_router_route_entry_name
        if transit_router_route_entry_next_hop_id is not None:
            self._values["transit_router_route_entry_next_hop_id"] = transit_router_route_entry_next_hop_id

    @builtins.property
    def transit_router_route_entry_destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.'''
        result = self._values.get("transit_router_route_entry_destination_cidr_block")
        assert result is not None, "Required property 'transit_router_route_entry_destination_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_entry_next_hop_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.'''
        result = self._values.get("transit_router_route_entry_next_hop_type")
        assert result is not None, "Required property 'transit_router_route_entry_next_hop_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterRouteTableId: TransitRouterRouteTableId.'''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_entry_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.'''
        result = self._values.get("transit_router_route_entry_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_route_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterRouteEntryName: TransitRouterRouteEntryName.'''
        result = self._values.get("transit_router_route_entry_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_route_entry_next_hop_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.'''
        result = self._values.get("transit_router_route_entry_next_hop_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterRouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouterRouteTable(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteTable",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterRouteTable``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TransitRouterRouteTableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteTable``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b34a4499bb344e788fa8ef57ee4d77d419a9d9b494d9ab0dcb3078a0fe912ccd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClientToken: ClientToken.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterId: TransitRouterId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableDescription")
    def attr_transit_router_route_table_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableName")
    def attr_transit_router_route_table_name(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteTableName: TransitRouterRouteTableName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableName"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableType")
    def attr_transit_router_route_table_type(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteTableType: TransitRouterRouteTableType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableType"))


class TransitRouterRouteTableAssociation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteTableAssociation",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TransitRouterRouteTableAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b7913d8558e0a65d822a28af176fffa3c2ac70a2deea5adbae68d9d06395106)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceId: ResourceId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceType: ResourceType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentId: TransitRouterAttachmentId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteTableAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "transit_router_attachment_id": "transitRouterAttachmentId",
        "transit_router_route_table_id": "transitRouterRouteTableId",
    },
)
class TransitRouterRouteTableAssociationProps:
    def __init__(
        self,
        *,
        transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.

        :param transit_router_attachment_id: Property transitRouterAttachmentId: TransitRouterAttachmentId.
        :param transit_router_route_table_id: Property transitRouterRouteTableId: TransitRouterRouteTableId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8246d1641842e81eb0c5c6b3cd9b9ac9dbdde73e562f39b816a4585f1b3edb0)
            check_type(argname="argument transit_router_attachment_id", value=transit_router_attachment_id, expected_type=type_hints["transit_router_attachment_id"])
            check_type(argname="argument transit_router_route_table_id", value=transit_router_route_table_id, expected_type=type_hints["transit_router_route_table_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "transit_router_attachment_id": transit_router_attachment_id,
            "transit_router_route_table_id": transit_router_route_table_id,
        }

    @builtins.property
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterAttachmentId: TransitRouterAttachmentId.'''
        result = self._values.get("transit_router_attachment_id")
        assert result is not None, "Required property 'transit_router_attachment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterRouteTableId: TransitRouterRouteTableId.'''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterRouteTableAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouterRouteTablePropagation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteTablePropagation",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TransitRouterRouteTablePropagationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce127f608706821b53b50b2bb4e4394d1885292a4747422c04c88826da4da9f4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceId: ResourceId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceType: ResourceType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentId: TransitRouterAttachmentId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteTablePropagationProps",
    jsii_struct_bases=[],
    name_mapping={
        "transit_router_attachment_id": "transitRouterAttachmentId",
        "transit_router_route_table_id": "transitRouterRouteTableId",
    },
)
class TransitRouterRouteTablePropagationProps:
    def __init__(
        self,
        *,
        transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.

        :param transit_router_attachment_id: Property transitRouterAttachmentId: TransitRouterAttachmentId.
        :param transit_router_route_table_id: Property transitRouterRouteTableId: TransitRouterRouteTableId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d90a0b6ba3546d351cfdfa255fe90e387d7a301d6b3798e92bcb6836e3816b3e)
            check_type(argname="argument transit_router_attachment_id", value=transit_router_attachment_id, expected_type=type_hints["transit_router_attachment_id"])
            check_type(argname="argument transit_router_route_table_id", value=transit_router_route_table_id, expected_type=type_hints["transit_router_route_table_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "transit_router_attachment_id": transit_router_attachment_id,
            "transit_router_route_table_id": transit_router_route_table_id,
        }

    @builtins.property
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterAttachmentId: TransitRouterAttachmentId.'''
        result = self._values.get("transit_router_attachment_id")
        assert result is not None, "Required property 'transit_router_attachment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterRouteTableId: TransitRouterRouteTableId.'''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterRouteTablePropagationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "transit_router_id": "transitRouterId",
        "transit_router_route_table_description": "transitRouterRouteTableDescription",
        "transit_router_route_table_name": "transitRouterRouteTableName",
    },
)
class TransitRouterRouteTableProps:
    def __init__(
        self,
        *,
        transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_route_table_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTable``.

        :param transit_router_id: Property transitRouterId: TransitRouterId.
        :param transit_router_route_table_description: Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription.
        :param transit_router_route_table_name: Property transitRouterRouteTableName: TransitRouterRouteTableName.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__516be6b9dc6256806a5827a06ca4be02cabfab81617fc9e17cc7f111ed18a6af)
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
            check_type(argname="argument transit_router_route_table_description", value=transit_router_route_table_description, expected_type=type_hints["transit_router_route_table_description"])
            check_type(argname="argument transit_router_route_table_name", value=transit_router_route_table_name, expected_type=type_hints["transit_router_route_table_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "transit_router_id": transit_router_id,
        }
        if transit_router_route_table_description is not None:
            self._values["transit_router_route_table_description"] = transit_router_route_table_description
        if transit_router_route_table_name is not None:
            self._values["transit_router_route_table_name"] = transit_router_route_table_name

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterId: TransitRouterId.'''
        result = self._values.get("transit_router_id")
        assert result is not None, "Required property 'transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_route_table_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription.'''
        result = self._values.get("transit_router_route_table_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterRouteTableName: TransitRouterRouteTableName.'''
        result = self._values.get("transit_router_route_table_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterRouteTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouterVbrAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterVbrAttachment",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterVbrAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TransitRouterVbrAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterVbrAttachment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f8e87583bded74440551ecddd935c7ba42873341e630b09555a5b9d72f7de4f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAutoPublishRouteEnabled")
    def attr_auto_publish_route_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoPublishRouteEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CenId: CenId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClientToken: ClientToken.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceType: ResourceType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterId: TransitRouterId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrVbrId")
    def attr_vbr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VbrId: VbrId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVbrId"))

    @builtins.property
    @jsii.member(jsii_name="attrVbrOwnerId")
    def attr_vbr_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VbrOwnerId: VbrOwnerId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVbrOwnerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterVbrAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "vbr_id": "vbrId",
        "auto_publish_route_enabled": "autoPublishRouteEnabled",
        "cen_id": "cenId",
        "transit_router_attachment_description": "transitRouterAttachmentDescription",
        "transit_router_attachment_name": "transitRouterAttachmentName",
        "transit_router_id": "transitRouterId",
        "vbr_owner_id": "vbrOwnerId",
    },
)
class TransitRouterVbrAttachmentProps:
    def __init__(
        self,
        *,
        vbr_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vbr_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterVbrAttachment``.

        :param vbr_id: Property vbrId: VbrId.
        :param auto_publish_route_enabled: Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
        :param cen_id: Property cenId: CenId.
        :param transit_router_attachment_description: Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
        :param transit_router_attachment_name: Property transitRouterAttachmentName: TransitRouterAttachmentName.
        :param transit_router_id: Property transitRouterId: TransitRouterId.
        :param vbr_owner_id: Property vbrOwnerId: VbrOwnerId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28f2266c81c67b203e855f741b12061c83689ed22ac9a1a6d9131607aeeaeca7)
            check_type(argname="argument vbr_id", value=vbr_id, expected_type=type_hints["vbr_id"])
            check_type(argname="argument auto_publish_route_enabled", value=auto_publish_route_enabled, expected_type=type_hints["auto_publish_route_enabled"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument transit_router_attachment_description", value=transit_router_attachment_description, expected_type=type_hints["transit_router_attachment_description"])
            check_type(argname="argument transit_router_attachment_name", value=transit_router_attachment_name, expected_type=type_hints["transit_router_attachment_name"])
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
            check_type(argname="argument vbr_owner_id", value=vbr_owner_id, expected_type=type_hints["vbr_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vbr_id": vbr_id,
        }
        if auto_publish_route_enabled is not None:
            self._values["auto_publish_route_enabled"] = auto_publish_route_enabled
        if cen_id is not None:
            self._values["cen_id"] = cen_id
        if transit_router_attachment_description is not None:
            self._values["transit_router_attachment_description"] = transit_router_attachment_description
        if transit_router_attachment_name is not None:
            self._values["transit_router_attachment_name"] = transit_router_attachment_name
        if transit_router_id is not None:
            self._values["transit_router_id"] = transit_router_id
        if vbr_owner_id is not None:
            self._values["vbr_owner_id"] = vbr_owner_id

    @builtins.property
    def vbr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vbrId: VbrId.'''
        result = self._values.get("vbr_id")
        assert result is not None, "Required property 'vbr_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPublishRouteEnabled: AutoPublishRouteEnabled.'''
        result = self._values.get("auto_publish_route_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cenId: CenId.'''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterAttachmentName: TransitRouterAttachmentName.'''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterId: TransitRouterId.'''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vbr_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vbrOwnerId: VbrOwnerId.'''
        result = self._values.get("vbr_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterVbrAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouterVpcAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterVpcAttachment",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterVpcAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TransitRouterVpcAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterVpcAttachment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__520c55375ececd6b893b1e376846ae2768ffb59dd4797141faa34bcf2bd008cc)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CenId: CenId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClientToken: ClientToken.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceType: ResourceType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TransitRouterId: TransitRouterId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: VpcId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcOwnerId")
    def attr_vpc_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcOwnerId: VpcOwnerId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcOwnerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterVpcAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "zone_mappings": "zoneMappings",
        "auto_create_vpc_route": "autoCreateVpcRoute",
        "cen_id": "cenId",
        "charge_type": "chargeType",
        "deletion_force": "deletionForce",
        "route_table_association_enabled": "routeTableAssociationEnabled",
        "route_table_propagation_enabled": "routeTablePropagationEnabled",
        "transit_router_attachment_description": "transitRouterAttachmentDescription",
        "transit_router_attachment_name": "transitRouterAttachmentName",
        "transit_router_id": "transitRouterId",
        "vpc_owner_id": "vpcOwnerId",
    },
)
class TransitRouterVpcAttachmentProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTransitRouterVpcAttachment.ZoneMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        auto_create_vpc_route: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_table_association_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_table_propagation_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterVpcAttachment``.

        :param vpc_id: Property vpcId: VpcId.
        :param zone_mappings: Property zoneMappings: ZoneMappingss.
        :param auto_create_vpc_route: Property autoCreateVpcRoute: undefined.
        :param cen_id: Property cenId: CenId.
        :param charge_type: Property chargeType:.
        :param deletion_force: Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
        :param route_table_association_enabled: Property routeTableAssociationEnabled: undefined.
        :param route_table_propagation_enabled: Property routeTablePropagationEnabled: undefined.
        :param transit_router_attachment_description: Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
        :param transit_router_attachment_name: Property transitRouterAttachmentName: TransitRouterAttachmentName.
        :param transit_router_id: Property transitRouterId: TransitRouterId.
        :param vpc_owner_id: Property vpcOwnerId: VpcOwnerId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39a27598bacf652e2ec21b11404e4334ba6a10f69970477a5c9dbbe7e03c7064)
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument zone_mappings", value=zone_mappings, expected_type=type_hints["zone_mappings"])
            check_type(argname="argument auto_create_vpc_route", value=auto_create_vpc_route, expected_type=type_hints["auto_create_vpc_route"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument route_table_association_enabled", value=route_table_association_enabled, expected_type=type_hints["route_table_association_enabled"])
            check_type(argname="argument route_table_propagation_enabled", value=route_table_propagation_enabled, expected_type=type_hints["route_table_propagation_enabled"])
            check_type(argname="argument transit_router_attachment_description", value=transit_router_attachment_description, expected_type=type_hints["transit_router_attachment_description"])
            check_type(argname="argument transit_router_attachment_name", value=transit_router_attachment_name, expected_type=type_hints["transit_router_attachment_name"])
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
            check_type(argname="argument vpc_owner_id", value=vpc_owner_id, expected_type=type_hints["vpc_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vpc_id": vpc_id,
            "zone_mappings": zone_mappings,
        }
        if auto_create_vpc_route is not None:
            self._values["auto_create_vpc_route"] = auto_create_vpc_route
        if cen_id is not None:
            self._values["cen_id"] = cen_id
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if route_table_association_enabled is not None:
            self._values["route_table_association_enabled"] = route_table_association_enabled
        if route_table_propagation_enabled is not None:
            self._values["route_table_propagation_enabled"] = route_table_propagation_enabled
        if transit_router_attachment_description is not None:
            self._values["transit_router_attachment_description"] = transit_router_attachment_description
        if transit_router_attachment_name is not None:
            self._values["transit_router_attachment_name"] = transit_router_attachment_name
        if transit_router_id is not None:
            self._values["transit_router_id"] = transit_router_id
        if vpc_owner_id is not None:
            self._values["vpc_owner_id"] = vpc_owner_id

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: VpcId.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]]:
        '''Property zoneMappings: ZoneMappingss.'''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]], result)

    @builtins.property
    def auto_create_vpc_route(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoCreateVpcRoute: undefined.'''
        result = self._values.get("auto_create_vpc_route")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cenId: CenId.'''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType:.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.'''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_table_association_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeTableAssociationEnabled: undefined.'''
        result = self._values.get("route_table_association_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_table_propagation_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeTablePropagationEnabled: undefined.'''
        result = self._values.get("route_table_propagation_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterAttachmentName: TransitRouterAttachmentName.'''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterId: TransitRouterId.'''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcOwnerId: VpcOwnerId.'''
        result = self._values.get("vpc_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterVpcAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "CenBandwidthLimit",
    "CenBandwidthLimitProps",
    "CenBandwidthPackage",
    "CenBandwidthPackageAssociation",
    "CenBandwidthPackageAssociationProps",
    "CenBandwidthPackageProps",
    "CenInstance",
    "CenInstanceAttachment",
    "CenInstanceAttachmentProps",
    "CenInstanceProps",
    "CenRouteMap",
    "CenRouteMapProps",
    "CenRouteService",
    "CenRouteServiceProps",
    "CenVbrHealthCheck",
    "CenVbrHealthCheckProps",
    "ChildInstanceRouteEntryToAttachment",
    "ChildInstanceRouteEntryToAttachmentProps",
    "RosCenBandwidthLimit",
    "RosCenBandwidthLimitProps",
    "RosCenBandwidthPackage",
    "RosCenBandwidthPackageAssociation",
    "RosCenBandwidthPackageAssociationProps",
    "RosCenBandwidthPackageProps",
    "RosCenInstance",
    "RosCenInstanceAttachment",
    "RosCenInstanceAttachmentProps",
    "RosCenInstanceProps",
    "RosCenRouteMap",
    "RosCenRouteMapProps",
    "RosCenRouteService",
    "RosCenRouteServiceProps",
    "RosCenVbrHealthCheck",
    "RosCenVbrHealthCheckProps",
    "RosChildInstanceRouteEntryToAttachment",
    "RosChildInstanceRouteEntryToAttachmentProps",
    "RosRouteEntry",
    "RosRouteEntryProps",
    "RosTransitRouter",
    "RosTransitRouterPeerAttachment",
    "RosTransitRouterPeerAttachmentProps",
    "RosTransitRouterProps",
    "RosTransitRouterRouteEntry",
    "RosTransitRouterRouteEntryProps",
    "RosTransitRouterRouteTable",
    "RosTransitRouterRouteTableAssociation",
    "RosTransitRouterRouteTableAssociationProps",
    "RosTransitRouterRouteTablePropagation",
    "RosTransitRouterRouteTablePropagationProps",
    "RosTransitRouterRouteTableProps",
    "RosTransitRouterVbrAttachment",
    "RosTransitRouterVbrAttachmentProps",
    "RosTransitRouterVpcAttachment",
    "RosTransitRouterVpcAttachmentProps",
    "RouteEntry",
    "RouteEntryProps",
    "TransitRouter",
    "TransitRouterPeerAttachment",
    "TransitRouterPeerAttachmentProps",
    "TransitRouterProps",
    "TransitRouterRouteEntry",
    "TransitRouterRouteEntryProps",
    "TransitRouterRouteTable",
    "TransitRouterRouteTableAssociation",
    "TransitRouterRouteTableAssociationProps",
    "TransitRouterRouteTablePropagation",
    "TransitRouterRouteTablePropagationProps",
    "TransitRouterRouteTableProps",
    "TransitRouterVbrAttachment",
    "TransitRouterVbrAttachmentProps",
    "TransitRouterVpcAttachment",
    "TransitRouterVpcAttachmentProps",
]

publication.publish()

def _typecheckingstub__8337bdc8e41d25637e9d2bc0351aa1f20144af3d7e7e8d4562bb3a438bd02ddf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CenBandwidthLimitProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db1023289557f82c94ce1a97e1e68d9225b1021a66bcb90926b758aadc217413(
    *,
    bandwidth_limit: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    local_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    opposite_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5beff2af37945582c617bd2a89d7f4b2993695d1d14c6942deab82114fbc2d54(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CenBandwidthPackageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b96bb58fff7b53f04d5b76962ea9199a406f14132522fc930aef4da125884202(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CenBandwidthPackageAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b57daf56bf1d08d36ce5538d9168ee48f59887787187f53c96e17b3126b516ea(
    *,
    cen_bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a852db736db051ed2fd481d5b22707baa20cd89666b68c59d5fee4ab3611843e(
    *,
    bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    geographic_region_a_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    geographic_region_b_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_package_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20f4e9d1cb5f9a83bca352af0dc099f302685649577c9b3427ef149c26a43395(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[CenInstanceProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ccb67a3a96ee10afa08d4e3a2666e8d051a9e5ce46037bdd89224aae4a816db(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CenInstanceAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8009717a71cdbcb248871f4c9230a7d34828f748387821c66eecb2efc494ef02(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74c3b2a2a141f4c32075a0d8de9c2066a329bccf4054bd56f84615ce2c798371(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protection_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCenInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b56fd51145278532add9fbc2fa337a7d5a486b0d762cb41c4b581bff304d300(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CenRouteMapProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0465ed403a11d04f58a8ef466e6bf4fe97bf8be19be4ab53f2267d349ce209a(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    map_result: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    transmit_direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    as_path_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cidr_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    community_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    community_operate_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_child_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    destination_cidr_blocks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    destination_instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    destination_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    match_asns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    match_community_set: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    next_priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    operate_community_set: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    preference: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prepend_as_path: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    route_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    source_child_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    source_instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    source_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_region_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    source_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d07302f1f1dac5bfb5d3613d257fb4f18996debb103027fe4c71b0493114f7b1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CenRouteServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d9a6bb6a2b5b9ec87085d63f5c19517acc961553308b2c5ffa01e3a00bdcd34(
    *,
    access_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    conflict_ignore: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17fbef1f60464293ebbb5a05b7d542ea54ba08664134e0d80bc6e597c130e6e0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CenVbrHealthCheckProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef354aad2aa1fb15aa88dbeb9a98e4006526392c758da801d817a79517cbbe22(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    health_check_target_ip: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vbr_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vbr_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_source_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vbr_instance_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a4fff216f80266f7168e4abc033ba217b8826c7df2d76f35053cfe082272c2f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ChildInstanceRouteEntryToAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9113d65ba6f5ceb9cd8928770e7ae2ca96116c653e3df392f18a24e9cbdda8f2(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__994ea21473966a37c3eb593b86ee8dc5555a50bc6e80523e34b0c1b00f4baa8e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenBandwidthLimitProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bea81a8eaf39b58bb572f5223934b13d07a98b7a854758e4f97ca731f6184f8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18181212d6be8acda51a1407a8508705ffcd96173cfd4642afe22a108bf99641(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c9f3a6599aba12e4a9a6756c7e63ece161ec3f79353f2805e61518271d73a5f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51091d6f4d9c7d29446628825a7014ff5578520c6f97af0bcf8987982f1df611(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98b70d52d9f1a5d2089e4c7a9e548b8ff8bb3f11c075494fa2b8251e7fd6c92f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f6dcf29887701ea51382350d168e0a8ab9388a4496e9600c9848eb4f6981238(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3f1fa4604d011161d71f264b0c8a83c89466efb8f16b0dab5f60227759f9361(
    *,
    bandwidth_limit: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    local_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    opposite_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56d44d74b6c50a89527bfde13479de7b60420d81e81bd38dc559cceea6bb05b6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenBandwidthPackageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55fff0c9d91bf29db597a5f122162c36bc0f62ab7a7eedf0cd2574a67b369a5e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d4a631fadc261a4f98b28ebb437edf6abe15483e3890846b010caab99e7dc28(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aaa825c96caac8f5ff373101846d5a35b64b5fc7d167e40b774f4cef232d92a6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3205c66e27ead0d01875059118fe14916e586cce2e2e5ef948dbd3ce5407770e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b74eb44d235e48207fe3136829f5b3ae4003d1b2cd4fd52d21b68e2e0a16f57b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f891fa3aeaa51fe36025db140eb9b7e88256c1dc4e0d2b4316988da0b66890d4(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2fd5acc17f8da77b556848648b4fa7609109116c9db0941ff30d55e8e33577d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__468a438ed3b749e6c7e078f41def166e6ca9f77783f2f231b98f0faa2eeafce7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0ba0d77addd4a1d680dc57b65d3e612d1d485bb5a751dcd4389eca459e56147(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a9b0e5aceb5d02a471b2b2f02f378da0f4e8fce5570f705585b5b997becd21b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__281e3aac4ae87361604897bb1ad9f2400ad995fcc72e6661b75c90ccd63cf879(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f052511f5f1e42034b2905450737da5e5cf45a07fdd72bdba2ed56c3796cc2f1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__859d88d9476f54cb3ebcebe7b4561f3fdb92dda330cf2686a21ca8373639ad7b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c415451207617c1addea7595850c3986b9d537f6917a63d2bddfbf28cef21a14(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ce048fbe4fe24ca550d46f62fc12f530b5af69d43cdee0c11f610cf2e1df6ee(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenBandwidthPackageAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__721e9f864b8e7b1c7cbd5ed4a8b4a2bacf5fc6fcd70363298375355ce99a452c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bf7402dec1749688a1bf80240eed94861413ab3497c0939753778456f03881e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9907248eb8d2b1fb7db1ae81766f917415f2fcfa888e9e60718d86c9014a93d9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb8218f7bab7635fba9f557b263b5f7af42ed8f76966d57e60a442d0a01c5d73(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecafc154daf4d06dac7661a44fd8bc8e0531196a2064c6071d6d01ececa8636b(
    *,
    cen_bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__366283df7d08968d711d31ca6f578495904fb1b2ac53d8f3dce6ef0a72900f37(
    *,
    bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    geographic_region_a_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    geographic_region_b_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_package_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__443e94315a6284f91946772f0344492d7db2f46efe4069e9d17ef2dc62f1c3aa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c70d5d7ed39aec842996d098e77f53e18dd5af71abee8fdf0bba031dc74a9543(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b864c02b3188a5b3d8203b25d89f73ecede8f14acc6322afdc4754ce53835f90(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b17d79b7c3c4870f3ca1aebb4e02125ebe15dbebdc358c2bf30987f2f48aa9ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ac48ad3ace86d2d57c73efa040400477639a9b0d16eb929f768f7508cbd73a4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22bcdd73cd192f63d2d18c7126bb7e1da66fab735f49c4566bf52f4315b80536(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a99dd759a3737c0c1819ae9caf6c3fcec364bc45639b73301f9b483b074b2f33(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f890eb55553ad48aa21a6b7f1b41ad52c30dda98d5399d903ec2108fe35e8b7(
    value: typing.Optional[typing.List[RosCenInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2873545d71db82734698cc65ad33ff7a23a8f5f67ebbdb38326e0594bc55e3d4(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d4267a588da37a2c1cc6dbdd9a775794fdd8ffd802839e972c60a8ffef03a6d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenInstanceAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14c33e286582d4708cd6afe579cdcc39f95e92e977f35be0b287df55a1ef39fa(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e703517d1823abd9c5de51b3ae96e75bb589517607fb20461e744fa3c7296b1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b55454ca7afa4719a72cce2fb62ad7c8099d6a8b1b54e9de764456e978262deb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__974911fc2d6c5a8132c66697aa4b7c73f3e6cf6ff29461603ec2d4fdfeee31bc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__307d0f533545cd70acd690eb8abe00aa1c67ea0750cf4df0b177a5ccdae9383d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41ff2bb9c62a0f7425beca1cf62e832752e5972bb058e8b24c40fd2bfd226de9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c8078f9597aafbc6bc1549be697cd4fa90c1f49bc1caf9179d184243210dc8e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fefce7acb52125a9a90e8e84ba1b09a726dc0556bb9a8b6ce6859ee379c51b5b(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b272693c09563785f64160e35f2303b41e9d875ad62cc4d4843144f63f4def95(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protection_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCenInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1540fac6263b888f749e9ef0f09055c37996721f8fa1501777dc3f499012af5d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenRouteMapProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09f5a466b9adb6a7db99d5b9fbf88450e5732ceff527cdc8e7a222f2996ceb22(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc0d3849033366a7f059ae7b72f67fb438b8e6d24a7fbaec4ca2c1567191ec83(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8d0fb211801db88a4c77774d95e9fd3115a95e1eb4efdbd2b67f49d2ab8aa51(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4983e68794c3f42a1cfe6cae09ef693ac40a48137f73d34e8757bc52e976a16c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2583f68ba32a52a602e87acdef1f49f3107f6e71e7e86dcb88e8ddd908ac208(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25fe8425ef73986e01081f1fa17721e39f2155377c4a0f798e6e9292df4bbf33(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8600f4b3ea35b482e333ffc58c8df443036dbab03eb136e6fdfff124b6db08b4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c435c0a68889e67b8579d95936f1f77d667cbe0ab2236395cfbb03576906a96f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe5956ec948a7aee65b6112f8daf06012c9b4c6bf6abb5ca7ad189650ecc869e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ade31074d452814bc6948d8a30cff3d0e14adc4c4dd1635abe88dd226d0ba612(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8451f66bd13497f2c4825de78f8d8ed00a02493e95fb9961b3f480ab97201b29(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c82cbddc5e419657c0145d2123c7d9b2c957f3ff2bc583fca7465400c4ae3d78(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__205e0eb1d3fe0079f7bb886542e256ceab195ef1758957aa277594cc43cdfa1c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1af2cee621f8d4b1259d9be886464ed7e717a3e2ff82fb6437c24609d5955eb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4973f4fb88135bf517c59451cd9f0ef4bd4dfd6620b09061701a7c886de772c6(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42cfea9a86d2933555523cdc8565f630d6da8e6ebaf0bd74064625a90e25efc4(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27bcb80477741ef995bc62710d33d40df513b424c04ccd3f8f3fa5dc1aaebb57(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd716d7d3ba0f7b4fbf311be7c632181587bd7784fee9b9262b282d25c569b35(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a766b34948416322e605049f79d6f7b89d6542839912da76c3065a153c5741f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0999163d2c247f5c769511932e8c6b40fddba38c4a4acffd133da968dd74c46(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54b8e0476aca246388eb92abef5d57f207bc6fd91219d1b40573534d6bf34660(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bc5de5501006dcec4d8249a3e947e2a65b86e4a556423aa23926803fc040b5e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0ab374da1f07086a66ab0973014721ba415a9d8c75aff7e9d65162e2dc04bed(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9520695a26de47aa343941759192575285f32d89d3b4b28ee64e0927ee14bcc(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a37f0408e91d1fd3b0c2f8639852b35d9c51aa307e4c3de3411f25b80e3c5bdc(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17b44be92952f505ba4c1d1e43a3709e3008f4ee44e31b45c9f34d2b768e14df(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d18611d8da014bfcde0a6ebb510666205d8511a96885da59b8c47362d3ee336(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a09e394066d64a68e9f064ace3b80844be3a9188c2c1a9b802d7c6faa4693b2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d33c7bf2bb037edd95be511e62cdcf258e181dc620f651ac554c8aebf7f57768(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffd579ce0205d56a0fa98a785f1c5a43c0b62630ff742500b028fa17cdccc3f6(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    map_result: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    transmit_direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    as_path_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cidr_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    community_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    community_operate_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_child_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    destination_cidr_blocks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    destination_instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    destination_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    match_asns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    match_community_set: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    next_priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    operate_community_set: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    preference: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prepend_as_path: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    route_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    source_child_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    source_instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    source_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_region_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    source_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ebed3951924105ac5741d09366411266832e23836116a30ba768ec52bd18b7e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenRouteServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__828069bc70b24c46c3c63265863d70d8b316ef96c2a0f5b43334c4b9a2ca80d6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__faee6e81a3711c68dcc3c2fc653c8f4912ab31edf646d01e8dbdd6a8393f22aa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0054ee80725d5d69fbd763ab449a830188280861ef1ed2ee70168778f65cd1b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eac8ef067474362c442f6733bcea051361b11005facb4725814f73410f1f4174(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d503239b31ed41fc0fdfd0f998a712e2fb6d1d67c3403c02afd44fc287368dff(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7bf9d229820b050e71a430999ec208c8f779ef65c4d534049a3e0d9b4317125(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7226f680592395d1de2c6324b5244c2bd53dc36fe4d64c0a40157d8ef51d2cca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5dace5bbfd6f7d045ffd789fb53727e1fc8299b4d31c22d28c77c3f44f744a07(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c3e3a5ad09f008f793af8235158fe3a47c519f19aa4d5ce8b003fdf1f17d3cd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eee51860e05fa499e6b4762f2c7690c859d219a8a78517f176f9efaa39b65c0f(
    *,
    access_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    conflict_ignore: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d60c79bde7822ea9d5c522725c8edc7236259f6d20dec9900c43945c08bfabcd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenVbrHealthCheckProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4052c75abb2b64695215ef8d7ab8c05cd7d63e79fcc597191927705167fbc78(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5618cb7ac85915e847aebfc5de1e9b0c8d0e582f057ba97cac1ac4af69995d08(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b00b297d7f44bfd2f8edd1891dc8f2e9c3ebf19dc3b5c62f92f1e592286c9f13(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca4957727238b4f6f01955c2fb5d9c62c284669a42ded5b0c0ece9b22e08b72d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccae7d8a74d1d14c12cd5d301b1f2cd9943ef9a6ad1ae2a35ca1828f378efbac(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5ec98be1ea405a9a3e8f50df3b8387c86c4a1d4b9ddc1965cba31ab58c63636(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfaf94e3f9f59112a1564ee447395a435122e7d82e4870733c879658d6114553(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e4f7441c6fa8190e3edbca81f89f0d66f8131d8e15edad759c8aa2293c31333(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6813a6c473017024aeb7ee129e61f6ade4bdca036d49eae04f2e7fb845e74615(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4ba0ff45780cfb8c82abffe86cb065ef2a9f156ffdd473037fa9320218acba5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c5644ae3db3baedb45553b786cc903708deaa5e759e17059665f1798902dd3f(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    health_check_target_ip: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vbr_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vbr_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_source_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vbr_instance_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dcd3d8a77c4258f725c4c5f225ba1b40506a45e7261eb1498376d7416a4efab(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosChildInstanceRouteEntryToAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e151daff33824ccf8d94ba4a7176c93e80cf22356ddea374a6bf1fc99e53f03e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58a694a33447c76ac4db9efd185add07a4ebd001799d854a8789f3bea042e525(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35d3efbbbffaf9d052e9d81d93f108c908a9d037ed3e4c499006fb47e7f14fc1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9f5747f78398810640b9c7d2305cae2a40cb52583fe819766e16119bc4b2607(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4950c9ecdd6b479e13e2f991ff7fae178ddf8798ffeb707c456ce28dac73867(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b41a01e68cc53890ed87bc8944a3bf17c678d86f2a319d1f8170880057923603(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a16c88152b1546c20f12d0ced1f1bc39424dcea1fe8435866995f4775a8d458(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d745136fcffdcce36c96005dc682ae623c4d74f334065a63b2b423f838a4f4f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRouteEntryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9548e1df303977bc2aefaf20889878aaa19dfc548de226c51da4f08feab461c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__314c50cde76b95f171835ba744224e49512185f374dab9d32062d94da69018b9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cacac60a8269f9530a8588422dec8c34dc34ed3a6b5469f58025d2163bfcc1fa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba5179ee03649e2c02c6d918ab3b8edcee4faa9b3d5275d6ab0a92cd3df61506(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56e2b99700e30c341e9059964fddccfc26481b54b82880ac954e098ca80306f3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7927605c622f6e6045aac98b16de1df2f0f09038ab8001768983bd44c21f5b7c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3b0efe0e6e5b1f6cda0d95be99fe79abe282d3fe2b7673ae27397340b26d2a8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88519a359aa5bbca70f605a1df9f3d1b814549ceeb956a1ec851fc389b4a5152(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eab3bff1b638a144c7179dbf53455b314ec8f802beb1d44bb52683be655b519c(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f10690bdaa7125b92ea0ece9f3883e03ee68ac618f5c2301bafd18933087d67c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTransitRouterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5c8f426debc01edbc9b6c7ad2d865eec79cd7f1965b8a918a11d9dc1f77ae37(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__751fabe2845dc1ac5e2cb11b6507e8233769799e1bb22755ce439c98ff5fa343(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5982259195aa467491d913cac0a370b47042ae92c7a4822b4911310b7dcde916(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fae2521d2e4d871ba2d907fd734c60ee4b4815b3fc610cfa9004aa95087f0add(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__312a6738738e20f5cad6ebd4e9f1b7c5880fa28ebd0470c2a36302add0bf387a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c0f15dad7b84f9e1aa2d8ca88e9ded9a53380910a6d3456d304f4f01d2e3325(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTransitRouterPeerAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2af7a54c81138b5f5451e0de8a615eb7631be5bc9b595cf560618b475152c5e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__619e38b34b1e554ef8273bf72b297306898b8d652f97a4311520dbdeea6e5526(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60d464b1578bfb3cc76f5e665d094766e6b082cd3259bc25a77e275222206168(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a6eaeabfb76aa50bb788a596c5a15755aa9f006e819a3aab977136f1b283ef0(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56364dc14649e1bc534d2011b85410b92a8ddcdf12ed25ae2e9ac1d3eb1d7da6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6806ccafc1160fe3abdfb5858c9f25acfd9f7e1fa24e488d783cd2bdce18ed4a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89c74c529def7f4c15d12ff3797ca9b0b080083d80394e9c509e413d98d4cfc8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28100e15740af4886095ae0d27c615215d39011b8f8afbd9363525fec17da5a5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca8e29cc7c76c7854244028962c954a66fc4bbeee51564e8a07e7657963d9cce(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d18091d0db46d4c05b03368d941f634c7988bc92b7cb63858c49cd49e83b4472(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fbc000ce367c793cbb08944a0991496d412ee91b9dfeecf2201c559ddcf9483(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7963e6f4a34e0c35a77fee6b73317e44f49e3341c3aec80d1dd4c72e4c584d4(
    *,
    peer_transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    peer_transit_router_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ed2245dde7c6c0df408472f07d7fdd74c8558bee8b6ed8afb1880d28565f72c(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__397177d47830bf83ab87a32416484faba22c7c9a8c78b9ee0976501133a4fcf7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTransitRouterRouteEntryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f441459024d2e58780d4fc7ace3f6d2c26ea36bad9654229101b9b4c3ff0b6a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__837b3d9bb67be193ed8e3951cbff7c7d88371d3f64cd33d4a0d09f5fe05986fe(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b78b3d40c9dd8d1be59102bda7fa0584ac660ce125abd715165808b2fc6191c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44c41c3ce45c2e15f2a088f9ee08b969010199a1b51a10e7830df21c60470740(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdf06cc2511d8d37c926d0c0f3e3e12c30235ca8ac5f12f40ecd508cf58ee477(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27bb5794ad89f187ae3182614f8da1ae90489a3ef379876c3a4bed7ce05385ea(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2eb7def64403cd8cb9d83f9ac291d6908573bcfa85afd0d7d2e07b87c771d187(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3e7f989465954ab1ddd87acb946d1c97b7108b826153b50a055d2988a534c60(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99288ce5e9a39e555d55b8e2187c68a66a970596af2b362d4c8195bd921421cf(
    *,
    transit_router_route_entry_destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_entry_next_hop_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_entry_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_entry_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_entry_next_hop_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f84da8f7a52a7022afffd94a0c1fedc17218c0d5e95e1a4a8ba5aa42223ec45b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTransitRouterRouteTableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbbfbbd320b1070fc6657fcf8da795358809e51769a8320b71d17004ac2efd85(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f9ff66dd72cb74a22815935fd9e2d145bb6c585f13b14a050ab8844787adbe0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d465e365cf17ddf7275dc537cc4f9a3bcd179a2a9dcb0f50362792251d1a3a97(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a5e98fb7babe05968013d9716283d3c0d9da8863b9ba34164c677a2bc8dc4fb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd94b112e3c02c820deeb2f67599be3b83eadffa26d77a9d6b0531626fd3da1f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e1fb30ced4f8efebc89bc5cd328819bfeee665d18610b0a69004acc6d131869(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTransitRouterRouteTableAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8eb722cbf1a7106cfd56466a2597d7891d3b624d2e6c905777393c292e7e65c1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d1b6d5ee1a2795095d3a89e5f9489f84ad5982b55fe90ffc0b18df0f0f9872a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82d75a0a6b8b4a5d9a31eb42c2c22df32cb665f308e41aac97b4be7a23a5b629(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__371ac27c7aca70a6d191a812a8108f3838de649f56dffdcb7c9ff91dbcc8e6a2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8408753bfc3a39991e3c9b65a59da7695399e664912f878453aa3e33d08eeb22(
    *,
    transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__452cf5052acf37a5091fcbf45ec0717a14a541ce21b30f29337c4a27f7896db1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTransitRouterRouteTablePropagationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd7193fc7642f46606cd1936ffc70626be777093eb57cce6e60209ee49227c47(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ddae4ac0ae3d917a987283256808ce973dea89cb200f0c69360402a17d12d91(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19ee82dd2b488fd6cac8468b81e01a67e29a2191fbd67fed431f15657ac1d497(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89909cf57b5f778ff7b3a3a8edc6df91dbe014715938b696b419ef0178b87352(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8329eb535c102195392936e4d3074bd249ba88d8ab85bfb4a7aab57f1cd3aecc(
    *,
    transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7127cd3242ce491bf264ab5be91eb56c090c6bc722bff58e65f99d5859531704(
    *,
    transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_table_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b40b8b6d8844ffcad75c028f3f67efe41ea526acb74b519eddd46d57d24e5fa5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTransitRouterVbrAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b8b7ef89cf628feaf3436de40630ccf09c8737885f6903d88578ed7b5cd84d5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__feb5b1b1580349ec86a4834e4c4b589d8602743214526669375ffbf822a66cd5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72f3b35b028fe858482f612516544f0b9c7b7e8ba8afb1cd6dea53da4d2699a7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0f88e57adc993af692ba89ecec0394b6a8789a8d09cb5e45292b1bb034cdaef(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b13d69480483444b14a5c87a8945d9918586f47ad6fca457f1b97f4d55af53e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adcdc6b2bf7ba06cca75391cbc9a3d6357432a3bb0d1bacf39ac40ff9a088472(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00c236d6207d19bfb5e3f2620e2e51e5da7abf1cf1206d4d2354180edd70442f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd926b7d38931a913687c8aa1105166e3f617ef38bd1c9cffbbee31dfbf58d1a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd9cc9a6975a33b89fa535469a28bd65920d2ccd455ae63ae33e6f373458d912(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__700916dde9b0f44f45e2431973eeefa2626963fcd1c636755938f66e6ae8aea8(
    *,
    vbr_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vbr_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8ed0f9af1ed367fa2cada4ab3cb772cc3d8eb77478ffe4a1aa2b63550c2a3f8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTransitRouterVpcAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a472271b4b70e59942ea6cdf6ba559eab6a60e6e7ca75f8f377cff79ccd09429(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91ef8d398b689104d0c2964a127cefc0de02554c7730817b1302a07de77926e0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d00058e390ce9af9fbec91cabafa9d86076e7919cce85d0d2b180c863a01122e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f239a8d18c60d02be46ec74897536198a298e47b97b3e7a8b148cc27a9a2345(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d7adbd22a8ba159bd9166f321533144fe7b647db6dc5de3b35aa6a89108bb6c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__458914b09bf786611a31446af609983ac64b385136cfcaed0b97945105af301a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__447d22a96d275a1a7a0a658f5255eb59698169e494eca1b9e8d79ec13c4cffd4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b896a8a0fc3ba631090e94b8087b047da446bf0f57e4f1c7b9b7908111d4917e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee190249ae3692df7a91728d9192ccccac4fa37445b145b607422b7617b91cb5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__923c504834895086fdbb113d21dd95e5d0535a15b262733e56b4c36b06b59a02(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__296e6cf55be22f9ea49ec8e9ab1cea3f0399f2fb7ed8e890f35e866c66523472(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9cdace4251d5908382c115ca4199f5154a990ad8d422f5ec03b3561a26aef82(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48aa6c1d6f0ec0d94a6743a28e7e3f64df064cbe6e138736d0bec7f41ca82ef8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a538c47d890acc5ed9da6f9150c67851fe935bc258e21312917da431e711efc4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70c32296ce6f263313d4670891ba779a3fa3185ef0f292e06fddaa455f9d7d69(
    *,
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b31e6d87c0cd00661402de8f2ae549e704108dcd2200bc61653476d3e56ba98(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTransitRouterVpcAttachment.ZoneMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    auto_create_vpc_route: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_table_association_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_table_propagation_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__010c0078047d57379ca276c77f5dc83dda63f2d3c6d0d1ad3626cc3292035ce3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RouteEntryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e33c9cb8acc5a7373dc230d16295b8adbaff67f0dd5ea4b3f0600aaa34539a3(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    child_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__958a1a1242cf61cf141f56c581c0e105e0149fa05e8fdc9dd58ab0afa78e1099(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TransitRouterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dfb9f4f37613f5188eae40ba81b48dbd089411da43f71266dcaf3c8bcef26b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TransitRouterPeerAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f271f4b0d9fe0a7cfd8abdf42e57c01876be4c3e6e0cb35ad8b3479506d4727(
    *,
    peer_transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    peer_transit_router_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa1abdb5d8626db5e6d0948b993ac1554e6fb507f3d1380c8632a4b00a5501e5(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7dc07b1ac57426316a8e10fb1e490b681207987a29491f0cfd482137b639dbcf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TransitRouterRouteEntryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd64f2bd0bf39f3d0d3ab70866be666087c86567e6b41b86de3fce8828799fd7(
    *,
    transit_router_route_entry_destination_cidr_block: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_entry_next_hop_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_entry_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_entry_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_entry_next_hop_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b34a4499bb344e788fa8ef57ee4d77d419a9d9b494d9ab0dcb3078a0fe912ccd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TransitRouterRouteTableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b7913d8558e0a65d822a28af176fffa3c2ac70a2deea5adbae68d9d06395106(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TransitRouterRouteTableAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8246d1641842e81eb0c5c6b3cd9b9ac9dbdde73e562f39b816a4585f1b3edb0(
    *,
    transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce127f608706821b53b50b2bb4e4394d1885292a4747422c04c88826da4da9f4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TransitRouterRouteTablePropagationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d90a0b6ba3546d351cfdfa255fe90e387d7a301d6b3798e92bcb6836e3816b3e(
    *,
    transit_router_attachment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__516be6b9dc6256806a5827a06ca4be02cabfab81617fc9e17cc7f111ed18a6af(
    *,
    transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_route_table_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f8e87583bded74440551ecddd935c7ba42873341e630b09555a5b9d72f7de4f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TransitRouterVbrAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28f2266c81c67b203e855f741b12061c83689ed22ac9a1a6d9131607aeeaeca7(
    *,
    vbr_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vbr_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__520c55375ececd6b893b1e376846ae2768ffb59dd4797141faa34bcf2bd008cc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TransitRouterVpcAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39a27598bacf652e2ec21b11404e4334ba6a10f69970477a5c9dbbe7e03c7064(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTransitRouterVpcAttachment.ZoneMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    auto_create_vpc_route: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_table_association_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_table_propagation_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
