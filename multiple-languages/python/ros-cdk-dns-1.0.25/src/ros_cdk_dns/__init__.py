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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Domain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.Domain",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::Domain``, which is used to add a domain name.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomain``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68675ca91cacc3d03ca6f4f05fcb6d32d86e1aaf939975d10d9ac4aea4c34771)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDnsServers")
    def attr_dns_servers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DnsServers: The DNS list for the domain name under resolution.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDnsServers"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainId: Domain ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainName: Domain name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupId: Domain name group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupName: The name of the domain name group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrPunyCode")
    def attr_puny_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PunyCode: punycode returned only for a Chinese domain name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPunyCode"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__167fd44bb6824dd605bf4dbefb609eb979d0de597fc5fb77cbb9192ddd4de7d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82c2363692e855e443d30e5d805493adb327b0881b8cabc189a31c9c38173745)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DomainProps":
        return typing.cast("DomainProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DomainProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c2a5cd303659dda312446cb13c8c04c01009a8ae81d3257401cc38e4a3b7b1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fadf45b3186ede5071cfaa92b5032e72c41e3ff5dd3c28b597fad8ecc4b9c7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class DomainGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.DomainGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::DomainGroup``, which is used to add a domain name group.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomainGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc0634a5d8e5d02667b094b6d23b0f4ad91c9eaea2036e25ef1e91da037fed88)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupId: Domain name group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8c709c5b451f1ae263880ceaa07d935981b7cea7067b44d60380a5780fd11a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__206cb1a2bae7db897ebd92ba6741ee73703e80254e1054db03c550fd762bddd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DomainGroupProps":
        return typing.cast("DomainGroupProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DomainGroupProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc4ff0d22e68e104ee32932771f7fa10665970eab6ebc84cf8c7b815c4f23b3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c36716ea3aa32178ba64852b39724eca54596fa60249c2faffb7bddc4116383f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.DomainGroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName"},
)
class DomainGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DomainGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup

        :param group_name: Property groupName: Domain name group name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__870e7dce3a2c27425fac2ea0724cd35e4ea4acb14a4d25bd0595e75d676a18d4)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
        }

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: Domain name group name.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    name_mapping={
        "domain_name": "domainName",
        "group_id": "groupId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class DomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDomain.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Domain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain

        :param domain_name: Property domainName: Domain name.
        :param group_id: Property groupId: Domain name grouping, the default is the "default grouping" GroupId.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54144fb86336ae6a2a3b61141b78184b3058b63a7638c776d4bed058fb28eedd)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
        }
        if group_id is not None:
            self._values["group_id"] = group_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: Domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: Domain name grouping, the default is the "default grouping" GroupId.'''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.DomainRecord",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::DomainRecord``, which is used to add a domain name system (DNS) record.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomainRecord``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainRecordProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff85cf6f434336025c41e85270626eb795aec726d497686f68628d4382606550)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RecordId: Parse the ID of the record.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRecordId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d5fd820d1fa21acdd1b7e96b8e3b61511ce5289dd3ea4aa7635b982710cc014)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6291eae60d2f5c87a5ef1f4df17492e60f5a92289e0d8ec690c352b34a5f6b9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DomainRecordProps":
        return typing.cast("DomainRecordProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DomainRecordProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8a7ebef6fd1f9de76481bbc139440484ec09330f5cfe793d8b529115f9be621)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a57c341aa9f74c0b2bce31ba243259ae182f946a2bb88bf8c44a02402918c6c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


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
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DomainRecord``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord

        :param domain_name: Property domainName: Domain name.
        :param rr: Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.
        :param type: Property type: Parse record type, see parsing record type format.
        :param value: Property value: Record value.
        :param line: Property line: Parse the line, the default is default. See parsing line enumeration
        :param priority: Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.
        :param ttl: Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bbc2719a168ec2f8c950e1f545a604d25f38b321d07897ff2b71b20ffc833fa)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument rr", value=rr, expected_type=type_hints["rr"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument line", value=line, expected_type=type_hints["line"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: Domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rr(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.'''
        result = self._values.get("rr")
        assert result is not None, "Required property 'rr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: Parse record type, see parsing record type format.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property value: Record value.'''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property line: Parse the line, the default is default.

        See parsing line enumeration
        '''
        result = self._values.get("line")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.'''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ttl: The resolution time is valid.

        The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainRecordProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DNS::Instance``, which is used to create an Alibaba Cloud DNS instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__33e15550113a92d6d3e6098456a214d174ad3a53fcc8c9e52977cd245eae044d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: DNS instance id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__654994675929b971ca5ffaa883bd7d9de1d55f9f97db84d40665ad842e394d70)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8bfdecdcd1d5bab13d433dcc61edc4c99bba5ab351e9e329a8eb631273673d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4b37800d8b59ee4a333270efc290c27161a28e6a76127755aae68aef8884c3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4902032cf7f526aaf6e1c366b451fe57dba3457c04d16ab882cff5ff58edcc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "dns_security": "dnsSecurity",
        "domain_numbers": "domainNumbers",
        "period": "period",
        "period_unit": "periodUnit",
        "version": "version",
        "domain": "domain",
        "instance_type": "instanceType",
        "renewal_status": "renewalStatus",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        dns_security: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_numbers: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance

        :param dns_security: Property dnsSecurity: The DNS security policy. Valid values: - no: No protection against DNS attacks is provided. - basic: Basic protection against DNS attacks is provided. - advanced: Advanced protection against DNS attacks is provided.
        :param domain_numbers: Property domainNumbers: The number of domain names.
        :param period: Property period: The subscription duration. Valid values: - If unit is month: 1, 2, 3, 6 - If unit is year: 1, 2
        :param period_unit: Property periodUnit: The subscription duration unit.
        :param version: Property version: The edition of Alibaba Cloud DNS. Valid values: If create hosted public zone: - version_personal: Personal Edition. - version_enterprise_basic: Enterprise Standard Edition. - version_enterprise_advanced: Enterprise Ultimate Edition. If create cached public zone: - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
        :param domain: Property domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
        :param instance_type: Property instanceType: The type of the instance. Valid values: - HostedPublicZone: Hosted Public Zone - CachedPublicZone: Cached Public Zone.
        :param renewal_status: Property renewalStatus: The renewal method. Valid values: - AutoRenewal: The instance is automatically renewed. - ManualRenewal: The instance is manually renewed. Default value: ManualRenewal.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba95997c0729dd10f964ab726668df3a13eb424c3c4b96783b94711c40bd2d72)
            check_type(argname="argument dns_security", value=dns_security, expected_type=type_hints["dns_security"])
            check_type(argname="argument domain_numbers", value=domain_numbers, expected_type=type_hints["domain_numbers"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dns_security": dns_security,
            "domain_numbers": domain_numbers,
            "period": period,
            "period_unit": period_unit,
            "version": version,
        }
        if domain is not None:
            self._values["domain"] = domain
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status

    @builtins.property
    def dns_security(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dnsSecurity: The DNS security policy.

        Valid values:

        - no: No protection against DNS attacks is provided.
        - basic: Basic protection against DNS attacks is provided.
        - advanced: Advanced protection against DNS attacks is provided.
        '''
        result = self._values.get("dns_security")
        assert result is not None, "Required property 'dns_security' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_numbers(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainNumbers: The number of domain names.'''
        result = self._values.get("domain_numbers")
        assert result is not None, "Required property 'domain_numbers' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property period: The subscription duration.

        Valid values:

        - If unit is month: 1, 2, 3, 6
        - If unit is year: 1, 2
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property periodUnit: The subscription duration unit.'''
        result = self._values.get("period_unit")
        assert result is not None, "Required property 'period_unit' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property version: The edition of Alibaba Cloud DNS.

        Valid values:
        If create hosted public zone:

        - version_personal: Personal Edition.
        - version_enterprise_basic: Enterprise Standard Edition.
        - version_enterprise_advanced: Enterprise Ultimate Edition.
          If create cached public zone:
        - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domain: The domain name that you want to bind to the instance.

        If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
        '''
        result = self._values.get("domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: The type of the instance.

        Valid values:

        - HostedPublicZone: Hosted Public Zone
        - CachedPublicZone: Cached Public Zone.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewalStatus: The renewal method.

        Valid values:

        - AutoRenewal: The instance is automatically renewed.
        - ManualRenewal: The instance is manually renewed.
          Default value: ManualRenewal.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomain",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::Domain``, which is used to add a domain name.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Domain`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb25659fa22e8a493ed571fe3e6c0fa528be099a39778f87cde719e1137edba7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d2a902deb0d9a87dcfc5ff63966368d4fc6e5f0f1c32d61a546aaf59783bfd91)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsServers")
    def attr_dns_servers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DnsServers: The DNS list for the domain name under resolution
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDnsServers"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainId: Domain ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: Domain name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: Domain name group ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupName: The name of the domain name group
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrPunyCode")
    def attr_puny_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PunyCode: punycode returned only for a Chinese domain name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPunyCode"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__618ea2054753f9ca4a0ab05020803cf21812447252c396b3ba45bec7a44312e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e1a7981008765d63d000cae9f1d0162665ced5d86280ff1943a27063b82b43d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: Domain name grouping, the default is the "default grouping" GroupId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__239348e38b328eb902903185f713bde98370366e63561583dce03203abbcf03f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__7b0643773e4f93b7d714c1bfd1768051ea3c21ed0e07a8c285e9873b5ed96903)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__558cca742078e2f16384d95652cbd5750df3d539da4c3aba79e30dbafb1902b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b82adc7cf0463a84a76fcf4aa9abe0a462eb796a8c90ca17415175326e181501)
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


class RosDomainGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomainGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::DomainGroup``, which is used to add a domain name group.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DomainGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36c9c64667ef48506f14bf425f31455781aea1190115fce33af3d6b4e27733e2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__054b11b59ff90286929cfb05472515ffba8877db14a7ac6b18bbd0aeeae655e7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: Domain name group ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__58b52f9588b8fe7497c6f0e77e95a436d3c2cea4da9231c948a1095b057cf5e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Domain name group name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__233ac99ec64f0b3e5d516110357bc6308bac4f29c8d33ce290fb1504c8e97a67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosDomainGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup

        :param group_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99e77b4391b951fafc8dfcb5ac842433e98ffe2b146eb0ac3193e57fcbdb878a)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
        }

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Domain name group name
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    name_mapping={
        "domain_name": "domainName",
        "group_id": "groupId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosDomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDomain.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain

        :param domain_name: 
        :param group_id: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6437ac63b2b357896d63b81c82954f004f688e75050a21b9c46dab9ac23ab871)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
        }
        if group_id is not None:
            self._values["group_id"] = group_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: Domain name grouping, the default is the "default grouping" GroupId
        '''
        result = self._values.get("group_id")
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
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosDomainRecord",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::DomainRecord``, which is used to add a domain name system (DNS) record.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DomainRecord`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainRecordProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__206efbd760d0f7682402adad13fe4ac64f64a984f388af30c850825ce5fb736f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__339f7968e547e56e71f7954ae0b46b223ae608104c5e9f264bba41968a27188b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RecordId: Parse the ID of the record
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRecordId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7167352467d2f74de035d9733b82c5482c4d5baffad5f4476d1fb246d44713c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03a60909c400b279c363196be08543381e79486f575b5f53a31e0611b65147eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="rr")
    def rr(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "rr"))

    @rr.setter
    def rr(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__697dc88744c9e6d654d3ee52511a0627327844151c0a3df16bdd8b04b5dba429)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rr", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: Parse record type, see parsing record type format
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0b396858b0125a0896e0142c0abd1d47082d451a5924c093f76922586f32a36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="value")
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: value: Record value
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "value"))

    @value.setter
    def value(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1699df48d7e6c96cc581812e0483da645f90df7dd684a0208bd69496ce758765)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "value", value)

    @builtins.property
    @jsii.member(jsii_name="line")
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: line: Parse the line, the default is default. See parsing line enumeration
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "line"))

    @line.setter
    def line(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adfca66ec152873ba73156ce54e3f481d53ea70b53406814071a527988656e85)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "line", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa714ab5f921ca00a34825983ca581537b0883be12d5a693461be8e56927687e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="ttl")
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ttl"))

    @ttl.setter
    def ttl(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb01de8db985d0dfd2e50d4952ba0a38b25fafc9af4e4debbeb1b48cb0f5c7ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDomainRecord``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord

        :param domain_name: 
        :param rr: 
        :param type: 
        :param value: 
        :param line: 
        :param priority: 
        :param ttl: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e4837133d8848c211a085f20e9c4ed2118c15a2b47f51c7157e854fcc00bc2b)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument rr", value=rr, expected_type=type_hints["rr"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument line", value=line, expected_type=type_hints["line"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rr(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        '''
        result = self._values.get("rr")
        assert result is not None, "Required property 'rr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: Parse record type, see parsing record type format
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: value: Record value
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: line: Parse the line, the default is default. See parsing line enumeration
        '''
        result = self._values.get("line")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainRecordProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DNS::Instance``, which is used to create an Alibaba Cloud DNS instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__0208c01aee71269d08717fd2e07495db6c81d3fd0e81fcb2577b674d4f76ab04)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e0bc99d9b466d5b8afd76084839d4e622ea20704b45f0f2e37a393a31b2b9902)
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
        :Attribute: InstanceId: DNS instance id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dnsSecurity")
    def dns_security(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dnsSecurity: The DNS security policy. Valid values:

        - no: No protection against DNS attacks is provided.
        - basic: Basic protection against DNS attacks is provided.
        - advanced: Advanced protection against DNS attacks is provided.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dnsSecurity"))

    @dns_security.setter
    def dns_security(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__890f5cc813a09cccc7f9324acf07a165f88d88ef36046096e454211ae83bda8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dnsSecurity", value)

    @builtins.property
    @jsii.member(jsii_name="domainNumbers")
    def domain_numbers(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainNumbers: The number of domain names.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainNumbers"))

    @domain_numbers.setter
    def domain_numbers(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a235067c6ceb5eca2ad4dde186773829a4d43f0d267b3e63fad1e81f4e41331)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainNumbers", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c2a52e2d4728f02090df5c2d1dd0ad658714dc26612ed8843aadd25b7da37ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        period: The subscription duration. Valid values:

        - If unit is month: 1, 2, 3, 6
        - If unit is year: 1, 2
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab2248b5dad3e34d843385002ca7c1c4ea6904cb1def1437182dbb387e7ca2dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: periodUnit: The subscription duration unit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1b951fe1b3921616537451767ce9d06f3416de2fdf3534c73376f8fe73583f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="version")
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        version: The edition of Alibaba Cloud DNS. Valid values:
        If create hosted public zone:

        - version_personal: Personal Edition.
        - version_enterprise_basic: Enterprise Standard Edition.
        - version_enterprise_advanced: Enterprise Ultimate Edition.
        If create cached public zone:
        - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "version"))

    @version.setter
    def version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57c95a7fbb0df7bbe5f356018c0b8b6fc9c9ce7fd9cb08ae490a6a621f0d76ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "version", value)

    @builtins.property
    @jsii.member(jsii_name="domain")
    def domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domain"))

    @domain.setter
    def domain(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24191c1875d5c11d7add62eaf5aa1000b1df695dcf43109e585526f040adab72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domain", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The type of the instance. Valid values:

        - HostedPublicZone: Hosted Public Zone
        - CachedPublicZone: Cached Public Zone.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__237240c398b6975e11bb7ee5556fff5cffd7542890332ed522018d7e66660d87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="renewalStatus")
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: The renewal method. Valid values:

        - AutoRenewal: The instance is automatically renewed.
        - ManualRenewal: The instance is manually renewed.
        Default value: ManualRenewal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewalStatus"))

    @renewal_status.setter
    def renewal_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb2b4d7a4571b770fe69d00b34a7b71bd78858efae077f5715c7706fa6452f79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewalStatus", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "dns_security": "dnsSecurity",
        "domain_numbers": "domainNumbers",
        "period": "period",
        "period_unit": "periodUnit",
        "version": "version",
        "domain": "domain",
        "instance_type": "instanceType",
        "renewal_status": "renewalStatus",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        dns_security: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_numbers: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance

        :param dns_security: 
        :param domain_numbers: 
        :param period: 
        :param period_unit: 
        :param version: 
        :param domain: 
        :param instance_type: 
        :param renewal_status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fa09235e5ecdfb365733751a021cec9cf256babc2a686cfb2fd02a4f5f060fa)
            check_type(argname="argument dns_security", value=dns_security, expected_type=type_hints["dns_security"])
            check_type(argname="argument domain_numbers", value=domain_numbers, expected_type=type_hints["domain_numbers"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dns_security": dns_security,
            "domain_numbers": domain_numbers,
            "period": period,
            "period_unit": period_unit,
            "version": version,
        }
        if domain is not None:
            self._values["domain"] = domain
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status

    @builtins.property
    def dns_security(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dnsSecurity: The DNS security policy. Valid values:

        - no: No protection against DNS attacks is provided.
        - basic: Basic protection against DNS attacks is provided.
        - advanced: Advanced protection against DNS attacks is provided.
        '''
        result = self._values.get("dns_security")
        assert result is not None, "Required property 'dns_security' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_numbers(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainNumbers: The number of domain names.
        '''
        result = self._values.get("domain_numbers")
        assert result is not None, "Required property 'domain_numbers' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        period: The subscription duration. Valid values:

        - If unit is month: 1, 2, 3, 6
        - If unit is year: 1, 2
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: periodUnit: The subscription duration unit.
        '''
        result = self._values.get("period_unit")
        assert result is not None, "Required property 'period_unit' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        version: The edition of Alibaba Cloud DNS. Valid values:
        If create hosted public zone:

        - version_personal: Personal Edition.
        - version_enterprise_basic: Enterprise Standard Edition.
        - version_enterprise_advanced: Enterprise Ultimate Edition.
        If create cached public zone:
        - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domain: The domain name that you want to bind to the instance. If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
        '''
        result = self._values.get("domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The type of the instance. Valid values:

        - HostedPublicZone: Hosted Public Zone
        - CachedPublicZone: Cached Public Zone.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: The renewal method. Valid values:

        - AutoRenewal: The instance is automatically renewed.
        - ManualRenewal: The instance is manually renewed.
        Default value: ManualRenewal.
        '''
        result = self._values.get("renewal_status")
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
    "Domain",
    "DomainGroup",
    "DomainGroupProps",
    "DomainProps",
    "DomainRecord",
    "DomainRecordProps",
    "Instance",
    "InstanceProps",
    "RosDomain",
    "RosDomainGroup",
    "RosDomainGroupProps",
    "RosDomainProps",
    "RosDomainRecord",
    "RosDomainRecordProps",
    "RosInstance",
    "RosInstanceProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__68675ca91cacc3d03ca6f4f05fcb6d32d86e1aaf939975d10d9ac4aea4c34771(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__167fd44bb6824dd605bf4dbefb609eb979d0de597fc5fb77cbb9192ddd4de7d9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82c2363692e855e443d30e5d805493adb327b0881b8cabc189a31c9c38173745(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c2a5cd303659dda312446cb13c8c04c01009a8ae81d3257401cc38e4a3b7b1a(
    value: DomainProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fadf45b3186ede5071cfaa92b5032e72c41e3ff5dd3c28b597fad8ecc4b9c7d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc0634a5d8e5d02667b094b6d23b0f4ad91c9eaea2036e25ef1e91da037fed88(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8c709c5b451f1ae263880ceaa07d935981b7cea7067b44d60380a5780fd11a0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__206cb1a2bae7db897ebd92ba6741ee73703e80254e1054db03c550fd762bddd9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc4ff0d22e68e104ee32932771f7fa10665970eab6ebc84cf8c7b815c4f23b3e(
    value: DomainGroupProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c36716ea3aa32178ba64852b39724eca54596fa60249c2faffb7bddc4116383f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__870e7dce3a2c27425fac2ea0724cd35e4ea4acb14a4d25bd0595e75d676a18d4(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54144fb86336ae6a2a3b61141b78184b3058b63a7638c776d4bed058fb28eedd(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDomain.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff85cf6f434336025c41e85270626eb795aec726d497686f68628d4382606550(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainRecordProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d5fd820d1fa21acdd1b7e96b8e3b61511ce5289dd3ea4aa7635b982710cc014(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6291eae60d2f5c87a5ef1f4df17492e60f5a92289e0d8ec690c352b34a5f6b9b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8a7ebef6fd1f9de76481bbc139440484ec09330f5cfe793d8b529115f9be621(
    value: DomainRecordProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a57c341aa9f74c0b2bce31ba243259ae182f946a2bb88bf8c44a02402918c6c4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bbc2719a168ec2f8c950e1f545a604d25f38b321d07897ff2b71b20ffc833fa(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33e15550113a92d6d3e6098456a214d174ad3a53fcc8c9e52977cd245eae044d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__654994675929b971ca5ffaa883bd7d9de1d55f9f97db84d40665ad842e394d70(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8bfdecdcd1d5bab13d433dcc61edc4c99bba5ab351e9e329a8eb631273673d9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4b37800d8b59ee4a333270efc290c27161a28e6a76127755aae68aef8884c3e(
    value: InstanceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4902032cf7f526aaf6e1c366b451fe57dba3457c04d16ab882cff5ff58edcc1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba95997c0729dd10f964ab726668df3a13eb424c3c4b96783b94711c40bd2d72(
    *,
    dns_security: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_numbers: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb25659fa22e8a493ed571fe3e6c0fa528be099a39778f87cde719e1137edba7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2a902deb0d9a87dcfc5ff63966368d4fc6e5f0f1c32d61a546aaf59783bfd91(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__618ea2054753f9ca4a0ab05020803cf21812447252c396b3ba45bec7a44312e8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e1a7981008765d63d000cae9f1d0162665ced5d86280ff1943a27063b82b43d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__239348e38b328eb902903185f713bde98370366e63561583dce03203abbcf03f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b0643773e4f93b7d714c1bfd1768051ea3c21ed0e07a8c285e9873b5ed96903(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__558cca742078e2f16384d95652cbd5750df3d539da4c3aba79e30dbafb1902b7(
    value: typing.Optional[typing.List[RosDomain.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b82adc7cf0463a84a76fcf4aa9abe0a462eb796a8c90ca17415175326e181501(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36c9c64667ef48506f14bf425f31455781aea1190115fce33af3d6b4e27733e2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__054b11b59ff90286929cfb05472515ffba8877db14a7ac6b18bbd0aeeae655e7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58b52f9588b8fe7497c6f0e77e95a436d3c2cea4da9231c948a1095b057cf5e3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__233ac99ec64f0b3e5d516110357bc6308bac4f29c8d33ce290fb1504c8e97a67(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99e77b4391b951fafc8dfcb5ac842433e98ffe2b146eb0ac3193e57fcbdb878a(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6437ac63b2b357896d63b81c82954f004f688e75050a21b9c46dab9ac23ab871(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDomain.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__206efbd760d0f7682402adad13fe4ac64f64a984f388af30c850825ce5fb736f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainRecordProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__339f7968e547e56e71f7954ae0b46b223ae608104c5e9f264bba41968a27188b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7167352467d2f74de035d9733b82c5482c4d5baffad5f4476d1fb246d44713c5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03a60909c400b279c363196be08543381e79486f575b5f53a31e0611b65147eb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__697dc88744c9e6d654d3ee52511a0627327844151c0a3df16bdd8b04b5dba429(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0b396858b0125a0896e0142c0abd1d47082d451a5924c093f76922586f32a36(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1699df48d7e6c96cc581812e0483da645f90df7dd684a0208bd69496ce758765(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adfca66ec152873ba73156ce54e3f481d53ea70b53406814071a527988656e85(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa714ab5f921ca00a34825983ca581537b0883be12d5a693461be8e56927687e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb01de8db985d0dfd2e50d4952ba0a38b25fafc9af4e4debbeb1b48cb0f5c7ec(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e4837133d8848c211a085f20e9c4ed2118c15a2b47f51c7157e854fcc00bc2b(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0208c01aee71269d08717fd2e07495db6c81d3fd0e81fcb2577b674d4f76ab04(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0bc99d9b466d5b8afd76084839d4e622ea20704b45f0f2e37a393a31b2b9902(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__890f5cc813a09cccc7f9324acf07a165f88d88ef36046096e454211ae83bda8b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a235067c6ceb5eca2ad4dde186773829a4d43f0d267b3e63fad1e81f4e41331(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c2a52e2d4728f02090df5c2d1dd0ad658714dc26612ed8843aadd25b7da37ca(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab2248b5dad3e34d843385002ca7c1c4ea6904cb1def1437182dbb387e7ca2dc(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1b951fe1b3921616537451767ce9d06f3416de2fdf3534c73376f8fe73583f4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57c95a7fbb0df7bbe5f356018c0b8b6fc9c9ce7fd9cb08ae490a6a621f0d76ec(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24191c1875d5c11d7add62eaf5aa1000b1df695dcf43109e585526f040adab72(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__237240c398b6975e11bb7ee5556fff5cffd7542890332ed522018d7e66660d87(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb2b4d7a4571b770fe69d00b34a7b71bd78858efae077f5715c7706fa6452f79(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fa09235e5ecdfb365733751a021cec9cf256babc2a686cfb2fd02a4f5f060fa(
    *,
    dns_security: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_numbers: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period_unit: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
