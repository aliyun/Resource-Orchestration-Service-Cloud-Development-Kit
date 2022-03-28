'''
## Aliyun ROS MSE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as MSE from '@alicloud/ros-cdk-mse';
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


class Cluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::MSE::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::Cluster``.

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
    @jsii.member(jsii_name="attrAclEntryList")
    def attr_acl_entry_list(self) -> ros_cdk_core.IResolvable:
        '''Attribute AclEntryList: acl entry list.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclEntryList"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AclId: acl id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppVersion: app version.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterAliasName: cluster alias name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterAliasName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: cluster id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterName: cluster name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterSpecification"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterType: cluster type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConnectionType: network connect type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(self) -> ros_cdk_core.IResolvable:
        '''Attribute Cpu: cpu core size.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpu"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(self) -> ros_cdk_core.IResolvable:
        '''Attribute DiskCapacity: disk capacity, unit: G.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskCapacity"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute DiskType: disk type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(self) -> ros_cdk_core.IResolvable:
        '''Attribute HealthStatus: health status.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthStatus"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceCount: instance count.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceCount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: instance id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute InternetAddress: internet address.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute InternetDomain: internet domain.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute InternetPort: internet port.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute IntranetAddress: intranet address.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIntranetAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute IntranetDomain: intranet domain.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIntranetDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute IntranetPort: intranet port.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIntranetPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(self) -> ros_cdk_core.IResolvable:
        '''Attribute MemoryCapacity: memory capacity.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemoryCapacity"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute NetType: network type, Enum: privatenet,pubnet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(self) -> ros_cdk_core.IResolvable:
        '''Attribute PayInfo: pay info.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPayInfo"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(self) -> ros_cdk_core.IResolvable:
        '''Attribute PubNetworkFlow: pub network flow.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPubNetworkFlow"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: vpc id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchId: switcher Id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_specification": "clusterSpecification",
        "cluster_type": "clusterType",
        "cluster_version": "clusterVersion",
        "instance_count": "instanceCount",
        "net_type": "netType",
        "acl_entry_list": "aclEntryList",
        "cluster_alias_name": "clusterAliasName",
        "connection_type": "connectionType",
        "disk_capacity": "diskCapacity",
        "disk_type": "diskType",
        "private_slb_specification": "privateSlbSpecification",
        "pub_network_flow": "pubNetworkFlow",
        "pub_slb_specification": "pubSlbSpecification",
        "request_pars": "requestPars",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        cluster_specification: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        net_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        acl_entry_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        cluster_alias_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        disk_capacity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        disk_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_slb_specification: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pub_network_flow: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pub_slb_specification: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        request_pars: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::Cluster``.

        :param cluster_specification: Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.
        :param cluster_type: Property clusterType: cluster type.
        :param cluster_version: Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.
        :param instance_count: Property instanceCount: instance count.
        :param net_type: Property netType: network type, Enum: privatenet,pubnet.
        :param acl_entry_list: Property aclEntryList: acl entry list.
        :param cluster_alias_name: Property clusterAliasName: cluster alias name.
        :param connection_type: Property connectionType: network connect type.
        :param disk_capacity: Property diskCapacity: disk capacity, unit: G.
        :param disk_type: Property diskType: disk type.
        :param private_slb_specification: Property privateSlbSpecification:.
        :param pub_network_flow: Property pubNetworkFlow: pub network flow.
        :param pub_slb_specification: Property pubSlbSpecification:.
        :param request_pars: Property requestPars:.
        :param vpc_id: Property vpcId: vpc id.
        :param v_switch_id: Property vSwitchId: switcher Id.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_specification": cluster_specification,
            "cluster_type": cluster_type,
            "cluster_version": cluster_version,
            "instance_count": instance_count,
            "net_type": net_type,
        }
        if acl_entry_list is not None:
            self._values["acl_entry_list"] = acl_entry_list
        if cluster_alias_name is not None:
            self._values["cluster_alias_name"] = cluster_alias_name
        if connection_type is not None:
            self._values["connection_type"] = connection_type
        if disk_capacity is not None:
            self._values["disk_capacity"] = disk_capacity
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if private_slb_specification is not None:
            self._values["private_slb_specification"] = private_slb_specification
        if pub_network_flow is not None:
            self._values["pub_network_flow"] = pub_network_flow
        if pub_slb_specification is not None:
            self._values["pub_slb_specification"] = pub_slb_specification
        if request_pars is not None:
            self._values["request_pars"] = request_pars
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_specification(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.'''
        result = self._values.get("cluster_specification")
        assert result is not None, "Required property 'cluster_specification' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterType: cluster type.'''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3.'''
        result = self._values.get("cluster_version")
        assert result is not None, "Required property 'cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_count(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property instanceCount: instance count.'''
        result = self._values.get("instance_count")
        assert result is not None, "Required property 'instance_count' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def net_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property netType: network type, Enum: privatenet,pubnet.'''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def acl_entry_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property aclEntryList: acl entry list.'''
        result = self._values.get("acl_entry_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def cluster_alias_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property clusterAliasName: cluster alias name.'''
        result = self._values.get("cluster_alias_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property connectionType: network connect type.'''
        result = self._values.get("connection_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disk_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property diskCapacity: disk capacity, unit: G.'''
        result = self._values.get("disk_capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property diskType: disk type.'''
        result = self._values.get("disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property privateSlbSpecification:.'''
        result = self._values.get("private_slb_specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pub_network_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pubNetworkFlow: pub network flow.'''
        result = self._values.get("pub_network_flow")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pub_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pubSlbSpecification:.'''
        result = self._values.get("pub_slb_specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def request_pars(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property requestPars:.'''
        result = self._values.get("request_pars")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: vpc id.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: switcher Id.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Gateway(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.Gateway",
):
    '''A ROS resource type:  ``ALIYUN::MSE::Gateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GatewayProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::Gateway``.

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
    @jsii.member(jsii_name="attrBackupVSwitchId")
    def attr_backup_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute BackupVSwitchId: VSwitchId For Backup.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBackupVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute GatewayUniqueId: Gateway unique identification.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrReplica")
    def attr_replica(self) -> ros_cdk_core.IResolvable:
        '''Attribute Replica: Gateway Node Number.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrReplica"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> ros_cdk_core.IResolvable:
        '''Attribute Spec: Gateway Node Specifications.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSpec"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: VpcId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchId: VSwitchId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.GatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "replica": "replica",
        "spec": "spec",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "backup_v_switch_id": "backupVSwitchId",
        "enterprise_security_group": "enterpriseSecurityGroup",
        "internet_slb_spec": "internetSlbSpec",
        "name": "name",
        "slb_spec": "slbSpec",
    },
)
class GatewayProps:
    def __init__(
        self,
        *,
        replica: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        backup_v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enterprise_security_group: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_slb_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        slb_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::Gateway``.

        :param replica: Property replica: Gateway Node Number.
        :param spec: Property spec: Gateway Node Specifications.
        :param vpc_id: Property vpcId: VpcId.
        :param v_switch_id: Property vSwitchId: VSwitchId.
        :param backup_v_switch_id: Property backupVSwitchId: VSwitchId For Backup.
        :param enterprise_security_group: Property enterpriseSecurityGroup:.
        :param internet_slb_spec: Property internetSlbSpec:.
        :param name: Property name:.
        :param slb_spec: Property slbSpec:.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "replica": replica,
            "spec": spec,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if backup_v_switch_id is not None:
            self._values["backup_v_switch_id"] = backup_v_switch_id
        if enterprise_security_group is not None:
            self._values["enterprise_security_group"] = enterprise_security_group
        if internet_slb_spec is not None:
            self._values["internet_slb_spec"] = internet_slb_spec
        if name is not None:
            self._values["name"] = name
        if slb_spec is not None:
            self._values["slb_spec"] = slb_spec

    @builtins.property
    def replica(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property replica: Gateway Node Number.'''
        result = self._values.get("replica")
        assert result is not None, "Required property 'replica' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property spec: Gateway Node Specifications.'''
        result = self._values.get("spec")
        assert result is not None, "Required property 'spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: VpcId.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: VSwitchId.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def backup_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property backupVSwitchId: VSwitchId For Backup.'''
        result = self._values.get("backup_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property enterpriseSecurityGroup:.'''
        result = self._values.get("enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetSlbSpec:.'''
        result = self._values.get("internet_slb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name:.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property slbSpec:.'''
        result = self._values.get("slb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::MSE::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::Cluster``.

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
    @jsii.member(jsii_name="attrAclEntryList")
    def attr_acl_entry_list(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AclEntryList: acl entry list
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclEntryList"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AclId: acl id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppVersion: app version
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterAliasName: cluster alias name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterAliasName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: cluster id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterName: cluster name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterSpecification"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterType: cluster type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConnectionType: network connect type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConnectionType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Cpu: cpu core size
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpu"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DiskCapacity: disk capacity, unit: G
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskCapacity"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DiskType: disk type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HealthStatus: health status
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHealthStatus"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceCount: instance count
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceCount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: instance id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InternetAddress: internet address
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InternetDomain: internet domain
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InternetPort: internet port
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IntranetAddress: intranet address
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIntranetAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IntranetDomain: intranet domain
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIntranetDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IntranetPort: intranet port
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIntranetPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MemoryCapacity: memory capacity
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemoryCapacity"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NetType: network type, Enum: privatenet,pubnet
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PayInfo: pay info
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPayInfo"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PubNetworkFlow: pub network flow
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPubNetworkFlow"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: vpc id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchId: switcher Id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterSpecification")
    def cluster_specification(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterSpecification"))

    @cluster_specification.setter
    def cluster_specification(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clusterSpecification", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterType")
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterType: cluster type
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clusterType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterVersion")
    def cluster_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterVersion"))

    @cluster_version.setter
    def cluster_version(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clusterVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceCount")
    def instance_count(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceCount: instance count
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "instanceCount"))

    @instance_count.setter
    def instance_count(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="netType")
    def net_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: netType: network type, Enum: privatenet,pubnet
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "netType"))

    @net_type.setter
    def net_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "netType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aclEntryList")
    def acl_entry_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: aclEntryList: acl entry list
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "aclEntryList"))

    @acl_entry_list.setter
    def acl_entry_list(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "aclEntryList", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterAliasName")
    def cluster_alias_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: clusterAliasName: cluster alias name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "clusterAliasName"))

    @cluster_alias_name.setter
    def cluster_alias_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "clusterAliasName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionType")
    def connection_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionType: network connect type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "connectionType"))

    @connection_type.setter
    def connection_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "connectionType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="diskCapacity")
    def disk_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: diskCapacity: disk capacity, unit: G
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "diskCapacity"))

    @disk_capacity.setter
    def disk_capacity(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "diskCapacity", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="diskType")
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: diskType: disk type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "diskType"))

    @disk_type.setter
    def disk_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "diskType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="privateSlbSpecification")
    def private_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateSlbSpecification:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "privateSlbSpecification"))

    @private_slb_specification.setter
    def private_slb_specification(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "privateSlbSpecification", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pubNetworkFlow")
    def pub_network_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pubNetworkFlow: pub network flow
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pubNetworkFlow"))

    @pub_network_flow.setter
    def pub_network_flow(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pubNetworkFlow", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pubSlbSpecification")
    def pub_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pubSlbSpecification:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pubSlbSpecification"))

    @pub_slb_specification.setter
    def pub_slb_specification(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pubSlbSpecification", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="requestPars")
    def request_pars(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: requestPars:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "requestPars"))

    @request_pars.setter
    def request_pars(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "requestPars", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: vpc id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: switcher Id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        "acl_entry_list": "aclEntryList",
        "cluster_alias_name": "clusterAliasName",
        "connection_type": "connectionType",
        "disk_capacity": "diskCapacity",
        "disk_type": "diskType",
        "private_slb_specification": "privateSlbSpecification",
        "pub_network_flow": "pubNetworkFlow",
        "pub_slb_specification": "pubSlbSpecification",
        "request_pars": "requestPars",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        cluster_specification: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_count: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        net_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        acl_entry_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        cluster_alias_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        disk_capacity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        disk_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_slb_specification: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pub_network_flow: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pub_slb_specification: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        request_pars: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::Cluster``.

        :param cluster_specification: 
        :param cluster_type: 
        :param cluster_version: 
        :param instance_count: 
        :param net_type: 
        :param acl_entry_list: 
        :param cluster_alias_name: 
        :param connection_type: 
        :param disk_capacity: 
        :param disk_type: 
        :param private_slb_specification: 
        :param pub_network_flow: 
        :param pub_slb_specification: 
        :param request_pars: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_specification": cluster_specification,
            "cluster_type": cluster_type,
            "cluster_version": cluster_version,
            "instance_count": instance_count,
            "net_type": net_type,
        }
        if acl_entry_list is not None:
            self._values["acl_entry_list"] = acl_entry_list
        if cluster_alias_name is not None:
            self._values["cluster_alias_name"] = cluster_alias_name
        if connection_type is not None:
            self._values["connection_type"] = connection_type
        if disk_capacity is not None:
            self._values["disk_capacity"] = disk_capacity
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if private_slb_specification is not None:
            self._values["private_slb_specification"] = private_slb_specification
        if pub_network_flow is not None:
            self._values["pub_network_flow"] = pub_network_flow
        if pub_slb_specification is not None:
            self._values["pub_slb_specification"] = pub_slb_specification
        if request_pars is not None:
            self._values["request_pars"] = request_pars
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_specification(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
        '''
        result = self._values.get("cluster_specification")
        assert result is not None, "Required property 'cluster_specification' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterType: cluster type
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
        '''
        result = self._values.get("cluster_version")
        assert result is not None, "Required property 'cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_count(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceCount: instance count
        '''
        result = self._values.get("instance_count")
        assert result is not None, "Required property 'instance_count' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def net_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: netType: network type, Enum: privatenet,pubnet
        '''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def acl_entry_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: aclEntryList: acl entry list
        '''
        result = self._values.get("acl_entry_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def cluster_alias_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: clusterAliasName: cluster alias name
        '''
        result = self._values.get("cluster_alias_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionType: network connect type
        '''
        result = self._values.get("connection_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disk_capacity(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: diskCapacity: disk capacity, unit: G
        '''
        result = self._values.get("disk_capacity")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: diskType: disk type
        '''
        result = self._values.get("disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateSlbSpecification:
        '''
        result = self._values.get("private_slb_specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pub_network_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pubNetworkFlow: pub network flow
        '''
        result = self._values.get("pub_network_flow")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pub_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pubSlbSpecification:
        '''
        result = self._values.get("pub_slb_specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def request_pars(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: requestPars:
        '''
        result = self._values.get("request_pars")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: vpc id
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: switcher Id
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGateway(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosGateway",
):
    '''A ROS template type:  ``ALIYUN::MSE::Gateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGatewayProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::Gateway``.

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
    @jsii.member(jsii_name="attrBackupVSwitchId")
    def attr_backup_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BackupVSwitchId: VSwitchId For Backup
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBackupVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GatewayUniqueId: Gateway unique identification
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PaymentType: The payment type of the resource
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrReplica")
    def attr_replica(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Replica: Gateway Node Number
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrReplica"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Spec: Gateway Node Specifications
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSpec"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: VpcId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchId: VSwitchId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="replica")
    def replica(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: replica: Gateway Node Number
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "replica"))

    @replica.setter
    def replica(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "replica", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="spec")
    def spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: spec: Gateway Node Specifications
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "spec"))

    @spec.setter
    def spec(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "spec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VpcId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: VSwitchId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backupVSwitchId")
    def backup_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: backupVSwitchId: VSwitchId For Backup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "backupVSwitchId"))

    @backup_v_switch_id.setter
    def backup_v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backupVSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enterpriseSecurityGroup")
    def enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: enterpriseSecurityGroup:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "enterpriseSecurityGroup"))

    @enterprise_security_group.setter
    def enterprise_security_group(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enterpriseSecurityGroup", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetSlbSpec")
    def internet_slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetSlbSpec:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetSlbSpec"))

    @internet_slb_spec.setter
    def internet_slb_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetSlbSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="slbSpec")
    def slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: slbSpec:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "slbSpec"))

    @slb_spec.setter
    def slb_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "slbSpec", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "replica": "replica",
        "spec": "spec",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "backup_v_switch_id": "backupVSwitchId",
        "enterprise_security_group": "enterpriseSecurityGroup",
        "internet_slb_spec": "internetSlbSpec",
        "name": "name",
        "slb_spec": "slbSpec",
    },
)
class RosGatewayProps:
    def __init__(
        self,
        *,
        replica: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        backup_v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enterprise_security_group: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_slb_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        slb_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::Gateway``.

        :param replica: 
        :param spec: 
        :param vpc_id: 
        :param v_switch_id: 
        :param backup_v_switch_id: 
        :param enterprise_security_group: 
        :param internet_slb_spec: 
        :param name: 
        :param slb_spec: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "replica": replica,
            "spec": spec,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if backup_v_switch_id is not None:
            self._values["backup_v_switch_id"] = backup_v_switch_id
        if enterprise_security_group is not None:
            self._values["enterprise_security_group"] = enterprise_security_group
        if internet_slb_spec is not None:
            self._values["internet_slb_spec"] = internet_slb_spec
        if name is not None:
            self._values["name"] = name
        if slb_spec is not None:
            self._values["slb_spec"] = slb_spec

    @builtins.property
    def replica(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: replica: Gateway Node Number
        '''
        result = self._values.get("replica")
        assert result is not None, "Required property 'replica' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: spec: Gateway Node Specifications
        '''
        result = self._values.get("spec")
        assert result is not None, "Required property 'spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VpcId
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: VSwitchId
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def backup_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: backupVSwitchId: VSwitchId For Backup
        '''
        result = self._values.get("backup_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: enterpriseSecurityGroup:
        '''
        result = self._values.get("enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetSlbSpec:
        '''
        result = self._values.get("internet_slb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name:
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: slbSpec:
        '''
        result = self._values.get("slb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "ClusterProps",
    "Gateway",
    "GatewayProps",
    "RosCluster",
    "RosClusterProps",
    "RosGateway",
    "RosGatewayProps",
]

publication.publish()
