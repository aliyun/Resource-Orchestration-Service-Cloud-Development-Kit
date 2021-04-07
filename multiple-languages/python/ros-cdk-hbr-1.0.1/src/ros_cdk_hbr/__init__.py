'''
## Aliyun ROS HBR Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_hbr as HBR
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

from ._jsii import *

import ros_cdk_core


class BackupClients(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.BackupClients",
):
    '''A ROS resource type:  ``ALIYUN::HBR::BackupClients``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BackupClientsProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::BackupClients``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(BackupClients, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClientIds: ID list of clients installed in instances.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceIds: ID list of instances to install backup client.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.BackupClientsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_ids": "instanceIds"},
)
class BackupClientsProps:
    def __init__(
        self,
        *,
        instance_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::BackupClients``.

        :param instance_ids: Property instanceIds: ID list of instances to install backup client.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_ids": instance_ids,
        }

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property instanceIds: ID list of instances to install backup client.'''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

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
    '''A ROS resource type:  ``ALIYUN::HBR::RestoreJob``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RestoreJobProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::RestoreJob``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RestoreJob, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(self) -> ros_cdk_core.IResolvable:
        '''Attribute ErrorMessage: Error message of restore job.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrErrorMessage"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RestoreId: Restore job ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRestoreId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute RestoreType: Restore type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRestoreType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceType: Source type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''Attribute Status: Restore job status.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))


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
        restore_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        snapshot_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_client_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_client_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_path: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vault_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::RestoreJob``.

        :param restore_type: Property restoreType: Restore type.
        :param snapshot_id: Property snapshotId: Snapshot ID.
        :param source_client_id: Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        :param source_instance_id: Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        :param source_type: Property sourceType: Source type.
        :param target_client_id: Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        :param target_instance_id: Property targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        :param target_path: Property targetPath: Target path. For instance, "/".
        :param vault_id: Property vaultId: Vault ID.
        '''
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
    def restore_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property restoreType: Restore type.'''
        result = self._values.get("restore_type")
        assert result is not None, "Required property 'restore_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def snapshot_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property snapshotId: Snapshot ID.'''
        result = self._values.get("snapshot_id")
        assert result is not None, "Required property 'snapshot_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceClientId: Source client ID.

        It should be provided when SourceType=FILE.
        '''
        result = self._values.get("source_client_id")
        assert result is not None, "Required property 'source_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceInstanceId: Source instance ID.

        It should be provided when SourceType=ECS_FILE.
        '''
        result = self._values.get("source_instance_id")
        assert result is not None, "Required property 'source_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceType: Source type.'''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property targetClientId: Target client ID.

        It should be provided when RestoreType=FILE.
        '''
        result = self._values.get("target_client_id")
        assert result is not None, "Required property 'target_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property targetInstanceId: Target instance ID.

        It should be provided when RestoreType=ECS_FILE.
        '''
        result = self._values.get("target_instance_id")
        assert result is not None, "Required property 'target_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_path(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property targetPath: Target path.

        For instance, "/".
        '''
        result = self._values.get("target_path")
        assert result is not None, "Required property 'target_path' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vault_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vaultId: Vault ID.'''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    '''A ROS template type:  ``ALIYUN::HBR::BackupClients``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBackupClientsProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::BackupClients``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RosBackupClients, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClientIds: ID list of clients installed in instances
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceIds: ID list of instances to install backup client
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: instanceIds: ID list of instances to install backup client
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "instanceIds"))

    @instance_ids.setter
    def instance_ids(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "instanceIds", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosBackupClientsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_ids": "instanceIds"},
)
class RosBackupClientsProps:
    def __init__(
        self,
        *,
        instance_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::BackupClients``.

        :param instance_ids: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_ids": instance_ids,
        }

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: instanceIds: ID list of instances to install backup client
        '''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

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
    '''A ROS template type:  ``ALIYUN::HBR::RestoreJob``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRestoreJobProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::RestoreJob``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RosRestoreJob, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ErrorMessage: Error message of restore job
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrErrorMessage"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RestoreId: Restore job ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRestoreId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RestoreType: Restore type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRestoreType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceType: Source type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Status: Restore job status
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="restoreType")
    def restore_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: restoreType: Restore type
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "restoreType"))

    @restore_type.setter
    def restore_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "restoreType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="snapshotId")
    def snapshot_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: snapshotId: Snapshot ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "snapshotId"))

    @snapshot_id.setter
    def snapshot_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "snapshotId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceClientId")
    def source_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceClientId"))

    @source_client_id.setter
    def source_client_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceClientId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceInstanceId")
    def source_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceInstanceId"))

    @source_instance_id.setter
    def source_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceType")
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceType: Source type
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetClientId")
    def target_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "targetClientId"))

    @target_client_id.setter
    def target_client_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "targetClientId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetInstanceId")
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "targetInstanceId"))

    @target_instance_id.setter
    def target_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "targetInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetPath")
    def target_path(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetPath: Target path. For instance, "/".
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "targetPath"))

    @target_path.setter
    def target_path(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "targetPath", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vaultId")
    def vault_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vaultId: Vault ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        restore_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        snapshot_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_client_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_client_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_path: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vault_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::RestoreJob``.

        :param restore_type: 
        :param snapshot_id: 
        :param source_client_id: 
        :param source_instance_id: 
        :param source_type: 
        :param target_client_id: 
        :param target_instance_id: 
        :param target_path: 
        :param vault_id: 
        '''
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
    def restore_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: restoreType: Restore type
        '''
        result = self._values.get("restore_type")
        assert result is not None, "Required property 'restore_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def snapshot_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: snapshotId: Snapshot ID
        '''
        result = self._values.get("snapshot_id")
        assert result is not None, "Required property 'snapshot_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        '''
        result = self._values.get("source_client_id")
        assert result is not None, "Required property 'source_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        '''
        result = self._values.get("source_instance_id")
        assert result is not None, "Required property 'source_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceType: Source type
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        '''
        result = self._values.get("target_client_id")
        assert result is not None, "Required property 'target_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        '''
        result = self._values.get("target_instance_id")
        assert result is not None, "Required property 'target_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_path(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetPath: Target path. For instance, "/".
        '''
        result = self._values.get("target_path")
        assert result is not None, "Required property 'target_path' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vault_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vaultId: Vault ID
        '''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
