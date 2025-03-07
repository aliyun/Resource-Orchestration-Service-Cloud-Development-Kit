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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.datasource.ApplicationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "cluster_id": "clusterId",
        "logical_region_id": "logicalRegionId",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class ApplicationsProps:
    def __init__(
        self,
        *,
        app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        logical_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Applications``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-applications

        :param app_name: Property appName: The application name keyword.
        :param cluster_id: Property clusterId: The ID of the cluster.
        :param logical_region_id: Property logicalRegionId: The ID of the namespace.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f76b265fbaa2b3328a2dda41d4f96d48540d9966be2476b37c006b46a11ddb2c)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument logical_region_id", value=logical_region_id, expected_type=type_hints["logical_region_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if app_name is not None:
            self._values["app_name"] = app_name
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appName: The application name keyword.'''
        result = self._values.get("app_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterId: The ID of the cluster.'''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logicalRegionId: The ID of the namespace.'''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
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
        return "ApplicationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.datasource.ClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "logical_region_id": "logicalRegionId",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class ClustersProps:
    def __init__(
        self,
        *,
        logical_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Clusters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-clusters

        :param logical_region_id: Property logicalRegionId: The ID of the namespace.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a05d6f92b1201fd2a3088be4675ad628f9ff18f63364d1f1200fcbd121c0b87d)
            check_type(argname="argument logical_region_id", value=logical_region_id, expected_type=type_hints["logical_region_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logicalRegionId: The ID of the namespace.'''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
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
        return "ClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-edas.datasource.IApplications")
class IApplications(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Applications``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAppIds")
    def attr_app_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppIds: The list of application IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrApplications")
    def attr_applications(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Applications: The list of applications.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApplicationsProps:
        ...


class _IApplicationsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Applications``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-edas.datasource.IApplications"

    @builtins.property
    @jsii.member(jsii_name="attrAppIds")
    def attr_app_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppIds: The list of application IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApplications")
    def attr_applications(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Applications: The list of applications.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApplications"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApplicationsProps:
        return typing.cast(ApplicationsProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IApplications).__jsii_proxy_class__ = lambda : _IApplicationsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-edas.datasource.IClusters")
class IClusters(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Clusters``.'''

    @builtins.property
    @jsii.member(jsii_name="attrClusterIds")
    def attr_cluster_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterIds: The list of cluster IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusters")
    def attr_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Clusters: The list of clusters.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClustersProps:
        ...


class _IClustersProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Clusters``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-edas.datasource.IClusters"

    @builtins.property
    @jsii.member(jsii_name="attrClusterIds")
    def attr_cluster_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterIds: The list of cluster IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrClusters")
    def attr_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Clusters: The list of clusters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClustersProps:
        return typing.cast(ClustersProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IClusters).__jsii_proxy_class__ = lambda : _IClustersProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-edas.datasource.IUserDefineRegions")
class IUserDefineRegions(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``UserDefineRegions``.'''

    @builtins.property
    @jsii.member(jsii_name="attrIds")
    def attr_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Ids: The list of user define region IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUserDefineRegions")
    def attr_user_define_regions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserDefineRegions: The list of user define regions.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserDefineRegionsProps":
        ...


class _IUserDefineRegionsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserDefineRegions``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-edas.datasource.IUserDefineRegions"

    @builtins.property
    @jsii.member(jsii_name="attrIds")
    def attr_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Ids: The list of user define region IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIds"))

    @builtins.property
    @jsii.member(jsii_name="attrUserDefineRegions")
    def attr_user_define_regions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserDefineRegions: The list of user define regions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserDefineRegions"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserDefineRegionsProps":
        return typing.cast("UserDefineRegionsProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserDefineRegions).__jsii_proxy_class__ = lambda : _IUserDefineRegionsProxy


class RosApplications(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.datasource.RosApplications",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::EDAS::Applications``, which is used to query applications.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Applications`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-applications
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApplicationsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__961bb8bd5529eb424c8e843bd516bb7b769f54c59d62dc7e51b1521b4f60bf49)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3f2be8c82b3dfb52839bba7bfa9d2ce1ecc7d820389410f3fbe886d6ca777304)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppIds")
    def attr_app_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppIds: The list of application IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApplications")
    def attr_applications(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Applications: The list of applications.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApplications"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7768ae8221a060f8b9edd4d85476a1d183429b61891f4026bc46b44f066534cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="appName")
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appName: The application name keyword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4998648b9bc98062f5962fb5fb13f89ad1af7f9a6884d4d35d9268deb842c69e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appName", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The ID of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0da182e393e3940b045d52b91093ead02eeb872f5eab6d144e51a0e9bf72741e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="logicalRegionId")
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logicalRegionId: The ID of the namespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logicalRegionId"))

    @logical_region_id.setter
    def logical_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbebea1cb6ea6d0e285a49469d6028dca044b29a3701ad981e4be9472c304e35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logicalRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f62818ac7539359cbe45f1aa6069d54a37c76810dcf497460d6f4ee4ac853532)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__5784fe48e4da38cdb368e35f14afc63381a828d85998c0310d45272ef07f69f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.datasource.RosApplicationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "cluster_id": "clusterId",
        "logical_region_id": "logicalRegionId",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class RosApplicationsProps:
    def __init__(
        self,
        *,
        app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        logical_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApplications``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-applications

        :param app_name: 
        :param cluster_id: 
        :param logical_region_id: 
        :param refresh_options: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9f6b664d85a184f91028b5a64ef442828088aff922bcc8a94e708b7a8572f56)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument logical_region_id", value=logical_region_id, expected_type=type_hints["logical_region_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if app_name is not None:
            self._values["app_name"] = app_name
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appName: The application name keyword.
        '''
        result = self._values.get("app_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The ID of the cluster.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logicalRegionId: The ID of the namespace.
        '''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
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
        return "RosApplicationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.datasource.RosClusters",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::EDAS::Clusters``, which is used to query clusters in Enterprise Distributed Application Service (EDAS).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Clusters`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-clusters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClustersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__374177a493cf6685be01f66f8c79ea876c6b9b2dcb5f6973f2552698bd8373a6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__81af1feebed383c0fd2e5f5bc3e7168f56f75c88d7ab03ffdd7c76aea45e91d4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterIds")
    def attr_cluster_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterIds: The list of cluster IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrClusters")
    def attr_clusters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Clusters: The list of clusters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusters"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__9616d3bfc19a50cce46ff384db367af4e8e246278bf2a70e968e716964306679)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="logicalRegionId")
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logicalRegionId: The ID of the namespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logicalRegionId"))

    @logical_region_id.setter
    def logical_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26c986c7ba9ab40070ea6fa50635b626703f1517069b339bfd7f49175306bf4e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logicalRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c755634932efea1f2bb2730f7bce52d7aa9a88b6aad171676309344209645428)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__51d5629dd714e567b29bf0cc58a5c823598f65ea4d270cc3835a6d9839f68f1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.datasource.RosClustersProps",
    jsii_struct_bases=[],
    name_mapping={
        "logical_region_id": "logicalRegionId",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class RosClustersProps:
    def __init__(
        self,
        *,
        logical_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosClusters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-clusters

        :param logical_region_id: 
        :param refresh_options: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5b1514e056969a11cf8b2b4455180c2c8dd9777e699c4f744538205284f4206)
            check_type(argname="argument logical_region_id", value=logical_region_id, expected_type=type_hints["logical_region_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logicalRegionId: The ID of the namespace.
        '''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
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
        return "RosClustersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserDefineRegions(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.datasource.RosUserDefineRegions",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::EDAS::UserDefineRegions``, which is used to query custom namespaces.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserDefineRegions`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserDefineRegionsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31972a03b45a032d3911c5c6a2de94f80e51863f41abb93f6b2d1f1588ccc4f0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c1cde2ec585a38ee4763f462052db6be62c3ccb14d19ee801a29e852f9458ed3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrIds")
    def attr_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ids: The list of user define region IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIds"))

    @builtins.property
    @jsii.member(jsii_name="attrUserDefineRegions")
    def attr_user_define_regions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserDefineRegions: The list of user define regions.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserDefineRegions"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b1aaa5bd2c90c26b6936061cf30506ee445b8f54f063009cece5980873f26120)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df5228a77c6aadf34c216cb8140b69cf0ab05bf6f8b1bc7e6ace74599da6c907)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.datasource.RosUserDefineRegionsProps",
    jsii_struct_bases=[],
    name_mapping={"refresh_options": "refreshOptions"},
)
class RosUserDefineRegionsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosUserDefineRegions``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions

        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2824abda92179408779a5c62652f72004e50850ae75a8bc57b35f63e59f858ed)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserDefineRegionsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUserDefineRegions)
class UserDefineRegions(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.datasource.UserDefineRegions",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::EDAS::UserDefineRegions``, which is used to query custom namespaces.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserDefineRegions``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["UserDefineRegionsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bf910e5be05e0ed3bf696769f4671646573975a488af31e1f27c5625e1953cc)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrIds")
    def attr_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Ids: The list of user define region IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIds"))

    @builtins.property
    @jsii.member(jsii_name="attrUserDefineRegions")
    def attr_user_define_regions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserDefineRegions: The list of user define regions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserDefineRegions"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserDefineRegionsProps":
        return typing.cast("UserDefineRegionsProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc286eb8086dc7aff0b3645f855462164a8543b0a8e38733f803fcac0cffce1c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c8b02189fc2ca82efa7a284d3f7a9e39dc1df9583a82e5090e82835de5ca97b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6e891e9bb022f23f8df9a8d6b29e93108fbb44942de578403404b958884dc95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.datasource.UserDefineRegionsProps",
    jsii_struct_bases=[],
    name_mapping={"refresh_options": "refreshOptions"},
)
class UserDefineRegionsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``UserDefineRegions``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee34aa57c99977e3a3bdd12517eb0d9a50d994eb6028d63c227c72b8b3ca73b7)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserDefineRegionsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IApplications)
class Applications(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.datasource.Applications",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::EDAS::Applications``, which is used to query applications.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApplications``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-applications
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[ApplicationsProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70eeabfb4b215b9e0f35562e7ae25f17283ba12362b3f46b0996fce990d2b022)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppIds")
    def attr_app_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppIds: The list of application IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApplications")
    def attr_applications(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Applications: The list of applications.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApplications"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApplicationsProps:
        return typing.cast(ApplicationsProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a5b5fe6a345dde0afe5b7b7c0e9ee01d2e1bc876bd7622347bca381cef221b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19dfb93974acacc02c55f2468cc89452ab706e80449b28f9d117d2f80ca54135)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8735b9172ad570bd3cd08e5d342c2e5a049db537fb7a58b3974ceeaaabd96843)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IClusters)
class Clusters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.datasource.Clusters",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::EDAS::Clusters``, which is used to query clusters in Enterprise Distributed Application Service (EDAS).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosClusters``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-clusters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[ClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca7db8185d9ae5f0a6b7b21c83e76ca362d5ba5efada9d8b0ea7b41d94da297e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterIds")
    def attr_cluster_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterIds: The list of cluster IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrClusters")
    def attr_clusters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Clusters: The list of clusters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClustersProps:
        return typing.cast(ClustersProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a3a7196c130913d5a0e673c49a11c77d02330cfffc91fae5bf67ebf65bbf5f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb73b5720e732d0b1d746e8a5088ceda872f4c296dea144e825793956e2b24f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__faf58c73908873d79326a938d3390f0790431be54e852668f19c429f2fca23e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Applications",
    "ApplicationsProps",
    "Clusters",
    "ClustersProps",
    "IApplications",
    "IClusters",
    "IUserDefineRegions",
    "RosApplications",
    "RosApplicationsProps",
    "RosClusters",
    "RosClustersProps",
    "RosUserDefineRegions",
    "RosUserDefineRegionsProps",
    "UserDefineRegions",
    "UserDefineRegionsProps",
]

publication.publish()

def _typecheckingstub__f76b265fbaa2b3328a2dda41d4f96d48540d9966be2476b37c006b46a11ddb2c(
    *,
    app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    logical_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a05d6f92b1201fd2a3088be4675ad628f9ff18f63364d1f1200fcbd121c0b87d(
    *,
    logical_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__961bb8bd5529eb424c8e843bd516bb7b769f54c59d62dc7e51b1521b4f60bf49(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApplicationsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f2be8c82b3dfb52839bba7bfa9d2ce1ecc7d820389410f3fbe886d6ca777304(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7768ae8221a060f8b9edd4d85476a1d183429b61891f4026bc46b44f066534cd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4998648b9bc98062f5962fb5fb13f89ad1af7f9a6884d4d35d9268deb842c69e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0da182e393e3940b045d52b91093ead02eeb872f5eab6d144e51a0e9bf72741e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbebea1cb6ea6d0e285a49469d6028dca044b29a3701ad981e4be9472c304e35(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f62818ac7539359cbe45f1aa6069d54a37c76810dcf497460d6f4ee4ac853532(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5784fe48e4da38cdb368e35f14afc63381a828d85998c0310d45272ef07f69f4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9f6b664d85a184f91028b5a64ef442828088aff922bcc8a94e708b7a8572f56(
    *,
    app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    logical_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__374177a493cf6685be01f66f8c79ea876c6b9b2dcb5f6973f2552698bd8373a6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClustersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81af1feebed383c0fd2e5f5bc3e7168f56f75c88d7ab03ffdd7c76aea45e91d4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9616d3bfc19a50cce46ff384db367af4e8e246278bf2a70e968e716964306679(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26c986c7ba9ab40070ea6fa50635b626703f1517069b339bfd7f49175306bf4e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c755634932efea1f2bb2730f7bce52d7aa9a88b6aad171676309344209645428(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51d5629dd714e567b29bf0cc58a5c823598f65ea4d270cc3835a6d9839f68f1f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5b1514e056969a11cf8b2b4455180c2c8dd9777e699c4f744538205284f4206(
    *,
    logical_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31972a03b45a032d3911c5c6a2de94f80e51863f41abb93f6b2d1f1588ccc4f0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserDefineRegionsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1cde2ec585a38ee4763f462052db6be62c3ccb14d19ee801a29e852f9458ed3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1aaa5bd2c90c26b6936061cf30506ee445b8f54f063009cece5980873f26120(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df5228a77c6aadf34c216cb8140b69cf0ab05bf6f8b1bc7e6ace74599da6c907(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2824abda92179408779a5c62652f72004e50850ae75a8bc57b35f63e59f858ed(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bf910e5be05e0ed3bf696769f4671646573975a488af31e1f27c5625e1953cc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[UserDefineRegionsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc286eb8086dc7aff0b3645f855462164a8543b0a8e38733f803fcac0cffce1c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c8b02189fc2ca82efa7a284d3f7a9e39dc1df9583a82e5090e82835de5ca97b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6e891e9bb022f23f8df9a8d6b29e93108fbb44942de578403404b958884dc95(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee34aa57c99977e3a3bdd12517eb0d9a50d994eb6028d63c227c72b8b3ca73b7(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70eeabfb4b215b9e0f35562e7ae25f17283ba12362b3f46b0996fce990d2b022(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ApplicationsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a5b5fe6a345dde0afe5b7b7c0e9ee01d2e1bc876bd7622347bca381cef221b7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19dfb93974acacc02c55f2468cc89452ab706e80449b28f9d117d2f80ca54135(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8735b9172ad570bd3cd08e5d342c2e5a049db537fb7a58b3974ceeaaabd96843(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca7db8185d9ae5f0a6b7b21c83e76ca362d5ba5efada9d8b0ea7b41d94da297e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ClustersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a3a7196c130913d5a0e673c49a11c77d02330cfffc91fae5bf67ebf65bbf5f4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb73b5720e732d0b1d746e8a5088ceda872f4c296dea144e825793956e2b24f5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__faf58c73908873d79326a938d3390f0790431be54e852668f19c429f2fca23e5(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
