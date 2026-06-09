'''
## Aliyun ROS BAILIAN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as BAILIAN from '@alicloud/ros-cdk-bailian';
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bailian.ApiKeyProps",
    jsii_struct_bases=[],
    name_mapping={"auth_set_model": "authSetModel", "description": "description"},
)
class ApiKeyProps:
    def __init__(
        self,
        *,
        auth_set_model: typing.Optional[typing.Union[typing.Union["RosApiKey.AuthSetModelProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ApiKey``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey

        :param auth_set_model: Property authSetModel: The model of the authentication.
        :param description: Property description: The description of the API key.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc5fd2b81dfb52f3c30a9e4196c15f66079ee0ff16c554518c65ab27471cb71f)
            check_type(argname="argument auth_set_model", value=auth_set_model, expected_type=type_hints["auth_set_model"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auth_set_model is not None:
            self._values["auth_set_model"] = auth_set_model
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def auth_set_model(
        self,
    ) -> typing.Optional[typing.Union["RosApiKey.AuthSetModelProperty", _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property authSetModel: The model of the authentication.'''
        result = self._values.get("auth_set_model")
        return typing.cast(typing.Optional[typing.Union["RosApiKey.AuthSetModelProperty", _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the API key.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApiKeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-bailian.IApiKey")
class IApiKey(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ApiKey``.'''

    @builtins.property
    @jsii.member(jsii_name="attrApiKeyId")
    def attr_api_key_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApiKeyId: The id of the API key.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Key: The value of the API key.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiKeyProps:
        ...


class _IApiKeyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ApiKey``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bailian.IApiKey"

    @builtins.property
    @jsii.member(jsii_name="attrApiKeyId")
    def attr_api_key_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApiKeyId: The id of the API key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApiKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Key: The value of the API key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKey"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiKeyProps:
        return typing.cast(ApiKeyProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IApiKey).__jsii_proxy_class__ = lambda : _IApiKeyProxy


class RosApiKey(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bailian.RosApiKey",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Bailian::ApiKey``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ApiKey`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApiKeyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f776af73812232acdee01b26d4ed5c1614c08c889e49b8640317c00889ed07e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__94d0d4821c37dcbdcdee954e740335ed6718bd861de1042c076daff7ad70977f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiKeyId")
    def attr_api_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApiKeyId: The id of the API key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Key: The value of the API key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKey"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__eb2ad9d2a51f0db703779665af93a10d6d1b4651041157c3fea2dae75d9c6a8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="authSetModel")
    def auth_set_model(
        self,
    ) -> typing.Optional[typing.Union["RosApiKey.AuthSetModelProperty", _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: authSetModel: The model of the authentication.
        '''
        return typing.cast(typing.Optional[typing.Union["RosApiKey.AuthSetModelProperty", _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "authSetModel"))

    @auth_set_model.setter
    def auth_set_model(
        self,
        value: typing.Optional[typing.Union["RosApiKey.AuthSetModelProperty", _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fc52caec3bb8f728d6d438626d14736751d946ad5634a2e1561fbcb0c68ca57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authSetModel", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the API key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b4baa6fac1f58930ded6830a1f945cf52dfd7c8737bdb98ab1467006d3acbb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-bailian.RosApiKey.AuthSetModelProperty",
        jsii_struct_bases=[],
        name_mapping={"access_ips": "accessIps", "auth_set_mode": "authSetMode"},
    )
    class AuthSetModelProperty:
        def __init__(
            self,
            *,
            access_ips: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            auth_set_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param access_ips: 
            :param auth_set_mode: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d4b3d59bb11f3946ecb463283123e0346e01158d4683fe023f82ce6ddad6c5a5)
                check_type(argname="argument access_ips", value=access_ips, expected_type=type_hints["access_ips"])
                check_type(argname="argument auth_set_mode", value=auth_set_mode, expected_type=type_hints["auth_set_mode"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if access_ips is not None:
                self._values["access_ips"] = access_ips
            if auth_set_mode is not None:
                self._values["auth_set_mode"] = auth_set_mode

        @builtins.property
        def access_ips(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: accessIps: The IP addresses of the access.
            '''
            result = self._values.get("access_ips")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def auth_set_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: authSetMode: The mode of the authentication.
            '''
            result = self._values.get("auth_set_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AuthSetModelProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bailian.RosApiKeyProps",
    jsii_struct_bases=[],
    name_mapping={"auth_set_model": "authSetModel", "description": "description"},
)
class RosApiKeyProps:
    def __init__(
        self,
        *,
        auth_set_model: typing.Optional[typing.Union[typing.Union[RosApiKey.AuthSetModelProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApiKey``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey

        :param auth_set_model: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f4d0ae0449899b61407ce02d4a1f4a2507999dc4efbc7913da251c1961b0a3f)
            check_type(argname="argument auth_set_model", value=auth_set_model, expected_type=type_hints["auth_set_model"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auth_set_model is not None:
            self._values["auth_set_model"] = auth_set_model
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def auth_set_model(
        self,
    ) -> typing.Optional[typing.Union[RosApiKey.AuthSetModelProperty, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: authSetModel: The model of the authentication.
        '''
        result = self._values.get("auth_set_model")
        return typing.cast(typing.Optional[typing.Union[RosApiKey.AuthSetModelProperty, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the API key.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApiKeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IApiKey)
class ApiKey(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bailian.ApiKey",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Bailian::ApiKey``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApiKey``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[ApiKeyProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66f9a1f3375f5eb5b9f076926f3ca5cdd3adf88b4cb80360e7b30a88d08cdb8e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiKeyId")
    def attr_api_key_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApiKeyId: The id of the API key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApiKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Key: The value of the API key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKey"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiKeyProps:
        return typing.cast(ApiKeyProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f373180ccde053a1ef963be2e28867c99b1f041be2547a613534c5ef4bcf6c60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2319535f7cc106305ef38db2bb409784d84fa0ea4fb07eecf3e776255f7af9dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__555231446c6725bbd59237d32395887aa8fe17729e9606e44a503266fbe26625)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "ApiKey",
    "ApiKeyProps",
    "IApiKey",
    "RosApiKey",
    "RosApiKeyProps",
]

publication.publish()

def _typecheckingstub__fc5fd2b81dfb52f3c30a9e4196c15f66079ee0ff16c554518c65ab27471cb71f(
    *,
    auth_set_model: typing.Optional[typing.Union[typing.Union[RosApiKey.AuthSetModelProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f776af73812232acdee01b26d4ed5c1614c08c889e49b8640317c00889ed07e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApiKeyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94d0d4821c37dcbdcdee954e740335ed6718bd861de1042c076daff7ad70977f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb2ad9d2a51f0db703779665af93a10d6d1b4651041157c3fea2dae75d9c6a8c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fc52caec3bb8f728d6d438626d14736751d946ad5634a2e1561fbcb0c68ca57(
    value: typing.Optional[typing.Union[RosApiKey.AuthSetModelProperty, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b4baa6fac1f58930ded6830a1f945cf52dfd7c8737bdb98ab1467006d3acbb1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4b3d59bb11f3946ecb463283123e0346e01158d4683fe023f82ce6ddad6c5a5(
    *,
    access_ips: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    auth_set_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f4d0ae0449899b61407ce02d4a1f4a2507999dc4efbc7913da251c1961b0a3f(
    *,
    auth_set_model: typing.Optional[typing.Union[typing.Union[RosApiKey.AuthSetModelProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66f9a1f3375f5eb5b9f076926f3ca5cdd3adf88b4cb80360e7b30a88d08cdb8e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ApiKeyProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f373180ccde053a1ef963be2e28867c99b1f041be2547a613534c5ef4bcf6c60(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2319535f7cc106305ef38db2bb409784d84fa0ea4fb07eecf3e776255f7af9dd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__555231446c6725bbd59237d32395887aa8fe17729e9606e44a503266fbe26625(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
