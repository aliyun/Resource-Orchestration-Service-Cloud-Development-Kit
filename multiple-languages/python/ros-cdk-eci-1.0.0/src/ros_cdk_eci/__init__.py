"""
## Aliyun ROS ECI Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_eci as ECI
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


class ContainerGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.ContainerGroup",
):
    """A ROS resource type:  ``ALIYUN::ECI::ContainerGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ContainerGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ECI::ContainerGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ContainerGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrContainerGroupId")
    def attr_container_group_id(self) -> typing.Any:
        """
        :Attribute: ContainerGroupId: The ID of the container group.
        """
        return jsii.get(self, "attrContainerGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrContainerGroupName")
    def attr_container_group_name(self) -> typing.Any:
        """
        :Attribute: ContainerGroupName: The name of the container group.
        """
        return jsii.get(self, "attrContainerGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEniInstanceId")
    def attr_eni_instance_id(self) -> typing.Any:
        """
        :Attribute: EniInstanceId: ENI instance ID.
        """
        return jsii.get(self, "attrEniInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetIp")
    def attr_internet_ip(self) -> typing.Any:
        """
        :Attribute: InternetIp: Internet IP.
        """
        return jsii.get(self, "attrInternetIp")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIntranetIp")
    def attr_intranet_ip(self) -> typing.Any:
        """
        :Attribute: IntranetIp: Intranet IP.
        """
        return jsii.get(self, "attrIntranetIp")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpv6Address")
    def attr_ipv6_address(self) -> typing.Any:
        """
        :Attribute: Ipv6Address: Ipv6 address.
        """
        return jsii.get(self, "attrIpv6Address")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(self) -> typing.Any:
        """
        :Attribute: RegionId: The ID of the region in which the instance resides.
        """
        return jsii.get(self, "attrRegionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> typing.Any:
        """
        :Attribute: SecurityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        """
        return jsii.get(self, "attrSecurityGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> typing.Any:
        """
        :Attribute: VSwitchId: The ID of the VSwitch. Currently, ECI instances can only be deployed in VPCs.
        """
        return jsii.get(self, "attrVSwitchId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> typing.Any:
        """
        :Attribute: ZoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        """
        return jsii.get(self, "attrZoneId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.ContainerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "container": "container",
        "container_group_name": "containerGroupName",
        "security_group_id": "securityGroupId",
        "v_switch_id": "vSwitchId",
        "active_deadline_seconds": "activeDeadlineSeconds",
        "auto_match_image_cache": "autoMatchImageCache",
        "cpu": "cpu",
        "dns_config": "dnsConfig",
        "eip_instance_id": "eipInstanceId",
        "host_aliase": "hostAliase",
        "image_registry_credential": "imageRegistryCredential",
        "image_snapshot_id": "imageSnapshotId",
        "init_container": "initContainer",
        "instance_type": "instanceType",
        "ipv6_address_count": "ipv6AddressCount",
        "memory": "memory",
        "ram_role_name": "ramRoleName",
        "restart_policy": "restartPolicy",
        "security_context_sysctl": "securityContextSysctl",
        "sls_enable": "slsEnable",
        "spot_price_limit": "spotPriceLimit",
        "spot_strategy": "spotStrategy",
        "tag": "tag",
        "termination_grace_period_seconds": "terminationGracePeriodSeconds",
        "volume": "volume",
        "zone_id": "zoneId",
    },
)
class ContainerGroupProps:
    def __init__(
        self,
        *,
        container: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosContainerGroup.ContainerProperty", ros_cdk_core.IResolvable]]],
        container_group_name: builtins.str,
        security_group_id: builtins.str,
        v_switch_id: builtins.str,
        active_deadline_seconds: typing.Optional[jsii.Number] = None,
        auto_match_image_cache: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cpu: typing.Optional[jsii.Number] = None,
        dns_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.DnsConfigProperty"]] = None,
        eip_instance_id: typing.Optional[builtins.str] = None,
        host_aliase: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.HostAliaseProperty"]]]] = None,
        image_registry_credential: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.ImageRegistryCredentialProperty"]]]] = None,
        image_snapshot_id: typing.Optional[builtins.str] = None,
        init_container: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.InitContainerProperty"]]]] = None,
        instance_type: typing.Optional[builtins.str] = None,
        ipv6_address_count: typing.Optional[jsii.Number] = None,
        memory: typing.Optional[jsii.Number] = None,
        ram_role_name: typing.Optional[builtins.str] = None,
        restart_policy: typing.Optional[builtins.str] = None,
        security_context_sysctl: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.SecurityContextSysctlProperty"]]]] = None,
        sls_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        spot_price_limit: typing.Optional[jsii.Number] = None,
        spot_strategy: typing.Optional[builtins.str] = None,
        tag: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]] = None,
        termination_grace_period_seconds: typing.Optional[jsii.Number] = None,
        volume: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.VolumeProperty"]]]] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ECI::ContainerGroup``.

        :param container: 
        :param container_group_name: 
        :param security_group_id: 
        :param v_switch_id: 
        :param active_deadline_seconds: 
        :param auto_match_image_cache: 
        :param cpu: 
        :param dns_config: 
        :param eip_instance_id: 
        :param host_aliase: 
        :param image_registry_credential: 
        :param image_snapshot_id: 
        :param init_container: 
        :param instance_type: 
        :param ipv6_address_count: 
        :param memory: 
        :param ram_role_name: 
        :param restart_policy: 
        :param security_context_sysctl: 
        :param sls_enable: 
        :param spot_price_limit: 
        :param spot_strategy: 
        :param tag: 
        :param termination_grace_period_seconds: 
        :param volume: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "container": container,
            "container_group_name": container_group_name,
            "security_group_id": security_group_id,
            "v_switch_id": v_switch_id,
        }
        if active_deadline_seconds is not None:
            self._values["active_deadline_seconds"] = active_deadline_seconds
        if auto_match_image_cache is not None:
            self._values["auto_match_image_cache"] = auto_match_image_cache
        if cpu is not None:
            self._values["cpu"] = cpu
        if dns_config is not None:
            self._values["dns_config"] = dns_config
        if eip_instance_id is not None:
            self._values["eip_instance_id"] = eip_instance_id
        if host_aliase is not None:
            self._values["host_aliase"] = host_aliase
        if image_registry_credential is not None:
            self._values["image_registry_credential"] = image_registry_credential
        if image_snapshot_id is not None:
            self._values["image_snapshot_id"] = image_snapshot_id
        if init_container is not None:
            self._values["init_container"] = init_container
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if ipv6_address_count is not None:
            self._values["ipv6_address_count"] = ipv6_address_count
        if memory is not None:
            self._values["memory"] = memory
        if ram_role_name is not None:
            self._values["ram_role_name"] = ram_role_name
        if restart_policy is not None:
            self._values["restart_policy"] = restart_policy
        if security_context_sysctl is not None:
            self._values["security_context_sysctl"] = security_context_sysctl
        if sls_enable is not None:
            self._values["sls_enable"] = sls_enable
        if spot_price_limit is not None:
            self._values["spot_price_limit"] = spot_price_limit
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy
        if tag is not None:
            self._values["tag"] = tag
        if termination_grace_period_seconds is not None:
            self._values["termination_grace_period_seconds"] = termination_grace_period_seconds
        if volume is not None:
            self._values["volume"] = volume
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def container(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosContainerGroup.ContainerProperty", ros_cdk_core.IResolvable]]]:
        """
        :Property: container: The containers that constitute the container group.
        """
        result = self._values.get("container")
        assert result is not None, "Required property 'container' is missing"
        return result

    @builtins.property
    def container_group_name(self) -> builtins.str:
        """
        :Property:

        containerGroupName: The name of the container group.
        The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        """
        result = self._values.get("container_group_name")
        assert result is not None, "Required property 'container_group_name' is missing"
        return result

    @builtins.property
    def security_group_id(self) -> builtins.str:
        """
        :Property: securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        """
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return result

    @builtins.property
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.
        """
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return result

    @builtins.property
    def active_deadline_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property: activeDeadlineSeconds: The validity period in seconds.
        """
        result = self._values.get("active_deadline_seconds")
        return result

    @builtins.property
    def auto_match_image_cache(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoMatchImageCache: Specifies whether to automatically match the image cache.
        """
        result = self._values.get("auto_match_image_cache")
        return result

    @builtins.property
    def cpu(self) -> typing.Optional[jsii.Number]:
        """
        :Property: cpu: CPU size
        """
        result = self._values.get("cpu")
        return result

    @builtins.property
    def dns_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.DnsConfigProperty"]]:
        """
        :Property: dnsConfig: The information about DNS configurations.
        """
        result = self._values.get("dns_config")
        return result

    @builtins.property
    def eip_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: eipInstanceId: Elastic IP ID
        """
        result = self._values.get("eip_instance_id")
        return result

    @builtins.property
    def host_aliase(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.HostAliaseProperty"]]]]:
        """
        :Property: hostAliase: Customize the hostname mapping of a container inside the pod
        """
        result = self._values.get("host_aliase")
        return result

    @builtins.property
    def image_registry_credential(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.ImageRegistryCredentialProperty"]]]]:
        """
        :Property: imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
        """
        result = self._values.get("image_registry_credential")
        return result

    @builtins.property
    def image_snapshot_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: imageSnapshotId: Image cache ID or snapshot ID.
        """
        result = self._values.get("image_snapshot_id")
        return result

    @builtins.property
    def init_container(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.InitContainerProperty"]]]]:
        """
        :Property: initContainer: The containers that constitute the container group for initializing.
        """
        result = self._values.get("init_container")
        return result

    @builtins.property
    def instance_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceType: The type of the ECS instance.
        """
        result = self._values.get("instance_type")
        return result

    @builtins.property
    def ipv6_address_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ipv6AddressCount: The number of IPv6 addresses.
        """
        result = self._values.get("ipv6_address_count")
        return result

    @builtins.property
    def memory(self) -> typing.Optional[jsii.Number]:
        """
        :Property: memory: memory size
        """
        result = self._values.get("memory")
        return result

    @builtins.property
    def ram_role_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
        """
        result = self._values.get("ram_role_name")
        return result

    @builtins.property
    def restart_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: restartPolicy: The policy for restarting the instance. Default value: Always.
        """
        result = self._values.get("restart_policy")
        return result

    @builtins.property
    def security_context_sysctl(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.SecurityContextSysctlProperty"]]]]:
        """
        :Property:

        securityContextSysctl: ECI Sysctl is valid for every container in ECI.
        Currently only two Sysctl keyNames are supported:
        Kernel.shm_rmid_forced
        Kernel.msgmax
        """
        result = self._values.get("security_context_sysctl")
        return result

    @builtins.property
    def sls_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: slsEnable: Enable user log collection. The default is False.
        """
        result = self._values.get("sls_enable")
        return result

    @builtins.property
    def spot_price_limit(self) -> typing.Optional[jsii.Number]:
        """
        :Property: spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        """
        result = self._values.get("spot_price_limit")
        return result

    @builtins.property
    def spot_strategy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        spotStrategy: Instance preemption strategy.
        Ranges:
        NoSpot (default): normal pay-as-you-go instances.
        SpotWithPriceLimit: Preemptive instance that sets a cap price.
        SpotAsPriceGo: The system automatically bids, following the current market actual price.
        """
        result = self._values.get("spot_strategy")
        return result

    @builtins.property
    def tag(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]]:
        """
        :Property: tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
        """
        result = self._values.get("tag")
        return result

    @builtins.property
    def termination_grace_period_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property: terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
        """
        result = self._values.get("termination_grace_period_seconds")
        return result

    @builtins.property
    def volume(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.VolumeProperty"]]]]:
        """
        :Property: volume: The data volume. You can specify a maximum of 20 data volumes.
        """
        result = self._values.get("volume")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ContainerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ImageCache(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.ImageCache",
):
    """A ROS resource type:  ``ALIYUN::ECI::ImageCache``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ImageCacheProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ECI::ImageCache``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ImageCache, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrImageCacheId")
    def attr_image_cache_id(self) -> typing.Any:
        """
        :Attribute: ImageCacheId: The ID of the image cache.
        """
        return jsii.get(self, "attrImageCacheId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.ImageCacheProps",
    jsii_struct_bases=[],
    name_mapping={
        "image": "image",
        "image_cache_name": "imageCacheName",
        "security_group_id": "securityGroupId",
        "v_switch_id": "vSwitchId",
        "eip_instance_id": "eipInstanceId",
        "image_registry_credential": "imageRegistryCredential",
        "resource_group_id": "resourceGroupId",
    },
)
class ImageCacheProps:
    def __init__(
        self,
        *,
        image: typing.List[builtins.str],
        image_cache_name: builtins.str,
        security_group_id: builtins.str,
        v_switch_id: builtins.str,
        eip_instance_id: typing.Optional[builtins.str] = None,
        image_registry_credential: typing.Optional[typing.List[builtins.str]] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ECI::ImageCache``.

        :param image: 
        :param image_cache_name: 
        :param security_group_id: 
        :param v_switch_id: 
        :param eip_instance_id: 
        :param image_registry_credential: 
        :param resource_group_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "image": image,
            "image_cache_name": image_cache_name,
            "security_group_id": security_group_id,
            "v_switch_id": v_switch_id,
        }
        if eip_instance_id is not None:
            self._values["eip_instance_id"] = eip_instance_id
        if image_registry_credential is not None:
            self._values["image_registry_credential"] = image_registry_credential
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def image(self) -> typing.List[builtins.str]:
        """
        :Property: image: The image list to be cached.
        """
        result = self._values.get("image")
        assert result is not None, "Required property 'image' is missing"
        return result

    @builtins.property
    def image_cache_name(self) -> builtins.str:
        """
        :Property: imageCacheName: Image cache name.
        """
        result = self._values.get("image_cache_name")
        assert result is not None, "Required property 'image_cache_name' is missing"
        return result

    @builtins.property
    def security_group_id(self) -> builtins.str:
        """
        :Property: securityGroupId: Security group ID.
        """
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return result

    @builtins.property
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return result

    @builtins.property
    def eip_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
        """
        result = self._values.get("eip_instance_id")
        return result

    @builtins.property
    def image_registry_credential(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
        """
        result = self._values.get("image_registry_credential")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImageCacheProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosContainerGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup",
):
    """A ROS template type:  ``ALIYUN::ECI::ContainerGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosContainerGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ECI::ContainerGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosContainerGroup, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrContainerGroupId")
    def attr_container_group_id(self) -> typing.Any:
        """
        :Attribute: ContainerGroupId: The ID of the container group.
        """
        return jsii.get(self, "attrContainerGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrContainerGroupName")
    def attr_container_group_name(self) -> typing.Any:
        """
        :Attribute: ContainerGroupName: The name of the container group.
        """
        return jsii.get(self, "attrContainerGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEniInstanceId")
    def attr_eni_instance_id(self) -> typing.Any:
        """
        :Attribute: EniInstanceId: ENI instance ID.
        """
        return jsii.get(self, "attrEniInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetIp")
    def attr_internet_ip(self) -> typing.Any:
        """
        :Attribute: InternetIp: Internet IP.
        """
        return jsii.get(self, "attrInternetIp")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIntranetIp")
    def attr_intranet_ip(self) -> typing.Any:
        """
        :Attribute: IntranetIp: Intranet IP.
        """
        return jsii.get(self, "attrIntranetIp")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpv6Address")
    def attr_ipv6_address(self) -> typing.Any:
        """
        :Attribute: Ipv6Address: Ipv6 address.
        """
        return jsii.get(self, "attrIpv6Address")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(self) -> typing.Any:
        """
        :Attribute: RegionId: The ID of the region in which the instance resides.
        """
        return jsii.get(self, "attrRegionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> typing.Any:
        """
        :Attribute: SecurityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        """
        return jsii.get(self, "attrSecurityGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> typing.Any:
        """
        :Attribute: VSwitchId: The ID of the VSwitch. Currently, ECI instances can only be deployed in VPCs.
        """
        return jsii.get(self, "attrVSwitchId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> typing.Any:
        """
        :Attribute: ZoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        """
        return jsii.get(self, "attrZoneId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="container")
    def container(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosContainerGroup.ContainerProperty", ros_cdk_core.IResolvable]]]:
        """
        :Property: container: The containers that constitute the container group.
        """
        return jsii.get(self, "container")

    @container.setter # type: ignore
    def container(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosContainerGroup.ContainerProperty", ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "container", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="containerGroupName")
    def container_group_name(self) -> builtins.str:
        """
        :Property:

        containerGroupName: The name of the container group.
        The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        """
        return jsii.get(self, "containerGroupName")

    @container_group_name.setter # type: ignore
    def container_group_name(self, value: builtins.str) -> None:
        jsii.set(self, "containerGroupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> builtins.str:
        """
        :Property: securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: builtins.str) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: builtins.str) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="activeDeadlineSeconds")
    def active_deadline_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property: activeDeadlineSeconds: The validity period in seconds.
        """
        return jsii.get(self, "activeDeadlineSeconds")

    @active_deadline_seconds.setter # type: ignore
    def active_deadline_seconds(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "activeDeadlineSeconds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoMatchImageCache")
    def auto_match_image_cache(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoMatchImageCache: Specifies whether to automatically match the image cache.
        """
        return jsii.get(self, "autoMatchImageCache")

    @auto_match_image_cache.setter # type: ignore
    def auto_match_image_cache(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoMatchImageCache", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cpu")
    def cpu(self) -> typing.Optional[jsii.Number]:
        """
        :Property: cpu: CPU size
        """
        return jsii.get(self, "cpu")

    @cpu.setter # type: ignore
    def cpu(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "cpu", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dnsConfig")
    def dns_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.DnsConfigProperty"]]:
        """
        :Property: dnsConfig: The information about DNS configurations.
        """
        return jsii.get(self, "dnsConfig")

    @dns_config.setter # type: ignore
    def dns_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.DnsConfigProperty"]],
    ) -> None:
        jsii.set(self, "dnsConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="eipInstanceId")
    def eip_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: eipInstanceId: Elastic IP ID
        """
        return jsii.get(self, "eipInstanceId")

    @eip_instance_id.setter # type: ignore
    def eip_instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "eipInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="hostAliase")
    def host_aliase(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.HostAliaseProperty"]]]]:
        """
        :Property: hostAliase: Customize the hostname mapping of a container inside the pod
        """
        return jsii.get(self, "hostAliase")

    @host_aliase.setter # type: ignore
    def host_aliase(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.HostAliaseProperty"]]]],
    ) -> None:
        jsii.set(self, "hostAliase", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="imageRegistryCredential")
    def image_registry_credential(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.ImageRegistryCredentialProperty"]]]]:
        """
        :Property: imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
        """
        return jsii.get(self, "imageRegistryCredential")

    @image_registry_credential.setter # type: ignore
    def image_registry_credential(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.ImageRegistryCredentialProperty"]]]],
    ) -> None:
        jsii.set(self, "imageRegistryCredential", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="imageSnapshotId")
    def image_snapshot_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: imageSnapshotId: Image cache ID or snapshot ID.
        """
        return jsii.get(self, "imageSnapshotId")

    @image_snapshot_id.setter # type: ignore
    def image_snapshot_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "imageSnapshotId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="initContainer")
    def init_container(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.InitContainerProperty"]]]]:
        """
        :Property: initContainer: The containers that constitute the container group for initializing.
        """
        return jsii.get(self, "initContainer")

    @init_container.setter # type: ignore
    def init_container(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.InitContainerProperty"]]]],
    ) -> None:
        jsii.set(self, "initContainer", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceType")
    def instance_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceType: The type of the ECS instance.
        """
        return jsii.get(self, "instanceType")

    @instance_type.setter # type: ignore
    def instance_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ipv6AddressCount")
    def ipv6_address_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ipv6AddressCount: The number of IPv6 addresses.
        """
        return jsii.get(self, "ipv6AddressCount")

    @ipv6_address_count.setter # type: ignore
    def ipv6_address_count(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "ipv6AddressCount", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="memory")
    def memory(self) -> typing.Optional[jsii.Number]:
        """
        :Property: memory: memory size
        """
        return jsii.get(self, "memory")

    @memory.setter # type: ignore
    def memory(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "memory", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ramRoleName")
    def ram_role_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
        """
        return jsii.get(self, "ramRoleName")

    @ram_role_name.setter # type: ignore
    def ram_role_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "ramRoleName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restartPolicy")
    def restart_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: restartPolicy: The policy for restarting the instance. Default value: Always.
        """
        return jsii.get(self, "restartPolicy")

    @restart_policy.setter # type: ignore
    def restart_policy(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "restartPolicy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityContextSysctl")
    def security_context_sysctl(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.SecurityContextSysctlProperty"]]]]:
        """
        :Property:

        securityContextSysctl: ECI Sysctl is valid for every container in ECI.
        Currently only two Sysctl keyNames are supported:
        Kernel.shm_rmid_forced
        Kernel.msgmax
        """
        return jsii.get(self, "securityContextSysctl")

    @security_context_sysctl.setter # type: ignore
    def security_context_sysctl(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.SecurityContextSysctlProperty"]]]],
    ) -> None:
        jsii.set(self, "securityContextSysctl", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="slsEnable")
    def sls_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: slsEnable: Enable user log collection. The default is False.
        """
        return jsii.get(self, "slsEnable")

    @sls_enable.setter # type: ignore
    def sls_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "slsEnable", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="spotPriceLimit")
    def spot_price_limit(self) -> typing.Optional[jsii.Number]:
        """
        :Property: spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        """
        return jsii.get(self, "spotPriceLimit")

    @spot_price_limit.setter # type: ignore
    def spot_price_limit(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "spotPriceLimit", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="spotStrategy")
    def spot_strategy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        spotStrategy: Instance preemption strategy.
        Ranges:
        NoSpot (default): normal pay-as-you-go instances.
        SpotWithPriceLimit: Preemptive instance that sets a cap price.
        SpotAsPriceGo: The system automatically bids, following the current market actual price.
        """
        return jsii.get(self, "spotStrategy")

    @spot_strategy.setter # type: ignore
    def spot_strategy(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "spotStrategy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tag")
    def tag(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]]:
        """
        :Property: tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
        """
        return jsii.get(self, "tag")

    @tag.setter # type: ignore
    def tag(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]],
    ) -> None:
        jsii.set(self, "tag", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="terminationGracePeriodSeconds")
    def termination_grace_period_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property: terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
        """
        return jsii.get(self, "terminationGracePeriodSeconds")

    @termination_grace_period_seconds.setter # type: ignore
    def termination_grace_period_seconds(
        self,
        value: typing.Optional[jsii.Number],
    ) -> None:
        jsii.set(self, "terminationGracePeriodSeconds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="volume")
    def volume(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.VolumeProperty"]]]]:
        """
        :Property: volume: The data volume. You can specify a maximum of 20 data volumes.
        """
        return jsii.get(self, "volume")

    @volume.setter # type: ignore
    def volume(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.VolumeProperty"]]]],
    ) -> None:
        jsii.set(self, "volume", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty",
        jsii_struct_bases=[],
        name_mapping={"path": "path", "content": "content"},
    )
    class ConfigFileVolumeConfigFileToPathProperty:
        def __init__(
            self,
            *,
            path: builtins.str,
            content: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param path: 
            :param content: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "path": path,
            }
            if content is not None:
                self._values["content"] = content

        @builtins.property
        def path(self) -> builtins.str:
            """
            :Property: path: The relative path in the configuration file. You can specify a location of a directory relative to another directory.
            """
            result = self._values.get("path")
            assert result is not None, "Required property 'path' is missing"
            return result

        @builtins.property
        def content(self) -> typing.Optional[builtins.str]:
            """
            :Property: content: The content of the configuration file. Maximum size: 32 KB.
            """
            result = self._values.get("content")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigFileVolumeConfigFileToPathProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty",
        jsii_struct_bases=[],
        name_mapping={
            "image": "image",
            "name": "name",
            "arg": "arg",
            "command": "command",
            "cpu": "cpu",
            "environment_var": "environmentVar",
            "image_pull_policy": "imagePullPolicy",
            "liveness_probe": "livenessProbe",
            "memory": "memory",
            "port": "port",
            "readiness_probe": "readinessProbe",
            "security_context": "securityContext",
            "stdin": "stdin",
            "stdin_once": "stdinOnce",
            "tty": "tty",
            "volume_mount": "volumeMount",
            "working_dir": "workingDir",
        },
    )
    class ContainerProperty:
        def __init__(
            self,
            *,
            image: builtins.str,
            name: builtins.str,
            arg: typing.Optional[typing.List[builtins.str]] = None,
            command: typing.Optional[typing.List[builtins.str]] = None,
            cpu: typing.Optional[jsii.Number] = None,
            environment_var: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.EnvironmentVarProperty"]]]] = None,
            image_pull_policy: typing.Optional[builtins.str] = None,
            liveness_probe: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.LivenessProbeProperty"]] = None,
            memory: typing.Optional[jsii.Number] = None,
            port: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.PortProperty"]]]] = None,
            readiness_probe: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.ReadinessProbeProperty"]] = None,
            security_context: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.SecurityContextProperty"]] = None,
            stdin: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            stdin_once: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            tty: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            volume_mount: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.VolumeMountProperty"]]]] = None,
            working_dir: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param image: 
            :param name: 
            :param arg: 
            :param command: 
            :param cpu: 
            :param environment_var: 
            :param image_pull_policy: 
            :param liveness_probe: 
            :param memory: 
            :param port: 
            :param readiness_probe: 
            :param security_context: 
            :param stdin: 
            :param stdin_once: 
            :param tty: 
            :param volume_mount: 
            :param working_dir: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "image": image,
                "name": name,
            }
            if arg is not None:
                self._values["arg"] = arg
            if command is not None:
                self._values["command"] = command
            if cpu is not None:
                self._values["cpu"] = cpu
            if environment_var is not None:
                self._values["environment_var"] = environment_var
            if image_pull_policy is not None:
                self._values["image_pull_policy"] = image_pull_policy
            if liveness_probe is not None:
                self._values["liveness_probe"] = liveness_probe
            if memory is not None:
                self._values["memory"] = memory
            if port is not None:
                self._values["port"] = port
            if readiness_probe is not None:
                self._values["readiness_probe"] = readiness_probe
            if security_context is not None:
                self._values["security_context"] = security_context
            if stdin is not None:
                self._values["stdin"] = stdin
            if stdin_once is not None:
                self._values["stdin_once"] = stdin_once
            if tty is not None:
                self._values["tty"] = tty
            if volume_mount is not None:
                self._values["volume_mount"] = volume_mount
            if working_dir is not None:
                self._values["working_dir"] = working_dir

        @builtins.property
        def image(self) -> builtins.str:
            """
            :Property: image: The container image.
            """
            result = self._values.get("image")
            assert result is not None, "Required property 'image' is missing"
            return result

        @builtins.property
        def name(self) -> builtins.str:
            """
            :Property: name: The name of the container.
            """
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return result

        @builtins.property
        def arg(self) -> typing.Optional[typing.List[builtins.str]]:
            """
            :Property: arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
            """
            result = self._values.get("arg")
            return result

        @builtins.property
        def command(self) -> typing.Optional[typing.List[builtins.str]]:
            """
            :Property: command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
            """
            result = self._values.get("command")
            return result

        @builtins.property
        def cpu(self) -> typing.Optional[jsii.Number]:
            """
            :Property: cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
            """
            result = self._values.get("cpu")
            return result

        @builtins.property
        def environment_var(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.EnvironmentVarProperty"]]]]:
            """
            :Property: environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
            """
            result = self._values.get("environment_var")
            return result

        @builtins.property
        def image_pull_policy(self) -> typing.Optional[builtins.str]:
            """
            :Property: imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
            """
            result = self._values.get("image_pull_policy")
            return result

        @builtins.property
        def liveness_probe(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.LivenessProbeProperty"]]:
            """
            :Property: livenessProbe: The liveness probe.
            """
            result = self._values.get("liveness_probe")
            return result

        @builtins.property
        def memory(self) -> typing.Optional[jsii.Number]:
            """
            :Property: memory: The memory assigned to the container. Unit: GiB.
            """
            result = self._values.get("memory")
            return result

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.PortProperty"]]]]:
            """
            :Property: port: The open ports and protocols. You can set a maximum of 100 ports.
            """
            result = self._values.get("port")
            return result

        @builtins.property
        def readiness_probe(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.ReadinessProbeProperty"]]:
            """
            :Property: readinessProbe: The readiness probe.
            """
            result = self._values.get("readiness_probe")
            return result

        @builtins.property
        def security_context(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.SecurityContextProperty"]]:
            """
            :Property: securityContext: The security context of the container group.
            """
            result = self._values.get("security_context")
            return result

        @builtins.property
        def stdin(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: stdin: undefined
            """
            result = self._values.get("stdin")
            return result

        @builtins.property
        def stdin_once(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: stdinOnce: undefined
            """
            result = self._values.get("stdin_once")
            return result

        @builtins.property
        def tty(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: tty: undefined
            """
            result = self._values.get("tty")
            return result

        @builtins.property
        def volume_mount(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.VolumeMountProperty"]]]]:
            """
            :Property: volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
            """
            result = self._values.get("volume_mount")
            return result

        @builtins.property
        def working_dir(self) -> typing.Optional[builtins.str]:
            """
            :Property: workingDir: The working directory for the container.
            """
            result = self._values.get("working_dir")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ContainerProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name_server": "nameServer",
            "option": "option",
            "search": "search",
        },
    )
    class DnsConfigProperty:
        def __init__(
            self,
            *,
            name_server: typing.Optional[typing.List[builtins.str]] = None,
            option: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.OptionProperty"]]]] = None,
            search: typing.Optional[typing.List[builtins.str]] = None,
        ) -> None:
            """
            :param name_server: 
            :param option: 
            :param search: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if name_server is not None:
                self._values["name_server"] = name_server
            if option is not None:
                self._values["option"] = option
            if search is not None:
                self._values["search"] = search

        @builtins.property
        def name_server(self) -> typing.Optional[typing.List[builtins.str]]:
            """
            :Property: nameServer: The list of IP addresses for DNS servers.
            """
            result = self._values.get("name_server")
            return result

        @builtins.property
        def option(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.OptionProperty"]]]]:
            """
            :Property: option: The list of options. Each option includes a name and a value. The value is optional.
            """
            result = self._values.get("option")
            return result

        @builtins.property
        def search(self) -> typing.Optional[typing.List[builtins.str]]:
            """
            :Property: search: The list of DNS search domains.
            """
            result = self._values.get("search")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DnsConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_ref_field_path": "fieldRefFieldPath",
            "key": "key",
            "value": "value",
        },
    )
    class EnvironmentVarProperty:
        def __init__(
            self,
            *,
            field_ref_field_path: typing.Optional[builtins.str] = None,
            key: typing.Optional[builtins.str] = None,
            value: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param field_ref_field_path: 
            :param key: 
            :param value: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if field_ref_field_path is not None:
                self._values["field_ref_field_path"] = field_ref_field_path
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def field_ref_field_path(self) -> typing.Optional[builtins.str]:
            """
            :Property: fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
            """
            result = self._values.get("field_ref_field_path")
            return result

        @builtins.property
        def key(self) -> typing.Optional[builtins.str]:
            """
            :Property: key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
            """
            result = self._values.get("key")
            return result

        @builtins.property
        def value(self) -> typing.Optional[builtins.str]:
            """
            :Property: value: The value of the variable.
            """
            result = self._values.get("value")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EnvironmentVarProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty",
        jsii_struct_bases=[],
        name_mapping={"hostname": "hostname", "ip": "ip"},
    )
    class HostAliaseProperty:
        def __init__(
            self,
            *,
            hostname: typing.Optional[typing.List[builtins.str]] = None,
            ip: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param hostname: 
            :param ip: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if hostname is not None:
                self._values["hostname"] = hostname
            if ip is not None:
                self._values["ip"] = ip

        @builtins.property
        def hostname(self) -> typing.Optional[typing.List[builtins.str]]:
            """
            :Property: hostname: undefined
            """
            result = self._values.get("hostname")
            return result

        @builtins.property
        def ip(self) -> typing.Optional[builtins.str]:
            """
            :Property: ip: undefined
            """
            result = self._values.get("ip")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HostAliaseProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty",
        jsii_struct_bases=[],
        name_mapping={
            "password": "password",
            "server": "server",
            "user_name": "userName",
        },
    )
    class ImageRegistryCredentialProperty:
        def __init__(
            self,
            *,
            password: builtins.str,
            server: builtins.str,
            user_name: builtins.str,
        ) -> None:
            """
            :param password: 
            :param server: 
            :param user_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "password": password,
                "server": server,
                "user_name": user_name,
            }

        @builtins.property
        def password(self) -> builtins.str:
            """
            :Property: password: The password that is used to log on to the image repository.
            """
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return result

        @builtins.property
        def server(self) -> builtins.str:
            """
            :Property: server: The IP address of the image repository. This address does not include a protocol prefix, such as http:// or https://.
            """
            result = self._values.get("server")
            assert result is not None, "Required property 'server' is missing"
            return result

        @builtins.property
        def user_name(self) -> builtins.str:
            """
            :Property: userName: The username that is used to log on to the image repository.
            """
            result = self._values.get("user_name")
            assert result is not None, "Required property 'user_name' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ImageRegistryCredentialProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty",
        jsii_struct_bases=[],
        name_mapping={
            "arg": "arg",
            "command": "command",
            "cpu": "cpu",
            "environment_var": "environmentVar",
            "image": "image",
            "image_pull_policy": "imagePullPolicy",
            "memory": "memory",
            "name": "name",
            "port": "port",
            "security_context": "securityContext",
            "volume_mount": "volumeMount",
            "working_dir": "workingDir",
        },
    )
    class InitContainerProperty:
        def __init__(
            self,
            *,
            arg: typing.Optional[typing.List[builtins.str]] = None,
            command: typing.Optional[typing.List[builtins.str]] = None,
            cpu: typing.Optional[jsii.Number] = None,
            environment_var: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.EnvironmentVarProperty"]]]] = None,
            image: typing.Optional[builtins.str] = None,
            image_pull_policy: typing.Optional[builtins.str] = None,
            memory: typing.Optional[jsii.Number] = None,
            name: typing.Optional[builtins.str] = None,
            port: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.PortProperty"]]]] = None,
            security_context: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.SecurityContextProperty"]] = None,
            volume_mount: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.VolumeMountProperty"]]]] = None,
            working_dir: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param arg: 
            :param command: 
            :param cpu: 
            :param environment_var: 
            :param image: 
            :param image_pull_policy: 
            :param memory: 
            :param name: 
            :param port: 
            :param security_context: 
            :param volume_mount: 
            :param working_dir: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if arg is not None:
                self._values["arg"] = arg
            if command is not None:
                self._values["command"] = command
            if cpu is not None:
                self._values["cpu"] = cpu
            if environment_var is not None:
                self._values["environment_var"] = environment_var
            if image is not None:
                self._values["image"] = image
            if image_pull_policy is not None:
                self._values["image_pull_policy"] = image_pull_policy
            if memory is not None:
                self._values["memory"] = memory
            if name is not None:
                self._values["name"] = name
            if port is not None:
                self._values["port"] = port
            if security_context is not None:
                self._values["security_context"] = security_context
            if volume_mount is not None:
                self._values["volume_mount"] = volume_mount
            if working_dir is not None:
                self._values["working_dir"] = working_dir

        @builtins.property
        def arg(self) -> typing.Optional[typing.List[builtins.str]]:
            """
            :Property: arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
            """
            result = self._values.get("arg")
            return result

        @builtins.property
        def command(self) -> typing.Optional[typing.List[builtins.str]]:
            """
            :Property: command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
            """
            result = self._values.get("command")
            return result

        @builtins.property
        def cpu(self) -> typing.Optional[jsii.Number]:
            """
            :Property: cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
            """
            result = self._values.get("cpu")
            return result

        @builtins.property
        def environment_var(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.EnvironmentVarProperty"]]]]:
            """
            :Property: environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
            """
            result = self._values.get("environment_var")
            return result

        @builtins.property
        def image(self) -> typing.Optional[builtins.str]:
            """
            :Property: image: The container image.
            """
            result = self._values.get("image")
            return result

        @builtins.property
        def image_pull_policy(self) -> typing.Optional[builtins.str]:
            """
            :Property: imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
            """
            result = self._values.get("image_pull_policy")
            return result

        @builtins.property
        def memory(self) -> typing.Optional[jsii.Number]:
            """
            :Property: memory: The memory assigned to the container. Unit: GiB.
            """
            result = self._values.get("memory")
            return result

        @builtins.property
        def name(self) -> typing.Optional[builtins.str]:
            """
            :Property: name: The name of the container.
            """
            result = self._values.get("name")
            return result

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.PortProperty"]]]]:
            """
            :Property: port: The open ports and protocols. You can set a maximum of 100 ports.
            """
            result = self._values.get("port")
            return result

        @builtins.property
        def security_context(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.SecurityContextProperty"]]:
            """
            :Property: securityContext: The security context of the container group.
            """
            result = self._values.get("security_context")
            return result

        @builtins.property
        def volume_mount(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.VolumeMountProperty"]]]]:
            """
            :Property: volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
            """
            result = self._values.get("volume_mount")
            return result

        @builtins.property
        def working_dir(self) -> typing.Optional[builtins.str]:
            """
            :Property: workingDir: The working directory for the container.
            """
            result = self._values.get("working_dir")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InitContainerProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.LivenessProbeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "exec_command": "execCommand",
            "failure_threshold": "failureThreshold",
            "http_get_path": "httpGetPath",
            "http_get_port": "httpGetPort",
            "http_get_scheme": "httpGetScheme",
            "initial_delay_seconds": "initialDelaySeconds",
            "period_seconds": "periodSeconds",
            "success_threshold": "successThreshold",
            "tcp_socket_port": "tcpSocketPort",
            "timeout_seconds": "timeoutSeconds",
        },
    )
    class LivenessProbeProperty:
        def __init__(
            self,
            *,
            exec_command: typing.Optional[typing.List[builtins.str]] = None,
            failure_threshold: typing.Optional[jsii.Number] = None,
            http_get_path: typing.Optional[builtins.str] = None,
            http_get_port: typing.Optional[jsii.Number] = None,
            http_get_scheme: typing.Optional[builtins.str] = None,
            initial_delay_seconds: typing.Optional[jsii.Number] = None,
            period_seconds: typing.Optional[jsii.Number] = None,
            success_threshold: typing.Optional[jsii.Number] = None,
            tcp_socket_port: typing.Optional[jsii.Number] = None,
            timeout_seconds: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param exec_command: 
            :param failure_threshold: 
            :param http_get_path: 
            :param http_get_port: 
            :param http_get_scheme: 
            :param initial_delay_seconds: 
            :param period_seconds: 
            :param success_threshold: 
            :param tcp_socket_port: 
            :param timeout_seconds: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if exec_command is not None:
                self._values["exec_command"] = exec_command
            if failure_threshold is not None:
                self._values["failure_threshold"] = failure_threshold
            if http_get_path is not None:
                self._values["http_get_path"] = http_get_path
            if http_get_port is not None:
                self._values["http_get_port"] = http_get_port
            if http_get_scheme is not None:
                self._values["http_get_scheme"] = http_get_scheme
            if initial_delay_seconds is not None:
                self._values["initial_delay_seconds"] = initial_delay_seconds
            if period_seconds is not None:
                self._values["period_seconds"] = period_seconds
            if success_threshold is not None:
                self._values["success_threshold"] = success_threshold
            if tcp_socket_port is not None:
                self._values["tcp_socket_port"] = tcp_socket_port
            if timeout_seconds is not None:
                self._values["timeout_seconds"] = timeout_seconds

        @builtins.property
        def exec_command(self) -> typing.Optional[typing.List[builtins.str]]:
            """
            :Property: execCommand: The commands for running the readiness probe.
            """
            result = self._values.get("exec_command")
            return result

        @builtins.property
        def failure_threshold(self) -> typing.Optional[jsii.Number]:
            """
            :Property: failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
            """
            result = self._values.get("failure_threshold")
            return result

        @builtins.property
        def http_get_path(self) -> typing.Optional[builtins.str]:
            """
            :Property: httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
            """
            result = self._values.get("http_get_path")
            return result

        @builtins.property
        def http_get_port(self) -> typing.Optional[jsii.Number]:
            """
            :Property: httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
            """
            result = self._values.get("http_get_port")
            return result

        @builtins.property
        def http_get_scheme(self) -> typing.Optional[builtins.str]:
            """
            :Property: httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
            """
            result = self._values.get("http_get_scheme")
            return result

        @builtins.property
        def initial_delay_seconds(self) -> typing.Optional[jsii.Number]:
            """
            :Property: initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
            """
            result = self._values.get("initial_delay_seconds")
            return result

        @builtins.property
        def period_seconds(self) -> typing.Optional[jsii.Number]:
            """
            :Property: periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
            """
            result = self._values.get("period_seconds")
            return result

        @builtins.property
        def success_threshold(self) -> typing.Optional[jsii.Number]:
            """
            :Property: successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
            """
            result = self._values.get("success_threshold")
            return result

        @builtins.property
        def tcp_socket_port(self) -> typing.Optional[jsii.Number]:
            """
            :Property: tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
            """
            result = self._values.get("tcp_socket_port")
            return result

        @builtins.property
        def timeout_seconds(self) -> typing.Optional[jsii.Number]:
            """
            :Property: timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
            """
            result = self._values.get("timeout_seconds")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LivenessProbeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.OptionProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "value": "value"},
    )
    class OptionProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[builtins.str] = None,
            value: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param name: 
            :param value: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(self) -> typing.Optional[builtins.str]:
            """
            :Property: name: The name of the option.
            """
            result = self._values.get("name")
            return result

        @builtins.property
        def value(self) -> typing.Optional[builtins.str]:
            """
            :Property: value: The value of the option.
            """
            result = self._values.get("value")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OptionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty",
        jsii_struct_bases=[],
        name_mapping={"port": "port", "protocol": "protocol"},
    )
    class PortProperty:
        def __init__(
            self,
            *,
            port: typing.Optional[jsii.Number] = None,
            protocol: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param port: 
            :param protocol: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if port is not None:
                self._values["port"] = port
            if protocol is not None:
                self._values["protocol"] = protocol

        @builtins.property
        def port(self) -> typing.Optional[jsii.Number]:
            """
            :Property: port: The port number. Valid values: 1-65535.
            """
            result = self._values.get("port")
            return result

        @builtins.property
        def protocol(self) -> typing.Optional[builtins.str]:
            """
            :Property: protocol: The protocol that the port uses. Valid values: TCP and UDP
            """
            result = self._values.get("protocol")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.ReadinessProbeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "exec_command": "execCommand",
            "failure_threshold": "failureThreshold",
            "http_get_path": "httpGetPath",
            "http_get_port": "httpGetPort",
            "http_get_scheme": "httpGetScheme",
            "initial_delay_seconds": "initialDelaySeconds",
            "period_seconds": "periodSeconds",
            "success_threshold": "successThreshold",
            "tcp_socket_port": "tcpSocketPort",
            "timeout_seconds": "timeoutSeconds",
        },
    )
    class ReadinessProbeProperty:
        def __init__(
            self,
            *,
            exec_command: typing.Optional[typing.List[builtins.str]] = None,
            failure_threshold: typing.Optional[jsii.Number] = None,
            http_get_path: typing.Optional[builtins.str] = None,
            http_get_port: typing.Optional[jsii.Number] = None,
            http_get_scheme: typing.Optional[builtins.str] = None,
            initial_delay_seconds: typing.Optional[jsii.Number] = None,
            period_seconds: typing.Optional[jsii.Number] = None,
            success_threshold: typing.Optional[jsii.Number] = None,
            tcp_socket_port: typing.Optional[jsii.Number] = None,
            timeout_seconds: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param exec_command: 
            :param failure_threshold: 
            :param http_get_path: 
            :param http_get_port: 
            :param http_get_scheme: 
            :param initial_delay_seconds: 
            :param period_seconds: 
            :param success_threshold: 
            :param tcp_socket_port: 
            :param timeout_seconds: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if exec_command is not None:
                self._values["exec_command"] = exec_command
            if failure_threshold is not None:
                self._values["failure_threshold"] = failure_threshold
            if http_get_path is not None:
                self._values["http_get_path"] = http_get_path
            if http_get_port is not None:
                self._values["http_get_port"] = http_get_port
            if http_get_scheme is not None:
                self._values["http_get_scheme"] = http_get_scheme
            if initial_delay_seconds is not None:
                self._values["initial_delay_seconds"] = initial_delay_seconds
            if period_seconds is not None:
                self._values["period_seconds"] = period_seconds
            if success_threshold is not None:
                self._values["success_threshold"] = success_threshold
            if tcp_socket_port is not None:
                self._values["tcp_socket_port"] = tcp_socket_port
            if timeout_seconds is not None:
                self._values["timeout_seconds"] = timeout_seconds

        @builtins.property
        def exec_command(self) -> typing.Optional[typing.List[builtins.str]]:
            """
            :Property: execCommand: The commands for running the readiness probe.
            """
            result = self._values.get("exec_command")
            return result

        @builtins.property
        def failure_threshold(self) -> typing.Optional[jsii.Number]:
            """
            :Property: failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
            """
            result = self._values.get("failure_threshold")
            return result

        @builtins.property
        def http_get_path(self) -> typing.Optional[builtins.str]:
            """
            :Property: httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
            """
            result = self._values.get("http_get_path")
            return result

        @builtins.property
        def http_get_port(self) -> typing.Optional[jsii.Number]:
            """
            :Property: httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
            """
            result = self._values.get("http_get_port")
            return result

        @builtins.property
        def http_get_scheme(self) -> typing.Optional[builtins.str]:
            """
            :Property: httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
            """
            result = self._values.get("http_get_scheme")
            return result

        @builtins.property
        def initial_delay_seconds(self) -> typing.Optional[jsii.Number]:
            """
            :Property: initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
            """
            result = self._values.get("initial_delay_seconds")
            return result

        @builtins.property
        def period_seconds(self) -> typing.Optional[jsii.Number]:
            """
            :Property: periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
            """
            result = self._values.get("period_seconds")
            return result

        @builtins.property
        def success_threshold(self) -> typing.Optional[jsii.Number]:
            """
            :Property: successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
            """
            result = self._values.get("success_threshold")
            return result

        @builtins.property
        def tcp_socket_port(self) -> typing.Optional[jsii.Number]:
            """
            :Property: tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
            """
            result = self._values.get("tcp_socket_port")
            return result

        @builtins.property
        def timeout_seconds(self) -> typing.Optional[jsii.Number]:
            """
            :Property: timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
            """
            result = self._values.get("timeout_seconds")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReadinessProbeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty",
        jsii_struct_bases=[],
        name_mapping={
            "capability_add": "capabilityAdd",
            "read_only_root_filesystem": "readOnlyRootFilesystem",
            "run_as_user": "runAsUser",
        },
    )
    class SecurityContextProperty:
        def __init__(
            self,
            *,
            capability_add: typing.Optional[typing.List[builtins.str]] = None,
            read_only_root_filesystem: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            run_as_user: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param capability_add: 
            :param read_only_root_filesystem: 
            :param run_as_user: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if capability_add is not None:
                self._values["capability_add"] = capability_add
            if read_only_root_filesystem is not None:
                self._values["read_only_root_filesystem"] = read_only_root_filesystem
            if run_as_user is not None:
                self._values["run_as_user"] = run_as_user

        @builtins.property
        def capability_add(self) -> typing.Optional[typing.List[builtins.str]]:
            """
            :Property: capabilityAdd: undefined
            """
            result = self._values.get("capability_add")
            return result

        @builtins.property
        def read_only_root_filesystem(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: readOnlyRootFilesystem: Valid value: True.
            """
            result = self._values.get("read_only_root_filesystem")
            return result

        @builtins.property
        def run_as_user(self) -> typing.Optional[jsii.Number]:
            """
            :Property: runAsUser: User ID.
            """
            result = self._values.get("run_as_user")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SecurityContextProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "value": "value"},
    )
    class SecurityContextSysctlProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[builtins.str] = None,
            value: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param name: 
            :param value: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(self) -> typing.Optional[builtins.str]:
            """
            :Property: name: undefined
            """
            result = self._values.get("name")
            return result

        @builtins.property
        def value(self) -> typing.Optional[builtins.str]:
            """
            :Property: value: undefined
            """
            result = self._values.get("value")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SecurityContextSysctlProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.TagProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagProperty:
        def __init__(
            self,
            *,
            key: builtins.str,
            value: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param key: 
            :param value: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> builtins.str:
            """
            :Property: key: The keyword of the tag.
            """
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return result

        @builtins.property
        def value(self) -> typing.Optional[builtins.str]:
            """
            :Property: value: The value of the tag.
            """
            result = self._values.get("value")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty",
        jsii_struct_bases=[],
        name_mapping={
            "mount_path": "mountPath",
            "name": "name",
            "read_only": "readOnly",
        },
    )
    class VolumeMountProperty:
        def __init__(
            self,
            *,
            mount_path: typing.Optional[builtins.str] = None,
            name: typing.Optional[builtins.str] = None,
            read_only: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param mount_path: 
            :param name: 
            :param read_only: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if mount_path is not None:
                self._values["mount_path"] = mount_path
            if name is not None:
                self._values["name"] = name
            if read_only is not None:
                self._values["read_only"] = read_only

        @builtins.property
        def mount_path(self) -> typing.Optional[builtins.str]:
            """
            :Property: mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
            """
            result = self._values.get("mount_path")
            return result

        @builtins.property
        def name(self) -> typing.Optional[builtins.str]:
            """
            :Property: name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
            """
            result = self._values.get("name")
            return result

        @builtins.property
        def read_only(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: readOnly: Default value: False.
            """
            result = self._values.get("read_only")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VolumeMountProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "type": "type",
            "config_file_volume_config_file_to_path": "configFileVolumeConfigFileToPath",
            "empty_dir_volume_medium": "emptyDirVolumeMedium",
            "nfs_volume_path": "nfsVolumePath",
            "nfs_volume_read_only": "nfsVolumeReadOnly",
            "nfs_volume_server": "nfsVolumeServer",
        },
    )
    class VolumeProperty:
        def __init__(
            self,
            *,
            name: builtins.str,
            type: builtins.str,
            config_file_volume_config_file_to_path: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty"]]]] = None,
            empty_dir_volume_medium: typing.Optional[builtins.str] = None,
            nfs_volume_path: typing.Optional[builtins.str] = None,
            nfs_volume_read_only: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            nfs_volume_server: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param name: 
            :param type: 
            :param config_file_volume_config_file_to_path: 
            :param empty_dir_volume_medium: 
            :param nfs_volume_path: 
            :param nfs_volume_read_only: 
            :param nfs_volume_server: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if config_file_volume_config_file_to_path is not None:
                self._values["config_file_volume_config_file_to_path"] = config_file_volume_config_file_to_path
            if empty_dir_volume_medium is not None:
                self._values["empty_dir_volume_medium"] = empty_dir_volume_medium
            if nfs_volume_path is not None:
                self._values["nfs_volume_path"] = nfs_volume_path
            if nfs_volume_read_only is not None:
                self._values["nfs_volume_read_only"] = nfs_volume_read_only
            if nfs_volume_server is not None:
                self._values["nfs_volume_server"] = nfs_volume_server

        @builtins.property
        def name(self) -> builtins.str:
            """
            :Property: name: The name of the volume.
            """
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return result

        @builtins.property
        def type(self) -> builtins.str:
            """
            :Property: type: The type of volume. Valid values: EmptyDirVolume, NFSVolume, and ConfigFileVolume.
            """
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return result

        @builtins.property
        def config_file_volume_config_file_to_path(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty"]]]]:
            """
            :Property: configFileVolumeConfigFileToPath: The path to the configuration file.
            """
            result = self._values.get("config_file_volume_config_file_to_path")
            return result

        @builtins.property
        def empty_dir_volume_medium(self) -> typing.Optional[builtins.str]:
            """
            :Property: emptyDirVolumeMedium: The storage medium for EmptyDirVolume. By default, the file system on the node is used. Default value: not specified. Valid value: Memory. If this parameter is set to Memory, the EmptyDirVolume volume is stored in memory.
            """
            result = self._values.get("empty_dir_volume_medium")
            return result

        @builtins.property
        def nfs_volume_path(self) -> typing.Optional[builtins.str]:
            """
            :Property: nfsVolumePath: The path to the NFS volume.
            """
            result = self._values.get("nfs_volume_path")
            return result

        @builtins.property
        def nfs_volume_read_only(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: nfsVolumeReadOnly: Default value: False.
            """
            result = self._values.get("nfs_volume_read_only")
            return result

        @builtins.property
        def nfs_volume_server(self) -> typing.Optional[builtins.str]:
            """
            :Property: nfsVolumeServer: The IP address of the NFS server.
            """
            result = self._values.get("nfs_volume_server")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VolumeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.RosContainerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "container": "container",
        "container_group_name": "containerGroupName",
        "security_group_id": "securityGroupId",
        "v_switch_id": "vSwitchId",
        "active_deadline_seconds": "activeDeadlineSeconds",
        "auto_match_image_cache": "autoMatchImageCache",
        "cpu": "cpu",
        "dns_config": "dnsConfig",
        "eip_instance_id": "eipInstanceId",
        "host_aliase": "hostAliase",
        "image_registry_credential": "imageRegistryCredential",
        "image_snapshot_id": "imageSnapshotId",
        "init_container": "initContainer",
        "instance_type": "instanceType",
        "ipv6_address_count": "ipv6AddressCount",
        "memory": "memory",
        "ram_role_name": "ramRoleName",
        "restart_policy": "restartPolicy",
        "security_context_sysctl": "securityContextSysctl",
        "sls_enable": "slsEnable",
        "spot_price_limit": "spotPriceLimit",
        "spot_strategy": "spotStrategy",
        "tag": "tag",
        "termination_grace_period_seconds": "terminationGracePeriodSeconds",
        "volume": "volume",
        "zone_id": "zoneId",
    },
)
class RosContainerGroupProps:
    def __init__(
        self,
        *,
        container: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosContainerGroup.ContainerProperty, ros_cdk_core.IResolvable]]],
        container_group_name: builtins.str,
        security_group_id: builtins.str,
        v_switch_id: builtins.str,
        active_deadline_seconds: typing.Optional[jsii.Number] = None,
        auto_match_image_cache: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cpu: typing.Optional[jsii.Number] = None,
        dns_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.DnsConfigProperty]] = None,
        eip_instance_id: typing.Optional[builtins.str] = None,
        host_aliase: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.HostAliaseProperty]]]] = None,
        image_registry_credential: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.ImageRegistryCredentialProperty]]]] = None,
        image_snapshot_id: typing.Optional[builtins.str] = None,
        init_container: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.InitContainerProperty]]]] = None,
        instance_type: typing.Optional[builtins.str] = None,
        ipv6_address_count: typing.Optional[jsii.Number] = None,
        memory: typing.Optional[jsii.Number] = None,
        ram_role_name: typing.Optional[builtins.str] = None,
        restart_policy: typing.Optional[builtins.str] = None,
        security_context_sysctl: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.SecurityContextSysctlProperty]]]] = None,
        sls_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        spot_price_limit: typing.Optional[jsii.Number] = None,
        spot_strategy: typing.Optional[builtins.str] = None,
        tag: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]] = None,
        termination_grace_period_seconds: typing.Optional[jsii.Number] = None,
        volume: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.VolumeProperty]]]] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ECI::ContainerGroup``.

        :param container: 
        :param container_group_name: 
        :param security_group_id: 
        :param v_switch_id: 
        :param active_deadline_seconds: 
        :param auto_match_image_cache: 
        :param cpu: 
        :param dns_config: 
        :param eip_instance_id: 
        :param host_aliase: 
        :param image_registry_credential: 
        :param image_snapshot_id: 
        :param init_container: 
        :param instance_type: 
        :param ipv6_address_count: 
        :param memory: 
        :param ram_role_name: 
        :param restart_policy: 
        :param security_context_sysctl: 
        :param sls_enable: 
        :param spot_price_limit: 
        :param spot_strategy: 
        :param tag: 
        :param termination_grace_period_seconds: 
        :param volume: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "container": container,
            "container_group_name": container_group_name,
            "security_group_id": security_group_id,
            "v_switch_id": v_switch_id,
        }
        if active_deadline_seconds is not None:
            self._values["active_deadline_seconds"] = active_deadline_seconds
        if auto_match_image_cache is not None:
            self._values["auto_match_image_cache"] = auto_match_image_cache
        if cpu is not None:
            self._values["cpu"] = cpu
        if dns_config is not None:
            self._values["dns_config"] = dns_config
        if eip_instance_id is not None:
            self._values["eip_instance_id"] = eip_instance_id
        if host_aliase is not None:
            self._values["host_aliase"] = host_aliase
        if image_registry_credential is not None:
            self._values["image_registry_credential"] = image_registry_credential
        if image_snapshot_id is not None:
            self._values["image_snapshot_id"] = image_snapshot_id
        if init_container is not None:
            self._values["init_container"] = init_container
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if ipv6_address_count is not None:
            self._values["ipv6_address_count"] = ipv6_address_count
        if memory is not None:
            self._values["memory"] = memory
        if ram_role_name is not None:
            self._values["ram_role_name"] = ram_role_name
        if restart_policy is not None:
            self._values["restart_policy"] = restart_policy
        if security_context_sysctl is not None:
            self._values["security_context_sysctl"] = security_context_sysctl
        if sls_enable is not None:
            self._values["sls_enable"] = sls_enable
        if spot_price_limit is not None:
            self._values["spot_price_limit"] = spot_price_limit
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy
        if tag is not None:
            self._values["tag"] = tag
        if termination_grace_period_seconds is not None:
            self._values["termination_grace_period_seconds"] = termination_grace_period_seconds
        if volume is not None:
            self._values["volume"] = volume
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def container(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosContainerGroup.ContainerProperty, ros_cdk_core.IResolvable]]]:
        """
        :Property: container: The containers that constitute the container group.
        """
        result = self._values.get("container")
        assert result is not None, "Required property 'container' is missing"
        return result

    @builtins.property
    def container_group_name(self) -> builtins.str:
        """
        :Property:

        containerGroupName: The name of the container group.
        The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        """
        result = self._values.get("container_group_name")
        assert result is not None, "Required property 'container_group_name' is missing"
        return result

    @builtins.property
    def security_group_id(self) -> builtins.str:
        """
        :Property: securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        """
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return result

    @builtins.property
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.
        """
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return result

    @builtins.property
    def active_deadline_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property: activeDeadlineSeconds: The validity period in seconds.
        """
        result = self._values.get("active_deadline_seconds")
        return result

    @builtins.property
    def auto_match_image_cache(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoMatchImageCache: Specifies whether to automatically match the image cache.
        """
        result = self._values.get("auto_match_image_cache")
        return result

    @builtins.property
    def cpu(self) -> typing.Optional[jsii.Number]:
        """
        :Property: cpu: CPU size
        """
        result = self._values.get("cpu")
        return result

    @builtins.property
    def dns_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.DnsConfigProperty]]:
        """
        :Property: dnsConfig: The information about DNS configurations.
        """
        result = self._values.get("dns_config")
        return result

    @builtins.property
    def eip_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: eipInstanceId: Elastic IP ID
        """
        result = self._values.get("eip_instance_id")
        return result

    @builtins.property
    def host_aliase(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.HostAliaseProperty]]]]:
        """
        :Property: hostAliase: Customize the hostname mapping of a container inside the pod
        """
        result = self._values.get("host_aliase")
        return result

    @builtins.property
    def image_registry_credential(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.ImageRegistryCredentialProperty]]]]:
        """
        :Property: imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
        """
        result = self._values.get("image_registry_credential")
        return result

    @builtins.property
    def image_snapshot_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: imageSnapshotId: Image cache ID or snapshot ID.
        """
        result = self._values.get("image_snapshot_id")
        return result

    @builtins.property
    def init_container(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.InitContainerProperty]]]]:
        """
        :Property: initContainer: The containers that constitute the container group for initializing.
        """
        result = self._values.get("init_container")
        return result

    @builtins.property
    def instance_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceType: The type of the ECS instance.
        """
        result = self._values.get("instance_type")
        return result

    @builtins.property
    def ipv6_address_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ipv6AddressCount: The number of IPv6 addresses.
        """
        result = self._values.get("ipv6_address_count")
        return result

    @builtins.property
    def memory(self) -> typing.Optional[jsii.Number]:
        """
        :Property: memory: memory size
        """
        result = self._values.get("memory")
        return result

    @builtins.property
    def ram_role_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
        """
        result = self._values.get("ram_role_name")
        return result

    @builtins.property
    def restart_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: restartPolicy: The policy for restarting the instance. Default value: Always.
        """
        result = self._values.get("restart_policy")
        return result

    @builtins.property
    def security_context_sysctl(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.SecurityContextSysctlProperty]]]]:
        """
        :Property:

        securityContextSysctl: ECI Sysctl is valid for every container in ECI.
        Currently only two Sysctl keyNames are supported:
        Kernel.shm_rmid_forced
        Kernel.msgmax
        """
        result = self._values.get("security_context_sysctl")
        return result

    @builtins.property
    def sls_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: slsEnable: Enable user log collection. The default is False.
        """
        result = self._values.get("sls_enable")
        return result

    @builtins.property
    def spot_price_limit(self) -> typing.Optional[jsii.Number]:
        """
        :Property: spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        """
        result = self._values.get("spot_price_limit")
        return result

    @builtins.property
    def spot_strategy(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        spotStrategy: Instance preemption strategy.
        Ranges:
        NoSpot (default): normal pay-as-you-go instances.
        SpotWithPriceLimit: Preemptive instance that sets a cap price.
        SpotAsPriceGo: The system automatically bids, following the current market actual price.
        """
        result = self._values.get("spot_strategy")
        return result

    @builtins.property
    def tag(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]]:
        """
        :Property: tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
        """
        result = self._values.get("tag")
        return result

    @builtins.property
    def termination_grace_period_seconds(self) -> typing.Optional[jsii.Number]:
        """
        :Property: terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
        """
        result = self._values.get("termination_grace_period_seconds")
        return result

    @builtins.property
    def volume(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosContainerGroup.VolumeProperty]]]]:
        """
        :Property: volume: The data volume. You can specify a maximum of 20 data volumes.
        """
        result = self._values.get("volume")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosContainerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImageCache(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.RosImageCache",
):
    """A ROS template type:  ``ALIYUN::ECI::ImageCache``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosImageCacheProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ECI::ImageCache``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosImageCache, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrImageCacheId")
    def attr_image_cache_id(self) -> typing.Any:
        """
        :Attribute: ImageCacheId: The ID of the image cache.
        """
        return jsii.get(self, "attrImageCacheId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="image")
    def image(self) -> typing.List[builtins.str]:
        """
        :Property: image: The image list to be cached.
        """
        return jsii.get(self, "image")

    @image.setter # type: ignore
    def image(self, value: typing.List[builtins.str]) -> None:
        jsii.set(self, "image", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="imageCacheName")
    def image_cache_name(self) -> builtins.str:
        """
        :Property: imageCacheName: Image cache name.
        """
        return jsii.get(self, "imageCacheName")

    @image_cache_name.setter # type: ignore
    def image_cache_name(self, value: builtins.str) -> None:
        jsii.set(self, "imageCacheName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> builtins.str:
        """
        :Property: securityGroupId: Security group ID.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: builtins.str) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: builtins.str) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="eipInstanceId")
    def eip_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
        """
        return jsii.get(self, "eipInstanceId")

    @eip_instance_id.setter # type: ignore
    def eip_instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "eipInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="imageRegistryCredential")
    def image_registry_credential(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
        """
        return jsii.get(self, "imageRegistryCredential")

    @image_registry_credential.setter # type: ignore
    def image_registry_credential(
        self,
        value: typing.Optional[typing.List[builtins.str]],
    ) -> None:
        jsii.set(self, "imageRegistryCredential", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.RosImageCacheProps",
    jsii_struct_bases=[],
    name_mapping={
        "image": "image",
        "image_cache_name": "imageCacheName",
        "security_group_id": "securityGroupId",
        "v_switch_id": "vSwitchId",
        "eip_instance_id": "eipInstanceId",
        "image_registry_credential": "imageRegistryCredential",
        "resource_group_id": "resourceGroupId",
    },
)
class RosImageCacheProps:
    def __init__(
        self,
        *,
        image: typing.List[builtins.str],
        image_cache_name: builtins.str,
        security_group_id: builtins.str,
        v_switch_id: builtins.str,
        eip_instance_id: typing.Optional[builtins.str] = None,
        image_registry_credential: typing.Optional[typing.List[builtins.str]] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ECI::ImageCache``.

        :param image: 
        :param image_cache_name: 
        :param security_group_id: 
        :param v_switch_id: 
        :param eip_instance_id: 
        :param image_registry_credential: 
        :param resource_group_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "image": image,
            "image_cache_name": image_cache_name,
            "security_group_id": security_group_id,
            "v_switch_id": v_switch_id,
        }
        if eip_instance_id is not None:
            self._values["eip_instance_id"] = eip_instance_id
        if image_registry_credential is not None:
            self._values["image_registry_credential"] = image_registry_credential
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def image(self) -> typing.List[builtins.str]:
        """
        :Property: image: The image list to be cached.
        """
        result = self._values.get("image")
        assert result is not None, "Required property 'image' is missing"
        return result

    @builtins.property
    def image_cache_name(self) -> builtins.str:
        """
        :Property: imageCacheName: Image cache name.
        """
        result = self._values.get("image_cache_name")
        assert result is not None, "Required property 'image_cache_name' is missing"
        return result

    @builtins.property
    def security_group_id(self) -> builtins.str:
        """
        :Property: securityGroupId: Security group ID.
        """
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return result

    @builtins.property
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return result

    @builtins.property
    def eip_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
        """
        result = self._values.get("eip_instance_id")
        return result

    @builtins.property
    def image_registry_credential(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
        """
        result = self._values.get("image_registry_credential")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImageCacheProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "ContainerGroup",
    "ContainerGroupProps",
    "ImageCache",
    "ImageCacheProps",
    "RosContainerGroup",
    "RosContainerGroupProps",
    "RosImageCache",
    "RosImageCacheProps",
]

publication.publish()
