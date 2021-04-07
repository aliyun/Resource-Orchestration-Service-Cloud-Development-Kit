'''
## Aliyun ROS CEN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_cen as CEN
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
        jsii.create(CenBandwidthLimit, self, [scope, id, props, enable_resource_property_constraint])


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
        jsii.create(CenBandwidthPackage, self, [scope, id, props, enable_resource_property_constraint])

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
        jsii.create(CenBandwidthPackageAssociation, self, [scope, id, props, enable_resource_property_constraint])


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
        jsii.create(CenInstance, self, [scope, id, props, enable_resource_property_constraint])

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
        jsii.create(CenInstanceAttachment, self, [scope, id, props, enable_resource_property_constraint])


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
    name_mapping={"description": "description", "name": "name", "tags": "tags"},
)
class CenInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosCenInstance.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenInstance``.

        :param description: Property description: The description of the instance. The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        :param name: Property name: The name of the instance. The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
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
        jsii.create(CenRouteMap, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAsPathMatchMode")
    def attr_as_path_match_mode(self) -> ros_cdk_core.IResolvable:
        '''Attribute AsPathMatchMode: A match statement.

        It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAsPathMatchMode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenId: The ID of the CEN instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenRegionId")
    def attr_cen_region_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenRegionId: The ID of the region to which the CEN instance belongs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenRegionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCidrMatchMode")
    def attr_cidr_match_mode(self) -> ros_cdk_core.IResolvable:
        '''Attribute CidrMatchMode: A match statement.

        It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCidrMatchMode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCommunityMatchMode")
    def attr_community_match_mode(self) -> ros_cdk_core.IResolvable:
        '''Attribute CommunityMatchMode: A match statement.

        It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCommunityMatchMode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCommunityOperateMode")
    def attr_community_operate_mode(self) -> ros_cdk_core.IResolvable:
        '''Attribute CommunityOperateMode: An action statement.

        It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCommunityOperateMode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute Description: The description of the route map.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDestinationChildInstanceTypes")
    def attr_destination_child_instance_types(self) -> ros_cdk_core.IResolvable:
        '''Attribute DestinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.

        VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDestinationChildInstanceTypes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDestinationCidrBlocks")
    def attr_destination_cidr_blocks(self) -> ros_cdk_core.IResolvable:
        '''Attribute DestinationCidrBlocks: A match statement that indicates the prefix list.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDestinationCidrBlocks"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDestinationInstanceIds")
    def attr_destination_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute DestinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.

        This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDestinationInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDestinationInstanceIdsReverseMatch")
    def attr_destination_instance_ids_reverse_match(self) -> ros_cdk_core.IResolvable:
        '''Attribute DestinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.

        Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDestinationInstanceIdsReverseMatch"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDestinationRouteTableIds")
    def attr_destination_route_table_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute DestinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.

        This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDestinationRouteTableIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMapResult")
    def attr_map_result(self) -> ros_cdk_core.IResolvable:
        '''Attribute MapResult: The action that is performed to a route if the route meets all the match conditions.

        Permit: The route is permitted. Deny: The route is denied.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMapResult"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMatchAsns")
    def attr_match_asns(self) -> ros_cdk_core.IResolvable:
        '''Attribute MatchAsns: A match statement that indicates the As path list.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMatchAsns"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMatchCommunitySet")
    def attr_match_community_set(self) -> ros_cdk_core.IResolvable:
        '''Attribute MatchCommunitySet: A match statement that indicates the community set.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMatchCommunitySet"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNextPriority")
    def attr_next_priority(self) -> ros_cdk_core.IResolvable:
        '''Attribute NextPriority: The priority of the next route map that is associated with the current route map.

        Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNextPriority"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOperateCommunitySet")
    def attr_operate_community_set(self) -> ros_cdk_core.IResolvable:
        '''Attribute OperateCommunitySet: An action statement that operates the community attribute.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOperateCommunitySet"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPreference")
    def attr_preference(self) -> ros_cdk_core.IResolvable:
        '''Attribute Preference: An action statement that modifies the preference of the route.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPreference"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrependAsPath")
    def attr_prepend_as_path(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrependAsPath"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPriority")
    def attr_priority(self) -> ros_cdk_core.IResolvable:
        '''Attribute Priority: The priority of the route map.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPriority"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteMapId")
    def attr_route_map_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteMapId: The ID of the route map.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteMapId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTypes")
    def attr_route_types(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteTypes: A match statement that indicates the list of route types.

        System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTypes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceChildInstanceTypes")
    def attr_source_child_instance_types(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.

        VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceChildInstanceTypes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceInstanceIds")
    def attr_source_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceInstanceIds: A match statement that indicates the list of IDs of the source instances.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceInstanceIdsReverseMatch")
    def attr_source_instance_ids_reverse_match(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.

        Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceInstanceIdsReverseMatch"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceRegionIds")
    def attr_source_region_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceRegionIds: A match statement that indicates the list of IDs of the source regions.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceRegionIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceRouteTableIds")
    def attr_source_route_table_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceRouteTableIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransmitDirection")
    def attr_transmit_direction(self) -> ros_cdk_core.IResolvable:
        '''Attribute TransmitDirection: The direction in which the route map is applied.

        Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransmitDirection"))


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

        :param cen_id: Property cenId: The ID of the CEN instance.
        :param cen_region_id: Property cenRegionId: The ID of the region to which the CEN instance belongs.
        :param map_result: Property mapResult: The action that is performed to a route if the route meets all the match conditions. Permit: The route is permitted. Deny: The route is denied.
        :param priority: Property priority: The priority of the route map.
        :param transmit_direction: Property transmitDirection: The direction in which the route map is applied. Valid values: RegionIn: The direction in which routes are imported to the regional gateway of the CEN. For example, routes are imported to the regional gateway from an instance in the current region or another region. RegionOut: The direction in which routes are exported from the regional gateway of the CEN. For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
        :param as_path_match_mode: Property asPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values: Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
        :param cidr_match_mode: Property cidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values: Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition. For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition. Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition. For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
        :param community_match_mode: Property communityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values: Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
        :param community_operate_mode: Property communityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values: Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
        :param description: Property description: The description of the route map.
        :param destination_child_instance_types: Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances. VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
        :param destination_cidr_blocks: Property destinationCidrBlocks: A match statement that indicates the prefix list.
        :param destination_instance_ids: Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances. This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
        :param destination_instance_ids_reverse_match: Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values: false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
        :param destination_route_table_ids: Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables. This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
        :param match_asns: Property matchAsns: A match statement that indicates the As path list.
        :param match_community_set: Property matchCommunitySet: A match statement that indicates the community set.
        :param next_priority: Property nextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100. If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
        :param operate_community_set: Property operateCommunitySet: An action statement that operates the community attribute.
        :param preference: Property preference: An action statement that modifies the preference of the route.
        :param prepend_as_path: Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
        :param route_types: Property routeTypes: A match statement that indicates the list of route types. System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
        :param source_child_instance_types: Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances. VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
        :param source_instance_ids: Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
        :param source_instance_ids_reverse_match: Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values: false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
        :param source_region_ids: Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
        :param source_route_table_ids: Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
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
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenRegionId: The ID of the region to which the CEN instance belongs.'''
        result = self._values.get("cen_region_id")
        assert result is not None, "Required property 'cen_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def map_result(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property mapResult: The action that is performed to a route if the route meets all the match conditions.

        Permit: The route is permitted. Deny: The route is denied.
        '''
        result = self._values.get("map_result")
        assert result is not None, "Required property 'map_result' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property priority: The priority of the route map.'''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transmit_direction(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property transmitDirection: The direction in which the route map is applied.

        Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
        '''
        result = self._values.get("transmit_direction")
        assert result is not None, "Required property 'transmit_direction' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def as_path_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property asPathMatchMode: A match statement.

        It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
        '''
        result = self._values.get("as_path_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cidr_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cidrMatchMode: A match statement.

        It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
        '''
        result = self._values.get("cidr_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def community_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property communityMatchMode: A match statement.

        It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
        '''
        result = self._values.get("community_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def community_operate_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property communityOperateMode: An action statement.

        It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
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
        '''Property destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.

        VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
        '''
        result = self._values.get("destination_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_cidr_blocks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property destinationCidrBlocks: A match statement that indicates the prefix list.'''
        result = self._values.get("destination_cidr_blocks")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.

        This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
        '''
        result = self._values.get("destination_instance_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition.

        Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
        '''
        result = self._values.get("destination_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.

        This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
        '''
        result = self._values.get("destination_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def match_asns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property matchAsns: A match statement that indicates the As path list.'''
        result = self._values.get("match_asns")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def match_community_set(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property matchCommunitySet: A match statement that indicates the community set.'''
        result = self._values.get("match_community_set")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def next_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property nextPriority: The priority of the next route map that is associated with the current route map.

        Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
        '''
        result = self._values.get("next_priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def operate_community_set(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property operateCommunitySet: An action statement that operates the community attribute.'''
        result = self._values.get("operate_community_set")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def preference(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property preference: An action statement that modifies the preference of the route.'''
        result = self._values.get("preference")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def prepend_as_path(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.'''
        result = self._values.get("prepend_as_path")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def route_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property routeTypes: A match statement that indicates the list of route types.

        System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
        '''
        result = self._values.get("route_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.

        VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
        '''
        result = self._values.get("source_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.'''
        result = self._values.get("source_instance_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition.

        Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
        '''
        result = self._values.get("source_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_region_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property sourceRegionIds: A match statement that indicates the list of IDs of the source regions.'''
        result = self._values.get("source_region_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.'''
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
        jsii.create(CenVbrHealthCheck, self, [scope, id, props, enable_resource_property_constraint])

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
        jsii.create(RosCenBandwidthLimit, self, [scope, id, props, enable_resource_property_constraint])

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
        jsii.create(RosCenBandwidthPackage, self, [scope, id, props, enable_resource_property_constraint])

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
        jsii.create(RosCenBandwidthPackageAssociation, self, [scope, id, props, enable_resource_property_constraint])

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
        jsii.create(RosCenInstance, self, [scope, id, props, enable_resource_property_constraint])

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
        jsii.create(RosCenInstanceAttachment, self, [scope, id, props, enable_resource_property_constraint])

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
    name_mapping={"description": "description", "name": "name", "tags": "tags"},
)
class RosCenInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosCenInstance.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CEN::CenInstance``.

        :param description: 
        :param name: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
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
        jsii.create(RosCenRouteMap, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAsPathMatchMode")
    def attr_as_path_match_mode(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AsPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAsPathMatchMode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenId: The ID of the CEN instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenRegionId")
    def attr_cen_region_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenRegionId: The ID of the region to which the CEN instance belongs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenRegionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCidrMatchMode")
    def attr_cidr_match_mode(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCidrMatchMode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCommunityMatchMode")
    def attr_community_match_mode(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CommunityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCommunityMatchMode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCommunityOperateMode")
    def attr_community_operate_mode(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CommunityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCommunityOperateMode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Description: The description of the route map.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDestinationChildInstanceTypes")
    def attr_destination_child_instance_types(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DestinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDestinationChildInstanceTypes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDestinationCidrBlocks")
    def attr_destination_cidr_blocks(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DestinationCidrBlocks: A match statement that indicates the prefix list.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDestinationCidrBlocks"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDestinationInstanceIds")
    def attr_destination_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DestinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDestinationInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDestinationInstanceIdsReverseMatch")
    def attr_destination_instance_ids_reverse_match(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DestinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDestinationInstanceIdsReverseMatch"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDestinationRouteTableIds")
    def attr_destination_route_table_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DestinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDestinationRouteTableIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMapResult")
    def attr_map_result(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMapResult"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMatchAsns")
    def attr_match_asns(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MatchAsns: A match statement that indicates the As path list.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMatchAsns"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMatchCommunitySet")
    def attr_match_community_set(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MatchCommunitySet: A match statement that indicates the community set.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMatchCommunitySet"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNextPriority")
    def attr_next_priority(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNextPriority"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOperateCommunitySet")
    def attr_operate_community_set(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OperateCommunitySet: An action statement that operates the community attribute.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOperateCommunitySet"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPreference")
    def attr_preference(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Preference: An action statement that modifies the preference of the route.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPreference"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrependAsPath")
    def attr_prepend_as_path(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrependAsPath"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPriority")
    def attr_priority(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Priority: The priority of the route map.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPriority"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteMapId")
    def attr_route_map_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteMapId: The ID of the route map.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteMapId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTypes")
    def attr_route_types(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTypes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceChildInstanceTypes")
    def attr_source_child_instance_types(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceChildInstanceTypes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceInstanceIds")
    def attr_source_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceInstanceIdsReverseMatch")
    def attr_source_instance_ids_reverse_match(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceInstanceIdsReverseMatch"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceRegionIds")
    def attr_source_region_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceRegionIds: A match statement that indicates the list of IDs of the source regions.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceRegionIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceRouteTableIds")
    def attr_source_route_table_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceRouteTableIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTransmitDirection")
    def attr_transmit_direction(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TransmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTransmitDirection"))

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
    @jsii.member(jsii_name="cenRegionId")
    def cen_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenRegionId: The ID of the region to which the CEN instance belongs.
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
        :Property: mapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
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
        :Property: priority: The priority of the route map.
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
        :Property: transmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
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
        :Property: asPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
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
        :Property: cidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
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
        :Property: communityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
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
        :Property: communityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
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
        :Property: destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
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
        :Property: destinationCidrBlocks: A match statement that indicates the prefix list.
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
        :Property: destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
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
        :Property: destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
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
        :Property: destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
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
        :Property: matchAsns: A match statement that indicates the As path list.
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
        :Property: matchCommunitySet: A match statement that indicates the community set.
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
        :Property: nextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
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
        :Property: operateCommunitySet: An action statement that operates the community attribute.
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
        :Property: preference: An action statement that modifies the preference of the route.
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
        :Property: prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
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
        :Property: routeTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
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
        :Property: sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
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
        :Property: sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
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
        :Property: sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
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
        :Property: sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
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
        :Property: sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
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
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenRegionId: The ID of the region to which the CEN instance belongs.
        '''
        result = self._values.get("cen_region_id")
        assert result is not None, "Required property 'cen_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def map_result(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: mapResult: The action that is performed to a route if the route meets all the match conditions.  Permit: The route is permitted. Deny: The route is denied.
        '''
        result = self._values.get("map_result")
        assert result is not None, "Required property 'map_result' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: priority: The priority of the route map.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def transmit_direction(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: transmitDirection: The direction in which the route map is applied. Valid values:  RegionIn: The direction in which routes are imported to the regional gateway of the CEN.  For example, routes are imported to the regional gateway from an instance in the current region or another region.  RegionOut: The direction in which routes are exported from the regional gateway of the CEN.  For example, routes are exported from the regional gateway of the current region to an instance in the same region, or to the regional gateway in another region.
        '''
        result = self._values.get("transmit_direction")
        assert result is not None, "Required property 'transmit_direction' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def as_path_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: asPathMatchMode: A match statement. It indicates the mode in which the as-path attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the AS path in the route overlaps the AS path in the match condition. Complete: Exact match. A route matches the condition only when the AS path of the route is the same as the AS path in the match condition.
        '''
        result = self._values.get("as_path_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cidr_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cidrMatchMode: A match statement. It indicates the mode in which the prefix attribute is matched. Valid values:  Include: Fuzzy match. If the prefix of a route is contained in the prefix in the match condition, the route matches the condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Fuzzy Match, the route with the prefix of 1.1.1.0/24 matches the condition.  Complete: Exact match. A route matches the condition only when the prefix of the route is the same as the prefix in the match condition.  For example, if the prefix in the match condition is set to 1.1.0.0/16 and the match method is set to Exact Match, only the route with the prefix of 1.1.1.0/16 matches the condition.
        '''
        result = self._values.get("cidr_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def community_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: communityMatchMode: A match statement. It indicates the mode in which the community attribute is matched. Valid values:  Include: Fuzzy match. A route matches the condition if the community of the route overlaps the community in the match condition. Complete: Exact match. A route matches the condition only when the community of the route is the same as the community in the match condition.
        '''
        result = self._values.get("community_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def community_operate_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: communityOperateMode: An action statement. It indicates the mode in which the community attribute is operated. Valid values:  Additive: Sets a value for the community attribute. Replace: Replaces the value of the community attribute.
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
        :Property: destinationChildInstanceTypes: A match statement that indicates the list of IDs of the destination instances.  VPC: VPC VBR: VBR CCN: Mainland China CCN This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belong to the same region.
        '''
        result = self._values.get("destination_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_cidr_blocks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: destinationCidrBlocks: A match statement that indicates the prefix list.
        '''
        result = self._values.get("destination_cidr_blocks")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: destinationInstanceIds: A match statement that indicates the list of IDs of the destination instances.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination instance and the route map belongs to the same region.
        '''
        result = self._values.get("destination_instance_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def destination_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: destinationInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the DestinationInstanceIds match condition. Valid values:  false (default): If the ID of a route's destination instance is included in DestinationInstanceIds, the route is permitted. true: If the ID of a route's destination instance is not included in DestinationInstanceIds, the route is permitted.
        '''
        result = self._values.get("destination_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: destinationRouteTableIds: A match statement that indicates the list of IDs of the destination route tables.  This parameter is valid only when the TransmitDirection parameter is set to RegionOut, and the destination route table and the route map belongs to the same region.
        '''
        result = self._values.get("destination_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def match_asns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: matchAsns: A match statement that indicates the As path list.
        '''
        result = self._values.get("match_asns")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def match_community_set(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: matchCommunitySet: A match statement that indicates the community set.
        '''
        result = self._values.get("match_community_set")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def next_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: nextPriority: The priority of the next route map that is associated with the current route map. Value range: 1 to 100.  If this parameter is not set, the current route map is not associated with any route map that is ordered next to the current route map. If this parameter is set to 1, the current route map is associated with the next route map. If this parameter is set to a value other than 1, the priority of the associated route map must be lower than the priority of the current route map, that is, the value of NextPriority must be greater than the value set for Priority. Only when MapResult is set to Permit, the routes which match all the matching conditions will be evaluated by the associated route map that is configured with a specific preference value.
        '''
        result = self._values.get("next_priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def operate_community_set(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: operateCommunitySet: An action statement that operates the community attribute.
        '''
        result = self._values.get("operate_community_set")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def preference(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: preference: An action statement that modifies the preference of the route.
        '''
        result = self._values.get("preference")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def prepend_as_path(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: prependAsPath: Indicates AS Path prepending when a regional gateway receives or publishes a route.
        '''
        result = self._values.get("prepend_as_path")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def route_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: routeTypes: A match statement that indicates the list of route types.  System: System routes generated by the system. Custom: Custom routes added by users. BGP: Routes advertised to BGP.
        '''
        result = self._values.get("route_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_child_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: sourceChildInstanceTypes: A match statement that indicates the list of IDs of the source instances.  VPC: Virtual Private Cloud (VPC) VBR: Virtual Border Router (VBR) CCN: Mainland China Cloud Connect Network (CCN)
        '''
        result = self._values.get("source_child_instance_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: sourceInstanceIds: A match statement that indicates the list of IDs of the source instances.
        '''
        result = self._values.get("source_instance_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_instance_ids_reverse_match(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: sourceInstanceIdsReverseMatch: Indicates whether to enable the reverse match method of the SourceInstanceIds match condition. Valid values:  false (default): If the ID of a route's source instance is included in SourceInstanceIds, the route is permitted. true: If the ID of a route's source instance is not included in SourceInstanceIds, the route is permitted.
        '''
        result = self._values.get("source_instance_ids_reverse_match")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_region_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: sourceRegionIds: A match statement that indicates the list of IDs of the source regions.
        '''
        result = self._values.get("source_region_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def source_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: sourceRouteTableIds: A match statement that indicates the list of IDs of the source route tables.
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
        jsii.create(RosCenVbrHealthCheck, self, [scope, id, props, enable_resource_property_constraint])

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
        jsii.create(RosRouteEntry, self, [scope, id, props, enable_resource_property_constraint])

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
        jsii.create(RouteEntry, self, [scope, id, props, enable_resource_property_constraint])


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
    "RosCenVbrHealthCheck",
    "RosCenVbrHealthCheckProps",
    "RosRouteEntry",
    "RosRouteEntryProps",
    "RouteEntry",
    "RouteEntryProps",
]

publication.publish()
