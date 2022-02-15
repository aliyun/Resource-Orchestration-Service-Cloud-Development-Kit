'''
## Aliyun ROS DNS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DNS from '@alicloud/ros-cdk-dns';
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


class Domain(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.Domain",
):
    '''A ROS resource type:  ``ALIYUN::DNS::Domain``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DNS::Domain``.

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
    @jsii.member(jsii_name="attrDnsServers")
    def attr_dns_servers(self) -> ros_cdk_core.IResolvable:
        '''Attribute DnsServers: The DNS list for the domain name under resolution.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDnsServers"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DomainId: Domain ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DomainName: Domain name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupId: Domain name group ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupName: The name of the domain name group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPunyCode")
    def attr_puny_code(self) -> ros_cdk_core.IResolvable:
        '''Attribute PunyCode: punycode returned only for a Chinese domain name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPunyCode"))


class DomainGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.DomainGroup",
):
    '''A ROS resource type:  ``ALIYUN::DNS::DomainGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DNS::DomainGroup``.

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
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupId: Domain name group ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.DomainGroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName"},
)
class DomainGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::DNS::DomainGroup``.

        :param group_name: Property groupName: Domain name group name.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupName: Domain name group name.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    name_mapping={"domain_name": "domainName", "group_id": "groupId", "tags": "tags"},
)
class DomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosDomain.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DNS::Domain``.

        :param domain_name: Property domainName: Domain name.
        :param group_id: Property groupId: Domain name grouping, the default is the "default grouping" GroupId.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "domain_name": domain_name,
        }
        if group_id is not None:
            self._values["group_id"] = group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property domainName: Domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property groupId: Domain name grouping, the default is the "default grouping" GroupId.'''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDomain.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDomain.TagsProperty"]], result)

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
    '''A ROS resource type:  ``ALIYUN::DNS::DomainRecord``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainRecordProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DNS::DomainRecord``.

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
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RecordId: Parse the ID of the record.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRecordId"))


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
        domain_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        rr: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        line: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DNS::DomainRecord``.

        :param domain_name: Property domainName: Domain name.
        :param rr: Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.
        :param type: Property type: Parse record type, see parsing record type format.
        :param value: Property value: Record value.
        :param line: Property line: Parse the line, the default is default. See parsing line enumeration
        :param priority: Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.
        :param ttl: Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        '''
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
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property domainName: Domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.'''
        result = self._values.get("rr")
        assert result is not None, "Required property 'rr' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property type: Parse record type, see parsing record type format.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property value: Record value.'''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property line: Parse the line, the default is default.

        See parsing line enumeration
        '''
        result = self._values.get("line")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.'''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property ttl: The resolution time is valid.

        The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::DNS::Domain``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DNS::Domain``.

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
    @jsii.member(jsii_name="attrDnsServers")
    def attr_dns_servers(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DnsServers: The DNS list for the domain name under resolution
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDnsServers"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DomainId: Domain ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DomainName: Domain name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupId: Domain name group ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupName: The name of the domain name group
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPunyCode")
    def attr_puny_code(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PunyCode: punycode returned only for a Chinese domain name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPunyCode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupId: Domain name grouping, the default is the "default grouping" GroupId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDomain.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosDomain.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDomain.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dns.RosDomain.TagsProperty",
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


class RosDomainGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomainGroup",
):
    '''A ROS template type:  ``ALIYUN::DNS::DomainGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DNS::DomainGroup``.

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
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupId: Domain name group ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupId"))

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
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Domain name group name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosDomainGroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName"},
)
class RosDomainGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::DNS::DomainGroup``.

        :param group_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Domain name group name
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    name_mapping={"domain_name": "domainName", "group_id": "groupId", "tags": "tags"},
)
class RosDomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosDomain.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DNS::Domain``.

        :param domain_name: 
        :param group_id: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "domain_name": domain_name,
        }
        if group_id is not None:
            self._values["group_id"] = group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupId: Domain name grouping, the default is the "default grouping" GroupId
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDomain.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDomain.TagsProperty]], result)

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
    '''A ROS template type:  ``ALIYUN::DNS::DomainRecord``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainRecordProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DNS::DomainRecord``.

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
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RecordId: Parse the ID of the record
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRecordId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rr")
    def rr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "rr"))

    @rr.setter
    def rr(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "rr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: type: Parse record type, see parsing record type format
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "type", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="value")
    def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: value: Record value
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "value"))

    @value.setter
    def value(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "value", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="line")
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: line: Parse the line, the default is default. See parsing line enumeration
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "line"))

    @line.setter
    def line(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "line", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "priority", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ttl")
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "ttl"))

    @ttl.setter
    def ttl(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
        domain_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        rr: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        line: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DNS::DomainRecord``.

        :param domain_name: 
        :param rr: 
        :param type: 
        :param value: 
        :param line: 
        :param priority: 
        :param ttl: 
        '''
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
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        '''
        result = self._values.get("rr")
        assert result is not None, "Required property 'rr' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: type: Parse record type, see parsing record type format
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: value: Record value
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: line: Parse the line, the default is default. See parsing line enumeration
        '''
        result = self._values.get("line")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
