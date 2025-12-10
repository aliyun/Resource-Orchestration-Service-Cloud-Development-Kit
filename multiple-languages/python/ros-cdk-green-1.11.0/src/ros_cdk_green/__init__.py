'''
## Aliyun ROS GREEN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as GREEN from '@alicloud/ros-cdk-green';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-green.IInspectionConfigEnable")
class IInspectionConfigEnable(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``InspectionConfigEnable``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InspectionConfigEnableProps":
        ...


class _IInspectionConfigEnableProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``InspectionConfigEnable``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-green.IInspectionConfigEnable"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InspectionConfigEnableProps":
        return typing.cast("InspectionConfigEnableProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInspectionConfigEnable).__jsii_proxy_class__ = lambda : _IInspectionConfigEnableProxy


@jsii.implements(IInspectionConfigEnable)
class InspectionConfigEnable(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-green.InspectionConfigEnable",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Green::InspectionConfigEnable``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInspectionConfigEnable``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InspectionConfigEnableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8de642e43289b1980e50a4a7f6c71539267b3d8c2e068bf4b9eeb76efeb83456)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InspectionConfigEnableProps":
        return typing.cast("InspectionConfigEnableProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__828832664ed6b31cacfc3134f4fc83be657431756890a2b38acd55b9ed91538a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fcab19d14d00085e245c81f53c050d581cca344e9569d2de08801015d5214fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5aecf035c76d4ff2e137a8cf29cc951f52ccc050a76efd7c4db4e5c02d75be82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-green.InspectionConfigEnableProps",
    jsii_struct_bases=[],
    name_mapping={"config_type": "configType", "service_code": "serviceCode"},
)
class InspectionConfigEnableProps:
    def __init__(
        self,
        *,
        config_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``InspectionConfigEnable``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable

        :param config_type: Property configType: The type of the configuration to be enabled for inspection.
        :param service_code: Property serviceCode: The code of the service to be enabled for inspection.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fff7f18f82794e3d2675a1e7ce0414c1d4cc580371a9d7a1bd625e8fef219aa)
            check_type(argname="argument config_type", value=config_type, expected_type=type_hints["config_type"])
            check_type(argname="argument service_code", value=service_code, expected_type=type_hints["service_code"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_type": config_type,
            "service_code": service_code,
        }

    @builtins.property
    def config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property configType: The type of the configuration to be enabled for inspection.'''
        result = self._values.get("config_type")
        assert result is not None, "Required property 'config_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceCode: The code of the service to be enabled for inspection.'''
        result = self._values.get("service_code")
        assert result is not None, "Required property 'service_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InspectionConfigEnableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInspectionConfigEnable(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-green.RosInspectionConfigEnable",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Green::InspectionConfigEnable``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``InspectionConfigEnable`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInspectionConfigEnableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f9d6601a037a558550c2ddef2483c4288c68a6534ef574c12c943e69db8c873)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c949af93918fb1b8553d886c912e05407e23c06fc7d35c4bd1d00d93a2fbe105)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configType")
    def config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configType: The type of the configuration to be enabled for inspection.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "configType"))

    @config_type.setter
    def config_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15d472a9f40b2c2174bc433591eef07675206109bebfdeb079c40d2cfc96e276)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef03239c4695f5b86316ec6fabd763701c6092170b54a83cbf8abe59d52c136f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serviceCode")
    def service_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceCode: The code of the service to be enabled for inspection.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceCode"))

    @service_code.setter
    def service_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e662cd7e5cf1ae83ddce1012a20d0e7a5909bf205513b0e45dacc78825822395)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceCode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-green.RosInspectionConfigEnableProps",
    jsii_struct_bases=[],
    name_mapping={"config_type": "configType", "service_code": "serviceCode"},
)
class RosInspectionConfigEnableProps:
    def __init__(
        self,
        *,
        config_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosInspectionConfigEnable``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable

        :param config_type: 
        :param service_code: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fea34dd41e47c8e3e39e73af241bdc7866c4f87093b79c3e207b78e1a3b19330)
            check_type(argname="argument config_type", value=config_type, expected_type=type_hints["config_type"])
            check_type(argname="argument service_code", value=service_code, expected_type=type_hints["service_code"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_type": config_type,
            "service_code": service_code,
        }

    @builtins.property
    def config_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configType: The type of the configuration to be enabled for inspection.
        '''
        result = self._values.get("config_type")
        assert result is not None, "Required property 'config_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceCode: The code of the service to be enabled for inspection.
        '''
        result = self._values.get("service_code")
        assert result is not None, "Required property 'service_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInspectionConfigEnableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IInspectionConfigEnable",
    "InspectionConfigEnable",
    "InspectionConfigEnableProps",
    "RosInspectionConfigEnable",
    "RosInspectionConfigEnableProps",
]

publication.publish()

def _typecheckingstub__8de642e43289b1980e50a4a7f6c71539267b3d8c2e068bf4b9eeb76efeb83456(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InspectionConfigEnableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__828832664ed6b31cacfc3134f4fc83be657431756890a2b38acd55b9ed91538a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fcab19d14d00085e245c81f53c050d581cca344e9569d2de08801015d5214fe(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5aecf035c76d4ff2e137a8cf29cc951f52ccc050a76efd7c4db4e5c02d75be82(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fff7f18f82794e3d2675a1e7ce0414c1d4cc580371a9d7a1bd625e8fef219aa(
    *,
    config_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f9d6601a037a558550c2ddef2483c4288c68a6534ef574c12c943e69db8c873(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInspectionConfigEnableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c949af93918fb1b8553d886c912e05407e23c06fc7d35c4bd1d00d93a2fbe105(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15d472a9f40b2c2174bc433591eef07675206109bebfdeb079c40d2cfc96e276(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef03239c4695f5b86316ec6fabd763701c6092170b54a83cbf8abe59d52c136f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e662cd7e5cf1ae83ddce1012a20d0e7a5909bf205513b0e45dacc78825822395(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fea34dd41e47c8e3e39e73af241bdc7866c4f87093b79c3e207b78e1a3b19330(
    *,
    config_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
