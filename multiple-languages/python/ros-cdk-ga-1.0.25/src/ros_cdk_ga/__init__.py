'''
## Aliyun ROS GA Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as GA from '@alicloud/ros-cdk-ga';
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


class Accelerator(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.Accelerator",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::Accelerator``, which is used to create a Global Accelerator (GA) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccelerator``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AcceleratorProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad2944c582ac4f0110fc9f037076ecf11c024dbccfb2b0cd7463f21a4e745121)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AcceleratorId: The ID of the GA instance to query.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property
    @jsii.member(jsii_name="attrAcceleratorName")
    def attr_accelerator_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AcceleratorName: The Name of the GA instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcceleratorName"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoPay: The AutoPay of the GA instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoPay"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoUseCoupon"))

    @builtins.property
    @jsii.member(jsii_name="attrDuration")
    def attr_duration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Duration: The Duration of the GA instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The OrderId of the GA instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: The Payment Typethe GA instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPricingCycle")
    def attr_pricing_cycle(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PricingCycle: The PricingCycle of the GA instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPricingCycle"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Spec: The instance type of the GA instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__305edf9ac58ffdd324c3201c8d302756ea89772e05d67e9bc6c0c84bb8e229b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2e3cccf7b77a082f84aaa4d342cf8bd96b87a303fd1d05b692a17d5dfe6ec02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AcceleratorProps":
        return typing.cast("AcceleratorProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AcceleratorProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ebbb537dc7b5456c8d78a9932c7a7fae4234ccd8a9f558f65bb9d813a73c02cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7350869511899705f719afd6dc1da1212be59fcb999ddee761c3315240b53e44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.AcceleratorProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_name": "acceleratorName",
        "auto_pay": "autoPay",
        "auto_use_coupon": "autoUseCoupon",
        "bandwidth_billing_type": "bandwidthBillingType",
        "duration": "duration",
        "enable_cross_border": "enableCrossBorder",
        "instance_charge_type": "instanceChargeType",
        "ip_set_config": "ipSetConfig",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "spec": "spec",
    },
)
class AcceleratorProps:
    def __init__(
        self,
        *,
        accelerator_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_cross_border: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_set_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAccelerator.IpSetConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Accelerator``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator

        :param accelerator_name: Property acceleratorName: The Name of the GA instance.
        :param auto_pay: Property autoPay: Whether to pay automatically.
        :param auto_use_coupon: Property autoUseCoupon: The AutoUseCoupon of the GA instance.
        :param bandwidth_billing_type: Property bandwidthBillingType: Bandwidth billing method.
        :param duration: Property duration: Length of purchase.
        :param enable_cross_border: Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
        :param instance_charge_type: Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
        :param ip_set_config: Property ipSetConfig: Accelerate zone configuration.
        :param pricing_cycle: Property pricingCycle: Billing cycle.
        :param resource_group_id: Property resourceGroupId: The ResourceGroup Id.
        :param spec: Property spec: Specifications of Global Acceleration Instances.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa47fd8a6834a906b651c6776a5f1805d07515bffead1a424611c23a7db43c8f)
            check_type(argname="argument accelerator_name", value=accelerator_name, expected_type=type_hints["accelerator_name"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_use_coupon", value=auto_use_coupon, expected_type=type_hints["auto_use_coupon"])
            check_type(argname="argument bandwidth_billing_type", value=bandwidth_billing_type, expected_type=type_hints["bandwidth_billing_type"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument enable_cross_border", value=enable_cross_border, expected_type=type_hints["enable_cross_border"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument ip_set_config", value=ip_set_config, expected_type=type_hints["ip_set_config"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if accelerator_name is not None:
            self._values["accelerator_name"] = accelerator_name
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_use_coupon is not None:
            self._values["auto_use_coupon"] = auto_use_coupon
        if bandwidth_billing_type is not None:
            self._values["bandwidth_billing_type"] = bandwidth_billing_type
        if duration is not None:
            self._values["duration"] = duration
        if enable_cross_border is not None:
            self._values["enable_cross_border"] = enable_cross_border
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if ip_set_config is not None:
            self._values["ip_set_config"] = ip_set_config
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if spec is not None:
            self._values["spec"] = spec

    @builtins.property
    def accelerator_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property acceleratorName: The Name of the GA instance.'''
        result = self._values.get("accelerator_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Whether to pay automatically.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoUseCoupon: The AutoUseCoupon of the GA instance.'''
        result = self._values.get("auto_use_coupon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidthBillingType: Bandwidth billing method.'''
        result = self._values.get("bandwidth_billing_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property duration: Length of purchase.'''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_cross_border(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.'''
        result = self._values.get("enable_cross_border")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).'''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_set_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccelerator.IpSetConfigProperty"]]:
        '''Property ipSetConfig: Accelerate zone configuration.'''
        result = self._values.get("ip_set_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccelerator.IpSetConfigProperty"]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pricingCycle: Billing cycle.'''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ResourceGroup Id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spec: Specifications of Global Acceleration Instances.'''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AcceleratorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Acl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.Acl",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::Acl``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAcl``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AclProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7470afc01ba703e3160bb0b0eda7adbb9149db7d6d8a39a64459f49f08b18149)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclEntries")
    def attr_acl_entries(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclEntries: The entries of the ACL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclId: The  ID of the ACL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAclName")
    def attr_acl_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclName: The name of the ACL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclName"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AddressIPVersion: The IP version of the ACL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: The tags of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e29f7e0d582fadf47591c44874ee8e77ffdc3a7b3e92dc2fcc942a108ee57705)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0a72491a8967e2e6ba2141bf7bd102f2a7f7d9935f1f864bd512a0d546f00aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AclProps":
        return typing.cast("AclProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AclProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__642d58724c62d72f072734cdbb84f226ab054e6d5fb21dbd331758521d87f209)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be3d68937caafeb40044eb58af900b43a79ade06bc83f6b511eabf229ee13be0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.AclProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_ip_version": "addressIpVersion",
        "acl_entries": "aclEntries",
        "acl_name": "aclName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class AclProps:
    def __init__(
        self,
        *,
        address_ip_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_entries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAcl.AclEntriesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosAcl.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Acl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl

        :param address_ip_version: Property addressIpVersion: The IP version of the ACL.
        :param acl_entries: Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL. You can add up to 20 entries.
        :param acl_name: Property aclName: The name of the ACL.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags of the ACL.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__babaf4b97f9d39d12b2b9f8160fec0c12483eaef34ae395cb55a09c5d1505df2)
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument acl_entries", value=acl_entries, expected_type=type_hints["acl_entries"])
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "address_ip_version": address_ip_version,
        }
        if acl_entries is not None:
            self._values["acl_entries"] = acl_entries
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property addressIpVersion: The IP version of the ACL.'''
        result = self._values.get("address_ip_version")
        assert result is not None, "Required property 'address_ip_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_entries(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAcl.AclEntriesProperty"]]]]:
        '''Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL.

        You can add up to 20 entries.
        '''
        result = self._values.get("acl_entries")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAcl.AclEntriesProperty"]]]], result)

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aclName: The name of the ACL.'''
        result = self._values.get("acl_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosAcl.TagsProperty"]]:
        '''Property tags: Tags of the ACL.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosAcl.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AclsListenerAssociation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.AclsListenerAssociation",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::AclsListenerAssociation``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAclsListenerAssociation``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AclsListenerAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9202046bb9961b2066083670251fc1cb33cf23a06d4ed66821efe4efe6202a4f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclIds: The IDs of the ACL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclIds"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ListenerId: The ID of the listener.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8e298bf2b49f09937ed841ae089741e433ff0528557402f6341dba9875f5ffe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b08c9f463ec5957b29c56d863f1997e62d43a917dc2362a0f0424bf17bba4129)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AclsListenerAssociationProps":
        return typing.cast("AclsListenerAssociationProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AclsListenerAssociationProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3daa19efe9cc6301527f3f36b8fa51b1282be74d965f9aea3432a1ba1539087c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__108d7235c0351e77c9a54a091423c5c6ef71f9f2a305c9c2d4cc5a0fdbb2199c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.AclsListenerAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_ids": "aclIds",
        "acl_type": "aclType",
        "listener_id": "listenerId",
    },
)
class AclsListenerAssociationProps:
    def __init__(
        self,
        *,
        acl_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        acl_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``AclsListenerAssociation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation

        :param acl_ids: Property aclIds: The ID of the ACL. You can associate up to two ACL IDs.
        :param acl_type: Property aclType: The type of ACL. Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests. black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
        :param listener_id: Property listenerId: The ID of the listener.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a1d4a6e29e52f6c56c63061dc087321df38e5cba171c4782dc09fc3fe0d1501)
            check_type(argname="argument acl_ids", value=acl_ids, expected_type=type_hints["acl_ids"])
            check_type(argname="argument acl_type", value=acl_type, expected_type=type_hints["acl_type"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_ids": acl_ids,
            "acl_type": acl_type,
            "listener_id": listener_id,
        }

    @builtins.property
    def acl_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property aclIds: The ID of the ACL.

        You can associate up to two ACL IDs.
        '''
        result = self._values.get("acl_ids")
        assert result is not None, "Required property 'acl_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def acl_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclType: The type of ACL.

        Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
        black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
        '''
        result = self._values.get("acl_type")
        assert result is not None, "Required property 'acl_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerId: The ID of the listener.'''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AclsListenerAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ApplicationMonitor(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.ApplicationMonitor",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::ApplicationMonitor``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApplicationMonitor``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ApplicationMonitorProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9864fcde8839025897e1460da78819c7fe4eb818360b3f851405808598762d87)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TaskId: The ID of the origin probing task.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1832cb6f538bb8e2bc975483fb393c38acd30dd4d31832360d7f25d315593b16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6d2bbd1c9efd5f7a74f6dfa5dc9dad80faf913dcbe9fe094634e7657b95064e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ApplicationMonitorProps":
        return typing.cast("ApplicationMonitorProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ApplicationMonitorProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ec923eb0bae60db529420f4ec7faac80d117085e52165fcb43900af4820651c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e22628aed079494a66c8ec146cefefca5eed321b2999fb38df24b222f40b3163)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.ApplicationMonitorProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "address": "address",
        "listener_id": "listenerId",
        "task_name": "taskName",
        "detect_enable": "detectEnable",
        "detect_threshold": "detectThreshold",
        "detect_times": "detectTimes",
        "options_json": "optionsJson",
        "silence_time": "silenceTime",
    },
)
class ApplicationMonitorProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        detect_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        detect_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        detect_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ApplicationMonitor``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor

        :param accelerator_id: Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
        :param address: Property address: The URL or IP address that you want to probe.
        :param listener_id: Property listenerId: The ID of the listener on which you want to perform the origin probing task.
        :param task_name: Property taskName: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        :param detect_enable: Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
        :param detect_threshold: Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
        :param detect_times: Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. Valid values: 1 to 20. Default value: 1.
        :param options_json: Property optionsJson: The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
        :param silence_time: Property silenceTime: The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a908cffd075fe3111de93e46e5d199f553298acd1966591b454045326e571986)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument address", value=address, expected_type=type_hints["address"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
            check_type(argname="argument task_name", value=task_name, expected_type=type_hints["task_name"])
            check_type(argname="argument detect_enable", value=detect_enable, expected_type=type_hints["detect_enable"])
            check_type(argname="argument detect_threshold", value=detect_threshold, expected_type=type_hints["detect_threshold"])
            check_type(argname="argument detect_times", value=detect_times, expected_type=type_hints["detect_times"])
            check_type(argname="argument options_json", value=options_json, expected_type=type_hints["options_json"])
            check_type(argname="argument silence_time", value=silence_time, expected_type=type_hints["silence_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "address": address,
            "listener_id": listener_id,
            "task_name": task_name,
        }
        if detect_enable is not None:
            self._values["detect_enable"] = detect_enable
        if detect_threshold is not None:
            self._values["detect_threshold"] = detect_threshold
        if detect_times is not None:
            self._values["detect_times"] = detect_times
        if options_json is not None:
            self._values["options_json"] = options_json
        if silence_time is not None:
            self._values["silence_time"] = silence_time

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def address(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property address: The URL or IP address that you want to probe.'''
        result = self._values.get("address")
        assert result is not None, "Required property 'address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerId: The ID of the listener on which you want to perform the origin probing task.'''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property taskName: The name of the origin probing task.

        The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("task_name")
        assert result is not None, "Required property 'task_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def detect_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property detectEnable: Specifies whether to enable the automatic diagnostics feature.'''
        result = self._values.get("detect_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def detect_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature.

        Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
        '''
        result = self._values.get("detect_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def detect_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered.

        Valid values: 1 to 20. Default value: 1.
        '''
        result = self._values.get("detect_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property optionsJson: The extended options of the listener protocol that is used by the origin probing task.

        The options vary based on the listener protocol.
        '''
        result = self._values.get("options_json")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def silence_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property silenceTime: The silence period of the automatic diagnostics feature.

        This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
        '''
        result = self._values.get("silence_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplicationMonitorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BandwidthPackage(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BandwidthPackage",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::BandwidthPackage``, which is used to create a bandwidth plan.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBandwidthPackage``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
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
            type_hints = typing.get_type_hints(_typecheckingstub__a29e384b490a67787c89fcf9c1731467ed499bdf18b293fa09bcc99c195d2044)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoPay: The AutoPay of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoPay"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoUseCoupon"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Bandwidth: The bandwidth provided by the bandwidth plan.'''
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
        '''Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthType"))

    @builtins.property
    @jsii.member(jsii_name="attrBillingType")
    def attr_billing_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BillingType: The BillingType of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBillingType"))

    @builtins.property
    @jsii.member(jsii_name="attrCbnGeographicRegionIdA")
    def attr_cbn_geographic_region_id_a(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdA"))

    @builtins.property
    @jsii.member(jsii_name="attrCbnGeographicRegionIdB")
    def attr_cbn_geographic_region_id_b(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdB"))

    @builtins.property
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ChargeType: The ChargeType of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: The Payment Type of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRatio")
    def attr_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ratio: The Ratio of the bandwidth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Type: The type of the bandwidth plan.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a43d9de727d72eb7967bc215a5af3c49823568b38e4e23ed1029bc78b03405c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68f52fed96de4d9dabe2e59742be1b2d5b4ead2578e65029f713c77539ed63e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BandwidthPackageProps":
        return typing.cast("BandwidthPackageProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BandwidthPackageProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49c70781bc8488486dfd82b83cc57c513b187fce78cf465375c9577255a4331e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79b68de672ce8cb27defe225a79c7d6e71d03957fa74e9555cb586c1577816cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class BandwidthPackageAcceleratorAddition(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BandwidthPackageAcceleratorAddition",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``, which is used to bind a bandwidth plan to a global acceleration instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBandwidthPackageAcceleratorAddition``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BandwidthPackageAcceleratorAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8df159a76fbfeb6c0468379f4b7e466132321e7b576399d49c057d2a7986d41c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AcceleratorId: The ID of the Global Accelerator instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BandwidthPackageId: The ID of the bandwidth package which is associated.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75c8c8f571508574f373d7795c468ece9b0117e2c4d4096fcbd936cce97926db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__037b35b93daf9f680483f501a62d76f9d8bdb2c5c6e1613c6f5b1b1d9d4fea00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BandwidthPackageAcceleratorAdditionProps":
        return typing.cast("BandwidthPackageAcceleratorAdditionProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BandwidthPackageAcceleratorAdditionProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0496e0b3d170778e7ec128157be88069986973fd072615a85437958a1125ff80)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0286a2659c50515b2d347048c3d6764a57bf3c1b9e0cd63d9fcae881b3640cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.BandwidthPackageAcceleratorAdditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "bandwidth_package_id": "bandwidthPackageId",
    },
)
class BandwidthPackageAcceleratorAdditionProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``BandwidthPackageAcceleratorAddition``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition

        :param accelerator_id: Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth plan.
        :param bandwidth_package_id: Property bandwidthPackageId: The ID of the bandwidth package to associate.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__791ed4eadd73185d9f6f1b7515896e49ae8aa1ff1530de7e55c08abf6d11b44f)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "bandwidth_package_id": bandwidth_package_id,
        }

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth plan.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bandwidthPackageId: The ID of the bandwidth package to associate.'''
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BandwidthPackageAcceleratorAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.BandwidthPackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "type": "type",
        "auto_pay": "autoPay",
        "auto_use_coupon": "autoUseCoupon",
        "bandwidth_type": "bandwidthType",
        "billing_type": "billingType",
        "cbn_geographic_region_id_a": "cbnGeographicRegionIdA",
        "cbn_geographic_region_id_b": "cbnGeographicRegionIdB",
        "charge_type": "chargeType",
        "duration": "duration",
        "pricing_cycle": "pricingCycle",
        "ratio": "ratio",
    },
)
class BandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cbn_geographic_region_id_a: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cbn_geographic_region_id_b: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ratio: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``BandwidthPackage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage

        :param bandwidth: Property bandwidth: The bandwidth provided by the bandwidth plan.
        :param type: Property type: The type of the bandwidth plan.
        :param auto_pay: Property autoPay: Specifies whether to enable automatic payment.
        :param auto_use_coupon: Property autoUseCoupon: The AutoUseCoupon of the bandwidth.
        :param bandwidth_type: Property bandwidthType: the bandwidth BandwidthType of the bandwidth.
        :param billing_type: Property billingType: The BillingType of the bandwidth.
        :param cbn_geographic_region_id_a: Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA of the bandwidth.
        :param cbn_geographic_region_id_b: Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
        :param charge_type: Property chargeType: The ChargeType of the bandwidth.
        :param duration: Property duration:.
        :param pricing_cycle: Property pricingCycle:.
        :param ratio: Property ratio: The Ratio of the bandwidth.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc1f17cb39b635e560067f62fa772139fb9f47a6d748382ca657cb503ca0941f)
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_use_coupon", value=auto_use_coupon, expected_type=type_hints["auto_use_coupon"])
            check_type(argname="argument bandwidth_type", value=bandwidth_type, expected_type=type_hints["bandwidth_type"])
            check_type(argname="argument billing_type", value=billing_type, expected_type=type_hints["billing_type"])
            check_type(argname="argument cbn_geographic_region_id_a", value=cbn_geographic_region_id_a, expected_type=type_hints["cbn_geographic_region_id_a"])
            check_type(argname="argument cbn_geographic_region_id_b", value=cbn_geographic_region_id_b, expected_type=type_hints["cbn_geographic_region_id_b"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument ratio", value=ratio, expected_type=type_hints["ratio"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth": bandwidth,
            "type": type,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_use_coupon is not None:
            self._values["auto_use_coupon"] = auto_use_coupon
        if bandwidth_type is not None:
            self._values["bandwidth_type"] = bandwidth_type
        if billing_type is not None:
            self._values["billing_type"] = billing_type
        if cbn_geographic_region_id_a is not None:
            self._values["cbn_geographic_region_id_a"] = cbn_geographic_region_id_a
        if cbn_geographic_region_id_b is not None:
            self._values["cbn_geographic_region_id_b"] = cbn_geographic_region_id_b
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if duration is not None:
            self._values["duration"] = duration
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if ratio is not None:
            self._values["ratio"] = ratio

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bandwidth: The bandwidth provided by the bandwidth plan.'''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The type of the bandwidth plan.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Specifies whether to enable automatic payment.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.'''
        result = self._values.get("auto_use_coupon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidthType: the bandwidth BandwidthType of the bandwidth.'''
        result = self._values.get("bandwidth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property billingType: The BillingType of the bandwidth.'''
        result = self._values.get("billing_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cbn_geographic_region_id_a(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.'''
        result = self._values.get("cbn_geographic_region_id_a")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cbn_geographic_region_id_b(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.'''
        result = self._values.get("cbn_geographic_region_id_b")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The ChargeType of the bandwidth.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property duration:.'''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pricingCycle:.'''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ratio(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ratio: The Ratio of the bandwidth.'''
        result = self._values.get("ratio")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BasicAccelerateIp(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BasicAccelerateIp",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::BasicAccelerateIp``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBasicAccelerateIp``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BasicAccelerateIpProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98139162157fa81a273735f03215b2a9329171c1743da1d2466d076a330f3f45)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccelerateIpId")
    def attr_accelerate_ip_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccelerateIpId: The ID of the accelerated IP address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccelerateIpId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a543b6902f43919c9ac80bf4bcdd55ed4101f16008622c44afc5fb4a48f52744)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02a0cb7e4459b3eb10c23fb6be26672decc97a452954f2e722459a653af3b999)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BasicAccelerateIpProps":
        return typing.cast("BasicAccelerateIpProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BasicAccelerateIpProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e60bddd41fa217851c7eb55abc13c63f73cf6df2bcbbf33f98d3e68b4a60dadd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86a78ae63c4d00dc0a2357a9d8b3c1feb293f07e466b8b61f9777afaaabbd209)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.BasicAccelerateIpProps",
    jsii_struct_bases=[],
    name_mapping={"accelerator_id": "acceleratorId", "ip_set_id": "ipSetId"},
)
class BasicAccelerateIpProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ip_set_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``BasicAccelerateIp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip

        :param accelerator_id: Property acceleratorId: The ID of the basic GA instance.
        :param ip_set_id: Property ipSetId: The ID of the acceleration region.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e581a70de26e5caee26ba13db813e3faf1db52cabd1b0bdeb94aafe5ff291ff)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument ip_set_id", value=ip_set_id, expected_type=type_hints["ip_set_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "ip_set_id": ip_set_id,
        }

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the basic GA instance.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ip_set_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ipSetId: The ID of the acceleration region.'''
        result = self._values.get("ip_set_id")
        assert result is not None, "Required property 'ip_set_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BasicAccelerateIpProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BasicAccelerator(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BasicAccelerator",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::BasicAccelerator``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBasicAccelerator``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["BasicAcceleratorProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8677ff85d295d3c2c2ed4ec4ca19b9819e5b94e2d995be61f37b33d1ae66dea)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AcceleratorId: The ID of the accelerated IP address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e861fb437286ed6dcae8e65505d6dbdd0979bcf780853e7ce4551cfb18a8995)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c77d9831e5a2d827204e898e7eb891fde69b261cb3481535eaf6b4caf5bd7fb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BasicAcceleratorProps":
        return typing.cast("BasicAcceleratorProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BasicAcceleratorProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c689215073d939e1a556b8612fcdb2e40517d2119e05b986c5741846b5898a64)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45dd627b3e86f549c6f6513d23abcacc0c6122e7fb7a2b89f7a8974b1afa878b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class BasicAcceleratorIpEndpointRelation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BasicAcceleratorIpEndpointRelation",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::BasicAcceleratorIpEndpointRelation``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBasicAcceleratorIpEndpointRelation``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BasicAcceleratorIpEndpointRelationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c480432b7aa0157d987ace56be1d70198574c3048f4b9161adf1d79e2597485)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccelerateIpId")
    def attr_accelerate_ip_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccelerateIpId: The ID of the accelerated IP address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccelerateIpId"))

    @builtins.property
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AcceleratorId: The ID of the basic GA instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EndpointId: The ID of the endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdeb6d20ccf5d5aaec1d4e9847ef65f305ee979b18261911458e9f651aecf25c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0898d5eba9a1585e10a8e8acad67fdbe58dfd3f66579aa6afbad0db41654c5aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BasicAcceleratorIpEndpointRelationProps":
        return typing.cast("BasicAcceleratorIpEndpointRelationProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BasicAcceleratorIpEndpointRelationProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c162424295eaa741af2b4fd32b2cf24c9e3f415677de042c76598151c3b799d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f6da975f4c472950d3d66309beb3be7d698b70416b697cdcd76054d6568f286)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.BasicAcceleratorIpEndpointRelationProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerate_ip_id": "accelerateIpId",
        "accelerator_id": "acceleratorId",
        "endpoint_id": "endpointId",
    },
)
class BasicAcceleratorIpEndpointRelationProps:
    def __init__(
        self,
        *,
        accelerate_ip_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``BasicAcceleratorIpEndpointRelation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation

        :param accelerate_ip_id: Property accelerateIpId: The ID of the accelerated IP address.
        :param accelerator_id: Property acceleratorId: The ID of the basic GA instance.
        :param endpoint_id: Property endpointId: The ID of the endpoint.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__817d03d9958c51f3e6fceaec34d6cc2cebe63d5f0f518ee534bb204631cebe66)
            check_type(argname="argument accelerate_ip_id", value=accelerate_ip_id, expected_type=type_hints["accelerate_ip_id"])
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument endpoint_id", value=endpoint_id, expected_type=type_hints["endpoint_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerate_ip_id": accelerate_ip_id,
            "accelerator_id": accelerator_id,
            "endpoint_id": endpoint_id,
        }

    @builtins.property
    def accelerate_ip_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accelerateIpId: The ID of the accelerated IP address.'''
        result = self._values.get("accelerate_ip_id")
        assert result is not None, "Required property 'accelerate_ip_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the basic GA instance.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endpointId: The ID of the endpoint.'''
        result = self._values.get("endpoint_id")
        assert result is not None, "Required property 'endpoint_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BasicAcceleratorIpEndpointRelationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.BasicAcceleratorProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "auto_renew_duration": "autoRenewDuration",
        "auto_use_coupon": "autoUseCoupon",
        "bandwidth_billing_type": "bandwidthBillingType",
        "charge_type": "chargeType",
        "duration": "duration",
        "pricing_cycle": "pricingCycle",
        "promotion_option_no": "promotionOptionNo",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class BasicAcceleratorProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        promotion_option_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosBasicAccelerator.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``BasicAccelerator``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator

        :param auto_pay: Property autoPay: Specifies whether to enable automatic payment. Valid values: false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value. true: enables automatic payment. Payments are automatically completed.
        :param auto_renew: Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance. Valid values: true: enables auto-renewal for the basic GA instance. false: disables auto-renewal for the basic GA instance. This is the default value.
        :param auto_renew_duration: Property autoRenewDuration: The auto-renewal duration. Unit: months.Valid values: 1 to 12. Default value: 1.
        :param auto_use_coupon: Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills. Valid values: true: automatically applies coupons to your bills. false: does not automatically apply coupons to your bills. This is the default value.
        :param bandwidth_billing_type: Property bandwidthBillingType: The bandwidth billing method. Valid values: BandwidthPackage: billed based on bandwidth plans. CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT). CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
        :param charge_type: Property chargeType: The billing method. Valid values: PREPAY (default)POSTPAY
        :param duration: Property duration: The subscription duration of the GA instance. If you set PricingCycle to Month, the valid values for Duration are 1 to 9. If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
        :param pricing_cycle: Property pricingCycle: The billing cycle. Valid values: Month Year
        :param promotion_option_no: Property promotionOptionNo: The code of the coupon.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
        :param tags: Property tags: The tags of the basic GA instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4f213b531151f8b95228c11a650ae4af3c2dad95c48f87e56f3df348863130e)
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_duration", value=auto_renew_duration, expected_type=type_hints["auto_renew_duration"])
            check_type(argname="argument auto_use_coupon", value=auto_use_coupon, expected_type=type_hints["auto_use_coupon"])
            check_type(argname="argument bandwidth_billing_type", value=bandwidth_billing_type, expected_type=type_hints["bandwidth_billing_type"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument promotion_option_no", value=promotion_option_no, expected_type=type_hints["promotion_option_no"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if auto_use_coupon is not None:
            self._values["auto_use_coupon"] = auto_use_coupon
        if bandwidth_billing_type is not None:
            self._values["bandwidth_billing_type"] = bandwidth_billing_type
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if duration is not None:
            self._values["duration"] = duration
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if promotion_option_no is not None:
            self._values["promotion_option_no"] = promotion_option_no
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Specifies whether to enable automatic payment.

        Valid values:
        false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
        true: enables automatic payment. Payments are automatically completed.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance.

        Valid values:
        true: enables auto-renewal for the basic GA instance.
        false: disables auto-renewal for the basic GA instance. This is the default value.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewDuration: The auto-renewal duration.

        Unit: months.Valid values: 1 to 12. Default value: 1.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills.

        Valid values:
        true: automatically applies coupons to your bills.
        false: does not automatically apply coupons to your bills. This is the default value.
        '''
        result = self._values.get("auto_use_coupon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidthBillingType: The bandwidth billing method.

        Valid values:
        BandwidthPackage: billed based on bandwidth plans.
        CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
        CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
        '''
        result = self._values.get("bandwidth_billing_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The billing method.

        Valid values:
        PREPAY (default)POSTPAY
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property duration: The subscription duration of the GA instance.

        If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
        If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pricingCycle: The billing cycle.

        Valid values:
        Month
        Year
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def promotion_option_no(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property promotionOptionNo: The code of the coupon.'''
        result = self._values.get("promotion_option_no")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosBasicAccelerator.TagsProperty"]]:
        '''Property tags: The tags of the basic GA instance.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosBasicAccelerator.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BasicAcceleratorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BasicEndpoint(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BasicEndpoint",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::BasicEndpoint``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBasicEndpoint``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BasicEndpointProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c73e7dbe18d5354e1e18488e5974440faecbc43407b5d5ee401080263feff93)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EndpointId: The ID of the endpoint.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ebf2ca37a3f9fa96317c0d5cd357ee6c6eca4d77e91d5fa2a74a7b8e3a997a87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__353474fda5ce13e3abbc90c98ddf5fc0f3aa138dc95e22d3d72e53646fb45974)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BasicEndpointProps":
        return typing.cast("BasicEndpointProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BasicEndpointProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ba6f72167afba840c99eda882ecb42a34073c63e2736c1ec02de25acdddf4f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d991467406eb7e92679e740b6ac02273fda06db8b725108a877cee716673729c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class BasicEndpointGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BasicEndpointGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::BasicEndpointGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBasicEndpointGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BasicEndpointGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf8772e7217240fe7e634a99184ff69d15f7a9519166ca0f07fa233a5130ec01)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEndpointGroupId")
    def attr_endpoint_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EndpointGroupId: The endpoint group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointGroupId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09fa8e81f28d5ca1ea4ce9ab52b5501a9e63efa0660aa3c7049b64f39f66cc2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf437a06b9d6c62c36439f93de75fb8f939746bbc926ff9e5508ab957707eef7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BasicEndpointGroupProps":
        return typing.cast("BasicEndpointGroupProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BasicEndpointGroupProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19e753292e838c1b2398c386d5b26bd5fb4fd1290e855751f68f2aaaf50aac46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03351b34c9d069fe8b0a106b842d6a52311e6e5a29feb01a76152bfe3791d87c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.BasicEndpointGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "endpoint_group_region": "endpointGroupRegion",
        "description": "description",
        "endpoint_address": "endpointAddress",
        "endpoint_sub_address": "endpointSubAddress",
        "endpoint_type": "endpointType",
        "name": "name",
    },
)
class BasicEndpointGroupProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_group_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_sub_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``BasicEndpointGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup

        :param accelerator_id: Property acceleratorId: The ID of the basic GA instance.
        :param endpoint_group_region: Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.
        :param description: Property description: The description of the endpoint group. The description can be up to 200 characters in length and cannot start with http:// or https://.
        :param endpoint_address: Property endpointAddress: The endpoint address.
        :param endpoint_sub_address: Property endpointSubAddress: The secondary address of the endpoint. You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI). When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used. If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
        :param endpoint_type: Property endpointType: The type of the endpoint. Valid values: ENI SLB ECS
        :param name: Property name: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bedf097be63f1431740f65b8758fe299adab3a8a232e634a73effcec6b96cd63)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument endpoint_group_region", value=endpoint_group_region, expected_type=type_hints["endpoint_group_region"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument endpoint_address", value=endpoint_address, expected_type=type_hints["endpoint_address"])
            check_type(argname="argument endpoint_sub_address", value=endpoint_sub_address, expected_type=type_hints["endpoint_sub_address"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "endpoint_group_region": endpoint_group_region,
        }
        if description is not None:
            self._values["description"] = description
        if endpoint_address is not None:
            self._values["endpoint_address"] = endpoint_address
        if endpoint_sub_address is not None:
            self._values["endpoint_sub_address"] = endpoint_sub_address
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the basic GA instance.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_group_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.'''
        result = self._values.get("endpoint_group_region")
        assert result is not None, "Required property 'endpoint_group_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the endpoint group.

        The description can be up to 200 characters in length and cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointAddress: The endpoint address.'''
        result = self._values.get("endpoint_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_sub_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointSubAddress: The secondary address of the endpoint.

        You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
        When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
        If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
        '''
        result = self._values.get("endpoint_sub_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointType: The type of the endpoint.

        Valid values:
        ENI
        SLB
        ECS
        '''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the endpoint group.

        The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BasicEndpointGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.BasicEndpointProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "endpoint_address": "endpointAddress",
        "endpoint_group_id": "endpointGroupId",
        "endpoint_sub_address": "endpointSubAddress",
        "endpoint_sub_address_type": "endpointSubAddressType",
        "endpoint_type": "endpointType",
        "endpoint_zone_id": "endpointZoneId",
        "name": "name",
    },
)
class BasicEndpointProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_sub_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_sub_address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``BasicEndpoint``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint

        :param accelerator_id: Property acceleratorId: The ID of the basic GA instance.
        :param endpoint_address: Property endpointAddress: The address of the endpoint.
        :param endpoint_group_id: Property endpointGroupId: The ID of the endpoint group.
        :param endpoint_sub_address: Property endpointSubAddress: The secondary address of the endpoint. This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used. If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used. This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
        :param endpoint_sub_address_type: Property endpointSubAddressType: The type of the secondary address of the endpoint. Valid values: primary: a primary private IP address. secondary: a secondary private IP address. This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
        :param endpoint_type: Property endpointType: The type of the endpoint. Valid values: ENI: elastic network interface (ENI) SLB: Classic Load Balancer (CLB) NLB: Network Load Balancer (NLB) ECS: Elastic Compute Service (ECS)
        :param endpoint_zone_id: Property endpointZoneId: The zone ID of the endpoint. This parameter is required only if the endpoint type is NLB.
        :param name: Property name: The name of the endpoint that is associated with the basic GA instance. The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0a714d03b5c2e3994a0ee45fa7d2ed7ef3cd18fb61a33069d0e93b55bc8a302)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument endpoint_address", value=endpoint_address, expected_type=type_hints["endpoint_address"])
            check_type(argname="argument endpoint_group_id", value=endpoint_group_id, expected_type=type_hints["endpoint_group_id"])
            check_type(argname="argument endpoint_sub_address", value=endpoint_sub_address, expected_type=type_hints["endpoint_sub_address"])
            check_type(argname="argument endpoint_sub_address_type", value=endpoint_sub_address_type, expected_type=type_hints["endpoint_sub_address_type"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument endpoint_zone_id", value=endpoint_zone_id, expected_type=type_hints["endpoint_zone_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "endpoint_address": endpoint_address,
            "endpoint_group_id": endpoint_group_id,
        }
        if endpoint_sub_address is not None:
            self._values["endpoint_sub_address"] = endpoint_sub_address
        if endpoint_sub_address_type is not None:
            self._values["endpoint_sub_address_type"] = endpoint_sub_address_type
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if endpoint_zone_id is not None:
            self._values["endpoint_zone_id"] = endpoint_zone_id
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the basic GA instance.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endpointAddress: The address of the endpoint.'''
        result = self._values.get("endpoint_address")
        assert result is not None, "Required property 'endpoint_address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endpointGroupId: The ID of the endpoint group.'''
        result = self._values.get("endpoint_group_id")
        assert result is not None, "Required property 'endpoint_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_sub_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointSubAddress: The secondary address of the endpoint.

        This parameter is required if the endpoint type is ECS, ENI, or NLB.
        If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
        If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
        This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
        '''
        result = self._values.get("endpoint_sub_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_sub_address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointSubAddressType: The type of the secondary address of the endpoint.

        Valid values:
        primary: a primary private IP address.
        secondary: a secondary private IP address.
        This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
        '''
        result = self._values.get("endpoint_sub_address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointType: The type of the endpoint.

        Valid values:
        ENI: elastic network interface (ENI)
        SLB: Classic Load Balancer (CLB)
        NLB: Network Load Balancer (NLB)
        ECS: Elastic Compute Service (ECS)
        '''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointZoneId: The zone ID of the endpoint.

        This parameter is required only if the endpoint type is NLB.
        '''
        result = self._values.get("endpoint_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the endpoint that is associated with the basic GA instance.

        The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BasicEndpointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BasicIpSet(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BasicIpSet",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::BasicIpSet``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBasicIpSet``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BasicIpSetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cdd8a8df49d333ff838b3070783777e18f66d40f297e3cc0167fe6f613f9ada)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrIpSetId")
    def attr_ip_set_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpSetId: The ID of the acceleration region.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpSetId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd356fcbd8f151cfcb1708e66daed06491202954bc49abf7dd12e826f0fa6117)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4fc86f7c345d74ed730b647ef5f2e22914e481ffad9e1d5a18052d00dda03ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "BasicIpSetProps":
        return typing.cast("BasicIpSetProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "BasicIpSetProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19af03377aa5a5c792e2e828cfae6ec87ba72a0ffbf09970189f18750d0a9c47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a347c306d823fb27765bd283d848c7fec35d753b3584ff6686389f0353d1d887)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.BasicIpSetProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "accelerate_region_id": "accelerateRegionId",
        "bandwidth": "bandwidth",
        "isp_type": "ispType",
    },
)
class BasicIpSetProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accelerate_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        isp_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``BasicIpSet``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset

        :param accelerator_id: Property acceleratorId: The ID of the basic GA instance.
        :param accelerate_region_id: Property accelerateRegionId: The ID of the acceleration region.
        :param bandwidth: Property bandwidth: The bandwidth that you want to allocate to the acceleration region. Unit: Mbit/s.You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.
        :param isp_type: Property ispType: The line type of the elastic IP address (EIP) in the acceleration region. Valid values: BGP (default): BGP (Multi-ISP) lines. BGP_PRO: BGP (Multi-ISP) Pro lines. Valid values if you are allowed to use single-ISP bandwidth: ChinaTelecom ChinaUnicom ChinaMobile ChinaTelecom_L2 ChinaUnicom_L2 ChinaMobile_L2
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6102d62af7e6dd73eab30ea2c1bc73d9ab5c64f425b26be9d1e4e524158f1b2)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument accelerate_region_id", value=accelerate_region_id, expected_type=type_hints["accelerate_region_id"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument isp_type", value=isp_type, expected_type=type_hints["isp_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
        }
        if accelerate_region_id is not None:
            self._values["accelerate_region_id"] = accelerate_region_id
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if isp_type is not None:
            self._values["isp_type"] = isp_type

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the basic GA instance.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accelerate_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accelerateRegionId: The ID of the acceleration region.'''
        result = self._values.get("accelerate_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidth: The bandwidth that you want to allocate to the acceleration region.

        Unit: Mbit/s.You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def isp_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ispType: The line type of the elastic IP address (EIP) in the acceleration region.

        Valid values:
        BGP (default): BGP (Multi-ISP) lines.
        BGP_PRO: BGP (Multi-ISP) Pro lines.
        Valid values if you are allowed to use single-ISP bandwidth:
        ChinaTelecom
        ChinaUnicom
        ChinaMobile
        ChinaTelecom_L2
        ChinaUnicom_L2
        ChinaMobile_L2
        '''
        result = self._values.get("isp_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BasicIpSetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EndpointGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.EndpointGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::EndpointGroup``, which is used to create an endpoint group.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEndpointGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["EndpointGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f16770fb062838e3847f691dd05637f56ed8ae1ca767eb348d2e1b55e656eb46)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEndpointGroupId")
    def attr_endpoint_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EndpointGroupId: The ID of the endpoint group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointGroupId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d02d0fc734a732a1d4e4002dbcf6bca62db1f0ef349733e9ed3f6431e7d380b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbd93ba1c36482298ef9d77af426f1f8a80035169772b76457be8e1bc06b05a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "EndpointGroupProps":
        return typing.cast("EndpointGroupProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "EndpointGroupProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1566150d22dd7e633c9372a8bc94a2c2b89af951f47e1d0be9952161c90e0d34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d55d05fb305b4011b9786d55b7e8e69a6a1c6f60851120b67826ae87c82cdb4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.EndpointGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "endpoint_configurations": "endpointConfigurations",
        "endpoint_group_region": "endpointGroupRegion",
        "listener_id": "listenerId",
        "description": "description",
        "endpoint_group_type": "endpointGroupType",
        "endpoint_request_protocol": "endpointRequestProtocol",
        "health_check_enabled": "healthCheckEnabled",
        "health_check_interval_seconds": "healthCheckIntervalSeconds",
        "health_check_path": "healthCheckPath",
        "health_check_port": "healthCheckPort",
        "health_check_protocol": "healthCheckProtocol",
        "name": "name",
        "threshold_count": "thresholdCount",
        "traffic_percentage": "trafficPercentage",
    },
)
class EndpointGroupProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_configurations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEndpointGroup.EndpointConfigurationsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        endpoint_group_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_request_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_interval_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threshold_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        traffic_percentage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``EndpointGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup

        :param accelerator_id: Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        :param endpoint_configurations: Property endpointConfigurations:.
        :param endpoint_group_region: Property endpointGroupRegion: The region ID of the endpoint group.
        :param listener_id: Property listenerId: The ID of the listener to be associated with the endpoint group.
        :param description: Property description: The description of the endpoint group.
        :param endpoint_group_type: Property endpointGroupType: The type of the endpoint group. Valid values: default: The endpoint group is a default endpoint group. This is the default value. virtual: The endpoint group is a virtual endpoint group. Note Only HTTP and HTTPS listeners support virtual endpoint groups.
        :param endpoint_request_protocol: Property endpointRequestProtocol: The protocol used by the backend service. Valid values: http: This is the default value. https Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS. For an HTTP listener, the backend service protocol must be HTTP.
        :param health_check_enabled: Property healthCheckEnabled: Specifies whether to enable the health check feature.
        :param health_check_interval_seconds: Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        :param health_check_path: Property healthCheckPath: The path set as the destination on the targets for health checks.
        :param health_check_port: Property healthCheckPort: The port that is used to connect with the targets for health checks.
        :param health_check_protocol: Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks. tcp: TCP protocol http: HTTP protocol https: HTTPS protocol
        :param name: Property name: The name of the endpoint group.
        :param threshold_count: Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy. Valid values: 2 to 10. Default value: 3.
        :param traffic_percentage: Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6dd0b3daf8df8a641c9775042b7f404f0d958cf5e8bb07fc98341df4ae51582)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument endpoint_configurations", value=endpoint_configurations, expected_type=type_hints["endpoint_configurations"])
            check_type(argname="argument endpoint_group_region", value=endpoint_group_region, expected_type=type_hints["endpoint_group_region"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument endpoint_group_type", value=endpoint_group_type, expected_type=type_hints["endpoint_group_type"])
            check_type(argname="argument endpoint_request_protocol", value=endpoint_request_protocol, expected_type=type_hints["endpoint_request_protocol"])
            check_type(argname="argument health_check_enabled", value=health_check_enabled, expected_type=type_hints["health_check_enabled"])
            check_type(argname="argument health_check_interval_seconds", value=health_check_interval_seconds, expected_type=type_hints["health_check_interval_seconds"])
            check_type(argname="argument health_check_path", value=health_check_path, expected_type=type_hints["health_check_path"])
            check_type(argname="argument health_check_port", value=health_check_port, expected_type=type_hints["health_check_port"])
            check_type(argname="argument health_check_protocol", value=health_check_protocol, expected_type=type_hints["health_check_protocol"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument threshold_count", value=threshold_count, expected_type=type_hints["threshold_count"])
            check_type(argname="argument traffic_percentage", value=traffic_percentage, expected_type=type_hints["traffic_percentage"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "endpoint_configurations": endpoint_configurations,
            "endpoint_group_region": endpoint_group_region,
            "listener_id": listener_id,
        }
        if description is not None:
            self._values["description"] = description
        if endpoint_group_type is not None:
            self._values["endpoint_group_type"] = endpoint_group_type
        if endpoint_request_protocol is not None:
            self._values["endpoint_request_protocol"] = endpoint_request_protocol
        if health_check_enabled is not None:
            self._values["health_check_enabled"] = health_check_enabled
        if health_check_interval_seconds is not None:
            self._values["health_check_interval_seconds"] = health_check_interval_seconds
        if health_check_path is not None:
            self._values["health_check_path"] = health_check_path
        if health_check_port is not None:
            self._values["health_check_port"] = health_check_port
        if health_check_protocol is not None:
            self._values["health_check_protocol"] = health_check_protocol
        if name is not None:
            self._values["name"] = name
        if threshold_count is not None:
            self._values["threshold_count"] = threshold_count
        if traffic_percentage is not None:
            self._values["traffic_percentage"] = traffic_percentage

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_configurations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]]:
        '''Property endpointConfigurations:.'''
        result = self._values.get("endpoint_configurations")
        assert result is not None, "Required property 'endpoint_configurations' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]], result)

    @builtins.property
    def endpoint_group_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endpointGroupRegion: The region ID of the endpoint group.'''
        result = self._values.get("endpoint_group_region")
        assert result is not None, "Required property 'endpoint_group_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerId: The ID of the listener to be associated with the endpoint group.'''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the endpoint group.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointGroupType: The type of the endpoint group.

        Valid values:
        default: The endpoint group is a default endpoint group. This is the default value.
        virtual: The endpoint group is a virtual endpoint group.
        Note Only HTTP and HTTPS listeners support virtual endpoint groups.
        '''
        result = self._values.get("endpoint_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_request_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointRequestProtocol: The protocol used by the backend service.

        Valid values:
        http: This is the default value.
        https
        Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
        For an HTTP listener, the backend service protocol must be HTTP.
        '''
        result = self._values.get("endpoint_request_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckEnabled: Specifies whether to enable the health check feature.'''
        result = self._values.get("health_check_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_interval_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckIntervalSeconds: The interval between two consecutive health checks.

        Unit: seconds.
        '''
        result = self._values.get("health_check_interval_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckPath: The path set as the destination on the targets for health checks.'''
        result = self._values.get("health_check_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckPort: The port that is used to connect with the targets for health checks.'''
        result = self._values.get("health_check_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.

        tcp: TCP protocol
        http: HTTP protocol
        https: HTTPS protocol
        '''
        result = self._values.get("health_check_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the endpoint group.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threshold_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.

        Valid values: 2 to 10. Default value: 3.
        '''
        result = self._values.get("threshold_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def traffic_percentage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.'''
        result = self._values.get("traffic_percentage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EndpointGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EndpointGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.EndpointGroups",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::EndpointGroups``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEndpointGroups``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["EndpointGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__632282250113cd8ca829af4508c56a7b55c30854114f6804bac20d3dab56627b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEndpointGroupIds")
    def attr_endpoint_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EndpointGroupIds: The IDs of the endpoint groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77d9a7c9f2a4179ffbbceb1fa4e0bca990e03cb2a5bc3a2ce2fde6858abb6469)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03cb3a82d2334a4b20efdd62ee46c4afb80b1405607bd370978086008b7d3c8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "EndpointGroupsProps":
        return typing.cast("EndpointGroupsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "EndpointGroupsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e0c24e0821375bf2e0b94306eaa33cebff162f9a8d742bd568dd2695ab93143)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e45d399c2a62f5d9d754d2651bf1c7c6806cf90e3e82063664b068c555a556e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.EndpointGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "endpoint_group_configurations": "endpointGroupConfigurations",
        "listener_id": "listenerId",
    },
)
class EndpointGroupsProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_group_configurations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEndpointGroups.EndpointGroupConfigurationsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``EndpointGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups

        :param accelerator_id: Property acceleratorId: The ID of the basic GA instance.
        :param endpoint_group_configurations: Property endpointGroupConfigurations: The configurations of the endpoint groups.
        :param listener_id: Property listenerId: The ID of the region to which the endpoint group belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c980e390fff13bdc282f121c239e492bfbd656fec7e5cc392aba2f1180b0672)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument endpoint_group_configurations", value=endpoint_group_configurations, expected_type=type_hints["endpoint_group_configurations"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "endpoint_group_configurations": endpoint_group_configurations,
            "listener_id": listener_id,
        }

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the basic GA instance.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_group_configurations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroups.EndpointGroupConfigurationsProperty"]]]:
        '''Property endpointGroupConfigurations: The configurations of the endpoint groups.'''
        result = self._values.get("endpoint_group_configurations")
        assert result is not None, "Required property 'endpoint_group_configurations' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroups.EndpointGroupConfigurationsProperty"]]], result)

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerId: The ID of the region to which the endpoint group belongs.'''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EndpointGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class IpSets(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.IpSets",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::IpSets``, which is used to create acceleration regions.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosIpSets``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["IpSetsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6cc67c01c90652e25829f8e6126d2f38338147bdb9e638828ad285ca3e4beab9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccelerateRegionIds")
    def attr_accelerate_region_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccelerateRegionIds: The ID list of the accelerate region.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccelerateRegionIds"))

    @builtins.property
    @jsii.member(jsii_name="attrIpSetIds")
    def attr_ip_set_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpSetIds: The ID list of the ip set.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpSetIds"))

    @builtins.property
    @jsii.member(jsii_name="attrIpVersions")
    def attr_ip_versions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpVersions: The IP version list of the accelerate region.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpVersions"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__722ec0d010e66edabc20916706a10de2f0d805727a10aa1d72b0d582cda0f14d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bda7299cda5016c118226e57e6967195bfd26aa7e9dfa3614e8e7933a928a7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "IpSetsProps":
        return typing.cast("IpSetsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "IpSetsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3f0ec2dd8f919355eedb1573ea66d81ae6f97a8cd5c48274eb2504fe2210a3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfef2a7d709e3942fbea1023771d42409aaaa55c6df010e289cbd983d9b2c9f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.IpSetsProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerate_region": "accelerateRegion",
        "accelerator_id": "acceleratorId",
    },
)
class IpSetsProps:
    def __init__(
        self,
        *,
        accelerate_region: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosIpSets.AccelerateRegionProperty", typing.Dict[builtins.str, typing.Any]]]]],
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``IpSets``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets

        :param accelerate_region: Property accelerateRegion:.
        :param accelerator_id: Property acceleratorId: The ID of the GA instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0aea0a831a4e6cba7c9a9d090f052435d429a7e1e9c8cf59695c510c7508fe7b)
            check_type(argname="argument accelerate_region", value=accelerate_region, expected_type=type_hints["accelerate_region"])
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerate_region": accelerate_region,
            "accelerator_id": accelerator_id,
        }

    @builtins.property
    def accelerate_region(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIpSets.AccelerateRegionProperty"]]]:
        '''Property accelerateRegion:.'''
        result = self._values.get("accelerate_region")
        assert result is not None, "Required property 'accelerate_region' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIpSets.AccelerateRegionProperty"]]], result)

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the GA instance.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IpSetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Listener(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.Listener",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::GA::Listener``, which is used to create a listener for a Global Accelerator (GA) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosListener``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ListenerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d976a520f6f5451faaa6e106d6359d93c03a0570f386ebb8b0b740b9177efd13)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ListenerId: The ID of the listener.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9d0bcd177cf9a5e6160716d55e504e11dbf9c9ef33befd5f869953a015fdd6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__852a6f87912eddbee71d06c9c109ab20fb0be38c0d9322e0e6196dc52041d7a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ListenerProps":
        return typing.cast("ListenerProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ListenerProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4d8e96969ea133927eca4de8520cfc76b4572b524c4c67de1bf15845e60adb6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a81a831334a71bd4081b5e8836d73b93d94a6eef8f9de8ea24d2ad8e2528d8be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.ListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "port_ranges": "portRanges",
        "protocol": "protocol",
        "certificates": "certificates",
        "client_affinity": "clientAffinity",
        "description": "description",
        "name": "name",
        "proxy_protocol": "proxyProtocol",
        "security_policy_id": "securityPolicyId",
        "x_forwarded_for_config": "xForwardedForConfig",
    },
)
class ListenerProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        port_ranges: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.PortRangesProperty", typing.Dict[builtins.str, typing.Any]]]]],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.CertificatesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        client_affinity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_protocol: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        x_forwarded_for_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.XForwardedForConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Listener``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener

        :param accelerator_id: Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        :param port_ranges: Property portRanges:.
        :param protocol: Property protocol: The network transmission protocol of the listener. Valid values: tcp: TCP protocol udp: UDP protocol http: HTTP protocolhttps: HTTPS protocol.
        :param certificates: Property certificates:.
        :param client_affinity: Property clientAffinity: Specifies whether to enable client affinity for the listener. If you do not specify the default value in the parameter, client affinity is disabled. When client affinity is disabled, the connections from a specific source (client) IP address are not always routed to the same endpoint. If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from a specific source (client) IP address are always routed to the same endpoint.
        :param description: Property description: The description of the listener.
        :param name: Property name: The name of the listener. The name must be 2 to 128 characters in length and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter or Chinese character.
        :param proxy_protocol: Property proxyProtocol: Specifies whether to preserve client IP addresses. Valid values: true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses. false (default): does not preserve client IP addresses.
        :param security_policy_id: Property securityPolicyId: The ID of the security policy. Valid values: tls_cipher_policy_1_0 tls_cipher_policy_1_1 tls_cipher_policy_1_2 tls_cipher_policy_1_2_strict tls_cipher_policy_1_2_strict_with_1_3 Note Only HTTPS listeners support this parameter.
        :param x_forwarded_for_config: Property xForwardedForConfig: The configuration of the XForward field.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1b7428a22d07ad433d19b1517d5b183858a3389eeba8611be67e10641620d93)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument port_ranges", value=port_ranges, expected_type=type_hints["port_ranges"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument certificates", value=certificates, expected_type=type_hints["certificates"])
            check_type(argname="argument client_affinity", value=client_affinity, expected_type=type_hints["client_affinity"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument proxy_protocol", value=proxy_protocol, expected_type=type_hints["proxy_protocol"])
            check_type(argname="argument security_policy_id", value=security_policy_id, expected_type=type_hints["security_policy_id"])
            check_type(argname="argument x_forwarded_for_config", value=x_forwarded_for_config, expected_type=type_hints["x_forwarded_for_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "port_ranges": port_ranges,
            "protocol": protocol,
        }
        if certificates is not None:
            self._values["certificates"] = certificates
        if client_affinity is not None:
            self._values["client_affinity"] = client_affinity
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if proxy_protocol is not None:
            self._values["proxy_protocol"] = proxy_protocol
        if security_policy_id is not None:
            self._values["security_policy_id"] = security_policy_id
        if x_forwarded_for_config is not None:
            self._values["x_forwarded_for_config"] = x_forwarded_for_config

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def port_ranges(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PortRangesProperty"]]]:
        '''Property portRanges:.'''
        result = self._values.get("port_ranges")
        assert result is not None, "Required property 'port_ranges' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PortRangesProperty"]]], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocol: The network transmission protocol of the listener.

        Valid values:
        tcp: TCP protocol
        udp: UDP protocol
        http: HTTP protocolhttps: HTTPS protocol.
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def certificates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CertificatesProperty"]]]]:
        '''Property certificates:.'''
        result = self._values.get("certificates")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CertificatesProperty"]]]], result)

    @builtins.property
    def client_affinity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clientAffinity: Specifies whether to enable client affinity for the listener.

        If you do not specify the default value in the parameter, client affinity is disabled.
        When client affinity is disabled, the connections from a specific source (client)
        IP address are not always routed to the same endpoint.
        If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        a specific source (client) IP address are always routed to the same endpoint.
        '''
        result = self._values.get("client_affinity")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the listener.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the listener.

        The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        (_), and hyphens (-). It must start with a letter or Chinese character.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyProtocol: Specifies whether to preserve client IP addresses.

        Valid values:
        true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
        false (default): does not preserve client IP addresses.
        '''
        result = self._values.get("proxy_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityPolicyId: The ID of the security policy.

        Valid values:
        tls_cipher_policy_1_0
        tls_cipher_policy_1_1
        tls_cipher_policy_1_2
        tls_cipher_policy_1_2_strict
        tls_cipher_policy_1_2_strict_with_1_3
        Note Only HTTPS listeners support this parameter.
        '''
        result = self._values.get("security_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def x_forwarded_for_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.XForwardedForConfigProperty"]]:
        '''Property xForwardedForConfig: The configuration of the XForward field.'''
        result = self._values.get("x_forwarded_for_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.XForwardedForConfigProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccelerator(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosAccelerator",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::Accelerator``, which is used to create a Global Accelerator (GA) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Accelerator`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAcceleratorProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9da71c3c7ff1434c935555b4c1a256dc950188977d99316d95e52876886b5854)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b50cb4f4a66688e84cea6177c9976f1ee7d717cae47780ed47ff3d6e127ca1d5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AcceleratorId: The ID of the GA instance to query.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property
    @jsii.member(jsii_name="attrAcceleratorName")
    def attr_accelerator_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AcceleratorName: The Name of the GA instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcceleratorName"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoPay: The AutoPay of the GA instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoPay"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoUseCoupon: The AutoUseCoupon of the GA instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoUseCoupon"))

    @builtins.property
    @jsii.member(jsii_name="attrDuration")
    def attr_duration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Duration: The Duration of the GA instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The OrderId of the GA instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The Payment Typethe GA instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPricingCycle")
    def attr_pricing_cycle(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PricingCycle: The PricingCycle of the GA instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPricingCycle"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Spec: The instance type of the GA instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpec"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__61ea736bcc54adb3675081759ae125d73d99d19ac7a8c6180e4fef61426eda87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="acceleratorName")
    def accelerator_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: acceleratorName: The Name of the GA instance
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "acceleratorName"))

    @accelerator_name.setter
    def accelerator_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08be26c263ed9a9218978b735c3749987041d2363ebd69d7044fa6e96bb638c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorName", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to pay automatically.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d5abafcf01ebb84fee2f1828e1e6227c893e3e00f575f241fc0fff761502843)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoUseCoupon")
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoUseCoupon: The AutoUseCoupon of the GA instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoUseCoupon"))

    @auto_use_coupon.setter
    def auto_use_coupon(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3740a8dc0cd3f992c7ad345ec61737b6831c7c39d7d5afe848ba3c5f8b3efcaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoUseCoupon", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidthBillingType")
    def bandwidth_billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthBillingType: Bandwidth billing method.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidthBillingType"))

    @bandwidth_billing_type.setter
    def bandwidth_billing_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__574df838d76d623639de1729efad49397a8ed97528fd51f90cc1313b7b332d06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthBillingType", value)

    @builtins.property
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: duration: Length of purchase.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddac876d76b1a0b7dfa944dcae05bb8f30a9f9d3d96410f6d1b63fa700e75818)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "duration", value)

    @builtins.property
    @jsii.member(jsii_name="enableCrossBorder")
    def enable_cross_border(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableCrossBorder"))

    @enable_cross_border.setter
    def enable_cross_border(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__970f46e87df8c3c9eab11cbc9b6469522aa96d7fcc5da8cdd39becdefd933d8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableCrossBorder", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fec31e17c3f8676bb143d0f0afadfbc64dc3993a3de0691bd10c21bac0c834c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="ipSetConfig")
    def ip_set_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccelerator.IpSetConfigProperty"]]:
        '''
        :Property: ipSetConfig: Accelerate zone configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccelerator.IpSetConfigProperty"]], jsii.get(self, "ipSetConfig"))

    @ip_set_config.setter
    def ip_set_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccelerator.IpSetConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f60abce1f67dc75c8375307059be5cf49dc4b159e09b5931f488aaebc624ac6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipSetConfig", value)

    @builtins.property
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle: Billing cycle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eea9e1aa40503a7a34e90a265dfb89ddf50d94b0265e500c2f8474add21251ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pricingCycle", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ResourceGroup Id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ac53aa34568e55b68b8212585adc96df80699dcd5b1ce436d4507486df83942)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="spec")
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spec: Specifications of Global Acceleration Instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spec"))

    @spec.setter
    def spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f55e1d1409b9b7bd72bc04e007bbd2999b8e075402d921b693f0d2cc9e0a6b41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spec", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosAccelerator.IpSetConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"access_mode": "accessMode"},
    )
    class IpSetConfigProperty:
        def __init__(
            self,
            *,
            access_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param access_mode: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5a5bd74a32dcbfb19d9e43ace6d0403e263bf586e932b5f4273cfb5257178cb4)
                check_type(argname="argument access_mode", value=access_mode, expected_type=type_hints["access_mode"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if access_mode is not None:
                self._values["access_mode"] = access_mode

        @builtins.property
        def access_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: accessMode: Accelerated regional access mode.
            '''
            result = self._values.get("access_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IpSetConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosAcceleratorProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_name": "acceleratorName",
        "auto_pay": "autoPay",
        "auto_use_coupon": "autoUseCoupon",
        "bandwidth_billing_type": "bandwidthBillingType",
        "duration": "duration",
        "enable_cross_border": "enableCrossBorder",
        "instance_charge_type": "instanceChargeType",
        "ip_set_config": "ipSetConfig",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "spec": "spec",
    },
)
class RosAcceleratorProps:
    def __init__(
        self,
        *,
        accelerator_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_cross_border: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_set_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccelerator.IpSetConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccelerator``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-accelerator

        :param accelerator_name: 
        :param auto_pay: 
        :param auto_use_coupon: 
        :param bandwidth_billing_type: 
        :param duration: 
        :param enable_cross_border: 
        :param instance_charge_type: 
        :param ip_set_config: 
        :param pricing_cycle: 
        :param resource_group_id: 
        :param spec: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9f9ab91d831078b0de5da8ccd6c93def3fccea06bd3684c63a1a3c821f6c8bd)
            check_type(argname="argument accelerator_name", value=accelerator_name, expected_type=type_hints["accelerator_name"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_use_coupon", value=auto_use_coupon, expected_type=type_hints["auto_use_coupon"])
            check_type(argname="argument bandwidth_billing_type", value=bandwidth_billing_type, expected_type=type_hints["bandwidth_billing_type"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument enable_cross_border", value=enable_cross_border, expected_type=type_hints["enable_cross_border"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument ip_set_config", value=ip_set_config, expected_type=type_hints["ip_set_config"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if accelerator_name is not None:
            self._values["accelerator_name"] = accelerator_name
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_use_coupon is not None:
            self._values["auto_use_coupon"] = auto_use_coupon
        if bandwidth_billing_type is not None:
            self._values["bandwidth_billing_type"] = bandwidth_billing_type
        if duration is not None:
            self._values["duration"] = duration
        if enable_cross_border is not None:
            self._values["enable_cross_border"] = enable_cross_border
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if ip_set_config is not None:
            self._values["ip_set_config"] = ip_set_config
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if spec is not None:
            self._values["spec"] = spec

    @builtins.property
    def accelerator_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: acceleratorName: The Name of the GA instance
        '''
        result = self._values.get("accelerator_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to pay automatically.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoUseCoupon: The AutoUseCoupon of the GA instance.
        '''
        result = self._values.get("auto_use_coupon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthBillingType: Bandwidth billing method.
        '''
        result = self._values.get("bandwidth_billing_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: duration: Length of purchase.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_cross_border(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
        '''
        result = self._values.get("enable_cross_border")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_set_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccelerator.IpSetConfigProperty]]:
        '''
        :Property: ipSetConfig: Accelerate zone configuration.
        '''
        result = self._values.get("ip_set_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccelerator.IpSetConfigProperty]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle: Billing cycle.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ResourceGroup Id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spec: Specifications of Global Acceleration Instances.
        '''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAcceleratorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAcl(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosAcl",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::Acl``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Acl`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAclProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e450508268547951d46dbe25dc65325ce64267dd3f90b36ed82ebbf865878efa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b9e9746fa8df6aeda18505667a6e9e98192fbd520f164dfb7ac2086c6ae72f4b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclEntries")
    def attr_acl_entries(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclEntries: The entries of the ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclId: The  ID of the ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAclName")
    def attr_acl_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclName: The name of the ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclName"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressIPVersion: The IP version of the ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addressIpVersion: The IP version of the ACL.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63d3b76fa76249c74f6511ef3788fe9dbdfbaa6e428fa52edf65d0a1e40b5a6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d44b233fd648d9c271b2b0a384d47b735a6066c4614452c27be61564933ab27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="aclEntries")
    def acl_entries(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAcl.AclEntriesProperty"]]]]:
        '''
        :Property: aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL. You can add up to 20 entries.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAcl.AclEntriesProperty"]]]], jsii.get(self, "aclEntries"))

    @acl_entries.setter
    def acl_entries(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAcl.AclEntriesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a168d04adf46d09bc36794b77edaa5a3c0808e1d111c3d5a9462cc6160dcd53a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclEntries", value)

    @builtins.property
    @jsii.member(jsii_name="aclName")
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aclName: The name of the ACL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aclName"))

    @acl_name.setter
    def acl_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ab5c75824d48ac5803594e3144f421298782d5526e9ff6ea7672973c6d431f9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__44fe847cd41dda33db4d583af11592522ae4dde8308a9393a42314608ae14d58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosAcl.TagsProperty"]]:
        '''
        :Property: tags: Tags of the ACL.
        '''
        return typing.cast(typing.Optional[typing.List["RosAcl.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(self, value: typing.Optional[typing.List["RosAcl.TagsProperty"]]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab99b2e1a89400872e00fb4908bf040b0c848d433ccd45da1edd1957f3211ee2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosAcl.AclEntriesProperty",
        jsii_struct_bases=[],
        name_mapping={"entry": "entry", "entry_description": "entryDescription"},
    )
    class AclEntriesProperty:
        def __init__(
            self,
            *,
            entry: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            entry_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param entry: 
            :param entry_description: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__345b4b9b622413dbacb270716a70741e52d9c7dc6eb0ccdbc1714ce7376a2e95)
                check_type(argname="argument entry", value=entry, expected_type=type_hints["entry"])
                check_type(argname="argument entry_description", value=entry_description, expected_type=type_hints["entry_description"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if entry is not None:
                self._values["entry"] = entry
            if entry_description is not None:
                self._values["entry_description"] = entry_description

        @builtins.property
        def entry(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: entry: The IP addresses (192.168.XX.XX) or CIDR blocks (10.0.XX.XX/24) that you want to add to the ACL.
            '''
            result = self._values.get("entry")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def entry_description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: entryDescription: The description of the entry that you want to add to the AC,The description must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
            '''
            result = self._values.get("entry_description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AclEntriesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosAcl.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e143a7d8634f8ec0b42a065b5106a28d555d3dedc5ab89bd9e24d9b81e36dc9c)
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
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosAclProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_ip_version": "addressIpVersion",
        "acl_entries": "aclEntries",
        "acl_name": "aclName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosAclProps:
    def __init__(
        self,
        *,
        address_ip_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_entries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAcl.AclEntriesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosAcl.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosAcl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl

        :param address_ip_version: 
        :param acl_entries: 
        :param acl_name: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a4c1664f4a0e9ef9bc496e8f693e9b2eac4a90307a2c25609343e6c8e6788b5)
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument acl_entries", value=acl_entries, expected_type=type_hints["acl_entries"])
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "address_ip_version": address_ip_version,
        }
        if acl_entries is not None:
            self._values["acl_entries"] = acl_entries
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addressIpVersion: The IP version of the ACL.
        '''
        result = self._values.get("address_ip_version")
        assert result is not None, "Required property 'address_ip_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_entries(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAcl.AclEntriesProperty]]]]:
        '''
        :Property: aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL. You can add up to 20 entries.
        '''
        result = self._values.get("acl_entries")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAcl.AclEntriesProperty]]]], result)

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aclName: The name of the ACL.
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

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosAcl.TagsProperty]]:
        '''
        :Property: tags: Tags of the ACL.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosAcl.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAclsListenerAssociation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosAclsListenerAssociation",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::AclsListenerAssociation``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AclsListenerAssociation`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAclsListenerAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf14bdd7898df274e5049675c713a7edde9f8408ba6765ebf048c50c61bf364e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f72e58ed6849650f1d869e9b24f90a6db78940fa5652ac841dae831e5ed6350a)
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
        :Attribute: AclIds: The IDs of the ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclIds"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerId: The ID of the listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="aclIds")
    def acl_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: aclIds: The ID of the ACL. You can associate up to two ACL IDs.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "aclIds"))

    @acl_ids.setter
    def acl_ids(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7afb4cafce7d05f7ad425356ced12fe062af02f2b531e0c3375f1cab9161dbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclIds", value)

    @builtins.property
    @jsii.member(jsii_name="aclType")
    def acl_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclType: The type of ACL. Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
        black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclType"))

    @acl_type.setter
    def acl_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54ed7f483391ebb01a89a87f8d3aa2586e6461d4df4cc5d776b084140da3081d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8d12ef35f909304da5e6b440f8a6c3d3765f716e7435f68a77cc5559ed0bf2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerId")
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerId"))

    @listener_id.setter
    def listener_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3769d7b9fee642aef5c6e78f2afe4cb9acfd2f1c4de8360b34504a584da13d0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosAclsListenerAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_ids": "aclIds",
        "acl_type": "aclType",
        "listener_id": "listenerId",
    },
)
class RosAclsListenerAssociationProps:
    def __init__(
        self,
        *,
        acl_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        acl_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosAclsListenerAssociation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation

        :param acl_ids: 
        :param acl_type: 
        :param listener_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e572a292be2447694b2b6ce513ac65597c3590ba4dd97a70a76aec41a21a5a30)
            check_type(argname="argument acl_ids", value=acl_ids, expected_type=type_hints["acl_ids"])
            check_type(argname="argument acl_type", value=acl_type, expected_type=type_hints["acl_type"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_ids": acl_ids,
            "acl_type": acl_type,
            "listener_id": listener_id,
        }

    @builtins.property
    def acl_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: aclIds: The ID of the ACL. You can associate up to two ACL IDs.
        '''
        result = self._values.get("acl_ids")
        assert result is not None, "Required property 'acl_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def acl_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclType: The type of ACL. Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
        black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
        '''
        result = self._values.get("acl_type")
        assert result is not None, "Required property 'acl_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener.
        '''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAclsListenerAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplicationMonitor(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosApplicationMonitor",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::ApplicationMonitor``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ApplicationMonitor`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApplicationMonitorProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f209869d64f777ecb4e64aa08344aca584b2245187217b6f509c0b15eccc20ef)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ef8331605130be49309712693fe7bea03f013f356077d654e05b3e5fa62cafa2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: The ID of the origin probing task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae98e66e3467a0c1d9c1619671a6d849de3e4112d2fb79eecf49103a9bb5ed33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="address")
    def address(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: address: The URL or IP address that you want to probe.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "address"))

    @address.setter
    def address(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f329c3e87c3d3fbdb96ba2a9bb5e6a19d1ad3cb0db7ceb5007b46ee28d50045)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "address", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f2f721a75f0e5cb1b71147372db744a7dcaa423d426691670b3265836033625)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerId")
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener on which you want to perform the origin probing task.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerId"))

    @listener_id.setter
    def listener_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83d4410e6ebe4b4a1c05440c4211488e61f9f8a36b1c1012fa77bbd0e695e29f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerId", value)

    @builtins.property
    @jsii.member(jsii_name="taskName")
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: taskName: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "taskName"))

    @task_name.setter
    def task_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14eb00238f5b1c3fa67a7579d31d2d8cfc5d72e67246d738665cb940266a7c9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskName", value)

    @builtins.property
    @jsii.member(jsii_name="detectEnable")
    def detect_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: detectEnable: Specifies whether to enable the automatic diagnostics feature.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "detectEnable"))

    @detect_enable.setter
    def detect_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b51e61c9a423d7f477b1eda4ce5b2e1c8b09914f97c159ffd530330dac0fa445)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detectEnable", value)

    @builtins.property
    @jsii.member(jsii_name="detectThreshold")
    def detect_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "detectThreshold"))

    @detect_threshold.setter
    def detect_threshold(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a052544db2a9a7b774120552a24fc3cccabf42a6e0ace3bdeb58f615085c39c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detectThreshold", value)

    @builtins.property
    @jsii.member(jsii_name="detectTimes")
    def detect_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. Valid values: 1 to 20. Default value: 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "detectTimes"))

    @detect_times.setter
    def detect_times(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9428148bc151848947c3afc2ecef3b027aa21646049eb7a275af64c48740e82f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detectTimes", value)

    @builtins.property
    @jsii.member(jsii_name="optionsJson")
    def options_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: optionsJson: The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "optionsJson"))

    @options_json.setter
    def options_json(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df05d9859e7da013811370b954046da240a147315707718ed5ce384a84a8b39b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "optionsJson", value)

    @builtins.property
    @jsii.member(jsii_name="silenceTime")
    def silence_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: silenceTime: The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "silenceTime"))

    @silence_time.setter
    def silence_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2ef52035849fe190cef610ebd34c5c030277fa85c9f871b6db47c5689c8d0b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "silenceTime", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosApplicationMonitorProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "address": "address",
        "listener_id": "listenerId",
        "task_name": "taskName",
        "detect_enable": "detectEnable",
        "detect_threshold": "detectThreshold",
        "detect_times": "detectTimes",
        "options_json": "optionsJson",
        "silence_time": "silenceTime",
    },
)
class RosApplicationMonitorProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        detect_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        detect_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        detect_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApplicationMonitor``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor

        :param accelerator_id: 
        :param address: 
        :param listener_id: 
        :param task_name: 
        :param detect_enable: 
        :param detect_threshold: 
        :param detect_times: 
        :param options_json: 
        :param silence_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5914233fb623131666049b6a2fa594ca18f4786102417a7741a3ff4b8eda7c67)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument address", value=address, expected_type=type_hints["address"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
            check_type(argname="argument task_name", value=task_name, expected_type=type_hints["task_name"])
            check_type(argname="argument detect_enable", value=detect_enable, expected_type=type_hints["detect_enable"])
            check_type(argname="argument detect_threshold", value=detect_threshold, expected_type=type_hints["detect_threshold"])
            check_type(argname="argument detect_times", value=detect_times, expected_type=type_hints["detect_times"])
            check_type(argname="argument options_json", value=options_json, expected_type=type_hints["options_json"])
            check_type(argname="argument silence_time", value=silence_time, expected_type=type_hints["silence_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "address": address,
            "listener_id": listener_id,
            "task_name": task_name,
        }
        if detect_enable is not None:
            self._values["detect_enable"] = detect_enable
        if detect_threshold is not None:
            self._values["detect_threshold"] = detect_threshold
        if detect_times is not None:
            self._values["detect_times"] = detect_times
        if options_json is not None:
            self._values["options_json"] = options_json
        if silence_time is not None:
            self._values["silence_time"] = silence_time

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def address(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: address: The URL or IP address that you want to probe.
        '''
        result = self._values.get("address")
        assert result is not None, "Required property 'address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener on which you want to perform the origin probing task.
        '''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: taskName: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("task_name")
        assert result is not None, "Required property 'task_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def detect_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: detectEnable: Specifies whether to enable the automatic diagnostics feature.
        '''
        result = self._values.get("detect_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def detect_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
        '''
        result = self._values.get("detect_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def detect_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. Valid values: 1 to 20. Default value: 1.
        '''
        result = self._values.get("detect_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: optionsJson: The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
        '''
        result = self._values.get("options_json")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def silence_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: silenceTime: The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
        '''
        result = self._values.get("silence_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplicationMonitorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBandwidthPackage(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBandwidthPackage",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::BandwidthPackage``, which is used to create a bandwidth plan.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BandwidthPackage`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
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
            type_hints = typing.get_type_hints(_typecheckingstub__1002224b286b700055244d7c20e2932d0c3555f331426ee4df81721f58c0a099)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5a915e73d5714c3d21ead9567516d986adab1eb29d64d5ea7cae65c0d28eb133)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoPay: The AutoPay of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoPay"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoUseCoupon: The AutoUseCoupon  of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoUseCoupon"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth provided by the bandwidth plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthPackageId: The Resource ID of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageName")
    def attr_bandwidth_package_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthPackageName: The Resource name of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageName"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthType")
    def attr_bandwidth_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthType: the bandwidth BandwidthType of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthType"))

    @builtins.property
    @jsii.member(jsii_name="attrBillingType")
    def attr_billing_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BillingType: The BillingType of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBillingType"))

    @builtins.property
    @jsii.member(jsii_name="attrCbnGeographicRegionIdA")
    def attr_cbn_geographic_region_id_a(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdA"))

    @builtins.property
    @jsii.member(jsii_name="attrCbnGeographicRegionIdB")
    def attr_cbn_geographic_region_id_b(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdB"))

    @builtins.property
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ChargeType: The ChargeType of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The Payment Type of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRatio")
    def attr_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ratio: The Ratio of the bandwidth
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Type: The type of the bandwidth plan
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth provided by the bandwidth plan.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ddb04584eeae08f6bf2efbff6efa22eeb5a8ea3fbe3dd0f56be0ee125cb0605)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bedc42fb07b11fce2bdf21088b072e8aa5ea60ca7e7a0320ca2864774751766c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: The type of the bandwidth plan
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9bae102f2a4921b5b5164b50ad3bdb284ccc7e920d8e1442a2b3692919878e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Specifies whether to enable automatic payment.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5bba2867277913cf747faf52e8eacecacf8464f83f210fccf98f42973b29040)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoUseCoupon")
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoUseCoupon"))

    @auto_use_coupon.setter
    def auto_use_coupon(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1463122f9a0ad1d9743b83d70631fc3cf13b6fb0199f03f37e3e45a91bf219a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoUseCoupon", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidthType")
    def bandwidth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthType: the bandwidth BandwidthType of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidthType"))

    @bandwidth_type.setter
    def bandwidth_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7776e449d77a3947c479e6a5c430c16d96202a800e53747490840478fd40600c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthType", value)

    @builtins.property
    @jsii.member(jsii_name="billingType")
    def billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: billingType: The BillingType of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "billingType"))

    @billing_type.setter
    def billing_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49d1b36d4cd4281db91a7c6a000c537d43238e0484d4bbb52798c36968ca564f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "billingType", value)

    @builtins.property
    @jsii.member(jsii_name="cbnGeographicRegionIdA")
    def cbn_geographic_region_id_a(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cbnGeographicRegionIdA"))

    @cbn_geographic_region_id_a.setter
    def cbn_geographic_region_id_a(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__742e04ba280d1a705c56556cbd75a6fd83dff2973b90a300ed86836b1bf250aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cbnGeographicRegionIdA", value)

    @builtins.property
    @jsii.member(jsii_name="cbnGeographicRegionIdB")
    def cbn_geographic_region_id_b(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cbnGeographicRegionIdB"))

    @cbn_geographic_region_id_b.setter
    def cbn_geographic_region_id_b(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b1176e012a29440c36054bc9aef47dfac2cc5dbe417b979e0b37e86a8a6bc9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cbnGeographicRegionIdB", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: The ChargeType of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe376949fd5f4763d4d1888987c411d4af3ac09cf13c429fad1a37f4c05024e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: duration:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bac30d79f3ef313d262cc10f3873715fe22a611aad55a8eff35450bc44525b15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "duration", value)

    @builtins.property
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72f7ee36c643526613e936eb19c9e6628c2c58b792b3bee243a7e239b3c1a90c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pricingCycle", value)

    @builtins.property
    @jsii.member(jsii_name="ratio")
    def ratio(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ratio: The Ratio of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ratio"))

    @ratio.setter
    def ratio(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc3d202dc82354b05552c1fbfb367da8a5e6bb2fa660e6d8534fbfb6681ac98e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ratio", value)


class RosBandwidthPackageAcceleratorAddition(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBandwidthPackageAcceleratorAddition",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``, which is used to bind a bandwidth plan to a global acceleration instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BandwidthPackageAcceleratorAddition`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBandwidthPackageAcceleratorAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb5a7529932daea0b2b19c1cac929ac8b0f54d2ca0979c53542d1c75424c485f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b54df1cb1fdac3b67d3ce04cc81a47d81d2fd42848a55966b1ccd5f76800fc92)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AcceleratorId: The ID of the Global Accelerator instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BandwidthPackageId: The ID of the bandwidth package which is associated
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
        plan.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36b3069fec4bec7b8e9ed4b955a5ad816e5401bdeb951b3d889ebd919be0e457)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidthPackageId: The ID of the bandwidth package to associate.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bandwidthPackageId"))

    @bandwidth_package_id.setter
    def bandwidth_package_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbef10fd7bbe6ab68454c326976d3651bf248f9963491694324fe9c0041abf88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthPackageId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe949d1e17b7e4f359baaf168e4281f6246e603657f2fcf29f3468ea9f288148)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosBandwidthPackageAcceleratorAdditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "bandwidth_package_id": "bandwidthPackageId",
    },
)
class RosBandwidthPackageAcceleratorAdditionProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosBandwidthPackageAcceleratorAddition``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition

        :param accelerator_id: 
        :param bandwidth_package_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7c6b7967b4dc260e0743ca76942d670f443832f2af4b2a78e29afc17984cc18)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "bandwidth_package_id": bandwidth_package_id,
        }

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
        plan.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidthPackageId: The ID of the bandwidth package to associate.
        '''
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBandwidthPackageAcceleratorAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosBandwidthPackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "type": "type",
        "auto_pay": "autoPay",
        "auto_use_coupon": "autoUseCoupon",
        "bandwidth_type": "bandwidthType",
        "billing_type": "billingType",
        "cbn_geographic_region_id_a": "cbnGeographicRegionIdA",
        "cbn_geographic_region_id_b": "cbnGeographicRegionIdB",
        "charge_type": "chargeType",
        "duration": "duration",
        "pricing_cycle": "pricingCycle",
        "ratio": "ratio",
    },
)
class RosBandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cbn_geographic_region_id_a: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cbn_geographic_region_id_b: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ratio: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosBandwidthPackage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage

        :param bandwidth: 
        :param type: 
        :param auto_pay: 
        :param auto_use_coupon: 
        :param bandwidth_type: 
        :param billing_type: 
        :param cbn_geographic_region_id_a: 
        :param cbn_geographic_region_id_b: 
        :param charge_type: 
        :param duration: 
        :param pricing_cycle: 
        :param ratio: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__215cb707af454baac11cf0925f8506f9d15a57aae3bc9792d2c5ccf5b891e3cf)
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_use_coupon", value=auto_use_coupon, expected_type=type_hints["auto_use_coupon"])
            check_type(argname="argument bandwidth_type", value=bandwidth_type, expected_type=type_hints["bandwidth_type"])
            check_type(argname="argument billing_type", value=billing_type, expected_type=type_hints["billing_type"])
            check_type(argname="argument cbn_geographic_region_id_a", value=cbn_geographic_region_id_a, expected_type=type_hints["cbn_geographic_region_id_a"])
            check_type(argname="argument cbn_geographic_region_id_b", value=cbn_geographic_region_id_b, expected_type=type_hints["cbn_geographic_region_id_b"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument ratio", value=ratio, expected_type=type_hints["ratio"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth": bandwidth,
            "type": type,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_use_coupon is not None:
            self._values["auto_use_coupon"] = auto_use_coupon
        if bandwidth_type is not None:
            self._values["bandwidth_type"] = bandwidth_type
        if billing_type is not None:
            self._values["billing_type"] = billing_type
        if cbn_geographic_region_id_a is not None:
            self._values["cbn_geographic_region_id_a"] = cbn_geographic_region_id_a
        if cbn_geographic_region_id_b is not None:
            self._values["cbn_geographic_region_id_b"] = cbn_geographic_region_id_b
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if duration is not None:
            self._values["duration"] = duration
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if ratio is not None:
            self._values["ratio"] = ratio

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth provided by the bandwidth plan.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: type: The type of the bandwidth plan
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Specifies whether to enable automatic payment.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        '''
        result = self._values.get("auto_use_coupon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthType: the bandwidth BandwidthType of the bandwidth
        '''
        result = self._values.get("bandwidth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: billingType: The BillingType of the bandwidth
        '''
        result = self._values.get("billing_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cbn_geographic_region_id_a(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        '''
        result = self._values.get("cbn_geographic_region_id_a")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cbn_geographic_region_id_b(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        '''
        result = self._values.get("cbn_geographic_region_id_b")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: The ChargeType of the bandwidth
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: duration:
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pricingCycle:
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ratio(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ratio: The Ratio of the bandwidth
        '''
        result = self._values.get("ratio")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBasicAccelerateIp(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBasicAccelerateIp",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::BasicAccelerateIp``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BasicAccelerateIp`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBasicAccelerateIpProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__012bfc56cf4c00ac58543191eaf0804611034d01956ed365c69549ea963b5b3c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5e95ab74807f0f90e22728f2ab3beb2851e47c0b2c734020eb7d0d7df53dc58b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccelerateIpId")
    def attr_accelerate_ip_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccelerateIpId: The ID of the accelerated IP address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccelerateIpId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__095084e6c2234eb980fba93c2307ff96702c57d057e5292df173ef920c4702a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5a682c2b233c1304a41552e32fef65003bb81ae0d9b41602be7f67a3ce22d83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ipSetId")
    def ip_set_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ipSetId: The ID of the acceleration region.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ipSetId"))

    @ip_set_id.setter
    def ip_set_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc8856845687cb058a914738fbb40658f7f80a85ba20961975d1ba729b53eb79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipSetId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosBasicAccelerateIpProps",
    jsii_struct_bases=[],
    name_mapping={"accelerator_id": "acceleratorId", "ip_set_id": "ipSetId"},
)
class RosBasicAccelerateIpProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ip_set_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosBasicAccelerateIp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip

        :param accelerator_id: 
        :param ip_set_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28377cc7d375ea94b1a1fdbb1979c245d381b1a42327ac199628dbe9661e6b2c)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument ip_set_id", value=ip_set_id, expected_type=type_hints["ip_set_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "ip_set_id": ip_set_id,
        }

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ip_set_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ipSetId: The ID of the acceleration region.
        '''
        result = self._values.get("ip_set_id")
        assert result is not None, "Required property 'ip_set_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBasicAccelerateIpProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBasicAccelerator(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBasicAccelerator",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::BasicAccelerator``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BasicAccelerator`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBasicAcceleratorProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6835809cef1c64bcb56f9fb098dd8cd1385ab5cc11aa0f5ea60d2405fe0e5dcd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c2b5530f19a0eb5d7f808007efa15e93cca56836d86718e0f4d5b4da6967dbe9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AcceleratorId: The ID of the accelerated IP address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcceleratorId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8032562d9f7f03dfa8a0ef258663be2527865b93dc833e660352dfe8642f7779)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Specifies whether to enable automatic payment. Valid values:
        false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
        true: enables automatic payment. Payments are automatically completed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__037de779c25bedd6c212dbaf3939c4f3fb28641af346efebc0962956e5eaa278)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal for the basic GA instance. Valid values:
        true: enables auto-renewal for the basic GA instance.
        false: disables auto-renewal for the basic GA instance. This is the default value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b05b74626ec812be688ee697041d017d401570457ea2a932eba578e9c5c4adc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewDuration")
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewDuration: The auto-renewal duration. Unit: months.Valid values: 1 to 12. Default value: 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewDuration"))

    @auto_renew_duration.setter
    def auto_renew_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d6dc4292103fb658d16fbdf64460bd9d634605f319a9625c70bc8b12b03c299)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewDuration", value)

    @builtins.property
    @jsii.member(jsii_name="autoUseCoupon")
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoUseCoupon: Specifies whether to automatically apply coupons to your bills. Valid values:
        true: automatically applies coupons to your bills.
        false: does not automatically apply coupons to your bills. This is the default value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoUseCoupon"))

    @auto_use_coupon.setter
    def auto_use_coupon(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae866d46b2f9098aca8f7cc4ab73bf22dde2ac63236f4cdc92f061ef45eee0e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoUseCoupon", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidthBillingType")
    def bandwidth_billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        bandwidthBillingType: The bandwidth billing method. Valid values:
        BandwidthPackage: billed based on bandwidth plans.
        CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
        CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidthBillingType"))

    @bandwidth_billing_type.setter
    def bandwidth_billing_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e128b3cad5e190113fef92a0a68237a64cddb1dcf3cbf47d531ddf884d691990)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthBillingType", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method. Valid values:
        PREPAY (default)POSTPAY
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__415c2e4481c50b46ef786042dabe823ee4cc3b0ea72ccd4ee9177162c643d765)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        duration: The subscription duration of the GA instance.
        If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
        If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__209d21c1b09528b409913a977ba88b4d022d0dde01508580b9086f2dc0c2db35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "duration", value)

    @builtins.property
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pricingCycle: The billing cycle. Valid values:
        Month
        Year
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6b9b2b0c1d0c7077b540e4be7bc180dd90104c3bd5d47ba1884136e77f2e201)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pricingCycle", value)

    @builtins.property
    @jsii.member(jsii_name="promotionOptionNo")
    def promotion_option_no(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: promotionOptionNo: The code of the coupon.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "promotionOptionNo"))

    @promotion_option_no.setter
    def promotion_option_no(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d21634a3c29399a924be4ecc63426b28dc76e57baf9b65a33c2a5bc8aea16566)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "promotionOptionNo", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9ae19d3de491e1c855224cf0e5ac02fac7a8f197c17fbe12b0b1f339f401592)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosBasicAccelerator.TagsProperty"]]:
        '''
        :Property: tags: The tags of the basic GA instance.
        '''
        return typing.cast(typing.Optional[typing.List["RosBasicAccelerator.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosBasicAccelerator.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31a79c769954e8f2c6ee105baa14b131d00e6629b74114c7d852a8e719ac9e98)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosBasicAccelerator.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__52680d0a62c4d0e44273e0b4cb45b6e535fabab251379bf387e2b7d9699e9075)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The tag key. The tag key cannot be an empty string.The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with aliyun or acs:.You can specify up to 20 tag keys.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The tag value. The tag value cannot be an empty string.The tag value can be up to 128 characters in length and cannot contain http:// or https://. It cannot start with acs: or aliyun.You can specify up to 20 tag values.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosBasicAcceleratorIpEndpointRelation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBasicAcceleratorIpEndpointRelation",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::BasicAcceleratorIpEndpointRelation``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BasicAcceleratorIpEndpointRelation`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBasicAcceleratorIpEndpointRelationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5706929d11aca401e3f4127edf6e86d776840d4264edf87c55a99b9a5b39389d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__69e71e867928c9276a1389b606a74c6ccbca311a26f749e297b67d9c505f0d0b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccelerateIpId")
    def attr_accelerate_ip_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccelerateIpId: The ID of the accelerated IP address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccelerateIpId"))

    @builtins.property
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AcceleratorId: The ID of the basic GA instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndpointId: The ID of the endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accelerateIpId")
    def accelerate_ip_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accelerateIpId: The ID of the accelerated IP address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accelerateIpId"))

    @accelerate_ip_id.setter
    def accelerate_ip_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9eb4085a667b861259c8e993f90f93da1c83aaa64ce28a906d9fefa8ad5b774c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accelerateIpId", value)

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d51b1d6c24468d6ead021a996ce3cbff6c3fdc95c843d6558bbd103ec7760ba0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b8d8544c14a7574507bd556e977918306a486060314e17d5f8efba377ddc1c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endpointId")
    def endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointId: The ID of the endpoint.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endpointId"))

    @endpoint_id.setter
    def endpoint_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03e8a47ee8f0343d79e48cef2135cadc3a81937f9ce7939ac22a88d41f067a7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosBasicAcceleratorIpEndpointRelationProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerate_ip_id": "accelerateIpId",
        "accelerator_id": "acceleratorId",
        "endpoint_id": "endpointId",
    },
)
class RosBasicAcceleratorIpEndpointRelationProps:
    def __init__(
        self,
        *,
        accelerate_ip_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosBasicAcceleratorIpEndpointRelation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation

        :param accelerate_ip_id: 
        :param accelerator_id: 
        :param endpoint_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__876af8feecaf26d56088b2ffdf3480eb61e63151bbb588d90befce87506fac01)
            check_type(argname="argument accelerate_ip_id", value=accelerate_ip_id, expected_type=type_hints["accelerate_ip_id"])
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument endpoint_id", value=endpoint_id, expected_type=type_hints["endpoint_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerate_ip_id": accelerate_ip_id,
            "accelerator_id": accelerator_id,
            "endpoint_id": endpoint_id,
        }

    @builtins.property
    def accelerate_ip_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accelerateIpId: The ID of the accelerated IP address.
        '''
        result = self._values.get("accelerate_ip_id")
        assert result is not None, "Required property 'accelerate_ip_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointId: The ID of the endpoint.
        '''
        result = self._values.get("endpoint_id")
        assert result is not None, "Required property 'endpoint_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBasicAcceleratorIpEndpointRelationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosBasicAcceleratorProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "auto_renew_duration": "autoRenewDuration",
        "auto_use_coupon": "autoUseCoupon",
        "bandwidth_billing_type": "bandwidthBillingType",
        "charge_type": "chargeType",
        "duration": "duration",
        "pricing_cycle": "pricingCycle",
        "promotion_option_no": "promotionOptionNo",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosBasicAcceleratorProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        promotion_option_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosBasicAccelerator.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosBasicAccelerator``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator

        :param auto_pay: 
        :param auto_renew: 
        :param auto_renew_duration: 
        :param auto_use_coupon: 
        :param bandwidth_billing_type: 
        :param charge_type: 
        :param duration: 
        :param pricing_cycle: 
        :param promotion_option_no: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c6fa538b121d9456bb126450d9f6473c8dbb459500b0413e63feb22013f2e71)
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_duration", value=auto_renew_duration, expected_type=type_hints["auto_renew_duration"])
            check_type(argname="argument auto_use_coupon", value=auto_use_coupon, expected_type=type_hints["auto_use_coupon"])
            check_type(argname="argument bandwidth_billing_type", value=bandwidth_billing_type, expected_type=type_hints["bandwidth_billing_type"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument promotion_option_no", value=promotion_option_no, expected_type=type_hints["promotion_option_no"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_duration is not None:
            self._values["auto_renew_duration"] = auto_renew_duration
        if auto_use_coupon is not None:
            self._values["auto_use_coupon"] = auto_use_coupon
        if bandwidth_billing_type is not None:
            self._values["bandwidth_billing_type"] = bandwidth_billing_type
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if duration is not None:
            self._values["duration"] = duration
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if promotion_option_no is not None:
            self._values["promotion_option_no"] = promotion_option_no
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Specifies whether to enable automatic payment. Valid values:
        false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
        true: enables automatic payment. Payments are automatically completed.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal for the basic GA instance. Valid values:
        true: enables auto-renewal for the basic GA instance.
        false: disables auto-renewal for the basic GA instance. This is the default value.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewDuration: The auto-renewal duration. Unit: months.Valid values: 1 to 12. Default value: 1.
        '''
        result = self._values.get("auto_renew_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoUseCoupon: Specifies whether to automatically apply coupons to your bills. Valid values:
        true: automatically applies coupons to your bills.
        false: does not automatically apply coupons to your bills. This is the default value.
        '''
        result = self._values.get("auto_use_coupon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        bandwidthBillingType: The bandwidth billing method. Valid values:
        BandwidthPackage: billed based on bandwidth plans.
        CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
        CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
        '''
        result = self._values.get("bandwidth_billing_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method. Valid values:
        PREPAY (default)POSTPAY
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        duration: The subscription duration of the GA instance.
        If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
        If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pricingCycle: The billing cycle. Valid values:
        Month
        Year
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def promotion_option_no(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: promotionOptionNo: The code of the coupon.
        '''
        result = self._values.get("promotion_option_no")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosBasicAccelerator.TagsProperty]]:
        '''
        :Property: tags: The tags of the basic GA instance.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosBasicAccelerator.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBasicAcceleratorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBasicEndpoint(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBasicEndpoint",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::BasicEndpoint``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BasicEndpoint`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBasicEndpointProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dce2ed7565d64fb28a5c52bc13718c136d84e9fa0a9282ef88c4ff2c9547101a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5422e67b1966f0222ea5ca65ef806fa850d16e5303517e87d8902c4d34ef9ac0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndpointId: The ID of the endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1d2be50d289729506fc1c2e4f49e9753a891d62db9cbb3b0290f858852c7bb6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbff5cedb164ffe88c990194d061ce83a428c4281ef42bebace612dc4c09da7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endpointAddress")
    def endpoint_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointAddress: The address of the endpoint.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endpointAddress"))

    @endpoint_address.setter
    def endpoint_address(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51a3fb976895652d1eccfbcd6101740dc57c42ba8ecff5bcad3b5c197c6e900f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointAddress", value)

    @builtins.property
    @jsii.member(jsii_name="endpointGroupId")
    def endpoint_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointGroupId: The ID of the endpoint group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endpointGroupId"))

    @endpoint_group_id.setter
    def endpoint_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__635ee5928db1509789163e3ca7c70e0762ce9117eb459ff258f0b7990ebc3e23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="endpointSubAddress")
    def endpoint_sub_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointSubAddress: The secondary address of the endpoint. This parameter is required if the endpoint type is ECS, ENI, or NLB.
        If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
        If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
        This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointSubAddress"))

    @endpoint_sub_address.setter
    def endpoint_sub_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cd4e4516d295641af4efa5738415c988b13d699a0b733172249037271432799)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointSubAddress", value)

    @builtins.property
    @jsii.member(jsii_name="endpointSubAddressType")
    def endpoint_sub_address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointSubAddressType: The type of the secondary address of the endpoint. Valid values:
        primary: a primary private IP address.
        secondary: a secondary private IP address.
        This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointSubAddressType"))

    @endpoint_sub_address_type.setter
    def endpoint_sub_address_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17ba22fa0b15a51f3ff4fbe19413602ae7126830e60ebf0b2b55523236b7cf88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointSubAddressType", value)

    @builtins.property
    @jsii.member(jsii_name="endpointType")
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointType: The type of the endpoint. Valid values:
        ENI: elastic network interface (ENI)
        SLB: Classic Load Balancer (CLB)
        NLB: Network Load Balancer (NLB)
        ECS: Elastic Compute Service (ECS)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointType"))

    @endpoint_type.setter
    def endpoint_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__095062e5690b0d911a0798bbc86ab7d2972e608ef1008e0e1044229c01cac3e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointType", value)

    @builtins.property
    @jsii.member(jsii_name="endpointZoneId")
    def endpoint_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointZoneId: The zone ID of the endpoint. This parameter is required only if the endpoint type is NLB.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointZoneId"))

    @endpoint_zone_id.setter
    def endpoint_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3ee641c1b767e96bfe18f72f5fd95c82e196a4d03106463c55510740b570520)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the endpoint that is associated with the basic GA instance. The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab850e0f67fc2543f5ffc04d3a5b4eb21b7df3769c066f1fd1a060c4d24cc1e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)


class RosBasicEndpointGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBasicEndpointGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::BasicEndpointGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BasicEndpointGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBasicEndpointGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1cdf18eff9eec79d285ce5c584ddc0d14bee5c43d2e5fcbcf2fb099d35d1f026)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cd34f80914d98efbefbc7dd9761935d47bf7bcfa04729f4f2d88611830ae5811)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointGroupId")
    def attr_endpoint_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndpointGroupId: The endpoint group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointGroupId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7a642a4de1eebc66d097a97d5a9440bacee965eeea11d1651387a28b6581a7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__865c9edd0a69c67d83705626e963bdf71ce457db6f5218a229dd7899b4db926c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endpointGroupRegion")
    def endpoint_group_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointGroupRegion: The ID of the region to which the endpoint group belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endpointGroupRegion"))

    @endpoint_group_region.setter
    def endpoint_group_region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7bd6bbe6e765d8e17fc1e3fecfcf049dd230feccb1fe18651d8af98450d83a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointGroupRegion", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the endpoint group. The description can be up to 200 characters in length and cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edb0176edcacfc22f445e0907e80f416ab621675e188fd4e6844c458c315ac8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="endpointAddress")
    def endpoint_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointAddress: The endpoint address.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointAddress"))

    @endpoint_address.setter
    def endpoint_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67fe8014b96b5d8c7ceae6e4143570eb0881a28690d64f4e26698fdcc8bda7ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointAddress", value)

    @builtins.property
    @jsii.member(jsii_name="endpointSubAddress")
    def endpoint_sub_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointSubAddress: The secondary address of the endpoint. You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
        When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
        If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointSubAddress"))

    @endpoint_sub_address.setter
    def endpoint_sub_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28167747214da1270febe0aadc7fce8a14ed998fd7edef310b420042621c1c86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointSubAddress", value)

    @builtins.property
    @jsii.member(jsii_name="endpointType")
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointType: The type of the endpoint. Valid values:
        ENI
        SLB
        ECS
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointType"))

    @endpoint_type.setter
    def endpoint_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93ecd6faa52ab002af5e5cea3e3b3f15faa5748ac668ca82289f7c99d81a1cd7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointType", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af54c58c4992a9ad3323806c9fdca7e312c562a6b33851dfcf7277571f9ee75c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosBasicEndpointGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "endpoint_group_region": "endpointGroupRegion",
        "description": "description",
        "endpoint_address": "endpointAddress",
        "endpoint_sub_address": "endpointSubAddress",
        "endpoint_type": "endpointType",
        "name": "name",
    },
)
class RosBasicEndpointGroupProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_group_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_sub_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosBasicEndpointGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup

        :param accelerator_id: 
        :param endpoint_group_region: 
        :param description: 
        :param endpoint_address: 
        :param endpoint_sub_address: 
        :param endpoint_type: 
        :param name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b972a998fa9473f9e56adfe825cb3c3c7e2bce3c84d4608b3c511379ed57c40)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument endpoint_group_region", value=endpoint_group_region, expected_type=type_hints["endpoint_group_region"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument endpoint_address", value=endpoint_address, expected_type=type_hints["endpoint_address"])
            check_type(argname="argument endpoint_sub_address", value=endpoint_sub_address, expected_type=type_hints["endpoint_sub_address"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "endpoint_group_region": endpoint_group_region,
        }
        if description is not None:
            self._values["description"] = description
        if endpoint_address is not None:
            self._values["endpoint_address"] = endpoint_address
        if endpoint_sub_address is not None:
            self._values["endpoint_sub_address"] = endpoint_sub_address
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_group_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointGroupRegion: The ID of the region to which the endpoint group belongs.
        '''
        result = self._values.get("endpoint_group_region")
        assert result is not None, "Required property 'endpoint_group_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the endpoint group. The description can be up to 200 characters in length and cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointAddress: The endpoint address.
        '''
        result = self._values.get("endpoint_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_sub_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointSubAddress: The secondary address of the endpoint. You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
        When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
        If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
        '''
        result = self._values.get("endpoint_sub_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointType: The type of the endpoint. Valid values:
        ENI
        SLB
        ECS
        '''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBasicEndpointGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosBasicEndpointProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "endpoint_address": "endpointAddress",
        "endpoint_group_id": "endpointGroupId",
        "endpoint_sub_address": "endpointSubAddress",
        "endpoint_sub_address_type": "endpointSubAddressType",
        "endpoint_type": "endpointType",
        "endpoint_zone_id": "endpointZoneId",
        "name": "name",
    },
)
class RosBasicEndpointProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_sub_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_sub_address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosBasicEndpoint``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint

        :param accelerator_id: 
        :param endpoint_address: 
        :param endpoint_group_id: 
        :param endpoint_sub_address: 
        :param endpoint_sub_address_type: 
        :param endpoint_type: 
        :param endpoint_zone_id: 
        :param name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cae03970969fa502a8e54263f484c2884b077359c16d0f11de1d4de429ee81b8)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument endpoint_address", value=endpoint_address, expected_type=type_hints["endpoint_address"])
            check_type(argname="argument endpoint_group_id", value=endpoint_group_id, expected_type=type_hints["endpoint_group_id"])
            check_type(argname="argument endpoint_sub_address", value=endpoint_sub_address, expected_type=type_hints["endpoint_sub_address"])
            check_type(argname="argument endpoint_sub_address_type", value=endpoint_sub_address_type, expected_type=type_hints["endpoint_sub_address_type"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument endpoint_zone_id", value=endpoint_zone_id, expected_type=type_hints["endpoint_zone_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "endpoint_address": endpoint_address,
            "endpoint_group_id": endpoint_group_id,
        }
        if endpoint_sub_address is not None:
            self._values["endpoint_sub_address"] = endpoint_sub_address
        if endpoint_sub_address_type is not None:
            self._values["endpoint_sub_address_type"] = endpoint_sub_address_type
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if endpoint_zone_id is not None:
            self._values["endpoint_zone_id"] = endpoint_zone_id
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointAddress: The address of the endpoint.
        '''
        result = self._values.get("endpoint_address")
        assert result is not None, "Required property 'endpoint_address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointGroupId: The ID of the endpoint group.
        '''
        result = self._values.get("endpoint_group_id")
        assert result is not None, "Required property 'endpoint_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_sub_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointSubAddress: The secondary address of the endpoint. This parameter is required if the endpoint type is ECS, ENI, or NLB.
        If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
        If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
        This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
        '''
        result = self._values.get("endpoint_sub_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_sub_address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointSubAddressType: The type of the secondary address of the endpoint. Valid values:
        primary: a primary private IP address.
        secondary: a secondary private IP address.
        This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
        '''
        result = self._values.get("endpoint_sub_address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointType: The type of the endpoint. Valid values:
        ENI: elastic network interface (ENI)
        SLB: Classic Load Balancer (CLB)
        NLB: Network Load Balancer (NLB)
        ECS: Elastic Compute Service (ECS)
        '''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointZoneId: The zone ID of the endpoint. This parameter is required only if the endpoint type is NLB.
        '''
        result = self._values.get("endpoint_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the endpoint that is associated with the basic GA instance. The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBasicEndpointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBasicIpSet(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBasicIpSet",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::BasicIpSet``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BasicIpSet`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBasicIpSetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48b11886f7c22aaf5f039df1bbebd8cdb13fff76c4c2ca76c07ecfb7e41bc9fc)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7eb12169d010ac105e0eae44f746c4c1f9e46237c667e5b3726036937c30d3b5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrIpSetId")
    def attr_ip_set_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpSetId: The ID of the acceleration region.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpSetId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f65a913ed543b37ef4dd62a25ffacdedf01c5f2a21dfc292eff8c0caafb2356a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8df12e5ed37a667270d4b66503a3738d1ac79370f79bcf23e64c7d46977073f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accelerateRegionId")
    def accelerate_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accelerateRegionId: The ID of the acceleration region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accelerateRegionId"))

    @accelerate_region_id.setter
    def accelerate_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb9b094878abb366a8d61f30f18593301edc90804f8a24cb4be316e4bc6f4a3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accelerateRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: The bandwidth that you want to allocate to the acceleration region. Unit: Mbit/s.You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d527e55866e2c73fca10c56f60162aef2c7d1a8a132f0aae7c86c0749c4ab410)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="ispType")
    def isp_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ispType: The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
        BGP (default): BGP (Multi-ISP) lines.
        BGP_PRO: BGP (Multi-ISP) Pro lines.
        Valid values if you are allowed to use single-ISP bandwidth:
        ChinaTelecom
        ChinaUnicom
        ChinaMobile
        ChinaTelecom_L2
        ChinaUnicom_L2
        ChinaMobile_L2
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ispType"))

    @isp_type.setter
    def isp_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5d39f1750c033369a590e88a3b906c6da5b945c46499ed6d2e7e9c681ffba20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ispType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosBasicIpSetProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "accelerate_region_id": "accelerateRegionId",
        "bandwidth": "bandwidth",
        "isp_type": "ispType",
    },
)
class RosBasicIpSetProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accelerate_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        isp_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosBasicIpSet``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset

        :param accelerator_id: 
        :param accelerate_region_id: 
        :param bandwidth: 
        :param isp_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be3ba85f59eebad87973a1f26eef2af747d4e001014b2aadda2fc58123686818)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument accelerate_region_id", value=accelerate_region_id, expected_type=type_hints["accelerate_region_id"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument isp_type", value=isp_type, expected_type=type_hints["isp_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
        }
        if accelerate_region_id is not None:
            self._values["accelerate_region_id"] = accelerate_region_id
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if isp_type is not None:
            self._values["isp_type"] = isp_type

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accelerate_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accelerateRegionId: The ID of the acceleration region.
        '''
        result = self._values.get("accelerate_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: The bandwidth that you want to allocate to the acceleration region. Unit: Mbit/s.You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def isp_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ispType: The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
        BGP (default): BGP (Multi-ISP) lines.
        BGP_PRO: BGP (Multi-ISP) Pro lines.
        Valid values if you are allowed to use single-ISP bandwidth:
        ChinaTelecom
        ChinaUnicom
        ChinaMobile
        ChinaTelecom_L2
        ChinaUnicom_L2
        ChinaMobile_L2
        '''
        result = self._values.get("isp_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBasicIpSetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEndpointGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::EndpointGroup``, which is used to create an endpoint group.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EndpointGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEndpointGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__357cd98dbfa6cf27efd937132ab5c4d4b3efeb4b34346fdcdcbbc8e3422c6c5a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2f9fcf9de40f72fc5a9981eb68915003e5872238a85a488a74e975f48d39b8f0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointGroupId")
    def attr_endpoint_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndpointGroupId: The ID of the endpoint group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointGroupId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e89fbc559071ab02d89916f0135b55936f8a23b216cdfdc27fa4fa01a3f97fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70780b05fb72a91cb54431db61bd21451d94691c2f7c55d6ce09da1d0d98392a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endpointConfigurations")
    def endpoint_configurations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]]:
        '''
        :Property: endpointConfigurations:
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]], jsii.get(self, "endpointConfigurations"))

    @endpoint_configurations.setter
    def endpoint_configurations(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adb994431c79c1afc83e804e0a7b69354ddc526b15ce8e9597fb674461877bbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointConfigurations", value)

    @builtins.property
    @jsii.member(jsii_name="endpointGroupRegion")
    def endpoint_group_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointGroupRegion: The region ID of the endpoint group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endpointGroupRegion"))

    @endpoint_group_region.setter
    def endpoint_group_region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6788497b77dc75e1db482e395a5888e1c32100a7ef61a3b6719a6c423de8c0f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointGroupRegion", value)

    @builtins.property
    @jsii.member(jsii_name="listenerId")
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener to be associated with the endpoint group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerId"))

    @listener_id.setter
    def listener_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0c61123a5c464d5dac4d2280195d7cf6c44a8f7ce056c1677b74ecc2baac7d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the endpoint group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__358ee99c2230c7dff2db6c4717528599db8ceb1ddc66ae4b5f2b9d9a0bc437b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="endpointGroupType")
    def endpoint_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointGroupType: The type of the endpoint group. Valid values:
        default: The endpoint group is a default endpoint group. This is the default value.
        virtual: The endpoint group is a virtual endpoint group.
        Note Only HTTP and HTTPS listeners support virtual endpoint groups.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointGroupType"))

    @endpoint_group_type.setter
    def endpoint_group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67ca4be643cef884c14fce7cd20970a2319195851a2e42938154506d85a3a0b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointGroupType", value)

    @builtins.property
    @jsii.member(jsii_name="endpointRequestProtocol")
    def endpoint_request_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointRequestProtocol: The protocol used by the backend service. Valid values:
        http: This is the default value.
        https
        Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
        For an HTTP listener, the backend service protocol must be HTTP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointRequestProtocol"))

    @endpoint_request_protocol.setter
    def endpoint_request_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aaae747e2be09c88089aaac20eaace5a2fac333d0df8447493a9de1421e09e77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointRequestProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckEnabled")
    def health_check_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckEnabled: Specifies whether to enable the health check feature.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckEnabled"))

    @health_check_enabled.setter
    def health_check_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa6eb47040b99c29a7ff2e47b057b86768ea5ef4cff3f1d23cdf8ad3e566a634)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckIntervalSeconds")
    def health_check_interval_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckIntervalSeconds"))

    @health_check_interval_seconds.setter
    def health_check_interval_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0237b4a44bccac0b5344ac13ab6e24ba642fe63655ce6beb32a9f66e238cb78b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckIntervalSeconds", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckPath")
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckPath: The path set as the destination on the targets for health checks.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckPath"))

    @health_check_path.setter
    def health_check_path(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96124dd93e20f9ee9027876a62a343cc6ba129ea839b3352298f3a8d95abeafc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckPath", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckPort")
    def health_check_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckPort: The port that is used to connect with the targets for health checks.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckPort"))

    @health_check_port.setter
    def health_check_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a07effda0460ca5ba53ac3881024c6d6064fcc0f9d3c5545764ac51fcaa201ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckPort", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckProtocol")
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
        tcp: TCP protocol
        http: HTTP protocol
        https: HTTPS protocol
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "healthCheckProtocol"))

    @health_check_protocol.setter
    def health_check_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca7cd534957ad80c6938d271f98d92f3911238902990c664abab9841de3e36a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the endpoint group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e43bce23212ca72461c253eabe780183d4eb740c8b566c89df19a2fb9b077ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="thresholdCount")
    def threshold_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.
        Valid values: 2 to 10. Default value: 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "thresholdCount"))

    @threshold_count.setter
    def threshold_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc64e3c205662338a40a8545bb9f582f266afbe909d09acb3e808140239a55d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "thresholdCount", value)

    @builtins.property
    @jsii.member(jsii_name="trafficPercentage")
    def traffic_percentage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
        multiple endpoint groups.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "trafficPercentage"))

    @traffic_percentage.setter
    def traffic_percentage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bfb51e1e1c28639bc8d7489c43b99abfc2af3b47c334e19f9d5a87dfe550e223)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trafficPercentage", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "endpoint": "endpoint",
            "type": "type",
            "weight": "weight",
            "enable_client_ip_preservation": "enableClientIpPreservation",
            "enable_proxy_protocol": "enableProxyProtocol",
        },
    )
    class EndpointConfigurationsProperty:
        def __init__(
            self,
            *,
            endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            enable_client_ip_preservation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_proxy_protocol: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param endpoint: 
            :param type: 
            :param weight: 
            :param enable_client_ip_preservation: 
            :param enable_proxy_protocol: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c292e64b5998316e4e45eddeaf68c2c551d67079c31c1d3f94b1196c1889be62)
                check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
                check_type(argname="argument enable_client_ip_preservation", value=enable_client_ip_preservation, expected_type=type_hints["enable_client_ip_preservation"])
                check_type(argname="argument enable_proxy_protocol", value=enable_proxy_protocol, expected_type=type_hints["enable_proxy_protocol"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "endpoint": endpoint,
                "type": type,
                "weight": weight,
            }
            if enable_client_ip_preservation is not None:
                self._values["enable_client_ip_preservation"] = enable_client_ip_preservation
            if enable_proxy_protocol is not None:
                self._values["enable_proxy_protocol"] = enable_proxy_protocol

        @builtins.property
        def endpoint(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: endpoint: The IP address or domain name of endpoint in the endpoint group.
            '''
            result = self._values.get("endpoint")
            assert result is not None, "Required property 'endpoint' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: The type of endpoint in the endpoint group. Valid values:
            Domain: a custom domain name
            EIP: eip address
            Ip: a custom IP address
            PublicIp: a public IP address provided by Alibaba Cloud
            ECS: an Elastic Compute Service (ECS) instance
            SLB: a Server Load Balancer (SLB) instance
            ALB: an Application Load Balancer (ALB) instance
            OSS: an Object Storage Service (OSS) bucket
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: weight: The weight of endpoint N in the endpoint group.
            '''
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enable_client_ip_preservation(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableClientIpPreservation: Specifies whether to obtain and preserve the IP addresses of clients that access the endpoint by using the TCP Option Address (TOA) module. Valid values:
            true: yes
            false (default): no
            '''
            result = self._values.get("enable_client_ip_preservation")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_proxy_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableProxyProtocol: Specifies whether to obtain and preserve the IP addresses of clients that access the endpoint by using the TCP Option Address (TOA) module. Valid values:
            true: yes
            false (default): no
            '''
            result = self._values.get("enable_proxy_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EndpointConfigurationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "endpoint_configurations": "endpointConfigurations",
        "endpoint_group_region": "endpointGroupRegion",
        "listener_id": "listenerId",
        "description": "description",
        "endpoint_group_type": "endpointGroupType",
        "endpoint_request_protocol": "endpointRequestProtocol",
        "health_check_enabled": "healthCheckEnabled",
        "health_check_interval_seconds": "healthCheckIntervalSeconds",
        "health_check_path": "healthCheckPath",
        "health_check_port": "healthCheckPort",
        "health_check_protocol": "healthCheckProtocol",
        "name": "name",
        "threshold_count": "thresholdCount",
        "traffic_percentage": "trafficPercentage",
    },
)
class RosEndpointGroupProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_configurations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpointGroup.EndpointConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        endpoint_group_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_request_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_interval_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        threshold_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        traffic_percentage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEndpointGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup

        :param accelerator_id: 
        :param endpoint_configurations: 
        :param endpoint_group_region: 
        :param listener_id: 
        :param description: 
        :param endpoint_group_type: 
        :param endpoint_request_protocol: 
        :param health_check_enabled: 
        :param health_check_interval_seconds: 
        :param health_check_path: 
        :param health_check_port: 
        :param health_check_protocol: 
        :param name: 
        :param threshold_count: 
        :param traffic_percentage: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af79bc8e337c18010136a13c57435ff646b7e1759ab4c27da13c4b60836a6399)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument endpoint_configurations", value=endpoint_configurations, expected_type=type_hints["endpoint_configurations"])
            check_type(argname="argument endpoint_group_region", value=endpoint_group_region, expected_type=type_hints["endpoint_group_region"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument endpoint_group_type", value=endpoint_group_type, expected_type=type_hints["endpoint_group_type"])
            check_type(argname="argument endpoint_request_protocol", value=endpoint_request_protocol, expected_type=type_hints["endpoint_request_protocol"])
            check_type(argname="argument health_check_enabled", value=health_check_enabled, expected_type=type_hints["health_check_enabled"])
            check_type(argname="argument health_check_interval_seconds", value=health_check_interval_seconds, expected_type=type_hints["health_check_interval_seconds"])
            check_type(argname="argument health_check_path", value=health_check_path, expected_type=type_hints["health_check_path"])
            check_type(argname="argument health_check_port", value=health_check_port, expected_type=type_hints["health_check_port"])
            check_type(argname="argument health_check_protocol", value=health_check_protocol, expected_type=type_hints["health_check_protocol"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument threshold_count", value=threshold_count, expected_type=type_hints["threshold_count"])
            check_type(argname="argument traffic_percentage", value=traffic_percentage, expected_type=type_hints["traffic_percentage"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "endpoint_configurations": endpoint_configurations,
            "endpoint_group_region": endpoint_group_region,
            "listener_id": listener_id,
        }
        if description is not None:
            self._values["description"] = description
        if endpoint_group_type is not None:
            self._values["endpoint_group_type"] = endpoint_group_type
        if endpoint_request_protocol is not None:
            self._values["endpoint_request_protocol"] = endpoint_request_protocol
        if health_check_enabled is not None:
            self._values["health_check_enabled"] = health_check_enabled
        if health_check_interval_seconds is not None:
            self._values["health_check_interval_seconds"] = health_check_interval_seconds
        if health_check_path is not None:
            self._values["health_check_path"] = health_check_path
        if health_check_port is not None:
            self._values["health_check_port"] = health_check_port
        if health_check_protocol is not None:
            self._values["health_check_protocol"] = health_check_protocol
        if name is not None:
            self._values["name"] = name
        if threshold_count is not None:
            self._values["threshold_count"] = threshold_count
        if traffic_percentage is not None:
            self._values["traffic_percentage"] = traffic_percentage

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_configurations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEndpointGroup.EndpointConfigurationsProperty]]]:
        '''
        :Property: endpointConfigurations:
        '''
        result = self._values.get("endpoint_configurations")
        assert result is not None, "Required property 'endpoint_configurations' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEndpointGroup.EndpointConfigurationsProperty]]], result)

    @builtins.property
    def endpoint_group_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpointGroupRegion: The region ID of the endpoint group.
        '''
        result = self._values.get("endpoint_group_region")
        assert result is not None, "Required property 'endpoint_group_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener to be associated with the endpoint group.
        '''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the endpoint group.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointGroupType: The type of the endpoint group. Valid values:
        default: The endpoint group is a default endpoint group. This is the default value.
        virtual: The endpoint group is a virtual endpoint group.
        Note Only HTTP and HTTPS listeners support virtual endpoint groups.
        '''
        result = self._values.get("endpoint_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_request_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointRequestProtocol: The protocol used by the backend service. Valid values:
        http: This is the default value.
        https
        Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
        For an HTTP listener, the backend service protocol must be HTTP.
        '''
        result = self._values.get("endpoint_request_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckEnabled: Specifies whether to enable the health check feature.
        '''
        result = self._values.get("health_check_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_interval_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        '''
        result = self._values.get("health_check_interval_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckPath: The path set as the destination on the targets for health checks.
        '''
        result = self._values.get("health_check_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: healthCheckPort: The port that is used to connect with the targets for health checks.
        '''
        result = self._values.get("health_check_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
        tcp: TCP protocol
        http: HTTP protocol
        https: HTTPS protocol
        '''
        result = self._values.get("health_check_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the endpoint group.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def threshold_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.
        Valid values: 2 to 10. Default value: 3.
        '''
        result = self._values.get("threshold_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def traffic_percentage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
        multiple endpoint groups.
        '''
        result = self._values.get("traffic_percentage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEndpointGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEndpointGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroups",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::EndpointGroups``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EndpointGroups`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEndpointGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__620796d3887611e44eabd42e74447dc8f40283cc087ed7f9b49dc5f2fcb59f68)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f2e29f281773022bb590b0cb000c81233b52d73aa14f9954181522553f905299)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointGroupIds")
    def attr_endpoint_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndpointGroupIds: The IDs of the endpoint groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00ccd2ae0dad93ea4d3dd5e9f94cd3b349bad56bbe7f0954f573fd30a51b5957)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dd6dc65fca61062f81030f505032d1413f4a593d5ed0f0b078423e7849017cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endpointGroupConfigurations")
    def endpoint_group_configurations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroups.EndpointGroupConfigurationsProperty"]]]:
        '''
        :Property: endpointGroupConfigurations: The configurations of the endpoint groups.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroups.EndpointGroupConfigurationsProperty"]]], jsii.get(self, "endpointGroupConfigurations"))

    @endpoint_group_configurations.setter
    def endpoint_group_configurations(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroups.EndpointGroupConfigurationsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4f44c82f3ee4c05310646fc5fd4e9256fb38368b459434228574f72eb5aa024)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointGroupConfigurations", value)

    @builtins.property
    @jsii.member(jsii_name="listenerId")
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerId: The ID of the region to which the endpoint group belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerId"))

    @listener_id.setter
    def listener_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4007925548bb11df0d56dbd70798f9d44ddf3be037c26b90f4ab6a9baf086196)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroups.EndpointConfigurationsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "endpoint": "endpoint",
            "type": "type",
            "weight": "weight",
            "sub_address": "subAddress",
        },
    )
    class EndpointConfigurationsProperty:
        def __init__(
            self,
            *,
            endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            sub_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param endpoint: 
            :param type: 
            :param weight: 
            :param sub_address: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f4deaf7d04166d1dba2d1184677c3fcfd771a2c57cbf63597943fbcc74d0ab4d)
                check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
                check_type(argname="argument sub_address", value=sub_address, expected_type=type_hints["sub_address"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "endpoint": endpoint,
                "type": type,
                "weight": weight,
            }
            if sub_address is not None:
                self._values["sub_address"] = sub_address

        @builtins.property
        def endpoint(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: endpoint: The IP address, domain name, or instance ID based on the value of Type.
            '''
            result = self._values.get("endpoint")
            assert result is not None, "Required property 'endpoint' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: The type of the endpoint. Valid values:
            Domain: a custom domain name
            Ip: a custom IP address
            PublicIp: a public IP address provided by Alibaba Cloud
            ECS: an Elastic Compute Service (ECS) instance
            SLB: a Server Load Balancer (SLB) instance
            ALB: an Application Load Balancer (ALB) instance
            OSS: an Object Storage Service (OSS) bucket
            ENI: an elastic network interface (ENI)
            NLB: a Network Load Balancer (NLB) instance
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: weight: The weight of the endpoint. Valid values: 0 to 255.
            '''
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def sub_address(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: subAddress: The private IP address of the ENI.
            '''
            result = self._values.get("sub_address")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EndpointConfigurationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroups.EndpointGroupConfigurationsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "endpoint_group_region": "endpointGroupRegion",
            "enable_client_ip_preservation_proxy_protocol": "enableClientIpPreservationProxyProtocol",
            "enable_client_ip_preservation_toa": "enableClientIpPreservationToa",
            "endpoint_configurations": "endpointConfigurations",
            "endpoint_group_description": "endpointGroupDescription",
            "endpoint_group_name": "endpointGroupName",
            "endpoint_group_type": "endpointGroupType",
            "endpoint_request_protocol": "endpointRequestProtocol",
            "health_check_enabled": "healthCheckEnabled",
            "health_check_interval_seconds": "healthCheckIntervalSeconds",
            "health_check_path": "healthCheckPath",
            "health_check_port": "healthCheckPort",
            "health_check_protocol": "healthCheckProtocol",
            "port_overrides": "portOverrides",
            "tags": "tags",
            "threshold_count": "thresholdCount",
            "traffic_percentage": "trafficPercentage",
        },
    )
    class EndpointGroupConfigurationsProperty:
        def __init__(
            self,
            *,
            endpoint_group_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            enable_client_ip_preservation_proxy_protocol: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_client_ip_preservation_toa: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            endpoint_configurations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEndpointGroups.EndpointConfigurationsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            endpoint_group_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            endpoint_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            endpoint_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            endpoint_request_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_interval_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port_overrides: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEndpointGroups.PortOverridesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            tags: typing.Optional[typing.Sequence[typing.Union["RosEndpointGroups.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            threshold_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            traffic_percentage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param endpoint_group_region: 
            :param enable_client_ip_preservation_proxy_protocol: 
            :param enable_client_ip_preservation_toa: 
            :param endpoint_configurations: 
            :param endpoint_group_description: 
            :param endpoint_group_name: 
            :param endpoint_group_type: 
            :param endpoint_request_protocol: 
            :param health_check_enabled: 
            :param health_check_interval_seconds: 
            :param health_check_path: 
            :param health_check_port: 
            :param health_check_protocol: 
            :param port_overrides: 
            :param tags: 
            :param threshold_count: 
            :param traffic_percentage: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bdd496e96c74ba214a4d7b7116f9ee353617745c8ddb1aab244978bf900e16f7)
                check_type(argname="argument endpoint_group_region", value=endpoint_group_region, expected_type=type_hints["endpoint_group_region"])
                check_type(argname="argument enable_client_ip_preservation_proxy_protocol", value=enable_client_ip_preservation_proxy_protocol, expected_type=type_hints["enable_client_ip_preservation_proxy_protocol"])
                check_type(argname="argument enable_client_ip_preservation_toa", value=enable_client_ip_preservation_toa, expected_type=type_hints["enable_client_ip_preservation_toa"])
                check_type(argname="argument endpoint_configurations", value=endpoint_configurations, expected_type=type_hints["endpoint_configurations"])
                check_type(argname="argument endpoint_group_description", value=endpoint_group_description, expected_type=type_hints["endpoint_group_description"])
                check_type(argname="argument endpoint_group_name", value=endpoint_group_name, expected_type=type_hints["endpoint_group_name"])
                check_type(argname="argument endpoint_group_type", value=endpoint_group_type, expected_type=type_hints["endpoint_group_type"])
                check_type(argname="argument endpoint_request_protocol", value=endpoint_request_protocol, expected_type=type_hints["endpoint_request_protocol"])
                check_type(argname="argument health_check_enabled", value=health_check_enabled, expected_type=type_hints["health_check_enabled"])
                check_type(argname="argument health_check_interval_seconds", value=health_check_interval_seconds, expected_type=type_hints["health_check_interval_seconds"])
                check_type(argname="argument health_check_path", value=health_check_path, expected_type=type_hints["health_check_path"])
                check_type(argname="argument health_check_port", value=health_check_port, expected_type=type_hints["health_check_port"])
                check_type(argname="argument health_check_protocol", value=health_check_protocol, expected_type=type_hints["health_check_protocol"])
                check_type(argname="argument port_overrides", value=port_overrides, expected_type=type_hints["port_overrides"])
                check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
                check_type(argname="argument threshold_count", value=threshold_count, expected_type=type_hints["threshold_count"])
                check_type(argname="argument traffic_percentage", value=traffic_percentage, expected_type=type_hints["traffic_percentage"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "endpoint_group_region": endpoint_group_region,
            }
            if enable_client_ip_preservation_proxy_protocol is not None:
                self._values["enable_client_ip_preservation_proxy_protocol"] = enable_client_ip_preservation_proxy_protocol
            if enable_client_ip_preservation_toa is not None:
                self._values["enable_client_ip_preservation_toa"] = enable_client_ip_preservation_toa
            if endpoint_configurations is not None:
                self._values["endpoint_configurations"] = endpoint_configurations
            if endpoint_group_description is not None:
                self._values["endpoint_group_description"] = endpoint_group_description
            if endpoint_group_name is not None:
                self._values["endpoint_group_name"] = endpoint_group_name
            if endpoint_group_type is not None:
                self._values["endpoint_group_type"] = endpoint_group_type
            if endpoint_request_protocol is not None:
                self._values["endpoint_request_protocol"] = endpoint_request_protocol
            if health_check_enabled is not None:
                self._values["health_check_enabled"] = health_check_enabled
            if health_check_interval_seconds is not None:
                self._values["health_check_interval_seconds"] = health_check_interval_seconds
            if health_check_path is not None:
                self._values["health_check_path"] = health_check_path
            if health_check_port is not None:
                self._values["health_check_port"] = health_check_port
            if health_check_protocol is not None:
                self._values["health_check_protocol"] = health_check_protocol
            if port_overrides is not None:
                self._values["port_overrides"] = port_overrides
            if tags is not None:
                self._values["tags"] = tags
            if threshold_count is not None:
                self._values["threshold_count"] = threshold_count
            if traffic_percentage is not None:
                self._values["traffic_percentage"] = traffic_percentage

        @builtins.property
        def endpoint_group_region(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: endpointGroupRegion: The ID of the region where you want to create the endpoint group. You can enter the region IDs of up to 10 endpoint groups.
            '''
            result = self._values.get("endpoint_group_region")
            assert result is not None, "Required property 'endpoint_group_region' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enable_client_ip_preservation_proxy_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableClientIpPreservationProxyProtocol: Specifies whether to use the proxy protocol to preserve client IP addresses.
            '''
            result = self._values.get("enable_client_ip_preservation_proxy_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_client_ip_preservation_toa(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableClientIpPreservationToa: Specifies whether to preserve the IP addresses of clients that access the endpoint by using the TCP Option Address (TOA) module.
            '''
            result = self._values.get("enable_client_ip_preservation_toa")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def endpoint_configurations(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroups.EndpointConfigurationsProperty"]]]]:
            '''
            :Property: endpointConfigurations: The configurations of the endpoints.
            '''
            result = self._values.get("endpoint_configurations")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroups.EndpointConfigurationsProperty"]]]], result)

        @builtins.property
        def endpoint_group_description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: endpointGroupDescription: The description of the endpoint group. The description can be up to 256 characters in length and cannot contain http:// or https://. You can enter the descriptions of up to 10 endpoint groups.
            '''
            result = self._values.get("endpoint_group_description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def endpoint_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: endpointGroupName: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter. You can specify the names of up to 10 endpoint groups.
            '''
            result = self._values.get("endpoint_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def endpoint_group_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            endpointGroupType: The type of the endpoint group. Valid values:
            default (default)
            virtual
            You can specify the types of up to 10 endpoint groups.
            '''
            result = self._values.get("endpoint_group_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def endpoint_request_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            endpointRequestProtocol: The protocol that is used by the backend service. Valid values:
            HTTP (default)
            HTTPS
            You can specify up to 10 backend service protocols.
            '''
            result = self._values.get("endpoint_request_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckEnabled: Specifies whether to enable the health check feature.
            '''
            result = self._values.get("health_check_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_interval_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckIntervalSeconds: The interval at which health checks are performed.
            '''
            result = self._values.get("health_check_interval_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckPath: The path to which health check requests are sent.
            '''
            result = self._values.get("health_check_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckPort: The port that is used for health checks. Valid values: 1 to 65535.
            '''
            result = self._values.get("health_check_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            healthCheckProtocol: The protocol over which health check requests are sent. Valid values:
            tcp
            http
            https
            You can specify up to 10 health check protocols.
            '''
            result = self._values.get("health_check_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port_overrides(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroups.PortOverridesProperty"]]]]:
            '''
            :Property: portOverrides: The port mapping.
            '''
            result = self._values.get("port_overrides")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpointGroups.PortOverridesProperty"]]]], result)

        @builtins.property
        def tags(
            self,
        ) -> typing.Optional[typing.List["RosEndpointGroups.TagsProperty"]]:
            '''
            :Property: tags: The tags.
            '''
            result = self._values.get("tags")
            return typing.cast(typing.Optional[typing.List["RosEndpointGroups.TagsProperty"]], result)

        @builtins.property
        def threshold_count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint group is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint group is considered healthy.
            '''
            result = self._values.get("threshold_count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def traffic_percentage(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: trafficPercentage: The traffic distribution ratio. If a listener is associated with multiple endpoint groups, you can specify this parameter to distribute traffic to the endpoint groups based on ratios. Valid values: 1 to 100. Default value: 100. You can specify traffic distribution ratios for up to 10 endpoint groups.
            '''
            result = self._values.get("traffic_percentage")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EndpointGroupConfigurationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroups.PortOverridesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "endpoint_port": "endpointPort",
            "listener_port": "listenerPort",
        },
    )
    class PortOverridesProperty:
        def __init__(
            self,
            *,
            endpoint_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param endpoint_port: 
            :param listener_port: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ed392c0c9a4f3695b2bd422a86051c75e3aeff41fdb3648375dd2067ae99c6de)
                check_type(argname="argument endpoint_port", value=endpoint_port, expected_type=type_hints["endpoint_port"])
                check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "endpoint_port": endpoint_port,
                "listener_port": listener_port,
            }

        @builtins.property
        def endpoint_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: endpointPort: The endpoint port that is mapped to the listener port.
            '''
            result = self._values.get("endpoint_port")
            assert result is not None, "Required property 'endpoint_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def listener_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: listenerPort: The listener port that is mapped to the endpoint port.
            '''
            result = self._values.get("listener_port")
            assert result is not None, "Required property 'listener_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PortOverridesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroups.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__21a3da2205efb182b3fce3194e6c9133fac46120efd36ecb54795b10d4a78b90)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The key of the tag.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the tag.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "endpoint_group_configurations": "endpointGroupConfigurations",
        "listener_id": "listenerId",
    },
)
class RosEndpointGroupsProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        endpoint_group_configurations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpointGroups.EndpointGroupConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosEndpointGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroups

        :param accelerator_id: 
        :param endpoint_group_configurations: 
        :param listener_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__518590e45cc4c334ebac920b1d28570ddc4a7e5d135c25a7909b22bbdb684f13)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument endpoint_group_configurations", value=endpoint_group_configurations, expected_type=type_hints["endpoint_group_configurations"])
            check_type(argname="argument listener_id", value=listener_id, expected_type=type_hints["listener_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "endpoint_group_configurations": endpoint_group_configurations,
            "listener_id": listener_id,
        }

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the basic GA instance.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def endpoint_group_configurations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEndpointGroups.EndpointGroupConfigurationsProperty]]]:
        '''
        :Property: endpointGroupConfigurations: The configurations of the endpoint groups.
        '''
        result = self._values.get("endpoint_group_configurations")
        assert result is not None, "Required property 'endpoint_group_configurations' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEndpointGroups.EndpointGroupConfigurationsProperty]]], result)

    @builtins.property
    def listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerId: The ID of the region to which the endpoint group belongs.
        '''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEndpointGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIpSets(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosIpSets",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::IpSets``, which is used to create acceleration regions.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``IpSets`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosIpSetsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cff2a7aa26db9970ab855483021f2ced01210f39aa9cfa9a4dc1c304d3499808)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d014d0fdcb07e984244ba2675e2a6aec914bee6d2bc8bb289269bd451b93be2d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccelerateRegionIds")
    def attr_accelerate_region_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccelerateRegionIds: The ID list of the accelerate region.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccelerateRegionIds"))

    @builtins.property
    @jsii.member(jsii_name="attrIpSetIds")
    def attr_ip_set_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpSetIds: The ID list of the ip set.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpSetIds"))

    @builtins.property
    @jsii.member(jsii_name="attrIpVersions")
    def attr_ip_versions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpVersions: The IP version list of the accelerate region.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpVersions"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accelerateRegion")
    def accelerate_region(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIpSets.AccelerateRegionProperty"]]]:
        '''
        :Property: accelerateRegion:
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIpSets.AccelerateRegionProperty"]]], jsii.get(self, "accelerateRegion"))

    @accelerate_region.setter
    def accelerate_region(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIpSets.AccelerateRegionProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f9e5bd9f4018c7b301d2afd0ca83e3f73635e1dbdf6f67e834368866fae02f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accelerateRegion", value)

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the GA instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14f535cbe1e14a6fc38c7b85b2550d3616f75aa38a573b303e2874f5c1c5f70a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__359f433234735182694bf1dda23c61b8bc2bfa43158b8a846dfa303b25165dec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosIpSets.AccelerateRegionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "accelerate_region_id": "accelerateRegionId",
            "bandwidth": "bandwidth",
            "ip_version": "ipVersion",
            "isp_type": "ispType",
        },
    )
    class AccelerateRegionProperty:
        def __init__(
            self,
            *,
            accelerate_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            isp_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param accelerate_region_id: 
            :param bandwidth: 
            :param ip_version: 
            :param isp_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__01efd5e87655f73a165d208d6028a03669dfc15a71f2ccfca37b7f29d0eea75f)
                check_type(argname="argument accelerate_region_id", value=accelerate_region_id, expected_type=type_hints["accelerate_region_id"])
                check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
                check_type(argname="argument ip_version", value=ip_version, expected_type=type_hints["ip_version"])
                check_type(argname="argument isp_type", value=isp_type, expected_type=type_hints["isp_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "accelerate_region_id": accelerate_region_id,
                "bandwidth": bandwidth,
            }
            if ip_version is not None:
                self._values["ip_version"] = ip_version
            if isp_type is not None:
                self._values["isp_type"] = isp_type

        @builtins.property
        def accelerate_region_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: accelerateRegionId: The ID of the region where traffic is to be accelerated.
            '''
            result = self._values.get("accelerate_region_id")
            assert result is not None, "Required property 'accelerate_region_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def bandwidth(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            bandwidth: The bandwidth allocated to the acceleration region. Unit: Mbit/s.
            Note
            The minimum bandwidth allocated to each accelerated region is 2 Mbit/s.
            The total bandwidth for all regions must not exceed the amount included in your basic
            bandwidth plan.
            '''
            result = self._values.get("bandwidth")
            assert result is not None, "Required property 'bandwidth' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def ip_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ipVersion: IP version. Valid values: IPv4, IPv6
            '''
            result = self._values.get("ip_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def isp_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ispType: Accelerated area public network line type.
            '''
            result = self._values.get("isp_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AccelerateRegionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosIpSetsProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerate_region": "accelerateRegion",
        "accelerator_id": "acceleratorId",
    },
)
class RosIpSetsProps:
    def __init__(
        self,
        *,
        accelerate_region: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIpSets.AccelerateRegionProperty, typing.Dict[builtins.str, typing.Any]]]]],
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosIpSets``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets

        :param accelerate_region: 
        :param accelerator_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad95a250de18985f17b40276b9b8e483eea1e28995ea2c235c2492fcc24935ab)
            check_type(argname="argument accelerate_region", value=accelerate_region, expected_type=type_hints["accelerate_region"])
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerate_region": accelerate_region,
            "accelerator_id": accelerator_id,
        }

    @builtins.property
    def accelerate_region(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIpSets.AccelerateRegionProperty]]]:
        '''
        :Property: accelerateRegion:
        '''
        result = self._values.get("accelerate_region")
        assert result is not None, "Required property 'accelerate_region' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIpSets.AccelerateRegionProperty]]], result)

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the GA instance.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIpSetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosListener(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosListener",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::GA::Listener``, which is used to create a listener for a Global Accelerator (GA) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Listener`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosListenerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d56a81b7393cae3bdb9c8a775278554e360266b04145a590ab36e9803cb29278)
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
            type_hints = typing.get_type_hints(_typecheckingstub__797643aeac0ef8aaccf99718c101300f29a758df8cc400586baff2f32e8612ff)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerId: The ID of the listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5f02a87ba3af91f3cff315a2b878148b019f5a0e1397d00a78aec79159b3e38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceleratorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38f51c6cfe59690b841898f059892db965ebf985dfff645475e0614e8cc101ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="portRanges")
    def port_ranges(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PortRangesProperty"]]]:
        '''
        :Property: portRanges:
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PortRangesProperty"]]], jsii.get(self, "portRanges"))

    @port_ranges.setter
    def port_ranges(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PortRangesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80eda6deea1ec86b8e87b7784846874581b12d41942918778ea1a3143cdd79e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "portRanges", value)

    @builtins.property
    @jsii.member(jsii_name="protocol")
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protocol: The network transmission protocol of the listener. Valid values:
        tcp: TCP protocol
        udp: UDP protocol
        http: HTTP protocolhttps: HTTPS protocol.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8b110ea837270107b1f6d171a9b865f12bffe47905c7a2e6aebc7555c7b1bbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocol", value)

    @builtins.property
    @jsii.member(jsii_name="certificates")
    def certificates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CertificatesProperty"]]]]:
        '''
        :Property: certificates:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CertificatesProperty"]]]], jsii.get(self, "certificates"))

    @certificates.setter
    def certificates(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.CertificatesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86df693b41e681c6dd697e41f3d37eec48b108b731f5fa9018cbb6dcb44a5992)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certificates", value)

    @builtins.property
    @jsii.member(jsii_name="clientAffinity")
    def client_affinity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clientAffinity: Specifies whether to enable client affinity for the listener.
        If you do not specify the default value in the parameter, client affinity is disabled.
        When client affinity is disabled, the connections from a specific source (client)
        IP address are not always routed to the same endpoint.
        If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        a specific source (client) IP address are always routed to the same endpoint.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clientAffinity"))

    @client_affinity.setter
    def client_affinity(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f0869cc3da9bd6b056fa28cd04faf71849d535fe36f648805f6f34673f69396)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clientAffinity", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the listener.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61f1300e4412fc257a050842923ff75b61dc75f60fb3b84084acc76b5e0e1846)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the listener.
        The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        (_), and hyphens (-). It must start with a letter or Chinese character.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0209ad6f3f07876633854b0105847dd8c61884565549258b558c1b02e4a1cca0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="proxyProtocol")
    def proxy_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        proxyProtocol: Specifies whether to preserve client IP addresses. Valid values:
        true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
        false (default): does not preserve client IP addresses.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyProtocol"))

    @proxy_protocol.setter
    def proxy_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4c7d449dad714500150df9a941875b22479e573fb92237a889065d422124173)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="securityPolicyId")
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityPolicyId: The ID of the security policy. Valid values:
        tls_cipher_policy_1_0
        tls_cipher_policy_1_1
        tls_cipher_policy_1_2
        tls_cipher_policy_1_2_strict
        tls_cipher_policy_1_2_strict_with_1_3
        Note Only HTTPS listeners support this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityPolicyId"))

    @security_policy_id.setter
    def security_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c015e82bf3c5873bcb4e8e736d1dc41d31cde4c5d7685b73804203172c61b2b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="xForwardedForConfig")
    def x_forwarded_for_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.XForwardedForConfigProperty"]]:
        '''
        :Property: xForwardedForConfig: The configuration of the XForward field.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.XForwardedForConfigProperty"]], jsii.get(self, "xForwardedForConfig"))

    @x_forwarded_for_config.setter
    def x_forwarded_for_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.XForwardedForConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ed15fc7d67dfb926c20081a187b122c9aa459a14ed2616c10fdcfc36c8c2459)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "xForwardedForConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosListener.CertificatesProperty",
        jsii_struct_bases=[],
        name_mapping={"id": "id"},
    )
    class CertificatesProperty:
        def __init__(
            self,
            *,
            id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7916bc72e42bbe3a490fccf483c77e2591cbf4b8178d240df686d4e58b3c2425)
                check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "id": id,
            }

        @builtins.property
        def id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: id: The ID of the SSL certificate.
            '''
            result = self._values.get("id")
            assert result is not None, "Required property 'id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CertificatesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosListener.PortRangesProperty",
        jsii_struct_bases=[],
        name_mapping={"from_port": "fromPort", "to_port": "toPort"},
    )
    class PortRangesProperty:
        def __init__(
            self,
            *,
            from_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            to_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param from_port: 
            :param to_port: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3518395080d4430f8f5c4b8ea092711bf07bb58c2dfd30feddba32cfdda7a998)
                check_type(argname="argument from_port", value=from_port, expected_type=type_hints["from_port"])
                check_type(argname="argument to_port", value=to_port, expected_type=type_hints["to_port"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "from_port": from_port,
                "to_port": to_port,
            }

        @builtins.property
        def from_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            fromPort: The first listening port of the port range specified for receiving and forwarding
            requests to endpoints.
            '''
            result = self._values.get("from_port")
            assert result is not None, "Required property 'from_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def to_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            toPort: The last listening port of the port range specified for receiving and forwarding requests
            to endpoints.
            '''
            result = self._values.get("to_port")
            assert result is not None, "Required property 'to_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PortRangesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosListener.XForwardedForConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "x_forwarded_for_ga_ap_enabled": "xForwardedForGaApEnabled",
            "x_forwarded_for_ga_id_enabled": "xForwardedForGaIdEnabled",
            "x_forwarded_for_port_enabled": "xForwardedForPortEnabled",
            "x_forwarded_for_proto_enabled": "xForwardedForProtoEnabled",
            "x_real_ip_enabled": "xRealIpEnabled",
        },
    )
    class XForwardedForConfigProperty:
        def __init__(
            self,
            *,
            x_forwarded_for_ga_ap_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_ga_id_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_proto_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_real_ip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param x_forwarded_for_ga_ap_enabled: 
            :param x_forwarded_for_ga_id_enabled: 
            :param x_forwarded_for_port_enabled: 
            :param x_forwarded_for_proto_enabled: 
            :param x_real_ip_enabled: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b00024420a8d2a6b54dd46b3be269ba3896954a3310f11a796ac17bd85d22563)
                check_type(argname="argument x_forwarded_for_ga_ap_enabled", value=x_forwarded_for_ga_ap_enabled, expected_type=type_hints["x_forwarded_for_ga_ap_enabled"])
                check_type(argname="argument x_forwarded_for_ga_id_enabled", value=x_forwarded_for_ga_id_enabled, expected_type=type_hints["x_forwarded_for_ga_id_enabled"])
                check_type(argname="argument x_forwarded_for_port_enabled", value=x_forwarded_for_port_enabled, expected_type=type_hints["x_forwarded_for_port_enabled"])
                check_type(argname="argument x_forwarded_for_proto_enabled", value=x_forwarded_for_proto_enabled, expected_type=type_hints["x_forwarded_for_proto_enabled"])
                check_type(argname="argument x_real_ip_enabled", value=x_real_ip_enabled, expected_type=type_hints["x_real_ip_enabled"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if x_forwarded_for_ga_ap_enabled is not None:
                self._values["x_forwarded_for_ga_ap_enabled"] = x_forwarded_for_ga_ap_enabled
            if x_forwarded_for_ga_id_enabled is not None:
                self._values["x_forwarded_for_ga_id_enabled"] = x_forwarded_for_ga_id_enabled
            if x_forwarded_for_port_enabled is not None:
                self._values["x_forwarded_for_port_enabled"] = x_forwarded_for_port_enabled
            if x_forwarded_for_proto_enabled is not None:
                self._values["x_forwarded_for_proto_enabled"] = x_forwarded_for_proto_enabled
            if x_real_ip_enabled is not None:
                self._values["x_real_ip_enabled"] = x_real_ip_enabled

        @builtins.property
        def x_forwarded_for_ga_ap_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForGaApEnabled: Specifies whether to use the GA-AP header to retrieve the information about the acceleration area. Valid values:
            true: yes
            false (default): no
            Note Only HTTP and HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_ga_ap_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_ga_id_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForGaIdEnabled: Specifies whether to use the GA-ID header to retrieve the ID of the GA instance. Valid values:
            true: yes
            false (default): no
            Note Only HTTP and HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_ga_id_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_port_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForPortEnabled: Specifies whether to use the GA-X-Forward-Port header to retrieve the listener ports of the GA instance. Valid values:
            true: yes
            false (default): no
            Note Only HTTP and HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_port_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_proto_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xForwardedForProtoEnabled: Specifies whether to use the GA-X-Forward-Proto header to retrieve the listener protocol of the GA instance. Valid values:
            true: yes
            false (default): no
            Note Only HTTP and HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_forwarded_for_proto_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_real_ip_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            xRealIpEnabled: Specifies whether to use the X-Real-IP header to retrieve client IP addresses. Valid values:
            true: yes
            false (default): no
            Note Only HTTP and HTTPS listeners support this parameter.
            '''
            result = self._values.get("x_real_ip_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "XForwardedForConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "port_ranges": "portRanges",
        "protocol": "protocol",
        "certificates": "certificates",
        "client_affinity": "clientAffinity",
        "description": "description",
        "name": "name",
        "proxy_protocol": "proxyProtocol",
        "security_policy_id": "securityPolicyId",
        "x_forwarded_for_config": "xForwardedForConfig",
    },
)
class RosListenerProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        port_ranges: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.PortRangesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.CertificatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        client_affinity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_protocol: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        x_forwarded_for_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.XForwardedForConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosListener``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener

        :param accelerator_id: 
        :param port_ranges: 
        :param protocol: 
        :param certificates: 
        :param client_affinity: 
        :param description: 
        :param name: 
        :param proxy_protocol: 
        :param security_policy_id: 
        :param x_forwarded_for_config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42c37813294ea2d20940d6e46d39d502033589e2b651420b8713b15b36f5f464)
            check_type(argname="argument accelerator_id", value=accelerator_id, expected_type=type_hints["accelerator_id"])
            check_type(argname="argument port_ranges", value=port_ranges, expected_type=type_hints["port_ranges"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument certificates", value=certificates, expected_type=type_hints["certificates"])
            check_type(argname="argument client_affinity", value=client_affinity, expected_type=type_hints["client_affinity"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument proxy_protocol", value=proxy_protocol, expected_type=type_hints["proxy_protocol"])
            check_type(argname="argument security_policy_id", value=security_policy_id, expected_type=type_hints["security_policy_id"])
            check_type(argname="argument x_forwarded_for_config", value=x_forwarded_for_config, expected_type=type_hints["x_forwarded_for_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "port_ranges": port_ranges,
            "protocol": protocol,
        }
        if certificates is not None:
            self._values["certificates"] = certificates
        if client_affinity is not None:
            self._values["client_affinity"] = client_affinity
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if proxy_protocol is not None:
            self._values["proxy_protocol"] = proxy_protocol
        if security_policy_id is not None:
            self._values["security_policy_id"] = security_policy_id
        if x_forwarded_for_config is not None:
            self._values["x_forwarded_for_config"] = x_forwarded_for_config

    @builtins.property
    def accelerator_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def port_ranges(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.PortRangesProperty]]]:
        '''
        :Property: portRanges:
        '''
        result = self._values.get("port_ranges")
        assert result is not None, "Required property 'port_ranges' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.PortRangesProperty]]], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protocol: The network transmission protocol of the listener. Valid values:
        tcp: TCP protocol
        udp: UDP protocol
        http: HTTP protocolhttps: HTTPS protocol.
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def certificates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.CertificatesProperty]]]]:
        '''
        :Property: certificates:
        '''
        result = self._values.get("certificates")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.CertificatesProperty]]]], result)

    @builtins.property
    def client_affinity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clientAffinity: Specifies whether to enable client affinity for the listener.
        If you do not specify the default value in the parameter, client affinity is disabled.
        When client affinity is disabled, the connections from a specific source (client)
        IP address are not always routed to the same endpoint.
        If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        a specific source (client) IP address are always routed to the same endpoint.
        '''
        result = self._values.get("client_affinity")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the listener.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the listener.
        The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        (_), and hyphens (-). It must start with a letter or Chinese character.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        proxyProtocol: Specifies whether to preserve client IP addresses. Valid values:
        true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
        false (default): does not preserve client IP addresses.
        '''
        result = self._values.get("proxy_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityPolicyId: The ID of the security policy. Valid values:
        tls_cipher_policy_1_0
        tls_cipher_policy_1_1
        tls_cipher_policy_1_2
        tls_cipher_policy_1_2_strict
        tls_cipher_policy_1_2_strict_with_1_3
        Note Only HTTPS listeners support this parameter.
        '''
        result = self._values.get("security_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def x_forwarded_for_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.XForwardedForConfigProperty]]:
        '''
        :Property: xForwardedForConfig: The configuration of the XForward field.
        '''
        result = self._values.get("x_forwarded_for_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.XForwardedForConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Accelerator",
    "AcceleratorProps",
    "Acl",
    "AclProps",
    "AclsListenerAssociation",
    "AclsListenerAssociationProps",
    "ApplicationMonitor",
    "ApplicationMonitorProps",
    "BandwidthPackage",
    "BandwidthPackageAcceleratorAddition",
    "BandwidthPackageAcceleratorAdditionProps",
    "BandwidthPackageProps",
    "BasicAccelerateIp",
    "BasicAccelerateIpProps",
    "BasicAccelerator",
    "BasicAcceleratorIpEndpointRelation",
    "BasicAcceleratorIpEndpointRelationProps",
    "BasicAcceleratorProps",
    "BasicEndpoint",
    "BasicEndpointGroup",
    "BasicEndpointGroupProps",
    "BasicEndpointProps",
    "BasicIpSet",
    "BasicIpSetProps",
    "EndpointGroup",
    "EndpointGroupProps",
    "EndpointGroups",
    "EndpointGroupsProps",
    "IpSets",
    "IpSetsProps",
    "Listener",
    "ListenerProps",
    "RosAccelerator",
    "RosAcceleratorProps",
    "RosAcl",
    "RosAclProps",
    "RosAclsListenerAssociation",
    "RosAclsListenerAssociationProps",
    "RosApplicationMonitor",
    "RosApplicationMonitorProps",
    "RosBandwidthPackage",
    "RosBandwidthPackageAcceleratorAddition",
    "RosBandwidthPackageAcceleratorAdditionProps",
    "RosBandwidthPackageProps",
    "RosBasicAccelerateIp",
    "RosBasicAccelerateIpProps",
    "RosBasicAccelerator",
    "RosBasicAcceleratorIpEndpointRelation",
    "RosBasicAcceleratorIpEndpointRelationProps",
    "RosBasicAcceleratorProps",
    "RosBasicEndpoint",
    "RosBasicEndpointGroup",
    "RosBasicEndpointGroupProps",
    "RosBasicEndpointProps",
    "RosBasicIpSet",
    "RosBasicIpSetProps",
    "RosEndpointGroup",
    "RosEndpointGroupProps",
    "RosEndpointGroups",
    "RosEndpointGroupsProps",
    "RosIpSets",
    "RosIpSetsProps",
    "RosListener",
    "RosListenerProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__ad2944c582ac4f0110fc9f037076ecf11c024dbccfb2b0cd7463f21a4e745121(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AcceleratorProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__305edf9ac58ffdd324c3201c8d302756ea89772e05d67e9bc6c0c84bb8e229b3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2e3cccf7b77a082f84aaa4d342cf8bd96b87a303fd1d05b692a17d5dfe6ec02(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebbb537dc7b5456c8d78a9932c7a7fae4234ccd8a9f558f65bb9d813a73c02cb(
    value: AcceleratorProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7350869511899705f719afd6dc1da1212be59fcb999ddee761c3315240b53e44(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa47fd8a6834a906b651c6776a5f1805d07515bffead1a424611c23a7db43c8f(
    *,
    accelerator_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_cross_border: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_set_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccelerator.IpSetConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7470afc01ba703e3160bb0b0eda7adbb9149db7d6d8a39a64459f49f08b18149(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e29f7e0d582fadf47591c44874ee8e77ffdc3a7b3e92dc2fcc942a108ee57705(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0a72491a8967e2e6ba2141bf7bd102f2a7f7d9935f1f864bd512a0d546f00aa(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__642d58724c62d72f072734cdbb84f226ab054e6d5fb21dbd331758521d87f209(
    value: AclProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be3d68937caafeb40044eb58af900b43a79ade06bc83f6b511eabf229ee13be0(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__babaf4b97f9d39d12b2b9f8160fec0c12483eaef34ae395cb55a09c5d1505df2(
    *,
    address_ip_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_entries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAcl.AclEntriesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosAcl.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9202046bb9961b2066083670251fc1cb33cf23a06d4ed66821efe4efe6202a4f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AclsListenerAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8e298bf2b49f09937ed841ae089741e433ff0528557402f6341dba9875f5ffe(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b08c9f463ec5957b29c56d863f1997e62d43a917dc2362a0f0424bf17bba4129(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3daa19efe9cc6301527f3f36b8fa51b1282be74d965f9aea3432a1ba1539087c(
    value: AclsListenerAssociationProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__108d7235c0351e77c9a54a091423c5c6ef71f9f2a305c9c2d4cc5a0fdbb2199c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a1d4a6e29e52f6c56c63061dc087321df38e5cba171c4782dc09fc3fe0d1501(
    *,
    acl_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    acl_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9864fcde8839025897e1460da78819c7fe4eb818360b3f851405808598762d87(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ApplicationMonitorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1832cb6f538bb8e2bc975483fb393c38acd30dd4d31832360d7f25d315593b16(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6d2bbd1c9efd5f7a74f6dfa5dc9dad80faf913dcbe9fe094634e7657b95064e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ec923eb0bae60db529420f4ec7faac80d117085e52165fcb43900af4820651c(
    value: ApplicationMonitorProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e22628aed079494a66c8ec146cefefca5eed321b2999fb38df24b222f40b3163(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a908cffd075fe3111de93e46e5d199f553298acd1966591b454045326e571986(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    detect_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    detect_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    detect_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a29e384b490a67787c89fcf9c1731467ed499bdf18b293fa09bcc99c195d2044(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BandwidthPackageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a43d9de727d72eb7967bc215a5af3c49823568b38e4e23ed1029bc78b03405c6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68f52fed96de4d9dabe2e59742be1b2d5b4ead2578e65029f713c77539ed63e2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49c70781bc8488486dfd82b83cc57c513b187fce78cf465375c9577255a4331e(
    value: BandwidthPackageProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79b68de672ce8cb27defe225a79c7d6e71d03957fa74e9555cb586c1577816cd(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8df159a76fbfeb6c0468379f4b7e466132321e7b576399d49c057d2a7986d41c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BandwidthPackageAcceleratorAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75c8c8f571508574f373d7795c468ece9b0117e2c4d4096fcbd936cce97926db(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__037b35b93daf9f680483f501a62d76f9d8bdb2c5c6e1613c6f5b1b1d9d4fea00(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0496e0b3d170778e7ec128157be88069986973fd072615a85437958a1125ff80(
    value: BandwidthPackageAcceleratorAdditionProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0286a2659c50515b2d347048c3d6764a57bf3c1b9e0cd63d9fcae881b3640cb(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__791ed4eadd73185d9f6f1b7515896e49ae8aa1ff1530de7e55c08abf6d11b44f(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc1f17cb39b635e560067f62fa772139fb9f47a6d748382ca657cb503ca0941f(
    *,
    bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cbn_geographic_region_id_a: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cbn_geographic_region_id_b: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ratio: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98139162157fa81a273735f03215b2a9329171c1743da1d2466d076a330f3f45(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BasicAccelerateIpProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a543b6902f43919c9ac80bf4bcdd55ed4101f16008622c44afc5fb4a48f52744(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02a0cb7e4459b3eb10c23fb6be26672decc97a452954f2e722459a653af3b999(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e60bddd41fa217851c7eb55abc13c63f73cf6df2bcbbf33f98d3e68b4a60dadd(
    value: BasicAccelerateIpProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86a78ae63c4d00dc0a2357a9d8b3c1feb293f07e466b8b61f9777afaaabbd209(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e581a70de26e5caee26ba13db813e3faf1db52cabd1b0bdeb94aafe5ff291ff(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ip_set_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8677ff85d295d3c2c2ed4ec4ca19b9819e5b94e2d995be61f37b33d1ae66dea(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[BasicAcceleratorProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e861fb437286ed6dcae8e65505d6dbdd0979bcf780853e7ce4551cfb18a8995(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c77d9831e5a2d827204e898e7eb891fde69b261cb3481535eaf6b4caf5bd7fb7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c689215073d939e1a556b8612fcdb2e40517d2119e05b986c5741846b5898a64(
    value: BasicAcceleratorProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45dd627b3e86f549c6f6513d23abcacc0c6122e7fb7a2b89f7a8974b1afa878b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c480432b7aa0157d987ace56be1d70198574c3048f4b9161adf1d79e2597485(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BasicAcceleratorIpEndpointRelationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdeb6d20ccf5d5aaec1d4e9847ef65f305ee979b18261911458e9f651aecf25c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0898d5eba9a1585e10a8e8acad67fdbe58dfd3f66579aa6afbad0db41654c5aa(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c162424295eaa741af2b4fd32b2cf24c9e3f415677de042c76598151c3b799d2(
    value: BasicAcceleratorIpEndpointRelationProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f6da975f4c472950d3d66309beb3be7d698b70416b697cdcd76054d6568f286(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__817d03d9958c51f3e6fceaec34d6cc2cebe63d5f0f518ee534bb204631cebe66(
    *,
    accelerate_ip_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4f213b531151f8b95228c11a650ae4af3c2dad95c48f87e56f3df348863130e(
    *,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    promotion_option_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosBasicAccelerator.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c73e7dbe18d5354e1e18488e5974440faecbc43407b5d5ee401080263feff93(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BasicEndpointProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebf2ca37a3f9fa96317c0d5cd357ee6c6eca4d77e91d5fa2a74a7b8e3a997a87(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__353474fda5ce13e3abbc90c98ddf5fc0f3aa138dc95e22d3d72e53646fb45974(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ba6f72167afba840c99eda882ecb42a34073c63e2736c1ec02de25acdddf4f5(
    value: BasicEndpointProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d991467406eb7e92679e740b6ac02273fda06db8b725108a877cee716673729c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf8772e7217240fe7e634a99184ff69d15f7a9519166ca0f07fa233a5130ec01(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BasicEndpointGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09fa8e81f28d5ca1ea4ce9ab52b5501a9e63efa0660aa3c7049b64f39f66cc2e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf437a06b9d6c62c36439f93de75fb8f939746bbc926ff9e5508ab957707eef7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19e753292e838c1b2398c386d5b26bd5fb4fd1290e855751f68f2aaaf50aac46(
    value: BasicEndpointGroupProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03351b34c9d069fe8b0a106b842d6a52311e6e5a29feb01a76152bfe3791d87c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bedf097be63f1431740f65b8758fe299adab3a8a232e634a73effcec6b96cd63(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_group_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_sub_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0a714d03b5c2e3994a0ee45fa7d2ed7ef3cd18fb61a33069d0e93b55bc8a302(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_sub_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_sub_address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cdd8a8df49d333ff838b3070783777e18f66d40f297e3cc0167fe6f613f9ada(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BasicIpSetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd356fcbd8f151cfcb1708e66daed06491202954bc49abf7dd12e826f0fa6117(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4fc86f7c345d74ed730b647ef5f2e22914e481ffad9e1d5a18052d00dda03ed(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19af03377aa5a5c792e2e828cfae6ec87ba72a0ffbf09970189f18750d0a9c47(
    value: BasicIpSetProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a347c306d823fb27765bd283d848c7fec35d753b3584ff6686389f0353d1d887(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6102d62af7e6dd73eab30ea2c1bc73d9ab5c64f425b26be9d1e4e524158f1b2(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accelerate_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f16770fb062838e3847f691dd05637f56ed8ae1ca767eb348d2e1b55e656eb46(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EndpointGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d02d0fc734a732a1d4e4002dbcf6bca62db1f0ef349733e9ed3f6431e7d380b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbd93ba1c36482298ef9d77af426f1f8a80035169772b76457be8e1bc06b05a0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1566150d22dd7e633c9372a8bc94a2c2b89af951f47e1d0be9952161c90e0d34(
    value: EndpointGroupProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d55d05fb305b4011b9786d55b7e8e69a6a1c6f60851120b67826ae87c82cdb4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6dd0b3daf8df8a641c9775042b7f404f0d958cf5e8bb07fc98341df4ae51582(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_configurations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpointGroup.EndpointConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    endpoint_group_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_request_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_interval_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threshold_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    traffic_percentage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__632282250113cd8ca829af4508c56a7b55c30854114f6804bac20d3dab56627b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EndpointGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77d9a7c9f2a4179ffbbceb1fa4e0bca990e03cb2a5bc3a2ce2fde6858abb6469(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03cb3a82d2334a4b20efdd62ee46c4afb80b1405607bd370978086008b7d3c8f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e0c24e0821375bf2e0b94306eaa33cebff162f9a8d742bd568dd2695ab93143(
    value: EndpointGroupsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e45d399c2a62f5d9d754d2651bf1c7c6806cf90e3e82063664b068c555a556e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c980e390fff13bdc282f121c239e492bfbd656fec7e5cc392aba2f1180b0672(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_group_configurations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpointGroups.EndpointGroupConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6cc67c01c90652e25829f8e6126d2f38338147bdb9e638828ad285ca3e4beab9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[IpSetsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__722ec0d010e66edabc20916706a10de2f0d805727a10aa1d72b0d582cda0f14d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bda7299cda5016c118226e57e6967195bfd26aa7e9dfa3614e8e7933a928a7b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3f0ec2dd8f919355eedb1573ea66d81ae6f97a8cd5c48274eb2504fe2210a3d(
    value: IpSetsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfef2a7d709e3942fbea1023771d42409aaaa55c6df010e289cbd983d9b2c9f2(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0aea0a831a4e6cba7c9a9d090f052435d429a7e1e9c8cf59695c510c7508fe7b(
    *,
    accelerate_region: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIpSets.AccelerateRegionProperty, typing.Dict[builtins.str, typing.Any]]]]],
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d976a520f6f5451faaa6e106d6359d93c03a0570f386ebb8b0b740b9177efd13(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ListenerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9d0bcd177cf9a5e6160716d55e504e11dbf9c9ef33befd5f869953a015fdd6d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__852a6f87912eddbee71d06c9c109ab20fb0be38c0d9322e0e6196dc52041d7a5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4d8e96969ea133927eca4de8520cfc76b4572b524c4c67de1bf15845e60adb6(
    value: ListenerProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a81a831334a71bd4081b5e8836d73b93d94a6eef8f9de8ea24d2ad8e2528d8be(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1b7428a22d07ad433d19b1517d5b183858a3389eeba8611be67e10641620d93(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port_ranges: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.PortRangesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.CertificatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    client_affinity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_protocol: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.XForwardedForConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9da71c3c7ff1434c935555b4c1a256dc950188977d99316d95e52876886b5854(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAcceleratorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b50cb4f4a66688e84cea6177c9976f1ee7d717cae47780ed47ff3d6e127ca1d5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61ea736bcc54adb3675081759ae125d73d99d19ac7a8c6180e4fef61426eda87(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08be26c263ed9a9218978b735c3749987041d2363ebd69d7044fa6e96bb638c2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d5abafcf01ebb84fee2f1828e1e6227c893e3e00f575f241fc0fff761502843(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3740a8dc0cd3f992c7ad345ec61737b6831c7c39d7d5afe848ba3c5f8b3efcaa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__574df838d76d623639de1729efad49397a8ed97528fd51f90cc1313b7b332d06(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddac876d76b1a0b7dfa944dcae05bb8f30a9f9d3d96410f6d1b63fa700e75818(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__970f46e87df8c3c9eab11cbc9b6469522aa96d7fcc5da8cdd39becdefd933d8c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fec31e17c3f8676bb143d0f0afadfbc64dc3993a3de0691bd10c21bac0c834c5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f60abce1f67dc75c8375307059be5cf49dc4b159e09b5931f488aaebc624ac6(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccelerator.IpSetConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eea9e1aa40503a7a34e90a265dfb89ddf50d94b0265e500c2f8474add21251ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ac53aa34568e55b68b8212585adc96df80699dcd5b1ce436d4507486df83942(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f55e1d1409b9b7bd72bc04e007bbd2999b8e075402d921b693f0d2cc9e0a6b41(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a5bd74a32dcbfb19d9e43ace6d0403e263bf586e932b5f4273cfb5257178cb4(
    *,
    access_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9f9ab91d831078b0de5da8ccd6c93def3fccea06bd3684c63a1a3c821f6c8bd(
    *,
    accelerator_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_cross_border: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_set_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccelerator.IpSetConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e450508268547951d46dbe25dc65325ce64267dd3f90b36ed82ebbf865878efa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9e9746fa8df6aeda18505667a6e9e98192fbd520f164dfb7ac2086c6ae72f4b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63d3b76fa76249c74f6511ef3788fe9dbdfbaa6e428fa52edf65d0a1e40b5a6a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d44b233fd648d9c271b2b0a384d47b735a6066c4614452c27be61564933ab27(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a168d04adf46d09bc36794b77edaa5a3c0808e1d111c3d5a9462cc6160dcd53a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAcl.AclEntriesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ab5c75824d48ac5803594e3144f421298782d5526e9ff6ea7672973c6d431f9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44fe847cd41dda33db4d583af11592522ae4dde8308a9393a42314608ae14d58(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab99b2e1a89400872e00fb4908bf040b0c848d433ccd45da1edd1957f3211ee2(
    value: typing.Optional[typing.List[RosAcl.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__345b4b9b622413dbacb270716a70741e52d9c7dc6eb0ccdbc1714ce7376a2e95(
    *,
    entry: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    entry_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e143a7d8634f8ec0b42a065b5106a28d555d3dedc5ab89bd9e24d9b81e36dc9c(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a4c1664f4a0e9ef9bc496e8f693e9b2eac4a90307a2c25609343e6c8e6788b5(
    *,
    address_ip_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_entries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAcl.AclEntriesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosAcl.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf14bdd7898df274e5049675c713a7edde9f8408ba6765ebf048c50c61bf364e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAclsListenerAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f72e58ed6849650f1d869e9b24f90a6db78940fa5652ac841dae831e5ed6350a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7afb4cafce7d05f7ad425356ced12fe062af02f2b531e0c3375f1cab9161dbd(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54ed7f483391ebb01a89a87f8d3aa2586e6461d4df4cc5d776b084140da3081d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8d12ef35f909304da5e6b440f8a6c3d3765f716e7435f68a77cc5559ed0bf2e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3769d7b9fee642aef5c6e78f2afe4cb9acfd2f1c4de8360b34504a584da13d0e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e572a292be2447694b2b6ce513ac65597c3590ba4dd97a70a76aec41a21a5a30(
    *,
    acl_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    acl_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f209869d64f777ecb4e64aa08344aca584b2245187217b6f509c0b15eccc20ef(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApplicationMonitorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef8331605130be49309712693fe7bea03f013f356077d654e05b3e5fa62cafa2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae98e66e3467a0c1d9c1619671a6d849de3e4112d2fb79eecf49103a9bb5ed33(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f329c3e87c3d3fbdb96ba2a9bb5e6a19d1ad3cb0db7ceb5007b46ee28d50045(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f2f721a75f0e5cb1b71147372db744a7dcaa423d426691670b3265836033625(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83d4410e6ebe4b4a1c05440c4211488e61f9f8a36b1c1012fa77bbd0e695e29f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14eb00238f5b1c3fa67a7579d31d2d8cfc5d72e67246d738665cb940266a7c9b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b51e61c9a423d7f477b1eda4ce5b2e1c8b09914f97c159ffd530330dac0fa445(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a052544db2a9a7b774120552a24fc3cccabf42a6e0ace3bdeb58f615085c39c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9428148bc151848947c3afc2ecef3b027aa21646049eb7a275af64c48740e82f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df05d9859e7da013811370b954046da240a147315707718ed5ce384a84a8b39b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2ef52035849fe190cef610ebd34c5c030277fa85c9f871b6db47c5689c8d0b4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5914233fb623131666049b6a2fa594ca18f4786102417a7741a3ff4b8eda7c67(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    detect_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    detect_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    detect_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1002224b286b700055244d7c20e2932d0c3555f331426ee4df81721f58c0a099(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBandwidthPackageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a915e73d5714c3d21ead9567516d986adab1eb29d64d5ea7cae65c0d28eb133(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ddb04584eeae08f6bf2efbff6efa22eeb5a8ea3fbe3dd0f56be0ee125cb0605(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bedc42fb07b11fce2bdf21088b072e8aa5ea60ca7e7a0320ca2864774751766c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9bae102f2a4921b5b5164b50ad3bdb284ccc7e920d8e1442a2b3692919878e1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5bba2867277913cf747faf52e8eacecacf8464f83f210fccf98f42973b29040(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1463122f9a0ad1d9743b83d70631fc3cf13b6fb0199f03f37e3e45a91bf219a0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7776e449d77a3947c479e6a5c430c16d96202a800e53747490840478fd40600c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49d1b36d4cd4281db91a7c6a000c537d43238e0484d4bbb52798c36968ca564f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__742e04ba280d1a705c56556cbd75a6fd83dff2973b90a300ed86836b1bf250aa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b1176e012a29440c36054bc9aef47dfac2cc5dbe417b979e0b37e86a8a6bc9f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe376949fd5f4763d4d1888987c411d4af3ac09cf13c429fad1a37f4c05024e2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bac30d79f3ef313d262cc10f3873715fe22a611aad55a8eff35450bc44525b15(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72f7ee36c643526613e936eb19c9e6628c2c58b792b3bee243a7e239b3c1a90c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc3d202dc82354b05552c1fbfb367da8a5e6bb2fa660e6d8534fbfb6681ac98e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb5a7529932daea0b2b19c1cac929ac8b0f54d2ca0979c53542d1c75424c485f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBandwidthPackageAcceleratorAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b54df1cb1fdac3b67d3ce04cc81a47d81d2fd42848a55966b1ccd5f76800fc92(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36b3069fec4bec7b8e9ed4b955a5ad816e5401bdeb951b3d889ebd919be0e457(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbef10fd7bbe6ab68454c326976d3651bf248f9963491694324fe9c0041abf88(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe949d1e17b7e4f359baaf168e4281f6246e603657f2fcf29f3468ea9f288148(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7c6b7967b4dc260e0743ca76942d670f443832f2af4b2a78e29afc17984cc18(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bandwidth_package_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__215cb707af454baac11cf0925f8506f9d15a57aae3bc9792d2c5ccf5b891e3cf(
    *,
    bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cbn_geographic_region_id_a: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cbn_geographic_region_id_b: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ratio: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__012bfc56cf4c00ac58543191eaf0804611034d01956ed365c69549ea963b5b3c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBasicAccelerateIpProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e95ab74807f0f90e22728f2ab3beb2851e47c0b2c734020eb7d0d7df53dc58b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__095084e6c2234eb980fba93c2307ff96702c57d057e5292df173ef920c4702a7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5a682c2b233c1304a41552e32fef65003bb81ae0d9b41602be7f67a3ce22d83(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc8856845687cb058a914738fbb40658f7f80a85ba20961975d1ba729b53eb79(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28377cc7d375ea94b1a1fdbb1979c245d381b1a42327ac199628dbe9661e6b2c(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ip_set_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6835809cef1c64bcb56f9fb098dd8cd1385ab5cc11aa0f5ea60d2405fe0e5dcd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBasicAcceleratorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2b5530f19a0eb5d7f808007efa15e93cca56836d86718e0f4d5b4da6967dbe9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8032562d9f7f03dfa8a0ef258663be2527865b93dc833e660352dfe8642f7779(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__037de779c25bedd6c212dbaf3939c4f3fb28641af346efebc0962956e5eaa278(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b05b74626ec812be688ee697041d017d401570457ea2a932eba578e9c5c4adc(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d6dc4292103fb658d16fbdf64460bd9d634605f319a9625c70bc8b12b03c299(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae866d46b2f9098aca8f7cc4ab73bf22dde2ac63236f4cdc92f061ef45eee0e0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e128b3cad5e190113fef92a0a68237a64cddb1dcf3cbf47d531ddf884d691990(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__415c2e4481c50b46ef786042dabe823ee4cc3b0ea72ccd4ee9177162c643d765(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__209d21c1b09528b409913a977ba88b4d022d0dde01508580b9086f2dc0c2db35(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6b9b2b0c1d0c7077b540e4be7bc180dd90104c3bd5d47ba1884136e77f2e201(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d21634a3c29399a924be4ecc63426b28dc76e57baf9b65a33c2a5bc8aea16566(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9ae19d3de491e1c855224cf0e5ac02fac7a8f197c17fbe12b0b1f339f401592(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31a79c769954e8f2c6ee105baa14b131d00e6629b74114c7d852a8e719ac9e98(
    value: typing.Optional[typing.List[RosBasicAccelerator.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52680d0a62c4d0e44273e0b4cb45b6e535fabab251379bf387e2b7d9699e9075(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5706929d11aca401e3f4127edf6e86d776840d4264edf87c55a99b9a5b39389d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBasicAcceleratorIpEndpointRelationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69e71e867928c9276a1389b606a74c6ccbca311a26f749e297b67d9c505f0d0b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9eb4085a667b861259c8e993f90f93da1c83aaa64ce28a906d9fefa8ad5b774c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d51b1d6c24468d6ead021a996ce3cbff6c3fdc95c843d6558bbd103ec7760ba0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b8d8544c14a7574507bd556e977918306a486060314e17d5f8efba377ddc1c1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03e8a47ee8f0343d79e48cef2135cadc3a81937f9ce7939ac22a88d41f067a7f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__876af8feecaf26d56088b2ffdf3480eb61e63151bbb588d90befce87506fac01(
    *,
    accelerate_ip_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c6fa538b121d9456bb126450d9f6473c8dbb459500b0413e63feb22013f2e71(
    *,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_use_coupon: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_billing_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    promotion_option_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosBasicAccelerator.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dce2ed7565d64fb28a5c52bc13718c136d84e9fa0a9282ef88c4ff2c9547101a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBasicEndpointProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5422e67b1966f0222ea5ca65ef806fa850d16e5303517e87d8902c4d34ef9ac0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1d2be50d289729506fc1c2e4f49e9753a891d62db9cbb3b0290f858852c7bb6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbff5cedb164ffe88c990194d061ce83a428c4281ef42bebace612dc4c09da7a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51a3fb976895652d1eccfbcd6101740dc57c42ba8ecff5bcad3b5c197c6e900f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__635ee5928db1509789163e3ca7c70e0762ce9117eb459ff258f0b7990ebc3e23(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cd4e4516d295641af4efa5738415c988b13d699a0b733172249037271432799(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17ba22fa0b15a51f3ff4fbe19413602ae7126830e60ebf0b2b55523236b7cf88(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__095062e5690b0d911a0798bbc86ab7d2972e608ef1008e0e1044229c01cac3e0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3ee641c1b767e96bfe18f72f5fd95c82e196a4d03106463c55510740b570520(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab850e0f67fc2543f5ffc04d3a5b4eb21b7df3769c066f1fd1a060c4d24cc1e2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cdf18eff9eec79d285ce5c584ddc0d14bee5c43d2e5fcbcf2fb099d35d1f026(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBasicEndpointGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd34f80914d98efbefbc7dd9761935d47bf7bcfa04729f4f2d88611830ae5811(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7a642a4de1eebc66d097a97d5a9440bacee965eeea11d1651387a28b6581a7a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__865c9edd0a69c67d83705626e963bdf71ce457db6f5218a229dd7899b4db926c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7bd6bbe6e765d8e17fc1e3fecfcf049dd230feccb1fe18651d8af98450d83a9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edb0176edcacfc22f445e0907e80f416ab621675e188fd4e6844c458c315ac8e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67fe8014b96b5d8c7ceae6e4143570eb0881a28690d64f4e26698fdcc8bda7ae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28167747214da1270febe0aadc7fce8a14ed998fd7edef310b420042621c1c86(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93ecd6faa52ab002af5e5cea3e3b3f15faa5748ac668ca82289f7c99d81a1cd7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af54c58c4992a9ad3323806c9fdca7e312c562a6b33851dfcf7277571f9ee75c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b972a998fa9473f9e56adfe825cb3c3c7e2bce3c84d4608b3c511379ed57c40(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_group_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_sub_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cae03970969fa502a8e54263f484c2884b077359c16d0f11de1d4de429ee81b8(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_sub_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_sub_address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48b11886f7c22aaf5f039df1bbebd8cdb13fff76c4c2ca76c07ecfb7e41bc9fc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBasicIpSetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7eb12169d010ac105e0eae44f746c4c1f9e46237c667e5b3726036937c30d3b5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f65a913ed543b37ef4dd62a25ffacdedf01c5f2a21dfc292eff8c0caafb2356a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8df12e5ed37a667270d4b66503a3738d1ac79370f79bcf23e64c7d46977073f1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb9b094878abb366a8d61f30f18593301edc90804f8a24cb4be316e4bc6f4a3b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d527e55866e2c73fca10c56f60162aef2c7d1a8a132f0aae7c86c0749c4ab410(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5d39f1750c033369a590e88a3b906c6da5b945c46499ed6d2e7e9c681ffba20(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be3ba85f59eebad87973a1f26eef2af747d4e001014b2aadda2fc58123686818(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accelerate_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__357cd98dbfa6cf27efd937132ab5c4d4b3efeb4b34346fdcdcbbc8e3422c6c5a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEndpointGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f9fcf9de40f72fc5a9981eb68915003e5872238a85a488a74e975f48d39b8f0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e89fbc559071ab02d89916f0135b55936f8a23b216cdfdc27fa4fa01a3f97fd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70780b05fb72a91cb54431db61bd21451d94691c2f7c55d6ce09da1d0d98392a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adb994431c79c1afc83e804e0a7b69354ddc526b15ce8e9597fb674461877bbc(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEndpointGroup.EndpointConfigurationsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6788497b77dc75e1db482e395a5888e1c32100a7ef61a3b6719a6c423de8c0f2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0c61123a5c464d5dac4d2280195d7cf6c44a8f7ce056c1677b74ecc2baac7d4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__358ee99c2230c7dff2db6c4717528599db8ceb1ddc66ae4b5f2b9d9a0bc437b1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67ca4be643cef884c14fce7cd20970a2319195851a2e42938154506d85a3a0b5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aaae747e2be09c88089aaac20eaace5a2fac333d0df8447493a9de1421e09e77(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa6eb47040b99c29a7ff2e47b057b86768ea5ef4cff3f1d23cdf8ad3e566a634(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0237b4a44bccac0b5344ac13ab6e24ba642fe63655ce6beb32a9f66e238cb78b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96124dd93e20f9ee9027876a62a343cc6ba129ea839b3352298f3a8d95abeafc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a07effda0460ca5ba53ac3881024c6d6064fcc0f9d3c5545764ac51fcaa201ff(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca7cd534957ad80c6938d271f98d92f3911238902990c664abab9841de3e36a8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e43bce23212ca72461c253eabe780183d4eb740c8b566c89df19a2fb9b077ae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc64e3c205662338a40a8545bb9f582f266afbe909d09acb3e808140239a55d4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfb51e1e1c28639bc8d7489c43b99abfc2af3b47c334e19f9d5a87dfe550e223(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c292e64b5998316e4e45eddeaf68c2c551d67079c31c1d3f94b1196c1889be62(
    *,
    endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    enable_client_ip_preservation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_proxy_protocol: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af79bc8e337c18010136a13c57435ff646b7e1759ab4c27da13c4b60836a6399(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_configurations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpointGroup.EndpointConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    endpoint_group_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_request_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_interval_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    threshold_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    traffic_percentage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__620796d3887611e44eabd42e74447dc8f40283cc087ed7f9b49dc5f2fcb59f68(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEndpointGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2e29f281773022bb590b0cb000c81233b52d73aa14f9954181522553f905299(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00ccd2ae0dad93ea4d3dd5e9f94cd3b349bad56bbe7f0954f573fd30a51b5957(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dd6dc65fca61062f81030f505032d1413f4a593d5ed0f0b078423e7849017cc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4f44c82f3ee4c05310646fc5fd4e9256fb38368b459434228574f72eb5aa024(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEndpointGroups.EndpointGroupConfigurationsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4007925548bb11df0d56dbd70798f9d44ddf3be037c26b90f4ab6a9baf086196(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4deaf7d04166d1dba2d1184677c3fcfd771a2c57cbf63597943fbcc74d0ab4d(
    *,
    endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    sub_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdd496e96c74ba214a4d7b7116f9ee353617745c8ddb1aab244978bf900e16f7(
    *,
    endpoint_group_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_client_ip_preservation_proxy_protocol: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_client_ip_preservation_toa: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_configurations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpointGroups.EndpointConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    endpoint_group_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_request_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_interval_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port_overrides: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpointGroups.PortOverridesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosEndpointGroups.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    threshold_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    traffic_percentage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed392c0c9a4f3695b2bd422a86051c75e3aeff41fdb3648375dd2067ae99c6de(
    *,
    endpoint_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21a3da2205efb182b3fce3194e6c9133fac46120efd36ecb54795b10d4a78b90(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__518590e45cc4c334ebac920b1d28570ddc4a7e5d135c25a7909b22bbdb684f13(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint_group_configurations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpointGroups.EndpointGroupConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    listener_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cff2a7aa26db9970ab855483021f2ced01210f39aa9cfa9a4dc1c304d3499808(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosIpSetsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d014d0fdcb07e984244ba2675e2a6aec914bee6d2bc8bb289269bd451b93be2d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f9e5bd9f4018c7b301d2afd0ca83e3f73635e1dbdf6f67e834368866fae02f2(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIpSets.AccelerateRegionProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14f535cbe1e14a6fc38c7b85b2550d3616f75aa38a573b303e2874f5c1c5f70a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__359f433234735182694bf1dda23c61b8bc2bfa43158b8a846dfa303b25165dec(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01efd5e87655f73a165d208d6028a03669dfc15a71f2ccfca37b7f29d0eea75f(
    *,
    accelerate_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad95a250de18985f17b40276b9b8e483eea1e28995ea2c235c2492fcc24935ab(
    *,
    accelerate_region: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIpSets.AccelerateRegionProperty, typing.Dict[builtins.str, typing.Any]]]]],
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d56a81b7393cae3bdb9c8a775278554e360266b04145a590ab36e9803cb29278(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosListenerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__797643aeac0ef8aaccf99718c101300f29a758df8cc400586baff2f32e8612ff(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5f02a87ba3af91f3cff315a2b878148b019f5a0e1397d00a78aec79159b3e38(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38f51c6cfe59690b841898f059892db965ebf985dfff645475e0614e8cc101ac(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80eda6deea1ec86b8e87b7784846874581b12d41942918778ea1a3143cdd79e2(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.PortRangesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8b110ea837270107b1f6d171a9b865f12bffe47905c7a2e6aebc7555c7b1bbe(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86df693b41e681c6dd697e41f3d37eec48b108b731f5fa9018cbb6dcb44a5992(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.CertificatesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f0869cc3da9bd6b056fa28cd04faf71849d535fe36f648805f6f34673f69396(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61f1300e4412fc257a050842923ff75b61dc75f60fb3b84084acc76b5e0e1846(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0209ad6f3f07876633854b0105847dd8c61884565549258b558c1b02e4a1cca0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4c7d449dad714500150df9a941875b22479e573fb92237a889065d422124173(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c015e82bf3c5873bcb4e8e736d1dc41d31cde4c5d7685b73804203172c61b2b5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ed15fc7d67dfb926c20081a187b122c9aa459a14ed2616c10fdcfc36c8c2459(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.XForwardedForConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7916bc72e42bbe3a490fccf483c77e2591cbf4b8178d240df686d4e58b3c2425(
    *,
    id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3518395080d4430f8f5c4b8ea092711bf07bb58c2dfd30feddba32cfdda7a998(
    *,
    from_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    to_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b00024420a8d2a6b54dd46b3be269ba3896954a3310f11a796ac17bd85d22563(
    *,
    x_forwarded_for_ga_ap_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_ga_id_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_proto_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_real_ip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42c37813294ea2d20940d6e46d39d502033589e2b651420b8713b15b36f5f464(
    *,
    accelerator_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port_ranges: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.PortRangesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    certificates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.CertificatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    client_affinity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_protocol: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.XForwardedForConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
