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

from ._jsii import *

import ros_cdk_core


class Accelerator(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.Accelerator",
):
    '''A ROS resource type:  ``ALIYUN::GA::Accelerator``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AcceleratorProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GA::Accelerator``.

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
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AcceleratorId: The ID of the GA instance to query.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAcceleratorName")
    def attr_accelerator_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute AcceleratorName: The Name of the GA instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAcceleratorName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> ros_cdk_core.IResolvable:
        '''Attribute AutoPay: The AutoPay of the GA instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoPay"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> ros_cdk_core.IResolvable:
        '''Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoUseCoupon"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDuration")
    def attr_duration(self) -> ros_cdk_core.IResolvable:
        '''Attribute Duration: The Duration of the GA instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDuration"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: The OrderId of the GA instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PaymentType: The Payment Typethe GA instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPricingCycle")
    def attr_pricing_cycle(self) -> ros_cdk_core.IResolvable:
        '''Attribute PricingCycle: The PricingCycle of the GA instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPricingCycle"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> ros_cdk_core.IResolvable:
        '''Attribute Spec: The instance type of the GA instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSpec"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.AcceleratorProps",
    jsii_struct_bases=[],
    name_mapping={
        "duration": "duration",
        "pricing_cycle": "pricingCycle",
        "spec": "spec",
        "accelerator_name": "acceleratorName",
        "auto_pay": "autoPay",
        "auto_use_coupon": "autoUseCoupon",
    },
)
class AcceleratorProps:
    def __init__(
        self,
        *,
        duration: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pricing_cycle: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        accelerator_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_use_coupon: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::Accelerator``.

        :param duration: Property duration: The Duration of the GA instance.
        :param pricing_cycle: Property pricingCycle: The PricingCycle of the GA instance.
        :param spec: Property spec: The instance type of the GA instance.
        :param accelerator_name: Property acceleratorName: The Name of the GA instance.
        :param auto_pay: Property autoPay: The AutoPay of the GA instance.
        :param auto_use_coupon: Property autoUseCoupon: The AutoUseCoupon of the GA instance.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "duration": duration,
            "pricing_cycle": pricing_cycle,
            "spec": spec,
        }
        if accelerator_name is not None:
            self._values["accelerator_name"] = accelerator_name
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_use_coupon is not None:
            self._values["auto_use_coupon"] = auto_use_coupon

    @builtins.property
    def duration(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property duration: The Duration of the GA instance.'''
        result = self._values.get("duration")
        assert result is not None, "Required property 'duration' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pricing_cycle(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pricingCycle: The PricingCycle of the GA instance.'''
        result = self._values.get("pricing_cycle")
        assert result is not None, "Required property 'pricing_cycle' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property spec: The instance type of the GA instance.'''
        result = self._values.get("spec")
        assert result is not None, "Required property 'spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def accelerator_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property acceleratorName: The Name of the GA instance.'''
        result = self._values.get("accelerator_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property autoPay: The AutoPay of the GA instance.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property autoUseCoupon: The AutoUseCoupon of the GA instance.'''
        result = self._values.get("auto_use_coupon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AcceleratorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BandwidthPackage(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BandwidthPackage",
):
    '''A ROS resource type:  ``ALIYUN::GA::BandwidthPackage``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BandwidthPackageProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GA::BandwidthPackage``.

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
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> ros_cdk_core.IResolvable:
        '''Attribute AutoPay: The AutoPay of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoPay"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> ros_cdk_core.IResolvable:
        '''Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoUseCoupon"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute Bandwidth: The bandwidth provided by the bandwidth plan.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute BandwidthPackageId: The Resource ID of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidthPackageName")
    def attr_bandwidth_package_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute BandwidthPackageName: The Resource name of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidthPackageName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidthType")
    def attr_bandwidth_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidthType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBillingType")
    def attr_billing_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute BillingType: The BillingType of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBillingType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCbnGeographicRegionIdA")
    def attr_cbn_geographic_region_id_a(self) -> ros_cdk_core.IResolvable:
        '''Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdA"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCbnGeographicRegionIdB")
    def attr_cbn_geographic_region_id_b(self) -> ros_cdk_core.IResolvable:
        '''Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdB"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ChargeType: The ChargeType of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PaymentType: The Payment Type of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRatio")
    def attr_ratio(self) -> ros_cdk_core.IResolvable:
        '''Attribute Ratio: The Ratio of the bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute Type: The type of the bandwidth plan.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrType"))


class BandwidthPackageAcceleratorAddition(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BandwidthPackageAcceleratorAddition",
):
    '''A ROS resource type:  ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BandwidthPackageAcceleratorAdditionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``.

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
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AcceleratorId: The ID of the Global Accelerator instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute BandwidthPackageId: The ID of the bandwidth package which is associated.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidthPackageId"))


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
        accelerator_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        bandwidth_package_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``.

        :param accelerator_id: Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth plan.
        :param bandwidth_package_id: Property bandwidthPackageId: The ID of the bandwidth package to associate.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "bandwidth_package_id": bandwidth_package_id,
        }

    @builtins.property
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth plan.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bandwidthPackageId: The ID of the bandwidth package to associate.'''
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_use_coupon: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        bandwidth_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        billing_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cbn_geographic_region_id_a: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cbn_geographic_region_id_b: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ratio: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::BandwidthPackage``.

        :param bandwidth: Property bandwidth: The bandwidth provided by the bandwidth plan.
        :param type: Property type: The type of the bandwidth plan.
        :param auto_pay: Property autoPay: The AutoPay of the bandwidth.
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property bandwidth: The bandwidth provided by the bandwidth plan.'''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property type: The type of the bandwidth plan.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property autoPay: The AutoPay of the bandwidth.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.'''
        result = self._values.get("auto_use_coupon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property bandwidthType: the bandwidth BandwidthType of the bandwidth.'''
        result = self._values.get("bandwidth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property billingType: The BillingType of the bandwidth.'''
        result = self._values.get("billing_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cbn_geographic_region_id_a(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.'''
        result = self._values.get("cbn_geographic_region_id_a")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cbn_geographic_region_id_b(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.'''
        result = self._values.get("cbn_geographic_region_id_b")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property chargeType: The ChargeType of the bandwidth.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property duration:.'''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle:.'''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ratio(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property ratio: The Ratio of the bandwidth.'''
        result = self._values.get("ratio")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EndpointGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.EndpointGroup",
):
    '''A ROS resource type:  ``ALIYUN::GA::EndpointGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "EndpointGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GA::EndpointGroup``.

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
    @jsii.member(jsii_name="attrEndpointGroupId")
    def attr_endpoint_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute EndpointGroupId: The ID of the endpoint group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.EndpointGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "endpoint_configurations": "endpointConfigurations",
        "endpoint_group_region": "endpointGroupRegion",
        "listener_id": "listenerId",
        "description": "description",
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
        accelerator_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        endpoint_configurations: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]],
        endpoint_group_region: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        listener_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_interval_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        health_check_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        health_check_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        threshold_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        traffic_percentage: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::EndpointGroup``.

        :param accelerator_id: Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        :param endpoint_configurations: Property endpointConfigurations:.
        :param endpoint_group_region: Property endpointGroupRegion: The region ID of the endpoint group.
        :param listener_id: Property listenerId: The ID of the listener to be associated with the endpoint group.
        :param description: Property description: The description of the endpoint group.
        :param health_check_interval_seconds: Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        :param health_check_path: Property healthCheckPath: The path set as the destination on the targets for health checks.
        :param health_check_port: Property healthCheckPort: The port that is used to connect with the targets for health checks.
        :param health_check_protocol: Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks. tcp: TCP protocol http: HTTP protocol https: HTTPS protocol
        :param name: Property name: The name of the endpoint group.
        :param threshold_count: Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
        :param traffic_percentage: Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "endpoint_configurations": endpoint_configurations,
            "endpoint_group_region": endpoint_group_region,
            "listener_id": listener_id,
        }
        if description is not None:
            self._values["description"] = description
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
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def endpoint_configurations(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]]:
        '''Property endpointConfigurations:.'''
        result = self._values.get("endpoint_configurations")
        assert result is not None, "Required property 'endpoint_configurations' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]], result)

    @builtins.property
    def endpoint_group_region(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property endpointGroupRegion: The region ID of the endpoint group.'''
        result = self._values.get("endpoint_group_region")
        assert result is not None, "Required property 'endpoint_group_region' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def listener_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property listenerId: The ID of the listener to be associated with the endpoint group.'''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the endpoint group.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_interval_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property healthCheckIntervalSeconds: The interval between two consecutive health checks.

        Unit: seconds.
        '''
        result = self._values.get("health_check_interval_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property healthCheckPath: The path set as the destination on the targets for health checks.'''
        result = self._values.get("health_check_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property healthCheckPort: The port that is used to connect with the targets for health checks.'''
        result = self._values.get("health_check_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.

        tcp: TCP protocol
        http: HTTP protocol
        https: HTTPS protocol
        '''
        result = self._values.get("health_check_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the endpoint group.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def threshold_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.'''
        result = self._values.get("threshold_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def traffic_percentage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with multiple endpoint groups.'''
        result = self._values.get("traffic_percentage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EndpointGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class IpSets(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.IpSets",
):
    '''A ROS resource type:  ``ALIYUN::GA::IpSets``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "IpSetsProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GA::IpSets``.

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
    @jsii.member(jsii_name="attrAccelerateRegionIds")
    def attr_accelerate_region_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccelerateRegionIds: The ID list of the accelerate region.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccelerateRegionIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpSetIds")
    def attr_ip_set_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute IpSetIds: The ID list of the ip set.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpSetIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpVersions")
    def attr_ip_versions(self) -> ros_cdk_core.IResolvable:
        '''Attribute IpVersions: The IP version list of the accelerate region.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpVersions"))


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
        accelerate_region: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosIpSets.AccelerateRegionProperty"]]],
        accelerator_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::IpSets``.

        :param accelerate_region: Property accelerateRegion:.
        :param accelerator_id: Property acceleratorId: The ID of the GA instance.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "accelerate_region": accelerate_region,
            "accelerator_id": accelerator_id,
        }

    @builtins.property
    def accelerate_region(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIpSets.AccelerateRegionProperty"]]]:
        '''Property accelerateRegion:.'''
        result = self._values.get("accelerate_region")
        assert result is not None, "Required property 'accelerate_region' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIpSets.AccelerateRegionProperty"]]], result)

    @builtins.property
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property acceleratorId: The ID of the GA instance.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IpSetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Listener(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.Listener",
):
    '''A ROS resource type:  ``ALIYUN::GA::Listener``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ListenerProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::GA::Listener``.

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
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ListenerId: The ID of the listener.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.ListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "port_ranges": "portRanges",
        "protocol": "protocol",
        "client_affinity": "clientAffinity",
        "description": "description",
        "name": "name",
    },
)
class ListenerProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        port_ranges: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangesProperty"]]],
        protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        client_affinity: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::Listener``.

        :param accelerator_id: Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        :param port_ranges: Property portRanges:.
        :param protocol: Property protocol: The network transmission protocol of the listener. Valid values: tcp: TCP protocol udp: UDP protocol
        :param client_affinity: Property clientAffinity: Specifies whether to enable client affinity for the listener. If you do not specify the default value in the parameter, client affinity is disabled. When client affinity is disabled, the connections from a specific source (client) IP address are not always routed to the same endpoint. If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from a specific source (client) IP address are always routed to the same endpoint.
        :param description: Property description: The description of the listener.
        :param name: Property name: The name of the listener. The name must be 2 to 128 characters in length and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter or Chinese character.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "port_ranges": port_ranges,
            "protocol": protocol,
        }
        if client_affinity is not None:
            self._values["client_affinity"] = client_affinity
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.'''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def port_ranges(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangesProperty"]]]:
        '''Property portRanges:.'''
        result = self._values.get("port_ranges")
        assert result is not None, "Required property 'port_ranges' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangesProperty"]]], result)

    @builtins.property
    def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property protocol: The network transmission protocol of the listener.

        Valid values:
        tcp: TCP protocol
        udp: UDP protocol
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def client_affinity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property clientAffinity: Specifies whether to enable client affinity for the listener.

        If you do not specify the default value in the parameter, client affinity is disabled.
        When client affinity is disabled, the connections from a specific source (client)
        IP address are not always routed to the same endpoint.
        If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        a specific source (client) IP address are always routed to the same endpoint.
        '''
        result = self._values.get("client_affinity")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the listener.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the listener.

        The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        (_), and hyphens (-). It must start with a letter or Chinese character.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccelerator(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosAccelerator",
):
    '''A ROS template type:  ``ALIYUN::GA::Accelerator``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAcceleratorProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GA::Accelerator``.

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
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AcceleratorId: The ID of the GA instance to query.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAcceleratorName")
    def attr_accelerator_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AcceleratorName: The Name of the GA instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAcceleratorName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AutoPay: The AutoPay of the GA instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoPay"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AutoUseCoupon: The AutoUseCoupon of the GA instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoUseCoupon"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDuration")
    def attr_duration(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Duration: The Duration of the GA instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDuration"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: The OrderId of the GA instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PaymentType: The Payment Typethe GA instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPricingCycle")
    def attr_pricing_cycle(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PricingCycle: The PricingCycle of the GA instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPricingCycle"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Spec: The instance type of the GA instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSpec"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="duration")
    def duration(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: duration: The Duration of the GA instance
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pricingCycle: The PricingCycle of the GA instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="spec")
    def spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: spec: The instance type of the GA instance
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "spec"))

    @spec.setter
    def spec(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "spec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="acceleratorName")
    def accelerator_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: acceleratorName: The Name of the GA instance
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "acceleratorName"))

    @accelerator_name.setter
    def accelerator_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "acceleratorName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: The AutoPay of the GA instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoUseCoupon")
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoUseCoupon: The AutoUseCoupon of the GA instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "autoUseCoupon"))

    @auto_use_coupon.setter
    def auto_use_coupon(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoUseCoupon", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosAcceleratorProps",
    jsii_struct_bases=[],
    name_mapping={
        "duration": "duration",
        "pricing_cycle": "pricingCycle",
        "spec": "spec",
        "accelerator_name": "acceleratorName",
        "auto_pay": "autoPay",
        "auto_use_coupon": "autoUseCoupon",
    },
)
class RosAcceleratorProps:
    def __init__(
        self,
        *,
        duration: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pricing_cycle: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        accelerator_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_use_coupon: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::Accelerator``.

        :param duration: 
        :param pricing_cycle: 
        :param spec: 
        :param accelerator_name: 
        :param auto_pay: 
        :param auto_use_coupon: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "duration": duration,
            "pricing_cycle": pricing_cycle,
            "spec": spec,
        }
        if accelerator_name is not None:
            self._values["accelerator_name"] = accelerator_name
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_use_coupon is not None:
            self._values["auto_use_coupon"] = auto_use_coupon

    @builtins.property
    def duration(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: duration: The Duration of the GA instance
        '''
        result = self._values.get("duration")
        assert result is not None, "Required property 'duration' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pricing_cycle(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pricingCycle: The PricingCycle of the GA instance.
        '''
        result = self._values.get("pricing_cycle")
        assert result is not None, "Required property 'pricing_cycle' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: spec: The instance type of the GA instance
        '''
        result = self._values.get("spec")
        assert result is not None, "Required property 'spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def accelerator_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: acceleratorName: The Name of the GA instance
        '''
        result = self._values.get("accelerator_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: The AutoPay of the GA instance.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoUseCoupon: The AutoUseCoupon of the GA instance.
        '''
        result = self._values.get("auto_use_coupon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAcceleratorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBandwidthPackage(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBandwidthPackage",
):
    '''A ROS template type:  ``ALIYUN::GA::BandwidthPackage``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBandwidthPackageProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GA::BandwidthPackage``.

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
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AutoPay: The AutoPay of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoPay"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AutoUseCoupon: The AutoUseCoupon  of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoUseCoupon"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth provided by the bandwidth plan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BandwidthPackageId: The Resource ID of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidthPackageName")
    def attr_bandwidth_package_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BandwidthPackageName: The Resource name of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidthPackageName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidthType")
    def attr_bandwidth_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BandwidthType: the bandwidth BandwidthType of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidthType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBillingType")
    def attr_billing_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BillingType: The BillingType of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBillingType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCbnGeographicRegionIdA")
    def attr_cbn_geographic_region_id_a(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdA"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCbnGeographicRegionIdB")
    def attr_cbn_geographic_region_id_b(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCbnGeographicRegionIdB"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ChargeType: The ChargeType of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrChargeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PaymentType: The Payment Type of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRatio")
    def attr_ratio(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Ratio: The Ratio of the bandwidth
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Type: The type of the bandwidth plan
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth provided by the bandwidth plan.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: type: The type of the bandwidth plan
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "type", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: The AutoPay of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoUseCoupon")
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "autoUseCoupon"))

    @auto_use_coupon.setter
    def auto_use_coupon(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoUseCoupon", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidthType")
    def bandwidth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidthType: the bandwidth BandwidthType of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "bandwidthType"))

    @bandwidth_type.setter
    def bandwidth_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "bandwidthType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="billingType")
    def billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: billingType: The BillingType of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "billingType"))

    @billing_type.setter
    def billing_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "billingType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cbnGeographicRegionIdA")
    def cbn_geographic_region_id_a(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cbnGeographicRegionIdA"))

    @cbn_geographic_region_id_a.setter
    def cbn_geographic_region_id_a(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cbnGeographicRegionIdA", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cbnGeographicRegionIdB")
    def cbn_geographic_region_id_b(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cbnGeographicRegionIdB"))

    @cbn_geographic_region_id_b.setter
    def cbn_geographic_region_id_b(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cbnGeographicRegionIdB", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: chargeType: The ChargeType of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: duration:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ratio")
    def ratio(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: ratio: The Ratio of the bandwidth
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "ratio"))

    @ratio.setter
    def ratio(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ratio", value)


class RosBandwidthPackageAcceleratorAddition(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBandwidthPackageAcceleratorAddition",
):
    '''A ROS template type:  ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBandwidthPackageAcceleratorAdditionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``.

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
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AcceleratorId: The ID of the Global Accelerator instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAcceleratorId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BandwidthPackageId: The ID of the bandwidth package which is associated
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
        plan.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "acceleratorId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidthPackageId: The ID of the bandwidth package to associate.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bandwidthPackageId"))

    @bandwidth_package_id.setter
    def bandwidth_package_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bandwidthPackageId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
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
        accelerator_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        bandwidth_package_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``.

        :param accelerator_id: 
        :param bandwidth_package_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "bandwidth_package_id": bandwidth_package_id,
        }

    @builtins.property
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
        plan.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidthPackageId: The ID of the bandwidth package to associate.
        '''
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_use_coupon: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        bandwidth_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        billing_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cbn_geographic_region_id_a: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cbn_geographic_region_id_b: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ratio: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::BandwidthPackage``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth provided by the bandwidth plan.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: type: The type of the bandwidth plan
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: The AutoPay of the bandwidth
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_use_coupon(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        '''
        result = self._values.get("auto_use_coupon")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidthType: the bandwidth BandwidthType of the bandwidth
        '''
        result = self._values.get("bandwidth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def billing_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: billingType: The BillingType of the bandwidth
        '''
        result = self._values.get("billing_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cbn_geographic_region_id_a(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        '''
        result = self._values.get("cbn_geographic_region_id_a")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cbn_geographic_region_id_b(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        '''
        result = self._values.get("cbn_geographic_region_id_b")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: chargeType: The ChargeType of the bandwidth
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: duration:
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle:
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ratio(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: ratio: The Ratio of the bandwidth
        '''
        result = self._values.get("ratio")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEndpointGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroup",
):
    '''A ROS template type:  ``ALIYUN::GA::EndpointGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosEndpointGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GA::EndpointGroup``.

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
    @jsii.member(jsii_name="attrEndpointGroupId")
    def attr_endpoint_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EndpointGroupId: The ID of the endpoint group.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "acceleratorId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="endpointConfigurations")
    def endpoint_configurations(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]]:
        '''
        :Property: endpointConfigurations:
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]], jsii.get(self, "endpointConfigurations"))

    @endpoint_configurations.setter
    def endpoint_configurations(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]],
    ) -> None:
        jsii.set(self, "endpointConfigurations", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="endpointGroupRegion")
    def endpoint_group_region(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: endpointGroupRegion: The region ID of the endpoint group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "endpointGroupRegion"))

    @endpoint_group_region.setter
    def endpoint_group_region(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "endpointGroupRegion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="listenerId")
    def listener_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener to be associated with the endpoint group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "listenerId"))

    @listener_id.setter
    def listener_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "listenerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the endpoint group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckIntervalSeconds")
    def health_check_interval_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckIntervalSeconds"))

    @health_check_interval_seconds.setter
    def health_check_interval_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "healthCheckIntervalSeconds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckPath")
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckPath: The path set as the destination on the targets for health checks.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckPath"))

    @health_check_path.setter
    def health_check_path(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "healthCheckPath", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckPort")
    def health_check_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckPort: The port that is used to connect with the targets for health checks.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckPort"))

    @health_check_port.setter
    def health_check_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "healthCheckPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckProtocol")
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
        tcp: TCP protocol
        http: HTTP protocol
        https: HTTPS protocol
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckProtocol"))

    @health_check_protocol.setter
    def health_check_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "healthCheckProtocol", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name: The name of the endpoint group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="thresholdCount")
    def threshold_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "thresholdCount"))

    @threshold_count.setter
    def threshold_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "thresholdCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="trafficPercentage")
    def traffic_percentage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
        multiple endpoint groups.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "trafficPercentage"))

    @traffic_percentage.setter
    def traffic_percentage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "trafficPercentage", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty",
        jsii_struct_bases=[],
        name_mapping={"endpoint": "endpoint", "type": "type", "weight": "weight"},
    )
    class EndpointConfigurationsProperty:
        def __init__(
            self,
            *,
            endpoint: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            weight: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param endpoint: 
            :param type: 
            :param weight: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "endpoint": endpoint,
                "type": type,
                "weight": weight,
            }

        @builtins.property
        def endpoint(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: endpoint: The IP address or domain name of endpoint in the endpoint group.
            '''
            result = self._values.get("endpoint")
            assert result is not None, "Required property 'endpoint' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            type: The type of endpoint in the endpoint group. Valid values:
            EIP: eip address
            PublicIp: public IP address
            Ip: custom IP address
            Domain: custom domain name
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def weight(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: weight: The weight of endpoint N in the endpoint group.
            '''
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

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
        accelerator_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        endpoint_configurations: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosEndpointGroup.EndpointConfigurationsProperty]]],
        endpoint_group_region: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        listener_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_interval_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        health_check_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        health_check_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        threshold_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        traffic_percentage: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::EndpointGroup``.

        :param accelerator_id: 
        :param endpoint_configurations: 
        :param endpoint_group_region: 
        :param listener_id: 
        :param description: 
        :param health_check_interval_seconds: 
        :param health_check_path: 
        :param health_check_port: 
        :param health_check_protocol: 
        :param name: 
        :param threshold_count: 
        :param traffic_percentage: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "endpoint_configurations": endpoint_configurations,
            "endpoint_group_region": endpoint_group_region,
            "listener_id": listener_id,
        }
        if description is not None:
            self._values["description"] = description
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
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def endpoint_configurations(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEndpointGroup.EndpointConfigurationsProperty]]]:
        '''
        :Property: endpointConfigurations:
        '''
        result = self._values.get("endpoint_configurations")
        assert result is not None, "Required property 'endpoint_configurations' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEndpointGroup.EndpointConfigurationsProperty]]], result)

    @builtins.property
    def endpoint_group_region(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: endpointGroupRegion: The region ID of the endpoint group.
        '''
        result = self._values.get("endpoint_group_region")
        assert result is not None, "Required property 'endpoint_group_region' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def listener_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: listenerId: The ID of the listener to be associated with the endpoint group.
        '''
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the endpoint group.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_interval_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        '''
        result = self._values.get("health_check_interval_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckPath: The path set as the destination on the targets for health checks.
        '''
        result = self._values.get("health_check_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckPort: The port that is used to connect with the targets for health checks.
        '''
        result = self._values.get("health_check_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
        tcp: TCP protocol
        http: HTTP protocol
        https: HTTPS protocol
        '''
        result = self._values.get("health_check_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name: The name of the endpoint group.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def threshold_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
        '''
        result = self._values.get("threshold_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def traffic_percentage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
        multiple endpoint groups.
        '''
        result = self._values.get("traffic_percentage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEndpointGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIpSets(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosIpSets",
):
    '''A ROS template type:  ``ALIYUN::GA::IpSets``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosIpSetsProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GA::IpSets``.

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
    @jsii.member(jsii_name="attrAccelerateRegionIds")
    def attr_accelerate_region_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccelerateRegionIds: The ID list of the accelerate region.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccelerateRegionIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpSetIds")
    def attr_ip_set_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IpSetIds: The ID list of the ip set.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpSetIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpVersions")
    def attr_ip_versions(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IpVersions: The IP version list of the accelerate region.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpVersions"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accelerateRegion")
    def accelerate_region(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIpSets.AccelerateRegionProperty"]]]:
        '''
        :Property: accelerateRegion:
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIpSets.AccelerateRegionProperty"]]], jsii.get(self, "accelerateRegion"))

    @accelerate_region.setter
    def accelerate_region(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIpSets.AccelerateRegionProperty"]]],
    ) -> None:
        jsii.set(self, "accelerateRegion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the GA instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "acceleratorId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosIpSets.AccelerateRegionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "accelerate_region_id": "accelerateRegionId",
            "bandwidth": "bandwidth",
            "ip_version": "ipVersion",
        },
    )
    class AccelerateRegionProperty:
        def __init__(
            self,
            *,
            accelerate_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param accelerate_region_id: 
            :param bandwidth: 
            :param ip_version: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "accelerate_region_id": accelerate_region_id,
                "bandwidth": bandwidth,
            }
            if ip_version is not None:
                self._values["ip_version"] = ip_version

        @builtins.property
        def accelerate_region_id(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: accelerateRegionId: The ID of the region where traffic is to be accelerated.
            '''
            result = self._values.get("accelerate_region_id")
            assert result is not None, "Required property 'accelerate_region_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
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
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def ip_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ipVersion: IP version. Valid values: IPv4, IPv6
            '''
            result = self._values.get("ip_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        accelerate_region: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosIpSets.AccelerateRegionProperty]]],
        accelerator_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::IpSets``.

        :param accelerate_region: 
        :param accelerator_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "accelerate_region": accelerate_region,
            "accelerator_id": accelerator_id,
        }

    @builtins.property
    def accelerate_region(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosIpSets.AccelerateRegionProperty]]]:
        '''
        :Property: accelerateRegion:
        '''
        result = self._values.get("accelerate_region")
        assert result is not None, "Required property 'accelerate_region' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosIpSets.AccelerateRegionProperty]]], result)

    @builtins.property
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the GA instance.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIpSetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosListener(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosListener",
):
    '''A ROS template type:  ``ALIYUN::GA::Listener``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosListenerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::GA::Listener``.

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
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ListenerId: The ID of the listener.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "acceleratorId"))

    @accelerator_id.setter
    def accelerator_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "acceleratorId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="portRanges")
    def port_ranges(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangesProperty"]]]:
        '''
        :Property: portRanges:
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangesProperty"]]], jsii.get(self, "portRanges"))

    @port_ranges.setter
    def port_ranges(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangesProperty"]]],
    ) -> None:
        jsii.set(self, "portRanges", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="protocol")
    def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        protocol: The network transmission protocol of the listener. Valid values:
        tcp: TCP protocol
        udp: UDP protocol
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "protocol", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clientAffinity")
    def client_affinity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        clientAffinity: Specifies whether to enable client affinity for the listener.
        If you do not specify the default value in the parameter, client affinity is disabled.
        When client affinity is disabled, the connections from a specific source (client)
        IP address are not always routed to the same endpoint.
        If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        a specific source (client) IP address are always routed to the same endpoint.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "clientAffinity"))

    @client_affinity.setter
    def client_affinity(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "clientAffinity", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the listener.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the listener.
        The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        (_), and hyphens (-). It must start with a letter or Chinese character.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosListener.PortRangesProperty",
        jsii_struct_bases=[],
        name_mapping={"from_port": "fromPort", "to_port": "toPort"},
    )
    class PortRangesProperty:
        def __init__(
            self,
            *,
            from_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            to_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param from_port: 
            :param to_port: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "from_port": from_port,
                "to_port": to_port,
            }

        @builtins.property
        def from_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property:

            fromPort: The first listening port of the port range specified for receiving and forwarding
            requests to endpoints.
            '''
            result = self._values.get("from_port")
            assert result is not None, "Required property 'from_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def to_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property:

            toPort: The last listening port of the port range specified for receiving and forwarding requests
            to endpoints.
            '''
            result = self._values.get("to_port")
            assert result is not None, "Required property 'to_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PortRangesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ga.RosListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "accelerator_id": "acceleratorId",
        "port_ranges": "portRanges",
        "protocol": "protocol",
        "client_affinity": "clientAffinity",
        "description": "description",
        "name": "name",
    },
)
class RosListenerProps:
    def __init__(
        self,
        *,
        accelerator_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        port_ranges: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosListener.PortRangesProperty]]],
        protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        client_affinity: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::GA::Listener``.

        :param accelerator_id: 
        :param port_ranges: 
        :param protocol: 
        :param client_affinity: 
        :param description: 
        :param name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "port_ranges": port_ranges,
            "protocol": protocol,
        }
        if client_affinity is not None:
            self._values["client_affinity"] = client_affinity
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def accelerator_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        '''
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def port_ranges(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.PortRangesProperty]]]:
        '''
        :Property: portRanges:
        '''
        result = self._values.get("port_ranges")
        assert result is not None, "Required property 'port_ranges' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.PortRangesProperty]]], result)

    @builtins.property
    def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        protocol: The network transmission protocol of the listener. Valid values:
        tcp: TCP protocol
        udp: UDP protocol
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def client_affinity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the listener.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the listener.
        The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        (_), and hyphens (-). It must start with a letter or Chinese character.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    "BandwidthPackage",
    "BandwidthPackageAcceleratorAddition",
    "BandwidthPackageAcceleratorAdditionProps",
    "BandwidthPackageProps",
    "EndpointGroup",
    "EndpointGroupProps",
    "IpSets",
    "IpSetsProps",
    "Listener",
    "ListenerProps",
    "RosAccelerator",
    "RosAcceleratorProps",
    "RosBandwidthPackage",
    "RosBandwidthPackageAcceleratorAddition",
    "RosBandwidthPackageAcceleratorAdditionProps",
    "RosBandwidthPackageProps",
    "RosEndpointGroup",
    "RosEndpointGroupProps",
    "RosIpSets",
    "RosIpSetsProps",
    "RosListener",
    "RosListenerProps",
]

publication.publish()
