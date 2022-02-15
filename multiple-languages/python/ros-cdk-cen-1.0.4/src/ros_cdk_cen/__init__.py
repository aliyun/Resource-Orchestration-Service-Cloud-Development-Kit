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

from ._jsii import *

import ros_cdk_core


class CenBandwidthLimit(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenBandwidthLimit",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenBandwidthLimit``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenBandwidthLimitProps",
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
        bandwidth_limit: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        local_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        opposite_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthLimit``.

        :param bandwidth_limit: Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        :param cen_id: Property cenId: The ID of the CEN instance.
        :param local_region_id: Property localRegionId: The ID of the local region.
        :param opposite_region_id: Property oppositeRegionId: The ID of the other interconnected region.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth_limit": bandwidth_limit,
            "cen_id": cen_id,
            "local_region_id": local_region_id,
            "opposite_region_id": opposite_region_id,
        }

    @builtins.property
    def bandwidth_limit(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property bandwidthLimit: The bandwidth configured for the interconnected regions communication.

        Minimal value: 1
        '''
        result = self._values.get("bandwidth_limit")
        assert result is not None, "Required property 'bandwidth_limit' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def local_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property localRegionId: The ID of the local region.'''
        result = self._values.get("local_region_id")
        assert result is not None, "Required property 'local_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def opposite_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property oppositeRegionId: The ID of the other interconnected region.'''
        result = self._values.get("opposite_region_id")
        assert result is not None, "Required property 'opposite_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenBandwidthLimitProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CenBandwidthPackage(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenBandwidthPackage",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenBandwidthPackage``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenBandwidthPackageProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenBandwidthPackageId")
    def attr_cen_bandwidth_package_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenBandwidthPackageId: The ID of the bandwidth package.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenBandwidthPackageId"))


class CenBandwidthPackageAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenBandwidthPackageAssociation",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenBandwidthPackageAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenBandwidthPackageAssociationProps",
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
        cen_bandwidth_package_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        :param cen_bandwidth_package_id: Property cenBandwidthPackageId: The ID of the bandwidth package.
        :param cen_id: Property cenId: The ID of the CEN instance.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cen_bandwidth_package_id": cen_bandwidth_package_id,
            "cen_id": cen_id,
        }

    @builtins.property
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenBandwidthPackageId: The ID of the bandwidth package.'''
        result = self._values.get("cen_bandwidth_package_id")
        assert result is not None, "Required property 'cen_bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    },
)
class CenBandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        geographic_region_a_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        geographic_region_b_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        bandwidth_package_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthPackage``.

        :param bandwidth: Property bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
        :param geographic_region_a_id: Property geographicRegionAId: The other area A to connect. Valid value: China | North-America | Asia-Pacific | Europe | Australia
        :param geographic_region_b_id: Property geographicRegionBId: The other area B to connect. Valid value: China | North-America | Asia-Pacific | Europe | Australia
        :param auto_pay: Property autoPay: Whether to automatically pay the bill. Valid value: true false (Default)
        :param auto_renew: Property autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        :param auto_renew_duration: Property autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
        :param bandwidth_package_charge_type: Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
        :param description: Property description: The description of the bandwidth package. The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        :param name: Property name: The name of the bandwidth package. The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        :param period: Property period: The purchase period. The default value is 1.
        :param pricing_cycle: Property pricingCycle: The pricing cycle.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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

    @builtins.property
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property bandwidth: The bandwidth in Mbps of the bandwidth package.

        The bandwidth cannot be less than 2 Mbps.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def geographic_region_a_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property geographicRegionAId: The other area A to connect.

        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        result = self._values.get("geographic_region_a_id")
        assert result is not None, "Required property 'geographic_region_a_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def geographic_region_b_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property geographicRegionBId: The other area B to connect.

        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        result = self._values.get("geographic_region_b_id")
        assert result is not None, "Required property 'geographic_region_b_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Whether to automatically pay the bill.

        Valid value:
        true
        false (Default)
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Indicates whether automatic renewal is enabled.

        Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property autoRenewDuration: Duration of each automatic renewals.

        It takes effect when AutoRenew is true.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth_package_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property bandwidthPackageChargeType: The billing method.

        Valid value: PREPAY, POSTPAY (Default)
        '''
        result = self._values.get("bandwidth_package_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the bandwidth package.

        The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the bandwidth package.

        The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The purchase period.

        The default value is 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: The pricing cycle.'''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CenInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenInstance",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["CenInstanceProps"] = None,
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenId: The ID of the request.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))


class CenInstanceAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenInstanceAttachment",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenInstanceAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenInstanceAttachmentProps",
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
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_owner_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenInstanceAttachment``.

        :param cen_id: Property cenId: The ID of the CEN instance.
        :param child_instance_id: Property childInstanceId: The ID of the network to attach.
        :param child_instance_region_id: Property childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        :param child_instance_type: Property childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        :param child_instance_owner_id: Property childInstanceOwnerId: The account ID to which the network belongs.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_type": child_instance_type,
        }
        if child_instance_owner_id is not None:
            self._values["child_instance_owner_id"] = child_instance_owner_id

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property childInstanceId: The ID of the network to attach.'''
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property childInstanceRegionId: The ID of the region where the network is located.

        The ID of the region where the network is located.
        '''
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property childInstanceType: The type of the network to attach.

        Support VPC, VBR or CCN.
        '''
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property childInstanceOwnerId: The account ID to which the network belongs.'''
        result = self._values.get("child_instance_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
        "tags": "tags",
    },
)
class CenInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        protection_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosCenInstance.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenInstance``.

        :param description: Property description: The description of the instance. The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        :param name: Property name: The name of the instance. The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        :param protection_level: Property protectionLevel: The level of CIDR block overlapping. Set the value to REDUCED. REDUCED indicates that the CIDR blocks can overlap with each other but must not be the same.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if protection_level is not None:
            self._values["protection_level"] = protection_level
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the instance.

        The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the instance.

        The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property protectionLevel: The level of CIDR block overlapping.

        Set the value to REDUCED. REDUCED indicates that the
        CIDR blocks can overlap with each other but must not be the same.
        '''
        result = self._values.get("protection_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenRouteMap",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenRouteMap``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenRouteMapProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteMapId")
    def attr_route_map_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteMapId: The ID of the route map.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteMapId"))


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
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        map_result: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        priority: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        transmit_direction: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        as_path_match_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cidr_match_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        community_match_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        community_operate_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_child_instance_types: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        destination_cidr_blocks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        destination_instance_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        destination_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        destination_route_table_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        match_asns: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        match_community_set: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        next_priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        operate_community_set: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        preference: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        prepend_as_path: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        route_types: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        source_child_instance_types: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        source_instance_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        source_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        source_region_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        source_route_table_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenRegionId: The region where the CEN instance is deployed.

        You can call the DescribeRegions operation to query region IDs.
        '''
        result = self._values.get("cen_region_id")
        assert result is not None, "Required property 'cen_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def map_result(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property mapResult: The route map behavior after all conditions are matched.

        Valid values:
        Permit: allows the routes that are matched.
        Deny: rejects the routes that are matched.
        '''
        result = self._values.get("map_result")
        assert result is not None, "Required property 'map_result' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property priority: The priority of the route map.

        Valid values: 1 to 100 . A lower value indicates a higher priority.
        Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transmit_direction(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property transmitDirection: The direction in which the route map is applied.

        Valid values:
        RegionIn: Routes are advertised to CEN gateways.
        For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
        RegionOut: Routes are advertised from CEN gateways.
        For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
        '''
        result = self._values.get("transmit_direction")
        assert result is not None, "Required property 'transmit_direction' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def as_path_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property asPathMatchMode: Match statements are used to match the AS paths.

        Valid values:
        Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
        Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
        '''
        result = self._values.get("as_path_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cidr_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cidrMatchMode: Match statements are used to match the prefixes.

        Valid values:
        Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
        Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
        '''
        result = self._values.get("cidr_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def community_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property communityMatchMode: Match statements are used to match the Communities.

        Valid values:
        Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
        Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
        '''
        result = self._values.get("community_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def community_operate_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property communityOperateMode: Action statements are used to operate the Communities.

        Valid values:
        Additive: adds.
        Replace: replaces.
        '''
        result = self._values.get("community_operate_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the route map.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property destinationChildInstanceTypes: Match statements are used to match the destination instance types.

        Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        result = self._values.get("destination_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_cidr_blocks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property destinationCidrBlocks: Match statements are used to match the routing prefixes.

        The CIDR format is used. You can enter at most 32 CIDR blocks.
        '''
        result = self._values.get("destination_cidr_blocks")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property destinationInstanceIds: Match statements are used to match the destination instance IDs.

        You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
        Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        result = self._values.get("destination_instance_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements.

        Valid values:
        false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
        true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
        '''
        result = self._values.get("destination_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables.

        You can enter at most 32 route table IDs.
        Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
        '''
        result = self._values.get("destination_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def match_asns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property matchAsns: Match statements are used to match AS paths of the routes.

        An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
        Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
        '''
        result = self._values.get("match_asns")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def match_community_set(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property matchCommunitySet: Match statements are used to match the Communities.

        Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        result = self._values.get("match_community_set")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def next_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property nextPriority: The priority of the next associated route map.

        Valid values: 1 to 100.
        If the priority is not set, no next route map is associated with the current route map.
        If the priority is set to 1, the next route map is associated with the current route map.
        If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
        Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
        '''
        result = self._values.get("next_priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def operate_community_set(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property operateCommunitySet: Action statements are used to operate the Communities.

        Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        result = self._values.get("operate_community_set")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def preference(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property preference: Action statements are used to modify route priorities.

        Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
        '''
        result = self._values.get("preference")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def prepend_as_path(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property prependAsPath: AS paths are attached when regional gateways receive or advertise routes.

        For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
        For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
        For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
        '''
        result = self._values.get("prepend_as_path")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def route_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property routeTypes: Match statements are used to match the route types.

        Valid values:
        System: system routes that are generated by the system.
        Custom: custom routes that are created by users.
        BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
        You can enter multiple types.
        '''
        result = self._values.get("route_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property sourceChildInstanceTypes: Match statements are used to match source instance types of the routes.

        Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        '''
        result = self._values.get("source_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property sourceInstanceIds: Match statements are used to match source instance IDs of the routes.

        You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
        '''
        result = self._values.get("source_instance_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements.

        Valid values:
        false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
        true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
        '''
        result = self._values.get("source_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_region_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property sourceRegionIds: Match statements are used to match source region IDs of the routes.

        You can enter at most 32 region IDs.
        '''
        result = self._values.get("source_region_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property sourceRouteTableIds: Match statements are used to match source route table IDs of the routes.

        You can enter at most 32 route table IDs.
        '''
        result = self._values.get("source_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenRouteMapProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CenRouteService(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenRouteService",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenRouteService``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenRouteServiceProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute Id: The ID of the cloud service.

        It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.CenRouteServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_region_id": "accessRegionId",
        "cen_id": "cenId",
        "host": "host",
        "host_region_id": "hostRegionId",
        "host_vpc_id": "hostVpcId",
        "description": "description",
    },
)
class CenRouteServiceProps:
    def __init__(
        self,
        *,
        access_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenRouteService``.

        :param access_region_id: Property accessRegionId: The region where the cloud service is deployed.
        :param cen_id: Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        :param host: Property host: The domain or IP address of the cloud service.
        :param host_region_id: Property hostRegionId: The region where the cloud service is deployed. You can call the DescribeRegions operation to query region IDs. Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        :param host_vpc_id: Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
        :param description: Property description: The description of the cloud service.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "access_region_id": access_region_id,
            "cen_id": cen_id,
            "host": host,
            "host_region_id": host_region_id,
            "host_vpc_id": host_vpc_id,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def access_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accessRegionId: The region where the cloud service is deployed.'''
        result = self._values.get("access_region_id")
        assert result is not None, "Required property 'access_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property host: The domain or IP address of the cloud service.'''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property hostRegionId: The region where the cloud service is deployed.

        You can call the DescribeRegions operation to query region IDs.
        Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        '''
        result = self._values.get("host_region_id")
        assert result is not None, "Required property 'host_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.'''
        result = self._values.get("host_vpc_id")
        assert result is not None, "Required property 'host_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the cloud service.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenRouteServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CenVbrHealthCheck(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenVbrHealthCheck",
):
    '''A ROS resource type:  ``ALIYUN::CEN::CenVbrHealthCheck``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenVbrHealthCheckProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenId: The ID of the CEN instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(self) -> ros_cdk_core.IResolvable:
        '''Attribute HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.

        Default value: 2. Valid values: 2 to 3.  Unit: second.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHealthCheckSourceIp")
    def attr_health_check_source_ip(self) -> ros_cdk_core.IResolvable:
        '''Attribute HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.

        Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthCheckSourceIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHealthCheckTargetIp")
    def attr_health_check_target_ip(self) -> ros_cdk_core.IResolvable:
        '''Attribute HealthCheckTargetIp: Specifies the destination IP address of the health check.

        The destination IP address is the IP address of the client-facing interface on the VBR instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthCheckTargetIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(self) -> ros_cdk_core.IResolvable:
        '''Attribute HealthyThreshold: Specifies the number of probe packets to be sent during the health check.

        Default value: 8. Valid values: 3 to 8.  Unit: packet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthyThreshold"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrInstanceId")
    def attr_vbr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VbrInstanceId: The ID of the VBR instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrInstanceOwnerId")
    def attr_vbr_instance_owner_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrInstanceOwnerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrInstanceRegionId")
    def attr_vbr_instance_region_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VbrInstanceRegionId: The ID of the region where the VBR instance is deployed.

        You can call the DescribeRegionsoperation to query region IDs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrInstanceRegionId"))


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
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        health_check_target_ip: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vbr_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vbr_instance_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        health_check_interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        health_check_source_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        vbr_instance_owner_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def health_check_target_ip(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property healthCheckTargetIp: Specifies the destination IP address of the health check.

        The destination IP address is the IP address of the client-facing interface on the VBR instance.
        '''
        result = self._values.get("health_check_target_ip")
        assert result is not None, "Required property 'health_check_target_ip' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vbr_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vbrInstanceId: The ID of the VBR instance.'''
        result = self._values.get("vbr_instance_id")
        assert result is not None, "Required property 'vbr_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vbr_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed.

        You can call the DescribeRegionsoperation to query region IDs.
        '''
        result = self._values.get("vbr_instance_region_id")
        assert result is not None, "Required property 'vbr_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.

        Default value: 2. Valid values: 2 to 3.  Unit: second.
        '''
        result = self._values.get("health_check_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.

        Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        '''
        result = self._values.get("health_check_source_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.

        Default value: 8. Valid values: 3 to 8.  Unit: packet.
        '''
        result = self._values.get("healthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vbr_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.'''
        result = self._values.get("vbr_instance_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenVbrHealthCheckProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenBandwidthLimit(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthLimit",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenBandwidthLimit``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenBandwidthLimitProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenBandwidthLimit``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidthLimit")
    def bandwidth_limit(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "bandwidthLimit"))

    @bandwidth_limit.setter
    def bandwidth_limit(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bandwidthLimit", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localRegionId")
    def local_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: localRegionId: The ID of the local region.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "localRegionId"))

    @local_region_id.setter
    def local_region_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "localRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeRegionId")
    def opposite_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: oppositeRegionId: The ID of the other interconnected region.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "oppositeRegionId"))

    @opposite_region_id.setter
    def opposite_region_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        bandwidth_limit: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        local_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        opposite_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthLimit``.

        :param bandwidth_limit: 
        :param cen_id: 
        :param local_region_id: 
        :param opposite_region_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth_limit": bandwidth_limit,
            "cen_id": cen_id,
            "local_region_id": local_region_id,
            "opposite_region_id": opposite_region_id,
        }

    @builtins.property
    def bandwidth_limit(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        '''
        result = self._values.get("bandwidth_limit")
        assert result is not None, "Required property 'bandwidth_limit' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def local_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: localRegionId: The ID of the local region.
        '''
        result = self._values.get("local_region_id")
        assert result is not None, "Required property 'local_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def opposite_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: oppositeRegionId: The ID of the other interconnected region.
        '''
        result = self._values.get("opposite_region_id")
        assert result is not None, "Required property 'opposite_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenBandwidthLimitProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenBandwidthPackage(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthPackage",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenBandwidthPackage``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenBandwidthPackageProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenBandwidthPackage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenBandwidthPackageId")
    def attr_cen_bandwidth_package_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenBandwidthPackageId: The ID of the bandwidth package.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenBandwidthPackageId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="geographicRegionAId")
    def geographic_region_a_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        geographicRegionAId: The other area A to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "geographicRegionAId"))

    @geographic_region_a_id.setter
    def geographic_region_a_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "geographicRegionAId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="geographicRegionBId")
    def geographic_region_b_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        geographicRegionBId: The other area B to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "geographicRegionBId"))

    @geographic_region_b_id.setter
    def geographic_region_b_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "geographicRegionBId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Whether to automatically pay the bill. Valid value:
        true
        false (Default)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenewDuration")
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenewDuration"))

    @auto_renew_duration.setter
    def auto_renew_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenewDuration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidthPackageChargeType")
    def bandwidth_package_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "bandwidthPackageChargeType"))

    @bandwidth_package_charge_type.setter
    def bandwidth_package_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "bandwidthPackageChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the bandwidth package.
        The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the bandwidth package.
        The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The purchase period. The default value is 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: The pricing cycle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)


class RosCenBandwidthPackageAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociation",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenBandwidthPackageAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenBandwidthPackageAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenBandwidthPackageId")
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenBandwidthPackageId: The ID of the bandwidth package.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenBandwidthPackageId"))

    @cen_bandwidth_package_id.setter
    def cen_bandwidth_package_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenBandwidthPackageId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
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
        cen_bandwidth_package_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        :param cen_bandwidth_package_id: 
        :param cen_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cen_bandwidth_package_id": cen_bandwidth_package_id,
            "cen_id": cen_id,
        }

    @builtins.property
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenBandwidthPackageId: The ID of the bandwidth package.
        '''
        result = self._values.get("cen_bandwidth_package_id")
        assert result is not None, "Required property 'cen_bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    },
)
class RosCenBandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        geographic_region_a_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        geographic_region_b_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        bandwidth_package_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        '''
        self._values: typing.Dict[str, typing.Any] = {
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

    @builtins.property
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def geographic_region_a_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        geographicRegionAId: The other area A to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        result = self._values.get("geographic_region_a_id")
        assert result is not None, "Required property 'geographic_region_a_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def geographic_region_b_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        geographicRegionBId: The other area B to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        '''
        result = self._values.get("geographic_region_b_id")
        assert result is not None, "Required property 'geographic_region_b_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Whether to automatically pay the bill. Valid value:
        true
        false (Default)
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth_package_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
        '''
        result = self._values.get("bandwidth_package_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the bandwidth package.
        The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the bandwidth package.
        The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The purchase period. The default value is 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: The pricing cycle.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenInstance",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenInstance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenId: The ID of the request.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the instance.
        The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the instance.
        The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="protectionLevel")
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        protectionLevel: The level of CIDR block overlapping.
        Set the value to REDUCED. REDUCED indicates that the
        CIDR blocks can overlap with each other but must not be the same.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "protectionLevel"))

    @protection_level.setter
    def protection_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "protectionLevel", value)

    @builtins.property # type: ignore[misc]
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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosCenInstanceAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenInstanceAttachment",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenInstanceAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenInstanceAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenInstanceAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="childInstanceId")
    def child_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceId: The ID of the network to attach.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "childInstanceId"))

    @child_instance_id.setter
    def child_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "childInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="childInstanceRegionId")
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "childInstanceRegionId"))

    @child_instance_region_id.setter
    def child_instance_region_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "childInstanceRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="childInstanceType")
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "childInstanceType"))

    @child_instance_type.setter
    def child_instance_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "childInstanceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="childInstanceOwnerId")
    def child_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: childInstanceOwnerId: The account ID to which the network belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "childInstanceOwnerId"))

    @child_instance_owner_id.setter
    def child_instance_owner_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_owner_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenInstanceAttachment``.

        :param cen_id: 
        :param child_instance_id: 
        :param child_instance_region_id: 
        :param child_instance_type: 
        :param child_instance_owner_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_type": child_instance_type,
        }
        if child_instance_owner_id is not None:
            self._values["child_instance_owner_id"] = child_instance_owner_id

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceId: The ID of the network to attach.
        '''
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        '''
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        '''
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: childInstanceOwnerId: The account ID to which the network belongs.
        '''
        result = self._values.get("child_instance_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
        "tags": "tags",
    },
)
class RosCenInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        protection_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosCenInstance.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenInstance``.

        :param description: 
        :param name: 
        :param protection_level: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if protection_level is not None:
            self._values["protection_level"] = protection_level
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the instance.
        The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the instance.
        The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        protectionLevel: The level of CIDR block overlapping.
        Set the value to REDUCED. REDUCED indicates that the
        CIDR blocks can overlap with each other but must not be the same.
        '''
        result = self._values.get("protection_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenRouteMap",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenRouteMap``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenRouteMapProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenRouteMap``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteMapId")
    def attr_route_map_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteMapId: The ID of the route map.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteMapId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenRegionId")
    def cen_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenRegionId: The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenRegionId"))

    @cen_region_id.setter
    def cen_region_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="mapResult")
    def map_result(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        mapResult: The route map behavior after all conditions are matched. Valid values:
        Permit: allows the routes that are matched.
        Deny: rejects the routes that are matched.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "mapResult"))

    @map_result.setter
    def map_result(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "mapResult", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="priority")
    def priority(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        priority: The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority.
        Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "priority", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transmitDirection")
    def transmit_direction(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        transmitDirection: The direction in which the route map is applied. Valid values:
        RegionIn: Routes are advertised to CEN gateways.
        For example, routes are advertised from network instances deployed in the current region or other regions to the gateways deployed in the current region.
        RegionOut: Routes are advertised from CEN gateways.
        For example, routes are advertised from gateways deployed in the current region to network instances or gateways deployed in other regions.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "transmitDirection"))

    @transmit_direction.setter
    def transmit_direction(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "transmitDirection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="asPathMatchMode")
    def as_path_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        asPathMatchMode: Match statements are used to match the AS paths. Valid values:
        Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
        Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "asPathMatchMode"))

    @as_path_match_mode.setter
    def as_path_match_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "asPathMatchMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cidrMatchMode")
    def cidr_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cidrMatchMode: Match statements are used to match the prefixes. Valid values:
        Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
        Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cidrMatchMode"))

    @cidr_match_mode.setter
    def cidr_match_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cidrMatchMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="communityMatchMode")
    def community_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        communityMatchMode: Match statements are used to match the Communities. Valid values:
        Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
        Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "communityMatchMode"))

    @community_match_mode.setter
    def community_match_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "communityMatchMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="communityOperateMode")
    def community_operate_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        communityOperateMode: Action statements are used to operate the Communities. Valid values:
        Additive: adds.
        Replace: replaces.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "communityOperateMode"))

    @community_operate_mode.setter
    def community_operate_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "communityOperateMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the route map.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destinationChildInstanceTypes")
    def destination_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        destinationChildInstanceTypes: Match statements are used to match the destination instance types. Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "destinationChildInstanceTypes"))

    @destination_child_instance_types.setter
    def destination_child_instance_types(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "destinationChildInstanceTypes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destinationCidrBlocks")
    def destination_cidr_blocks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: destinationCidrBlocks: Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "destinationCidrBlocks"))

    @destination_cidr_blocks.setter
    def destination_cidr_blocks(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "destinationCidrBlocks", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destinationInstanceIds")
    def destination_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        destinationInstanceIds: Match statements are used to match the destination instance IDs.
        You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
        Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "destinationInstanceIds"))

    @destination_instance_ids.setter
    def destination_instance_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "destinationInstanceIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destinationInstanceIdsReverseMatch")
    def destination_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. Valid values:
        false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
        true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "destinationInstanceIdsReverseMatch"))

    @destination_instance_ids_reverse_match.setter
    def destination_instance_ids_reverse_match(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "destinationInstanceIdsReverseMatch", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destinationRouteTableIds")
    def destination_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs.
        Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "destinationRouteTableIds"))

    @destination_route_table_ids.setter
    def destination_route_table_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "destinationRouteTableIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="matchAsns")
    def match_asns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        matchAsns: Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
        Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "matchAsns"))

    @match_asns.setter
    def match_asns(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "matchAsns", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="matchCommunitySet")
    def match_community_set(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        matchCommunitySet: Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "matchCommunitySet"))

    @match_community_set.setter
    def match_community_set(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "matchCommunitySet", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="nextPriority")
    def next_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nextPriority: The priority of the next associated route map. Valid values: 1 to 100.
        If the priority is not set, no next route map is associated with the current route map.
        If the priority is set to 1, the next route map is associated with the current route map.
        If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
        Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "nextPriority"))

    @next_priority.setter
    def next_priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "nextPriority", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="operateCommunitySet")
    def operate_community_set(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        operateCommunitySet: Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "operateCommunitySet"))

    @operate_community_set.setter
    def operate_community_set(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "operateCommunitySet", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="preference")
    def preference(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: preference: Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "preference"))

    @preference.setter
    def preference(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "preference", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="prependAsPath")
    def prepend_as_path(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
        For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
        For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
        For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "prependAsPath"))

    @prepend_as_path.setter
    def prepend_as_path(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "prependAsPath", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routeTypes")
    def route_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        routeTypes: Match statements are used to match the route types. Valid values:
        System: system routes that are generated by the system.
        Custom: custom routes that are created by users.
        BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
        You can enter multiple types.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "routeTypes"))

    @route_types.setter
    def route_types(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "routeTypes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceChildInstanceTypes")
    def source_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "sourceChildInstanceTypes"))

    @source_child_instance_types.setter
    def source_child_instance_types(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "sourceChildInstanceTypes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceInstanceIds")
    def source_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
        You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "sourceInstanceIds"))

    @source_instance_ids.setter
    def source_instance_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "sourceInstanceIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceInstanceIdsReverseMatch")
    def source_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. Valid values:
        false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
        true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "sourceInstanceIdsReverseMatch"))

    @source_instance_ids_reverse_match.setter
    def source_instance_ids_reverse_match(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sourceInstanceIdsReverseMatch", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceRegionIds")
    def source_region_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: sourceRegionIds: Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "sourceRegionIds"))

    @source_region_ids.setter
    def source_region_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "sourceRegionIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceRouteTableIds")
    def source_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "sourceRouteTableIds"))

    @source_route_table_ids.setter
    def source_route_table_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
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
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        map_result: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        priority: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        transmit_direction: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        as_path_match_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cidr_match_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        community_match_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        community_operate_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_child_instance_types: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        destination_cidr_blocks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        destination_instance_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        destination_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        destination_route_table_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        match_asns: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        match_community_set: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        next_priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        operate_community_set: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        preference: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        prepend_as_path: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        route_types: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        source_child_instance_types: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        source_instance_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        source_instance_ids_reverse_match: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        source_region_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        source_route_table_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenRegionId: The region where the CEN instance is deployed. You can call the DescribeRegions operation to query region IDs.
        '''
        result = self._values.get("cen_region_id")
        assert result is not None, "Required property 'cen_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def map_result(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        mapResult: The route map behavior after all conditions are matched. Valid values:
        Permit: allows the routes that are matched.
        Deny: rejects the routes that are matched.
        '''
        result = self._values.get("map_result")
        assert result is not None, "Required property 'map_result' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        priority: The priority of the route map. Valid values: 1 to 100 . A lower value indicates a higher priority.
        Note In the same region, for route maps that are applied in the same direction, the priority is unique. When a route map is implemented, the system matches conditions with a route map whose priority number is the smallest. Therefore, make sure that you set priorities for route maps to meet your requirements.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transmit_direction(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def as_path_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        asPathMatchMode: Match statements are used to match the AS paths. Valid values:
        Include: uses fuzzy match. If the AS path in the condition overlaps with the AS path in the route, the match is successful.
        Complete: uses exact match. Only when the AS path in the condition is the same as the AS path in the route, the match is successful.
        '''
        result = self._values.get("as_path_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cidr_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cidrMatchMode: Match statements are used to match the prefixes. Valid values:
        Include: uses fuzzy match. If the routing prefix in the condition contains the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.1.0/24 route.
        Complete: uses exact match. Only when the routing prefix in the condition is the same as the routing prefix of the route, the match is successful.
        For example, the 1.1.0.0/16 policy can match the 1.1.0.0/16 route.
        '''
        result = self._values.get("cidr_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def community_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        communityMatchMode: Match statements are used to match the Communities. Valid values:
        Include: uses fuzzy match. If the Community in the condition overlaps with the Community of the route, the match is successful.
        Complete: uses exact match. Only when the Community in the condition is the same as the Community of the route, the match is successful.
        '''
        result = self._values.get("community_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def community_operate_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        communityOperateMode: Action statements are used to operate the Communities. Valid values:
        Additive: adds.
        Replace: replaces.
        '''
        result = self._values.get("community_operate_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the route map.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        destinationChildInstanceTypes: Match statements are used to match the destination instance types. Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        Note The destination instance types are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        result = self._values.get("destination_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_cidr_blocks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: destinationCidrBlocks: Match statements are used to match the routing prefixes. The CIDR format is used. You can enter at most 32 CIDR blocks.
        '''
        result = self._values.get("destination_cidr_blocks")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        destinationInstanceIds: Match statements are used to match the destination instance IDs.
        You can enter instance IDs of the following types: VPC, VBR, CCN in mainland China, and SAG. You can enter at most 32 instance IDs.
        Note The destination instance IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to instances in the current region.
        '''
        result = self._values.get("destination_instance_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationInstanceIdsReverseMatch: The IDs of destination instances to be advertised do not support match statements. Valid values:
        false(default value): If the ID of the destination instance to be advertised is in the DestinationInstanceIds field, the match is successful.
        true: If the ID of the destination instance to be advertised is not in the DestinationInstanceIds filed, the match is successful.
        '''
        result = self._values.get("destination_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        destinationRouteTableIds: Match statements are used to match the IDs of the destination route tables. You can enter at most 32 route table IDs.
        Note The destination route table IDs are valid only when the route map is applied to scenarios where routes are advertised from gateways in the current region to route tables in the current region.
        '''
        result = self._values.get("destination_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def match_asns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        matchAsns: Match statements are used to match AS paths of the routes. An AS path is a mandatory attribute, which describes the AS number through which a BGP route passes when the BGP route is advertised.
        Only the AS-SEQUENCE parameter is supported. The AS-SET, AS-CONFED-SEQUENCE, and AS-CONFED-SET parameters are not supported. Specifically, only the AS number list is supported. Sets and sub-lists are not supported.
        '''
        result = self._values.get("match_asns")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def match_community_set(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        matchCommunitySet: Match statements are used to match the Communities. Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        result = self._values.get("match_community_set")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def next_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nextPriority: The priority of the next associated route map. Valid values: 1 to 100.
        If the priority is not set, no next route map is associated with the current route map.
        If the priority is set to 1, the next route map is associated with the current route map.
        If the priority is set and the value is not 1, the priority of the associated route map must be higher than that of the current route map.
        Only when the MapResult parameter is set to Permit, the matched routes continue to match the next associated route maps.
        '''
        result = self._values.get("next_priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def operate_community_set(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        operateCommunitySet: Action statements are used to operate the Communities. Valid values: Enter each Community in the format of nn:nn. Valid values of nn: 1 to 65535. You can enter at most 32 Communities. Each Community must comply with RFC 1997. RFC 8092 is not supported.
        Note If the configurations of the Communities are incorrect, routes may not be advertised to the on-premises data center.
        '''
        result = self._values.get("operate_community_set")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def preference(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: preference: Action statements are used to modify route priorities. Valid values: 1 to 100. Default value: 50. A smaller number indicates a higher priority.
        '''
        result = self._values.get("preference")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def prepend_as_path(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        prependAsPath: AS paths are attached when regional gateways receive or advertise routes.
        For route maps that are applied in different directions, the requirements for AS paths to be attached are different:
        For the inbound direction: You must specify the list of source instance IDs and the source region in the condition to be matched. The source region must be the same as the region where the route map is applied.
        For the outbound direction: You must specify the list of destination instance IDs in the condition to be matched.
        '''
        result = self._values.get("prepend_as_path")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def route_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        routeTypes: Match statements are used to match the route types. Valid values:
        System: system routes that are generated by the system.
        Custom: custom routes that are created by users.
        BGP: Border Gateway Protocol (BGP) routes that are advertised to BGP.
        You can enter multiple types.
        '''
        result = self._values.get("route_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        sourceChildInstanceTypes: Match statements are used to match source instance types of the routes. Valid values:
        VPC: VPCs.
        VBR: VBRs.
        CCN: CCN instances in mainland China.
        '''
        result = self._values.get("source_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        sourceInstanceIds: Match statements are used to match source instance IDs of the routes.
        You can enter instance IDs of the following types: virtual private cloud (VPC), virtual border router (VBR), Cloud Connect Network (CCN) in mainland China, Smart Access Gateway (SAG). You can enter at most 32 instance IDs.
        '''
        result = self._values.get("source_instance_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sourceInstanceIdsReverseMatch: The IDs of source instances to be advertised do not support match statements. Valid values:
        false (default value): If the source instance ID is in the SourceInstanceIds field, the match is successful.
        true: If the source instance ID is not in the SourceInstanceIds field, the match is successful.
        '''
        result = self._values.get("source_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_region_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: sourceRegionIds: Match statements are used to match source region IDs of the routes. You can enter at most 32 region IDs.
        '''
        result = self._values.get("source_region_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: sourceRouteTableIds: Match statements are used to match source route table IDs of the routes. You can enter at most 32 route table IDs.
        '''
        result = self._values.get("source_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenRouteMapProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenRouteService(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenRouteService",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenRouteService``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenRouteServiceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenRouteService``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Id: The ID of the cloud service. It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accessRegionId")
    def access_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accessRegionId: The region where the cloud service is deployed.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accessRegionId"))

    @access_region_id.setter
    def access_region_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "accessRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="host")
    def host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: host: The domain or IP address of the cloud service.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "host"))

    @host.setter
    def host(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "host", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="hostRegionId")
    def host_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        hostRegionId: The region where the cloud service is deployed.
        You can call the DescribeRegions operation to query region IDs.
        Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "hostRegionId"))

    @host_region_id.setter
    def host_region_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "hostRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="hostVpcId")
    def host_vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "hostVpcId"))

    @host_vpc_id.setter
    def host_vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "hostVpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the cloud service.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        "description": "description",
    },
)
class RosCenRouteServiceProps:
    def __init__(
        self,
        *,
        access_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenRouteService``.

        :param access_region_id: 
        :param cen_id: 
        :param host: 
        :param host_region_id: 
        :param host_vpc_id: 
        :param description: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "access_region_id": access_region_id,
            "cen_id": cen_id,
            "host": host,
            "host_region_id": host_region_id,
            "host_vpc_id": host_vpc_id,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def access_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accessRegionId: The region where the cloud service is deployed.
        '''
        result = self._values.get("access_region_id")
        assert result is not None, "Required property 'access_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: host: The domain or IP address of the cloud service.
        '''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        hostRegionId: The region where the cloud service is deployed.
        You can call the DescribeRegions operation to query region IDs.
        Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        '''
        result = self._values.get("host_region_id")
        assert result is not None, "Required property 'host_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
        '''
        result = self._values.get("host_vpc_id")
        assert result is not None, "Required property 'host_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the cloud service.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenRouteServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenVbrHealthCheck(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenVbrHealthCheck",
):
    '''A ROS template type:  ``ALIYUN::CEN::CenVbrHealthCheck``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenVbrHealthCheckProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::CenVbrHealthCheck``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenId: The ID of the CEN instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HealthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHealthCheckSourceIp")
    def attr_health_check_source_ip(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HealthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthCheckSourceIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHealthCheckTargetIp")
    def attr_health_check_target_ip(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HealthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthCheckTargetIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HealthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthyThreshold"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrInstanceId")
    def attr_vbr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VbrInstanceId: The ID of the VBR instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrInstanceOwnerId")
    def attr_vbr_instance_owner_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrInstanceOwnerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrInstanceRegionId")
    def attr_vbr_instance_region_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrInstanceRegionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckTargetIp")
    def health_check_target_ip(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "healthCheckTargetIp"))

    @health_check_target_ip.setter
    def health_check_target_ip(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "healthCheckTargetIp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vbrInstanceId")
    def vbr_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vbrInstanceId: The ID of the VBR instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vbrInstanceId"))

    @vbr_instance_id.setter
    def vbr_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vbrInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vbrInstanceRegionId")
    def vbr_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vbrInstanceRegionId"))

    @vbr_instance_region_id.setter
    def vbr_instance_region_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vbrInstanceRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckInterval")
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckInterval"))

    @health_check_interval.setter
    def health_check_interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "healthCheckInterval", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckSourceIp")
    def health_check_source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckSourceIp"))

    @health_check_source_ip.setter
    def health_check_source_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "healthCheckSourceIp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthyThreshold")
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "healthyThreshold"))

    @healthy_threshold.setter
    def healthy_threshold(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "healthyThreshold", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vbrInstanceOwnerId")
    def vbr_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "vbrInstanceOwnerId"))

    @vbr_instance_owner_id.setter
    def vbr_instance_owner_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        health_check_target_ip: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vbr_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vbr_instance_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        health_check_interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        health_check_source_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        vbr_instance_owner_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def health_check_target_ip(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
        '''
        result = self._values.get("health_check_target_ip")
        assert result is not None, "Required property 'health_check_target_ip' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vbr_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vbrInstanceId: The ID of the VBR instance.
        '''
        result = self._values.get("vbr_instance_id")
        assert result is not None, "Required property 'vbr_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vbr_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
        '''
        result = self._values.get("vbr_instance_region_id")
        assert result is not None, "Required property 'vbr_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def health_check_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
        '''
        result = self._values.get("health_check_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        '''
        result = self._values.get("health_check_source_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def healthy_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
        '''
        result = self._values.get("healthy_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vbr_instance_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
        '''
        result = self._values.get("vbr_instance_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenVbrHealthCheckProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRouteEntry(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosRouteEntry",
):
    '''A ROS template type:  ``ALIYUN::CEN::RouteEntry``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRouteEntryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::RouteEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance where the route entry is published.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="childInstanceId")
    def child_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceId: The ID of the attached network (VPC or VBR).
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "childInstanceId"))

    @child_instance_id.setter
    def child_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "childInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="childInstanceRegionId")
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "childInstanceRegionId"))

    @child_instance_region_id.setter
    def child_instance_region_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "childInstanceRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="childInstanceRouteTableId")
    def child_instance_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "childInstanceRouteTableId"))

    @child_instance_route_table_id.setter
    def child_instance_route_table_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "childInstanceRouteTableId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="childInstanceType")
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceType: The type of the network, value: VPC VBR
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "childInstanceType"))

    @child_instance_type.setter
    def child_instance_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "childInstanceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destinationCidrBlock")
    def destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "destinationCidrBlock"))

    @destination_cidr_block.setter
    def destination_cidr_block(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "destinationCidrBlock", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
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
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_route_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        destination_cidr_block: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::RouteEntry``.

        :param cen_id: 
        :param child_instance_id: 
        :param child_instance_region_id: 
        :param child_instance_route_table_id: 
        :param child_instance_type: 
        :param destination_cidr_block: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_route_table_id": child_instance_route_table_id,
            "child_instance_type": child_instance_type,
            "destination_cidr_block": destination_cidr_block,
        }

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance where the route entry is published.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceId: The ID of the attached network (VPC or VBR).
        '''
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        '''
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        '''
        result = self._values.get("child_instance_route_table_id")
        assert result is not None, "Required property 'child_instance_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: childInstanceType: The type of the network, value: VPC VBR
        '''
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        '''
        result = self._values.get("destination_cidr_block")
        assert result is not None, "Required property 'destination_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouter(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouter",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouter``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTransitRouterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouter``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AliUid: AliUid
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAliUid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenId: CenId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterDescription")
    def attr_transit_router_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterDescription: TransitRouterDescription
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterId: TransitRouterId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterName")
    def attr_transit_router_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterName: TransitRouterName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Type: Type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: CenId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterDescription")
    def transit_router_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterDescription: TransitRouterDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterDescription"))

    @transit_router_description.setter
    def transit_router_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterName")
    def transit_router_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterName: TransitRouterName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterName"))

    @transit_router_name.setter
    def transit_router_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterName", value)


class RosTransitRouterPeerAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterPeerAttachment",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterPeerAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTransitRouterPeerAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterPeerAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAutoPublishRouteEnabled")
    def attr_auto_publish_route_enabled(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AutoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoPublishRouteEnabled"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Bandwidth: Bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenBandwidthPackageId")
    def attr_cen_bandwidth_package_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenBandwidthPackageId: BandwidthPackageId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenBandwidthPackageId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenId: CenId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClientToken: ClientToken
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGeographicSpanId")
    def attr_geographic_span_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GeographicSpanId: GeographicSpanId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGeographicSpanId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPeerTransitRouterId")
    def attr_peer_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PeerTransitRouterId: PeerTransitRouterId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPeerTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPeerTransitRouterOwnerId")
    def attr_peer_transit_router_owner_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PeerTransitRouterOwnerId: PeerTransitRouterOwnerId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPeerTransitRouterOwnerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPeerTransitRouterRegionId")
    def attr_peer_transit_router_region_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PeerTransitRouterRegionId: PeerTransitRouterRegionId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPeerTransitRouterRegionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceType: ResourceType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: The first ID of the resource
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterId: TransitRouterId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="peerTransitRouterId")
    def peer_transit_router_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: peerTransitRouterId: PeerTransitRouterId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "peerTransitRouterId"))

    @peer_transit_router_id.setter
    def peer_transit_router_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "peerTransitRouterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPublishRouteEnabled")
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPublishRouteEnabled"))

    @auto_publish_route_enabled.setter
    def auto_publish_route_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPublishRouteEnabled", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidth: Bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenBandwidthPackageId")
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cenBandwidthPackageId: BandwidthPackageId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cenBandwidthPackageId"))

    @cen_bandwidth_package_id.setter
    def cen_bandwidth_package_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cenBandwidthPackageId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="peerTransitRouterRegionId")
    def peer_transit_router_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: peerTransitRouterRegionId: PeerTransitRouterRegionId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "peerTransitRouterRegionId"))

    @peer_transit_router_region_id.setter
    def peer_transit_router_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "peerTransitRouterRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterAttachmentDescription")
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterAttachmentDescription"))

    @transit_router_attachment_description.setter
    def transit_router_attachment_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterAttachmentDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterAttachmentName")
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterAttachmentName"))

    @transit_router_attachment_name.setter
    def transit_router_attachment_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterAttachmentName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        peer_transit_router_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        cen_bandwidth_package_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        peer_transit_router_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: peerTransitRouterId: PeerTransitRouterId
        '''
        result = self._values.get("peer_transit_router_id")
        assert result is not None, "Required property 'peer_transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        result = self._values.get("auto_publish_route_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidth: Bandwidth
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cenBandwidthPackageId: BandwidthPackageId
        '''
        result = self._values.get("cen_bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def peer_transit_router_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: peerTransitRouterRegionId: PeerTransitRouterRegionId
        '''
        result = self._values.get("peer_transit_router_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouter``.

        :param cen_id: 
        :param transit_router_description: 
        :param transit_router_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
        }
        if transit_router_description is not None:
            self._values["transit_router_description"] = transit_router_description
        if transit_router_name is not None:
            self._values["transit_router_name"] = transit_router_name

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: CenId
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterDescription: TransitRouterDescription
        '''
        result = self._values.get("transit_router_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterName: TransitRouterName
        '''
        result = self._values.get("transit_router_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterRouteEntry(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteEntry",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterRouteEntry``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTransitRouterRouteEntryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryDescription")
    def attr_transit_router_route_entry_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryDestinationCidrBlock")
    def attr_transit_router_route_entry_destination_cidr_block(
        self,
    ) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryDestinationCidrBlock"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryId")
    def attr_transit_router_route_entry_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryId: The first ID of the resource
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryName")
    def attr_transit_router_route_entry_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryName: TransitRouterRouteEntryName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryNextHopId")
    def attr_transit_router_route_entry_next_hop_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryNextHopId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryNextHopType")
    def attr_transit_router_route_entry_next_hop_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryNextHopType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryType")
    def attr_transit_router_route_entry_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteEntryType: TransitRouterRouteEntryType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterRouteEntryDestinationCidrBlock")
    def transit_router_route_entry_destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "transitRouterRouteEntryDestinationCidrBlock"))

    @transit_router_route_entry_destination_cidr_block.setter
    def transit_router_route_entry_destination_cidr_block(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "transitRouterRouteEntryDestinationCidrBlock", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterRouteEntryNextHopType")
    def transit_router_route_entry_next_hop_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "transitRouterRouteEntryNextHopType"))

    @transit_router_route_entry_next_hop_type.setter
    def transit_router_route_entry_next_hop_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "transitRouterRouteEntryNextHopType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterRouteTableId")
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "transitRouterRouteTableId"))

    @transit_router_route_table_id.setter
    def transit_router_route_table_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "transitRouterRouteTableId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterRouteEntryDescription")
    def transit_router_route_entry_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterRouteEntryDescription"))

    @transit_router_route_entry_description.setter
    def transit_router_route_entry_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterRouteEntryDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterRouteEntryName")
    def transit_router_route_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryName: TransitRouterRouteEntryName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterRouteEntryName"))

    @transit_router_route_entry_name.setter
    def transit_router_route_entry_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterRouteEntryName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterRouteEntryNextHopId")
    def transit_router_route_entry_next_hop_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterRouteEntryNextHopId"))

    @transit_router_route_entry_next_hop_id.setter
    def transit_router_route_entry_next_hop_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        transit_router_route_entry_destination_cidr_block: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_entry_next_hop_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_entry_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_route_entry_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_route_entry_next_hop_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteEntry``.

        :param transit_router_route_entry_destination_cidr_block: 
        :param transit_router_route_entry_next_hop_type: 
        :param transit_router_route_table_id: 
        :param transit_router_route_entry_description: 
        :param transit_router_route_entry_name: 
        :param transit_router_route_entry_next_hop_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
        '''
        result = self._values.get("transit_router_route_entry_destination_cidr_block")
        assert result is not None, "Required property 'transit_router_route_entry_destination_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_entry_next_hop_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
        '''
        result = self._values.get("transit_router_route_entry_next_hop_type")
        assert result is not None, "Required property 'transit_router_route_entry_next_hop_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_entry_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
        '''
        result = self._values.get("transit_router_route_entry_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_route_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryName: TransitRouterRouteEntryName
        '''
        result = self._values.get("transit_router_route_entry_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_route_entry_next_hop_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
        '''
        result = self._values.get("transit_router_route_entry_next_hop_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterRouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterRouteTable(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteTable",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterRouteTable``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTransitRouterRouteTableProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteTable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClientToken: ClientToken
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterId: TransitRouterId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableDescription")
    def attr_transit_router_route_table_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableDescription: TransitRouterRouteTableDescription
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableName")
    def attr_transit_router_route_table_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableName: TransitRouterRouteTableName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableType")
    def attr_transit_router_route_table_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableType: TransitRouterRouteTableType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "transitRouterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterRouteTableDescription")
    def transit_router_route_table_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterRouteTableDescription: TransitRouterRouteTableDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterRouteTableDescription"))

    @transit_router_route_table_description.setter
    def transit_router_route_table_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterRouteTableDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterRouteTableName")
    def transit_router_route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterRouteTableName: TransitRouterRouteTableName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterRouteTableName"))

    @transit_router_route_table_name.setter
    def transit_router_route_table_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterRouteTableName", value)


class RosTransitRouterRouteTableAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteTableAssociation",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTransitRouterRouteTableAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceId: ResourceId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceType: ResourceType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: TransitRouterAttachmentId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterAttachmentId")
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterAttachmentId: TransitRouterAttachmentId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "transitRouterAttachmentId"))

    @transit_router_attachment_id.setter
    def transit_router_attachment_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "transitRouterAttachmentId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterRouteTableId")
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "transitRouterRouteTableId"))

    @transit_router_route_table_id.setter
    def transit_router_route_table_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        transit_router_attachment_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.

        :param transit_router_attachment_id: 
        :param transit_router_route_table_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "transit_router_attachment_id": transit_router_attachment_id,
            "transit_router_route_table_id": transit_router_route_table_id,
        }

    @builtins.property
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterAttachmentId: TransitRouterAttachmentId
        '''
        result = self._values.get("transit_router_attachment_id")
        assert result is not None, "Required property 'transit_router_attachment_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterRouteTableAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterRouteTablePropagation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterRouteTablePropagation",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTransitRouterRouteTablePropagationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceId: ResourceId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceType: ResourceType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: TransitRouterAttachmentId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterAttachmentId")
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterAttachmentId: TransitRouterAttachmentId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "transitRouterAttachmentId"))

    @transit_router_attachment_id.setter
    def transit_router_attachment_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "transitRouterAttachmentId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterRouteTableId")
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "transitRouterRouteTableId"))

    @transit_router_route_table_id.setter
    def transit_router_route_table_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        transit_router_attachment_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.

        :param transit_router_attachment_id: 
        :param transit_router_route_table_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "transit_router_attachment_id": transit_router_attachment_id,
            "transit_router_route_table_id": transit_router_route_table_id,
        }

    @builtins.property
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterAttachmentId: TransitRouterAttachmentId
        '''
        result = self._values.get("transit_router_attachment_id")
        assert result is not None, "Required property 'transit_router_attachment_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterRouteTableId: TransitRouterRouteTableId
        '''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        transit_router_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_table_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_route_table_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTable``.

        :param transit_router_id: 
        :param transit_router_route_table_description: 
        :param transit_router_route_table_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "transit_router_id": transit_router_id,
        }
        if transit_router_route_table_description is not None:
            self._values["transit_router_route_table_description"] = transit_router_route_table_description
        if transit_router_route_table_name is not None:
            self._values["transit_router_route_table_name"] = transit_router_route_table_name

    @builtins.property
    def transit_router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        result = self._values.get("transit_router_id")
        assert result is not None, "Required property 'transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_table_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterRouteTableDescription: TransitRouterRouteTableDescription
        '''
        result = self._values.get("transit_router_route_table_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterRouteTableName: TransitRouterRouteTableName
        '''
        result = self._values.get("transit_router_route_table_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterRouteTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterVbrAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachment",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterVbrAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTransitRouterVbrAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterVbrAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAutoPublishRouteEnabled")
    def attr_auto_publish_route_enabled(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AutoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoPublishRouteEnabled"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenId: CenId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClientToken: ClientToken
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceType: ResourceType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: The first ID of the resource
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterId: TransitRouterId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrId")
    def attr_vbr_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VbrId: VbrId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrOwnerId")
    def attr_vbr_owner_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VbrOwnerId: VbrOwnerId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrOwnerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vbrId")
    def vbr_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vbrId: VbrId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vbrId"))

    @vbr_id.setter
    def vbr_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vbrId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPublishRouteEnabled")
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPublishRouteEnabled"))

    @auto_publish_route_enabled.setter
    def auto_publish_route_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPublishRouteEnabled", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterAttachmentDescription")
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterAttachmentDescription"))

    @transit_router_attachment_description.setter
    def transit_router_attachment_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterAttachmentDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterAttachmentName")
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterAttachmentName"))

    @transit_router_attachment_name.setter
    def transit_router_attachment_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterAttachmentName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vbrOwnerId")
    def vbr_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: vbrOwnerId: VbrOwnerId
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "vbrOwnerId"))

    @vbr_owner_id.setter
    def vbr_owner_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
        vbr_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vbr_owner_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def vbr_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vbrId: VbrId
        '''
        result = self._values.get("vbr_id")
        assert result is not None, "Required property 'vbr_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPublishRouteEnabled: AutoPublishRouteEnabled
        '''
        result = self._values.get("auto_publish_route_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vbr_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: vbrOwnerId: VbrOwnerId
        '''
        result = self._values.get("vbr_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterVbrAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterVpcAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment",
):
    '''A ROS template type:  ``ALIYUN::CEN::TransitRouterVpcAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTransitRouterVpcAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CEN::TransitRouterVpcAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenId: CenId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClientToken: ClientToken
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceType: ResourceType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentId: The first ID of the resource
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransitRouterId: TransitRouterId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: VpcId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcOwnerId")
    def attr_vpc_owner_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcOwnerId: VpcOwnerId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcOwnerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VpcId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneMappings")
    def zone_mappings(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTransitRouterVpcAttachment.ZoneMappingsProperty"]]]:
        '''
        :Property: zoneMappings: ZoneMappingss
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTransitRouterVpcAttachment.ZoneMappingsProperty"]]], jsii.get(self, "zoneMappings"))

    @zone_mappings.setter
    def zone_mappings(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTransitRouterVpcAttachment.ZoneMappingsProperty"]]],
    ) -> None:
        jsii.set(self, "zoneMappings", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: chargeType:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterAttachmentDescription")
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterAttachmentDescription"))

    @transit_router_attachment_description.setter
    def transit_router_attachment_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterAttachmentDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterAttachmentName")
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterAttachmentName"))

    @transit_router_attachment_name.setter
    def transit_router_attachment_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterAttachmentName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "transitRouterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcOwnerId")
    def vpc_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcOwnerId: VpcOwnerId
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "vpcOwnerId"))

    @vpc_owner_id.setter
    def vpc_owner_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
            v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param v_switch_id: 
            :param zone_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "v_switch_id": v_switch_id,
                "zone_id": zone_id,
            }

        @builtins.property
        def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vSwitchId: VSwitchId
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: zoneId: ZoneId
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        "cen_id": "cenId",
        "charge_type": "chargeType",
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
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_mappings: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]],
        cen_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_owner_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterVpcAttachment``.

        :param vpc_id: 
        :param zone_mappings: 
        :param cen_id: 
        :param charge_type: 
        :param transit_router_attachment_description: 
        :param transit_router_attachment_name: 
        :param transit_router_id: 
        :param vpc_owner_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
            "zone_mappings": zone_mappings,
        }
        if cen_id is not None:
            self._values["cen_id"] = cen_id
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if transit_router_attachment_description is not None:
            self._values["transit_router_attachment_description"] = transit_router_attachment_description
        if transit_router_attachment_name is not None:
            self._values["transit_router_attachment_name"] = transit_router_attachment_name
        if transit_router_id is not None:
            self._values["transit_router_id"] = transit_router_id
        if vpc_owner_id is not None:
            self._values["vpc_owner_id"] = vpc_owner_id

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VpcId
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]]:
        '''
        :Property: zoneMappings: ZoneMappingss
        '''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cenId: CenId
        '''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: chargeType:
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        '''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterAttachmentName: TransitRouterAttachmentName
        '''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: transitRouterId: TransitRouterId
        '''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcOwnerId: VpcOwnerId
        '''
        result = self._values.get("vpc_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterVpcAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RouteEntry(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RouteEntry",
):
    '''A ROS resource type:  ``ALIYUN::CEN::RouteEntry``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RouteEntryProps",
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
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_route_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        child_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        destination_cidr_block: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::RouteEntry``.

        :param cen_id: Property cenId: The ID of the CEN instance where the route entry is published.
        :param child_instance_id: Property childInstanceId: The ID of the attached network (VPC or VBR).
        :param child_instance_region_id: Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        :param child_instance_route_table_id: Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
        :param child_instance_type: Property childInstanceType: The type of the network, value: VPC VBR.
        :param destination_cidr_block: Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_route_table_id": child_instance_route_table_id,
            "child_instance_type": child_instance_type,
            "destination_cidr_block": destination_cidr_block,
        }

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenId: The ID of the CEN instance where the route entry is published.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property childInstanceId: The ID of the attached network (VPC or VBR).'''
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.'''
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property childInstanceRouteTableId: The route table of the attached VBR or VPC.'''
        result = self._values.get("child_instance_route_table_id")
        assert result is not None, "Required property 'child_instance_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def child_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property childInstanceType: The type of the network, value: VPC VBR.'''
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def destination_cidr_block(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property destinationCidrBlock: The destination CIDR block of the route entry to publish.'''
        result = self._values.get("destination_cidr_block")
        assert result is not None, "Required property 'destination_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouter(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouter",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouter``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TransitRouterProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAliUid")
    def attr_ali_uid(self) -> ros_cdk_core.IResolvable:
        '''Attribute AliUid: AliUid.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAliUid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenId: CenId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterDescription")
    def attr_transit_router_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterDescription: TransitRouterDescription.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterId: TransitRouterId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterName")
    def attr_transit_router_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterName: TransitRouterName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute Type: Type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrType"))


class TransitRouterPeerAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterPeerAttachment",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterPeerAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TransitRouterPeerAttachmentProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAutoPublishRouteEnabled")
    def attr_auto_publish_route_enabled(self) -> ros_cdk_core.IResolvable:
        '''Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoPublishRouteEnabled"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute Bandwidth: Bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenBandwidthPackageId")
    def attr_cen_bandwidth_package_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenBandwidthPackageId: BandwidthPackageId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenBandwidthPackageId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenId: CenId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClientToken: ClientToken.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGeographicSpanId")
    def attr_geographic_span_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute GeographicSpanId: GeographicSpanId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGeographicSpanId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPeerTransitRouterId")
    def attr_peer_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PeerTransitRouterId: PeerTransitRouterId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPeerTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPeerTransitRouterOwnerId")
    def attr_peer_transit_router_owner_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PeerTransitRouterOwnerId: PeerTransitRouterOwnerId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPeerTransitRouterOwnerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPeerTransitRouterRegionId")
    def attr_peer_transit_router_region_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PeerTransitRouterRegionId: PeerTransitRouterRegionId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPeerTransitRouterRegionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceType: ResourceType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentId: The first ID of the resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterId: TransitRouterId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterId"))


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
        peer_transit_router_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        cen_bandwidth_package_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        peer_transit_router_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property peerTransitRouterId: PeerTransitRouterId.'''
        result = self._values.get("peer_transit_router_id")
        assert result is not None, "Required property 'peer_transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPublishRouteEnabled: AutoPublishRouteEnabled.'''
        result = self._values.get("auto_publish_route_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property bandwidth: Bandwidth.'''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cen_bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cenBandwidthPackageId: BandwidthPackageId.'''
        result = self._values.get("cen_bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cenId: CenId.'''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def peer_transit_router_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property peerTransitRouterRegionId: PeerTransitRouterRegionId.'''
        result = self._values.get("peer_transit_router_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterAttachmentName: TransitRouterAttachmentName.'''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterId: TransitRouterId.'''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouter``.

        :param cen_id: Property cenId: CenId.
        :param transit_router_description: Property transitRouterDescription: TransitRouterDescription.
        :param transit_router_name: Property transitRouterName: TransitRouterName.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
        }
        if transit_router_description is not None:
            self._values["transit_router_description"] = transit_router_description
        if transit_router_name is not None:
            self._values["transit_router_name"] = transit_router_name

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenId: CenId.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterDescription: TransitRouterDescription.'''
        result = self._values.get("transit_router_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterName: TransitRouterName.'''
        result = self._values.get("transit_router_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouterRouteEntry(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteEntry",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterRouteEntry``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TransitRouterRouteEntryProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryDescription")
    def attr_transit_router_route_entry_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryDestinationCidrBlock")
    def attr_transit_router_route_entry_destination_cidr_block(
        self,
    ) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryDestinationCidrBlock"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryId")
    def attr_transit_router_route_entry_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteEntryId: The first ID of the resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryName")
    def attr_transit_router_route_entry_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryNextHopId")
    def attr_transit_router_route_entry_next_hop_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryNextHopId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryNextHopType")
    def attr_transit_router_route_entry_next_hop_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryNextHopType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteEntryType")
    def attr_transit_router_route_entry_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteEntryType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))


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
        transit_router_route_entry_destination_cidr_block: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_entry_next_hop_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_entry_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_route_entry_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_route_entry_next_hop_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteEntry``.

        :param transit_router_route_entry_destination_cidr_block: Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
        :param transit_router_route_entry_next_hop_type: Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
        :param transit_router_route_table_id: Property transitRouterRouteTableId: TransitRouterRouteTableId.
        :param transit_router_route_entry_description: Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
        :param transit_router_route_entry_name: Property transitRouterRouteEntryName: TransitRouterRouteEntryName.
        :param transit_router_route_entry_next_hop_id: Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.'''
        result = self._values.get("transit_router_route_entry_destination_cidr_block")
        assert result is not None, "Required property 'transit_router_route_entry_destination_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_entry_next_hop_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.'''
        result = self._values.get("transit_router_route_entry_next_hop_type")
        assert result is not None, "Required property 'transit_router_route_entry_next_hop_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property transitRouterRouteTableId: TransitRouterRouteTableId.'''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_entry_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.'''
        result = self._values.get("transit_router_route_entry_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_route_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterRouteEntryName: TransitRouterRouteEntryName.'''
        result = self._values.get("transit_router_route_entry_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_route_entry_next_hop_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.'''
        result = self._values.get("transit_router_route_entry_next_hop_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterRouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouterRouteTable(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteTable",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterRouteTable``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TransitRouterRouteTableProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClientToken: ClientToken.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterId: TransitRouterId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableDescription")
    def attr_transit_router_route_table_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableName")
    def attr_transit_router_route_table_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteTableName: TransitRouterRouteTableName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableType")
    def attr_transit_router_route_table_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteTableType: TransitRouterRouteTableType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableType"))


class TransitRouterRouteTableAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteTableAssociation",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TransitRouterRouteTableAssociationProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceId: ResourceId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceType: ResourceType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentId: TransitRouterAttachmentId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))


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
        transit_router_attachment_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTableAssociation``.

        :param transit_router_attachment_id: Property transitRouterAttachmentId: TransitRouterAttachmentId.
        :param transit_router_route_table_id: Property transitRouterRouteTableId: TransitRouterRouteTableId.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "transit_router_attachment_id": transit_router_attachment_id,
            "transit_router_route_table_id": transit_router_route_table_id,
        }

    @builtins.property
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property transitRouterAttachmentId: TransitRouterAttachmentId.'''
        result = self._values.get("transit_router_attachment_id")
        assert result is not None, "Required property 'transit_router_attachment_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property transitRouterRouteTableId: TransitRouterRouteTableId.'''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterRouteTableAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouterRouteTablePropagation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterRouteTablePropagation",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TransitRouterRouteTablePropagationProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceId: ResourceId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceType: ResourceType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentId: TransitRouterAttachmentId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterRouteTableId")
    def attr_transit_router_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterRouteTableId"))


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
        transit_router_attachment_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTablePropagation``.

        :param transit_router_attachment_id: Property transitRouterAttachmentId: TransitRouterAttachmentId.
        :param transit_router_route_table_id: Property transitRouterRouteTableId: TransitRouterRouteTableId.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "transit_router_attachment_id": transit_router_attachment_id,
            "transit_router_route_table_id": transit_router_route_table_id,
        }

    @builtins.property
    def transit_router_attachment_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property transitRouterAttachmentId: TransitRouterAttachmentId.'''
        result = self._values.get("transit_router_attachment_id")
        assert result is not None, "Required property 'transit_router_attachment_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property transitRouterRouteTableId: TransitRouterRouteTableId.'''
        result = self._values.get("transit_router_route_table_id")
        assert result is not None, "Required property 'transit_router_route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        transit_router_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        transit_router_route_table_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_route_table_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterRouteTable``.

        :param transit_router_id: Property transitRouterId: TransitRouterId.
        :param transit_router_route_table_description: Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription.
        :param transit_router_route_table_name: Property transitRouterRouteTableName: TransitRouterRouteTableName.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "transit_router_id": transit_router_id,
        }
        if transit_router_route_table_description is not None:
            self._values["transit_router_route_table_description"] = transit_router_route_table_description
        if transit_router_route_table_name is not None:
            self._values["transit_router_route_table_name"] = transit_router_route_table_name

    @builtins.property
    def transit_router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property transitRouterId: TransitRouterId.'''
        result = self._values.get("transit_router_id")
        assert result is not None, "Required property 'transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transit_router_route_table_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterRouteTableDescription: TransitRouterRouteTableDescription.'''
        result = self._values.get("transit_router_route_table_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterRouteTableName: TransitRouterRouteTableName.'''
        result = self._values.get("transit_router_route_table_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterRouteTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouterVbrAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterVbrAttachment",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterVbrAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TransitRouterVbrAttachmentProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAutoPublishRouteEnabled")
    def attr_auto_publish_route_enabled(self) -> ros_cdk_core.IResolvable:
        '''Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoPublishRouteEnabled"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenId: CenId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClientToken: ClientToken.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceType: ResourceType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentId: The first ID of the resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterId: TransitRouterId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrId")
    def attr_vbr_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VbrId: VbrId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrOwnerId")
    def attr_vbr_owner_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VbrOwnerId: VbrOwnerId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrOwnerId"))


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
        vbr_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_publish_route_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vbr_owner_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def vbr_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vbrId: VbrId.'''
        result = self._values.get("vbr_id")
        assert result is not None, "Required property 'vbr_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_publish_route_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPublishRouteEnabled: AutoPublishRouteEnabled.'''
        result = self._values.get("auto_publish_route_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cenId: CenId.'''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterAttachmentName: TransitRouterAttachmentName.'''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterId: TransitRouterId.'''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vbr_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property vbrOwnerId: VbrOwnerId.'''
        result = self._values.get("vbr_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterVbrAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TransitRouterVpcAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterVpcAttachment",
):
    '''A ROS resource type:  ``ALIYUN::CEN::TransitRouterVpcAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TransitRouterVpcAttachmentProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenId: CenId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientToken")
    def attr_client_token(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClientToken: ClientToken.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientToken"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceType: ResourceType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentDescription")
    def attr_transit_router_attachment_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentId")
    def attr_transit_router_attachment_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentId: The first ID of the resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterAttachmentName")
    def attr_transit_router_attachment_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterAttachmentName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransitRouterId")
    def attr_transit_router_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransitRouterId: TransitRouterId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransitRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: VpcId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcOwnerId")
    def attr_vpc_owner_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcOwnerId: VpcOwnerId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcOwnerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.TransitRouterVpcAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "zone_mappings": "zoneMappings",
        "cen_id": "cenId",
        "charge_type": "chargeType",
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
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_mappings: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]],
        cen_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_attachment_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_owner_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::TransitRouterVpcAttachment``.

        :param vpc_id: Property vpcId: VpcId.
        :param zone_mappings: Property zoneMappings: ZoneMappingss.
        :param cen_id: Property cenId: CenId.
        :param charge_type: Property chargeType:.
        :param transit_router_attachment_description: Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
        :param transit_router_attachment_name: Property transitRouterAttachmentName: TransitRouterAttachmentName.
        :param transit_router_id: Property transitRouterId: TransitRouterId.
        :param vpc_owner_id: Property vpcOwnerId: VpcOwnerId.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
            "zone_mappings": zone_mappings,
        }
        if cen_id is not None:
            self._values["cen_id"] = cen_id
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if transit_router_attachment_description is not None:
            self._values["transit_router_attachment_description"] = transit_router_attachment_description
        if transit_router_attachment_name is not None:
            self._values["transit_router_attachment_name"] = transit_router_attachment_name
        if transit_router_id is not None:
            self._values["transit_router_id"] = transit_router_id
        if vpc_owner_id is not None:
            self._values["vpc_owner_id"] = vpc_owner_id

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: VpcId.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]]:
        '''Property zoneMappings: ZoneMappingss.'''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTransitRouterVpcAttachment.ZoneMappingsProperty]]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cenId: CenId.'''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property chargeType:.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.'''
        result = self._values.get("transit_router_attachment_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_attachment_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterAttachmentName: TransitRouterAttachmentName.'''
        result = self._values.get("transit_router_attachment_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property transitRouterId: TransitRouterId.'''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property vpcOwnerId: VpcOwnerId.'''
        result = self._values.get("vpc_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
