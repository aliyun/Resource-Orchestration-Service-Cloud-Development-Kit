'''
## Aliyun ROS DBS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DBS from '@alicloud/ros-cdk-dbs';
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


class RestoreTask(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dbs.RestoreTask",
):
    '''A ROS resource type:  ``ALIYUN::DBS::RestoreTask``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RestoreTaskProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DBS::RestoreTask``.

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
                props: typing.Union[RestoreTaskProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrRestoreTaskId")
    def attr_restore_task_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RestoreTaskId: The ID of the restoration task.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRestoreTaskId"))


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
        backup_plan_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        destination_endpoint_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        restore_task_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        backup_gateway_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        backup_set_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_database_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_oracle_sid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        duplicate_conflict: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_dir: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_home: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_objects: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        start_task: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DBS::RestoreTask``.

        :param backup_plan_id: Property backupPlanId: The ID of the backup plan.
        :param destination_endpoint_instance_type: Property destinationEndpointInstanceType: The location of the database. Valid values: - rds - ecs - express: a database connected over express connect, VPN Gateway, or smart gateway. - agent: The database connected through the backup Gateway - dds: apsaradb for MongoDB - kvstore - polardb - drds - dg: the database is directly connected through IP Address: Port.
        :param restore_task_name: Property restoreTaskName: The name of the restoration task.
        :param backup_gateway_id: Property backupGatewayId: The ID of the backup gateway. NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        :param backup_set_id: Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.
        :param destination_endpoint_database_name: Property destinationEndpointDatabaseName: The name of the RDS database. Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        :param destination_endpoint_instance_id: Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query. NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        :param destination_endpoint_ip: Property destinationEndpointIp: The endpoint used to connect to the database. NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        :param destination_endpoint_oracle_sid: Property destinationEndpointOracleSid: The SID of the Oracle instance. Note This parameter is required if the database type is Oracle.
        :param destination_endpoint_password: Property destinationEndpointPassword: The password that is used to log on to the RDS instance. Note You must specify this parameter when the database type is Redis, or the database location is agent and the database type is MSSQL.
        :param destination_endpoint_port: Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server. NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        :param destination_endpoint_region: Property destinationEndpointRegion: The region of the database. NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        :param destination_endpoint_user_name: Property destinationEndpointUserName: The database account. Note You must specify this parameter when the database type is Redis, or the database location is agent and the database type is MSSQL.
        :param duplicate_conflict: Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values: failure: The object with the same name fails (default). renamenew: renames an object with the same name.
        :param restore_dir: Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
        :param restore_home: Property restoreHome: Database Program Directory.
        :param restore_objects: Property restoreObjects: Restore an object. Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        :param restore_time: Property restoreTime: The time when the fault is restored. Set the value to 1554560477000.
        :param start_task: Property startTask: Start restore task after creating a recovery task.
        '''
        if __debug__:
            def stub(
                *,
                backup_plan_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                destination_endpoint_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                restore_task_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                backup_gateway_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                backup_set_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_database_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_oracle_sid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                duplicate_conflict: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                restore_dir: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                restore_home: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                restore_objects: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                restore_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                start_task: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument backup_plan_id", value=backup_plan_id, expected_type=type_hints["backup_plan_id"])
            check_type(argname="argument destination_endpoint_instance_type", value=destination_endpoint_instance_type, expected_type=type_hints["destination_endpoint_instance_type"])
            check_type(argname="argument restore_task_name", value=restore_task_name, expected_type=type_hints["restore_task_name"])
            check_type(argname="argument backup_gateway_id", value=backup_gateway_id, expected_type=type_hints["backup_gateway_id"])
            check_type(argname="argument backup_set_id", value=backup_set_id, expected_type=type_hints["backup_set_id"])
            check_type(argname="argument destination_endpoint_database_name", value=destination_endpoint_database_name, expected_type=type_hints["destination_endpoint_database_name"])
            check_type(argname="argument destination_endpoint_instance_id", value=destination_endpoint_instance_id, expected_type=type_hints["destination_endpoint_instance_id"])
            check_type(argname="argument destination_endpoint_ip", value=destination_endpoint_ip, expected_type=type_hints["destination_endpoint_ip"])
            check_type(argname="argument destination_endpoint_oracle_sid", value=destination_endpoint_oracle_sid, expected_type=type_hints["destination_endpoint_oracle_sid"])
            check_type(argname="argument destination_endpoint_password", value=destination_endpoint_password, expected_type=type_hints["destination_endpoint_password"])
            check_type(argname="argument destination_endpoint_port", value=destination_endpoint_port, expected_type=type_hints["destination_endpoint_port"])
            check_type(argname="argument destination_endpoint_region", value=destination_endpoint_region, expected_type=type_hints["destination_endpoint_region"])
            check_type(argname="argument destination_endpoint_user_name", value=destination_endpoint_user_name, expected_type=type_hints["destination_endpoint_user_name"])
            check_type(argname="argument duplicate_conflict", value=duplicate_conflict, expected_type=type_hints["duplicate_conflict"])
            check_type(argname="argument restore_dir", value=restore_dir, expected_type=type_hints["restore_dir"])
            check_type(argname="argument restore_home", value=restore_home, expected_type=type_hints["restore_home"])
            check_type(argname="argument restore_objects", value=restore_objects, expected_type=type_hints["restore_objects"])
            check_type(argname="argument restore_time", value=restore_time, expected_type=type_hints["restore_time"])
            check_type(argname="argument start_task", value=start_task, expected_type=type_hints["start_task"])
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
    def backup_plan_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property backupPlanId: The ID of the backup plan.'''
        result = self._values.get("backup_plan_id")
        assert result is not None, "Required property 'backup_plan_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def destination_endpoint_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property destinationEndpointInstanceType: The location of the database.

        Valid values:

        - rds
        - ecs
        - express: a database connected over express connect, VPN Gateway, or smart gateway.
        - agent: The database connected through the backup Gateway
        - dds: apsaradb for MongoDB
        - kvstore
        - polardb
        - drds
        - dg: the database is directly connected through IP Address: Port.
        '''
        result = self._values.get("destination_endpoint_instance_type")
        assert result is not None, "Required property 'destination_endpoint_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def restore_task_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property restoreTaskName: The name of the restoration task.'''
        result = self._values.get("restore_task_name")
        assert result is not None, "Required property 'restore_task_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def backup_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property backupGatewayId: The ID of the backup gateway.

        NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        '''
        result = self._values.get("backup_gateway_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.'''
        result = self._values.get("backup_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_database_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property destinationEndpointDatabaseName: The name of the RDS database.

        Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        '''
        result = self._values.get("destination_endpoint_database_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.

        NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        '''
        result = self._values.get("destination_endpoint_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property destinationEndpointIp: The endpoint used to connect to the database.

        NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        '''
        result = self._values.get("destination_endpoint_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_oracle_sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property destinationEndpointOracleSid: The SID of the Oracle instance.

        Note This parameter is required if the database type is Oracle.
        '''
        result = self._values.get("destination_endpoint_oracle_sid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property destinationEndpointPassword: The password that is used to log on to the RDS instance.

        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        '''
        result = self._values.get("destination_endpoint_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.

        NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        '''
        result = self._values.get("destination_endpoint_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property destinationEndpointRegion: The region of the database.

        NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        '''
        result = self._values.get("destination_endpoint_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property destinationEndpointUserName: The database account.

        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        '''
        result = self._values.get("destination_endpoint_user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duplicate_conflict(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property duplicateConflict: The handling method for conflicts between objects with the same name.

        Valid values:
        failure: The object with the same name fails (default).
        renamenew: renames an object with the same name.
        '''
        result = self._values.get("duplicate_conflict")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.'''
        result = self._values.get("restore_dir")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_home(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property restoreHome: Database Program Directory.'''
        result = self._values.get("restore_home")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_objects(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property restoreObjects: Restore an object.

        Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        '''
        result = self._values.get("restore_objects")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property restoreTime: The time when the fault is restored.

        Set the value to 1554560477000.
        '''
        result = self._values.get("restore_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def start_task(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property startTask: Start restore task after creating a recovery task.'''
        result = self._values.get("start_task")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::DBS::RestoreTask``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosRestoreTaskProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DBS::RestoreTask``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosRestoreTaskProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrRestoreTaskId")
    def attr_restore_task_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RestoreTaskId: The ID of the restoration task.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRestoreTaskId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backupPlanId")
    def backup_plan_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: backupPlanId: The ID of the backup plan.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "backupPlanId"))

    @backup_plan_id.setter
    def backup_plan_id(
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
        jsii.set(self, "backupPlanId", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpointInstanceType")
    def destination_endpoint_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
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
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "destinationEndpointInstanceType"))

    @destination_endpoint_instance_type.setter
    def destination_endpoint_instance_type(
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
        jsii.set(self, "destinationEndpointInstanceType", value)

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
    @jsii.member(jsii_name="restoreTaskName")
    def restore_task_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: restoreTaskName: The name of the restoration task.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "restoreTaskName"))

    @restore_task_name.setter
    def restore_task_name(
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
        jsii.set(self, "restoreTaskName", value)

    @builtins.property
    @jsii.member(jsii_name="backupGatewayId")
    def backup_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupGatewayId: The ID of the backup gateway.
        NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "backupGatewayId"))

    @backup_gateway_id.setter
    def backup_gateway_id(
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
        jsii.set(self, "backupGatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="backupSetId")
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
        RestoreTime.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "backupSetId"))

    @backup_set_id.setter
    def backup_set_id(
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
        jsii.set(self, "backupSetId", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpointDatabaseName")
    def destination_endpoint_database_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointDatabaseName: The name of the RDS database.
        Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "destinationEndpointDatabaseName"))

    @destination_endpoint_database_name.setter
    def destination_endpoint_database_name(
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
        jsii.set(self, "destinationEndpointDatabaseName", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpointInstanceId")
    def destination_endpoint_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
        NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "destinationEndpointInstanceId"))

    @destination_endpoint_instance_id.setter
    def destination_endpoint_instance_id(
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
        jsii.set(self, "destinationEndpointInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpointIp")
    def destination_endpoint_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointIp: The endpoint used to connect to the database.
        NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "destinationEndpointIp"))

    @destination_endpoint_ip.setter
    def destination_endpoint_ip(
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
        jsii.set(self, "destinationEndpointIp", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpointOracleSid")
    def destination_endpoint_oracle_sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointOracleSid: The SID of the Oracle instance.
        Note This parameter is required if the database type is Oracle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "destinationEndpointOracleSid"))

    @destination_endpoint_oracle_sid.setter
    def destination_endpoint_oracle_sid(
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
        jsii.set(self, "destinationEndpointOracleSid", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpointPassword")
    def destination_endpoint_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointPassword: The password that is used to log on to the RDS instance.
        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "destinationEndpointPassword"))

    @destination_endpoint_password.setter
    def destination_endpoint_password(
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
        jsii.set(self, "destinationEndpointPassword", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpointPort")
    def destination_endpoint_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
        NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "destinationEndpointPort"))

    @destination_endpoint_port.setter
    def destination_endpoint_port(
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
        jsii.set(self, "destinationEndpointPort", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpointRegion")
    def destination_endpoint_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointRegion: The region of the database.
        NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "destinationEndpointRegion"))

    @destination_endpoint_region.setter
    def destination_endpoint_region(
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
        jsii.set(self, "destinationEndpointRegion", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpointUserName")
    def destination_endpoint_user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointUserName: The database account.
        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "destinationEndpointUserName"))

    @destination_endpoint_user_name.setter
    def destination_endpoint_user_name(
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
        jsii.set(self, "destinationEndpointUserName", value)

    @builtins.property
    @jsii.member(jsii_name="duplicateConflict")
    def duplicate_conflict(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
        failure: The object with the same name fails (default).
        renamenew: renames an object with the same name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "duplicateConflict"))

    @duplicate_conflict.setter
    def duplicate_conflict(
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
        jsii.set(self, "duplicateConflict", value)

    @builtins.property
    @jsii.member(jsii_name="restoreDir")
    def restore_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "restoreDir"))

    @restore_dir.setter
    def restore_dir(
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
        jsii.set(self, "restoreDir", value)

    @builtins.property
    @jsii.member(jsii_name="restoreHome")
    def restore_home(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: restoreHome: Database Program Directory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "restoreHome"))

    @restore_home.setter
    def restore_home(
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
        jsii.set(self, "restoreHome", value)

    @builtins.property
    @jsii.member(jsii_name="restoreObjects")
    def restore_objects(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        restoreObjects: Restore an object.
        Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "restoreObjects"))

    @restore_objects.setter
    def restore_objects(
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
        jsii.set(self, "restoreObjects", value)

    @builtins.property
    @jsii.member(jsii_name="restoreTime")
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "restoreTime"))

    @restore_time.setter
    def restore_time(
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
        jsii.set(self, "restoreTime", value)

    @builtins.property
    @jsii.member(jsii_name="startTask")
    def start_task(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: startTask: Start restore task after creating a recovery task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "startTask"))

    @start_task.setter
    def start_task(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        backup_plan_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        destination_endpoint_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        restore_task_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        backup_gateway_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        backup_set_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_database_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_oracle_sid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        destination_endpoint_user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        duplicate_conflict: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_dir: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_home: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_objects: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        restore_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        start_task: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DBS::RestoreTask``.

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
        '''
        if __debug__:
            def stub(
                *,
                backup_plan_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                destination_endpoint_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                restore_task_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                backup_gateway_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                backup_set_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_database_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_oracle_sid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                destination_endpoint_user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                duplicate_conflict: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                restore_dir: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                restore_home: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                restore_objects: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                restore_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                start_task: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument backup_plan_id", value=backup_plan_id, expected_type=type_hints["backup_plan_id"])
            check_type(argname="argument destination_endpoint_instance_type", value=destination_endpoint_instance_type, expected_type=type_hints["destination_endpoint_instance_type"])
            check_type(argname="argument restore_task_name", value=restore_task_name, expected_type=type_hints["restore_task_name"])
            check_type(argname="argument backup_gateway_id", value=backup_gateway_id, expected_type=type_hints["backup_gateway_id"])
            check_type(argname="argument backup_set_id", value=backup_set_id, expected_type=type_hints["backup_set_id"])
            check_type(argname="argument destination_endpoint_database_name", value=destination_endpoint_database_name, expected_type=type_hints["destination_endpoint_database_name"])
            check_type(argname="argument destination_endpoint_instance_id", value=destination_endpoint_instance_id, expected_type=type_hints["destination_endpoint_instance_id"])
            check_type(argname="argument destination_endpoint_ip", value=destination_endpoint_ip, expected_type=type_hints["destination_endpoint_ip"])
            check_type(argname="argument destination_endpoint_oracle_sid", value=destination_endpoint_oracle_sid, expected_type=type_hints["destination_endpoint_oracle_sid"])
            check_type(argname="argument destination_endpoint_password", value=destination_endpoint_password, expected_type=type_hints["destination_endpoint_password"])
            check_type(argname="argument destination_endpoint_port", value=destination_endpoint_port, expected_type=type_hints["destination_endpoint_port"])
            check_type(argname="argument destination_endpoint_region", value=destination_endpoint_region, expected_type=type_hints["destination_endpoint_region"])
            check_type(argname="argument destination_endpoint_user_name", value=destination_endpoint_user_name, expected_type=type_hints["destination_endpoint_user_name"])
            check_type(argname="argument duplicate_conflict", value=duplicate_conflict, expected_type=type_hints["duplicate_conflict"])
            check_type(argname="argument restore_dir", value=restore_dir, expected_type=type_hints["restore_dir"])
            check_type(argname="argument restore_home", value=restore_home, expected_type=type_hints["restore_home"])
            check_type(argname="argument restore_objects", value=restore_objects, expected_type=type_hints["restore_objects"])
            check_type(argname="argument restore_time", value=restore_time, expected_type=type_hints["restore_time"])
            check_type(argname="argument start_task", value=start_task, expected_type=type_hints["start_task"])
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
    def backup_plan_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: backupPlanId: The ID of the backup plan.
        '''
        result = self._values.get("backup_plan_id")
        assert result is not None, "Required property 'backup_plan_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def destination_endpoint_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
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
        '''
        result = self._values.get("destination_endpoint_instance_type")
        assert result is not None, "Required property 'destination_endpoint_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def restore_task_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: restoreTaskName: The name of the restoration task.
        '''
        result = self._values.get("restore_task_name")
        assert result is not None, "Required property 'restore_task_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def backup_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupGatewayId: The ID of the backup gateway.
        NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        '''
        result = self._values.get("backup_gateway_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def backup_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
        RestoreTime.
        '''
        result = self._values.get("backup_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_database_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointDatabaseName: The name of the RDS database.
        Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        '''
        result = self._values.get("destination_endpoint_database_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
        NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        '''
        result = self._values.get("destination_endpoint_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointIp: The endpoint used to connect to the database.
        NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        '''
        result = self._values.get("destination_endpoint_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_oracle_sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointOracleSid: The SID of the Oracle instance.
        Note This parameter is required if the database type is Oracle.
        '''
        result = self._values.get("destination_endpoint_oracle_sid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointPassword: The password that is used to log on to the RDS instance.
        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        '''
        result = self._values.get("destination_endpoint_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
        NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        '''
        result = self._values.get("destination_endpoint_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointRegion: The region of the database.
        NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        '''
        result = self._values.get("destination_endpoint_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def destination_endpoint_user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destinationEndpointUserName: The database account.
        Note You must specify this parameter when the database type is Redis, or the database location
        is agent and the database type is MSSQL.
        '''
        result = self._values.get("destination_endpoint_user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duplicate_conflict(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
        failure: The object with the same name fails (default).
        renamenew: renames an object with the same name.
        '''
        result = self._values.get("duplicate_conflict")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
        '''
        result = self._values.get("restore_dir")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_home(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: restoreHome: Database Program Directory.
        '''
        result = self._values.get("restore_home")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_objects(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        restoreObjects: Restore an object.
        Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        '''
        result = self._values.get("restore_objects")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def restore_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
        '''
        result = self._values.get("restore_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def start_task(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: startTask: Start restore task after creating a recovery task.
        '''
        result = self._values.get("start_task")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
