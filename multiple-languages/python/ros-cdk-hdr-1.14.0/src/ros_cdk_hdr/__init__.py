'''
## Aliyun ROS HDR Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as HDR from '@alicloud/ros-cdk-hdr';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-hdr.ISitePair")
class ISitePair(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``SitePair``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPrimarySiteId")
    def attr_primary_site_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimarySiteId: The ID of the primary site.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecondarySiteId")
    def attr_secondary_site_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecondarySiteId: The ID of the secondary site.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSitePairId")
    def attr_site_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SitePairId: The ID of the site pair.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SitePairProps":
        ...


class _ISitePairProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SitePair``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hdr.ISitePair"

    @builtins.property
    @jsii.member(jsii_name="attrPrimarySiteId")
    def attr_primary_site_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimarySiteId: The ID of the primary site.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimarySiteId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondarySiteId")
    def attr_secondary_site_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecondarySiteId: The ID of the secondary site.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecondarySiteId"))

    @builtins.property
    @jsii.member(jsii_name="attrSitePairId")
    def attr_site_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SitePairId: The ID of the site pair.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSitePairId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SitePairProps":
        return typing.cast("SitePairProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISitePair).__jsii_proxy_class__ = lambda : _ISitePairProxy


class RosSitePair(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hdr.RosSitePair",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HDR::SitePair``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SitePair`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSitePairProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c55ae6018d07f86aef140d2c1237d1f184aa2e9c6033173c785885df2ee89aaf)
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
            type_hints = typing.get_type_hints(_typecheckingstub__eadefadc0c2897cbd8dc03518cc783959cbee462b64336a9417f2a5628477d43)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPrimarySiteId")
    def attr_primary_site_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrimarySiteId: The ID of the primary site.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrimarySiteId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondarySiteId")
    def attr_secondary_site_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecondarySiteId: The ID of the secondary site.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecondarySiteId"))

    @builtins.property
    @jsii.member(jsii_name="attrSitePairId")
    def attr_site_pair_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SitePairId: The ID of the site pair.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSitePairId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__00f35b50c0bb0a793d1eb10f81f6cb0c7ef1d4175f2402c2765fc12b04b9d765)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="primarySiteName")
    def primary_site_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primarySiteName: The name of the primary site.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "primarySiteName"))

    @primary_site_name.setter
    def primary_site_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f254f1fc6f460b43e9fa3ac9cf57be2453c81b4e3e20cc6afc2499ddd1838f11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primarySiteName", value)

    @builtins.property
    @jsii.member(jsii_name="primarySiteRegionId")
    def primary_site_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primarySiteRegionId: The region ID of the primary site.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "primarySiteRegionId"))

    @primary_site_region_id.setter
    def primary_site_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__001aaaf2dc49d39398cf7b80408e78b8290ec3aef339350f090aa294b95f7daf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primarySiteRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="primarySiteType")
    def primary_site_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primarySiteType: The type of the primary site. Valid values: VPC, VSwitch, VRouter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "primarySiteType"))

    @primary_site_type.setter
    def primary_site_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85ccdb18b1ff824bc3dc45e28c856acd8e09a623e03ba37abbf4f9bac4e2351b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primarySiteType", value)

    @builtins.property
    @jsii.member(jsii_name="primarySiteVpcId")
    def primary_site_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primarySiteVpcId: The VPC ID of the primary site.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "primarySiteVpcId"))

    @primary_site_vpc_id.setter
    def primary_site_vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d5aac9b9352238225c611f75c11cfd31c1cd57432186d89f8a3d6af665bc60d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primarySiteVpcId", value)

    @builtins.property
    @jsii.member(jsii_name="secondarySiteName")
    def secondary_site_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secondarySiteName: The name of the secondary site.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "secondarySiteName"))

    @secondary_site_name.setter
    def secondary_site_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60b5949913be0f43afb7082e2a5b5bc2992af6766bf39c9a02ab0fa24ef7daae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondarySiteName", value)

    @builtins.property
    @jsii.member(jsii_name="secondarySiteRegionId")
    def secondary_site_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secondarySiteRegionId: The region ID of the secondary site.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "secondarySiteRegionId"))

    @secondary_site_region_id.setter
    def secondary_site_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b39ff11682d0ebc8d55b45657a2ede772ec827463faab6b5763d06b03021d459)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondarySiteRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="secondarySiteType")
    def secondary_site_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secondarySiteType: The type of the secondary site. Valid values: VPC, VSwitch, VRouter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "secondarySiteType"))

    @secondary_site_type.setter
    def secondary_site_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca51c99667e06dbb844abff6befd4e6d8db468279419eec93de23734b97c42fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondarySiteType", value)

    @builtins.property
    @jsii.member(jsii_name="secondarySiteVpcId")
    def secondary_site_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secondarySiteVpcId: The VPC ID of the secondary site.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "secondarySiteVpcId"))

    @secondary_site_vpc_id.setter
    def secondary_site_vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5399b9d1064fabcc0d147d2132ce1803eb7a9e4477d41205f6d9214b01a38671)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondarySiteVpcId", value)

    @builtins.property
    @jsii.member(jsii_name="primarySiteZoneId")
    def primary_site_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: primarySiteZoneId: The zone ID of the primary site.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "primarySiteZoneId"))

    @primary_site_zone_id.setter
    def primary_site_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d942c3d85f608cf32f46cd5d790ed83e2c2b27d6d156d90071dbaaa73c9519a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primarySiteZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="secondarySiteZoneId")
    def secondary_site_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secondarySiteZoneId: The zone ID of the secondary site.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secondarySiteZoneId"))

    @secondary_site_zone_id.setter
    def secondary_site_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__997743d877b62b3cad2a9a8e50e5e39128a1de62d152c0f53fa5f989005a4bf1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secondarySiteZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="sitePairType")
    def site_pair_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sitePairType: The type of the site pair.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sitePairType"))

    @site_pair_type.setter
    def site_pair_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3704fb245eb991f85dafdb9b59c755a0424065f24286ffb68860b16e4ca5e0b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sitePairType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hdr.RosSitePairProps",
    jsii_struct_bases=[],
    name_mapping={
        "primary_site_name": "primarySiteName",
        "primary_site_region_id": "primarySiteRegionId",
        "primary_site_type": "primarySiteType",
        "primary_site_vpc_id": "primarySiteVpcId",
        "secondary_site_name": "secondarySiteName",
        "secondary_site_region_id": "secondarySiteRegionId",
        "secondary_site_type": "secondarySiteType",
        "secondary_site_vpc_id": "secondarySiteVpcId",
        "primary_site_zone_id": "primarySiteZoneId",
        "secondary_site_zone_id": "secondarySiteZoneId",
        "site_pair_type": "sitePairType",
    },
)
class RosSitePairProps:
    def __init__(
        self,
        *,
        primary_site_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_site_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_site_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        secondary_site_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        secondary_site_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        secondary_site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        secondary_site_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_site_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_site_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        site_pair_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSitePair``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair

        :param primary_site_name: 
        :param primary_site_region_id: 
        :param primary_site_type: 
        :param primary_site_vpc_id: 
        :param secondary_site_name: 
        :param secondary_site_region_id: 
        :param secondary_site_type: 
        :param secondary_site_vpc_id: 
        :param primary_site_zone_id: 
        :param secondary_site_zone_id: 
        :param site_pair_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50b6f4e61e2d24b5ca2ecf5088c23a84bc53d7a2f39ce1dfbdacd84c2d9dc551)
            check_type(argname="argument primary_site_name", value=primary_site_name, expected_type=type_hints["primary_site_name"])
            check_type(argname="argument primary_site_region_id", value=primary_site_region_id, expected_type=type_hints["primary_site_region_id"])
            check_type(argname="argument primary_site_type", value=primary_site_type, expected_type=type_hints["primary_site_type"])
            check_type(argname="argument primary_site_vpc_id", value=primary_site_vpc_id, expected_type=type_hints["primary_site_vpc_id"])
            check_type(argname="argument secondary_site_name", value=secondary_site_name, expected_type=type_hints["secondary_site_name"])
            check_type(argname="argument secondary_site_region_id", value=secondary_site_region_id, expected_type=type_hints["secondary_site_region_id"])
            check_type(argname="argument secondary_site_type", value=secondary_site_type, expected_type=type_hints["secondary_site_type"])
            check_type(argname="argument secondary_site_vpc_id", value=secondary_site_vpc_id, expected_type=type_hints["secondary_site_vpc_id"])
            check_type(argname="argument primary_site_zone_id", value=primary_site_zone_id, expected_type=type_hints["primary_site_zone_id"])
            check_type(argname="argument secondary_site_zone_id", value=secondary_site_zone_id, expected_type=type_hints["secondary_site_zone_id"])
            check_type(argname="argument site_pair_type", value=site_pair_type, expected_type=type_hints["site_pair_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "primary_site_name": primary_site_name,
            "primary_site_region_id": primary_site_region_id,
            "primary_site_type": primary_site_type,
            "primary_site_vpc_id": primary_site_vpc_id,
            "secondary_site_name": secondary_site_name,
            "secondary_site_region_id": secondary_site_region_id,
            "secondary_site_type": secondary_site_type,
            "secondary_site_vpc_id": secondary_site_vpc_id,
        }
        if primary_site_zone_id is not None:
            self._values["primary_site_zone_id"] = primary_site_zone_id
        if secondary_site_zone_id is not None:
            self._values["secondary_site_zone_id"] = secondary_site_zone_id
        if site_pair_type is not None:
            self._values["site_pair_type"] = site_pair_type

    @builtins.property
    def primary_site_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primarySiteName: The name of the primary site.
        '''
        result = self._values.get("primary_site_name")
        assert result is not None, "Required property 'primary_site_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_site_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primarySiteRegionId: The region ID of the primary site.
        '''
        result = self._values.get("primary_site_region_id")
        assert result is not None, "Required property 'primary_site_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_site_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primarySiteType: The type of the primary site. Valid values: VPC, VSwitch, VRouter.
        '''
        result = self._values.get("primary_site_type")
        assert result is not None, "Required property 'primary_site_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_site_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primarySiteVpcId: The VPC ID of the primary site.
        '''
        result = self._values.get("primary_site_vpc_id")
        assert result is not None, "Required property 'primary_site_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def secondary_site_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secondarySiteName: The name of the secondary site.
        '''
        result = self._values.get("secondary_site_name")
        assert result is not None, "Required property 'secondary_site_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def secondary_site_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secondarySiteRegionId: The region ID of the secondary site.
        '''
        result = self._values.get("secondary_site_region_id")
        assert result is not None, "Required property 'secondary_site_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def secondary_site_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secondarySiteType: The type of the secondary site. Valid values: VPC, VSwitch, VRouter.
        '''
        result = self._values.get("secondary_site_type")
        assert result is not None, "Required property 'secondary_site_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def secondary_site_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secondarySiteVpcId: The VPC ID of the secondary site.
        '''
        result = self._values.get("secondary_site_vpc_id")
        assert result is not None, "Required property 'secondary_site_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_site_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: primarySiteZoneId: The zone ID of the primary site.
        '''
        result = self._values.get("primary_site_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_site_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secondarySiteZoneId: The zone ID of the secondary site.
        '''
        result = self._values.get("secondary_site_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def site_pair_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sitePairType: The type of the site pair.
        '''
        result = self._values.get("site_pair_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSitePairProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISitePair)
class SitePair(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hdr.SitePair",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HDR::SitePair``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSitePair``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SitePairProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55ad87fe41c76659ff38ef92881f7cbc63693f69768175cbcadcdfa407cc55b7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPrimarySiteId")
    def attr_primary_site_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrimarySiteId: The ID of the primary site.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrimarySiteId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondarySiteId")
    def attr_secondary_site_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecondarySiteId: The ID of the secondary site.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecondarySiteId"))

    @builtins.property
    @jsii.member(jsii_name="attrSitePairId")
    def attr_site_pair_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SitePairId: The ID of the site pair.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSitePairId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SitePairProps":
        return typing.cast("SitePairProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d1a9e5a54d7dc64cbebb8e5ddee7304fa61c39a95d651aa1627a40c71b82c6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6c322665a3c89362c3443fc043079b4e62da2dc893e85c8e1a5e3b936f8ad2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cee85163e81fe8d174c1e52658381a76a90be5f64662884d73d16cb630b5f3bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hdr.SitePairProps",
    jsii_struct_bases=[],
    name_mapping={
        "primary_site_name": "primarySiteName",
        "primary_site_region_id": "primarySiteRegionId",
        "primary_site_type": "primarySiteType",
        "primary_site_vpc_id": "primarySiteVpcId",
        "secondary_site_name": "secondarySiteName",
        "secondary_site_region_id": "secondarySiteRegionId",
        "secondary_site_type": "secondarySiteType",
        "secondary_site_vpc_id": "secondarySiteVpcId",
        "primary_site_zone_id": "primarySiteZoneId",
        "secondary_site_zone_id": "secondarySiteZoneId",
        "site_pair_type": "sitePairType",
    },
)
class SitePairProps:
    def __init__(
        self,
        *,
        primary_site_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_site_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_site_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        secondary_site_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        secondary_site_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        secondary_site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        secondary_site_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_site_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secondary_site_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        site_pair_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SitePair``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair

        :param primary_site_name: Property primarySiteName: The name of the primary site.
        :param primary_site_region_id: Property primarySiteRegionId: The region ID of the primary site.
        :param primary_site_type: Property primarySiteType: The type of the primary site. Valid values: VPC, VSwitch, VRouter.
        :param primary_site_vpc_id: Property primarySiteVpcId: The VPC ID of the primary site.
        :param secondary_site_name: Property secondarySiteName: The name of the secondary site.
        :param secondary_site_region_id: Property secondarySiteRegionId: The region ID of the secondary site.
        :param secondary_site_type: Property secondarySiteType: The type of the secondary site. Valid values: VPC, VSwitch, VRouter.
        :param secondary_site_vpc_id: Property secondarySiteVpcId: The VPC ID of the secondary site.
        :param primary_site_zone_id: Property primarySiteZoneId: The zone ID of the primary site.
        :param secondary_site_zone_id: Property secondarySiteZoneId: The zone ID of the secondary site.
        :param site_pair_type: Property sitePairType: The type of the site pair.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1f9f60041733402934dadaf42726e28642e835e5151f1fec277dd913db87bfe)
            check_type(argname="argument primary_site_name", value=primary_site_name, expected_type=type_hints["primary_site_name"])
            check_type(argname="argument primary_site_region_id", value=primary_site_region_id, expected_type=type_hints["primary_site_region_id"])
            check_type(argname="argument primary_site_type", value=primary_site_type, expected_type=type_hints["primary_site_type"])
            check_type(argname="argument primary_site_vpc_id", value=primary_site_vpc_id, expected_type=type_hints["primary_site_vpc_id"])
            check_type(argname="argument secondary_site_name", value=secondary_site_name, expected_type=type_hints["secondary_site_name"])
            check_type(argname="argument secondary_site_region_id", value=secondary_site_region_id, expected_type=type_hints["secondary_site_region_id"])
            check_type(argname="argument secondary_site_type", value=secondary_site_type, expected_type=type_hints["secondary_site_type"])
            check_type(argname="argument secondary_site_vpc_id", value=secondary_site_vpc_id, expected_type=type_hints["secondary_site_vpc_id"])
            check_type(argname="argument primary_site_zone_id", value=primary_site_zone_id, expected_type=type_hints["primary_site_zone_id"])
            check_type(argname="argument secondary_site_zone_id", value=secondary_site_zone_id, expected_type=type_hints["secondary_site_zone_id"])
            check_type(argname="argument site_pair_type", value=site_pair_type, expected_type=type_hints["site_pair_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "primary_site_name": primary_site_name,
            "primary_site_region_id": primary_site_region_id,
            "primary_site_type": primary_site_type,
            "primary_site_vpc_id": primary_site_vpc_id,
            "secondary_site_name": secondary_site_name,
            "secondary_site_region_id": secondary_site_region_id,
            "secondary_site_type": secondary_site_type,
            "secondary_site_vpc_id": secondary_site_vpc_id,
        }
        if primary_site_zone_id is not None:
            self._values["primary_site_zone_id"] = primary_site_zone_id
        if secondary_site_zone_id is not None:
            self._values["secondary_site_zone_id"] = secondary_site_zone_id
        if site_pair_type is not None:
            self._values["site_pair_type"] = site_pair_type

    @builtins.property
    def primary_site_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property primarySiteName: The name of the primary site.'''
        result = self._values.get("primary_site_name")
        assert result is not None, "Required property 'primary_site_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_site_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property primarySiteRegionId: The region ID of the primary site.'''
        result = self._values.get("primary_site_region_id")
        assert result is not None, "Required property 'primary_site_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_site_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property primarySiteType: The type of the primary site.

        Valid values: VPC, VSwitch, VRouter.
        '''
        result = self._values.get("primary_site_type")
        assert result is not None, "Required property 'primary_site_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_site_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property primarySiteVpcId: The VPC ID of the primary site.'''
        result = self._values.get("primary_site_vpc_id")
        assert result is not None, "Required property 'primary_site_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def secondary_site_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property secondarySiteName: The name of the secondary site.'''
        result = self._values.get("secondary_site_name")
        assert result is not None, "Required property 'secondary_site_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def secondary_site_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property secondarySiteRegionId: The region ID of the secondary site.'''
        result = self._values.get("secondary_site_region_id")
        assert result is not None, "Required property 'secondary_site_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def secondary_site_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property secondarySiteType: The type of the secondary site.

        Valid values: VPC, VSwitch, VRouter.
        '''
        result = self._values.get("secondary_site_type")
        assert result is not None, "Required property 'secondary_site_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def secondary_site_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property secondarySiteVpcId: The VPC ID of the secondary site.'''
        result = self._values.get("secondary_site_vpc_id")
        assert result is not None, "Required property 'secondary_site_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_site_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property primarySiteZoneId: The zone ID of the primary site.'''
        result = self._values.get("primary_site_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secondary_site_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secondarySiteZoneId: The zone ID of the secondary site.'''
        result = self._values.get("secondary_site_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def site_pair_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sitePairType: The type of the site pair.'''
        result = self._values.get("site_pair_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SitePairProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "ISitePair",
    "RosSitePair",
    "RosSitePairProps",
    "SitePair",
    "SitePairProps",
]

publication.publish()

def _typecheckingstub__c55ae6018d07f86aef140d2c1237d1f184aa2e9c6033173c785885df2ee89aaf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSitePairProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eadefadc0c2897cbd8dc03518cc783959cbee462b64336a9417f2a5628477d43(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00f35b50c0bb0a793d1eb10f81f6cb0c7ef1d4175f2402c2765fc12b04b9d765(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f254f1fc6f460b43e9fa3ac9cf57be2453c81b4e3e20cc6afc2499ddd1838f11(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__001aaaf2dc49d39398cf7b80408e78b8290ec3aef339350f090aa294b95f7daf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85ccdb18b1ff824bc3dc45e28c856acd8e09a623e03ba37abbf4f9bac4e2351b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d5aac9b9352238225c611f75c11cfd31c1cd57432186d89f8a3d6af665bc60d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60b5949913be0f43afb7082e2a5b5bc2992af6766bf39c9a02ab0fa24ef7daae(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b39ff11682d0ebc8d55b45657a2ede772ec827463faab6b5763d06b03021d459(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca51c99667e06dbb844abff6befd4e6d8db468279419eec93de23734b97c42fe(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5399b9d1064fabcc0d147d2132ce1803eb7a9e4477d41205f6d9214b01a38671(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d942c3d85f608cf32f46cd5d790ed83e2c2b27d6d156d90071dbaaa73c9519a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__997743d877b62b3cad2a9a8e50e5e39128a1de62d152c0f53fa5f989005a4bf1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3704fb245eb991f85dafdb9b59c755a0424065f24286ffb68860b16e4ca5e0b9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50b6f4e61e2d24b5ca2ecf5088c23a84bc53d7a2f39ce1dfbdacd84c2d9dc551(
    *,
    primary_site_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_site_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_site_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    secondary_site_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    secondary_site_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    secondary_site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    secondary_site_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_site_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_site_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    site_pair_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55ad87fe41c76659ff38ef92881f7cbc63693f69768175cbcadcdfa407cc55b7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SitePairProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d1a9e5a54d7dc64cbebb8e5ddee7304fa61c39a95d651aa1627a40c71b82c6e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6c322665a3c89362c3443fc043079b4e62da2dc893e85c8e1a5e3b936f8ad2a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cee85163e81fe8d174c1e52658381a76a90be5f64662884d73d16cb630b5f3bd(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1f9f60041733402934dadaf42726e28642e835e5151f1fec277dd913db87bfe(
    *,
    primary_site_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_site_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_site_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    secondary_site_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    secondary_site_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    secondary_site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    secondary_site_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_site_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secondary_site_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    site_pair_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
