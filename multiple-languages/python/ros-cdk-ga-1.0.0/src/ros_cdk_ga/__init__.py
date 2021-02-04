"""
## Aliyun ROS GA Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_ga as GA
```
"""
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
    """A ROS resource type:  ``ALIYUN::GA::Accelerator``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AcceleratorProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::GA::Accelerator``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Accelerator, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> typing.Any:
        """
        :Attribute: AcceleratorId: The ID of the GA instance to query.
        """
        return jsii.get(self, "attrAcceleratorId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAcceleratorName")
    def attr_accelerator_name(self) -> typing.Any:
        """
        :Attribute: AcceleratorName: The Name of the GA instance
        """
        return jsii.get(self, "attrAcceleratorName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> typing.Any:
        """
        :Attribute: AutoPay: The AutoPay of the GA instance.
        """
        return jsii.get(self, "attrAutoPay")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> typing.Any:
        """
        :Attribute: AutoUseCoupon: The AutoUseCoupon of the GA instance.
        """
        return jsii.get(self, "attrAutoUseCoupon")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDuration")
    def attr_duration(self) -> typing.Any:
        """
        :Attribute: Duration: The Duration of the GA instance
        """
        return jsii.get(self, "attrDuration")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: The OrderId of the GA instance
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> typing.Any:
        """
        :Attribute: PaymentType: The Payment Typethe GA instance
        """
        return jsii.get(self, "attrPaymentType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPricingCycle")
    def attr_pricing_cycle(self) -> typing.Any:
        """
        :Attribute: PricingCycle: The PricingCycle of the GA instance.
        """
        return jsii.get(self, "attrPricingCycle")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> typing.Any:
        """
        :Attribute: Spec: The instance type of the GA instance
        """
        return jsii.get(self, "attrSpec")


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
        duration: builtins.str,
        pricing_cycle: builtins.str,
        spec: builtins.str,
        accelerator_name: typing.Optional[builtins.str] = None,
        auto_pay: typing.Optional[builtins.str] = None,
        auto_use_coupon: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::Accelerator``.

        :param duration: 
        :param pricing_cycle: 
        :param spec: 
        :param accelerator_name: 
        :param auto_pay: 
        :param auto_use_coupon: 
        """
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
    def duration(self) -> builtins.str:
        """
        :Property: duration: The Duration of the GA instance
        """
        result = self._values.get("duration")
        assert result is not None, "Required property 'duration' is missing"
        return result

    @builtins.property
    def pricing_cycle(self) -> builtins.str:
        """
        :Property: pricingCycle: The PricingCycle of the GA instance.
        """
        result = self._values.get("pricing_cycle")
        assert result is not None, "Required property 'pricing_cycle' is missing"
        return result

    @builtins.property
    def spec(self) -> builtins.str:
        """
        :Property: spec: The instance type of the GA instance
        """
        result = self._values.get("spec")
        assert result is not None, "Required property 'spec' is missing"
        return result

    @builtins.property
    def accelerator_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: acceleratorName: The Name of the GA instance
        """
        result = self._values.get("accelerator_name")
        return result

    @builtins.property
    def auto_pay(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoPay: The AutoPay of the GA instance.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def auto_use_coupon(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoUseCoupon: The AutoUseCoupon of the GA instance.
        """
        result = self._values.get("auto_use_coupon")
        return result

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
    """A ROS resource type:  ``ALIYUN::GA::BandwidthPackage``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BandwidthPackageProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::GA::BandwidthPackage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(BandwidthPackage, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> typing.Any:
        """
        :Attribute: AutoPay: The AutoPay of the bandwidth
        """
        return jsii.get(self, "attrAutoPay")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> typing.Any:
        """
        :Attribute: AutoUseCoupon: The AutoUseCoupon  of the bandwidth
        """
        return jsii.get(self, "attrAutoUseCoupon")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> typing.Any:
        """
        :Attribute: Bandwidth: The bandwidth provided by the bandwidth plan.
        """
        return jsii.get(self, "attrBandwidth")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> typing.Any:
        """
        :Attribute: BandwidthPackageId: The Resource ID of the bandwidth
        """
        return jsii.get(self, "attrBandwidthPackageId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidthPackageName")
    def attr_bandwidth_package_name(self) -> typing.Any:
        """
        :Attribute: BandwidthPackageName: The Resource name of the bandwidth
        """
        return jsii.get(self, "attrBandwidthPackageName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidthType")
    def attr_bandwidth_type(self) -> typing.Any:
        """
        :Attribute: BandwidthType: the bandwidth BandwidthType of the bandwidth
        """
        return jsii.get(self, "attrBandwidthType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBillingType")
    def attr_billing_type(self) -> typing.Any:
        """
        :Attribute: BillingType: The BillingType of the bandwidth
        """
        return jsii.get(self, "attrBillingType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCbnGeographicRegionIdA")
    def attr_cbn_geographic_region_id_a(self) -> typing.Any:
        """
        :Attribute: CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        """
        return jsii.get(self, "attrCbnGeographicRegionIdA")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCbnGeographicRegionIdB")
    def attr_cbn_geographic_region_id_b(self) -> typing.Any:
        """
        :Attribute: CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        """
        return jsii.get(self, "attrCbnGeographicRegionIdB")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> typing.Any:
        """
        :Attribute: ChargeType: The ChargeType of the bandwidth
        """
        return jsii.get(self, "attrChargeType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> typing.Any:
        """
        :Attribute: PaymentType: The Payment Type of the bandwidth
        """
        return jsii.get(self, "attrPaymentType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRatio")
    def attr_ratio(self) -> typing.Any:
        """
        :Attribute: Ratio: The Ratio of the bandwidth
        """
        return jsii.get(self, "attrRatio")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> typing.Any:
        """
        :Attribute: Type: The type of the bandwidth plan
        """
        return jsii.get(self, "attrType")


class BandwidthPackageAcceleratorAddition(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.BandwidthPackageAcceleratorAddition",
):
    """A ROS resource type:  ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BandwidthPackageAcceleratorAdditionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(BandwidthPackageAcceleratorAddition, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> typing.Any:
        """
        :Attribute: AcceleratorId: The ID of the Global Accelerator instance
        """
        return jsii.get(self, "attrAcceleratorId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> typing.Any:
        """
        :Attribute: BandwidthPackageId: The ID of the bandwidth package which is associated
        """
        return jsii.get(self, "attrBandwidthPackageId")


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
        accelerator_id: builtins.str,
        bandwidth_package_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``.

        :param accelerator_id: 
        :param bandwidth_package_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "bandwidth_package_id": bandwidth_package_id,
        }

    @builtins.property
    def accelerator_id(self) -> builtins.str:
        """
        :Property:

        acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
        plan.
        """
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return result

    @builtins.property
    def bandwidth_package_id(self) -> builtins.str:
        """
        :Property: bandwidthPackageId: The ID of the bandwidth package to associate.
        """
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return result

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
        bandwidth: jsii.Number,
        type: builtins.str,
        auto_pay: typing.Optional[builtins.str] = None,
        auto_use_coupon: typing.Optional[builtins.str] = None,
        bandwidth_type: typing.Optional[builtins.str] = None,
        billing_type: typing.Optional[builtins.str] = None,
        cbn_geographic_region_id_a: typing.Optional[builtins.str] = None,
        cbn_geographic_region_id_b: typing.Optional[builtins.str] = None,
        charge_type: typing.Optional[builtins.str] = None,
        duration: typing.Optional[builtins.str] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        ratio: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::BandwidthPackage``.

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
        """
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
    def bandwidth(self) -> jsii.Number:
        """
        :Property: bandwidth: The bandwidth provided by the bandwidth plan.
        """
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return result

    @builtins.property
    def type(self) -> builtins.str:
        """
        :Property: type: The type of the bandwidth plan
        """
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return result

    @builtins.property
    def auto_pay(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoPay: The AutoPay of the bandwidth
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def auto_use_coupon(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        """
        result = self._values.get("auto_use_coupon")
        return result

    @builtins.property
    def bandwidth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: bandwidthType: the bandwidth BandwidthType of the bandwidth
        """
        result = self._values.get("bandwidth_type")
        return result

    @builtins.property
    def billing_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: billingType: The BillingType of the bandwidth
        """
        result = self._values.get("billing_type")
        return result

    @builtins.property
    def cbn_geographic_region_id_a(self) -> typing.Optional[builtins.str]:
        """
        :Property: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        """
        result = self._values.get("cbn_geographic_region_id_a")
        return result

    @builtins.property
    def cbn_geographic_region_id_b(self) -> typing.Optional[builtins.str]:
        """
        :Property: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        """
        result = self._values.get("cbn_geographic_region_id_b")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The ChargeType of the bandwidth
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def duration(self) -> typing.Optional[builtins.str]:
        """
        :Property: duration:
        """
        result = self._values.get("duration")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle:
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def ratio(self) -> typing.Optional[builtins.str]:
        """
        :Property: ratio: The Ratio of the bandwidth
        """
        result = self._values.get("ratio")
        return result

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
    """A ROS resource type:  ``ALIYUN::GA::EndpointGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "EndpointGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::GA::EndpointGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(EndpointGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEndpointGroupId")
    def attr_endpoint_group_id(self) -> typing.Any:
        """
        :Attribute: EndpointGroupId: The ID of the endpoint group.
        """
        return jsii.get(self, "attrEndpointGroupId")


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
        accelerator_id: builtins.str,
        endpoint_configurations: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]],
        endpoint_group_region: builtins.str,
        listener_id: builtins.str,
        description: typing.Optional[builtins.str] = None,
        health_check_interval_seconds: typing.Optional[jsii.Number] = None,
        health_check_path: typing.Optional[builtins.str] = None,
        health_check_port: typing.Optional[jsii.Number] = None,
        health_check_protocol: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        threshold_count: typing.Optional[jsii.Number] = None,
        traffic_percentage: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::EndpointGroup``.

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
        """
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
    def accelerator_id(self) -> builtins.str:
        """
        :Property: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        """
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return result

    @builtins.property
    def endpoint_configurations(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]]:
        """
        :Property: endpointConfigurations:
        """
        result = self._values.get("endpoint_configurations")
        assert result is not None, "Required property 'endpoint_configurations' is missing"
        return result

    @builtins.property
    def endpoint_group_region(self) -> builtins.str:
        """
        :Property: endpointGroupRegion: The region ID of the endpoint group.
        """
        result = self._values.get("endpoint_group_region")
        assert result is not None, "Required property 'endpoint_group_region' is missing"
        return result

    @builtins.property
    def listener_id(self) -> builtins.str:
        """
        :Property: listenerId: The ID of the listener to be associated with the endpoint group.
        """
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the endpoint group.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def health_check_interval_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        """
        result = self._values.get("health_check_interval_seconds")
        return result

    @builtins.property
    def health_check_path(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckPath: The path set as the destination on the targets for health checks.
        """
        result = self._values.get("health_check_path")
        return result

    @builtins.property
    def health_check_port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: healthCheckPort: The port that is used to connect with the targets for health checks.
        """
        result = self._values.get("health_check_port")
        return result

    @builtins.property
    def health_check_protocol(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
        tcp: TCP protocol
        http: HTTP protocol
        https: HTTPS protocol
        """
        result = self._values.get("health_check_protocol")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the endpoint group.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def threshold_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
        """
        result = self._values.get("threshold_count")
        return result

    @builtins.property
    def traffic_percentage(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
        multiple endpoint groups.
        """
        result = self._values.get("traffic_percentage")
        return result

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
    """A ROS resource type:  ``ALIYUN::GA::IpSets``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "IpSetsProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::GA::IpSets``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(IpSets, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccelerateRegionIds")
    def attr_accelerate_region_ids(self) -> typing.Any:
        """
        :Attribute: AccelerateRegionIds: The ID list of the accelerate region.
        """
        return jsii.get(self, "attrAccelerateRegionIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpSetIds")
    def attr_ip_set_ids(self) -> typing.Any:
        """
        :Attribute: IpSetIds: The ID list of the ip set.
        """
        return jsii.get(self, "attrIpSetIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpVersions")
    def attr_ip_versions(self) -> typing.Any:
        """
        :Attribute: IpVersions: The IP version list of the accelerate region.
        """
        return jsii.get(self, "attrIpVersions")


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
        accelerate_region: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosIpSets.AccelerateRegionProperty", ros_cdk_core.IResolvable]]],
        accelerator_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::IpSets``.

        :param accelerate_region: 
        :param accelerator_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "accelerate_region": accelerate_region,
            "accelerator_id": accelerator_id,
        }

    @builtins.property
    def accelerate_region(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosIpSets.AccelerateRegionProperty", ros_cdk_core.IResolvable]]]:
        """
        :Property: accelerateRegion:
        """
        result = self._values.get("accelerate_region")
        assert result is not None, "Required property 'accelerate_region' is missing"
        return result

    @builtins.property
    def accelerator_id(self) -> builtins.str:
        """
        :Property: acceleratorId: The ID of the GA instance.
        """
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return result

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
    """A ROS resource type:  ``ALIYUN::GA::Listener``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ListenerProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::GA::Listener``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Listener, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> typing.Any:
        """
        :Attribute: ListenerId: The ID of the listener.
        """
        return jsii.get(self, "attrListenerId")


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
        accelerator_id: builtins.str,
        port_ranges: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangesProperty"]]],
        protocol: builtins.str,
        client_affinity: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::Listener``.

        :param accelerator_id: 
        :param port_ranges: 
        :param protocol: 
        :param client_affinity: 
        :param description: 
        :param name: 
        """
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
    def accelerator_id(self) -> builtins.str:
        """
        :Property: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        """
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return result

    @builtins.property
    def port_ranges(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangesProperty"]]]:
        """
        :Property: portRanges:
        """
        result = self._values.get("port_ranges")
        assert result is not None, "Required property 'port_ranges' is missing"
        return result

    @builtins.property
    def protocol(self) -> builtins.str:
        """
        :Property:

        protocol: The network transmission protocol of the listener. Valid values:
        tcp: TCP protocol
        udp: UDP protocol
        """
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return result

    @builtins.property
    def client_affinity(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        clientAffinity: Specifies whether to enable client affinity for the listener.
        If you do not specify the default value in the parameter, client affinity is disabled.
        When client affinity is disabled, the connections from a specific source (client)
        IP address are not always routed to the same endpoint.
        If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        a specific source (client) IP address are always routed to the same endpoint.
        """
        result = self._values.get("client_affinity")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the listener.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the listener.
        The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        (_), and hyphens (-). It must start with a letter or Chinese character.
        """
        result = self._values.get("name")
        return result

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
    """A ROS template type:  ``ALIYUN::GA::Accelerator``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAcceleratorProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::GA::Accelerator``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAccelerator, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> typing.Any:
        """
        :Attribute: AcceleratorId: The ID of the GA instance to query.
        """
        return jsii.get(self, "attrAcceleratorId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAcceleratorName")
    def attr_accelerator_name(self) -> typing.Any:
        """
        :Attribute: AcceleratorName: The Name of the GA instance
        """
        return jsii.get(self, "attrAcceleratorName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> typing.Any:
        """
        :Attribute: AutoPay: The AutoPay of the GA instance.
        """
        return jsii.get(self, "attrAutoPay")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> typing.Any:
        """
        :Attribute: AutoUseCoupon: The AutoUseCoupon of the GA instance.
        """
        return jsii.get(self, "attrAutoUseCoupon")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDuration")
    def attr_duration(self) -> typing.Any:
        """
        :Attribute: Duration: The Duration of the GA instance
        """
        return jsii.get(self, "attrDuration")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: The OrderId of the GA instance
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> typing.Any:
        """
        :Attribute: PaymentType: The Payment Typethe GA instance
        """
        return jsii.get(self, "attrPaymentType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPricingCycle")
    def attr_pricing_cycle(self) -> typing.Any:
        """
        :Attribute: PricingCycle: The PricingCycle of the GA instance.
        """
        return jsii.get(self, "attrPricingCycle")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> typing.Any:
        """
        :Attribute: Spec: The instance type of the GA instance
        """
        return jsii.get(self, "attrSpec")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="duration")
    def duration(self) -> builtins.str:
        """
        :Property: duration: The Duration of the GA instance
        """
        return jsii.get(self, "duration")

    @duration.setter # type: ignore
    def duration(self, value: builtins.str) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(self) -> builtins.str:
        """
        :Property: pricingCycle: The PricingCycle of the GA instance.
        """
        return jsii.get(self, "pricingCycle")

    @pricing_cycle.setter # type: ignore
    def pricing_cycle(self, value: builtins.str) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="spec")
    def spec(self) -> builtins.str:
        """
        :Property: spec: The instance type of the GA instance
        """
        return jsii.get(self, "spec")

    @spec.setter # type: ignore
    def spec(self, value: builtins.str) -> None:
        jsii.set(self, "spec", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="acceleratorName")
    def accelerator_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: acceleratorName: The Name of the GA instance
        """
        return jsii.get(self, "acceleratorName")

    @accelerator_name.setter # type: ignore
    def accelerator_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "acceleratorName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoPay")
    def auto_pay(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoPay: The AutoPay of the GA instance.
        """
        return jsii.get(self, "autoPay")

    @auto_pay.setter # type: ignore
    def auto_pay(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoUseCoupon")
    def auto_use_coupon(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoUseCoupon: The AutoUseCoupon of the GA instance.
        """
        return jsii.get(self, "autoUseCoupon")

    @auto_use_coupon.setter # type: ignore
    def auto_use_coupon(self, value: typing.Optional[builtins.str]) -> None:
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
        duration: builtins.str,
        pricing_cycle: builtins.str,
        spec: builtins.str,
        accelerator_name: typing.Optional[builtins.str] = None,
        auto_pay: typing.Optional[builtins.str] = None,
        auto_use_coupon: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::Accelerator``.

        :param duration: 
        :param pricing_cycle: 
        :param spec: 
        :param accelerator_name: 
        :param auto_pay: 
        :param auto_use_coupon: 
        """
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
    def duration(self) -> builtins.str:
        """
        :Property: duration: The Duration of the GA instance
        """
        result = self._values.get("duration")
        assert result is not None, "Required property 'duration' is missing"
        return result

    @builtins.property
    def pricing_cycle(self) -> builtins.str:
        """
        :Property: pricingCycle: The PricingCycle of the GA instance.
        """
        result = self._values.get("pricing_cycle")
        assert result is not None, "Required property 'pricing_cycle' is missing"
        return result

    @builtins.property
    def spec(self) -> builtins.str:
        """
        :Property: spec: The instance type of the GA instance
        """
        result = self._values.get("spec")
        assert result is not None, "Required property 'spec' is missing"
        return result

    @builtins.property
    def accelerator_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: acceleratorName: The Name of the GA instance
        """
        result = self._values.get("accelerator_name")
        return result

    @builtins.property
    def auto_pay(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoPay: The AutoPay of the GA instance.
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def auto_use_coupon(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoUseCoupon: The AutoUseCoupon of the GA instance.
        """
        result = self._values.get("auto_use_coupon")
        return result

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
    """A ROS template type:  ``ALIYUN::GA::BandwidthPackage``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBandwidthPackageProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::GA::BandwidthPackage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosBandwidthPackage, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoPay")
    def attr_auto_pay(self) -> typing.Any:
        """
        :Attribute: AutoPay: The AutoPay of the bandwidth
        """
        return jsii.get(self, "attrAutoPay")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoUseCoupon")
    def attr_auto_use_coupon(self) -> typing.Any:
        """
        :Attribute: AutoUseCoupon: The AutoUseCoupon  of the bandwidth
        """
        return jsii.get(self, "attrAutoUseCoupon")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> typing.Any:
        """
        :Attribute: Bandwidth: The bandwidth provided by the bandwidth plan.
        """
        return jsii.get(self, "attrBandwidth")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> typing.Any:
        """
        :Attribute: BandwidthPackageId: The Resource ID of the bandwidth
        """
        return jsii.get(self, "attrBandwidthPackageId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidthPackageName")
    def attr_bandwidth_package_name(self) -> typing.Any:
        """
        :Attribute: BandwidthPackageName: The Resource name of the bandwidth
        """
        return jsii.get(self, "attrBandwidthPackageName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidthType")
    def attr_bandwidth_type(self) -> typing.Any:
        """
        :Attribute: BandwidthType: the bandwidth BandwidthType of the bandwidth
        """
        return jsii.get(self, "attrBandwidthType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBillingType")
    def attr_billing_type(self) -> typing.Any:
        """
        :Attribute: BillingType: The BillingType of the bandwidth
        """
        return jsii.get(self, "attrBillingType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCbnGeographicRegionIdA")
    def attr_cbn_geographic_region_id_a(self) -> typing.Any:
        """
        :Attribute: CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        """
        return jsii.get(self, "attrCbnGeographicRegionIdA")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCbnGeographicRegionIdB")
    def attr_cbn_geographic_region_id_b(self) -> typing.Any:
        """
        :Attribute: CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        """
        return jsii.get(self, "attrCbnGeographicRegionIdB")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrChargeType")
    def attr_charge_type(self) -> typing.Any:
        """
        :Attribute: ChargeType: The ChargeType of the bandwidth
        """
        return jsii.get(self, "attrChargeType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> typing.Any:
        """
        :Attribute: PaymentType: The Payment Type of the bandwidth
        """
        return jsii.get(self, "attrPaymentType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRatio")
    def attr_ratio(self) -> typing.Any:
        """
        :Attribute: Ratio: The Ratio of the bandwidth
        """
        return jsii.get(self, "attrRatio")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> typing.Any:
        """
        :Attribute: Type: The type of the bandwidth plan
        """
        return jsii.get(self, "attrType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> jsii.Number:
        """
        :Property: bandwidth: The bandwidth provided by the bandwidth plan.
        """
        return jsii.get(self, "bandwidth")

    @bandwidth.setter # type: ignore
    def bandwidth(self, value: jsii.Number) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="type")
    def type(self) -> builtins.str:
        """
        :Property: type: The type of the bandwidth plan
        """
        return jsii.get(self, "type")

    @type.setter # type: ignore
    def type(self, value: builtins.str) -> None:
        jsii.set(self, "type", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoPay")
    def auto_pay(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoPay: The AutoPay of the bandwidth
        """
        return jsii.get(self, "autoPay")

    @auto_pay.setter # type: ignore
    def auto_pay(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoUseCoupon")
    def auto_use_coupon(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        """
        return jsii.get(self, "autoUseCoupon")

    @auto_use_coupon.setter # type: ignore
    def auto_use_coupon(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "autoUseCoupon", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidthType")
    def bandwidth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: bandwidthType: the bandwidth BandwidthType of the bandwidth
        """
        return jsii.get(self, "bandwidthType")

    @bandwidth_type.setter # type: ignore
    def bandwidth_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "bandwidthType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="billingType")
    def billing_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: billingType: The BillingType of the bandwidth
        """
        return jsii.get(self, "billingType")

    @billing_type.setter # type: ignore
    def billing_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "billingType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cbnGeographicRegionIdA")
    def cbn_geographic_region_id_a(self) -> typing.Optional[builtins.str]:
        """
        :Property: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        """
        return jsii.get(self, "cbnGeographicRegionIdA")

    @cbn_geographic_region_id_a.setter # type: ignore
    def cbn_geographic_region_id_a(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "cbnGeographicRegionIdA", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cbnGeographicRegionIdB")
    def cbn_geographic_region_id_b(self) -> typing.Optional[builtins.str]:
        """
        :Property: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        """
        return jsii.get(self, "cbnGeographicRegionIdB")

    @cbn_geographic_region_id_b.setter # type: ignore
    def cbn_geographic_region_id_b(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "cbnGeographicRegionIdB", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The ChargeType of the bandwidth
        """
        return jsii.get(self, "chargeType")

    @charge_type.setter # type: ignore
    def charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="duration")
    def duration(self) -> typing.Optional[builtins.str]:
        """
        :Property: duration:
        """
        return jsii.get(self, "duration")

    @duration.setter # type: ignore
    def duration(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle:
        """
        return jsii.get(self, "pricingCycle")

    @pricing_cycle.setter # type: ignore
    def pricing_cycle(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ratio")
    def ratio(self) -> typing.Optional[builtins.str]:
        """
        :Property: ratio: The Ratio of the bandwidth
        """
        return jsii.get(self, "ratio")

    @ratio.setter # type: ignore
    def ratio(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "ratio", value)


class RosBandwidthPackageAcceleratorAddition(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ga.RosBandwidthPackageAcceleratorAddition",
):
    """A ROS template type:  ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBandwidthPackageAcceleratorAdditionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosBandwidthPackageAcceleratorAddition, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAcceleratorId")
    def attr_accelerator_id(self) -> typing.Any:
        """
        :Attribute: AcceleratorId: The ID of the Global Accelerator instance
        """
        return jsii.get(self, "attrAcceleratorId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> typing.Any:
        """
        :Attribute: BandwidthPackageId: The ID of the bandwidth package which is associated
        """
        return jsii.get(self, "attrBandwidthPackageId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(self) -> builtins.str:
        """
        :Property:

        acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
        plan.
        """
        return jsii.get(self, "acceleratorId")

    @accelerator_id.setter # type: ignore
    def accelerator_id(self, value: builtins.str) -> None:
        jsii.set(self, "acceleratorId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(self) -> builtins.str:
        """
        :Property: bandwidthPackageId: The ID of the bandwidth package to associate.
        """
        return jsii.get(self, "bandwidthPackageId")

    @bandwidth_package_id.setter # type: ignore
    def bandwidth_package_id(self, value: builtins.str) -> None:
        jsii.set(self, "bandwidthPackageId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
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
        accelerator_id: builtins.str,
        bandwidth_package_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::BandwidthPackageAcceleratorAddition``.

        :param accelerator_id: 
        :param bandwidth_package_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "accelerator_id": accelerator_id,
            "bandwidth_package_id": bandwidth_package_id,
        }

    @builtins.property
    def accelerator_id(self) -> builtins.str:
        """
        :Property:

        acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
        plan.
        """
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return result

    @builtins.property
    def bandwidth_package_id(self) -> builtins.str:
        """
        :Property: bandwidthPackageId: The ID of the bandwidth package to associate.
        """
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return result

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
        bandwidth: jsii.Number,
        type: builtins.str,
        auto_pay: typing.Optional[builtins.str] = None,
        auto_use_coupon: typing.Optional[builtins.str] = None,
        bandwidth_type: typing.Optional[builtins.str] = None,
        billing_type: typing.Optional[builtins.str] = None,
        cbn_geographic_region_id_a: typing.Optional[builtins.str] = None,
        cbn_geographic_region_id_b: typing.Optional[builtins.str] = None,
        charge_type: typing.Optional[builtins.str] = None,
        duration: typing.Optional[builtins.str] = None,
        pricing_cycle: typing.Optional[builtins.str] = None,
        ratio: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::BandwidthPackage``.

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
        """
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
    def bandwidth(self) -> jsii.Number:
        """
        :Property: bandwidth: The bandwidth provided by the bandwidth plan.
        """
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return result

    @builtins.property
    def type(self) -> builtins.str:
        """
        :Property: type: The type of the bandwidth plan
        """
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return result

    @builtins.property
    def auto_pay(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoPay: The AutoPay of the bandwidth
        """
        result = self._values.get("auto_pay")
        return result

    @builtins.property
    def auto_use_coupon(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        """
        result = self._values.get("auto_use_coupon")
        return result

    @builtins.property
    def bandwidth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: bandwidthType: the bandwidth BandwidthType of the bandwidth
        """
        result = self._values.get("bandwidth_type")
        return result

    @builtins.property
    def billing_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: billingType: The BillingType of the bandwidth
        """
        result = self._values.get("billing_type")
        return result

    @builtins.property
    def cbn_geographic_region_id_a(self) -> typing.Optional[builtins.str]:
        """
        :Property: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        """
        result = self._values.get("cbn_geographic_region_id_a")
        return result

    @builtins.property
    def cbn_geographic_region_id_b(self) -> typing.Optional[builtins.str]:
        """
        :Property: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        """
        result = self._values.get("cbn_geographic_region_id_b")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The ChargeType of the bandwidth
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def duration(self) -> typing.Optional[builtins.str]:
        """
        :Property: duration:
        """
        result = self._values.get("duration")
        return result

    @builtins.property
    def pricing_cycle(self) -> typing.Optional[builtins.str]:
        """
        :Property: pricingCycle:
        """
        result = self._values.get("pricing_cycle")
        return result

    @builtins.property
    def ratio(self) -> typing.Optional[builtins.str]:
        """
        :Property: ratio: The Ratio of the bandwidth
        """
        result = self._values.get("ratio")
        return result

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
    """A ROS template type:  ``ALIYUN::GA::EndpointGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosEndpointGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::GA::EndpointGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosEndpointGroup, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEndpointGroupId")
    def attr_endpoint_group_id(self) -> typing.Any:
        """
        :Attribute: EndpointGroupId: The ID of the endpoint group.
        """
        return jsii.get(self, "attrEndpointGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(self) -> builtins.str:
        """
        :Property: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        """
        return jsii.get(self, "acceleratorId")

    @accelerator_id.setter # type: ignore
    def accelerator_id(self, value: builtins.str) -> None:
        jsii.set(self, "acceleratorId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="endpointConfigurations")
    def endpoint_configurations(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]]:
        """
        :Property: endpointConfigurations:
        """
        return jsii.get(self, "endpointConfigurations")

    @endpoint_configurations.setter # type: ignore
    def endpoint_configurations(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEndpointGroup.EndpointConfigurationsProperty"]]],
    ) -> None:
        jsii.set(self, "endpointConfigurations", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="endpointGroupRegion")
    def endpoint_group_region(self) -> builtins.str:
        """
        :Property: endpointGroupRegion: The region ID of the endpoint group.
        """
        return jsii.get(self, "endpointGroupRegion")

    @endpoint_group_region.setter # type: ignore
    def endpoint_group_region(self, value: builtins.str) -> None:
        jsii.set(self, "endpointGroupRegion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="listenerId")
    def listener_id(self) -> builtins.str:
        """
        :Property: listenerId: The ID of the listener to be associated with the endpoint group.
        """
        return jsii.get(self, "listenerId")

    @listener_id.setter # type: ignore
    def listener_id(self, value: builtins.str) -> None:
        jsii.set(self, "listenerId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the endpoint group.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="healthCheckIntervalSeconds")
    def health_check_interval_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        """
        return jsii.get(self, "healthCheckIntervalSeconds")

    @health_check_interval_seconds.setter # type: ignore
    def health_check_interval_seconds(
        self,
        value: typing.Optional[jsii.Number],
    ) -> None:
        jsii.set(self, "healthCheckIntervalSeconds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="healthCheckPath")
    def health_check_path(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckPath: The path set as the destination on the targets for health checks.
        """
        return jsii.get(self, "healthCheckPath")

    @health_check_path.setter # type: ignore
    def health_check_path(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "healthCheckPath", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="healthCheckPort")
    def health_check_port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: healthCheckPort: The port that is used to connect with the targets for health checks.
        """
        return jsii.get(self, "healthCheckPort")

    @health_check_port.setter # type: ignore
    def health_check_port(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "healthCheckPort", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="healthCheckProtocol")
    def health_check_protocol(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
        tcp: TCP protocol
        http: HTTP protocol
        https: HTTPS protocol
        """
        return jsii.get(self, "healthCheckProtocol")

    @health_check_protocol.setter # type: ignore
    def health_check_protocol(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "healthCheckProtocol", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the endpoint group.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="thresholdCount")
    def threshold_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
        """
        return jsii.get(self, "thresholdCount")

    @threshold_count.setter # type: ignore
    def threshold_count(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "thresholdCount", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="trafficPercentage")
    def traffic_percentage(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
        multiple endpoint groups.
        """
        return jsii.get(self, "trafficPercentage")

    @traffic_percentage.setter # type: ignore
    def traffic_percentage(self, value: typing.Optional[jsii.Number]) -> None:
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
            endpoint: builtins.str,
            type: builtins.str,
            weight: jsii.Number,
        ) -> None:
            """
            :param endpoint: 
            :param type: 
            :param weight: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "endpoint": endpoint,
                "type": type,
                "weight": weight,
            }

        @builtins.property
        def endpoint(self) -> builtins.str:
            """
            :Property: endpoint: The IP address or domain name of endpoint in the endpoint group.
            """
            result = self._values.get("endpoint")
            assert result is not None, "Required property 'endpoint' is missing"
            return result

        @builtins.property
        def type(self) -> builtins.str:
            """
            :Property:

            type: The type of endpoint in the endpoint group. Valid values:
            EIP: eip address
            PublicIp: public IP address
            Ip: custom IP address
            Domain: custom domain name
            """
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return result

        @builtins.property
        def weight(self) -> jsii.Number:
            """
            :Property: weight: The weight of endpoint N in the endpoint group.
            """
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return result

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
        accelerator_id: builtins.str,
        endpoint_configurations: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEndpointGroup.EndpointConfigurationsProperty]]],
        endpoint_group_region: builtins.str,
        listener_id: builtins.str,
        description: typing.Optional[builtins.str] = None,
        health_check_interval_seconds: typing.Optional[jsii.Number] = None,
        health_check_path: typing.Optional[builtins.str] = None,
        health_check_port: typing.Optional[jsii.Number] = None,
        health_check_protocol: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
        threshold_count: typing.Optional[jsii.Number] = None,
        traffic_percentage: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::EndpointGroup``.

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
        """
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
    def accelerator_id(self) -> builtins.str:
        """
        :Property: acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
        """
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return result

    @builtins.property
    def endpoint_configurations(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEndpointGroup.EndpointConfigurationsProperty]]]:
        """
        :Property: endpointConfigurations:
        """
        result = self._values.get("endpoint_configurations")
        assert result is not None, "Required property 'endpoint_configurations' is missing"
        return result

    @builtins.property
    def endpoint_group_region(self) -> builtins.str:
        """
        :Property: endpointGroupRegion: The region ID of the endpoint group.
        """
        result = self._values.get("endpoint_group_region")
        assert result is not None, "Required property 'endpoint_group_region' is missing"
        return result

    @builtins.property
    def listener_id(self) -> builtins.str:
        """
        :Property: listenerId: The ID of the listener to be associated with the endpoint group.
        """
        result = self._values.get("listener_id")
        assert result is not None, "Required property 'listener_id' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the endpoint group.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def health_check_interval_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property: healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
        """
        result = self._values.get("health_check_interval_seconds")
        return result

    @builtins.property
    def health_check_path(self) -> typing.Optional[builtins.str]:
        """
        :Property: healthCheckPath: The path set as the destination on the targets for health checks.
        """
        result = self._values.get("health_check_path")
        return result

    @builtins.property
    def health_check_port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: healthCheckPort: The port that is used to connect with the targets for health checks.
        """
        result = self._values.get("health_check_port")
        return result

    @builtins.property
    def health_check_protocol(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
        tcp: TCP protocol
        http: HTTP protocol
        https: HTTPS protocol
        """
        result = self._values.get("health_check_protocol")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: The name of the endpoint group.
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def threshold_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
        """
        result = self._values.get("threshold_count")
        return result

    @builtins.property
    def traffic_percentage(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
        multiple endpoint groups.
        """
        result = self._values.get("traffic_percentage")
        return result

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
    """A ROS template type:  ``ALIYUN::GA::IpSets``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosIpSetsProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::GA::IpSets``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosIpSets, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccelerateRegionIds")
    def attr_accelerate_region_ids(self) -> typing.Any:
        """
        :Attribute: AccelerateRegionIds: The ID list of the accelerate region.
        """
        return jsii.get(self, "attrAccelerateRegionIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpSetIds")
    def attr_ip_set_ids(self) -> typing.Any:
        """
        :Attribute: IpSetIds: The ID list of the ip set.
        """
        return jsii.get(self, "attrIpSetIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpVersions")
    def attr_ip_versions(self) -> typing.Any:
        """
        :Attribute: IpVersions: The IP version list of the accelerate region.
        """
        return jsii.get(self, "attrIpVersions")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accelerateRegion")
    def accelerate_region(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosIpSets.AccelerateRegionProperty", ros_cdk_core.IResolvable]]]:
        """
        :Property: accelerateRegion:
        """
        return jsii.get(self, "accelerateRegion")

    @accelerate_region.setter # type: ignore
    def accelerate_region(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosIpSets.AccelerateRegionProperty", ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "accelerateRegion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(self) -> builtins.str:
        """
        :Property: acceleratorId: The ID of the GA instance.
        """
        return jsii.get(self, "acceleratorId")

    @accelerator_id.setter # type: ignore
    def accelerator_id(self, value: builtins.str) -> None:
        jsii.set(self, "acceleratorId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
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
            accelerate_region_id: builtins.str,
            bandwidth: jsii.Number,
            ip_version: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param accelerate_region_id: 
            :param bandwidth: 
            :param ip_version: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "accelerate_region_id": accelerate_region_id,
                "bandwidth": bandwidth,
            }
            if ip_version is not None:
                self._values["ip_version"] = ip_version

        @builtins.property
        def accelerate_region_id(self) -> builtins.str:
            """
            :Property: accelerateRegionId: The ID of the region where traffic is to be accelerated.
            """
            result = self._values.get("accelerate_region_id")
            assert result is not None, "Required property 'accelerate_region_id' is missing"
            return result

        @builtins.property
        def bandwidth(self) -> jsii.Number:
            """
            :Property:

            bandwidth: The bandwidth allocated to the acceleration region. Unit: Mbit/s.
            Note
            The minimum bandwidth allocated to each accelerated region is 2 Mbit/s.
            The total bandwidth for all regions must not exceed the amount included in your basic
            bandwidth plan.
            """
            result = self._values.get("bandwidth")
            assert result is not None, "Required property 'bandwidth' is missing"
            return result

        @builtins.property
        def ip_version(self) -> typing.Optional[builtins.str]:
            """
            :Property: ipVersion: IP version. Valid values: IPv4, IPv6
            """
            result = self._values.get("ip_version")
            return result

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
        accelerate_region: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosIpSets.AccelerateRegionProperty, ros_cdk_core.IResolvable]]],
        accelerator_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::IpSets``.

        :param accelerate_region: 
        :param accelerator_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "accelerate_region": accelerate_region,
            "accelerator_id": accelerator_id,
        }

    @builtins.property
    def accelerate_region(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosIpSets.AccelerateRegionProperty, ros_cdk_core.IResolvable]]]:
        """
        :Property: accelerateRegion:
        """
        result = self._values.get("accelerate_region")
        assert result is not None, "Required property 'accelerate_region' is missing"
        return result

    @builtins.property
    def accelerator_id(self) -> builtins.str:
        """
        :Property: acceleratorId: The ID of the GA instance.
        """
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::GA::Listener``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosListenerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::GA::Listener``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosListener, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> typing.Any:
        """
        :Attribute: ListenerId: The ID of the listener.
        """
        return jsii.get(self, "attrListenerId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="acceleratorId")
    def accelerator_id(self) -> builtins.str:
        """
        :Property: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        """
        return jsii.get(self, "acceleratorId")

    @accelerator_id.setter # type: ignore
    def accelerator_id(self, value: builtins.str) -> None:
        jsii.set(self, "acceleratorId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="portRanges")
    def port_ranges(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangesProperty"]]]:
        """
        :Property: portRanges:
        """
        return jsii.get(self, "portRanges")

    @port_ranges.setter # type: ignore
    def port_ranges(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangesProperty"]]],
    ) -> None:
        jsii.set(self, "portRanges", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="protocol")
    def protocol(self) -> builtins.str:
        """
        :Property:

        protocol: The network transmission protocol of the listener. Valid values:
        tcp: TCP protocol
        udp: UDP protocol
        """
        return jsii.get(self, "protocol")

    @protocol.setter # type: ignore
    def protocol(self, value: builtins.str) -> None:
        jsii.set(self, "protocol", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clientAffinity")
    def client_affinity(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        clientAffinity: Specifies whether to enable client affinity for the listener.
        If you do not specify the default value in the parameter, client affinity is disabled.
        When client affinity is disabled, the connections from a specific source (client)
        IP address are not always routed to the same endpoint.
        If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        a specific source (client) IP address are always routed to the same endpoint.
        """
        return jsii.get(self, "clientAffinity")

    @client_affinity.setter # type: ignore
    def client_affinity(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "clientAffinity", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the listener.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the listener.
        The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        (_), and hyphens (-). It must start with a letter or Chinese character.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ga.RosListener.PortRangesProperty",
        jsii_struct_bases=[],
        name_mapping={"from_port": "fromPort", "to_port": "toPort"},
    )
    class PortRangesProperty:
        def __init__(self, *, from_port: jsii.Number, to_port: jsii.Number) -> None:
            """
            :param from_port: 
            :param to_port: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "from_port": from_port,
                "to_port": to_port,
            }

        @builtins.property
        def from_port(self) -> jsii.Number:
            """
            :Property:

            fromPort: The first listening port of the port range specified for receiving and forwarding
            requests to endpoints.
            """
            result = self._values.get("from_port")
            assert result is not None, "Required property 'from_port' is missing"
            return result

        @builtins.property
        def to_port(self) -> jsii.Number:
            """
            :Property:

            toPort: The last listening port of the port range specified for receiving and forwarding requests
            to endpoints.
            """
            result = self._values.get("to_port")
            assert result is not None, "Required property 'to_port' is missing"
            return result

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
        accelerator_id: builtins.str,
        port_ranges: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.PortRangesProperty]]],
        protocol: builtins.str,
        client_affinity: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GA::Listener``.

        :param accelerator_id: 
        :param port_ranges: 
        :param protocol: 
        :param client_affinity: 
        :param description: 
        :param name: 
        """
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
    def accelerator_id(self) -> builtins.str:
        """
        :Property: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        """
        result = self._values.get("accelerator_id")
        assert result is not None, "Required property 'accelerator_id' is missing"
        return result

    @builtins.property
    def port_ranges(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.PortRangesProperty]]]:
        """
        :Property: portRanges:
        """
        result = self._values.get("port_ranges")
        assert result is not None, "Required property 'port_ranges' is missing"
        return result

    @builtins.property
    def protocol(self) -> builtins.str:
        """
        :Property:

        protocol: The network transmission protocol of the listener. Valid values:
        tcp: TCP protocol
        udp: UDP protocol
        """
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return result

    @builtins.property
    def client_affinity(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        clientAffinity: Specifies whether to enable client affinity for the listener.
        If you do not specify the default value in the parameter, client affinity is disabled.
        When client affinity is disabled, the connections from a specific source (client)
        IP address are not always routed to the same endpoint.
        If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        a specific source (client) IP address are always routed to the same endpoint.
        """
        result = self._values.get("client_affinity")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the listener.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the listener.
        The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        (_), and hyphens (-). It must start with a letter or Chinese character.
        """
        result = self._values.get("name")
        return result

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
