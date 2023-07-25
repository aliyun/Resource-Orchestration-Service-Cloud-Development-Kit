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
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.DBClusters",
):
    '''A ROS resource type:  ``DATASOURCE::ClickHouse::DBClusters``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DBClustersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ClickHouse::DBClusters``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c3a3054b9c6f833d295937ac18e1098db98c0b1dec9d8f2165d705a4f0d701a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterIds")
    def attr_db_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusterIds: The list of db cluster IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusters")
    def attr_db_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusters: The list of db clusters.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusters"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.DBClustersProps",
    jsii_struct_bases=[],
    name_mapping={"db_cluster_id": "dbClusterId", "db_cluster_name": "dbClusterName"},
)
class DBClustersProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ClickHouse::DBClusters``.

        :param db_cluster_id: Property dbClusterId: Instance ID.
        :param db_cluster_name: Property dbClusterName: The cluster description information.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5671cca2809e99741543f462e7172ebca0a7ee7dccc272c1965b128c0d5be654)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_cluster_name", value=db_cluster_name, expected_type=type_hints["db_cluster_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_cluster_id is not None:
            self._values["db_cluster_id"] = db_cluster_id
        if db_cluster_name is not None:
            self._values["db_cluster_name"] = db_cluster_name

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbClusterId: Instance ID.'''
        result = self._values.get("db_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbClusterName: The cluster description information.'''
        result = self._values.get("db_cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBClusters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.RosDBClusters",
):
    '''A ROS template type:  ``DATASOURCE::ClickHouse::DBClusters``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBClustersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ClickHouse::DBClusters``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6c83468abac4bf1adec2e012740aac45f172de9ffadb2c52b86d4a9fc0ce54f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d0246853a414284cb647d2b3be7d724f9833dc855552bafda4fdcd7b9200979f)
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
        :Attribute: DBClusterIds: The list of db cluster IDs.
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
            type_hints = typing.get_type_hints(_typecheckingstub__21ea06df9b1a3af914a6de2b0c2938aa9d28b36f93eaf522f0be22b430826531)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterId")
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterId: Instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbClusterId"))

    @db_cluster_id.setter
    def db_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88ba8cee57989a0441e10baa1038ead0272d0492c91e4b3d35626eca04d55eda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="dbClusterName")
    def db_cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterName: The cluster description information.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbClusterName"))

    @db_cluster_name.setter
    def db_cluster_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__576cf58f4e30389d6f5482b60160ace2eac453e73002b82beafd7912bf479d4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbClusterName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-clickhouse.datasource.RosDBClustersProps",
    jsii_struct_bases=[],
    name_mapping={"db_cluster_id": "dbClusterId", "db_cluster_name": "dbClusterName"},
)
class RosDBClustersProps:
    def __init__(
        self,
        *,
        db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ClickHouse::DBClusters``.

        :param db_cluster_id: 
        :param db_cluster_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0dd83264d4a180c6968eff54fbffbc143e961822a0bfc2a1a39cb2a2fc0ed641)
            check_type(argname="argument db_cluster_id", value=db_cluster_id, expected_type=type_hints["db_cluster_id"])
            check_type(argname="argument db_cluster_name", value=db_cluster_name, expected_type=type_hints["db_cluster_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_cluster_id is not None:
            self._values["db_cluster_id"] = db_cluster_id
        if db_cluster_name is not None:
            self._values["db_cluster_name"] = db_cluster_name

    @builtins.property
    def db_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterId: Instance ID.
        '''
        result = self._values.get("db_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbClusterName: The cluster description information.
        '''
        result = self._values.get("db_cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DBClusters",
    "DBClustersProps",
    "RosDBClusters",
    "RosDBClustersProps",
]

publication.publish()

def _typecheckingstub__3c3a3054b9c6f833d295937ac18e1098db98c0b1dec9d8f2165d705a4f0d701a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DBClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5671cca2809e99741543f462e7172ebca0a7ee7dccc272c1965b128c0d5be654(
    *,
    db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6c83468abac4bf1adec2e012740aac45f172de9ffadb2c52b86d4a9fc0ce54f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBClustersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0246853a414284cb647d2b3be7d724f9833dc855552bafda4fdcd7b9200979f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21ea06df9b1a3af914a6de2b0c2938aa9d28b36f93eaf522f0be22b430826531(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88ba8cee57989a0441e10baa1038ead0272d0492c91e4b3d35626eca04d55eda(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__576cf58f4e30389d6f5482b60160ace2eac453e73002b82beafd7912bf479d4c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0dd83264d4a180c6968eff54fbffbc143e961822a0bfc2a1a39cb2a2fc0ed641(
    *,
    db_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
