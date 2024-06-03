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


class Acls(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.datasource.Acls",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::GA::Acls``, which is used to query access control lists (ACLs).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAcls``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AclsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__272acc327d49229097523c772e82a7e78f7541f606a9640a4bcef8d0e44bf477)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclIds: The list of acl IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAcls")
    def attr_acls(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Acls: The list of acls.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcls"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f2c11b743a1724c1119c07453e55295e6f43e9e72a2c651867445c59f89b212)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b10b90301187abf29c7c9ee9c4004f8bd07fb980994be11f36d0517c3d3331b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AclsProps":
        return typing.cast("AclsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AclsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75422f9c87c7d185d63d3dd7f47b496ef1a0b05761e4c8b64b862bb6512ba006)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d904c7aec378b73a0c4c16d98659e43b58d47885105c2681b319028d2c611e69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.datasource.AclsProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_id": "aclId",
        "acl_name": "aclName",
        "resource_group_id": "resourceGroupId",
    },
)
class AclsProps:
    def __init__(
        self,
        *,
        acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Acls``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls

        :param acl_id: Property aclId: The ID of the Acl.
        :param acl_name: Property aclName: The name of the acl.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8031a48d9f0cc3a2e6d5b34f9b3504ed682c51532738ef4c9facec6af6165431)
            check_type(argname="argument acl_id", value=acl_id, expected_type=type_hints["acl_id"])
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if acl_id is not None:
            self._values["acl_id"] = acl_id
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aclId: The  ID of the Acl.'''
        result = self._values.get("acl_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aclName: The name of the acl.'''
        result = self._values.get("acl_name")
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
        return "AclsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BandwidthPackage(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.datasource.BandwidthPackage",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::GA::BandwidthPackage``, which is used to query the information about a bandwidth plan.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBandwidthPackage``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BandwidthPackageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd3481bbec1f52911ac256bff5c7c0423c160a647f8eee7f27b1a803091489c0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoRenew: Whether to enable automatic renewal.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenew"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenewDuration")
    def attr_auto_renew_duration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoRenewDuration: The duration of automatic renewal.

        Unit: Month.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenewDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Bandwidth: The bandwidth value of the bandwidth package.

        Unit: Mbps. Value range: 2~2000.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BandwidthPackageId: The Resource ID of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageName")
    def attr_bandwidth_package_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BandwidthPackageName: The Resource name of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageName"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthType")
    def attr_bandwidth_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BandwidthType: Bandwidth type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthType"))

    @builtins.property
    @jsii.member(jsii_name="attrBillingType")
    def attr_billing_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BillingType: Post-payment billing method.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBillingType"))

    @builtins.property
    @jsii.member(jsii_name="attrCbnGeographicRegionIdA")
    def attr_cbn_geographic_region_id_a(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CbnGeographicRegionIdA: The interworking region A of cross-region acceleration packages.

        The value is China-mainland only.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdA"))

    @builtins.property
    @jsii.member(jsii_name="attrCbnGeographicRegionIdB")
    def attr_cbn_geographic_region_id_b(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CbnGeographicRegionIdB: The interworking Region B of cross-region acceleration packages.

        The value is Global only.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdB"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: Bandwidth package creation time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: the description of bandwidth package.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiredTime")
    def attr_expired_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExpiredTime: Bandwidth package expiration time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: Type of payment.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRatio")
    def attr_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ratio: 95 Billing guaranteed percentage.

        Value range: 30~100.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RenewalStatus: Renewal status.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Type: The type of the bandwidth package.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__116006d132f5a9de7dabd5d8e316faca02e48879e9dfe085fe40e88950392e3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d415e66996402f4185ae0be34b95b01ad96df2f59b7a5abad9c54a8ccde9e22a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BandwidthPackageProps":
        return typing.cast("BandwidthPackageProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BandwidthPackageProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9952699686c43d4e5bb83e3253031742a5d35eab37e6fd23f99db14f697a40b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bf4404ec3d05a7c6812f5a43b2b53a9ba0e3f2b91a2ab91e8a6d9968df539cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.datasource.BandwidthPackageProps",
    jsii_struct_bases=[],
    name_mapping={"bandwidth_package_id": "bandwidthPackageId"},
)
class BandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``BandwidthPackage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage

        :param bandwidth_package_id: Property bandwidthPackageId: The Resource ID of the bandwidth.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21d8107d98cdf1e9d7b18b17a12737c105a624a4e34190e4067cbcaeebc2f1ed)
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth_package_id": bandwidth_package_id,
        }

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bandwidthPackageId: The Resource ID of the bandwidth.'''
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BandwidthPackages(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.datasource.BandwidthPackages",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::GA::BandwidthPackages``, which is used to query the information about bandwidth plans.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBandwidthPackages``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackages
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["BandwidthPackagesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fd12d5bc7acbbabf522f6fa95c43840f0f692dd3e2984d708f192adb251cb75)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageIds")
    def attr_bandwidth_package_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BandwidthPackageIds: The list of bandwidth package IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackages")
    def attr_bandwidth_packages(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BandwidthPackages: The list of bandwidth packages.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackages"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87298b2c8985222bab979bd3d943cb3be5420d7bfc7433511f5e6ceb962a4eac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__376b131cc273a7124d2ee05b0559a947c2bcd5b4ad0fd0df6523e93aed106514)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BandwidthPackagesProps":
        return typing.cast("BandwidthPackagesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BandwidthPackagesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a2d0ce6124d3b9ef090c3f2a5aa639fe6b172a55cc995d4881d89b2438e41ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe712adf773c8a05a856caee207235dc648703416c8d6a64b900eab22c122e72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.datasource.BandwidthPackagesProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth_package_id": "bandwidthPackageId",
        "resource_group_id": "resourceGroupId",
        "type": "type",
    },
)
class BandwidthPackagesProps:
    def __init__(
        self,
        *,
        bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``BandwidthPackages``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackages

        :param bandwidth_package_id: Property bandwidthPackageId: The Resource ID of the bandwidth.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param type: Property type: The type of the bandwidth package. Value: Basic: Basic bandwidth package. CrossDomain: cross-region acceleration package. China Station only supports Basic.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e1cbcc584f32d4da80171f3652592030ee9d0e60f095f3324a8f31698fd6d4c)
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if bandwidth_package_id is not None:
            self._values["bandwidth_package_id"] = bandwidth_package_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidthPackageId: The Resource ID of the bandwidth.'''
        result = self._values.get("bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The type of the bandwidth package.

        Value:
        Basic: Basic bandwidth package.
        CrossDomain: cross-region acceleration package.
        China Station only supports Basic.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BandwidthPackagesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAcls(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.datasource.RosAcls",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::GA::Acls``, which is used to query access control lists (ACLs).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Acls`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAclsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9b16fd417fdba5e98487ea90da5e527540098e3173e76cd5b59b9de89b47b29)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8a3c0b39fd3e2bea7c6439d9d982e0cbf8aecc5cc6fc2cea4c87a71af1705876)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclIds: The list of acl IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAcls")
    def attr_acls(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Acls: The list of acls.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcls"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__4fea47a161ff1ae38af632b08a29b0ab1eeaafb27b7b486f3a13c366595c389b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="aclId")
    def acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aclId: The  ID of the Acl.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aclId"))

    @acl_id.setter
    def acl_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d15bd19c2e08185b51fd2cf1e522cda6eb0b1be3f65fa33e5a0645b8ac55a87e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclId", value)

    @builtins.property
    @jsii.member(jsii_name="aclName")
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aclName: The name of the acl.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aclName"))

    @acl_name.setter
    def acl_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__487cdf264ca2a57aba5107260fff42bf8ecdac3a3a45ca5618844007125d8cc4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__ac50df374c24218cd9e7483046f41bb61425d29fccc0e72a2b37c705634c9f10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.datasource.RosAclsProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_id": "aclId",
        "acl_name": "aclName",
        "resource_group_id": "resourceGroupId",
    },
)
class RosAclsProps:
    def __init__(
        self,
        *,
        acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAcls``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls

        :param acl_id: 
        :param acl_name: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5f40968605ff1f275b9a3196414e14056e348ba7079b91b391760d58d0ea3cf)
            check_type(argname="argument acl_id", value=acl_id, expected_type=type_hints["acl_id"])
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if acl_id is not None:
            self._values["acl_id"] = acl_id
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aclId: The  ID of the Acl.
        '''
        result = self._values.get("acl_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aclName: The name of the acl.
        '''
        result = self._values.get("acl_name")
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
        return "RosAclsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBandwidthPackage(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.datasource.RosBandwidthPackage",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::GA::BandwidthPackage``, which is used to query the information about a bandwidth plan.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BandwidthPackage`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBandwidthPackageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__713bceb3670f51ada27750d96e2a2fc0708a05ceb1e29e871ee583ba75224d07)
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
            type_hints = typing.get_type_hints(_typecheckingstub__82da3447372adcf7d95a4ef69d57495095422a3ab41de312847c4f2fd00aacff)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoRenew: Whether to enable automatic renewal.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenew"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenewDuration")
    def attr_auto_renew_duration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoRenewDuration: The duration of automatic renewal. Unit: Month.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenewDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth value of the bandwidth package. Unit: Mbps. Value range: 2~2000.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthPackageId: The Resource ID of the bandwidth.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageName")
    def attr_bandwidth_package_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthPackageName: The Resource name of the bandwidth.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageName"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthType")
    def attr_bandwidth_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthType: Bandwidth type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthType"))

    @builtins.property
    @jsii.member(jsii_name="attrBillingType")
    def attr_billing_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BillingType: Post-payment billing method.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBillingType"))

    @builtins.property
    @jsii.member(jsii_name="attrCbnGeographicRegionIdA")
    def attr_cbn_geographic_region_id_a(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CbnGeographicRegionIdA: The interworking region A of cross-region acceleration packages. The value is China-mainland only.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdA"))

    @builtins.property
    @jsii.member(jsii_name="attrCbnGeographicRegionIdB")
    def attr_cbn_geographic_region_id_b(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CbnGeographicRegionIdB: The interworking Region B of cross-region acceleration packages. The value is Global only.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdB"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Bandwidth package creation time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: the description of bandwidth package.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiredTime")
    def attr_expired_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExpiredTime: Bandwidth package expiration time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: Type of payment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRatio")
    def attr_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ratio: 95 Billing guaranteed percentage. Value range: 30~100.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RenewalStatus: Renewal status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Type: The type of the bandwidth package.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidthPackageId: The Resource ID of the bandwidth.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bandwidthPackageId"))

    @bandwidth_package_id.setter
    def bandwidth_package_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5959ad2e2644b66de39ad7225e9e2be8e2c11cdca29f71f32068f61c3306eecd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthPackageId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e557c1c41fb33b64a00fd46a1fc50a2ff70fdd2e6a92bd4d9d478c4029d7410e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.datasource.RosBandwidthPackageProps",
    jsii_struct_bases=[],
    name_mapping={"bandwidth_package_id": "bandwidthPackageId"},
)
class RosBandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosBandwidthPackage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage

        :param bandwidth_package_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26c43116e248a6581d12c7ca30d70200402bb233f680d38d1fe018943583d9ad)
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth_package_id": bandwidth_package_id,
        }

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidthPackageId: The Resource ID of the bandwidth.
        '''
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBandwidthPackages(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.datasource.RosBandwidthPackages",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::GA::BandwidthPackages``, which is used to query the information about bandwidth plans.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BandwidthPackages`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackages
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBandwidthPackagesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9d01e598e8b8b6161ab26af7c207fc91ce8b2f75f3bbdd9f097b9b4100e60b8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__602957d189e3d5dcedc5f4899d5b652d8d5596237a34845a4dc3ee0bbfed7d36)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageIds")
    def attr_bandwidth_package_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthPackageIds: The list of bandwidth package IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageIds"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackages")
    def attr_bandwidth_packages(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthPackages: The list of bandwidth packages.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackages"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1f66a2efe3cd3dbb4cc98df0d69f4d24f73080d70093fcebafe49c3dedeee2bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthPackageId: The Resource ID of the bandwidth.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidthPackageId"))

    @bandwidth_package_id.setter
    def bandwidth_package_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3b6b505ec0bf0f771d289bea2e061e23b1c6d1b9a8c8b012d79891f15addfbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthPackageId", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__e97263c5347994d0fcb5389035fd0f84b9992d88ba098e9ff97af4d17f1c7a53)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the bandwidth package. Value:
        Basic: Basic bandwidth package.
        CrossDomain: cross-region acceleration package.
        China Station only supports Basic.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91fc5874ad1632512b923e5cc38f86e82dc0cd21031cd37ba732d6e64901d791)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.datasource.RosBandwidthPackagesProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth_package_id": "bandwidthPackageId",
        "resource_group_id": "resourceGroupId",
        "type": "type",
    },
)
class RosBandwidthPackagesProps:
    def __init__(
        self,
        *,
        bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosBandwidthPackages``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackages

        :param bandwidth_package_id: 
        :param resource_group_id: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f84d8d6fbbeb991e7851859e23d9c8e1d70ce9d54b2eb4b6c33509376a7c0912)
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if bandwidth_package_id is not None:
            self._values["bandwidth_package_id"] = bandwidth_package_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthPackageId: The Resource ID of the bandwidth.
        '''
        result = self._values.get("bandwidth_package_id")
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

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the bandwidth package. Value:
        Basic: Basic bandwidth package.
        CrossDomain: cross-region acceleration package.
        China Station only supports Basic.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBandwidthPackagesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Acls",
    "AclsProps",
    "BandwidthPackage",
    "BandwidthPackageProps",
    "BandwidthPackages",
    "BandwidthPackagesProps",
    "RosAcls",
    "RosAclsProps",
    "RosBandwidthPackage",
    "RosBandwidthPackageProps",
    "RosBandwidthPackages",
    "RosBandwidthPackagesProps",
]

publication.publish()

def _typecheckingstub__272acc327d49229097523c772e82a7e78f7541f606a9640a4bcef8d0e44bf477(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AclsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f2c11b743a1724c1119c07453e55295e6f43e9e72a2c651867445c59f89b212(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b10b90301187abf29c7c9ee9c4004f8bd07fb980994be11f36d0517c3d3331b1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75422f9c87c7d185d63d3dd7f47b496ef1a0b05761e4c8b64b862bb6512ba006(
    value: AclsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d904c7aec378b73a0c4c16d98659e43b58d47885105c2681b319028d2c611e69(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8031a48d9f0cc3a2e6d5b34f9b3504ed682c51532738ef4c9facec6af6165431(
    *,
    acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd3481bbec1f52911ac256bff5c7c0423c160a647f8eee7f27b1a803091489c0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BandwidthPackageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__116006d132f5a9de7dabd5d8e316faca02e48879e9dfe085fe40e88950392e3c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d415e66996402f4185ae0be34b95b01ad96df2f59b7a5abad9c54a8ccde9e22a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9952699686c43d4e5bb83e3253031742a5d35eab37e6fd23f99db14f697a40b0(
    value: BandwidthPackageProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bf4404ec3d05a7c6812f5a43b2b53a9ba0e3f2b91a2ab91e8a6d9968df539cc(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21d8107d98cdf1e9d7b18b17a12737c105a624a4e34190e4067cbcaeebc2f1ed(
    *,
    bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fd12d5bc7acbbabf522f6fa95c43840f0f692dd3e2984d708f192adb251cb75(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[BandwidthPackagesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87298b2c8985222bab979bd3d943cb3be5420d7bfc7433511f5e6ceb962a4eac(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__376b131cc273a7124d2ee05b0559a947c2bcd5b4ad0fd0df6523e93aed106514(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a2d0ce6124d3b9ef090c3f2a5aa639fe6b172a55cc995d4881d89b2438e41ed(
    value: BandwidthPackagesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe712adf773c8a05a856caee207235dc648703416c8d6a64b900eab22c122e72(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e1cbcc584f32d4da80171f3652592030ee9d0e60f095f3324a8f31698fd6d4c(
    *,
    bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9b16fd417fdba5e98487ea90da5e527540098e3173e76cd5b59b9de89b47b29(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAclsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a3c0b39fd3e2bea7c6439d9d982e0cbf8aecc5cc6fc2cea4c87a71af1705876(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fea47a161ff1ae38af632b08a29b0ab1eeaafb27b7b486f3a13c366595c389b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d15bd19c2e08185b51fd2cf1e522cda6eb0b1be3f65fa33e5a0645b8ac55a87e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__487cdf264ca2a57aba5107260fff42bf8ecdac3a3a45ca5618844007125d8cc4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac50df374c24218cd9e7483046f41bb61425d29fccc0e72a2b37c705634c9f10(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5f40968605ff1f275b9a3196414e14056e348ba7079b91b391760d58d0ea3cf(
    *,
    acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__713bceb3670f51ada27750d96e2a2fc0708a05ceb1e29e871ee583ba75224d07(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBandwidthPackageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82da3447372adcf7d95a4ef69d57495095422a3ab41de312847c4f2fd00aacff(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5959ad2e2644b66de39ad7225e9e2be8e2c11cdca29f71f32068f61c3306eecd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e557c1c41fb33b64a00fd46a1fc50a2ff70fdd2e6a92bd4d9d478c4029d7410e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26c43116e248a6581d12c7ca30d70200402bb233f680d38d1fe018943583d9ad(
    *,
    bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9d01e598e8b8b6161ab26af7c207fc91ce8b2f75f3bbdd9f097b9b4100e60b8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBandwidthPackagesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__602957d189e3d5dcedc5f4899d5b652d8d5596237a34845a4dc3ee0bbfed7d36(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f66a2efe3cd3dbb4cc98df0d69f4d24f73080d70093fcebafe49c3dedeee2bf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3b6b505ec0bf0f771d289bea2e061e23b1c6d1b9a8c8b012d79891f15addfbf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e97263c5347994d0fcb5389035fd0f84b9992d88ba098e9ff97af4d17f1c7a53(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91fc5874ad1632512b923e5cc38f86e82dc0cd21031cd37ba732d6e64901d791(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f84d8d6fbbeb991e7851859e23d9c8e1d70ce9d54b2eb4b6c33509376a7c0912(
    *,
    bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
