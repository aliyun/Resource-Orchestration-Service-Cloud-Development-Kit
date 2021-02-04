"""
## Aliyun ROS MSE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_mse as MSE
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
    jsii_type="@alicloud/ros-cdk-mse.Cluster",
):
    """A ROS resource type:  ``ALIYUN::MSE::Cluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::MSE::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Cluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAclEntryList")
    def attr_acl_entry_list(self) -> typing.Any:
        """
        :Attribute: AclEntryList: acl entry list
        """
        return jsii.get(self, "attrAclEntryList")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> typing.Any:
        """
        :Attribute: AclId: acl id
        """
        return jsii.get(self, "attrAclId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(self) -> typing.Any:
        """
        :Attribute: AppVersion: app version
        """
        return jsii.get(self, "attrAppVersion")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(self) -> typing.Any:
        """
        :Attribute: ClusterAliasName: cluster alias name
        """
        return jsii.get(self, "attrClusterAliasName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: cluster id
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> typing.Any:
        """
        :Attribute: ClusterName: cluster name
        """
        return jsii.get(self, "attrClusterName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(self) -> typing.Any:
        """
        :Attribute: ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        """
        return jsii.get(self, "attrClusterSpecification")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> typing.Any:
        """
        :Attribute: ClusterType: cluster type
        """
        return jsii.get(self, "attrClusterType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(self) -> typing.Any:
        """
        :Attribute: ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        """
        return jsii.get(self, "attrClusterVersion")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(self) -> typing.Any:
        """
        :Attribute: Cpu: cpu core size
        """
        return jsii.get(self, "attrCpu")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(self) -> typing.Any:
        """
        :Attribute: DiskCapacity: disk capacity, unit: G
        """
        return jsii.get(self, "attrDiskCapacity")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(self) -> typing.Any:
        """
        :Attribute: DiskType: disk type
        """
        return jsii.get(self, "attrDiskType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(self) -> typing.Any:
        """
        :Attribute: HealthStatus: health status
        """
        return jsii.get(self, "attrHealthStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInitStatus")
    def attr_init_status(self) -> typing.Any:
        """
        :Attribute: InitStatus: init status, Enum: INIT_ING, INIT_FAILED, INIT_SUCCESS, INIT_TIME_OUT,DESTROY_ING, DESTROY_FAILED, DESTROY_SUCCESS, RESTART_ING, RESTART_SUCCESS, RESTART_FAILED, SCALE_ING, SCALE_SUCCESS, SCALE_FAILED
        """
        return jsii.get(self, "attrInitStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(self) -> typing.Any:
        """
        :Attribute: InstanceCount: instance count
        """
        return jsii.get(self, "attrInstanceCount")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: instance id
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(self) -> typing.Any:
        """
        :Attribute: InternetAddress: internet address
        """
        return jsii.get(self, "attrInternetAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(self) -> typing.Any:
        """
        :Attribute: InternetDomain: internet domain
        """
        return jsii.get(self, "attrInternetDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(self) -> typing.Any:
        """
        :Attribute: InternetPort: internet port
        """
        return jsii.get(self, "attrInternetPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(self) -> typing.Any:
        """
        :Attribute: IntranetAddress: intranet address
        """
        return jsii.get(self, "attrIntranetAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(self) -> typing.Any:
        """
        :Attribute: IntranetDomain: intranet domain
        """
        return jsii.get(self, "attrIntranetDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(self) -> typing.Any:
        """
        :Attribute: IntranetPort: intranet port
        """
        return jsii.get(self, "attrIntranetPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(self) -> typing.Any:
        """
        :Attribute: MemoryCapacity: memory capacity
        """
        return jsii.get(self, "attrMemoryCapacity")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(self) -> typing.Any:
        """
        :Attribute: NetType: network type, Enum: privatenet,pubnet
        """
        return jsii.get(self, "attrNetType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: order id
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(self) -> typing.Any:
        """
        :Attribute: PayInfo: pay info
        """
        return jsii.get(self, "attrPayInfo")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(self) -> typing.Any:
        """
        :Attribute: PubNetworkFlow: pub network flow
        """
        return jsii.get(self, "attrPubNetworkFlow")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(self) -> typing.Any:
        """
        :Attribute: RegionId: region id
        """
        return jsii.get(self, "attrRegionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> typing.Any:
        """
        :Attribute: VpcId: vpc id
        """
        return jsii.get(self, "attrVpcId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> typing.Any:
        """
        :Attribute: VSwitchId: switcher Id
        """
        return jsii.get(self, "attrVSwitchId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_specification": "clusterSpecification",
        "cluster_type": "clusterType",
        "cluster_version": "clusterVersion",
        "instance_count": "instanceCount",
        "net_type": "netType",
        "disk_type": "diskType",
        "private_slb_specification": "privateSlbSpecification",
        "pub_network_flow": "pubNetworkFlow",
        "pub_slb_specification": "pubSlbSpecification",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        cluster_specification: builtins.str,
        cluster_type: builtins.str,
        cluster_version: builtins.str,
        instance_count: jsii.Number,
        net_type: builtins.str,
        disk_type: typing.Optional[builtins.str] = None,
        private_slb_specification: typing.Optional[builtins.str] = None,
        pub_network_flow: typing.Optional[builtins.str] = None,
        pub_slb_specification: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MSE::Cluster``.

        :param cluster_specification: 
        :param cluster_type: 
        :param cluster_version: 
        :param instance_count: 
        :param net_type: 
        :param disk_type: 
        :param private_slb_specification: 
        :param pub_network_flow: 
        :param pub_slb_specification: 
        :param vpc_id: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_specification": cluster_specification,
            "cluster_type": cluster_type,
            "cluster_version": cluster_version,
            "instance_count": instance_count,
            "net_type": net_type,
        }
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if private_slb_specification is not None:
            self._values["private_slb_specification"] = private_slb_specification
        if pub_network_flow is not None:
            self._values["pub_network_flow"] = pub_network_flow
        if pub_slb_specification is not None:
            self._values["pub_slb_specification"] = pub_slb_specification
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_specification(self) -> builtins.str:
        """
        :Property: clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        """
        result = self._values.get("cluster_specification")
        assert result is not None, "Required property 'cluster_specification' is missing"
        return result

    @builtins.property
    def cluster_type(self) -> builtins.str:
        """
        :Property: clusterType: cluster type
        """
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return result

    @builtins.property
    def cluster_version(self) -> builtins.str:
        """
        :Property: clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        """
        result = self._values.get("cluster_version")
        assert result is not None, "Required property 'cluster_version' is missing"
        return result

    @builtins.property
    def instance_count(self) -> jsii.Number:
        """
        :Property: instanceCount: instance count
        """
        result = self._values.get("instance_count")
        assert result is not None, "Required property 'instance_count' is missing"
        return result

    @builtins.property
    def net_type(self) -> builtins.str:
        """
        :Property: netType: network type, Enum: privatenet,pubnet
        """
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return result

    @builtins.property
    def disk_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: diskType: disk type
        """
        result = self._values.get("disk_type")
        return result

    @builtins.property
    def private_slb_specification(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateSlbSpecification:
        """
        result = self._values.get("private_slb_specification")
        return result

    @builtins.property
    def pub_network_flow(self) -> typing.Optional[builtins.str]:
        """
        :Property: pubNetworkFlow: pub network flow
        """
        result = self._values.get("pub_network_flow")
        return result

    @builtins.property
    def pub_slb_specification(self) -> typing.Optional[builtins.str]:
        """
        :Property: pubSlbSpecification:
        """
        result = self._values.get("pub_slb_specification")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: vpc id
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: switcher Id
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


class RosCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosCluster",
):
    """A ROS template type:  ``ALIYUN::MSE::Cluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::MSE::Cluster``.

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
    @jsii.member(jsii_name="attrAclEntryList")
    def attr_acl_entry_list(self) -> typing.Any:
        """
        :Attribute: AclEntryList: acl entry list
        """
        return jsii.get(self, "attrAclEntryList")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> typing.Any:
        """
        :Attribute: AclId: acl id
        """
        return jsii.get(self, "attrAclId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(self) -> typing.Any:
        """
        :Attribute: AppVersion: app version
        """
        return jsii.get(self, "attrAppVersion")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(self) -> typing.Any:
        """
        :Attribute: ClusterAliasName: cluster alias name
        """
        return jsii.get(self, "attrClusterAliasName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: cluster id
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> typing.Any:
        """
        :Attribute: ClusterName: cluster name
        """
        return jsii.get(self, "attrClusterName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(self) -> typing.Any:
        """
        :Attribute: ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        """
        return jsii.get(self, "attrClusterSpecification")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> typing.Any:
        """
        :Attribute: ClusterType: cluster type
        """
        return jsii.get(self, "attrClusterType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(self) -> typing.Any:
        """
        :Attribute: ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        """
        return jsii.get(self, "attrClusterVersion")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(self) -> typing.Any:
        """
        :Attribute: Cpu: cpu core size
        """
        return jsii.get(self, "attrCpu")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(self) -> typing.Any:
        """
        :Attribute: DiskCapacity: disk capacity, unit: G
        """
        return jsii.get(self, "attrDiskCapacity")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(self) -> typing.Any:
        """
        :Attribute: DiskType: disk type
        """
        return jsii.get(self, "attrDiskType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(self) -> typing.Any:
        """
        :Attribute: HealthStatus: health status
        """
        return jsii.get(self, "attrHealthStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInitStatus")
    def attr_init_status(self) -> typing.Any:
        """
        :Attribute: InitStatus: init status, Enum: INIT_ING, INIT_FAILED, INIT_SUCCESS, INIT_TIME_OUT,DESTROY_ING, DESTROY_FAILED, DESTROY_SUCCESS, RESTART_ING, RESTART_SUCCESS, RESTART_FAILED, SCALE_ING, SCALE_SUCCESS, SCALE_FAILED
        """
        return jsii.get(self, "attrInitStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(self) -> typing.Any:
        """
        :Attribute: InstanceCount: instance count
        """
        return jsii.get(self, "attrInstanceCount")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: instance id
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(self) -> typing.Any:
        """
        :Attribute: InternetAddress: internet address
        """
        return jsii.get(self, "attrInternetAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(self) -> typing.Any:
        """
        :Attribute: InternetDomain: internet domain
        """
        return jsii.get(self, "attrInternetDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(self) -> typing.Any:
        """
        :Attribute: InternetPort: internet port
        """
        return jsii.get(self, "attrInternetPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(self) -> typing.Any:
        """
        :Attribute: IntranetAddress: intranet address
        """
        return jsii.get(self, "attrIntranetAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(self) -> typing.Any:
        """
        :Attribute: IntranetDomain: intranet domain
        """
        return jsii.get(self, "attrIntranetDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(self) -> typing.Any:
        """
        :Attribute: IntranetPort: intranet port
        """
        return jsii.get(self, "attrIntranetPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(self) -> typing.Any:
        """
        :Attribute: MemoryCapacity: memory capacity
        """
        return jsii.get(self, "attrMemoryCapacity")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(self) -> typing.Any:
        """
        :Attribute: NetType: network type, Enum: privatenet,pubnet
        """
        return jsii.get(self, "attrNetType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: order id
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(self) -> typing.Any:
        """
        :Attribute: PayInfo: pay info
        """
        return jsii.get(self, "attrPayInfo")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(self) -> typing.Any:
        """
        :Attribute: PubNetworkFlow: pub network flow
        """
        return jsii.get(self, "attrPubNetworkFlow")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(self) -> typing.Any:
        """
        :Attribute: RegionId: region id
        """
        return jsii.get(self, "attrRegionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> typing.Any:
        """
        :Attribute: VpcId: vpc id
        """
        return jsii.get(self, "attrVpcId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> typing.Any:
        """
        :Attribute: VSwitchId: switcher Id
        """
        return jsii.get(self, "attrVSwitchId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterSpecification")
    def cluster_specification(self) -> builtins.str:
        """
        :Property: clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        """
        return jsii.get(self, "clusterSpecification")

    @cluster_specification.setter # type: ignore
    def cluster_specification(self, value: builtins.str) -> None:
        jsii.set(self, "clusterSpecification", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterType")
    def cluster_type(self) -> builtins.str:
        """
        :Property: clusterType: cluster type
        """
        return jsii.get(self, "clusterType")

    @cluster_type.setter # type: ignore
    def cluster_type(self, value: builtins.str) -> None:
        jsii.set(self, "clusterType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterVersion")
    def cluster_version(self) -> builtins.str:
        """
        :Property: clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        """
        return jsii.get(self, "clusterVersion")

    @cluster_version.setter # type: ignore
    def cluster_version(self, value: builtins.str) -> None:
        jsii.set(self, "clusterVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceCount")
    def instance_count(self) -> jsii.Number:
        """
        :Property: instanceCount: instance count
        """
        return jsii.get(self, "instanceCount")

    @instance_count.setter # type: ignore
    def instance_count(self, value: jsii.Number) -> None:
        jsii.set(self, "instanceCount", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="netType")
    def net_type(self) -> builtins.str:
        """
        :Property: netType: network type, Enum: privatenet,pubnet
        """
        return jsii.get(self, "netType")

    @net_type.setter # type: ignore
    def net_type(self, value: builtins.str) -> None:
        jsii.set(self, "netType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="diskType")
    def disk_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: diskType: disk type
        """
        return jsii.get(self, "diskType")

    @disk_type.setter # type: ignore
    def disk_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "diskType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="privateSlbSpecification")
    def private_slb_specification(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateSlbSpecification:
        """
        return jsii.get(self, "privateSlbSpecification")

    @private_slb_specification.setter # type: ignore
    def private_slb_specification(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "privateSlbSpecification", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pubNetworkFlow")
    def pub_network_flow(self) -> typing.Optional[builtins.str]:
        """
        :Property: pubNetworkFlow: pub network flow
        """
        return jsii.get(self, "pubNetworkFlow")

    @pub_network_flow.setter # type: ignore
    def pub_network_flow(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "pubNetworkFlow", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pubSlbSpecification")
    def pub_slb_specification(self) -> typing.Optional[builtins.str]:
        """
        :Property: pubSlbSpecification:
        """
        return jsii.get(self, "pubSlbSpecification")

    @pub_slb_specification.setter # type: ignore
    def pub_slb_specification(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "pubSlbSpecification", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: vpc id
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: switcher Id
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_specification": "clusterSpecification",
        "cluster_type": "clusterType",
        "cluster_version": "clusterVersion",
        "instance_count": "instanceCount",
        "net_type": "netType",
        "disk_type": "diskType",
        "private_slb_specification": "privateSlbSpecification",
        "pub_network_flow": "pubNetworkFlow",
        "pub_slb_specification": "pubSlbSpecification",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        cluster_specification: builtins.str,
        cluster_type: builtins.str,
        cluster_version: builtins.str,
        instance_count: jsii.Number,
        net_type: builtins.str,
        disk_type: typing.Optional[builtins.str] = None,
        private_slb_specification: typing.Optional[builtins.str] = None,
        pub_network_flow: typing.Optional[builtins.str] = None,
        pub_slb_specification: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MSE::Cluster``.

        :param cluster_specification: 
        :param cluster_type: 
        :param cluster_version: 
        :param instance_count: 
        :param net_type: 
        :param disk_type: 
        :param private_slb_specification: 
        :param pub_network_flow: 
        :param pub_slb_specification: 
        :param vpc_id: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_specification": cluster_specification,
            "cluster_type": cluster_type,
            "cluster_version": cluster_version,
            "instance_count": instance_count,
            "net_type": net_type,
        }
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if private_slb_specification is not None:
            self._values["private_slb_specification"] = private_slb_specification
        if pub_network_flow is not None:
            self._values["pub_network_flow"] = pub_network_flow
        if pub_slb_specification is not None:
            self._values["pub_slb_specification"] = pub_slb_specification
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_specification(self) -> builtins.str:
        """
        :Property: clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        """
        result = self._values.get("cluster_specification")
        assert result is not None, "Required property 'cluster_specification' is missing"
        return result

    @builtins.property
    def cluster_type(self) -> builtins.str:
        """
        :Property: clusterType: cluster type
        """
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return result

    @builtins.property
    def cluster_version(self) -> builtins.str:
        """
        :Property: clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        """
        result = self._values.get("cluster_version")
        assert result is not None, "Required property 'cluster_version' is missing"
        return result

    @builtins.property
    def instance_count(self) -> jsii.Number:
        """
        :Property: instanceCount: instance count
        """
        result = self._values.get("instance_count")
        assert result is not None, "Required property 'instance_count' is missing"
        return result

    @builtins.property
    def net_type(self) -> builtins.str:
        """
        :Property: netType: network type, Enum: privatenet,pubnet
        """
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return result

    @builtins.property
    def disk_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: diskType: disk type
        """
        result = self._values.get("disk_type")
        return result

    @builtins.property
    def private_slb_specification(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateSlbSpecification:
        """
        result = self._values.get("private_slb_specification")
        return result

    @builtins.property
    def pub_network_flow(self) -> typing.Optional[builtins.str]:
        """
        :Property: pubNetworkFlow: pub network flow
        """
        result = self._values.get("pub_network_flow")
        return result

    @builtins.property
    def pub_slb_specification(self) -> typing.Optional[builtins.str]:
        """
        :Property: pubSlbSpecification:
        """
        result = self._values.get("pub_slb_specification")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: vpc id
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: switcher Id
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


__all__ = [
    "Cluster",
    "ClusterProps",
    "RosCluster",
    "RosClusterProps",
]

publication.publish()
