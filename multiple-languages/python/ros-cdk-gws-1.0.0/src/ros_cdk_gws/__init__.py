"""
## Aliyun ROS GWS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_gws as GWS
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


class Cluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gws.Cluster",
):
    """A ROS resource type:  ``ALIYUN::GWS::Cluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::GWS::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Cluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster id
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: Cluster name
        """
        return jsii.get(self, "attrName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-gws.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_type": "clusterType",
        "vpc_id": "vpcId",
        "name": "name",
        "policy": "policy",
        "v_switch_id": "vSwitchId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        cluster_type: builtins.str,
        vpc_id: builtins.str,
        name: typing.Optional[builtins.str] = None,
        policy: typing.Optional[typing.Union["RosCluster.PolicyProperty", ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GWS::Cluster``.

        :param cluster_type: 
        :param vpc_id: 
        :param name: 
        :param policy: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_type": cluster_type,
            "vpc_id": vpc_id,
        }
        if name is not None:
            self._values["name"] = name
        if policy is not None:
            self._values["policy"] = policy
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_type(self) -> builtins.str:
        """
        :Property:

        clusterType: Cluster Type:
        gws.s1.standard
        """
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return result

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC id
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Cluster name
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def policy(
        self,
    ) -> typing.Optional[typing.Union["RosCluster.PolicyProperty", ros_cdk_core.IResolvable]]:
        """
        :Property: policy: Cluster policy
        """
        result = self._values.get("policy")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch id
        """
        result = self._values.get("v_switch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gws.Instance",
):
    """A ROS resource type:  ``ALIYUN::GWS::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::GWS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Instance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster id
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceChargeType")
    def attr_instance_charge_type(self) -> typing.Any:
        """
        :Attribute: InstanceChargeType: Instance charge type
        """
        return jsii.get(self, "attrInstanceChargeType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance id
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMaxBandwidthIn")
    def attr_max_bandwidth_in(self) -> typing.Any:
        """
        :Attribute: MaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps)
        """
        return jsii.get(self, "attrMaxBandwidthIn")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMaxBandwidthOut")
    def attr_max_bandwidth_out(self) -> typing.Any:
        """
        :Attribute: MaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps)
        """
        return jsii.get(self, "attrMaxBandwidthOut")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: Instance name
        """
        return jsii.get(self, "attrName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-gws.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "image_id": "imageId",
        "instance_type": "instanceType",
        "system_disk_category": "systemDiskCategory",
        "system_disk_size": "systemDiskSize",
        "work_mode": "workMode",
        "allocate_public_address": "allocatePublicAddress",
        "app_list": "appList",
        "auto_renew": "autoRenew",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "internet_max_bandwidth_in": "internetMaxBandwidthIn",
        "internet_max_bandwidth_out": "internetMaxBandwidthOut",
        "name": "name",
        "period": "period",
        "period_unit": "periodUnit",
        "v_switch_id": "vSwitchId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        cluster_id: builtins.str,
        image_id: builtins.str,
        instance_type: builtins.str,
        system_disk_category: builtins.str,
        system_disk_size: jsii.Number,
        work_mode: builtins.str,
        allocate_public_address: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        app_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosInstance.AppListProperty"]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[builtins.str] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        internet_max_bandwidth_in: typing.Optional[jsii.Number] = None,
        internet_max_bandwidth_out: typing.Optional[jsii.Number] = None,
        name: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        period_unit: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GWS::Instance``.

        :param cluster_id: 
        :param image_id: 
        :param instance_type: 
        :param system_disk_category: 
        :param system_disk_size: 
        :param work_mode: 
        :param allocate_public_address: 
        :param app_list: 
        :param auto_renew: 
        :param instance_charge_type: 
        :param internet_charge_type: 
        :param internet_max_bandwidth_in: 
        :param internet_max_bandwidth_out: 
        :param name: 
        :param period: 
        :param period_unit: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "image_id": image_id,
            "instance_type": instance_type,
            "system_disk_category": system_disk_category,
            "system_disk_size": system_disk_size,
            "work_mode": work_mode,
        }
        if allocate_public_address is not None:
            self._values["allocate_public_address"] = allocate_public_address
        if app_list is not None:
            self._values["app_list"] = app_list
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if internet_max_bandwidth_in is not None:
            self._values["internet_max_bandwidth_in"] = internet_max_bandwidth_in
        if internet_max_bandwidth_out is not None:
            self._values["internet_max_bandwidth_out"] = internet_max_bandwidth_out
        if name is not None:
            self._values["name"] = name
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_id(self) -> builtins.str:
        """
        :Property: clusterId: Cluster id
        """
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return result

    @builtins.property
    def image_id(self) -> builtins.str:
        """
        :Property: imageId: Mirror id
        """
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return result

    @builtins.property
    def instance_type(self) -> builtins.str:
        """
        :Property: instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
        """
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return result

    @builtins.property
    def system_disk_category(self) -> builtins.str:
        """
        :Property: systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
        """
        result = self._values.get("system_disk_category")
        assert result is not None, "Required property 'system_disk_category' is missing"
        return result

    @builtins.property
    def system_disk_size(self) -> jsii.Number:
        """
        :Property: systemDiskSize: System disk size
        """
        result = self._values.get("system_disk_size")
        assert result is not None, "Required property 'system_disk_size' is missing"
        return result

    @builtins.property
    def work_mode(self) -> builtins.str:
        """
        :Property:

        workMode: Work mode:
        Desktop
        Application
        """
        result = self._values.get("work_mode")
        assert result is not None, "Required property 'work_mode' is missing"
        return result

    @builtins.property
    def allocate_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicAddress: Whether to allocate a public network address
        """
        result = self._values.get("allocate_public_address")
        return result

    @builtins.property
    def app_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosInstance.AppListProperty"]]]]:
        """
        :Property: appList: App list. This value is only valid when WorkMode is Application.
        """
        result = self._values.get("app_list")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Whether auto renew
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceChargeType: Instance charge type:
        PostPaid (default): Pay-As-You-Go
        PrePaid: Subscription
        """
        result = self._values.get("instance_charge_type")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: Network charge type:
        PayByTraffic (default): Flow-per-use billing
        PayByBandwidth: fixed-bandwidth billing
        This value is only valid when AllocatePublicAddress is true.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def internet_max_bandwidth_in(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
        Value range: 1-200
        Default: 200
        This value is only valid when AllocatePublicAddress is true.
        """
        result = self._values.get("internet_max_bandwidth_in")
        return result

    @builtins.property
    def internet_max_bandwidth_out(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
        Value range: 1-200
        Default: 200
        This value is only valid when AllocatePublicAddress is true.
        """
        result = self._values.get("internet_max_bandwidth_out")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Instance name
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        period: Period of subscription.
        When PeriodUnit is Week, the value range is 1-4
        When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
        This value is only valid when InstanceChargeType is PrePaid.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        periodUnit: Unit of period. Week or Month.
        This value is only valid when InstanceChargeType is PrePaid.
        """
        result = self._values.get("period_unit")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch id
        """
        result = self._values.get("v_switch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gws.RosCluster",
):
    """A ROS template type:  ``ALIYUN::GWS::Cluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::GWS::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCluster, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster id
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: Cluster name
        """
        return jsii.get(self, "attrName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterType")
    def cluster_type(self) -> builtins.str:
        """
        :Property:

        clusterType: Cluster Type:
        gws.s1.standard
        """
        return jsii.get(self, "clusterType")

    @cluster_type.setter # type: ignore
    def cluster_type(self, value: builtins.str) -> None:
        jsii.set(self, "clusterType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC id
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: builtins.str) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Cluster name
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policy")
    def policy(
        self,
    ) -> typing.Optional[typing.Union["RosCluster.PolicyProperty", ros_cdk_core.IResolvable]]:
        """
        :Property: policy: Cluster policy
        """
        return jsii.get(self, "policy")

    @policy.setter # type: ignore
    def policy(
        self,
        value: typing.Optional[typing.Union["RosCluster.PolicyProperty", ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "policy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch id
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-gws.RosCluster.PolicyProperty",
        jsii_struct_bases=[],
        name_mapping={
            "clipboard": "clipboard",
            "local_drive": "localDrive",
            "usb_redirect": "usbRedirect",
            "watermark": "watermark",
        },
    )
    class PolicyProperty:
        def __init__(
            self,
            *,
            clipboard: builtins.str,
            local_drive: builtins.str,
            usb_redirect: builtins.str,
            watermark: builtins.str,
        ) -> None:
            """
            :param clipboard: 
            :param local_drive: 
            :param usb_redirect: 
            :param watermark: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "clipboard": clipboard,
                "local_drive": local_drive,
                "usb_redirect": usb_redirect,
                "watermark": watermark,
            }

        @builtins.property
        def clipboard(self) -> builtins.str:
            """
            :Property: clipboard: Clipboard
            """
            result = self._values.get("clipboard")
            assert result is not None, "Required property 'clipboard' is missing"
            return result

        @builtins.property
        def local_drive(self) -> builtins.str:
            """
            :Property: localDrive: Local drive
            """
            result = self._values.get("local_drive")
            assert result is not None, "Required property 'local_drive' is missing"
            return result

        @builtins.property
        def usb_redirect(self) -> builtins.str:
            """
            :Property: usbRedirect: USB redirect
            """
            result = self._values.get("usb_redirect")
            assert result is not None, "Required property 'usb_redirect' is missing"
            return result

        @builtins.property
        def watermark(self) -> builtins.str:
            """
            :Property: watermark: Watermark
            """
            result = self._values.get("watermark")
            assert result is not None, "Required property 'watermark' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-gws.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_type": "clusterType",
        "vpc_id": "vpcId",
        "name": "name",
        "policy": "policy",
        "v_switch_id": "vSwitchId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        cluster_type: builtins.str,
        vpc_id: builtins.str,
        name: typing.Optional[builtins.str] = None,
        policy: typing.Optional[typing.Union[RosCluster.PolicyProperty, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GWS::Cluster``.

        :param cluster_type: 
        :param vpc_id: 
        :param name: 
        :param policy: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_type": cluster_type,
            "vpc_id": vpc_id,
        }
        if name is not None:
            self._values["name"] = name
        if policy is not None:
            self._values["policy"] = policy
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_type(self) -> builtins.str:
        """
        :Property:

        clusterType: Cluster Type:
        gws.s1.standard
        """
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return result

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC id
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Cluster name
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def policy(
        self,
    ) -> typing.Optional[typing.Union[RosCluster.PolicyProperty, ros_cdk_core.IResolvable]]:
        """
        :Property: policy: Cluster policy
        """
        result = self._values.get("policy")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch id
        """
        result = self._values.get("v_switch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-gws.RosInstance",
):
    """A ROS template type:  ``ALIYUN::GWS::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::GWS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosInstance, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster id
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceChargeType")
    def attr_instance_charge_type(self) -> typing.Any:
        """
        :Attribute: InstanceChargeType: Instance charge type
        """
        return jsii.get(self, "attrInstanceChargeType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance id
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMaxBandwidthIn")
    def attr_max_bandwidth_in(self) -> typing.Any:
        """
        :Attribute: MaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps)
        """
        return jsii.get(self, "attrMaxBandwidthIn")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMaxBandwidthOut")
    def attr_max_bandwidth_out(self) -> typing.Any:
        """
        :Attribute: MaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps)
        """
        return jsii.get(self, "attrMaxBandwidthOut")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: Instance name
        """
        return jsii.get(self, "attrName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterId")
    def cluster_id(self) -> builtins.str:
        """
        :Property: clusterId: Cluster id
        """
        return jsii.get(self, "clusterId")

    @cluster_id.setter # type: ignore
    def cluster_id(self, value: builtins.str) -> None:
        jsii.set(self, "clusterId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="imageId")
    def image_id(self) -> builtins.str:
        """
        :Property: imageId: Mirror id
        """
        return jsii.get(self, "imageId")

    @image_id.setter # type: ignore
    def image_id(self, value: builtins.str) -> None:
        jsii.set(self, "imageId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceType")
    def instance_type(self) -> builtins.str:
        """
        :Property: instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
        """
        return jsii.get(self, "instanceType")

    @instance_type.setter # type: ignore
    def instance_type(self, value: builtins.str) -> None:
        jsii.set(self, "instanceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="systemDiskCategory")
    def system_disk_category(self) -> builtins.str:
        """
        :Property: systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
        """
        return jsii.get(self, "systemDiskCategory")

    @system_disk_category.setter # type: ignore
    def system_disk_category(self, value: builtins.str) -> None:
        jsii.set(self, "systemDiskCategory", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="systemDiskSize")
    def system_disk_size(self) -> jsii.Number:
        """
        :Property: systemDiskSize: System disk size
        """
        return jsii.get(self, "systemDiskSize")

    @system_disk_size.setter # type: ignore
    def system_disk_size(self, value: jsii.Number) -> None:
        jsii.set(self, "systemDiskSize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workMode")
    def work_mode(self) -> builtins.str:
        """
        :Property:

        workMode: Work mode:
        Desktop
        Application
        """
        return jsii.get(self, "workMode")

    @work_mode.setter # type: ignore
    def work_mode(self, value: builtins.str) -> None:
        jsii.set(self, "workMode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="allocatePublicAddress")
    def allocate_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicAddress: Whether to allocate a public network address
        """
        return jsii.get(self, "allocatePublicAddress")

    @allocate_public_address.setter # type: ignore
    def allocate_public_address(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allocatePublicAddress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="appList")
    def app_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosInstance.AppListProperty"]]]]:
        """
        :Property: appList: App list. This value is only valid when WorkMode is Application.
        """
        return jsii.get(self, "appList")

    @app_list.setter # type: ignore
    def app_list(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosInstance.AppListProperty"]]]],
    ) -> None:
        jsii.set(self, "appList", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Whether auto renew
        """
        return jsii.get(self, "autoRenew")

    @auto_renew.setter # type: ignore
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceChargeType: Instance charge type:
        PostPaid (default): Pay-As-You-Go
        PrePaid: Subscription
        """
        return jsii.get(self, "instanceChargeType")

    @instance_charge_type.setter # type: ignore
    def instance_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: Network charge type:
        PayByTraffic (default): Flow-per-use billing
        PayByBandwidth: fixed-bandwidth billing
        This value is only valid when AllocatePublicAddress is true.
        """
        return jsii.get(self, "internetChargeType")

    @internet_charge_type.setter # type: ignore
    def internet_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetMaxBandwidthIn")
    def internet_max_bandwidth_in(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
        Value range: 1-200
        Default: 200
        This value is only valid when AllocatePublicAddress is true.
        """
        return jsii.get(self, "internetMaxBandwidthIn")

    @internet_max_bandwidth_in.setter # type: ignore
    def internet_max_bandwidth_in(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "internetMaxBandwidthIn", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetMaxBandwidthOut")
    def internet_max_bandwidth_out(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
        Value range: 1-200
        Default: 200
        This value is only valid when AllocatePublicAddress is true.
        """
        return jsii.get(self, "internetMaxBandwidthOut")

    @internet_max_bandwidth_out.setter # type: ignore
    def internet_max_bandwidth_out(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "internetMaxBandwidthOut", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Instance name
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        period: Period of subscription.
        When PeriodUnit is Week, the value range is 1-4
        When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
        This value is only valid when InstanceChargeType is PrePaid.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="periodUnit")
    def period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        periodUnit: Unit of period. Week or Month.
        This value is only valid when InstanceChargeType is PrePaid.
        """
        return jsii.get(self, "periodUnit")

    @period_unit.setter # type: ignore
    def period_unit(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "periodUnit", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch id
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-gws.RosInstance.AppListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "app_args": "appArgs",
            "app_name": "appName",
            "app_path": "appPath",
        },
    )
    class AppListProperty:
        def __init__(
            self,
            *,
            app_args: typing.Optional[builtins.str] = None,
            app_name: typing.Optional[builtins.str] = None,
            app_path: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param app_args: 
            :param app_name: 
            :param app_path: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if app_args is not None:
                self._values["app_args"] = app_args
            if app_name is not None:
                self._values["app_name"] = app_name
            if app_path is not None:
                self._values["app_path"] = app_path

        @builtins.property
        def app_args(self) -> typing.Optional[builtins.str]:
            """
            :Property: appArgs: The running parameters of the application.
            """
            result = self._values.get("app_args")
            return result

        @builtins.property
        def app_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: appName: The name of the application.
            """
            result = self._values.get("app_name")
            return result

        @builtins.property
        def app_path(self) -> typing.Optional[builtins.str]:
            """
            :Property: appPath: The running path of the application.
            """
            result = self._values.get("app_path")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AppListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-gws.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "image_id": "imageId",
        "instance_type": "instanceType",
        "system_disk_category": "systemDiskCategory",
        "system_disk_size": "systemDiskSize",
        "work_mode": "workMode",
        "allocate_public_address": "allocatePublicAddress",
        "app_list": "appList",
        "auto_renew": "autoRenew",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "internet_max_bandwidth_in": "internetMaxBandwidthIn",
        "internet_max_bandwidth_out": "internetMaxBandwidthOut",
        "name": "name",
        "period": "period",
        "period_unit": "periodUnit",
        "v_switch_id": "vSwitchId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        cluster_id: builtins.str,
        image_id: builtins.str,
        instance_type: builtins.str,
        system_disk_category: builtins.str,
        system_disk_size: jsii.Number,
        work_mode: builtins.str,
        allocate_public_address: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        app_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosInstance.AppListProperty]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[builtins.str] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        internet_max_bandwidth_in: typing.Optional[jsii.Number] = None,
        internet_max_bandwidth_out: typing.Optional[jsii.Number] = None,
        name: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        period_unit: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::GWS::Instance``.

        :param cluster_id: 
        :param image_id: 
        :param instance_type: 
        :param system_disk_category: 
        :param system_disk_size: 
        :param work_mode: 
        :param allocate_public_address: 
        :param app_list: 
        :param auto_renew: 
        :param instance_charge_type: 
        :param internet_charge_type: 
        :param internet_max_bandwidth_in: 
        :param internet_max_bandwidth_out: 
        :param name: 
        :param period: 
        :param period_unit: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "image_id": image_id,
            "instance_type": instance_type,
            "system_disk_category": system_disk_category,
            "system_disk_size": system_disk_size,
            "work_mode": work_mode,
        }
        if allocate_public_address is not None:
            self._values["allocate_public_address"] = allocate_public_address
        if app_list is not None:
            self._values["app_list"] = app_list
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if internet_max_bandwidth_in is not None:
            self._values["internet_max_bandwidth_in"] = internet_max_bandwidth_in
        if internet_max_bandwidth_out is not None:
            self._values["internet_max_bandwidth_out"] = internet_max_bandwidth_out
        if name is not None:
            self._values["name"] = name
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_id(self) -> builtins.str:
        """
        :Property: clusterId: Cluster id
        """
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return result

    @builtins.property
    def image_id(self) -> builtins.str:
        """
        :Property: imageId: Mirror id
        """
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return result

    @builtins.property
    def instance_type(self) -> builtins.str:
        """
        :Property: instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
        """
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return result

    @builtins.property
    def system_disk_category(self) -> builtins.str:
        """
        :Property: systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
        """
        result = self._values.get("system_disk_category")
        assert result is not None, "Required property 'system_disk_category' is missing"
        return result

    @builtins.property
    def system_disk_size(self) -> jsii.Number:
        """
        :Property: systemDiskSize: System disk size
        """
        result = self._values.get("system_disk_size")
        assert result is not None, "Required property 'system_disk_size' is missing"
        return result

    @builtins.property
    def work_mode(self) -> builtins.str:
        """
        :Property:

        workMode: Work mode:
        Desktop
        Application
        """
        result = self._values.get("work_mode")
        assert result is not None, "Required property 'work_mode' is missing"
        return result

    @builtins.property
    def allocate_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: allocatePublicAddress: Whether to allocate a public network address
        """
        result = self._values.get("allocate_public_address")
        return result

    @builtins.property
    def app_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosInstance.AppListProperty]]]]:
        """
        :Property: appList: App list. This value is only valid when WorkMode is Application.
        """
        result = self._values.get("app_list")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Whether auto renew
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceChargeType: Instance charge type:
        PostPaid (default): Pay-As-You-Go
        PrePaid: Subscription
        """
        result = self._values.get("instance_charge_type")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        internetChargeType: Network charge type:
        PayByTraffic (default): Flow-per-use billing
        PayByBandwidth: fixed-bandwidth billing
        This value is only valid when AllocatePublicAddress is true.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def internet_max_bandwidth_in(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
        Value range: 1-200
        Default: 200
        This value is only valid when AllocatePublicAddress is true.
        """
        result = self._values.get("internet_max_bandwidth_in")
        return result

    @builtins.property
    def internet_max_bandwidth_out(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
        Value range: 1-200
        Default: 200
        This value is only valid when AllocatePublicAddress is true.
        """
        result = self._values.get("internet_max_bandwidth_out")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property: name: Instance name
        """
        result = self._values.get("name")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        period: Period of subscription.
        When PeriodUnit is Week, the value range is 1-4
        When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
        This value is only valid when InstanceChargeType is PrePaid.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        periodUnit: Unit of period. Week or Month.
        This value is only valid when InstanceChargeType is PrePaid.
        """
        result = self._values.get("period_unit")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: VSwitch id
        """
        result = self._values.get("v_switch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "ClusterProps",
    "Instance",
    "InstanceProps",
    "RosCluster",
    "RosClusterProps",
    "RosInstance",
    "RosInstanceProps",
]

publication.publish()
