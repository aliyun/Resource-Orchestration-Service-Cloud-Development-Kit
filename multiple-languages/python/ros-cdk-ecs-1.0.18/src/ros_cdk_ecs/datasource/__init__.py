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


class Activations(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.Activations",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::Activations``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ActivationsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Activations``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31376388672954c1495278d54446a1ffd15fd73d835b10d995acb0959c9ca4e6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrActivationIds")
    def attr_activation_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ActivationIds: The list of activation IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrActivationIds"))

    @builtins.property
    @jsii.member(jsii_name="attrActivations")
    def attr_activations(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Activations: The list of activations.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrActivations"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.ActivationsProps",
    jsii_struct_bases=[],
    name_mapping={"activation_id": "activationId", "instance_name": "instanceName"},
)
class ActivationsProps:
    def __init__(
        self,
        *,
        activation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Activations``.

        :param activation_id: Property activationId: Activation code ID.
        :param instance_name: Property instanceName: The default prefix of the instance name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7abe09caf51fa6f80e4afb5b6eb55f51472470d3db2e342d89c6148102575f72)
            check_type(argname="argument activation_id", value=activation_id, expected_type=type_hints["activation_id"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if activation_id is not None:
            self._values["activation_id"] = activation_id
        if instance_name is not None:
            self._values["instance_name"] = instance_name

    @builtins.property
    def activation_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property activationId: Activation code ID.'''
        result = self._values.get("activation_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: The default prefix of the instance name.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ActivationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AutoSnapshotPolicies(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPolicies",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::AutoSnapshotPolicies``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AutoSnapshotPoliciesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::AutoSnapshotPolicies``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__908857bd5675774ff3bd1e6d66c3cd10506d66851fc42893f61ede8ba6068960)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAutoSnapshotPolicies")
    def attr_auto_snapshot_policies(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoSnapshotPolicies: The list of auto snapshot policies.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoSnapshotPolicies"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoSnapshotPolicyIds")
    def attr_auto_snapshot_policy_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoSnapshotPolicyIds: The list of auto snapshot policy ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoSnapshotPolicyIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPoliciesProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_snapshot_policy_id": "autoSnapshotPolicyId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class AutoSnapshotPoliciesProps:
    def __init__(
        self,
        *,
        auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosAutoSnapshotPolicies.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::AutoSnapshotPolicies``.

        :param auto_snapshot_policy_id: Property autoSnapshotPolicyId: The ID of the automatic snapshot policy.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.
        :param tags: Property tags: Tags of snapshotpolicy.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee2683b0bf16ae85b4c77944198a1dc8ed7ee0fe54bd88b5c21b28ec13439e95)
            check_type(argname="argument auto_snapshot_policy_id", value=auto_snapshot_policy_id, expected_type=type_hints["auto_snapshot_policy_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auto_snapshot_policy_id is not None:
            self._values["auto_snapshot_policy_id"] = auto_snapshot_policy_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def auto_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoSnapshotPolicyId: The ID of the automatic snapshot policy.'''
        result = self._values.get("auto_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosAutoSnapshotPolicies.TagsProperty"]]:
        '''Property tags: Tags of snapshotpolicy.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosAutoSnapshotPolicies.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AutoSnapshotPoliciesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Commands(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.Commands",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::Commands``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["CommandsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Commands``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e63e11ecf449f3146a5217acd4629215d351bc94fef7953df9ee6e7155193fb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCommandIds")
    def attr_command_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CommandIds: The list of command IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommandIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCommands")
    def attr_commands(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Commands: The list of commands.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommands"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.CommandsProps",
    jsii_struct_bases=[],
    name_mapping={
        "command_id": "commandId",
        "command_name": "commandName",
        "description": "description",
        "type": "type",
    },
)
class CommandsProps:
    def __init__(
        self,
        *,
        command_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        command_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Commands``.

        :param command_id: Property commandId: The ID of the command.
        :param command_name: Property commandName: The name of the command. Partial command names are not supported.
        :param description: Property description: Command description.
        :param type: Property type: The command type. Valid values: RunBatScript: batch command, applicable to Windows instances RunPowerShellScript: PowerShell command, applicable to Windows instances RunShellScript: shell command, applicable to Linux instances
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16781640a94ab80dbc90c967553e81a258abcf397588a24c0c6aa4ad48f323dd)
            check_type(argname="argument command_id", value=command_id, expected_type=type_hints["command_id"])
            check_type(argname="argument command_name", value=command_name, expected_type=type_hints["command_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if command_id is not None:
            self._values["command_id"] = command_id
        if command_name is not None:
            self._values["command_name"] = command_name
        if description is not None:
            self._values["description"] = description
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def command_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property commandId: The ID of the command.'''
        result = self._values.get("command_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def command_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property commandName: The name of the command.

        Partial command names are not supported.
        '''
        result = self._values.get("command_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Command description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The command type.

        Valid values:
        RunBatScript: batch command, applicable to Windows instances
        RunPowerShellScript: PowerShell command, applicable to Windows instances
        RunShellScript: shell command, applicable to Linux instances
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CommandsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DedicatedHostClusters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.DedicatedHostClusters",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::DedicatedHostClusters``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DedicatedHostClustersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::DedicatedHostClusters``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d710d3b338bd48e29e003a61c082b3849ef02ba003e0efa8245afbd8ad8e403b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostClusterIds")
    def attr_dedicated_host_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostClusters")
    def attr_dedicated_host_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHostClusters: The list of dedicated host clusters.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostClusters"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.DedicatedHostClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_cluster_name": "dedicatedHostClusterName",
        "resource_group_id": "resourceGroupId",
        "zone_id": "zoneId",
    },
)
class DedicatedHostClustersProps:
    def __init__(
        self,
        *,
        dedicated_host_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::DedicatedHostClusters``.

        :param dedicated_host_cluster_name: Property dedicatedHostClusterName: The name of the dedicated host cluster.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        :param zone_id: Property zoneId: The zone ID of the dedicated host cluster. You can call the DescribeZones operation to query the most recent zone list.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8eb59d528eaaba02b6be3dfed8a801ae4667ce3590bd10ebc333fdd58ff97ac8)
            check_type(argname="argument dedicated_host_cluster_name", value=dedicated_host_cluster_name, expected_type=type_hints["dedicated_host_cluster_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dedicated_host_cluster_name is not None:
            self._values["dedicated_host_cluster_name"] = dedicated_host_cluster_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def dedicated_host_cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostClusterName: The name of the dedicated host cluster.'''
        result = self._values.get("dedicated_host_cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.

        If this parameter is specified to query resources,
        up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone ID of the dedicated host cluster.

        You can call the DescribeZones operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DedicatedHostClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DedicatedHosts(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.DedicatedHosts",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::DedicatedHosts``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DedicatedHostsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::DedicatedHosts``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7bf0e69e6179e23a4006a4ba89a40fea182360e7373acd991ed64a8b313422f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostIds")
    def attr_dedicated_host_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHostIds: The list of dedicated host ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHosts")
    def attr_dedicated_hosts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHosts: The list of dedicated hosts.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHosts"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.DedicatedHostsProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_cluster_id": "dedicatedHostClusterId",
        "dedicated_host_ids": "dedicatedHostIds",
        "dedicated_host_name": "dedicatedHostName",
        "dedicated_host_type": "dedicatedHostType",
        "resource_group_id": "resourceGroupId",
        "status": "status",
        "tags": "tags",
        "zone_id": "zoneId",
    },
)
class DedicatedHostsProps:
    def __init__(
        self,
        *,
        dedicated_host_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        dedicated_host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDedicatedHosts.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::DedicatedHosts``.

        :param dedicated_host_cluster_id: Property dedicatedHostClusterId: The ID of the dedicated host cluster.
        :param dedicated_host_ids: Property dedicatedHostIds: The IDs of the dedicated hosts. You can specify up to 100 dedicated host IDs.
        :param dedicated_host_name: Property dedicatedHostName: The name of the dedicated host.
        :param dedicated_host_type: Property dedicatedHostType: The type of the dedicated host.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
        :param status: Property status: The service status of the dedicated host. Valid values: Available: The dedicated host is running normally. UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host. PermanentFailure: A permanent failure exists and the dedicated host is unavailable. Default value: Available.
        :param tags: Property tags: Tags of ddh.
        :param zone_id: Property zoneId: The zone ID of the dedicated host.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42aedbd897333ea921c3b701e1e5b4fdb8e93561f8d4e5e906ea88b0307b3405)
            check_type(argname="argument dedicated_host_cluster_id", value=dedicated_host_cluster_id, expected_type=type_hints["dedicated_host_cluster_id"])
            check_type(argname="argument dedicated_host_ids", value=dedicated_host_ids, expected_type=type_hints["dedicated_host_ids"])
            check_type(argname="argument dedicated_host_name", value=dedicated_host_name, expected_type=type_hints["dedicated_host_name"])
            check_type(argname="argument dedicated_host_type", value=dedicated_host_type, expected_type=type_hints["dedicated_host_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dedicated_host_cluster_id is not None:
            self._values["dedicated_host_cluster_id"] = dedicated_host_cluster_id
        if dedicated_host_ids is not None:
            self._values["dedicated_host_ids"] = dedicated_host_ids
        if dedicated_host_name is not None:
            self._values["dedicated_host_name"] = dedicated_host_name
        if dedicated_host_type is not None:
            self._values["dedicated_host_type"] = dedicated_host_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def dedicated_host_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostClusterId: The ID of the dedicated host cluster.'''
        result = self._values.get("dedicated_host_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property dedicatedHostIds: The IDs of the dedicated hosts.

        You can specify up to 100 dedicated host IDs.
        '''
        result = self._values.get("dedicated_host_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def dedicated_host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostName: The name of the dedicated host.'''
        result = self._values.get("dedicated_host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostType: The type of the dedicated host.'''
        result = self._values.get("dedicated_host_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The service status of the dedicated host.

        Valid values:
        Available: The dedicated host is running normally.
        UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
        PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
        Default value: Available.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDedicatedHosts.TagsProperty"]]:
        '''Property tags: Tags of ddh.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDedicatedHosts.TagsProperty"]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone ID of the dedicated host.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DedicatedHostsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DeploymentSets(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.DeploymentSets",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::DeploymentSets``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DeploymentSetsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::DeploymentSets``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbfb1dee32b5f695dea96519a1da4e1f18971d4d19c3016b5b0b67f26aaea9b1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDeploymentSetIds")
    def attr_deployment_set_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DeploymentSetIds: the list of deployment set ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeploymentSetIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDeploymentSets")
    def attr_deployment_sets(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DeploymentSets: The list of deployment sets.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeploymentSets"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.DeploymentSetsProps",
    jsii_struct_bases=[],
    name_mapping={
        "deployment_set_ids": "deploymentSetIds",
        "deployment_set_name": "deploymentSetName",
        "domain": "domain",
        "strategy": "strategy",
    },
)
class DeploymentSetsProps:
    def __init__(
        self,
        *,
        deployment_set_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deployment_set_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::DeploymentSets``.

        :param deployment_set_ids: Property deploymentSetIds: he IDs of deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
        :param deployment_set_name: Property deploymentSetName: The name of the deployment set.
        :param domain: Property domain: The deployment domain.
        :param strategy: Property strategy: The deployment strategy. Valid values: Availability: high availability strategy. AvailabilityGroup: high availability group strategy.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69c2189165d9fb73c8e00d47b4923b97101b3615decd570a4b37b74e20639d9f)
            check_type(argname="argument deployment_set_ids", value=deployment_set_ids, expected_type=type_hints["deployment_set_ids"])
            check_type(argname="argument deployment_set_name", value=deployment_set_name, expected_type=type_hints["deployment_set_name"])
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument strategy", value=strategy, expected_type=type_hints["strategy"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if deployment_set_ids is not None:
            self._values["deployment_set_ids"] = deployment_set_ids
        if deployment_set_name is not None:
            self._values["deployment_set_name"] = deployment_set_name
        if domain is not None:
            self._values["domain"] = domain
        if strategy is not None:
            self._values["strategy"] = strategy

    @builtins.property
    def deployment_set_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deploymentSetIds: he IDs of deployment sets.

        The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
        '''
        result = self._values.get("deployment_set_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deployment_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deploymentSetName: The name of the deployment set.'''
        result = self._values.get("deployment_set_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domain: The deployment domain.'''
        result = self._values.get("domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property strategy: The deployment strategy.

        Valid values:
        Availability: high availability strategy.
        AvailabilityGroup: high availability group strategy.
        '''
        result = self._values.get("strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeploymentSetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DiskCategories(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.DiskCategories",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::DiskCategories``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DiskCategoriesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::DiskCategories``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cdad2dda84d247a4c81ad3929abb9ec99bc7a7d6ef0446185d84880653928ff)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDiskCategories")
    def attr_disk_categories(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskCategories: The list of disk categories.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskCategories"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskCategoryIds")
    def attr_disk_category_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskCategoryIds: The list of disk category IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskCategoryIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.DiskCategoriesProps",
    jsii_struct_bases=[],
    name_mapping={
        "type": "type",
        "zone_id": "zoneId",
        "data_disk_category": "dataDiskCategory",
        "instance_type": "instanceType",
        "system_disk_category": "systemDiskCategory",
    },
)
class DiskCategoriesProps:
    def __init__(
        self,
        *,
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::DiskCategories``.

        :param type: Property type: The resource type to query. If you set Type to data,you can specify the InstanceType parameter to disk. If you set Type to system, you must specify the InstanceType parameter. Valid values: system: system disk data: data disk
        :param zone_id: Property zoneId: The ID of the zone for which to query resources.
        :param data_disk_category: Property dataDiskCategory: The category of the data disk. Valid values: cloud: basic disk cloud_efficiency: ultra disk cloud_ssd: standard SSD ephemeral_ssd: local SSD cloud_essd: ESSD
        :param instance_type: Property instanceType: The instance type. For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list. When the Type parameter is set to system or data,you must set the InstanceType parameter.
        :param system_disk_category: Property systemDiskCategory: The category of the system disk. Valid values: cloud: basic disk cloud_efficiency: ultra disk cloud_ssd: standard SSD ephemeral_ssd: local SSD cloud_essd: ESSD
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e6ceca3f6e7fd62c645607a3925f300680f7fa211e345b5dbef62c9414a0e7a)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument data_disk_category", value=data_disk_category, expected_type=type_hints["data_disk_category"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "type": type,
            "zone_id": zone_id,
        }
        if data_disk_category is not None:
            self._values["data_disk_category"] = data_disk_category
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if system_disk_category is not None:
            self._values["system_disk_category"] = system_disk_category

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The resource type to query.

        If you set Type to data,you can specify the InstanceType parameter to disk.
        If you set Type to system, you must specify the InstanceType parameter.
        Valid values:
        system: system disk
        data: data disk
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: The ID of the zone for which to query resources.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataDiskCategory: The category of the data disk.

        Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: ESSD
        '''
        result = self._values.get("data_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: The instance type.

        For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
        When the Type parameter is set to system or data,you must set the InstanceType parameter.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskCategory: The category of the system disk.

        Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: ESSD
        '''
        result = self._values.get("system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DiskCategoriesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Disks(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.Disks",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::Disks``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DisksProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Disks``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ff8b3563605f065464a02b063559c9772b22f3f9f977000ebb39201c184e1a4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDiskIds")
    def attr_disk_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskIds: The list of disk IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDisks")
    def attr_disks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Disks: The list of disks.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisks"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.DisksProps",
    jsii_struct_bases=[],
    name_mapping={
        "additional_attributes": "additionalAttributes",
        "auto_snapshot_policy_id": "autoSnapshotPolicyId",
        "category": "category",
        "delete_auto_snapshot": "deleteAutoSnapshot",
        "delete_with_instance": "deleteWithInstance",
        "disk_charge_type": "diskChargeType",
        "disk_ids": "diskIds",
        "disk_name": "diskName",
        "disk_type": "diskType",
        "enable_automated_snapshot_policy": "enableAutomatedSnapshotPolicy",
        "enable_auto_snapshot": "enableAutoSnapshot",
        "enable_shared": "enableShared",
        "encrypted": "encrypted",
        "filters": "filters",
        "instance_id": "instanceId",
        "kms_key_id": "kmsKeyId",
        "multi_attach": "multiAttach",
        "portable": "portable",
        "resource_group_id": "resourceGroupId",
        "snapshot_id": "snapshotId",
        "status": "status",
        "tags": "tags",
        "zone_id": "zoneId",
    },
)
class DisksProps:
    def __init__(
        self,
        *,
        additional_attributes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delete_auto_snapshot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        disk_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_automated_snapshot_policy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auto_snapshot: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_shared: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union["RosDisks.FiltersProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_attach: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        portable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDisks.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Disks``.

        :param additional_attributes: Property additionalAttributes: The value of attribute N. Set the value to IOPS, which indicates the maximum IOPS of the disk.
        :param auto_snapshot_policy_id: Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
        :param category: Property category: The category of the disk. Valid values: all: all disk categories cloud: basic disk cloud_efficiency: ultra disk cloud_ssd: standard SSD ephemeral: retired local disk ephemeral_ssd: local SSD cloud_essd: ESSD local_ssd_pro: I/O-intensive local disk local_hdd_pro: throughput-intensive local disk
        :param delete_auto_snapshot: Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released. Default value: false.
        :param delete_with_instance: Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released. Valid values: true: The cloud disk is released when its associated instance is released. false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released. Default value: false.
        :param disk_charge_type: Property diskChargeType: The billing method of the disk. Valid values: PrePaid: subscription PostPaid: pay-as-you-go
        :param disk_ids: Property diskIds: The IDs of disks. The value is a JSON array that consists of up to 100 disk IDs. Separate the disk IDs with commas (,).
        :param disk_name: Property diskName: The name of the disk.
        :param disk_type: Property diskType: The type of the disk. Valid values: all: system disk and data disk system: system disk data: data disk Default value: all.
        :param enable_automated_snapshot_policy: Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk. true: An automatic snapshot policy is applied to the cloud disk. false: No automatic snapshot policy is applied to the cloud disk. Default value: false.
        :param enable_auto_snapshot: Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk. true: The automatic snapshot policy feature is enabled for the cloud disk. false: The automatic snapshot policy feature is disabled for the cloud disk. Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
        :param enable_shared: Property enableShared: Specifies whether the disk is a Shared Block Storage device.
        :param encrypted: Property encrypted: Specifies whether to query only encrypted cloud disks. Default value: false.
        :param filters: Property filters: Filter value when querying resources.
        :param instance_id: Property instanceId: The ID of the instance to which the disk is attached.
        :param kms_key_id: Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
        :param multi_attach: Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk. Valid values: Disabled: The multi-attach feature is disabled. Enabled: The multi-attach feature is enabled. LegacyShared: Shared Block Storage devices are queried. The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
        :param portable: Property portable: Specifies whether the disk is removable. Valid values: true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone. false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone. The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances: Local disks Local SSDs Subscription data disks
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the disk belongs. If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        :param snapshot_id: Property snapshotId: The ID of the snapshot used to create the cloud disk.
        :param status: Property status: The state of the cloud disk. For more information, see Disk states. Valid values: In_use Available Attaching Detaching Creating ReIniting All Default value: All.
        :param tags: Property tags: Tags of disks.
        :param zone_id: Property zoneId: The ID of the zone for which to query resources.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__405a0b24c0b56eab2251c909a1e196fca54da9c70c21cb8b8017ef7ac2ce8626)
            check_type(argname="argument additional_attributes", value=additional_attributes, expected_type=type_hints["additional_attributes"])
            check_type(argname="argument auto_snapshot_policy_id", value=auto_snapshot_policy_id, expected_type=type_hints["auto_snapshot_policy_id"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument delete_auto_snapshot", value=delete_auto_snapshot, expected_type=type_hints["delete_auto_snapshot"])
            check_type(argname="argument delete_with_instance", value=delete_with_instance, expected_type=type_hints["delete_with_instance"])
            check_type(argname="argument disk_charge_type", value=disk_charge_type, expected_type=type_hints["disk_charge_type"])
            check_type(argname="argument disk_ids", value=disk_ids, expected_type=type_hints["disk_ids"])
            check_type(argname="argument disk_name", value=disk_name, expected_type=type_hints["disk_name"])
            check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            check_type(argname="argument enable_automated_snapshot_policy", value=enable_automated_snapshot_policy, expected_type=type_hints["enable_automated_snapshot_policy"])
            check_type(argname="argument enable_auto_snapshot", value=enable_auto_snapshot, expected_type=type_hints["enable_auto_snapshot"])
            check_type(argname="argument enable_shared", value=enable_shared, expected_type=type_hints["enable_shared"])
            check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
            check_type(argname="argument filters", value=filters, expected_type=type_hints["filters"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
            check_type(argname="argument multi_attach", value=multi_attach, expected_type=type_hints["multi_attach"])
            check_type(argname="argument portable", value=portable, expected_type=type_hints["portable"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if additional_attributes is not None:
            self._values["additional_attributes"] = additional_attributes
        if auto_snapshot_policy_id is not None:
            self._values["auto_snapshot_policy_id"] = auto_snapshot_policy_id
        if category is not None:
            self._values["category"] = category
        if delete_auto_snapshot is not None:
            self._values["delete_auto_snapshot"] = delete_auto_snapshot
        if delete_with_instance is not None:
            self._values["delete_with_instance"] = delete_with_instance
        if disk_charge_type is not None:
            self._values["disk_charge_type"] = disk_charge_type
        if disk_ids is not None:
            self._values["disk_ids"] = disk_ids
        if disk_name is not None:
            self._values["disk_name"] = disk_name
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if enable_automated_snapshot_policy is not None:
            self._values["enable_automated_snapshot_policy"] = enable_automated_snapshot_policy
        if enable_auto_snapshot is not None:
            self._values["enable_auto_snapshot"] = enable_auto_snapshot
        if enable_shared is not None:
            self._values["enable_shared"] = enable_shared
        if encrypted is not None:
            self._values["encrypted"] = encrypted
        if filters is not None:
            self._values["filters"] = filters
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if kms_key_id is not None:
            self._values["kms_key_id"] = kms_key_id
        if multi_attach is not None:
            self._values["multi_attach"] = multi_attach
        if portable is not None:
            self._values["portable"] = portable
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if snapshot_id is not None:
            self._values["snapshot_id"] = snapshot_id
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def additional_attributes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property additionalAttributes: The value of attribute N.

        Set the value to IOPS, which indicates the maximum IOPS of the disk.
        '''
        result = self._values.get("additional_attributes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def auto_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.'''
        result = self._values.get("auto_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property category: The category of the disk.

        Valid values:
        all: all disk categories
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral: retired local disk
        ephemeral_ssd: local SSD
        cloud_essd: ESSD
        local_ssd_pro: I/O-intensive local disk
        local_hdd_pro: throughput-intensive local disk
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delete_auto_snapshot(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.

        Default value: false.
        '''
        result = self._values.get("delete_auto_snapshot")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delete_with_instance(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released.

        Valid values:
        true: The cloud disk is released when its associated instance is released.
        false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
        Default value: false.
        '''
        result = self._values.get("delete_with_instance")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskChargeType: The billing method of the disk.

        Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        result = self._values.get("disk_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property diskIds: The IDs of disks.

        The value is a JSON array that consists of up to 100 disk IDs.
        Separate the disk IDs with commas (,).
        '''
        result = self._values.get("disk_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def disk_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskName: The name of the disk.'''
        result = self._values.get("disk_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskType: The type of the disk.

        Valid values:
        all: system disk and data disk
        system: system disk
        data: data disk
        Default value: all.
        '''
        result = self._values.get("disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_automated_snapshot_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.

        true: An automatic snapshot policy is applied to the cloud disk.
        false: No automatic snapshot policy is applied to the cloud disk.
        Default value: false.
        '''
        result = self._values.get("enable_automated_snapshot_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auto_snapshot(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.

        true: The automatic snapshot policy feature is enabled for the cloud disk.
        false: The automatic snapshot policy feature is disabled for the cloud disk.
        Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
        '''
        result = self._values.get("enable_auto_snapshot")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_shared(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableShared: Specifies whether the disk is a Shared Block Storage device.'''
        result = self._values.get("enable_shared")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encrypted: Specifies whether to query only encrypted cloud disks.

        Default value: false.
        '''
        result = self._values.get("encrypted")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosDisks.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property filters: Filter value when querying resources.'''
        result = self._values.get("filters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosDisks.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the instance to which the disk is attached.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.'''
        result = self._values.get("kms_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_attach(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk.

        Valid values:
        Disabled: The multi-attach feature is disabled.
        Enabled: The multi-attach feature is enabled.
        LegacyShared: Shared Block Storage devices are queried.
        The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
        '''
        result = self._values.get("multi_attach")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def portable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property portable: Specifies whether the disk is removable.

        Valid values:
        true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
        false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
        The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
        Local disks
        Local SSDs
        Subscription data disks
        '''
        result = self._values.get("portable")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the disk belongs.

        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snapshotId: The ID of the snapshot used to create the cloud disk.'''
        result = self._values.get("snapshot_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The state of the cloud disk.

        For more information, see Disk states. Valid values:
        In_use
        Available
        Attaching
        Detaching
        Creating
        ReIniting
        All
        Default value: All.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDisks.TagsProperty"]]:
        '''Property tags: Tags of disks.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDisks.TagsProperty"]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone for which to query resources.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DisksProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class HpcClusters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.HpcClusters",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::HpcClusters``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["HpcClustersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::HpcClusters``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1ce18583faeb3b17e36307e177e9b619dbdc790910b508e75907a4b90252169)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHpcClusterIds")
    def attr_hpc_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HpcClusterIds: the list of hpc cluster ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHpcClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrHpcClusters")
    def attr_hpc_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HpcClusters: The list of hpc clusters.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHpcClusters"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.HpcClustersProps",
    jsii_struct_bases=[],
    name_mapping={"hpc_cluster_ids": "hpcClusterIds"},
)
class HpcClustersProps:
    def __init__(
        self,
        *,
        hpc_cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::HpcClusters``.

        :param hpc_cluster_ids: Property hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b23db95b830a8b4a58deb636cbcfd2a6ab064c097065d05ad60eb737c9539fae)
            check_type(argname="argument hpc_cluster_ids", value=hpc_cluster_ids, expected_type=type_hints["hpc_cluster_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if hpc_cluster_ids is not None:
            self._values["hpc_cluster_ids"] = hpc_cluster_ids

    @builtins.property
    def hpc_cluster_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property hpcClusterIds: The IDs of the HPC clusters.

        You can specify up to 100 HPC cluster IDs.
        '''
        result = self._values.get("hpc_cluster_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HpcClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Images(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.Images",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::Images``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ImagesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Images``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95c0ee889f09b9a0d1b741cd30531124bdb64cf1878e942e89fd94a7b7446f8b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrImageIds")
    def attr_image_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageIds: The list of image IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrImages")
    def attr_images(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Images: The list of images.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImages"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.ImagesProps",
    jsii_struct_bases=[],
    name_mapping={
        "action_type": "actionType",
        "architecture": "architecture",
        "image_family": "imageFamily",
        "image_id": "imageId",
        "image_name": "imageName",
        "image_owner_alias": "imageOwnerAlias",
        "instance_type": "instanceType",
        "is_public": "isPublic",
        "is_support_cloudinit": "isSupportCloudinit",
        "is_support_io_optimized": "isSupportIoOptimized",
        "os_type": "osType",
        "resource_group_id": "resourceGroupId",
        "snapshot_id": "snapshotId",
        "status": "status",
        "tags": "tags",
        "usage": "usage",
    },
)
class ImagesProps:
    def __init__(
        self,
        *,
        action_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_support_cloudinit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_support_io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosImages.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Images``.

        :param action_type: Property actionType: The scenario in which the image is used. Default value: CreateEcs. Valid values: CreateEcs: instance creation ChangeOS: replacement of the system disk or operating system
        :param architecture: Property architecture: The image architecture. Valid values: i38 x86_64 arm64
        :param image_family: Property imageFamily: The name of the image family. You can set this parameter to query images of the specified image family. This parameter is empty by default.
        :param image_id: Property imageId: The ID of the image.
        :param image_name: Property imageName: The name of the image. Support for fuzzy queries using *.
        :param image_owner_alias: Property imageOwnerAlias: The source of the image. Valid values: system: public images provided by Alibaba Cloud. self: your custom images. others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items: - To query community images, you must set IsPublic to true. To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty. marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images. This parameter is empty by default, which indicates that the results that match system, self, and others are returned.
        :param instance_type: Property instanceType: The instance type for which the image can be used.
        :param is_public: Property isPublic: Specifies whether to query published community images. Valid values: true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others. false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value. Default value: false.
        :param is_support_cloudinit: Property isSupportCloudinit: Specifies whether the image supports cloud-init.
        :param is_support_io_optimized: Property isSupportIoOptimized: Specifies whether the image can be used on I/O optimized instances.
        :param os_type: Property osType: The operating system type of the image. Valid values: windows linux
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the custom image belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        :param snapshot_id: Property snapshotId: The ID of the snapshot used to create the custom image.
        :param status: Property status: The state of the image. Default value: Available. Valid values: Creating: The image is being created. Waiting: The image is waiting to be processed. Available: The image is available. UnAvailable: The image is unavailable. CreateFailed: The image failed to be created. Deprecated: The image is discontinued. You can specify multiple values. Separate multiple values with commas (,).
        :param tags: Property tags: Tags of image.
        :param usage: Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance. Valid values: instance: The image is already in use and running on an ECS instance. none: The image is not in use.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bfd606490ecb01e90d52e73dc04c404d3fffa1912cef23fb3ff20f15537d5d3)
            check_type(argname="argument action_type", value=action_type, expected_type=type_hints["action_type"])
            check_type(argname="argument architecture", value=architecture, expected_type=type_hints["architecture"])
            check_type(argname="argument image_family", value=image_family, expected_type=type_hints["image_family"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument image_name", value=image_name, expected_type=type_hints["image_name"])
            check_type(argname="argument image_owner_alias", value=image_owner_alias, expected_type=type_hints["image_owner_alias"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument is_public", value=is_public, expected_type=type_hints["is_public"])
            check_type(argname="argument is_support_cloudinit", value=is_support_cloudinit, expected_type=type_hints["is_support_cloudinit"])
            check_type(argname="argument is_support_io_optimized", value=is_support_io_optimized, expected_type=type_hints["is_support_io_optimized"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument usage", value=usage, expected_type=type_hints["usage"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if action_type is not None:
            self._values["action_type"] = action_type
        if architecture is not None:
            self._values["architecture"] = architecture
        if image_family is not None:
            self._values["image_family"] = image_family
        if image_id is not None:
            self._values["image_id"] = image_id
        if image_name is not None:
            self._values["image_name"] = image_name
        if image_owner_alias is not None:
            self._values["image_owner_alias"] = image_owner_alias
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if is_public is not None:
            self._values["is_public"] = is_public
        if is_support_cloudinit is not None:
            self._values["is_support_cloudinit"] = is_support_cloudinit
        if is_support_io_optimized is not None:
            self._values["is_support_io_optimized"] = is_support_io_optimized
        if os_type is not None:
            self._values["os_type"] = os_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if snapshot_id is not None:
            self._values["snapshot_id"] = snapshot_id
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if usage is not None:
            self._values["usage"] = usage

    @builtins.property
    def action_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property actionType: The scenario in which the image is used.

        Default value: CreateEcs. Valid values:
        CreateEcs: instance creation
        ChangeOS: replacement of the system disk or operating system
        '''
        result = self._values.get("action_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def architecture(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property architecture: The image architecture.

        Valid values:
        i38
        x86_64
        arm64
        '''
        result = self._values.get("architecture")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_family(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageFamily: The name of the image family.

        You can set this parameter to query images of the specified image family.
        This parameter is empty by default.
        '''
        result = self._values.get("image_family")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageId: The ID of the image.'''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageName: The name of the image.

        Support for fuzzy queries using *.
        '''
        result = self._values.get("image_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageOwnerAlias: The source of the image.

        Valid values:
        system: public images provided by Alibaba Cloud.
        self: your custom images.
        others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:

        - To query community images, you must set IsPublic to true.
          To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
          marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
          This parameter is empty by default, which indicates that the results that match system, self, and others are returned.
        '''
        result = self._values.get("image_owner_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: The instance type for which the image can be used.'''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isPublic: Specifies whether to query published community images.

        Valid values:
        true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
        false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
        Default value: false.
        '''
        result = self._values.get("is_public")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_support_cloudinit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isSupportCloudinit: Specifies whether the image supports cloud-init.'''
        result = self._values.get("is_support_cloudinit")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_support_io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isSupportIoOptimized: Specifies whether the image can be used on I/O optimized instances.'''
        result = self._values.get("is_support_io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property osType: The operating system type of the image.

        Valid values:
        windows
        linux
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the custom image belongs.

        If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snapshotId: The ID of the snapshot used to create the custom image.'''
        result = self._values.get("snapshot_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The state of the image.

        Default value: Available. Valid values:
        Creating: The image is being created.
        Waiting: The image is waiting to be processed.
        Available: The image is available.
        UnAvailable: The image is unavailable.
        CreateFailed: The image failed to be created.
        Deprecated: The image is discontinued.
        You can specify multiple values. Separate multiple values with commas (,).
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosImages.TagsProperty"]]:
        '''Property tags: Tags of image.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosImages.TagsProperty"]], result)

    @builtins.property
    def usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance.

        Valid values:
        instance: The image is already in use and running on an ECS instance.
        none: The image is not in use.
        '''
        result = self._values.get("usage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImagesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.Instances",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::Instances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Instances``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e5ee8460bdf611d88294b6abff4ce76b285f17f76e14f3c9b84577767cfb499)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: The list of InstanceIds.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Instances: The list of Instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstances"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.InstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "additional_attributes": "additionalAttributes",
        "eip_addresses": "eipAddresses",
        "filters": "filters",
        "hpc_cluster_id": "hpcClusterId",
        "image_id": "imageId",
        "inner_ip_addresses": "innerIpAddresses",
        "instance_charge_type": "instanceChargeType",
        "instance_id": "instanceId",
        "instance_ids": "instanceIds",
        "instance_name": "instanceName",
        "instance_network_type": "instanceNetworkType",
        "instance_type": "instanceType",
        "instance_type_family": "instanceTypeFamily",
        "internet_charge_type": "internetChargeType",
        "io_optimized": "ioOptimized",
        "ipv6_address": "ipv6Address",
        "key_pair_name": "keyPairName",
        "private_ip_addresses": "privateIpAddresses",
        "public_ip_addresses": "publicIpAddresses",
        "rdma_ip_addresses": "rdmaIpAddresses",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "status": "status",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class InstancesProps:
    def __init__(
        self,
        *,
        additional_attributes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        eip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union["RosInstances.FiltersProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        hpc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inner_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_address: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        public_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        rdma_ip_addresses: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstances.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Instances``.

        :param additional_attributes: Property additionalAttributes: The value of attribute N. Valid values of N: 1 to 20. Valid values: META_OPTIONS: instance metadata DDH_CLUSTER: dedicated host cluster NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
        :param eip_addresses: Property eipAddresses: The elastic IP addresses (EIPs) of instances. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        :param filters: Property filters: Filter value when querying resources.
        :param hpc_cluster_id: Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
        :param image_id: Property imageId: The ID of the image.
        :param inner_ip_addresses: Property innerIpAddresses: The internal IP addresses of instances located in the classic network. This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        :param instance_charge_type: Property instanceChargeType: The billing method of the instance. Valid values: PostPaid: pay-as-you-go PrePaid: subscription
        :param instance_id: Property instanceId: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
        :param instance_ids: Property instanceIds: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
        :param instance_name: Property instanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard is supported.
        :param instance_network_type: Property instanceNetworkType: The network type of the instance. Valid values: classic: classic network vpc: VPC
        :param instance_type: Property instanceType: The instance type of the instance.
        :param instance_type_family: Property instanceTypeFamily: The instance family of the instance.
        :param internet_charge_type: Property internetChargeType: The billing method for network usage. Valid values: PayByBandwidth: pay-by-bandwidth PayByTraffic: pay-by-traffic
        :param io_optimized: Property ioOptimized: Specifies whether the instance is I/O optimized.
        :param ipv6_address: Property ipv6Address: IPv6 address N of the elastic network interface (ENI). You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
        :param key_pair_name: Property keyPairName: The name of the SSH key pair bound to the instance.
        :param private_ip_addresses: Property privateIpAddresses: The private IP addresses of instances located in VPCs. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        :param public_ip_addresses: Property publicIpAddresses: The public IP addresses of instances. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        :param rdma_ip_addresses: Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the instance belongs. If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        :param security_group_id: Property securityGroupId: The ID of the security group to which the instance belongs.
        :param status: Property status: The state of the instance. Valid values: Pending Running Starting Stopping Stopped
        :param tags: Property tags: Tags of instance.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC).
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch.
        :param zone_id: Property zoneId: The zone ID of the instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d92b9c207c50719bfc90e9feb3540e1bb69044a030ab5043d02add5f6cf1974c)
            check_type(argname="argument additional_attributes", value=additional_attributes, expected_type=type_hints["additional_attributes"])
            check_type(argname="argument eip_addresses", value=eip_addresses, expected_type=type_hints["eip_addresses"])
            check_type(argname="argument filters", value=filters, expected_type=type_hints["filters"])
            check_type(argname="argument hpc_cluster_id", value=hpc_cluster_id, expected_type=type_hints["hpc_cluster_id"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument inner_ip_addresses", value=inner_ip_addresses, expected_type=type_hints["inner_ip_addresses"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument instance_network_type", value=instance_network_type, expected_type=type_hints["instance_network_type"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument instance_type_family", value=instance_type_family, expected_type=type_hints["instance_type_family"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument io_optimized", value=io_optimized, expected_type=type_hints["io_optimized"])
            check_type(argname="argument ipv6_address", value=ipv6_address, expected_type=type_hints["ipv6_address"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument private_ip_addresses", value=private_ip_addresses, expected_type=type_hints["private_ip_addresses"])
            check_type(argname="argument public_ip_addresses", value=public_ip_addresses, expected_type=type_hints["public_ip_addresses"])
            check_type(argname="argument rdma_ip_addresses", value=rdma_ip_addresses, expected_type=type_hints["rdma_ip_addresses"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if additional_attributes is not None:
            self._values["additional_attributes"] = additional_attributes
        if eip_addresses is not None:
            self._values["eip_addresses"] = eip_addresses
        if filters is not None:
            self._values["filters"] = filters
        if hpc_cluster_id is not None:
            self._values["hpc_cluster_id"] = hpc_cluster_id
        if image_id is not None:
            self._values["image_id"] = image_id
        if inner_ip_addresses is not None:
            self._values["inner_ip_addresses"] = inner_ip_addresses
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if instance_ids is not None:
            self._values["instance_ids"] = instance_ids
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if instance_network_type is not None:
            self._values["instance_network_type"] = instance_network_type
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if instance_type_family is not None:
            self._values["instance_type_family"] = instance_type_family
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if ipv6_address is not None:
            self._values["ipv6_address"] = ipv6_address
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if private_ip_addresses is not None:
            self._values["private_ip_addresses"] = private_ip_addresses
        if public_ip_addresses is not None:
            self._values["public_ip_addresses"] = public_ip_addresses
        if rdma_ip_addresses is not None:
            self._values["rdma_ip_addresses"] = rdma_ip_addresses
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def additional_attributes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property additionalAttributes: The value of attribute N.

        Valid values of N: 1 to 20. Valid values:
        META_OPTIONS: instance metadata
        DDH_CLUSTER: dedicated host cluster
        NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
        '''
        result = self._values.get("additional_attributes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def eip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property eipAddresses: The elastic IP addresses (EIPs) of instances.

        This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        result = self._values.get("eip_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def filters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosInstances.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property filters: Filter value when querying resources.'''
        result = self._values.get("filters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosInstances.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def hpc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.'''
        result = self._values.get("hpc_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageId: The ID of the image.'''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inner_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property innerIpAddresses: The internal IP addresses of instances located in the classic network.

        This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        result = self._values.get("inner_ip_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: The billing method of the instance.

        Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The IDs of instances.

        The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property instanceIds: The IDs of instances.

        The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
        '''
        result = self._values.get("instance_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: The name of the instance.

        Fuzzy search with the asterisk (*) wildcard is supported.
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceNetworkType: The network type of the instance.

        Valid values:
        classic: classic network
        vpc: VPC
        '''
        result = self._values.get("instance_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: The instance type of the instance.'''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type_family(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceTypeFamily: The instance family of the instance.'''
        result = self._values.get("instance_type_family")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetChargeType: The billing method for network usage.

        Valid values:
        PayByBandwidth: pay-by-bandwidth
        PayByTraffic: pay-by-traffic
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ioOptimized: Specifies whether the instance is I/O optimized.'''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_address(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property ipv6Address: IPv6 address N of the elastic network interface (ENI).

        You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
        '''
        result = self._values.get("ipv6_address")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairName: The name of the SSH key pair bound to the instance.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property privateIpAddresses: The private IP addresses of instances located in VPCs.

        This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        result = self._values.get("private_ip_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def public_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property publicIpAddresses: The public IP addresses of instances.

        The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        result = self._values.get("public_ip_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def rdma_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.'''
        result = self._values.get("rdma_ip_addresses")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the instance belongs.

        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The ID of the security group to which the instance belongs.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The state of the instance.

        Valid values:
        Pending
        Running
        Starting
        Stopping
        Stopped
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstances.TagsProperty"]]:
        '''Property tags: Tags of instance.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstances.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC).'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the vSwitch.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone ID of the instance.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class KeyPairs(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.KeyPairs",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::KeyPairs``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["KeyPairsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::KeyPairs``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d2eeb5c8a28f35501519807f7abffef3eca20a4840bd759933fd7cfc89202db)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairNames")
    def attr_key_pair_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyPairNames: The list of key pair names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairNames"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairs")
    def attr_key_pairs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyPairs: The list of key pairs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairs"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.KeyPairsProps",
    jsii_struct_bases=[],
    name_mapping={
        "key_pair_finger_print": "keyPairFingerPrint",
        "key_pair_name": "keyPairName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class KeyPairsProps:
    def __init__(
        self,
        *,
        key_pair_finger_print: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosKeyPairs.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::KeyPairs``.

        :param key_pair_finger_print: Property keyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
        :param key_pair_name: Property keyPairName: he name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns: *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey. SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey. *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey. SshKey: queries the key pair named SshKey.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the key pair belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        :param tags: Property tags: Tags of keypair.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aed80b0415c11b70df96c167bc02a35a69800d11e5ebe399bdc9f8d5e9013bd0)
            check_type(argname="argument key_pair_finger_print", value=key_pair_finger_print, expected_type=type_hints["key_pair_finger_print"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if key_pair_finger_print is not None:
            self._values["key_pair_finger_print"] = key_pair_finger_print
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def key_pair_finger_print(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairFingerPrint: The fingerprint of the key pair.

        The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
        '''
        result = self._values.get("key_pair_finger_print")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairName: he name of the key pair.

        You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns:
        *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
        SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
        *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
        SshKey: queries the key pair named SshKey.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the key pair belongs.

        If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosKeyPairs.TagsProperty"]]:
        '''Property tags: Tags of keypair.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosKeyPairs.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "KeyPairsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ManagedInstances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.ManagedInstances",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::ManagedInstances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ManagedInstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::ManagedInstances``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d297c69410689d5b855802321758d1c01ef06d58482cb15fe57b732b5a6a7614)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: The list of managed instance ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Instances: The list of managed instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstances"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.ManagedInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "activation_id": "activationId",
        "instance_id": "instanceId",
        "instance_ip": "instanceIp",
        "instance_name": "instanceName",
        "os_type": "osType",
        "tags": "tags",
    },
)
class ManagedInstancesProps:
    def __init__(
        self,
        *,
        activation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        instance_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosManagedInstances.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::ManagedInstances``.

        :param activation_id: Property activationId: The ID of the activation code.
        :param instance_id: Property instanceId: The ID of managed instance. Valid values of N: 1 to 50.
        :param instance_ip: Property instanceIp: The internal or public IP address of the managed instance.
        :param instance_name: Property instanceName: The name of the managed instance.
        :param os_type: Property osType: The operating system type of the managed instance. Valid values: windows linux
        :param tags: Property tags: Tags of managedinstance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bda8b4e751b830c3a5b69003316d1f31849858b61756bfb86e89f0d307b96513)
            check_type(argname="argument activation_id", value=activation_id, expected_type=type_hints["activation_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument instance_ip", value=instance_ip, expected_type=type_hints["instance_ip"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if activation_id is not None:
            self._values["activation_id"] = activation_id
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if instance_ip is not None:
            self._values["instance_ip"] = instance_ip
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if os_type is not None:
            self._values["os_type"] = os_type
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def activation_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property activationId: The ID of the activation code.'''
        result = self._values.get("activation_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property instanceId: The ID of managed instance.

        Valid values of N: 1 to 50.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def instance_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceIp: The internal or public IP address of the managed instance.'''
        result = self._values.get("instance_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: The name of the managed instance.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property osType: The operating system type of the managed instance.

        Valid values:
        windows
        linux
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosManagedInstances.TagsProperty"]]:
        '''Property tags: Tags of managedinstance.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosManagedInstances.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ManagedInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NetworkInterfaces(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.NetworkInterfaces",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::NetworkInterfaces``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["NetworkInterfacesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::NetworkInterfaces``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7719a1b69ceb9a8d58bd40b179721ba35e0403703d0142ee81a650af520b8b7a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNetworkInterfaceIds")
    def attr_network_interface_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NetworkInterfaceIds: The list of NetworkInterfaceIds.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkInterfaceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkInterfaces")
    def attr_network_interfaces(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NetworkInterfaces: The list of NetworkInterfaces.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkInterfaces"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.NetworkInterfacesProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "ipv6_addresses": "ipv6Addresses",
        "network_interface_ids": "networkInterfaceIds",
        "network_interface_name": "networkInterfaceName",
        "primary_ip_address": "primaryIpAddress",
        "private_ip_addresses": "privateIpAddresses",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "service_managed": "serviceManaged",
        "status": "status",
        "tags": "tags",
        "type": "type",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class NetworkInterfacesProps:
    def __init__(
        self,
        *,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        network_interface_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        network_interface_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        primary_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_managed: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosNetworkInterfaces.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::NetworkInterfaces``.

        :param instance_id: Property instanceId: The ID of the instance to which the ENI is bound.
        :param ipv6_addresses: Property ipv6Addresses: IPv6 address N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
        :param network_interface_ids: Property networkInterfaceIds: The ID of ENI N. Valid values of N: 1 to 100.
        :param network_interface_name: Property networkInterfaceName: The name of the ENI.
        :param primary_ip_address: Property primaryIpAddress: The primary private IPv4 address of the ENI.
        :param private_ip_addresses: Property privateIpAddresses: Secondary private IPv4 address N of the ENI. Valid values of N: 1 to 100.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the eni belongs. If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        :param security_group_id: Property securityGroupId: The ID of the security group to which the secondary ENI belongs. To query the details of secondary ENIs based on the ID of a security group, specify this parameter. To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
        :param service_managed: Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
        :param status: Property status: The state of the ENI. Valid values: Creating: The ENI is being created. Available: The ENI is not bound to an instance. Attaching: The ENI is being bound to an instance. InUse: The ENI is bound to an instance. Detaching: The ENI is being unbound from an instance. Deleting: The ENI is being deleted. CreateFailed: The ENI cannot be created. This parameter is empty by default, which indicates that ENIs in all states are queried.
        :param tags: Property tags: Tags of eni.
        :param type: Property type: The type of the ENI. Valid values: Primary Secondary This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70b4fecf3ddb0a58d8c2deb4de12a6c78dc59d26b43098871216ba417e78722b)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument ipv6_addresses", value=ipv6_addresses, expected_type=type_hints["ipv6_addresses"])
            check_type(argname="argument network_interface_ids", value=network_interface_ids, expected_type=type_hints["network_interface_ids"])
            check_type(argname="argument network_interface_name", value=network_interface_name, expected_type=type_hints["network_interface_name"])
            check_type(argname="argument primary_ip_address", value=primary_ip_address, expected_type=type_hints["primary_ip_address"])
            check_type(argname="argument private_ip_addresses", value=private_ip_addresses, expected_type=type_hints["private_ip_addresses"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument service_managed", value=service_managed, expected_type=type_hints["service_managed"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if ipv6_addresses is not None:
            self._values["ipv6_addresses"] = ipv6_addresses
        if network_interface_ids is not None:
            self._values["network_interface_ids"] = network_interface_ids
        if network_interface_name is not None:
            self._values["network_interface_name"] = network_interface_name
        if primary_ip_address is not None:
            self._values["primary_ip_address"] = primary_ip_address
        if private_ip_addresses is not None:
            self._values["private_ip_addresses"] = private_ip_addresses
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_managed is not None:
            self._values["service_managed"] = service_managed
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if type is not None:
            self._values["type"] = type
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the instance to which the ENI is bound.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property ipv6Addresses: IPv6 address N of the ENI.

        You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
        '''
        result = self._values.get("ipv6_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def network_interface_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property networkInterfaceIds: The ID of ENI N.

        Valid values of N: 1 to 100.
        '''
        result = self._values.get("network_interface_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def network_interface_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkInterfaceName: The name of the ENI.'''
        result = self._values.get("network_interface_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def primary_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property primaryIpAddress: The primary private IPv4 address of the ENI.'''
        result = self._values.get("primary_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property privateIpAddresses: Secondary private IPv4 address N of the ENI.

        Valid values of N: 1 to 100.
        '''
        result = self._values.get("private_ip_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the eni belongs.

        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The ID of the security group to which the secondary ENI belongs.

        To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
        To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_managed(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.'''
        result = self._values.get("service_managed")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The state of the ENI.

        Valid values:
        Creating: The ENI is being created.
        Available: The ENI is not bound to an instance.
        Attaching: The ENI is being bound to an instance.
        InUse: The ENI is bound to an instance.
        Detaching: The ENI is being unbound from an instance.
        Deleting: The ENI is being deleted.
        CreateFailed: The ENI cannot be created.
        This parameter is empty by default, which indicates that ENIs in all states are queried.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosNetworkInterfaces.TagsProperty"]]:
        '''Property tags: Tags of eni.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosNetworkInterfaces.TagsProperty"]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The type of the ENI.

        Valid values:
        Primary
        Secondary
        This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the vSwitch to which the ENI is connected.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NetworkInterfacesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RecommendInstanceTypes(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RecommendInstanceTypes",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::RecommendInstanceTypes``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["RecommendInstanceTypesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::RecommendInstanceTypes``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4fc01eec37570d0e1dfa773f232cb92a083124031d3be1c8d0347c9e2b3dc8a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceTypeIds")
    def attr_instance_type_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceTypeIds: The list of instance type ids.

        Note that instance type ids are not unique.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceTypeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceTypes")
    def attr_instance_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceTypes: The list of instance types, including information such as cores and memory.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceTypes"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RecommendInstanceTypesProps",
    jsii_struct_bases=[],
    name_mapping={
        "cores": "cores",
        "instance_charge_type": "instanceChargeType",
        "instance_family_level": "instanceFamilyLevel",
        "instance_type": "instanceType",
        "instance_type_families": "instanceTypeFamilies",
        "io_optimized": "ioOptimized",
        "max_price": "maxPrice",
        "memory": "memory",
        "priority_strategy": "priorityStrategy",
        "scene": "scene",
        "spot_strategy": "spotStrategy",
        "system_disk_category": "systemDiskCategory",
        "zone_id": "zoneId",
        "zone_match_mode": "zoneMatchMode",
    },
)
class RecommendInstanceTypesProps:
    def __init__(
        self,
        *,
        cores: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_family_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type_families: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_price: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::RecommendInstanceTypes``.

        :param cores: Property cores: The number of vCPUs of the instance. Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
        :param instance_charge_type: Property instanceChargeType: The billing method of the instances of the instance type. Valid values: PrePaid: subscription PostPaid: pay-as-you-go Default value: PostPaid.
        :param instance_family_level: Property instanceFamilyLevel: The level of the instance family. Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
        :param instance_type: Property instanceType: The specified instance type. For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list. Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
        :param instance_type_families: Property instanceTypeFamilies: The list of instance family to be filtered out. You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
        :param io_optimized: Property ioOptimized: Specifies whether to match I/O optimized instances. The IoOptimized parameter cannot be specified when the instance is not I/O optimized. Valid values: optimized: matches I/O optimized instances. none: matches non-I/O optimized instances. Default value: optimized. If you query alternative instance types for retired instance types, this parameter is set to none by default. Default value: none.
        :param max_price: Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances. Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
        :param memory: Property memory: The memory size of the instance. Unit: GiB. Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
        :param priority_strategy: Property priorityStrategy: The policy for recommending instance types. Valid values: InventoryFirst: Instance types are recommended in descending order based on resource availability. PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU. NewProductFirst: The latest instance types are recommended first. Default value: InventoryFirst.
        :param scene: Property scene: Specifies the scenario in which the instance type is recommended. Valid values: UPGRADE: instance type upgrade or downgrade CREATE: instance creation Default value: CREATE.
        :param spot_strategy: Property spotStrategy: The bidding policy of preemptible instances. Valid values: NoSpot: applies to regular pay-as-you-go instances. SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices. SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase. Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid. Default value: NoSpot.
        :param system_disk_category: Property systemDiskCategory: The category of the system disk. Valid values: cloud_efficiency: ultra disk cloud_ssd: standard SSD cloud_essd: enhanced SSD (ESSD) cloud: basic disk For non-I/O optimized instances, the default value is cloud. For I/O optimized instances, the default value is cloud_efficiency.
        :param zone_id: Property zoneId: The zone ID of the alternative instance types. You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
        :param zone_match_mode: Property zoneMatchMode: Specifies which alternative instance types are recommended. Valid values: Strict: recommends only alternative instance types in the zone specified by ZoneId. Include: recommends all instance types in all the zones in the same region as the specified instance type. When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db4fb0fb5a88dfb08101702b2739658572e64bfc37862992938c201b49548c6d)
            check_type(argname="argument cores", value=cores, expected_type=type_hints["cores"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument instance_family_level", value=instance_family_level, expected_type=type_hints["instance_family_level"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument instance_type_families", value=instance_type_families, expected_type=type_hints["instance_type_families"])
            check_type(argname="argument io_optimized", value=io_optimized, expected_type=type_hints["io_optimized"])
            check_type(argname="argument max_price", value=max_price, expected_type=type_hints["max_price"])
            check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
            check_type(argname="argument priority_strategy", value=priority_strategy, expected_type=type_hints["priority_strategy"])
            check_type(argname="argument scene", value=scene, expected_type=type_hints["scene"])
            check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
            check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument zone_match_mode", value=zone_match_mode, expected_type=type_hints["zone_match_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cores is not None:
            self._values["cores"] = cores
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_family_level is not None:
            self._values["instance_family_level"] = instance_family_level
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if instance_type_families is not None:
            self._values["instance_type_families"] = instance_type_families
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if max_price is not None:
            self._values["max_price"] = max_price
        if memory is not None:
            self._values["memory"] = memory
        if priority_strategy is not None:
            self._values["priority_strategy"] = priority_strategy
        if scene is not None:
            self._values["scene"] = scene
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy
        if system_disk_category is not None:
            self._values["system_disk_category"] = system_disk_category
        if zone_id is not None:
            self._values["zone_id"] = zone_id
        if zone_match_mode is not None:
            self._values["zone_match_mode"] = zone_match_mode

    @builtins.property
    def cores(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cores: The number of vCPUs of the instance.

        Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
        '''
        result = self._values.get("cores")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: The billing method of the instances of the instance type.

        Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        Default value: PostPaid.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_family_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceFamilyLevel: The level of the instance family.

        Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
        '''
        result = self._values.get("instance_family_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: The specified instance type.

        For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
        Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type_families(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property instanceTypeFamilies: The list of instance family to be filtered out.

        You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
        '''
        result = self._values.get("instance_type_families")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ioOptimized: Specifies whether to match I/O optimized instances.

        The IoOptimized parameter cannot be specified when the instance is not I/O optimized. Valid values:
        optimized: matches I/O optimized instances.
        none: matches non-I/O optimized instances.
        Default value: optimized.
        If you query alternative instance types for retired instance types, this parameter is set to none by default.
        Default value: none.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_price(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.

        Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
        '''
        result = self._values.get("max_price")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property memory: The memory size of the instance.

        Unit: GiB.
        Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
        '''
        result = self._values.get("memory")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property priorityStrategy: The policy for recommending instance types.

        Valid values:
        InventoryFirst: Instance types are recommended in descending order based on resource availability.
        PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
        NewProductFirst: The latest instance types are recommended first.
        Default value: InventoryFirst.
        '''
        result = self._values.get("priority_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scene(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scene: Specifies the scenario in which the instance type is recommended.

        Valid values:
        UPGRADE: instance type upgrade or downgrade
        CREATE: instance creation
        Default value: CREATE.
        '''
        result = self._values.get("scene")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotStrategy: The bidding policy of preemptible instances.

        Valid values:
        NoSpot: applies to regular pay-as-you-go instances.
        SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
        SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
        Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
        Default value: NoSpot.
        '''
        result = self._values.get("spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskCategory: The category of the system disk.

        Valid values:
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        cloud_essd: enhanced SSD (ESSD)
        cloud: basic disk
        For non-I/O optimized instances, the default value is cloud.
        For I/O optimized instances, the default value is cloud_efficiency.
        '''
        result = self._values.get("system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone ID of the alternative instance types.

        You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneMatchMode: Specifies which alternative instance types are recommended.

        Valid values:
        Strict: recommends only alternative instance types in the zone specified by ZoneId.
        Include: recommends all instance types in all the zones in the same region as the specified instance type.
        When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
        '''
        result = self._values.get("zone_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RecommendInstanceTypesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosActivations(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosActivations",
):
    '''A ROS template type:  ``DATASOURCE::ECS::Activations``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosActivationsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Activations``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2c86c58d299418973300c7010e5aa0891e87cee7a2a33465eb20e4b62a36ab2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d247f70e27f1c467f8f5b1a9dd282d611125b06f981cf5e0cb877cadc1fb11d4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrActivationIds")
    def attr_activation_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ActivationIds: The list of activation IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrActivationIds"))

    @builtins.property
    @jsii.member(jsii_name="attrActivations")
    def attr_activations(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Activations: The list of activations.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrActivations"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__cfccbd5a213e893d3822f6158e0fb51f64e1462f0582690c78f8ac2d7a276c82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="activationId")
    def activation_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: activationId: Activation code ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "activationId"))

    @activation_id.setter
    def activation_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92a930d3966bb539ca29c54b634b490164a990daf6c55a97ec581d581fade292)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "activationId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The default prefix of the instance name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5bf03dcc6ec165c089d00dd46afcf5920ba7324a49d4f2ab0518d90f08acf56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosActivationsProps",
    jsii_struct_bases=[],
    name_mapping={"activation_id": "activationId", "instance_name": "instanceName"},
)
class RosActivationsProps:
    def __init__(
        self,
        *,
        activation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Activations``.

        :param activation_id: 
        :param instance_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a8c7f35406abe7472cac4c1c677b9699813f988cdfec434a947e12ec8a858c0)
            check_type(argname="argument activation_id", value=activation_id, expected_type=type_hints["activation_id"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if activation_id is not None:
            self._values["activation_id"] = activation_id
        if instance_name is not None:
            self._values["instance_name"] = instance_name

    @builtins.property
    def activation_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: activationId: Activation code ID.
        '''
        result = self._values.get("activation_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The default prefix of the instance name.
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosActivationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAutoSnapshotPolicies(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosAutoSnapshotPolicies",
):
    '''A ROS template type:  ``DATASOURCE::ECS::AutoSnapshotPolicies``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAutoSnapshotPoliciesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::AutoSnapshotPolicies``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56dcc66cd36999c73a7821b734dbe09be718008ed1aca95c04790ba055e3b17e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__33ac32cd0d8d63dbc73c2a86141a5cfb27cc919b74ca54fb86314aa24c50c193)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoSnapshotPolicies")
    def attr_auto_snapshot_policies(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoSnapshotPolicies: The list of auto snapshot policies.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoSnapshotPolicies"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoSnapshotPolicyIds")
    def attr_auto_snapshot_policy_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoSnapshotPolicyIds: The list of auto snapshot policy ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoSnapshotPolicyIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3df4690426aa9a8f0327aa773e24fcd8d90c2e65a188c8b412f80b5940401628)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="autoSnapshotPolicyId")
    def auto_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoSnapshotPolicyId: The ID of the automatic snapshot policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoSnapshotPolicyId"))

    @auto_snapshot_policy_id.setter
    def auto_snapshot_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__258cfcb8cad240aa749e1cf2a57b7849806a68936c7b9be9a326e5ddba2fc2d6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoSnapshotPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8595f6e597c98cceb749daf567c5fcdc3c90b215f0747a12b708efd07ec5cb34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosAutoSnapshotPolicies.TagsProperty"]]:
        '''
        :Property: tags: Tags of snapshotpolicy.
        '''
        return typing.cast(typing.Optional[typing.List["RosAutoSnapshotPolicies.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosAutoSnapshotPolicies.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc0e3f6daf84c89f1bc4775043c500eaaf104880efb33f45478e822f560490b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosAutoSnapshotPolicies.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__ba587badbdc402188f9be24af2ea08fbb474bfdcf6f8f1bbd2e278f0570dc201)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosAutoSnapshotPoliciesProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_snapshot_policy_id": "autoSnapshotPolicyId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosAutoSnapshotPoliciesProps:
    def __init__(
        self,
        *,
        auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosAutoSnapshotPolicies.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::AutoSnapshotPolicies``.

        :param auto_snapshot_policy_id: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9952456f808e92ba17221952e3ff682c890e366c52eb5ac9b04f0cc35bc80ab)
            check_type(argname="argument auto_snapshot_policy_id", value=auto_snapshot_policy_id, expected_type=type_hints["auto_snapshot_policy_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auto_snapshot_policy_id is not None:
            self._values["auto_snapshot_policy_id"] = auto_snapshot_policy_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def auto_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoSnapshotPolicyId: The ID of the automatic snapshot policy.
        '''
        result = self._values.get("auto_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosAutoSnapshotPolicies.TagsProperty]]:
        '''
        :Property: tags: Tags of snapshotpolicy.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosAutoSnapshotPolicies.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAutoSnapshotPoliciesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCommands(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosCommands",
):
    '''A ROS template type:  ``DATASOURCE::ECS::Commands``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCommandsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Commands``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a21aa5074269840b0aa224401ddd0bfc12795308399bd2c688a113b2e0034379)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a4366f975d8898040f6a699d1c88293e24574f668cbc08e6c230d0ecab6c1e3c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCommandIds")
    def attr_command_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CommandIds: The list of command IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommandIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCommands")
    def attr_commands(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Commands: The list of commands.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommands"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__89bbdc2e479bf0f48ce55ad416831cda4e637ada1669ffaaa32bcd8c0f75f376)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="commandId")
    def command_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commandId: The ID of the command.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "commandId"))

    @command_id.setter
    def command_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f403245d52ec4eddb48f3e28e636156e32447fff8756c2f0b84529d2ee8cc557)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commandId", value)

    @builtins.property
    @jsii.member(jsii_name="commandName")
    def command_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commandName: The name of the command. Partial command names are not supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "commandName"))

    @command_name.setter
    def command_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47801e78fab1d39c9d7865f80dde7a02af4746c123a96fbafa98e8afeeaf6277)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commandName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Command description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f0730028b327d59966d6448cd93b172029fc55f02873dd520a38930efaaac64)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The command type. Valid values:
        RunBatScript: batch command, applicable to Windows instances
        RunPowerShellScript: PowerShell command, applicable to Windows instances
        RunShellScript: shell command, applicable to Linux instances
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29836d179229ba5cfdcf8cd80a51bb28e7816bf417ababfc045073ebd1bac44e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosCommandsProps",
    jsii_struct_bases=[],
    name_mapping={
        "command_id": "commandId",
        "command_name": "commandName",
        "description": "description",
        "type": "type",
    },
)
class RosCommandsProps:
    def __init__(
        self,
        *,
        command_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        command_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Commands``.

        :param command_id: 
        :param command_name: 
        :param description: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b9be02587a6611fc32ae3bf077816f9bed9ecedc0ad0d48acbc05164d136d75)
            check_type(argname="argument command_id", value=command_id, expected_type=type_hints["command_id"])
            check_type(argname="argument command_name", value=command_name, expected_type=type_hints["command_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if command_id is not None:
            self._values["command_id"] = command_id
        if command_name is not None:
            self._values["command_name"] = command_name
        if description is not None:
            self._values["description"] = description
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def command_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commandId: The ID of the command.
        '''
        result = self._values.get("command_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def command_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commandName: The name of the command. Partial command names are not supported.
        '''
        result = self._values.get("command_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Command description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The command type. Valid values:
        RunBatScript: batch command, applicable to Windows instances
        RunPowerShellScript: PowerShell command, applicable to Windows instances
        RunShellScript: shell command, applicable to Linux instances
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCommandsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDedicatedHostClusters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDedicatedHostClusters",
):
    '''A ROS template type:  ``DATASOURCE::ECS::DedicatedHostClusters``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDedicatedHostClustersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::DedicatedHostClusters``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c210c9fe0e20f55472b55cde6790b51ad31eb8657ec60c5521d1c5f83eacc75)
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
            type_hints = typing.get_type_hints(_typecheckingstub__522a6922a41a11c94981cca47c5286bc903952512898d9857c5641eb8f004818)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostClusterIds")
    def attr_dedicated_host_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostClusterIds: The list of dedicated host cluster IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostClusters")
    def attr_dedicated_host_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostClusters: The list of dedicated host clusters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostClusters"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__73ce0d92a9473f2128bb11ba482c4d10945c8f9eb2009cbc3199467121600066)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostClusterName")
    def dedicated_host_cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostClusterName: The name of the dedicated host cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostClusterName"))

    @dedicated_host_cluster_name.setter
    def dedicated_host_cluster_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7fd1c4768fc17e83bc6a88d89024a045ca26963aa06d75ff576496d99c3b92c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostClusterName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
        If this parameter is specified to query resources,
        up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__854eb5902bbd4c484f52a906906da39ed65b52d2acf5ef22c6c88da5146bbcba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The zone ID of the dedicated host cluster.
        You can call the DescribeZones operation to query the most recent zone list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e246a7d7adbd80e38d7218dd6e49557c61e5a057a9f7efe9196601af5bde7d1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDedicatedHostClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_cluster_name": "dedicatedHostClusterName",
        "resource_group_id": "resourceGroupId",
        "zone_id": "zoneId",
    },
)
class RosDedicatedHostClustersProps:
    def __init__(
        self,
        *,
        dedicated_host_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::DedicatedHostClusters``.

        :param dedicated_host_cluster_name: 
        :param resource_group_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0f0fbaca1dae45ad95e70a36b652dd2c09908ed8573567d2a936d8732a401bc)
            check_type(argname="argument dedicated_host_cluster_name", value=dedicated_host_cluster_name, expected_type=type_hints["dedicated_host_cluster_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dedicated_host_cluster_name is not None:
            self._values["dedicated_host_cluster_name"] = dedicated_host_cluster_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def dedicated_host_cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostClusterName: The name of the dedicated host cluster.
        '''
        result = self._values.get("dedicated_host_cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
        If this parameter is specified to query resources,
        up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The zone ID of the dedicated host cluster.
        You can call the DescribeZones operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDedicatedHostClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDedicatedHosts(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDedicatedHosts",
):
    '''A ROS template type:  ``DATASOURCE::ECS::DedicatedHosts``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDedicatedHostsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::DedicatedHosts``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__deb1dd34923cc05853740f31fd8dd071ef149142512304f024bbc7a0017749b6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9ca0e9958ea28191a5836c2c59dfc3d47a6d963246ac8b1928ce9311f4bcf8dd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostIds")
    def attr_dedicated_host_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostIds: The list of dedicated host ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHosts")
    def attr_dedicated_hosts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHosts: The list of dedicated hosts.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHosts"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__74abcc3ceceb5306ed6a6bac0386112f8cde84b7d8ca8e21b9533ccbe36d795c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostClusterId")
    def dedicated_host_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostClusterId: The ID of the dedicated host cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostClusterId"))

    @dedicated_host_cluster_id.setter
    def dedicated_host_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32ef3d8a103a5fc383b58a11e12f4a6c32e9179a5ac5412d24e644749c51e4bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostIds")
    def dedicated_host_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: dedicatedHostIds: The IDs of the dedicated hosts. You can specify up to 100 dedicated host IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "dedicatedHostIds"))

    @dedicated_host_ids.setter
    def dedicated_host_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39d0d3fc5691e184b11fff8fcde67b03fafdd96b75a6dd3b205f7f77f5996679)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostIds", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostName")
    def dedicated_host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostName: The name of the dedicated host.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostName"))

    @dedicated_host_name.setter
    def dedicated_host_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b62ed58ae1e6aab2289d84a33d08f4d7feeecad873eb7104f308f6e5d3f6a5a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostName", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostType")
    def dedicated_host_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostType: The type of the dedicated host.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostType"))

    @dedicated_host_type.setter
    def dedicated_host_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e79b3283edaf367d9d85cc77137e6e584cab682cbaf705b96d204f286240ea3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the dedicated host belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa181b98747552e8df3a96aa828645546d6726fc86bbcb20bad0f2847781ffd6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The service status of the dedicated host. Valid values:
        Available: The dedicated host is running normally.
        UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
        PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
        Default value: Available.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__453eeccd96c0925726f91f284f56448316667d9d05e522ad5d18b3d50c9ff952)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDedicatedHosts.TagsProperty"]]:
        '''
        :Property: tags: Tags of ddh.
        '''
        return typing.cast(typing.Optional[typing.List["RosDedicatedHosts.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDedicatedHosts.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__147d778942af53af8173fa10bdf18f5d79ca678d08e8866dd71892a7b05a63c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the dedicated host.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1e63906057ec533c8562bac6e84be643df9b90e4aac50c137fbd9adc8566709)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDedicatedHosts.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__d1b8cd314735fdd38d4741267cce5135fceeef1fed04e0d090b2052d893131e5)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDedicatedHostsProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_cluster_id": "dedicatedHostClusterId",
        "dedicated_host_ids": "dedicatedHostIds",
        "dedicated_host_name": "dedicatedHostName",
        "dedicated_host_type": "dedicatedHostType",
        "resource_group_id": "resourceGroupId",
        "status": "status",
        "tags": "tags",
        "zone_id": "zoneId",
    },
)
class RosDedicatedHostsProps:
    def __init__(
        self,
        *,
        dedicated_host_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        dedicated_host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDedicatedHosts.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::DedicatedHosts``.

        :param dedicated_host_cluster_id: 
        :param dedicated_host_ids: 
        :param dedicated_host_name: 
        :param dedicated_host_type: 
        :param resource_group_id: 
        :param status: 
        :param tags: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3a303f5fb66f00dc07ad51ad4f7a0dd6ef36558b68afa2aaceb2ca6e8592d0d)
            check_type(argname="argument dedicated_host_cluster_id", value=dedicated_host_cluster_id, expected_type=type_hints["dedicated_host_cluster_id"])
            check_type(argname="argument dedicated_host_ids", value=dedicated_host_ids, expected_type=type_hints["dedicated_host_ids"])
            check_type(argname="argument dedicated_host_name", value=dedicated_host_name, expected_type=type_hints["dedicated_host_name"])
            check_type(argname="argument dedicated_host_type", value=dedicated_host_type, expected_type=type_hints["dedicated_host_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dedicated_host_cluster_id is not None:
            self._values["dedicated_host_cluster_id"] = dedicated_host_cluster_id
        if dedicated_host_ids is not None:
            self._values["dedicated_host_ids"] = dedicated_host_ids
        if dedicated_host_name is not None:
            self._values["dedicated_host_name"] = dedicated_host_name
        if dedicated_host_type is not None:
            self._values["dedicated_host_type"] = dedicated_host_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def dedicated_host_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostClusterId: The ID of the dedicated host cluster.
        '''
        result = self._values.get("dedicated_host_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: dedicatedHostIds: The IDs of the dedicated hosts. You can specify up to 100 dedicated host IDs.
        '''
        result = self._values.get("dedicated_host_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def dedicated_host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostName: The name of the dedicated host.
        '''
        result = self._values.get("dedicated_host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostType: The type of the dedicated host.
        '''
        result = self._values.get("dedicated_host_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the dedicated host belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The service status of the dedicated host. Valid values:
        Available: The dedicated host is running normally.
        UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
        PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
        Default value: Available.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDedicatedHosts.TagsProperty]]:
        '''
        :Property: tags: Tags of ddh.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDedicatedHosts.TagsProperty]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the dedicated host.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDedicatedHostsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDeploymentSets(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDeploymentSets",
):
    '''A ROS template type:  ``DATASOURCE::ECS::DeploymentSets``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDeploymentSetsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::DeploymentSets``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f558ef90bdae66fd1adf720f362fcc81e6d15660b6385c68997b9096eae93d29)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3a3a9722b731b9d3597010321eb05c40e16782c02b411665f948fa9efc284c65)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDeploymentSetIds")
    def attr_deployment_set_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeploymentSetIds: the list of deployment set ids
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeploymentSetIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDeploymentSets")
    def attr_deployment_sets(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeploymentSets: The list of deployment sets.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeploymentSets"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0ad29325e56fa254dcc3f46fe329a8fc74d8994bbdc0559322ecb2e6edc0b2b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="deploymentSetIds")
    def deployment_set_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deploymentSetIds: he IDs of deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deploymentSetIds"))

    @deployment_set_ids.setter
    def deployment_set_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce00b413eab7ff31e590977aba223ad29f2352ebb4562e68bf86b8957ea1f832)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deploymentSetIds", value)

    @builtins.property
    @jsii.member(jsii_name="deploymentSetName")
    def deployment_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deploymentSetName: The name of the deployment set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deploymentSetName"))

    @deployment_set_name.setter
    def deployment_set_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be0a467e78ad772b9ccb7a913e24e21138e14aab90277ed7a10bbe61474194c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deploymentSetName", value)

    @builtins.property
    @jsii.member(jsii_name="domain")
    def domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domain: The deployment domain.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domain"))

    @domain.setter
    def domain(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf7c6b5871801f321f9043ce73c10d82796c5928412e0fd61a67ef3bec412d12)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domain", value)

    @builtins.property
    @jsii.member(jsii_name="strategy")
    def strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        strategy: The deployment strategy. Valid values:
        Availability: high availability strategy.
        AvailabilityGroup: high availability group strategy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "strategy"))

    @strategy.setter
    def strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f1786d48be1e02273896a05377508676e526d98f33d0966f393684c9bfafac5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "strategy", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDeploymentSetsProps",
    jsii_struct_bases=[],
    name_mapping={
        "deployment_set_ids": "deploymentSetIds",
        "deployment_set_name": "deploymentSetName",
        "domain": "domain",
        "strategy": "strategy",
    },
)
class RosDeploymentSetsProps:
    def __init__(
        self,
        *,
        deployment_set_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deployment_set_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::DeploymentSets``.

        :param deployment_set_ids: 
        :param deployment_set_name: 
        :param domain: 
        :param strategy: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e97d93e25746eae17faa808e29e252602e71406b27553cf6cdcbfa7795a1f961)
            check_type(argname="argument deployment_set_ids", value=deployment_set_ids, expected_type=type_hints["deployment_set_ids"])
            check_type(argname="argument deployment_set_name", value=deployment_set_name, expected_type=type_hints["deployment_set_name"])
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument strategy", value=strategy, expected_type=type_hints["strategy"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if deployment_set_ids is not None:
            self._values["deployment_set_ids"] = deployment_set_ids
        if deployment_set_name is not None:
            self._values["deployment_set_name"] = deployment_set_name
        if domain is not None:
            self._values["domain"] = domain
        if strategy is not None:
            self._values["strategy"] = strategy

    @builtins.property
    def deployment_set_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deploymentSetIds: he IDs of deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
        '''
        result = self._values.get("deployment_set_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deployment_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deploymentSetName: The name of the deployment set.
        '''
        result = self._values.get("deployment_set_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domain: The deployment domain.
        '''
        result = self._values.get("domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        strategy: The deployment strategy. Valid values:
        Availability: high availability strategy.
        AvailabilityGroup: high availability group strategy.
        '''
        result = self._values.get("strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeploymentSetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDiskCategories(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDiskCategories",
):
    '''A ROS template type:  ``DATASOURCE::ECS::DiskCategories``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDiskCategoriesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::DiskCategories``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__454870626472f70d71644c82720a629d668c258b76fcd3c61bdde11ba4922fc0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b3f6dca5a73a71cf7379d982cab0c11c1ead52d619a38340536d81f72c3cacd6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskCategories")
    def attr_disk_categories(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskCategories: The list of disk categories.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskCategories"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskCategoryIds")
    def attr_disk_category_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskCategoryIds: The list of disk category IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskCategoryIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__76de3f25201fb1c318c650531767d70705af56a5b5cf126379b503ae284d7223)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The resource type to query.
        If you set Type to data,you can specify the InstanceType parameter to disk.
        If you set Type to system, you must specify the InstanceType parameter.
        Valid values:
        system: system disk
        data: data disk
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1cf38812ece5c29e8fae1f4fef5abc48bc7e000388da30d03f063638c71f2aaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The ID of the zone for which to query resources.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01491cdae1b4abf0083eaff19fe9425a97d87eb487af0fa35cdbecea9b224b06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="dataDiskCategory")
    def data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataDiskCategory: The category of the data disk. Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: ESSD
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataDiskCategory"))

    @data_disk_category.setter
    def data_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bf3fe22de785324d4afd0eb704d198e517c032cf786e99582324e2861adb8c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataDiskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The instance type. For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
        When the Type parameter is set to system or data,you must set the InstanceType parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98838b9b7fb1cf0910e86db6f88c3310e13ef2dc041bbf179ba030b06d82e05a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskCategory")
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskCategory: The category of the system disk. Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: ESSD
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskCategory"))

    @system_disk_category.setter
    def system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bffe237ca80240daa85399af62eff9ea96eda3f708ad2a5ccabd88543cb7efa5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskCategory", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDiskCategoriesProps",
    jsii_struct_bases=[],
    name_mapping={
        "type": "type",
        "zone_id": "zoneId",
        "data_disk_category": "dataDiskCategory",
        "instance_type": "instanceType",
        "system_disk_category": "systemDiskCategory",
    },
)
class RosDiskCategoriesProps:
    def __init__(
        self,
        *,
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::DiskCategories``.

        :param type: 
        :param zone_id: 
        :param data_disk_category: 
        :param instance_type: 
        :param system_disk_category: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dab124e7d345de29de2f60d593a4b92f9b9b197748bd33dea13eb75bc1e0d5ff)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument data_disk_category", value=data_disk_category, expected_type=type_hints["data_disk_category"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "type": type,
            "zone_id": zone_id,
        }
        if data_disk_category is not None:
            self._values["data_disk_category"] = data_disk_category
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if system_disk_category is not None:
            self._values["system_disk_category"] = system_disk_category

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The resource type to query.
        If you set Type to data,you can specify the InstanceType parameter to disk.
        If you set Type to system, you must specify the InstanceType parameter.
        Valid values:
        system: system disk
        data: data disk
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The ID of the zone for which to query resources.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataDiskCategory: The category of the data disk. Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: ESSD
        '''
        result = self._values.get("data_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The instance type. For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
        When the Type parameter is set to system or data,you must set the InstanceType parameter.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskCategory: The category of the system disk. Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: ESSD
        '''
        result = self._values.get("system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDiskCategoriesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDisks(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDisks",
):
    '''A ROS template type:  ``DATASOURCE::ECS::Disks``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDisksProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Disks``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a07e6fa93d85f2e0afef1c41e71da8d8644a0467aa5a3fb2b320424743151ee)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1c315f191d16009723f7d6ec76c657cb8f948394005f683e348d4f35cceaa903)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskIds")
    def attr_disk_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskIds: The list of disk IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDisks")
    def attr_disks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Disks: The list of disks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisks"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b3131d0a8b71fb0d8ac209547cb4f530859ecfd83be5b1fc1eb7ac058db27dc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="additionalAttributes")
    def additional_attributes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: additionalAttributes: The value of attribute N. Set the value to IOPS, which indicates the maximum IOPS of the disk.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "additionalAttributes"))

    @additional_attributes.setter
    def additional_attributes(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5470af949a0dc131551f6fadc041e801afe79dda65b01ebc7c8b6f9636b2e15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "additionalAttributes", value)

    @builtins.property
    @jsii.member(jsii_name="autoSnapshotPolicyId")
    def auto_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoSnapshotPolicyId"))

    @auto_snapshot_policy_id.setter
    def auto_snapshot_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bca3ddb3b4c06cdca1d78f93510fc7b9c61b22c235f2e5865ec22d5a060779f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoSnapshotPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The category of the disk. Valid values:
        all: all disk categories
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral: retired local disk
        ephemeral_ssd: local SSD
        cloud_essd: ESSD
        local_ssd_pro: I/O-intensive local disk
        local_hdd_pro: throughput-intensive local disk
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a27a713baf952c4dfbbb1c97c044cb74bcbf202f676a8baf0a54a7afbf54b821)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="deleteAutoSnapshot")
    def delete_auto_snapshot(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deleteAutoSnapshot"))

    @delete_auto_snapshot.setter
    def delete_auto_snapshot(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e9a0733002252741da1f0e5180d3a610c9063a885a076fac9d91f6d36e83819)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deleteAutoSnapshot", value)

    @builtins.property
    @jsii.member(jsii_name="deleteWithInstance")
    def delete_with_instance(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released. Valid values:
        true: The cloud disk is released when its associated instance is released.
        false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deleteWithInstance"))

    @delete_with_instance.setter
    def delete_with_instance(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c6ee20689ffd43e0deadb684ba484dc4ce873e44507dd15a597d2e85289486d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deleteWithInstance", value)

    @builtins.property
    @jsii.member(jsii_name="diskChargeType")
    def disk_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        diskChargeType: The billing method of the disk. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskChargeType"))

    @disk_charge_type.setter
    def disk_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d49383861db41984ce01adad7a0719fe6c871442f324bbfa62b2aae9a9a8255)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="diskIds")
    def disk_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        diskIds: The IDs of disks.
        The value is a JSON array that consists of up to 100 disk IDs.
        Separate the disk IDs with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "diskIds"))

    @disk_ids.setter
    def disk_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4eca7099c70648d409a258cd95bd72e407ace9d0ccb9fc5014c73bf8c51a984f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskIds", value)

    @builtins.property
    @jsii.member(jsii_name="diskName")
    def disk_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskName: The name of the disk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskName"))

    @disk_name.setter
    def disk_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4a2ba4bcefffe43b8b889a647e85b6c35cd685e72d21b415794953126b67cf6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskName", value)

    @builtins.property
    @jsii.member(jsii_name="diskType")
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        diskType: The type of the disk. Valid values:
        all: system disk and data disk
        system: system disk
        data: data disk
        Default value: all.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskType"))

    @disk_type.setter
    def disk_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77f95ed4fb49ee437b9f6de58efcc7bdb271b29f70df06c4fe29480701755ef2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskType", value)

    @builtins.property
    @jsii.member(jsii_name="enableAutomatedSnapshotPolicy")
    def enable_automated_snapshot_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
        true: An automatic snapshot policy is applied to the cloud disk.
        false: No automatic snapshot policy is applied to the cloud disk.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAutomatedSnapshotPolicy"))

    @enable_automated_snapshot_policy.setter
    def enable_automated_snapshot_policy(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d6220f8d25b3af1552bf0228b2b29b8a7314305b5c92ea0685b9841fd708f50)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAutomatedSnapshotPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="enableAutoSnapshot")
    def enable_auto_snapshot(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
        true: The automatic snapshot policy feature is enabled for the cloud disk.
        false: The automatic snapshot policy feature is disabled for the cloud disk.
        Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAutoSnapshot"))

    @enable_auto_snapshot.setter
    def enable_auto_snapshot(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99e632d2f68cc5126158f0c24b8f2e6c1bc1ebbc53ff707070583a7146937cd8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAutoSnapshot", value)

    @builtins.property
    @jsii.member(jsii_name="enableShared")
    def enable_shared(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableShared: Specifies whether the disk is a Shared Block Storage device.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableShared"))

    @enable_shared.setter
    def enable_shared(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55acf24758d19297c0919fced522d2950c2c069f9ce937e90c365a40d0bd68ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableShared", value)

    @builtins.property
    @jsii.member(jsii_name="encrypted")
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encrypted: Specifies whether to query only encrypted cloud disks.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encrypted"))

    @encrypted.setter
    def encrypted(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a0f9ab766d234e4eacc745c488cfce9a1ab3d236961c114613c51590600256c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encrypted", value)

    @builtins.property
    @jsii.member(jsii_name="filters")
    def filters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosDisks.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: filters: Filter value when querying resources
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosDisks.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "filters"))

    @filters.setter
    def filters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosDisks.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f010503a1246077575c3a8ad30ae44435b6b6908a7c7dbaee04f4598d61f763)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filters", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the instance to which the disk is attached.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e77cd264464c971c047b1d1432b8ee7a5d7c9877bbd4f47eda8ffaac967769b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="kmsKeyId")
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kmsKeyId"))

    @kms_key_id.setter
    def kms_key_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aff382598cb61d89338587e2fd073aecea283b48b876572da8530b9d946a2c3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kmsKeyId", value)

    @builtins.property
    @jsii.member(jsii_name="multiAttach")
    def multi_attach(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        multiAttach: Specifies whether the multi-attach feature is enabled for the disk. Valid values:
        Disabled: The multi-attach feature is disabled.
        Enabled: The multi-attach feature is enabled.
        LegacyShared: Shared Block Storage devices are queried.
        The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "multiAttach"))

    @multi_attach.setter
    def multi_attach(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43283b6bd72de3bc21cc87c054ae62344f81bde9e5a95d770d066ff5cf791fb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiAttach", value)

    @builtins.property
    @jsii.member(jsii_name="portable")
    def portable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        portable: Specifies whether the disk is removable. Valid values:
        true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
        false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
        The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
        Local disks
        Local SSDs
        Subscription data disks
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "portable"))

    @portable.setter
    def portable(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c02087c37b1e326e63043b76b45754bf43708fb817de2e5479a96a9cf100968)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "portable", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the disk belongs.
        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb71dc9742a58dd52f8266294d3eb68df4696860d615715cc123b4bc1fd0e7b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="snapshotId")
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotId: The ID of the snapshot used to create the cloud disk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snapshotId"))

    @snapshot_id.setter
    def snapshot_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fda83b2c41605da5b8040d2e75ebbd6aaae6c9c98c9d0b1c573e9b324b643b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snapshotId", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The state of the cloud disk. For more information, see Disk states. Valid values:
        In_use
        Available
        Attaching
        Detaching
        Creating
        ReIniting
        All
        Default value: All.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f716ae25971ae78acff42921d5df1a811427df305d5e74792c233b0fa106fae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDisks.TagsProperty"]]:
        '''
        :Property: tags: Tags of disks.
        '''
        return typing.cast(typing.Optional[typing.List["RosDisks.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDisks.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83ab81c1cb4de606fbbebddce214b3845f4c9b520b164e647a6b03b64e4ed6d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone for which to query resources.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fbb823cbf96a1dd72bee7f0f1ba620eaa704eeced4cd9bc6e37886ac1ad6ab3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDisks.FiltersProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class FiltersProperty:
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
                type_hints = typing.get_type_hints(_typecheckingstub__735261eeca2fdd6c0aa8a98d6d9999bd4540b5217cf0879f4c536075bac3f7b7)
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
            return "FiltersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDisks.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__205c0966de39fab894de75ad1cad4f55e59f2d1149697b6e7656b8b3cf193c3c)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosDisksProps",
    jsii_struct_bases=[],
    name_mapping={
        "additional_attributes": "additionalAttributes",
        "auto_snapshot_policy_id": "autoSnapshotPolicyId",
        "category": "category",
        "delete_auto_snapshot": "deleteAutoSnapshot",
        "delete_with_instance": "deleteWithInstance",
        "disk_charge_type": "diskChargeType",
        "disk_ids": "diskIds",
        "disk_name": "diskName",
        "disk_type": "diskType",
        "enable_automated_snapshot_policy": "enableAutomatedSnapshotPolicy",
        "enable_auto_snapshot": "enableAutoSnapshot",
        "enable_shared": "enableShared",
        "encrypted": "encrypted",
        "filters": "filters",
        "instance_id": "instanceId",
        "kms_key_id": "kmsKeyId",
        "multi_attach": "multiAttach",
        "portable": "portable",
        "resource_group_id": "resourceGroupId",
        "snapshot_id": "snapshotId",
        "status": "status",
        "tags": "tags",
        "zone_id": "zoneId",
    },
)
class RosDisksProps:
    def __init__(
        self,
        *,
        additional_attributes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delete_auto_snapshot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        disk_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_automated_snapshot_policy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_auto_snapshot: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_shared: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosDisks.FiltersProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_attach: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        portable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDisks.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Disks``.

        :param additional_attributes: 
        :param auto_snapshot_policy_id: 
        :param category: 
        :param delete_auto_snapshot: 
        :param delete_with_instance: 
        :param disk_charge_type: 
        :param disk_ids: 
        :param disk_name: 
        :param disk_type: 
        :param enable_automated_snapshot_policy: 
        :param enable_auto_snapshot: 
        :param enable_shared: 
        :param encrypted: 
        :param filters: 
        :param instance_id: 
        :param kms_key_id: 
        :param multi_attach: 
        :param portable: 
        :param resource_group_id: 
        :param snapshot_id: 
        :param status: 
        :param tags: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7286faa8aad9c77f22ac38be1546c99e3aa3ad6ba3b1bc286c11f91ca3a7446)
            check_type(argname="argument additional_attributes", value=additional_attributes, expected_type=type_hints["additional_attributes"])
            check_type(argname="argument auto_snapshot_policy_id", value=auto_snapshot_policy_id, expected_type=type_hints["auto_snapshot_policy_id"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument delete_auto_snapshot", value=delete_auto_snapshot, expected_type=type_hints["delete_auto_snapshot"])
            check_type(argname="argument delete_with_instance", value=delete_with_instance, expected_type=type_hints["delete_with_instance"])
            check_type(argname="argument disk_charge_type", value=disk_charge_type, expected_type=type_hints["disk_charge_type"])
            check_type(argname="argument disk_ids", value=disk_ids, expected_type=type_hints["disk_ids"])
            check_type(argname="argument disk_name", value=disk_name, expected_type=type_hints["disk_name"])
            check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            check_type(argname="argument enable_automated_snapshot_policy", value=enable_automated_snapshot_policy, expected_type=type_hints["enable_automated_snapshot_policy"])
            check_type(argname="argument enable_auto_snapshot", value=enable_auto_snapshot, expected_type=type_hints["enable_auto_snapshot"])
            check_type(argname="argument enable_shared", value=enable_shared, expected_type=type_hints["enable_shared"])
            check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
            check_type(argname="argument filters", value=filters, expected_type=type_hints["filters"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
            check_type(argname="argument multi_attach", value=multi_attach, expected_type=type_hints["multi_attach"])
            check_type(argname="argument portable", value=portable, expected_type=type_hints["portable"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if additional_attributes is not None:
            self._values["additional_attributes"] = additional_attributes
        if auto_snapshot_policy_id is not None:
            self._values["auto_snapshot_policy_id"] = auto_snapshot_policy_id
        if category is not None:
            self._values["category"] = category
        if delete_auto_snapshot is not None:
            self._values["delete_auto_snapshot"] = delete_auto_snapshot
        if delete_with_instance is not None:
            self._values["delete_with_instance"] = delete_with_instance
        if disk_charge_type is not None:
            self._values["disk_charge_type"] = disk_charge_type
        if disk_ids is not None:
            self._values["disk_ids"] = disk_ids
        if disk_name is not None:
            self._values["disk_name"] = disk_name
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if enable_automated_snapshot_policy is not None:
            self._values["enable_automated_snapshot_policy"] = enable_automated_snapshot_policy
        if enable_auto_snapshot is not None:
            self._values["enable_auto_snapshot"] = enable_auto_snapshot
        if enable_shared is not None:
            self._values["enable_shared"] = enable_shared
        if encrypted is not None:
            self._values["encrypted"] = encrypted
        if filters is not None:
            self._values["filters"] = filters
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if kms_key_id is not None:
            self._values["kms_key_id"] = kms_key_id
        if multi_attach is not None:
            self._values["multi_attach"] = multi_attach
        if portable is not None:
            self._values["portable"] = portable
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if snapshot_id is not None:
            self._values["snapshot_id"] = snapshot_id
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def additional_attributes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: additionalAttributes: The value of attribute N. Set the value to IOPS, which indicates the maximum IOPS of the disk.
        '''
        result = self._values.get("additional_attributes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def auto_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
        '''
        result = self._values.get("auto_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The category of the disk. Valid values:
        all: all disk categories
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral: retired local disk
        ephemeral_ssd: local SSD
        cloud_essd: ESSD
        local_ssd_pro: I/O-intensive local disk
        local_hdd_pro: throughput-intensive local disk
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delete_auto_snapshot(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
        Default value: false.
        '''
        result = self._values.get("delete_auto_snapshot")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delete_with_instance(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released. Valid values:
        true: The cloud disk is released when its associated instance is released.
        false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
        Default value: false.
        '''
        result = self._values.get("delete_with_instance")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        diskChargeType: The billing method of the disk. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        result = self._values.get("disk_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        diskIds: The IDs of disks.
        The value is a JSON array that consists of up to 100 disk IDs.
        Separate the disk IDs with commas (,).
        '''
        result = self._values.get("disk_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def disk_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskName: The name of the disk.
        '''
        result = self._values.get("disk_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        diskType: The type of the disk. Valid values:
        all: system disk and data disk
        system: system disk
        data: data disk
        Default value: all.
        '''
        result = self._values.get("disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_automated_snapshot_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
        true: An automatic snapshot policy is applied to the cloud disk.
        false: No automatic snapshot policy is applied to the cloud disk.
        Default value: false.
        '''
        result = self._values.get("enable_automated_snapshot_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_auto_snapshot(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
        true: The automatic snapshot policy feature is enabled for the cloud disk.
        false: The automatic snapshot policy feature is disabled for the cloud disk.
        Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
        '''
        result = self._values.get("enable_auto_snapshot")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_shared(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableShared: Specifies whether the disk is a Shared Block Storage device.
        '''
        result = self._values.get("enable_shared")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encrypted: Specifies whether to query only encrypted cloud disks.
        Default value: false.
        '''
        result = self._values.get("encrypted")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosDisks.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: filters: Filter value when querying resources
        '''
        result = self._values.get("filters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosDisks.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the instance to which the disk is attached.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
        '''
        result = self._values.get("kms_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_attach(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        multiAttach: Specifies whether the multi-attach feature is enabled for the disk. Valid values:
        Disabled: The multi-attach feature is disabled.
        Enabled: The multi-attach feature is enabled.
        LegacyShared: Shared Block Storage devices are queried.
        The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
        '''
        result = self._values.get("multi_attach")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def portable(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        portable: Specifies whether the disk is removable. Valid values:
        true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
        false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
        The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
        Local disks
        Local SSDs
        Subscription data disks
        '''
        result = self._values.get("portable")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the disk belongs.
        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotId: The ID of the snapshot used to create the cloud disk.
        '''
        result = self._values.get("snapshot_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The state of the cloud disk. For more information, see Disk states. Valid values:
        In_use
        Available
        Attaching
        Detaching
        Creating
        ReIniting
        All
        Default value: All.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDisks.TagsProperty]]:
        '''
        :Property: tags: Tags of disks.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDisks.TagsProperty]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone for which to query resources.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDisksProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHpcClusters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosHpcClusters",
):
    '''A ROS template type:  ``DATASOURCE::ECS::HpcClusters``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHpcClustersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::HpcClusters``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c334bbcf5e8ab46e7152d3291afd1b5818c57f805e1cbf9cc85f9f15aa559b26)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dcb8946164915be43e78864260a1c03c76b2db36f180f8bf34b885a2be491c96)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHpcClusterIds")
    def attr_hpc_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HpcClusterIds: the list of hpc cluster ids
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHpcClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrHpcClusters")
    def attr_hpc_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HpcClusters: The list of hpc clusters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHpcClusters"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__cc6bffc6d87c5ed6c51e77698a3a4db918b22d075c868e45fcb40d38c509cf69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hpcClusterIds")
    def hpc_cluster_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "hpcClusterIds"))

    @hpc_cluster_ids.setter
    def hpc_cluster_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4683ff7055c5927f8d4e904d36519eb832f6c7bf01cb35596725a4ce0177213a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hpcClusterIds", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosHpcClustersProps",
    jsii_struct_bases=[],
    name_mapping={"hpc_cluster_ids": "hpcClusterIds"},
)
class RosHpcClustersProps:
    def __init__(
        self,
        *,
        hpc_cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::HpcClusters``.

        :param hpc_cluster_ids: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56ebb3f3e5b2c742011018567da30ebec36725b074396822b0d72e2c27a7a5f7)
            check_type(argname="argument hpc_cluster_ids", value=hpc_cluster_ids, expected_type=type_hints["hpc_cluster_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if hpc_cluster_ids is not None:
            self._values["hpc_cluster_ids"] = hpc_cluster_ids

    @builtins.property
    def hpc_cluster_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
        '''
        result = self._values.get("hpc_cluster_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHpcClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImages(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosImages",
):
    '''A ROS template type:  ``DATASOURCE::ECS::Images``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImagesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Images``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bad30a47de0a0df2c1694ba43b1a5f27c3538dc4669c4b58b4b9e446b6adba5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dc3374141e8d2ea6a6547141e9e41011f9251d1caaefa8cc995a072bb338c0c6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrImageIds")
    def attr_image_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageIds: The list of image IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrImages")
    def attr_images(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Images: The list of images.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImages"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__498f97359df0eb2f08d51ba54d50069e31a12c0af4a4aa904f685690f850e566)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="actionType")
    def action_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        actionType: The scenario in which the image is used. Default value: CreateEcs. Valid values:
        CreateEcs: instance creation
        ChangeOS: replacement of the system disk or operating system
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "actionType"))

    @action_type.setter
    def action_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab6366577e8d59c2058d512bc8668277f3e6209df2073288be1a2c971a6466f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "actionType", value)

    @builtins.property
    @jsii.member(jsii_name="architecture")
    def architecture(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        architecture: The image architecture. Valid values:
        i38
        x86_64
        arm64
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "architecture"))

    @architecture.setter
    def architecture(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a46e8978522c02d5ae5cccce63ac2920475411d8ac4206576eeb2f7804d6bdff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "architecture", value)

    @builtins.property
    @jsii.member(jsii_name="imageFamily")
    def image_family(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        imageFamily: The name of the image family. You can set this parameter to query images of the specified image family.
        This parameter is empty by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageFamily"))

    @image_family.setter
    def image_family(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed390372324e13e77b6151fe84a23d1cbfb9fcd18967326e567123990b607159)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageFamily", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: The ID of the image.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa189d6c4b3f190d7d52e8a68700c68b571fa238c845a6a9ade5121fed3db76b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="imageName")
    def image_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageName: The name of the image. Support for fuzzy queries using *.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageName"))

    @image_name.setter
    def image_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__393ffd5b14aa37dfbcf0feb0de8b882599ef4c9f0f5a1d3d937c3c76ca484563)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageName", value)

    @builtins.property
    @jsii.member(jsii_name="imageOwnerAlias")
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        imageOwnerAlias: The source of the image. Valid values:
        system: public images provided by Alibaba Cloud.
        self: your custom images.
        others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:

        - To query community images, you must set IsPublic to true.
        To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
        marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
        This parameter is empty by default, which indicates that the results that match system, self, and others are returned.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageOwnerAlias"))

    @image_owner_alias.setter
    def image_owner_alias(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0afc6df7431490acdabeae366edc891b64762648e5459818524d7978768ab88f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageOwnerAlias", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: The instance type for which the image can be used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__197fc129151319ca277aed848ea50dbb9817f5cf874e858b7ff3b13c3f0b5afa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="isPublic")
    def is_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isPublic: Specifies whether to query published community images. Valid values:
        true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
        false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isPublic"))

    @is_public.setter
    def is_public(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b5ffd9335471837ded6d4b158f8bfcec67cdac7727f0d69902f1c6277ee36a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isPublic", value)

    @builtins.property
    @jsii.member(jsii_name="isSupportCloudinit")
    def is_support_cloudinit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isSupportCloudinit: Specifies whether the image supports cloud-init.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isSupportCloudinit"))

    @is_support_cloudinit.setter
    def is_support_cloudinit(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__059fc5c63e2889a249f0e1f32da175144e56fa2ba86978c4c9b2c6eee0b960c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isSupportCloudinit", value)

    @builtins.property
    @jsii.member(jsii_name="isSupportIoOptimized")
    def is_support_io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isSupportIoOptimized: Specifies whether the image can be used on I/O optimized instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isSupportIoOptimized"))

    @is_support_io_optimized.setter
    def is_support_io_optimized(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ef5bee5659c3952c2efea03be3847d681fa66f9ddfbdd6f6c456e416766901d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isSupportIoOptimized", value)

    @builtins.property
    @jsii.member(jsii_name="osType")
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        osType: The operating system type of the image. Valid values:
        windows
        linux
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "osType"))

    @os_type.setter
    def os_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7365470e88e25b8fdb540155f3427e9f1cf0b0cdf64ac232e676230b23e6949a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the custom image belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b207f49ae390bf2ac89a2d63545909bbbd5feb14f2fa97d8a744956102e860e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="snapshotId")
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotId: The ID of the snapshot used to create the custom image.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snapshotId"))

    @snapshot_id.setter
    def snapshot_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca26419c736620f5b14399ad829a931a180ec20bb73d515b7c31ff098a95ff90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snapshotId", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The state of the image. Default value: Available. Valid values:
        Creating: The image is being created.
        Waiting: The image is waiting to be processed.
        Available: The image is available.
        UnAvailable: The image is unavailable.
        CreateFailed: The image failed to be created.
        Deprecated: The image is discontinued.
        You can specify multiple values. Separate multiple values with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5aae7a6ca194612dfc3d7ad3890418ca1fea0cc0c0deb18704e7d8ce794cf9d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosImages.TagsProperty"]]:
        '''
        :Property: tags: Tags of image.
        '''
        return typing.cast(typing.Optional[typing.List["RosImages.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosImages.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8518f1c88421cb9e47ca413609f5951f265c2a01de832b69823a5a61dc38220)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="usage")
    def usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance. Valid values:
        instance: The image is already in use and running on an ECS instance.
        none: The image is not in use.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "usage"))

    @usage.setter
    def usage(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6db0395974efc487cb211aa7a8fc568490941790426b62cf321e5e80464f1e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "usage", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosImages.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__1bb4ef159ba79e802c04c2887d806ab961d4b912a555424f558e05f13b86a684)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosImagesProps",
    jsii_struct_bases=[],
    name_mapping={
        "action_type": "actionType",
        "architecture": "architecture",
        "image_family": "imageFamily",
        "image_id": "imageId",
        "image_name": "imageName",
        "image_owner_alias": "imageOwnerAlias",
        "instance_type": "instanceType",
        "is_public": "isPublic",
        "is_support_cloudinit": "isSupportCloudinit",
        "is_support_io_optimized": "isSupportIoOptimized",
        "os_type": "osType",
        "resource_group_id": "resourceGroupId",
        "snapshot_id": "snapshotId",
        "status": "status",
        "tags": "tags",
        "usage": "usage",
    },
)
class RosImagesProps:
    def __init__(
        self,
        *,
        action_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_support_cloudinit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_support_io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosImages.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Images``.

        :param action_type: 
        :param architecture: 
        :param image_family: 
        :param image_id: 
        :param image_name: 
        :param image_owner_alias: 
        :param instance_type: 
        :param is_public: 
        :param is_support_cloudinit: 
        :param is_support_io_optimized: 
        :param os_type: 
        :param resource_group_id: 
        :param snapshot_id: 
        :param status: 
        :param tags: 
        :param usage: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e4575806c14a2784397894dd723c2741e5d18fbb1a691e8ce68df8ddff86aaa)
            check_type(argname="argument action_type", value=action_type, expected_type=type_hints["action_type"])
            check_type(argname="argument architecture", value=architecture, expected_type=type_hints["architecture"])
            check_type(argname="argument image_family", value=image_family, expected_type=type_hints["image_family"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument image_name", value=image_name, expected_type=type_hints["image_name"])
            check_type(argname="argument image_owner_alias", value=image_owner_alias, expected_type=type_hints["image_owner_alias"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument is_public", value=is_public, expected_type=type_hints["is_public"])
            check_type(argname="argument is_support_cloudinit", value=is_support_cloudinit, expected_type=type_hints["is_support_cloudinit"])
            check_type(argname="argument is_support_io_optimized", value=is_support_io_optimized, expected_type=type_hints["is_support_io_optimized"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument usage", value=usage, expected_type=type_hints["usage"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if action_type is not None:
            self._values["action_type"] = action_type
        if architecture is not None:
            self._values["architecture"] = architecture
        if image_family is not None:
            self._values["image_family"] = image_family
        if image_id is not None:
            self._values["image_id"] = image_id
        if image_name is not None:
            self._values["image_name"] = image_name
        if image_owner_alias is not None:
            self._values["image_owner_alias"] = image_owner_alias
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if is_public is not None:
            self._values["is_public"] = is_public
        if is_support_cloudinit is not None:
            self._values["is_support_cloudinit"] = is_support_cloudinit
        if is_support_io_optimized is not None:
            self._values["is_support_io_optimized"] = is_support_io_optimized
        if os_type is not None:
            self._values["os_type"] = os_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if snapshot_id is not None:
            self._values["snapshot_id"] = snapshot_id
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if usage is not None:
            self._values["usage"] = usage

    @builtins.property
    def action_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        actionType: The scenario in which the image is used. Default value: CreateEcs. Valid values:
        CreateEcs: instance creation
        ChangeOS: replacement of the system disk or operating system
        '''
        result = self._values.get("action_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def architecture(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        architecture: The image architecture. Valid values:
        i38
        x86_64
        arm64
        '''
        result = self._values.get("architecture")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_family(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        imageFamily: The name of the image family. You can set this parameter to query images of the specified image family.
        This parameter is empty by default.
        '''
        result = self._values.get("image_family")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: The ID of the image.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageName: The name of the image. Support for fuzzy queries using *.
        '''
        result = self._values.get("image_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_owner_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        imageOwnerAlias: The source of the image. Valid values:
        system: public images provided by Alibaba Cloud.
        self: your custom images.
        others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:

        - To query community images, you must set IsPublic to true.
        To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
        marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
        This parameter is empty by default, which indicates that the results that match system, self, and others are returned.
        '''
        result = self._values.get("image_owner_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: The instance type for which the image can be used.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isPublic: Specifies whether to query published community images. Valid values:
        true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
        false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
        Default value: false.
        '''
        result = self._values.get("is_public")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_support_cloudinit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isSupportCloudinit: Specifies whether the image supports cloud-init.
        '''
        result = self._values.get("is_support_cloudinit")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_support_io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isSupportIoOptimized: Specifies whether the image can be used on I/O optimized instances.
        '''
        result = self._values.get("is_support_io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        osType: The operating system type of the image. Valid values:
        windows
        linux
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the custom image belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotId: The ID of the snapshot used to create the custom image.
        '''
        result = self._values.get("snapshot_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The state of the image. Default value: Available. Valid values:
        Creating: The image is being created.
        Waiting: The image is waiting to be processed.
        Available: The image is available.
        UnAvailable: The image is unavailable.
        CreateFailed: The image failed to be created.
        Deprecated: The image is discontinued.
        You can specify multiple values. Separate multiple values with commas (,).
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosImages.TagsProperty]]:
        '''
        :Property: tags: Tags of image.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosImages.TagsProperty]], result)

    @builtins.property
    def usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance. Valid values:
        instance: The image is already in use and running on an ECS instance.
        none: The image is not in use.
        '''
        result = self._values.get("usage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImagesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosInstances",
):
    '''A ROS template type:  ``DATASOURCE::ECS::Instances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Instances``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa00f4df7c29694ae7d69805e1984b0f7db9f8194fdbfe5392201ed62510da67)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e4c0e1a5169353b817569cd206297519a4ce44d32ccde4fccab06fd2f889b2ae)
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
        :Attribute: InstanceIds: The list of InstanceIds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Instances: The list of Instances.
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
            type_hints = typing.get_type_hints(_typecheckingstub__145e194640e3aff478e1e0f4c43376531ebb893adeca830a71cf8548d0876fd8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="additionalAttributes")
    def additional_attributes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        additionalAttributes: The value of attribute N. Valid values of N: 1 to 20. Valid values:
        META_OPTIONS: instance metadata
        DDH_CLUSTER: dedicated host cluster
        NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "additionalAttributes"))

    @additional_attributes.setter
    def additional_attributes(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f46a4b99f8a048171750d216b3ec46e938fb2a7ca9bc59a68bffe1405e2757b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "additionalAttributes", value)

    @builtins.property
    @jsii.member(jsii_name="eipAddresses")
    def eip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: eipAddresses: The elastic IP addresses (EIPs) of instances. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "eipAddresses"))

    @eip_addresses.setter
    def eip_addresses(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5566bfe8bc06ffe53dfe529ae57c46811bcb842524dc8f1639486bcd6d3a36a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eipAddresses", value)

    @builtins.property
    @jsii.member(jsii_name="filters")
    def filters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosInstances.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: filters: Filter value when querying resources
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosInstances.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "filters"))

    @filters.setter
    def filters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosInstances.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27bea71c84b40e4e8f0cddb591d88e5f225d55558acfd781cde45d99290cc75a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filters", value)

    @builtins.property
    @jsii.member(jsii_name="hpcClusterId")
    def hpc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hpcClusterId"))

    @hpc_cluster_id.setter
    def hpc_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecf6632e5b365fb61f821c322ca09b9248c965e911286155ecc5b40c769584cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hpcClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: The ID of the image.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09889a76f3ef8cf41e8f70341f5f3fd9aa320db552b54c4b07be7c6035e3cdca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="innerIpAddresses")
    def inner_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: innerIpAddresses: The internal IP addresses of instances located in the classic network. This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "innerIpAddresses"))

    @inner_ip_addresses.setter
    def inner_ip_addresses(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1bdfedc4a3ebdc74a5c991eb5f055a0ca1830d5799a66fb80546def23da14400)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "innerIpAddresses", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instance. Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07be3cf48e9ad4d2ddf9d77ba9dae795ec81c847f5a1d1c6ddf51a753522b72d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__171301053d5d1674680e24a3b00ec2a474d8e591515869f4753471e02cbac0ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: instanceIds: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "instanceIds"))

    @instance_ids.setter
    def instance_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2229da82fc5f81a8890f24654ee2f5768194dfef94ca88a34b510e7d743b1a56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceIds", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard is supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__602b0751187c6dab6e64b9441b013c2627dd941da592809b9354f18aaa23171c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="instanceNetworkType")
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceNetworkType: The network type of the instance. Valid values:
        classic: classic network
        vpc: VPC
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceNetworkType"))

    @instance_network_type.setter
    def instance_network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6be5463feea6d5594d9145f221b5142cf209a15abeac5b9922c1bfcce3bb0947)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceNetworkType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: The instance type of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5042d69ec662197816c6f1cb5d4a6a00c22b7134f2ecf87957c7c5254feab939)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceTypeFamily")
    def instance_type_family(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceTypeFamily: The instance family of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceTypeFamily"))

    @instance_type_family.setter
    def instance_type_family(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14d733df3fd5d93b66a360599a0dcd81c718c4767f647dd616c60f2f8ea116cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceTypeFamily", value)

    @builtins.property
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        internetChargeType: The billing method for network usage. Valid values:
        PayByBandwidth: pay-by-bandwidth
        PayByTraffic: pay-by-traffic
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41f5b75d457c7bb55a76493ab8d2d6ed8fc0297f52eaa0ab76129c74f1630b2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="ioOptimized")
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ioOptimized: Specifies whether the instance is I/O optimized.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ioOptimized"))

    @io_optimized.setter
    def io_optimized(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__faf6de39c1bbbd5671a7876ce6ccba7197a1f138c40cdca0583df82a28fdb396)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ioOptimized", value)

    @builtins.property
    @jsii.member(jsii_name="ipv6Address")
    def ipv6_address(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: ipv6Address: IPv6 address N of the elastic network interface (ENI). You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "ipv6Address"))

    @ipv6_address.setter
    def ipv6_address(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5d9949eb80faa6fe1bf4049f8d8632e8bf934479a6d84daefa5cf22d3d3f537)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipv6Address", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: The name of the SSH key pair bound to the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2644329741ed657cf6bb773951b786b5a4a80bfd5bcf927a9d668bba48fded92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="privateIpAddresses")
    def private_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: privateIpAddresses: The private IP addresses of instances located in VPCs. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "privateIpAddresses"))

    @private_ip_addresses.setter
    def private_ip_addresses(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3211d7c3b2ac0b4311cd61931c82f61b60a92bd3a0e13e71f4f698d60572b6c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateIpAddresses", value)

    @builtins.property
    @jsii.member(jsii_name="publicIpAddresses")
    def public_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: publicIpAddresses: The public IP addresses of instances. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "publicIpAddresses"))

    @public_ip_addresses.setter
    def public_ip_addresses(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4cd6f3e0a843d1e36c341ea6eeac9a6c6dca5f2746ec5301e3facbb8d398722d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "publicIpAddresses", value)

    @builtins.property
    @jsii.member(jsii_name="rdmaIpAddresses")
    def rdma_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rdmaIpAddresses"))

    @rdma_ip_addresses.setter
    def rdma_ip_addresses(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__122565c814041b1064d7aa34be11ad8a5bbb4914b9cf1f6e698e8adb87d47530)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rdmaIpAddresses", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the instance belongs.
        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0b76f2c001103f024dba63fabc7b3c021d4630e06a4223ea03ae7b075df2cf7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The ID of the security group to which the instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9ba578efe2366b517d69bf9a40435e619ebe31faa2627de088348d39a3839d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The state of the instance. Valid values:
        Pending
        Running
        Starting
        Stopping
        Stopped
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64bd0d5b3766f057737b00b9840edb4091fc034f94c116973b964eb593b47cb4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstances.TagsProperty"]]:
        '''
        :Property: tags: Tags of instance.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstances.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstances.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b0e68b3260f382efceb3c43f85bb12b087631225ba17741e92ee7c6dfef0ab9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82d94231a131d475b308605485d28096e18cdba5a0df1c7af96334b5b562d38a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7c7372f385191da376f8705e313a6ee3e31dd690874cccf69cabc7dd7518d34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22cb7d8c53dd9c217dbc4477ca3ad80ad579d46d977d797ce5ae38d30c7f875a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosInstances.FiltersProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class FiltersProperty:
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
                type_hints = typing.get_type_hints(_typecheckingstub__e5bc7ef45adf608661b294d98bccef658bf53276337e90e33deba3f08f80352e)
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
            return "FiltersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosInstances.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__1079436c67be1438843853d8c9b44db4d14ae093c797fc135633869bb25d5149)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "additional_attributes": "additionalAttributes",
        "eip_addresses": "eipAddresses",
        "filters": "filters",
        "hpc_cluster_id": "hpcClusterId",
        "image_id": "imageId",
        "inner_ip_addresses": "innerIpAddresses",
        "instance_charge_type": "instanceChargeType",
        "instance_id": "instanceId",
        "instance_ids": "instanceIds",
        "instance_name": "instanceName",
        "instance_network_type": "instanceNetworkType",
        "instance_type": "instanceType",
        "instance_type_family": "instanceTypeFamily",
        "internet_charge_type": "internetChargeType",
        "io_optimized": "ioOptimized",
        "ipv6_address": "ipv6Address",
        "key_pair_name": "keyPairName",
        "private_ip_addresses": "privateIpAddresses",
        "public_ip_addresses": "publicIpAddresses",
        "rdma_ip_addresses": "rdmaIpAddresses",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "status": "status",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosInstancesProps:
    def __init__(
        self,
        *,
        additional_attributes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        eip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosInstances.FiltersProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        hpc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inner_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_address: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        public_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        rdma_ip_addresses: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Instances``.

        :param additional_attributes: 
        :param eip_addresses: 
        :param filters: 
        :param hpc_cluster_id: 
        :param image_id: 
        :param inner_ip_addresses: 
        :param instance_charge_type: 
        :param instance_id: 
        :param instance_ids: 
        :param instance_name: 
        :param instance_network_type: 
        :param instance_type: 
        :param instance_type_family: 
        :param internet_charge_type: 
        :param io_optimized: 
        :param ipv6_address: 
        :param key_pair_name: 
        :param private_ip_addresses: 
        :param public_ip_addresses: 
        :param rdma_ip_addresses: 
        :param resource_group_id: 
        :param security_group_id: 
        :param status: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67bdcc9068ec0e47bc3b55e53cc2eabd11f989712ec34a0582cd58b086c317c3)
            check_type(argname="argument additional_attributes", value=additional_attributes, expected_type=type_hints["additional_attributes"])
            check_type(argname="argument eip_addresses", value=eip_addresses, expected_type=type_hints["eip_addresses"])
            check_type(argname="argument filters", value=filters, expected_type=type_hints["filters"])
            check_type(argname="argument hpc_cluster_id", value=hpc_cluster_id, expected_type=type_hints["hpc_cluster_id"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument inner_ip_addresses", value=inner_ip_addresses, expected_type=type_hints["inner_ip_addresses"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument instance_network_type", value=instance_network_type, expected_type=type_hints["instance_network_type"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument instance_type_family", value=instance_type_family, expected_type=type_hints["instance_type_family"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument io_optimized", value=io_optimized, expected_type=type_hints["io_optimized"])
            check_type(argname="argument ipv6_address", value=ipv6_address, expected_type=type_hints["ipv6_address"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument private_ip_addresses", value=private_ip_addresses, expected_type=type_hints["private_ip_addresses"])
            check_type(argname="argument public_ip_addresses", value=public_ip_addresses, expected_type=type_hints["public_ip_addresses"])
            check_type(argname="argument rdma_ip_addresses", value=rdma_ip_addresses, expected_type=type_hints["rdma_ip_addresses"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if additional_attributes is not None:
            self._values["additional_attributes"] = additional_attributes
        if eip_addresses is not None:
            self._values["eip_addresses"] = eip_addresses
        if filters is not None:
            self._values["filters"] = filters
        if hpc_cluster_id is not None:
            self._values["hpc_cluster_id"] = hpc_cluster_id
        if image_id is not None:
            self._values["image_id"] = image_id
        if inner_ip_addresses is not None:
            self._values["inner_ip_addresses"] = inner_ip_addresses
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if instance_ids is not None:
            self._values["instance_ids"] = instance_ids
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if instance_network_type is not None:
            self._values["instance_network_type"] = instance_network_type
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if instance_type_family is not None:
            self._values["instance_type_family"] = instance_type_family
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if ipv6_address is not None:
            self._values["ipv6_address"] = ipv6_address
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if private_ip_addresses is not None:
            self._values["private_ip_addresses"] = private_ip_addresses
        if public_ip_addresses is not None:
            self._values["public_ip_addresses"] = public_ip_addresses
        if rdma_ip_addresses is not None:
            self._values["rdma_ip_addresses"] = rdma_ip_addresses
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def additional_attributes(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        additionalAttributes: The value of attribute N. Valid values of N: 1 to 20. Valid values:
        META_OPTIONS: instance metadata
        DDH_CLUSTER: dedicated host cluster
        NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
        '''
        result = self._values.get("additional_attributes")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def eip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: eipAddresses: The elastic IP addresses (EIPs) of instances. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        result = self._values.get("eip_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def filters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosInstances.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: filters: Filter value when querying resources
        '''
        result = self._values.get("filters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosInstances.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def hpc_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
        '''
        result = self._values.get("hpc_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: The ID of the image.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inner_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: innerIpAddresses: The internal IP addresses of instances located in the classic network. This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        result = self._values.get("inner_ip_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instance. Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: instanceIds: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
        '''
        result = self._values.get("instance_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard is supported.
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceNetworkType: The network type of the instance. Valid values:
        classic: classic network
        vpc: VPC
        '''
        result = self._values.get("instance_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: The instance type of the instance.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type_family(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceTypeFamily: The instance family of the instance.
        '''
        result = self._values.get("instance_type_family")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        internetChargeType: The billing method for network usage. Valid values:
        PayByBandwidth: pay-by-bandwidth
        PayByTraffic: pay-by-traffic
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ioOptimized: Specifies whether the instance is I/O optimized.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_address(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: ipv6Address: IPv6 address N of the elastic network interface (ENI). You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
        '''
        result = self._values.get("ipv6_address")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: The name of the SSH key pair bound to the instance.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: privateIpAddresses: The private IP addresses of instances located in VPCs. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        result = self._values.get("private_ip_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def public_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: publicIpAddresses: The public IP addresses of instances. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
        '''
        result = self._values.get("public_ip_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def rdma_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
        '''
        result = self._values.get("rdma_ip_addresses")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the instance belongs.
        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The ID of the security group to which the instance belongs.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The state of the instance. Valid values:
        Pending
        Running
        Starting
        Stopping
        Stopped
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstances.TagsProperty]]:
        '''
        :Property: tags: Tags of instance.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstances.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC).
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKeyPairs(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosKeyPairs",
):
    '''A ROS template type:  ``DATASOURCE::ECS::KeyPairs``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKeyPairsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::KeyPairs``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d639fee5f59b0c83d53fd880165618e47190d9fd18b32511038727b3ed79307)
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
            type_hints = typing.get_type_hints(_typecheckingstub__be32db84c7788155fa9835955da107c047714a90a17eaef1b91d8c17a6c7c104)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairNames")
    def attr_key_pair_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyPairNames: The list of key pair names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairNames"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairs")
    def attr_key_pairs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyPairs: The list of key pairs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairs"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__558d2126dad482952f1fa64bff86167042d36fe10c61a1159e2431eb59598d33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairFingerPrint")
    def key_pair_finger_print(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairFingerPrint"))

    @key_pair_finger_print.setter
    def key_pair_finger_print(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94f3705aff497aaf82d0c8f9b8e3791dfb631e4f15ea84a8d8aa8d51d5856829)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairFingerPrint", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        keyPairName: he name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns:
        *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
        SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
        *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
        SshKey: queries the key pair named SshKey.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23135ef8a95db0f090cc661e6854150b1c1ffe3dca4d078e912f4f8a7b1a7037)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the key pair belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a9f9ff6b02d9fc04978a9035582962d7e96c282af07596d9bf5678ce06ab3ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosKeyPairs.TagsProperty"]]:
        '''
        :Property: tags: Tags of keypair.
        '''
        return typing.cast(typing.Optional[typing.List["RosKeyPairs.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosKeyPairs.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__603b82d15d766a4045c0b01dd00ffe1f00189493ed003d751a3fc92de474bacc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosKeyPairs.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__c943cf6daeb7cfe7b8ee00ccfd51696c3a3f298bbebed82ffdcbe580c53fb31d)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosKeyPairsProps",
    jsii_struct_bases=[],
    name_mapping={
        "key_pair_finger_print": "keyPairFingerPrint",
        "key_pair_name": "keyPairName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosKeyPairsProps:
    def __init__(
        self,
        *,
        key_pair_finger_print: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosKeyPairs.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::KeyPairs``.

        :param key_pair_finger_print: 
        :param key_pair_name: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e426a6f26cef02e849729a67db7c7d1b56e40c3f25f4bd34385b7db2a5a485e0)
            check_type(argname="argument key_pair_finger_print", value=key_pair_finger_print, expected_type=type_hints["key_pair_finger_print"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if key_pair_finger_print is not None:
            self._values["key_pair_finger_print"] = key_pair_finger_print
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def key_pair_finger_print(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
        '''
        result = self._values.get("key_pair_finger_print")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        keyPairName: he name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns:
        *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
        SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
        *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
        SshKey: queries the key pair named SshKey.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the key pair belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosKeyPairs.TagsProperty]]:
        '''
        :Property: tags: Tags of keypair.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosKeyPairs.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKeyPairsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosManagedInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosManagedInstances",
):
    '''A ROS template type:  ``DATASOURCE::ECS::ManagedInstances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosManagedInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::ManagedInstances``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4e6a50a79e781f8fa3e49ccc51de24c62d52e266d6f5d501ec4ff2a8fb84856)
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
            type_hints = typing.get_type_hints(_typecheckingstub__35096347b2fc1ffb9bacba96972a0695581f7defbe60550a1753addfcf0f8632)
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
        :Attribute: InstanceIds: The list of managed instance ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Instances: The list of managed instances.
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
            type_hints = typing.get_type_hints(_typecheckingstub__2693f69e78e4487c2f9d8229b3f5c26ec89e75164bd3a3ced66118d1ed1a7fb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="activationId")
    def activation_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: activationId: The ID of the activation code
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "activationId"))

    @activation_id.setter
    def activation_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70d8deab3cd4b33202f88581b60f6cbb3479adcb5917e0f5c23de4685891670e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "activationId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: instanceId: The ID of managed instance. Valid values of N: 1 to 50.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__713ac69429741ed410d021e2223d5f720c6d995968e49ca8abdd0c086cffbfdc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceIp")
    def instance_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceIp: The internal or public IP address of the managed instance
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceIp"))

    @instance_ip.setter
    def instance_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18aac6734afc63cbd4f824878ec82b504aa42247a9cdde3a0d2d5bab75efc409)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceIp", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The name of the managed instance
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47c56afc22af6fb75c386d0c64b47d1f11dac5c95f3c81f9a91a1454340a087f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="osType")
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        osType: The operating system type of the managed instance.  Valid values:
        windows
        linux
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "osType"))

    @os_type.setter
    def os_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aef4e957ab2913e967d538301cfc0f429f08248f940ea45e43d942d2d35d80db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osType", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosManagedInstances.TagsProperty"]]:
        '''
        :Property: tags: Tags of managedinstance.
        '''
        return typing.cast(typing.Optional[typing.List["RosManagedInstances.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosManagedInstances.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25fe687772d52d5500df269e7954c686a7650ff3170332c7713ab74aa665ea03)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosManagedInstances.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__46e18d94f936c4d648fbffcb04b1fc3da733a0d2e113cdc485a21e2328a2f1a8)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosManagedInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "activation_id": "activationId",
        "instance_id": "instanceId",
        "instance_ip": "instanceIp",
        "instance_name": "instanceName",
        "os_type": "osType",
        "tags": "tags",
    },
)
class RosManagedInstancesProps:
    def __init__(
        self,
        *,
        activation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        instance_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosManagedInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::ManagedInstances``.

        :param activation_id: 
        :param instance_id: 
        :param instance_ip: 
        :param instance_name: 
        :param os_type: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4cc7889476894021b75c47a3ad189417408f448673fa9f91f949608702e3071)
            check_type(argname="argument activation_id", value=activation_id, expected_type=type_hints["activation_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument instance_ip", value=instance_ip, expected_type=type_hints["instance_ip"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if activation_id is not None:
            self._values["activation_id"] = activation_id
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if instance_ip is not None:
            self._values["instance_ip"] = instance_ip
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if os_type is not None:
            self._values["os_type"] = os_type
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def activation_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: activationId: The ID of the activation code
        '''
        result = self._values.get("activation_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: instanceId: The ID of managed instance. Valid values of N: 1 to 50.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def instance_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceIp: The internal or public IP address of the managed instance
        '''
        result = self._values.get("instance_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The name of the managed instance
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        osType: The operating system type of the managed instance.  Valid values:
        windows
        linux
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosManagedInstances.TagsProperty]]:
        '''
        :Property: tags: Tags of managedinstance.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosManagedInstances.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosManagedInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNetworkInterfaces(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosNetworkInterfaces",
):
    '''A ROS template type:  ``DATASOURCE::ECS::NetworkInterfaces``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNetworkInterfacesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::NetworkInterfaces``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0070218f1cf7d9f19aad4084cb0aa24369ba51184c48251ba089b62ca26507f4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__53bdcf4f39d559918f1294fc10325f491802a0655cd0e1b064bb26e63aad39f8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkInterfaceIds")
    def attr_network_interface_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkInterfaceIds: The list of NetworkInterfaceIds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkInterfaceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkInterfaces")
    def attr_network_interfaces(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkInterfaces: The list of NetworkInterfaces.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkInterfaces"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b95d6eeb42af81f0a51b7620b0eafd92ccfd03076c5794a3882c8e4c7433cf23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the instance to which the ENI is bound.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de40296aaa734b987cddb5dc4b2564b5741121b440179ba435514061ad4aa338)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="ipv6Addresses")
    def ipv6_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: ipv6Addresses: IPv6 address N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "ipv6Addresses"))

    @ipv6_addresses.setter
    def ipv6_addresses(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4d03678a164f7699c33cd9f0f39dd0a45335e1f31cc451238f33696a5d8a3df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipv6Addresses", value)

    @builtins.property
    @jsii.member(jsii_name="networkInterfaceIds")
    def network_interface_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: networkInterfaceIds: The ID of ENI N. Valid values of N: 1 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "networkInterfaceIds"))

    @network_interface_ids.setter
    def network_interface_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92349c00936f6ab7ed8ba9dbcecfaf5042e79397193d24aa1a3fd6945d5a2ebd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkInterfaceIds", value)

    @builtins.property
    @jsii.member(jsii_name="networkInterfaceName")
    def network_interface_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: networkInterfaceName: The name of the ENI.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkInterfaceName"))

    @network_interface_name.setter
    def network_interface_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e6c851bd1e8a8173c29f2ef9a6918c1cccc27473377991657f1457877d732b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkInterfaceName", value)

    @builtins.property
    @jsii.member(jsii_name="primaryIpAddress")
    def primary_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: primaryIpAddress: The primary private IPv4 address of the ENI.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "primaryIpAddress"))

    @primary_ip_address.setter
    def primary_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f986972e81de7e3e29a63225585337af0dad1d0cde24cab2d4479d7debd83b29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primaryIpAddress", value)

    @builtins.property
    @jsii.member(jsii_name="privateIpAddresses")
    def private_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: privateIpAddresses: Secondary private IPv4 address N of the ENI. Valid values of N: 1 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "privateIpAddresses"))

    @private_ip_addresses.setter
    def private_ip_addresses(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d3f02d69cacbd52a490e6fa89615f7a38fff937904f55160ccf0f167b2fd048)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateIpAddresses", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the eni belongs.
        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f389f5b73d0967e0bac1de6fc7f724f04d68215d5b9b68a546e5eab62b27e1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the security group to which the secondary ENI belongs.
        To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
        To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cac98903daea90f8ba94f957bb49c13bf1d35cfcfc39107efac640f0ff2e463e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceManaged")
    def service_managed(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceManaged"))

    @service_managed.setter
    def service_managed(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f75b63cd223ddb8fba47b91de0cda0852ec9ad97daeb4edc8156d5a3816d77f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceManaged", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The state of the ENI. Valid values:
        Creating: The ENI is being created.
        Available: The ENI is not bound to an instance.
        Attaching: The ENI is being bound to an instance.
        InUse: The ENI is bound to an instance.
        Detaching: The ENI is being unbound from an instance.
        Deleting: The ENI is being deleted.
        CreateFailed: The ENI cannot be created.
        This parameter is empty by default, which indicates that ENIs in all states are queried.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55e4059f9495135fa7d46da24a750c7a953b9d79450441374eb8af939046e93d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosNetworkInterfaces.TagsProperty"]]:
        '''
        :Property: tags: Tags of eni.
        '''
        return typing.cast(typing.Optional[typing.List["RosNetworkInterfaces.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosNetworkInterfaces.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f725bb576930077101862810c9a44b9454bf78204f957f68de705e964de8cc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the ENI. Valid values:
        Primary
        Secondary
        This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd7a43c0fdac76af7c7b0cabf9fd6114eaf68506dc901e625c2e30db68f68275)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db7ac636698068e5127e9b49d9973afeea23ec3eb9dcfacf930e35dedf2a7d0b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch to which the ENI is connected.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25e270c4ff1d58a7e6f53a3636bcb9d9529b6b07231cc6eceedf559667e30bf4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosNetworkInterfaces.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__ba0294ba16d3d5799ae57c221b4a13b6c912e2839a644f8289bfdf101b91d706)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosNetworkInterfacesProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "ipv6_addresses": "ipv6Addresses",
        "network_interface_ids": "networkInterfaceIds",
        "network_interface_name": "networkInterfaceName",
        "primary_ip_address": "primaryIpAddress",
        "private_ip_addresses": "privateIpAddresses",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "service_managed": "serviceManaged",
        "status": "status",
        "tags": "tags",
        "type": "type",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosNetworkInterfacesProps:
    def __init__(
        self,
        *,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        network_interface_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        network_interface_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        primary_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_managed: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosNetworkInterfaces.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::NetworkInterfaces``.

        :param instance_id: 
        :param ipv6_addresses: 
        :param network_interface_ids: 
        :param network_interface_name: 
        :param primary_ip_address: 
        :param private_ip_addresses: 
        :param resource_group_id: 
        :param security_group_id: 
        :param service_managed: 
        :param status: 
        :param tags: 
        :param type: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__219b4e36f11c75e5840bd9178bcad7d8b9f6bf9a7824075b75374529bd6bc028)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument ipv6_addresses", value=ipv6_addresses, expected_type=type_hints["ipv6_addresses"])
            check_type(argname="argument network_interface_ids", value=network_interface_ids, expected_type=type_hints["network_interface_ids"])
            check_type(argname="argument network_interface_name", value=network_interface_name, expected_type=type_hints["network_interface_name"])
            check_type(argname="argument primary_ip_address", value=primary_ip_address, expected_type=type_hints["primary_ip_address"])
            check_type(argname="argument private_ip_addresses", value=private_ip_addresses, expected_type=type_hints["private_ip_addresses"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument service_managed", value=service_managed, expected_type=type_hints["service_managed"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if ipv6_addresses is not None:
            self._values["ipv6_addresses"] = ipv6_addresses
        if network_interface_ids is not None:
            self._values["network_interface_ids"] = network_interface_ids
        if network_interface_name is not None:
            self._values["network_interface_name"] = network_interface_name
        if primary_ip_address is not None:
            self._values["primary_ip_address"] = primary_ip_address
        if private_ip_addresses is not None:
            self._values["private_ip_addresses"] = private_ip_addresses
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_managed is not None:
            self._values["service_managed"] = service_managed
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if type is not None:
            self._values["type"] = type
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the instance to which the ENI is bound.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: ipv6Addresses: IPv6 address N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
        '''
        result = self._values.get("ipv6_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def network_interface_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: networkInterfaceIds: The ID of ENI N. Valid values of N: 1 to 100.
        '''
        result = self._values.get("network_interface_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def network_interface_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: networkInterfaceName: The name of the ENI.
        '''
        result = self._values.get("network_interface_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def primary_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: primaryIpAddress: The primary private IPv4 address of the ENI.
        '''
        result = self._values.get("primary_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: privateIpAddresses: Secondary private IPv4 address N of the ENI. Valid values of N: 1 to 100.
        '''
        result = self._values.get("private_ip_addresses")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the eni belongs.
        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupId: The ID of the security group to which the secondary ENI belongs.
        To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
        To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_managed(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
        '''
        result = self._values.get("service_managed")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The state of the ENI. Valid values:
        Creating: The ENI is being created.
        Available: The ENI is not bound to an instance.
        Attaching: The ENI is being bound to an instance.
        InUse: The ENI is bound to an instance.
        Detaching: The ENI is being unbound from an instance.
        Deleting: The ENI is being deleted.
        CreateFailed: The ENI cannot be created.
        This parameter is empty by default, which indicates that ENIs in all states are queried.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosNetworkInterfaces.TagsProperty]]:
        '''
        :Property: tags: Tags of eni.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosNetworkInterfaces.TagsProperty]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the ENI. Valid values:
        Primary
        Secondary
        This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch to which the ENI is connected.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNetworkInterfacesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRecommendInstanceTypes(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosRecommendInstanceTypes",
):
    '''A ROS template type:  ``DATASOURCE::ECS::RecommendInstanceTypes``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRecommendInstanceTypesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::RecommendInstanceTypes``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09c4a9ef76f3e9726c1ec1b53cdf62336eea0d173ab6b19bc25a67ee11853db1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a16b87fa1058be92d84a9fcb40b8fa0215514c4ce42adcb68846403f17849237)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceTypeIds")
    def attr_instance_type_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceTypeIds: The list of instance type ids. Note that instance type ids are not unique.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceTypeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceTypes")
    def attr_instance_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceTypes: The list of instance types, including information such as cores and memory.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceTypes"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fe7a0b12eedea67da713c1c9e41de80fba7c16e59ce4d0b61295e07609b20e40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="cores")
    def cores(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cores: The number of vCPUs of the instance.
        Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cores"))

    @cores.setter
    def cores(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__313d9f159cd7bb03428ffb89dbb82fcef4d51f54519e21fae767c481c897dc4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cores", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instances of the instance type. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        Default value: PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1642af3aadddad26048bd9e079078ac30eab6552c48f86b6302a6dd5f0c166e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceFamilyLevel")
    def instance_family_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceFamilyLevel: The level of the instance family. Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceFamilyLevel"))

    @instance_family_level.setter
    def instance_family_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25a1e3111d47aa4d5f59b3f9164a518e17d30c0f8105427678c441ef6b9553f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceFamilyLevel", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The specified instance type. For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
        Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__852db3a8f9352dcb51f000e4a235834a3549d92602b0f340ccd3b0d4e0c67c88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceTypeFamilies")
    def instance_type_families(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: instanceTypeFamilies: The list of instance family to be filtered out. You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "instanceTypeFamilies"))

    @instance_type_families.setter
    def instance_type_families(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b4bc76a21729e565d78ad45853e048d7193abb5e09629c1fcd7cfd79bbd5bc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceTypeFamilies", value)

    @builtins.property
    @jsii.member(jsii_name="ioOptimized")
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioOptimized: Specifies whether to match I/O optimized instances. The IoOptimized parameter cannot be specified when the instance is not I/O optimized. Valid values:
        optimized: matches I/O optimized instances.
        none: matches non-I/O optimized instances.
        Default value: optimized.
        If you query alternative instance types for retired instance types, this parameter is set to none by default.
        Default value: none.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ioOptimized"))

    @io_optimized.setter
    def io_optimized(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1656c4e0f0b52c36f214e58d6a8e79e3f71dea04087579238260ba0141231a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ioOptimized", value)

    @builtins.property
    @jsii.member(jsii_name="maxPrice")
    def max_price(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
        Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxPrice"))

    @max_price.setter
    def max_price(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fe5635d8275ee3a693d14353fe2e280900f0b07f80503c77015441e8681b074)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxPrice", value)

    @builtins.property
    @jsii.member(jsii_name="memory")
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        memory: The memory size of the instance. Unit: GiB.
        Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "memory"))

    @memory.setter
    def memory(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9522b995bd24e9d41bcbca875689bec7422333f368adbd8ad37f11e742838870)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memory", value)

    @builtins.property
    @jsii.member(jsii_name="priorityStrategy")
    def priority_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        priorityStrategy: The policy for recommending instance types. Valid values:
        InventoryFirst: Instance types are recommended in descending order based on resource availability.
        PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
        NewProductFirst: The latest instance types are recommended first.
        Default value: InventoryFirst.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "priorityStrategy"))

    @priority_strategy.setter
    def priority_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a99d1101f5c6f6cfac8c789f02502ea131b3c6f6521d2e087c3888775523e261)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priorityStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="scene")
    def scene(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scene: Specifies the scenario in which the instance type is recommended. Valid values:
        UPGRADE: instance type upgrade or downgrade
        CREATE: instance creation
        Default value: CREATE.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scene"))

    @scene.setter
    def scene(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__692b836ff410a00d4d7e977733c5458597a790ffb10e5ed0aa53fa072636879f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scene", value)

    @builtins.property
    @jsii.member(jsii_name="spotStrategy")
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spotStrategy: The bidding policy of preemptible instances. Valid values:
        NoSpot: applies to regular pay-as-you-go instances.
        SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
        SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
        Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
        Default value: NoSpot.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotStrategy"))

    @spot_strategy.setter
    def spot_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7792811dfcd88ccf1b9abd6c121bcc148727cda91e2c90ba58bda86c3348d56f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskCategory")
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskCategory: The category of the system disk. Valid values:
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        cloud_essd: enhanced SSD (ESSD)
        cloud: basic disk
        For non-I/O optimized instances, the default value is cloud.
        For I/O optimized instances, the default value is cloud_efficiency.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskCategory"))

    @system_disk_category.setter
    def system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e6c03e37920ee8283fbd4789f406745bb802ff7beeef41e945043c7f5c800ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the alternative instance types. You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__814161cf1f37442c1eabedf86bf375d9d838ff17305cab0eb6d17d3990a55a7e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneMatchMode")
    def zone_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneMatchMode: Specifies which alternative instance types are recommended. Valid values:
        Strict: recommends only alternative instance types in the zone specified by ZoneId.
        Include: recommends all instance types in all the zones in the same region as the specified instance type.
        When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneMatchMode"))

    @zone_match_mode.setter
    def zone_match_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e8b13752e1aff9fd10149969ca3fd1e5a87d7f9ffec4582302323259ba2191f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneMatchMode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosRecommendInstanceTypesProps",
    jsii_struct_bases=[],
    name_mapping={
        "cores": "cores",
        "instance_charge_type": "instanceChargeType",
        "instance_family_level": "instanceFamilyLevel",
        "instance_type": "instanceType",
        "instance_type_families": "instanceTypeFamilies",
        "io_optimized": "ioOptimized",
        "max_price": "maxPrice",
        "memory": "memory",
        "priority_strategy": "priorityStrategy",
        "scene": "scene",
        "spot_strategy": "spotStrategy",
        "system_disk_category": "systemDiskCategory",
        "zone_id": "zoneId",
        "zone_match_mode": "zoneMatchMode",
    },
)
class RosRecommendInstanceTypesProps:
    def __init__(
        self,
        *,
        cores: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_family_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type_families: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_price: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::RecommendInstanceTypes``.

        :param cores: 
        :param instance_charge_type: 
        :param instance_family_level: 
        :param instance_type: 
        :param instance_type_families: 
        :param io_optimized: 
        :param max_price: 
        :param memory: 
        :param priority_strategy: 
        :param scene: 
        :param spot_strategy: 
        :param system_disk_category: 
        :param zone_id: 
        :param zone_match_mode: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5fc76a29a310d774a5fa6cdaca0db28c039d9cc793f6d0d24eefb68e9e25170)
            check_type(argname="argument cores", value=cores, expected_type=type_hints["cores"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument instance_family_level", value=instance_family_level, expected_type=type_hints["instance_family_level"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument instance_type_families", value=instance_type_families, expected_type=type_hints["instance_type_families"])
            check_type(argname="argument io_optimized", value=io_optimized, expected_type=type_hints["io_optimized"])
            check_type(argname="argument max_price", value=max_price, expected_type=type_hints["max_price"])
            check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
            check_type(argname="argument priority_strategy", value=priority_strategy, expected_type=type_hints["priority_strategy"])
            check_type(argname="argument scene", value=scene, expected_type=type_hints["scene"])
            check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
            check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument zone_match_mode", value=zone_match_mode, expected_type=type_hints["zone_match_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cores is not None:
            self._values["cores"] = cores
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_family_level is not None:
            self._values["instance_family_level"] = instance_family_level
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if instance_type_families is not None:
            self._values["instance_type_families"] = instance_type_families
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if max_price is not None:
            self._values["max_price"] = max_price
        if memory is not None:
            self._values["memory"] = memory
        if priority_strategy is not None:
            self._values["priority_strategy"] = priority_strategy
        if scene is not None:
            self._values["scene"] = scene
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy
        if system_disk_category is not None:
            self._values["system_disk_category"] = system_disk_category
        if zone_id is not None:
            self._values["zone_id"] = zone_id
        if zone_match_mode is not None:
            self._values["zone_match_mode"] = zone_match_mode

    @builtins.property
    def cores(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cores: The number of vCPUs of the instance.
        Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
        '''
        result = self._values.get("cores")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instances of the instance type. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        Default value: PostPaid.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_family_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceFamilyLevel: The level of the instance family. Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
        '''
        result = self._values.get("instance_family_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The specified instance type. For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
        Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type_families(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: instanceTypeFamilies: The list of instance family to be filtered out. You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
        '''
        result = self._values.get("instance_type_families")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioOptimized: Specifies whether to match I/O optimized instances. The IoOptimized parameter cannot be specified when the instance is not I/O optimized. Valid values:
        optimized: matches I/O optimized instances.
        none: matches non-I/O optimized instances.
        Default value: optimized.
        If you query alternative instance types for retired instance types, this parameter is set to none by default.
        Default value: none.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_price(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
        Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
        '''
        result = self._values.get("max_price")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        memory: The memory size of the instance. Unit: GiB.
        Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
        '''
        result = self._values.get("memory")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        priorityStrategy: The policy for recommending instance types. Valid values:
        InventoryFirst: Instance types are recommended in descending order based on resource availability.
        PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
        NewProductFirst: The latest instance types are recommended first.
        Default value: InventoryFirst.
        '''
        result = self._values.get("priority_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scene(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scene: Specifies the scenario in which the instance type is recommended. Valid values:
        UPGRADE: instance type upgrade or downgrade
        CREATE: instance creation
        Default value: CREATE.
        '''
        result = self._values.get("scene")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spotStrategy: The bidding policy of preemptible instances. Valid values:
        NoSpot: applies to regular pay-as-you-go instances.
        SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
        SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
        Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
        Default value: NoSpot.
        '''
        result = self._values.get("spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskCategory: The category of the system disk. Valid values:
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        cloud_essd: enhanced SSD (ESSD)
        cloud: basic disk
        For non-I/O optimized instances, the default value is cloud.
        For I/O optimized instances, the default value is cloud_efficiency.
        '''
        result = self._values.get("system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the alternative instance types. You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_match_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneMatchMode: Specifies which alternative instance types are recommended. Valid values:
        Strict: recommends only alternative instance types in the zone specified by ZoneId.
        Include: recommends all instance types in all the zones in the same region as the specified instance type.
        When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
        '''
        result = self._values.get("zone_match_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRecommendInstanceTypesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecurityGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosSecurityGroups",
):
    '''A ROS template type:  ``DATASOURCE::ECS::SecurityGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSecurityGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::SecurityGroups``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54a86034d76be749aa357599c81aeb0fb50abb7cad74e7d44343ac2f4cb38491)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d28b6bc4f51771836bfe12cad498d2c9aaf0da4551411c981c44bb9db93eb127)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupIds")
    def attr_security_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupIds: The list of security group ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroups")
    def attr_security_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroups: The list of security groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__47d6630889df24fdf2cc88a37f8094b52ed5e0fb51997cb64ea0d1661fba0084)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkType: The network type of the security group. Valid values:
        vpc
        classic
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8beff39d3557f1724ac33361b4d14fe4cfa56a349c205a8f403b84f0c7e898d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the instance belongs.
        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dced35ea248c6ca0247b182a156b8898ecc794c0400674a0770a2980bbe84d25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The ID of the security group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6321ad7ac3150a702cb25918cdfa6fd9d7fe9e5bb71087bb0f4a6937be2628c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupIds")
    def security_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityGroupIds: The IDs of security groups. The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "securityGroupIds"))

    @security_group_ids.setter
    def security_group_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e696fc2157300620da22e8c802ff42a566e6884cbbf26c92ccfb8c55b42904e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupIds", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupName")
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupName: The name of the security group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupName"))

    @security_group_name.setter
    def security_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70f533011b0b62bc509ef8ca95fd56438562a51fe4732eb130bc716136991e88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupType")
    def security_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupType: The type of the security group. Valid values:
        normal: basic security group
        enterprise: advanced security group
        Note If you do not specify this parameter, both basic and advanced security groups are queried.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupType"))

    @security_group_type.setter
    def security_group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe76356c3580bc76014e6041c5a24a6c3e0de4d4c750b5f9bbec781f91721f0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupType", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosSecurityGroups.TagsProperty"]]:
        '''
        :Property: tags: Tags of securitygroup.
        '''
        return typing.cast(typing.Optional[typing.List["RosSecurityGroups.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosSecurityGroups.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__323e4c76c00e203ee00542bfb552233405b5208db7ee2eb9bbe88c3452c0b275)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69d5ce806ef6d12f6c6b6e12584c54859a555fbfa450c3c1140025bfef7adcf4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosSecurityGroups.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__390534bbc7b2dbdc511f15af234be724a576bf9340eadd172aae2a1222970884)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosSecurityGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "network_type": "networkType",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "security_group_ids": "securityGroupIds",
        "security_group_name": "securityGroupName",
        "security_group_type": "securityGroupType",
        "tags": "tags",
        "vpc_id": "vpcId",
    },
)
class RosSecurityGroupsProps:
    def __init__(
        self,
        *,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosSecurityGroups.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::SecurityGroups``.

        :param network_type: 
        :param resource_group_id: 
        :param security_group_id: 
        :param security_group_ids: 
        :param security_group_name: 
        :param security_group_type: 
        :param tags: 
        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96911b9aa44483832a80281497af69e60348bca35cc2a7c399a5fbfbbbf4873f)
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
            check_type(argname="argument security_group_name", value=security_group_name, expected_type=type_hints["security_group_name"])
            check_type(argname="argument security_group_type", value=security_group_type, expected_type=type_hints["security_group_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if network_type is not None:
            self._values["network_type"] = network_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_ids is not None:
            self._values["security_group_ids"] = security_group_ids
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if security_group_type is not None:
            self._values["security_group_type"] = security_group_type
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkType: The network type of the security group. Valid values:
        vpc
        classic
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the instance belongs.
        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The ID of the security group.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityGroupIds: The IDs of security groups. The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
        '''
        result = self._values.get("security_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupName: The name of the security group.
        '''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityGroupType: The type of the security group. Valid values:
        normal: basic security group
        enterprise: advanced security group
        Note If you do not specify this parameter, both basic and advanced security groups are queried.
        '''
        result = self._values.get("security_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosSecurityGroups.TagsProperty]]:
        '''
        :Property: tags: Tags of securitygroup.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosSecurityGroups.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecurityGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSnapshots(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosSnapshots",
):
    '''A ROS template type:  ``DATASOURCE::ECS::Snapshots``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSnapshotsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Snapshots``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ed351980ab3a34ad5b7b16dfb66b48ed93eba38afc1d2d7b302f7e72d993aa2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__55901316718c1943fd7dda05e5cf2e553c274c36564dcfb91703866197f2324e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSnapshotIds")
    def attr_snapshot_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SnapshotIds: the list of snapshot ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSnapshotIds"))

    @builtins.property
    @jsii.member(jsii_name="attrSnapshots")
    def attr_snapshots(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Snapshots: the list of snapshots.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSnapshots"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5c7b04229cdab995eae96619343e1451e7c0118e14a291bb5fb1a96d31d18683)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The category of the snapshot. Valid values:
        Standard: normal snapshot
        Flash: local snapshot
        The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
        If you have used local snapshots before December 14, 2020, you can use this parameter.
        If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
        Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__623f907f72600cb86f7616f7c01d3814fefac2a25030833786a3b7c83931da1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="diskId")
    def disk_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskId: The ID of the disk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskId"))

    @disk_id.setter
    def disk_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__245e3d1b76dc38eadc8d749e22837841b0cadf7b6d6784d95e6443727bec485b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskId", value)

    @builtins.property
    @jsii.member(jsii_name="encrypted")
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encrypted: Specifies whether the snapshot is encrypted. Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encrypted"))

    @encrypted.setter
    def encrypted(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88118bb0b423fed9878e5eef25c10c18b38aae3a74bdf450fe6aac8c88557f41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encrypted", value)

    @builtins.property
    @jsii.member(jsii_name="filters")
    def filters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosSnapshots.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: filters: Filter value when querying resources
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosSnapshots.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "filters"))

    @filters.setter
    def filters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosSnapshots.FiltersProperty", _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ceba801f175a0fdc3a328b22c75cba50ea408839ed5c8c08efe4d5da5384951)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filters", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96c4570db40887697a7ae2412eef62d84ddfcdcfb199e617f795c291ec45a01c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="kmsKeyId")
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kmsKeyId"))

    @kms_key_id.setter
    def kms_key_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4c5015c17258378b459a90591f4b72aad98f616dd88cc9efb179885f3d03aed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kmsKeyId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the snapshot belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1b66f0ff053143a560a4e98b2028571d6cb8efd67b8d56e561d4e405098ab29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="snapshotIds")
    def snapshot_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: snapshotIds: The IDs of snapshots. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "snapshotIds"))

    @snapshot_ids.setter
    def snapshot_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc181c0f74edec0c5ba871d8417dfc3d6aa6c389aaf16ac0fd7e5a66542af5e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snapshotIds", value)

    @builtins.property
    @jsii.member(jsii_name="snapshotLinkId")
    def snapshot_link_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotLinkId: The ID of the snapshot chain.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snapshotLinkId"))

    @snapshot_link_id.setter
    def snapshot_link_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d0ca12831b6e261696c985ac10efcb971f422361ebd2dc55ecc6a1a5caa2afb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snapshotLinkId", value)

    @builtins.property
    @jsii.member(jsii_name="snapshotName")
    def snapshot_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotName: The name of the snapshot.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snapshotName"))

    @snapshot_name.setter
    def snapshot_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9be2e7e9c58cf92a605e252e9bbba3b4000cbdbfcf9c06bbdf7834cfadf8f9d6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snapshotName", value)

    @builtins.property
    @jsii.member(jsii_name="snapshotType")
    def snapshot_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        snapshotType: Specifies whether the snapshot has been used to create images or disks. Valid values:
        auto: automatic snapshot
        user: manual snapshot
        all: all snapshot types
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snapshotType"))

    @snapshot_type.setter
    def snapshot_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f337fa4f6c5308541a62d2c46263cec1172da6b0f584c2f39c17e3db21269e46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snapshotType", value)

    @builtins.property
    @jsii.member(jsii_name="sourceDiskType")
    def source_disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceDiskType: The type of the source disk for which the snapshot was created. Valid values:
        System: system disk
        Data: data disk
        Note These values are case-insensitive.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceDiskType"))

    @source_disk_type.setter
    def source_disk_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__faf6b6d6512926be702ab18a588eaa05a18840922e820e4d34ed14444b63f92f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceDiskType", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the snapshot. Default value: all. Valid values:
        progressing: The snapshot is being created.
        accomplished: The snapshot is created.
        failed: The snapshot fails to be created.
        all: all snapshot statuses.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02673d5a3a486ffbe04cd79e1fe2732094470d0a865d1ec4155c3a359fa1fe8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosSnapshots.TagsProperty"]]:
        '''
        :Property: tags: Tags of snapshot.
        '''
        return typing.cast(typing.Optional[typing.List["RosSnapshots.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosSnapshots.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c253a2d12154b9cab47244f6eebb0cc9c23a2f756a1c797d213383a7b692be7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="usage")
    def usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        usage: The type of the snapshot. Default value: all. Valid values:
        image: The snapshot has been used to create custom images.
        disk: The snapshot has been used to create disks.
        image_disk: The snapshot has been used to create custom images and data disks.
        none: The snapshot has not been used to create custom images or disks.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "usage"))

    @usage.setter
    def usage(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddc51ca9bc3e7d8675794676c6e1de68ed0dcd47823859aac0582279775d78f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "usage", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosSnapshots.FiltersProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class FiltersProperty:
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
                type_hints = typing.get_type_hints(_typecheckingstub__84d2c671a0e367e4e4ea44679a568e7d6dd982dc0acf948e5445df986a26353f)
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
            return "FiltersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecs.datasource.RosSnapshots.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__6b002ff12fcf0aad61690e4221f5b7185229bf4a01bd15400f1fdae61b1cdbab)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosSnapshotsProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "disk_id": "diskId",
        "encrypted": "encrypted",
        "filters": "filters",
        "instance_id": "instanceId",
        "kms_key_id": "kmsKeyId",
        "resource_group_id": "resourceGroupId",
        "snapshot_ids": "snapshotIds",
        "snapshot_link_id": "snapshotLinkId",
        "snapshot_name": "snapshotName",
        "snapshot_type": "snapshotType",
        "source_disk_type": "sourceDiskType",
        "status": "status",
        "tags": "tags",
        "usage": "usage",
    },
)
class RosSnapshotsProps:
    def __init__(
        self,
        *,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosSnapshots.FiltersProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        snapshot_link_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosSnapshots.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Snapshots``.

        :param category: 
        :param disk_id: 
        :param encrypted: 
        :param filters: 
        :param instance_id: 
        :param kms_key_id: 
        :param resource_group_id: 
        :param snapshot_ids: 
        :param snapshot_link_id: 
        :param snapshot_name: 
        :param snapshot_type: 
        :param source_disk_type: 
        :param status: 
        :param tags: 
        :param usage: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__355a77131015a68f09372bda1f6f26589313b4893aae3cefe6aa2a9c24a111d3)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument disk_id", value=disk_id, expected_type=type_hints["disk_id"])
            check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
            check_type(argname="argument filters", value=filters, expected_type=type_hints["filters"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument snapshot_ids", value=snapshot_ids, expected_type=type_hints["snapshot_ids"])
            check_type(argname="argument snapshot_link_id", value=snapshot_link_id, expected_type=type_hints["snapshot_link_id"])
            check_type(argname="argument snapshot_name", value=snapshot_name, expected_type=type_hints["snapshot_name"])
            check_type(argname="argument snapshot_type", value=snapshot_type, expected_type=type_hints["snapshot_type"])
            check_type(argname="argument source_disk_type", value=source_disk_type, expected_type=type_hints["source_disk_type"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument usage", value=usage, expected_type=type_hints["usage"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if category is not None:
            self._values["category"] = category
        if disk_id is not None:
            self._values["disk_id"] = disk_id
        if encrypted is not None:
            self._values["encrypted"] = encrypted
        if filters is not None:
            self._values["filters"] = filters
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if kms_key_id is not None:
            self._values["kms_key_id"] = kms_key_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if snapshot_ids is not None:
            self._values["snapshot_ids"] = snapshot_ids
        if snapshot_link_id is not None:
            self._values["snapshot_link_id"] = snapshot_link_id
        if snapshot_name is not None:
            self._values["snapshot_name"] = snapshot_name
        if snapshot_type is not None:
            self._values["snapshot_type"] = snapshot_type
        if source_disk_type is not None:
            self._values["source_disk_type"] = source_disk_type
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if usage is not None:
            self._values["usage"] = usage

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The category of the snapshot. Valid values:
        Standard: normal snapshot
        Flash: local snapshot
        The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
        If you have used local snapshots before December 14, 2020, you can use this parameter.
        If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
        Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskId: The ID of the disk.
        '''
        result = self._values.get("disk_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encrypted: Specifies whether the snapshot is encrypted. Default value: false.
        '''
        result = self._values.get("encrypted")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosSnapshots.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: filters: Filter value when querying resources
        '''
        result = self._values.get("filters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosSnapshots.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
        '''
        result = self._values.get("kms_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the snapshot belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: snapshotIds: The IDs of snapshots. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
        '''
        result = self._values.get("snapshot_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def snapshot_link_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotLinkId: The ID of the snapshot chain.
        '''
        result = self._values.get("snapshot_link_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: snapshotName: The name of the snapshot.
        '''
        result = self._values.get("snapshot_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        snapshotType: Specifies whether the snapshot has been used to create images or disks. Valid values:
        auto: automatic snapshot
        user: manual snapshot
        all: all snapshot types
        '''
        result = self._values.get("snapshot_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceDiskType: The type of the source disk for which the snapshot was created. Valid values:
        System: system disk
        Data: data disk
        Note These values are case-insensitive.
        '''
        result = self._values.get("source_disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the snapshot. Default value: all. Valid values:
        progressing: The snapshot is being created.
        accomplished: The snapshot is created.
        failed: The snapshot fails to be created.
        all: all snapshot statuses.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosSnapshots.TagsProperty]]:
        '''
        :Property: tags: Tags of snapshot.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosSnapshots.TagsProperty]], result)

    @builtins.property
    def usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        usage: The type of the snapshot. Default value: all. Valid values:
        image: The snapshot has been used to create custom images.
        disk: The snapshot has been used to create disks.
        image_disk: The snapshot has been used to create custom images and data disks.
        none: The snapshot has not been used to create custom images or disks.
        '''
        result = self._values.get("usage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSnapshotsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZones(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosZones",
):
    '''A ROS template type:  ``DATASOURCE::ECS::Zones``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Zones``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79d9f53cf0fcfdf30de7a34cb3439b78b91036190e425d0f983a2994d6fe982e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a12820e3cb755f2d8d2b0c0c564c50fef58057dee607395823ca666102f0e5cf)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneIds: The list of zone IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Zones: The list of zones.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__31f2a17478c21ba57a45dd36b1c105ad7565ff0195aae1a5d01c09395f489875)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dataDiskCategory")
    def data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataDiskCategory: The category of the data disk. Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: enhanced SSD (ESSD)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataDiskCategory"))

    @data_disk_category.setter
    def data_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6e9d18c494b15b6c857d54d9c3d4cf8c39ca116b6b52174787678702f2cfe47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataDiskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the resource. For more information, see Billing overview. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        Default value: PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8979535f3d548a07846d597bff6db169429e0315e214895700ed26b291258a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: The instance type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f3aacdefd34df177ac072755cad67ab92c3d68e2152c16defbe2061f4450a00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="ioOptimized")
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioOptimized: Specifies whether the instance is I/O optimized. Valid values:
        none: non-I/O optimized
        optimized: I/O optimized
        Default value: optimized.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ioOptimized"))

    @io_optimized.setter
    def io_optimized(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c99c34a69bf64bb1de58581a9b29179915ca1ca9d6eb757c1ccb9600ef19eea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ioOptimized", value)

    @builtins.property
    @jsii.member(jsii_name="resourceType")
    def resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceType: The type of the resource. Valid values:
        instance: ECS instance
        disk: cloud disk
        reservedinstance: reserved instance
        ddh: dedicated host
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceType"))

    @resource_type.setter
    def resource_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ab93d920807d424b4d2d50b8dcd22c293bde7a4f7b11e4c3224762a4f520152)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceType", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskCategory")
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskCategory: The category of the system disk. Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: enhanced SSD (ESSD)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemDiskCategory"))

    @system_disk_category.setter
    def system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5c6f96478c5de4db027e39ece31ac466118dfc08c2552534dcc0d68dbd8498c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskCategory", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.RosZonesProps",
    jsii_struct_bases=[],
    name_mapping={
        "data_disk_category": "dataDiskCategory",
        "instance_charge_type": "instanceChargeType",
        "instance_type": "instanceType",
        "io_optimized": "ioOptimized",
        "resource_type": "resourceType",
        "system_disk_category": "systemDiskCategory",
    },
)
class RosZonesProps:
    def __init__(
        self,
        *,
        data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Zones``.

        :param data_disk_category: 
        :param instance_charge_type: 
        :param instance_type: 
        :param io_optimized: 
        :param resource_type: 
        :param system_disk_category: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01864a3e5a2342f06afce5ca2b711a6c38a162927d5a139f8df4b8b4d702634c)
            check_type(argname="argument data_disk_category", value=data_disk_category, expected_type=type_hints["data_disk_category"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument io_optimized", value=io_optimized, expected_type=type_hints["io_optimized"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if data_disk_category is not None:
            self._values["data_disk_category"] = data_disk_category
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if resource_type is not None:
            self._values["resource_type"] = resource_type
        if system_disk_category is not None:
            self._values["system_disk_category"] = system_disk_category

    @builtins.property
    def data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataDiskCategory: The category of the data disk. Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: enhanced SSD (ESSD)
        '''
        result = self._values.get("data_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the resource. For more information, see Billing overview. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        Default value: PostPaid.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: The instance type.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioOptimized: Specifies whether the instance is I/O optimized. Valid values:
        none: non-I/O optimized
        optimized: I/O optimized
        Default value: optimized.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceType: The type of the resource. Valid values:
        instance: ECS instance
        disk: cloud disk
        reservedinstance: reserved instance
        ddh: dedicated host
        '''
        result = self._values.get("resource_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        systemDiskCategory: The category of the system disk. Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: enhanced SSD (ESSD)
        '''
        result = self._values.get("system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SecurityGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.SecurityGroups",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::SecurityGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["SecurityGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::SecurityGroups``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b75b704cd3eeb1768a38cc5ff506c28ab91a63cdf7ad5f2234899bd9ab2c9704)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupIds")
    def attr_security_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityGroupIds: The list of security group ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroups")
    def attr_security_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityGroups: The list of security groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroups"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.SecurityGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "network_type": "networkType",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "security_group_ids": "securityGroupIds",
        "security_group_name": "securityGroupName",
        "security_group_type": "securityGroupType",
        "tags": "tags",
        "vpc_id": "vpcId",
    },
)
class SecurityGroupsProps:
    def __init__(
        self,
        *,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosSecurityGroups.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::SecurityGroups``.

        :param network_type: Property networkType: The network type of the security group. Valid values: vpc classic
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the instance belongs. If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        :param security_group_id: Property securityGroupId: The ID of the security group.
        :param security_group_ids: Property securityGroupIds: The IDs of security groups. The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
        :param security_group_name: Property securityGroupName: The name of the security group.
        :param security_group_type: Property securityGroupType: The type of the security group. Valid values: normal: basic security group enterprise: advanced security group Note If you do not specify this parameter, both basic and advanced security groups are queried.
        :param tags: Property tags: Tags of securitygroup.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f64418baf2d9b021ce52fbb754171c24c475e02c6aea26334e2b76664c385a55)
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
            check_type(argname="argument security_group_name", value=security_group_name, expected_type=type_hints["security_group_name"])
            check_type(argname="argument security_group_type", value=security_group_type, expected_type=type_hints["security_group_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if network_type is not None:
            self._values["network_type"] = network_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if security_group_ids is not None:
            self._values["security_group_ids"] = security_group_ids
        if security_group_name is not None:
            self._values["security_group_name"] = security_group_name
        if security_group_type is not None:
            self._values["security_group_type"] = security_group_type
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkType: The network type of the security group.

        Valid values:
        vpc
        classic
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the instance belongs.

        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The ID of the security group.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property securityGroupIds: The IDs of security groups.

        The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
        '''
        result = self._values.get("security_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def security_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupName: The name of the security group.'''
        result = self._values.get("security_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupType: The type of the security group.

        Valid values:
        normal: basic security group
        enterprise: advanced security group
        Note If you do not specify this parameter, both basic and advanced security groups are queried.
        '''
        result = self._values.get("security_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosSecurityGroups.TagsProperty]]:
        '''Property tags: Tags of securitygroup.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosSecurityGroups.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecurityGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Snapshots(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.Snapshots",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::Snapshots``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["SnapshotsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Snapshots``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11b4930452e392dda5e68b6965e0558b65430ffd9dffcd5f39502f5df6e5367a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSnapshotIds")
    def attr_snapshot_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SnapshotIds: the list of snapshot ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSnapshotIds"))

    @builtins.property
    @jsii.member(jsii_name="attrSnapshots")
    def attr_snapshots(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Snapshots: the list of snapshots.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSnapshots"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.SnapshotsProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "disk_id": "diskId",
        "encrypted": "encrypted",
        "filters": "filters",
        "instance_id": "instanceId",
        "kms_key_id": "kmsKeyId",
        "resource_group_id": "resourceGroupId",
        "snapshot_ids": "snapshotIds",
        "snapshot_link_id": "snapshotLinkId",
        "snapshot_name": "snapshotName",
        "snapshot_type": "snapshotType",
        "source_disk_type": "sourceDiskType",
        "status": "status",
        "tags": "tags",
        "usage": "usage",
    },
)
class SnapshotsProps:
    def __init__(
        self,
        *,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosSnapshots.FiltersProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        snapshot_link_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snapshot_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosSnapshots.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Snapshots``.

        :param category: Property category: The category of the snapshot. Valid values: Standard: normal snapshot Flash: local snapshot The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items: If you have used local snapshots before December 14, 2020, you can use this parameter. If you have not used local snapshots before December 14, 2020, you cannot use this parameter. Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
        :param disk_id: Property diskId: The ID of the disk.
        :param encrypted: Property encrypted: Specifies whether the snapshot is encrypted. Default value: false.
        :param filters: Property filters: Filter value when querying resources.
        :param instance_id: Property instanceId: The ID of the instance.
        :param kms_key_id: Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the snapshot belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        :param snapshot_ids: Property snapshotIds: The IDs of snapshots. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
        :param snapshot_link_id: Property snapshotLinkId: The ID of the snapshot chain.
        :param snapshot_name: Property snapshotName: The name of the snapshot.
        :param snapshot_type: Property snapshotType: Specifies whether the snapshot has been used to create images or disks. Valid values: auto: automatic snapshot user: manual snapshot all: all snapshot types
        :param source_disk_type: Property sourceDiskType: The type of the source disk for which the snapshot was created. Valid values: System: system disk Data: data disk Note These values are case-insensitive.
        :param status: Property status: The status of the snapshot. Default value: all. Valid values: progressing: The snapshot is being created. accomplished: The snapshot is created. failed: The snapshot fails to be created. all: all snapshot statuses.
        :param tags: Property tags: Tags of snapshot.
        :param usage: Property usage: The type of the snapshot. Default value: all. Valid values: image: The snapshot has been used to create custom images. disk: The snapshot has been used to create disks. image_disk: The snapshot has been used to create custom images and data disks. none: The snapshot has not been used to create custom images or disks.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bacd63ddd03682469758cc5917983595c7d8db43ed4baeac04e9bd2c0f8cd6be)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument disk_id", value=disk_id, expected_type=type_hints["disk_id"])
            check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
            check_type(argname="argument filters", value=filters, expected_type=type_hints["filters"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument snapshot_ids", value=snapshot_ids, expected_type=type_hints["snapshot_ids"])
            check_type(argname="argument snapshot_link_id", value=snapshot_link_id, expected_type=type_hints["snapshot_link_id"])
            check_type(argname="argument snapshot_name", value=snapshot_name, expected_type=type_hints["snapshot_name"])
            check_type(argname="argument snapshot_type", value=snapshot_type, expected_type=type_hints["snapshot_type"])
            check_type(argname="argument source_disk_type", value=source_disk_type, expected_type=type_hints["source_disk_type"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument usage", value=usage, expected_type=type_hints["usage"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if category is not None:
            self._values["category"] = category
        if disk_id is not None:
            self._values["disk_id"] = disk_id
        if encrypted is not None:
            self._values["encrypted"] = encrypted
        if filters is not None:
            self._values["filters"] = filters
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if kms_key_id is not None:
            self._values["kms_key_id"] = kms_key_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if snapshot_ids is not None:
            self._values["snapshot_ids"] = snapshot_ids
        if snapshot_link_id is not None:
            self._values["snapshot_link_id"] = snapshot_link_id
        if snapshot_name is not None:
            self._values["snapshot_name"] = snapshot_name
        if snapshot_type is not None:
            self._values["snapshot_type"] = snapshot_type
        if source_disk_type is not None:
            self._values["source_disk_type"] = source_disk_type
        if status is not None:
            self._values["status"] = status
        if tags is not None:
            self._values["tags"] = tags
        if usage is not None:
            self._values["usage"] = usage

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property category: The category of the snapshot.

        Valid values:
        Standard: normal snapshot
        Flash: local snapshot
        The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
        If you have used local snapshots before December 14, 2020, you can use this parameter.
        If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
        Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskId: The ID of the disk.'''
        result = self._values.get("disk_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encrypted: Specifies whether the snapshot is encrypted.

        Default value: false.
        '''
        result = self._values.get("encrypted")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosSnapshots.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property filters: Filter value when querying resources.'''
        result = self._values.get("filters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosSnapshots.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.'''
        result = self._values.get("kms_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the snapshot belongs.

        If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property snapshotIds: The IDs of snapshots.

        The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
        '''
        result = self._values.get("snapshot_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def snapshot_link_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snapshotLinkId: The ID of the snapshot chain.'''
        result = self._values.get("snapshot_link_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snapshotName: The name of the snapshot.'''
        result = self._values.get("snapshot_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snapshot_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snapshotType: Specifies whether the snapshot has been used to create images or disks.

        Valid values:
        auto: automatic snapshot
        user: manual snapshot
        all: all snapshot types
        '''
        result = self._values.get("snapshot_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceDiskType: The type of the source disk for which the snapshot was created.

        Valid values:
        System: system disk
        Data: data disk
        Note These values are case-insensitive.
        '''
        result = self._values.get("source_disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the snapshot.

        Default value: all. Valid values:
        progressing: The snapshot is being created.
        accomplished: The snapshot is created.
        failed: The snapshot fails to be created.
        all: all snapshot statuses.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosSnapshots.TagsProperty]]:
        '''Property tags: Tags of snapshot.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosSnapshots.TagsProperty]], result)

    @builtins.property
    def usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property usage: The type of the snapshot.

        Default value: all. Valid values:
        image: The snapshot has been used to create custom images.
        disk: The snapshot has been used to create disks.
        image_disk: The snapshot has been used to create custom images and data disks.
        none: The snapshot has not been used to create custom images or disks.
        '''
        result = self._values.get("usage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SnapshotsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Zones(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecs.datasource.Zones",
):
    '''A ROS resource type:  ``DATASOURCE::ECS::Zones``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ZonesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ECS::Zones``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8dfa46934f4bd43c3d0183487fddac9a3e4fef9e938182c6e150094df2445c4d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneIds: The list of zone IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Zones: The list of zones.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecs.datasource.ZonesProps",
    jsii_struct_bases=[],
    name_mapping={
        "data_disk_category": "dataDiskCategory",
        "instance_charge_type": "instanceChargeType",
        "instance_type": "instanceType",
        "io_optimized": "ioOptimized",
        "resource_type": "resourceType",
        "system_disk_category": "systemDiskCategory",
    },
)
class ZonesProps:
    def __init__(
        self,
        *,
        data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ECS::Zones``.

        :param data_disk_category: Property dataDiskCategory: The category of the data disk. Valid values: cloud: basic disk cloud_efficiency: ultra disk cloud_ssd: standard SSD ephemeral_ssd: local SSD cloud_essd: enhanced SSD (ESSD)
        :param instance_charge_type: Property instanceChargeType: The billing method of the resource. For more information, see Billing overview. Valid values: PrePaid: subscription PostPaid: pay-as-you-go Default value: PostPaid.
        :param instance_type: Property instanceType: The instance type.
        :param io_optimized: Property ioOptimized: Specifies whether the instance is I/O optimized. Valid values: none: non-I/O optimized optimized: I/O optimized Default value: optimized.
        :param resource_type: Property resourceType: The type of the resource. Valid values: instance: ECS instance disk: cloud disk reservedinstance: reserved instance ddh: dedicated host
        :param system_disk_category: Property systemDiskCategory: The category of the system disk. Valid values: cloud: basic disk cloud_efficiency: ultra disk cloud_ssd: standard SSD ephemeral_ssd: local SSD cloud_essd: enhanced SSD (ESSD)
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__733eca5a80866d16509e91d655926228a402c061e05480d7cf6f74520552ce03)
            check_type(argname="argument data_disk_category", value=data_disk_category, expected_type=type_hints["data_disk_category"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument io_optimized", value=io_optimized, expected_type=type_hints["io_optimized"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if data_disk_category is not None:
            self._values["data_disk_category"] = data_disk_category
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if io_optimized is not None:
            self._values["io_optimized"] = io_optimized
        if resource_type is not None:
            self._values["resource_type"] = resource_type
        if system_disk_category is not None:
            self._values["system_disk_category"] = system_disk_category

    @builtins.property
    def data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataDiskCategory: The category of the data disk.

        Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: enhanced SSD (ESSD)
        '''
        result = self._values.get("data_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: The billing method of the resource.

        For more information, see Billing overview. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        Default value: PostPaid.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: The instance type.'''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_optimized(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ioOptimized: Specifies whether the instance is I/O optimized.

        Valid values:
        none: non-I/O optimized
        optimized: I/O optimized
        Default value: optimized.
        '''
        result = self._values.get("io_optimized")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceType: The type of the resource.

        Valid values:
        instance: ECS instance
        disk: cloud disk
        reservedinstance: reserved instance
        ddh: dedicated host
        '''
        result = self._values.get("resource_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemDiskCategory: The category of the system disk.

        Valid values:
        cloud: basic disk
        cloud_efficiency: ultra disk
        cloud_ssd: standard SSD
        ephemeral_ssd: local SSD
        cloud_essd: enhanced SSD (ESSD)
        '''
        result = self._values.get("system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Activations",
    "ActivationsProps",
    "AutoSnapshotPolicies",
    "AutoSnapshotPoliciesProps",
    "Commands",
    "CommandsProps",
    "DedicatedHostClusters",
    "DedicatedHostClustersProps",
    "DedicatedHosts",
    "DedicatedHostsProps",
    "DeploymentSets",
    "DeploymentSetsProps",
    "DiskCategories",
    "DiskCategoriesProps",
    "Disks",
    "DisksProps",
    "HpcClusters",
    "HpcClustersProps",
    "Images",
    "ImagesProps",
    "Instances",
    "InstancesProps",
    "KeyPairs",
    "KeyPairsProps",
    "ManagedInstances",
    "ManagedInstancesProps",
    "NetworkInterfaces",
    "NetworkInterfacesProps",
    "RecommendInstanceTypes",
    "RecommendInstanceTypesProps",
    "RosActivations",
    "RosActivationsProps",
    "RosAutoSnapshotPolicies",
    "RosAutoSnapshotPoliciesProps",
    "RosCommands",
    "RosCommandsProps",
    "RosDedicatedHostClusters",
    "RosDedicatedHostClustersProps",
    "RosDedicatedHosts",
    "RosDedicatedHostsProps",
    "RosDeploymentSets",
    "RosDeploymentSetsProps",
    "RosDiskCategories",
    "RosDiskCategoriesProps",
    "RosDisks",
    "RosDisksProps",
    "RosHpcClusters",
    "RosHpcClustersProps",
    "RosImages",
    "RosImagesProps",
    "RosInstances",
    "RosInstancesProps",
    "RosKeyPairs",
    "RosKeyPairsProps",
    "RosManagedInstances",
    "RosManagedInstancesProps",
    "RosNetworkInterfaces",
    "RosNetworkInterfacesProps",
    "RosRecommendInstanceTypes",
    "RosRecommendInstanceTypesProps",
    "RosSecurityGroups",
    "RosSecurityGroupsProps",
    "RosSnapshots",
    "RosSnapshotsProps",
    "RosZones",
    "RosZonesProps",
    "SecurityGroups",
    "SecurityGroupsProps",
    "Snapshots",
    "SnapshotsProps",
    "Zones",
    "ZonesProps",
]

publication.publish()

def _typecheckingstub__31376388672954c1495278d54446a1ffd15fd73d835b10d995acb0959c9ca4e6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ActivationsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7abe09caf51fa6f80e4afb5b6eb55f51472470d3db2e342d89c6148102575f72(
    *,
    activation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__908857bd5675774ff3bd1e6d66c3cd10506d66851fc42893f61ede8ba6068960(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AutoSnapshotPoliciesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee2683b0bf16ae85b4c77944198a1dc8ed7ee0fe54bd88b5c21b28ec13439e95(
    *,
    auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosAutoSnapshotPolicies.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e63e11ecf449f3146a5217acd4629215d351bc94fef7953df9ee6e7155193fb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[CommandsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16781640a94ab80dbc90c967553e81a258abcf397588a24c0c6aa4ad48f323dd(
    *,
    command_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d710d3b338bd48e29e003a61c082b3849ef02ba003e0efa8245afbd8ad8e403b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DedicatedHostClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8eb59d528eaaba02b6be3dfed8a801ae4667ce3590bd10ebc333fdd58ff97ac8(
    *,
    dedicated_host_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7bf0e69e6179e23a4006a4ba89a40fea182360e7373acd991ed64a8b313422f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DedicatedHostsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42aedbd897333ea921c3b701e1e5b4fdb8e93561f8d4e5e906ea88b0307b3405(
    *,
    dedicated_host_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    dedicated_host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDedicatedHosts.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbfb1dee32b5f695dea96519a1da4e1f18971d4d19c3016b5b0b67f26aaea9b1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DeploymentSetsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69c2189165d9fb73c8e00d47b4923b97101b3615decd570a4b37b74e20639d9f(
    *,
    deployment_set_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deployment_set_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cdad2dda84d247a4c81ad3929abb9ec99bc7a7d6ef0446185d84880653928ff(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DiskCategoriesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e6ceca3f6e7fd62c645607a3925f300680f7fa211e345b5dbef62c9414a0e7a(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ff8b3563605f065464a02b063559c9772b22f3f9f977000ebb39201c184e1a4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DisksProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__405a0b24c0b56eab2251c909a1e196fca54da9c70c21cb8b8017ef7ac2ce8626(
    *,
    additional_attributes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delete_auto_snapshot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    disk_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_automated_snapshot_policy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auto_snapshot: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_shared: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosDisks.FiltersProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_attach: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    portable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDisks.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1ce18583faeb3b17e36307e177e9b619dbdc790910b508e75907a4b90252169(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[HpcClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b23db95b830a8b4a58deb636cbcfd2a6ab064c097065d05ad60eb737c9539fae(
    *,
    hpc_cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95c0ee889f09b9a0d1b741cd30531124bdb64cf1878e942e89fd94a7b7446f8b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ImagesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bfd606490ecb01e90d52e73dc04c404d3fffa1912cef23fb3ff20f15537d5d3(
    *,
    action_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_support_cloudinit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_support_io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosImages.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e5ee8460bdf611d88294b6abff4ce76b285f17f76e14f3c9b84577767cfb499(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d92b9c207c50719bfc90e9feb3540e1bb69044a030ab5043d02add5f6cf1974c(
    *,
    additional_attributes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    eip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosInstances.FiltersProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    hpc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inner_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_address: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    public_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    rdma_ip_addresses: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d2eeb5c8a28f35501519807f7abffef3eca20a4840bd759933fd7cfc89202db(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[KeyPairsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aed80b0415c11b70df96c167bc02a35a69800d11e5ebe399bdc9f8d5e9013bd0(
    *,
    key_pair_finger_print: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosKeyPairs.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d297c69410689d5b855802321758d1c01ef06d58482cb15fe57b732b5a6a7614(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ManagedInstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bda8b4e751b830c3a5b69003316d1f31849858b61756bfb86e89f0d307b96513(
    *,
    activation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosManagedInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7719a1b69ceb9a8d58bd40b179721ba35e0403703d0142ee81a650af520b8b7a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[NetworkInterfacesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70b4fecf3ddb0a58d8c2deb4de12a6c78dc59d26b43098871216ba417e78722b(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    network_interface_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    network_interface_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    primary_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_managed: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosNetworkInterfaces.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4fc01eec37570d0e1dfa773f232cb92a083124031d3be1c8d0347c9e2b3dc8a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[RecommendInstanceTypesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db4fb0fb5a88dfb08101702b2739658572e64bfc37862992938c201b49548c6d(
    *,
    cores: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_family_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type_families: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_price: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2c86c58d299418973300c7010e5aa0891e87cee7a2a33465eb20e4b62a36ab2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosActivationsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d247f70e27f1c467f8f5b1a9dd282d611125b06f981cf5e0cb877cadc1fb11d4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfccbd5a213e893d3822f6158e0fb51f64e1462f0582690c78f8ac2d7a276c82(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92a930d3966bb539ca29c54b634b490164a990daf6c55a97ec581d581fade292(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5bf03dcc6ec165c089d00dd46afcf5920ba7324a49d4f2ab0518d90f08acf56(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a8c7f35406abe7472cac4c1c677b9699813f988cdfec434a947e12ec8a858c0(
    *,
    activation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56dcc66cd36999c73a7821b734dbe09be718008ed1aca95c04790ba055e3b17e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAutoSnapshotPoliciesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33ac32cd0d8d63dbc73c2a86141a5cfb27cc919b74ca54fb86314aa24c50c193(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3df4690426aa9a8f0327aa773e24fcd8d90c2e65a188c8b412f80b5940401628(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__258cfcb8cad240aa749e1cf2a57b7849806a68936c7b9be9a326e5ddba2fc2d6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8595f6e597c98cceb749daf567c5fcdc3c90b215f0747a12b708efd07ec5cb34(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc0e3f6daf84c89f1bc4775043c500eaaf104880efb33f45478e822f560490b4(
    value: typing.Optional[typing.List[RosAutoSnapshotPolicies.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba587badbdc402188f9be24af2ea08fbb474bfdcf6f8f1bbd2e278f0570dc201(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9952456f808e92ba17221952e3ff682c890e366c52eb5ac9b04f0cc35bc80ab(
    *,
    auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosAutoSnapshotPolicies.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a21aa5074269840b0aa224401ddd0bfc12795308399bd2c688a113b2e0034379(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCommandsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4366f975d8898040f6a699d1c88293e24574f668cbc08e6c230d0ecab6c1e3c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89bbdc2e479bf0f48ce55ad416831cda4e637ada1669ffaaa32bcd8c0f75f376(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f403245d52ec4eddb48f3e28e636156e32447fff8756c2f0b84529d2ee8cc557(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47801e78fab1d39c9d7865f80dde7a02af4746c123a96fbafa98e8afeeaf6277(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f0730028b327d59966d6448cd93b172029fc55f02873dd520a38930efaaac64(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29836d179229ba5cfdcf8cd80a51bb28e7816bf417ababfc045073ebd1bac44e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b9be02587a6611fc32ae3bf077816f9bed9ecedc0ad0d48acbc05164d136d75(
    *,
    command_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c210c9fe0e20f55472b55cde6790b51ad31eb8657ec60c5521d1c5f83eacc75(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDedicatedHostClustersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__522a6922a41a11c94981cca47c5286bc903952512898d9857c5641eb8f004818(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73ce0d92a9473f2128bb11ba482c4d10945c8f9eb2009cbc3199467121600066(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fd1c4768fc17e83bc6a88d89024a045ca26963aa06d75ff576496d99c3b92c5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__854eb5902bbd4c484f52a906906da39ed65b52d2acf5ef22c6c88da5146bbcba(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e246a7d7adbd80e38d7218dd6e49557c61e5a057a9f7efe9196601af5bde7d1a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0f0fbaca1dae45ad95e70a36b652dd2c09908ed8573567d2a936d8732a401bc(
    *,
    dedicated_host_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deb1dd34923cc05853740f31fd8dd071ef149142512304f024bbc7a0017749b6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDedicatedHostsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ca0e9958ea28191a5836c2c59dfc3d47a6d963246ac8b1928ce9311f4bcf8dd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74abcc3ceceb5306ed6a6bac0386112f8cde84b7d8ca8e21b9533ccbe36d795c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32ef3d8a103a5fc383b58a11e12f4a6c32e9179a5ac5412d24e644749c51e4bd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39d0d3fc5691e184b11fff8fcde67b03fafdd96b75a6dd3b205f7f77f5996679(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b62ed58ae1e6aab2289d84a33d08f4d7feeecad873eb7104f308f6e5d3f6a5a4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e79b3283edaf367d9d85cc77137e6e584cab682cbaf705b96d204f286240ea3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa181b98747552e8df3a96aa828645546d6726fc86bbcb20bad0f2847781ffd6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__453eeccd96c0925726f91f284f56448316667d9d05e522ad5d18b3d50c9ff952(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__147d778942af53af8173fa10bdf18f5d79ca678d08e8866dd71892a7b05a63c4(
    value: typing.Optional[typing.List[RosDedicatedHosts.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1e63906057ec533c8562bac6e84be643df9b90e4aac50c137fbd9adc8566709(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1b8cd314735fdd38d4741267cce5135fceeef1fed04e0d090b2052d893131e5(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3a303f5fb66f00dc07ad51ad4f7a0dd6ef36558b68afa2aaceb2ca6e8592d0d(
    *,
    dedicated_host_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    dedicated_host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDedicatedHosts.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f558ef90bdae66fd1adf720f362fcc81e6d15660b6385c68997b9096eae93d29(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDeploymentSetsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a3a9722b731b9d3597010321eb05c40e16782c02b411665f948fa9efc284c65(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ad29325e56fa254dcc3f46fe329a8fc74d8994bbdc0559322ecb2e6edc0b2b0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce00b413eab7ff31e590977aba223ad29f2352ebb4562e68bf86b8957ea1f832(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be0a467e78ad772b9ccb7a913e24e21138e14aab90277ed7a10bbe61474194c3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf7c6b5871801f321f9043ce73c10d82796c5928412e0fd61a67ef3bec412d12(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f1786d48be1e02273896a05377508676e526d98f33d0966f393684c9bfafac5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e97d93e25746eae17faa808e29e252602e71406b27553cf6cdcbfa7795a1f961(
    *,
    deployment_set_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deployment_set_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__454870626472f70d71644c82720a629d668c258b76fcd3c61bdde11ba4922fc0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDiskCategoriesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3f6dca5a73a71cf7379d982cab0c11c1ead52d619a38340536d81f72c3cacd6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76de3f25201fb1c318c650531767d70705af56a5b5cf126379b503ae284d7223(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cf38812ece5c29e8fae1f4fef5abc48bc7e000388da30d03f063638c71f2aaa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01491cdae1b4abf0083eaff19fe9425a97d87eb487af0fa35cdbecea9b224b06(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bf3fe22de785324d4afd0eb704d198e517c032cf786e99582324e2861adb8c8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98838b9b7fb1cf0910e86db6f88c3310e13ef2dc041bbf179ba030b06d82e05a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bffe237ca80240daa85399af62eff9ea96eda3f708ad2a5ccabd88543cb7efa5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dab124e7d345de29de2f60d593a4b92f9b9b197748bd33dea13eb75bc1e0d5ff(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a07e6fa93d85f2e0afef1c41e71da8d8644a0467aa5a3fb2b320424743151ee(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDisksProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c315f191d16009723f7d6ec76c657cb8f948394005f683e348d4f35cceaa903(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3131d0a8b71fb0d8ac209547cb4f530859ecfd83be5b1fc1eb7ac058db27dc1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5470af949a0dc131551f6fadc041e801afe79dda65b01ebc7c8b6f9636b2e15(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bca3ddb3b4c06cdca1d78f93510fc7b9c61b22c235f2e5865ec22d5a060779f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a27a713baf952c4dfbbb1c97c044cb74bcbf202f676a8baf0a54a7afbf54b821(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e9a0733002252741da1f0e5180d3a610c9063a885a076fac9d91f6d36e83819(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c6ee20689ffd43e0deadb684ba484dc4ce873e44507dd15a597d2e85289486d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d49383861db41984ce01adad7a0719fe6c871442f324bbfa62b2aae9a9a8255(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4eca7099c70648d409a258cd95bd72e407ace9d0ccb9fc5014c73bf8c51a984f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4a2ba4bcefffe43b8b889a647e85b6c35cd685e72d21b415794953126b67cf6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77f95ed4fb49ee437b9f6de58efcc7bdb271b29f70df06c4fe29480701755ef2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d6220f8d25b3af1552bf0228b2b29b8a7314305b5c92ea0685b9841fd708f50(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99e632d2f68cc5126158f0c24b8f2e6c1bc1ebbc53ff707070583a7146937cd8(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55acf24758d19297c0919fced522d2950c2c069f9ce937e90c365a40d0bd68ff(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a0f9ab766d234e4eacc745c488cfce9a1ab3d236961c114613c51590600256c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f010503a1246077575c3a8ad30ae44435b6b6908a7c7dbaee04f4598d61f763(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosDisks.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e77cd264464c971c047b1d1432b8ee7a5d7c9877bbd4f47eda8ffaac967769b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aff382598cb61d89338587e2fd073aecea283b48b876572da8530b9d946a2c3e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43283b6bd72de3bc21cc87c054ae62344f81bde9e5a95d770d066ff5cf791fb7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c02087c37b1e326e63043b76b45754bf43708fb817de2e5479a96a9cf100968(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb71dc9742a58dd52f8266294d3eb68df4696860d615715cc123b4bc1fd0e7b6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fda83b2c41605da5b8040d2e75ebbd6aaae6c9c98c9d0b1c573e9b324b643b2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f716ae25971ae78acff42921d5df1a811427df305d5e74792c233b0fa106fae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83ab81c1cb4de606fbbebddce214b3845f4c9b520b164e647a6b03b64e4ed6d5(
    value: typing.Optional[typing.List[RosDisks.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fbb823cbf96a1dd72bee7f0f1ba620eaa704eeced4cd9bc6e37886ac1ad6ab3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__735261eeca2fdd6c0aa8a98d6d9999bd4540b5217cf0879f4c536075bac3f7b7(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__205c0966de39fab894de75ad1cad4f55e59f2d1149697b6e7656b8b3cf193c3c(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7286faa8aad9c77f22ac38be1546c99e3aa3ad6ba3b1bc286c11f91ca3a7446(
    *,
    additional_attributes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delete_auto_snapshot: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delete_with_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    disk_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_automated_snapshot_policy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_auto_snapshot: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_shared: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosDisks.FiltersProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_attach: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    portable: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDisks.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c334bbcf5e8ab46e7152d3291afd1b5818c57f805e1cbf9cc85f9f15aa559b26(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHpcClustersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcb8946164915be43e78864260a1c03c76b2db36f180f8bf34b885a2be491c96(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc6bffc6d87c5ed6c51e77698a3a4db918b22d075c868e45fcb40d38c509cf69(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4683ff7055c5927f8d4e904d36519eb832f6c7bf01cb35596725a4ce0177213a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56ebb3f3e5b2c742011018567da30ebec36725b074396822b0d72e2c27a7a5f7(
    *,
    hpc_cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bad30a47de0a0df2c1694ba43b1a5f27c3538dc4669c4b58b4b9e446b6adba5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImagesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc3374141e8d2ea6a6547141e9e41011f9251d1caaefa8cc995a072bb338c0c6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__498f97359df0eb2f08d51ba54d50069e31a12c0af4a4aa904f685690f850e566(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab6366577e8d59c2058d512bc8668277f3e6209df2073288be1a2c971a6466f3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a46e8978522c02d5ae5cccce63ac2920475411d8ac4206576eeb2f7804d6bdff(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed390372324e13e77b6151fe84a23d1cbfb9fcd18967326e567123990b607159(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa189d6c4b3f190d7d52e8a68700c68b571fa238c845a6a9ade5121fed3db76b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__393ffd5b14aa37dfbcf0feb0de8b882599ef4c9f0f5a1d3d937c3c76ca484563(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0afc6df7431490acdabeae366edc891b64762648e5459818524d7978768ab88f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__197fc129151319ca277aed848ea50dbb9817f5cf874e858b7ff3b13c3f0b5afa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b5ffd9335471837ded6d4b158f8bfcec67cdac7727f0d69902f1c6277ee36a7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__059fc5c63e2889a249f0e1f32da175144e56fa2ba86978c4c9b2c6eee0b960c4(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ef5bee5659c3952c2efea03be3847d681fa66f9ddfbdd6f6c456e416766901d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7365470e88e25b8fdb540155f3427e9f1cf0b0cdf64ac232e676230b23e6949a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b207f49ae390bf2ac89a2d63545909bbbd5feb14f2fa97d8a744956102e860e0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca26419c736620f5b14399ad829a931a180ec20bb73d515b7c31ff098a95ff90(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5aae7a6ca194612dfc3d7ad3890418ca1fea0cc0c0deb18704e7d8ce794cf9d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8518f1c88421cb9e47ca413609f5951f265c2a01de832b69823a5a61dc38220(
    value: typing.Optional[typing.List[RosImages.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6db0395974efc487cb211aa7a8fc568490941790426b62cf321e5e80464f1e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1bb4ef159ba79e802c04c2887d806ab961d4b912a555424f558e05f13b86a684(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e4575806c14a2784397894dd723c2741e5d18fbb1a691e8ce68df8ddff86aaa(
    *,
    action_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_owner_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_support_cloudinit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_support_io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosImages.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa00f4df7c29694ae7d69805e1984b0f7db9f8194fdbfe5392201ed62510da67(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4c0e1a5169353b817569cd206297519a4ce44d32ccde4fccab06fd2f889b2ae(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__145e194640e3aff478e1e0f4c43376531ebb893adeca830a71cf8548d0876fd8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f46a4b99f8a048171750d216b3ec46e938fb2a7ca9bc59a68bffe1405e2757b5(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5566bfe8bc06ffe53dfe529ae57c46811bcb842524dc8f1639486bcd6d3a36a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27bea71c84b40e4e8f0cddb591d88e5f225d55558acfd781cde45d99290cc75a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosInstances.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecf6632e5b365fb61f821c322ca09b9248c965e911286155ecc5b40c769584cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09889a76f3ef8cf41e8f70341f5f3fd9aa320db552b54c4b07be7c6035e3cdca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1bdfedc4a3ebdc74a5c991eb5f055a0ca1830d5799a66fb80546def23da14400(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07be3cf48e9ad4d2ddf9d77ba9dae795ec81c847f5a1d1c6ddf51a753522b72d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__171301053d5d1674680e24a3b00ec2a474d8e591515869f4753471e02cbac0ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2229da82fc5f81a8890f24654ee2f5768194dfef94ca88a34b510e7d743b1a56(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__602b0751187c6dab6e64b9441b013c2627dd941da592809b9354f18aaa23171c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6be5463feea6d5594d9145f221b5142cf209a15abeac5b9922c1bfcce3bb0947(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5042d69ec662197816c6f1cb5d4a6a00c22b7134f2ecf87957c7c5254feab939(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14d733df3fd5d93b66a360599a0dcd81c718c4767f647dd616c60f2f8ea116cf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41f5b75d457c7bb55a76493ab8d2d6ed8fc0297f52eaa0ab76129c74f1630b2c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__faf6de39c1bbbd5671a7876ce6ccba7197a1f138c40cdca0583df82a28fdb396(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5d9949eb80faa6fe1bf4049f8d8632e8bf934479a6d84daefa5cf22d3d3f537(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2644329741ed657cf6bb773951b786b5a4a80bfd5bcf927a9d668bba48fded92(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3211d7c3b2ac0b4311cd61931c82f61b60a92bd3a0e13e71f4f698d60572b6c6(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cd6f3e0a843d1e36c341ea6eeac9a6c6dca5f2746ec5301e3facbb8d398722d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__122565c814041b1064d7aa34be11ad8a5bbb4914b9cf1f6e698e8adb87d47530(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0b76f2c001103f024dba63fabc7b3c021d4630e06a4223ea03ae7b075df2cf7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9ba578efe2366b517d69bf9a40435e619ebe31faa2627de088348d39a3839d8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64bd0d5b3766f057737b00b9840edb4091fc034f94c116973b964eb593b47cb4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b0e68b3260f382efceb3c43f85bb12b087631225ba17741e92ee7c6dfef0ab9(
    value: typing.Optional[typing.List[RosInstances.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82d94231a131d475b308605485d28096e18cdba5a0df1c7af96334b5b562d38a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7c7372f385191da376f8705e313a6ee3e31dd690874cccf69cabc7dd7518d34(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22cb7d8c53dd9c217dbc4477ca3ad80ad579d46d977d797ce5ae38d30c7f875a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5bc7ef45adf608661b294d98bccef658bf53276337e90e33deba3f08f80352e(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1079436c67be1438843853d8c9b44db4d14ae093c797fc135633869bb25d5149(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67bdcc9068ec0e47bc3b55e53cc2eabd11f989712ec34a0582cd58b086c317c3(
    *,
    additional_attributes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    eip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosInstances.FiltersProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    hpc_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inner_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type_family: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_optimized: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_address: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    public_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    rdma_ip_addresses: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d639fee5f59b0c83d53fd880165618e47190d9fd18b32511038727b3ed79307(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosKeyPairsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be32db84c7788155fa9835955da107c047714a90a17eaef1b91d8c17a6c7c104(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__558d2126dad482952f1fa64bff86167042d36fe10c61a1159e2431eb59598d33(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94f3705aff497aaf82d0c8f9b8e3791dfb631e4f15ea84a8d8aa8d51d5856829(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23135ef8a95db0f090cc661e6854150b1c1ffe3dca4d078e912f4f8a7b1a7037(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a9f9ff6b02d9fc04978a9035582962d7e96c282af07596d9bf5678ce06ab3ae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__603b82d15d766a4045c0b01dd00ffe1f00189493ed003d751a3fc92de474bacc(
    value: typing.Optional[typing.List[RosKeyPairs.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c943cf6daeb7cfe7b8ee00ccfd51696c3a3f298bbebed82ffdcbe580c53fb31d(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e426a6f26cef02e849729a67db7c7d1b56e40c3f25f4bd34385b7db2a5a485e0(
    *,
    key_pair_finger_print: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosKeyPairs.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4e6a50a79e781f8fa3e49ccc51de24c62d52e266d6f5d501ec4ff2a8fb84856(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosManagedInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35096347b2fc1ffb9bacba96972a0695581f7defbe60550a1753addfcf0f8632(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2693f69e78e4487c2f9d8229b3f5c26ec89e75164bd3a3ced66118d1ed1a7fb9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70d8deab3cd4b33202f88581b60f6cbb3479adcb5917e0f5c23de4685891670e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__713ac69429741ed410d021e2223d5f720c6d995968e49ca8abdd0c086cffbfdc(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18aac6734afc63cbd4f824878ec82b504aa42247a9cdde3a0d2d5bab75efc409(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47c56afc22af6fb75c386d0c64b47d1f11dac5c95f3c81f9a91a1454340a087f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aef4e957ab2913e967d538301cfc0f429f08248f940ea45e43d942d2d35d80db(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25fe687772d52d5500df269e7954c686a7650ff3170332c7713ab74aa665ea03(
    value: typing.Optional[typing.List[RosManagedInstances.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46e18d94f936c4d648fbffcb04b1fc3da733a0d2e113cdc485a21e2328a2f1a8(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4cc7889476894021b75c47a3ad189417408f448673fa9f91f949608702e3071(
    *,
    activation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosManagedInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0070218f1cf7d9f19aad4084cb0aa24369ba51184c48251ba089b62ca26507f4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNetworkInterfacesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53bdcf4f39d559918f1294fc10325f491802a0655cd0e1b064bb26e63aad39f8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b95d6eeb42af81f0a51b7620b0eafd92ccfd03076c5794a3882c8e4c7433cf23(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de40296aaa734b987cddb5dc4b2564b5741121b440179ba435514061ad4aa338(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4d03678a164f7699c33cd9f0f39dd0a45335e1f31cc451238f33696a5d8a3df(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92349c00936f6ab7ed8ba9dbcecfaf5042e79397193d24aa1a3fd6945d5a2ebd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e6c851bd1e8a8173c29f2ef9a6918c1cccc27473377991657f1457877d732b7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f986972e81de7e3e29a63225585337af0dad1d0cde24cab2d4479d7debd83b29(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d3f02d69cacbd52a490e6fa89615f7a38fff937904f55160ccf0f167b2fd048(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f389f5b73d0967e0bac1de6fc7f724f04d68215d5b9b68a546e5eab62b27e1f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cac98903daea90f8ba94f957bb49c13bf1d35cfcfc39107efac640f0ff2e463e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f75b63cd223ddb8fba47b91de0cda0852ec9ad97daeb4edc8156d5a3816d77f6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55e4059f9495135fa7d46da24a750c7a953b9d79450441374eb8af939046e93d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f725bb576930077101862810c9a44b9454bf78204f957f68de705e964de8cc8(
    value: typing.Optional[typing.List[RosNetworkInterfaces.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd7a43c0fdac76af7c7b0cabf9fd6114eaf68506dc901e625c2e30db68f68275(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db7ac636698068e5127e9b49d9973afeea23ec3eb9dcfacf930e35dedf2a7d0b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25e270c4ff1d58a7e6f53a3636bcb9d9529b6b07231cc6eceedf559667e30bf4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba0294ba16d3d5799ae57c221b4a13b6c912e2839a644f8289bfdf101b91d706(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__219b4e36f11c75e5840bd9178bcad7d8b9f6bf9a7824075b75374529bd6bc028(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    network_interface_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    network_interface_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    primary_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_managed: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosNetworkInterfaces.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09c4a9ef76f3e9726c1ec1b53cdf62336eea0d173ab6b19bc25a67ee11853db1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRecommendInstanceTypesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a16b87fa1058be92d84a9fcb40b8fa0215514c4ce42adcb68846403f17849237(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe7a0b12eedea67da713c1c9e41de80fba7c16e59ce4d0b61295e07609b20e40(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__313d9f159cd7bb03428ffb89dbb82fcef4d51f54519e21fae767c481c897dc4c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1642af3aadddad26048bd9e079078ac30eab6552c48f86b6302a6dd5f0c166e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25a1e3111d47aa4d5f59b3f9164a518e17d30c0f8105427678c441ef6b9553f7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__852db3a8f9352dcb51f000e4a235834a3549d92602b0f340ccd3b0d4e0c67c88(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b4bc76a21729e565d78ad45853e048d7193abb5e09629c1fcd7cfd79bbd5bc8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1656c4e0f0b52c36f214e58d6a8e79e3f71dea04087579238260ba0141231a3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fe5635d8275ee3a693d14353fe2e280900f0b07f80503c77015441e8681b074(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9522b995bd24e9d41bcbca875689bec7422333f368adbd8ad37f11e742838870(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a99d1101f5c6f6cfac8c789f02502ea131b3c6f6521d2e087c3888775523e261(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__692b836ff410a00d4d7e977733c5458597a790ffb10e5ed0aa53fa072636879f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7792811dfcd88ccf1b9abd6c121bcc148727cda91e2c90ba58bda86c3348d56f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e6c03e37920ee8283fbd4789f406745bb802ff7beeef41e945043c7f5c800ba(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__814161cf1f37442c1eabedf86bf375d9d838ff17305cab0eb6d17d3990a55a7e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e8b13752e1aff9fd10149969ca3fd1e5a87d7f9ffec4582302323259ba2191f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5fc76a29a310d774a5fa6cdaca0db28c039d9cc793f6d0d24eefb68e9e25170(
    *,
    cores: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_family_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type_families: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_price: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_match_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54a86034d76be749aa357599c81aeb0fb50abb7cad74e7d44343ac2f4cb38491(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSecurityGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d28b6bc4f51771836bfe12cad498d2c9aaf0da4551411c981c44bb9db93eb127(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47d6630889df24fdf2cc88a37f8094b52ed5e0fb51997cb64ea0d1661fba0084(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8beff39d3557f1724ac33361b4d14fe4cfa56a349c205a8f403b84f0c7e898d7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dced35ea248c6ca0247b182a156b8898ecc794c0400674a0770a2980bbe84d25(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6321ad7ac3150a702cb25918cdfa6fd9d7fe9e5bb71087bb0f4a6937be2628c0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e696fc2157300620da22e8c802ff42a566e6884cbbf26c92ccfb8c55b42904e9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70f533011b0b62bc509ef8ca95fd56438562a51fe4732eb130bc716136991e88(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe76356c3580bc76014e6041c5a24a6c3e0de4d4c750b5f9bbec781f91721f0d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__323e4c76c00e203ee00542bfb552233405b5208db7ee2eb9bbe88c3452c0b275(
    value: typing.Optional[typing.List[RosSecurityGroups.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69d5ce806ef6d12f6c6b6e12584c54859a555fbfa450c3c1140025bfef7adcf4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__390534bbc7b2dbdc511f15af234be724a576bf9340eadd172aae2a1222970884(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96911b9aa44483832a80281497af69e60348bca35cc2a7c399a5fbfbbbf4873f(
    *,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosSecurityGroups.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ed351980ab3a34ad5b7b16dfb66b48ed93eba38afc1d2d7b302f7e72d993aa2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSnapshotsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55901316718c1943fd7dda05e5cf2e553c274c36564dcfb91703866197f2324e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c7b04229cdab995eae96619343e1451e7c0118e14a291bb5fb1a96d31d18683(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__623f907f72600cb86f7616f7c01d3814fefac2a25030833786a3b7c83931da1b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__245e3d1b76dc38eadc8d749e22837841b0cadf7b6d6784d95e6443727bec485b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88118bb0b423fed9878e5eef25c10c18b38aae3a74bdf450fe6aac8c88557f41(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ceba801f175a0fdc3a328b22c75cba50ea408839ed5c8c08efe4d5da5384951(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosSnapshots.FiltersProperty, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96c4570db40887697a7ae2412eef62d84ddfcdcfb199e617f795c291ec45a01c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4c5015c17258378b459a90591f4b72aad98f616dd88cc9efb179885f3d03aed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1b66f0ff053143a560a4e98b2028571d6cb8efd67b8d56e561d4e405098ab29(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc181c0f74edec0c5ba871d8417dfc3d6aa6c389aaf16ac0fd7e5a66542af5e9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d0ca12831b6e261696c985ac10efcb971f422361ebd2dc55ecc6a1a5caa2afb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9be2e7e9c58cf92a605e252e9bbba3b4000cbdbfcf9c06bbdf7834cfadf8f9d6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f337fa4f6c5308541a62d2c46263cec1172da6b0f584c2f39c17e3db21269e46(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__faf6b6d6512926be702ab18a588eaa05a18840922e820e4d34ed14444b63f92f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02673d5a3a486ffbe04cd79e1fe2732094470d0a865d1ec4155c3a359fa1fe8e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c253a2d12154b9cab47244f6eebb0cc9c23a2f756a1c797d213383a7b692be7a(
    value: typing.Optional[typing.List[RosSnapshots.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddc51ca9bc3e7d8675794676c6e1de68ed0dcd47823859aac0582279775d78f9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84d2c671a0e367e4e4ea44679a568e7d6dd982dc0acf948e5445df986a26353f(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b002ff12fcf0aad61690e4221f5b7185229bf4a01bd15400f1fdae61b1cdbab(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__355a77131015a68f09372bda1f6f26589313b4893aae3cefe6aa2a9c24a111d3(
    *,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosSnapshots.FiltersProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    snapshot_link_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosSnapshots.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79d9f53cf0fcfdf30de7a34cb3439b78b91036190e425d0f983a2994d6fe982e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosZonesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a12820e3cb755f2d8d2b0c0c564c50fef58057dee607395823ca666102f0e5cf(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31f2a17478c21ba57a45dd36b1c105ad7565ff0195aae1a5d01c09395f489875(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6e9d18c494b15b6c857d54d9c3d4cf8c39ca116b6b52174787678702f2cfe47(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8979535f3d548a07846d597bff6db169429e0315e214895700ed26b291258a7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f3aacdefd34df177ac072755cad67ab92c3d68e2152c16defbe2061f4450a00(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c99c34a69bf64bb1de58581a9b29179915ca1ca9d6eb757c1ccb9600ef19eea(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ab93d920807d424b4d2d50b8dcd22c293bde7a4f7b11e4c3224762a4f520152(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5c6f96478c5de4db027e39ece31ac466118dfc08c2552534dcc0d68dbd8498c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01864a3e5a2342f06afce5ca2b711a6c38a162927d5a139f8df4b8b4d702634c(
    *,
    data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b75b704cd3eeb1768a38cc5ff506c28ab91a63cdf7ad5f2234899bd9ab2c9704(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[SecurityGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f64418baf2d9b021ce52fbb754171c24c475e02c6aea26334e2b76664c385a55(
    *,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    security_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosSecurityGroups.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11b4930452e392dda5e68b6965e0558b65430ffd9dffcd5f39502f5df6e5367a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[SnapshotsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bacd63ddd03682469758cc5917983595c7d8db43ed4baeac04e9bd2c0f8cd6be(
    *,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosSnapshots.FiltersProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    snapshot_link_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snapshot_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosSnapshots.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8dfa46934f4bd43c3d0183487fddac9a3e4fef9e938182c6e150094df2445c4d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ZonesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__733eca5a80866d16509e91d655926228a402c061e05480d7cf6f74520552ce03(
    *,
    data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_optimized: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
