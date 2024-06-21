'''
## Aliyun ROS ICE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ICE from '@alicloud/ros-cdk-ice';
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


class RosSearchLib(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.RosSearchLib",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ICE::SearchLib``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SearchLib`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSearchLibProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a90f16b9f888330d29f098afcac98750bec32b46601aa93c20fd3b46ff00ede)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9b7f354767ccbe5d13f6a1ab57c4507de7b801345f615a01c72c3ddad5901fb9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchLibName")
    def attr_search_lib_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SearchLibName: The name of the Search Lib.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSearchLibName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__eed4677cd187f56922cb32f1a1505e9fda4e43eb886a3d5ce57acc200aa277d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="searchLibName")
    def search_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: searchLibName: The name of the Search Lib.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "searchLibName"))

    @search_lib_name.setter
    def search_lib_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__deb8553d6d6319a5ab1dc5153cb1ac2896f6391875b83a6267ffb4ab9305e44f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searchLibName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.RosSearchLibProps",
    jsii_struct_bases=[],
    name_mapping={"search_lib_name": "searchLibName"},
)
class RosSearchLibProps:
    def __init__(
        self,
        *,
        search_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosSearchLib``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib

        :param search_lib_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69cc9e9f60d0c89a8b6693b44f30ae4f84961a8b2fc00509ac0da019f4877b71)
            check_type(argname="argument search_lib_name", value=search_lib_name, expected_type=type_hints["search_lib_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "search_lib_name": search_lib_name,
        }

    @builtins.property
    def search_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: searchLibName: The name of the Search Lib.
        '''
        result = self._values.get("search_lib_name")
        assert result is not None, "Required property 'search_lib_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSearchLibProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SearchLib(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ice.SearchLib",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ICE::SearchLib``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSearchLib``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SearchLibProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__532bd109695555bc823e14799286317d063b3c76ff24704bd4cefe4d3a94b32f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSearchLibName")
    def attr_search_lib_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SearchLibName: The name of the Search Lib.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSearchLibName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a38826d6d9311aee06b09284293faeee3a880456e10167bcd29e0431f10a2db2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee91b95c078114864f83f4e8b7eec62c8ef5995a23c7eafaa75aefae331b1d28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "SearchLibProps":
        return typing.cast("SearchLibProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "SearchLibProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb379dd3c3121f47fd94bf94a0355d29805d3a7a06913899cf067e8bf83462b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a329664c06454ff7ec6dcf95e75a3e4f9581509eef88a37d9f157589fe7c1359)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ice.SearchLibProps",
    jsii_struct_bases=[],
    name_mapping={"search_lib_name": "searchLibName"},
)
class SearchLibProps:
    def __init__(
        self,
        *,
        search_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``SearchLib``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib

        :param search_lib_name: Property searchLibName: The name of the Search Lib.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f3be7221910143bcc9e69b3a6f7b69e6f9bbde0afd692aba14dedb11c4b43c8)
            check_type(argname="argument search_lib_name", value=search_lib_name, expected_type=type_hints["search_lib_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "search_lib_name": search_lib_name,
        }

    @builtins.property
    def search_lib_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property searchLibName: The name of the Search Lib.'''
        result = self._values.get("search_lib_name")
        assert result is not None, "Required property 'search_lib_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SearchLibProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosSearchLib",
    "RosSearchLibProps",
    "SearchLib",
    "SearchLibProps",
]

publication.publish()

def _typecheckingstub__1a90f16b9f888330d29f098afcac98750bec32b46601aa93c20fd3b46ff00ede(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSearchLibProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b7f354767ccbe5d13f6a1ab57c4507de7b801345f615a01c72c3ddad5901fb9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eed4677cd187f56922cb32f1a1505e9fda4e43eb886a3d5ce57acc200aa277d1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deb8553d6d6319a5ab1dc5153cb1ac2896f6391875b83a6267ffb4ab9305e44f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69cc9e9f60d0c89a8b6693b44f30ae4f84961a8b2fc00509ac0da019f4877b71(
    *,
    search_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__532bd109695555bc823e14799286317d063b3c76ff24704bd4cefe4d3a94b32f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SearchLibProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a38826d6d9311aee06b09284293faeee3a880456e10167bcd29e0431f10a2db2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee91b95c078114864f83f4e8b7eec62c8ef5995a23c7eafaa75aefae331b1d28(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb379dd3c3121f47fd94bf94a0355d29805d3a7a06913899cf067e8bf83462b5(
    value: SearchLibProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a329664c06454ff7ec6dcf95e75a3e4f9581509eef88a37d9f157589fe7c1359(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f3be7221910143bcc9e69b3a6f7b69e6f9bbde0afd692aba14dedb11c4b43c8(
    *,
    search_lib_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
