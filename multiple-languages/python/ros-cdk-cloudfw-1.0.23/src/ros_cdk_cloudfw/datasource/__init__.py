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


class AddressBooks(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.datasource.AddressBooks",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CLOUDFW::AddressBooks``, which is used to query the information about address books that are used for access control in Cloud Firewall (CFW).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAddressBooks``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AddressBooksProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19d6d17583241b428b2aa045d4a7c78a7900c3a26a109475df4debed75feb2d4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddressBooks")
    def attr_address_books(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AddressBooks: The list of address books.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressBooks"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupUuids")
    def attr_group_uuids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupUuids: The list of group uuids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupUuids"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2790c4aca1b1dc929c2d760de65f2209dc21aa00aab4ce3a5550ed8e193215c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c3f123be515cbb6061eb7bea71b12c6e483c76e6d5f37ae859ac8e0d5e03cc3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AddressBooksProps":
        return typing.cast("AddressBooksProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AddressBooksProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4fd2eac2c82ba5e04151502fa59cebb1c69d272b55f94a732f2b4158fc9c263)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f4fdf69dce0de9c46f4dcdec0441d9ac2075883f8ef57f2c161f46f91e6ed84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.datasource.AddressBooksProps",
    jsii_struct_bases=[],
    name_mapping={"group_type": "groupType", "lang": "lang"},
)
class AddressBooksProps:
    def __init__(
        self,
        *,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AddressBooks``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks

        :param group_type: Property groupType: Address Book, it can be set to include: - **ip**: an IP address book - **domain**: domain name address book - **port**: port Address Book - **tag**:ECS tag address book.
        :param lang: Property lang: The language type of the received message. - **zh** (default): Chinese. - **en**: English.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f9deb2e956cb78503f64ae1126552d2131964f32ebb9509f630d3b523216fab)
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_type is not None:
            self._values["group_type"] = group_type
        if lang is not None:
            self._values["lang"] = lang

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupType: Address Book, it can be set to include: - **ip**: an IP address book - **domain**: domain name address book - **port**: port Address Book - **tag**:ECS tag address book.'''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lang: The language type of the received message.

        - **zh** (default): Chinese.
        - **en**: English.
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AddressBooksProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAddressBooks(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.datasource.RosAddressBooks",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CLOUDFW::AddressBooks``, which is used to query the information about address books that are used for access control in Cloud Firewall (CFW).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AddressBooks`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAddressBooksProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c149e86bf9b40cc0e7dd90ec02918cd9cc9a98c0485ce1f40d974d2caa19852)
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
            type_hints = typing.get_type_hints(_typecheckingstub__73318301e08fc8b3761ea79547530b8932d3c86eb143862d64411a64f7e97259)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressBooks")
    def attr_address_books(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressBooks: The list of address books.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressBooks"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupUuids")
    def attr_group_uuids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupUuids: The list of group uuids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupUuids"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6ebe437cd4e06de755e6c70b41799b654ea6a42665da516dd1996c6a220412b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupType")
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupType: Address Book, it can be set to include:

        - **ip**: an IP address book
        - **domain**: domain name address book
        - **port**: port Address Book
        - **tag**:ECS tag address book.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupType"))

    @group_type.setter
    def group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__506f82dd8ecc3d9c961f63cb58783666450eac6e0ee2850a3a940d55ed00e863)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupType", value)

    @builtins.property
    @jsii.member(jsii_name="lang")
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lang: The language type of the received message.

        - **zh** (default): Chinese.
        - **en**: English.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lang"))

    @lang.setter
    def lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e8028322d60591d8ebe5a9f61db41d0e78d4a5d2af6339c93bf76856687d01a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lang", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.datasource.RosAddressBooksProps",
    jsii_struct_bases=[],
    name_mapping={"group_type": "groupType", "lang": "lang"},
)
class RosAddressBooksProps:
    def __init__(
        self,
        *,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAddressBooks``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks

        :param group_type: 
        :param lang: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bba148a1677ddd03e953cf643511ae90e6ce936cc6aed982eaf395549670ffa)
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_type is not None:
            self._values["group_type"] = group_type
        if lang is not None:
            self._values["lang"] = lang

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupType: Address Book, it can be set to include:

        - **ip**: an IP address book
        - **domain**: domain name address book
        - **port**: port Address Book
        - **tag**:ECS tag address book.
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lang: The language type of the received message.

        - **zh** (default): Chinese.
        - **en**: English.
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAddressBooksProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AddressBooks",
    "AddressBooksProps",
    "RosAddressBooks",
    "RosAddressBooksProps",
]

publication.publish()

def _typecheckingstub__19d6d17583241b428b2aa045d4a7c78a7900c3a26a109475df4debed75feb2d4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AddressBooksProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2790c4aca1b1dc929c2d760de65f2209dc21aa00aab4ce3a5550ed8e193215c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c3f123be515cbb6061eb7bea71b12c6e483c76e6d5f37ae859ac8e0d5e03cc3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4fd2eac2c82ba5e04151502fa59cebb1c69d272b55f94a732f2b4158fc9c263(
    value: AddressBooksProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f4fdf69dce0de9c46f4dcdec0441d9ac2075883f8ef57f2c161f46f91e6ed84(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f9deb2e956cb78503f64ae1126552d2131964f32ebb9509f630d3b523216fab(
    *,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c149e86bf9b40cc0e7dd90ec02918cd9cc9a98c0485ce1f40d974d2caa19852(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAddressBooksProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73318301e08fc8b3761ea79547530b8932d3c86eb143862d64411a64f7e97259(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ebe437cd4e06de755e6c70b41799b654ea6a42665da516dd1996c6a220412b7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__506f82dd8ecc3d9c961f63cb58783666450eac6e0ee2850a3a940d55ed00e863(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e8028322d60591d8ebe5a9f61db41d0e78d4a5d2af6339c93bf76856687d01a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bba148a1677ddd03e953cf643511ae90e6ce936cc6aed982eaf395549670ffa(
    *,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
