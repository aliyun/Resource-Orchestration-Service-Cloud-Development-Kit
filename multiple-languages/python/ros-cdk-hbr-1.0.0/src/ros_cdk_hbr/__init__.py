"""
## Aliyun ROS HBR Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_hbr as HBR
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


class BackupClients(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.BackupClients",
):
    """A ROS resource type:  ``ALIYUN::HBR::BackupClients``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BackupClientsProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::HBR::BackupClients``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(BackupClients, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(self) -> typing.Any:
        """
        :Attribute: ClientIds: ID list of clients installed in instances
        """
        return jsii.get(self, "attrClientIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> typing.Any:
        """
        :Attribute: InstanceIds: ID list of instances to install backup client
        """
        return jsii.get(self, "attrInstanceIds")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.BackupClientsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_ids": "instanceIds"},
)
class BackupClientsProps:
    def __init__(self, *, instance_ids: typing.List[builtins.str]) -> None:
        """Properties for defining a ``ALIYUN::HBR::BackupClients``.

        :param instance_ids: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_ids": instance_ids,
        }

    @builtins.property
    def instance_ids(self) -> typing.List[builtins.str]:
        """
        :Property: instanceIds: ID list of instances to install backup client
        """
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackupClientsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RestoreJob(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RestoreJob",
):
    """A ROS resource type:  ``ALIYUN::HBR::RestoreJob``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RestoreJobProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::HBR::RestoreJob``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RestoreJob, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(self) -> typing.Any:
        """
        :Attribute: ErrorMessage: Error message of restore job
        """
        return jsii.get(self, "attrErrorMessage")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(self) -> typing.Any:
        """
        :Attribute: RestoreId: Restore job ID
        """
        return jsii.get(self, "attrRestoreId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(self) -> typing.Any:
        """
        :Attribute: RestoreType: Restore type
        """
        return jsii.get(self, "attrRestoreType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> typing.Any:
        """
        :Attribute: SourceType: Source type
        """
        return jsii.get(self, "attrSourceType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> typing.Any:
        """
        :Attribute: Status: Restore job status
        """
        return jsii.get(self, "attrStatus")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RestoreJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "restore_type": "restoreType",
        "snapshot_id": "snapshotId",
        "source_client_id": "sourceClientId",
        "source_instance_id": "sourceInstanceId",
        "source_type": "sourceType",
        "target_client_id": "targetClientId",
        "target_instance_id": "targetInstanceId",
        "target_path": "targetPath",
        "vault_id": "vaultId",
    },
)
class RestoreJobProps:
    def __init__(
        self,
        *,
        restore_type: builtins.str,
        snapshot_id: builtins.str,
        source_client_id: builtins.str,
        source_instance_id: builtins.str,
        source_type: builtins.str,
        target_client_id: builtins.str,
        target_instance_id: builtins.str,
        target_path: builtins.str,
        vault_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::HBR::RestoreJob``.

        :param restore_type: 
        :param snapshot_id: 
        :param source_client_id: 
        :param source_instance_id: 
        :param source_type: 
        :param target_client_id: 
        :param target_instance_id: 
        :param target_path: 
        :param vault_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "restore_type": restore_type,
            "snapshot_id": snapshot_id,
            "source_client_id": source_client_id,
            "source_instance_id": source_instance_id,
            "source_type": source_type,
            "target_client_id": target_client_id,
            "target_instance_id": target_instance_id,
            "target_path": target_path,
            "vault_id": vault_id,
        }

    @builtins.property
    def restore_type(self) -> builtins.str:
        """
        :Property: restoreType: Restore type
        """
        result = self._values.get("restore_type")
        assert result is not None, "Required property 'restore_type' is missing"
        return result

    @builtins.property
    def snapshot_id(self) -> builtins.str:
        """
        :Property: snapshotId: Snapshot ID
        """
        result = self._values.get("snapshot_id")
        assert result is not None, "Required property 'snapshot_id' is missing"
        return result

    @builtins.property
    def source_client_id(self) -> builtins.str:
        """
        :Property: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        """
        result = self._values.get("source_client_id")
        assert result is not None, "Required property 'source_client_id' is missing"
        return result

    @builtins.property
    def source_instance_id(self) -> builtins.str:
        """
        :Property: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        """
        result = self._values.get("source_instance_id")
        assert result is not None, "Required property 'source_instance_id' is missing"
        return result

    @builtins.property
    def source_type(self) -> builtins.str:
        """
        :Property: sourceType: Source type
        """
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return result

    @builtins.property
    def target_client_id(self) -> builtins.str:
        """
        :Property: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        """
        result = self._values.get("target_client_id")
        assert result is not None, "Required property 'target_client_id' is missing"
        return result

    @builtins.property
    def target_instance_id(self) -> builtins.str:
        """
        :Property: targetInstanceId: Source client ID. It should be provided when RestoreType=ECS_FILE.
        """
        result = self._values.get("target_instance_id")
        assert result is not None, "Required property 'target_instance_id' is missing"
        return result

    @builtins.property
    def target_path(self) -> builtins.str:
        """
        :Property: targetPath: Target path. For instance, "/".
        """
        result = self._values.get("target_path")
        assert result is not None, "Required property 'target_path' is missing"
        return result

    @builtins.property
    def vault_id(self) -> builtins.str:
        """
        :Property: vaultId: Vault ID
        """
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RestoreJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackupClients(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosBackupClients",
):
    """A ROS template type:  ``ALIYUN::HBR::BackupClients``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBackupClientsProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::HBR::BackupClients``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosBackupClients, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(self) -> typing.Any:
        """
        :Attribute: ClientIds: ID list of clients installed in instances
        """
        return jsii.get(self, "attrClientIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> typing.Any:
        """
        :Attribute: InstanceIds: ID list of instances to install backup client
        """
        return jsii.get(self, "attrInstanceIds")

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
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(self) -> typing.List[builtins.str]:
        """
        :Property: instanceIds: ID list of instances to install backup client
        """
        return jsii.get(self, "instanceIds")

    @instance_ids.setter # type: ignore
    def instance_ids(self, value: typing.List[builtins.str]) -> None:
        jsii.set(self, "instanceIds", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosBackupClientsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_ids": "instanceIds"},
)
class RosBackupClientsProps:
    def __init__(self, *, instance_ids: typing.List[builtins.str]) -> None:
        """Properties for defining a ``ALIYUN::HBR::BackupClients``.

        :param instance_ids: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_ids": instance_ids,
        }

    @builtins.property
    def instance_ids(self) -> typing.List[builtins.str]:
        """
        :Property: instanceIds: ID list of instances to install backup client
        """
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackupClientsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRestoreJob(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosRestoreJob",
):
    """A ROS template type:  ``ALIYUN::HBR::RestoreJob``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRestoreJobProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::HBR::RestoreJob``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosRestoreJob, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(self) -> typing.Any:
        """
        :Attribute: ErrorMessage: Error message of restore job
        """
        return jsii.get(self, "attrErrorMessage")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(self) -> typing.Any:
        """
        :Attribute: RestoreId: Restore job ID
        """
        return jsii.get(self, "attrRestoreId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(self) -> typing.Any:
        """
        :Attribute: RestoreType: Restore type
        """
        return jsii.get(self, "attrRestoreType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> typing.Any:
        """
        :Attribute: SourceType: Source type
        """
        return jsii.get(self, "attrSourceType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> typing.Any:
        """
        :Attribute: Status: Restore job status
        """
        return jsii.get(self, "attrStatus")

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
    @jsii.member(jsii_name="restoreType")
    def restore_type(self) -> builtins.str:
        """
        :Property: restoreType: Restore type
        """
        return jsii.get(self, "restoreType")

    @restore_type.setter # type: ignore
    def restore_type(self, value: builtins.str) -> None:
        jsii.set(self, "restoreType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="snapshotId")
    def snapshot_id(self) -> builtins.str:
        """
        :Property: snapshotId: Snapshot ID
        """
        return jsii.get(self, "snapshotId")

    @snapshot_id.setter # type: ignore
    def snapshot_id(self, value: builtins.str) -> None:
        jsii.set(self, "snapshotId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceClientId")
    def source_client_id(self) -> builtins.str:
        """
        :Property: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        """
        return jsii.get(self, "sourceClientId")

    @source_client_id.setter # type: ignore
    def source_client_id(self, value: builtins.str) -> None:
        jsii.set(self, "sourceClientId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceInstanceId")
    def source_instance_id(self) -> builtins.str:
        """
        :Property: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        """
        return jsii.get(self, "sourceInstanceId")

    @source_instance_id.setter # type: ignore
    def source_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "sourceInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceType")
    def source_type(self) -> builtins.str:
        """
        :Property: sourceType: Source type
        """
        return jsii.get(self, "sourceType")

    @source_type.setter # type: ignore
    def source_type(self, value: builtins.str) -> None:
        jsii.set(self, "sourceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetClientId")
    def target_client_id(self) -> builtins.str:
        """
        :Property: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        """
        return jsii.get(self, "targetClientId")

    @target_client_id.setter # type: ignore
    def target_client_id(self, value: builtins.str) -> None:
        jsii.set(self, "targetClientId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetInstanceId")
    def target_instance_id(self) -> builtins.str:
        """
        :Property: targetInstanceId: Source client ID. It should be provided when RestoreType=ECS_FILE.
        """
        return jsii.get(self, "targetInstanceId")

    @target_instance_id.setter # type: ignore
    def target_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "targetInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetPath")
    def target_path(self) -> builtins.str:
        """
        :Property: targetPath: Target path. For instance, "/".
        """
        return jsii.get(self, "targetPath")

    @target_path.setter # type: ignore
    def target_path(self, value: builtins.str) -> None:
        jsii.set(self, "targetPath", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vaultId")
    def vault_id(self) -> builtins.str:
        """
        :Property: vaultId: Vault ID
        """
        return jsii.get(self, "vaultId")

    @vault_id.setter # type: ignore
    def vault_id(self, value: builtins.str) -> None:
        jsii.set(self, "vaultId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosRestoreJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "restore_type": "restoreType",
        "snapshot_id": "snapshotId",
        "source_client_id": "sourceClientId",
        "source_instance_id": "sourceInstanceId",
        "source_type": "sourceType",
        "target_client_id": "targetClientId",
        "target_instance_id": "targetInstanceId",
        "target_path": "targetPath",
        "vault_id": "vaultId",
    },
)
class RosRestoreJobProps:
    def __init__(
        self,
        *,
        restore_type: builtins.str,
        snapshot_id: builtins.str,
        source_client_id: builtins.str,
        source_instance_id: builtins.str,
        source_type: builtins.str,
        target_client_id: builtins.str,
        target_instance_id: builtins.str,
        target_path: builtins.str,
        vault_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::HBR::RestoreJob``.

        :param restore_type: 
        :param snapshot_id: 
        :param source_client_id: 
        :param source_instance_id: 
        :param source_type: 
        :param target_client_id: 
        :param target_instance_id: 
        :param target_path: 
        :param vault_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "restore_type": restore_type,
            "snapshot_id": snapshot_id,
            "source_client_id": source_client_id,
            "source_instance_id": source_instance_id,
            "source_type": source_type,
            "target_client_id": target_client_id,
            "target_instance_id": target_instance_id,
            "target_path": target_path,
            "vault_id": vault_id,
        }

    @builtins.property
    def restore_type(self) -> builtins.str:
        """
        :Property: restoreType: Restore type
        """
        result = self._values.get("restore_type")
        assert result is not None, "Required property 'restore_type' is missing"
        return result

    @builtins.property
    def snapshot_id(self) -> builtins.str:
        """
        :Property: snapshotId: Snapshot ID
        """
        result = self._values.get("snapshot_id")
        assert result is not None, "Required property 'snapshot_id' is missing"
        return result

    @builtins.property
    def source_client_id(self) -> builtins.str:
        """
        :Property: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        """
        result = self._values.get("source_client_id")
        assert result is not None, "Required property 'source_client_id' is missing"
        return result

    @builtins.property
    def source_instance_id(self) -> builtins.str:
        """
        :Property: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        """
        result = self._values.get("source_instance_id")
        assert result is not None, "Required property 'source_instance_id' is missing"
        return result

    @builtins.property
    def source_type(self) -> builtins.str:
        """
        :Property: sourceType: Source type
        """
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return result

    @builtins.property
    def target_client_id(self) -> builtins.str:
        """
        :Property: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        """
        result = self._values.get("target_client_id")
        assert result is not None, "Required property 'target_client_id' is missing"
        return result

    @builtins.property
    def target_instance_id(self) -> builtins.str:
        """
        :Property: targetInstanceId: Source client ID. It should be provided when RestoreType=ECS_FILE.
        """
        result = self._values.get("target_instance_id")
        assert result is not None, "Required property 'target_instance_id' is missing"
        return result

    @builtins.property
    def target_path(self) -> builtins.str:
        """
        :Property: targetPath: Target path. For instance, "/".
        """
        result = self._values.get("target_path")
        assert result is not None, "Required property 'target_path' is missing"
        return result

    @builtins.property
    def vault_id(self) -> builtins.str:
        """
        :Property: vaultId: Vault ID
        """
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRestoreJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "BackupClients",
    "BackupClientsProps",
    "RestoreJob",
    "RestoreJobProps",
    "RosBackupClients",
    "RosBackupClientsProps",
    "RosRestoreJob",
    "RosRestoreJobProps",
]

publication.publish()
