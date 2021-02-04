"""
## Aliyun ROS NAS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_nas as NAS
```
"""
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from ._jsii import *

import ros_cdk_core


class AccessGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.AccessGroup",
):
    """A ROS resource type:  ``ALIYUN::NAS::AccessGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccessGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::NAS::AccessGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AccessGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccessGroupName")
    def attr_access_group_name(self) -> typing.Any:
        """
        :Attribute: AccessGroupName: Permission group name
        """
        return jsii.get(self, "attrAccessGroupName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.AccessGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "access_group_type": "accessGroupType",
        "description": "description",
    },
)
class AccessGroupProps:
    def __init__(
        self,
        *,
        access_group_name: builtins.str,
        access_group_type: builtins.str,
        description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::NAS::AccessGroup``.

        :param access_group_name: 
        :param access_group_type: 
        :param description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "access_group_name": access_group_name,
            "access_group_type": access_group_type,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def access_group_name(self) -> builtins.str:
        """
        :Property: accessGroupName: Permission group name
        """
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return result

    @builtins.property
    def access_group_type(self) -> builtins.str:
        """
        :Property: accessGroupType: Permission group type, including the Vpc and Classic types
        """
        result = self._values.get("access_group_type")
        assert result is not None, "Required property 'access_group_type' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Permission group description. It is the same as the permission group name by default.
        """
        result = self._values.get("description")
        return result

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
    jsii_type="@alicloud/ros-cdk-nas.AccessRule",
):
    """A ROS resource type:  ``ALIYUN::NAS::AccessRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccessRuleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::NAS::AccessRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AccessRule, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccessRuleId")
    def attr_access_rule_id(self) -> typing.Any:
        """
        :Attribute: AccessRuleId: Rule serial number
        """
        return jsii.get(self, "attrAccessRuleId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.AccessRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "source_cidr_ip": "sourceCidrIp",
        "priority": "priority",
        "rw_access_type": "rwAccessType",
        "user_access_type": "userAccessType",
    },
)
class AccessRuleProps:
    def __init__(
        self,
        *,
        access_group_name: builtins.str,
        source_cidr_ip: builtins.str,
        priority: typing.Optional[jsii.Number] = None,
        rw_access_type: typing.Optional[builtins.str] = None,
        user_access_type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::NAS::AccessRule``.

        :param access_group_name: 
        :param source_cidr_ip: 
        :param priority: 
        :param rw_access_type: 
        :param user_access_type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "access_group_name": access_group_name,
            "source_cidr_ip": source_cidr_ip,
        }
        if priority is not None:
            self._values["priority"] = priority
        if rw_access_type is not None:
            self._values["rw_access_type"] = rw_access_type
        if user_access_type is not None:
            self._values["user_access_type"] = user_access_type

    @builtins.property
    def access_group_name(self) -> builtins.str:
        """
        :Property: accessGroupName: Permission group name
        """
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return result

    @builtins.property
    def source_cidr_ip(self) -> builtins.str:
        """
        :Property: sourceCidrIp: Address or address segment
        """
        result = self._values.get("source_cidr_ip")
        assert result is not None, "Required property 'source_cidr_ip' is missing"
        return result

    @builtins.property
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property: priority: Priority level. Range: 1-100. Default value: 1
        """
        result = self._values.get("priority")
        return result

    @builtins.property
    def rw_access_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: rwAccessType: Read-write permission type: RDWR (default), RDONLY
        """
        result = self._values.get("rw_access_type")
        return result

    @builtins.property
    def user_access_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: userAccessType: User permission type: no_squash (default), root_squash, all_squash
        """
        result = self._values.get("user_access_type")
        return result

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
    jsii_type="@alicloud/ros-cdk-nas.FileSystem",
):
    """A ROS resource type:  ``ALIYUN::NAS::FileSystem``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "FileSystemProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::NAS::FileSystem``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(FileSystem, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> typing.Any:
        """
        :Attribute: FileSystemId: ID of the file system created
        """
        return jsii.get(self, "attrFileSystemId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.FileSystemProps",
    jsii_struct_bases=[],
    name_mapping={
        "protocol_type": "protocolType",
        "storage_type": "storageType",
        "bandwidth": "bandwidth",
        "capacity": "capacity",
        "charge_type": "chargeType",
        "deletion_force": "deletionForce",
        "description": "description",
        "duration": "duration",
        "encrypt_type": "encryptType",
        "file_system_type": "fileSystemType",
        "snapshot_id": "snapshotId",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class FileSystemProps:
    def __init__(
        self,
        *,
        protocol_type: builtins.str,
        storage_type: builtins.str,
        bandwidth: typing.Optional[jsii.Number] = None,
        capacity: typing.Optional[jsii.Number] = None,
        charge_type: typing.Optional[builtins.str] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        duration: typing.Optional[jsii.Number] = None,
        encrypt_type: typing.Optional[jsii.Number] = None,
        file_system_type: typing.Optional[builtins.str] = None,
        snapshot_id: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::NAS::FileSystem``.

        :param protocol_type: 
        :param storage_type: 
        :param bandwidth: 
        :param capacity: 
        :param charge_type: 
        :param deletion_force: 
        :param description: 
        :param duration: 
        :param encrypt_type: 
        :param file_system_type: 
        :param snapshot_id: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "protocol_type": protocol_type,
            "storage_type": storage_type,
        }
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if capacity is not None:
            self._values["capacity"] = capacity
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if description is not None:
            self._values["description"] = description
        if duration is not None:
            self._values["duration"] = duration
        if encrypt_type is not None:
            self._values["encrypt_type"] = encrypt_type
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type
        if snapshot_id is not None:
            self._values["snapshot_id"] = snapshot_id
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def protocol_type(self) -> builtins.str:
        """
        :Property: protocolType: Type of protocol used. Currently includes the NFS type and the SMB type
        """
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return result

    @builtins.property
    def storage_type(self) -> builtins.str:
        """
        :Property: storageType: The file system type. Currently includes the Performance type and the Capacity type
        """
        result = self._values.get("storage_type")
        assert result is not None, "Required property 'storage_type' is missing"
        return result

    @builtins.property
    def bandwidth(self) -> typing.Optional[jsii.Number]:
        """
        :Property: bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
        """
        result = self._values.get("bandwidth")
        return result

    @builtins.property
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
        """
        result = self._values.get("capacity")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        chargeType: Type of payment:
        PayAsYouGo (pay as you go)
        Subscription
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
        """
        result = self._values.get("deletion_force")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: File system description (space characters are not allowed)
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
        When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
        """
        result = self._values.get("duration")
        return result

    @builtins.property
    def encrypt_type(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
        0: specifies that no encryption is applied to data on the file system.
        1: specifies that encryption is applied to data on the file system.
        """
        result = self._values.get("encrypt_type")
        return result

    @builtins.property
    def file_system_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: fileSystemType: File system type. Allowed values: standard, extreme, cpfs
        """
        result = self._values.get("file_system_type")
        return result

    @builtins.property
    def snapshot_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: snapshotId: Snapshot ID.
        """
        result = self._values.get("snapshot_id")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: Vpc ID.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: Zone ID.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FileSystemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MountTarget(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.MountTarget",
):
    """A ROS resource type:  ``ALIYUN::NAS::MountTarget``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "MountTargetProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::NAS::MountTarget``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(MountTarget, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMountTargetDomain")
    def attr_mount_target_domain(self) -> typing.Any:
        """
        :Attribute: MountTargetDomain: Mount point domain name
        """
        return jsii.get(self, "attrMountTargetDomain")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.MountTargetProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "file_system_id": "fileSystemId",
        "network_type": "networkType",
        "status": "status",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class MountTargetProps:
    def __init__(
        self,
        *,
        access_group_name: builtins.str,
        file_system_id: builtins.str,
        network_type: builtins.str,
        status: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::NAS::MountTarget``.

        :param access_group_name: 
        :param file_system_id: 
        :param network_type: 
        :param status: 
        :param vpc_id: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "access_group_name": access_group_name,
            "file_system_id": file_system_id,
            "network_type": network_type,
        }
        if status is not None:
            self._values["status"] = status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def access_group_name(self) -> builtins.str:
        """
        :Property: accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
        """
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return result

    @builtins.property
    def file_system_id(self) -> builtins.str:
        """
        :Property: fileSystemId: File system ID
        """
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return result

    @builtins.property
    def network_type(self) -> builtins.str:
        """
        :Property: networkType: Network type, including Vpc and Classic networks.
        """
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return result

    @builtins.property
    def status(self) -> typing.Optional[builtins.str]:
        """
        :Property: status: Status, including Active and Inactive
        """
        result = self._values.get("status")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: VPC network ID
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        result = self._values.get("v_switch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MountTargetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.RosAccessGroup",
):
    """A ROS template type:  ``ALIYUN::NAS::AccessGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccessGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::NAS::AccessGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAccessGroup, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccessGroupName")
    def attr_access_group_name(self) -> typing.Any:
        """
        :Attribute: AccessGroupName: Permission group name
        """
        return jsii.get(self, "attrAccessGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accessGroupName")
    def access_group_name(self) -> builtins.str:
        """
        :Property: accessGroupName: Permission group name
        """
        return jsii.get(self, "accessGroupName")

    @access_group_name.setter # type: ignore
    def access_group_name(self, value: builtins.str) -> None:
        jsii.set(self, "accessGroupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accessGroupType")
    def access_group_type(self) -> builtins.str:
        """
        :Property: accessGroupType: Permission group type, including the Vpc and Classic types
        """
        return jsii.get(self, "accessGroupType")

    @access_group_type.setter # type: ignore
    def access_group_type(self, value: builtins.str) -> None:
        jsii.set(self, "accessGroupType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Permission group description. It is the same as the permission group name by default.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosAccessGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "access_group_type": "accessGroupType",
        "description": "description",
    },
)
class RosAccessGroupProps:
    def __init__(
        self,
        *,
        access_group_name: builtins.str,
        access_group_type: builtins.str,
        description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::NAS::AccessGroup``.

        :param access_group_name: 
        :param access_group_type: 
        :param description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "access_group_name": access_group_name,
            "access_group_type": access_group_type,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def access_group_name(self) -> builtins.str:
        """
        :Property: accessGroupName: Permission group name
        """
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return result

    @builtins.property
    def access_group_type(self) -> builtins.str:
        """
        :Property: accessGroupType: Permission group type, including the Vpc and Classic types
        """
        result = self._values.get("access_group_type")
        assert result is not None, "Required property 'access_group_type' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Permission group description. It is the same as the permission group name by default.
        """
        result = self._values.get("description")
        return result

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
    jsii_type="@alicloud/ros-cdk-nas.RosAccessRule",
):
    """A ROS template type:  ``ALIYUN::NAS::AccessRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccessRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::NAS::AccessRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAccessRule, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccessRuleId")
    def attr_access_rule_id(self) -> typing.Any:
        """
        :Attribute: AccessRuleId: Rule serial number
        """
        return jsii.get(self, "attrAccessRuleId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accessGroupName")
    def access_group_name(self) -> builtins.str:
        """
        :Property: accessGroupName: Permission group name
        """
        return jsii.get(self, "accessGroupName")

    @access_group_name.setter # type: ignore
    def access_group_name(self, value: builtins.str) -> None:
        jsii.set(self, "accessGroupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceCidrIp")
    def source_cidr_ip(self) -> builtins.str:
        """
        :Property: sourceCidrIp: Address or address segment
        """
        return jsii.get(self, "sourceCidrIp")

    @source_cidr_ip.setter # type: ignore
    def source_cidr_ip(self, value: builtins.str) -> None:
        jsii.set(self, "sourceCidrIp", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="priority")
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property: priority: Priority level. Range: 1-100. Default value: 1
        """
        return jsii.get(self, "priority")

    @priority.setter # type: ignore
    def priority(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "priority", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rwAccessType")
    def rw_access_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: rwAccessType: Read-write permission type: RDWR (default), RDONLY
        """
        return jsii.get(self, "rwAccessType")

    @rw_access_type.setter # type: ignore
    def rw_access_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "rwAccessType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="userAccessType")
    def user_access_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: userAccessType: User permission type: no_squash (default), root_squash, all_squash
        """
        return jsii.get(self, "userAccessType")

    @user_access_type.setter # type: ignore
    def user_access_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "userAccessType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosAccessRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "source_cidr_ip": "sourceCidrIp",
        "priority": "priority",
        "rw_access_type": "rwAccessType",
        "user_access_type": "userAccessType",
    },
)
class RosAccessRuleProps:
    def __init__(
        self,
        *,
        access_group_name: builtins.str,
        source_cidr_ip: builtins.str,
        priority: typing.Optional[jsii.Number] = None,
        rw_access_type: typing.Optional[builtins.str] = None,
        user_access_type: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::NAS::AccessRule``.

        :param access_group_name: 
        :param source_cidr_ip: 
        :param priority: 
        :param rw_access_type: 
        :param user_access_type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "access_group_name": access_group_name,
            "source_cidr_ip": source_cidr_ip,
        }
        if priority is not None:
            self._values["priority"] = priority
        if rw_access_type is not None:
            self._values["rw_access_type"] = rw_access_type
        if user_access_type is not None:
            self._values["user_access_type"] = user_access_type

    @builtins.property
    def access_group_name(self) -> builtins.str:
        """
        :Property: accessGroupName: Permission group name
        """
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return result

    @builtins.property
    def source_cidr_ip(self) -> builtins.str:
        """
        :Property: sourceCidrIp: Address or address segment
        """
        result = self._values.get("source_cidr_ip")
        assert result is not None, "Required property 'source_cidr_ip' is missing"
        return result

    @builtins.property
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property: priority: Priority level. Range: 1-100. Default value: 1
        """
        result = self._values.get("priority")
        return result

    @builtins.property
    def rw_access_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: rwAccessType: Read-write permission type: RDWR (default), RDONLY
        """
        result = self._values.get("rw_access_type")
        return result

    @builtins.property
    def user_access_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: userAccessType: User permission type: no_squash (default), root_squash, all_squash
        """
        result = self._values.get("user_access_type")
        return result

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
    jsii_type="@alicloud/ros-cdk-nas.RosFileSystem",
):
    """A ROS template type:  ``ALIYUN::NAS::FileSystem``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosFileSystemProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::NAS::FileSystem``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosFileSystem, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFileSystemId")
    def attr_file_system_id(self) -> typing.Any:
        """
        :Attribute: FileSystemId: ID of the file system created
        """
        return jsii.get(self, "attrFileSystemId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="protocolType")
    def protocol_type(self) -> builtins.str:
        """
        :Property: protocolType: Type of protocol used. Currently includes the NFS type and the SMB type
        """
        return jsii.get(self, "protocolType")

    @protocol_type.setter # type: ignore
    def protocol_type(self, value: builtins.str) -> None:
        jsii.set(self, "protocolType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="storageType")
    def storage_type(self) -> builtins.str:
        """
        :Property: storageType: The file system type. Currently includes the Performance type and the Capacity type
        """
        return jsii.get(self, "storageType")

    @storage_type.setter # type: ignore
    def storage_type(self, value: builtins.str) -> None:
        jsii.set(self, "storageType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> typing.Optional[jsii.Number]:
        """
        :Property: bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
        """
        return jsii.get(self, "bandwidth")

    @bandwidth.setter # type: ignore
    def bandwidth(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="capacity")
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
        """
        return jsii.get(self, "capacity")

    @capacity.setter # type: ignore
    def capacity(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "capacity", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        chargeType: Type of payment:
        PayAsYouGo (pay as you go)
        Subscription
        """
        return jsii.get(self, "chargeType")

    @charge_type.setter # type: ignore
    def charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
        """
        return jsii.get(self, "deletionForce")

    @deletion_force.setter # type: ignore
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: File system description (space characters are not allowed)
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="duration")
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
        When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
        """
        return jsii.get(self, "duration")

    @duration.setter # type: ignore
    def duration(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="encryptType")
    def encrypt_type(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
        0: specifies that no encryption is applied to data on the file system.
        1: specifies that encryption is applied to data on the file system.
        """
        return jsii.get(self, "encryptType")

    @encrypt_type.setter # type: ignore
    def encrypt_type(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "encryptType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="fileSystemType")
    def file_system_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: fileSystemType: File system type. Allowed values: standard, extreme, cpfs
        """
        return jsii.get(self, "fileSystemType")

    @file_system_type.setter # type: ignore
    def file_system_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "fileSystemType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="snapshotId")
    def snapshot_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: snapshotId: Snapshot ID.
        """
        return jsii.get(self, "snapshotId")

    @snapshot_id.setter # type: ignore
    def snapshot_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "snapshotId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: Vpc ID.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: Zone ID.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosFileSystemProps",
    jsii_struct_bases=[],
    name_mapping={
        "protocol_type": "protocolType",
        "storage_type": "storageType",
        "bandwidth": "bandwidth",
        "capacity": "capacity",
        "charge_type": "chargeType",
        "deletion_force": "deletionForce",
        "description": "description",
        "duration": "duration",
        "encrypt_type": "encryptType",
        "file_system_type": "fileSystemType",
        "snapshot_id": "snapshotId",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosFileSystemProps:
    def __init__(
        self,
        *,
        protocol_type: builtins.str,
        storage_type: builtins.str,
        bandwidth: typing.Optional[jsii.Number] = None,
        capacity: typing.Optional[jsii.Number] = None,
        charge_type: typing.Optional[builtins.str] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        duration: typing.Optional[jsii.Number] = None,
        encrypt_type: typing.Optional[jsii.Number] = None,
        file_system_type: typing.Optional[builtins.str] = None,
        snapshot_id: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::NAS::FileSystem``.

        :param protocol_type: 
        :param storage_type: 
        :param bandwidth: 
        :param capacity: 
        :param charge_type: 
        :param deletion_force: 
        :param description: 
        :param duration: 
        :param encrypt_type: 
        :param file_system_type: 
        :param snapshot_id: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "protocol_type": protocol_type,
            "storage_type": storage_type,
        }
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if capacity is not None:
            self._values["capacity"] = capacity
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if description is not None:
            self._values["description"] = description
        if duration is not None:
            self._values["duration"] = duration
        if encrypt_type is not None:
            self._values["encrypt_type"] = encrypt_type
        if file_system_type is not None:
            self._values["file_system_type"] = file_system_type
        if snapshot_id is not None:
            self._values["snapshot_id"] = snapshot_id
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def protocol_type(self) -> builtins.str:
        """
        :Property: protocolType: Type of protocol used. Currently includes the NFS type and the SMB type
        """
        result = self._values.get("protocol_type")
        assert result is not None, "Required property 'protocol_type' is missing"
        return result

    @builtins.property
    def storage_type(self) -> builtins.str:
        """
        :Property: storageType: The file system type. Currently includes the Performance type and the Capacity type
        """
        result = self._values.get("storage_type")
        assert result is not None, "Required property 'storage_type' is missing"
        return result

    @builtins.property
    def bandwidth(self) -> typing.Optional[jsii.Number]:
        """
        :Property: bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
        """
        result = self._values.get("bandwidth")
        return result

    @builtins.property
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property: capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
        """
        result = self._values.get("capacity")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        chargeType: Type of payment:
        PayAsYouGo (pay as you go)
        Subscription
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
        """
        result = self._values.get("deletion_force")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: File system description (space characters are not allowed)
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
        When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
        """
        result = self._values.get("duration")
        return result

    @builtins.property
    def encrypt_type(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
        0: specifies that no encryption is applied to data on the file system.
        1: specifies that encryption is applied to data on the file system.
        """
        result = self._values.get("encrypt_type")
        return result

    @builtins.property
    def file_system_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: fileSystemType: File system type. Allowed values: standard, extreme, cpfs
        """
        result = self._values.get("file_system_type")
        return result

    @builtins.property
    def snapshot_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: snapshotId: Snapshot ID.
        """
        result = self._values.get("snapshot_id")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: Vpc ID.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: Zone ID.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFileSystemProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMountTarget(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nas.RosMountTarget",
):
    """A ROS template type:  ``ALIYUN::NAS::MountTarget``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosMountTargetProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::NAS::MountTarget``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosMountTarget, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMountTargetDomain")
    def attr_mount_target_domain(self) -> typing.Any:
        """
        :Attribute: MountTargetDomain: Mount point domain name
        """
        return jsii.get(self, "attrMountTargetDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accessGroupName")
    def access_group_name(self) -> builtins.str:
        """
        :Property: accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
        """
        return jsii.get(self, "accessGroupName")

    @access_group_name.setter # type: ignore
    def access_group_name(self, value: builtins.str) -> None:
        jsii.set(self, "accessGroupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(self) -> builtins.str:
        """
        :Property: fileSystemId: File system ID
        """
        return jsii.get(self, "fileSystemId")

    @file_system_id.setter # type: ignore
    def file_system_id(self, value: builtins.str) -> None:
        jsii.set(self, "fileSystemId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="networkType")
    def network_type(self) -> builtins.str:
        """
        :Property: networkType: Network type, including Vpc and Classic networks.
        """
        return jsii.get(self, "networkType")

    @network_type.setter # type: ignore
    def network_type(self, value: builtins.str) -> None:
        jsii.set(self, "networkType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="status")
    def status(self) -> typing.Optional[builtins.str]:
        """
        :Property: status: Status, including Active and Inactive
        """
        return jsii.get(self, "status")

    @status.setter # type: ignore
    def status(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "status", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: VPC network ID
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nas.RosMountTargetProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_group_name": "accessGroupName",
        "file_system_id": "fileSystemId",
        "network_type": "networkType",
        "status": "status",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosMountTargetProps:
    def __init__(
        self,
        *,
        access_group_name: builtins.str,
        file_system_id: builtins.str,
        network_type: builtins.str,
        status: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::NAS::MountTarget``.

        :param access_group_name: 
        :param file_system_id: 
        :param network_type: 
        :param status: 
        :param vpc_id: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "access_group_name": access_group_name,
            "file_system_id": file_system_id,
            "network_type": network_type,
        }
        if status is not None:
            self._values["status"] = status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def access_group_name(self) -> builtins.str:
        """
        :Property: accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
        """
        result = self._values.get("access_group_name")
        assert result is not None, "Required property 'access_group_name' is missing"
        return result

    @builtins.property
    def file_system_id(self) -> builtins.str:
        """
        :Property: fileSystemId: File system ID
        """
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return result

    @builtins.property
    def network_type(self) -> builtins.str:
        """
        :Property: networkType: Network type, including Vpc and Classic networks.
        """
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return result

    @builtins.property
    def status(self) -> typing.Optional[builtins.str]:
        """
        :Property: status: Status, including Active and Inactive
        """
        result = self._values.get("status")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: VPC network ID
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        result = self._values.get("v_switch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMountTargetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AccessGroup",
    "AccessGroupProps",
    "AccessRule",
    "AccessRuleProps",
    "FileSystem",
    "FileSystemProps",
    "MountTarget",
    "MountTargetProps",
    "RosAccessGroup",
    "RosAccessGroupProps",
    "RosAccessRule",
    "RosAccessRuleProps",
    "RosFileSystem",
    "RosFileSystemProps",
    "RosMountTarget",
    "RosMountTargetProps",
]

publication.publish()
