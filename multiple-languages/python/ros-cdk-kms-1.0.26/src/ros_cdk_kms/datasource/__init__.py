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


class Instances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.datasource.Instances",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::KMS::Instances``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstances``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f0681e91590532bf33e91373905ce465efeaf1f5ff1d60d2ccbaa3829fdb888)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: The list of instance IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Instances: The list of instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstances"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee64bddacfa261024f0875ee606dfd2a11de5103742fb615fced8acea6fb9465)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f5eeae4cac4bb5aae8b9f91b7f9528f5d41406f2aed918847437e9ac30ec853)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstancesProps":
        return typing.cast("InstancesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstancesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79f095627cb52a598a147ac565eb1889db0582503d2d2f6d202efd5683e5284c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbfe457172f18592157e59901684f14a21d10192255647379bcb2c56baf0556c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.datasource.InstancesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class InstancesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``Instances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
        '''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.datasource.RosInstances",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::KMS::Instances``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instances`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbf3b57070034e7ea18a12f420bda8cb1d4ebdd75ad65c2676021a81cd8a737a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5bf39ab3332b4a847b66836fb72f51cc293c02d990fde35a096a4bc31d998b4d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceIds: The list of instance IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Instances: The list of instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstances"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1f08e351032351cc9d3fe42f993722fe186d06238c145fc360b765003e19417c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.datasource.RosInstancesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosInstancesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``RosInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
        '''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecrets(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.datasource.RosSecrets",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::KMS::Secrets``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Secrets`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSecretsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c927baa4f4e8a432bd0ba27d89ca37f2f536c3c15977dacb53450452c1fb98a9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__de8eb712a6e63057c37f91f7d188bd94dfdf98654cb6e093c2089b3a3d2a8257)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretNames")
    def attr_secret_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecretNames: The list of secret names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretNames"))

    @builtins.property
    @jsii.member(jsii_name="attrSecrets")
    def attr_secrets(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Secrets: The list of secrets.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecrets"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e6cad67d57d1685a594a92cd4edff93a5771455ce8d272ab882a2cfa2b0ee7e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.datasource.RosSecretsProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosSecretsProps:
    def __init__(self) -> None:
        '''Properties for defining a ``RosSecrets``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
        '''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecretsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Secrets(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.datasource.Secrets",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::KMS::Secrets``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSecrets``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["SecretsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e20cc0cad83b5bf0088e91b5126be27e7baeb8d1baaa18de15d8b848dcdf3ed)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSecretNames")
    def attr_secret_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecretNames: The list of secret names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretNames"))

    @builtins.property
    @jsii.member(jsii_name="attrSecrets")
    def attr_secrets(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Secrets: The list of secrets.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecrets"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da714913161a86d2b786608566a2652209df5038bbcdb9d0ba00db80cf33b918)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5bc41d1a399150f5a3a2266b805e05c8059ee359bc186810771de1f7970e70f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "SecretsProps":
        return typing.cast("SecretsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "SecretsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fec3da02a1f7ca1c93a9eb66ee2f17934f5e5159d449d423c5053244782cf72b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00e7e8bd16aee5197265a077bc2bed1e0e380484685e569954f5d8849d5437a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.datasource.SecretsProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class SecretsProps:
    def __init__(self) -> None:
        '''Properties for defining a ``Secrets``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
        '''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecretsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instances",
    "InstancesProps",
    "RosInstances",
    "RosInstancesProps",
    "RosSecrets",
    "RosSecretsProps",
    "Secrets",
    "SecretsProps",
]

publication.publish()

def _typecheckingstub__9f0681e91590532bf33e91373905ce465efeaf1f5ff1d60d2ccbaa3829fdb888(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee64bddacfa261024f0875ee606dfd2a11de5103742fb615fced8acea6fb9465(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f5eeae4cac4bb5aae8b9f91b7f9528f5d41406f2aed918847437e9ac30ec853(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79f095627cb52a598a147ac565eb1889db0582503d2d2f6d202efd5683e5284c(
    value: InstancesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbfe457172f18592157e59901684f14a21d10192255647379bcb2c56baf0556c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbf3b57070034e7ea18a12f420bda8cb1d4ebdd75ad65c2676021a81cd8a737a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bf39ab3332b4a847b66836fb72f51cc293c02d990fde35a096a4bc31d998b4d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f08e351032351cc9d3fe42f993722fe186d06238c145fc360b765003e19417c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c927baa4f4e8a432bd0ba27d89ca37f2f536c3c15977dacb53450452c1fb98a9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSecretsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de8eb712a6e63057c37f91f7d188bd94dfdf98654cb6e093c2089b3a3d2a8257(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6cad67d57d1685a594a92cd4edff93a5771455ce8d272ab882a2cfa2b0ee7e7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e20cc0cad83b5bf0088e91b5126be27e7baeb8d1baaa18de15d8b848dcdf3ed(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[SecretsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da714913161a86d2b786608566a2652209df5038bbcdb9d0ba00db80cf33b918(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5bc41d1a399150f5a3a2266b805e05c8059ee359bc186810771de1f7970e70f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fec3da02a1f7ca1c93a9eb66ee2f17934f5e5159d449d423c5053244782cf72b(
    value: SecretsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00e7e8bd16aee5197265a077bc2bed1e0e380484685e569954f5d8849d5437a6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
