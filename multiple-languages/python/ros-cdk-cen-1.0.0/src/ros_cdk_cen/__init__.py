"""
## Aliyun ROS CEN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_cen as CEN
```
"""
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
    """A ROS resource type:  ``ALIYUN::CEN::CenBandwidthLimit``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenBandwidthLimitProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CEN::CenBandwidthLimit``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
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
        bandwidth_limit: jsii.Number,
        cen_id: builtins.str,
        local_region_id: builtins.str,
        opposite_region_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::CenBandwidthLimit``.

        :param bandwidth_limit: 
        :param cen_id: 
        :param local_region_id: 
        :param opposite_region_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth_limit": bandwidth_limit,
            "cen_id": cen_id,
            "local_region_id": local_region_id,
            "opposite_region_id": opposite_region_id,
        }

    @builtins.property
    def bandwidth_limit(self) -> jsii.Number:
        """
        :Property: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        """
        result = self._values.get("bandwidth_limit")
        assert result is not None, "Required property 'bandwidth_limit' is missing"
        return result

    @builtins.property
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance.
        """
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return result

    @builtins.property
    def local_region_id(self) -> builtins.str:
        """
        :Property: localRegionId: The ID of the local region.
        """
        result = self._values.get("local_region_id")
        assert result is not None, "Required property 'local_region_id' is missing"
        return result

    @builtins.property
    def opposite_region_id(self) -> builtins.str:
        """
        :Property: oppositeRegionId: The ID of the other interconnected region.
        """
        result = self._values.get("opposite_region_id")
        assert result is not None, "Required property 'opposite_region_id' is missing"
        return result

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
    """A ROS resource type:  ``ALIYUN::CEN::CenBandwidthPackage``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenBandwidthPackageProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CEN::CenBandwidthPackage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(CenBandwidthPackage, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCenBandwidthPackageId")
    def attr_cen_bandwidth_package_id(self) -> typing.Any:
        """
        :Attribute: CenBandwidthPackageId: The ID of the bandwidth package.
        """
        return jsii.get(self, "attrCenBandwidthPackageId")


class CenBandwidthPackageAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenBandwidthPackageAssociation",
):
    """A ROS resource type:  ``ALIYUN::CEN::CenBandwidthPackageAssociation``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenBandwidthPackageAssociationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
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
        cen_bandwidth_package_id: builtins.str,
        cen_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        :param cen_bandwidth_package_id: 
        :param cen_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cen_bandwidth_package_id": cen_bandwidth_package_id,
            "cen_id": cen_id,
        }

    @builtins.property
    def cen_bandwidth_package_id(self) -> builtins.str:
        """
        :Property: cenBandwidthPackageId: The ID of the bandwidth package.
        """
        result = self._values.get("cen_bandwidth_package_id")
        assert result is not None, "Required property 'cen_bandwidth_package_id' is missing"
        return result

    @builtins.property
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance.
        """
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return result

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
        bandwidth: jsii.Number,
        geographic_region_a_id: builtins.str,
        geographic_region_b_id: builtins.str,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_duration: typing.Optional[jsii.Number] = None,
        bandwidth_package_charge_type: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::CenBandwidthPackage``.

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
        """
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
    def bandwidth(self) -> jsii.Number:
        """
        :Property: bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
        """
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return result

    @builtins.property
    def geographic_region_a_id(self) -> builtins.str:
        """
        :Property:

        geographicRegionAId: The other area A to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        """
        result = self._values.get("geographic_region_a_id")
        assert result is not None, "Required property 'geographic_region_a_id' is missing"
        return result

    @builtins.property
    def geographic_region_b_id(self) -> builtins.str:
        """
        :Property:

        geographicRegionBId: The other area B to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        """
        result = self._values.get("geographic_region_b_id")
        assert result is not None, "Required property 'geographic_region_b_id' is missing"
        return result

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        autoPay: Whether to automatically pay the bill. Valid value:
        true
        false (Default)
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def auto_renew_duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
        """
        result = self._values.get("auto_renew_duration")
        return result

    @builtins.property
    def bandwidth_package_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
        """
        result = self._values.get("bandwidth_package_charge_type")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the bandwidth package.
        The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the bandwidth package.
        The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The purchase period. The default value is 1.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: The pricing cycle.
        """
        result = self._values.get("pricing_cycle")
        return result

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
    """A ROS resource type:  ``ALIYUN::CEN::CenInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["CenInstanceProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CEN::CenInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(CenInstance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> typing.Any:
        """
        :Attribute: CenId: The ID of the request.
        """
        return jsii.get(self, "attrCenId")


class CenInstanceAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.CenInstanceAttachment",
):
    """A ROS resource type:  ``ALIYUN::CEN::CenInstanceAttachment``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CenInstanceAttachmentProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CEN::CenInstanceAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
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
        cen_id: builtins.str,
        child_instance_id: builtins.str,
        child_instance_region_id: builtins.str,
        child_instance_type: builtins.str,
        child_instance_owner_id: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::CenInstanceAttachment``.

        :param cen_id: 
        :param child_instance_id: 
        :param child_instance_region_id: 
        :param child_instance_type: 
        :param child_instance_owner_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_type": child_instance_type,
        }
        if child_instance_owner_id is not None:
            self._values["child_instance_owner_id"] = child_instance_owner_id

    @builtins.property
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance.
        """
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return result

    @builtins.property
    def child_instance_id(self) -> builtins.str:
        """
        :Property: childInstanceId: The ID of the network to attach.
        """
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return result

    @builtins.property
    def child_instance_region_id(self) -> builtins.str:
        """
        :Property: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        """
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return result

    @builtins.property
    def child_instance_type(self) -> builtins.str:
        """
        :Property: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        """
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return result

    @builtins.property
    def child_instance_owner_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: childInstanceOwnerId: The account ID to which the network belongs.
        """
        result = self._values.get("child_instance_owner_id")
        return result

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
    name_mapping={"description": "description", "name": "name"},
)
class CenInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::CenInstance``.

        :param description: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the instance.
        The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the instance.
        The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenBandwidthLimit(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthLimit",
):
    """A ROS template type:  ``ALIYUN::CEN::CenBandwidthLimit``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenBandwidthLimitProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CEN::CenBandwidthLimit``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCenBandwidthLimit, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidthLimit")
    def bandwidth_limit(self) -> jsii.Number:
        """
        :Property: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        """
        return jsii.get(self, "bandwidthLimit")

    @bandwidth_limit.setter # type: ignore
    def bandwidth_limit(self, value: jsii.Number) -> None:
        jsii.set(self, "bandwidthLimit", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance.
        """
        return jsii.get(self, "cenId")

    @cen_id.setter # type: ignore
    def cen_id(self, value: builtins.str) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="localRegionId")
    def local_region_id(self) -> builtins.str:
        """
        :Property: localRegionId: The ID of the local region.
        """
        return jsii.get(self, "localRegionId")

    @local_region_id.setter # type: ignore
    def local_region_id(self, value: builtins.str) -> None:
        jsii.set(self, "localRegionId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="oppositeRegionId")
    def opposite_region_id(self) -> builtins.str:
        """
        :Property: oppositeRegionId: The ID of the other interconnected region.
        """
        return jsii.get(self, "oppositeRegionId")

    @opposite_region_id.setter # type: ignore
    def opposite_region_id(self, value: builtins.str) -> None:
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
        bandwidth_limit: jsii.Number,
        cen_id: builtins.str,
        local_region_id: builtins.str,
        opposite_region_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::CenBandwidthLimit``.

        :param bandwidth_limit: 
        :param cen_id: 
        :param local_region_id: 
        :param opposite_region_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth_limit": bandwidth_limit,
            "cen_id": cen_id,
            "local_region_id": local_region_id,
            "opposite_region_id": opposite_region_id,
        }

    @builtins.property
    def bandwidth_limit(self) -> jsii.Number:
        """
        :Property: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        """
        result = self._values.get("bandwidth_limit")
        assert result is not None, "Required property 'bandwidth_limit' is missing"
        return result

    @builtins.property
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance.
        """
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return result

    @builtins.property
    def local_region_id(self) -> builtins.str:
        """
        :Property: localRegionId: The ID of the local region.
        """
        result = self._values.get("local_region_id")
        assert result is not None, "Required property 'local_region_id' is missing"
        return result

    @builtins.property
    def opposite_region_id(self) -> builtins.str:
        """
        :Property: oppositeRegionId: The ID of the other interconnected region.
        """
        result = self._values.get("opposite_region_id")
        assert result is not None, "Required property 'opposite_region_id' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::CEN::CenBandwidthPackage``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenBandwidthPackageProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CEN::CenBandwidthPackage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCenBandwidthPackage, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCenBandwidthPackageId")
    def attr_cen_bandwidth_package_id(self) -> typing.Any:
        """
        :Attribute: CenBandwidthPackageId: The ID of the bandwidth package.
        """
        return jsii.get(self, "attrCenBandwidthPackageId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> jsii.Number:
        """
        :Property: bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
        """
        return jsii.get(self, "bandwidth")

    @bandwidth.setter # type: ignore
    def bandwidth(self, value: jsii.Number) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="geographicRegionAId")
    def geographic_region_a_id(self) -> builtins.str:
        """
        :Property:

        geographicRegionAId: The other area A to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        """
        return jsii.get(self, "geographicRegionAId")

    @geographic_region_a_id.setter # type: ignore
    def geographic_region_a_id(self, value: builtins.str) -> None:
        jsii.set(self, "geographicRegionAId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="geographicRegionBId")
    def geographic_region_b_id(self) -> builtins.str:
        """
        :Property:

        geographicRegionBId: The other area B to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        """
        return jsii.get(self, "geographicRegionBId")

    @geographic_region_b_id.setter # type: ignore
    def geographic_region_b_id(self, value: builtins.str) -> None:
        jsii.set(self, "geographicRegionBId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        autoPay: Whether to automatically pay the bill. Valid value:
        true
        false (Default)
        """
        return jsii.get(self, "autoPay")

    @auto_pay.setter # type: ignore
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        return jsii.get(self, "autoRenew")

    @auto_renew.setter # type: ignore
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenewDuration")
    def auto_renew_duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
        """
        return jsii.get(self, "autoRenewDuration")

    @auto_renew_duration.setter # type: ignore
    def auto_renew_duration(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "autoRenewDuration", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidthPackageChargeType")
    def bandwidth_package_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
        """
        return jsii.get(self, "bandwidthPackageChargeType")

    @bandwidth_package_charge_type.setter # type: ignore
    def bandwidth_package_charge_type(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "bandwidthPackageChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the bandwidth package.
        The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the bandwidth package.
        The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The purchase period. The default value is 1.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: The pricing cycle.
        """
        return jsii.get(self, "pricingCycle")

    @pricing_cycle.setter # type: ignore
    def pricing_cycle(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "pricingCycle", value)


class RosCenBandwidthPackageAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociation",
):
    """A ROS template type:  ``ALIYUN::CEN::CenBandwidthPackageAssociation``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenBandwidthPackageAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCenBandwidthPackageAssociation, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cenBandwidthPackageId")
    def cen_bandwidth_package_id(self) -> builtins.str:
        """
        :Property: cenBandwidthPackageId: The ID of the bandwidth package.
        """
        return jsii.get(self, "cenBandwidthPackageId")

    @cen_bandwidth_package_id.setter # type: ignore
    def cen_bandwidth_package_id(self, value: builtins.str) -> None:
        jsii.set(self, "cenBandwidthPackageId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance.
        """
        return jsii.get(self, "cenId")

    @cen_id.setter # type: ignore
    def cen_id(self, value: builtins.str) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
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
        cen_bandwidth_package_id: builtins.str,
        cen_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::CenBandwidthPackageAssociation``.

        :param cen_bandwidth_package_id: 
        :param cen_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cen_bandwidth_package_id": cen_bandwidth_package_id,
            "cen_id": cen_id,
        }

    @builtins.property
    def cen_bandwidth_package_id(self) -> builtins.str:
        """
        :Property: cenBandwidthPackageId: The ID of the bandwidth package.
        """
        result = self._values.get("cen_bandwidth_package_id")
        assert result is not None, "Required property 'cen_bandwidth_package_id' is missing"
        return result

    @builtins.property
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance.
        """
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return result

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
        bandwidth: jsii.Number,
        geographic_region_a_id: builtins.str,
        geographic_region_b_id: builtins.str,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_duration: typing.Optional[jsii.Number] = None,
        bandwidth_package_charge_type: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::CenBandwidthPackage``.

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
        """
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
    def bandwidth(self) -> jsii.Number:
        """
        :Property: bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
        """
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return result

    @builtins.property
    def geographic_region_a_id(self) -> builtins.str:
        """
        :Property:

        geographicRegionAId: The other area A to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        """
        result = self._values.get("geographic_region_a_id")
        assert result is not None, "Required property 'geographic_region_a_id' is missing"
        return result

    @builtins.property
    def geographic_region_b_id(self) -> builtins.str:
        """
        :Property:

        geographicRegionBId: The other area B to connect.
        Valid value: China | North-America | Asia-Pacific | Europe | Australia
        """
        result = self._values.get("geographic_region_b_id")
        assert result is not None, "Required property 'geographic_region_b_id' is missing"
        return result

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        autoPay: Whether to automatically pay the bill. Valid value:
        true
        false (Default)
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def auto_renew_duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property: autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
        """
        result = self._values.get("auto_renew_duration")
        return result

    @builtins.property
    def bandwidth_package_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
        """
        result = self._values.get("bandwidth_package_charge_type")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the bandwidth package.
        The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the bandwidth package.
        The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The purchase period. The default value is 1.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle: The pricing cycle.
        """
        result = self._values.get("pricing_cycle")
        return result

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
    """A ROS template type:  ``ALIYUN::CEN::CenInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CEN::CenInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCenInstance, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> typing.Any:
        """
        :Attribute: CenId: The ID of the request.
        """
        return jsii.get(self, "attrCenId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the instance.
        The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the instance.
        The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)


class RosCenInstanceAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosCenInstanceAttachment",
):
    """A ROS template type:  ``ALIYUN::CEN::CenInstanceAttachment``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCenInstanceAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CEN::CenInstanceAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCenInstanceAttachment, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance.
        """
        return jsii.get(self, "cenId")

    @cen_id.setter # type: ignore
    def cen_id(self, value: builtins.str) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="childInstanceId")
    def child_instance_id(self) -> builtins.str:
        """
        :Property: childInstanceId: The ID of the network to attach.
        """
        return jsii.get(self, "childInstanceId")

    @child_instance_id.setter # type: ignore
    def child_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "childInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="childInstanceRegionId")
    def child_instance_region_id(self) -> builtins.str:
        """
        :Property: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        """
        return jsii.get(self, "childInstanceRegionId")

    @child_instance_region_id.setter # type: ignore
    def child_instance_region_id(self, value: builtins.str) -> None:
        jsii.set(self, "childInstanceRegionId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="childInstanceType")
    def child_instance_type(self) -> builtins.str:
        """
        :Property: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        """
        return jsii.get(self, "childInstanceType")

    @child_instance_type.setter # type: ignore
    def child_instance_type(self, value: builtins.str) -> None:
        jsii.set(self, "childInstanceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="childInstanceOwnerId")
    def child_instance_owner_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: childInstanceOwnerId: The account ID to which the network belongs.
        """
        return jsii.get(self, "childInstanceOwnerId")

    @child_instance_owner_id.setter # type: ignore
    def child_instance_owner_id(self, value: typing.Optional[jsii.Number]) -> None:
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
        cen_id: builtins.str,
        child_instance_id: builtins.str,
        child_instance_region_id: builtins.str,
        child_instance_type: builtins.str,
        child_instance_owner_id: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::CenInstanceAttachment``.

        :param cen_id: 
        :param child_instance_id: 
        :param child_instance_region_id: 
        :param child_instance_type: 
        :param child_instance_owner_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_type": child_instance_type,
        }
        if child_instance_owner_id is not None:
            self._values["child_instance_owner_id"] = child_instance_owner_id

    @builtins.property
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance.
        """
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return result

    @builtins.property
    def child_instance_id(self) -> builtins.str:
        """
        :Property: childInstanceId: The ID of the network to attach.
        """
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return result

    @builtins.property
    def child_instance_region_id(self) -> builtins.str:
        """
        :Property: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        """
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return result

    @builtins.property
    def child_instance_type(self) -> builtins.str:
        """
        :Property: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        """
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return result

    @builtins.property
    def child_instance_owner_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: childInstanceOwnerId: The account ID to which the network belongs.
        """
        result = self._values.get("child_instance_owner_id")
        return result

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
    name_mapping={"description": "description", "name": "name"},
)
class RosCenInstanceProps:
    def __init__(
        self,
        *,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::CenInstance``.

        :param description: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the instance.
        The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the instance.
        The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
        """
        result = self._values.get("name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRouteEntry(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.RosRouteEntry",
):
    """A ROS template type:  ``ALIYUN::CEN::RouteEntry``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRouteEntryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CEN::RouteEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosRouteEntry, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance where the route entry is published.
        """
        return jsii.get(self, "cenId")

    @cen_id.setter # type: ignore
    def cen_id(self, value: builtins.str) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="childInstanceId")
    def child_instance_id(self) -> builtins.str:
        """
        :Property: childInstanceId: The ID of the attached network (VPC or VBR).
        """
        return jsii.get(self, "childInstanceId")

    @child_instance_id.setter # type: ignore
    def child_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "childInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="childInstanceRegionId")
    def child_instance_region_id(self) -> builtins.str:
        """
        :Property: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        """
        return jsii.get(self, "childInstanceRegionId")

    @child_instance_region_id.setter # type: ignore
    def child_instance_region_id(self, value: builtins.str) -> None:
        jsii.set(self, "childInstanceRegionId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="childInstanceRouteTableId")
    def child_instance_route_table_id(self) -> builtins.str:
        """
        :Property: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        """
        return jsii.get(self, "childInstanceRouteTableId")

    @child_instance_route_table_id.setter # type: ignore
    def child_instance_route_table_id(self, value: builtins.str) -> None:
        jsii.set(self, "childInstanceRouteTableId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="childInstanceType")
    def child_instance_type(self) -> builtins.str:
        """
        :Property: childInstanceType: The type of the network, value: VPC VBR
        """
        return jsii.get(self, "childInstanceType")

    @child_instance_type.setter # type: ignore
    def child_instance_type(self, value: builtins.str) -> None:
        jsii.set(self, "childInstanceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationCidrBlock")
    def destination_cidr_block(self) -> builtins.str:
        """
        :Property: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        """
        return jsii.get(self, "destinationCidrBlock")

    @destination_cidr_block.setter # type: ignore
    def destination_cidr_block(self, value: builtins.str) -> None:
        jsii.set(self, "destinationCidrBlock", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
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
        cen_id: builtins.str,
        child_instance_id: builtins.str,
        child_instance_region_id: builtins.str,
        child_instance_route_table_id: builtins.str,
        child_instance_type: builtins.str,
        destination_cidr_block: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::RouteEntry``.

        :param cen_id: 
        :param child_instance_id: 
        :param child_instance_region_id: 
        :param child_instance_route_table_id: 
        :param child_instance_type: 
        :param destination_cidr_block: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_route_table_id": child_instance_route_table_id,
            "child_instance_type": child_instance_type,
            "destination_cidr_block": destination_cidr_block,
        }

    @builtins.property
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance where the route entry is published.
        """
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return result

    @builtins.property
    def child_instance_id(self) -> builtins.str:
        """
        :Property: childInstanceId: The ID of the attached network (VPC or VBR).
        """
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return result

    @builtins.property
    def child_instance_region_id(self) -> builtins.str:
        """
        :Property: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        """
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return result

    @builtins.property
    def child_instance_route_table_id(self) -> builtins.str:
        """
        :Property: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        """
        result = self._values.get("child_instance_route_table_id")
        assert result is not None, "Required property 'child_instance_route_table_id' is missing"
        return result

    @builtins.property
    def child_instance_type(self) -> builtins.str:
        """
        :Property: childInstanceType: The type of the network, value: VPC VBR
        """
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return result

    @builtins.property
    def destination_cidr_block(self) -> builtins.str:
        """
        :Property: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        """
        result = self._values.get("destination_cidr_block")
        assert result is not None, "Required property 'destination_cidr_block' is missing"
        return result

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
    """A ROS resource type:  ``ALIYUN::CEN::RouteEntry``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RouteEntryProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CEN::RouteEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
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
        cen_id: builtins.str,
        child_instance_id: builtins.str,
        child_instance_region_id: builtins.str,
        child_instance_route_table_id: builtins.str,
        child_instance_type: builtins.str,
        destination_cidr_block: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::CEN::RouteEntry``.

        :param cen_id: 
        :param child_instance_id: 
        :param child_instance_region_id: 
        :param child_instance_route_table_id: 
        :param child_instance_type: 
        :param destination_cidr_block: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "child_instance_id": child_instance_id,
            "child_instance_region_id": child_instance_region_id,
            "child_instance_route_table_id": child_instance_route_table_id,
            "child_instance_type": child_instance_type,
            "destination_cidr_block": destination_cidr_block,
        }

    @builtins.property
    def cen_id(self) -> builtins.str:
        """
        :Property: cenId: The ID of the CEN instance where the route entry is published.
        """
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return result

    @builtins.property
    def child_instance_id(self) -> builtins.str:
        """
        :Property: childInstanceId: The ID of the attached network (VPC or VBR).
        """
        result = self._values.get("child_instance_id")
        assert result is not None, "Required property 'child_instance_id' is missing"
        return result

    @builtins.property
    def child_instance_region_id(self) -> builtins.str:
        """
        :Property: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        """
        result = self._values.get("child_instance_region_id")
        assert result is not None, "Required property 'child_instance_region_id' is missing"
        return result

    @builtins.property
    def child_instance_route_table_id(self) -> builtins.str:
        """
        :Property: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        """
        result = self._values.get("child_instance_route_table_id")
        assert result is not None, "Required property 'child_instance_route_table_id' is missing"
        return result

    @builtins.property
    def child_instance_type(self) -> builtins.str:
        """
        :Property: childInstanceType: The type of the network, value: VPC VBR
        """
        result = self._values.get("child_instance_type")
        assert result is not None, "Required property 'child_instance_type' is missing"
        return result

    @builtins.property
    def destination_cidr_block(self) -> builtins.str:
        """
        :Property: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        """
        result = self._values.get("destination_cidr_block")
        assert result is not None, "Required property 'destination_cidr_block' is missing"
        return result

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
    "RosRouteEntry",
    "RosRouteEntryProps",
    "RouteEntry",
    "RouteEntryProps",
]

publication.publish()
