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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.Instance",
):
    '''A ROS resource type:  ``ALIYUN::DMS::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61d2216c5db72fe3fd756e4c674992b5ab45146485a51a8520b6208b50fe2ccd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHost")
    def attr_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Host: The endpoint of the database instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHost"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the database instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: The connection port of the database instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))


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
        database_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        database_user: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dba_uid: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        export_timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_alias: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        query_timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        safe_rule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        tid: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        data_link_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ddl_online: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        use_dsql: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__664996be339ff0a8005f39628be572b531c7f836ecfbaec52b0e091d6dee8f92)
            check_type(argname="argument database_password", value=database_password, expected_type=type_hints["database_password"])
            check_type(argname="argument database_user", value=database_user, expected_type=type_hints["database_user"])
            check_type(argname="argument dba_uid", value=dba_uid, expected_type=type_hints["dba_uid"])
            check_type(argname="argument env_type", value=env_type, expected_type=type_hints["env_type"])
            check_type(argname="argument export_timeout", value=export_timeout, expected_type=type_hints["export_timeout"])
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
            check_type(argname="argument instance_alias", value=instance_alias, expected_type=type_hints["instance_alias"])
            check_type(argname="argument instance_source", value=instance_source, expected_type=type_hints["instance_source"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument query_timeout", value=query_timeout, expected_type=type_hints["query_timeout"])
            check_type(argname="argument safe_rule", value=safe_rule, expected_type=type_hints["safe_rule"])
            check_type(argname="argument tid", value=tid, expected_type=type_hints["tid"])
            check_type(argname="argument data_link_name", value=data_link_name, expected_type=type_hints["data_link_name"])
            check_type(argname="argument ddl_online", value=ddl_online, expected_type=type_hints["ddl_online"])
            check_type(argname="argument ecs_instance_id", value=ecs_instance_id, expected_type=type_hints["ecs_instance_id"])
            check_type(argname="argument ecs_region", value=ecs_region, expected_type=type_hints["ecs_region"])
            check_type(argname="argument sid", value=sid, expected_type=type_hints["sid"])
            check_type(argname="argument use_dsql", value=use_dsql, expected_type=type_hints["use_dsql"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def database_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property databasePassword: The logon password of the database instance.'''
        result = self._values.get("database_password")
        assert result is not None, "Required property 'database_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def database_user(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property databaseUser: The logon username of the database instance.'''
        result = self._values.get("database_user")
        assert result is not None, "Required property 'database_user' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dba_uid(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance.

        Note To query the UID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

           User Management.
        '''
        result = self._values.get("dba_uid")
        assert result is not None, "Required property 'dba_uid' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property envType: The type of the environment to which the database instance belongs.

        Valid values:
        product: the production environment.
        dev: the test environment.
        '''
        result = self._values.get("env_type")
        assert result is not None, "Required property 'env_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def export_timeout(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property exportTimeout: The timeout period for exporting the database instance.

        Unit: seconds.
        '''
        result = self._values.get("export_timeout")
        assert result is not None, "Required property 'export_timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property host: The endpoint of the database instance.'''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceAlias: The alias of the database instance.

        The alias helps you quickly find the required
        instance.
        '''
        result = self._values.get("instance_alias")
        assert result is not None, "Required property 'instance_alias' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_source(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceType: The type of the database instance.

        Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property networkType: The network type of the database instance.

        Valid values:
        CLASSIC
        VPC
        '''
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property port: The connection port of the database instance.'''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def query_timeout(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property queryTimeout: The timeout period for querying the database instance.

        Unit: seconds.
        '''
        result = self._values.get("query_timeout")
        assert result is not None, "Required property 'query_timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def safe_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property safeRule: The security rule of the database instance.

        Enter the name of the security rule for
        your enterprise.
        Note To query a specified security rule, log on to the DMS Enterprise console and choose
        System Management > Security Rules. The security rule appears in the security rule
        list.
        '''
        result = self._values.get("safe_rule")
        assert result is not None, "Required property 'safe_rule' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def tid(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property tid: The ID of the tenant.

        Note To query the ID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

           Instance Management or System Management > User Management. The ID of the tenant
           appears in the Service Specification section.
        '''
        result = self._values.get("tid")
        assert result is not None, "Required property 'tid' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_link_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataLinkName: The name of the data link for cross-database query.'''
        result = self._values.get("data_link_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ddl_online(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service.

        Currently, this service is available only for the MySQL and PolarDB databases.
        0: The service is disabled.
        1: The native online DDL service prevails.
        2: Data change without table locking provided by DMS prevails.
        '''
        result = self._values.get("ddl_online")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.

        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        '''
        result = self._values.get("ecs_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsRegion: The region where the database instance resides.

        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        '''
        result = self._values.get("ecs_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sid: The system ID (SID) of the database instance.

        Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        '''
        result = self._values.get("sid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def use_dsql(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property useDsql: Specifies whether to enable cross-database query for the database instance.

        Valid
        values:
        0: disabled
        1: enabled
        '''
        result = self._values.get("use_dsql")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the VPC to which the database instance belongs.

        Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::DMS::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DMS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5105ff9bf47930575a8d8ea542fe62f8d60dc4a366282896126ccf89dbedf0b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__16a1c980794651d7669bdc55abbf4bfddcba8832dfc61063dd40c452792b7b47)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHost")
    def attr_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Host: The endpoint of the database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHost"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: The connection port of the database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="databasePassword")
    def database_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: databasePassword: The logon password of the database instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "databasePassword"))

    @database_password.setter
    def database_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__285e8881d2cd39cfd5a584f4f2bda6dc137f3c8e63b6c88ab2721825170b1832)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "databasePassword", value)

    @builtins.property
    @jsii.member(jsii_name="databaseUser")
    def database_user(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: databaseUser: The logon username of the database instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "databaseUser"))

    @database_user.setter
    def database_user(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ca0f1cb1344e064f36084c3ee3e12b9be74382bccfc2cbba155069323c4efb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "databaseUser", value)

    @builtins.property
    @jsii.member(jsii_name="dbaUid")
    def dba_uid(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
        instance.
        Note To query the UID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        User Management.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbaUid"))

    @dba_uid.setter
    def dba_uid(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2b93fc93100bca6353e4052fcb8807dfe963517597fa7e3d21638e5c076fb5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbaUid", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d83dba3a30d8974a0abeef094d7b9c0784baf777bc7180562998f4dff2ed150d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="envType")
    def env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        envType: The type of the environment to which the database instance belongs. Valid values:
        product: the production environment.
        dev: the test environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "envType"))

    @env_type.setter
    def env_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca5045cbb8e1f5e359b2f80a0fc0c700cba035b58dfaadf49c05fbb7bf7e80cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "envType", value)

    @builtins.property
    @jsii.member(jsii_name="exportTimeout")
    def export_timeout(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "exportTimeout"))

    @export_timeout.setter
    def export_timeout(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0b8a5d8435fa3ca48f288ab231dc676226637c51338d3240065239c0491504e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exportTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="host")
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: host: The endpoint of the database instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "host"))

    @host.setter
    def host(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c893cf0cabebcf6daf74f3da54c44f2dc532eb1b0629a086e61b79103e47b73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "host", value)

    @builtins.property
    @jsii.member(jsii_name="instanceAlias")
    def instance_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceAlias: The alias of the database instance. The alias helps you quickly find the required
        instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceAlias"))

    @instance_alias.setter
    def instance_alias(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a45854bae0ffd513a51120b99293e3f3c17159bdc1a9fc22474c9db5d065395d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceAlias", value)

    @builtins.property
    @jsii.member(jsii_name="instanceSource")
    def instance_source(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceSource: The source of the database instance. Valid values:
        PUBLIC_OWN: an on-premises database built on the public network.
        RDS: an ApsaraDB for RDS (RDS) instance.
        ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
        VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
        Cloud (VPC).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceSource"))

    @instance_source.setter
    def instance_source(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e74a21cd47d2600b5e62f7fc1c5eef522f3895812e09c14df3a23c8e93d698f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceSource", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1afc689b407790eca63eafdf5aa8260bfe872c7d5dee378d712604266101c10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        networkType: The network type of the database instance. Valid values:
        CLASSIC
        VPC
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f96ca560a72c2e6b9b67f8c5f165aadead9b40e1e8152c2863d743df263f83a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: port: The connection port of the database instance.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da1bdb8f1b666180524b9935584daecfea12499fbc758c49dbf18211a35cec20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "port", value)

    @builtins.property
    @jsii.member(jsii_name="queryTimeout")
    def query_timeout(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "queryTimeout"))

    @query_timeout.setter
    def query_timeout(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52ecc82665b718159d08b87a2cede0048b3939bd293237c57275ee61b136943d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "queryTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="safeRule")
    def safe_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        safeRule: The security rule of the database instance. Enter the name of the security rule for
        your enterprise.
        Note To query a specified security rule, log on to the DMS Enterprise console and choose
        System Management > Security Rules. The security rule appears in the security rule
        list.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "safeRule"))

    @safe_rule.setter
    def safe_rule(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a05ef70da260822b3b617572c8dd35ff904590101494d145dfa25a50f994e72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "safeRule", value)

    @builtins.property
    @jsii.member(jsii_name="tid")
    def tid(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        tid: The ID of the tenant.
        Note To query the ID, log on to the DMS Enterprise console and choose System Management
        .. epigraph::

        Instance Management or System Management > User Management. The ID of the tenant
        appears in the Service Specification section.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "tid"))

    @tid.setter
    def tid(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7af1f4d773d136ad61ba7c21eeb22fc1b6d61c8f1f647dd21e5bf5ba06c67ad4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tid", value)

    @builtins.property
    @jsii.member(jsii_name="dataLinkName")
    def data_link_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataLinkName: The name of the data link for cross-database query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataLinkName"))

    @data_link_name.setter
    def data_link_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7aaff54018eb3045b8eb50bd63250e8ef045988511a633c72ba96919913706b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataLinkName", value)

    @builtins.property
    @jsii.member(jsii_name="ddlOnline")
    def ddl_online(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
        service. Currently, this service is available only for the MySQL and PolarDB databases.
        0: The service is disabled.
        1: The native online DDL service prevails.
        2: Data change without table locking provided by DMS prevails.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ddlOnline"))

    @ddl_online.setter
    def ddl_online(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0fe4b152a2092e008f2132db50578139efe38fd0d5ce283be8acd2c9000fcd2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ddlOnline", value)

    @builtins.property
    @jsii.member(jsii_name="ecsInstanceId")
    def ecs_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsInstanceId"))

    @ecs_instance_id.setter
    def ecs_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79d5d553559ba54da21fe2ef29a270fb30bf7adebfbcf4d0a176e0887047bc83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="ecsRegion")
    def ecs_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ecsRegion: The region where the database instance resides.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsRegion"))

    @ecs_region.setter
    def ecs_region(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de093299590253b1d14da8fb9ae2edccff6122c28044f26bad1ab2d731adc784)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsRegion", value)

    @builtins.property
    @jsii.member(jsii_name="sid")
    def sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sid: The system ID (SID) of the database instance.
        Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sid"))

    @sid.setter
    def sid(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__291b32a0a454016171f8ec34ee1eabfa3b2e2521f7f4bf83343e32b993c762ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sid", value)

    @builtins.property
    @jsii.member(jsii_name="useDsql")
    def use_dsql(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        useDsql: Specifies whether to enable cross-database query for the database instance. Valid
        values:
        0: disabled
        1: enabled
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "useDsql"))

    @use_dsql.setter
    def use_dsql(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28a569ad285b9d1b07fdc2722e468aa48279707ad8f60c387e741705b85c6263)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "useDsql", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the VPC to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff1807a3e3bd99a4446a624ada89a8111cd795ea60c0de40cf40a39c6e0ff3f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        database_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        database_user: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dba_uid: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        export_timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_alias: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        query_timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        safe_rule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        tid: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        data_link_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ddl_online: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        use_dsql: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__384b60ea270900a3077e0994edea3bf117b00103907f96a6c6536d47b5e5cf44)
            check_type(argname="argument database_password", value=database_password, expected_type=type_hints["database_password"])
            check_type(argname="argument database_user", value=database_user, expected_type=type_hints["database_user"])
            check_type(argname="argument dba_uid", value=dba_uid, expected_type=type_hints["dba_uid"])
            check_type(argname="argument env_type", value=env_type, expected_type=type_hints["env_type"])
            check_type(argname="argument export_timeout", value=export_timeout, expected_type=type_hints["export_timeout"])
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
            check_type(argname="argument instance_alias", value=instance_alias, expected_type=type_hints["instance_alias"])
            check_type(argname="argument instance_source", value=instance_source, expected_type=type_hints["instance_source"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument query_timeout", value=query_timeout, expected_type=type_hints["query_timeout"])
            check_type(argname="argument safe_rule", value=safe_rule, expected_type=type_hints["safe_rule"])
            check_type(argname="argument tid", value=tid, expected_type=type_hints["tid"])
            check_type(argname="argument data_link_name", value=data_link_name, expected_type=type_hints["data_link_name"])
            check_type(argname="argument ddl_online", value=ddl_online, expected_type=type_hints["ddl_online"])
            check_type(argname="argument ecs_instance_id", value=ecs_instance_id, expected_type=type_hints["ecs_instance_id"])
            check_type(argname="argument ecs_region", value=ecs_region, expected_type=type_hints["ecs_region"])
            check_type(argname="argument sid", value=sid, expected_type=type_hints["sid"])
            check_type(argname="argument use_dsql", value=use_dsql, expected_type=type_hints["use_dsql"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def database_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: databasePassword: The logon password of the database instance.
        '''
        result = self._values.get("database_password")
        assert result is not None, "Required property 'database_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def database_user(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: databaseUser: The logon username of the database instance.
        '''
        result = self._values.get("database_user")
        assert result is not None, "Required property 'database_user' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dba_uid(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        envType: The type of the environment to which the database instance belongs. Valid values:
        product: the production environment.
        dev: the test environment.
        '''
        result = self._values.get("env_type")
        assert result is not None, "Required property 'env_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def export_timeout(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
        '''
        result = self._values.get("export_timeout")
        assert result is not None, "Required property 'export_timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: host: The endpoint of the database instance.
        '''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceAlias: The alias of the database instance. The alias helps you quickly find the required
        instance.
        '''
        result = self._values.get("instance_alias")
        assert result is not None, "Required property 'instance_alias' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_source(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        networkType: The network type of the database instance. Valid values:
        CLASSIC
        VPC
        '''
        result = self._values.get("network_type")
        assert result is not None, "Required property 'network_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: port: The connection port of the database instance.
        '''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def query_timeout(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
        '''
        result = self._values.get("query_timeout")
        assert result is not None, "Required property 'query_timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def safe_rule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def tid(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_link_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataLinkName: The name of the data link for cross-database query.
        '''
        result = self._values.get("data_link_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ddl_online(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
        service. Currently, this service is available only for the MySQL and PolarDB databases.
        0: The service is disabled.
        1: The native online DDL service prevails.
        2: Data change without table locking provided by DMS prevails.
        '''
        result = self._values.get("ddl_online")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        '''
        result = self._values.get("ecs_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ecsRegion: The region where the database instance resides.
        Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        '''
        result = self._values.get("ecs_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sid: The system ID (SID) of the database instance.
        Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        '''
        result = self._values.get("sid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def use_dsql(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        useDsql: Specifies whether to enable cross-database query for the database instance. Valid
        values:
        0: disabled
        1: enabled
        '''
        result = self._values.get("use_dsql")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the VPC to which the database instance belongs.
        Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUser(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.RosUser",
):
    '''A ROS template type:  ``ALIYUN::DMS::User``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DMS::User``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2a8e0f4e352122adda54fa861fac1f9af13782b44f149869831442b717b7674)
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
            type_hints = typing.get_type_hints(_typecheckingstub__96f49c2bc24cc12b622947b15f2fb3ac451a86eeaa3de39b2f48df039c9f0844)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrMobile")
    def attr_mobile(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Mobile: UserMobile
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMobile"))

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParentUid: ParentAliYunUid
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParentUid"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleIds")
    def attr_role_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RoleIds: UserRoleId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleNames")
    def attr_role_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RoleNames: UserRole
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleNames"))

    @builtins.property
    @jsii.member(jsii_name="attrUid")
    def attr_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Uid: UserAliYunUid
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUid"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: UserId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserName: UserNickName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__bce7df93117cb74465bdd44ef4b6a3562e4c88d330c202f2ca43d9b7da29231f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="uid")
    def uid(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: uid: UserAliYunUid
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "uid"))

    @uid.setter
    def uid(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c3b60d097ab072ee8a6b9b0bf10f8faf3485a4dd1e2c4ca775d8ee8d6ac9f95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uid", value)

    @builtins.property
    @jsii.member(jsii_name="mobile")
    def mobile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mobile: UserMobile
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mobile"))

    @mobile.setter
    def mobile(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7824adfd4ad48b2b3c0609c1f8c616eaf40ec7f6a09cad3581909e9b0f3d72e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mobile", value)

    @builtins.property
    @jsii.member(jsii_name="roleNames")
    def role_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: roleNames: UserRole
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "roleNames"))

    @role_names.setter
    def role_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb55af26b24f56caf9fd9c4de7570fd09ba8f7d7392fad904ecb9527f1ebcac8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "roleNames", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: UserStatus
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccc0f86dffa42143a3ca0d69940038d3ba3a6e734f427a03a987a9a30af1747b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="tid")
    def tid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tid:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tid"))

    @tid.setter
    def tid(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28842736e49829ad07db0626736cb40185725259ac3d4ab6815a700983c5ff28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tid", value)

    @builtins.property
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userName: UserNickName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__187f8ec466a442efdbf5a58211ab55687a6348b59a64c71a549f3a29b187b467)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        uid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        mobile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        role_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DMS::User``.

        :param uid: 
        :param mobile: 
        :param role_names: 
        :param status: 
        :param tid: 
        :param user_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__926bf585de3ae1e410df8cdd07401e24dfce8dbce904662cb22db81839e911c9)
            check_type(argname="argument uid", value=uid, expected_type=type_hints["uid"])
            check_type(argname="argument mobile", value=mobile, expected_type=type_hints["mobile"])
            check_type(argname="argument role_names", value=role_names, expected_type=type_hints["role_names"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tid", value=tid, expected_type=type_hints["tid"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def uid(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: uid: UserAliYunUid
        '''
        result = self._values.get("uid")
        assert result is not None, "Required property 'uid' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def mobile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mobile: UserMobile
        '''
        result = self._values.get("mobile")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def role_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: roleNames: UserRole
        '''
        result = self._values.get("role_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: UserStatus
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tid:
        '''
        result = self._values.get("tid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userName: UserNickName
        '''
        result = self._values.get("user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class User(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dms.User",
):
    '''A ROS resource type:  ``ALIYUN::DMS::User``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da01e17011f7361a4a25975554092ab32d6026880ca1e06d9f35ade57ff10d69)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrMobile")
    def attr_mobile(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Mobile: UserMobile.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMobile"))

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ParentUid: ParentAliYunUid.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParentUid"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleIds")
    def attr_role_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RoleIds: UserRoleId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleNames")
    def attr_role_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RoleNames: UserRole.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleNames"))

    @builtins.property
    @jsii.member(jsii_name="attrUid")
    def attr_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Uid: UserAliYunUid.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUid"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserId: UserId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserName: UserNickName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserName"))


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
        uid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        mobile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        role_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DMS::User``.

        :param uid: Property uid: UserAliYunUid.
        :param mobile: Property mobile: UserMobile.
        :param role_names: Property roleNames: UserRole.
        :param status: Property status: UserStatus.
        :param tid: Property tid:.
        :param user_name: Property userName: UserNickName.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bacce53f27b0edcaa3b12e1de0461fab75898c6581afee1589c377e3fb84e7d6)
            check_type(argname="argument uid", value=uid, expected_type=type_hints["uid"])
            check_type(argname="argument mobile", value=mobile, expected_type=type_hints["mobile"])
            check_type(argname="argument role_names", value=role_names, expected_type=type_hints["role_names"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument tid", value=tid, expected_type=type_hints["tid"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def uid(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property uid: UserAliYunUid.'''
        result = self._values.get("uid")
        assert result is not None, "Required property 'uid' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def mobile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mobile: UserMobile.'''
        result = self._values.get("mobile")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def role_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property roleNames: UserRole.'''
        result = self._values.get("role_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: UserStatus.'''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tid:.'''
        result = self._values.get("tid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userName: UserNickName.'''
        result = self._values.get("user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

def _typecheckingstub__61d2216c5db72fe3fd756e4c674992b5ab45146485a51a8520b6208b50fe2ccd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__664996be339ff0a8005f39628be572b531c7f836ecfbaec52b0e091d6dee8f92(
    *,
    database_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_user: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dba_uid: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    export_timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_alias: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    query_timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    safe_rule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tid: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    data_link_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddl_online: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    use_dsql: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5105ff9bf47930575a8d8ea542fe62f8d60dc4a366282896126ccf89dbedf0b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16a1c980794651d7669bdc55abbf4bfddcba8832dfc61063dd40c452792b7b47(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__285e8881d2cd39cfd5a584f4f2bda6dc137f3c8e63b6c88ab2721825170b1832(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ca0f1cb1344e064f36084c3ee3e12b9be74382bccfc2cbba155069323c4efb5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2b93fc93100bca6353e4052fcb8807dfe963517597fa7e3d21638e5c076fb5a(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d83dba3a30d8974a0abeef094d7b9c0784baf777bc7180562998f4dff2ed150d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca5045cbb8e1f5e359b2f80a0fc0c700cba035b58dfaadf49c05fbb7bf7e80cc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0b8a5d8435fa3ca48f288ab231dc676226637c51338d3240065239c0491504e(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c893cf0cabebcf6daf74f3da54c44f2dc532eb1b0629a086e61b79103e47b73(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a45854bae0ffd513a51120b99293e3f3c17159bdc1a9fc22474c9db5d065395d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e74a21cd47d2600b5e62f7fc1c5eef522f3895812e09c14df3a23c8e93d698f1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1afc689b407790eca63eafdf5aa8260bfe872c7d5dee378d712604266101c10(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f96ca560a72c2e6b9b67f8c5f165aadead9b40e1e8152c2863d743df263f83a6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da1bdb8f1b666180524b9935584daecfea12499fbc758c49dbf18211a35cec20(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52ecc82665b718159d08b87a2cede0048b3939bd293237c57275ee61b136943d(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a05ef70da260822b3b617572c8dd35ff904590101494d145dfa25a50f994e72(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7af1f4d773d136ad61ba7c21eeb22fc1b6d61c8f1f647dd21e5bf5ba06c67ad4(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7aaff54018eb3045b8eb50bd63250e8ef045988511a633c72ba96919913706b9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0fe4b152a2092e008f2132db50578139efe38fd0d5ce283be8acd2c9000fcd2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79d5d553559ba54da21fe2ef29a270fb30bf7adebfbcf4d0a176e0887047bc83(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de093299590253b1d14da8fb9ae2edccff6122c28044f26bad1ab2d731adc784(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__291b32a0a454016171f8ec34ee1eabfa3b2e2521f7f4bf83343e32b993c762ea(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28a569ad285b9d1b07fdc2722e468aa48279707ad8f60c387e741705b85c6263(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff1807a3e3bd99a4446a624ada89a8111cd795ea60c0de40cf40a39c6e0ff3f4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__384b60ea270900a3077e0994edea3bf117b00103907f96a6c6536d47b5e5cf44(
    *,
    database_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_user: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dba_uid: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    export_timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_alias: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    query_timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    safe_rule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tid: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    data_link_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddl_online: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    use_dsql: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2a8e0f4e352122adda54fa861fac1f9af13782b44f149869831442b717b7674(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96f49c2bc24cc12b622947b15f2fb3ac451a86eeaa3de39b2f48df039c9f0844(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bce7df93117cb74465bdd44ef4b6a3562e4c88d330c202f2ca43d9b7da29231f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c3b60d097ab072ee8a6b9b0bf10f8faf3485a4dd1e2c4ca775d8ee8d6ac9f95(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7824adfd4ad48b2b3c0609c1f8c616eaf40ec7f6a09cad3581909e9b0f3d72e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb55af26b24f56caf9fd9c4de7570fd09ba8f7d7392fad904ecb9527f1ebcac8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccc0f86dffa42143a3ca0d69940038d3ba3a6e734f427a03a987a9a30af1747b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28842736e49829ad07db0626736cb40185725259ac3d4ab6815a700983c5ff28(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__187f8ec466a442efdbf5a58211ab55687a6348b59a64c71a549f3a29b187b467(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__926bf585de3ae1e410df8cdd07401e24dfce8dbce904662cb22db81839e911c9(
    *,
    uid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    mobile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da01e17011f7361a4a25975554092ab32d6026880ca1e06d9f35ade57ff10d69(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bacce53f27b0edcaa3b12e1de0461fab75898c6581afee1589c377e3fb84e7d6(
    *,
    uid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    mobile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
