'''
## Aliyun ROS DFS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DFS from '@alicloud/ros-cdk-dfs';
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


class AccessGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.AccessGroup",
):
    '''A ROS resource type:  ``ALIYUN::DFS::AccessGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AccessGroupProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::AccessGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73c052540ab971a2f96cfab5d42147e65139b9aa7d211240c765ce87176f8bc6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessGroupId")
    def attr_access_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccessGroupId: The ID of the access_group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dfs.AccessGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "description": "description",
        "network_type": "networkType",
    },
)
class AccessGroupProps:
    def __init__(
        self,
        *,
        access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::AccessGroup``.

        :param access_group_name: Property accessGroupName: The Name of Access Group. The naming rules are as follows: The value contains 6 to 100 characters. Globally unique and cannot be an empty string.
        :param description: Property description: The description of the access_group. The value contains 0 to 100 characters
        :param network_type: Property networkType: The NetworkType of Access Group. Valid values: VPC.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__558752123512b3cd13e68ab0c6b992b9077f889bc8e59e6cb48ef51dd8e188c7)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if access_group_name is not None:
            self._values["access_group_name"] = access_group_name
        if description is not None:
            self._values["description"] = description
        if network_type is not None:
            self._values["network_type"] = network_type

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessGroupName: The Name of Access Group.

        The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        '''
        result = self._values.get("access_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the access_group.

        The value contains 0 to 100 characters
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkType: The NetworkType of Access Group.

        Valid values: VPC.
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AccessRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.AccessRule",
):
    '''A ROS resource type:  ``ALIYUN::DFS::AccessRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccessRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::AccessRule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0e2a69ecea31b1dadc7561a8b4577530fd01ab3d4c1cbd1e24f1aa249711434)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessRuleId")
    def attr_access_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccessRuleId: The ID of the access_rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessRuleId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dfs.AccessRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_id": "accessGroupId",
        "network_segment": "networkSegment",
        "rw_access_type": "rwAccessType",
        "description": "description",
        "priority": "priority",
    },
)
class AccessRuleProps:
    def __init__(
        self,
        *,
        access_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_segment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rw_access_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::AccessRule``.

        :param access_group_id: Property accessGroupId: The resource ID of Access Group.
        :param network_segment: Property networkSegment: The NetworkSegment of the Access Rule.
        :param rw_access_type: Property rwAccessType: The read/write permission of the authorized object on the file system. Values: RDWR (default) : read and write. RDONLY: read-only
        :param description: Property description: The Description of the Access Rule.
        :param priority: Property priority: The Priority of the Access Rule. Valid values: 1 to 100. NOTE: When multiple rules are matched by the same authorized object, the high-priority rule takes effect. 1 is the highest priority.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47459e079bcb520873145865a6c6510e3e5effe1e0c046cb0fe27d2702bb1acd)
            check_type(argname="argument access_group_id", value=access_group_id, expected_type=type_hints["access_group_id"])
            check_type(argname="argument network_segment", value=network_segment, expected_type=type_hints["network_segment"])
            check_type(argname="argument rw_access_type", value=rw_access_type, expected_type=type_hints["rw_access_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_group_id": access_group_id,
            "network_segment": network_segment,
            "rw_access_type": rw_access_type,
        }
        if description is not None:
            self._values["description"] = description
        if priority is not None:
            self._values["priority"] = priority

    @builtins.property
    def access_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessGroupId: The resource ID of Access Group.'''
        result = self._values.get("access_group_id")
        assert result is not None, "Required property 'access_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_segment(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property networkSegment: The NetworkSegment of the Access Rule.'''
        result = self._values.get("network_segment")
        assert result is not None, "Required property 'network_segment' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rw_access_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property rwAccessType: The read/write permission of the authorized object on the file system.

        Values:
        RDWR (default) : read and write.
        RDONLY: read-only
        '''
        result = self._values.get("rw_access_type")
        assert result is not None, "Required property 'rw_access_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The Description of the Access Rule.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property priority: The Priority of the Access Rule.

        Valid values: 1 to 100.
        NOTE: When multiple rules are matched by the same authorized object,
        the high-priority rule takes effect. 1 is the highest priority.
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class FileSystem(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.FileSystem",
):
    '''A ROS resource type:  ``ALIYUN::DFS::FileSystem``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["FileSystemProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::FileSystem``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f82f0229e516030cf3e97bb063e35ba3705b8e32189df2f38d313a64b29eb4db)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FileSystemId: The ID of the file system.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dfs.FileSystemProps",
    jsii_struct_bases=[],
    name_mapping={
        "protocol_type": "protocolType",
        "space_capacity": "spaceCapacity",
        "storage_type": "storageType",
        "zone_id": "zoneId",
        "data_redundancy_type": "dataRedundancyType",
        "description": "description",
        "file_system_name": "fileSystemName",
        "partition_number": "partitionNumber",
        "provisioned_throughput_in_mi_bps": "provisionedThroughputInMiBps",
        "storage_set_name": "storageSetName",
        "throughput_mode": "throughputMode",
    },
)
class FileSystemProps:
    def __init__(
        self,
        *,
        protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        space_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_system_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        partition_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        provisioned_throughput_in_mi_bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_set_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        throughput_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::FileSystem``.

        :param protocol_type: Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）.
        :param space_capacity: Property spaceCapacity: Capacity of the file system. When the actual data volume reaches the file system capacity, data cannot be written. Unit: GB
        :param storage_type: Property storageType: Type of storage media. Values: STANDARD (default) : standard type. PERFORMANCE: performance type.
        :param zone_id: Property zoneId: zone id.
        :param data_redundancy_type: Property dataRedundancyType: Redundancy mode of the file system. Values: LRS (default) : local redundancy. ZRS: in-city redundancy.
        :param description: Property description: The description of the file system.
        :param file_system_name: Property fileSystemName: Name of the file system. The naming rules are as follows: The value contains 6 to 100 characters. Globally unique and cannot be an empty string. The value can contain letters and digits and underscores (_).
        :param partition_number: Property partitionNumber: The reserved parameters.
        :param provisioned_throughput_in_mi_bps: Property provisionedThroughputInMiBps: Preset handling capacity. Unit: MB/sdata range: 1-5120
        :param storage_set_name: Property storageSetName: The reserved parameters.
        :param throughput_mode: Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d76b5ec882e230aa03b7504be03cd232f8b7d06b67b8815dc293d0b7a3de1a2b)
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument space_capacity", value=space_capacity, expected_type=type_hints["space_capacity"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument data_redundancy_type", value=data_redundancy_type, expected_type=type_hints["data_redundancy_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument file_system_name", value=file_system_name, expected_type=type_hints["file_system_name"])
            check_type(argname="argument partition_number", value=partition_number, expected_type=type_hints["partition_number"])
            check_type(argname="argument provisioned_throughput_in_mi_bps", value=provisioned_throughput_in_mi_bps, expected_type=type_hints["provisioned_throughput_in_mi_bps"])
            check_type(argname="argument storage_set_name", value=storage_set_name, expected_type=type_hints["storage_set_name"])
            check_type(argname="argument throughput_mode", value=throughput_mode, expected_type=type_hints["throughput_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "protocol_type": protocol_type,
            "space_capacity": space_capacity,
            "storage_type": storage_type,
            "zone_id": zone_id,
        }
        if data_redundancy_type is not None:
            self._values["data_redundancy_type"] = data_redundancy_type
        if description is not None:
            self._values["description"] = description
        if file_system_name is not None:
            self._values["file_system_name"] = file_system_name
        if partition_number is not None:
            self._values["partition_number"] = partition_number
        if provisioned_throughput_in_mi_bps is not None:
            self._values["provisioned_throughput_in_mi_bps"] = provisioned_throughput_in_mi_bps
        if storage_set_name is not None:
            self._values["storage_set_name"] = storage_set_name
        if throughput_mode is not None:
            self._values["throughput_mode"] = throughput_mode

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）.'''
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def space_capacity(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property spaceCapacity: Capacity of the file system.

        When the actual data volume reaches the file system capacity, data cannot be written.
        Unit: GB
        '''
        result = self._values.get("space_capacity")
        assert result is not None, "Required property 'space_capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property storageType: Type of storage media.

        Values:
        STANDARD (default) : standard type.
        PERFORMANCE: performance type.
        '''
        result = self._values.get("storage_type")
        assert result is not None, "Required property 'storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: zone id.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataRedundancyType: Redundancy mode of the file system.

        Values:
        LRS (default) : local redundancy.
        ZRS: in-city redundancy.
        '''
        result = self._values.get("data_redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the file system.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_system_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fileSystemName: Name of the file system.

        The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        The value can contain letters and digits and underscores (_).
        '''
        result = self._values.get("file_system_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def partition_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property partitionNumber: The reserved parameters.'''
        result = self._values.get("partition_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def provisioned_throughput_in_mi_bps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property provisionedThroughputInMiBps: Preset handling capacity.

        Unit: MB/sdata range: 1-5120
        '''
        result = self._values.get("provisioned_throughput_in_mi_bps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageSetName: The reserved parameters.'''
        result = self._values.get("storage_set_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def throughput_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.'''
        result = self._values.get("throughput_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FileSystemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MountPoint(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.MountPoint",
):
    '''A ROS resource type:  ``ALIYUN::DFS::MountPoint``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MountPointProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::MountPoint``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f5714e8401bc7635af2b6a57290696dd00389acc1e3a87004849ff0b22103b8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrMountPointId")
    def attr_mount_point_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MountPointId: The ID of the mount point.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMountPointId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dfs.MountPointProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_id": "accessGroupId",
        "file_system_id": "fileSystemId",
        "network_type": "networkType",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "description": "description",
        "status": "status",
    },
)
class MountPointProps:
    def __init__(
        self,
        *,
        access_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::MountPoint``.

        :param access_group_id: Property accessGroupId: The ID of the Access Group.
        :param file_system_id: Property fileSystemId: The ID of the File System.
        :param network_type: Property networkType: The network type of the Mount Point. Valid values: VPC.
        :param vpc_id: Property vpcId: The vpc id.
        :param v_switch_id: Property vSwitchId: The vswitch id.
        :param description: Property description: The description of the Mount Point.
        :param status: Property status: The status of the Mount Point. Valid values: Active, Inactive
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eb9db9a539fb90f40a9e195fff14eef53a8c0adfaf7f05093ad084d5876a2d5)
            check_type(argname="argument access_group_id", value=access_group_id, expected_type=type_hints["access_group_id"])
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_group_id": access_group_id,
            "file_system_id": file_system_id,
            "network_type": network_type,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if description is not None:
            self._values["description"] = description
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def access_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessGroupId: The ID of the Access Group.'''
        result = self._values.get("access_group_id")
        assert result is not None, "Required property 'access_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property fileSystemId: The ID of the File System.'''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property networkType: The network type of the Mount Point.

        Valid values: VPC.
        '''
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The vpc id.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The vswitch id.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the Mount Point.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the Mount Point.

        Valid values: Active, Inactive
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MountPointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.RosAccessGroup",
):
    '''A ROS template type:  ``ALIYUN::DFS::AccessGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::AccessGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27abbbc58e832f3799a7bec627ccf4b98afdf57a2a4c5bc188e3355f47acefc3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fc51f5fb3fb6a8d7df6fbcc91df1840265538028201bee75626d50e21ba49e8b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessGroupId")
    def attr_access_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessGroupId: The ID of the access_group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6fcaac061bd3f6472d6e4b6249dab3a49665867cf1a6b2530fe4f535a0c2ecb4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accessGroupName")
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessGroupName: The Name of Access Group. The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessGroupName"))

    @access_group_name.setter
    def access_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c319cc24d3bc3f6868f50d63fdc99708bfd190eb1a436869e5e739b38ed7f59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the access_group.
        The value contains 0 to 100 characters
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f98db17968a1e4a0bd6d8fe244c542d27fe5d585dd02f5e27f6e223b56d4f99a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: networkType: The NetworkType of Access Group. Valid values: VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c324bc0c1ac484e6788ea37b3610a29a048ce96ffc08ee73e1d70935de55e1ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dfs.RosAccessGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "description": "description",
        "network_type": "networkType",
    },
)
class RosAccessGroupProps:
    def __init__(
        self,
        *,
        access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::AccessGroup``.

        :param access_group_name: 
        :param description: 
        :param network_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a9414a672892cb99b7f4e4e708f03a5557dace9c5b0c5cf5eb7f963c24f2daa)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if access_group_name is not None:
            self._values["access_group_name"] = access_group_name
        if description is not None:
            self._values["description"] = description
        if network_type is not None:
            self._values["network_type"] = network_type

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessGroupName: The Name of Access Group. The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        '''
        result = self._values.get("access_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the access_group.
        The value contains 0 to 100 characters
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: networkType: The NetworkType of Access Group. Valid values: VPC.
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.RosAccessRule",
):
    '''A ROS template type:  ``ALIYUN::DFS::AccessRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::AccessRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__160727bd59c09415c83442966d19ced414e6361dc6b2d06d347c305d69603fe7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ed12f318153c57ec1a8de7372d3fa0065032a35f7e4e183b7db82f42acc1ef51)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessRuleId")
    def attr_access_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessRuleId: The ID of the access_rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessRuleId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessGroupId")
    def access_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupId: The resource ID of Access Group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessGroupId"))

    @access_group_id.setter
    def access_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa1762fbcab76a94e23f8e7e5b273eccc7f294da4d06b0ce3c07592a0d4aec72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b271b6bd18a49ec6c611eee34e3b0e8e8897da20d333e6988923d6246e2b89a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="networkSegment")
    def network_segment(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: networkSegment: The NetworkSegment of the Access Rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "networkSegment"))

    @network_segment.setter
    def network_segment(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3aadcce2e425574c3f6c753334523e251aabf7e196b219030f7fd5f19023b521)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkSegment", value)

    @builtins.property
    @jsii.member(jsii_name="rwAccessType")
    def rw_access_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        rwAccessType: The read/write permission of the authorized object on the file system.
        Values:
        RDWR (default) : read and write.
        RDONLY: read-only
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "rwAccessType"))

    @rw_access_type.setter
    def rw_access_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e7aca772d7bdf4082312a8dfc8b79daee78eba45ee631c07c6f131ac0939736)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rwAccessType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The Description of the Access Rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f13f4dd3e64474da3c66e8417eeb84b613ea56a7fb831f4e22209a61c310b47b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        priority: The Priority of the Access Rule. Valid values: 1 to 100.
        NOTE: When multiple rules are matched by the same authorized object,
        the high-priority rule takes effect. 1 is the highest priority.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f601054f8f2735f37d7453ea5773f98d118b5aed2b58fbebd2cce8823d35cd84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dfs.RosAccessRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_id": "accessGroupId",
        "network_segment": "networkSegment",
        "rw_access_type": "rwAccessType",
        "description": "description",
        "priority": "priority",
    },
)
class RosAccessRuleProps:
    def __init__(
        self,
        *,
        access_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_segment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rw_access_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::AccessRule``.

        :param access_group_id: 
        :param network_segment: 
        :param rw_access_type: 
        :param description: 
        :param priority: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8c4ccb50a231b36ac1a735df2eb54ef3454036c12ea561df92845100c813e6f)
            check_type(argname="argument access_group_id", value=access_group_id, expected_type=type_hints["access_group_id"])
            check_type(argname="argument network_segment", value=network_segment, expected_type=type_hints["network_segment"])
            check_type(argname="argument rw_access_type", value=rw_access_type, expected_type=type_hints["rw_access_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_group_id": access_group_id,
            "network_segment": network_segment,
            "rw_access_type": rw_access_type,
        }
        if description is not None:
            self._values["description"] = description
        if priority is not None:
            self._values["priority"] = priority

    @builtins.property
    def access_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupId: The resource ID of Access Group.
        '''
        result = self._values.get("access_group_id")
        assert result is not None, "Required property 'access_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_segment(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: networkSegment: The NetworkSegment of the Access Rule.
        '''
        result = self._values.get("network_segment")
        assert result is not None, "Required property 'network_segment' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rw_access_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        rwAccessType: The read/write permission of the authorized object on the file system.
        Values:
        RDWR (default) : read and write.
        RDONLY: read-only
        '''
        result = self._values.get("rw_access_type")
        assert result is not None, "Required property 'rw_access_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The Description of the Access Rule.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        priority: The Priority of the Access Rule. Valid values: 1 to 100.
        NOTE: When multiple rules are matched by the same authorized object,
        the high-priority rule takes effect. 1 is the highest priority.
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFileSystem(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.RosFileSystem",
):
    '''A ROS template type:  ``ALIYUN::DFS::FileSystem``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFileSystemProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::FileSystem``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46fa9e89b53dc309f91a1837df04efbb293a3ac859dd47561f2f17875998750c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__54327c61aed9f6068974df8b60c4ce57b857b983a9f2350d0d678e965f8d968d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FileSystemId: The ID of the file system.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFileSystemId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__96a421f6fd6e2ed5fa7cf3d33d1b0ef018c12facb4a337fcf9332a195af1f372)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="protocolType")
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolType: Protocol type, only support HDFS（HadoopFileSystem）
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocolType"))

    @protocol_type.setter
    def protocol_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb0182f72e1731033c9f41b89fdc172be0d396d1d4fae7a3aff80ef090e0dea9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolType", value)

    @builtins.property
    @jsii.member(jsii_name="spaceCapacity")
    def space_capacity(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        spaceCapacity: Capacity of the file system.
        When the actual data volume reaches the file system capacity, data cannot be written.
        Unit: GB
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "spaceCapacity"))

    @space_capacity.setter
    def space_capacity(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__659062943baea179ce7ba2b1906195b712bbed9d1cf9405ef2295fbdfddb6360)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spaceCapacity", value)

    @builtins.property
    @jsii.member(jsii_name="storageType")
    def storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        storageType: Type of storage media.
        Values:
        STANDARD (default) : standard type.
        PERFORMANCE: performance type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "storageType"))

    @storage_type.setter
    def storage_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f260fae1636553c4f0abea693f7ef94b30d869a261266f0b1eefdf277759d2cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageType", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: zone id
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__085f930a87908cf5c71b2068b79d6b47fe88cefa4ebd70bb02ccc2cb09cfb6c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="dataRedundancyType")
    def data_redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataRedundancyType: Redundancy mode of the file system.
        Values:
        LRS (default) : local redundancy.
        ZRS: in-city redundancy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataRedundancyType"))

    @data_redundancy_type.setter
    def data_redundancy_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1cb47b9456683535235324b73d162f1d5f098415de6cfce295bf700cec49f22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataRedundancyType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the file system.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__524d4f8ccbc28355a1aa2995d78a35a3300850b73be31dfd05d4a32f37634149)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemName")
    def file_system_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fileSystemName: Name of the file system. The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        The value can contain letters and digits and underscores (_).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fileSystemName"))

    @file_system_name.setter
    def file_system_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0dd88983ca6dc04f58ee4ac89b505c17696e607be515d894eb8433602b4097c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemName", value)

    @builtins.property
    @jsii.member(jsii_name="partitionNumber")
    def partition_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: partitionNumber: The reserved parameters
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "partitionNumber"))

    @partition_number.setter
    def partition_number(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b429f48fa9072ea853ae47ca86a83ce4b6aa9d8a410ffcedc706ccfc897eadd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "partitionNumber", value)

    @builtins.property
    @jsii.member(jsii_name="provisionedThroughputInMiBps")
    def provisioned_throughput_in_mi_bps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        provisionedThroughputInMiBps: Preset handling capacity.
        Unit: MB/sdata range: 1-5120
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "provisionedThroughputInMiBps"))

    @provisioned_throughput_in_mi_bps.setter
    def provisioned_throughput_in_mi_bps(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc438e3586dcc672ad967091e6f5f61a1dfe5bb056be57ae76411fb087ca6ec4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "provisionedThroughputInMiBps", value)

    @builtins.property
    @jsii.member(jsii_name="storageSetName")
    def storage_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageSetName: The reserved parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageSetName"))

    @storage_set_name.setter
    def storage_set_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a54fb4d30a45751d57323086917980be2cb61ebd64bcae6bbdc64607adee3bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageSetName", value)

    @builtins.property
    @jsii.member(jsii_name="throughputMode")
    def throughput_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        throughputMode: Throughput mode
        Values:
        Standard（default）: standard throughputProvisioned: preset throughput
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "throughputMode"))

    @throughput_mode.setter
    def throughput_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1f59d907e6e277537d752abf36a03cf2a10a4dbd428fae8d4474c483d6a83a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "throughputMode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dfs.RosFileSystemProps",
    jsii_struct_bases=[],
    name_mapping={
        "protocol_type": "protocolType",
        "space_capacity": "spaceCapacity",
        "storage_type": "storageType",
        "zone_id": "zoneId",
        "data_redundancy_type": "dataRedundancyType",
        "description": "description",
        "file_system_name": "fileSystemName",
        "partition_number": "partitionNumber",
        "provisioned_throughput_in_mi_bps": "provisionedThroughputInMiBps",
        "storage_set_name": "storageSetName",
        "throughput_mode": "throughputMode",
    },
)
class RosFileSystemProps:
    def __init__(
        self,
        *,
        protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        space_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_system_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        partition_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        provisioned_throughput_in_mi_bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        storage_set_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        throughput_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::FileSystem``.

        :param protocol_type: 
        :param space_capacity: 
        :param storage_type: 
        :param zone_id: 
        :param data_redundancy_type: 
        :param description: 
        :param file_system_name: 
        :param partition_number: 
        :param provisioned_throughput_in_mi_bps: 
        :param storage_set_name: 
        :param throughput_mode: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fbd2d15773b762baff0c0bedc60f9850811649a973fcbe698fa473fc676d14e)
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument space_capacity", value=space_capacity, expected_type=type_hints["space_capacity"])
            check_type(argname="argument storage_type", value=storage_type, expected_type=type_hints["storage_type"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument data_redundancy_type", value=data_redundancy_type, expected_type=type_hints["data_redundancy_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument file_system_name", value=file_system_name, expected_type=type_hints["file_system_name"])
            check_type(argname="argument partition_number", value=partition_number, expected_type=type_hints["partition_number"])
            check_type(argname="argument provisioned_throughput_in_mi_bps", value=provisioned_throughput_in_mi_bps, expected_type=type_hints["provisioned_throughput_in_mi_bps"])
            check_type(argname="argument storage_set_name", value=storage_set_name, expected_type=type_hints["storage_set_name"])
            check_type(argname="argument throughput_mode", value=throughput_mode, expected_type=type_hints["throughput_mode"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "protocol_type": protocol_type,
            "space_capacity": space_capacity,
            "storage_type": storage_type,
            "zone_id": zone_id,
        }
        if data_redundancy_type is not None:
            self._values["data_redundancy_type"] = data_redundancy_type
        if description is not None:
            self._values["description"] = description
        if file_system_name is not None:
            self._values["file_system_name"] = file_system_name
        if partition_number is not None:
            self._values["partition_number"] = partition_number
        if provisioned_throughput_in_mi_bps is not None:
            self._values["provisioned_throughput_in_mi_bps"] = provisioned_throughput_in_mi_bps
        if storage_set_name is not None:
            self._values["storage_set_name"] = storage_set_name
        if throughput_mode is not None:
            self._values["throughput_mode"] = throughput_mode

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocolType: Protocol type, only support HDFS（HadoopFileSystem）
        '''
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def space_capacity(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        spaceCapacity: Capacity of the file system.
        When the actual data volume reaches the file system capacity, data cannot be written.
        Unit: GB
        '''
        result = self._values.get("space_capacity")
        assert result is not None, "Required property 'space_capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        storageType: Type of storage media.
        Values:
        STANDARD (default) : standard type.
        PERFORMANCE: performance type.
        '''
        result = self._values.get("storage_type")
        assert result is not None, "Required property 'storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: zone id
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataRedundancyType: Redundancy mode of the file system.
        Values:
        LRS (default) : local redundancy.
        ZRS: in-city redundancy.
        '''
        result = self._values.get("data_redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the file system.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_system_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fileSystemName: Name of the file system. The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        The value can contain letters and digits and underscores (_).
        '''
        result = self._values.get("file_system_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def partition_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: partitionNumber: The reserved parameters
        '''
        result = self._values.get("partition_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def provisioned_throughput_in_mi_bps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        provisionedThroughputInMiBps: Preset handling capacity.
        Unit: MB/sdata range: 1-5120
        '''
        result = self._values.get("provisioned_throughput_in_mi_bps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def storage_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageSetName: The reserved parameters.
        '''
        result = self._values.get("storage_set_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def throughput_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        throughputMode: Throughput mode
        Values:
        Standard（default）: standard throughputProvisioned: preset throughput
        '''
        result = self._values.get("throughput_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFileSystemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMountPoint(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.RosMountPoint",
):
    '''A ROS template type:  ``ALIYUN::DFS::MountPoint``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMountPointProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::MountPoint``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3eb07d230db865859a6a96488827ced9a0c4b10bf2f27bf2c9eb3c065cbbfff)
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
            type_hints = typing.get_type_hints(_typecheckingstub__123a11d632307eac1b57a5ada40b44812f52bbce317568422fd9b7bd42a8f00d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrMountPointId")
    def attr_mount_point_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MountPointId: The ID of the mount point.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMountPointId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessGroupId")
    def access_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupId: The ID of the Access Group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessGroupId"))

    @access_group_id.setter
    def access_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c012c06baa6d6ea6451af8b964d65a724864edb14ffb5c789de4db2524ceced)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7477de7d7fddee61ea3e0c571867b8060e866da8ed89fa60e9f934bface13d57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: The ID of the File System.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "fileSystemId"))

    @file_system_id.setter
    def file_system_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5cde256c454934ce6d59865acce9c550bd31e3c0dc9fd1245c2808352cfc4717)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemId", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: networkType: The network type of the Mount Point. Valid values: VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b1963f90083d69107d9be65ec900d2bd615442b59af26482632f9638ed3bb9a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The vpc id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67c091a5f1c424210a112345cdee71508c16130cf48a4bfb18eb5eacbddf921b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vswitch id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__747b99a2fcbd38851486c41a40ae3de5db36fe1696d2e1ebd3adc7de0d343afb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the Mount Point.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3d4446cd8573ee6aef2b227e69758e0c822de91e7f989526baea921ef151f6b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the Mount Point.
        Valid values: Active, Inactive
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cb468b54e7b3eae3dfdf825547a482f07c1fc45d5ef2f6c01f201bad860c7f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dfs.RosMountPointProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_id": "accessGroupId",
        "file_system_id": "fileSystemId",
        "network_type": "networkType",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "description": "description",
        "status": "status",
    },
)
class RosMountPointProps:
    def __init__(
        self,
        *,
        access_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::MountPoint``.

        :param access_group_id: 
        :param file_system_id: 
        :param network_type: 
        :param vpc_id: 
        :param v_switch_id: 
        :param description: 
        :param status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__946c0a4e14423ad01302ddb4da3049f9f2eb0d9d84b988bc20d83cb195ea966b)
            check_type(argname="argument access_group_id", value=access_group_id, expected_type=type_hints["access_group_id"])
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_group_id": access_group_id,
            "file_system_id": file_system_id,
            "network_type": network_type,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if description is not None:
            self._values["description"] = description
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def access_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessGroupId: The ID of the Access Group.
        '''
        result = self._values.get("access_group_id")
        assert result is not None, "Required property 'access_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: The ID of the File System.
        '''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: networkType: The network type of the Mount Point. Valid values: VPC.
        '''
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The vpc id.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vswitch id.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the Mount Point.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the Mount Point.
        Valid values: Active, Inactive
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMountPointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AccessGroup",
    "AccessGroupProps",
    "AccessRule",
    "AccessRuleProps",
    "FileSystem",
    "FileSystemProps",
    "MountPoint",
    "MountPointProps",
    "RosAccessGroup",
    "RosAccessGroupProps",
    "RosAccessRule",
    "RosAccessRuleProps",
    "RosFileSystem",
    "RosFileSystemProps",
    "RosMountPoint",
    "RosMountPointProps",
]

publication.publish()

def _typecheckingstub__73c052540ab971a2f96cfab5d42147e65139b9aa7d211240c765ce87176f8bc6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AccessGroupProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__558752123512b3cd13e68ab0c6b992b9077f889bc8e59e6cb48ef51dd8e188c7(
    *,
    access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0e2a69ecea31b1dadc7561a8b4577530fd01ab3d4c1cbd1e24f1aa249711434(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccessRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47459e079bcb520873145865a6c6510e3e5effe1e0c046cb0fe27d2702bb1acd(
    *,
    access_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_segment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rw_access_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f82f0229e516030cf3e97bb063e35ba3705b8e32189df2f38d313a64b29eb4db(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FileSystemProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d76b5ec882e230aa03b7504be03cd232f8b7d06b67b8815dc293d0b7a3de1a2b(
    *,
    protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    space_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_system_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    partition_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    provisioned_throughput_in_mi_bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_set_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    throughput_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f5714e8401bc7635af2b6a57290696dd00389acc1e3a87004849ff0b22103b8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MountPointProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2eb9db9a539fb90f40a9e195fff14eef53a8c0adfaf7f05093ad084d5876a2d5(
    *,
    access_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27abbbc58e832f3799a7bec627ccf4b98afdf57a2a4c5bc188e3355f47acefc3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc51f5fb3fb6a8d7df6fbcc91df1840265538028201bee75626d50e21ba49e8b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fcaac061bd3f6472d6e4b6249dab3a49665867cf1a6b2530fe4f535a0c2ecb4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c319cc24d3bc3f6868f50d63fdc99708bfd190eb1a436869e5e739b38ed7f59(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f98db17968a1e4a0bd6d8fe244c542d27fe5d585dd02f5e27f6e223b56d4f99a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c324bc0c1ac484e6788ea37b3610a29a048ce96ffc08ee73e1d70935de55e1ef(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a9414a672892cb99b7f4e4e708f03a5557dace9c5b0c5cf5eb7f963c24f2daa(
    *,
    access_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__160727bd59c09415c83442966d19ced414e6361dc6b2d06d347c305d69603fe7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed12f318153c57ec1a8de7372d3fa0065032a35f7e4e183b7db82f42acc1ef51(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa1762fbcab76a94e23f8e7e5b273eccc7f294da4d06b0ce3c07592a0d4aec72(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b271b6bd18a49ec6c611eee34e3b0e8e8897da20d333e6988923d6246e2b89a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3aadcce2e425574c3f6c753334523e251aabf7e196b219030f7fd5f19023b521(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e7aca772d7bdf4082312a8dfc8b79daee78eba45ee631c07c6f131ac0939736(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f13f4dd3e64474da3c66e8417eeb84b613ea56a7fb831f4e22209a61c310b47b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f601054f8f2735f37d7453ea5773f98d118b5aed2b58fbebd2cce8823d35cd84(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8c4ccb50a231b36ac1a735df2eb54ef3454036c12ea561df92845100c813e6f(
    *,
    access_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_segment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rw_access_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46fa9e89b53dc309f91a1837df04efbb293a3ac859dd47561f2f17875998750c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFileSystemProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54327c61aed9f6068974df8b60c4ce57b857b983a9f2350d0d678e965f8d968d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96a421f6fd6e2ed5fa7cf3d33d1b0ef018c12facb4a337fcf9332a195af1f372(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb0182f72e1731033c9f41b89fdc172be0d396d1d4fae7a3aff80ef090e0dea9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__659062943baea179ce7ba2b1906195b712bbed9d1cf9405ef2295fbdfddb6360(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f260fae1636553c4f0abea693f7ef94b30d869a261266f0b1eefdf277759d2cc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__085f930a87908cf5c71b2068b79d6b47fe88cefa4ebd70bb02ccc2cb09cfb6c1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1cb47b9456683535235324b73d162f1d5f098415de6cfce295bf700cec49f22(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__524d4f8ccbc28355a1aa2995d78a35a3300850b73be31dfd05d4a32f37634149(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0dd88983ca6dc04f58ee4ac89b505c17696e607be515d894eb8433602b4097c6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b429f48fa9072ea853ae47ca86a83ce4b6aa9d8a410ffcedc706ccfc897eadd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc438e3586dcc672ad967091e6f5f61a1dfe5bb056be57ae76411fb087ca6ec4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a54fb4d30a45751d57323086917980be2cb61ebd64bcae6bbdc64607adee3bb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1f59d907e6e277537d752abf36a03cf2a10a4dbd428fae8d4474c483d6a83a8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fbd2d15773b762baff0c0bedc60f9850811649a973fcbe698fa473fc676d14e(
    *,
    protocol_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    space_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    storage_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_system_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    partition_number: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    provisioned_throughput_in_mi_bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    storage_set_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    throughput_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3eb07d230db865859a6a96488827ced9a0c4b10bf2f27bf2c9eb3c065cbbfff(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMountPointProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__123a11d632307eac1b57a5ada40b44812f52bbce317568422fd9b7bd42a8f00d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c012c06baa6d6ea6451af8b964d65a724864edb14ffb5c789de4db2524ceced(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7477de7d7fddee61ea3e0c571867b8060e866da8ed89fa60e9f934bface13d57(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cde256c454934ce6d59865acce9c550bd31e3c0dc9fd1245c2808352cfc4717(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b1963f90083d69107d9be65ec900d2bd615442b59af26482632f9638ed3bb9a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67c091a5f1c424210a112345cdee71508c16130cf48a4bfb18eb5eacbddf921b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__747b99a2fcbd38851486c41a40ae3de5db36fe1696d2e1ebd3adc7de0d343afb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3d4446cd8573ee6aef2b227e69758e0c822de91e7f989526baea921ef151f6b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cb468b54e7b3eae3dfdf825547a482f07c1fc45d5ef2f6c01f201bad860c7f6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__946c0a4e14423ad01302ddb4da3049f9f2eb0d9d84b988bc20d83cb195ea966b(
    *,
    access_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
