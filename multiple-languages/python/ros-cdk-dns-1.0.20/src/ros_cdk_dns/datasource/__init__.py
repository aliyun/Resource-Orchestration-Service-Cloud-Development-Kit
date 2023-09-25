import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class DomainGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.datasource.DomainGroups",
):
    '''A ROS resource type:  ``DATASOURCE::DNS::DomainGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DomainGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::DNS::DomainGroups``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22179f2172b56440201906d5749803f01a0bf177559ef10080d046d430fc295d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainGroupIds")
    def attr_domain_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainGroupIds: The list of The DNS domain group ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainGroups")
    def attr_domain_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainGroups: The information about DNS domain groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainGroups"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.datasource.DomainGroupsProps",
    jsii_struct_bases=[],
    name_mapping={"key_word": "keyWord", "lang": "lang"},
)
class DomainGroupsProps:
    def __init__(
        self,
        *,
        key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::DNS::DomainGroups``.

        :param key_word: Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
        :param lang: Property lang: The language type.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0aebabd6dd769f27872e5ca2a9c28889acd5535c812e66e784c8385ac3e9d9f)
            check_type(argname="argument key_word", value=key_word, expected_type=type_hints["key_word"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if key_word is not None:
            self._values["key_word"] = key_word
        if lang is not None:
            self._values["lang"] = lang

    @builtins.property
    def key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyWord: The keyword for searches in "%KeyWord%" mode.

        The value is not case-sensitive.
        '''
        result = self._values.get("key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lang: The language type.'''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DomainRecords(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.datasource.DomainRecords",
):
    '''A ROS resource type:  ``DATASOURCE::DNS::DomainRecords``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainRecordsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::DNS::DomainRecords``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9ec710cbd1fc184a8afe950daea27e7f5203c73eec770550bed1894103c0bbe)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainRecordIds")
    def attr_domain_record_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainRecordIds: The list of The DNS domain record ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainRecordIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainRecords")
    def attr_domain_records(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainRecords: The information about DNS records.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainRecords"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.datasource.DomainRecordsProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "direction": "direction",
        "group_id": "groupId",
        "key_word": "keyWord",
        "lang": "lang",
        "line": "line",
        "order_by": "orderBy",
        "rr_key_word": "rrKeyWord",
        "search_mode": "searchMode",
        "status": "status",
        "type": "type",
        "type_key_word": "typeKeyWord",
        "value_key_word": "valueKeyWord",
    },
)
class DomainRecordsProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        order_by: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rr_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        search_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        value_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::DNS::DomainRecords``.

        :param domain_name: Property domainName: The domain name for which you want to query DNS records.
        :param direction: Property direction: The order in which the returned DNS records are sorted.
        :param group_id: Property groupId: The ID of the domain name group.
        :param key_word: Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
        :param lang: Property lang: The language type.
        :param line: Property line: The line based on which the system queries DNS records.
        :param order_by: Property orderBy: The method that is used to sort the returned DNS records.
        :param rr_key_word: Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
        :param search_mode: Property searchMode: The search mode.
        :param status: Property status: The status of the DNS records to query.
        :param type: Property type: The type of the DNS records to query.
        :param type_key_word: Property typeKeyWord: The type keyword based on which the system queries DNS records.
        :param value_key_word: Property valueKeyWord: The record value keyword based on which the system queries DNS records.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bac9aad93fbd3c2383abd54acd6560fc793620df86629cb2282439d16e2161e2)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument key_word", value=key_word, expected_type=type_hints["key_word"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument line", value=line, expected_type=type_hints["line"])
            check_type(argname="argument order_by", value=order_by, expected_type=type_hints["order_by"])
            check_type(argname="argument rr_key_word", value=rr_key_word, expected_type=type_hints["rr_key_word"])
            check_type(argname="argument search_mode", value=search_mode, expected_type=type_hints["search_mode"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument type_key_word", value=type_key_word, expected_type=type_hints["type_key_word"])
            check_type(argname="argument value_key_word", value=value_key_word, expected_type=type_hints["value_key_word"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
        }
        if direction is not None:
            self._values["direction"] = direction
        if group_id is not None:
            self._values["group_id"] = group_id
        if key_word is not None:
            self._values["key_word"] = key_word
        if lang is not None:
            self._values["lang"] = lang
        if line is not None:
            self._values["line"] = line
        if order_by is not None:
            self._values["order_by"] = order_by
        if rr_key_word is not None:
            self._values["rr_key_word"] = rr_key_word
        if search_mode is not None:
            self._values["search_mode"] = search_mode
        if status is not None:
            self._values["status"] = status
        if type is not None:
            self._values["type"] = type
        if type_key_word is not None:
            self._values["type_key_word"] = type_key_word
        if value_key_word is not None:
            self._values["value_key_word"] = value_key_word

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: The domain name for which you want to query DNS records.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property direction: The order in which the returned DNS records are sorted.'''
        result = self._values.get("direction")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: The ID of the domain name group.'''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyWord: The keyword for searches in "%KeyWord%" mode.

        The value is not case-sensitive.
        '''
        result = self._values.get("key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lang: The language type.'''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property line: The line based on which the system queries DNS records.'''
        result = self._values.get("line")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def order_by(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property orderBy: The method that is used to sort the returned DNS records.'''
        result = self._values.get("order_by")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rr_key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.'''
        result = self._values.get("rr_key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def search_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property searchMode: The search mode.'''
        result = self._values.get("search_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the DNS records to query.'''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The type of the DNS records to query.'''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type_key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property typeKeyWord: The type keyword based on which the system queries DNS records.'''
        result = self._values.get("type_key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def value_key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property valueKeyWord: The record value keyword based on which the system queries DNS records.'''
        result = self._values.get("value_key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainRecordsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Domains(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.datasource.Domains",
):
    '''A ROS resource type:  ``DATASOURCE::DNS::Domains``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DomainsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::DNS::Domains``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e00952ab2481fe4e90361c6cf27679edcf31ccdb1881330e267b9244cf2b9d7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainIds")
    def attr_domain_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainIds: The list of The DNS domain ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDomains")
    def attr_domains(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Domains: The information about DNS domains.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomains"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.datasource.DomainsProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_id": "groupId",
        "key_word": "keyWord",
        "lang": "lang",
        "resource_group_id": "resourceGroupId",
        "search_mode": "searchMode",
        "starmark": "starmark",
    },
)
class DomainsProps:
    def __init__(
        self,
        *,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        search_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        starmark: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::DNS::Domains``.

        :param group_id: Property groupId: The ID of the domain name group. If you do not specify this parameter, all domain names are queried by default.
        :param key_word: Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
        :param lang: Property lang: The language type.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param search_mode: Property searchMode: The search mode.
        :param starmark: Property starmark: Specifies whether to query the starmark of the domain name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4cc93c9b4fb6a754c6e079c64352790e93cdc68d9862411e9290f32b4498ed1)
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument key_word", value=key_word, expected_type=type_hints["key_word"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument search_mode", value=search_mode, expected_type=type_hints["search_mode"])
            check_type(argname="argument starmark", value=starmark, expected_type=type_hints["starmark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_id is not None:
            self._values["group_id"] = group_id
        if key_word is not None:
            self._values["key_word"] = key_word
        if lang is not None:
            self._values["lang"] = lang
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if search_mode is not None:
            self._values["search_mode"] = search_mode
        if starmark is not None:
            self._values["starmark"] = starmark

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: The ID of the domain name group.

        If you do not specify this parameter, all domain names are queried by default.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyWord: The keyword for searches in "%KeyWord%" mode.

        The value is not case-sensitive.
        '''
        result = self._values.get("key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lang: The language type.'''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def search_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property searchMode: The search mode.'''
        result = self._values.get("search_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def starmark(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property starmark: Specifies whether to query the starmark of the domain name.'''
        result = self._values.get("starmark")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomainGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.datasource.RosDomainGroups",
):
    '''A ROS template type:  ``DATASOURCE::DNS::DomainGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::DNS::DomainGroups``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb8c5980a1c2597de2c839ed30e0b5257948b6fdbc11f2fabc696479ae6805bb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ea0dfe91a2ca275eab82c75063a8bb355f331c1c61fad571de93dce2a54dfb25)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainGroupIds")
    def attr_domain_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainGroupIds: The list of The DNS domain group ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainGroups")
    def attr_domain_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainGroups: The information about DNS domain groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ed72302a53cb9e235637cc1fdf3343af6d78a64b3b7cb23d3704ab9d76e5d2f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="keyWord")
    def key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyWord"))

    @key_word.setter
    def key_word(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75df41e3c83598179c3134654f09a145aebccb53d6c95846f970d40b9715cf4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyWord", value)

    @builtins.property
    @jsii.member(jsii_name="lang")
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: The language type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lang"))

    @lang.setter
    def lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80cf15a24c864e8999e567920c7d4d3895fbeb0ea36496d658516a9fd5dacc78)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lang", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.datasource.RosDomainGroupsProps",
    jsii_struct_bases=[],
    name_mapping={"key_word": "keyWord", "lang": "lang"},
)
class RosDomainGroupsProps:
    def __init__(
        self,
        *,
        key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::DNS::DomainGroups``.

        :param key_word: 
        :param lang: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6380614478e2d35b7dbe2cbdda8b68f4fa87cdf087f0a9ce17212bafebb79601)
            check_type(argname="argument key_word", value=key_word, expected_type=type_hints["key_word"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if key_word is not None:
            self._values["key_word"] = key_word
        if lang is not None:
            self._values["lang"] = lang

    @builtins.property
    def key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
        '''
        result = self._values.get("key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: The language type.
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomainRecords(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.datasource.RosDomainRecords",
):
    '''A ROS template type:  ``DATASOURCE::DNS::DomainRecords``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainRecordsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::DNS::DomainRecords``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91cdabb74088ff5e67b9b0fc633a85bce7fde79f7936d24c8017cf92ca0d26da)
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
            type_hints = typing.get_type_hints(_typecheckingstub__55c50f830eb0168a47ced94127aa5206dd054c0b861c99db7ba00c9567bb83ee)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainRecordIds")
    def attr_domain_record_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainRecordIds: The list of The DNS domain record ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainRecordIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainRecords")
    def attr_domain_records(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainRecords: The information about DNS records.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainRecords"))

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
        :Property: domainName: The domain name for which you want to query DNS records.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d487b193f79db6a90dfdd2dbf763f5b7f28dff79fa2570f5d687727a4cb7a09)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc6bb5d13bead1fd0ed7d073daa570fcec4f12b7ae720aa3ca7b961e9c94ffc9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="direction")
    def direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: direction: The order in which the returned DNS records are sorted.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "direction"))

    @direction.setter
    def direction(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90eec6a95ea85d10102117220754e4b6d103652e5c23183f97de68687af9bca2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "direction", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: The ID of the domain name group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89fa616a094bbb6af0db1535d785a6c501235d11fcd871774e82d0063d80b4e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="keyWord")
    def key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyWord"))

    @key_word.setter
    def key_word(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c66e9def5eacd0a611b9bc10c1756b90ebf83457418340556792df5dc230dca4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyWord", value)

    @builtins.property
    @jsii.member(jsii_name="lang")
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: The language type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lang"))

    @lang.setter
    def lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67a44ede847735b72e51ae0d51568a51bd187f67d321671dd0abda087a07cfc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lang", value)

    @builtins.property
    @jsii.member(jsii_name="line")
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: line: The line based on which the system queries DNS records.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "line"))

    @line.setter
    def line(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b358b5273d78f7bea3667a821e936b591bfeeeff695e008571c1d226c71a1200)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "line", value)

    @builtins.property
    @jsii.member(jsii_name="orderBy")
    def order_by(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: orderBy: The method that is used to sort the returned DNS records.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "orderBy"))

    @order_by.setter
    def order_by(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a86a834d9928f753a2db85366905d10cd40043195a5af99d7578768973a99759)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "orderBy", value)

    @builtins.property
    @jsii.member(jsii_name="rrKeyWord")
    def rr_key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rrKeyWord"))

    @rr_key_word.setter
    def rr_key_word(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58bcc6260bd9500852d8f69e807d5c48f9b3d4d44aedb665b7176a667c786eaf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rrKeyWord", value)

    @builtins.property
    @jsii.member(jsii_name="searchMode")
    def search_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchMode: The search mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "searchMode"))

    @search_mode.setter
    def search_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__752b5f1087a4d26ea4f35ded818861884ea6cd85d41c283f631885f01dd189aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searchMode", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: The status of the DNS records to query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4361818284931ff89a2902efc88ed3a58ffc1ab0e69369a1f84be52417263a43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: type: The type of the DNS records to query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0c1413a65216d5b816d3c96a37f8bcb8e90bb38395ddb7c6efc8eb8cc201d3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="typeKeyWord")
    def type_key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: typeKeyWord: The type keyword based on which the system queries DNS records.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "typeKeyWord"))

    @type_key_word.setter
    def type_key_word(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2924b6876e8d959d0eef8577aa06cf81acfeb97518dec954427a463d35081d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "typeKeyWord", value)

    @builtins.property
    @jsii.member(jsii_name="valueKeyWord")
    def value_key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: valueKeyWord: The record value keyword based on which the system queries DNS records.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "valueKeyWord"))

    @value_key_word.setter
    def value_key_word(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__114c79f0990e1a9fa24537324ccb1a5464d8271c81348cf52a1fa41939a31129)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "valueKeyWord", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.datasource.RosDomainRecordsProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "direction": "direction",
        "group_id": "groupId",
        "key_word": "keyWord",
        "lang": "lang",
        "line": "line",
        "order_by": "orderBy",
        "rr_key_word": "rrKeyWord",
        "search_mode": "searchMode",
        "status": "status",
        "type": "type",
        "type_key_word": "typeKeyWord",
        "value_key_word": "valueKeyWord",
    },
)
class RosDomainRecordsProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        order_by: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rr_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        search_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        value_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::DNS::DomainRecords``.

        :param domain_name: 
        :param direction: 
        :param group_id: 
        :param key_word: 
        :param lang: 
        :param line: 
        :param order_by: 
        :param rr_key_word: 
        :param search_mode: 
        :param status: 
        :param type: 
        :param type_key_word: 
        :param value_key_word: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__166e4b34faa3a910d64ad611848ade437eb619a5809af995547a9582234a5b48)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument key_word", value=key_word, expected_type=type_hints["key_word"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument line", value=line, expected_type=type_hints["line"])
            check_type(argname="argument order_by", value=order_by, expected_type=type_hints["order_by"])
            check_type(argname="argument rr_key_word", value=rr_key_word, expected_type=type_hints["rr_key_word"])
            check_type(argname="argument search_mode", value=search_mode, expected_type=type_hints["search_mode"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument type_key_word", value=type_key_word, expected_type=type_hints["type_key_word"])
            check_type(argname="argument value_key_word", value=value_key_word, expected_type=type_hints["value_key_word"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
        }
        if direction is not None:
            self._values["direction"] = direction
        if group_id is not None:
            self._values["group_id"] = group_id
        if key_word is not None:
            self._values["key_word"] = key_word
        if lang is not None:
            self._values["lang"] = lang
        if line is not None:
            self._values["line"] = line
        if order_by is not None:
            self._values["order_by"] = order_by
        if rr_key_word is not None:
            self._values["rr_key_word"] = rr_key_word
        if search_mode is not None:
            self._values["search_mode"] = search_mode
        if status is not None:
            self._values["status"] = status
        if type is not None:
            self._values["type"] = type
        if type_key_word is not None:
            self._values["type_key_word"] = type_key_word
        if value_key_word is not None:
            self._values["value_key_word"] = value_key_word

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The domain name for which you want to query DNS records.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: direction: The order in which the returned DNS records are sorted.
        '''
        result = self._values.get("direction")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: The ID of the domain name group.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
        '''
        result = self._values.get("key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: The language type.
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def line(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: line: The line based on which the system queries DNS records.
        '''
        result = self._values.get("line")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def order_by(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: orderBy: The method that is used to sort the returned DNS records.
        '''
        result = self._values.get("order_by")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rr_key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
        '''
        result = self._values.get("rr_key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def search_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchMode: The search mode.
        '''
        result = self._values.get("search_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: The status of the DNS records to query.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: type: The type of the DNS records to query.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type_key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: typeKeyWord: The type keyword based on which the system queries DNS records.
        '''
        result = self._values.get("type_key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def value_key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: valueKeyWord: The record value keyword based on which the system queries DNS records.
        '''
        result = self._values.get("value_key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainRecordsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomains(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dns.datasource.RosDomains",
):
    '''A ROS template type:  ``DATASOURCE::DNS::Domains``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::DNS::Domains``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1be957ac83e0392ebd6a98f3623d705af2ca6fba3301f73cbc177bad97be58f8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4789c01d886fccd5b5bdbf5862921542b113a8e9d7577fe21b888116ad6418b6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainIds")
    def attr_domain_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainIds: The list of The DNS domain ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDomains")
    def attr_domains(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Domains: The information about DNS domains.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomains"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__4a2fe51b40d193ff23a75cb85596fe2fd4443f869c9b1cb56eb5d6eb87d9da80)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: The ID of the domain name group. If you do not specify this parameter, all domain names are queried by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2c4f5af388e2382cfdbf185e4bd98ec85ef8a1f1cc335650550b85ad86a994c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="keyWord")
    def key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyWord"))

    @key_word.setter
    def key_word(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fccaead62fcb14ad2e4c4b2516b7dc70fb7903a1ec6ad4916d02f429a98dfa9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyWord", value)

    @builtins.property
    @jsii.member(jsii_name="lang")
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: The language type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lang"))

    @lang.setter
    def lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c05526075c541b7393ce6fa7b177ee264328d20fd40c455cab77025323fed93)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lang", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__5a578b88308f5e4cebfde46b00d6490fb5371ddcd533b3026e9e5336bb3ec139)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="searchMode")
    def search_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchMode: The search mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "searchMode"))

    @search_mode.setter
    def search_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6adb29063fba81afa26cd1a40e625790488710a380f001ea63bc05a334db7777)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searchMode", value)

    @builtins.property
    @jsii.member(jsii_name="starmark")
    def starmark(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: starmark: Specifies whether to query the starmark of the domain name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "starmark"))

    @starmark.setter
    def starmark(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9da9fbb3315d4287e72087adf65b14b8dd69249ff2e8fe442c1e30fba18bba5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "starmark", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dns.datasource.RosDomainsProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_id": "groupId",
        "key_word": "keyWord",
        "lang": "lang",
        "resource_group_id": "resourceGroupId",
        "search_mode": "searchMode",
        "starmark": "starmark",
    },
)
class RosDomainsProps:
    def __init__(
        self,
        *,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        search_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        starmark: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::DNS::Domains``.

        :param group_id: 
        :param key_word: 
        :param lang: 
        :param resource_group_id: 
        :param search_mode: 
        :param starmark: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9d9c19a3c8b408ffa4b0772970929c44567b238c0e5473e27d5e1f1e9e1fd04)
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument key_word", value=key_word, expected_type=type_hints["key_word"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument search_mode", value=search_mode, expected_type=type_hints["search_mode"])
            check_type(argname="argument starmark", value=starmark, expected_type=type_hints["starmark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_id is not None:
            self._values["group_id"] = group_id
        if key_word is not None:
            self._values["key_word"] = key_word
        if lang is not None:
            self._values["lang"] = lang
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if search_mode is not None:
            self._values["search_mode"] = search_mode
        if starmark is not None:
            self._values["starmark"] = starmark

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: The ID of the domain name group. If you do not specify this parameter, all domain names are queried by default.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_word(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
        '''
        result = self._values.get("key_word")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lang: The language type.
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def search_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchMode: The search mode.
        '''
        result = self._values.get("search_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def starmark(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: starmark: Specifies whether to query the starmark of the domain name.
        '''
        result = self._values.get("starmark")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DomainGroups",
    "DomainGroupsProps",
    "DomainRecords",
    "DomainRecordsProps",
    "Domains",
    "DomainsProps",
    "RosDomainGroups",
    "RosDomainGroupsProps",
    "RosDomainRecords",
    "RosDomainRecordsProps",
    "RosDomains",
    "RosDomainsProps",
]

publication.publish()

def _typecheckingstub__22179f2172b56440201906d5749803f01a0bf177559ef10080d046d430fc295d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DomainGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0aebabd6dd769f27872e5ca2a9c28889acd5535c812e66e784c8385ac3e9d9f(
    *,
    key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9ec710cbd1fc184a8afe950daea27e7f5203c73eec770550bed1894103c0bbe(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainRecordsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bac9aad93fbd3c2383abd54acd6560fc793620df86629cb2282439d16e2161e2(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    order_by: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rr_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    search_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e00952ab2481fe4e90361c6cf27679edcf31ccdb1881330e267b9244cf2b9d7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DomainsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4cc93c9b4fb6a754c6e079c64352790e93cdc68d9862411e9290f32b4498ed1(
    *,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    search_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    starmark: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb8c5980a1c2597de2c839ed30e0b5257948b6fdbc11f2fabc696479ae6805bb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea0dfe91a2ca275eab82c75063a8bb355f331c1c61fad571de93dce2a54dfb25(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed72302a53cb9e235637cc1fdf3343af6d78a64b3b7cb23d3704ab9d76e5d2f0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75df41e3c83598179c3134654f09a145aebccb53d6c95846f970d40b9715cf4d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80cf15a24c864e8999e567920c7d4d3895fbeb0ea36496d658516a9fd5dacc78(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6380614478e2d35b7dbe2cbdda8b68f4fa87cdf087f0a9ce17212bafebb79601(
    *,
    key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91cdabb74088ff5e67b9b0fc633a85bce7fde79f7936d24c8017cf92ca0d26da(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainRecordsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55c50f830eb0168a47ced94127aa5206dd054c0b861c99db7ba00c9567bb83ee(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d487b193f79db6a90dfdd2dbf763f5b7f28dff79fa2570f5d687727a4cb7a09(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc6bb5d13bead1fd0ed7d073daa570fcec4f12b7ae720aa3ca7b961e9c94ffc9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90eec6a95ea85d10102117220754e4b6d103652e5c23183f97de68687af9bca2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89fa616a094bbb6af0db1535d785a6c501235d11fcd871774e82d0063d80b4e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c66e9def5eacd0a611b9bc10c1756b90ebf83457418340556792df5dc230dca4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67a44ede847735b72e51ae0d51568a51bd187f67d321671dd0abda087a07cfc5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b358b5273d78f7bea3667a821e936b591bfeeeff695e008571c1d226c71a1200(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a86a834d9928f753a2db85366905d10cd40043195a5af99d7578768973a99759(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58bcc6260bd9500852d8f69e807d5c48f9b3d4d44aedb665b7176a667c786eaf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__752b5f1087a4d26ea4f35ded818861884ea6cd85d41c283f631885f01dd189aa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4361818284931ff89a2902efc88ed3a58ffc1ab0e69369a1f84be52417263a43(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0c1413a65216d5b816d3c96a37f8bcb8e90bb38395ddb7c6efc8eb8cc201d3c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2924b6876e8d959d0eef8577aa06cf81acfeb97518dec954427a463d35081d2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__114c79f0990e1a9fa24537324ccb1a5464d8271c81348cf52a1fa41939a31129(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__166e4b34faa3a910d64ad611848ade437eb619a5809af995547a9582234a5b48(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    line: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    order_by: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rr_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    search_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value_key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1be957ac83e0392ebd6a98f3623d705af2ca6fba3301f73cbc177bad97be58f8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4789c01d886fccd5b5bdbf5862921542b113a8e9d7577fe21b888116ad6418b6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a2fe51b40d193ff23a75cb85596fe2fd4443f869c9b1cb56eb5d6eb87d9da80(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2c4f5af388e2382cfdbf185e4bd98ec85ef8a1f1cc335650550b85ad86a994c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fccaead62fcb14ad2e4c4b2516b7dc70fb7903a1ec6ad4916d02f429a98dfa9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c05526075c541b7393ce6fa7b177ee264328d20fd40c455cab77025323fed93(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a578b88308f5e4cebfde46b00d6490fb5371ddcd533b3026e9e5336bb3ec139(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6adb29063fba81afa26cd1a40e625790488710a380f001ea63bc05a334db7777(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9da9fbb3315d4287e72087adf65b14b8dd69249ff2e8fe442c1e30fba18bba5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9d9c19a3c8b408ffa4b0772970929c44567b238c0e5473e27d5e1f1e9e1fd04(
    *,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_word: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    search_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    starmark: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
