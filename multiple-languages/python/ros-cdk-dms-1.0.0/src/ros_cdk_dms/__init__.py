"""
## Aliyun ROS DMS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_dms as DMS
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


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.Instance",
):
    """A ROS resource type:  ``ALIYUN::DMS::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DMS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Instance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHost")
    def attr_host(self) -> typing.Any:
        """
        :Attribute: Host: The endpoint of the database instance.
        """
        return jsii.get(self, "attrHost")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: The ID of the database instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> typing.Any:
        """
        :Attribute: Port: The connection port of the database instance.
        """
        return jsii.get(self, "attrPort")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dms.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "database_password": "databasePassword",
        "database_user": "databaseUser",
        "dba_uid": "dbaUid",
        "env_type": "envType",
        "export_timeout": "exportTimeout",
        "host": "host",
        "instance_alias": "instanceAlias",
        "instance_source": "instanceSource",
        "instance_type": "instanceType",
        "network_type": "networkType",
        "port": "port",
        "query_timeout": "queryTimeout",
        "safe_rule": "safeRule",
        "tid": "tid",
        "data_link_name": "dataLinkName",
        "ddl_online": "ddlOnline",
        "ecs_instance_id": "ecsInstanceId",
        "ecs_region": "ecsRegion",
        "sid": "sid",
        "use_dsql": "useDsql",
        "vpc_id": "vpcId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        database_password: builtins.str,
        database_user: builtins.str,
        dba_uid: jsii.Number,
        env_type: builtins.str,
        export_timeout: jsii.Number,
        host: builtins.str,
        instance_alias: builtins.str,
        instance_source: builtins.str,
        instance_type: builtins.str,
        network_type: builtins.str,
        port: jsii.Number,
        query_timeout: jsii.Number,
        safe_rule: builtins.str,
        tid: jsii.Number,
        data_link_name: typing.Optional[builtins.str] = None,
        ddl_online: typing.Optional[jsii.Number] = None,
        ecs_instance_id: typing.Optional[builtins.str] = None,
        ecs_region: typing.Optional[builtins.str] = None,
        sid: typing.Optional[builtins.str] = None,
        use_dsql: typing.Optional[jsii.Number] = None,
        vpc_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DMS::Instance``.

        :param database_password: 
        :param database_user: 
        :param dba_uid: 
        :param env_type: 
        :param export_timeout: 
        :param host: 
        :param instance_alias: 
        :param instance_source: 
        :param instance_type: 
        :param network_type: 
        :param port: 
        :param query_timeout: 
        :param safe_rule: 
        :param tid: 
        :param data_link_name: 
        :param ddl_online: 
        :param ecs_instance_id: 
        :param ecs_region: 
        :param sid: 
        :param use_dsql: 
        :param vpc_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "database_password": database_password,
            "database_user": database_user,
            "dba_uid": dba_uid,
            "env_type": env_type,
            "export_timeout": export_timeout,
            "host": host,
            "instance_alias": instance_alias,
            "instance_source": instance_source,
            "instance_type": instance_type,
            "network_type": network_type,
            "port": port,
            "query_timeout": query_timeout,
            "safe_rule": safe_rule,
            "tid": tid,
        }
        if data_link_name is not None:
            self._values["data_link_name"] = data_link_name
        if ddl_online is not None:
            self._values["ddl_online"] = ddl_online
        if ecs_instance_id is not None:
            self._values["ecs_instance_id"] = ecs_instance_id
        if ecs_region is not None:
            self._values["ecs_region"] = ecs_region
        if sid is not None:
            self._values["sid"] = sid
        if use_dsql is not None:
            self._values["use_dsql"] = use_dsql
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def database_password(self) -> builtins.str:
        """
        :Property: databasePassword: The logon password of the database instance.
        """
        result = self._values.get("database_password")
        assert result is not None, "Required property 'database_password' is missing"
        return result

    @builtins.property
    def database_user(self) -> builtins.str:
        """
        :Property: databaseUser: The logon username of the database instance.
        """
        result = self._values.get("database_user")
        assert result is not None, "Required property 'database_user' is missing"
        return result

    @builtins.property
    def dba_uid(self) -> jsii.Number:
        """
        :Property:

        dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
        instance.
        Note To query the UID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        User Management.
        """
        result = self._values.get("dba_uid")
        assert result is not None, "Required property 'dba_uid' is missing"
        return result

    @builtins.property
    def env_type(self) -> builtins.str:
        """
        :Property:

        envType: The type of the environment to which the database instance belongs. Valid values:
        product: the production environment.
        dev: the test environment.
        """
        result = self._values.get("env_type")
        assert result is not None, "Required property 'env_type' is missing"
        return result

    @builtins.property
    def export_timeout(self) -> jsii.Number:
        """
        :Property: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
        """
        result = self._values.get("export_timeout")
        assert result is not None, "Required property 'export_timeout' is missing"
        return result

    @builtins.property
    def host(self) -> builtins.str:
        """
        :Property: host: The endpoint of the database instance.
        """
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return result

    @builtins.property
    def instance_alias(self) -> builtins.str:
        """
        :Property:

        instanceAlias: The alias of the database instance. The alias helps you quickly find the required
        instance.
        """
        result = self._values.get("instance_alias")
        assert result is not None, "Required property 'instance_alias' is missing"
        return result

    @builtins.property
    def instance_source(self) -> builtins.str:
        """
        :Property:

        instanceSource: The source of the database instance. Valid values:
        PUBLIC_OWN: an on-premises database built on the public network.
        RDS: an ApsaraDB for RDS (RDS) instance.
        ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
        VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
        Cloud (VPC).
        """
        result = self._values.get("instance_source")
        assert result is not None, "Required property 'instance_source' is missing"
        return result

    @builtins.property
    def instance_type(self) -> builtins.str:
        """
        :Property: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        """
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return result

    @builtins.property
    def network_type(self) -> builtins.str:
        """
        :Property:

        networkType: The network type of the database instance. Valid values:
        CLASSIC
        VPC
        """
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return result

    @builtins.property
    def port(self) -> jsii.Number:
        """
        :Property: port: The connection port of the database instance.
        """
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return result

    @builtins.property
    def query_timeout(self) -> jsii.Number:
        """
        :Property: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
        """
        result = self._values.get("query_timeout")
        assert result is not None, "Required property 'query_timeout' is missing"
        return result

    @builtins.property
    def safe_rule(self) -> builtins.str:
        """
        :Property:

        safeRule: The security rule of the database instance. Enter the name of the security rule for
        your enterprise.
        Note To query a specified security rule, log on to the DMS Enterprise console and choose
        System Management > Security Rules. The security rule appears in the security rule
        list.
        """
        result = self._values.get("safe_rule")
        assert result is not None, "Required property 'safe_rule' is missing"
        return result

    @builtins.property
    def tid(self) -> jsii.Number:
        """
        :Property:

        tid: The ID of the tenant.
        Note To query the ID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        Instance Management or System Management > User Management. The ID of the tenant
        appears in the Service Specification section.
        """
        result = self._values.get("tid")
        assert result is not None, "Required property 'tid' is missing"
        return result

    @builtins.property
    def data_link_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dataLinkName: The name of the data link for cross-database query.
        """
        result = self._values.get("data_link_name")
        return result

    @builtins.property
    def ddl_online(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
        service. Currently, this service is available only for the MySQL and PolarDB databases.
        0: The service is disabled.
        1: The native online DDL service prevails.
        2: Data change without table locking provided by DMS prevails.
        """
        result = self._values.get("ddl_online")
        return result

    @builtins.property
    def ecs_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        """
        result = self._values.get("ecs_instance_id")
        return result

    @builtins.property
    def ecs_region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        ecsRegion: The region where the database instance resides.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        """
        result = self._values.get("ecs_region")
        return result

    @builtins.property
    def sid(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sid: The system ID (SID) of the database instance.
        Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        """
        result = self._values.get("sid")
        return result

    @builtins.property
    def use_dsql(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        useDsql: Specifies whether to enable cross-database query for the database instance. Valid
        values:
        0: disabled
        1: enabled
        """
        result = self._values.get("use_dsql")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        vpcId: The ID of the VPC to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        """
        result = self._values.get("vpc_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.RosInstance",
):
    """A ROS template type:  ``ALIYUN::DMS::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DMS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosInstance, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrHost")
    def attr_host(self) -> typing.Any:
        """
        :Attribute: Host: The endpoint of the database instance.
        """
        return jsii.get(self, "attrHost")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: The ID of the database instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> typing.Any:
        """
        :Attribute: Port: The connection port of the database instance.
        """
        return jsii.get(self, "attrPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="databasePassword")
    def database_password(self) -> builtins.str:
        """
        :Property: databasePassword: The logon password of the database instance.
        """
        return jsii.get(self, "databasePassword")

    @database_password.setter # type: ignore
    def database_password(self, value: builtins.str) -> None:
        jsii.set(self, "databasePassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="databaseUser")
    def database_user(self) -> builtins.str:
        """
        :Property: databaseUser: The logon username of the database instance.
        """
        return jsii.get(self, "databaseUser")

    @database_user.setter # type: ignore
    def database_user(self, value: builtins.str) -> None:
        jsii.set(self, "databaseUser", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbaUid")
    def dba_uid(self) -> jsii.Number:
        """
        :Property:

        dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
        instance.
        Note To query the UID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        User Management.
        """
        return jsii.get(self, "dbaUid")

    @dba_uid.setter # type: ignore
    def dba_uid(self, value: jsii.Number) -> None:
        jsii.set(self, "dbaUid", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="envType")
    def env_type(self) -> builtins.str:
        """
        :Property:

        envType: The type of the environment to which the database instance belongs. Valid values:
        product: the production environment.
        dev: the test environment.
        """
        return jsii.get(self, "envType")

    @env_type.setter # type: ignore
    def env_type(self, value: builtins.str) -> None:
        jsii.set(self, "envType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="exportTimeout")
    def export_timeout(self) -> jsii.Number:
        """
        :Property: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
        """
        return jsii.get(self, "exportTimeout")

    @export_timeout.setter # type: ignore
    def export_timeout(self, value: jsii.Number) -> None:
        jsii.set(self, "exportTimeout", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="host")
    def host(self) -> builtins.str:
        """
        :Property: host: The endpoint of the database instance.
        """
        return jsii.get(self, "host")

    @host.setter # type: ignore
    def host(self, value: builtins.str) -> None:
        jsii.set(self, "host", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceAlias")
    def instance_alias(self) -> builtins.str:
        """
        :Property:

        instanceAlias: The alias of the database instance. The alias helps you quickly find the required
        instance.
        """
        return jsii.get(self, "instanceAlias")

    @instance_alias.setter # type: ignore
    def instance_alias(self, value: builtins.str) -> None:
        jsii.set(self, "instanceAlias", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceSource")
    def instance_source(self) -> builtins.str:
        """
        :Property:

        instanceSource: The source of the database instance. Valid values:
        PUBLIC_OWN: an on-premises database built on the public network.
        RDS: an ApsaraDB for RDS (RDS) instance.
        ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
        VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
        Cloud (VPC).
        """
        return jsii.get(self, "instanceSource")

    @instance_source.setter # type: ignore
    def instance_source(self, value: builtins.str) -> None:
        jsii.set(self, "instanceSource", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceType")
    def instance_type(self) -> builtins.str:
        """
        :Property: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        """
        return jsii.get(self, "instanceType")

    @instance_type.setter # type: ignore
    def instance_type(self, value: builtins.str) -> None:
        jsii.set(self, "instanceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="networkType")
    def network_type(self) -> builtins.str:
        """
        :Property:

        networkType: The network type of the database instance. Valid values:
        CLASSIC
        VPC
        """
        return jsii.get(self, "networkType")

    @network_type.setter # type: ignore
    def network_type(self, value: builtins.str) -> None:
        jsii.set(self, "networkType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="port")
    def port(self) -> jsii.Number:
        """
        :Property: port: The connection port of the database instance.
        """
        return jsii.get(self, "port")

    @port.setter # type: ignore
    def port(self, value: jsii.Number) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="queryTimeout")
    def query_timeout(self) -> jsii.Number:
        """
        :Property: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
        """
        return jsii.get(self, "queryTimeout")

    @query_timeout.setter # type: ignore
    def query_timeout(self, value: jsii.Number) -> None:
        jsii.set(self, "queryTimeout", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="safeRule")
    def safe_rule(self) -> builtins.str:
        """
        :Property:

        safeRule: The security rule of the database instance. Enter the name of the security rule for
        your enterprise.
        Note To query a specified security rule, log on to the DMS Enterprise console and choose
        System Management > Security Rules. The security rule appears in the security rule
        list.
        """
        return jsii.get(self, "safeRule")

    @safe_rule.setter # type: ignore
    def safe_rule(self, value: builtins.str) -> None:
        jsii.set(self, "safeRule", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tid")
    def tid(self) -> jsii.Number:
        """
        :Property:

        tid: The ID of the tenant.
        Note To query the ID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        Instance Management or System Management > User Management. The ID of the tenant
        appears in the Service Specification section.
        """
        return jsii.get(self, "tid")

    @tid.setter # type: ignore
    def tid(self, value: jsii.Number) -> None:
        jsii.set(self, "tid", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dataLinkName")
    def data_link_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dataLinkName: The name of the data link for cross-database query.
        """
        return jsii.get(self, "dataLinkName")

    @data_link_name.setter # type: ignore
    def data_link_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dataLinkName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ddlOnline")
    def ddl_online(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
        service. Currently, this service is available only for the MySQL and PolarDB databases.
        0: The service is disabled.
        1: The native online DDL service prevails.
        2: Data change without table locking provided by DMS prevails.
        """
        return jsii.get(self, "ddlOnline")

    @ddl_online.setter # type: ignore
    def ddl_online(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "ddlOnline", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ecsInstanceId")
    def ecs_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        """
        return jsii.get(self, "ecsInstanceId")

    @ecs_instance_id.setter # type: ignore
    def ecs_instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "ecsInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ecsRegion")
    def ecs_region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        ecsRegion: The region where the database instance resides.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        """
        return jsii.get(self, "ecsRegion")

    @ecs_region.setter # type: ignore
    def ecs_region(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "ecsRegion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sid")
    def sid(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sid: The system ID (SID) of the database instance.
        Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        """
        return jsii.get(self, "sid")

    @sid.setter # type: ignore
    def sid(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "sid", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="useDsql")
    def use_dsql(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        useDsql: Specifies whether to enable cross-database query for the database instance. Valid
        values:
        0: disabled
        1: enabled
        """
        return jsii.get(self, "useDsql")

    @use_dsql.setter # type: ignore
    def use_dsql(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "useDsql", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        vpcId: The ID of the VPC to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dms.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "database_password": "databasePassword",
        "database_user": "databaseUser",
        "dba_uid": "dbaUid",
        "env_type": "envType",
        "export_timeout": "exportTimeout",
        "host": "host",
        "instance_alias": "instanceAlias",
        "instance_source": "instanceSource",
        "instance_type": "instanceType",
        "network_type": "networkType",
        "port": "port",
        "query_timeout": "queryTimeout",
        "safe_rule": "safeRule",
        "tid": "tid",
        "data_link_name": "dataLinkName",
        "ddl_online": "ddlOnline",
        "ecs_instance_id": "ecsInstanceId",
        "ecs_region": "ecsRegion",
        "sid": "sid",
        "use_dsql": "useDsql",
        "vpc_id": "vpcId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        database_password: builtins.str,
        database_user: builtins.str,
        dba_uid: jsii.Number,
        env_type: builtins.str,
        export_timeout: jsii.Number,
        host: builtins.str,
        instance_alias: builtins.str,
        instance_source: builtins.str,
        instance_type: builtins.str,
        network_type: builtins.str,
        port: jsii.Number,
        query_timeout: jsii.Number,
        safe_rule: builtins.str,
        tid: jsii.Number,
        data_link_name: typing.Optional[builtins.str] = None,
        ddl_online: typing.Optional[jsii.Number] = None,
        ecs_instance_id: typing.Optional[builtins.str] = None,
        ecs_region: typing.Optional[builtins.str] = None,
        sid: typing.Optional[builtins.str] = None,
        use_dsql: typing.Optional[jsii.Number] = None,
        vpc_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DMS::Instance``.

        :param database_password: 
        :param database_user: 
        :param dba_uid: 
        :param env_type: 
        :param export_timeout: 
        :param host: 
        :param instance_alias: 
        :param instance_source: 
        :param instance_type: 
        :param network_type: 
        :param port: 
        :param query_timeout: 
        :param safe_rule: 
        :param tid: 
        :param data_link_name: 
        :param ddl_online: 
        :param ecs_instance_id: 
        :param ecs_region: 
        :param sid: 
        :param use_dsql: 
        :param vpc_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "database_password": database_password,
            "database_user": database_user,
            "dba_uid": dba_uid,
            "env_type": env_type,
            "export_timeout": export_timeout,
            "host": host,
            "instance_alias": instance_alias,
            "instance_source": instance_source,
            "instance_type": instance_type,
            "network_type": network_type,
            "port": port,
            "query_timeout": query_timeout,
            "safe_rule": safe_rule,
            "tid": tid,
        }
        if data_link_name is not None:
            self._values["data_link_name"] = data_link_name
        if ddl_online is not None:
            self._values["ddl_online"] = ddl_online
        if ecs_instance_id is not None:
            self._values["ecs_instance_id"] = ecs_instance_id
        if ecs_region is not None:
            self._values["ecs_region"] = ecs_region
        if sid is not None:
            self._values["sid"] = sid
        if use_dsql is not None:
            self._values["use_dsql"] = use_dsql
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def database_password(self) -> builtins.str:
        """
        :Property: databasePassword: The logon password of the database instance.
        """
        result = self._values.get("database_password")
        assert result is not None, "Required property 'database_password' is missing"
        return result

    @builtins.property
    def database_user(self) -> builtins.str:
        """
        :Property: databaseUser: The logon username of the database instance.
        """
        result = self._values.get("database_user")
        assert result is not None, "Required property 'database_user' is missing"
        return result

    @builtins.property
    def dba_uid(self) -> jsii.Number:
        """
        :Property:

        dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
        instance.
        Note To query the UID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        User Management.
        """
        result = self._values.get("dba_uid")
        assert result is not None, "Required property 'dba_uid' is missing"
        return result

    @builtins.property
    def env_type(self) -> builtins.str:
        """
        :Property:

        envType: The type of the environment to which the database instance belongs. Valid values:
        product: the production environment.
        dev: the test environment.
        """
        result = self._values.get("env_type")
        assert result is not None, "Required property 'env_type' is missing"
        return result

    @builtins.property
    def export_timeout(self) -> jsii.Number:
        """
        :Property: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
        """
        result = self._values.get("export_timeout")
        assert result is not None, "Required property 'export_timeout' is missing"
        return result

    @builtins.property
    def host(self) -> builtins.str:
        """
        :Property: host: The endpoint of the database instance.
        """
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return result

    @builtins.property
    def instance_alias(self) -> builtins.str:
        """
        :Property:

        instanceAlias: The alias of the database instance. The alias helps you quickly find the required
        instance.
        """
        result = self._values.get("instance_alias")
        assert result is not None, "Required property 'instance_alias' is missing"
        return result

    @builtins.property
    def instance_source(self) -> builtins.str:
        """
        :Property:

        instanceSource: The source of the database instance. Valid values:
        PUBLIC_OWN: an on-premises database built on the public network.
        RDS: an ApsaraDB for RDS (RDS) instance.
        ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
        VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
        Cloud (VPC).
        """
        result = self._values.get("instance_source")
        assert result is not None, "Required property 'instance_source' is missing"
        return result

    @builtins.property
    def instance_type(self) -> builtins.str:
        """
        :Property: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        """
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return result

    @builtins.property
    def network_type(self) -> builtins.str:
        """
        :Property:

        networkType: The network type of the database instance. Valid values:
        CLASSIC
        VPC
        """
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return result

    @builtins.property
    def port(self) -> jsii.Number:
        """
        :Property: port: The connection port of the database instance.
        """
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return result

    @builtins.property
    def query_timeout(self) -> jsii.Number:
        """
        :Property: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
        """
        result = self._values.get("query_timeout")
        assert result is not None, "Required property 'query_timeout' is missing"
        return result

    @builtins.property
    def safe_rule(self) -> builtins.str:
        """
        :Property:

        safeRule: The security rule of the database instance. Enter the name of the security rule for
        your enterprise.
        Note To query a specified security rule, log on to the DMS Enterprise console and choose
        System Management > Security Rules. The security rule appears in the security rule
        list.
        """
        result = self._values.get("safe_rule")
        assert result is not None, "Required property 'safe_rule' is missing"
        return result

    @builtins.property
    def tid(self) -> jsii.Number:
        """
        :Property:

        tid: The ID of the tenant.
        Note To query the ID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        Instance Management or System Management > User Management. The ID of the tenant
        appears in the Service Specification section.
        """
        result = self._values.get("tid")
        assert result is not None, "Required property 'tid' is missing"
        return result

    @builtins.property
    def data_link_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: dataLinkName: The name of the data link for cross-database query.
        """
        result = self._values.get("data_link_name")
        return result

    @builtins.property
    def ddl_online(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
        service. Currently, this service is available only for the MySQL and PolarDB databases.
        0: The service is disabled.
        1: The native online DDL service prevails.
        2: Data change without table locking provided by DMS prevails.
        """
        result = self._values.get("ddl_online")
        return result

    @builtins.property
    def ecs_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        """
        result = self._values.get("ecs_instance_id")
        return result

    @builtins.property
    def ecs_region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        ecsRegion: The region where the database instance resides.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        """
        result = self._values.get("ecs_region")
        return result

    @builtins.property
    def sid(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sid: The system ID (SID) of the database instance.
        Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        """
        result = self._values.get("sid")
        return result

    @builtins.property
    def use_dsql(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        useDsql: Specifies whether to enable cross-database query for the database instance. Valid
        values:
        0: disabled
        1: enabled
        """
        result = self._values.get("use_dsql")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        vpcId: The ID of the VPC to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        """
        result = self._values.get("vpc_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUser(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.RosUser",
):
    """A ROS template type:  ``ALIYUN::DMS::User``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUserProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DMS::User``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosUser, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrMobile")
    def attr_mobile(self) -> typing.Any:
        """
        :Attribute: Mobile: UserMobile
        """
        return jsii.get(self, "attrMobile")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(self) -> typing.Any:
        """
        :Attribute: ParentUid: ParentAliYunUid
        """
        return jsii.get(self, "attrParentUid")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRoleIds")
    def attr_role_ids(self) -> typing.Any:
        """
        :Attribute: RoleIds: UserRoleId
        """
        return jsii.get(self, "attrRoleIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRoleNames")
    def attr_role_names(self) -> typing.Any:
        """
        :Attribute: RoleNames: UserRole
        """
        return jsii.get(self, "attrRoleNames")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUid")
    def attr_uid(self) -> typing.Any:
        """
        :Attribute: Uid: UserAliYunUid
        """
        return jsii.get(self, "attrUid")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> typing.Any:
        """
        :Attribute: UserId: UserId
        """
        return jsii.get(self, "attrUserId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> typing.Any:
        """
        :Attribute: UserName: UserNickName
        """
        return jsii.get(self, "attrUserName")

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
    @jsii.member(jsii_name="uid")
    def uid(self) -> builtins.str:
        """
        :Property: uid: UserAliYunUid
        """
        return jsii.get(self, "uid")

    @uid.setter # type: ignore
    def uid(self, value: builtins.str) -> None:
        jsii.set(self, "uid", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="mobile")
    def mobile(self) -> typing.Optional[builtins.str]:
        """
        :Property: mobile: UserMobile
        """
        return jsii.get(self, "mobile")

    @mobile.setter # type: ignore
    def mobile(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "mobile", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="roleNames")
    def role_names(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: roleNames: UserRole
        """
        return jsii.get(self, "roleNames")

    @role_names.setter # type: ignore
    def role_names(self, value: typing.Optional[typing.List[builtins.str]]) -> None:
        jsii.set(self, "roleNames", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="status")
    def status(self) -> typing.Optional[builtins.str]:
        """
        :Property: status: UserStatus
        """
        return jsii.get(self, "status")

    @status.setter # type: ignore
    def status(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "status", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tid")
    def tid(self) -> typing.Optional[builtins.str]:
        """
        :Property: tid:
        """
        return jsii.get(self, "tid")

    @tid.setter # type: ignore
    def tid(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "tid", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="userName")
    def user_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: userName: UserNickName
        """
        return jsii.get(self, "userName")

    @user_name.setter # type: ignore
    def user_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "userName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dms.RosUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "uid": "uid",
        "mobile": "mobile",
        "role_names": "roleNames",
        "status": "status",
        "tid": "tid",
        "user_name": "userName",
    },
)
class RosUserProps:
    def __init__(
        self,
        *,
        uid: builtins.str,
        mobile: typing.Optional[builtins.str] = None,
        role_names: typing.Optional[typing.List[builtins.str]] = None,
        status: typing.Optional[builtins.str] = None,
        tid: typing.Optional[builtins.str] = None,
        user_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DMS::User``.

        :param uid: 
        :param mobile: 
        :param role_names: 
        :param status: 
        :param tid: 
        :param user_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "uid": uid,
        }
        if mobile is not None:
            self._values["mobile"] = mobile
        if role_names is not None:
            self._values["role_names"] = role_names
        if status is not None:
            self._values["status"] = status
        if tid is not None:
            self._values["tid"] = tid
        if user_name is not None:
            self._values["user_name"] = user_name

    @builtins.property
    def uid(self) -> builtins.str:
        """
        :Property: uid: UserAliYunUid
        """
        result = self._values.get("uid")
        assert result is not None, "Required property 'uid' is missing"
        return result

    @builtins.property
    def mobile(self) -> typing.Optional[builtins.str]:
        """
        :Property: mobile: UserMobile
        """
        result = self._values.get("mobile")
        return result

    @builtins.property
    def role_names(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: roleNames: UserRole
        """
        result = self._values.get("role_names")
        return result

    @builtins.property
    def status(self) -> typing.Optional[builtins.str]:
        """
        :Property: status: UserStatus
        """
        result = self._values.get("status")
        return result

    @builtins.property
    def tid(self) -> typing.Optional[builtins.str]:
        """
        :Property: tid:
        """
        result = self._values.get("tid")
        return result

    @builtins.property
    def user_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: userName: UserNickName
        """
        result = self._values.get("user_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class User(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.User",
):
    """A ROS resource type:  ``ALIYUN::DMS::User``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UserProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DMS::User``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(User, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMobile")
    def attr_mobile(self) -> typing.Any:
        """
        :Attribute: Mobile: UserMobile
        """
        return jsii.get(self, "attrMobile")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(self) -> typing.Any:
        """
        :Attribute: ParentUid: ParentAliYunUid
        """
        return jsii.get(self, "attrParentUid")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRoleIds")
    def attr_role_ids(self) -> typing.Any:
        """
        :Attribute: RoleIds: UserRoleId
        """
        return jsii.get(self, "attrRoleIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRoleNames")
    def attr_role_names(self) -> typing.Any:
        """
        :Attribute: RoleNames: UserRole
        """
        return jsii.get(self, "attrRoleNames")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUid")
    def attr_uid(self) -> typing.Any:
        """
        :Attribute: Uid: UserAliYunUid
        """
        return jsii.get(self, "attrUid")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> typing.Any:
        """
        :Attribute: UserId: UserId
        """
        return jsii.get(self, "attrUserId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> typing.Any:
        """
        :Attribute: UserName: UserNickName
        """
        return jsii.get(self, "attrUserName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dms.UserProps",
    jsii_struct_bases=[],
    name_mapping={
        "uid": "uid",
        "mobile": "mobile",
        "role_names": "roleNames",
        "status": "status",
        "tid": "tid",
        "user_name": "userName",
    },
)
class UserProps:
    def __init__(
        self,
        *,
        uid: builtins.str,
        mobile: typing.Optional[builtins.str] = None,
        role_names: typing.Optional[typing.List[builtins.str]] = None,
        status: typing.Optional[builtins.str] = None,
        tid: typing.Optional[builtins.str] = None,
        user_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DMS::User``.

        :param uid: 
        :param mobile: 
        :param role_names: 
        :param status: 
        :param tid: 
        :param user_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "uid": uid,
        }
        if mobile is not None:
            self._values["mobile"] = mobile
        if role_names is not None:
            self._values["role_names"] = role_names
        if status is not None:
            self._values["status"] = status
        if tid is not None:
            self._values["tid"] = tid
        if user_name is not None:
            self._values["user_name"] = user_name

    @builtins.property
    def uid(self) -> builtins.str:
        """
        :Property: uid: UserAliYunUid
        """
        result = self._values.get("uid")
        assert result is not None, "Required property 'uid' is missing"
        return result

    @builtins.property
    def mobile(self) -> typing.Optional[builtins.str]:
        """
        :Property: mobile: UserMobile
        """
        result = self._values.get("mobile")
        return result

    @builtins.property
    def role_names(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: roleNames: UserRole
        """
        result = self._values.get("role_names")
        return result

    @builtins.property
    def status(self) -> typing.Optional[builtins.str]:
        """
        :Property: status: UserStatus
        """
        result = self._values.get("status")
        return result

    @builtins.property
    def tid(self) -> typing.Optional[builtins.str]:
        """
        :Property: tid:
        """
        result = self._values.get("tid")
        return result

    @builtins.property
    def user_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: userName: UserNickName
        """
        result = self._values.get("user_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
    "RosUser",
    "RosUserProps",
    "User",
    "UserProps",
]

publication.publish()
