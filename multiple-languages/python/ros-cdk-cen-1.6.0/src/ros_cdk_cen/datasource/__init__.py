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
    jsii_type="@alicloud/ros-cdk-cen.datasource.CenBandwidthPackagesProps",
    jsii_struct_bases=[],
    name_mapping={
        "filter": "filter",
        "include_reservation_data": "includeReservationData",
        "is_or_key": "isOrKey",
        "refresh_options": "refreshOptions",
    },
)
class CenBandwidthPackagesProps:
    def __init__(
        self,
        *,
        filter: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union["RosCenBandwidthPackages.FilterProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        include_reservation_data: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_or_key: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CenBandwidthPackages``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages

        :param filter: Property filter: Filter value when querying resources.
        :param include_reservation_data: Property includeReservationData: Specifies whether to include renewal data.
        :param is_or_key: Property isOrKey: The logical operator between the filter conditions.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6bde544e3969f6e83065e6466dd73c95e21c4b8ca6d5d99e772fd0e1db82a2b)
            check_type(argname="argument filter", value=filter, expected_type=type_hints["filter"])
            check_type(argname="argument include_reservation_data", value=include_reservation_data, expected_type=type_hints["include_reservation_data"])
            check_type(argname="argument is_or_key", value=is_or_key, expected_type=type_hints["is_or_key"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if filter is not None:
            self._values["filter"] = filter
        if include_reservation_data is not None:
            self._values["include_reservation_data"] = include_reservation_data
        if is_or_key is not None:
            self._values["is_or_key"] = is_or_key
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def filter(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosCenBandwidthPackages.FilterProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property filter: Filter value when querying resources.'''
        result = self._values.get("filter")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosCenBandwidthPackages.FilterProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def include_reservation_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property includeReservationData: Specifies whether to include renewal data.'''
        result = self._values.get("include_reservation_data")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_or_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isOrKey: The logical operator between the filter conditions.'''
        result = self._values.get("is_or_key")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        return "CenBandwidthPackagesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.datasource.CenInstancesProps",
    jsii_struct_bases=[],
    name_mapping={"filter": "filter", "refresh_options": "refreshOptions"},
)
class CenInstancesProps:
    def __init__(
        self,
        *,
        filter: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union["RosCenInstances.FilterProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CenInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances

        :param filter: Property filter: Filter value when querying resources.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72121d46179df4be28887dc9acfcdf320635b660126e80e236cced19b60584ab)
            check_type(argname="argument filter", value=filter, expected_type=type_hints["filter"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if filter is not None:
            self._values["filter"] = filter
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def filter(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosCenInstances.FilterProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property filter: Filter value when querying resources.'''
        result = self._values.get("filter")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosCenInstances.FilterProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
        return "CenInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.datasource.CenRouteMapsProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "cen_region_id": "cenRegionId",
        "refresh_options": "refreshOptions",
        "route_map_id": "routeMapId",
        "transit_router_route_table_id": "transitRouterRouteTableId",
        "transmit_direction": "transmitDirection",
    },
)
class CenRouteMapsProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_map_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transmit_direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CenRouteMaps``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps

        :param cen_id: Property cenId: The ID of the CEN instance.
        :param cen_region_id: Property cenRegionId: The ID of the region where the routing policy is applied.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param route_map_id: Property routeMapId: The ID of the routing policy.
        :param transit_router_route_table_id: Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
        :param transmit_direction: Property transmitDirection: The direction in which the routing policy is applied.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5819ea8b4111913e25de0be13eeea4cb87e7e03c1e07ada510fd6f2852c6185)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument cen_region_id", value=cen_region_id, expected_type=type_hints["cen_region_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument route_map_id", value=route_map_id, expected_type=type_hints["route_map_id"])
            check_type(argname="argument transit_router_route_table_id", value=transit_router_route_table_id, expected_type=type_hints["transit_router_route_table_id"])
            check_type(argname="argument transmit_direction", value=transmit_direction, expected_type=type_hints["transmit_direction"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
        }
        if cen_region_id is not None:
            self._values["cen_region_id"] = cen_region_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if route_map_id is not None:
            self._values["route_map_id"] = route_map_id
        if transit_router_route_table_id is not None:
            self._values["transit_router_route_table_id"] = transit_router_route_table_id
        if transmit_direction is not None:
            self._values["transmit_direction"] = transmit_direction

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cenRegionId: The ID of the region where the routing policy is applied.'''
        result = self._values.get("cen_region_id")
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
    def route_map_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeMapId: The ID of the routing policy.'''
        result = self._values.get("route_map_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.'''
        result = self._values.get("transit_router_route_table_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transmit_direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transmitDirection: The direction in which the routing policy is applied.'''
        result = self._values.get("transmit_direction")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CenRouteMapsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-cen.datasource.ICenBandwidthPackages")
class ICenBandwidthPackages(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``CenBandwidthPackages``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackageIds")
    def attr_cen_bandwidth_package_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackages")
    def attr_cen_bandwidth_packages(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CenBandwidthPackages: The information about CenBandwidthPackages.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CenBandwidthPackagesProps:
        ...


class _ICenBandwidthPackagesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CenBandwidthPackages``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cen.datasource.ICenBandwidthPackages"

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackageIds")
    def attr_cen_bandwidth_package_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCenBandwidthPackageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackages")
    def attr_cen_bandwidth_packages(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CenBandwidthPackages: The information about CenBandwidthPackages.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCenBandwidthPackages"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CenBandwidthPackagesProps:
        return typing.cast(CenBandwidthPackagesProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICenBandwidthPackages).__jsii_proxy_class__ = lambda : _ICenBandwidthPackagesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cen.datasource.ICenInstances")
class ICenInstances(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CenInstances``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCenIds")
    def attr_cen_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CenIds: The list of The Cen instance ids.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCens")
    def attr_cens(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cens: The information about Cens.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CenInstancesProps:
        ...


class _ICenInstancesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CenInstances``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cen.datasource.ICenInstances"

    @builtins.property
    @jsii.member(jsii_name="attrCenIds")
    def attr_cen_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CenIds: The list of The Cen instance ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCenIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCens")
    def attr_cens(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cens: The information about Cens.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCens"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CenInstancesProps:
        return typing.cast(CenInstancesProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICenInstances).__jsii_proxy_class__ = lambda : _ICenInstancesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cen.datasource.ICenRouteMaps")
class ICenRouteMaps(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CenRouteMaps``.'''

    @builtins.property
    @jsii.member(jsii_name="attrRouteMapIds")
    def attr_route_map_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteMapIds: The list of The RouteMap ids.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRouteMaps")
    def attr_route_maps(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteMaps: The information about RouteMaps.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CenRouteMapsProps:
        ...


class _ICenRouteMapsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CenRouteMaps``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cen.datasource.ICenRouteMaps"

    @builtins.property
    @jsii.member(jsii_name="attrRouteMapIds")
    def attr_route_map_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteMapIds: The list of The RouteMap ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteMapIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteMaps")
    def attr_route_maps(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteMaps: The information about RouteMaps.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteMaps"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CenRouteMapsProps:
        return typing.cast(CenRouteMapsProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICenRouteMaps).__jsii_proxy_class__ = lambda : _ICenRouteMapsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cen.datasource.ITransitRouterRouteTables")
class ITransitRouterRouteTables(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``TransitRouterRouteTables``.'''

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableIds")
    def attr_transit_router_route_table_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTables")
    def attr_transit_router_route_tables(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TransitRouterRouteTablesProps":
        ...


class _ITransitRouterRouteTablesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``TransitRouterRouteTables``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cen.datasource.ITransitRouterRouteTables"

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableIds")
    def attr_transit_router_route_table_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTransitRouterRouteTableIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTables")
    def attr_transit_router_route_tables(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTransitRouterRouteTables"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TransitRouterRouteTablesProps":
        return typing.cast("TransitRouterRouteTablesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITransitRouterRouteTables).__jsii_proxy_class__ = lambda : _ITransitRouterRouteTablesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cen.datasource.ITransitRouters")
class ITransitRouters(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``TransitRouters``.'''

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterIds")
    def attr_transit_router_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouterIds: The list of TransitRouter IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouters")
    def attr_transit_routers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouters: The list of TransitRouters.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TransitRoutersProps":
        ...


class _ITransitRoutersProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``TransitRouters``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cen.datasource.ITransitRouters"

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterIds")
    def attr_transit_router_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouterIds: The list of TransitRouter IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTransitRouterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouters")
    def attr_transit_routers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouters: The list of TransitRouters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTransitRouters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TransitRoutersProps":
        return typing.cast("TransitRoutersProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITransitRouters).__jsii_proxy_class__ = lambda : _ITransitRoutersProxy


class RosCenBandwidthPackages(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.datasource.RosCenBandwidthPackages",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CEN::CenBandwidthPackages``, which is used to query the information about Cloud Enterprise Network (CEN) bandwidth plans within the logon account.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CenBandwidthPackages`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenBandwidthPackagesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc76b127ef80912a41344b78753365e822d63e607d8ec574690bbbfe7c91e865)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e049559c1125e69eb53b23cf178502eda570d25bb2de62df877763f53a22a6a7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackageIds")
    def attr_cen_bandwidth_package_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenBandwidthPackageIds: The list of The Cen bandwidth ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenBandwidthPackageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackages")
    def attr_cen_bandwidth_packages(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenBandwidthPackages: The information about CenBandwidthPackages.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenBandwidthPackages"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__dbdba46d14ffd1e9317dc7d1322b1b27120319bb72b904df4ad55aa8f04e5db4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="filter")
    def filter(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosCenBandwidthPackages.FilterProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: filter: Filter value when querying resources
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosCenBandwidthPackages.FilterProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "filter"))

    @filter.setter
    def filter(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosCenBandwidthPackages.FilterProperty", _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31d0060c29c2ac46f2b991d1d05a78565d619c8d941165cea61eaa99a49d226a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filter", value)

    @builtins.property
    @jsii.member(jsii_name="includeReservationData")
    def include_reservation_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: includeReservationData: Specifies whether to include renewal data.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "includeReservationData"))

    @include_reservation_data.setter
    def include_reservation_data(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c6e0ff3562acffd08094719c4663538707de8d213b739c254755f571d997653)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "includeReservationData", value)

    @builtins.property
    @jsii.member(jsii_name="isOrKey")
    def is_or_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isOrKey: The logical operator between the filter conditions.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isOrKey"))

    @is_or_key.setter
    def is_or_key(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d901ec7be08676ddab2ed460a0d7380a8de7b4a26b96b6a0de62e78d6038857)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isOrKey", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__60bc75af4d0a4938a463ccf2f0b5f8ceaf45b6db471e0444baf5550bc3057d99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cen.datasource.RosCenBandwidthPackages.FilterProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class FilterProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__689c46e7cd40e1a75844c82a686c636b9003416b135c2474bdd6b8d9b2862ce1)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FilterProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.datasource.RosCenBandwidthPackagesProps",
    jsii_struct_bases=[],
    name_mapping={
        "filter": "filter",
        "include_reservation_data": "includeReservationData",
        "is_or_key": "isOrKey",
        "refresh_options": "refreshOptions",
    },
)
class RosCenBandwidthPackagesProps:
    def __init__(
        self,
        *,
        filter: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosCenBandwidthPackages.FilterProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        include_reservation_data: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_or_key: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCenBandwidthPackages``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages

        :param filter: 
        :param include_reservation_data: 
        :param is_or_key: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c52f0b0f7a25f9f08d5774cbd9351b4f54c16aa6d474120bd293948962624cf5)
            check_type(argname="argument filter", value=filter, expected_type=type_hints["filter"])
            check_type(argname="argument include_reservation_data", value=include_reservation_data, expected_type=type_hints["include_reservation_data"])
            check_type(argname="argument is_or_key", value=is_or_key, expected_type=type_hints["is_or_key"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if filter is not None:
            self._values["filter"] = filter
        if include_reservation_data is not None:
            self._values["include_reservation_data"] = include_reservation_data
        if is_or_key is not None:
            self._values["is_or_key"] = is_or_key
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def filter(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosCenBandwidthPackages.FilterProperty, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: filter: Filter value when querying resources
        '''
        result = self._values.get("filter")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosCenBandwidthPackages.FilterProperty, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def include_reservation_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: includeReservationData: Specifies whether to include renewal data.
        '''
        result = self._values.get("include_reservation_data")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_or_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isOrKey: The logical operator between the filter conditions.
        '''
        result = self._values.get("is_or_key")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        return "RosCenBandwidthPackagesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.datasource.RosCenInstances",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CEN::CenInstances``, which is used to query the information about Cloud Enterprise Network (CEN) instances within the current Alibaba Cloud account.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CenInstances`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f83f8c1d9a5e4fa453d1ac9fcbf35c00aa4af3791604d416cdb8b25c970016b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7b9bdf70c5d1fc997dc48e0163a60d3692fbccca89730448e0ff9fd18cee62bb)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCenIds")
    def attr_cen_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenIds: The list of The Cen instance ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCens")
    def attr_cens(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cens: The information about Cens.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCens"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__9a1289c071bac01d3b4da655999a6df7d35a68d134975e2e613d86c716574a43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="filter")
    def filter(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosCenInstances.FilterProperty", _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: filter: Filter value when querying resources
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosCenInstances.FilterProperty", _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "filter"))

    @filter.setter
    def filter(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosCenInstances.FilterProperty", _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa02484f00cbf668a3a4ade3d6bbc5526bfb0a157bd1575d977c739f76f98f8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filter", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__543a9fc0ac9c9d175613157b9605ac1003e8234ceb3addbfe2723e145b3be3d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cen.datasource.RosCenInstances.FilterProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class FilterProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f5a3f33696e3ea6b7c4ad2845d73229cd1496295284a35867444db127f42d00b)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FilterProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.datasource.RosCenInstancesProps",
    jsii_struct_bases=[],
    name_mapping={"filter": "filter", "refresh_options": "refreshOptions"},
)
class RosCenInstancesProps:
    def __init__(
        self,
        *,
        filter: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosCenInstances.FilterProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCenInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances

        :param filter: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b31c4a284d48821d5e9f24cc2816d11736d218588a42f2340ee6fff76b5d87d9)
            check_type(argname="argument filter", value=filter, expected_type=type_hints["filter"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if filter is not None:
            self._values["filter"] = filter
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def filter(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosCenInstances.FilterProperty, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: filter: Filter value when querying resources
        '''
        result = self._values.get("filter")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosCenInstances.FilterProperty, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
        return "RosCenInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCenRouteMaps(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.datasource.RosCenRouteMaps",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CEN::CenRouteMaps``, which is used to query the information about routing policies.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CenRouteMaps`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCenRouteMapsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c400f3c6c52963efdbf40475a7dc493692023e9c68a1cb2bf45dd07830415b6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__97001dbcd2b02961d6d07ef65ff272928d9209d242f764d4739f18d92d741b66)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteMapIds")
    def attr_route_map_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteMapIds: The list of The RouteMap ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteMapIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteMaps")
    def attr_route_maps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteMaps: The information about RouteMaps.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteMaps"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d707fda0c3d61769a9e09caa22988b2e0fadb56fd2f3a464f5946f2933c2e29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcd0249b9686b7c47fe1fc6bd7a4ad095728d63ded10c2ba675cb1017f6a652a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="cenRegionId")
    def cen_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cenRegionId: The ID of the region where the routing policy is applied.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cenRegionId"))

    @cen_region_id.setter
    def cen_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e1df934796c87f2e98fa52069b49d4bfa19aaaefc6b7ec0ce9660b8d0a20add)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenRegionId", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__c1108c9aa62fb638274acd6a225b8b8e569e907e01b0cb4b7874529bd203177e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="routeMapId")
    def route_map_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeMapId: The ID of the routing policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeMapId"))

    @route_map_id.setter
    def route_map_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2b961fac25cbc387d6ec577561564262c05c1d3e1647e4113c29c49ffb6df99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeMapId", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteTableId")
    def transit_router_route_table_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterRouteTableId"))

    @transit_router_route_table_id.setter
    def transit_router_route_table_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29c7f0156d0ecdce65cc1f25d8e9fd82be7e2d8ba91cc1c7288be46356cec8eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteTableId", value)

    @builtins.property
    @jsii.member(jsii_name="transmitDirection")
    def transmit_direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transmitDirection: The direction in which the routing policy is applied.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transmitDirection"))

    @transmit_direction.setter
    def transmit_direction(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c78b64b0e0dba7b1e6e071d5d9d4dcb72cf1770fd424e35cdc7e58e9ee7ebcd3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transmitDirection", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.datasource.RosCenRouteMapsProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "cen_region_id": "cenRegionId",
        "refresh_options": "refreshOptions",
        "route_map_id": "routeMapId",
        "transit_router_route_table_id": "transitRouterRouteTableId",
        "transmit_direction": "transmitDirection",
    },
)
class RosCenRouteMapsProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_map_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transmit_direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCenRouteMaps``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps

        :param cen_id: 
        :param cen_region_id: 
        :param refresh_options: 
        :param route_map_id: 
        :param transit_router_route_table_id: 
        :param transmit_direction: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f94403886db50824d8e12d87c7e9a5e3316eaedede46fc287395df2059d11dec)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument cen_region_id", value=cen_region_id, expected_type=type_hints["cen_region_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument route_map_id", value=route_map_id, expected_type=type_hints["route_map_id"])
            check_type(argname="argument transit_router_route_table_id", value=transit_router_route_table_id, expected_type=type_hints["transit_router_route_table_id"])
            check_type(argname="argument transmit_direction", value=transmit_direction, expected_type=type_hints["transmit_direction"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
        }
        if cen_region_id is not None:
            self._values["cen_region_id"] = cen_region_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if route_map_id is not None:
            self._values["route_map_id"] = route_map_id
        if transit_router_route_table_id is not None:
            self._values["transit_router_route_table_id"] = transit_router_route_table_id
        if transmit_direction is not None:
            self._values["transmit_direction"] = transmit_direction

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cenRegionId: The ID of the region where the routing policy is applied.
        '''
        result = self._values.get("cen_region_id")
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
    def route_map_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeMapId: The ID of the routing policy.
        '''
        result = self._values.get("route_map_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_route_table_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterRouteTableId: The route table ID of the transit router with which the routing policy is associated.
        '''
        result = self._values.get("transit_router_route_table_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transmit_direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transmitDirection: The direction in which the routing policy is applied.
        '''
        result = self._values.get("transmit_direction")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCenRouteMapsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouterRouteTables(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.datasource.RosTransitRouterRouteTables",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CEN::TransitRouterRouteTables``, which is used to query the information about route tables of an Enterprise Edition transit router.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TransitRouterRouteTables`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTransitRouterRouteTablesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2699df9309939927a9da27d18a3d22c8ba290e2b1401b801ef0aa8e0e810492)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f951497eda9210e2b7b55651699789284e43833e6c06d1ae636c3d22573de476)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableIds")
    def attr_transit_router_route_table_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTableIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTables")
    def attr_transit_router_route_tables(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterRouteTables: The list of TransitRouterRouteTables.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterRouteTables"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3e960c7d6fe7c532a5aa61da088a45bb7435d62c0d1fcad8c03bf27b5e2ca4d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterId: The ID of the Enterprise Edition transit router.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01770b8e1db3b3a384da5a86cbff0cae48380854e9c973a9d9555a22896541af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterId", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__32775a0a3c5925d3f8736856a9b57b10bb839a6ab39eb73f43822bd97098193e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteTableIds")
    def transit_router_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        transitRouterRouteTableIds: The ID of the route table.
        You can query multiple route tables in each call. Maximum value of N: 20.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "transitRouterRouteTableIds"))

    @transit_router_route_table_ids.setter
    def transit_router_route_table_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78d5eefe226d846b4f41b88c9d4b9468bae64f7a854ef96350faeb01f785fdcd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteTableIds", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteTableNames")
    def transit_router_route_table_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        transitRouterRouteTableNames: The name of the route table.
        You can query multiple route tables in each call. Maximum value of N: 20.
        Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "transitRouterRouteTableNames"))

    @transit_router_route_table_names.setter
    def transit_router_route_table_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67decbca1755c08749efe86a57fb8a8b9232ee8e2ca2fdf144568cdaa06f1485)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteTableNames", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteTableStatus")
    def transit_router_route_table_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        transitRouterRouteTableStatus: The state of the route table. Valid values:
        Creating: The route table is being created.
        Deleting: The route table is being deleted.
        Active: The route table is available for use.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterRouteTableStatus"))

    @transit_router_route_table_status.setter
    def transit_router_route_table_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba01506769695798f3bcab6eff4a85a8bfcb85291a6f6a8c580a2a4a6b0ec8fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteTableStatus", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterRouteTableType")
    def transit_router_route_table_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        transitRouterRouteTableType: The type of route table. Valid values:
        Custom: a custom route table
        System: the default route table
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterRouteTableType"))

    @transit_router_route_table_type.setter
    def transit_router_route_table_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f4ad185282d172f31f21457bec1b2ec10cd429d5dd38c8e8fdff3be392413b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterRouteTableType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.datasource.RosTransitRouterRouteTablesProps",
    jsii_struct_bases=[],
    name_mapping={
        "transit_router_id": "transitRouterId",
        "refresh_options": "refreshOptions",
        "transit_router_route_table_ids": "transitRouterRouteTableIds",
        "transit_router_route_table_names": "transitRouterRouteTableNames",
        "transit_router_route_table_status": "transitRouterRouteTableStatus",
        "transit_router_route_table_type": "transitRouterRouteTableType",
    },
)
class RosTransitRouterRouteTablesProps:
    def __init__(
        self,
        *,
        transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        transit_router_route_table_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        transit_router_route_table_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_table_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTransitRouterRouteTables``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables

        :param transit_router_id: 
        :param refresh_options: 
        :param transit_router_route_table_ids: 
        :param transit_router_route_table_names: 
        :param transit_router_route_table_status: 
        :param transit_router_route_table_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__794d283c4c1b7728395c90d820dcc773ecae6bebcfe42377ab455dbd955f4ee3)
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument transit_router_route_table_ids", value=transit_router_route_table_ids, expected_type=type_hints["transit_router_route_table_ids"])
            check_type(argname="argument transit_router_route_table_names", value=transit_router_route_table_names, expected_type=type_hints["transit_router_route_table_names"])
            check_type(argname="argument transit_router_route_table_status", value=transit_router_route_table_status, expected_type=type_hints["transit_router_route_table_status"])
            check_type(argname="argument transit_router_route_table_type", value=transit_router_route_table_type, expected_type=type_hints["transit_router_route_table_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "transit_router_id": transit_router_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if transit_router_route_table_ids is not None:
            self._values["transit_router_route_table_ids"] = transit_router_route_table_ids
        if transit_router_route_table_names is not None:
            self._values["transit_router_route_table_names"] = transit_router_route_table_names
        if transit_router_route_table_status is not None:
            self._values["transit_router_route_table_status"] = transit_router_route_table_status
        if transit_router_route_table_type is not None:
            self._values["transit_router_route_table_type"] = transit_router_route_table_type

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterId: The ID of the Enterprise Edition transit router.
        '''
        result = self._values.get("transit_router_id")
        assert result is not None, "Required property 'transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def transit_router_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        transitRouterRouteTableIds: The ID of the route table.
        You can query multiple route tables in each call. Maximum value of N: 20.
        '''
        result = self._values.get("transit_router_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def transit_router_route_table_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        transitRouterRouteTableNames: The name of the route table.
        You can query multiple route tables in each call. Maximum value of N: 20.
        Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
        '''
        result = self._values.get("transit_router_route_table_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def transit_router_route_table_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        transitRouterRouteTableStatus: The state of the route table. Valid values:
        Creating: The route table is being created.
        Deleting: The route table is being deleted.
        Active: The route table is available for use.
        '''
        result = self._values.get("transit_router_route_table_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_route_table_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        transitRouterRouteTableType: The type of route table. Valid values:
        Custom: a custom route table
        System: the default route table
        '''
        result = self._values.get("transit_router_route_table_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRouterRouteTablesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTransitRouters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.datasource.RosTransitRouters",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CEN::TransitRouters``, which is used to query the information about transit routers of a Cloud Enterprise Network (CEN) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TransitRouters`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTransitRoutersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ffc25340e8ce5886209672a0dca5fbcd965b5a97cfc75da0bd4361e5b70d39f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__211d2ff44749420a0451d0f3b7fd467cdb284076fee007b38ca77bac5c89aecd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterIds")
    def attr_transit_router_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouterIds: The list of TransitRouter IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouters")
    def attr_transit_routers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TransitRouters: The list of TransitRouters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTransitRouters"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__896ff6b2cf93520d760d3a7281abad0d76d0b4401d85057d7dd9765392cac7da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ceafc31efd361923209a98e3b4352c87bff3f2174f070c6e259f909de61bcdf2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__623d5048b81ae7c60343a702877d1bdd1362bd6dd8416332ae53304865979eb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        regionId: The ID of the region where the transit router is deployed.
        You can call the DescribeRegions operation to query region IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67487c88baf86e63ba3a11ac770b74431fdd1c21deb9e359613a8ec3b82524dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionId", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterId: The ID of the transit router.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c946c6f20091dfd5e5de59db76cb19fbae2f49fdcac56da7b6fde7185301b28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.datasource.RosTransitRoutersProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "refresh_options": "refreshOptions",
        "region_id": "regionId",
        "transit_router_id": "transitRouterId",
    },
)
class RosTransitRoutersProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTransitRouters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters

        :param cen_id: 
        :param refresh_options: 
        :param region_id: 
        :param transit_router_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44af51ce5dbc47bd6e7680b765c80173e6261c589e040c7d2fd159a1d7600009)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if region_id is not None:
            self._values["region_id"] = region_id
        if transit_router_id is not None:
            self._values["transit_router_id"] = transit_router_id

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        regionId: The ID of the region where the transit router is deployed.
        You can call the DescribeRegions operation to query region IDs.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: transitRouterId: The ID of the transit router.
        '''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTransitRoutersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITransitRouterRouteTables)
class TransitRouterRouteTables(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.datasource.TransitRouterRouteTables",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CEN::TransitRouterRouteTables``, which is used to query the information about route tables of an Enterprise Edition transit router.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTransitRouterRouteTables``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TransitRouterRouteTablesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e26f67dbfc00c40abb04000612240c5c18cc8a1090a58640fc335f6009bd6e32)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTableIds")
    def attr_transit_router_route_table_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTransitRouterRouteTableIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterRouteTables")
    def attr_transit_router_route_tables(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTransitRouterRouteTables"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TransitRouterRouteTablesProps":
        return typing.cast("TransitRouterRouteTablesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ef095dee7c7e5672811e38489f0b6a6960244a80c558093d7e11f3a2966aa6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ca86ffb08c6c720ff395cb7e78e254f0b7bb2e86c13181f98bc3ef6ab464cbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5e7f68b2f61f8884a773306d65daee6337eab8df2953274f0e32e71f7c85829)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.datasource.TransitRouterRouteTablesProps",
    jsii_struct_bases=[],
    name_mapping={
        "transit_router_id": "transitRouterId",
        "refresh_options": "refreshOptions",
        "transit_router_route_table_ids": "transitRouterRouteTableIds",
        "transit_router_route_table_names": "transitRouterRouteTableNames",
        "transit_router_route_table_status": "transitRouterRouteTableStatus",
        "transit_router_route_table_type": "transitRouterRouteTableType",
    },
)
class TransitRouterRouteTablesProps:
    def __init__(
        self,
        *,
        transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        transit_router_route_table_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        transit_router_route_table_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_route_table_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``TransitRouterRouteTables``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterroutetables

        :param transit_router_id: Property transitRouterId: The ID of the Enterprise Edition transit router.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param transit_router_route_table_ids: Property transitRouterRouteTableIds: The ID of the route table. You can query multiple route tables in each call. Maximum value of N: 20.
        :param transit_router_route_table_names: Property transitRouterRouteTableNames: The name of the route table. You can query multiple route tables in each call. Maximum value of N: 20. Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
        :param transit_router_route_table_status: Property transitRouterRouteTableStatus: The state of the route table. Valid values: Creating: The route table is being created. Deleting: The route table is being deleted. Active: The route table is available for use.
        :param transit_router_route_table_type: Property transitRouterRouteTableType: The type of route table. Valid values: Custom: a custom route table System: the default route table
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cb99c5777577a411991f51afb719c2c7ffb9fd1d89c7a4eb36203eab64434fe)
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument transit_router_route_table_ids", value=transit_router_route_table_ids, expected_type=type_hints["transit_router_route_table_ids"])
            check_type(argname="argument transit_router_route_table_names", value=transit_router_route_table_names, expected_type=type_hints["transit_router_route_table_names"])
            check_type(argname="argument transit_router_route_table_status", value=transit_router_route_table_status, expected_type=type_hints["transit_router_route_table_status"])
            check_type(argname="argument transit_router_route_table_type", value=transit_router_route_table_type, expected_type=type_hints["transit_router_route_table_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "transit_router_id": transit_router_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if transit_router_route_table_ids is not None:
            self._values["transit_router_route_table_ids"] = transit_router_route_table_ids
        if transit_router_route_table_names is not None:
            self._values["transit_router_route_table_names"] = transit_router_route_table_names
        if transit_router_route_table_status is not None:
            self._values["transit_router_route_table_status"] = transit_router_route_table_status
        if transit_router_route_table_type is not None:
            self._values["transit_router_route_table_type"] = transit_router_route_table_type

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterId: The ID of the Enterprise Edition transit router.'''
        result = self._values.get("transit_router_id")
        assert result is not None, "Required property 'transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def transit_router_route_table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property transitRouterRouteTableIds: The ID of the route table.

        You can query multiple route tables in each call. Maximum value of N: 20.
        '''
        result = self._values.get("transit_router_route_table_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def transit_router_route_table_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property transitRouterRouteTableNames: The name of the route table.

        You can query multiple route tables in each call. Maximum value of N: 20.
        Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
        '''
        result = self._values.get("transit_router_route_table_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def transit_router_route_table_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterRouteTableStatus: The state of the route table.

        Valid values:
        Creating: The route table is being created.
        Deleting: The route table is being deleted.
        Active: The route table is available for use.
        '''
        result = self._values.get("transit_router_route_table_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_route_table_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterRouteTableType: The type of route table.

        Valid values:
        Custom: a custom route table
        System: the default route table
        '''
        result = self._values.get("transit_router_route_table_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRouterRouteTablesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITransitRouters)
class TransitRouters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.datasource.TransitRouters",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CEN::TransitRouters``, which is used to query the information about transit routers of a Cloud Enterprise Network (CEN) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTransitRouters``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TransitRoutersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84d5f930169413bed92bfb66b481e115b0243fb18771bfd160dee413497a6ef1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouterIds")
    def attr_transit_router_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouterIds: The list of TransitRouter IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTransitRouterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTransitRouters")
    def attr_transit_routers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TransitRouters: The list of TransitRouters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTransitRouters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TransitRoutersProps":
        return typing.cast("TransitRoutersProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdd9c36f33008001519ec9a03cc0fe4f2767711ed438c774472a1474733f85d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__849e2cf3ec1381ec0cd0a1acdd10c925166b92760c39417d1bc7c1f06d115f90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4e2d4c4603699ee0c1dd9891b24ba1c0cfc80b8e53eec869b41c677b854f7b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cen.datasource.TransitRoutersProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "refresh_options": "refreshOptions",
        "region_id": "regionId",
        "transit_router_id": "transitRouterId",
    },
)
class TransitRoutersProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``TransitRouters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters

        :param cen_id: Property cenId: The ID of the CEN instance.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param region_id: Property regionId: The ID of the region where the transit router is deployed. You can call the DescribeRegions operation to query region IDs.
        :param transit_router_id: Property transitRouterId: The ID of the transit router.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ea68a33e6fb1e41835e9625a7cc271906ee40878da08b4e35142070c22a4ef8)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if region_id is not None:
            self._values["region_id"] = region_id
        if transit_router_id is not None:
            self._values["transit_router_id"] = transit_router_id

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property regionId: The ID of the region where the transit router is deployed.

        You can call the DescribeRegions operation to query region IDs.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property transitRouterId: The ID of the transit router.'''
        result = self._values.get("transit_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TransitRoutersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ICenBandwidthPackages)
class CenBandwidthPackages(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.datasource.CenBandwidthPackages",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CEN::CenBandwidthPackages``, which is used to query the information about Cloud Enterprise Network (CEN) bandwidth plans within the logon account.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCenBandwidthPackages``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[CenBandwidthPackagesProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad2ae7af5692517562800f89940cca0aaa21452f0b08beb3076ec4e3b2911afc)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackageIds")
    def attr_cen_bandwidth_package_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCenBandwidthPackageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCenBandwidthPackages")
    def attr_cen_bandwidth_packages(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CenBandwidthPackages: The information about CenBandwidthPackages.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCenBandwidthPackages"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CenBandwidthPackagesProps:
        return typing.cast(CenBandwidthPackagesProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e56797da9c5223b4f9e68145597bda66a27fe5cccc423e0c2284ad877b589b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__124bff94f544b3bdf6804d4ef72fc68939c7a458abe5352cb2dafa5e6bde8a87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60a786622cc5ae8b91a94a774dcae0f7c93988b7308aee04dbe34e64dd9c8953)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICenInstances)
class CenInstances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.datasource.CenInstances",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CEN::CenInstances``, which is used to query the information about Cloud Enterprise Network (CEN) instances within the current Alibaba Cloud account.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCenInstances``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[CenInstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f269c8d08d6c4b743989a3321861f2439135090abeb93d15524135fb6e56b3db)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCenIds")
    def attr_cen_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CenIds: The list of The Cen instance ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCenIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCens")
    def attr_cens(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cens: The information about Cens.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCens"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CenInstancesProps:
        return typing.cast(CenInstancesProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89b19051d29916f630baa0e946cc5b8fdc812d50a518141bd8c1daef5f4501dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7035a070eeb1a6d5168a5ee5f4e1aa847f35fe989500e6cd3e74dbf78695fc34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20b11c97804cb1508bad5ddbfcbfad420794d36ffb91e741ae2882755b14fb68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICenRouteMaps)
class CenRouteMaps(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cen.datasource.CenRouteMaps",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CEN::CenRouteMaps``, which is used to query the information about routing policies.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCenRouteMaps``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenroutemaps
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CenRouteMapsProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e2e737e9ed693aec04d1d22d2347b707134be2a31328c9b612ab473fc5afdef)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRouteMapIds")
    def attr_route_map_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteMapIds: The list of The RouteMap ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteMapIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteMaps")
    def attr_route_maps(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteMaps: The information about RouteMaps.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteMaps"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CenRouteMapsProps:
        return typing.cast(CenRouteMapsProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c95121ce74a9087fd80bb2f1665236bd49745db4e388b408a13fe0792b10ec6f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c24c659dc77a3471a9967ebc6e55a1e287ba480aae8e23b88d6dcf6181c03496)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b793b017fdf0fe1292fc3ee5693e24fb58cec1e69fb2233eb0b87b6ac5bec105)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "CenBandwidthPackages",
    "CenBandwidthPackagesProps",
    "CenInstances",
    "CenInstancesProps",
    "CenRouteMaps",
    "CenRouteMapsProps",
    "ICenBandwidthPackages",
    "ICenInstances",
    "ICenRouteMaps",
    "ITransitRouterRouteTables",
    "ITransitRouters",
    "RosCenBandwidthPackages",
    "RosCenBandwidthPackagesProps",
    "RosCenInstances",
    "RosCenInstancesProps",
    "RosCenRouteMaps",
    "RosCenRouteMapsProps",
    "RosTransitRouterRouteTables",
    "RosTransitRouterRouteTablesProps",
    "RosTransitRouters",
    "RosTransitRoutersProps",
    "TransitRouterRouteTables",
    "TransitRouterRouteTablesProps",
    "TransitRouters",
    "TransitRoutersProps",
]

publication.publish()

def _typecheckingstub__e6bde544e3969f6e83065e6466dd73c95e21c4b8ca6d5d99e772fd0e1db82a2b(
    *,
    filter: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosCenBandwidthPackages.FilterProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    include_reservation_data: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_or_key: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72121d46179df4be28887dc9acfcdf320635b660126e80e236cced19b60584ab(
    *,
    filter: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosCenInstances.FilterProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5819ea8b4111913e25de0be13eeea4cb87e7e03c1e07ada510fd6f2852c6185(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_map_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transmit_direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc76b127ef80912a41344b78753365e822d63e607d8ec574690bbbfe7c91e865(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenBandwidthPackagesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e049559c1125e69eb53b23cf178502eda570d25bb2de62df877763f53a22a6a7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbdba46d14ffd1e9317dc7d1322b1b27120319bb72b904df4ad55aa8f04e5db4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31d0060c29c2ac46f2b991d1d05a78565d619c8d941165cea61eaa99a49d226a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosCenBandwidthPackages.FilterProperty, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c6e0ff3562acffd08094719c4663538707de8d213b739c254755f571d997653(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d901ec7be08676ddab2ed460a0d7380a8de7b4a26b96b6a0de62e78d6038857(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60bc75af4d0a4938a463ccf2f0b5f8ceaf45b6db471e0444baf5550bc3057d99(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__689c46e7cd40e1a75844c82a686c636b9003416b135c2474bdd6b8d9b2862ce1(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c52f0b0f7a25f9f08d5774cbd9351b4f54c16aa6d474120bd293948962624cf5(
    *,
    filter: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosCenBandwidthPackages.FilterProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    include_reservation_data: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_or_key: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f83f8c1d9a5e4fa453d1ac9fcbf35c00aa4af3791604d416cdb8b25c970016b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b9bdf70c5d1fc997dc48e0163a60d3692fbccca89730448e0ff9fd18cee62bb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a1289c071bac01d3b4da655999a6df7d35a68d134975e2e613d86c716574a43(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa02484f00cbf668a3a4ade3d6bbc5526bfb0a157bd1575d977c739f76f98f8c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosCenInstances.FilterProperty, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__543a9fc0ac9c9d175613157b9605ac1003e8234ceb3addbfe2723e145b3be3d4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5a3f33696e3ea6b7c4ad2845d73229cd1496295284a35867444db127f42d00b(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b31c4a284d48821d5e9f24cc2816d11736d218588a42f2340ee6fff76b5d87d9(
    *,
    filter: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosCenInstances.FilterProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c400f3c6c52963efdbf40475a7dc493692023e9c68a1cb2bf45dd07830415b6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCenRouteMapsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97001dbcd2b02961d6d07ef65ff272928d9209d242f764d4739f18d92d741b66(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d707fda0c3d61769a9e09caa22988b2e0fadb56fd2f3a464f5946f2933c2e29(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcd0249b9686b7c47fe1fc6bd7a4ad095728d63ded10c2ba675cb1017f6a652a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e1df934796c87f2e98fa52069b49d4bfa19aaaefc6b7ec0ce9660b8d0a20add(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1108c9aa62fb638274acd6a225b8b8e569e907e01b0cb4b7874529bd203177e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2b961fac25cbc387d6ec577561564262c05c1d3e1647e4113c29c49ffb6df99(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29c7f0156d0ecdce65cc1f25d8e9fd82be7e2d8ba91cc1c7288be46356cec8eb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c78b64b0e0dba7b1e6e071d5d9d4dcb72cf1770fd424e35cdc7e58e9ee7ebcd3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f94403886db50824d8e12d87c7e9a5e3316eaedede46fc287395df2059d11dec(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_map_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transmit_direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2699df9309939927a9da27d18a3d22c8ba290e2b1401b801ef0aa8e0e810492(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTransitRouterRouteTablesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f951497eda9210e2b7b55651699789284e43833e6c06d1ae636c3d22573de476(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e960c7d6fe7c532a5aa61da088a45bb7435d62c0d1fcad8c03bf27b5e2ca4d7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01770b8e1db3b3a384da5a86cbff0cae48380854e9c973a9d9555a22896541af(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32775a0a3c5925d3f8736856a9b57b10bb839a6ab39eb73f43822bd97098193e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78d5eefe226d846b4f41b88c9d4b9468bae64f7a854ef96350faeb01f785fdcd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67decbca1755c08749efe86a57fb8a8b9232ee8e2ca2fdf144568cdaa06f1485(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba01506769695798f3bcab6eff4a85a8bfcb85291a6f6a8c580a2a4a6b0ec8fa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f4ad185282d172f31f21457bec1b2ec10cd429d5dd38c8e8fdff3be392413b3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__794d283c4c1b7728395c90d820dcc773ecae6bebcfe42377ab455dbd955f4ee3(
    *,
    transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    transit_router_route_table_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    transit_router_route_table_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_table_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ffc25340e8ce5886209672a0dca5fbcd965b5a97cfc75da0bd4361e5b70d39f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTransitRoutersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__211d2ff44749420a0451d0f3b7fd467cdb284076fee007b38ca77bac5c89aecd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__896ff6b2cf93520d760d3a7281abad0d76d0b4401d85057d7dd9765392cac7da(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ceafc31efd361923209a98e3b4352c87bff3f2174f070c6e259f909de61bcdf2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__623d5048b81ae7c60343a702877d1bdd1362bd6dd8416332ae53304865979eb1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67487c88baf86e63ba3a11ac770b74431fdd1c21deb9e359613a8ec3b82524dd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c946c6f20091dfd5e5de59db76cb19fbae2f49fdcac56da7b6fde7185301b28(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44af51ce5dbc47bd6e7680b765c80173e6261c589e040c7d2fd159a1d7600009(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e26f67dbfc00c40abb04000612240c5c18cc8a1090a58640fc335f6009bd6e32(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TransitRouterRouteTablesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ef095dee7c7e5672811e38489f0b6a6960244a80c558093d7e11f3a2966aa6a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ca86ffb08c6c720ff395cb7e78e254f0b7bb2e86c13181f98bc3ef6ab464cbb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5e7f68b2f61f8884a773306d65daee6337eab8df2953274f0e32e71f7c85829(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cb99c5777577a411991f51afb719c2c7ffb9fd1d89c7a4eb36203eab64434fe(
    *,
    transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    transit_router_route_table_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    transit_router_route_table_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_route_table_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84d5f930169413bed92bfb66b481e115b0243fb18771bfd160dee413497a6ef1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TransitRoutersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cdd9c36f33008001519ec9a03cc0fe4f2767711ed438c774472a1474733f85d4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__849e2cf3ec1381ec0cd0a1acdd10c925166b92760c39417d1bc7c1f06d115f90(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4e2d4c4603699ee0c1dd9891b24ba1c0cfc80b8e53eec869b41c677b854f7b6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ea68a33e6fb1e41835e9625a7cc271906ee40878da08b4e35142070c22a4ef8(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    transit_router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad2ae7af5692517562800f89940cca0aaa21452f0b08beb3076ec4e3b2911afc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[CenBandwidthPackagesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e56797da9c5223b4f9e68145597bda66a27fe5cccc423e0c2284ad877b589b5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__124bff94f544b3bdf6804d4ef72fc68939c7a458abe5352cb2dafa5e6bde8a87(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60a786622cc5ae8b91a94a774dcae0f7c93988b7308aee04dbe34e64dd9c8953(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f269c8d08d6c4b743989a3321861f2439135090abeb93d15524135fb6e56b3db(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[CenInstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89b19051d29916f630baa0e946cc5b8fdc812d50a518141bd8c1daef5f4501dd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7035a070eeb1a6d5168a5ee5f4e1aa847f35fe989500e6cd3e74dbf78695fc34(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20b11c97804cb1508bad5ddbfcbfad420794d36ffb91e741ae2882755b14fb68(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e2e737e9ed693aec04d1d22d2347b707134be2a31328c9b612ab473fc5afdef(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CenRouteMapsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c95121ce74a9087fd80bb2f1665236bd49745db4e388b408a13fe0792b10ec6f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c24c659dc77a3471a9967ebc6e55a1e287ba480aae8e23b88d6dcf6181c03496(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b793b017fdf0fe1292fc3ee5693e24fb58cec1e69fb2233eb0b87b6ac5bec105(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
