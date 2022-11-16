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

import ros_cdk_core


class AccessGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.AccessGroup",
):
    '''A ROS resource type:  ``ALIYUN::DFS::AccessGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AccessGroupProps", typing.Dict[str, typing.Any]]] = None,
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Optional[typing.Union[AccessGroupProps, typing.Dict[str, typing.Any]]] = None,
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessGroupId")
    def attr_access_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccessGroupId: The ID of the access_group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccessGroupId"))


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
        access_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::AccessGroup``.

        :param access_group_name: Property accessGroupName: The Name of Access Group. The naming rules are as follows: The value contains 6 to 100 characters. Globally unique and cannot be an empty string.
        :param description: Property description: The description of the access_group. The value contains 0 to 100 characters
        :param network_type: Property networkType: The NetworkType of Access Group. Valid values: VPC.
        '''
        if __debug__:
            def stub(
                *,
                access_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                network_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
        self._values: typing.Dict[str, typing.Any] = {}
        if access_group_name is not None:
            self._values["access_group_name"] = access_group_name
        if description is not None:
            self._values["description"] = description
        if network_type is not None:
            self._values["network_type"] = network_type

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accessGroupName: The Name of Access Group.

        The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        '''
        result = self._values.get("access_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the access_group.

        The value contains 0 to 100 characters
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property networkType: The NetworkType of Access Group.

        Valid values: VPC.
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AccessRule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.AccessRule",
):
    '''A ROS resource type:  ``ALIYUN::DFS::AccessRule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["AccessRuleProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[AccessRuleProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessRuleId")
    def attr_access_rule_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccessRuleId: The ID of the access_rule.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccessRuleId"))


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
        access_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        network_segment: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        rw_access_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::AccessRule``.

        :param access_group_id: Property accessGroupId: The resource ID of Access Group.
        :param network_segment: Property networkSegment: The NetworkSegment of the Access Rule.
        :param rw_access_type: Property rwAccessType: The read/write permission of the authorized object on the file system. Values: RDWR (default) : read and write. RDONLY: read-only
        :param description: Property description: The Description of the Access Rule.
        :param priority: Property priority: The Priority of the Access Rule. Valid values: 1 to 100. NOTE: When multiple rules are matched by the same authorized object, the high-priority rule takes effect. 1 is the highest priority.
        '''
        if __debug__:
            def stub(
                *,
                access_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                network_segment: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                rw_access_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument access_group_id", value=access_group_id, expected_type=type_hints["access_group_id"])
            check_type(argname="argument network_segment", value=network_segment, expected_type=type_hints["network_segment"])
            check_type(argname="argument rw_access_type", value=rw_access_type, expected_type=type_hints["rw_access_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
        self._values: typing.Dict[str, typing.Any] = {
            "access_group_id": access_group_id,
            "network_segment": network_segment,
            "rw_access_type": rw_access_type,
        }
        if description is not None:
            self._values["description"] = description
        if priority is not None:
            self._values["priority"] = priority

    @builtins.property
    def access_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accessGroupId: The resource ID of Access Group.'''
        result = self._values.get("access_group_id")
        assert result is not None, "Required property 'access_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def network_segment(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property networkSegment: The NetworkSegment of the Access Rule.'''
        result = self._values.get("network_segment")
        assert result is not None, "Required property 'network_segment' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rw_access_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property rwAccessType: The read/write permission of the authorized object on the file system.

        Values:
        RDWR (default) : read and write.
        RDONLY: read-only
        '''
        result = self._values.get("rw_access_type")
        assert result is not None, "Required property 'rw_access_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The Description of the Access Rule.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property priority: The Priority of the Access Rule.

        Valid values: 1 to 100.
        NOTE: When multiple rules are matched by the same authorized object,
        the high-priority rule takes effect. 1 is the highest priority.
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class FileSystem(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.FileSystem",
):
    '''A ROS resource type:  ``ALIYUN::DFS::FileSystem``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["FileSystemProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[FileSystemProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute FileSystemId: The ID of the file system.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFileSystemId"))


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
        protocol_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        space_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        storage_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        data_redundancy_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        file_system_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        partition_number: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        provisioned_throughput_in_mi_bps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        storage_set_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        throughput_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                protocol_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                space_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                storage_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                data_redundancy_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                file_system_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                partition_number: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                provisioned_throughput_in_mi_bps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                storage_set_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                throughput_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def protocol_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property protocolType: Protocol type, only support HDFS（HadoopFileSystem）.'''
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def space_capacity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property spaceCapacity: Capacity of the file system.

        When the actual data volume reaches the file system capacity, data cannot be written.
        Unit: GB
        '''
        result = self._values.get("space_capacity")
        assert result is not None, "Required property 'space_capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def storage_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property storageType: Type of storage media.

        Values:
        STANDARD (default) : standard type.
        PERFORMANCE: performance type.
        '''
        result = self._values.get("storage_type")
        assert result is not None, "Required property 'storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: zone id.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def data_redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dataRedundancyType: Redundancy mode of the file system.

        Values:
        LRS (default) : local redundancy.
        ZRS: in-city redundancy.
        '''
        result = self._values.get("data_redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the file system.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def file_system_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property fileSystemName: Name of the file system.

        The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        The value can contain letters and digits and underscores (_).
        '''
        result = self._values.get("file_system_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def partition_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property partitionNumber: The reserved parameters.'''
        result = self._values.get("partition_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def provisioned_throughput_in_mi_bps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property provisionedThroughputInMiBps: Preset handling capacity.

        Unit: MB/sdata range: 1-5120
        '''
        result = self._values.get("provisioned_throughput_in_mi_bps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def storage_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property storageSetName: The reserved parameters.'''
        result = self._values.get("storage_set_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def throughput_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property throughputMode: Throughput mode Values: Standard（default）: standard throughputProvisioned: preset throughput.'''
        result = self._values.get("throughput_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FileSystemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MountPoint(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.MountPoint",
):
    '''A ROS resource type:  ``ALIYUN::DFS::MountPoint``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["MountPointProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[MountPointProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrMountPointId")
    def attr_mount_point_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute MountPointId: The ID of the mount point.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMountPointId"))


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
        access_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        file_system_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        network_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                access_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                file_system_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                network_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument access_group_id", value=access_group_id, expected_type=type_hints["access_group_id"])
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[str, typing.Any] = {
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
    def access_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accessGroupId: The ID of the Access Group.'''
        result = self._values.get("access_group_id")
        assert result is not None, "Required property 'access_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def file_system_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property fileSystemId: The ID of the File System.'''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def network_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property networkType: The network type of the Mount Point.

        Valid values: VPC.
        '''
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The vpc id.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: The vswitch id.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the Mount Point.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property status: The status of the Mount Point.

        Valid values: Active, Inactive
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MountPointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.RosAccessGroup",
):
    '''A ROS template type:  ``ALIYUN::DFS::AccessGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessGroupProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::AccessGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosAccessGroupProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessGroupId")
    def attr_access_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccessGroupId: The ID of the access_group.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccessGroupId"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accessGroupName")
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        accessGroupName: The Name of Access Group. The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accessGroupName"))

    @access_group_name.setter
    def access_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the access_group.
        The value contains 0 to 100 characters
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: networkType: The NetworkType of Access Group. Valid values: VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        access_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::AccessGroup``.

        :param access_group_name: 
        :param description: 
        :param network_type: 
        '''
        if __debug__:
            def stub(
                *,
                access_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                network_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument access_group_name", value=access_group_name, expected_type=type_hints["access_group_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
        self._values: typing.Dict[str, typing.Any] = {}
        if access_group_name is not None:
            self._values["access_group_name"] = access_group_name
        if description is not None:
            self._values["description"] = description
        if network_type is not None:
            self._values["network_type"] = network_type

    @builtins.property
    def access_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        accessGroupName: The Name of Access Group. The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        '''
        result = self._values.get("access_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the access_group.
        The value contains 0 to 100 characters
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: networkType: The NetworkType of Access Group. Valid values: VPC.
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.RosAccessRule",
):
    '''A ROS template type:  ``ALIYUN::DFS::AccessRule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessRuleProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::AccessRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosAccessRuleProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessRuleId")
    def attr_access_rule_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccessRuleId: The ID of the access_rule.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccessRuleId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessGroupId")
    def access_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accessGroupId: The resource ID of Access Group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accessGroupId"))

    @access_group_id.setter
    def access_group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="networkSegment")
    def network_segment(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: networkSegment: The NetworkSegment of the Access Rule.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "networkSegment"))

    @network_segment.setter
    def network_segment(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkSegment", value)

    @builtins.property
    @jsii.member(jsii_name="rwAccessType")
    def rw_access_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        rwAccessType: The read/write permission of the authorized object on the file system.
        Values:
        RDWR (default) : read and write.
        RDONLY: read-only
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "rwAccessType"))

    @rw_access_type.setter
    def rw_access_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rwAccessType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The Description of the Access Rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        priority: The Priority of the Access Rule. Valid values: 1 to 100.
        NOTE: When multiple rules are matched by the same authorized object,
        the high-priority rule takes effect. 1 is the highest priority.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        access_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        network_segment: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        rw_access_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DFS::AccessRule``.

        :param access_group_id: 
        :param network_segment: 
        :param rw_access_type: 
        :param description: 
        :param priority: 
        '''
        if __debug__:
            def stub(
                *,
                access_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                network_segment: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                rw_access_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument access_group_id", value=access_group_id, expected_type=type_hints["access_group_id"])
            check_type(argname="argument network_segment", value=network_segment, expected_type=type_hints["network_segment"])
            check_type(argname="argument rw_access_type", value=rw_access_type, expected_type=type_hints["rw_access_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
        self._values: typing.Dict[str, typing.Any] = {
            "access_group_id": access_group_id,
            "network_segment": network_segment,
            "rw_access_type": rw_access_type,
        }
        if description is not None:
            self._values["description"] = description
        if priority is not None:
            self._values["priority"] = priority

    @builtins.property
    def access_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accessGroupId: The resource ID of Access Group.
        '''
        result = self._values.get("access_group_id")
        assert result is not None, "Required property 'access_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def network_segment(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: networkSegment: The NetworkSegment of the Access Rule.
        '''
        result = self._values.get("network_segment")
        assert result is not None, "Required property 'network_segment' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rw_access_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        rwAccessType: The read/write permission of the authorized object on the file system.
        Values:
        RDWR (default) : read and write.
        RDONLY: read-only
        '''
        result = self._values.get("rw_access_type")
        assert result is not None, "Required property 'rw_access_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The Description of the Access Rule.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        priority: The Priority of the Access Rule. Valid values: 1 to 100.
        NOTE: When multiple rules are matched by the same authorized object,
        the high-priority rule takes effect. 1 is the highest priority.
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFileSystem(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.RosFileSystem",
):
    '''A ROS template type:  ``ALIYUN::DFS::FileSystem``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosFileSystemProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::FileSystem``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosFileSystemProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FileSystemId: The ID of the file system.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFileSystemId"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="protocolType")
    def protocol_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: protocolType: Protocol type, only support HDFS（HadoopFileSystem）
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "protocolType"))

    @protocol_type.setter
    def protocol_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolType", value)

    @builtins.property
    @jsii.member(jsii_name="spaceCapacity")
    def space_capacity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        spaceCapacity: Capacity of the file system.
        When the actual data volume reaches the file system capacity, data cannot be written.
        Unit: GB
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "spaceCapacity"))

    @space_capacity.setter
    def space_capacity(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spaceCapacity", value)

    @builtins.property
    @jsii.member(jsii_name="storageType")
    def storage_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        storageType: Type of storage media.
        Values:
        STANDARD (default) : standard type.
        PERFORMANCE: performance type.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "storageType"))

    @storage_type.setter
    def storage_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageType", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: zone id
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="dataRedundancyType")
    def data_redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dataRedundancyType: Redundancy mode of the file system.
        Values:
        LRS (default) : local redundancy.
        ZRS: in-city redundancy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dataRedundancyType"))

    @data_redundancy_type.setter
    def data_redundancy_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataRedundancyType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the file system.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemName")
    def file_system_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        fileSystemName: Name of the file system. The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        The value can contain letters and digits and underscores (_).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "fileSystemName"))

    @file_system_name.setter
    def file_system_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemName", value)

    @builtins.property
    @jsii.member(jsii_name="partitionNumber")
    def partition_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: partitionNumber: The reserved parameters
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "partitionNumber"))

    @partition_number.setter
    def partition_number(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "partitionNumber", value)

    @builtins.property
    @jsii.member(jsii_name="provisionedThroughputInMiBps")
    def provisioned_throughput_in_mi_bps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        provisionedThroughputInMiBps: Preset handling capacity.
        Unit: MB/sdata range: 1-5120
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "provisionedThroughputInMiBps"))

    @provisioned_throughput_in_mi_bps.setter
    def provisioned_throughput_in_mi_bps(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "provisionedThroughputInMiBps", value)

    @builtins.property
    @jsii.member(jsii_name="storageSetName")
    def storage_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: storageSetName: The reserved parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "storageSetName"))

    @storage_set_name.setter
    def storage_set_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageSetName", value)

    @builtins.property
    @jsii.member(jsii_name="throughputMode")
    def throughput_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        throughputMode: Throughput mode
        Values:
        Standard（default）: standard throughputProvisioned: preset throughput
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "throughputMode"))

    @throughput_mode.setter
    def throughput_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        protocol_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        space_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        storage_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        data_redundancy_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        file_system_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        partition_number: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        provisioned_throughput_in_mi_bps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        storage_set_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        throughput_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                protocol_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                space_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                storage_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                data_redundancy_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                file_system_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                partition_number: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                provisioned_throughput_in_mi_bps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                storage_set_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                throughput_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def protocol_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: protocolType: Protocol type, only support HDFS（HadoopFileSystem）
        '''
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def space_capacity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        spaceCapacity: Capacity of the file system.
        When the actual data volume reaches the file system capacity, data cannot be written.
        Unit: GB
        '''
        result = self._values.get("space_capacity")
        assert result is not None, "Required property 'space_capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def storage_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        storageType: Type of storage media.
        Values:
        STANDARD (default) : standard type.
        PERFORMANCE: performance type.
        '''
        result = self._values.get("storage_type")
        assert result is not None, "Required property 'storage_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: zone id
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def data_redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dataRedundancyType: Redundancy mode of the file system.
        Values:
        LRS (default) : local redundancy.
        ZRS: in-city redundancy.
        '''
        result = self._values.get("data_redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the file system.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def file_system_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        fileSystemName: Name of the file system. The naming rules are as follows:
        The value contains 6 to 100 characters.
        Globally unique and cannot be an empty string.
        The value can contain letters and digits and underscores (_).
        '''
        result = self._values.get("file_system_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def partition_number(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: partitionNumber: The reserved parameters
        '''
        result = self._values.get("partition_number")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def provisioned_throughput_in_mi_bps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        provisionedThroughputInMiBps: Preset handling capacity.
        Unit: MB/sdata range: 1-5120
        '''
        result = self._values.get("provisioned_throughput_in_mi_bps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def storage_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: storageSetName: The reserved parameters.
        '''
        result = self._values.get("storage_set_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def throughput_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        throughputMode: Throughput mode
        Values:
        Standard（default）: standard throughputProvisioned: preset throughput
        '''
        result = self._values.get("throughput_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFileSystemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMountPoint(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dfs.RosMountPoint",
):
    '''A ROS template type:  ``ALIYUN::DFS::MountPoint``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosMountPointProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DFS::MountPoint``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosMountPointProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrMountPointId")
    def attr_mount_point_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MountPointId: The ID of the mount point.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMountPointId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessGroupId")
    def access_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accessGroupId: The ID of the Access Group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accessGroupId"))

    @access_group_id.setter
    def access_group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: fileSystemId: The ID of the File System.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "fileSystemId"))

    @file_system_id.setter
    def file_system_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemId", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: networkType: The network type of the Mount Point. Valid values: VPC.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The vpc id.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The vswitch id.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the Mount Point.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        status: The status of the Mount Point.
        Valid values: Active, Inactive
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        access_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        file_system_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        network_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                access_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                file_system_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                network_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument access_group_id", value=access_group_id, expected_type=type_hints["access_group_id"])
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[str, typing.Any] = {
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
    def access_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: accessGroupId: The ID of the Access Group.
        '''
        result = self._values.get("access_group_id")
        assert result is not None, "Required property 'access_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def file_system_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: fileSystemId: The ID of the File System.
        '''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def network_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: networkType: The network type of the Mount Point. Valid values: VPC.
        '''
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The vpc id.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The vswitch id.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the Mount Point.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        status: The status of the Mount Point.
        Valid values: Active, Inactive
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
