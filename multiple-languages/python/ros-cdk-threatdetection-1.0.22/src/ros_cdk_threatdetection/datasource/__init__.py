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


class AntiBruteForceRules(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.datasource.AntiBruteForceRules",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ThreatDetection::AntiBruteForceRules``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAntiBruteForceRules``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AntiBruteForceRulesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d1ca3b47ff95113a043d01c7aa76bfef68e765c2d1f3abaf45ce2f15494e790)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleIds")
    def attr_anti_brute_force_rule_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRules")
    def attr_anti_brute_force_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AntiBruteForceRules: The list of anti brute force rules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRules"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.datasource.AntiBruteForceRulesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class AntiBruteForceRulesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``AntiBruteForceRules``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
        '''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AntiBruteForceRulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.datasource.Instances",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ThreatDetection::Instances``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstances``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances
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
            type_hints = typing.get_type_hints(_typecheckingstub__035dc9adee6ae8a74120ddb4ea2e8a11dfdb82b938e461a592cc68d52e3cb4e9)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.datasource.InstancesProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId"},
)
class InstancesProps:
    def __init__(
        self,
        *,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances

        :param instance_id: Property instanceId: The first ID of the resource.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66e05515aa5a610d9f37d4b9b9119fee416715dd160f380cd960cc83472e47d8)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The first ID of the resource.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAntiBruteForceRules(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.datasource.RosAntiBruteForceRules",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ThreatDetection::AntiBruteForceRules``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AntiBruteForceRules`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAntiBruteForceRulesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f64f587448ff839fa8bc048be4d30edcf94105d208fc64f2644df879de967ef2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__af852c024ab9ef0c19eaa6c90cddcb1733a590b39f4cea798badb7e112b71995)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRuleIds")
    def attr_anti_brute_force_rule_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AntiBruteForceRuleIds: The list of anti brute force rule IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAntiBruteForceRules")
    def attr_anti_brute_force_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AntiBruteForceRules: The list of anti brute force rules.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAntiBruteForceRules"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__867314675178a12098dcf86b14940fae4b97b9af32c16a157eb256c5eae1d84a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.datasource.RosAntiBruteForceRulesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosAntiBruteForceRulesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``RosAntiBruteForceRules``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
        '''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAntiBruteForceRulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-threatdetection.datasource.RosInstances",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ThreatDetection::Instances``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instances`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances
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
            type_hints = typing.get_type_hints(_typecheckingstub__c12e37c4474d235be1f5f561d506b5c9653f6083c7ef20b11776a4dab1afcf1b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1ffda2edb7913e6c18afc22f1ce4e347d4c5df023e27c74a919b1ba92095a861)
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
            type_hints = typing.get_type_hints(_typecheckingstub__842f161918cc2563bdea5d9a8c7cd79a63713c87f5cf22c5d52aaf60566c2c38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The first ID of the resource.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5a0842416af9770cfe672726fb26b705e7d69477bda13883d8a111472ff17cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-threatdetection.datasource.RosInstancesProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId"},
)
class RosInstancesProps:
    def __init__(
        self,
        *,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances

        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68e27faaf01ba725acc9e262f7fa7b26432acaeabe7d6c1ec1e5c9b7e9529ecc)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The first ID of the resource.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AntiBruteForceRules",
    "AntiBruteForceRulesProps",
    "Instances",
    "InstancesProps",
    "RosAntiBruteForceRules",
    "RosAntiBruteForceRulesProps",
    "RosInstances",
    "RosInstancesProps",
]

publication.publish()

def _typecheckingstub__4d1ca3b47ff95113a043d01c7aa76bfef68e765c2d1f3abaf45ce2f15494e790(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AntiBruteForceRulesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__035dc9adee6ae8a74120ddb4ea2e8a11dfdb82b938e461a592cc68d52e3cb4e9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66e05515aa5a610d9f37d4b9b9119fee416715dd160f380cd960cc83472e47d8(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f64f587448ff839fa8bc048be4d30edcf94105d208fc64f2644df879de967ef2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAntiBruteForceRulesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af852c024ab9ef0c19eaa6c90cddcb1733a590b39f4cea798badb7e112b71995(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__867314675178a12098dcf86b14940fae4b97b9af32c16a157eb256c5eae1d84a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c12e37c4474d235be1f5f561d506b5c9653f6083c7ef20b11776a4dab1afcf1b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ffda2edb7913e6c18afc22f1ce4e347d4c5df023e27c74a919b1ba92095a861(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__842f161918cc2563bdea5d9a8c7cd79a63713c87f5cf22c5d52aaf60566c2c38(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5a0842416af9770cfe672726fb26b705e7d69477bda13883d8a111472ff17cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68e27faaf01ba725acc9e262f7fa7b26432acaeabe7d6c1ec1e5c9b7e9529ecc(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
