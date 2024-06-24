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


class Address(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.Address",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::EIP::Address``, which is used to query the information about a created elastic IP address (EIP).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAddress``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fbf9e3a74da09e78933874fac77b87838dff6bd3c1c1f237808cc8d926adef9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddressName")
    def attr_address_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AddressName: The name of the EIP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressName"))

    @builtins.property
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AllocationId: The ID of the EIP instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllocationId"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Bandwidth: The peak bandwidth of the EIP.

        Unit: Mbps.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageBandwidth")
    def attr_bandwidth_package_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP.

        The unit is Mbps.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BandwidthPackageId: The ID of the added shared bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageType")
    def attr_bandwidth_package_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BandwidthPackageType: The type of bandwidth.

        Only **CommonBandwidthPackage** (shared bandwidth) is supported.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageType"))

    @builtins.property
    @jsii.member(jsii_name="attrBusinessStatus")
    def attr_business_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BusinessStatus: The business status of the EIP instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBusinessStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The time when the EIP was created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDeletionProtection")
    def attr_deletion_protection(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DeletionProtection: Whether the delete protection function is turned on.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeletionProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The description of the EIP instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEipBandwidth")
    def attr_eip_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEipBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiredTime")
    def attr_expired_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHasReservationData")
    def attr_has_reservation_data(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HasReservationData: Whether there is renewal data.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHasReservationData"))

    @builtins.property
    @jsii.member(jsii_name="attrHdMonitorStatus")
    def attr_hd_monitor_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHdMonitorStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the current bound instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceRegionId")
    def attr_instance_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceRegionId: The region ID of the currently bound resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceType: The type of the current bound instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpAddress: The IP address of the EIP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIsp")
    def attr_isp(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Isp: Service providers.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsp"))

    @builtins.property
    @jsii.member(jsii_name="attrNetmode")
    def attr_netmode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Netmode: Network type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetmode"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationLocks")
    def attr_operation_locks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OperationLocks: Lock details.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationLocks"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: The billing method of the EIP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddressPoolId")
    def attr_public_ip_address_pool_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddressPoolId"))

    @builtins.property
    @jsii.member(jsii_name="attrReservationActiveTime")
    def attr_reservation_active_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReservationActiveTime"))

    @builtins.property
    @jsii.member(jsii_name="attrReservationBandwidth")
    def attr_reservation_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReservationBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrReservationInternetChargeType")
    def attr_reservation_internet_charge_type(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReservationInternetChargeType: Renewal Payment type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReservationInternetChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrReservationOrderType")
    def attr_reservation_order_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReservationOrderType: Renewal order type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReservationOrderType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondLimited")
    def attr_second_limited(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecondLimited: Whether a secondary speed limit is configured.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecondLimited"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityProtectionTypes")
    def attr_security_protection_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityProtectionTypes: Security protection level.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityProtectionTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrSegmentInstanceId")
    def attr_segment_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SegmentInstanceId: The ID of the consecutive EIPs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSegmentInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceManaged")
    def attr_service_managed(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceManaged: Indicates the resource created for the service account.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceManaged"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: The tag of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9daffa87f363387f39fb9d2a06a7739cae1bec89e80afeb1344449fb15c7189)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26bed684679998f294c61a58a894c54cefd6f1a9cbbb3c47b25a0e3a05aa9a8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AddressProps":
        return typing.cast("AddressProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AddressProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d69772a01e1a06982c5afdddd0844a0111bac650b236ff1792ff9cbdcd88ac7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73ded0e1c49bb4a315400f216a31110a02e9c7251f6e4c749790e305aff1f541)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.AddressProps",
    jsii_struct_bases=[],
    name_mapping={"allocation_id": "allocationId"},
)
class AddressProps:
    def __init__(
        self,
        *,
        allocation_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Address``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address

        :param allocation_id: Property allocationId: The ID of the EIP instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__668ad709748e58c345f4525ed78fcb52188aa66fb8dad11e0ac193b8ebb6bdde)
            check_type(argname="argument allocation_id", value=allocation_id, expected_type=type_hints["allocation_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "allocation_id": allocation_id,
        }

    @builtins.property
    def allocation_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property allocationId: The ID of the EIP instance.'''
        result = self._values.get("allocation_id")
        assert result is not None, "Required property 'allocation_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AddressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Addresses(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.Addresses",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::EIP::Addresses``, which is used to query the information about elastic IP addresses (EIPs).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAddresses``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AddressesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4143b81dc5124e1b4b1e03d4dd2996ed0685e2081caa9e038caf76781eda7524)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Addresses: The details about the EIP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrAllocationIds")
    def attr_allocation_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AllocationIds: The list of allocation IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllocationIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26ef870a0786d76a0ab420329880382dfd20071ab18d41c351efa8d6028b0ff0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2521b8208a938b8593332882b138d1ed951baa2b5264ff2e9065174366cd9fbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AddressesProps":
        return typing.cast("AddressesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AddressesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82368bb998aa4e0321a66e7e7769ecb18150d165d36a34839bb6d92e03af47fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05fce6febc95385256e4dcd933865bd253c169347012fcdff64f1d7c51bf81b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.AddressesProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_name": "addressName",
        "allocation_id": "allocationId",
        "instance_id": "instanceId",
        "instance_type": "instanceType",
        "ip_address": "ipAddress",
        "isp": "isp",
        "payment_type": "paymentType",
        "resource_group_id": "resourceGroupId",
        "segment_instance_id": "segmentInstanceId",
    },
)
class AddressesProps:
    def __init__(
        self,
        *,
        address_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        allocation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        segment_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Addresses``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses

        :param address_name: Property addressName: The name of the EIP.
        :param allocation_id: Property allocationId: The ID of the EIP that you want to query.
        :param instance_id: Property instanceId: The ID of the cloud resource.
        :param instance_type: Property instanceType: The type of the current bound instance. - **EcsInstance**: an ECS instance of the VPC type. - **SlbInstance**: an SLB instance of the VPC type. - **Nat**:NAT gateway. - **HaVip**: a highly available virtual IP address. - **NetworkInterface**: Secondary ENI.
        :param ip_address: Property ipAddress: The IP address pool to which the EIP that you want to query belongs.
        :param isp: Property isp: The line type. Valid values: BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs. BGP_PRO: BGP (Multi-ISP) Pro lines. Only the following regions support BGP (Multi-ISP) Pro lines: China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok). For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types. If you are allowed to use single-ISP bandwidth, you can also choose one of the following values: ChinaTelecom: China Telecom ChinaUnicom: China Unicom ChinaMobile: China Mobile ChinaTelecom_L2: China Telecom L2 ChinaUnicom_L2: China Unicom L2 ChinaMobile_L2: China Mobile L2 If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
        :param payment_type: Property paymentType: The billing method of the EIP. Valid values: PrePaid: subscription PostPaid: pay-as-you-go.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the EIPs belong.
        :param segment_instance_id: Property segmentInstanceId: The ID of the consecutive EIPs. This parameter value is returned only if the EIP is a continuous EIP.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5d39648d11c5c6d0978d816f8284b979efdb112cf83fb3ec01c3eba8f4d1591)
            check_type(argname="argument address_name", value=address_name, expected_type=type_hints["address_name"])
            check_type(argname="argument allocation_id", value=allocation_id, expected_type=type_hints["allocation_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument ip_address", value=ip_address, expected_type=type_hints["ip_address"])
            check_type(argname="argument isp", value=isp, expected_type=type_hints["isp"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument segment_instance_id", value=segment_instance_id, expected_type=type_hints["segment_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_name is not None:
            self._values["address_name"] = address_name
        if allocation_id is not None:
            self._values["allocation_id"] = allocation_id
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if ip_address is not None:
            self._values["ip_address"] = ip_address
        if isp is not None:
            self._values["isp"] = isp
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if segment_instance_id is not None:
            self._values["segment_instance_id"] = segment_instance_id

    @builtins.property
    def address_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressName: The name of the EIP.'''
        result = self._values.get("address_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def allocation_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allocationId: The ID of the EIP that you want to query.'''
        result = self._values.get("allocation_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the cloud resource.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: The type of the current bound instance.

        - **EcsInstance**: an ECS instance of the VPC type.
        - **SlbInstance**: an SLB instance of the VPC type.
        - **Nat**:NAT gateway.
        - **HaVip**: a highly available virtual IP address.
        - **NetworkInterface**: Secondary ENI.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipAddress: The IP address pool to which the EIP that you want to query belongs.'''
        result = self._values.get("ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isp: The line type.

        Valid values:
        BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
        BGP_PRO: BGP (Multi-ISP) Pro lines.
        Only the following regions support BGP (Multi-ISP) Pro lines:
        China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
        For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
        If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
        ChinaTelecom: China Telecom
        ChinaUnicom: China Unicom
        ChinaMobile: China Mobile
        ChinaTelecom_L2: China Telecom L2
        ChinaUnicom_L2: China Unicom L2
        ChinaMobile_L2: China Mobile L2
        If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
        '''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: The billing method of the EIP.

        Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the EIPs belong.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def segment_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property segmentInstanceId: The ID of the consecutive EIPs.

        This parameter value is returned only if the EIP is a continuous EIP.
        '''
        result = self._values.get("segment_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AddressesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CommonBandwidthPackages(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackages",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::CommonBandwidthPackages``, which is used to query the elastic IP address (EIP) bandwidth plans in a specified region.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCommonBandwidthPackages``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["CommonBandwidthPackagesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__beb082ca016dbf6af6db299506632a3df1ee5a80eb5e4784f52e07e197bc9d2f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCommonBandwidthPackageIds")
    def attr_common_bandwidth_package_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommonBandwidthPackageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCommonBandwidthPackages")
    def attr_common_bandwidth_packages(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CommonBandwidthPackages: The list of common bandwidth packages.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommonBandwidthPackages"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8759046bd75ec66a2f1d9f1917901efda75fa57e5e75f3516ef97d71e730b878)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6763ac95b9b315a61316f8b06f0490a64226ecb77940bf782081e2d77d22a39e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "CommonBandwidthPackagesProps":
        return typing.cast("CommonBandwidthPackagesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "CommonBandwidthPackagesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39fade78b81d32a9a5434f62d746f0787425b0b029f3195e3f753ec18445d6df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c365f8d96523bafd2f35b2a3e5cf050b6d5a6775b4cbf966e0854b7304b21e60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackagesProps",
    jsii_struct_bases=[],
    name_mapping={
        "common_bandwidth_package_id": "commonBandwidthPackageId",
        "common_bandwidth_package_name": "commonBandwidthPackageName",
        "resource_group_id": "resourceGroupId",
    },
)
class CommonBandwidthPackagesProps:
    def __init__(
        self,
        *,
        common_bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        common_bandwidth_package_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CommonBandwidthPackages``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages

        :param common_bandwidth_package_id: Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
        :param common_bandwidth_package_name: Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57ea2bca7da69c43964acf4eb3a034125d7cd3c9d2561ece9031a4662ad42999)
            check_type(argname="argument common_bandwidth_package_id", value=common_bandwidth_package_id, expected_type=type_hints["common_bandwidth_package_id"])
            check_type(argname="argument common_bandwidth_package_name", value=common_bandwidth_package_name, expected_type=type_hints["common_bandwidth_package_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if common_bandwidth_package_id is not None:
            self._values["common_bandwidth_package_id"] = common_bandwidth_package_id
        if common_bandwidth_package_name is not None:
            self._values["common_bandwidth_package_name"] = common_bandwidth_package_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def common_bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.'''
        result = self._values.get("common_bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def common_bandwidth_package_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.'''
        result = self._values.get("common_bandwidth_package_name")
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
        return "CommonBandwidthPackagesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CustomerGateway(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.CustomerGateway",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::CustomerGateway``, which is used to query the information about a customer gateway.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCustomerGateway``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CustomerGatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcf107254fc09ebe871a16f8c945f30a39e4da0527a49720e61d4be867b1a9b2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAsn")
    def attr_asn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Asn: Asn.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAsn"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthKey")
    def attr_auth_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AuthKey: The authentication key of the local data center gateway device BGP routing protocol.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthKey"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The time when the customer gateway was created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomerGatewayId")
    def attr_customer_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CustomerGatewayId: The ID of the customer gateway.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomerGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomerGatewayName")
    def attr_customer_gateway_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CustomerGatewayName: The name of the customer gateway.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomerGatewayName"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The description of the customer gateway.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpAddress: The IP address of the customer gateway.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a832a507019a9ee1f4bb65b59aa50fa6446e7208a5700eba93a2fb4cfedae8b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1909ebe22b67ffac6a3dd08856fc3a3a92534e07feb460719471aef4028a8a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "CustomerGatewayProps":
        return typing.cast("CustomerGatewayProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "CustomerGatewayProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40903dba27741853a3039ace1e825e5ad6a31714615872dcc0e6e254bc14168e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d0f4239a003994b094ec5532b6c333987034657221925a79231d9c55dce8859)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.CustomerGatewayProps",
    jsii_struct_bases=[],
    name_mapping={"customer_gateway_id": "customerGatewayId"},
)
class CustomerGatewayProps:
    def __init__(
        self,
        *,
        customer_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``CustomerGateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway

        :param customer_gateway_id: Property customerGatewayId: The ID of the customer gateway.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f7c9194452c75282ba19761468c444205f12fd318d47401ee100749c17ebf53)
            check_type(argname="argument customer_gateway_id", value=customer_gateway_id, expected_type=type_hints["customer_gateway_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "customer_gateway_id": customer_gateway_id,
        }

    @builtins.property
    def customer_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property customerGatewayId: The ID of the customer gateway.'''
        result = self._values.get("customer_gateway_id")
        assert result is not None, "Required property 'customer_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomerGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CustomerGateways(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.CustomerGateways",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::CustomerGateways``, which is used to query customer gateways.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCustomerGateways``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["CustomerGatewaysProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0d7565e6d83d3387b0f6ab51368c7d45c7e2beae8a28159299162dc9624f736)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCustomerGatewayIds")
    def attr_customer_gateway_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CustomerGatewayIds: The list of customer gateway IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomerGatewayIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomerGateways")
    def attr_customer_gateways(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CustomerGateways: The list of customer gateways.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomerGateways"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60c342b7ef3712d5781ae4928aeea12726480c00c499dfc7aa78e6621c099a85)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__425528edfba1e3edd791772bca172bb853b09682dc3e43c25702914b650fe5f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "CustomerGatewaysProps":
        return typing.cast("CustomerGatewaysProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "CustomerGatewaysProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52a546e487a7469b62ccde464eb0e3da92ac2961392beb41f1530145cddf520c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8adbb7c59231f7a43bb83aebe8d990d92ebcf2600d8ee9c4e6610b12cb1edcb4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.CustomerGatewaysProps",
    jsii_struct_bases=[],
    name_mapping={"customer_gateway_id": "customerGatewayId"},
)
class CustomerGatewaysProps:
    def __init__(
        self,
        *,
        customer_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CustomerGateways``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways

        :param customer_gateway_id: Property customerGatewayId: The ID of the customer gateway.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fecb5f48e6d172011c94161b55ad30a6bde530ce92ccaae8ee750d91f1b8f700)
            check_type(argname="argument customer_gateway_id", value=customer_gateway_id, expected_type=type_hints["customer_gateway_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if customer_gateway_id is not None:
            self._values["customer_gateway_id"] = customer_gateway_id

    @builtins.property
    def customer_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property customerGatewayId: The ID of the customer gateway.'''
        result = self._values.get("customer_gateway_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomerGatewaysProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class FlowLog(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.FlowLog",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::FlowLog``, which is used to query a flow log by log ID.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFlowLog``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["FlowLogProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75bc1289744ae8aec935566b0e326c0deebe9bb2dc7a3f958c089a28848abca4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAggregationInterval")
    def attr_aggregation_interval(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AggregationInterval: Data aggregation interval.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAggregationInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrBusinessStatus")
    def attr_business_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BusinessStatus: Business status.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBusinessStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: the time of creation.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The Description of flow log.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowLogId")
    def attr_flow_log_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FlowLogId: The flow log ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowLogId"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowLogName")
    def attr_flow_log_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FlowLogName: The flow log name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowLogName"))

    @builtins.property
    @jsii.member(jsii_name="attrLogStoreName")
    def attr_log_store_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LogStoreName: The log store name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogStoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProjectName: The project name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceId: The resource id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceType: The resource type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficType")
    def attr_traffic_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TrafficType: The traffic type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficType"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__329fdd9496140983df175d77e2287d6da3b5314489d7449dc26799625d88aa5f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfab0ddc522c73eafa3b9f56ece9b49fa84e2bf63aacdc39d971df2c6edc65c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "FlowLogProps":
        return typing.cast("FlowLogProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "FlowLogProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84392d547cd850662369ac52c340d24bf4145fda61b048a5b80a7fecb9eb0669)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ddcb298302576e2a095fc29c234cdfb2b955476ba1db257cebab35b2eea2355)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.FlowLogProps",
    jsii_struct_bases=[],
    name_mapping={"flow_log_id": "flowLogId"},
)
class FlowLogProps:
    def __init__(
        self,
        *,
        flow_log_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``FlowLog``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog

        :param flow_log_id: Property flowLogId: The flow log ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ced06b7a3f02579922229f6f9a57e7997dddbb220aa28f712d45d20ef5c5fc2)
            check_type(argname="argument flow_log_id", value=flow_log_id, expected_type=type_hints["flow_log_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "flow_log_id": flow_log_id,
        }

    @builtins.property
    def flow_log_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property flowLogId: The flow log ID.'''
        result = self._values.get("flow_log_id")
        assert result is not None, "Required property 'flow_log_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FlowLogProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class FlowLogs(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.FlowLogs",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::FlowLogs``, which is used to query flow logs.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFlowLogs``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["FlowLogsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1892007d9702d590acac52d99c95cfb27c60935703c8dd1d8115ff13402a3b3a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFlowLogIds")
    def attr_flow_log_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FlowLogIds: The list of flow log IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowLogIds"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowLogs")
    def attr_flow_logs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FlowLogs: The list of flow logs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowLogs"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ba9d2eca72f036f93a8c4c682f9cf22b5c86e5675f64e173461bc33f7cbbb18)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91fd0c454ba45908593fbf307fb9fe86d37374f4feb08ef0b4656906620c98e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "FlowLogsProps":
        return typing.cast("FlowLogsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "FlowLogsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83ce146ac9907a2fd2552e82090a394c0d246b436dee7d707f0b12e9589d6459)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e8644d5f67b26ce92ff3d8421382221d24e3cfc3f686d254f27ec870091bc42)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.FlowLogsProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "flow_log_id": "flowLogId",
        "flow_log_name": "flowLogName",
        "log_store_name": "logStoreName",
        "project_name": "projectName",
        "resource_id": "resourceId",
        "resource_type": "resourceType",
        "traffic_type": "trafficType",
    },
)
class FlowLogsProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_log_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_log_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_store_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        traffic_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``FlowLogs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs

        :param description: Property description: The description of the flow log.
        :param flow_log_id: Property flowLogId: The ID of a flow log.
        :param flow_log_name: Property flowLogName: The name of the flow log.
        :param log_store_name: Property logStoreName: A LogStore that stores captured traffic.
        :param project_name: Property projectName: Manage the captured traffic of the Project.
        :param resource_id: Property resourceId: The ID of the resource group to which the flow log belongs.
        :param resource_type: Property resourceType: The resource type of traffic to capture. Value: NetworkInterface: Elastic NIC. VSwitch: All ENIs within the VSwitch. VPC: All ENIs in a VPC.
        :param traffic_type: Property trafficType: The type of traffic collected. Value: All: All traffic. Allow: Traffic allowed by access control. Drop: Traffic denied by access control.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9a22509c00e4e40d4dd42147bbf30cdde0e9e0b066eb2e8f947425f497a604a)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument flow_log_id", value=flow_log_id, expected_type=type_hints["flow_log_id"])
            check_type(argname="argument flow_log_name", value=flow_log_name, expected_type=type_hints["flow_log_name"])
            check_type(argname="argument log_store_name", value=log_store_name, expected_type=type_hints["log_store_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument traffic_type", value=traffic_type, expected_type=type_hints["traffic_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if flow_log_id is not None:
            self._values["flow_log_id"] = flow_log_id
        if flow_log_name is not None:
            self._values["flow_log_name"] = flow_log_name
        if log_store_name is not None:
            self._values["log_store_name"] = log_store_name
        if project_name is not None:
            self._values["project_name"] = project_name
        if resource_id is not None:
            self._values["resource_id"] = resource_id
        if resource_type is not None:
            self._values["resource_type"] = resource_type
        if traffic_type is not None:
            self._values["traffic_type"] = traffic_type

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the flow log.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_log_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowLogId: The ID of a flow log.'''
        result = self._values.get("flow_log_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_log_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowLogName: The name of the flow log.'''
        result = self._values.get("flow_log_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_store_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logStoreName: A LogStore that stores captured traffic.'''
        result = self._values.get("log_store_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property projectName: Manage the captured traffic of the Project.'''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceId: The ID of the resource group to which the flow log belongs.'''
        result = self._values.get("resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceType: The resource type of traffic to capture.

        Value:
        NetworkInterface: Elastic NIC.
        VSwitch: All ENIs within the VSwitch.
        VPC: All ENIs in a VPC.
        '''
        result = self._values.get("resource_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def traffic_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property trafficType: The type of traffic collected.

        Value:
        All: All traffic.
        Allow: Traffic allowed by access control.
        Drop: Traffic denied by access control.
        '''
        result = self._values.get("traffic_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FlowLogsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class HaVip(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.HaVip",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::HaVip``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHaVip``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["HaVipProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e87496160bedb9bb64982a4f4dd9f30a692fc7f93bb3974b5f8d17dce7f4b21)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAssociatedEipAddresses")
    def attr_associated_eip_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AssociatedEipAddresses: EIP bound to HaVip.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAssociatedEipAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrAssociatedInstances")
    def attr_associated_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AssociatedInstances: An ECS instance that is bound to HaVip.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAssociatedInstances"))

    @builtins.property
    @jsii.member(jsii_name="attrAssociatedInstanceType")
    def attr_associated_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAssociatedInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the  resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Dependence of a HaVip instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrHaVipId")
    def attr_ha_vip_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HaVipId: The  ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHaVipId"))

    @builtins.property
    @jsii.member(jsii_name="attrHaVipName")
    def attr_ha_vip_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HaVipName: The name of the HaVip instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHaVipName"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpAddress: IP address of private network.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterInstanceId")
    def attr_master_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterInstanceId: The primary instance ID bound to HaVip.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The VPC ID to which the HaVip instance belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: The switch ID to which the HaVip instance belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e6e611f580bb71adaf331ac315201de5cd576c08e2b5b5dd3606745d3dec9a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37b33123ea3beefbbbfdedc69c2e6c3849050f955a4be03c5d637cf5da4dd1c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "HaVipProps":
        return typing.cast("HaVipProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "HaVipProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__658abd7818819ee829259a02aca6b9b9ce1c2e8d6ecddc0a8d2d4d9f39aa7709)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61e3de8c5cc870b25c76186a0d43d5dbad2350ef9157fd156257adfb4966fb18)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.HaVipProps",
    jsii_struct_bases=[],
    name_mapping={"ha_vip_id": "haVipId"},
)
class HaVipProps:
    def __init__(
        self,
        *,
        ha_vip_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``HaVip``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip

        :param ha_vip_id: Property haVipId: The ID of the resource.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3715e545e23477748d16e2eae32bf086984779623efeb952299f67a635f6494a)
            check_type(argname="argument ha_vip_id", value=ha_vip_id, expected_type=type_hints["ha_vip_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ha_vip_id": ha_vip_id,
        }

    @builtins.property
    def ha_vip_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property haVipId: The  ID of the resource.'''
        result = self._values.get("ha_vip_id")
        assert result is not None, "Required property 'ha_vip_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HaVipProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class HaVips(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.HaVips",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::HaVips``, which is used to query the high-availability virtual IP addresses (HAVIPs) in a specified region.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHaVips``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["HaVipsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2b227bc9a901f084fab9be49bd4937f47c00e700adb57c936c3c030598a4af8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHaVipIds")
    def attr_ha_vip_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HaVipIds: The list of ha vip IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHaVipIds"))

    @builtins.property
    @jsii.member(jsii_name="attrHaVips")
    def attr_ha_vips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HaVips: The list of ha vips.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHaVips"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__433a5c2192a9d6c9eab31373c00df78fefecda3de78bfe472b549c7437c3eb17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96b267819ff8dd2424c1799932089fa7835e83bf3723273720c6173958e5664b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "HaVipsProps":
        return typing.cast("HaVipsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "HaVipsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a5bf823cd9032f4537ba6f6e61abd4f1a0a92915c0b2d9ad6eaf4946e4f4ebb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2443f80841fb25d1d2b1f596c2dcfdb0742da5ce5cc7ed78feaa3c74bbdc5e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.HaVipsProps",
    jsii_struct_bases=[],
    name_mapping={"ha_vip_id": "haVipId"},
)
class HaVipsProps:
    def __init__(
        self,
        *,
        ha_vip_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``HaVips``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips

        :param ha_vip_id: Property haVipId: The ID of the resource.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df219e8460c848389a7b244c6ffe61421b1affc76e39fea9717da4deed762ac7)
            check_type(argname="argument ha_vip_id", value=ha_vip_id, expected_type=type_hints["ha_vip_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if ha_vip_id is not None:
            self._values["ha_vip_id"] = ha_vip_id

    @builtins.property
    def ha_vip_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property haVipId: The  ID of the resource.'''
        result = self._values.get("ha_vip_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HaVipsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Ipv4Gateway(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.Ipv4Gateway",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::Ipv4Gateway``, which is used to query the information about an IPv4 gateway.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosIpv4Gateway``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["Ipv4GatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95f36267c10a12a1c49431c06e96f1285e416442802a949342e688c4ab418bd4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEnabled")
    def attr_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Enabled: Enabled.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4GatewayDescription")
    def attr_ipv4_gateway_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ipv4GatewayDescription: Description information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4GatewayDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4GatewayId")
    def attr_ipv4_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4GatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4GatewayName")
    def attr_ipv4_gateway_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ipv4GatewayName: Resource name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4GatewayName"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4GatewayRouteTableId")
    def attr_ipv4_gateway_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4GatewayRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf991f3d0280e1baa53893a0be2c3deaa487e0be427099ea2f465ee69b916d02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbbb854f98d4786e7c061a2d00b1391f85d2443152f78addbbb2dbe9c101b9cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "Ipv4GatewayProps":
        return typing.cast("Ipv4GatewayProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "Ipv4GatewayProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c497c03a98dc9d36c8553b64d2a6ec280dc2921e6d94ba2fcf59493d1a457d4f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cae8cdf7ffd03bf3bf77022fde0723344681ca8cb73c297c0e54dc59091ee8ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.Ipv4GatewayProps",
    jsii_struct_bases=[],
    name_mapping={"ipv4_gateway_id": "ipv4GatewayId"},
)
class Ipv4GatewayProps:
    def __init__(
        self,
        *,
        ipv4_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Ipv4Gateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway

        :param ipv4_gateway_id: Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da37b926c500a2004c505a4bdb8e44ceba34972730642d576949b4dc3196ba76)
            check_type(argname="argument ipv4_gateway_id", value=ipv4_gateway_id, expected_type=type_hints["ipv4_gateway_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ipv4_gateway_id": ipv4_gateway_id,
        }

    @builtins.property
    def ipv4_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.'''
        result = self._values.get("ipv4_gateway_id")
        assert result is not None, "Required property 'ipv4_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Ipv4GatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Ipv4Gateways(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.Ipv4Gateways",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::Ipv4Gateways``, which is used to query the details of IPv4 gateways.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosIpv4Gateways``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["Ipv4GatewaysProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99a8d9b6a5f959b90ad445d976f85775102b074026815061e62d5b62ccd367b4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrIpv4GatewayIds")
    def attr_ipv4_gateway_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4GatewayIds"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4Gateways")
    def attr_ipv4_gateways(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ipv4Gateways: The list of ipv4 gateways.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4Gateways"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e958277ca8b573325e08f3fbcf163e4c6e9b3bd23ecd5d880cf77f1b00c39292)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5fafe18a73cba1c9bfad6bd88de5e44b344b98d5caf3030a3369ede2c38165f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "Ipv4GatewaysProps":
        return typing.cast("Ipv4GatewaysProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "Ipv4GatewaysProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce0aae95550d02171f2f183fabef41ccaf327b40b425dd983c00c17449a61faa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffc72645f61bd105dd722f96772c3ca1e22a1e5d0798a495101a971e2e042f2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.Ipv4GatewaysProps",
    jsii_struct_bases=[],
    name_mapping={
        "ipv4_gateway_id": "ipv4GatewayId",
        "ipv4_gateway_name": "ipv4GatewayName",
        "vpc_id": "vpcId",
    },
)
class Ipv4GatewaysProps:
    def __init__(
        self,
        *,
        ipv4_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv4_gateway_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Ipv4Gateways``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways

        :param ipv4_gateway_id: Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
        :param ipv4_gateway_name: Property ipv4GatewayName: Resource name.
        :param vpc_id: Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02bf863e04564ce499fe3fd172a92f23b24fa008cee2c34f1e1fdd861c8a6ed2)
            check_type(argname="argument ipv4_gateway_id", value=ipv4_gateway_id, expected_type=type_hints["ipv4_gateway_id"])
            check_type(argname="argument ipv4_gateway_name", value=ipv4_gateway_name, expected_type=type_hints["ipv4_gateway_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if ipv4_gateway_id is not None:
            self._values["ipv4_gateway_id"] = ipv4_gateway_id
        if ipv4_gateway_name is not None:
            self._values["ipv4_gateway_name"] = ipv4_gateway_name
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def ipv4_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.'''
        result = self._values.get("ipv4_gateway_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv4_gateway_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipv4GatewayName: Resource name.'''
        result = self._values.get("ipv4_gateway_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the VPC associated with the IPv4 Gateway.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Ipv4GatewaysProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NatGatewayZones(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.NatGatewayZones",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::NatGatewayZones``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNatGatewayZones``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["NatGatewayZonesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16924f5d3d86ad012041a5f5f1f8b757a9e967de893b5e7556bab9eaa7a6ea69)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneIds: The list of The Zone Ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88400bbde5b5609dd35af8a40fa63ed97fdbb4c2c1b796a364006e6e56233fc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f5d3b46bc174a642ccaae657d497842e9fa4baa24ec48c8922480c491bd1abd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "NatGatewayZonesProps":
        return typing.cast("NatGatewayZonesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "NatGatewayZonesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50b64a39579f854a4fa5428e78646e8c8eba49d4012c4fe023fe9a1eff8f8de5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de2e6c88ae3fcced07bf3af057ab27b8f498ba8955a3d60f23311eef76110057)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.NatGatewayZonesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class NatGatewayZonesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``NatGatewayZones``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
        '''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NatGatewayZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NatGateways(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.NatGateways",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::NatGateways``, which is used to query NAT gateways.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNatGateways``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["NatGatewaysProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18d66ede8ae6b4969648ac5ba0823867ad03e07471e1604d8893958df9313c3f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNatGatewayIds")
    def attr_nat_gateway_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NatGatewayIds: The list of The nat gateway ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNatGatewayIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNatGateways")
    def attr_nat_gateways(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NatGateways: The list of The nat gateways.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNatGateways"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3b0ccb66d0f146d74d84539c40138190eab60f2c9ff09af15104ccc068585f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d5a77f2075c0ccae45b9c4ff3d982596345977e59695c3f167854e8e317abc9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "NatGatewaysProps":
        return typing.cast("NatGatewaysProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "NatGatewaysProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d43dd4d3734b9291aba59c573cd4e6ca8aba3da509901227adb06a4c75af3863)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__547c0fd9b14eb9cd1d487b2af4d2c76f061b406f8f53c11bdc74a773c292da69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.NatGatewaysProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_charge_type": "instanceChargeType",
        "name": "name",
        "nat_gateway_id": "natGatewayId",
        "nat_type": "natType",
        "network_type": "networkType",
        "resource_group_id": "resourceGroupId",
        "status": "status",
        "vpc_id": "vpcId",
        "zone_id": "zoneId",
    },
)
class NatGatewaysProps:
    def __init__(
        self,
        *,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nat_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``NatGateways``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways

        :param instance_charge_type: Property instanceChargeType: The billing method of the NAT gateway. Set the value to PostPaid, which specifies the pay-as-you-go billing method.
        :param name: Property name: The name of the NAT gateway.
        :param nat_gateway_id: Property natGatewayId: The ID of the NAT gateway.
        :param nat_type: Property natType: The type of NAT gateway. Set the value to Enhanced (enhanced NAT gateway).
        :param network_type: Property networkType: The type of the NAT gateway. Valid values: internet: an Internet NAT gateway intranet: a VPC NAT gateway
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
        :param status: Property status: The status of the NAT gateway. Valid values: Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed. Available: The NAT gateway remains in a stable state after the NAT gateway is created. Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed. Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed. Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
        :param vpc_id: Property vpcId: The ID of the VPC to which the NAT gateway belongs.
        :param zone_id: Property zoneId: The ID of the zone to which the NAT gateway belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__919da8f47e6d25c0c6a17564bc8c21fee43e7aa2dae3402ac31cca166fcfcd83)
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument nat_gateway_id", value=nat_gateway_id, expected_type=type_hints["nat_gateway_id"])
            check_type(argname="argument nat_type", value=nat_type, expected_type=type_hints["nat_type"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if name is not None:
            self._values["name"] = name
        if nat_gateway_id is not None:
            self._values["nat_gateway_id"] = nat_gateway_id
        if nat_type is not None:
            self._values["nat_type"] = nat_type
        if network_type is not None:
            self._values["network_type"] = network_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if status is not None:
            self._values["status"] = status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: The billing method of the NAT gateway.

        Set the value to PostPaid, which specifies the pay-as-you-go billing method.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the NAT gateway.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nat_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property natGatewayId: The ID of the NAT gateway.'''
        result = self._values.get("nat_gateway_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property natType: The type of NAT gateway.

        Set the value to Enhanced (enhanced NAT gateway).
        '''
        result = self._values.get("nat_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkType: The type of the NAT gateway.

        Valid values:
        internet: an Internet NAT gateway
        intranet: a VPC NAT gateway
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the NAT gateway.

        Valid values:
        Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
        Available: The NAT gateway remains in a stable state after the NAT gateway is created.
        Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
        Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
        Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the VPC to which the NAT gateway belongs.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone to which the NAT gateway belongs.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NatGatewaysProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NatIpCidrs(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.NatIpCidrs",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::NatIpCidrs``, which is used to query the CIDR blocks of a NAT gateway.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNatIpCidrs``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NatIpCidrsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__217f11457636b5a8c5d82e30f4cfe4dfda37234df3395ea03569aaf70fcebab8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNatIpCidrIds")
    def attr_nat_ip_cidr_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NatIpCidrIds: The list of nat ip cidr IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNatIpCidrIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNatIpCidrs")
    def attr_nat_ip_cidrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NatIpCidrs: The list of nat ip cidrs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNatIpCidrs"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3725be746919a656d835ca8f2816a179e427b0d7f1b6d055de4e56d3a0ec83d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c6cc61ac013070c42b71c7f82475b7f4bb34f775d4c66fb0bd4af53fa61582d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "NatIpCidrsProps":
        return typing.cast("NatIpCidrsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "NatIpCidrsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a52da54497c360cdc431a1b56c303eb308c7c60d1bf7e145bd5cd2bd0109552f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9b478d9fc0e1a2815dc5efe9e9196fe0381e25b377c7b883ca728761a13682c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.NatIpCidrsProps",
    jsii_struct_bases=[],
    name_mapping={"nat_gateway_id": "natGatewayId", "nat_ip_cidr": "natIpCidr"},
)
class NatIpCidrsProps:
    def __init__(
        self,
        *,
        nat_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        nat_ip_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``NatIpCidrs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs

        :param nat_gateway_id: Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
        :param nat_ip_cidr: Property natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d61563f51a319679dfc278eaad11e9bf9e8b050bd50e7ee4e4896ee66db9fc98)
            check_type(argname="argument nat_gateway_id", value=nat_gateway_id, expected_type=type_hints["nat_gateway_id"])
            check_type(argname="argument nat_ip_cidr", value=nat_ip_cidr, expected_type=type_hints["nat_ip_cidr"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "nat_gateway_id": nat_gateway_id,
        }
        if nat_ip_cidr is not None:
            self._values["nat_ip_cidr"] = nat_ip_cidr

    @builtins.property
    def nat_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.'''
        result = self._values.get("nat_gateway_id")
        assert result is not None, "Required property 'nat_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def nat_ip_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property natIpCidr: Create a NAT IP ADDRESS.

        The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
        '''
        result = self._values.get("nat_ip_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NatIpCidrsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NetworkAcls(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.NetworkAcls",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::NetworkAcls``, which is used to query created network access control lists (ACLs).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNetworkAcls``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["NetworkAclsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c25d809b2d8a44e4c79dbc0866c6b646af05cd0c2f63a08adb45f549cd9329f5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAclIds")
    def attr_network_acl_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NetworkAclIds: The list of The network acl ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkAclIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAcls")
    def attr_network_acls(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NetworkAcls: The list of The network acls.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkAcls"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6fc79cff727f8222454efeafa2a50dc28d33f167791c0c89582a11c66eb9727)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1231422d9bdeabde39df2530ccfca3e9902321ce0805b53653fd67221bd9bff8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "NetworkAclsProps":
        return typing.cast("NetworkAclsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "NetworkAclsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72ca3c6badf97f446f25e85d916c60e9378a6be9a8d634e8213d034761a8f6e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9d9429da6a1023bea1907b16a55ce1b3c6758b8c70bb8cd4d3b0534aa1e0720)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.NetworkAclsProps",
    jsii_struct_bases=[],
    name_mapping={
        "network_acl_id": "networkAclId",
        "network_acl_name": "networkAclName",
        "resource_id": "resourceId",
        "resource_type": "resourceType",
        "vpc_id": "vpcId",
    },
)
class NetworkAclsProps:
    def __init__(
        self,
        *,
        network_acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``NetworkAcls``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls

        :param network_acl_id: Property networkAclId: The ID of the network ACL.
        :param network_acl_name: Property networkAclName: The name of the network ACL. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
        :param resource_id: Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
        :param resource_type: Property resourceType: The type of the associated instance. Set the value to VSwitch. This parameter is valid only if ResourceType and ResourceId are both set.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78f8cc010e949310a2d003232ac7ebba9fe7844e939ac7c27b788bab07b3e9cf)
            check_type(argname="argument network_acl_id", value=network_acl_id, expected_type=type_hints["network_acl_id"])
            check_type(argname="argument network_acl_name", value=network_acl_name, expected_type=type_hints["network_acl_name"])
            check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if network_acl_id is not None:
            self._values["network_acl_id"] = network_acl_id
        if network_acl_name is not None:
            self._values["network_acl_name"] = network_acl_name
        if resource_id is not None:
            self._values["resource_id"] = resource_id
        if resource_type is not None:
            self._values["resource_type"] = resource_type
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def network_acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkAclId: The ID of the network ACL.'''
        result = self._values.get("network_acl_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkAclName: The name of the network ACL.

        The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("network_acl_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.'''
        result = self._values.get("resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceType: The type of the associated instance.

        Set the value to VSwitch.
        This parameter is valid only if ResourceType and ResourceId are both set.
        '''
        result = self._values.get("resource_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NetworkAclsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PrefixList(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.PrefixList",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::PrefixList``, which is used to query the information about a prefix list.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPrefixList``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PrefixListProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df8840a660eb8ef5b6cd672b0fb7bb5ee7ead65d553aa319accf0013731ce1aa)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The time when the prefix list was created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEntries")
    def attr_entries(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Entries: The CIDR address block list of the prefix list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrIpVersion")
    def attr_ip_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpVersion: The IP version of the prefix list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxEntries")
    def attr_max_entries(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrefixListDescription")
    def attr_prefix_list_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrefixListDescription: The description of the prefix list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrefixListDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrPrefixListId")
    def attr_prefix_list_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrefixListId: The ID of the query Prefix List.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrefixListId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrefixListName")
    def attr_prefix_list_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrefixListName: The name of the prefix list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrefixListName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ShareType: The share type of the prefix list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: The tags of PrefixList.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bef9e8a53ebdc107d86d4ad87d09ffa2bb4eacc177a2df4989a1523c430fa8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecd2337a2d7c5cde78cd97725d296b0559dd8c4324f90a222573d0b17c154150)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PrefixListProps":
        return typing.cast("PrefixListProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PrefixListProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__883020f0dc3681f7c1fb45d4e847ef69cf142976353fb630b30242de344adbd3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ffd1455ddc6ad310336efb04ea8fabb1eaf8803cb1cfb0542cc2a5cf3e64f05)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.PrefixListProps",
    jsii_struct_bases=[],
    name_mapping={"prefix_list_id": "prefixListId"},
)
class PrefixListProps:
    def __init__(
        self,
        *,
        prefix_list_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``PrefixList``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist

        :param prefix_list_id: Property prefixListId: The ID of the query Prefix List.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d490c417cf8acfdf967f4276992760ab240ee6e14a48ca326f9ce292d663ece)
            check_type(argname="argument prefix_list_id", value=prefix_list_id, expected_type=type_hints["prefix_list_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "prefix_list_id": prefix_list_id,
        }

    @builtins.property
    def prefix_list_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property prefixListId: The ID of the query Prefix List.'''
        result = self._values.get("prefix_list_id")
        assert result is not None, "Required property 'prefix_list_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrefixListProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PrefixLists(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.PrefixLists",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::PrefixLists``, which is used to query the details of prefix lists.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPrefixLists``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["PrefixListsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa75282a16ad708dcf67bc5a0bdbc9d84fe1dbf2a7f6024420560655708a9b4d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPrefixListIds")
    def attr_prefix_list_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrefixListIds: The list of prefix list IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrefixListIds"))

    @builtins.property
    @jsii.member(jsii_name="attrPrefixLists")
    def attr_prefix_lists(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrefixLists: The list of prefix lists.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrefixLists"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a7000212cf42b6a53c8089c04131959cf80bb9d4b1c4860fb5f6b0dd9080a3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__966479cc9c8503ff6bef3d84c801bfb37d62c9cea93f0ee9b6275e462b630236)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PrefixListsProps":
        return typing.cast("PrefixListsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PrefixListsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8136b887d1ae71e2bd47f7f5123aa796a0b0a693428285a2e7aa8a779d110181)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ad4fb61ffbd440c3600028d786db56c587c4e9cb0be3791f4037f2b82ee08b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.PrefixListsProps",
    jsii_struct_bases=[],
    name_mapping={
        "prefix_list_name": "prefixListName",
        "resource_group_id": "resourceGroupId",
    },
)
class PrefixListsProps:
    def __init__(
        self,
        *,
        prefix_list_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PrefixLists``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists

        :param prefix_list_name: Property prefixListName: The name of the prefix list.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the VPC belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fa763533ead71ced1c93b820c8f5372f67cf2db7c8ae139f4f41c407e9387a8)
            check_type(argname="argument prefix_list_name", value=prefix_list_name, expected_type=type_hints["prefix_list_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if prefix_list_name is not None:
            self._values["prefix_list_name"] = prefix_list_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def prefix_list_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property prefixListName: The name of the prefix list.'''
        result = self._values.get("prefix_list_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the VPC belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrefixListsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PublicIpAddressPool(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPool",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::PublicIpAddressPool``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPublicIpAddressPool``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PublicIpAddressPoolProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76a4292e1e96493de8dbad3822e2b5b8c4a453dd09fd5a3f8f58a343dbdc1949)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Description.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddressRemaining")
    def attr_ip_address_remaining(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpAddressRemaining: Whether there is a free IP address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddressRemaining"))

    @builtins.property
    @jsii.member(jsii_name="attrIsp")
    def attr_isp(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Isp: Service providers.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsp"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddressPoolId")
    def attr_public_ip_address_pool_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicIpAddressPoolId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddressPoolId"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddressPoolName")
    def attr_public_ip_address_pool_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicIpAddressPoolName: The name of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddressPoolName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: The tags of PrefixList.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTotalIpNum")
    def attr_total_ip_num(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TotalIpNum: Total ip number of PublicIpAddressPool.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTotalIpNum"))

    @builtins.property
    @jsii.member(jsii_name="attrUsedIpNum")
    def attr_used_ip_num(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UsedIpNum: Used ip number of PublicIpAddressPool.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsedIpNum"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7fa41b9968f2ded06d669747086a994c5aec807de4be14ff26fb164fdecee170)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5475ff6b08cd9974774bc2cb0fff36c057a2549e07ec076d5e1755e3e7ee5f81)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PublicIpAddressPoolProps":
        return typing.cast("PublicIpAddressPoolProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PublicIpAddressPoolProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d73f969c1c8a508dcff6fa448d0a5b9d1f08724f946309022e6495105791035d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d86162cd15fa2488ebaef54da307db43eb7d509ba8361378cbfb67209e114181)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPoolProps",
    jsii_struct_bases=[],
    name_mapping={"public_ip_address_pool_id": "publicIpAddressPoolId"},
)
class PublicIpAddressPoolProps:
    def __init__(
        self,
        *,
        public_ip_address_pool_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``PublicIpAddressPool``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool

        :param public_ip_address_pool_id: Property publicIpAddressPoolId: The first ID of the resource.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e02c77c1001d7d2d995b945b30139af8d0dc27e8fbe23b8a6e96ffca6325a52f)
            check_type(argname="argument public_ip_address_pool_id", value=public_ip_address_pool_id, expected_type=type_hints["public_ip_address_pool_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "public_ip_address_pool_id": public_ip_address_pool_id,
        }

    @builtins.property
    def public_ip_address_pool_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property publicIpAddressPoolId: The first ID of the resource.'''
        result = self._values.get("public_ip_address_pool_id")
        assert result is not None, "Required property 'public_ip_address_pool_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PublicIpAddressPoolProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PublicIpAddressPools(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPools",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::PublicIpAddressPools``, which is used to query available IP address pools.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPublicIpAddressPools``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["PublicIpAddressPoolsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfd48fa21ebf5ad8e112ea281d76e3c36d00a1a2437de29468b287c477004e38)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddressPoolIds")
    def attr_public_ip_address_pool_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicIpAddressPoolIds: The list of public ip address pool IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddressPoolIds"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddressPools")
    def attr_public_ip_address_pools(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicIpAddressPools: The list of public ip address pools.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddressPools"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f36aa659a14317d368f3fa921b0cae82316cd5847e54aef39a547ea8952bf7e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f96347fbe0710024de0d04220142a0e3bf32b56594e18f9741ef28f76d1c37b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PublicIpAddressPoolsProps":
        return typing.cast("PublicIpAddressPoolsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PublicIpAddressPoolsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75c47d42386597e8ffce72fd3f3114f487b5a80c4c42a11ab63179aa9ef9c8ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cbdc65ac49c8a84105234f719fc16e6518a8a363a7a1984ff078c4f805e988a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPoolsProps",
    jsii_struct_bases=[],
    name_mapping={
        "isp": "isp",
        "public_ip_address_pool_name": "publicIpAddressPoolName",
        "resource_group_id": "resourceGroupId",
    },
)
class PublicIpAddressPoolsProps:
    def __init__(
        self,
        *,
        isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        public_ip_address_pool_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PublicIpAddressPools``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools

        :param isp: Property isp: The line type. Valid values: BGP (default): BGP (Multi-ISP) lines BGP_PRO: BGP (Multi-ISP) Pro lines For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types. If you are allowed to use single-ISP bandwidth, you can also choose one of the following values: ChinaTelecom: China Telecom ChinaUnicom: China Unicom ChinaMobile: China Mobile ChinaTelecom_L2: China Telecom L2 ChinaUnicom_L2: China Unicom L2 ChinaMobile_L2: China Mobile L2 If your services are deployed in China East 1 Finance, this parameter is required and you must set the value to BGP_FinanceCloud.
        :param public_ip_address_pool_name: Property publicIpAddressPoolName: The name of the IP address pool. This parameter is optional. The name must be 1 to 128 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26bdb10886e58c45e8f1762590e0f795820766462714267648418597480086de)
            check_type(argname="argument isp", value=isp, expected_type=type_hints["isp"])
            check_type(argname="argument public_ip_address_pool_name", value=public_ip_address_pool_name, expected_type=type_hints["public_ip_address_pool_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if isp is not None:
            self._values["isp"] = isp
        if public_ip_address_pool_name is not None:
            self._values["public_ip_address_pool_name"] = public_ip_address_pool_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isp: The line type.

        Valid values:
        BGP (default): BGP (Multi-ISP) lines
        BGP_PRO: BGP (Multi-ISP) Pro lines
        For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
        If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
        ChinaTelecom: China Telecom
        ChinaUnicom: China Unicom
        ChinaMobile: China Mobile
        ChinaTelecom_L2: China Telecom L2
        ChinaUnicom_L2: China Unicom L2
        ChinaMobile_L2: China Mobile L2
        If your services are deployed in China East 1 Finance,
        this parameter is required and you must set the value to BGP_FinanceCloud.
        '''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def public_ip_address_pool_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property publicIpAddressPoolName: The name of the IP address pool.

        This parameter is optional. The name must be 1 to 128 characters in length,
        and can contain digits, periods (.), underscores (_), and hyphens (-).
        The name must start with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("public_ip_address_pool_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PublicIpAddressPoolsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAddress(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosAddress",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::EIP::Address``, which is used to query the information about a created elastic IP address (EIP).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Address`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAddressProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7d9e76b53ae8df636d048a98e17afb1cf2e3fdd20c9c08c5f5cb2d35b0248af)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8772a1f0d8267a0df152b5cf1ad850ac68bd6d3f2bb7c21a0ae0bb6a2dfdb9fd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressName")
    def attr_address_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressName: The name of the EIP.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressName"))

    @builtins.property
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AllocationId: The ID of the EIP instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllocationId"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: The peak bandwidth of the EIP. Unit: Mbps.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageBandwidth")
    def attr_bandwidth_package_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP. The unit is Mbps.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthPackageId: The ID of the added shared bandwidth.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageType")
    def attr_bandwidth_package_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthPackageType: The type of bandwidth. Only **CommonBandwidthPackage** (shared bandwidth) is supported.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageType"))

    @builtins.property
    @jsii.member(jsii_name="attrBusinessStatus")
    def attr_business_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BusinessStatus: The business status of the EIP instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBusinessStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the EIP was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDeletionProtection")
    def attr_deletion_protection(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeletionProtection: Whether the delete protection function is turned on.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeletionProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the EIP instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEipBandwidth")
    def attr_eip_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEipBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiredTime")
    def attr_expired_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHasReservationData")
    def attr_has_reservation_data(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HasReservationData: Whether there is renewal data.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHasReservationData"))

    @builtins.property
    @jsii.member(jsii_name="attrHdMonitorStatus")
    def attr_hd_monitor_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHdMonitorStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the current bound instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceRegionId")
    def attr_instance_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceRegionId: The region ID of the currently bound resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceType: The type of the current bound instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpAddress: The IP address of the EIP.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIsp")
    def attr_isp(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Isp: Service providers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsp"))

    @builtins.property
    @jsii.member(jsii_name="attrNetmode")
    def attr_netmode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Netmode: Network type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetmode"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationLocks")
    def attr_operation_locks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OperationLocks: Lock details.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationLocks"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The billing method of the EIP.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddressPoolId")
    def attr_public_ip_address_pool_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddressPoolId"))

    @builtins.property
    @jsii.member(jsii_name="attrReservationActiveTime")
    def attr_reservation_active_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReservationActiveTime"))

    @builtins.property
    @jsii.member(jsii_name="attrReservationBandwidth")
    def attr_reservation_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReservationBandwidth: Renewal bandwidth, in Mbps.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReservationBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrReservationInternetChargeType")
    def attr_reservation_internet_charge_type(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReservationInternetChargeType: Renewal Payment type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReservationInternetChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrReservationOrderType")
    def attr_reservation_order_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReservationOrderType: Renewal order type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReservationOrderType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondLimited")
    def attr_second_limited(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecondLimited: Whether a secondary speed limit is configured.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecondLimited"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityProtectionTypes")
    def attr_security_protection_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityProtectionTypes: Security protection level.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityProtectionTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrSegmentInstanceId")
    def attr_segment_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SegmentInstanceId: The ID of the consecutive EIPs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSegmentInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceManaged")
    def attr_service_managed(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceManaged: Indicates the resource created for the service account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceManaged"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tag of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="allocationId")
    def allocation_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: allocationId: The ID of the EIP instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "allocationId"))

    @allocation_id.setter
    def allocation_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71adcd317b6b0d7b891c306f034afec9ca7c413c59d789166793e18bea36cc75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allocationId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c1ad31d4a2eb896fc65fed8005fe8b13f362e71a835e4c8e32cf1f7ad5633b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosAddressProps",
    jsii_struct_bases=[],
    name_mapping={"allocation_id": "allocationId"},
)
class RosAddressProps:
    def __init__(
        self,
        *,
        allocation_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosAddress``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address

        :param allocation_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4163ed11cc5ab6301903b3eca5cdc464b9c4498af406ad6a01a20866e5452eeb)
            check_type(argname="argument allocation_id", value=allocation_id, expected_type=type_hints["allocation_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "allocation_id": allocation_id,
        }

    @builtins.property
    def allocation_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: allocationId: The ID of the EIP instance.
        '''
        result = self._values.get("allocation_id")
        assert result is not None, "Required property 'allocation_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAddressProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAddresses(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosAddresses",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::EIP::Addresses``, which is used to query the information about elastic IP addresses (EIPs).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Addresses`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAddressesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__051594fa0ef0c8ab9cc6c059c68ee0b6385c304711a0bdb856738865c9d1019e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6898c255e273bde2e508b3197b417b7913721571cc52e0234d78fd262eff3b47)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddresses")
    def attr_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Addresses: The details about the EIP
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrAllocationIds")
    def attr_allocation_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AllocationIds: The list of allocation IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllocationIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e71e49af8193ebcbc88fae33dbfeb253828d597b66d4afe73aa768700c6c0c35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="addressName")
    def address_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressName: The name of the EIP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressName"))

    @address_name.setter
    def address_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__deb1ee1d9be52820ae0fd24b1c06991c6505bb518c6035276574c9c335f745bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressName", value)

    @builtins.property
    @jsii.member(jsii_name="allocationId")
    def allocation_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allocationId: The ID of the EIP that you want to query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allocationId"))

    @allocation_id.setter
    def allocation_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99f711a8c85faaf7fd0773cc12eebc9e8df60838d0135decc823a151b08177a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allocationId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the cloud resource.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2f283cd70db1aa0f1330b15716cc3581481e4d91e989ee41f19b94338ba180a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The type of the current bound instance.

        - **EcsInstance**: an ECS instance of the VPC type.
        - **SlbInstance**: an SLB instance of the VPC type.
        - **Nat**:NAT gateway.
        - **HaVip**: a highly available virtual IP address.
        - **NetworkInterface**: Secondary ENI.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2dc1eb2b5328b1d8e2571f08cbef2b5ee44a02f0e2375d2353409417cbef2bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="ipAddress")
    def ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipAddress: The IP address pool to which the EIP that you want to query belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipAddress"))

    @ip_address.setter
    def ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__271a2e2f64a440856d810efe717499999574eeec02daaa420db7dd9e6f466be4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipAddress", value)

    @builtins.property
    @jsii.member(jsii_name="isp")
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isp: The line type. Valid values:
        BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
        BGP_PRO: BGP (Multi-ISP) Pro lines.
        Only the following regions support BGP (Multi-ISP) Pro lines:
        China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
        For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
        If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
        ChinaTelecom: China Telecom
        ChinaUnicom: China Unicom
        ChinaMobile: China Mobile
        ChinaTelecom_L2: China Telecom L2
        ChinaUnicom_L2: China Unicom L2
        ChinaMobile_L2: China Mobile L2
        If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isp"))

    @isp.setter
    def isp(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95e24cf98cdad728d90f1df4d773cc0a3d64f5f8f01c65baec1e7cba0f20eea9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isp", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: The billing method of the EIP. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__772a9ff92d97d789115b16656601cdd566c12df96d069401c1b75d4357c4af78)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the EIPs belong.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__848cf7499c482c703ca0ee89ee1ab0128e67845f0c19a46019e64a83f7538151)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="segmentInstanceId")
    def segment_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        segmentInstanceId: The ID of the consecutive EIPs.
        This parameter value is returned only if the EIP is a continuous EIP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "segmentInstanceId"))

    @segment_instance_id.setter
    def segment_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce42e46c682e687c6f08e34c0540201b160f94b597fa651be7de67bba2119111)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "segmentInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosAddressesProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_name": "addressName",
        "allocation_id": "allocationId",
        "instance_id": "instanceId",
        "instance_type": "instanceType",
        "ip_address": "ipAddress",
        "isp": "isp",
        "payment_type": "paymentType",
        "resource_group_id": "resourceGroupId",
        "segment_instance_id": "segmentInstanceId",
    },
)
class RosAddressesProps:
    def __init__(
        self,
        *,
        address_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        allocation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        segment_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAddresses``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses

        :param address_name: 
        :param allocation_id: 
        :param instance_id: 
        :param instance_type: 
        :param ip_address: 
        :param isp: 
        :param payment_type: 
        :param resource_group_id: 
        :param segment_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27eb43042cd7900abc2b62c681c41957fcd17eee1e1bafe49f57a1c1e4a46324)
            check_type(argname="argument address_name", value=address_name, expected_type=type_hints["address_name"])
            check_type(argname="argument allocation_id", value=allocation_id, expected_type=type_hints["allocation_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument ip_address", value=ip_address, expected_type=type_hints["ip_address"])
            check_type(argname="argument isp", value=isp, expected_type=type_hints["isp"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument segment_instance_id", value=segment_instance_id, expected_type=type_hints["segment_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_name is not None:
            self._values["address_name"] = address_name
        if allocation_id is not None:
            self._values["allocation_id"] = allocation_id
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if ip_address is not None:
            self._values["ip_address"] = ip_address
        if isp is not None:
            self._values["isp"] = isp
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if segment_instance_id is not None:
            self._values["segment_instance_id"] = segment_instance_id

    @builtins.property
    def address_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressName: The name of the EIP.
        '''
        result = self._values.get("address_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def allocation_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allocationId: The ID of the EIP that you want to query.
        '''
        result = self._values.get("allocation_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the cloud resource.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceType: The type of the current bound instance.

        - **EcsInstance**: an ECS instance of the VPC type.
        - **SlbInstance**: an SLB instance of the VPC type.
        - **Nat**:NAT gateway.
        - **HaVip**: a highly available virtual IP address.
        - **NetworkInterface**: Secondary ENI.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipAddress: The IP address pool to which the EIP that you want to query belongs.
        '''
        result = self._values.get("ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isp: The line type. Valid values:
        BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
        BGP_PRO: BGP (Multi-ISP) Pro lines.
        Only the following regions support BGP (Multi-ISP) Pro lines:
        China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
        For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
        If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
        ChinaTelecom: China Telecom
        ChinaUnicom: China Unicom
        ChinaMobile: China Mobile
        ChinaTelecom_L2: China Telecom L2
        ChinaUnicom_L2: China Unicom L2
        ChinaMobile_L2: China Mobile L2
        If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
        '''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: The billing method of the EIP. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the EIPs belong.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def segment_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        segmentInstanceId: The ID of the consecutive EIPs.
        This parameter value is returned only if the EIP is a continuous EIP.
        '''
        result = self._values.get("segment_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAddressesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCommonBandwidthPackages(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosCommonBandwidthPackages",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::CommonBandwidthPackages``, which is used to query the elastic IP address (EIP) bandwidth plans in a specified region.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CommonBandwidthPackages`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCommonBandwidthPackagesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__facfdddbbdb438733b4fff75f12a6550c58e38a1885e3ea5358cdf0cfdb3a2f4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e63b6610851321beac692220bfa68d09a48513377b4387446b44e039db069288)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCommonBandwidthPackageIds")
    def attr_common_bandwidth_package_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CommonBandwidthPackageIds: The list of common bandwidth package IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommonBandwidthPackageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCommonBandwidthPackages")
    def attr_common_bandwidth_packages(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CommonBandwidthPackages: The list of common bandwidth packages.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCommonBandwidthPackages"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__a2f5e3d4799322a1ed874fa6af976b51e1c757f930cbf792f2f041b2bcd9ba6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="commonBandwidthPackageId")
    def common_bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commonBandwidthPackageId: The ID of the Internet shared bandwidth.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "commonBandwidthPackageId"))

    @common_bandwidth_package_id.setter
    def common_bandwidth_package_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68cdeef7e84f528b8d0db9582b3094e3da95c602a56870ecabd4bc2b19f518f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commonBandwidthPackageId", value)

    @builtins.property
    @jsii.member(jsii_name="commonBandwidthPackageName")
    def common_bandwidth_package_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "commonBandwidthPackageName"))

    @common_bandwidth_package_name.setter
    def common_bandwidth_package_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdd5d907e4f99adf5cb9676e663a12a2d13a9650b53a75deeb7324434c947728)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commonBandwidthPackageName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__c8fd7fb2a2f885afc51dcbd05f2426339f282f02369dad481f5ffa6f08effad1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosCommonBandwidthPackagesProps",
    jsii_struct_bases=[],
    name_mapping={
        "common_bandwidth_package_id": "commonBandwidthPackageId",
        "common_bandwidth_package_name": "commonBandwidthPackageName",
        "resource_group_id": "resourceGroupId",
    },
)
class RosCommonBandwidthPackagesProps:
    def __init__(
        self,
        *,
        common_bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        common_bandwidth_package_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCommonBandwidthPackages``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages

        :param common_bandwidth_package_id: 
        :param common_bandwidth_package_name: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07624ca44d0b2f2df490a21419bf22cc32efa4ab7ab6625d6fad50cfdfe9dda7)
            check_type(argname="argument common_bandwidth_package_id", value=common_bandwidth_package_id, expected_type=type_hints["common_bandwidth_package_id"])
            check_type(argname="argument common_bandwidth_package_name", value=common_bandwidth_package_name, expected_type=type_hints["common_bandwidth_package_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if common_bandwidth_package_id is not None:
            self._values["common_bandwidth_package_id"] = common_bandwidth_package_id
        if common_bandwidth_package_name is not None:
            self._values["common_bandwidth_package_name"] = common_bandwidth_package_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def common_bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commonBandwidthPackageId: The ID of the Internet shared bandwidth.
        '''
        result = self._values.get("common_bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def common_bandwidth_package_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
        '''
        result = self._values.get("common_bandwidth_package_name")
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
        return "RosCommonBandwidthPackagesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomerGateway(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosCustomerGateway",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::CustomerGateway``, which is used to query the information about a customer gateway.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CustomerGateway`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCustomerGatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea96db29a735025e5c1f563906f3ea7aae486853a2c69fa566f4363d081963ca)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4a97e3e7dd0aeab33608d3a1b3a0b83b1d2add3b31e993f6746b661823ddf089)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAsn")
    def attr_asn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Asn: Asn.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAsn"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthKey")
    def attr_auth_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthKey: The authentication key of the local data center gateway device BGP routing protocol.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthKey"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the customer gateway was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomerGatewayId")
    def attr_customer_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CustomerGatewayId: The ID of the customer gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomerGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomerGatewayName")
    def attr_customer_gateway_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CustomerGatewayName: The name of the customer gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomerGatewayName"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the customer gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpAddress: The IP address of the customer gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="customerGatewayId")
    def customer_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: customerGatewayId: The ID of the customer gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "customerGatewayId"))

    @customer_gateway_id.setter
    def customer_gateway_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__604b74c18e95cb50742f1777906dbe27ea7822979ce7dca926008c50fcc1df47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customerGatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a620cb0709c43ec80f0adef19b3636d7323b0065ba798370a47746d0d8bf728)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosCustomerGatewayProps",
    jsii_struct_bases=[],
    name_mapping={"customer_gateway_id": "customerGatewayId"},
)
class RosCustomerGatewayProps:
    def __init__(
        self,
        *,
        customer_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosCustomerGateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateway

        :param customer_gateway_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96fe90d04de211e2905d3b8173129627e3f32daa277459e559c367974c50e6d9)
            check_type(argname="argument customer_gateway_id", value=customer_gateway_id, expected_type=type_hints["customer_gateway_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "customer_gateway_id": customer_gateway_id,
        }

    @builtins.property
    def customer_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: customerGatewayId: The ID of the customer gateway.
        '''
        result = self._values.get("customer_gateway_id")
        assert result is not None, "Required property 'customer_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomerGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomerGateways(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosCustomerGateways",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::CustomerGateways``, which is used to query customer gateways.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CustomerGateways`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCustomerGatewaysProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59a347ff8ed15ae38a26f60256aa28c4837318469b64705b322bcd6df17d8a7d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f41cdb60e9dcc5f6d878a5f3af75a1df8deb3d457f2375fd3be802de55fc258b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomerGatewayIds")
    def attr_customer_gateway_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CustomerGatewayIds: The list of customer gateway IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomerGatewayIds"))

    @builtins.property
    @jsii.member(jsii_name="attrCustomerGateways")
    def attr_customer_gateways(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CustomerGateways: The list of customer gateways.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCustomerGateways"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5c3c3bfbc84e06f905857fa56d56c8533ebb1946bc26cd804fa2de82f872e60e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="customerGatewayId")
    def customer_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: customerGatewayId: The ID of the customer gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "customerGatewayId"))

    @customer_gateway_id.setter
    def customer_gateway_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9cd65e1119636b62956af522d2922ba898d5516337c03b5199aac4c7545204da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customerGatewayId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosCustomerGatewaysProps",
    jsii_struct_bases=[],
    name_mapping={"customer_gateway_id": "customerGatewayId"},
)
class RosCustomerGatewaysProps:
    def __init__(
        self,
        *,
        customer_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCustomerGateways``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways

        :param customer_gateway_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7ff509ed415cbd19e9751ed801119d511c0c498ad922aeed3dc21fd0813ff99)
            check_type(argname="argument customer_gateway_id", value=customer_gateway_id, expected_type=type_hints["customer_gateway_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if customer_gateway_id is not None:
            self._values["customer_gateway_id"] = customer_gateway_id

    @builtins.property
    def customer_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: customerGatewayId: The ID of the customer gateway.
        '''
        result = self._values.get("customer_gateway_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomerGatewaysProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFlowLog(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosFlowLog",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::FlowLog``, which is used to query a flow log by log ID.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``FlowLog`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFlowLogProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64b64b4063e587cacccb5b8005e35bb3a18d22de15017406990cf8e714ea2dab)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5ea0f94be78dd0416f68c4b45ddb531f96a5de647f6d46562f236db0ed3f2af0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAggregationInterval")
    def attr_aggregation_interval(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AggregationInterval: Data aggregation interval.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAggregationInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrBusinessStatus")
    def attr_business_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BusinessStatus: Business status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBusinessStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: the time of creation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The Description of flow log.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowLogId")
    def attr_flow_log_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowLogId: The flow log ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowLogId"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowLogName")
    def attr_flow_log_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowLogName: The flow log name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowLogName"))

    @builtins.property
    @jsii.member(jsii_name="attrLogStoreName")
    def attr_log_store_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LogStoreName: The log store name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogStoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectName: The project name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceId: The resource id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceType: The resource type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficType")
    def attr_traffic_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrafficType: The traffic type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5a78edef284ad9f72c5abe52be32456438db15ced6760406b0de4e661eda6926)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="flowLogId")
    def flow_log_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: flowLogId: The flow log ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "flowLogId"))

    @flow_log_id.setter
    def flow_log_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__475c06adb8b60959434a31852395b2e26256ce6d17847a4d99331324927d0173)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowLogId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosFlowLogProps",
    jsii_struct_bases=[],
    name_mapping={"flow_log_id": "flowLogId"},
)
class RosFlowLogProps:
    def __init__(
        self,
        *,
        flow_log_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosFlowLog``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog

        :param flow_log_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50c346a9dc38b3324636b7514e5206f303d33bc95f1e356213487b5ad57be333)
            check_type(argname="argument flow_log_id", value=flow_log_id, expected_type=type_hints["flow_log_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "flow_log_id": flow_log_id,
        }

    @builtins.property
    def flow_log_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: flowLogId: The flow log ID.
        '''
        result = self._values.get("flow_log_id")
        assert result is not None, "Required property 'flow_log_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFlowLogProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFlowLogs(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosFlowLogs",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::FlowLogs``, which is used to query flow logs.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``FlowLogs`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFlowLogsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__195f2ea5b9cf9628764be1955953a9a56dd623408c1b2228e96371fd3ef36f0a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__83ec5212e8447ec4a19729038386d8f0624543e5bdd44b3ddb359143d7266070)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowLogIds")
    def attr_flow_log_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowLogIds: The list of flow log IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowLogIds"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowLogs")
    def attr_flow_logs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowLogs: The list of flow logs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowLogs"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__81fd339750bcc4b453268a0f6990f46aa79cdb3877617ff6ff944e5c77d1d930)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the flow log.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddb24492881d588afb90f732f3ea57b3e637216fbb2c9a45143a5b8516b8ac72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="flowLogId")
    def flow_log_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowLogId: The ID of a flow log.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowLogId"))

    @flow_log_id.setter
    def flow_log_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2e268805b58b9eff5920f512f9da5db3c8c4bc9a4acaf42eabeae37fdfbf771)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowLogId", value)

    @builtins.property
    @jsii.member(jsii_name="flowLogName")
    def flow_log_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowLogName: The name of the flow log.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowLogName"))

    @flow_log_name.setter
    def flow_log_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4273797f35e5a2c8a6947e96b4fe7d4fc22faf1c67971a07982f247018daf95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowLogName", value)

    @builtins.property
    @jsii.member(jsii_name="logStoreName")
    def log_store_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logStoreName: A LogStore that stores captured traffic.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logStoreName"))

    @log_store_name.setter
    def log_store_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__729b6328b5569e6e614923b0bae457f4e2700086ea5013de752f14d682ed206c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logStoreName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectName: Manage the captured traffic of the Project.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c94400d6c2e768a2df21897082b201043c8e2b17795c903aff6b43a2810fe91)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceId")
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceId: The ID of the resource group to which the flow log belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceId"))

    @resource_id.setter
    def resource_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32e95a180ce5e5ed4785d0ed1cf956efc61dcecb0af427c31447a1b78107e314)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceType")
    def resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceType: The resource type of traffic to capture. Value:
        NetworkInterface: Elastic NIC.
        VSwitch: All ENIs within the VSwitch.
        VPC: All ENIs in a VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceType"))

    @resource_type.setter
    def resource_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ca94a6788f21ad02917003ee9b17b4a1238514c221a3858487e7c9bff3caa3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceType", value)

    @builtins.property
    @jsii.member(jsii_name="trafficType")
    def traffic_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        trafficType: The type of traffic collected. Value:
        All: All traffic.
        Allow: Traffic allowed by access control.
        Drop: Traffic denied by access control.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "trafficType"))

    @traffic_type.setter
    def traffic_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c93b74c0f83f5c0113f8a1191459dddb1766e510b697639ea9bef0e1e61924c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trafficType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosFlowLogsProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "flow_log_id": "flowLogId",
        "flow_log_name": "flowLogName",
        "log_store_name": "logStoreName",
        "project_name": "projectName",
        "resource_id": "resourceId",
        "resource_type": "resourceType",
        "traffic_type": "trafficType",
    },
)
class RosFlowLogsProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_log_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_log_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_store_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        traffic_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosFlowLogs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs

        :param description: 
        :param flow_log_id: 
        :param flow_log_name: 
        :param log_store_name: 
        :param project_name: 
        :param resource_id: 
        :param resource_type: 
        :param traffic_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c775176dc32334e3bb25153cdc5e9fd1bf02bcf296e7724a06b9f621a7268e2)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument flow_log_id", value=flow_log_id, expected_type=type_hints["flow_log_id"])
            check_type(argname="argument flow_log_name", value=flow_log_name, expected_type=type_hints["flow_log_name"])
            check_type(argname="argument log_store_name", value=log_store_name, expected_type=type_hints["log_store_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument traffic_type", value=traffic_type, expected_type=type_hints["traffic_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if flow_log_id is not None:
            self._values["flow_log_id"] = flow_log_id
        if flow_log_name is not None:
            self._values["flow_log_name"] = flow_log_name
        if log_store_name is not None:
            self._values["log_store_name"] = log_store_name
        if project_name is not None:
            self._values["project_name"] = project_name
        if resource_id is not None:
            self._values["resource_id"] = resource_id
        if resource_type is not None:
            self._values["resource_type"] = resource_type
        if traffic_type is not None:
            self._values["traffic_type"] = traffic_type

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the flow log.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_log_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowLogId: The ID of a flow log.
        '''
        result = self._values.get("flow_log_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_log_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowLogName: The name of the flow log.
        '''
        result = self._values.get("flow_log_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_store_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logStoreName: A LogStore that stores captured traffic.
        '''
        result = self._values.get("log_store_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectName: Manage the captured traffic of the Project.
        '''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceId: The ID of the resource group to which the flow log belongs.
        '''
        result = self._values.get("resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceType: The resource type of traffic to capture. Value:
        NetworkInterface: Elastic NIC.
        VSwitch: All ENIs within the VSwitch.
        VPC: All ENIs in a VPC.
        '''
        result = self._values.get("resource_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def traffic_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        trafficType: The type of traffic collected. Value:
        All: All traffic.
        Allow: Traffic allowed by access control.
        Drop: Traffic denied by access control.
        '''
        result = self._values.get("traffic_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFlowLogsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHaVip(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosHaVip",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::HaVip``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HaVip`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHaVipProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1671d938a13bb56bda397761b066224199ffc5b7734571fdd01f9a8cc59b37e4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d009c453bbe359ce20db655d75280310fd5b838059e0a5187ff2962547d9975d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAssociatedEipAddresses")
    def attr_associated_eip_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AssociatedEipAddresses: EIP bound to HaVip.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAssociatedEipAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrAssociatedInstances")
    def attr_associated_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AssociatedInstances: An ECS instance that is bound to HaVip.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAssociatedInstances"))

    @builtins.property
    @jsii.member(jsii_name="attrAssociatedInstanceType")
    def attr_associated_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AssociatedInstanceType: The type of the instance that is bound to the VIIP.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAssociatedInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the  resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Dependence of a HaVip instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrHaVipId")
    def attr_ha_vip_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HaVipId: The  ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHaVipId"))

    @builtins.property
    @jsii.member(jsii_name="attrHaVipName")
    def attr_ha_vip_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HaVipName: The name of the HaVip instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHaVipName"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpAddress: IP address of private network.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterInstanceId")
    def attr_master_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterInstanceId: The primary instance ID bound to HaVip.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The VPC ID to which the HaVip instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The switch ID to which the HaVip instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e507b4564adf64b4b2b2d2bf84fa6a70f5c44d62379a8f8fb14338a116d09e65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="haVipId")
    def ha_vip_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: haVipId: The  ID of the resource.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "haVipId"))

    @ha_vip_id.setter
    def ha_vip_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8be70b1e603f3b4e10d9551f6e135b562c0d5a0fc045080973be499a0866f6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "haVipId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosHaVipProps",
    jsii_struct_bases=[],
    name_mapping={"ha_vip_id": "haVipId"},
)
class RosHaVipProps:
    def __init__(
        self,
        *,
        ha_vip_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosHaVip``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip

        :param ha_vip_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fcc6c716e197f06ce0623a06aa1d9095d0780fe9bfb83127f710045b0cea04d)
            check_type(argname="argument ha_vip_id", value=ha_vip_id, expected_type=type_hints["ha_vip_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ha_vip_id": ha_vip_id,
        }

    @builtins.property
    def ha_vip_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: haVipId: The  ID of the resource.
        '''
        result = self._values.get("ha_vip_id")
        assert result is not None, "Required property 'ha_vip_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHaVipProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHaVips(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosHaVips",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::HaVips``, which is used to query the high-availability virtual IP addresses (HAVIPs) in a specified region.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HaVips`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHaVipsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b2754f339276583cc9a34cfb26668eedaabd1793c5114d45e2c1dabbf60ce51)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f7d63c18768de183af8f2c7c44f04c8ba3f6b6b8bc5060d120787e3d050ea90b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHaVipIds")
    def attr_ha_vip_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HaVipIds: The list of ha vip IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHaVipIds"))

    @builtins.property
    @jsii.member(jsii_name="attrHaVips")
    def attr_ha_vips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HaVips: The list of ha vips.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHaVips"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__db6e9aec83168258f95884cd63108ae262c8633e5b70e1a67e6015241190a1f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="haVipId")
    def ha_vip_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: haVipId: The  ID of the resource
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "haVipId"))

    @ha_vip_id.setter
    def ha_vip_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdc18b59dfa8beb06e036beb135184786b42e82961ef58bb78bfbcaad0dbdc85)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "haVipId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosHaVipsProps",
    jsii_struct_bases=[],
    name_mapping={"ha_vip_id": "haVipId"},
)
class RosHaVipsProps:
    def __init__(
        self,
        *,
        ha_vip_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosHaVips``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips

        :param ha_vip_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5807a81211670f0d84ab752d061d4ee9993bf9d593317a5c65327ac65420cb4c)
            check_type(argname="argument ha_vip_id", value=ha_vip_id, expected_type=type_hints["ha_vip_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if ha_vip_id is not None:
            self._values["ha_vip_id"] = ha_vip_id

    @builtins.property
    def ha_vip_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: haVipId: The  ID of the resource
        '''
        result = self._values.get("ha_vip_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHaVipsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIpv4Gateway(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosIpv4Gateway",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::Ipv4Gateway``, which is used to query the information about an IPv4 gateway.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Ipv4Gateway`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosIpv4GatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6917f1bc1998d197eab662f9485ae627f4ccde1abeda21218f4f9bd75ad565d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a10a7c34531ff84cb9a04b8ea962f9c75b7a9d51367266a039798147b3681086)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEnabled")
    def attr_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Enabled: Enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4GatewayDescription")
    def attr_ipv4_gateway_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ipv4GatewayDescription: Description information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4GatewayDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4GatewayId")
    def attr_ipv4_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4GatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4GatewayName")
    def attr_ipv4_gateway_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ipv4GatewayName: Resource name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4GatewayName"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4GatewayRouteTableId")
    def attr_ipv4_gateway_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4GatewayRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VPC associated with the IPv4 Gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0265467039d3b9f2fb23c671ca64568e227d50b92e1a1416e6e95dd9bad3c117)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ipv4GatewayId")
    def ipv4_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ipv4GatewayId"))

    @ipv4_gateway_id.setter
    def ipv4_gateway_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1faf10a4b972666c5cccba0b9956dba3ad65fe420ac539ef5d8a1af1206aaf4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipv4GatewayId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosIpv4GatewayProps",
    jsii_struct_bases=[],
    name_mapping={"ipv4_gateway_id": "ipv4GatewayId"},
)
class RosIpv4GatewayProps:
    def __init__(
        self,
        *,
        ipv4_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosIpv4Gateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway

        :param ipv4_gateway_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43197eb30d6409008b0640a3476bd8af81c8ce1532cf6af4b876b7a3510e1364)
            check_type(argname="argument ipv4_gateway_id", value=ipv4_gateway_id, expected_type=type_hints["ipv4_gateway_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ipv4_gateway_id": ipv4_gateway_id,
        }

    @builtins.property
    def ipv4_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
        '''
        result = self._values.get("ipv4_gateway_id")
        assert result is not None, "Required property 'ipv4_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIpv4GatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIpv4Gateways(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosIpv4Gateways",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::Ipv4Gateways``, which is used to query the details of IPv4 gateways.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Ipv4Gateways`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosIpv4GatewaysProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38eea30f6b008cc3889cc86862e8237ea940a44416a7c9585385e98175e27351)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d28e0a0a69b0a4c7610a8ca9fe590fffabdf742cc7fa79c679cc6a0aaa205036)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4GatewayIds")
    def attr_ipv4_gateway_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ipv4GatewayIds: The list of ipv4 gateway IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4GatewayIds"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv4Gateways")
    def attr_ipv4_gateways(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ipv4Gateways: The list of ipv4 gateways.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv4Gateways"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__401cbea151462840a2698a646bc6c6f66a117baaf4cf38b27f636b3a700f135d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ipv4GatewayId")
    def ipv4_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipv4GatewayId"))

    @ipv4_gateway_id.setter
    def ipv4_gateway_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fb5c10f48e2499cf1e2f15f5ecd89e09112f853ce57901779c8790aebe9cd69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipv4GatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="ipv4GatewayName")
    def ipv4_gateway_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipv4GatewayName: Resource name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipv4GatewayName"))

    @ipv4_gateway_name.setter
    def ipv4_gateway_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ff9028915c77197371fbec2b49a0eeb58005ab5ffd07bdd9f0e0402a18e78a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipv4GatewayName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC associated with the IPv4 Gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42f51e1793464186f373c3b2a5a5a563566750e42948d3b386d46438507e2fc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosIpv4GatewaysProps",
    jsii_struct_bases=[],
    name_mapping={
        "ipv4_gateway_id": "ipv4GatewayId",
        "ipv4_gateway_name": "ipv4GatewayName",
        "vpc_id": "vpcId",
    },
)
class RosIpv4GatewaysProps:
    def __init__(
        self,
        *,
        ipv4_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv4_gateway_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosIpv4Gateways``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways

        :param ipv4_gateway_id: 
        :param ipv4_gateway_name: 
        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__effd3cf1caec0be4bd90d42984462d02270e27f939303f0e227ae6bfd8e34c00)
            check_type(argname="argument ipv4_gateway_id", value=ipv4_gateway_id, expected_type=type_hints["ipv4_gateway_id"])
            check_type(argname="argument ipv4_gateway_name", value=ipv4_gateway_name, expected_type=type_hints["ipv4_gateway_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if ipv4_gateway_id is not None:
            self._values["ipv4_gateway_id"] = ipv4_gateway_id
        if ipv4_gateway_name is not None:
            self._values["ipv4_gateway_name"] = ipv4_gateway_name
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def ipv4_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
        '''
        result = self._values.get("ipv4_gateway_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv4_gateway_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipv4GatewayName: Resource name.
        '''
        result = self._values.get("ipv4_gateway_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC associated with the IPv4 Gateway.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIpv4GatewaysProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNatGatewayZones(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosNatGatewayZones",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::NatGatewayZones``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``NatGatewayZones`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNatGatewayZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7527f3902c94828f6fe375f1d84c5cbe71add4e40529be473c95a4138c6addb5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2bd532d24bbb398130d021e92b27fe34b3f2970a3f6ab30f538da4bf1480281f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneIds: The list of The Zone Ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__bb016118671bbd3830c9ec74c53237a99015c64da65daa98df21e541525bb387)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosNatGatewayZonesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosNatGatewayZonesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``RosNatGatewayZones``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
        '''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNatGatewayZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNatGateways(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosNatGateways",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::NatGateways``, which is used to query NAT gateways.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``NatGateways`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNatGatewaysProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef0b4e8df3c740b9e30c6d495d7d43ae8df7ae932adf3a01eb7d0b223c91a057)
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
            type_hints = typing.get_type_hints(_typecheckingstub__05762abe8262ec6586536ce1cf42424c65b27aede305d58616e524a09cd64694)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNatGatewayIds")
    def attr_nat_gateway_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NatGatewayIds: The list of The nat gateway ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNatGatewayIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNatGateways")
    def attr_nat_gateways(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NatGateways: The list of The nat gateways.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNatGateways"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__94c50388b2aa27ad6a3463bda4f8d4d7eecdd485959db94d400028e170906b8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceChargeType: The billing method of the NAT gateway. Set the value to PostPaid, which specifies the pay-as-you-go billing method.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e6671f72cc2d6beecc9b6ac2dfbc1b132e6ce05887eacda437f7c4c9d6a414f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the NAT gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fab9e75f64b0e9e60d0af81f4f65fe1456be842cd4d471941f1bb3d85acc695)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="natGatewayId")
    def nat_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: natGatewayId: The ID of the NAT gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "natGatewayId"))

    @nat_gateway_id.setter
    def nat_gateway_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4f24c15dc01b8de6ddd9356329b4c96e4eb410de0186dd397975f5905c90c23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "natGatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="natType")
    def nat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: natType: The type of NAT gateway. Set the value to Enhanced (enhanced NAT gateway).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "natType"))

    @nat_type.setter
    def nat_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e29286df9c42392cf9f2bc831d94ac347388d9fb90fae8a8338f230780e0ded)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "natType", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkType: The type of the NAT gateway. Valid values:
        internet: an Internet NAT gateway
        intranet: a VPC NAT gateway
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73299079b92d7ee1e8c179f891db69eb50d1e243b92a7f9c66ca6a21f657d54f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b766a1f277d3694b3666184d21bb159e627d20278bd7f60d1edf2f5570375cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the NAT gateway. Valid values:
        Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
        Available: The NAT gateway remains in a stable state after the NAT gateway is created.
        Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
        Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
        Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef0ae238d3f08000df6fc340f48ec610b54e3a3bb682635ca631c1abb506fa9d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC to which the NAT gateway belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__018f95ee99ea0172b84d9292f3944f898314cf31e9bcaeeb07d4429099508890)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone to which the NAT gateway belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efa2016e99cba700611852ef26baeb9911afab5059cda9d8521c5c8447e6d90d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosNatGatewaysProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_charge_type": "instanceChargeType",
        "name": "name",
        "nat_gateway_id": "natGatewayId",
        "nat_type": "natType",
        "network_type": "networkType",
        "resource_group_id": "resourceGroupId",
        "status": "status",
        "vpc_id": "vpcId",
        "zone_id": "zoneId",
    },
)
class RosNatGatewaysProps:
    def __init__(
        self,
        *,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nat_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosNatGateways``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways

        :param instance_charge_type: 
        :param name: 
        :param nat_gateway_id: 
        :param nat_type: 
        :param network_type: 
        :param resource_group_id: 
        :param status: 
        :param vpc_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93c4f3f3e3cdbe008095ff98b57c2f81f4c2208ba09731f39d0d7bd796e31d73)
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument nat_gateway_id", value=nat_gateway_id, expected_type=type_hints["nat_gateway_id"])
            check_type(argname="argument nat_type", value=nat_type, expected_type=type_hints["nat_type"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if name is not None:
            self._values["name"] = name
        if nat_gateway_id is not None:
            self._values["nat_gateway_id"] = nat_gateway_id
        if nat_type is not None:
            self._values["nat_type"] = nat_type
        if network_type is not None:
            self._values["network_type"] = network_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if status is not None:
            self._values["status"] = status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceChargeType: The billing method of the NAT gateway. Set the value to PostPaid, which specifies the pay-as-you-go billing method.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the NAT gateway.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nat_gateway_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: natGatewayId: The ID of the NAT gateway.
        '''
        result = self._values.get("nat_gateway_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: natType: The type of NAT gateway. Set the value to Enhanced (enhanced NAT gateway).
        '''
        result = self._values.get("nat_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkType: The type of the NAT gateway. Valid values:
        internet: an Internet NAT gateway
        intranet: a VPC NAT gateway
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the NAT gateway. Valid values:
        Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
        Available: The NAT gateway remains in a stable state after the NAT gateway is created.
        Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
        Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
        Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC to which the NAT gateway belongs.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone to which the NAT gateway belongs.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNatGatewaysProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNatIpCidrs(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosNatIpCidrs",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::NatIpCidrs``, which is used to query the CIDR blocks of a NAT gateway.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``NatIpCidrs`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNatIpCidrsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4d154086385788ca899517d31c47580210d78db53a7bdbe5b1d6d5a322d7148)
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
            type_hints = typing.get_type_hints(_typecheckingstub__330b2dee771b7438e29fd24919deaaced625b335e5f9e6b2b48dbf2322c863c3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNatIpCidrIds")
    def attr_nat_ip_cidr_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NatIpCidrIds: The list of nat ip cidr IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNatIpCidrIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNatIpCidrs")
    def attr_nat_ip_cidrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NatIpCidrs: The list of nat ip cidrs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNatIpCidrs"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__aea3628c32d6509ea60a840e4b30a10732617d0dcf6f077ca90230acf416e7b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="natGatewayId")
    def nat_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "natGatewayId"))

    @nat_gateway_id.setter
    def nat_gateway_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__795b2f96b4a11b2cee2a2daa0418018ab281fd50fa2193de0e80e19936ae7d38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "natGatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="natIpCidr")
    def nat_ip_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "natIpCidr"))

    @nat_ip_cidr.setter
    def nat_ip_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3beda15f03c11a4ebfc147d6577df7edac415784fc8cf9dbe984e9e4f00bddbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "natIpCidr", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosNatIpCidrsProps",
    jsii_struct_bases=[],
    name_mapping={"nat_gateway_id": "natGatewayId", "nat_ip_cidr": "natIpCidr"},
)
class RosNatIpCidrsProps:
    def __init__(
        self,
        *,
        nat_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        nat_ip_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosNatIpCidrs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs

        :param nat_gateway_id: 
        :param nat_ip_cidr: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c25ce3704c24f0317965d3bf8e17a0392377b9fccce961e129ec8344d374b656)
            check_type(argname="argument nat_gateway_id", value=nat_gateway_id, expected_type=type_hints["nat_gateway_id"])
            check_type(argname="argument nat_ip_cidr", value=nat_ip_cidr, expected_type=type_hints["nat_ip_cidr"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "nat_gateway_id": nat_gateway_id,
        }
        if nat_ip_cidr is not None:
            self._values["nat_ip_cidr"] = nat_ip_cidr

    @builtins.property
    def nat_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
        '''
        result = self._values.get("nat_gateway_id")
        assert result is not None, "Required property 'nat_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def nat_ip_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
        '''
        result = self._values.get("nat_ip_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNatIpCidrsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNetworkAcls(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosNetworkAcls",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::NetworkAcls``, which is used to query created network access control lists (ACLs).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``NetworkAcls`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNetworkAclsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46cbf570264e81e06c52cf0977d6a463ac1392f6a434f1ecc88c9c6e25b7a75b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f3446d9705b8ea17ccfe8b3dab15016494ab33385125f9d04619d47e1bd77780)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAclIds")
    def attr_network_acl_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkAclIds: The list of The network acl ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkAclIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAcls")
    def attr_network_acls(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkAcls: The list of The network acls.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkAcls"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e81a22ad4ff11f8416fbe5e89cbe108f0d71758d33bdb93a7d1e8f1299230635)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="networkAclId")
    def network_acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: networkAclId: The ID of the network ACL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkAclId"))

    @network_acl_id.setter
    def network_acl_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c0ffcc3b1ea885fd26aa970cb7edb287503beb655368c176bfeeeef3a43d8db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkAclId", value)

    @builtins.property
    @jsii.member(jsii_name="networkAclName")
    def network_acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkAclName: The name of the network ACL.
        The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkAclName"))

    @network_acl_name.setter
    def network_acl_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__496f36353e4213697896d4b0f850efb6ca40b30d754142a60c6f09dc62149f0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkAclName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceId")
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceId"))

    @resource_id.setter
    def resource_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06985448cbaebf9c94c17b389331ecdf4164579358bbe209c35cb79161171bca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceType")
    def resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceType: The type of the associated instance. Set the value to VSwitch.
        This parameter is valid only if ResourceType and ResourceId are both set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceType"))

    @resource_type.setter
    def resource_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a8036c9ff6d3793e765ec0e04cd123927f947571cd1227af4df6cd4d7208adc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceType", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f85fca06bf7f75dd527510fca7272f3353428147365134bc7923b17d33b9c34e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosNetworkAclsProps",
    jsii_struct_bases=[],
    name_mapping={
        "network_acl_id": "networkAclId",
        "network_acl_name": "networkAclName",
        "resource_id": "resourceId",
        "resource_type": "resourceType",
        "vpc_id": "vpcId",
    },
)
class RosNetworkAclsProps:
    def __init__(
        self,
        *,
        network_acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosNetworkAcls``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls

        :param network_acl_id: 
        :param network_acl_name: 
        :param resource_id: 
        :param resource_type: 
        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb87d1037feecb6155bfc57c4c929ac5d3bf19085687a4137d52a5d1b88a8891)
            check_type(argname="argument network_acl_id", value=network_acl_id, expected_type=type_hints["network_acl_id"])
            check_type(argname="argument network_acl_name", value=network_acl_name, expected_type=type_hints["network_acl_name"])
            check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if network_acl_id is not None:
            self._values["network_acl_id"] = network_acl_id
        if network_acl_name is not None:
            self._values["network_acl_name"] = network_acl_name
        if resource_id is not None:
            self._values["resource_id"] = resource_id
        if resource_type is not None:
            self._values["resource_type"] = resource_type
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def network_acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: networkAclId: The ID of the network ACL.
        '''
        result = self._values.get("network_acl_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkAclName: The name of the network ACL.
        The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("network_acl_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
        '''
        result = self._values.get("resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceType: The type of the associated instance. Set the value to VSwitch.
        This parameter is valid only if ResourceType and ResourceId are both set.
        '''
        result = self._values.get("resource_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNetworkAclsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrefixList(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosPrefixList",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::PrefixList``, which is used to query the information about a prefix list.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PrefixList`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrefixListProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1b33107c0ecba5d04741c3b57e6e69c44631ee7e3609eef96c6923e53f82726)
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
            type_hints = typing.get_type_hints(_typecheckingstub__03de9af50493ebbe4eebe2526d787d78d3fec849f2545603abaeb6d7d973f99b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the prefix list was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEntries")
    def attr_entries(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Entries: The CIDR address block list of the prefix list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrIpVersion")
    def attr_ip_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpVersion: The IP version of the prefix list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxEntries")
    def attr_max_entries(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrefixListDescription")
    def attr_prefix_list_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrefixListDescription: The description of the prefix list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrefixListDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrPrefixListId")
    def attr_prefix_list_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrefixListId: The ID of the query Prefix List.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrefixListId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrefixListName")
    def attr_prefix_list_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrefixListName: The name of the prefix list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrefixListName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group to which the VPC belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ShareType: The share type of the prefix list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of PrefixList.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7f3f99951ecd6a98e555af249f9b808d65e6ac3ca97b61540f1c376f934a9fd4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="prefixListId")
    def prefix_list_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prefixListId: The ID of the query Prefix List.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "prefixListId"))

    @prefix_list_id.setter
    def prefix_list_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__033a17e2a9c8197453a11b1c8f017f69d504e5f57a01b8e55fbb7a8497393fbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prefixListId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosPrefixListProps",
    jsii_struct_bases=[],
    name_mapping={"prefix_list_id": "prefixListId"},
)
class RosPrefixListProps:
    def __init__(
        self,
        *,
        prefix_list_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosPrefixList``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist

        :param prefix_list_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa57a0442919cb80cc0e2ce28ceda81baa7bcc5c3d3863e3eb46dd38c582eb36)
            check_type(argname="argument prefix_list_id", value=prefix_list_id, expected_type=type_hints["prefix_list_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "prefix_list_id": prefix_list_id,
        }

    @builtins.property
    def prefix_list_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prefixListId: The ID of the query Prefix List.
        '''
        result = self._values.get("prefix_list_id")
        assert result is not None, "Required property 'prefix_list_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrefixListProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrefixLists(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosPrefixLists",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::PrefixLists``, which is used to query the details of prefix lists.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PrefixLists`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrefixListsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d8aae2e27a88c936451b3d154df43a43b1894dfa00dcfe7554b1ba806d66dab)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2be9a627e9a95fc963681e9bac245fdb20ab5a6628be1d091a3030e66ec18160)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPrefixListIds")
    def attr_prefix_list_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrefixListIds: The list of prefix list IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrefixListIds"))

    @builtins.property
    @jsii.member(jsii_name="attrPrefixLists")
    def attr_prefix_lists(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrefixLists: The list of prefix lists.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrefixLists"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d175de3bf06ad3aed40b482368565d4979bcffbafd82a003511685c8e8238f94)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="prefixListName")
    def prefix_list_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: prefixListName: The name of the prefix list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "prefixListName"))

    @prefix_list_name.setter
    def prefix_list_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aac6c0683a1c88e2267408937eace2bceea9b57418d78e289a41b19e9511c0b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prefixListName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the VPC belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff58570e87f1c3087d44931afd50ea46e1cdd22216f67ef2df26295cbe2233f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosPrefixListsProps",
    jsii_struct_bases=[],
    name_mapping={
        "prefix_list_name": "prefixListName",
        "resource_group_id": "resourceGroupId",
    },
)
class RosPrefixListsProps:
    def __init__(
        self,
        *,
        prefix_list_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPrefixLists``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists

        :param prefix_list_name: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__792f9d13f75f883ce393dffec8a2cfd1e5a1b9ee92d43b857be0c9a4a02ff3e9)
            check_type(argname="argument prefix_list_name", value=prefix_list_name, expected_type=type_hints["prefix_list_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if prefix_list_name is not None:
            self._values["prefix_list_name"] = prefix_list_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def prefix_list_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: prefixListName: The name of the prefix list.
        '''
        result = self._values.get("prefix_list_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the VPC belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrefixListsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPublicIpAddressPool(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosPublicIpAddressPool",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::PublicIpAddressPool``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PublicIpAddressPool`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPublicIpAddressPoolProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09ae690907c68031d4c7e1ee561d12ec9f12a315d8bd1a0ef39e74d4b8b177c9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__595f9d07c1beffa5f25146234fb2ccabc96b7e277be4d50a680edaeefc69120b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddressRemaining")
    def attr_ip_address_remaining(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpAddressRemaining: Whether there is a free IP address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddressRemaining"))

    @builtins.property
    @jsii.member(jsii_name="attrIsp")
    def attr_isp(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Isp: Service providers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsp"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddressPoolId")
    def attr_public_ip_address_pool_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIpAddressPoolId: The first ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddressPoolId"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddressPoolName")
    def attr_public_ip_address_pool_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIpAddressPoolName: The name of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddressPoolName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group to which the VPC belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of PrefixList.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTotalIpNum")
    def attr_total_ip_num(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TotalIpNum: Total ip number of PublicIpAddressPool.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTotalIpNum"))

    @builtins.property
    @jsii.member(jsii_name="attrUsedIpNum")
    def attr_used_ip_num(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UsedIpNum: Used ip number of PublicIpAddressPool.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsedIpNum"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6103a10b67044c2c7a779808fad07e367460f1cd5717d74b35340796f32e159e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="publicIpAddressPoolId")
    def public_ip_address_pool_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: publicIpAddressPoolId: The first ID of the resource.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "publicIpAddressPoolId"))

    @public_ip_address_pool_id.setter
    def public_ip_address_pool_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__185e50d4da90691fd6e31b42d37bb7675ffbfce73d5213cfcfceb82ccba77c1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "publicIpAddressPoolId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosPublicIpAddressPoolProps",
    jsii_struct_bases=[],
    name_mapping={"public_ip_address_pool_id": "publicIpAddressPoolId"},
)
class RosPublicIpAddressPoolProps:
    def __init__(
        self,
        *,
        public_ip_address_pool_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosPublicIpAddressPool``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool

        :param public_ip_address_pool_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__428cc5d565f2561fb378fc16dd69800be4dffd6caa0035fc217d6206c3167334)
            check_type(argname="argument public_ip_address_pool_id", value=public_ip_address_pool_id, expected_type=type_hints["public_ip_address_pool_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "public_ip_address_pool_id": public_ip_address_pool_id,
        }

    @builtins.property
    def public_ip_address_pool_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: publicIpAddressPoolId: The first ID of the resource.
        '''
        result = self._values.get("public_ip_address_pool_id")
        assert result is not None, "Required property 'public_ip_address_pool_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPublicIpAddressPoolProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPublicIpAddressPools(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosPublicIpAddressPools",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::PublicIpAddressPools``, which is used to query available IP address pools.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PublicIpAddressPools`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPublicIpAddressPoolsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83129a139143c20a91f6eb35914f0c74580acb19a698ecf06afb55a1be574864)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ea979dd6e4b04e1c1f09f3fd57cf5ac78540489ea202be053f689df96447ddad)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddressPoolIds")
    def attr_public_ip_address_pool_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIpAddressPoolIds: The list of public ip address pool IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddressPoolIds"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddressPools")
    def attr_public_ip_address_pools(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIpAddressPools: The list of public ip address pools.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddressPools"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7a3c97014039f798d6dd2e1809af0a61ae604489329321b675b23a62e10c4910)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="isp")
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isp: The line type. Valid values:
        BGP (default): BGP (Multi-ISP) lines
        BGP_PRO: BGP (Multi-ISP) Pro lines
        For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
        If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
        ChinaTelecom: China Telecom
        ChinaUnicom: China Unicom
        ChinaMobile: China Mobile
        ChinaTelecom_L2: China Telecom L2
        ChinaUnicom_L2: China Unicom L2
        ChinaMobile_L2: China Mobile L2
        If your services are deployed in China East 1 Finance,
        this parameter is required and you must set the value to BGP_FinanceCloud.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isp"))

    @isp.setter
    def isp(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d93cd449b2e523277ae8d1d5a3777965cd10b8c25022f1f926b21ac40685469)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isp", value)

    @builtins.property
    @jsii.member(jsii_name="publicIpAddressPoolName")
    def public_ip_address_pool_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        publicIpAddressPoolName: The name of the IP address pool.
        This parameter is optional. The name must be 1 to 128 characters in length,
        and can contain digits, periods (.), underscores (_), and hyphens (-).
        The name must start with a letter but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "publicIpAddressPoolName"))

    @public_ip_address_pool_name.setter
    def public_ip_address_pool_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c556449d133c3cc9625a1ccc61d7bb84e9e8349804848ed5d129ec728f46d6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "publicIpAddressPoolName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the IP address pool belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__047b1fd0168e5954bbc793333af44b5c84870a8c6f5c3e9f6ef30f1c8ca9dbbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosPublicIpAddressPoolsProps",
    jsii_struct_bases=[],
    name_mapping={
        "isp": "isp",
        "public_ip_address_pool_name": "publicIpAddressPoolName",
        "resource_group_id": "resourceGroupId",
    },
)
class RosPublicIpAddressPoolsProps:
    def __init__(
        self,
        *,
        isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        public_ip_address_pool_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPublicIpAddressPools``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools

        :param isp: 
        :param public_ip_address_pool_name: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__350e81c7f9d8935ceb7eb00618bb797a133937c0156815f08c6565bb256f123d)
            check_type(argname="argument isp", value=isp, expected_type=type_hints["isp"])
            check_type(argname="argument public_ip_address_pool_name", value=public_ip_address_pool_name, expected_type=type_hints["public_ip_address_pool_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if isp is not None:
            self._values["isp"] = isp
        if public_ip_address_pool_name is not None:
            self._values["public_ip_address_pool_name"] = public_ip_address_pool_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isp: The line type. Valid values:
        BGP (default): BGP (Multi-ISP) lines
        BGP_PRO: BGP (Multi-ISP) Pro lines
        For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
        If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
        ChinaTelecom: China Telecom
        ChinaUnicom: China Unicom
        ChinaMobile: China Mobile
        ChinaTelecom_L2: China Telecom L2
        ChinaUnicom_L2: China Unicom L2
        ChinaMobile_L2: China Mobile L2
        If your services are deployed in China East 1 Finance,
        this parameter is required and you must set the value to BGP_FinanceCloud.
        '''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def public_ip_address_pool_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        publicIpAddressPoolName: The name of the IP address pool.
        This parameter is optional. The name must be 1 to 128 characters in length,
        and can contain digits, periods (.), underscores (_), and hyphens (-).
        The name must start with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("public_ip_address_pool_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the IP address pool belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPublicIpAddressPoolsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRouteEntries(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosRouteEntries",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::RouteEntries``, which is used to query routes.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RouteEntries`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRouteEntriesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84e04367f6dbcc1167417352223d8c58eea87d506057325fffeaa88042f898f0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4deac13074a0065858b0a26390fc9253126a2b7cc3529211a2019bb02f4ab8c0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteEntries")
    def attr_route_entries(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteEntries: The list of The route entries.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteEntryIds")
    def attr_route_entry_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteEntryIds: the list of the route entry ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteEntryIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8fe564ca4947a28e2721f887350ec702a9929e8ba360220be440585cc0d881ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="routeTableId")
    def route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: routeTableId: The ID of the route table.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "routeTableId"))

    @route_table_id.setter
    def route_table_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d28b0bcbbff3e7d8be4ffb5e1c84b1852b24ba81a40cde2949cb6a33a9d00ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeTableId", value)

    @builtins.property
    @jsii.member(jsii_name="destinationCidrBlock")
    def destination_cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: destinationCidrBlock: The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destinationCidrBlock"))

    @destination_cidr_block.setter
    def destination_cidr_block(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94060e8a682060b3f13998c5574cbedfd7010c71e80714799226a757a04ad67f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationCidrBlock", value)

    @builtins.property
    @jsii.member(jsii_name="ipVersion")
    def ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipVersion: The IP version. Valid values:
        IPv4: IPv4
        IPv6: IPv6
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipVersion"))

    @ip_version.setter
    def ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fec93adbc6d0505d4b8924d89eed1db65fd261f5befc49ea6f503c544db1e8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipVersion", value)

    @builtins.property
    @jsii.member(jsii_name="nextHopId")
    def next_hop_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: nextHopId: The ID of the next hop.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nextHopId"))

    @next_hop_id.setter
    def next_hop_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30e47e55d27b5b35e4a872c629859f6332bcf879cac81dec2bb43bfdb96a6cdb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nextHopId", value)

    @builtins.property
    @jsii.member(jsii_name="nextHopType")
    def next_hop_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nextHopType: The type of the next hop. Valid values:
        Instance (default): an Elastic Compute Service (ECS) instance
        HaVip: a high-availability virtual IP address (HAVIP)
        VpnGateway: a VPN gateway
        NatGateway: a NAT gateway
        NetworkInterface: a secondary elastic network interface (ENI)
        RouterInterface: a router interface
        IPv6Gateway: an IPv6 gateway
        Attachment: a transit router
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nextHopType"))

    @next_hop_type.setter
    def next_hop_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c84179df3548b26bf5be4d0dcde64cdab557b5d0200c5d326896a26181d380c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nextHopType", value)

    @builtins.property
    @jsii.member(jsii_name="routeEntryId")
    def route_entry_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeEntryId: The ID of the route.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeEntryId"))

    @route_entry_id.setter
    def route_entry_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64b4749331f8ba51211d750f124457870e50829f2ebdf3498a1d4d4d133bf262)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeEntryId", value)

    @builtins.property
    @jsii.member(jsii_name="routeEntryName")
    def route_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeEntryName: The name of the route.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeEntryName"))

    @route_entry_name.setter
    def route_entry_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__650b60de20dda6cfce94ec8246fa390144a63081fc7821aea911d91d02534bca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeEntryName", value)

    @builtins.property
    @jsii.member(jsii_name="routeEntryType")
    def route_entry_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        routeEntryType: The type of the route. Valid values:
        Custom: a custom route
        System: a system route
        BGP: a Border Gateway Protocol (BGP) route
        CEN: a Cloud Enterprise Network (CEN) route
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeEntryType"))

    @route_entry_type.setter
    def route_entry_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f22b4af5a278793b30a3dece084f45c869fe88fe94a87d3a9b50477ab2945220)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeEntryType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosRouteEntriesProps",
    jsii_struct_bases=[],
    name_mapping={
        "route_table_id": "routeTableId",
        "destination_cidr_block": "destinationCidrBlock",
        "ip_version": "ipVersion",
        "next_hop_id": "nextHopId",
        "next_hop_type": "nextHopType",
        "route_entry_id": "routeEntryId",
        "route_entry_name": "routeEntryName",
        "route_entry_type": "routeEntryType",
    },
)
class RosRouteEntriesProps:
    def __init__(
        self,
        *,
        route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        next_hop_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        next_hop_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_entry_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_entry_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_entry_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRouteEntries``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries

        :param route_table_id: 
        :param destination_cidr_block: 
        :param ip_version: 
        :param next_hop_id: 
        :param next_hop_type: 
        :param route_entry_id: 
        :param route_entry_name: 
        :param route_entry_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__246f402d466bf85034b909ce8779c0bbe17a4afe6750aa648ffc514bd2355f7e)
            check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
            check_type(argname="argument destination_cidr_block", value=destination_cidr_block, expected_type=type_hints["destination_cidr_block"])
            check_type(argname="argument ip_version", value=ip_version, expected_type=type_hints["ip_version"])
            check_type(argname="argument next_hop_id", value=next_hop_id, expected_type=type_hints["next_hop_id"])
            check_type(argname="argument next_hop_type", value=next_hop_type, expected_type=type_hints["next_hop_type"])
            check_type(argname="argument route_entry_id", value=route_entry_id, expected_type=type_hints["route_entry_id"])
            check_type(argname="argument route_entry_name", value=route_entry_name, expected_type=type_hints["route_entry_name"])
            check_type(argname="argument route_entry_type", value=route_entry_type, expected_type=type_hints["route_entry_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "route_table_id": route_table_id,
        }
        if destination_cidr_block is not None:
            self._values["destination_cidr_block"] = destination_cidr_block
        if ip_version is not None:
            self._values["ip_version"] = ip_version
        if next_hop_id is not None:
            self._values["next_hop_id"] = next_hop_id
        if next_hop_type is not None:
            self._values["next_hop_type"] = next_hop_type
        if route_entry_id is not None:
            self._values["route_entry_id"] = route_entry_id
        if route_entry_name is not None:
            self._values["route_entry_name"] = route_entry_name
        if route_entry_type is not None:
            self._values["route_entry_type"] = route_entry_type

    @builtins.property
    def route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: routeTableId: The ID of the route table.
        '''
        result = self._values.get("route_table_id")
        assert result is not None, "Required property 'route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: destinationCidrBlock: The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
        '''
        result = self._values.get("destination_cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipVersion: The IP version. Valid values:
        IPv4: IPv4
        IPv6: IPv6
        '''
        result = self._values.get("ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def next_hop_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: nextHopId: The ID of the next hop.
        '''
        result = self._values.get("next_hop_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def next_hop_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nextHopType: The type of the next hop. Valid values:
        Instance (default): an Elastic Compute Service (ECS) instance
        HaVip: a high-availability virtual IP address (HAVIP)
        VpnGateway: a VPN gateway
        NatGateway: a NAT gateway
        NetworkInterface: a secondary elastic network interface (ENI)
        RouterInterface: a router interface
        IPv6Gateway: an IPv6 gateway
        Attachment: a transit router
        '''
        result = self._values.get("next_hop_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_entry_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeEntryId: The ID of the route.
        '''
        result = self._values.get("route_entry_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeEntryName: The name of the route.
        '''
        result = self._values.get("route_entry_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_entry_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        routeEntryType: The type of the route. Valid values:
        Custom: a custom route
        System: a system route
        BGP: a Border Gateway Protocol (BGP) route
        CEN: a Cloud Enterprise Network (CEN) route
        '''
        result = self._values.get("route_entry_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouteEntriesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRouteTable(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosRouteTable",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::RouteTable``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RouteTable`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRouteTableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1023c84e4e628c41840e07a683d00aa5a89c822812c43aa7ab21cd03bbf263ac)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d5b78c48f26d45b889cdaccc982f6d2253bb50ff27fe37dd1e99bb4b8c0d180f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the routing table.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Description of the routing table.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: Resource group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouterId")
    def attr_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouterId: The router ID to which the routing table belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouterType")
    def attr_router_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouterType: The router type to which the routing table belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouterType"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteTableId: The ID of the routing table.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableName")
    def attr_route_table_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteTableName: The name of the routing table.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableName"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableType")
    def attr_route_table_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteTableType: The type of routing table.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tag.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchIds: The ID of the switch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8b30c40090fa0a2a5e18157e88a68a2f98749826deb49a279b865cf892c8a45e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="routeTableId")
    def route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: routeTableId: The ID of the routing table.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "routeTableId"))

    @route_table_id.setter
    def route_table_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2a7377d47d9e52df288385da008b593bf20a3c9e615d12c3748ab75a0a94644)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeTableId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosRouteTableProps",
    jsii_struct_bases=[],
    name_mapping={"route_table_id": "routeTableId"},
)
class RosRouteTableProps:
    def __init__(
        self,
        *,
        route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosRouteTable``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable

        :param route_table_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__beede6ec80de0543585d5400615604057f23b74f09a40005e57b9c90ebc434af)
            check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "route_table_id": route_table_id,
        }

    @builtins.property
    def route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: routeTableId: The ID of the routing table.
        '''
        result = self._values.get("route_table_id")
        assert result is not None, "Required property 'route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouteTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRouteTables(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosRouteTables",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::RouteTables``, which is used to query route tables.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RouteTables`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRouteTablesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04beac1c46c587059485c9920e73209c4f8c8e0348218338c4c87c0ae28abf5b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b0a933100f2b370022206602e3ef71559c146204da8f016ebd62b0d0b6e2f3bd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableIds")
    def attr_route_table_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteTableIds: the list of the route table ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTables")
    def attr_route_tables(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteTables: The list of The route tables.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTables"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3ab46c9ba51ed9e3c90286256cd5e32b97f033709d9b30b9267c86d6d8df72e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the route table belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4aa4f470d1dcdb9c4ec2de78fec60986da8f493d81e61cc8e2f6dd5dffc1e9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="routerId")
    def router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routerId: The ID of the VRouter to which the route table belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routerId"))

    @router_id.setter
    def router_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9f15e644ce7c66df8e5921bb192964005e6cc0566155ad7ebd61c404cc85433)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routerId", value)

    @builtins.property
    @jsii.member(jsii_name="routerType")
    def router_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        routerType: The type of the VRouter to which the route table belongs. Valid values:
        VRouter (default): VRouter.
        VBR: Virtual Border Router (VBR).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routerType"))

    @router_type.setter
    def router_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bfeb2249c865493a73507fad010733d8ccb22ca2a0c9dd992b8e154d16f2f04c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routerType", value)

    @builtins.property
    @jsii.member(jsii_name="routeTableId")
    def route_table_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeTableId: The ID of the route table.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeTableId"))

    @route_table_id.setter
    def route_table_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__632209c6581691647220c04520c26f78108fe48a14326b3c5585482392afb1c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeTableId", value)

    @builtins.property
    @jsii.member(jsii_name="routeTableName")
    def route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeTableName: The name of the route table.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeTableName"))

    @route_table_name.setter
    def route_table_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__996e4ee786cffbfc44ae02c4a088b1c1c118a93e5ea157cb8bd035b53e4a64f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeTableName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the VRouter to which the route table belongs.
        The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82f6cd8252390e43d7db666802db3ba9405a2296a5007061190e23d8f1c9cd86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosRouteTablesProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_group_id": "resourceGroupId",
        "router_id": "routerId",
        "router_type": "routerType",
        "route_table_id": "routeTableId",
        "route_table_name": "routeTableName",
        "vpc_id": "vpcId",
    },
)
class RosRouteTablesProps:
    def __init__(
        self,
        *,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        router_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRouteTables``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables

        :param resource_group_id: 
        :param router_id: 
        :param router_type: 
        :param route_table_id: 
        :param route_table_name: 
        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6daee7717a23a65251743021a1cd19a72cca41d4a365dcbd941ef94deeee459)
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument router_id", value=router_id, expected_type=type_hints["router_id"])
            check_type(argname="argument router_type", value=router_type, expected_type=type_hints["router_type"])
            check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
            check_type(argname="argument route_table_name", value=route_table_name, expected_type=type_hints["route_table_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if router_id is not None:
            self._values["router_id"] = router_id
        if router_type is not None:
            self._values["router_type"] = router_type
        if route_table_id is not None:
            self._values["route_table_id"] = route_table_id
        if route_table_name is not None:
            self._values["route_table_name"] = route_table_name
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the route table belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routerId: The ID of the VRouter to which the route table belongs.
        '''
        result = self._values.get("router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def router_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        routerType: The type of the VRouter to which the route table belongs. Valid values:
        VRouter (default): VRouter.
        VBR: Virtual Border Router (VBR).
        '''
        result = self._values.get("router_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_table_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeTableId: The ID of the route table.
        '''
        result = self._values.get("route_table_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeTableName: The name of the route table.
        '''
        result = self._values.get("route_table_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the VRouter to which the route table belongs.
        The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouteTablesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTrafficMirrorFilter(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFilter",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::TrafficMirrorFilter``, which is used to query a filter for traffic mirroring.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TrafficMirrorFilter`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTrafficMirrorFilterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff12f2d39007d03b4f2b72d873cccc56843e3d0e026791196a0ab3641d307ce9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5bcf6f50690b56c7a122c58c7bf1fa61601e3f32a3877977204941d835521d72)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEgressRules")
    def attr_egress_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EgressRules: EgressRules.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEgressRules"))

    @builtins.property
    @jsii.member(jsii_name="attrIngressRules")
    def attr_ingress_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IngressRules: IngressRules.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIngressRules"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficMirrorFilterDescription")
    def attr_traffic_mirror_filter_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficMirrorFilterDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficMirrorFilterId")
    def attr_traffic_mirror_filter_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrafficMirrorFilterId: The first ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficMirrorFilterId"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficMirrorFilterName")
    def attr_traffic_mirror_filter_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrafficMirrorFilterName: The name of the TrafficMirrorFilter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficMirrorFilterName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__951f74ac062de571ab10c45c26048c85f8f7fc0cd539d831afc2396f36a2e6fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="trafficMirrorFilterId")
    def traffic_mirror_filter_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: trafficMirrorFilterId: The first ID of the resource.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "trafficMirrorFilterId"))

    @traffic_mirror_filter_id.setter
    def traffic_mirror_filter_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8f17cd1b8b18f0cb077f43446f31cbe5ea487c459220d64a8be14df29408a39)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trafficMirrorFilterId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFilterProps",
    jsii_struct_bases=[],
    name_mapping={"traffic_mirror_filter_id": "trafficMirrorFilterId"},
)
class RosTrafficMirrorFilterProps:
    def __init__(
        self,
        *,
        traffic_mirror_filter_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosTrafficMirrorFilter``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter

        :param traffic_mirror_filter_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7a44eb27d37ecdd286545a89d99db4df6acb62da3465e449be1dcf34d8759d4)
            check_type(argname="argument traffic_mirror_filter_id", value=traffic_mirror_filter_id, expected_type=type_hints["traffic_mirror_filter_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "traffic_mirror_filter_id": traffic_mirror_filter_id,
        }

    @builtins.property
    def traffic_mirror_filter_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: trafficMirrorFilterId: The first ID of the resource.
        '''
        result = self._values.get("traffic_mirror_filter_id")
        assert result is not None, "Required property 'traffic_mirror_filter_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrafficMirrorFilterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTrafficMirrorFilters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFilters",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::TrafficMirrorFilters``, which is used to query filters for traffic mirroring.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TrafficMirrorFilters`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTrafficMirrorFiltersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a419e405a26dda2799adbd5a274e9f781f1d14408221fa85d61bb5f0c38b749)
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
            type_hints = typing.get_type_hints(_typecheckingstub__454cea27874a1dd3919905d3ac5c4e61a77b59186f701f96204693b885c11728)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficMirrorFilterIds")
    def attr_traffic_mirror_filter_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrafficMirrorFilterIds: The list of traffic mirror filter IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficMirrorFilterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficMirrorFilters")
    def attr_traffic_mirror_filters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrafficMirrorFilters: The list of traffic mirror filters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficMirrorFilters"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__dbb99275bf83bd84f5e33a25ac60187f57fa2eb1d712303c5a877eee1ce8e59e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="trafficMirrorFilterName")
    def traffic_mirror_filter_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trafficMirrorFilterName: The name of the TrafficMirrorFilter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "trafficMirrorFilterName"))

    @traffic_mirror_filter_name.setter
    def traffic_mirror_filter_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__088da2930e89486029ffcace01ce6022c268ed813a0bdd775247cd55946b02fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trafficMirrorFilterName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFiltersProps",
    jsii_struct_bases=[],
    name_mapping={"traffic_mirror_filter_name": "trafficMirrorFilterName"},
)
class RosTrafficMirrorFiltersProps:
    def __init__(
        self,
        *,
        traffic_mirror_filter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTrafficMirrorFilters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters

        :param traffic_mirror_filter_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a375f14ddd583e747ee06d2d15780a0cdf1c4b4277254f7814774f7c1cfea23)
            check_type(argname="argument traffic_mirror_filter_name", value=traffic_mirror_filter_name, expected_type=type_hints["traffic_mirror_filter_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if traffic_mirror_filter_name is not None:
            self._values["traffic_mirror_filter_name"] = traffic_mirror_filter_name

    @builtins.property
    def traffic_mirror_filter_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trafficMirrorFilterName: The name of the TrafficMirrorFilter.
        '''
        result = self._values.get("traffic_mirror_filter_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrafficMirrorFiltersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVSwitch(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosVSwitch",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::VSwitch``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``VSwitch`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVSwitchProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc425c5535aebe74f4c14f1afd2382f4d088cd20f1bbf57e02c8496e1feb4222)
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
            type_hints = typing.get_type_hints(_typecheckingstub__37119a521275c5a5f00866e0f9972dc10e870c47234943ef00f109ac1fd7f84c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAvailableIpAddressCount")
    def attr_available_ip_address_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AvailableIpAddressCount: The number of available IP addresses.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAvailableIpAddressCount"))

    @builtins.property
    @jsii.member(jsii_name="attrCidrBlock")
    def attr_cidr_block(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CidrBlock: The IPv4 CIDR block of the VSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the VSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of VSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv6CidrBlock")
    def attr_ipv6_cidr_block(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ipv6CidrBlock: The IPv6 CIDR block of the VSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv6CidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsDefault: Indicates whether the VSwitch is a default VSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The resource group id of VSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteTableId: The route table id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of VSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The VPC ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of the VSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchName")
    def attr_v_switch_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchName: The name of the VSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchName"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: The zone ID  of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1937281010686a8f05b6f6a10c0fc49da6f059ac295949cbc78b198f5a8b24ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5ebf174206f0cd9979693834c5352c2e525466eb14bdcd4a1da550ff0bbe27c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosVSwitchProps",
    jsii_struct_bases=[],
    name_mapping={"v_switch_id": "vSwitchId"},
)
class RosVSwitchProps:
    def __init__(
        self,
        *,
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosVSwitch``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch

        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e05a0beab73cf01f18b9e9ff90699d8442c3f3ea54fae634c95ac8f9463dcdfa)
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "v_switch_id": v_switch_id,
        }

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVSwitchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVSwitches(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosVSwitches",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::VSwitches``, which is used to query created vSwitches.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``VSwitches`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVSwitchesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02f9848278f7d01b25451c5ed90841763129bb0f5c7054d46d2c88ef40247b84)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5f491ebf28f8d1f13efd93c44da4e6d3d6b725e841dcf5d98b5d3a9d536ca16a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitches")
    def attr_v_switches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitches: The detailed information about the vSwitches.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitches"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchIds: The list of The vSwitch Ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__166b71de5aa6e0e7a45d263cbb51679e03f72faec3bf1d01f6fedf1b3b0dbcaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dhcpOptionsSetId")
    def dhcp_options_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dhcpOptionsSetId: The ID of the DHCP options set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dhcpOptionsSetId"))

    @dhcp_options_set_id.setter
    def dhcp_options_set_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35641d61554449a4b69644d7fdcf4bd0d5548174725ca08934a18565119a5498)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dhcpOptionsSetId", value)

    @builtins.property
    @jsii.member(jsii_name="isDefault")
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
        true(default): queries all VPCs in the specified region.
        false: does not query the default VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isDefault"))

    @is_default.setter
    def is_default(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e482a5247462491d2ea4035055aca505f85cffbebda3e17236e387b28657ad07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isDefault", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17c48d2a4539f191b77669e0e1abb6566b323a4c2cf696eabe80fe753d87df0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="routeTableId")
    def route_table_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeTableId: The ID of the route table.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeTableId"))

    @route_table_id.setter
    def route_table_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__918a1b2b959c72e44effa8e849daa597f51860ca95404ab2e77fc72219ff154b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeTableId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC to which the vSwitch belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2ac73d165834ed6320cfc8df3b0e25c388a4451c5257306ec4ad305eaaf2d45)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        vSwitchIds: The list of The vSwitch IDs.
        You can specify up to 20 vSwitch IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "vSwitchIds"))

    @v_switch_ids.setter
    def v_switch_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78f84095542a080fff9a5042a0c615c30795873d420cdca7d0589f4e17d8c080)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchName")
    def v_switch_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchName: The name of the vSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchName"))

    @v_switch_name.setter
    def v_switch_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec1fe4d8833e91a20f478815e159dd7b8dd3aeaf4d051408186947eb2cc51396)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchName", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchOwnerId")
    def v_switch_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchOwnerId"))

    @v_switch_owner_id.setter
    def v_switch_owner_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7bdcfbdd8e3453b174fe84c662861a7c83362e1c218fc68a8b2a9dd48f7b450)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchOwnerId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosVSwitchesProps",
    jsii_struct_bases=[],
    name_mapping={
        "dhcp_options_set_id": "dhcpOptionsSetId",
        "is_default": "isDefault",
        "resource_group_id": "resourceGroupId",
        "route_table_id": "routeTableId",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "v_switch_name": "vSwitchName",
        "v_switch_owner_id": "vSwitchOwnerId",
    },
)
class RosVSwitchesProps:
    def __init__(
        self,
        *,
        dhcp_options_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        v_switch_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVSwitches``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches

        :param dhcp_options_set_id: 
        :param is_default: 
        :param resource_group_id: 
        :param route_table_id: 
        :param vpc_id: 
        :param v_switch_ids: 
        :param v_switch_name: 
        :param v_switch_owner_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f369d6cb747f45da7eb40da4d52b92dafd720849d288ad7a917a5636b86dac75)
            check_type(argname="argument dhcp_options_set_id", value=dhcp_options_set_id, expected_type=type_hints["dhcp_options_set_id"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument v_switch_name", value=v_switch_name, expected_type=type_hints["v_switch_name"])
            check_type(argname="argument v_switch_owner_id", value=v_switch_owner_id, expected_type=type_hints["v_switch_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dhcp_options_set_id is not None:
            self._values["dhcp_options_set_id"] = dhcp_options_set_id
        if is_default is not None:
            self._values["is_default"] = is_default
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if route_table_id is not None:
            self._values["route_table_id"] = route_table_id
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids
        if v_switch_name is not None:
            self._values["v_switch_name"] = v_switch_name
        if v_switch_owner_id is not None:
            self._values["v_switch_owner_id"] = v_switch_owner_id

    @builtins.property
    def dhcp_options_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dhcpOptionsSetId: The ID of the DHCP options set.
        '''
        result = self._values.get("dhcp_options_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
        true(default): queries all VPCs in the specified region.
        false: does not query the default VPC.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_table_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeTableId: The ID of the route table.
        '''
        result = self._values.get("route_table_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the VPC to which the vSwitch belongs.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        vSwitchIds: The list of The vSwitch IDs.
        You can specify up to 20 vSwitch IDs.
        '''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def v_switch_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchName: The name of the vSwitch.
        '''
        result = self._values.get("v_switch_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
        '''
        result = self._values.get("v_switch_owner_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVSwitchesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpc(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosVpc",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::Vpc``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Vpc`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVpcProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ada0e5feaa0b6d1071dfbacb3fa515ced2e507662bf8dcc73df00fd0f1c875ef)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f41426e4072601a5032bbe3748506a61d61afb11d8fc2e288e0b8d3f64c82de7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCidrBlock")
    def attr_cidr_block(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CidrBlock: The IPv4 CIDR block of the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicLinkEnabled")
    def attr_classic_link_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClassicLinkEnabled: status of vpc  ClassicLink..
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicLinkEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time at which the VPC was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDhcpOptionsSetId")
    def attr_dhcp_options_set_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DhcpOptionsSetId: The ID of the DHCP option set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDhcpOptionsSetId"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv6CidrBlock")
    def attr_ipv6_cidr_block(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ipv6CidrBlock: The ipv6 cidr block of vpc.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv6CidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv6CidrBlocks")
    def attr_ipv6_cidr_blocks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ipv6CidrBlocks: The IPv6 network segment of the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv6CidrBlocks"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        IsDefault: Indicates whether to query the default VPC in the specified region. Valid values:

        - true (default): All VPCs in the specified region are queried.
        - false: The default VPC is not queried.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group to which the VPC belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouterId")
    def attr_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouterId: The ID of the VRouter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondaryCidrBlocks")
    def attr_secondary_cidr_blocks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecondaryCidrBlocks: Additional network segment information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecondaryCidrBlocks"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of Vpc.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUserCidrs")
    def attr_user_cidrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserCidrs: A list of user CIDRs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserCidrs"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcName")
    def attr_vpc_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcName: The name of the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcName"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchIds: A list of VSwitches in the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fb3cd312a20c27db412d74e9b02f54a2e3bb150446bef1ed322f74932cf411ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d38bf5f27e9353e09cc437319cf0894ef8f541605ed21fcb389c9be1d5743c18)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosVpcProps",
    jsii_struct_bases=[],
    name_mapping={"vpc_id": "vpcId"},
)
class RosVpcProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosVpc``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc

        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c747d78bae4a45a4425cd4d8dd4ac7d91109f868d3951044bca4ce409f8f76a6)
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vpc_id": vpc_id,
        }

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpcs(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosVpcs",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VPC::Vpcs``, which is used to query the virtual private clouds (VPCs) that you created.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Vpcs`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpcs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVpcsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44b2c89e720d857aa845782f4e8dc0178161a0b54658e0c359fb22ada68cf405)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7311a7f3cdabecbcaf14fda53318973ff7176bf370bbd8140f91a0eaada2a611)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcIds")
    def attr_vpc_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcIds: The list of The VPC IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcs")
    def attr_vpcs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Vpcs: The detailed information about the VPCs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcs"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__f493140bf69d4ddd126814eb1352206b42091abf82ea25fe6ef53ab4c7d829a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dhcpOptionsSetId")
    def dhcp_options_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dhcpOptionsSetId: The ID of the DHCP options set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dhcpOptionsSetId"))

    @dhcp_options_set_id.setter
    def dhcp_options_set_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__728088cea4db4a9bf1470775164e27bbf27cbf770a613e9919fef93786312869)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dhcpOptionsSetId", value)

    @builtins.property
    @jsii.member(jsii_name="isDefault")
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
        true(default): queries all VPCs in the specified region.
        false: does not query the default VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isDefault"))

    @is_default.setter
    def is_default(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41819ceb251ce6e4254a1897b772ce6d153d3c8749885035bea7631fc7eccc9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isDefault", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cdfd5d8bb07c0dbd8af5dbf1d38c929c9fd6592c396a1722ae3f26d2319b407)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcIds")
    def vpc_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        vpcIds: The list of The VPC IDs.
        You can specify up to 20 VPC IDs.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "vpcIds"))

    @vpc_ids.setter
    def vpc_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__332de94d1f919492e220b2406e6479122a1b30bee814d9079df59afed1bc72e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcIds", value)

    @builtins.property
    @jsii.member(jsii_name="vpcName")
    def vpc_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcName: The name of the VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcName"))

    @vpc_name.setter
    def vpc_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__188271bf501ce53e0a77da389a82e9f1e2642975f4533847226b47f46ae6cb37)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcOwnerId")
    def vpc_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcOwnerId"))

    @vpc_owner_id.setter
    def vpc_owner_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c460ab490a60ec9be5d11d1c8e0add451178bb7fb73918d1f290e07cd29bda2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcOwnerId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RosVpcsProps",
    jsii_struct_bases=[],
    name_mapping={
        "dhcp_options_set_id": "dhcpOptionsSetId",
        "is_default": "isDefault",
        "resource_group_id": "resourceGroupId",
        "vpc_ids": "vpcIds",
        "vpc_name": "vpcName",
        "vpc_owner_id": "vpcOwnerId",
    },
)
class RosVpcsProps:
    def __init__(
        self,
        *,
        dhcp_options_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        vpc_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVpcs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpcs

        :param dhcp_options_set_id: 
        :param is_default: 
        :param resource_group_id: 
        :param vpc_ids: 
        :param vpc_name: 
        :param vpc_owner_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abb8760bbb63445160fe3b4884e6d0e9330fb0958a8c5cb0b2a02f5eff7be39e)
            check_type(argname="argument dhcp_options_set_id", value=dhcp_options_set_id, expected_type=type_hints["dhcp_options_set_id"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument vpc_ids", value=vpc_ids, expected_type=type_hints["vpc_ids"])
            check_type(argname="argument vpc_name", value=vpc_name, expected_type=type_hints["vpc_name"])
            check_type(argname="argument vpc_owner_id", value=vpc_owner_id, expected_type=type_hints["vpc_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dhcp_options_set_id is not None:
            self._values["dhcp_options_set_id"] = dhcp_options_set_id
        if is_default is not None:
            self._values["is_default"] = is_default
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if vpc_ids is not None:
            self._values["vpc_ids"] = vpc_ids
        if vpc_name is not None:
            self._values["vpc_name"] = vpc_name
        if vpc_owner_id is not None:
            self._values["vpc_owner_id"] = vpc_owner_id

    @builtins.property
    def dhcp_options_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dhcpOptionsSetId: The ID of the DHCP options set.
        '''
        result = self._values.get("dhcp_options_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
        true(default): queries all VPCs in the specified region.
        false: does not query the default VPC.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        vpcIds: The list of The VPC IDs.
        You can specify up to 20 VPC IDs.
        '''
        result = self._values.get("vpc_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def vpc_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcName: The name of the VPC.
        '''
        result = self._values.get("vpc_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
        '''
        result = self._values.get("vpc_owner_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RouteEntries(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RouteEntries",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::RouteEntries``, which is used to query routes.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRouteEntries``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RouteEntriesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__342471c90ceb02adcf091e4e86b83cf5037070e62dcc40d44481cf7b0de083a8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRouteEntries")
    def attr_route_entries(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouteEntries: The list of The route entries.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteEntryIds")
    def attr_route_entry_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouteEntryIds: the list of the route entry ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteEntryIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28ddb28791c99eb25064fdb2641105bd33d240a20d67792a413805a291830599)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db7582d60a31bb8379b6b193ecfd35767bbdca818e3c9871d1adbae5dda68261)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "RouteEntriesProps":
        return typing.cast("RouteEntriesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "RouteEntriesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a712c121e23041e0b027181ac618d051de36fc48dd9b23b8b08a0a6422b6100)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__421ba7be107db2c62e725a38a9a0b4b21b02caef83375a0d816706cd6731487b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RouteEntriesProps",
    jsii_struct_bases=[],
    name_mapping={
        "route_table_id": "routeTableId",
        "destination_cidr_block": "destinationCidrBlock",
        "ip_version": "ipVersion",
        "next_hop_id": "nextHopId",
        "next_hop_type": "nextHopType",
        "route_entry_id": "routeEntryId",
        "route_entry_name": "routeEntryName",
        "route_entry_type": "routeEntryType",
    },
)
class RouteEntriesProps:
    def __init__(
        self,
        *,
        route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        next_hop_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        next_hop_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_entry_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_entry_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_entry_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RouteEntries``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries

        :param route_table_id: Property routeTableId: The ID of the route table.
        :param destination_cidr_block: Property destinationCidrBlock: The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
        :param ip_version: Property ipVersion: The IP version. Valid values: IPv4: IPv4 IPv6: IPv6
        :param next_hop_id: Property nextHopId: The ID of the next hop.
        :param next_hop_type: Property nextHopType: The type of the next hop. Valid values: Instance (default): an Elastic Compute Service (ECS) instance HaVip: a high-availability virtual IP address (HAVIP) VpnGateway: a VPN gateway NatGateway: a NAT gateway NetworkInterface: a secondary elastic network interface (ENI) RouterInterface: a router interface IPv6Gateway: an IPv6 gateway Attachment: a transit router
        :param route_entry_id: Property routeEntryId: The ID of the route.
        :param route_entry_name: Property routeEntryName: The name of the route.
        :param route_entry_type: Property routeEntryType: The type of the route. Valid values: Custom: a custom route System: a system route BGP: a Border Gateway Protocol (BGP) route CEN: a Cloud Enterprise Network (CEN) route
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__465a4df1a5dc37f3c4aefbc487b93600e83dd6122c850136747287517bf294f6)
            check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
            check_type(argname="argument destination_cidr_block", value=destination_cidr_block, expected_type=type_hints["destination_cidr_block"])
            check_type(argname="argument ip_version", value=ip_version, expected_type=type_hints["ip_version"])
            check_type(argname="argument next_hop_id", value=next_hop_id, expected_type=type_hints["next_hop_id"])
            check_type(argname="argument next_hop_type", value=next_hop_type, expected_type=type_hints["next_hop_type"])
            check_type(argname="argument route_entry_id", value=route_entry_id, expected_type=type_hints["route_entry_id"])
            check_type(argname="argument route_entry_name", value=route_entry_name, expected_type=type_hints["route_entry_name"])
            check_type(argname="argument route_entry_type", value=route_entry_type, expected_type=type_hints["route_entry_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "route_table_id": route_table_id,
        }
        if destination_cidr_block is not None:
            self._values["destination_cidr_block"] = destination_cidr_block
        if ip_version is not None:
            self._values["ip_version"] = ip_version
        if next_hop_id is not None:
            self._values["next_hop_id"] = next_hop_id
        if next_hop_type is not None:
            self._values["next_hop_type"] = next_hop_type
        if route_entry_id is not None:
            self._values["route_entry_id"] = route_entry_id
        if route_entry_name is not None:
            self._values["route_entry_name"] = route_entry_name
        if route_entry_type is not None:
            self._values["route_entry_type"] = route_entry_type

    @builtins.property
    def route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property routeTableId: The ID of the route table.'''
        result = self._values.get("route_table_id")
        assert result is not None, "Required property 'route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destinationCidrBlock: The destination CIDR block of the route.

        IPv4 and IPv6 CIDR blocks are supported.
        '''
        result = self._values.get("destination_cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipVersion: The IP version.

        Valid values:
        IPv4: IPv4
        IPv6: IPv6
        '''
        result = self._values.get("ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def next_hop_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nextHopId: The ID of the next hop.'''
        result = self._values.get("next_hop_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def next_hop_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nextHopType: The type of the next hop.

        Valid values:
        Instance (default): an Elastic Compute Service (ECS) instance
        HaVip: a high-availability virtual IP address (HAVIP)
        VpnGateway: a VPN gateway
        NatGateway: a NAT gateway
        NetworkInterface: a secondary elastic network interface (ENI)
        RouterInterface: a router interface
        IPv6Gateway: an IPv6 gateway
        Attachment: a transit router
        '''
        result = self._values.get("next_hop_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_entry_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeEntryId: The ID of the route.'''
        result = self._values.get("route_entry_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeEntryName: The name of the route.'''
        result = self._values.get("route_entry_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_entry_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeEntryType: The type of the route.

        Valid values:
        Custom: a custom route
        System: a system route
        BGP: a Border Gateway Protocol (BGP) route
        CEN: a Cloud Enterprise Network (CEN) route
        '''
        result = self._values.get("route_entry_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouteEntriesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RouteTable(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RouteTable",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::RouteTable``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRouteTable``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RouteTableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37e4939fceba09eb9b2988b987a695669f129d75025d3a767d97b667d0e20923)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the routing table.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Description of the routing table.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: Resource group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouterId")
    def attr_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouterId: The router ID to which the routing table belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouterType")
    def attr_router_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouterType: The router type to which the routing table belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouterType"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouteTableId: The ID of the routing table.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableName")
    def attr_route_table_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouteTableName: The name of the routing table.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableName"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableType")
    def attr_route_table_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouteTableType: The type of routing table.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: The tag.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The ID of VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchIds: The ID of the switch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a08629772b47823a68729e7d3fd0eced6d7d0c3613a2d7b4767ce271e36a7e13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28a102621ee6c599eb9debb5e2b61063334a189ca79b098c6af20566d03be51a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "RouteTableProps":
        return typing.cast("RouteTableProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "RouteTableProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c668b19ac08bb8664e475e4e2d561e7d9b0c4d31c2d163391ce232a67309bddc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b6ac787e9fe00d7ccafc8228c3485ceb2fe2e21a3d0823930b620e79b442bc7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RouteTableProps",
    jsii_struct_bases=[],
    name_mapping={"route_table_id": "routeTableId"},
)
class RouteTableProps:
    def __init__(
        self,
        *,
        route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RouteTable``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable

        :param route_table_id: Property routeTableId: The ID of the routing table.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e7f137d42b49b72454d65958e45dd24f7581f478265c6b290d08ee4bd553334)
            check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "route_table_id": route_table_id,
        }

    @builtins.property
    def route_table_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property routeTableId: The ID of the routing table.'''
        result = self._values.get("route_table_id")
        assert result is not None, "Required property 'route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouteTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RouteTables(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RouteTables",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::RouteTables``, which is used to query route tables.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRouteTables``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["RouteTablesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ada62a107a540475a61e6fa322acb92a9cfac432644dde220aa1e93d5743af8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableIds")
    def attr_route_table_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouteTableIds: the list of the route table ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTables")
    def attr_route_tables(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouteTables: The list of The route tables.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTables"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e4b6f6d12a29634bd6ef11c306767313fd3e78e101a6f9e9771c307702d0de2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf9b0417dc71135fccf4288a214e0b20ad3637dc9bb0aaf8b06ba4c2b098d2e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "RouteTablesProps":
        return typing.cast("RouteTablesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "RouteTablesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fee73a153506c234253d8499acb17e6e9ebed6c9e2760295d7b597c227c4346)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b71c216faf18798d14b0c0019187c15cc652443c3663f0fda3ab5d30d644228b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.RouteTablesProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_group_id": "resourceGroupId",
        "router_id": "routerId",
        "router_type": "routerType",
        "route_table_id": "routeTableId",
        "route_table_name": "routeTableName",
        "vpc_id": "vpcId",
    },
)
class RouteTablesProps:
    def __init__(
        self,
        *,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        router_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RouteTables``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables

        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the route table belongs.
        :param router_id: Property routerId: The ID of the VRouter to which the route table belongs.
        :param router_type: Property routerType: The type of the VRouter to which the route table belongs. Valid values: VRouter (default): VRouter. VBR: Virtual Border Router (VBR).
        :param route_table_id: Property routeTableId: The ID of the route table.
        :param route_table_name: Property routeTableName: The name of the route table.
        :param vpc_id: Property vpcId: The ID of the VRouter to which the route table belongs. The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f1dd76ec19c9c159d017c3d09b8d4a0dcb73506a3975a0126ea1324eb7d6ac0)
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument router_id", value=router_id, expected_type=type_hints["router_id"])
            check_type(argname="argument router_type", value=router_type, expected_type=type_hints["router_type"])
            check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
            check_type(argname="argument route_table_name", value=route_table_name, expected_type=type_hints["route_table_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if router_id is not None:
            self._values["router_id"] = router_id
        if router_type is not None:
            self._values["router_type"] = router_type
        if route_table_id is not None:
            self._values["route_table_id"] = route_table_id
        if route_table_name is not None:
            self._values["route_table_name"] = route_table_name
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the route table belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routerId: The ID of the VRouter to which the route table belongs.'''
        result = self._values.get("router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def router_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routerType: The type of the VRouter to which the route table belongs.

        Valid values:
        VRouter (default): VRouter.
        VBR: Virtual Border Router (VBR).
        '''
        result = self._values.get("router_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_table_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeTableId: The ID of the route table.'''
        result = self._values.get("route_table_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeTableName: The name of the route table.'''
        result = self._values.get("route_table_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the VRouter to which the route table belongs.

        The value of the RouterType parameter is set to VRouter automatically when this parameter is specified.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouteTablesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TrafficMirrorFilter(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.TrafficMirrorFilter",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::TrafficMirrorFilter``, which is used to query a filter for traffic mirroring.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTrafficMirrorFilter``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TrafficMirrorFilterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a6768f137fb0b64609784fd5d5b11cf8250db6ebb66ca476f8c89ba3c273ce5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEgressRules")
    def attr_egress_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EgressRules: EgressRules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEgressRules"))

    @builtins.property
    @jsii.member(jsii_name="attrIngressRules")
    def attr_ingress_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IngressRules: IngressRules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIngressRules"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficMirrorFilterDescription")
    def attr_traffic_mirror_filter_description(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficMirrorFilterDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficMirrorFilterId")
    def attr_traffic_mirror_filter_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TrafficMirrorFilterId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficMirrorFilterId"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficMirrorFilterName")
    def attr_traffic_mirror_filter_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TrafficMirrorFilterName: The name of the TrafficMirrorFilter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficMirrorFilterName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0a43555fc98102e6168e3aba47b87fb032552a32f0ea8d9311c03131b9df02f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d486a8f0cfd3c0f6cf0f7a378fa2f16fdd84b463a77e881766e9b6050da4ed9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "TrafficMirrorFilterProps":
        return typing.cast("TrafficMirrorFilterProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "TrafficMirrorFilterProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a151a3b577d03d11b2ffc6a7657351939a7d15854c24347c021015e3ed9a6c74)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1469ddd88a884506b7c55c4ebb04fab4c51d0f93ad22bb84a42c7e70cd80f5c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.TrafficMirrorFilterProps",
    jsii_struct_bases=[],
    name_mapping={"traffic_mirror_filter_id": "trafficMirrorFilterId"},
)
class TrafficMirrorFilterProps:
    def __init__(
        self,
        *,
        traffic_mirror_filter_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``TrafficMirrorFilter``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter

        :param traffic_mirror_filter_id: Property trafficMirrorFilterId: The first ID of the resource.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bb685a6c117ee70dfd2996238f553db411bf1f97dbc88cfcd4076700b21c8a9)
            check_type(argname="argument traffic_mirror_filter_id", value=traffic_mirror_filter_id, expected_type=type_hints["traffic_mirror_filter_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "traffic_mirror_filter_id": traffic_mirror_filter_id,
        }

    @builtins.property
    def traffic_mirror_filter_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property trafficMirrorFilterId: The first ID of the resource.'''
        result = self._values.get("traffic_mirror_filter_id")
        assert result is not None, "Required property 'traffic_mirror_filter_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrafficMirrorFilterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TrafficMirrorFilters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.TrafficMirrorFilters",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::TrafficMirrorFilters``, which is used to query filters for traffic mirroring.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTrafficMirrorFilters``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["TrafficMirrorFiltersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f67c736dff745ffe8e90b8f19230846dce28ef681a7d3604aa8ca6674f5386b7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTrafficMirrorFilterIds")
    def attr_traffic_mirror_filter_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TrafficMirrorFilterIds: The list of traffic mirror filter IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficMirrorFilterIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTrafficMirrorFilters")
    def attr_traffic_mirror_filters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TrafficMirrorFilters: The list of traffic mirror filters.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrafficMirrorFilters"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e90f8e465d149e1435f83bd61f1e07f6969e4bb7e9689a6c860da86f9068447b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3efc4985de0e41116a24a445df05e03cf97ee4aa65eb1452cacef3403a39df5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "TrafficMirrorFiltersProps":
        return typing.cast("TrafficMirrorFiltersProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "TrafficMirrorFiltersProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__071f86e307fa825f97ca31bf7161e1bb4d3cd96ba111e6557b47bd2895b2e597)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fff6643ba680fd4f6ee90c20c9c8bcdf5f134418e434258fd87499ee732cd24f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.TrafficMirrorFiltersProps",
    jsii_struct_bases=[],
    name_mapping={"traffic_mirror_filter_name": "trafficMirrorFilterName"},
)
class TrafficMirrorFiltersProps:
    def __init__(
        self,
        *,
        traffic_mirror_filter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``TrafficMirrorFilters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters

        :param traffic_mirror_filter_name: Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__789614f22c0e4416b1ea289077b20bf00e7c4dc29c6233d5c180809f1e94c1b0)
            check_type(argname="argument traffic_mirror_filter_name", value=traffic_mirror_filter_name, expected_type=type_hints["traffic_mirror_filter_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if traffic_mirror_filter_name is not None:
            self._values["traffic_mirror_filter_name"] = traffic_mirror_filter_name

    @builtins.property
    def traffic_mirror_filter_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.'''
        result = self._values.get("traffic_mirror_filter_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrafficMirrorFiltersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VSwitch(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.VSwitch",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::VSwitch``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVSwitch``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VSwitchProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f24b234a12926d4755cf33a2037e82e8b284081d6f363d82bc0540221c53401)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAvailableIpAddressCount")
    def attr_available_ip_address_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AvailableIpAddressCount: The number of available IP addresses.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAvailableIpAddressCount"))

    @builtins.property
    @jsii.member(jsii_name="attrCidrBlock")
    def attr_cidr_block(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CidrBlock: The IPv4 CIDR block of the VSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the VSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The description of VSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv6CidrBlock")
    def attr_ipv6_cidr_block(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ipv6CidrBlock: The IPv6 CIDR block of the VSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv6CidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsDefault: Indicates whether the VSwitch is a default VSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The resource group id of VSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouteTableId: The route table id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: The tags of VSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The VPC ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: The ID of the VSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchName")
    def attr_v_switch_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchName: The name of the VSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchName"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: The zone ID  of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0821730c10b145543169b1cf6ea82f57571be775bd9eb1dfa077d50809175138)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3059263c7f73945fc35ec9cd729121d3081ce0ca4cd649ca4d333c1eada4e000)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "VSwitchProps":
        return typing.cast("VSwitchProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "VSwitchProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47c2b58a7a67613e18424a2fb3fd5222a3dd6cd042a209804c782bb658385b68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__793ba4abf6c21460280c2a8c370229cd487eb596356f5a4f78463fcf6ec55ee2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.VSwitchProps",
    jsii_struct_bases=[],
    name_mapping={"v_switch_id": "vSwitchId"},
)
class VSwitchProps:
    def __init__(
        self,
        *,
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``VSwitch``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch

        :param v_switch_id: Property vSwitchId: The ID of the VSwitch.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31235d20e29f17269f1288dab3ab8a771a34c5e65333087c4cac25811e52e27a)
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "v_switch_id": v_switch_id,
        }

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The ID of the VSwitch.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VSwitchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VSwitches(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.VSwitches",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::VSwitches``, which is used to query created vSwitches.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVSwitches``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["VSwitchesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d508562261c04b59cdd7c60f845e6db4a62b84348163a2bd67310ecc7f839f6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVSwitches")
    def attr_v_switches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitches: The detailed information about the vSwitches.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitches"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchIds: The list of The vSwitch Ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca1bb4aefbae866eaac50a736e57d02fd428e6081f31ca383dbf489c2dd54aeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42795cd2048e70d2379e509f671dbaa05c118f10fc56f730a106425798998c41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "VSwitchesProps":
        return typing.cast("VSwitchesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "VSwitchesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0a8192a906176167c04222e3c39c3ef700adb2a672cfb576cc2ba74d6a793e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c652ed9a1efd13f57a00130c1c9459c896bd6c395bf0898103ffa4ef5c5c0fc7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.VSwitchesProps",
    jsii_struct_bases=[],
    name_mapping={
        "dhcp_options_set_id": "dhcpOptionsSetId",
        "is_default": "isDefault",
        "resource_group_id": "resourceGroupId",
        "route_table_id": "routeTableId",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "v_switch_name": "vSwitchName",
        "v_switch_owner_id": "vSwitchOwnerId",
    },
)
class VSwitchesProps:
    def __init__(
        self,
        *,
        dhcp_options_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        v_switch_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``VSwitches``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches

        :param dhcp_options_set_id: Property dhcpOptionsSetId: The ID of the DHCP options set.
        :param is_default: Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values: true(default): queries all VPCs in the specified region. false: does not query the default VPC.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
        :param route_table_id: Property routeTableId: The ID of the route table.
        :param vpc_id: Property vpcId: The ID of the VPC to which the vSwitch belongs.
        :param v_switch_ids: Property vSwitchIds: The list of The vSwitch IDs. You can specify up to 20 vSwitch IDs.
        :param v_switch_name: Property vSwitchName: The name of the vSwitch.
        :param v_switch_owner_id: Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72772ef7ab06ff45d3e7ab1ce2faf5e1901738bf7eb2ca658ddb925bacf98e29)
            check_type(argname="argument dhcp_options_set_id", value=dhcp_options_set_id, expected_type=type_hints["dhcp_options_set_id"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument v_switch_name", value=v_switch_name, expected_type=type_hints["v_switch_name"])
            check_type(argname="argument v_switch_owner_id", value=v_switch_owner_id, expected_type=type_hints["v_switch_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dhcp_options_set_id is not None:
            self._values["dhcp_options_set_id"] = dhcp_options_set_id
        if is_default is not None:
            self._values["is_default"] = is_default
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if route_table_id is not None:
            self._values["route_table_id"] = route_table_id
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids
        if v_switch_name is not None:
            self._values["v_switch_name"] = v_switch_name
        if v_switch_owner_id is not None:
            self._values["v_switch_owner_id"] = v_switch_owner_id

    @builtins.property
    def dhcp_options_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dhcpOptionsSetId: The ID of the DHCP options set.'''
        result = self._values.get("dhcp_options_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isDefault: Specifies whether to query the default VPC in the specified region.

        Valid values:
        true(default): queries all VPCs in the specified region.
        false: does not query the default VPC.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_table_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeTableId: The ID of the route table.'''
        result = self._values.get("route_table_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the VPC to which the vSwitch belongs.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property vSwitchIds: The list of The vSwitch IDs.

        You can specify up to 20 vSwitch IDs.
        '''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def v_switch_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchName: The name of the vSwitch.'''
        result = self._values.get("v_switch_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.'''
        result = self._values.get("v_switch_owner_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VSwitchesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Vpc(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.Vpc",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::Vpc``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVpc``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VpcProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5249c2bdd430445fa792c30594822f20fb9aa70cbcabeaf434ad8cf0d09bcf78)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCidrBlock")
    def attr_cidr_block(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CidrBlock: The IPv4 CIDR block of the VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicLinkEnabled")
    def attr_classic_link_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClassicLinkEnabled: status of vpc  ClassicLink..'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicLinkEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The time at which the VPC was created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The description of the VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDhcpOptionsSetId")
    def attr_dhcp_options_set_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DhcpOptionsSetId: The ID of the DHCP option set.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDhcpOptionsSetId"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv6CidrBlock")
    def attr_ipv6_cidr_block(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv6CidrBlock"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv6CidrBlocks")
    def attr_ipv6_cidr_blocks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv6CidrBlocks"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsDefault: Indicates whether to query the default VPC in the specified region.

        Valid values:

        - true (default): All VPCs in the specified region are queried.
        - false: The default VPC is not queried.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRouterId")
    def attr_router_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RouterId: The ID of the VRouter.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouterId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondaryCidrBlocks")
    def attr_secondary_cidr_blocks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecondaryCidrBlocks: Additional network segment information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecondaryCidrBlocks"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: The tags of Vpc.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUserCidrs")
    def attr_user_cidrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserCidrs: A list of user CIDRs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserCidrs"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The ID of the VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcName")
    def attr_vpc_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcName: The name of the VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcName"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchIds: A list of VSwitches in the VPC.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98d0807dc2bd45b0362395623f3335c0374bb927f9d9dc8a2dc609fb6fb455e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ee62f0483b5f9b10c46e9586b0b951b88fad819c50df7930f11b3cfb63a6a75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "VpcProps":
        return typing.cast("VpcProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "VpcProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1b63211507c75e5327e1177055fbc6cb514189acbd229c53c608e089741e75e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__305b2bf4c1d8f65b34173f4d1fc8d0930be620ab9e4632ba317c078c5f407729)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.VpcProps",
    jsii_struct_bases=[],
    name_mapping={"vpc_id": "vpcId"},
)
class VpcProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Vpc``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc

        :param vpc_id: Property vpcId: The ID of the VPC.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d738ed6bf9b765fd2bca73c6af73b8763c1353e596c8f08687a99ba08c7ea4c6)
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vpc_id": vpc_id,
        }

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the VPC.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Vpcs(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.datasource.Vpcs",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VPC::Vpcs``, which is used to query the virtual private clouds (VPCs) that you created.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVpcs``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpcs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["VpcsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6293ee7895aa812a231c5cb3c23c02d087a55e0bf9669f9b2490584914726714)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVpcIds")
    def attr_vpc_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcIds: The list of The VPC IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcs")
    def attr_vpcs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Vpcs: The detailed information about the VPCs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcs"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02a56bb51d45548210cf789a4131b049d3a4b9262cb662894172d4c4c4f5ebd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6d556cdf55807c0ff350e8c17353875567e55171caede7889ee159d24f7bfee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "VpcsProps":
        return typing.cast("VpcsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "VpcsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__339406b3df1231190cb847859464d63a48968a9ad2a9d8c2c2ce0c6158e78bbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f47a0b3e58fdaeae30d5fa3004e3199ee9acc9d3dcafec0a5972c2d4cc3c176f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.datasource.VpcsProps",
    jsii_struct_bases=[],
    name_mapping={
        "dhcp_options_set_id": "dhcpOptionsSetId",
        "is_default": "isDefault",
        "resource_group_id": "resourceGroupId",
        "vpc_ids": "vpcIds",
        "vpc_name": "vpcName",
        "vpc_owner_id": "vpcOwnerId",
    },
)
class VpcsProps:
    def __init__(
        self,
        *,
        dhcp_options_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        vpc_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Vpcs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpcs

        :param dhcp_options_set_id: Property dhcpOptionsSetId: The ID of the DHCP options set.
        :param is_default: Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values: true(default): queries all VPCs in the specified region. false: does not query the default VPC.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
        :param vpc_ids: Property vpcIds: The list of The VPC IDs. You can specify up to 20 VPC IDs.
        :param vpc_name: Property vpcName: The name of the VPC.
        :param vpc_owner_id: Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c516031ba3534d14a50e5eddf2a885ec9800275ce56f0e9fa0f244b8101443fa)
            check_type(argname="argument dhcp_options_set_id", value=dhcp_options_set_id, expected_type=type_hints["dhcp_options_set_id"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument vpc_ids", value=vpc_ids, expected_type=type_hints["vpc_ids"])
            check_type(argname="argument vpc_name", value=vpc_name, expected_type=type_hints["vpc_name"])
            check_type(argname="argument vpc_owner_id", value=vpc_owner_id, expected_type=type_hints["vpc_owner_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dhcp_options_set_id is not None:
            self._values["dhcp_options_set_id"] = dhcp_options_set_id
        if is_default is not None:
            self._values["is_default"] = is_default
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if vpc_ids is not None:
            self._values["vpc_ids"] = vpc_ids
        if vpc_name is not None:
            self._values["vpc_name"] = vpc_name
        if vpc_owner_id is not None:
            self._values["vpc_owner_id"] = vpc_owner_id

    @builtins.property
    def dhcp_options_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dhcpOptionsSetId: The ID of the DHCP options set.'''
        result = self._values.get("dhcp_options_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isDefault: Specifies whether to query the default VPC in the specified region.

        Valid values:
        true(default): queries all VPCs in the specified region.
        false: does not query the default VPC.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property vpcIds: The list of The VPC IDs.

        You can specify up to 20 VPC IDs.
        '''
        result = self._values.get("vpc_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def vpc_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcName: The name of the VPC.'''
        result = self._values.get("vpc_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.'''
        result = self._values.get("vpc_owner_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Address",
    "AddressProps",
    "Addresses",
    "AddressesProps",
    "CommonBandwidthPackages",
    "CommonBandwidthPackagesProps",
    "CustomerGateway",
    "CustomerGatewayProps",
    "CustomerGateways",
    "CustomerGatewaysProps",
    "FlowLog",
    "FlowLogProps",
    "FlowLogs",
    "FlowLogsProps",
    "HaVip",
    "HaVipProps",
    "HaVips",
    "HaVipsProps",
    "Ipv4Gateway",
    "Ipv4GatewayProps",
    "Ipv4Gateways",
    "Ipv4GatewaysProps",
    "NatGatewayZones",
    "NatGatewayZonesProps",
    "NatGateways",
    "NatGatewaysProps",
    "NatIpCidrs",
    "NatIpCidrsProps",
    "NetworkAcls",
    "NetworkAclsProps",
    "PrefixList",
    "PrefixListProps",
    "PrefixLists",
    "PrefixListsProps",
    "PublicIpAddressPool",
    "PublicIpAddressPoolProps",
    "PublicIpAddressPools",
    "PublicIpAddressPoolsProps",
    "RosAddress",
    "RosAddressProps",
    "RosAddresses",
    "RosAddressesProps",
    "RosCommonBandwidthPackages",
    "RosCommonBandwidthPackagesProps",
    "RosCustomerGateway",
    "RosCustomerGatewayProps",
    "RosCustomerGateways",
    "RosCustomerGatewaysProps",
    "RosFlowLog",
    "RosFlowLogProps",
    "RosFlowLogs",
    "RosFlowLogsProps",
    "RosHaVip",
    "RosHaVipProps",
    "RosHaVips",
    "RosHaVipsProps",
    "RosIpv4Gateway",
    "RosIpv4GatewayProps",
    "RosIpv4Gateways",
    "RosIpv4GatewaysProps",
    "RosNatGatewayZones",
    "RosNatGatewayZonesProps",
    "RosNatGateways",
    "RosNatGatewaysProps",
    "RosNatIpCidrs",
    "RosNatIpCidrsProps",
    "RosNetworkAcls",
    "RosNetworkAclsProps",
    "RosPrefixList",
    "RosPrefixListProps",
    "RosPrefixLists",
    "RosPrefixListsProps",
    "RosPublicIpAddressPool",
    "RosPublicIpAddressPoolProps",
    "RosPublicIpAddressPools",
    "RosPublicIpAddressPoolsProps",
    "RosRouteEntries",
    "RosRouteEntriesProps",
    "RosRouteTable",
    "RosRouteTableProps",
    "RosRouteTables",
    "RosRouteTablesProps",
    "RosTrafficMirrorFilter",
    "RosTrafficMirrorFilterProps",
    "RosTrafficMirrorFilters",
    "RosTrafficMirrorFiltersProps",
    "RosVSwitch",
    "RosVSwitchProps",
    "RosVSwitches",
    "RosVSwitchesProps",
    "RosVpc",
    "RosVpcProps",
    "RosVpcs",
    "RosVpcsProps",
    "RouteEntries",
    "RouteEntriesProps",
    "RouteTable",
    "RouteTableProps",
    "RouteTables",
    "RouteTablesProps",
    "TrafficMirrorFilter",
    "TrafficMirrorFilterProps",
    "TrafficMirrorFilters",
    "TrafficMirrorFiltersProps",
    "VSwitch",
    "VSwitchProps",
    "VSwitches",
    "VSwitchesProps",
    "Vpc",
    "VpcProps",
    "Vpcs",
    "VpcsProps",
]

publication.publish()

def _typecheckingstub__1fbf9e3a74da09e78933874fac77b87838dff6bd3c1c1f237808cc8d926adef9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AddressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9daffa87f363387f39fb9d2a06a7739cae1bec89e80afeb1344449fb15c7189(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26bed684679998f294c61a58a894c54cefd6f1a9cbbb3c47b25a0e3a05aa9a8b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d69772a01e1a06982c5afdddd0844a0111bac650b236ff1792ff9cbdcd88ac7(
    value: AddressProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73ded0e1c49bb4a315400f216a31110a02e9c7251f6e4c749790e305aff1f541(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__668ad709748e58c345f4525ed78fcb52188aa66fb8dad11e0ac193b8ebb6bdde(
    *,
    allocation_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4143b81dc5124e1b4b1e03d4dd2996ed0685e2081caa9e038caf76781eda7524(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AddressesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26ef870a0786d76a0ab420329880382dfd20071ab18d41c351efa8d6028b0ff0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2521b8208a938b8593332882b138d1ed951baa2b5264ff2e9065174366cd9fbb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82368bb998aa4e0321a66e7e7769ecb18150d165d36a34839bb6d92e03af47fe(
    value: AddressesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05fce6febc95385256e4dcd933865bd253c169347012fcdff64f1d7c51bf81b5(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5d39648d11c5c6d0978d816f8284b979efdb112cf83fb3ec01c3eba8f4d1591(
    *,
    address_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    allocation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    segment_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__beb082ca016dbf6af6db299506632a3df1ee5a80eb5e4784f52e07e197bc9d2f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[CommonBandwidthPackagesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8759046bd75ec66a2f1d9f1917901efda75fa57e5e75f3516ef97d71e730b878(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6763ac95b9b315a61316f8b06f0490a64226ecb77940bf782081e2d77d22a39e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39fade78b81d32a9a5434f62d746f0787425b0b029f3195e3f753ec18445d6df(
    value: CommonBandwidthPackagesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c365f8d96523bafd2f35b2a3e5cf050b6d5a6775b4cbf966e0854b7304b21e60(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57ea2bca7da69c43964acf4eb3a034125d7cd3c9d2561ece9031a4662ad42999(
    *,
    common_bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    common_bandwidth_package_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcf107254fc09ebe871a16f8c945f30a39e4da0527a49720e61d4be867b1a9b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CustomerGatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a832a507019a9ee1f4bb65b59aa50fa6446e7208a5700eba93a2fb4cfedae8b2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1909ebe22b67ffac6a3dd08856fc3a3a92534e07feb460719471aef4028a8a5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40903dba27741853a3039ace1e825e5ad6a31714615872dcc0e6e254bc14168e(
    value: CustomerGatewayProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d0f4239a003994b094ec5532b6c333987034657221925a79231d9c55dce8859(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f7c9194452c75282ba19761468c444205f12fd318d47401ee100749c17ebf53(
    *,
    customer_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0d7565e6d83d3387b0f6ab51368c7d45c7e2beae8a28159299162dc9624f736(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[CustomerGatewaysProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60c342b7ef3712d5781ae4928aeea12726480c00c499dfc7aa78e6621c099a85(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__425528edfba1e3edd791772bca172bb853b09682dc3e43c25702914b650fe5f8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52a546e487a7469b62ccde464eb0e3da92ac2961392beb41f1530145cddf520c(
    value: CustomerGatewaysProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8adbb7c59231f7a43bb83aebe8d990d92ebcf2600d8ee9c4e6610b12cb1edcb4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fecb5f48e6d172011c94161b55ad30a6bde530ce92ccaae8ee750d91f1b8f700(
    *,
    customer_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75bc1289744ae8aec935566b0e326c0deebe9bb2dc7a3f958c089a28848abca4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FlowLogProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__329fdd9496140983df175d77e2287d6da3b5314489d7449dc26799625d88aa5f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfab0ddc522c73eafa3b9f56ece9b49fa84e2bf63aacdc39d971df2c6edc65c6(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84392d547cd850662369ac52c340d24bf4145fda61b048a5b80a7fecb9eb0669(
    value: FlowLogProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ddcb298302576e2a095fc29c234cdfb2b955476ba1db257cebab35b2eea2355(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ced06b7a3f02579922229f6f9a57e7997dddbb220aa28f712d45d20ef5c5fc2(
    *,
    flow_log_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1892007d9702d590acac52d99c95cfb27c60935703c8dd1d8115ff13402a3b3a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[FlowLogsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ba9d2eca72f036f93a8c4c682f9cf22b5c86e5675f64e173461bc33f7cbbb18(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91fd0c454ba45908593fbf307fb9fe86d37374f4feb08ef0b4656906620c98e2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83ce146ac9907a2fd2552e82090a394c0d246b436dee7d707f0b12e9589d6459(
    value: FlowLogsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e8644d5f67b26ce92ff3d8421382221d24e3cfc3f686d254f27ec870091bc42(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9a22509c00e4e40d4dd42147bbf30cdde0e9e0b066eb2e8f947425f497a604a(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_log_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_log_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_store_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    traffic_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e87496160bedb9bb64982a4f4dd9f30a692fc7f93bb3974b5f8d17dce7f4b21(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HaVipProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e6e611f580bb71adaf331ac315201de5cd576c08e2b5b5dd3606745d3dec9a8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37b33123ea3beefbbbfdedc69c2e6c3849050f955a4be03c5d637cf5da4dd1c0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__658abd7818819ee829259a02aca6b9b9ce1c2e8d6ecddc0a8d2d4d9f39aa7709(
    value: HaVipProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61e3de8c5cc870b25c76186a0d43d5dbad2350ef9157fd156257adfb4966fb18(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3715e545e23477748d16e2eae32bf086984779623efeb952299f67a635f6494a(
    *,
    ha_vip_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2b227bc9a901f084fab9be49bd4937f47c00e700adb57c936c3c030598a4af8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[HaVipsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__433a5c2192a9d6c9eab31373c00df78fefecda3de78bfe472b549c7437c3eb17(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96b267819ff8dd2424c1799932089fa7835e83bf3723273720c6173958e5664b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a5bf823cd9032f4537ba6f6e61abd4f1a0a92915c0b2d9ad6eaf4946e4f4ebb(
    value: HaVipsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2443f80841fb25d1d2b1f596c2dcfdb0742da5ce5cc7ed78feaa3c74bbdc5e1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df219e8460c848389a7b244c6ffe61421b1affc76e39fea9717da4deed762ac7(
    *,
    ha_vip_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95f36267c10a12a1c49431c06e96f1285e416442802a949342e688c4ab418bd4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[Ipv4GatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf991f3d0280e1baa53893a0be2c3deaa487e0be427099ea2f465ee69b916d02(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbbb854f98d4786e7c061a2d00b1391f85d2443152f78addbbb2dbe9c101b9cf(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c497c03a98dc9d36c8553b64d2a6ec280dc2921e6d94ba2fcf59493d1a457d4f(
    value: Ipv4GatewayProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cae8cdf7ffd03bf3bf77022fde0723344681ca8cb73c297c0e54dc59091ee8ce(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da37b926c500a2004c505a4bdb8e44ceba34972730642d576949b4dc3196ba76(
    *,
    ipv4_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99a8d9b6a5f959b90ad445d976f85775102b074026815061e62d5b62ccd367b4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[Ipv4GatewaysProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e958277ca8b573325e08f3fbcf163e4c6e9b3bd23ecd5d880cf77f1b00c39292(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5fafe18a73cba1c9bfad6bd88de5e44b344b98d5caf3030a3369ede2c38165f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce0aae95550d02171f2f183fabef41ccaf327b40b425dd983c00c17449a61faa(
    value: Ipv4GatewaysProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffc72645f61bd105dd722f96772c3ca1e22a1e5d0798a495101a971e2e042f2a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02bf863e04564ce499fe3fd172a92f23b24fa008cee2c34f1e1fdd861c8a6ed2(
    *,
    ipv4_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv4_gateway_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16924f5d3d86ad012041a5f5f1f8b757a9e967de893b5e7556bab9eaa7a6ea69(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[NatGatewayZonesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88400bbde5b5609dd35af8a40fa63ed97fdbb4c2c1b796a364006e6e56233fc8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f5d3b46bc174a642ccaae657d497842e9fa4baa24ec48c8922480c491bd1abd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50b64a39579f854a4fa5428e78646e8c8eba49d4012c4fe023fe9a1eff8f8de5(
    value: NatGatewayZonesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de2e6c88ae3fcced07bf3af057ab27b8f498ba8955a3d60f23311eef76110057(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18d66ede8ae6b4969648ac5ba0823867ad03e07471e1604d8893958df9313c3f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[NatGatewaysProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3b0ccb66d0f146d74d84539c40138190eab60f2c9ff09af15104ccc068585f5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d5a77f2075c0ccae45b9c4ff3d982596345977e59695c3f167854e8e317abc9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d43dd4d3734b9291aba59c573cd4e6ca8aba3da509901227adb06a4c75af3863(
    value: NatGatewaysProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__547c0fd9b14eb9cd1d487b2af4d2c76f061b406f8f53c11bdc74a773c292da69(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__919da8f47e6d25c0c6a17564bc8c21fee43e7aa2dae3402ac31cca166fcfcd83(
    *,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nat_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__217f11457636b5a8c5d82e30f4cfe4dfda37234df3395ea03569aaf70fcebab8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[NatIpCidrsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3725be746919a656d835ca8f2816a179e427b0d7f1b6d055de4e56d3a0ec83d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c6cc61ac013070c42b71c7f82475b7f4bb34f775d4c66fb0bd4af53fa61582d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a52da54497c360cdc431a1b56c303eb308c7c60d1bf7e145bd5cd2bd0109552f(
    value: NatIpCidrsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9b478d9fc0e1a2815dc5efe9e9196fe0381e25b377c7b883ca728761a13682c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d61563f51a319679dfc278eaad11e9bf9e8b050bd50e7ee4e4896ee66db9fc98(
    *,
    nat_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    nat_ip_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c25d809b2d8a44e4c79dbc0866c6b646af05cd0c2f63a08adb45f549cd9329f5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[NetworkAclsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6fc79cff727f8222454efeafa2a50dc28d33f167791c0c89582a11c66eb9727(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1231422d9bdeabde39df2530ccfca3e9902321ce0805b53653fd67221bd9bff8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72ca3c6badf97f446f25e85d916c60e9378a6be9a8d634e8213d034761a8f6e5(
    value: NetworkAclsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9d9429da6a1023bea1907b16a55ce1b3c6758b8c70bb8cd4d3b0534aa1e0720(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78f8cc010e949310a2d003232ac7ebba9fe7844e939ac7c27b788bab07b3e9cf(
    *,
    network_acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df8840a660eb8ef5b6cd672b0fb7bb5ee7ead65d553aa319accf0013731ce1aa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PrefixListProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bef9e8a53ebdc107d86d4ad87d09ffa2bb4eacc177a2df4989a1523c430fa8f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecd2337a2d7c5cde78cd97725d296b0559dd8c4324f90a222573d0b17c154150(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__883020f0dc3681f7c1fb45d4e847ef69cf142976353fb630b30242de344adbd3(
    value: PrefixListProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ffd1455ddc6ad310336efb04ea8fabb1eaf8803cb1cfb0542cc2a5cf3e64f05(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d490c417cf8acfdf967f4276992760ab240ee6e14a48ca326f9ce292d663ece(
    *,
    prefix_list_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa75282a16ad708dcf67bc5a0bdbc9d84fe1dbf2a7f6024420560655708a9b4d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[PrefixListsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a7000212cf42b6a53c8089c04131959cf80bb9d4b1c4860fb5f6b0dd9080a3c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__966479cc9c8503ff6bef3d84c801bfb37d62c9cea93f0ee9b6275e462b630236(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8136b887d1ae71e2bd47f7f5123aa796a0b0a693428285a2e7aa8a779d110181(
    value: PrefixListsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ad4fb61ffbd440c3600028d786db56c587c4e9cb0be3791f4037f2b82ee08b9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fa763533ead71ced1c93b820c8f5372f67cf2db7c8ae139f4f41c407e9387a8(
    *,
    prefix_list_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76a4292e1e96493de8dbad3822e2b5b8c4a453dd09fd5a3f8f58a343dbdc1949(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PublicIpAddressPoolProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fa41b9968f2ded06d669747086a994c5aec807de4be14ff26fb164fdecee170(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5475ff6b08cd9974774bc2cb0fff36c057a2549e07ec076d5e1755e3e7ee5f81(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d73f969c1c8a508dcff6fa448d0a5b9d1f08724f946309022e6495105791035d(
    value: PublicIpAddressPoolProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d86162cd15fa2488ebaef54da307db43eb7d509ba8361378cbfb67209e114181(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e02c77c1001d7d2d995b945b30139af8d0dc27e8fbe23b8a6e96ffca6325a52f(
    *,
    public_ip_address_pool_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfd48fa21ebf5ad8e112ea281d76e3c36d00a1a2437de29468b287c477004e38(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[PublicIpAddressPoolsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f36aa659a14317d368f3fa921b0cae82316cd5847e54aef39a547ea8952bf7e4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f96347fbe0710024de0d04220142a0e3bf32b56594e18f9741ef28f76d1c37b1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75c47d42386597e8ffce72fd3f3114f487b5a80c4c42a11ab63179aa9ef9c8ed(
    value: PublicIpAddressPoolsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cbdc65ac49c8a84105234f719fc16e6518a8a363a7a1984ff078c4f805e988a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26bdb10886e58c45e8f1762590e0f795820766462714267648418597480086de(
    *,
    isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    public_ip_address_pool_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7d9e76b53ae8df636d048a98e17afb1cf2e3fdd20c9c08c5f5cb2d35b0248af(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAddressProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8772a1f0d8267a0df152b5cf1ad850ac68bd6d3f2bb7c21a0ae0bb6a2dfdb9fd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71adcd317b6b0d7b891c306f034afec9ca7c413c59d789166793e18bea36cc75(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c1ad31d4a2eb896fc65fed8005fe8b13f362e71a835e4c8e32cf1f7ad5633b3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4163ed11cc5ab6301903b3eca5cdc464b9c4498af406ad6a01a20866e5452eeb(
    *,
    allocation_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__051594fa0ef0c8ab9cc6c059c68ee0b6385c304711a0bdb856738865c9d1019e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAddressesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6898c255e273bde2e508b3197b417b7913721571cc52e0234d78fd262eff3b47(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e71e49af8193ebcbc88fae33dbfeb253828d597b66d4afe73aa768700c6c0c35(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deb1ee1d9be52820ae0fd24b1c06991c6505bb518c6035276574c9c335f745bf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99f711a8c85faaf7fd0773cc12eebc9e8df60838d0135decc823a151b08177a2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2f283cd70db1aa0f1330b15716cc3581481e4d91e989ee41f19b94338ba180a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2dc1eb2b5328b1d8e2571f08cbef2b5ee44a02f0e2375d2353409417cbef2bf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__271a2e2f64a440856d810efe717499999574eeec02daaa420db7dd9e6f466be4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95e24cf98cdad728d90f1df4d773cc0a3d64f5f8f01c65baec1e7cba0f20eea9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__772a9ff92d97d789115b16656601cdd566c12df96d069401c1b75d4357c4af78(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__848cf7499c482c703ca0ee89ee1ab0128e67845f0c19a46019e64a83f7538151(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce42e46c682e687c6f08e34c0540201b160f94b597fa651be7de67bba2119111(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27eb43042cd7900abc2b62c681c41957fcd17eee1e1bafe49f57a1c1e4a46324(
    *,
    address_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    allocation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    segment_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__facfdddbbdb438733b4fff75f12a6550c58e38a1885e3ea5358cdf0cfdb3a2f4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCommonBandwidthPackagesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e63b6610851321beac692220bfa68d09a48513377b4387446b44e039db069288(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2f5e3d4799322a1ed874fa6af976b51e1c757f930cbf792f2f041b2bcd9ba6e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68cdeef7e84f528b8d0db9582b3094e3da95c602a56870ecabd4bc2b19f518f2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdd5d907e4f99adf5cb9676e663a12a2d13a9650b53a75deeb7324434c947728(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8fd7fb2a2f885afc51dcbd05f2426339f282f02369dad481f5ffa6f08effad1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07624ca44d0b2f2df490a21419bf22cc32efa4ab7ab6625d6fad50cfdfe9dda7(
    *,
    common_bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    common_bandwidth_package_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea96db29a735025e5c1f563906f3ea7aae486853a2c69fa566f4363d081963ca(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCustomerGatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a97e3e7dd0aeab33608d3a1b3a0b83b1d2add3b31e993f6746b661823ddf089(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__604b74c18e95cb50742f1777906dbe27ea7822979ce7dca926008c50fcc1df47(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a620cb0709c43ec80f0adef19b3636d7323b0065ba798370a47746d0d8bf728(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96fe90d04de211e2905d3b8173129627e3f32daa277459e559c367974c50e6d9(
    *,
    customer_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59a347ff8ed15ae38a26f60256aa28c4837318469b64705b322bcd6df17d8a7d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCustomerGatewaysProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f41cdb60e9dcc5f6d878a5f3af75a1df8deb3d457f2375fd3be802de55fc258b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c3c3bfbc84e06f905857fa56d56c8533ebb1946bc26cd804fa2de82f872e60e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9cd65e1119636b62956af522d2922ba898d5516337c03b5199aac4c7545204da(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7ff509ed415cbd19e9751ed801119d511c0c498ad922aeed3dc21fd0813ff99(
    *,
    customer_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64b64b4063e587cacccb5b8005e35bb3a18d22de15017406990cf8e714ea2dab(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFlowLogProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ea0f94be78dd0416f68c4b45ddb531f96a5de647f6d46562f236db0ed3f2af0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a78edef284ad9f72c5abe52be32456438db15ced6760406b0de4e661eda6926(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__475c06adb8b60959434a31852395b2e26256ce6d17847a4d99331324927d0173(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50c346a9dc38b3324636b7514e5206f303d33bc95f1e356213487b5ad57be333(
    *,
    flow_log_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__195f2ea5b9cf9628764be1955953a9a56dd623408c1b2228e96371fd3ef36f0a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFlowLogsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83ec5212e8447ec4a19729038386d8f0624543e5bdd44b3ddb359143d7266070(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81fd339750bcc4b453268a0f6990f46aa79cdb3877617ff6ff944e5c77d1d930(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddb24492881d588afb90f732f3ea57b3e637216fbb2c9a45143a5b8516b8ac72(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2e268805b58b9eff5920f512f9da5db3c8c4bc9a4acaf42eabeae37fdfbf771(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4273797f35e5a2c8a6947e96b4fe7d4fc22faf1c67971a07982f247018daf95(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__729b6328b5569e6e614923b0bae457f4e2700086ea5013de752f14d682ed206c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c94400d6c2e768a2df21897082b201043c8e2b17795c903aff6b43a2810fe91(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32e95a180ce5e5ed4785d0ed1cf956efc61dcecb0af427c31447a1b78107e314(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ca94a6788f21ad02917003ee9b17b4a1238514c221a3858487e7c9bff3caa3d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c93b74c0f83f5c0113f8a1191459dddb1766e510b697639ea9bef0e1e61924c4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c775176dc32334e3bb25153cdc5e9fd1bf02bcf296e7724a06b9f621a7268e2(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_log_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_log_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_store_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    traffic_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1671d938a13bb56bda397761b066224199ffc5b7734571fdd01f9a8cc59b37e4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHaVipProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d009c453bbe359ce20db655d75280310fd5b838059e0a5187ff2962547d9975d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e507b4564adf64b4b2b2d2bf84fa6a70f5c44d62379a8f8fb14338a116d09e65(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8be70b1e603f3b4e10d9551f6e135b562c0d5a0fc045080973be499a0866f6d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fcc6c716e197f06ce0623a06aa1d9095d0780fe9bfb83127f710045b0cea04d(
    *,
    ha_vip_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b2754f339276583cc9a34cfb26668eedaabd1793c5114d45e2c1dabbf60ce51(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHaVipsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7d63c18768de183af8f2c7c44f04c8ba3f6b6b8bc5060d120787e3d050ea90b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db6e9aec83168258f95884cd63108ae262c8633e5b70e1a67e6015241190a1f4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdc18b59dfa8beb06e036beb135184786b42e82961ef58bb78bfbcaad0dbdc85(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5807a81211670f0d84ab752d061d4ee9993bf9d593317a5c65327ac65420cb4c(
    *,
    ha_vip_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6917f1bc1998d197eab662f9485ae627f4ccde1abeda21218f4f9bd75ad565d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosIpv4GatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a10a7c34531ff84cb9a04b8ea962f9c75b7a9d51367266a039798147b3681086(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0265467039d3b9f2fb23c671ca64568e227d50b92e1a1416e6e95dd9bad3c117(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1faf10a4b972666c5cccba0b9956dba3ad65fe420ac539ef5d8a1af1206aaf4c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43197eb30d6409008b0640a3476bd8af81c8ce1532cf6af4b876b7a3510e1364(
    *,
    ipv4_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38eea30f6b008cc3889cc86862e8237ea940a44416a7c9585385e98175e27351(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosIpv4GatewaysProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d28e0a0a69b0a4c7610a8ca9fe590fffabdf742cc7fa79c679cc6a0aaa205036(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__401cbea151462840a2698a646bc6c6f66a117baaf4cf38b27f636b3a700f135d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fb5c10f48e2499cf1e2f15f5ecd89e09112f853ce57901779c8790aebe9cd69(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ff9028915c77197371fbec2b49a0eeb58005ab5ffd07bdd9f0e0402a18e78a1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42f51e1793464186f373c3b2a5a5a563566750e42948d3b386d46438507e2fc1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__effd3cf1caec0be4bd90d42984462d02270e27f939303f0e227ae6bfd8e34c00(
    *,
    ipv4_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv4_gateway_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7527f3902c94828f6fe375f1d84c5cbe71add4e40529be473c95a4138c6addb5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNatGatewayZonesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bd532d24bbb398130d021e92b27fe34b3f2970a3f6ab30f538da4bf1480281f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb016118671bbd3830c9ec74c53237a99015c64da65daa98df21e541525bb387(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef0b4e8df3c740b9e30c6d495d7d43ae8df7ae932adf3a01eb7d0b223c91a057(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNatGatewaysProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05762abe8262ec6586536ce1cf42424c65b27aede305d58616e524a09cd64694(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94c50388b2aa27ad6a3463bda4f8d4d7eecdd485959db94d400028e170906b8b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e6671f72cc2d6beecc9b6ac2dfbc1b132e6ce05887eacda437f7c4c9d6a414f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fab9e75f64b0e9e60d0af81f4f65fe1456be842cd4d471941f1bb3d85acc695(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4f24c15dc01b8de6ddd9356329b4c96e4eb410de0186dd397975f5905c90c23(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e29286df9c42392cf9f2bc831d94ac347388d9fb90fae8a8338f230780e0ded(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73299079b92d7ee1e8c179f891db69eb50d1e243b92a7f9c66ca6a21f657d54f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b766a1f277d3694b3666184d21bb159e627d20278bd7f60d1edf2f5570375cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef0ae238d3f08000df6fc340f48ec610b54e3a3bb682635ca631c1abb506fa9d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__018f95ee99ea0172b84d9292f3944f898314cf31e9bcaeeb07d4429099508890(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efa2016e99cba700611852ef26baeb9911afab5059cda9d8521c5c8447e6d90d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93c4f3f3e3cdbe008095ff98b57c2f81f4c2208ba09731f39d0d7bd796e31d73(
    *,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nat_gateway_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4d154086385788ca899517d31c47580210d78db53a7bdbe5b1d6d5a322d7148(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNatIpCidrsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__330b2dee771b7438e29fd24919deaaced625b335e5f9e6b2b48dbf2322c863c3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aea3628c32d6509ea60a840e4b30a10732617d0dcf6f077ca90230acf416e7b6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__795b2f96b4a11b2cee2a2daa0418018ab281fd50fa2193de0e80e19936ae7d38(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3beda15f03c11a4ebfc147d6577df7edac415784fc8cf9dbe984e9e4f00bddbe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c25ce3704c24f0317965d3bf8e17a0392377b9fccce961e129ec8344d374b656(
    *,
    nat_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    nat_ip_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46cbf570264e81e06c52cf0977d6a463ac1392f6a434f1ecc88c9c6e25b7a75b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNetworkAclsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3446d9705b8ea17ccfe8b3dab15016494ab33385125f9d04619d47e1bd77780(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e81a22ad4ff11f8416fbe5e89cbe108f0d71758d33bdb93a7d1e8f1299230635(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c0ffcc3b1ea885fd26aa970cb7edb287503beb655368c176bfeeeef3a43d8db(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__496f36353e4213697896d4b0f850efb6ca40b30d754142a60c6f09dc62149f0d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06985448cbaebf9c94c17b389331ecdf4164579358bbe209c35cb79161171bca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a8036c9ff6d3793e765ec0e04cd123927f947571cd1227af4df6cd4d7208adc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f85fca06bf7f75dd527510fca7272f3353428147365134bc7923b17d33b9c34e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb87d1037feecb6155bfc57c4c929ac5d3bf19085687a4137d52a5d1b88a8891(
    *,
    network_acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1b33107c0ecba5d04741c3b57e6e69c44631ee7e3609eef96c6923e53f82726(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrefixListProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03de9af50493ebbe4eebe2526d787d78d3fec849f2545603abaeb6d7d973f99b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f3f99951ecd6a98e555af249f9b808d65e6ac3ca97b61540f1c376f934a9fd4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__033a17e2a9c8197453a11b1c8f017f69d504e5f57a01b8e55fbb7a8497393fbb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa57a0442919cb80cc0e2ce28ceda81baa7bcc5c3d3863e3eb46dd38c582eb36(
    *,
    prefix_list_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d8aae2e27a88c936451b3d154df43a43b1894dfa00dcfe7554b1ba806d66dab(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrefixListsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2be9a627e9a95fc963681e9bac245fdb20ab5a6628be1d091a3030e66ec18160(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d175de3bf06ad3aed40b482368565d4979bcffbafd82a003511685c8e8238f94(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aac6c0683a1c88e2267408937eace2bceea9b57418d78e289a41b19e9511c0b5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff58570e87f1c3087d44931afd50ea46e1cdd22216f67ef2df26295cbe2233f5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__792f9d13f75f883ce393dffec8a2cfd1e5a1b9ee92d43b857be0c9a4a02ff3e9(
    *,
    prefix_list_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09ae690907c68031d4c7e1ee561d12ec9f12a315d8bd1a0ef39e74d4b8b177c9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPublicIpAddressPoolProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__595f9d07c1beffa5f25146234fb2ccabc96b7e277be4d50a680edaeefc69120b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6103a10b67044c2c7a779808fad07e367460f1cd5717d74b35340796f32e159e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__185e50d4da90691fd6e31b42d37bb7675ffbfce73d5213cfcfceb82ccba77c1b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__428cc5d565f2561fb378fc16dd69800be4dffd6caa0035fc217d6206c3167334(
    *,
    public_ip_address_pool_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83129a139143c20a91f6eb35914f0c74580acb19a698ecf06afb55a1be574864(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPublicIpAddressPoolsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea979dd6e4b04e1c1f09f3fd57cf5ac78540489ea202be053f689df96447ddad(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a3c97014039f798d6dd2e1809af0a61ae604489329321b675b23a62e10c4910(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d93cd449b2e523277ae8d1d5a3777965cd10b8c25022f1f926b21ac40685469(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c556449d133c3cc9625a1ccc61d7bb84e9e8349804848ed5d129ec728f46d6a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__047b1fd0168e5954bbc793333af44b5c84870a8c6f5c3e9f6ef30f1c8ca9dbbe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__350e81c7f9d8935ceb7eb00618bb797a133937c0156815f08c6565bb256f123d(
    *,
    isp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    public_ip_address_pool_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84e04367f6dbcc1167417352223d8c58eea87d506057325fffeaa88042f898f0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRouteEntriesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4deac13074a0065858b0a26390fc9253126a2b7cc3529211a2019bb02f4ab8c0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fe564ca4947a28e2721f887350ec702a9929e8ba360220be440585cc0d881ef(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d28b0bcbbff3e7d8be4ffb5e1c84b1852b24ba81a40cde2949cb6a33a9d00ab(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94060e8a682060b3f13998c5574cbedfd7010c71e80714799226a757a04ad67f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fec93adbc6d0505d4b8924d89eed1db65fd261f5befc49ea6f503c544db1e8f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30e47e55d27b5b35e4a872c629859f6332bcf879cac81dec2bb43bfdb96a6cdb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c84179df3548b26bf5be4d0dcde64cdab557b5d0200c5d326896a26181d380c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64b4749331f8ba51211d750f124457870e50829f2ebdf3498a1d4d4d133bf262(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__650b60de20dda6cfce94ec8246fa390144a63081fc7821aea911d91d02534bca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f22b4af5a278793b30a3dece084f45c869fe88fe94a87d3a9b50477ab2945220(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__246f402d466bf85034b909ce8779c0bbe17a4afe6750aa648ffc514bd2355f7e(
    *,
    route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    next_hop_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    next_hop_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_entry_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_entry_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_entry_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1023c84e4e628c41840e07a683d00aa5a89c822812c43aa7ab21cd03bbf263ac(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRouteTableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5b78c48f26d45b889cdaccc982f6d2253bb50ff27fe37dd1e99bb4b8c0d180f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b30c40090fa0a2a5e18157e88a68a2f98749826deb49a279b865cf892c8a45e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2a7377d47d9e52df288385da008b593bf20a3c9e615d12c3748ab75a0a94644(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__beede6ec80de0543585d5400615604057f23b74f09a40005e57b9c90ebc434af(
    *,
    route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04beac1c46c587059485c9920e73209c4f8c8e0348218338c4c87c0ae28abf5b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRouteTablesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0a933100f2b370022206602e3ef71559c146204da8f016ebd62b0d0b6e2f3bd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ab46c9ba51ed9e3c90286256cd5e32b97f033709d9b30b9267c86d6d8df72e2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4aa4f470d1dcdb9c4ec2de78fec60986da8f493d81e61cc8e2f6dd5dffc1e9c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9f15e644ce7c66df8e5921bb192964005e6cc0566155ad7ebd61c404cc85433(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfeb2249c865493a73507fad010733d8ccb22ca2a0c9dd992b8e154d16f2f04c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__632209c6581691647220c04520c26f78108fe48a14326b3c5585482392afb1c1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__996e4ee786cffbfc44ae02c4a088b1c1c118a93e5ea157cb8bd035b53e4a64f9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82f6cd8252390e43d7db666802db3ba9405a2296a5007061190e23d8f1c9cd86(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6daee7717a23a65251743021a1cd19a72cca41d4a365dcbd941ef94deeee459(
    *,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    router_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff12f2d39007d03b4f2b72d873cccc56843e3d0e026791196a0ab3641d307ce9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTrafficMirrorFilterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bcf6f50690b56c7a122c58c7bf1fa61601e3f32a3877977204941d835521d72(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__951f74ac062de571ab10c45c26048c85f8f7fc0cd539d831afc2396f36a2e6fc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8f17cd1b8b18f0cb077f43446f31cbe5ea487c459220d64a8be14df29408a39(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7a44eb27d37ecdd286545a89d99db4df6acb62da3465e449be1dcf34d8759d4(
    *,
    traffic_mirror_filter_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a419e405a26dda2799adbd5a274e9f781f1d14408221fa85d61bb5f0c38b749(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTrafficMirrorFiltersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__454cea27874a1dd3919905d3ac5c4e61a77b59186f701f96204693b885c11728(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbb99275bf83bd84f5e33a25ac60187f57fa2eb1d712303c5a877eee1ce8e59e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__088da2930e89486029ffcace01ce6022c268ed813a0bdd775247cd55946b02fb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a375f14ddd583e747ee06d2d15780a0cdf1c4b4277254f7814774f7c1cfea23(
    *,
    traffic_mirror_filter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc425c5535aebe74f4c14f1afd2382f4d088cd20f1bbf57e02c8496e1feb4222(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVSwitchProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37119a521275c5a5f00866e0f9972dc10e870c47234943ef00f109ac1fd7f84c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1937281010686a8f05b6f6a10c0fc49da6f059ac295949cbc78b198f5a8b24ec(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5ebf174206f0cd9979693834c5352c2e525466eb14bdcd4a1da550ff0bbe27c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e05a0beab73cf01f18b9e9ff90699d8442c3f3ea54fae634c95ac8f9463dcdfa(
    *,
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02f9848278f7d01b25451c5ed90841763129bb0f5c7054d46d2c88ef40247b84(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVSwitchesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f491ebf28f8d1f13efd93c44da4e6d3d6b725e841dcf5d98b5d3a9d536ca16a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__166b71de5aa6e0e7a45d263cbb51679e03f72faec3bf1d01f6fedf1b3b0dbcaa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35641d61554449a4b69644d7fdcf4bd0d5548174725ca08934a18565119a5498(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e482a5247462491d2ea4035055aca505f85cffbebda3e17236e387b28657ad07(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17c48d2a4539f191b77669e0e1abb6566b323a4c2cf696eabe80fe753d87df0e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__918a1b2b959c72e44effa8e849daa597f51860ca95404ab2e77fc72219ff154b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2ac73d165834ed6320cfc8df3b0e25c388a4451c5257306ec4ad305eaaf2d45(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78f84095542a080fff9a5042a0c615c30795873d420cdca7d0589f4e17d8c080(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec1fe4d8833e91a20f478815e159dd7b8dd3aeaf4d051408186947eb2cc51396(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7bdcfbdd8e3453b174fe84c662861a7c83362e1c218fc68a8b2a9dd48f7b450(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f369d6cb747f45da7eb40da4d52b92dafd720849d288ad7a917a5636b86dac75(
    *,
    dhcp_options_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    v_switch_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ada0e5feaa0b6d1071dfbacb3fa515ced2e507662bf8dcc73df00fd0f1c875ef(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVpcProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f41426e4072601a5032bbe3748506a61d61afb11d8fc2e288e0b8d3f64c82de7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb3cd312a20c27db412d74e9b02f54a2e3bb150446bef1ed322f74932cf411ea(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d38bf5f27e9353e09cc437319cf0894ef8f541605ed21fcb389c9be1d5743c18(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c747d78bae4a45a4425cd4d8dd4ac7d91109f868d3951044bca4ce409f8f76a6(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44b2c89e720d857aa845782f4e8dc0178161a0b54658e0c359fb22ada68cf405(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVpcsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7311a7f3cdabecbcaf14fda53318973ff7176bf370bbd8140f91a0eaada2a611(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f493140bf69d4ddd126814eb1352206b42091abf82ea25fe6ef53ab4c7d829a5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__728088cea4db4a9bf1470775164e27bbf27cbf770a613e9919fef93786312869(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41819ceb251ce6e4254a1897b772ce6d153d3c8749885035bea7631fc7eccc9b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cdfd5d8bb07c0dbd8af5dbf1d38c929c9fd6592c396a1722ae3f26d2319b407(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__332de94d1f919492e220b2406e6479122a1b30bee814d9079df59afed1bc72e0(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__188271bf501ce53e0a77da389a82e9f1e2642975f4533847226b47f46ae6cb37(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c460ab490a60ec9be5d11d1c8e0add451178bb7fb73918d1f290e07cd29bda2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abb8760bbb63445160fe3b4884e6d0e9330fb0958a8c5cb0b2a02f5eff7be39e(
    *,
    dhcp_options_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    vpc_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__342471c90ceb02adcf091e4e86b83cf5037070e62dcc40d44481cf7b0de083a8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RouteEntriesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28ddb28791c99eb25064fdb2641105bd33d240a20d67792a413805a291830599(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db7582d60a31bb8379b6b193ecfd35767bbdca818e3c9871d1adbae5dda68261(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a712c121e23041e0b027181ac618d051de36fc48dd9b23b8b08a0a6422b6100(
    value: RouteEntriesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__421ba7be107db2c62e725a38a9a0b4b21b02caef83375a0d816706cd6731487b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__465a4df1a5dc37f3c4aefbc487b93600e83dd6122c850136747287517bf294f6(
    *,
    route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    next_hop_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    next_hop_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_entry_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_entry_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_entry_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37e4939fceba09eb9b2988b987a695669f129d75025d3a767d97b667d0e20923(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RouteTableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a08629772b47823a68729e7d3fd0eced6d7d0c3613a2d7b4767ce271e36a7e13(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28a102621ee6c599eb9debb5e2b61063334a189ca79b098c6af20566d03be51a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c668b19ac08bb8664e475e4e2d561e7d9b0c4d31c2d163391ce232a67309bddc(
    value: RouteTableProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b6ac787e9fe00d7ccafc8228c3485ceb2fe2e21a3d0823930b620e79b442bc7(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e7f137d42b49b72454d65958e45dd24f7581f478265c6b290d08ee4bd553334(
    *,
    route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ada62a107a540475a61e6fa322acb92a9cfac432644dde220aa1e93d5743af8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[RouteTablesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e4b6f6d12a29634bd6ef11c306767313fd3e78e101a6f9e9771c307702d0de2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf9b0417dc71135fccf4288a214e0b20ad3637dc9bb0aaf8b06ba4c2b098d2e8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fee73a153506c234253d8499acb17e6e9ebed6c9e2760295d7b597c227c4346(
    value: RouteTablesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b71c216faf18798d14b0c0019187c15cc652443c3663f0fda3ab5d30d644228b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f1dd76ec19c9c159d017c3d09b8d4a0dcb73506a3975a0126ea1324eb7d6ac0(
    *,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    router_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    router_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_table_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a6768f137fb0b64609784fd5d5b11cf8250db6ebb66ca476f8c89ba3c273ce5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TrafficMirrorFilterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0a43555fc98102e6168e3aba47b87fb032552a32f0ea8d9311c03131b9df02f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d486a8f0cfd3c0f6cf0f7a378fa2f16fdd84b463a77e881766e9b6050da4ed9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a151a3b577d03d11b2ffc6a7657351939a7d15854c24347c021015e3ed9a6c74(
    value: TrafficMirrorFilterProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1469ddd88a884506b7c55c4ebb04fab4c51d0f93ad22bb84a42c7e70cd80f5c3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bb685a6c117ee70dfd2996238f553db411bf1f97dbc88cfcd4076700b21c8a9(
    *,
    traffic_mirror_filter_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f67c736dff745ffe8e90b8f19230846dce28ef681a7d3604aa8ca6674f5386b7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[TrafficMirrorFiltersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e90f8e465d149e1435f83bd61f1e07f6969e4bb7e9689a6c860da86f9068447b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3efc4985de0e41116a24a445df05e03cf97ee4aa65eb1452cacef3403a39df5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__071f86e307fa825f97ca31bf7161e1bb4d3cd96ba111e6557b47bd2895b2e597(
    value: TrafficMirrorFiltersProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fff6643ba680fd4f6ee90c20c9c8bcdf5f134418e434258fd87499ee732cd24f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__789614f22c0e4416b1ea289077b20bf00e7c4dc29c6233d5c180809f1e94c1b0(
    *,
    traffic_mirror_filter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f24b234a12926d4755cf33a2037e82e8b284081d6f363d82bc0540221c53401(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VSwitchProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0821730c10b145543169b1cf6ea82f57571be775bd9eb1dfa077d50809175138(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3059263c7f73945fc35ec9cd729121d3081ce0ca4cd649ca4d333c1eada4e000(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47c2b58a7a67613e18424a2fb3fd5222a3dd6cd042a209804c782bb658385b68(
    value: VSwitchProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__793ba4abf6c21460280c2a8c370229cd487eb596356f5a4f78463fcf6ec55ee2(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31235d20e29f17269f1288dab3ab8a771a34c5e65333087c4cac25811e52e27a(
    *,
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d508562261c04b59cdd7c60f845e6db4a62b84348163a2bd67310ecc7f839f6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[VSwitchesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca1bb4aefbae866eaac50a736e57d02fd428e6081f31ca383dbf489c2dd54aeb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42795cd2048e70d2379e509f671dbaa05c118f10fc56f730a106425798998c41(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0a8192a906176167c04222e3c39c3ef700adb2a672cfb576cc2ba74d6a793e0(
    value: VSwitchesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c652ed9a1efd13f57a00130c1c9459c896bd6c395bf0898103ffa4ef5c5c0fc7(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72772ef7ab06ff45d3e7ab1ce2faf5e1901738bf7eb2ca658ddb925bacf98e29(
    *,
    dhcp_options_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_table_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    v_switch_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5249c2bdd430445fa792c30594822f20fb9aa70cbcabeaf434ad8cf0d09bcf78(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VpcProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98d0807dc2bd45b0362395623f3335c0374bb927f9d9dc8a2dc609fb6fb455e1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ee62f0483b5f9b10c46e9586b0b951b88fad819c50df7930f11b3cfb63a6a75(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1b63211507c75e5327e1177055fbc6cb514189acbd229c53c608e089741e75e(
    value: VpcProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__305b2bf4c1d8f65b34173f4d1fc8d0930be620ab9e4632ba317c078c5f407729(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d738ed6bf9b765fd2bca73c6af73b8763c1353e596c8f08687a99ba08c7ea4c6(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6293ee7895aa812a231c5cb3c23c02d087a55e0bf9669f9b2490584914726714(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[VpcsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02a56bb51d45548210cf789a4131b049d3a4b9262cb662894172d4c4c4f5ebd5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6d556cdf55807c0ff350e8c17353875567e55171caede7889ee159d24f7bfee(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__339406b3df1231190cb847859464d63a48968a9ad2a9d8c2c2ce0c6158e78bbf(
    value: VpcsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f47a0b3e58fdaeae30d5fa3004e3199ee9acc9d3dcafec0a5972c2d4cc3c176f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c516031ba3534d14a50e5eddf2a885ec9800275ce56f0e9fa0f244b8101443fa(
    *,
    dhcp_options_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    vpc_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
