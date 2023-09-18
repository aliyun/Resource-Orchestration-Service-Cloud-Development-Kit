import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class DBClusters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.datasource.DBClusters",
):
    '''A ROS resource type:  ``DATASOURCE::POLARDB::DBClusters``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DBClustersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::POLARDB::DBClusters``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98cb693bcc463aff1c1dcb482269d21723cfbb66608eec56bce69e0232971d5d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIds")
    def attr_db_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbClusterIds: The ID of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusters: The list of db clusters.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusters"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.datasource.DBClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "db_type": "dbType",
        "db_version": "dbVersion",
        "description": "description",
        "expired": "expired",
        "resource_group_id": "resourceGroupId",
    },
)
class DBClustersProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::POLARDB::DBClusters``.

        :param db_cluster_id: Property dbClusterId: The ID of the cluster.
        :param db_type: Property dbType: The database engine that the cluster runs.
        :param db_version: Property dbVersion: The version of the database engine that the cluster runs. The range of the MySQL version number is as follows: *** 5.6 * * * *** 5.7 * * * *** 8.0 * * * The value range of PostgreSQL version number is as follows: *** 11 * * * *** 14 * * * The Oracle version number is 11.
        :param description: Property description: The description of the cluster.
        :param expired: Property expired: Indicates whether the cluster has expired. Valid values: true false
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__764adc2023f0b75fe498c0fc45ec81b67860a3a717cb101a6eb02e36f94a92f5)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_cluster_id is not None:
            self._values["db_cluster_id"] = db_cluster_id
        if db_type is not None:
            self._values["db_type"] = db_type
        if db_version is not None:
            self._values["db_version"] = db_version
        if description is not None:
            self._values["description"] = description
        if expired is not None:
            self._values["expired"] = expired
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbClusterId: The ID of the cluster.'''
        result = self._values.get("db_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbType: The database engine that the cluster runs.'''
        result = self._values.get("db_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbVersion: The version of the database engine that the cluster runs.

        The range of the MySQL version number is as follows:
        *** 5.6 * * *
        *** 5.7 * * *
        *** 8.0 * * *
        The value range of PostgreSQL version number is as follows:
        *** 11 * * *
        *** 14 * * *
        The Oracle version number is 11.
        '''
        result = self._values.get("db_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the cluster.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property expired: Indicates whether the cluster has expired.

        Valid values:
        true
        false
        '''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBNodeClasses(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.datasource.DBNodeClasses",
):
    '''A ROS resource type:  ``DATASOURCE::POLARDB::DBNodeClasses``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DBNodeClassesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::POLARDB::DBNodeClasses``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff63c71f5ef1dfbea92c9d228b389a7a3e4955453ca62991a068f5082fcaa807)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClasses")
    def attr_db_node_classes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBNodeClasses: The list of db node classes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeClasses"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClassIds")
    def attr_db_node_class_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBNodeClassIds: The list of db node class ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeClassIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.datasource.DBNodeClassesProps",
    jsii_struct_bases=[],
    name_mapping={
        "pay_type": "payType",
        "db_node_class": "dbNodeClass",
        "db_type": "dbType",
        "db_version": "dbVersion",
        "zone_id": "zoneId",
    },
)
class DBNodeClassesProps:
    def __init__(
        self,
        *,
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::POLARDB::DBNodeClasses``.

        :param pay_type: Property payType: The billing method. Valid values: Postpaid: the pay-as-you-go billing method Prepaid: the subscription billing method
        :param db_node_class: Property dbNodeClass: The node type. For more information, see Specifications of compute nodes.
        :param db_type: Property dbType: The database engine. Valid values: MySQL PostgreSQL Oracle
        :param db_version: Property dbVersion: The version number of the database engine Valid values for the MySQL database engine: 5.6 5.7 8 Valid value for the PostgreSQL database engine: 11 Valid value for the Oracle database engine: 11 Note If you specify the DBType parameter, you must specify this parameter.
        :param zone_id: Property zoneId: The ID of the zone where PolarDB resources that you want to query reside. Note You can call the DescribeRegions operation to query information about zones.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53d1e65d7ede9bd7f28b2789cf564b1632a04d3cb6c9c7aeee625d488a161bfb)
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument db_node_class", value=db_node_class, expected_type=type_hints["db_node_class"])
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pay_type": pay_type,
        }
        if db_node_class is not None:
            self._values["db_node_class"] = db_node_class
        if db_type is not None:
            self._values["db_type"] = db_type
        if db_version is not None:
            self._values["db_version"] = db_version
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: The billing method.

        Valid values:
        Postpaid: the pay-as-you-go billing method
        Prepaid: the subscription billing method
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbNodeClass: The node type.

        For more information, see Specifications of compute nodes.
        '''
        result = self._values.get("db_node_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbType: The database engine.

        Valid values:
        MySQL
        PostgreSQL
        Oracle
        '''
        result = self._values.get("db_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbVersion: The version number of the database engine Valid values for the MySQL database engine: 5.6 5.7 8 Valid value for the PostgreSQL database engine: 11 Valid value for the Oracle database engine: 11 Note If you specify the DBType parameter, you must specify this parameter.'''
        result = self._values.get("db_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.

        Note You can call the DescribeRegions operation to query information about zones.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBNodeClassesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class GlobalDatabaseNetworks(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworks",
):
    '''A ROS resource type:  ``DATASOURCE::POLARDB::GlobalDatabaseNetworks``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["GlobalDatabaseNetworksProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::POLARDB::GlobalDatabaseNetworks``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c673a22d2189931d6e18a44e8df291388d1d6fe147d9bbfc0cf50e1f92aa5d7f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGdnIds")
    def attr_gdn_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GdnIds: The list of gdn IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGdnIds"))

    @builtins.property
    @jsii.member(jsii_name="attrGlobalDatabaseNetworks")
    def attr_global_database_networks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GlobalDatabaseNetworks: The list of global database networks.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGlobalDatabaseNetworks"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworksProps",
    jsii_struct_bases=[],
    name_mapping={"db_cluster_id": "dbClusterId", "gdn_id": "gdnId"},
)
class GlobalDatabaseNetworksProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::POLARDB::GlobalDatabaseNetworks``.

        :param db_cluster_id: Property dbClusterId: The ID of the cluster.
        :param gdn_id: Property gdnId: The ID of the GDN.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37fcf24c629cd3bcf3f68c950fbf9d0dedc5fc83715e48c136bc82496133554f)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument gdn_id", value=gdn_id, expected_type=type_hints["gdn_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_cluster_id is not None:
            self._values["db_cluster_id"] = db_cluster_id
        if gdn_id is not None:
            self._values["gdn_id"] = gdn_id

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbClusterId: The ID of the cluster.'''
        result = self._values.get("db_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def gdn_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property gdnId: The ID of the GDN.'''
        result = self._values.get("gdn_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GlobalDatabaseNetworksProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ParameterGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.datasource.ParameterGroups",
):
    '''A ROS resource type:  ``DATASOURCE::POLARDB::ParameterGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ParameterGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::POLARDB::ParameterGroups``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dacd73b774a656f73ce37bc0e8899224edb87d7e1c4d6e5f38c0d1e570933aa1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupIds")
    def attr_parameter_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ParameterGroupIds: The list of parameter group IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroups")
    def attr_parameter_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ParameterGroups: The list of parameter groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterGroups"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.datasource.ParameterGroupsProps",
    jsii_struct_bases=[],
    name_mapping={"db_type": "dbType", "db_version": "dbVersion"},
)
class ParameterGroupsProps:
    def __init__(
        self,
        *,
        db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::POLARDB::ParameterGroups``.

        :param db_type: Property dbType: The type of the database engine.
        :param db_version: Property dbVersion: The version of the database engine.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f000ff6a744599285993cb634871ff9dc0a6ae1dfe7d0ef66c14a0e82ec2325)
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_type is not None:
            self._values["db_type"] = db_type
        if db_version is not None:
            self._values["db_version"] = db_version

    @builtins.property
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbType: The type of the database engine.'''
        result = self._values.get("db_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbVersion: The version of the database engine.'''
        result = self._values.get("db_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ParameterGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBClusters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.datasource.RosDBClusters",
):
    '''A ROS template type:  ``DATASOURCE::POLARDB::DBClusters``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClustersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::POLARDB::DBClusters``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7788aee3845e3fa3d1e41a0aa4cdf86d37f6f875f8cf19b2ff8a38b7af3e7ac3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b259963fd9b5545cecfe0768ef4cc0c147c5dd6f37be65c3945012ca2c9ee8cc)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIds")
    def attr_db_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbClusterIds: The ID of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusters: The list of db clusters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusters"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__74f23856243380c338df5e1eed004c75e081029bd5cf412da2503d7452ed4e7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterId: The ID of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29021ee6de374b8d7961bffe12d78b86feeee18b293db449b4becba14ff10928)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="dbType")
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbType: The database engine that the cluster runs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbType"))

    @db_type.setter
    def db_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__292e03ab54f680d03d4fdc4140b0d9774aa508ff75936a658a7d11efe22cc2b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbType", value)

    @builtins.property
    @jsii.member(jsii_name="dbVersion")
    def db_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbVersion: The version of the database engine that the cluster runs.
        The range of the MySQL version number is as follows:
        *** 5.6 * * *
        *** 5.7 * * *
        *** 8.0 * * *
        The value range of PostgreSQL version number is as follows:
        *** 11 * * *
        *** 14 * * *
        The Oracle version number is 11.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbVersion"))

    @db_version.setter
    def db_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f64dbb85c9c5b3248958e5745ff1b438718cec8b1f19bfc033521129f4dc0d8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbVersion", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8674e8b4c476af1dd7ea42263b86e5dcb47e1483ae326f978d7a5dd0b2e146e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="expired")
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        expired: Indicates whether the cluster has expired.
        Valid values:
        true
        false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "expired"))

    @expired.setter
    def expired(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af2747476acd15afaaa21d7645983d2ef3f9fba4dd33ce04e25055f534b40a94)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "expired", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af01edbeb6f41867d66c8775b92d8a7684e59a14418804328860bce29fd998df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.datasource.RosDBClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_cluster_id": "dbClusterId",
        "db_type": "dbType",
        "db_version": "dbVersion",
        "description": "description",
        "expired": "expired",
        "resource_group_id": "resourceGroupId",
    },
)
class RosDBClustersProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::POLARDB::DBClusters``.

        :param db_cluster_id: 
        :param db_type: 
        :param db_version: 
        :param description: 
        :param expired: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3804333f65280f635a9242b3707f975e1ccb28df30f8e621feb4b212042bd086)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_cluster_id is not None:
            self._values["db_cluster_id"] = db_cluster_id
        if db_type is not None:
            self._values["db_type"] = db_type
        if db_version is not None:
            self._values["db_version"] = db_version
        if description is not None:
            self._values["description"] = description
        if expired is not None:
            self._values["expired"] = expired
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterId: The ID of the cluster.
        '''
        result = self._values.get("db_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbType: The database engine that the cluster runs.
        '''
        result = self._values.get("db_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbVersion: The version of the database engine that the cluster runs.
        The range of the MySQL version number is as follows:
        *** 5.6 * * *
        *** 5.7 * * *
        *** 8.0 * * *
        The value range of PostgreSQL version number is as follows:
        *** 11 * * *
        *** 14 * * *
        The Oracle version number is 11.
        '''
        result = self._values.get("db_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the cluster.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        expired: Indicates whether the cluster has expired.
        Valid values:
        true
        false
        '''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBNodeClasses(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.datasource.RosDBNodeClasses",
):
    '''A ROS template type:  ``DATASOURCE::POLARDB::DBNodeClasses``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBNodeClassesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::POLARDB::DBNodeClasses``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64899d93baf8ef32c9e94d1fdf75437043599517eb8530effb80c4ddaa14388d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ea39638b3c52d4bc3e01c999d0eb6f6378431b3b9185e0f7ddcac9079f056884)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClasses")
    def attr_db_node_classes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBNodeClasses: The list of db node classes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeClasses"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNodeClassIds")
    def attr_db_node_class_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBNodeClassIds: The list of db node class ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNodeClassIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__90a23eeb969a4a0565bef86847e8985ab783e2a341ca5177eb7544389c288b23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method. Valid values:
        Postpaid: the pay-as-you-go billing method
        Prepaid: the subscription billing method
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb13977da78239e1d4b92d8620f72beb287babb2c5f9ae45d9f5e957d123fc67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="dbNodeClass")
    def db_node_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbNodeClass: The node type. For more information, see Specifications of compute nodes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbNodeClass"))

    @db_node_class.setter
    def db_node_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__261aae591f1b0d02b847fcb70794a6e41cbac75eea623ba54fb5ba3ada973ced)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbNodeClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbType")
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbType: The database engine. Valid values:
        MySQL
        PostgreSQL
        Oracle
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbType"))

    @db_type.setter
    def db_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a61b958afa8e100b389b1f7fc815b1168c2ecfc82d688e1d4996cafdb4984bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbType", value)

    @builtins.property
    @jsii.member(jsii_name="dbVersion")
    def db_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbVersion: The version number of the database engine
        Valid values for the MySQL database engine:
        5.6
        5.7
        8
        Valid value for the PostgreSQL database engine: 11
        Valid value for the Oracle database engine: 11
        Note If you specify the DBType parameter, you must specify this parameter
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbVersion"))

    @db_version.setter
    def db_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fefa793f9d814ba53abcc0dd3fc26e2b6d84bb414754dcdc432fafefaf8f3128)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbVersion", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The ID of the zone where PolarDB resources that you want to query reside.
        Note You can call the DescribeRegions operation to query information about zones.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d9ae611ead0bf5ed18885ab3cd587a3e41ccaba5886f2ef419383479113697f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.datasource.RosDBNodeClassesProps",
    jsii_struct_bases=[],
    name_mapping={
        "pay_type": "payType",
        "db_node_class": "dbNodeClass",
        "db_type": "dbType",
        "db_version": "dbVersion",
        "zone_id": "zoneId",
    },
)
class RosDBNodeClassesProps:
    def __init__(
        self,
        *,
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_node_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::POLARDB::DBNodeClasses``.

        :param pay_type: 
        :param db_node_class: 
        :param db_type: 
        :param db_version: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14b322f4d93b608b57155686be55c60362f8e65c117c3395f7003792163529aa)
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument db_node_class", value=db_node_class, expected_type=type_hints["db_node_class"])
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pay_type": pay_type,
        }
        if db_node_class is not None:
            self._values["db_node_class"] = db_node_class
        if db_type is not None:
            self._values["db_type"] = db_type
        if db_version is not None:
            self._values["db_version"] = db_version
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method. Valid values:
        Postpaid: the pay-as-you-go billing method
        Prepaid: the subscription billing method
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_node_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbNodeClass: The node type. For more information, see Specifications of compute nodes.
        '''
        result = self._values.get("db_node_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbType: The database engine. Valid values:
        MySQL
        PostgreSQL
        Oracle
        '''
        result = self._values.get("db_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbVersion: The version number of the database engine
        Valid values for the MySQL database engine:
        5.6
        5.7
        8
        Valid value for the PostgreSQL database engine: 11
        Valid value for the Oracle database engine: 11
        Note If you specify the DBType parameter, you must specify this parameter
        '''
        result = self._values.get("db_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The ID of the zone where PolarDB resources that you want to query reside.
        Note You can call the DescribeRegions operation to query information about zones.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBNodeClassesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGlobalDatabaseNetworks(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.datasource.RosGlobalDatabaseNetworks",
):
    '''A ROS template type:  ``DATASOURCE::POLARDB::GlobalDatabaseNetworks``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGlobalDatabaseNetworksProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::POLARDB::GlobalDatabaseNetworks``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e6e9b77c1cd0d31f654e3b5118285992ab56b7799ec6466c0b54515af7a2f74)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b76821618e5832a84bee93f7c673659c8049004ec4edb4c0618a1fbb832f88fe)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGdnIds")
    def attr_gdn_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GdnIds: The list of gdn IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGdnIds"))

    @builtins.property
    @jsii.member(jsii_name="attrGlobalDatabaseNetworks")
    def attr_global_database_networks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GlobalDatabaseNetworks: The list of global database networks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGlobalDatabaseNetworks"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3bbd854287453f87cd17273d273c0e01fa7fb8b45a45b4468c4b3cc9d5427a54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterId: The ID of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7914f14b2b9c28cdb1a01fec0a6fa7906d930219ecc9c2f1c139fa7d34051b44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="gdnId")
    def gdn_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: gdnId: The ID of the GDN.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "gdnId"))

    @gdn_id.setter
    def gdn_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3a5f0810e197d4c105c2e8b5a2d2fc705bb92ca5bdb7ae1f7ef9fc5d373a1b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gdnId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.datasource.RosGlobalDatabaseNetworksProps",
    jsii_struct_bases=[],
    name_mapping={"db_cluster_id": "dbClusterId", "gdn_id": "gdnId"},
)
class RosGlobalDatabaseNetworksProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::POLARDB::GlobalDatabaseNetworks``.

        :param db_cluster_id: 
        :param gdn_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__334b8767c6ad3d79f1c0af4ddc78d6945dd8dc45fbf910031f82def1d6ff093f)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument gdn_id", value=gdn_id, expected_type=type_hints["gdn_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_cluster_id is not None:
            self._values["db_cluster_id"] = db_cluster_id
        if gdn_id is not None:
            self._values["gdn_id"] = gdn_id

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterId: The ID of the cluster.
        '''
        result = self._values.get("db_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def gdn_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: gdnId: The ID of the GDN.
        '''
        result = self._values.get("gdn_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGlobalDatabaseNetworksProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosParameterGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-polardb.datasource.RosParameterGroups",
):
    '''A ROS template type:  ``DATASOURCE::POLARDB::ParameterGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosParameterGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::POLARDB::ParameterGroups``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67eb48229076f7bc7f8c6750f8230a2bdaa0bc1b35b990685a01e9ba3ea04e7e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__754eb406f83c358a5a1aadd6d8ee1417c255a1002d25ae7c47df3f6ebbf6040c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroupIds")
    def attr_parameter_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParameterGroupIds: The list of parameter group IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterGroups")
    def attr_parameter_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParameterGroups: The list of parameter groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__f89dad690758241872425f88193c3b09d7fbd1df18e4e3a6290e0b05ccd61bc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbType")
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbType: The type of the database engine.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbType"))

    @db_type.setter
    def db_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28306b8d9cea6a6cf385dabf4ced3e62787b37c1a80ecc86cef3e6b17a2c9e60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbType", value)

    @builtins.property
    @jsii.member(jsii_name="dbVersion")
    def db_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbVersion: The version of the database engine.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbVersion"))

    @db_version.setter
    def db_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6685abc939f3e337ef42ee6f25e7915963d1374c9e56a2fc8f9d83139fb43183)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbVersion", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-polardb.datasource.RosParameterGroupsProps",
    jsii_struct_bases=[],
    name_mapping={"db_type": "dbType", "db_version": "dbVersion"},
)
class RosParameterGroupsProps:
    def __init__(
        self,
        *,
        db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::POLARDB::ParameterGroups``.

        :param db_type: 
        :param db_version: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e88395f7f46e044a293db41bf6553ed888bdf68a09bd0caf8260158e98f4e0d3)
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_type is not None:
            self._values["db_type"] = db_type
        if db_version is not None:
            self._values["db_version"] = db_version

    @builtins.property
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbType: The type of the database engine.
        '''
        result = self._values.get("db_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbVersion: The version of the database engine.
        '''
        result = self._values.get("db_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosParameterGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DBClusters",
    "DBClustersProps",
    "DBNodeClasses",
    "DBNodeClassesProps",
    "GlobalDatabaseNetworks",
    "GlobalDatabaseNetworksProps",
    "ParameterGroups",
    "ParameterGroupsProps",
    "RosDBClusters",
    "RosDBClustersProps",
    "RosDBNodeClasses",
    "RosDBNodeClassesProps",
    "RosGlobalDatabaseNetworks",
    "RosGlobalDatabaseNetworksProps",
    "RosParameterGroups",
    "RosParameterGroupsProps",
]

publication.publish()

def _typecheckingstub__98cb693bcc463aff1c1dcb482269d21723cfbb66608eec56bce69e0232971d5d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DBClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__764adc2023f0b75fe498c0fc45ec81b67860a3a717cb101a6eb02e36f94a92f5(
    *,
    db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff63c71f5ef1dfbea92c9d228b389a7a3e4955453ca62991a068f5082fcaa807(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DBNodeClassesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53d1e65d7ede9bd7f28b2789cf564b1632a04d3cb6c9c7aeee625d488a161bfb(
    *,
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c673a22d2189931d6e18a44e8df291388d1d6fe147d9bbfc0cf50e1f92aa5d7f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[GlobalDatabaseNetworksProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37fcf24c629cd3bcf3f68c950fbf9d0dedc5fc83715e48c136bc82496133554f(
    *,
    db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dacd73b774a656f73ce37bc0e8899224edb87d7e1c4d6e5f38c0d1e570933aa1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ParameterGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f000ff6a744599285993cb634871ff9dc0a6ae1dfe7d0ef66c14a0e82ec2325(
    *,
    db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7788aee3845e3fa3d1e41a0aa4cdf86d37f6f875f8cf19b2ff8a38b7af3e7ac3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBClustersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b259963fd9b5545cecfe0768ef4cc0c147c5dd6f37be65c3945012ca2c9ee8cc(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74f23856243380c338df5e1eed004c75e081029bd5cf412da2503d7452ed4e7f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29021ee6de374b8d7961bffe12d78b86feeee18b293db449b4becba14ff10928(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__292e03ab54f680d03d4fdc4140b0d9774aa508ff75936a658a7d11efe22cc2b1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f64dbb85c9c5b3248958e5745ff1b438718cec8b1f19bfc033521129f4dc0d8c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8674e8b4c476af1dd7ea42263b86e5dcb47e1483ae326f978d7a5dd0b2e146e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af2747476acd15afaaa21d7645983d2ef3f9fba4dd33ce04e25055f534b40a94(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af01edbeb6f41867d66c8775b92d8a7684e59a14418804328860bce29fd998df(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3804333f65280f635a9242b3707f975e1ccb28df30f8e621feb4b212042bd086(
    *,
    db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64899d93baf8ef32c9e94d1fdf75437043599517eb8530effb80c4ddaa14388d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBNodeClassesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea39638b3c52d4bc3e01c999d0eb6f6378431b3b9185e0f7ddcac9079f056884(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90a23eeb969a4a0565bef86847e8985ab783e2a341ca5177eb7544389c288b23(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb13977da78239e1d4b92d8620f72beb287babb2c5f9ae45d9f5e957d123fc67(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__261aae591f1b0d02b847fcb70794a6e41cbac75eea623ba54fb5ba3ada973ced(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a61b958afa8e100b389b1f7fc815b1168c2ecfc82d688e1d4996cafdb4984bd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fefa793f9d814ba53abcc0dd3fc26e2b6d84bb414754dcdc432fafefaf8f3128(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d9ae611ead0bf5ed18885ab3cd587a3e41ccaba5886f2ef419383479113697f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14b322f4d93b608b57155686be55c60362f8e65c117c3395f7003792163529aa(
    *,
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_node_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e6e9b77c1cd0d31f654e3b5118285992ab56b7799ec6466c0b54515af7a2f74(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGlobalDatabaseNetworksProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b76821618e5832a84bee93f7c673659c8049004ec4edb4c0618a1fbb832f88fe(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bbd854287453f87cd17273d273c0e01fa7fb8b45a45b4468c4b3cc9d5427a54(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7914f14b2b9c28cdb1a01fec0a6fa7906d930219ecc9c2f1c139fa7d34051b44(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3a5f0810e197d4c105c2e8b5a2d2fc705bb92ca5bdb7ae1f7ef9fc5d373a1b9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__334b8767c6ad3d79f1c0af4ddc78d6945dd8dc45fbf910031f82def1d6ff093f(
    *,
    db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gdn_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67eb48229076f7bc7f8c6750f8230a2bdaa0bc1b35b990685a01e9ba3ea04e7e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosParameterGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__754eb406f83c358a5a1aadd6d8ee1417c255a1002d25ae7c47df3f6ebbf6040c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f89dad690758241872425f88193c3b09d7fbd1df18e4e3a6290e0b05ccd61bc1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28306b8d9cea6a6cf385dabf4ced3e62787b37c1a80ecc86cef3e6b17a2c9e60(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6685abc939f3e337ef42ee6f25e7915963d1374c9e56a2fc8f9d83139fb43183(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e88395f7f46e044a293db41bf6553ed888bdf68a09bd0caf8260158e98f4e0d3(
    *,
    db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
