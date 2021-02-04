"""
## Aliyun ROS DTS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_dts as DTS
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


class MigrationJob(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.MigrationJob",
):
    """A ROS resource type:  ``ALIYUN::DTS::MigrationJob``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "MigrationJobProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DTS::MigrationJob``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(MigrationJob, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMigrationJobId")
    def attr_migration_job_id(self) -> typing.Any:
        """
        :Attribute: MigrationJobId: Migration tasks task ID
        """
        return jsii.get(self, "attrMigrationJobId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.MigrationJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "migration_job_class": "migrationJobClass",
        "destination_endpoint": "destinationEndpoint",
        "migration_job_name": "migrationJobName",
        "migration_mode": "migrationMode",
        "migration_object": "migrationObject",
        "source_endpoint": "sourceEndpoint",
    },
)
class MigrationJobProps:
    def __init__(
        self,
        *,
        migration_job_class: builtins.str,
        destination_endpoint: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.DestinationEndpointProperty"]] = None,
        migration_job_name: typing.Optional[builtins.str] = None,
        migration_mode: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.MigrationModeProperty"]] = None,
        migration_object: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.MigrationObjectProperty"]]]] = None,
        source_endpoint: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.SourceEndpointProperty"]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DTS::MigrationJob``.

        :param migration_job_class: 
        :param destination_endpoint: 
        :param migration_job_name: 
        :param migration_mode: 
        :param migration_object: 
        :param source_endpoint: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "migration_job_class": migration_job_class,
        }
        if destination_endpoint is not None:
            self._values["destination_endpoint"] = destination_endpoint
        if migration_job_name is not None:
            self._values["migration_job_name"] = migration_job_name
        if migration_mode is not None:
            self._values["migration_mode"] = migration_mode
        if migration_object is not None:
            self._values["migration_object"] = migration_object
        if source_endpoint is not None:
            self._values["source_endpoint"] = source_endpoint

    @builtins.property
    def migration_job_class(self) -> builtins.str:
        """
        :Property:

        migrationJobClass: Migrating instance specifications, which can be:
        small, medium, large and so on.
        Various specifications of the reference data migration test performance specifications
        """
        result = self._values.get("migration_job_class")
        assert result is not None, "Required property 'migration_job_class' is missing"
        return result

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.DestinationEndpointProperty"]]:
        """
        :Property: destinationEndpoint: Migration target configuration
        """
        result = self._values.get("destination_endpoint")
        return result

    @builtins.property
    def migration_job_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: migrationJobName: Migrating job name
        """
        result = self._values.get("migration_job_name")
        return result

    @builtins.property
    def migration_mode(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.MigrationModeProperty"]]:
        """
        :Property: migrationMode: Migration mode
        """
        result = self._values.get("migration_mode")
        return result

    @builtins.property
    def migration_object(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.MigrationObjectProperty"]]]]:
        """
        :Property: migrationObject: Objects that need to be migrated
        """
        result = self._values.get("migration_object")
        return result

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.SourceEndpointProperty"]]:
        """
        :Property: sourceEndpoint: Migration source configuration
        """
        result = self._values.get("source_endpoint")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MigrationJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMigrationJob(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob",
):
    """A ROS template type:  ``ALIYUN::DTS::MigrationJob``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosMigrationJobProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DTS::MigrationJob``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosMigrationJob, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrMigrationJobId")
    def attr_migration_job_id(self) -> typing.Any:
        """
        :Attribute: MigrationJobId: Migration tasks task ID
        """
        return jsii.get(self, "attrMigrationJobId")

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
    @jsii.member(jsii_name="migrationJobClass")
    def migration_job_class(self) -> builtins.str:
        """
        :Property:

        migrationJobClass: Migrating instance specifications, which can be:
        small, medium, large and so on.
        Various specifications of the reference data migration test performance specifications
        """
        return jsii.get(self, "migrationJobClass")

    @migration_job_class.setter # type: ignore
    def migration_job_class(self, value: builtins.str) -> None:
        jsii.set(self, "migrationJobClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpoint")
    def destination_endpoint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.DestinationEndpointProperty"]]:
        """
        :Property: destinationEndpoint: Migration target configuration
        """
        return jsii.get(self, "destinationEndpoint")

    @destination_endpoint.setter # type: ignore
    def destination_endpoint(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.DestinationEndpointProperty"]],
    ) -> None:
        jsii.set(self, "destinationEndpoint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="migrationJobName")
    def migration_job_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: migrationJobName: Migrating job name
        """
        return jsii.get(self, "migrationJobName")

    @migration_job_name.setter # type: ignore
    def migration_job_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "migrationJobName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="migrationMode")
    def migration_mode(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.MigrationModeProperty"]]:
        """
        :Property: migrationMode: Migration mode
        """
        return jsii.get(self, "migrationMode")

    @migration_mode.setter # type: ignore
    def migration_mode(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.MigrationModeProperty"]],
    ) -> None:
        jsii.set(self, "migrationMode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="migrationObject")
    def migration_object(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.MigrationObjectProperty"]]]]:
        """
        :Property: migrationObject: Objects that need to be migrated
        """
        return jsii.get(self, "migrationObject")

    @migration_object.setter # type: ignore
    def migration_object(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.MigrationObjectProperty"]]]],
    ) -> None:
        jsii.set(self, "migrationObject", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceEndpoint")
    def source_endpoint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.SourceEndpointProperty"]]:
        """
        :Property: sourceEndpoint: Migration source configuration
        """
        return jsii.get(self, "sourceEndpoint")

    @source_endpoint.setter # type: ignore
    def source_endpoint(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.SourceEndpointProperty"]],
    ) -> None:
        jsii.set(self, "sourceEndpoint", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty",
        jsii_struct_bases=[],
        name_mapping={"column_name": "columnName"},
    )
    class ColumnExcludesProperty:
        def __init__(
            self,
            *,
            column_name: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param column_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if column_name is not None:
                self._values["column_name"] = column_name

        @builtins.property
        def column_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: columnName: Column names are not migrated in the table to be migrated
            """
            result = self._values.get("column_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnExcludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty",
        jsii_struct_bases=[],
        name_mapping={"column_name": "columnName", "new_column_name": "newColumnName"},
    )
    class ColumnIncludesProperty:
        def __init__(
            self,
            *,
            column_name: typing.Optional[builtins.str] = None,
            new_column_name: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param column_name: 
            :param new_column_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if column_name is not None:
                self._values["column_name"] = column_name
            if new_column_name is not None:
                self._values["new_column_name"] = new_column_name

        @builtins.property
        def column_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: columnName: The column name to be migrated in the table to be migrated
            """
            result = self._values.get("column_name")
            return result

        @builtins.property
        def new_column_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: newColumnName: The name of the column to be migrated to be mapped in the target instance
            """
            result = self._values.get("new_column_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnIncludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "password": "password",
            "region": "region",
            "user_name": "userName",
            "database_name": "databaseName",
            "engine_name": "engineName",
            "instance_id": "instanceId",
            "ip": "ip",
            "port": "port",
            "role": "role",
        },
    )
    class DestinationEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: builtins.str,
            password: builtins.str,
            region: builtins.str,
            user_name: builtins.str,
            database_name: typing.Optional[builtins.str] = None,
            engine_name: typing.Optional[builtins.str] = None,
            instance_id: typing.Optional[builtins.str] = None,
            ip: typing.Optional[builtins.str] = None,
            port: typing.Optional[builtins.str] = None,
            role: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param instance_type: 
            :param password: 
            :param region: 
            :param user_name: 
            :param database_name: 
            :param engine_name: 
            :param instance_id: 
            :param ip: 
            :param port: 
            :param role: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "instance_type": instance_type,
                "password": password,
                "region": region,
                "user_name": user_name,
            }
            if database_name is not None:
                self._values["database_name"] = database_name
            if engine_name is not None:
                self._values["engine_name"] = engine_name
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if ip is not None:
                self._values["ip"] = ip
            if port is not None:
                self._values["port"] = port
            if role is not None:
                self._values["role"] = role

        @builtins.property
        def instance_type(self) -> builtins.str:
            """
            :Property:

            instanceType: The instance type of the target instance, including:
            RDS: Alibaba Cloud RDS instance
            ECS: Self-built database on ECS
            LocalInstance: Self-built database of local IDC
            MongoDB: Alibaba Cloud MongoDB instance
            Redis: Alibaba Cloud Redis instance
            DRDS: Alibaba Cloud DRDS instance
            PetaData: Alibaba Cloud PetaData instance
            OceanBase: Alibaba Cloud OceanBase instance
            POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            """
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return result

        @builtins.property
        def password(self) -> builtins.str:
            """
            :Property: password: Target instance password
            """
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return result

        @builtins.property
        def region(self) -> builtins.str:
            """
            :Property: region: The area where the target instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            """
            result = self._values.get("region")
            assert result is not None, "Required property 'region' is missing"
            return result

        @builtins.property
        def user_name(self) -> builtins.str:
            """
            :Property: userName: Target instance access account
            """
            result = self._values.get("user_name")
            assert result is not None, "Required property 'user_name' is missing"
            return result

        @builtins.property
        def database_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: databaseName: The connection database library name of the target instance, which is required if the target instance's database type is: PostgreSQL, PPAS, or MongoDB
            """
            result = self._values.get("database_name")
            return result

        @builtins.property
        def engine_name(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            engineName: The data type of the target instance. It is required when the target instance is a self-built database. The values include:
            MySQL, SQLServer, PostgreSQL, PPAS, MongoDB, Redis
            """
            result = self._values.get("engine_name")
            return result

        @builtins.property
        def instance_id(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            instanceId: Target instance ID
            When the DestinationEndpoint.InstanceType value is RDS, this parameter needs to be passed to the RDS instance ID.
            When the DestinationEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
            When the DestinationEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
            When the DestinationEndpoint.InstanceType value is Redis, this parameter needs to be passed in the Redis instance ID.
            When the DestinationEndpoint.InstanceType value is DRDS, this parameter needs to be passed to the DRDS instance ID.
            When the DestinationEndpoint.InstanceType value is PetaData, this parameter needs to pass in the PetaData instance ID.
            When the DestinationEndpoint.InstanceType value is OceanBase, this parameter needs to be passed to the OceanBase instance ID.
            When the DestinationEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to the POLARDB for MySQL cluster ID.
            """
            result = self._values.get("instance_id")
            return result

        @builtins.property
        def ip(self) -> typing.Optional[builtins.str]:
            """
            :Property: ip: The connection address of the target instance. Required when the source instance is a self-built database.
            """
            result = self._values.get("ip")
            return result

        @builtins.property
        def port(self) -> typing.Optional[builtins.str]:
            """
            :Property: port: The listening port of the target instance, which is required when the source instance is a self-built database.
            """
            result = self._values.get("port")
            return result

        @builtins.property
        def role(self) -> typing.Optional[builtins.str]:
            """
            :Property: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            """
            result = self._values.get("role")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DestinationEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "data_intialization": "dataIntialization",
            "data_synchronization": "dataSynchronization",
            "structure_intialization": "structureIntialization",
        },
    )
    class MigrationModeProperty:
        def __init__(
            self,
            *,
            data_intialization: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            data_synchronization: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            structure_intialization: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param data_intialization: 
            :param data_synchronization: 
            :param structure_intialization: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if data_intialization is not None:
                self._values["data_intialization"] = data_intialization
            if data_synchronization is not None:
                self._values["data_synchronization"] = data_synchronization
            if structure_intialization is not None:
                self._values["structure_intialization"] = structure_intialization

        @builtins.property
        def data_intialization(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property:

            dataIntialization: Whether the migration task performs full data migration, and the values include:
            true: indicates that full data migration is required.
            false: indicates no structural migration
            """
            result = self._values.get("data_intialization")
            return result

        @builtins.property
        def data_synchronization(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property:

            dataSynchronization: Whether the migration task synchronizes incremental data, including:
            true: Indicates that incremental data synchronization is required.
            false: Indicates that incremental data synchronization is not performed.
            """
            result = self._values.get("data_synchronization")
            return result

        @builtins.property
        def structure_intialization(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property:

            structureIntialization: Whether the migration task performs structural migration, and the values include:
            true: indicates that a structure migration is required.
            false: indicates no structural migration
            """
            result = self._values.get("structure_intialization")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MigrationModeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty",
        jsii_struct_bases=[],
        name_mapping={
            "db_name": "dbName",
            "new_db_name": "newDbName",
            "new_schema_name": "newSchemaName",
            "schema_name": "schemaName",
            "table_excludes": "tableExcludes",
            "table_includes": "tableIncludes",
        },
    )
    class MigrationObjectProperty:
        def __init__(
            self,
            *,
            db_name: typing.Optional[builtins.str] = None,
            new_db_name: typing.Optional[builtins.str] = None,
            new_schema_name: typing.Optional[builtins.str] = None,
            schema_name: typing.Optional[builtins.str] = None,
            table_excludes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.TableExcludesProperty"]]]] = None,
            table_includes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.TableIncludesProperty"]]]] = None,
        ) -> None:
            """
            :param db_name: 
            :param new_db_name: 
            :param new_schema_name: 
            :param schema_name: 
            :param table_excludes: 
            :param table_includes: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if db_name is not None:
                self._values["db_name"] = db_name
            if new_db_name is not None:
                self._values["new_db_name"] = new_db_name
            if new_schema_name is not None:
                self._values["new_schema_name"] = new_schema_name
            if schema_name is not None:
                self._values["schema_name"] = schema_name
            if table_excludes is not None:
                self._values["table_excludes"] = table_excludes
            if table_includes is not None:
                self._values["table_includes"] = table_includes

        @builtins.property
        def db_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: dbName: db name to be migrated
            """
            result = self._values.get("db_name")
            return result

        @builtins.property
        def new_db_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: newDbName: The name of the db to be migrated in the target instance.
            """
            result = self._values.get("new_db_name")
            return result

        @builtins.property
        def new_schema_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: newSchemaName: Schema name to be migrated by Schema in the target instance
            """
            result = self._values.get("new_schema_name")
            return result

        @builtins.property
        def schema_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: schemaName: Schema name to be migrated
            """
            result = self._values.get("schema_name")
            return result

        @builtins.property
        def table_excludes(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.TableExcludesProperty"]]]]:
            """
            :Property: tableExcludes: Table excludes configuration
            """
            result = self._values.get("table_excludes")
            return result

        @builtins.property
        def table_includes(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.TableIncludesProperty"]]]]:
            """
            :Property: tableIncludes: Table configuration
            """
            result = self._values.get("table_includes")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MigrationObjectProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "password": "password",
            "region": "region",
            "user_name": "userName",
            "database_name": "databaseName",
            "engine_name": "engineName",
            "instance_id": "instanceId",
            "ip": "ip",
            "oracle_sid": "oracleSid",
            "owner_id": "ownerId",
            "port": "port",
            "role": "role",
        },
    )
    class SourceEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: builtins.str,
            password: builtins.str,
            region: builtins.str,
            user_name: builtins.str,
            database_name: typing.Optional[builtins.str] = None,
            engine_name: typing.Optional[builtins.str] = None,
            instance_id: typing.Optional[builtins.str] = None,
            ip: typing.Optional[builtins.str] = None,
            oracle_sid: typing.Optional[builtins.str] = None,
            owner_id: typing.Optional[builtins.str] = None,
            port: typing.Optional[builtins.str] = None,
            role: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param instance_type: 
            :param password: 
            :param region: 
            :param user_name: 
            :param database_name: 
            :param engine_name: 
            :param instance_id: 
            :param ip: 
            :param oracle_sid: 
            :param owner_id: 
            :param port: 
            :param role: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "instance_type": instance_type,
                "password": password,
                "region": region,
                "user_name": user_name,
            }
            if database_name is not None:
                self._values["database_name"] = database_name
            if engine_name is not None:
                self._values["engine_name"] = engine_name
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if ip is not None:
                self._values["ip"] = ip
            if oracle_sid is not None:
                self._values["oracle_sid"] = oracle_sid
            if owner_id is not None:
                self._values["owner_id"] = owner_id
            if port is not None:
                self._values["port"] = port
            if role is not None:
                self._values["role"] = role

        @builtins.property
        def instance_type(self) -> builtins.str:
            """
            :Property:

            instanceType: The instance type of the migration source instance, including:
            RDS: Alibaba Cloud RDS instance
            ECS: Self-built database on ECS
            LocalInstance: Self-built database with public IP address
            Express: self-built database accessed via dedicated line
            MongoDB: Ali cloud MongoDB instance
            POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            """
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return result

        @builtins.property
        def password(self) -> builtins.str:
            """
            :Property: password: Source instance password
            """
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return result

        @builtins.property
        def region(self) -> builtins.str:
            """
            :Property: region: The area where the source instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            """
            result = self._values.get("region")
            assert result is not None, "Required property 'region' is missing"
            return result

        @builtins.property
        def user_name(self) -> builtins.str:
            """
            :Property: userName: Source instance access account
            """
            result = self._values.get("user_name")
            assert result is not None, "Required property 'user_name' is missing"
            return result

        @builtins.property
        def database_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: databaseName: When the source instance database type is PostgreSQL or MongoDB, this parameter is the database library name used when creating the connection.
            """
            result = self._values.get("database_name")
            return result

        @builtins.property
        def engine_name(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            engineName: The database type of the source instance, which is required when SourceEndpoint.InstanceType is not RDS. Values include:
            MySQL, SQLServer, PostgreSQL, Oracle, MongoDB, Redis
            """
            result = self._values.get("engine_name")
            return result

        @builtins.property
        def instance_id(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            instanceId: Source instance ID.
            When the value of SourceEndpoint.InstanceType is RDS, this parameter needs to be passed in the RDS instance ID.
            When the SourceEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
            When the SourceEndpoint.InstanceType value is Express, this parameter needs to be passed in the VPC ID (ie, the proprietary network ID).
            When the SourceEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
            When the SourceEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to POLARDB for MySQL cluster ID.
            """
            result = self._values.get("instance_id")
            return result

        @builtins.property
        def ip(self) -> typing.Optional[builtins.str]:
            """
            :Property: ip: The connection address of the source instance. Required when the source instance is a self-built database.
            """
            result = self._values.get("ip")
            return result

        @builtins.property
        def oracle_sid(self) -> typing.Optional[builtins.str]:
            """
            :Property: oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
            """
            result = self._values.get("oracle_sid")
            return result

        @builtins.property
        def owner_id(self) -> typing.Optional[builtins.str]:
            """
            :Property: ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
            """
            result = self._values.get("owner_id")
            return result

        @builtins.property
        def port(self) -> typing.Optional[builtins.str]:
            """
            :Property: port: The listening port of the source instance, which is required when the source instance is a self-built database.
            """
            result = self._values.get("port")
            return result

        @builtins.property
        def role(self) -> typing.Optional[builtins.str]:
            """
            :Property: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            """
            result = self._values.get("role")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty",
        jsii_struct_bases=[],
        name_mapping={"table_name": "tableName"},
    )
    class TableExcludesProperty:
        def __init__(self, *, table_name: typing.Optional[builtins.str] = None) -> None:
            """
            :param table_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if table_name is not None:
                self._values["table_name"] = table_name

        @builtins.property
        def table_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: tableName: The name of the table to be migrated does not require the table name of the migration table.
            """
            result = self._values.get("table_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TableExcludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob.TableIncludesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "column_excludes": "columnExcludes",
            "column_includes": "columnIncludes",
            "filter_condition": "filterCondition",
            "new_table_name": "newTableName",
            "table_name": "tableName",
        },
    )
    class TableIncludesProperty:
        def __init__(
            self,
            *,
            column_excludes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.ColumnExcludesProperty"]]]] = None,
            column_includes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.ColumnIncludesProperty"]]]] = None,
            filter_condition: typing.Optional[builtins.str] = None,
            new_table_name: typing.Optional[builtins.str] = None,
            table_name: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param column_excludes: 
            :param column_includes: 
            :param filter_condition: 
            :param new_table_name: 
            :param table_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if column_excludes is not None:
                self._values["column_excludes"] = column_excludes
            if column_includes is not None:
                self._values["column_includes"] = column_includes
            if filter_condition is not None:
                self._values["filter_condition"] = filter_condition
            if new_table_name is not None:
                self._values["new_table_name"] = new_table_name
            if table_name is not None:
                self._values["table_name"] = table_name

        @builtins.property
        def column_excludes(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.ColumnExcludesProperty"]]]]:
            """
            :Property: columnExcludes: Column excludes configuration
            """
            result = self._values.get("column_excludes")
            return result

        @builtins.property
        def column_includes(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMigrationJob.ColumnIncludesProperty"]]]]:
            """
            :Property: columnIncludes: Column includes configuration
            """
            result = self._values.get("column_includes")
            return result

        @builtins.property
        def filter_condition(self) -> typing.Optional[builtins.str]:
            """
            :Property: filterCondition: Where condition
            """
            result = self._values.get("filter_condition")
            return result

        @builtins.property
        def new_table_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: newTableName: The name of the table to be migrated in the target instance mapping
            """
            result = self._values.get("new_table_name")
            return result

        @builtins.property
        def table_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: tableName: Table name to be migrated
            """
            result = self._values.get("table_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TableIncludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.RosMigrationJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "migration_job_class": "migrationJobClass",
        "destination_endpoint": "destinationEndpoint",
        "migration_job_name": "migrationJobName",
        "migration_mode": "migrationMode",
        "migration_object": "migrationObject",
        "source_endpoint": "sourceEndpoint",
    },
)
class RosMigrationJobProps:
    def __init__(
        self,
        *,
        migration_job_class: builtins.str,
        destination_endpoint: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosMigrationJob.DestinationEndpointProperty]] = None,
        migration_job_name: typing.Optional[builtins.str] = None,
        migration_mode: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosMigrationJob.MigrationModeProperty]] = None,
        migration_object: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosMigrationJob.MigrationObjectProperty]]]] = None,
        source_endpoint: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosMigrationJob.SourceEndpointProperty]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DTS::MigrationJob``.

        :param migration_job_class: 
        :param destination_endpoint: 
        :param migration_job_name: 
        :param migration_mode: 
        :param migration_object: 
        :param source_endpoint: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "migration_job_class": migration_job_class,
        }
        if destination_endpoint is not None:
            self._values["destination_endpoint"] = destination_endpoint
        if migration_job_name is not None:
            self._values["migration_job_name"] = migration_job_name
        if migration_mode is not None:
            self._values["migration_mode"] = migration_mode
        if migration_object is not None:
            self._values["migration_object"] = migration_object
        if source_endpoint is not None:
            self._values["source_endpoint"] = source_endpoint

    @builtins.property
    def migration_job_class(self) -> builtins.str:
        """
        :Property:

        migrationJobClass: Migrating instance specifications, which can be:
        small, medium, large and so on.
        Various specifications of the reference data migration test performance specifications
        """
        result = self._values.get("migration_job_class")
        assert result is not None, "Required property 'migration_job_class' is missing"
        return result

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosMigrationJob.DestinationEndpointProperty]]:
        """
        :Property: destinationEndpoint: Migration target configuration
        """
        result = self._values.get("destination_endpoint")
        return result

    @builtins.property
    def migration_job_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: migrationJobName: Migrating job name
        """
        result = self._values.get("migration_job_name")
        return result

    @builtins.property
    def migration_mode(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosMigrationJob.MigrationModeProperty]]:
        """
        :Property: migrationMode: Migration mode
        """
        result = self._values.get("migration_mode")
        return result

    @builtins.property
    def migration_object(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosMigrationJob.MigrationObjectProperty]]]]:
        """
        :Property: migrationObject: Objects that need to be migrated
        """
        result = self._values.get("migration_object")
        return result

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosMigrationJob.SourceEndpointProperty]]:
        """
        :Property: sourceEndpoint: Migration source configuration
        """
        result = self._values.get("source_endpoint")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMigrationJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSynchronizationJob(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob",
):
    """A ROS template type:  ``ALIYUN::DTS::SynchronizationJob``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSynchronizationJobProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DTS::SynchronizationJob``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSynchronizationJob, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrSynchronizationJobId")
    def attr_synchronization_job_id(self) -> typing.Any:
        """
        :Attribute: SynchronizationJobId: Synchronization instance ID
        """
        return jsii.get(self, "attrSynchronizationJobId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destinationEndpoint")
    def destination_endpoint(
        self,
    ) -> typing.Union["RosSynchronizationJob.DestinationEndpointProperty", ros_cdk_core.IResolvable]:
        """
        :Property: destinationEndpoint: Migration target configuration
        """
        return jsii.get(self, "destinationEndpoint")

    @destination_endpoint.setter # type: ignore
    def destination_endpoint(
        self,
        value: typing.Union["RosSynchronizationJob.DestinationEndpointProperty", ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "destinationEndpoint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destRegion")
    def dest_region(self) -> builtins.str:
        """
        :Property: destRegion: Region where the synchronization target instance is located.
        """
        return jsii.get(self, "destRegion")

    @dest_region.setter # type: ignore
    def dest_region(self, value: builtins.str) -> None:
        jsii.set(self, "destRegion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceEndpoint")
    def source_endpoint(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.SourceEndpointProperty"]:
        """
        :Property: sourceEndpoint: Migration source configuration
        """
        return jsii.get(self, "sourceEndpoint")

    @source_endpoint.setter # type: ignore
    def source_endpoint(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.SourceEndpointProperty"],
    ) -> None:
        jsii.set(self, "sourceEndpoint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceRegion")
    def source_region(self) -> builtins.str:
        """
        :Property: sourceRegion: Region where the synchronization source instance is located.
        """
        return jsii.get(self, "sourceRegion")

    @source_region.setter # type: ignore
    def source_region(self, value: builtins.str) -> None:
        jsii.set(self, "sourceRegion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="synchronizationJobClass")
    def synchronization_job_class(self) -> builtins.str:
        """
        :Property:

        synchronizationJobClass: Synchronous instance specifications, which can be:
        micro, small, medium, large and so on. The default value is: small
        """
        return jsii.get(self, "synchronizationJobClass")

    @synchronization_job_class.setter # type: ignore
    def synchronization_job_class(self, value: builtins.str) -> None:
        jsii.set(self, "synchronizationJobClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dataInitialization")
    def data_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
        false: no full data initialization
        The default value is: true
        """
        return jsii.get(self, "dataInitialization")

    @data_initialization.setter # type: ignore
    def data_initialization(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dataInitialization", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="networkType")
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
        """
        return jsii.get(self, "networkType")

    @network_type.setter # type: ignore
    def network_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "networkType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="payType")
    def pay_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        payType: Payment type, which include:
        Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
        """
        return jsii.get(self, "payType")

    @pay_type.setter # type: ignore
    def pay_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
        Year: Annual, Month: monthly
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="structureInitialization")
    def structure_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
        false: no result object initialization
        The default value is: true
        """
        return jsii.get(self, "structureInitialization")

    @structure_initialization.setter # type: ignore
    def structure_initialization(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "structureInitialization", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="synchronizationObjects")
    def synchronization_objects(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.SynchronizationObjectsProperty"]]]]:
        """
        :Property: synchronizationObjects: Objects that need to be synchronized
        """
        return jsii.get(self, "synchronizationObjects")

    @synchronization_objects.setter # type: ignore
    def synchronization_objects(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.SynchronizationObjectsProperty"]]]],
    ) -> None:
        jsii.set(self, "synchronizationObjects", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="topology")
    def topology(self) -> typing.Optional[builtins.str]:
        """
        :Property: topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
        """
        return jsii.get(self, "topology")

    @topology.setter # type: ignore
    def topology(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "topology", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="usedTime")
    def used_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
        """
        return jsii.get(self, "usedTime")

    @used_time.setter # type: ignore
    def used_time(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "usedTime", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnExcludesProperty",
        jsii_struct_bases=[],
        name_mapping={"column_name": "columnName"},
    )
    class ColumnExcludesProperty:
        def __init__(
            self,
            *,
            column_name: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param column_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if column_name is not None:
                self._values["column_name"] = column_name

        @builtins.property
        def column_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: columnName: Column names are not synchronized in the table to be synchronized
            """
            result = self._values.get("column_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnExcludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnIncludesProperty",
        jsii_struct_bases=[],
        name_mapping={"column_name": "columnName", "new_column_name": "newColumnName"},
    )
    class ColumnIncludesProperty:
        def __init__(
            self,
            *,
            column_name: typing.Optional[builtins.str] = None,
            new_column_name: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param column_name: 
            :param new_column_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if column_name is not None:
                self._values["column_name"] = column_name
            if new_column_name is not None:
                self._values["new_column_name"] = new_column_name

        @builtins.property
        def column_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: columnName: The column name to be synchronized in the table to be synchronized
            """
            result = self._values.get("column_name")
            return result

        @builtins.property
        def new_column_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: newColumnName: The name of the column to be synchronized to be mapped in the target instance
            """
            result = self._values.get("new_column_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnIncludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "instance_id": "instanceId",
            "instance_type_for_creation": "instanceTypeForCreation",
            "ip": "ip",
            "password": "password",
            "port": "port",
            "user_name": "userName",
        },
    )
    class DestinationEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: builtins.str,
            instance_id: typing.Optional[builtins.str] = None,
            instance_type_for_creation: typing.Optional[builtins.str] = None,
            ip: typing.Optional[builtins.str] = None,
            password: typing.Optional[builtins.str] = None,
            port: typing.Optional[builtins.str] = None,
            user_name: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param instance_type: 
            :param instance_id: 
            :param instance_type_for_creation: 
            :param ip: 
            :param password: 
            :param port: 
            :param user_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "instance_type": instance_type,
            }
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if instance_type_for_creation is not None:
                self._values["instance_type_for_creation"] = instance_type_for_creation
            if ip is not None:
                self._values["ip"] = ip
            if password is not None:
                self._values["password"] = password
            if port is not None:
                self._values["port"] = port
            if user_name is not None:
                self._values["user_name"] = user_name

        @builtins.property
        def instance_type(self) -> builtins.str:
            """
            :Property:

            instanceType: The instance type of the synchronization target instance for configuration, including:
            Redis: Alibaba Cloud Redis instance
            RDS: Alibaba Cloud RDS instance
            POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            ECS: Self-built database on ECS
            Express: self-built database accessed via dedicated line
            MaxCompute: Alibaba Cloud MaxCompute instance
            DataHub: Alibaba Cloud DataHub instance
            AnalyticDB: Alibaba Cloud Analytic Database MySQL Version (2.0)
            AnalyticDB30: Alibaba Cloud Analytic Database MySQL Version (3.0)
            Greenplum: Cloud-native data warehouse ADB PostgreSQL version (formerly analytical database PostgreSQL version).
            The default value is RDS
            """
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return result

        @builtins.property
        def instance_id(self) -> typing.Optional[builtins.str]:
            """
            :Property: instanceId: Target instance ID.
            """
            result = self._values.get("instance_id")
            return result

        @builtins.property
        def instance_type_for_creation(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            instanceTypeForCreation: The instance type of the synchronization target instance for creation, including:
            MySQL: Alibaba Cloud MySQL instance
            PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
            MaxCompute: Alibaba Cloud MaxCompute instance.
            If this property is not specified, it will be same with InstanceType
            """
            result = self._values.get("instance_type_for_creation")
            return result

        @builtins.property
        def ip(self) -> typing.Optional[builtins.str]:
            """
            :Property: ip: The connection address of the target instance. Required if the target instance is a local DB accessed through a dedicated line.
            """
            result = self._values.get("ip")
            return result

        @builtins.property
        def password(self) -> typing.Optional[builtins.str]:
            """
            :Property: password: Target instance password
            """
            result = self._values.get("password")
            return result

        @builtins.property
        def port(self) -> typing.Optional[builtins.str]:
            """
            :Property: port: Listening port of the target instance. Required when the target instance is ECS or a local DB accessed through a dedicated line.
            """
            result = self._values.get("port")
            return result

        @builtins.property
        def user_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: userName: Target instance access account
            """
            result = self._values.get("user_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DestinationEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "instance_id": "instanceId",
            "instance_type_for_creation": "instanceTypeForCreation",
            "ip": "ip",
            "owner_id": "ownerId",
            "password": "password",
            "port": "port",
            "role": "role",
            "user_name": "userName",
        },
    )
    class SourceEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: builtins.str,
            instance_id: typing.Optional[builtins.str] = None,
            instance_type_for_creation: typing.Optional[builtins.str] = None,
            ip: typing.Optional[builtins.str] = None,
            owner_id: typing.Optional[builtins.str] = None,
            password: typing.Optional[builtins.str] = None,
            port: typing.Optional[builtins.str] = None,
            role: typing.Optional[builtins.str] = None,
            user_name: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param instance_type: 
            :param instance_id: 
            :param instance_type_for_creation: 
            :param ip: 
            :param owner_id: 
            :param password: 
            :param port: 
            :param role: 
            :param user_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "instance_type": instance_type,
            }
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if instance_type_for_creation is not None:
                self._values["instance_type_for_creation"] = instance_type_for_creation
            if ip is not None:
                self._values["ip"] = ip
            if owner_id is not None:
                self._values["owner_id"] = owner_id
            if password is not None:
                self._values["password"] = password
            if port is not None:
                self._values["port"] = port
            if role is not None:
                self._values["role"] = role
            if user_name is not None:
                self._values["user_name"] = user_name

        @builtins.property
        def instance_type(self) -> builtins.str:
            """
            :Property:

            instanceType: The instance type of the synchronization source instance for configuration, including:
            Redis: Alibaba Cloud Redis instance
            RDS: Alibaba Cloud RDS instance
            POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            ECS: Self-built database on ECS
            Express: Self-built database accessed via dedicated line
            dg: Self-built database accessed via the database gateway DG
            cen: Self-built database accessed via the cloud enterprise network CEN.
            The default value is RDS.
            """
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return result

        @builtins.property
        def instance_id(self) -> typing.Optional[builtins.str]:
            """
            :Property: instanceId: Source instance ID.
            """
            result = self._values.get("instance_id")
            return result

        @builtins.property
        def instance_type_for_creation(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            instanceTypeForCreation: The instance type of the synchronization source instance for creation, including:
            MySQL: Alibaba Cloud MySQL instance
            PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
            Redis: Alibaba Cloud Redis instance.
            If this property is not specified, it will be same with InstanceType.
            """
            result = self._values.get("instance_type_for_creation")
            return result

        @builtins.property
        def ip(self) -> typing.Optional[builtins.str]:
            """
            :Property: ip: The connection address of the source instance. Required if the source instance is a local DB accessed through a dedicated line.
            """
            result = self._values.get("ip")
            return result

        @builtins.property
        def owner_id(self) -> typing.Optional[builtins.str]:
            """
            :Property: ownerId: When the source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the UID of the Alibaba Cloud account to which the source instance belongs.
            """
            result = self._values.get("owner_id")
            return result

        @builtins.property
        def password(self) -> typing.Optional[builtins.str]:
            """
            :Property: password: Source instance password
            """
            result = self._values.get("password")
            return result

        @builtins.property
        def port(self) -> typing.Optional[builtins.str]:
            """
            :Property: port: Listening port of the source instance. Required when the source instance is ECS or a local DB accessed through a dedicated line.
            """
            result = self._values.get("port")
            return result

        @builtins.property
        def role(self) -> typing.Optional[builtins.str]:
            """
            :Property: role: When the synchronization source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the authorized role of the account to which the source instance belongs to the Alibaba Cloud account to which the target instance belongs, and the relevant permissions and authorization steps of the reference.
            """
            result = self._values.get("role")
            return result

        @builtins.property
        def user_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: userName: Source instance access account
            """
            result = self._values.get("user_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "db_name": "dbName",
            "new_db_name": "newDbName",
            "new_schema_name": "newSchemaName",
            "schema_name": "schemaName",
            "table_excludes": "tableExcludes",
            "table_includes": "tableIncludes",
        },
    )
    class SynchronizationObjectsProperty:
        def __init__(
            self,
            *,
            db_name: typing.Optional[builtins.str] = None,
            new_db_name: typing.Optional[builtins.str] = None,
            new_schema_name: typing.Optional[builtins.str] = None,
            schema_name: typing.Optional[builtins.str] = None,
            table_excludes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.TableExcludesProperty"]]]] = None,
            table_includes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.TableIncludesProperty"]]]] = None,
        ) -> None:
            """
            :param db_name: 
            :param new_db_name: 
            :param new_schema_name: 
            :param schema_name: 
            :param table_excludes: 
            :param table_includes: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if db_name is not None:
                self._values["db_name"] = db_name
            if new_db_name is not None:
                self._values["new_db_name"] = new_db_name
            if new_schema_name is not None:
                self._values["new_schema_name"] = new_schema_name
            if schema_name is not None:
                self._values["schema_name"] = schema_name
            if table_excludes is not None:
                self._values["table_excludes"] = table_excludes
            if table_includes is not None:
                self._values["table_includes"] = table_includes

        @builtins.property
        def db_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: dbName: db name to be synchronized
            """
            result = self._values.get("db_name")
            return result

        @builtins.property
        def new_db_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: newDbName: The name of the db to be synchronized in the target instance.
            """
            result = self._values.get("new_db_name")
            return result

        @builtins.property
        def new_schema_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: newSchemaName: Schema name to be synchronized by Schema in the target instance
            """
            result = self._values.get("new_schema_name")
            return result

        @builtins.property
        def schema_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: schemaName: Schema name to be synchronized
            """
            result = self._values.get("schema_name")
            return result

        @builtins.property
        def table_excludes(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.TableExcludesProperty"]]]]:
            """
            :Property: tableExcludes: Table excludes configuration
            """
            result = self._values.get("table_excludes")
            return result

        @builtins.property
        def table_includes(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.TableIncludesProperty"]]]]:
            """
            :Property: tableIncludes: Table configuration
            """
            result = self._values.get("table_includes")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SynchronizationObjectsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.TableExcludesProperty",
        jsii_struct_bases=[],
        name_mapping={"table_name": "tableName"},
    )
    class TableExcludesProperty:
        def __init__(self, *, table_name: typing.Optional[builtins.str] = None) -> None:
            """
            :param table_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if table_name is not None:
                self._values["table_name"] = table_name

        @builtins.property
        def table_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: tableName: The name of the table to be synchronized does not require the table name of the migration table.
            """
            result = self._values.get("table_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TableExcludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob.TableIncludesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "column_excludes": "columnExcludes",
            "column_includes": "columnIncludes",
            "filter_condition": "filterCondition",
            "new_table_name": "newTableName",
            "table_name": "tableName",
        },
    )
    class TableIncludesProperty:
        def __init__(
            self,
            *,
            column_excludes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.ColumnExcludesProperty"]]]] = None,
            column_includes: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.ColumnIncludesProperty"]]]] = None,
            filter_condition: typing.Optional[builtins.str] = None,
            new_table_name: typing.Optional[builtins.str] = None,
            table_name: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param column_excludes: 
            :param column_includes: 
            :param filter_condition: 
            :param new_table_name: 
            :param table_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if column_excludes is not None:
                self._values["column_excludes"] = column_excludes
            if column_includes is not None:
                self._values["column_includes"] = column_includes
            if filter_condition is not None:
                self._values["filter_condition"] = filter_condition
            if new_table_name is not None:
                self._values["new_table_name"] = new_table_name
            if table_name is not None:
                self._values["table_name"] = table_name

        @builtins.property
        def column_excludes(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.ColumnExcludesProperty"]]]]:
            """
            :Property: columnExcludes: Column excludes configuration
            """
            result = self._values.get("column_excludes")
            return result

        @builtins.property
        def column_includes(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSynchronizationJob.ColumnIncludesProperty"]]]]:
            """
            :Property: columnIncludes: Column includes configuration
            """
            result = self._values.get("column_includes")
            return result

        @builtins.property
        def filter_condition(self) -> typing.Optional[builtins.str]:
            """
            :Property: filterCondition: Where condition
            """
            result = self._values.get("filter_condition")
            return result

        @builtins.property
        def new_table_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: newTableName: The name of the table to be synchronized in the target instance mapping
            """
            result = self._values.get("new_table_name")
            return result

        @builtins.property
        def table_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: tableName: Table name to be synchronized
            """
            result = self._values.get("table_name")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TableIncludesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "destination_endpoint": "destinationEndpoint",
        "dest_region": "destRegion",
        "source_endpoint": "sourceEndpoint",
        "source_region": "sourceRegion",
        "synchronization_job_class": "synchronizationJobClass",
        "data_initialization": "dataInitialization",
        "network_type": "networkType",
        "pay_type": "payType",
        "period": "period",
        "structure_initialization": "structureInitialization",
        "synchronization_objects": "synchronizationObjects",
        "topology": "topology",
        "used_time": "usedTime",
    },
)
class RosSynchronizationJobProps:
    def __init__(
        self,
        *,
        destination_endpoint: typing.Union[RosSynchronizationJob.DestinationEndpointProperty, ros_cdk_core.IResolvable],
        dest_region: builtins.str,
        source_endpoint: typing.Union[ros_cdk_core.IResolvable, RosSynchronizationJob.SourceEndpointProperty],
        source_region: builtins.str,
        synchronization_job_class: builtins.str,
        data_initialization: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        network_type: typing.Optional[builtins.str] = None,
        pay_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[builtins.str] = None,
        structure_initialization: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        synchronization_objects: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosSynchronizationJob.SynchronizationObjectsProperty]]]] = None,
        topology: typing.Optional[builtins.str] = None,
        used_time: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DTS::SynchronizationJob``.

        :param destination_endpoint: 
        :param dest_region: 
        :param source_endpoint: 
        :param source_region: 
        :param synchronization_job_class: 
        :param data_initialization: 
        :param network_type: 
        :param pay_type: 
        :param period: 
        :param structure_initialization: 
        :param synchronization_objects: 
        :param topology: 
        :param used_time: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "destination_endpoint": destination_endpoint,
            "dest_region": dest_region,
            "source_endpoint": source_endpoint,
            "source_region": source_region,
            "synchronization_job_class": synchronization_job_class,
        }
        if data_initialization is not None:
            self._values["data_initialization"] = data_initialization
        if network_type is not None:
            self._values["network_type"] = network_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if structure_initialization is not None:
            self._values["structure_initialization"] = structure_initialization
        if synchronization_objects is not None:
            self._values["synchronization_objects"] = synchronization_objects
        if topology is not None:
            self._values["topology"] = topology
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Union[RosSynchronizationJob.DestinationEndpointProperty, ros_cdk_core.IResolvable]:
        """
        :Property: destinationEndpoint: Migration target configuration
        """
        result = self._values.get("destination_endpoint")
        assert result is not None, "Required property 'destination_endpoint' is missing"
        return result

    @builtins.property
    def dest_region(self) -> builtins.str:
        """
        :Property: destRegion: Region where the synchronization target instance is located.
        """
        result = self._values.get("dest_region")
        assert result is not None, "Required property 'dest_region' is missing"
        return result

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosSynchronizationJob.SourceEndpointProperty]:
        """
        :Property: sourceEndpoint: Migration source configuration
        """
        result = self._values.get("source_endpoint")
        assert result is not None, "Required property 'source_endpoint' is missing"
        return result

    @builtins.property
    def source_region(self) -> builtins.str:
        """
        :Property: sourceRegion: Region where the synchronization source instance is located.
        """
        result = self._values.get("source_region")
        assert result is not None, "Required property 'source_region' is missing"
        return result

    @builtins.property
    def synchronization_job_class(self) -> builtins.str:
        """
        :Property:

        synchronizationJobClass: Synchronous instance specifications, which can be:
        micro, small, medium, large and so on. The default value is: small
        """
        result = self._values.get("synchronization_job_class")
        assert result is not None, "Required property 'synchronization_job_class' is missing"
        return result

    @builtins.property
    def data_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
        false: no full data initialization
        The default value is: true
        """
        result = self._values.get("data_initialization")
        return result

    @builtins.property
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
        """
        result = self._values.get("network_type")
        return result

    @builtins.property
    def pay_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        payType: Payment type, which include:
        Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
        """
        result = self._values.get("pay_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
        Year: Annual, Month: monthly
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def structure_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
        false: no result object initialization
        The default value is: true
        """
        result = self._values.get("structure_initialization")
        return result

    @builtins.property
    def synchronization_objects(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosSynchronizationJob.SynchronizationObjectsProperty]]]]:
        """
        :Property: synchronizationObjects: Objects that need to be synchronized
        """
        result = self._values.get("synchronization_objects")
        return result

    @builtins.property
    def topology(self) -> typing.Optional[builtins.str]:
        """
        :Property: topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
        """
        result = self._values.get("topology")
        return result

    @builtins.property
    def used_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
        """
        result = self._values.get("used_time")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSynchronizationJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SynchronizationJob(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.SynchronizationJob",
):
    """A ROS resource type:  ``ALIYUN::DTS::SynchronizationJob``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SynchronizationJobProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DTS::SynchronizationJob``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(SynchronizationJob, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSynchronizationJobId")
    def attr_synchronization_job_id(self) -> typing.Any:
        """
        :Attribute: SynchronizationJobId: Synchronization instance ID
        """
        return jsii.get(self, "attrSynchronizationJobId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.SynchronizationJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "destination_endpoint": "destinationEndpoint",
        "dest_region": "destRegion",
        "source_endpoint": "sourceEndpoint",
        "source_region": "sourceRegion",
        "synchronization_job_class": "synchronizationJobClass",
        "data_initialization": "dataInitialization",
        "network_type": "networkType",
        "pay_type": "payType",
        "period": "period",
        "structure_initialization": "structureInitialization",
        "synchronization_objects": "synchronizationObjects",
        "topology": "topology",
        "used_time": "usedTime",
    },
)
class SynchronizationJobProps:
    def __init__(
        self,
        *,
        destination_endpoint: typing.Union[RosSynchronizationJob.DestinationEndpointProperty, ros_cdk_core.IResolvable],
        dest_region: builtins.str,
        source_endpoint: typing.Union[ros_cdk_core.IResolvable, RosSynchronizationJob.SourceEndpointProperty],
        source_region: builtins.str,
        synchronization_job_class: builtins.str,
        data_initialization: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        network_type: typing.Optional[builtins.str] = None,
        pay_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[builtins.str] = None,
        structure_initialization: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        synchronization_objects: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosSynchronizationJob.SynchronizationObjectsProperty]]]] = None,
        topology: typing.Optional[builtins.str] = None,
        used_time: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DTS::SynchronizationJob``.

        :param destination_endpoint: 
        :param dest_region: 
        :param source_endpoint: 
        :param source_region: 
        :param synchronization_job_class: 
        :param data_initialization: 
        :param network_type: 
        :param pay_type: 
        :param period: 
        :param structure_initialization: 
        :param synchronization_objects: 
        :param topology: 
        :param used_time: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "destination_endpoint": destination_endpoint,
            "dest_region": dest_region,
            "source_endpoint": source_endpoint,
            "source_region": source_region,
            "synchronization_job_class": synchronization_job_class,
        }
        if data_initialization is not None:
            self._values["data_initialization"] = data_initialization
        if network_type is not None:
            self._values["network_type"] = network_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if structure_initialization is not None:
            self._values["structure_initialization"] = structure_initialization
        if synchronization_objects is not None:
            self._values["synchronization_objects"] = synchronization_objects
        if topology is not None:
            self._values["topology"] = topology
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Union[RosSynchronizationJob.DestinationEndpointProperty, ros_cdk_core.IResolvable]:
        """
        :Property: destinationEndpoint: Migration target configuration
        """
        result = self._values.get("destination_endpoint")
        assert result is not None, "Required property 'destination_endpoint' is missing"
        return result

    @builtins.property
    def dest_region(self) -> builtins.str:
        """
        :Property: destRegion: Region where the synchronization target instance is located.
        """
        result = self._values.get("dest_region")
        assert result is not None, "Required property 'dest_region' is missing"
        return result

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosSynchronizationJob.SourceEndpointProperty]:
        """
        :Property: sourceEndpoint: Migration source configuration
        """
        result = self._values.get("source_endpoint")
        assert result is not None, "Required property 'source_endpoint' is missing"
        return result

    @builtins.property
    def source_region(self) -> builtins.str:
        """
        :Property: sourceRegion: Region where the synchronization source instance is located.
        """
        result = self._values.get("source_region")
        assert result is not None, "Required property 'source_region' is missing"
        return result

    @builtins.property
    def synchronization_job_class(self) -> builtins.str:
        """
        :Property:

        synchronizationJobClass: Synchronous instance specifications, which can be:
        micro, small, medium, large and so on. The default value is: small
        """
        result = self._values.get("synchronization_job_class")
        assert result is not None, "Required property 'synchronization_job_class' is missing"
        return result

    @builtins.property
    def data_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
        false: no full data initialization
        The default value is: true
        """
        result = self._values.get("data_initialization")
        return result

    @builtins.property
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
        """
        result = self._values.get("network_type")
        return result

    @builtins.property
    def pay_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        payType: Payment type, which include:
        Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
        """
        result = self._values.get("pay_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
        Year: Annual, Month: monthly
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def structure_initialization(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
        false: no result object initialization
        The default value is: true
        """
        result = self._values.get("structure_initialization")
        return result

    @builtins.property
    def synchronization_objects(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosSynchronizationJob.SynchronizationObjectsProperty]]]]:
        """
        :Property: synchronizationObjects: Objects that need to be synchronized
        """
        result = self._values.get("synchronization_objects")
        return result

    @builtins.property
    def topology(self) -> typing.Optional[builtins.str]:
        """
        :Property: topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
        """
        result = self._values.get("topology")
        return result

    @builtins.property
    def used_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
        """
        result = self._values.get("used_time")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SynchronizationJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "MigrationJob",
    "MigrationJobProps",
    "RosMigrationJob",
    "RosMigrationJobProps",
    "RosSynchronizationJob",
    "RosSynchronizationJobProps",
    "SynchronizationJob",
    "SynchronizationJobProps",
]

publication.publish()
