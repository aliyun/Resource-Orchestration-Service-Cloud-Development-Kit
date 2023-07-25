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


class Nodes(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.datasource.Nodes",
):
    '''A ROS resource type:  ``DATASOURCE::EHPC::Nodes``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NodesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::EHPC::Nodes``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48ff6955429c29a7646e904ff4d7e22dacf8755cb68415864f77880721cc4ac2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNodeIds")
    def attr_node_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NodeIds: The list of node IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Nodes: The list of nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.datasource.NodesProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "host_name": "hostName",
        "host_name_prefix": "hostNamePrefix",
        "host_name_suffix": "hostNameSuffix",
        "private_ip_address": "privateIpAddress",
        "role": "role",
    },
)
class NodesProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_name_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_name_suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::EHPC::Nodes``.

        :param cluster_id: Property clusterId: The ID of the cluster.
        :param host_name: Property hostName: The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
        :param host_name_prefix: Property hostNamePrefix: The prefix of the hostname. You can query nodes that have a specified prefix.
        :param host_name_suffix: Property hostNameSuffix: The suffix of the hostname. You can query nodes that have a specified suffix.
        :param private_ip_address: Property privateIpAddress: The private IP address of the node.
        :param role: Property role: The type of the node. Valid values: Manager: management node Login: logon node Compute: compute node
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b07a16c0c4f53143497be43a17457c6d621465af03a69449d4a67ee8e2ce159)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument host_name_prefix", value=host_name_prefix, expected_type=type_hints["host_name_prefix"])
            check_type(argname="argument host_name_suffix", value=host_name_suffix, expected_type=type_hints["host_name_suffix"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument role", value=role, expected_type=type_hints["role"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if host_name is not None:
            self._values["host_name"] = host_name
        if host_name_prefix is not None:
            self._values["host_name_prefix"] = host_name_prefix
        if host_name_suffix is not None:
            self._values["host_name_suffix"] = host_name_suffix
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if role is not None:
            self._values["role"] = role

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: The ID of the cluster.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostName: The name of the node.

        You can perform a fuzzy search. MySQL regular expressions are supported.
        '''
        result = self._values.get("host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_name_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostNamePrefix: The prefix of the hostname.

        You can query nodes that have a specified prefix.
        '''
        result = self._values.get("host_name_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_name_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostNameSuffix: The suffix of the hostname.

        You can query nodes that have a specified suffix.
        '''
        result = self._values.get("host_name_suffix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateIpAddress: The private IP address of the node.'''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property role: The type of the node.

        Valid values:
        Manager: management node
        Login: logon node
        Compute: compute node
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NodesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNodes(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ehpc.datasource.RosNodes",
):
    '''A ROS template type:  ``DATASOURCE::EHPC::Nodes``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNodesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::EHPC::Nodes``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__beff25c0d464f8f341e08b881bce4ec7e10d51083b50e2be12d7a75ad7697742)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1bd6b66078a508626179c48a264c98f8fc9966ba245adb991476f927ffbb3104)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeIds")
    def attr_node_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeIds: The list of node IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Nodes: The list of nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e5ebfcfc2f86312b7a40563d193b88d1d4425c41c5455e9a65880563e343ad7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9efbd0e0ce20acf3f4d69b484299b58a0822d796b8f10ab72ff4b89e148d878d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hostName")
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostName: The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostName"))

    @host_name.setter
    def host_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ce7bfe1f1a9b1e7a4b91f42b4a1374888a1b1987db3302cd52f89fdcf49ff83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostName", value)

    @builtins.property
    @jsii.member(jsii_name="hostNamePrefix")
    def host_name_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostNamePrefix: The prefix of the hostname. You can query nodes that have a specified prefix.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostNamePrefix"))

    @host_name_prefix.setter
    def host_name_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b3d167c54c62373a87d52f36cf66721b01fd96c47cdda37b1067710831c0dce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostNamePrefix", value)

    @builtins.property
    @jsii.member(jsii_name="hostNameSuffix")
    def host_name_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostNameSuffix: The suffix of the hostname. You can query nodes that have a specified suffix.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostNameSuffix"))

    @host_name_suffix.setter
    def host_name_suffix(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1de63b3ce20046a2feadef6ecf3bcdf8ab298c5d7950b679decaacb94e0d917a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostNameSuffix", value)

    @builtins.property
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: The private IP address of the node.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23456294f610afc32e9747d842b07b941ba5445a031df0c5f54a5efa0deb8eeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateIpAddress", value)

    @builtins.property
    @jsii.member(jsii_name="role")
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        role: The type of the node. Valid values:
        Manager: management node
        Login: logon node
        Compute: compute node
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "role"))

    @role.setter
    def role(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e134550c11164e0d890174bbe3b83928eb24c27ff716d238f4dd5756819b0fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "role", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ehpc.datasource.RosNodesProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "host_name": "hostName",
        "host_name_prefix": "hostNamePrefix",
        "host_name_suffix": "hostNameSuffix",
        "private_ip_address": "privateIpAddress",
        "role": "role",
    },
)
class RosNodesProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_name_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_name_suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::EHPC::Nodes``.

        :param cluster_id: 
        :param host_name: 
        :param host_name_prefix: 
        :param host_name_suffix: 
        :param private_ip_address: 
        :param role: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1d4e0de16021e7f78c47b39b425e44c88f221c0fa2fe254fd3dc1a04393e3f8)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument host_name_prefix", value=host_name_prefix, expected_type=type_hints["host_name_prefix"])
            check_type(argname="argument host_name_suffix", value=host_name_suffix, expected_type=type_hints["host_name_suffix"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument role", value=role, expected_type=type_hints["role"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
        }
        if host_name is not None:
            self._values["host_name"] = host_name
        if host_name_prefix is not None:
            self._values["host_name_prefix"] = host_name_prefix
        if host_name_suffix is not None:
            self._values["host_name_suffix"] = host_name_suffix
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if role is not None:
            self._values["role"] = role

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the cluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostName: The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
        '''
        result = self._values.get("host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_name_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostNamePrefix: The prefix of the hostname. You can query nodes that have a specified prefix.
        '''
        result = self._values.get("host_name_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_name_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostNameSuffix: The suffix of the hostname. You can query nodes that have a specified suffix.
        '''
        result = self._values.get("host_name_suffix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: The private IP address of the node.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        role: The type of the node. Valid values:
        Manager: management node
        Login: logon node
        Compute: compute node
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNodesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Nodes",
    "NodesProps",
    "RosNodes",
    "RosNodesProps",
]

publication.publish()

def _typecheckingstub__48ff6955429c29a7646e904ff4d7e22dacf8755cb68415864f77880721cc4ac2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[NodesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b07a16c0c4f53143497be43a17457c6d621465af03a69449d4a67ee8e2ce159(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name_suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__beff25c0d464f8f341e08b881bce4ec7e10d51083b50e2be12d7a75ad7697742(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNodesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1bd6b66078a508626179c48a264c98f8fc9966ba245adb991476f927ffbb3104(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e5ebfcfc2f86312b7a40563d193b88d1d4425c41c5455e9a65880563e343ad7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9efbd0e0ce20acf3f4d69b484299b58a0822d796b8f10ab72ff4b89e148d878d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ce7bfe1f1a9b1e7a4b91f42b4a1374888a1b1987db3302cd52f89fdcf49ff83(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b3d167c54c62373a87d52f36cf66721b01fd96c47cdda37b1067710831c0dce(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1de63b3ce20046a2feadef6ecf3bcdf8ab298c5d7950b679decaacb94e0d917a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23456294f610afc32e9747d842b07b941ba5445a031df0c5f54a5efa0deb8eeb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e134550c11164e0d890174bbe3b83928eb24c27ff716d238f4dd5756819b0fa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1d4e0de16021e7f78c47b39b425e44c88f221c0fa2fe254fd3dc1a04393e3f8(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name_suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
