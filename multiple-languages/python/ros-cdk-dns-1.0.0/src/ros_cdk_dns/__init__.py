"""
## Aliyun ROS DNS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_dns as DNS
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


class Domain(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.Domain",
):
    """A ROS resource type:  ``ALIYUN::DNS::Domain``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DNS::Domain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Domain, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDnsServers")
    def attr_dns_servers(self) -> typing.Any:
        """
        :Attribute: DnsServers: The DNS list for the domain name under resolution
        """
        return jsii.get(self, "attrDnsServers")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(self) -> typing.Any:
        """
        :Attribute: DomainId: Domain ID
        """
        return jsii.get(self, "attrDomainId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> typing.Any:
        """
        :Attribute: DomainName: Domain name
        """
        return jsii.get(self, "attrDomainName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: Domain name group ID
        """
        return jsii.get(self, "attrGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> typing.Any:
        """
        :Attribute: GroupName: The name of the domain name group
        """
        return jsii.get(self, "attrGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPunyCode")
    def attr_puny_code(self) -> typing.Any:
        """
        :Attribute: PunyCode: punycode returned only for a Chinese domain name
        """
        return jsii.get(self, "attrPunyCode")


class DomainGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.DomainGroup",
):
    """A ROS resource type:  ``ALIYUN::DNS::DomainGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DNS::DomainGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DomainGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: Domain name group ID
        """
        return jsii.get(self, "attrGroupId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.DomainGroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName"},
)
class DomainGroupProps:
    def __init__(self, *, group_name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::DNS::DomainGroup``.

        :param group_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }

    @builtins.property
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: Domain name group name
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.DomainProps",
    jsii_struct_bases=[],
    name_mapping={"domain_name": "domainName", "group_id": "groupId"},
)
class DomainProps:
    def __init__(
        self,
        *,
        domain_name: builtins.str,
        group_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DNS::Domain``.

        :param domain_name: 
        :param group_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "domain_name": domain_name,
        }
        if group_id is not None:
            self._values["group_id"] = group_id

    @builtins.property
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Domain name
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

    @builtins.property
    def group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupId: Domain name grouping, the default is the "default grouping" GroupId
        """
        result = self._values.get("group_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DomainRecord(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.DomainRecord",
):
    """A ROS resource type:  ``ALIYUN::DNS::DomainRecord``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainRecordProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DNS::DomainRecord``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DomainRecord, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(self) -> typing.Any:
        """
        :Attribute: RecordId: Parse the ID of the record
        """
        return jsii.get(self, "attrRecordId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.DomainRecordProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "rr": "rr",
        "type": "type",
        "value": "value",
        "line": "line",
        "priority": "priority",
        "ttl": "ttl",
    },
)
class DomainRecordProps:
    def __init__(
        self,
        *,
        domain_name: builtins.str,
        rr: builtins.str,
        type: builtins.str,
        value: builtins.str,
        line: typing.Optional[builtins.str] = None,
        priority: typing.Optional[jsii.Number] = None,
        ttl: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DNS::DomainRecord``.

        :param domain_name: 
        :param rr: 
        :param type: 
        :param value: 
        :param line: 
        :param priority: 
        :param ttl: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "domain_name": domain_name,
            "rr": rr,
            "type": type,
            "value": value,
        }
        if line is not None:
            self._values["line"] = line
        if priority is not None:
            self._values["priority"] = priority
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Domain name
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

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
    def type(self) -> builtins.str:
        """
        :Property: type: Parse record type, see parsing record type format
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
    def line(self) -> typing.Optional[builtins.str]:
        """
        :Property: line: Parse the line, the default is default. See parsing line enumeration
        """
        result = self._values.get("line")
        return result

    @builtins.property
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
        """
        result = self._values.get("priority")
        return result

    @builtins.property
    def ttl(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        """
        result = self._values.get("ttl")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainRecordProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomain",
):
    """A ROS template type:  ``ALIYUN::DNS::Domain``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DNS::Domain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDomain, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrDnsServers")
    def attr_dns_servers(self) -> typing.Any:
        """
        :Attribute: DnsServers: The DNS list for the domain name under resolution
        """
        return jsii.get(self, "attrDnsServers")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(self) -> typing.Any:
        """
        :Attribute: DomainId: Domain ID
        """
        return jsii.get(self, "attrDomainId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> typing.Any:
        """
        :Attribute: DomainName: Domain name
        """
        return jsii.get(self, "attrDomainName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: Domain name group ID
        """
        return jsii.get(self, "attrGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> typing.Any:
        """
        :Attribute: GroupName: The name of the domain name group
        """
        return jsii.get(self, "attrGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPunyCode")
    def attr_puny_code(self) -> typing.Any:
        """
        :Attribute: PunyCode: punycode returned only for a Chinese domain name
        """
        return jsii.get(self, "attrPunyCode")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Domain name
        """
        return jsii.get(self, "domainName")

    @domain_name.setter # type: ignore
    def domain_name(self, value: builtins.str) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupId: Domain name grouping, the default is the "default grouping" GroupId
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "groupId", value)


class RosDomainGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomainGroup",
):
    """A ROS template type:  ``ALIYUN::DNS::DomainGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DNS::DomainGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDomainGroup, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: Domain name group ID
        """
        return jsii.get(self, "attrGroupId")

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
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: Domain name group name
        """
        return jsii.get(self, "groupName")

    @group_name.setter # type: ignore
    def group_name(self, value: builtins.str) -> None:
        jsii.set(self, "groupName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosDomainGroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName"},
)
class RosDomainGroupProps:
    def __init__(self, *, group_name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::DNS::DomainGroup``.

        :param group_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }

    @builtins.property
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: Domain name group name
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosDomainProps",
    jsii_struct_bases=[],
    name_mapping={"domain_name": "domainName", "group_id": "groupId"},
)
class RosDomainProps:
    def __init__(
        self,
        *,
        domain_name: builtins.str,
        group_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DNS::Domain``.

        :param domain_name: 
        :param group_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "domain_name": domain_name,
        }
        if group_id is not None:
            self._values["group_id"] = group_id

    @builtins.property
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Domain name
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

    @builtins.property
    def group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupId: Domain name grouping, the default is the "default grouping" GroupId
        """
        result = self._values.get("group_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomainRecord(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomainRecord",
):
    """A ROS template type:  ``ALIYUN::DNS::DomainRecord``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainRecordProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DNS::DomainRecord``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDomainRecord, self, [scope, id, props, enable_resource_property_constraint])

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
        :Attribute: RecordId: Parse the ID of the record
        """
        return jsii.get(self, "attrRecordId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Domain name
        """
        return jsii.get(self, "domainName")

    @domain_name.setter # type: ignore
    def domain_name(self, value: builtins.str) -> None:
        jsii.set(self, "domainName", value)

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
    @jsii.member(jsii_name="type")
    def type(self) -> builtins.str:
        """
        :Property: type: Parse record type, see parsing record type format
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
    @jsii.member(jsii_name="line")
    def line(self) -> typing.Optional[builtins.str]:
        """
        :Property: line: Parse the line, the default is default. See parsing line enumeration
        """
        return jsii.get(self, "line")

    @line.setter # type: ignore
    def line(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "line", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="priority")
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
        """
        return jsii.get(self, "priority")

    @priority.setter # type: ignore
    def priority(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "priority", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ttl")
    def ttl(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        """
        return jsii.get(self, "ttl")

    @ttl.setter # type: ignore
    def ttl(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "ttl", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosDomainRecordProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "rr": "rr",
        "type": "type",
        "value": "value",
        "line": "line",
        "priority": "priority",
        "ttl": "ttl",
    },
)
class RosDomainRecordProps:
    def __init__(
        self,
        *,
        domain_name: builtins.str,
        rr: builtins.str,
        type: builtins.str,
        value: builtins.str,
        line: typing.Optional[builtins.str] = None,
        priority: typing.Optional[jsii.Number] = None,
        ttl: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DNS::DomainRecord``.

        :param domain_name: 
        :param rr: 
        :param type: 
        :param value: 
        :param line: 
        :param priority: 
        :param ttl: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "domain_name": domain_name,
            "rr": rr,
            "type": type,
            "value": value,
        }
        if line is not None:
            self._values["line"] = line
        if priority is not None:
            self._values["priority"] = priority
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Domain name
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

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
    def type(self) -> builtins.str:
        """
        :Property: type: Parse record type, see parsing record type format
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
    def line(self) -> typing.Optional[builtins.str]:
        """
        :Property: line: Parse the line, the default is default. See parsing line enumeration
        """
        result = self._values.get("line")
        return result

    @builtins.property
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
        """
        result = self._values.get("priority")
        return result

    @builtins.property
    def ttl(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        """
        result = self._values.get("ttl")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainRecordProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Domain",
    "DomainGroup",
    "DomainGroupProps",
    "DomainProps",
    "DomainRecord",
    "DomainRecordProps",
    "RosDomain",
    "RosDomainGroup",
    "RosDomainGroupProps",
    "RosDomainProps",
    "RosDomainRecord",
    "RosDomainRecordProps",
]

publication.publish()
