"""
## Aliyun ROS PVTZ Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_pvtz as PVTZ
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


class RosZone(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.RosZone",
):
    """A ROS template type:  ``ALIYUN::PVTZ::Zone``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosZoneProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::PVTZ::Zone``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosZone, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> typing.Any:
        """
        :Attribute: ZoneId: Zone ID
        """
        return jsii.get(self, "attrZoneId")

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
    @jsii.member(jsii_name="zoneName")
    def zone_name(self) -> builtins.str:
        """
        :Property: zoneName: Zone name
        """
        return jsii.get(self, "zoneName")

    @zone_name.setter # type: ignore
    def zone_name(self, value: builtins.str) -> None:
        jsii.set(self, "zoneName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="proxyPattern")
    def proxy_pattern(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        proxyPattern: ZONE: completely hijack the entire zone.
        RECORD: Incomplete hijacking, recursive resolution agent.
        Default to ZONE.
        """
        return jsii.get(self, "proxyPattern")

    @proxy_pattern.setter # type: ignore
    def proxy_pattern(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "proxyPattern", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="remark")
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        """
        return jsii.get(self, "remark")

    @remark.setter # type: ignore
    def remark(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "remark", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.RosZoneProps",
    jsii_struct_bases=[],
    name_mapping={
        "zone_name": "zoneName",
        "proxy_pattern": "proxyPattern",
        "remark": "remark",
    },
)
class RosZoneProps:
    def __init__(
        self,
        *,
        zone_name: builtins.str,
        proxy_pattern: typing.Optional[builtins.str] = None,
        remark: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::PVTZ::Zone``.

        :param zone_name: 
        :param proxy_pattern: 
        :param remark: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "zone_name": zone_name,
        }
        if proxy_pattern is not None:
            self._values["proxy_pattern"] = proxy_pattern
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def zone_name(self) -> builtins.str:
        """
        :Property: zoneName: Zone name
        """
        result = self._values.get("zone_name")
        assert result is not None, "Required property 'zone_name' is missing"
        return result

    @builtins.property
    def proxy_pattern(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        proxyPattern: ZONE: completely hijack the entire zone.
        RECORD: Incomplete hijacking, recursive resolution agent.
        Default to ZONE.
        """
        result = self._values.get("proxy_pattern")
        return result

    @builtins.property
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        """
        result = self._values.get("remark")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZoneProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZoneRecord(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.RosZoneRecord",
):
    """A ROS template type:  ``ALIYUN::PVTZ::ZoneRecord``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosZoneRecordProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::PVTZ::ZoneRecord``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosZoneRecord, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(self) -> typing.Any:
        """
        :Attribute: RecordId: Parsing record Id
        """
        return jsii.get(self, "attrRecordId")

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
    @jsii.member(jsii_name="rr")
    def rr(self) -> builtins.str:
        """
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        """
        return jsii.get(self, "rr")

    @rr.setter # type: ignore
    def rr(self, value: builtins.str) -> None:
        jsii.set(self, "rr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="status")
    def status(self) -> builtins.str:
        """
        :Property: status: Allowed values: [ENABLE, DISABLE]
        """
        return jsii.get(self, "status")

    @status.setter # type: ignore
    def status(self, value: builtins.str) -> None:
        jsii.set(self, "status", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="type")
    def type(self) -> builtins.str:
        """
        :Property: type: Analyze record type, currently only supports A, CNAME, TXT, MX, PTR
        """
        return jsii.get(self, "type")

    @type.setter # type: ignore
    def type(self, value: builtins.str) -> None:
        jsii.set(self, "type", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="value")
    def value(self) -> builtins.str:
        """
        :Property: value: Record value
        """
        return jsii.get(self, "value")

    @value.setter # type: ignore
    def value(self, value: builtins.str) -> None:
        jsii.set(self, "value", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: Zone Id
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: builtins.str) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="priority")
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property: priority: MX record priority, value range [1,10]. Default to 10.
        """
        return jsii.get(self, "priority")

    @priority.setter # type: ignore
    def priority(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "priority", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ttl")
    def ttl(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ttl: Survival time, default is 60
        """
        return jsii.get(self, "ttl")

    @ttl.setter # type: ignore
    def ttl(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "ttl", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.RosZoneRecordProps",
    jsii_struct_bases=[],
    name_mapping={
        "rr": "rr",
        "status": "status",
        "type": "type",
        "value": "value",
        "zone_id": "zoneId",
        "priority": "priority",
        "ttl": "ttl",
    },
)
class RosZoneRecordProps:
    def __init__(
        self,
        *,
        rr: builtins.str,
        status: builtins.str,
        type: builtins.str,
        value: builtins.str,
        zone_id: builtins.str,
        priority: typing.Optional[jsii.Number] = None,
        ttl: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::PVTZ::ZoneRecord``.

        :param rr: 
        :param status: 
        :param type: 
        :param value: 
        :param zone_id: 
        :param priority: 
        :param ttl: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "rr": rr,
            "status": status,
            "type": type,
            "value": value,
            "zone_id": zone_id,
        }
        if priority is not None:
            self._values["priority"] = priority
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def rr(self) -> builtins.str:
        """
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        """
        result = self._values.get("rr")
        assert result is not None, "Required property 'rr' is missing"
        return result

    @builtins.property
    def status(self) -> builtins.str:
        """
        :Property: status: Allowed values: [ENABLE, DISABLE]
        """
        result = self._values.get("status")
        assert result is not None, "Required property 'status' is missing"
        return result

    @builtins.property
    def type(self) -> builtins.str:
        """
        :Property: type: Analyze record type, currently only supports A, CNAME, TXT, MX, PTR
        """
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return result

    @builtins.property
    def value(self) -> builtins.str:
        """
        :Property: value: Record value
        """
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return result

    @builtins.property
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: Zone Id
        """
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return result

    @builtins.property
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property: priority: MX record priority, value range [1,10]. Default to 10.
        """
        result = self._values.get("priority")
        return result

    @builtins.property
    def ttl(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ttl: Survival time, default is 60
        """
        result = self._values.get("ttl")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZoneRecordProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZoneVpcBinder(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.RosZoneVpcBinder",
):
    """A ROS template type:  ``ALIYUN::PVTZ::ZoneVpcBinder``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosZoneVpcBinderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::PVTZ::ZoneVpcBinder``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosZoneVpcBinder, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcs")
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosZoneVpcBinder.VpcsProperty", ros_cdk_core.IResolvable]]]:
        """
        :Property: vpcs:
        """
        return jsii.get(self, "vpcs")

    @vpcs.setter # type: ignore
    def vpcs(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosZoneVpcBinder.VpcsProperty", ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "vpcs", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: Zone Id
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: builtins.str) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty",
        jsii_struct_bases=[],
        name_mapping={"region_id": "regionId", "vpc_id": "vpcId"},
    )
    class VpcsProperty:
        def __init__(self, *, region_id: builtins.str, vpc_id: builtins.str) -> None:
            """
            :param region_id: 
            :param vpc_id: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "region_id": region_id,
                "vpc_id": vpc_id,
            }

        @builtins.property
        def region_id(self) -> builtins.str:
            """
            :Property: regionId: Vpcs attribute, region Id
            """
            result = self._values.get("region_id")
            assert result is not None, "Required property 'region_id' is missing"
            return result

        @builtins.property
        def vpc_id(self) -> builtins.str:
            """
            :Property: vpcId: Vpcs attribute, vpc Id
            """
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.RosZoneVpcBinderProps",
    jsii_struct_bases=[],
    name_mapping={"vpcs": "vpcs", "zone_id": "zoneId"},
)
class RosZoneVpcBinderProps:
    def __init__(
        self,
        *,
        vpcs: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosZoneVpcBinder.VpcsProperty, ros_cdk_core.IResolvable]]],
        zone_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::PVTZ::ZoneVpcBinder``.

        :param vpcs: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "vpcs": vpcs,
            "zone_id": zone_id,
        }

    @builtins.property
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosZoneVpcBinder.VpcsProperty, ros_cdk_core.IResolvable]]]:
        """
        :Property: vpcs:
        """
        result = self._values.get("vpcs")
        assert result is not None, "Required property 'vpcs' is missing"
        return result

    @builtins.property
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: Zone Id
        """
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZoneVpcBinderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Zone(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.Zone",
):
    """A ROS resource type:  ``ALIYUN::PVTZ::Zone``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ZoneProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::PVTZ::Zone``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Zone, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> typing.Any:
        """
        :Attribute: ZoneId: Zone ID
        """
        return jsii.get(self, "attrZoneId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.ZoneProps",
    jsii_struct_bases=[],
    name_mapping={
        "zone_name": "zoneName",
        "proxy_pattern": "proxyPattern",
        "remark": "remark",
    },
)
class ZoneProps:
    def __init__(
        self,
        *,
        zone_name: builtins.str,
        proxy_pattern: typing.Optional[builtins.str] = None,
        remark: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::PVTZ::Zone``.

        :param zone_name: 
        :param proxy_pattern: 
        :param remark: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "zone_name": zone_name,
        }
        if proxy_pattern is not None:
            self._values["proxy_pattern"] = proxy_pattern
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def zone_name(self) -> builtins.str:
        """
        :Property: zoneName: Zone name
        """
        result = self._values.get("zone_name")
        assert result is not None, "Required property 'zone_name' is missing"
        return result

    @builtins.property
    def proxy_pattern(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        proxyPattern: ZONE: completely hijack the entire zone.
        RECORD: Incomplete hijacking, recursive resolution agent.
        Default to ZONE.
        """
        result = self._values.get("proxy_pattern")
        return result

    @builtins.property
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        """
        result = self._values.get("remark")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZoneProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ZoneRecord(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.ZoneRecord",
):
    """A ROS resource type:  ``ALIYUN::PVTZ::ZoneRecord``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ZoneRecordProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::PVTZ::ZoneRecord``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ZoneRecord, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(self) -> typing.Any:
        """
        :Attribute: RecordId: Parsing record Id
        """
        return jsii.get(self, "attrRecordId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.ZoneRecordProps",
    jsii_struct_bases=[],
    name_mapping={
        "rr": "rr",
        "status": "status",
        "type": "type",
        "value": "value",
        "zone_id": "zoneId",
        "priority": "priority",
        "ttl": "ttl",
    },
)
class ZoneRecordProps:
    def __init__(
        self,
        *,
        rr: builtins.str,
        status: builtins.str,
        type: builtins.str,
        value: builtins.str,
        zone_id: builtins.str,
        priority: typing.Optional[jsii.Number] = None,
        ttl: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::PVTZ::ZoneRecord``.

        :param rr: 
        :param status: 
        :param type: 
        :param value: 
        :param zone_id: 
        :param priority: 
        :param ttl: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "rr": rr,
            "status": status,
            "type": type,
            "value": value,
            "zone_id": zone_id,
        }
        if priority is not None:
            self._values["priority"] = priority
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def rr(self) -> builtins.str:
        """
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        """
        result = self._values.get("rr")
        assert result is not None, "Required property 'rr' is missing"
        return result

    @builtins.property
    def status(self) -> builtins.str:
        """
        :Property: status: Allowed values: [ENABLE, DISABLE]
        """
        result = self._values.get("status")
        assert result is not None, "Required property 'status' is missing"
        return result

    @builtins.property
    def type(self) -> builtins.str:
        """
        :Property: type: Analyze record type, currently only supports A, CNAME, TXT, MX, PTR
        """
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return result

    @builtins.property
    def value(self) -> builtins.str:
        """
        :Property: value: Record value
        """
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return result

    @builtins.property
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: Zone Id
        """
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return result

    @builtins.property
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property: priority: MX record priority, value range [1,10]. Default to 10.
        """
        result = self._values.get("priority")
        return result

    @builtins.property
    def ttl(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ttl: Survival time, default is 60
        """
        result = self._values.get("ttl")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZoneRecordProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ZoneVpcBinder(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.ZoneVpcBinder",
):
    """A ROS resource type:  ``ALIYUN::PVTZ::ZoneVpcBinder``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ZoneVpcBinderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::PVTZ::ZoneVpcBinder``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ZoneVpcBinder, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.ZoneVpcBinderProps",
    jsii_struct_bases=[],
    name_mapping={"vpcs": "vpcs", "zone_id": "zoneId"},
)
class ZoneVpcBinderProps:
    def __init__(
        self,
        *,
        vpcs: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosZoneVpcBinder.VpcsProperty, ros_cdk_core.IResolvable]]],
        zone_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::PVTZ::ZoneVpcBinder``.

        :param vpcs: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "vpcs": vpcs,
            "zone_id": zone_id,
        }

    @builtins.property
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosZoneVpcBinder.VpcsProperty, ros_cdk_core.IResolvable]]]:
        """
        :Property: vpcs:
        """
        result = self._values.get("vpcs")
        assert result is not None, "Required property 'vpcs' is missing"
        return result

    @builtins.property
    def zone_id(self) -> builtins.str:
        """
        :Property: zoneId: Zone Id
        """
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZoneVpcBinderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosZone",
    "RosZoneProps",
    "RosZoneRecord",
    "RosZoneRecordProps",
    "RosZoneVpcBinder",
    "RosZoneVpcBinderProps",
    "Zone",
    "ZoneProps",
    "ZoneRecord",
    "ZoneRecordProps",
    "ZoneVpcBinder",
    "ZoneVpcBinderProps",
]

publication.publish()
