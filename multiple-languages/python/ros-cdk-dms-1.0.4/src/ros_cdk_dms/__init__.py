'''
## Aliyun ROS DMS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DMS from '@alicloud/ros-cdk-dms';
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


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.Instance",
):
    '''A ROS resource type:  ``ALIYUN::DMS::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DMS::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHost")
    def attr_host(self) -> ros_cdk_core.IResolvable:
        '''Attribute Host: The endpoint of the database instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHost"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the database instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Port: The connection port of the database instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))


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
        database_password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        database_user: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        dba_uid: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        env_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        export_timeout: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_alias: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_source: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        network_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        query_timeout: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        safe_rule: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        tid: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        data_link_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ddl_online: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ecs_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ecs_region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        sid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        use_dsql: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DMS::Instance``.

        :param database_password: Property databasePassword: The logon password of the database instance.
        :param database_user: Property databaseUser: The logon username of the database instance.
        :param dba_uid: Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance. Note To query the UID, log on to the DMS Enterprise console and choose System Management .. epigraph:: User Management.
        :param env_type: Property envType: The type of the environment to which the database instance belongs. Valid values: product: the production environment. dev: the test environment.
        :param export_timeout: Property exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
        :param host: Property host: The endpoint of the database instance.
        :param instance_alias: Property instanceAlias: The alias of the database instance. The alias helps you quickly find the required instance.
        :param instance_source: Property instanceSource: The source of the database instance. Valid values: PUBLIC_OWN: an on-premises database built on the public network. RDS: an ApsaraDB for RDS (RDS) instance. ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance. VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private Cloud (VPC).
        :param instance_type: Property instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        :param network_type: Property networkType: The network type of the database instance. Valid values: CLASSIC VPC
        :param port: Property port: The connection port of the database instance.
        :param query_timeout: Property queryTimeout: The timeout period for querying the database instance. Unit: seconds.
        :param safe_rule: Property safeRule: The security rule of the database instance. Enter the name of the security rule for your enterprise. Note To query a specified security rule, log on to the DMS Enterprise console and choose System Management > Security Rules. The security rule appears in the security rule list.
        :param tid: Property tid: The ID of the tenant. Note To query the ID, log on to the DMS Enterprise console and choose System Management .. epigraph:: Instance Management or System Management > User Management. The ID of the tenant appears in the Service Specification section.
        :param data_link_name: Property dataLinkName: The name of the data link for cross-database query.
        :param ddl_online: Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service. Currently, this service is available only for the MySQL and PolarDB databases. 0: The service is disabled. 1: The native online DDL service prevails. 2: Data change without table locking provided by DMS prevails.
        :param ecs_instance_id: Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs. Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        :param ecs_region: Property ecsRegion: The region where the database instance resides. Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        :param sid: Property sid: The system ID (SID) of the database instance. Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        :param use_dsql: Property useDsql: Specifies whether to enable cross-database query for the database instance. Valid values: 0: disabled 1: enabled
        :param vpc_id: Property vpcId: The ID of the VPC to which the database instance belongs. Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        '''
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
    def database_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property databasePassword: The logon password of the database instance.'''
        result = self._values.get("database_password")
        assert result is not None, "Required property 'database_password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def database_user(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property databaseUser: The logon username of the database instance.'''
        result = self._values.get("database_user")
        assert result is not None, "Required property 'database_user' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def dba_uid(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance.

        Note To query the UID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

           User Management.
        '''
        result = self._values.get("dba_uid")
        assert result is not None, "Required property 'dba_uid' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def env_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property envType: The type of the environment to which the database instance belongs.

        Valid values:
        product: the production environment.
        dev: the test environment.
        '''
        result = self._values.get("env_type")
        assert result is not None, "Required property 'env_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def export_timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property exportTimeout: The timeout period for exporting the database instance.

        Unit: seconds.
        '''
        result = self._values.get("export_timeout")
        assert result is not None, "Required property 'export_timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property host: The endpoint of the database instance.'''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_alias(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceAlias: The alias of the database instance.

        The alias helps you quickly find the required
        instance.
        '''
        result = self._values.get("instance_alias")
        assert result is not None, "Required property 'instance_alias' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceSource: The source of the database instance.

        Valid values:
        PUBLIC_OWN: an on-premises database built on the public network.
        RDS: an ApsaraDB for RDS (RDS) instance.
        ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
        VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
        Cloud (VPC).
        '''
        result = self._values.get("instance_source")
        assert result is not None, "Required property 'instance_source' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceType: The type of the database instance.

        Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def network_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property networkType: The network type of the database instance.

        Valid values:
        CLASSIC
        VPC
        '''
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property port: The connection port of the database instance.'''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def query_timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property queryTimeout: The timeout period for querying the database instance.

        Unit: seconds.
        '''
        result = self._values.get("query_timeout")
        assert result is not None, "Required property 'query_timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def safe_rule(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property safeRule: The security rule of the database instance.

        Enter the name of the security rule for
        your enterprise.
        Note To query a specified security rule, log on to the DMS Enterprise console and choose
        System Management > Security Rules. The security rule appears in the security rule
        list.
        '''
        result = self._values.get("safe_rule")
        assert result is not None, "Required property 'safe_rule' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def tid(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property tid: The ID of the tenant.

        Note To query the ID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

           Instance Management or System Management > User Management. The ID of the tenant
           appears in the Service Specification section.
        '''
        result = self._values.get("tid")
        assert result is not None, "Required property 'tid' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def data_link_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dataLinkName: The name of the data link for cross-database query.'''
        result = self._values.get("data_link_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ddl_online(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service.

        Currently, this service is available only for the MySQL and PolarDB databases.
        0: The service is disabled.
        1: The native online DDL service prevails.
        2: Data change without table locking provided by DMS prevails.
        '''
        result = self._values.get("ddl_online")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecs_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.

        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        '''
        result = self._values.get("ecs_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecs_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property ecsRegion: The region where the database instance resides.

        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        '''
        result = self._values.get("ecs_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sid: The system ID (SID) of the database instance.

        Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        '''
        result = self._values.get("sid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def use_dsql(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property useDsql: Specifies whether to enable cross-database query for the database instance.

        Valid
        values:
        0: disabled
        1: enabled
        '''
        result = self._values.get("use_dsql")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The ID of the VPC to which the database instance belongs.

        Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::DMS::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DMS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrHost")
    def attr_host(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Host: The endpoint of the database instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHost"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the database instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Port: The connection port of the database instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="databasePassword")
    def database_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: databasePassword: The logon password of the database instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "databasePassword"))

    @database_password.setter
    def database_password(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "databasePassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="databaseUser")
    def database_user(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: databaseUser: The logon username of the database instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "databaseUser"))

    @database_user.setter
    def database_user(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "databaseUser", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbaUid")
    def dba_uid(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
        instance.
        Note To query the UID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        User Management.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "dbaUid"))

    @dba_uid.setter
    def dba_uid(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbaUid", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="envType")
    def env_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        envType: The type of the environment to which the database instance belongs. Valid values:
        product: the production environment.
        dev: the test environment.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "envType"))

    @env_type.setter
    def env_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "envType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="exportTimeout")
    def export_timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "exportTimeout"))

    @export_timeout.setter
    def export_timeout(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "exportTimeout", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="host")
    def host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: host: The endpoint of the database instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "host"))

    @host.setter
    def host(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "host", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceAlias")
    def instance_alias(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceAlias: The alias of the database instance. The alias helps you quickly find the required
        instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceAlias"))

    @instance_alias.setter
    def instance_alias(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceAlias", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceSource")
    def instance_source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceSource: The source of the database instance. Valid values:
        PUBLIC_OWN: an on-premises database built on the public network.
        RDS: an ApsaraDB for RDS (RDS) instance.
        ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
        VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
        Cloud (VPC).
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceSource"))

    @instance_source.setter
    def instance_source(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceSource", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceType")
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="networkType")
    def network_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        networkType: The network type of the database instance. Valid values:
        CLASSIC
        VPC
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "networkType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: port: The connection port of the database instance.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "port"))

    @port.setter
    def port(self, value: typing.Union[jsii.Number, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="queryTimeout")
    def query_timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "queryTimeout"))

    @query_timeout.setter
    def query_timeout(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "queryTimeout", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="safeRule")
    def safe_rule(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        safeRule: The security rule of the database instance. Enter the name of the security rule for
        your enterprise.
        Note To query a specified security rule, log on to the DMS Enterprise console and choose
        System Management > Security Rules. The security rule appears in the security rule
        list.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "safeRule"))

    @safe_rule.setter
    def safe_rule(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "safeRule", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tid")
    def tid(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        tid: The ID of the tenant.
        Note To query the ID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        Instance Management or System Management > User Management. The ID of the tenant
        appears in the Service Specification section.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "tid"))

    @tid.setter
    def tid(self, value: typing.Union[jsii.Number, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "tid", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dataLinkName")
    def data_link_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dataLinkName: The name of the data link for cross-database query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dataLinkName"))

    @data_link_name.setter
    def data_link_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dataLinkName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ddlOnline")
    def ddl_online(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
        service. Currently, this service is available only for the MySQL and PolarDB databases.
        0: The service is disabled.
        1: The native online DDL service prevails.
        2: Data change without table locking provided by DMS prevails.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "ddlOnline"))

    @ddl_online.setter
    def ddl_online(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ddlOnline", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ecsInstanceId")
    def ecs_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "ecsInstanceId"))

    @ecs_instance_id.setter
    def ecs_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ecsInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ecsRegion")
    def ecs_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ecsRegion: The region where the database instance resides.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "ecsRegion"))

    @ecs_region.setter
    def ecs_region(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ecsRegion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sid")
    def sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sid: The system ID (SID) of the database instance.
        Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sid"))

    @sid.setter
    def sid(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sid", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="useDsql")
    def use_dsql(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        useDsql: Specifies whether to enable cross-database query for the database instance. Valid
        values:
        0: disabled
        1: enabled
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "useDsql"))

    @use_dsql.setter
    def use_dsql(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "useDsql", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the VPC to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        database_password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        database_user: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        dba_uid: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        env_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        export_timeout: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_alias: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_source: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        network_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        query_timeout: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        safe_rule: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        tid: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        data_link_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ddl_online: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ecs_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ecs_region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        sid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        use_dsql: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DMS::Instance``.

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
        '''
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
    def database_password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: databasePassword: The logon password of the database instance.
        '''
        result = self._values.get("database_password")
        assert result is not None, "Required property 'database_password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def database_user(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: databaseUser: The logon username of the database instance.
        '''
        result = self._values.get("database_user")
        assert result is not None, "Required property 'database_user' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def dba_uid(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
        instance.
        Note To query the UID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        User Management.
        '''
        result = self._values.get("dba_uid")
        assert result is not None, "Required property 'dba_uid' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def env_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        envType: The type of the environment to which the database instance belongs. Valid values:
        product: the production environment.
        dev: the test environment.
        '''
        result = self._values.get("env_type")
        assert result is not None, "Required property 'env_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def export_timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
        '''
        result = self._values.get("export_timeout")
        assert result is not None, "Required property 'export_timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: host: The endpoint of the database instance.
        '''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_alias(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceAlias: The alias of the database instance. The alias helps you quickly find the required
        instance.
        '''
        result = self._values.get("instance_alias")
        assert result is not None, "Required property 'instance_alias' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceSource: The source of the database instance. Valid values:
        PUBLIC_OWN: an on-premises database built on the public network.
        RDS: an ApsaraDB for RDS (RDS) instance.
        ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
        VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
        Cloud (VPC).
        '''
        result = self._values.get("instance_source")
        assert result is not None, "Required property 'instance_source' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def network_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        networkType: The network type of the database instance. Valid values:
        CLASSIC
        VPC
        '''
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: port: The connection port of the database instance.
        '''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def query_timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
        '''
        result = self._values.get("query_timeout")
        assert result is not None, "Required property 'query_timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def safe_rule(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        safeRule: The security rule of the database instance. Enter the name of the security rule for
        your enterprise.
        Note To query a specified security rule, log on to the DMS Enterprise console and choose
        System Management > Security Rules. The security rule appears in the security rule
        list.
        '''
        result = self._values.get("safe_rule")
        assert result is not None, "Required property 'safe_rule' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def tid(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        tid: The ID of the tenant.
        Note To query the ID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        Instance Management or System Management > User Management. The ID of the tenant
        appears in the Service Specification section.
        '''
        result = self._values.get("tid")
        assert result is not None, "Required property 'tid' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def data_link_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dataLinkName: The name of the data link for cross-database query.
        '''
        result = self._values.get("data_link_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ddl_online(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
        service. Currently, this service is available only for the MySQL and PolarDB databases.
        0: The service is disabled.
        1: The native online DDL service prevails.
        2: Data change without table locking provided by DMS prevails.
        '''
        result = self._values.get("ddl_online")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecs_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        '''
        result = self._values.get("ecs_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecs_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ecsRegion: The region where the database instance resides.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        '''
        result = self._values.get("ecs_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sid: The system ID (SID) of the database instance.
        Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        '''
        result = self._values.get("sid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def use_dsql(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        useDsql: Specifies whether to enable cross-database query for the database instance. Valid
        values:
        0: disabled
        1: enabled
        '''
        result = self._values.get("use_dsql")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the VPC to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::DMS::User``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUserProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DMS::User``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrMobile")
    def attr_mobile(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Mobile: UserMobile
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMobile"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ParentUid: ParentAliYunUid
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrParentUid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRoleIds")
    def attr_role_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RoleIds: UserRoleId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRoleIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRoleNames")
    def attr_role_names(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RoleNames: UserRole
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRoleNames"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUid")
    def attr_uid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Uid: UserAliYunUid
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UserId: UserId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UserName: UserNickName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserName"))

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
    @jsii.member(jsii_name="uid")
    def uid(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: uid: UserAliYunUid
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "uid"))

    @uid.setter
    def uid(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "uid", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="mobile")
    def mobile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: mobile: UserMobile
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "mobile"))

    @mobile.setter
    def mobile(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "mobile", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="roleNames")
    def role_names(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: roleNames: UserRole
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "roleNames"))

    @role_names.setter
    def role_names(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "roleNames", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: status: UserStatus
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "status", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tid")
    def tid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: tid:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "tid"))

    @tid.setter
    def tid(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "tid", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userName: UserNickName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        uid: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        mobile: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        role_names: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DMS::User``.

        :param uid: 
        :param mobile: 
        :param role_names: 
        :param status: 
        :param tid: 
        :param user_name: 
        '''
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
    def uid(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: uid: UserAliYunUid
        '''
        result = self._values.get("uid")
        assert result is not None, "Required property 'uid' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def mobile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: mobile: UserMobile
        '''
        result = self._values.get("mobile")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def role_names(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: roleNames: UserRole
        '''
        result = self._values.get("role_names")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: status: UserStatus
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: tid:
        '''
        result = self._values.get("tid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userName: UserNickName
        '''
        result = self._values.get("user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS resource type:  ``ALIYUN::DMS::User``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UserProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DMS::User``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMobile")
    def attr_mobile(self) -> ros_cdk_core.IResolvable:
        '''Attribute Mobile: UserMobile.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMobile"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(self) -> ros_cdk_core.IResolvable:
        '''Attribute ParentUid: ParentAliYunUid.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrParentUid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRoleIds")
    def attr_role_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute RoleIds: UserRoleId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRoleIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRoleNames")
    def attr_role_names(self) -> ros_cdk_core.IResolvable:
        '''Attribute RoleNames: UserRole.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRoleNames"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUid")
    def attr_uid(self) -> ros_cdk_core.IResolvable:
        '''Attribute Uid: UserAliYunUid.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute UserId: UserId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute UserName: UserNickName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserName"))


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
        uid: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        mobile: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        role_names: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DMS::User``.

        :param uid: Property uid: UserAliYunUid.
        :param mobile: Property mobile: UserMobile.
        :param role_names: Property roleNames: UserRole.
        :param status: Property status: UserStatus.
        :param tid: Property tid:.
        :param user_name: Property userName: UserNickName.
        '''
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
    def uid(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property uid: UserAliYunUid.'''
        result = self._values.get("uid")
        assert result is not None, "Required property 'uid' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def mobile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property mobile: UserMobile.'''
        result = self._values.get("mobile")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def role_names(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property roleNames: UserRole.'''
        result = self._values.get("role_names")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property status: UserStatus.'''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property tid:.'''
        result = self._values.get("tid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property userName: UserNickName.'''
        result = self._values.get("user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
