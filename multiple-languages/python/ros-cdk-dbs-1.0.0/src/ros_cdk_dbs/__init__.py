"""
## Aliyun ROS DBS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_dbs as DBS
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


class RestoreTask(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dbs.RestoreTask",
):
    """A ROS resource type:  ``ALIYUN::DBS::RestoreTask``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RestoreTaskProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DBS::RestoreTask``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RestoreTask, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRestoreTaskId")
    def attr_restore_task_id(self) -> typing.Any:
        """
        :Attribute: RestoreTaskId: The ID of the restoration task.
        """
        return jsii.get(self, "attrRestoreTaskId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dbs.RestoreTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_plan_id": "backupPlanId",
        "destination_endpoint_instance_type": "destinationEndpointInstanceType",
        "restore_task_name": "restoreTaskName",
        "backup_gateway_id": "backupGatewayId",
        "backup_set_id": "backupSetId",
        "destination_endpoint_database_name": "destinationEndpointDatabaseName",
        "destination_endpoint_instance_id": "destinationEndpointInstanceId",
        "destination_endpoint_ip": "destinationEndpointIp",
        "destination_endpoint_oracle_sid": "destinationEndpointOracleSid",
        "destination_endpoint_password": "destinationEndpointPassword",
        "destination_endpoint_port": "destinationEndpointPort",
        "destination_endpoint_region": "destinationEndpointRegion",
        "destination_endpoint_user_name": "destinationEndpointUserName",
        "duplicate_conflict": "duplicateConflict",
        "restore_dir": "restoreDir",
        "restore_home": "restoreHome",
        "restore_objects": "restoreObjects",
        "restore_time": "restoreTime",
        "start_task": "startTask",
    },
)
class RestoreTaskProps:
    def __init__(
        self,
        *,
        backup_plan_id: builtins.str,
        destination_endpoint_instance_type: builtins.str,
        restore_task_name: builtins.str,
        backup_gateway_id: typing.Optional[jsii.Number] = None,
        backup_set_id: typing.Optional[builtins.str] = None,
        destination_endpoint_database_name: typing.Optional[builtins.str] = None,
        destination_endpoint_instance_id: typing.Optional[builtins.str] = None,
        destination_endpoint_ip: typing.Optional[builtins.str] = None,
        destination_endpoint_oracle_sid: typing.Optional[builtins.str] = None,
        destination_endpoint_password: typing.Optional[builtins.str] = None,
        destination_endpoint_port: typing.Optional[jsii.Number] = None,
        destination_endpoint_region: typing.Optional[builtins.str] = None,
        destination_endpoint_user_name: typing.Optional[builtins.str] = None,
        duplicate_conflict: typing.Optional[builtins.str] = None,
        restore_dir: typing.Optional[builtins.str] = None,
        restore_home: typing.Optional[builtins.str] = None,
        restore_objects: typing.Optional[builtins.str] = None,
        restore_time: typing.Optional[jsii.Number] = None,
        start_task: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DBS::RestoreTask``.

        :param backup_plan_id: 
        :param destination_endpoint_instance_type: 
        :param restore_task_name: 
        :param backup_gateway_id: 
        :param backup_set_id: 
        :param destination_endpoint_database_name: 
        :param destination_endpoint_instance_id: 
        :param destination_endpoint_ip: 
        :param destination_endpoint_oracle_sid: 
        :param destination_endpoint_password: 
        :param destination_endpoint_port: 
        :param destination_endpoint_region: 
        :param destination_endpoint_user_name: 
        :param duplicate_conflict: 
        :param restore_dir: 
        :param restore_home: 
        :param restore_objects: 
        :param restore_time: 
        :param start_task: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "backup_plan_id": backup_plan_id,
            "destination_endpoint_instance_type": destination_endpoint_instance_type,
            "restore_task_name": restore_task_name,
        }
        if backup_gateway_id is not None:
            self._values["backup_gateway_id"] = backup_gateway_id
        if backup_set_id is not None:
            self._values["backup_set_id"] = backup_set_id
        if destination_endpoint_database_name is not None:
            self._values["destination_endpoint_database_name"] = destination_endpoint_database_name
        if destination_endpoint_instance_id is not None:
            self._values["destination_endpoint_instance_id"] = destination_endpoint_instance_id
        if destination_endpoint_ip is not None:
            self._values["destination_endpoint_ip"] = destination_endpoint_ip
        if destination_endpoint_oracle_sid is not None:
            self._values["destination_endpoint_oracle_sid"] = destination_endpoint_oracle_sid
        if destination_endpoint_password is not None:
            self._values["destination_endpoint_password"] = destination_endpoint_password
        if destination_endpoint_port is not None:
            self._values["destination_endpoint_port"] = destination_endpoint_port
        if destination_endpoint_region is not None:
            self._values["destination_endpoint_region"] = destination_endpoint_region
        if destination_endpoint_user_name is not None:
            self._values["destination_endpoint_user_name"] = destination_endpoint_user_name
        if duplicate_conflict is not None:
            self._values["duplicate_conflict"] = duplicate_conflict
        if restore_dir is not None:
            self._values["restore_dir"] = restore_dir
        if restore_home is not None:
            self._values["restore_home"] = restore_home
        if restore_objects is not None:
            self._values["restore_objects"] = restore_objects
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if start_task is not None:
            self._values["start_task"] = start_task

    @builtins.property
    def backup_plan_id(self) -> builtins.str:
        """
        :Property: backupPlanId: The ID of the backup plan.
        """
        result = self._values.get("backup_plan_id")
        assert result is not None, "Required property 'backup_plan_id' is missing"
        return result

    @builtins.property
    def destination_endpoint_instance_type(self) -> builtins.str:
        """
        :Property:

        destinationEndpointInstanceType: The location of the database. Valid values:

        - rds
        - ecs
        - express: a database connected over express connect, VPN Gateway, or smart gateway.
        - agent: The database connected through the backup Gateway
        - dds: apsaradb for MongoDB
        - kvstore
        - polardb
        - drds
        - dg: the database is directly connected through IP Address: Port.
        """
        result = self._values.get("destination_endpoint_instance_type")
        assert result is not None, "Required property 'destination_endpoint_instance_type' is missing"
        return result

    @builtins.property
    def restore_task_name(self) -> builtins.str:
        """
        :Property: restoreTaskName: The name of the restoration task.
        """
        result = self._values.get("restore_task_name")
        assert result is not None, "Required property 'restore_task_name' is missing"
        return result

    @builtins.property
    def backup_gateway_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        backupGatewayId: The ID of the backup gateway.
        NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        """
        result = self._values.get("backup_gateway_id")
        return result

    @builtins.property
    def backup_set_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
        RestoreTime.
        """
        result = self._values.get("backup_set_id")
        return result

    @builtins.property
    def destination_endpoint_database_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointDatabaseName: The name of the RDS database.
        Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        """
        result = self._values.get("destination_endpoint_database_name")
        return result

    @builtins.property
    def destination_endpoint_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
        NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        """
        result = self._values.get("destination_endpoint_instance_id")
        return result

    @builtins.property
    def destination_endpoint_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointIp: The endpoint used to connect to the database.
        NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        """
        result = self._values.get("destination_endpoint_ip")
        return result

    @builtins.property
    def destination_endpoint_oracle_sid(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointOracleSid: The SID of the Oracle instance.
        Note This parameter is required if the database type is Oracle.
        """
        result = self._values.get("destination_endpoint_oracle_sid")
        return result

    @builtins.property
    def destination_endpoint_password(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointPassword: The password that is used to log on to the RDS instance.
        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        """
        result = self._values.get("destination_endpoint_password")
        return result

    @builtins.property
    def destination_endpoint_port(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
        NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        """
        result = self._values.get("destination_endpoint_port")
        return result

    @builtins.property
    def destination_endpoint_region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointRegion: The region of the database.
        NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        """
        result = self._values.get("destination_endpoint_region")
        return result

    @builtins.property
    def destination_endpoint_user_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointUserName: The database account.
        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        """
        result = self._values.get("destination_endpoint_user_name")
        return result

    @builtins.property
    def duplicate_conflict(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
        failure: The object with the same name fails (default).
        renamenew: renames an object with the same name.
        """
        result = self._values.get("duplicate_conflict")
        return result

    @builtins.property
    def restore_dir(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
        """
        result = self._values.get("restore_dir")
        return result

    @builtins.property
    def restore_home(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreHome: Database Program Directory.
        """
        result = self._values.get("restore_home")
        return result

    @builtins.property
    def restore_objects(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        restoreObjects: Restore an object.
        Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        """
        result = self._values.get("restore_objects")
        return result

    @builtins.property
    def restore_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
        """
        result = self._values.get("restore_time")
        return result

    @builtins.property
    def start_task(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: startTask: Start restore task after creating a recovery task.
        """
        result = self._values.get("start_task")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RestoreTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRestoreTask(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dbs.RosRestoreTask",
):
    """A ROS template type:  ``ALIYUN::DBS::RestoreTask``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRestoreTaskProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DBS::RestoreTask``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosRestoreTask, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrRestoreTaskId")
    def attr_restore_task_id(self) -> typing.Any:
        """
        :Attribute: RestoreTaskId: The ID of the restoration task.
        """
        return jsii.get(self, "attrRestoreTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupPlanId")
    def backup_plan_id(self) -> builtins.str:
        """
        :Property: backupPlanId: The ID of the backup plan.
        """
        return jsii.get(self, "backupPlanId")

    @backup_plan_id.setter # type: ignore
    def backup_plan_id(self, value: builtins.str) -> None:
        jsii.set(self, "backupPlanId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpointInstanceType")
    def destination_endpoint_instance_type(self) -> builtins.str:
        """
        :Property:

        destinationEndpointInstanceType: The location of the database. Valid values:

        - rds
        - ecs
        - express: a database connected over express connect, VPN Gateway, or smart gateway.
        - agent: The database connected through the backup Gateway
        - dds: apsaradb for MongoDB
        - kvstore
        - polardb
        - drds
        - dg: the database is directly connected through IP Address: Port.
        """
        return jsii.get(self, "destinationEndpointInstanceType")

    @destination_endpoint_instance_type.setter # type: ignore
    def destination_endpoint_instance_type(self, value: builtins.str) -> None:
        jsii.set(self, "destinationEndpointInstanceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restoreTaskName")
    def restore_task_name(self) -> builtins.str:
        """
        :Property: restoreTaskName: The name of the restoration task.
        """
        return jsii.get(self, "restoreTaskName")

    @restore_task_name.setter # type: ignore
    def restore_task_name(self, value: builtins.str) -> None:
        jsii.set(self, "restoreTaskName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupGatewayId")
    def backup_gateway_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        backupGatewayId: The ID of the backup gateway.
        NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        """
        return jsii.get(self, "backupGatewayId")

    @backup_gateway_id.setter # type: ignore
    def backup_gateway_id(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "backupGatewayId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupSetId")
    def backup_set_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
        RestoreTime.
        """
        return jsii.get(self, "backupSetId")

    @backup_set_id.setter # type: ignore
    def backup_set_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "backupSetId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpointDatabaseName")
    def destination_endpoint_database_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointDatabaseName: The name of the RDS database.
        Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        """
        return jsii.get(self, "destinationEndpointDatabaseName")

    @destination_endpoint_database_name.setter # type: ignore
    def destination_endpoint_database_name(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "destinationEndpointDatabaseName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpointInstanceId")
    def destination_endpoint_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
        NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        """
        return jsii.get(self, "destinationEndpointInstanceId")

    @destination_endpoint_instance_id.setter # type: ignore
    def destination_endpoint_instance_id(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "destinationEndpointInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpointIp")
    def destination_endpoint_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointIp: The endpoint used to connect to the database.
        NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        """
        return jsii.get(self, "destinationEndpointIp")

    @destination_endpoint_ip.setter # type: ignore
    def destination_endpoint_ip(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "destinationEndpointIp", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpointOracleSid")
    def destination_endpoint_oracle_sid(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointOracleSid: The SID of the Oracle instance.
        Note This parameter is required if the database type is Oracle.
        """
        return jsii.get(self, "destinationEndpointOracleSid")

    @destination_endpoint_oracle_sid.setter # type: ignore
    def destination_endpoint_oracle_sid(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "destinationEndpointOracleSid", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpointPassword")
    def destination_endpoint_password(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointPassword: The password that is used to log on to the RDS instance.
        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        """
        return jsii.get(self, "destinationEndpointPassword")

    @destination_endpoint_password.setter # type: ignore
    def destination_endpoint_password(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "destinationEndpointPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpointPort")
    def destination_endpoint_port(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
        NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        """
        return jsii.get(self, "destinationEndpointPort")

    @destination_endpoint_port.setter # type: ignore
    def destination_endpoint_port(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "destinationEndpointPort", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpointRegion")
    def destination_endpoint_region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointRegion: The region of the database.
        NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        """
        return jsii.get(self, "destinationEndpointRegion")

    @destination_endpoint_region.setter # type: ignore
    def destination_endpoint_region(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "destinationEndpointRegion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpointUserName")
    def destination_endpoint_user_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointUserName: The database account.
        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        """
        return jsii.get(self, "destinationEndpointUserName")

    @destination_endpoint_user_name.setter # type: ignore
    def destination_endpoint_user_name(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "destinationEndpointUserName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="duplicateConflict")
    def duplicate_conflict(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
        failure: The object with the same name fails (default).
        renamenew: renames an object with the same name.
        """
        return jsii.get(self, "duplicateConflict")

    @duplicate_conflict.setter # type: ignore
    def duplicate_conflict(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "duplicateConflict", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restoreDir")
    def restore_dir(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
        """
        return jsii.get(self, "restoreDir")

    @restore_dir.setter # type: ignore
    def restore_dir(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "restoreDir", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restoreHome")
    def restore_home(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreHome: Database Program Directory.
        """
        return jsii.get(self, "restoreHome")

    @restore_home.setter # type: ignore
    def restore_home(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "restoreHome", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restoreObjects")
    def restore_objects(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        restoreObjects: Restore an object.
        Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        """
        return jsii.get(self, "restoreObjects")

    @restore_objects.setter # type: ignore
    def restore_objects(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "restoreObjects", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restoreTime")
    def restore_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
        """
        return jsii.get(self, "restoreTime")

    @restore_time.setter # type: ignore
    def restore_time(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "restoreTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="startTask")
    def start_task(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: startTask: Start restore task after creating a recovery task.
        """
        return jsii.get(self, "startTask")

    @start_task.setter # type: ignore
    def start_task(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "startTask", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dbs.RosRestoreTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_plan_id": "backupPlanId",
        "destination_endpoint_instance_type": "destinationEndpointInstanceType",
        "restore_task_name": "restoreTaskName",
        "backup_gateway_id": "backupGatewayId",
        "backup_set_id": "backupSetId",
        "destination_endpoint_database_name": "destinationEndpointDatabaseName",
        "destination_endpoint_instance_id": "destinationEndpointInstanceId",
        "destination_endpoint_ip": "destinationEndpointIp",
        "destination_endpoint_oracle_sid": "destinationEndpointOracleSid",
        "destination_endpoint_password": "destinationEndpointPassword",
        "destination_endpoint_port": "destinationEndpointPort",
        "destination_endpoint_region": "destinationEndpointRegion",
        "destination_endpoint_user_name": "destinationEndpointUserName",
        "duplicate_conflict": "duplicateConflict",
        "restore_dir": "restoreDir",
        "restore_home": "restoreHome",
        "restore_objects": "restoreObjects",
        "restore_time": "restoreTime",
        "start_task": "startTask",
    },
)
class RosRestoreTaskProps:
    def __init__(
        self,
        *,
        backup_plan_id: builtins.str,
        destination_endpoint_instance_type: builtins.str,
        restore_task_name: builtins.str,
        backup_gateway_id: typing.Optional[jsii.Number] = None,
        backup_set_id: typing.Optional[builtins.str] = None,
        destination_endpoint_database_name: typing.Optional[builtins.str] = None,
        destination_endpoint_instance_id: typing.Optional[builtins.str] = None,
        destination_endpoint_ip: typing.Optional[builtins.str] = None,
        destination_endpoint_oracle_sid: typing.Optional[builtins.str] = None,
        destination_endpoint_password: typing.Optional[builtins.str] = None,
        destination_endpoint_port: typing.Optional[jsii.Number] = None,
        destination_endpoint_region: typing.Optional[builtins.str] = None,
        destination_endpoint_user_name: typing.Optional[builtins.str] = None,
        duplicate_conflict: typing.Optional[builtins.str] = None,
        restore_dir: typing.Optional[builtins.str] = None,
        restore_home: typing.Optional[builtins.str] = None,
        restore_objects: typing.Optional[builtins.str] = None,
        restore_time: typing.Optional[jsii.Number] = None,
        start_task: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DBS::RestoreTask``.

        :param backup_plan_id: 
        :param destination_endpoint_instance_type: 
        :param restore_task_name: 
        :param backup_gateway_id: 
        :param backup_set_id: 
        :param destination_endpoint_database_name: 
        :param destination_endpoint_instance_id: 
        :param destination_endpoint_ip: 
        :param destination_endpoint_oracle_sid: 
        :param destination_endpoint_password: 
        :param destination_endpoint_port: 
        :param destination_endpoint_region: 
        :param destination_endpoint_user_name: 
        :param duplicate_conflict: 
        :param restore_dir: 
        :param restore_home: 
        :param restore_objects: 
        :param restore_time: 
        :param start_task: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "backup_plan_id": backup_plan_id,
            "destination_endpoint_instance_type": destination_endpoint_instance_type,
            "restore_task_name": restore_task_name,
        }
        if backup_gateway_id is not None:
            self._values["backup_gateway_id"] = backup_gateway_id
        if backup_set_id is not None:
            self._values["backup_set_id"] = backup_set_id
        if destination_endpoint_database_name is not None:
            self._values["destination_endpoint_database_name"] = destination_endpoint_database_name
        if destination_endpoint_instance_id is not None:
            self._values["destination_endpoint_instance_id"] = destination_endpoint_instance_id
        if destination_endpoint_ip is not None:
            self._values["destination_endpoint_ip"] = destination_endpoint_ip
        if destination_endpoint_oracle_sid is not None:
            self._values["destination_endpoint_oracle_sid"] = destination_endpoint_oracle_sid
        if destination_endpoint_password is not None:
            self._values["destination_endpoint_password"] = destination_endpoint_password
        if destination_endpoint_port is not None:
            self._values["destination_endpoint_port"] = destination_endpoint_port
        if destination_endpoint_region is not None:
            self._values["destination_endpoint_region"] = destination_endpoint_region
        if destination_endpoint_user_name is not None:
            self._values["destination_endpoint_user_name"] = destination_endpoint_user_name
        if duplicate_conflict is not None:
            self._values["duplicate_conflict"] = duplicate_conflict
        if restore_dir is not None:
            self._values["restore_dir"] = restore_dir
        if restore_home is not None:
            self._values["restore_home"] = restore_home
        if restore_objects is not None:
            self._values["restore_objects"] = restore_objects
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if start_task is not None:
            self._values["start_task"] = start_task

    @builtins.property
    def backup_plan_id(self) -> builtins.str:
        """
        :Property: backupPlanId: The ID of the backup plan.
        """
        result = self._values.get("backup_plan_id")
        assert result is not None, "Required property 'backup_plan_id' is missing"
        return result

    @builtins.property
    def destination_endpoint_instance_type(self) -> builtins.str:
        """
        :Property:

        destinationEndpointInstanceType: The location of the database. Valid values:

        - rds
        - ecs
        - express: a database connected over express connect, VPN Gateway, or smart gateway.
        - agent: The database connected through the backup Gateway
        - dds: apsaradb for MongoDB
        - kvstore
        - polardb
        - drds
        - dg: the database is directly connected through IP Address: Port.
        """
        result = self._values.get("destination_endpoint_instance_type")
        assert result is not None, "Required property 'destination_endpoint_instance_type' is missing"
        return result

    @builtins.property
    def restore_task_name(self) -> builtins.str:
        """
        :Property: restoreTaskName: The name of the restoration task.
        """
        result = self._values.get("restore_task_name")
        assert result is not None, "Required property 'restore_task_name' is missing"
        return result

    @builtins.property
    def backup_gateway_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        backupGatewayId: The ID of the backup gateway.
        NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        """
        result = self._values.get("backup_gateway_id")
        return result

    @builtins.property
    def backup_set_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
        RestoreTime.
        """
        result = self._values.get("backup_set_id")
        return result

    @builtins.property
    def destination_endpoint_database_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointDatabaseName: The name of the RDS database.
        Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        """
        result = self._values.get("destination_endpoint_database_name")
        return result

    @builtins.property
    def destination_endpoint_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
        NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        """
        result = self._values.get("destination_endpoint_instance_id")
        return result

    @builtins.property
    def destination_endpoint_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointIp: The endpoint used to connect to the database.
        NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        """
        result = self._values.get("destination_endpoint_ip")
        return result

    @builtins.property
    def destination_endpoint_oracle_sid(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointOracleSid: The SID of the Oracle instance.
        Note This parameter is required if the database type is Oracle.
        """
        result = self._values.get("destination_endpoint_oracle_sid")
        return result

    @builtins.property
    def destination_endpoint_password(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointPassword: The password that is used to log on to the RDS instance.
        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        """
        result = self._values.get("destination_endpoint_password")
        return result

    @builtins.property
    def destination_endpoint_port(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
        NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        """
        result = self._values.get("destination_endpoint_port")
        return result

    @builtins.property
    def destination_endpoint_region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointRegion: The region of the database.
        NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        """
        result = self._values.get("destination_endpoint_region")
        return result

    @builtins.property
    def destination_endpoint_user_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        destinationEndpointUserName: The database account.
        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        """
        result = self._values.get("destination_endpoint_user_name")
        return result

    @builtins.property
    def duplicate_conflict(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
        failure: The object with the same name fails (default).
        renamenew: renames an object with the same name.
        """
        result = self._values.get("duplicate_conflict")
        return result

    @builtins.property
    def restore_dir(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
        """
        result = self._values.get("restore_dir")
        return result

    @builtins.property
    def restore_home(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreHome: Database Program Directory.
        """
        result = self._values.get("restore_home")
        return result

    @builtins.property
    def restore_objects(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        restoreObjects: Restore an object.
        Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        """
        result = self._values.get("restore_objects")
        return result

    @builtins.property
    def restore_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
        """
        result = self._values.get("restore_time")
        return result

    @builtins.property
    def start_task(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: startTask: Start restore task after creating a recovery task.
        """
        result = self._values.get("start_task")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRestoreTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RestoreTask",
    "RestoreTaskProps",
    "RosRestoreTask",
    "RosRestoreTaskProps",
]

publication.publish()
