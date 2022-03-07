'''
## Aliyun ROS CS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CS from '@alicloud/ros-cdk-cs';
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


class AnyCluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.AnyCluster",
):
    '''A ROS resource type:  ``ALIYUN::CS::AnyCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AnyClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::AnyCluster``.

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
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> ros_cdk_core.IResolvable:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.AnyClusterProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_config": "clusterConfig"},
)
class AnyClusterProps:
    def __init__(
        self,
        *,
        cluster_config: typing.Union[typing.Mapping[builtins.str, typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::AnyCluster``.

        :param cluster_config: Property clusterConfig: Cluster config.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_config": cluster_config,
        }

    @builtins.property
    def cluster_config(
        self,
    ) -> typing.Union[typing.Mapping[builtins.str, typing.Any], ros_cdk_core.IResolvable]:
        '''Property clusterConfig: Cluster config.'''
        result = self._values.get("cluster_config")
        assert result is not None, "Required property 'cluster_config' is missing"
        return typing.cast(typing.Union[typing.Mapping[builtins.str, typing.Any], ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AnyClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ClusterNodePool(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.ClusterNodePool",
):
    '''A ROS resource type:  ``ALIYUN::CS::ClusterNodePool``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ClusterNodePoolProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ClusterNodePool``.

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
    @jsii.member(jsii_name="attrNodePoolId")
    def attr_node_pool_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute NodePoolId: Cluster node pool ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodePoolId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ClusterNodePoolProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "scaling_group": "scalingGroup",
        "auto_scaling": "autoScaling",
        "count": "count",
        "kubernetes_config": "kubernetesConfig",
        "management": "management",
        "node_pool_info": "nodePoolInfo",
        "tee_config": "teeConfig",
    },
)
class ClusterNodePoolProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        scaling_group: typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ScalingGroupProperty"],
        auto_scaling: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.AutoScalingProperty"]] = None,
        count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        kubernetes_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]] = None,
        management: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ManagementProperty"]] = None,
        node_pool_info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]] = None,
        tee_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.TeeConfigProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ClusterNodePool``.

        :param cluster_id: Property clusterId: Cluster ID.
        :param scaling_group: Property scalingGroup: The configurations of the scaling group used by the node pool.
        :param auto_scaling: Property autoScaling: The configurations of auto scaling.
        :param count: Property count: The number of nodes in the node pool.
        :param kubernetes_config: Property kubernetesConfig: The configurations of the ACK cluster.
        :param management: Property management: The configurations of the managed node pool.
        :param node_pool_info: Property nodePoolInfo: The configurations of the node pool.
        :param tee_config: Property teeConfig: The configurations of confidential computing.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "scaling_group": scaling_group,
        }
        if auto_scaling is not None:
            self._values["auto_scaling"] = auto_scaling
        if count is not None:
            self._values["count"] = count
        if kubernetes_config is not None:
            self._values["kubernetes_config"] = kubernetes_config
        if management is not None:
            self._values["management"] = management
        if node_pool_info is not None:
            self._values["node_pool_info"] = node_pool_info
        if tee_config is not None:
            self._values["tee_config"] = tee_config

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def scaling_group(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ScalingGroupProperty"]:
        '''Property scalingGroup: The configurations of the scaling group used by the node pool.'''
        result = self._values.get("scaling_group")
        assert result is not None, "Required property 'scaling_group' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ScalingGroupProperty"], result)

    @builtins.property
    def auto_scaling(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.AutoScalingProperty"]]:
        '''Property autoScaling: The configurations of auto scaling.'''
        result = self._values.get("auto_scaling")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.AutoScalingProperty"]], result)

    @builtins.property
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property count: The number of nodes in the node pool.'''
        result = self._values.get("count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def kubernetes_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]]:
        '''Property kubernetesConfig: The configurations of the ACK cluster.'''
        result = self._values.get("kubernetes_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]], result)

    @builtins.property
    def management(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ManagementProperty"]]:
        '''Property management: The configurations of the managed node pool.'''
        result = self._values.get("management")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ManagementProperty"]], result)

    @builtins.property
    def node_pool_info(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]]:
        '''Property nodePoolInfo: The configurations of the node pool.'''
        result = self._values.get("node_pool_info")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]], result)

    @builtins.property
    def tee_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.TeeConfigProperty"]]:
        '''Property teeConfig: The configurations of confidential computing.'''
        result = self._values.get("tee_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.TeeConfigProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterNodePoolProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class KubernetesCluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.KubernetesCluster",
):
    '''A ROS resource type:  ``ALIYUN::CS::KubernetesCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "KubernetesClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::KubernetesCluster``.

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
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> ros_cdk_core.IResolvable:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.KubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "master_instance_types": "masterInstanceTypes",
        "master_v_switch_ids": "masterVSwitchIds",
        "name": "name",
        "vpc_id": "vpcId",
        "worker_instance_types": "workerInstanceTypes",
        "worker_v_switch_ids": "workerVSwitchIds",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cis_enabled": "cisEnabled",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "container_cidr": "containerCidr",
        "cpu_policy": "cpuPolicy",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "format_disk": "formatDisk",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "keep_instance_name": "keepInstanceName",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "load_balancer_spec": "loadBalancerSpec",
        "login_password": "loginPassword",
        "master_count": "masterCount",
        "master_data_disk": "masterDataDisk",
        "master_data_disks": "masterDataDisks",
        "master_system_disk_category": "masterSystemDiskCategory",
        "master_system_disk_performance_level": "masterSystemDiskPerformanceLevel",
        "master_system_disk_size": "masterSystemDiskSize",
        "master_system_disk_snapshot_policy_id": "masterSystemDiskSnapshotPolicyId",
        "node_cidr_mask": "nodeCidrMask",
        "node_port_range": "nodePortRange",
        "num_of_nodes": "numOfNodes",
        "os_type": "osType",
        "period": "period",
        "period_unit": "periodUnit",
        "platform": "platform",
        "pod_vswitch_ids": "podVswitchIds",
        "proxy_mode": "proxyMode",
        "resource_group_id": "resourceGroupId",
        "runtime": "runtime",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "soc_enabled": "socEnabled",
        "ssh_flags": "sshFlags",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "time_zone": "timeZone",
        "user_ca": "userCa",
        "user_data": "userData",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
        "worker_system_disk_snapshot_policy_id": "workerSystemDiskSnapshotPolicyId",
    },
)
class KubernetesClusterProps:
    def __init__(
        self,
        *,
        master_instance_types: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        master_v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        worker_instance_types: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        worker_v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cis_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cpu_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        format_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        keep_instance_name: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        master_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        master_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]] = None,
        master_system_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_system_disk_performance_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_system_disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        master_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        node_port_range: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        num_of_nodes: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        platform: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pod_vswitch_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        runtime: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.RuntimeProperty"]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        soc_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ssh_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosKubernetesCluster.TagsProperty"]] = None,
        taint: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        time_zone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_ca: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        worker_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::KubernetesCluster``.

        :param master_instance_types: Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds. List size must be 3, Instance Type can be repeated.
        :param master_v_switch_ids: Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        :param name: Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        :param vpc_id: Property vpcId: VPC ID.
        :param worker_instance_types: Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        :param worker_v_switch_ids: Property workerVSwitchIds: The virtual switch ID of the worker node.
        :param addons: Property addons: A combination of addon plugins for Kubernetes clusters. Network plug-in: including Flannel and Terway network plug-ins Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used. Ingress: The installation of the Ingress component is enabled by default.
        :param auto_renew: Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are: true: automatic renewal false: do not renew automatically Default to true.
        :param auto_renew_period: Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
        :param charge_type: Property chargeType: cluster payment type. The optional values are: PrePaid: prepaid PostPaid: Pay as you go Default to PostPaid.
        :param cis_enabled: Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement. For more information, see CIS reinforcement. Valid values: true: enables CIS reinforcement. false: disables CIS reinforcement. Default value: false.
        :param cloud_monitor_flags: Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
        :param container_cidr: Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        :param cpu_policy: Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
        :param deletion_protection: Property deletionProtection: Specifies whether to enable deletion protection for the cluster. After deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster. false: disables deletion protection for the cluster. Default value: false.
        :param disable_rollback: Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        :param endpoint_public_access: Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        :param format_disk: Property formatDisk: Specifies whether to mount a data disk to nodes that are created on existing Elastic Compute Service (ECS) instances. Valid values: true: stores the data of containers and images on a data disk. The original data on the disk will be overwritten. Back up data before you mount the disk. false: does not store the data of containers and images on a data disk. Default value: false. How to mount a data disk: If the ECS instances have data disks mounted and the file system of the last data disk is not initialized, the system automatically formats the data disk to ext4. Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet. The system does not create or mount a new data disk if no data disk has been mounted to the ECS instances.
        :param is_enterprise_security_group: Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. This parameter takes effect only if security_group_id is left empty. Note You must specify an advanced security group for a cluster that has Terway installed. true: creates an advanced security group. false: does not create an advanced security group. Default value: false.
        :param keep_instance_name: Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster. true: retains the names. false: does not retain the names. The new names are assigned by the system. Default value: true.
        :param key_pair: Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        :param kubernetes_version: Property kubernetesVersion: The version of the Kubernetes cluster.
        :param load_balancer_spec: Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        :param login_password: Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        :param master_count: Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
        :param master_data_disk: Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.
        :param master_data_disks: Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
        :param master_system_disk_category: Property masterSystemDiskCategory: Master disk system disk type. The value includes: cloud_efficiency: efficient cloud disk cloud_ssd: SSD cloud disk cloud_essd: ESSD cloud diskDefault to cloud_ssd.
        :param master_system_disk_performance_level: Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node. Valid values: PL0|PL1|PL2|PL3
        :param master_system_disk_size: Property masterSystemDiskSize: Master disk system disk size in GiB. Default to 120.
        :param master_system_disk_snapshot_policy_id: Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
        :param node_cidr_mask: Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. This number is determined by the specified pod CIDR block. This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        :param node_port_range: Property nodePortRange: Node service port. The value range is [30000, 65535]. Default to 30000-65535.
        :param num_of_nodes: Property numOfNodes: Number of worker nodes. The range is [0,300]. Default to 3.
        :param os_type: Property osType: The type of operating system. Valid values: Windows Linux Default value: Linux.
        :param period: Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is: When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"} When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"} Default to 1.
        :param period_unit: Property periodUnit: When you specify PrePaid, you need to specify the period. The options are: Week: Time is measured in weeks Month: time in months Default to Month
        :param platform: Property platform: The release version of the operating system. Valid values: CentOS AliyunLinux QbootAliyunLinux Qboot Windows WindowsCore Default value: CentOS.
        :param pod_vswitch_ids: Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, you must specify at least one pod vSwitch in the same zone. The pod vSwitches cannot be the same as the node vSwitches. We recommend that you set the mask length of the CIDR block to a value no greater than 19 for the pod vSwitches. The pod_vswitch_ids parameter is required when the Terway network plug-in is selected for the cluster.
        :param proxy_mode: Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param runtime: Property runtime: The container runtime of the cluster. The default runtime is Docker.
        :param security_group_id: Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        :param service_cidr: Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        :param snat_entry: Property snatEntry: Whether to configure SNAT for the network. When a VPC can access the public network environment, set it to false. When an existing VPC cannot access the public network environment: When set to True, SNAT is configured and the public network environment can be accessed at this time. If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time. Default to true.
        :param soc_enabled: Property socEnabled: Valid values: true: enables reinforcement based on classified protection. false: disables reinforcement based on classified protection. Default value: false.
        :param ssh_flags: Property sshFlags: Whether to enable public network SSH login: true: open false: not open.
        :param tags: Property tags: Tag the cluster.
        :param taint: Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        :param timeout_mins: Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        :param time_zone: Property timeZone: The time zone of the cluster.
        :param user_ca: Property userCa: The CA of cluster.
        :param user_data: Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        :param worker_data_disk: Property workerDataDisk: Whether to mount the data disk. The options are as follows: true: indicates that the worker node mounts data disks. false: indicates that the worker node does not mount data disks. Default to false.
        :param worker_data_disks: Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        :param worker_system_disk_category: Property workerSystemDiskCategory: Worker node system disk type. The value includes: cloud_efficiency: efficient cloud disk cloud_ssd: SSD cloud disk Default to cloud_efficiency.
        :param worker_system_disk_size: Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB. Default to 120.
        :param worker_system_disk_snapshot_policy_id: Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "master_instance_types": master_instance_types,
            "master_v_switch_ids": master_v_switch_ids,
            "name": name,
            "vpc_id": vpc_id,
            "worker_instance_types": worker_instance_types,
            "worker_v_switch_ids": worker_v_switch_ids,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cis_enabled is not None:
            self._values["cis_enabled"] = cis_enabled
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if cpu_policy is not None:
            self._values["cpu_policy"] = cpu_policy
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if format_disk is not None:
            self._values["format_disk"] = format_disk
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if keep_instance_name is not None:
            self._values["keep_instance_name"] = keep_instance_name
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if login_password is not None:
            self._values["login_password"] = login_password
        if master_count is not None:
            self._values["master_count"] = master_count
        if master_data_disk is not None:
            self._values["master_data_disk"] = master_data_disk
        if master_data_disks is not None:
            self._values["master_data_disks"] = master_data_disks
        if master_system_disk_category is not None:
            self._values["master_system_disk_category"] = master_system_disk_category
        if master_system_disk_performance_level is not None:
            self._values["master_system_disk_performance_level"] = master_system_disk_performance_level
        if master_system_disk_size is not None:
            self._values["master_system_disk_size"] = master_system_disk_size
        if master_system_disk_snapshot_policy_id is not None:
            self._values["master_system_disk_snapshot_policy_id"] = master_system_disk_snapshot_policy_id
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if node_port_range is not None:
            self._values["node_port_range"] = node_port_range
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if os_type is not None:
            self._values["os_type"] = os_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if platform is not None:
            self._values["platform"] = platform
        if pod_vswitch_ids is not None:
            self._values["pod_vswitch_ids"] = pod_vswitch_ids
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if runtime is not None:
            self._values["runtime"] = runtime
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if soc_enabled is not None:
            self._values["soc_enabled"] = soc_enabled
        if ssh_flags is not None:
            self._values["ssh_flags"] = ssh_flags
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if time_zone is not None:
            self._values["time_zone"] = time_zone
        if user_ca is not None:
            self._values["user_ca"] = user_ca
        if user_data is not None:
            self._values["user_data"] = user_data
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size
        if worker_system_disk_snapshot_policy_id is not None:
            self._values["worker_system_disk_snapshot_policy_id"] = worker_system_disk_snapshot_policy_id

    @builtins.property
    def master_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''Property masterInstanceTypes: Master node ECS specification type code.

        For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        List size must be 3, Instance Type can be repeated.
        '''
        result = self._values.get("master_instance_types")
        assert result is not None, "Required property 'master_instance_types' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def master_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''Property masterVSwitchIds: Master node switch ID.

        To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        '''
        result = self._values.get("master_v_switch_ids")
        assert result is not None, "Required property 'master_v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The name of the cluster.

        The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: VPC ID.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property workerInstanceTypes: Worker node ECS specification type code.

        For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        assert result is not None, "Required property 'worker_instance_types' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def worker_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''Property workerVSwitchIds: The virtual switch ID of the worker node.'''
        result = self._values.get("worker_v_switch_ids")
        assert result is not None, "Required property 'worker_v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]]:
        '''Property addons: A combination of addon plugins for Kubernetes clusters.

        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Whether the cluster automatically renews.

        It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.'''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property chargeType: cluster payment type.

        The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.

        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        result = self._values.get("cis_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.'''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property containerCidr: The container network segment cannot conflict with the VPC network segment.

        When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cpu_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cpuPolicy: CPU policy.

        The cluster version is 1.12.6 and above supports both static and none strategies.
        '''
        result = self._values.get("cpu_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionProtection: Specifies whether to enable deletion protection for the cluster.

        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.

        If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.

        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.

        Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        result = self._values.get("format_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.

        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.

        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        result = self._values.get("keep_instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property keyPair: Key pair name.

        Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property kubernetesVersion: The version of the Kubernetes cluster.'''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loadBalancerSpec: The specification of the Server Load Balancer instance.

        Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loginPassword: SSH login password.

        Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property masterCount: Number of master instances.

        The value can be 3 or 5. The default value is 3.
        '''
        result = self._values.get("master_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.'''
        result = self._values.get("master_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]]:
        '''Property masterDataDisks: Master data disk type, size and other configuration combinations.

        This parameter is valid only when the master node data disk is mounted.
        '''
        result = self._values.get("master_data_disks")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]], result)

    @builtins.property
    def master_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterSystemDiskCategory: Master disk system disk type.

        The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        cloud_essd: ESSD cloud diskDefault to cloud_ssd.
        '''
        result = self._values.get("master_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_system_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.

        Valid values: PL0|PL1|PL2|PL3
        '''
        result = self._values.get("master_system_disk_performance_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property masterSystemDiskSize: Master disk system disk size in GiB.

        Default to 120.
        '''
        result = self._values.get("master_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.'''
        result = self._values.get("master_system_disk_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.

        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def node_port_range(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property nodePortRange: Node service port.

        The value range is [30000, 65535].
        Default to 30000-65535.
        '''
        result = self._values.get("node_port_range")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property numOfNodes: Number of worker nodes.

        The range is [0,300].
        Default to 3.
        '''
        result = self._values.get("num_of_nodes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property osType: The type of operating system.

        Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The duration of the annual subscription and monthly subscription.

        It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodUnit: When you specify PrePaid, you need to specify the period.

        The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property platform: The release version of the operating system.

        Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property podVswitchIds: The list of pod vSwitches.

        For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        result = self._values.get("pod_vswitch_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.

        The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.RuntimeProperty"]]:
        '''Property runtime: The container runtime of the cluster.

        The default runtime is Docker.
        '''
        result = self._values.get("runtime")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.RuntimeProperty"]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.

        When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property snatEntry: Whether to configure SNAT for the network.

        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property socEnabled: Valid values: true: enables reinforcement based on classified protection.

        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        result = self._values.get("soc_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssh_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property sshFlags: Whether to enable public network SSH login: true: open false: not open.'''
        result = self._values.get("ssh_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosKubernetesCluster.TagsProperty"]]:
        '''Property tags: Tag the cluster.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosKubernetesCluster.TagsProperty"]], result)

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''Property taint: It is used to mark nodes with taints.

        It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        result = self._values.get("taint")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property timeoutMins: Cluster resource stack creation timeout, in minutes.

        The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property timeZone: The time zone of the cluster.'''
        result = self._values.get("time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_ca(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property userCa: The CA of cluster.'''
        result = self._values.get("user_ca")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property userData: The user-defined data.

        [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property workerDataDisk: Whether to mount the data disk.

        The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]]:
        '''Property workerDataDisks: A combination of configurations such as worker data disk type and size.

        This parameter is valid only when the worker node data disk is mounted.
        '''
        result = self._values.get("worker_data_disks")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property workerSystemDiskCategory: Worker node system disk type.

        The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.

        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.'''
        result = self._values.get("worker_system_disk_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "KubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ManagedEdgeKubernetesCluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.ManagedEdgeKubernetesCluster",
):
    '''A ROS resource type:  ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ManagedEdgeKubernetesClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

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
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> ros_cdk_core.IResolvable:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ManagedEdgeKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "num_of_nodes": "numOfNodes",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "cluster_spec": "clusterSpec",
        "container_cidr": "containerCidr",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "key_pair": "keyPair",
        "login_password": "loginPassword",
        "node_cidr_mask": "nodeCidrMask",
        "period": "period",
        "period_unit": "periodUnit",
        "profile": "profile",
        "proxy_mode": "proxyMode",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "tags": "tags",
        "timeout_mins": "timeoutMins",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disk_category": "workerDataDiskCategory",
        "worker_data_disk_size": "workerDataDiskSize",
        "worker_instance_types": "workerInstanceTypes",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
    },
)
class ManagedEdgeKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        num_of_nodes: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        profile: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosManagedEdgeKubernetesCluster.TagsProperty"]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_data_disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        worker_instance_types: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

        :param name: Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        :param num_of_nodes: Property numOfNodes: Number of worker nodes. The range is [0,300]
        :param addons: Property addons: The add-ons to be installed for the cluster.
        :param auto_renew: Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are: true: automatic renewal false: do not renew automatically Default to true.
        :param auto_renew_period: Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
        :param charge_type: Property chargeType: cluster payment type. The optional values are: PrePaid: prepaid PostPaid: Pay as you go Default to PostPaid.
        :param cloud_monitor_flags: Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
        :param cluster_spec: Property clusterSpec: The edge managed cluster spec. Value: ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster". ack.standard: Standard hosting cluster. Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        :param container_cidr: Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        :param deletion_protection: Property deletionProtection: Specifies whether to enable deletion protection for the cluster. After deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster. false: disables deletion protection for the cluster. Default value: false.
        :param disable_rollback: Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        :param endpoint_public_access: Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        :param is_enterprise_security_group: Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. This parameter takes effect only if security_group_id is left empty. Note You must specify an advanced security group for a cluster that has Terway installed. true: creates an advanced security group. false: does not create an advanced security group. Default value: false.
        :param key_pair: Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        :param login_password: Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        :param node_cidr_mask: Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. This number is determined by the specified pod CIDR block. This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        :param period: Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is: When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"} When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"} Default to 1.
        :param period_unit: Property periodUnit: When you specify PrePaid, you need to specify the period. The options are: Week: Time is measured in weeks Month: time in months Default to Month
        :param profile: Property profile: Edge cluster ID. The default value is Edge.
        :param proxy_mode: Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        :param service_cidr: Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        :param snat_entry: Property snatEntry: Whether to configure SNAT for the network. When a VPC can access the public network environment, set it to false. When an existing VPC cannot access the public network environment: When set to True, SNAT is configured and the public network environment can be accessed at this time. If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time. Default to true.
        :param tags: Property tags: Tag the cluster.
        :param timeout_mins: Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        :param vpc_id: Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        :param v_switch_ids: Property vSwitchIds: The virtual switch ID of the worker node.
        :param worker_data_disk: Property workerDataDisk: Whether to mount the data disk. The options are as follows: true: indicates that the worker node mounts data disks. false: indicates that the worker node does not mount data disks. Default to false.
        :param worker_data_disk_category: Property workerDataDiskCategory: Data disk type.
        :param worker_data_disk_size: Property workerDataDiskSize: Data disk size in GiB.
        :param worker_instance_types: Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        :param worker_system_disk_category: Property workerSystemDiskCategory: Worker node system disk type. Default to cloud_efficiency.
        :param worker_system_disk_size: Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB. Default to 120.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "num_of_nodes": num_of_nodes,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if login_password is not None:
            self._values["login_password"] = login_password
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if profile is not None:
            self._values["profile"] = profile
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if tags is not None:
            self._values["tags"] = tags
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disk_category is not None:
            self._values["worker_data_disk_category"] = worker_data_disk_category
        if worker_data_disk_size is not None:
            self._values["worker_data_disk_size"] = worker_data_disk_size
        if worker_instance_types is not None:
            self._values["worker_instance_types"] = worker_instance_types
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The name of the cluster.

        The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def num_of_nodes(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property numOfNodes: Number of worker nodes.

        The range is [0,300]
        '''
        result = self._values.get("num_of_nodes")
        assert result is not None, "Required property 'num_of_nodes' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]]:
        '''Property addons: The add-ons to be installed for the cluster.'''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Whether the cluster automatically renews.

        It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.'''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property chargeType: cluster payment type.

        The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.'''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property clusterSpec: The edge managed cluster spec.

        Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property containerCidr: The container network segment cannot conflict with the VPC network segment.

        When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionProtection: Specifies whether to enable deletion protection for the cluster.

        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.

        If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.

        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.

        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property keyPair: Key pair name.

        Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loginPassword: SSH login password.

        Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.

        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The duration of the annual subscription and monthly subscription.

        It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodUnit: When you specify PrePaid, you need to specify the period.

        The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def profile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property profile: Edge cluster ID.

        The default value is Edge.
        '''
        result = self._values.get("profile")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.

        The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.

        When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property snatEntry: Whether to configure SNAT for the network.

        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosManagedEdgeKubernetesCluster.TagsProperty"]]:
        '''Property tags: Tag the cluster.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosManagedEdgeKubernetesCluster.TagsProperty"]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property timeoutMins: Cluster resource stack creation timeout, in minutes.

        The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: VPC ID.

        If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property vSwitchIds: The virtual switch ID of the worker node.'''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property workerDataDisk: Whether to mount the data disk.

        The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property workerDataDiskCategory: Data disk type.'''
        result = self._values.get("worker_data_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property workerDataDiskSize: Data disk size in GiB.'''
        result = self._values.get("worker_data_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property workerInstanceTypes: Worker node ECS specification type code.

        For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property workerSystemDiskCategory: Worker node system disk type.

        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.

        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ManagedEdgeKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ManagedKubernetesCluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.ManagedKubernetesCluster",
):
    '''A ROS resource type:  ``ALIYUN::CS::ManagedKubernetesCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ManagedKubernetesClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ManagedKubernetesCluster``.

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
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> ros_cdk_core.IResolvable:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ManagedKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "worker_instance_types": "workerInstanceTypes",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cis_enabled": "cisEnabled",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "cluster_spec": "clusterSpec",
        "container_cidr": "containerCidr",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "encryption_provider_key": "encryptionProviderKey",
        "endpoint_public_access": "endpointPublicAccess",
        "format_disk": "formatDisk",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "keep_instance_name": "keepInstanceName",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "load_balancer_spec": "loadBalancerSpec",
        "login_password": "loginPassword",
        "node_cidr_mask": "nodeCidrMask",
        "num_of_nodes": "numOfNodes",
        "os_type": "osType",
        "period": "period",
        "period_unit": "periodUnit",
        "platform": "platform",
        "pod_vswitch_ids": "podVswitchIds",
        "proxy_mode": "proxyMode",
        "runtime": "runtime",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "soc_enabled": "socEnabled",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "user_data": "userData",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
    },
)
class ManagedKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        worker_instance_types: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cis_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        encryption_provider_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        format_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        keep_instance_name: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        num_of_nodes: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        platform: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pod_vswitch_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        runtime: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        soc_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosManagedKubernetesCluster.TagsProperty"]] = None,
        taint: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ManagedKubernetesCluster``.

        :param name: Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        :param vpc_id: Property vpcId: VPC ID.
        :param v_switch_ids: Property vSwitchIds: The virtual switch ID of the worker node.
        :param worker_instance_types: Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        :param addons: Property addons: A combination of addon plugins for Kubernetes clusters. Network plug-in: including Flannel and Terway network plug-ins Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used. Ingress: The installation of the Ingress component is enabled by default.
        :param auto_renew: Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are: true: automatic renewal false: do not renew automatically Default to true.
        :param auto_renew_period: Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
        :param charge_type: Property chargeType: cluster payment type. The optional values are: PrePaid: prepaid PostPaid: Pay as you go Default to PostPaid.
        :param cis_enabled: Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement. For more information, see CIS reinforcement. Valid values: true: enables CIS reinforcement. false: disables CIS reinforcement. Default value: false.
        :param cloud_monitor_flags: Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
        :param cluster_spec: Property clusterSpec: The managed cluster spec. Value: ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster". ack.standard: Standard hosting cluster. Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        :param container_cidr: Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        :param deletion_protection: Property deletionProtection: Specifies whether to enable deletion protection for the cluster. After deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster. false: disables deletion protection for the cluster. Default value: false.
        :param disable_rollback: Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        :param encryption_provider_key: Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
        :param endpoint_public_access: Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        :param format_disk: Property formatDisk: Specifies whether to mount a data disk to nodes that are created on existing Elastic Compute Service (ECS) instances. Valid values: true: stores the data of containers and images on a data disk. The original data on the disk will be overwritten. Back up data before you mount the disk. false: does not store the data of containers and images on a data disk. Default value: false. How to mount a data disk: If the ECS instances have data disks mounted and the file system of the last data disk is not initialized, the system automatically formats the data disk to ext4. Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet. The system does not create or mount a new data disk if no data disk has been mounted to the ECS instances.
        :param is_enterprise_security_group: Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. This parameter takes effect only if security_group_id is left empty. Note You must specify an advanced security group for a cluster that has Terway installed. true: creates an advanced security group. false: does not create an advanced security group. Default value: false.
        :param keep_instance_name: Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster. true: retains the names. false: does not retain the names. The new names are assigned by the system. Default value: true.
        :param key_pair: Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        :param kubernetes_version: Property kubernetesVersion: The version of the Kubernetes cluster.
        :param load_balancer_spec: Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        :param login_password: Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        :param node_cidr_mask: Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. This number is determined by the specified pod CIDR block. This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        :param num_of_nodes: Property numOfNodes: Number of worker nodes. The range is [0,300]. Default to 3.
        :param os_type: Property osType: The type of operating system. Valid values: Windows Linux Default value: Linux.
        :param period: Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is: When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"} When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"} Default to 1.
        :param period_unit: Property periodUnit: When you specify PrePaid, you need to specify the period. The options are: Week: Time is measured in weeks Month: time in months Default to Month
        :param platform: Property platform: The release version of the operating system. Valid values: CentOS AliyunLinux QbootAliyunLinux Qboot Windows WindowsCore Default value: CentOS.
        :param pod_vswitch_ids: Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, you must specify at least one pod vSwitch in the same zone. The pod vSwitches cannot be the same as the node vSwitches. We recommend that you set the mask length of the CIDR block to a value no greater than 19 for the pod vSwitches. The pod_vswitch_ids parameter is required when the Terway network plug-in is selected for the cluster.
        :param proxy_mode: Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        :param runtime: Property runtime: The container runtime of the cluster. The default runtime is Docker.
        :param security_group_id: Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        :param service_cidr: Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        :param snat_entry: Property snatEntry: Whether to configure SNAT for the network. When a VPC can access the public network environment, set it to false. When an existing VPC cannot access the public network environment: When set to True, SNAT is configured and the public network environment can be accessed at this time. If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time. Default to true.
        :param soc_enabled: Property socEnabled: Valid values: true: enables reinforcement based on classified protection. false: disables reinforcement based on classified protection. Default value: false.
        :param tags: Property tags: Tag the cluster.
        :param taint: Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        :param timeout_mins: Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        :param user_data: Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        :param worker_data_disk: Property workerDataDisk: Whether to mount the data disk. The options are as follows: true: indicates that the worker node mounts data disks. false: indicates that the worker node does not mount data disks. Default to false.
        :param worker_data_disks: Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        :param worker_system_disk_category: Property workerSystemDiskCategory: Worker node system disk type. The value includes: cloud_efficiency: efficient cloud disk cloud_ssd: SSD cloud disk Default to cloud_efficiency.
        :param worker_system_disk_size: Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB. Default to 120.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "vpc_id": vpc_id,
            "v_switch_ids": v_switch_ids,
            "worker_instance_types": worker_instance_types,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cis_enabled is not None:
            self._values["cis_enabled"] = cis_enabled
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if encryption_provider_key is not None:
            self._values["encryption_provider_key"] = encryption_provider_key
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if format_disk is not None:
            self._values["format_disk"] = format_disk
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if keep_instance_name is not None:
            self._values["keep_instance_name"] = keep_instance_name
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if login_password is not None:
            self._values["login_password"] = login_password
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if os_type is not None:
            self._values["os_type"] = os_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if platform is not None:
            self._values["platform"] = platform
        if pod_vswitch_ids is not None:
            self._values["pod_vswitch_ids"] = pod_vswitch_ids
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if runtime is not None:
            self._values["runtime"] = runtime
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if soc_enabled is not None:
            self._values["soc_enabled"] = soc_enabled
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if user_data is not None:
            self._values["user_data"] = user_data
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The name of the cluster.

        The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: VPC ID.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''Property vSwitchIds: The virtual switch ID of the worker node.'''
        result = self._values.get("v_switch_ids")
        assert result is not None, "Required property 'v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property workerInstanceTypes: Worker node ECS specification type code.

        For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        assert result is not None, "Required property 'worker_instance_types' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]]:
        '''Property addons: A combination of addon plugins for Kubernetes clusters.

        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Whether the cluster automatically renews.

        It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.'''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property chargeType: cluster payment type.

        The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.

        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        result = self._values.get("cis_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.'''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property clusterSpec: The managed cluster spec.

        Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property containerCidr: The container network segment cannot conflict with the VPC network segment.

        When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionProtection: Specifies whether to enable deletion protection for the cluster.

        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.

        If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_provider_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS).

        This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
        '''
        result = self._values.get("encryption_provider_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.

        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.

        Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        result = self._values.get("format_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.

        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.

        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        result = self._values.get("keep_instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property keyPair: Key pair name.

        Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property kubernetesVersion: The version of the Kubernetes cluster.'''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loadBalancerSpec: The specification of the Server Load Balancer instance.

        Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loginPassword: SSH login password.

        Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.

        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property numOfNodes: Number of worker nodes.

        The range is [0,300].
        Default to 3.
        '''
        result = self._values.get("num_of_nodes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property osType: The type of operating system.

        Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The duration of the annual subscription and monthly subscription.

        It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodUnit: When you specify PrePaid, you need to specify the period.

        The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property platform: The release version of the operating system.

        Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property podVswitchIds: The list of pod vSwitches.

        For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        result = self._values.get("pod_vswitch_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.

        The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]]:
        '''Property runtime: The container runtime of the cluster.

        The default runtime is Docker.
        '''
        result = self._values.get("runtime")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.

        When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property snatEntry: Whether to configure SNAT for the network.

        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property socEnabled: Valid values: true: enables reinforcement based on classified protection.

        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        result = self._values.get("soc_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosManagedKubernetesCluster.TagsProperty"]]:
        '''Property tags: Tag the cluster.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosManagedKubernetesCluster.TagsProperty"]], result)

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''Property taint: It is used to mark nodes with taints.

        It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        result = self._values.get("taint")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property timeoutMins: Cluster resource stack creation timeout, in minutes.

        The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property userData: The user-defined data.

        [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property workerDataDisk: Whether to mount the data disk.

        The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]]:
        '''Property workerDataDisks: A combination of configurations such as worker data disk type and size.

        This parameter is valid only when the worker node data disk is mounted.
        '''
        result = self._values.get("worker_data_disks")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property workerSystemDiskCategory: Worker node system disk type.

        The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.

        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ManagedKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAnyCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosAnyCluster",
):
    '''A ROS template type:  ``ALIYUN::CS::AnyCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAnyClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::AnyCluster``.

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
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: APIServerSLBId: The id of API server SLB
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Nodes: The list of cluster nodes.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: Scaling configuration id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingRuleId: Scaling rule id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: WorkerRamRoleName: Worker ram role name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterConfig")
    def cluster_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: clusterConfig: Cluster config.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "clusterConfig"))

    @cluster_config.setter
    def cluster_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        jsii.set(self, "clusterConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosAnyClusterProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_config": "clusterConfig"},
)
class RosAnyClusterProps:
    def __init__(
        self,
        *,
        cluster_config: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::AnyCluster``.

        :param cluster_config: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_config": cluster_config,
        }

    @builtins.property
    def cluster_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: clusterConfig: Cluster config.
        '''
        result = self._values.get("cluster_config")
        assert result is not None, "Required property 'cluster_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAnyClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterNodePool(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool",
):
    '''A ROS template type:  ``ALIYUN::CS::ClusterNodePool``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosClusterNodePoolProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ClusterNodePool``.

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
    @jsii.member(jsii_name="attrNodePoolId")
    def attr_node_pool_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NodePoolId: Cluster node pool ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodePoolId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterId")
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clusterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="scalingGroup")
    def scaling_group(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ScalingGroupProperty"]:
        '''
        :Property: scalingGroup: The configurations of the scaling group used by the node pool.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ScalingGroupProperty"], jsii.get(self, "scalingGroup"))

    @scaling_group.setter
    def scaling_group(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ScalingGroupProperty"],
    ) -> None:
        jsii.set(self, "scalingGroup", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoScaling")
    def auto_scaling(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.AutoScalingProperty"]]:
        '''
        :Property: autoScaling: The configurations of auto scaling.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.AutoScalingProperty"]], jsii.get(self, "autoScaling"))

    @auto_scaling.setter
    def auto_scaling(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.AutoScalingProperty"]],
    ) -> None:
        jsii.set(self, "autoScaling", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="count")
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: count: The number of nodes in the node pool.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "count"))

    @count.setter
    def count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "count", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="kubernetesConfig")
    def kubernetes_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]]:
        '''
        :Property: kubernetesConfig: The configurations of the ACK cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]], jsii.get(self, "kubernetesConfig"))

    @kubernetes_config.setter
    def kubernetes_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]],
    ) -> None:
        jsii.set(self, "kubernetesConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="management")
    def management(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ManagementProperty"]]:
        '''
        :Property: management: The configurations of the managed node pool.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ManagementProperty"]], jsii.get(self, "management"))

    @management.setter
    def management(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.ManagementProperty"]],
    ) -> None:
        jsii.set(self, "management", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="nodePoolInfo")
    def node_pool_info(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]]:
        '''
        :Property: nodePoolInfo: The configurations of the node pool.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]], jsii.get(self, "nodePoolInfo"))

    @node_pool_info.setter
    def node_pool_info(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]],
    ) -> None:
        jsii.set(self, "nodePoolInfo", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="teeConfig")
    def tee_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.TeeConfigProperty"]]:
        '''
        :Property: teeConfig: The configurations of confidential computing.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.TeeConfigProperty"]], jsii.get(self, "teeConfig"))

    @tee_config.setter
    def tee_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.TeeConfigProperty"]],
    ) -> None:
        jsii.set(self, "teeConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable": "enable",
            "eip_bandwidth": "eipBandwidth",
            "eip_internet_charge_type": "eipInternetChargeType",
            "is_bond_eip": "isBondEip",
            "max_instances": "maxInstances",
            "min_instances": "minInstances",
            "type": "type",
        },
    )
    class AutoScalingProperty:
        def __init__(
            self,
            *,
            enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            eip_bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            eip_internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            is_bond_eip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            max_instances: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            min_instances: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param enable: 
            :param eip_bandwidth: 
            :param eip_internet_charge_type: 
            :param is_bond_eip: 
            :param max_instances: 
            :param min_instances: 
            :param type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "enable": enable,
            }
            if eip_bandwidth is not None:
                self._values["eip_bandwidth"] = eip_bandwidth
            if eip_internet_charge_type is not None:
                self._values["eip_internet_charge_type"] = eip_internet_charge_type
            if is_bond_eip is not None:
                self._values["is_bond_eip"] = is_bond_eip
            if max_instances is not None:
                self._values["max_instances"] = max_instances
            if min_instances is not None:
                self._values["min_instances"] = min_instances
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
            '''
            :Property:

            enable: Specifies whether to enable auto scaling. Valid values:
            true: enables auto scaling.
            false: disables auto scaling.
            If you set this parameter to false, other parameters in the auto_scaling section do not take effect.
            '''
            result = self._values.get("enable")
            assert result is not None, "Required property 'enable' is missing"
            return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

        @builtins.property
        def eip_bandwidth(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: eipBandwidth: The peak bandwidth of the EIP. Unit: Mbps
            '''
            result = self._values.get("eip_bandwidth")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def eip_internet_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            eipInternetChargeType: The billing method of the EIP. Valid values:
            PayByBandwidth: pay-by-bandwidth.
            PayByTraffic: pay-by-data-transfer.
            Default value: PayByBandwidth.
            '''
            result = self._values.get("eip_internet_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def is_bond_eip(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            isBondEip: Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
            true: associates an EIP with the node pool.
            false: does not associate an EIP with the node pool.
            Default value: false.
            '''
            result = self._values.get("is_bond_eip")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def max_instances(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: maxInstances: The maximum number of Elastic Compute Service (ECS) instances in the scaling group.
            '''
            result = self._values.get("max_instances")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def min_instances(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: minInstances: The minimum number of Elastic Compute Service (ECS) instances in the scaling group.
            '''
            result = self._values.get("min_instances")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            type: The instance types that can be used for the auto scaling of the node pool. Valid values:
            cpu: regular instance.
            gpu: GPU-accelerated instance.
            gpushare: shared GPU-accelerated instance.
            spot: preemptible instance.
            Default value: cpu.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AutoScalingProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "auto_snapshot_policy_id": "autoSnapshotPolicyId",
            "category": "category",
            "encrypted": "encrypted",
            "performance_level": "performanceLevel",
            "size": "size",
        },
    )
    class DataDisksProperty:
        def __init__(
            self,
            *,
            auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            encrypted: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param auto_snapshot_policy_id: 
            :param category: 
            :param encrypted: 
            :param performance_level: 
            :param size: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if auto_snapshot_policy_id is not None:
                self._values["auto_snapshot_policy_id"] = auto_snapshot_policy_id
            if category is not None:
                self._values["category"] = category
            if encrypted is not None:
                self._values["encrypted"] = encrypted
            if performance_level is not None:
                self._values["performance_level"] = performance_level
            if size is not None:
                self._values["size"] = size

        @builtins.property
        def auto_snapshot_policy_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
            By default, this parameter is empty. This indicates that automatic backup is disabled.
            '''
            result = self._values.get("auto_snapshot_policy_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            category: The type of data disk. Valid values:
            cloud: basic disk.
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            Default value: cloud_efficiency.
            '''
            result = self._values.get("category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def encrypted(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            encrypted: Specifies whether to encrypt a data disk. Valid values:
            true: encrypts a data disk.
            false: does not encrypt a data disk.
            Default value: false.
            '''
            result = self._values.get("encrypted")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            '''
            result = self._values.get("performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            size: The size of a data disk. The size is measured in GiB.
            Valid values: 40 to 32768.
            '''
            result = self._values.get("size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "runtime": "runtime",
            "runtime_version": "runtimeVersion",
            "cms_enabled": "cmsEnabled",
            "cpu_policy": "cpuPolicy",
            "labels": "labels",
            "node_name_mode": "nodeNameMode",
            "taints": "taints",
            "unschedulable": "unschedulable",
            "user_data": "userData",
        },
    )
    class KubernetesConfigProperty:
        def __init__(
            self,
            *,
            runtime: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            runtime_version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            cms_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            cpu_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            labels: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.LabelsProperty"]]]] = None,
            node_name_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            taints: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.TaintsProperty"]]]] = None,
            unschedulable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            user_data: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param runtime: 
            :param runtime_version: 
            :param cms_enabled: 
            :param cpu_policy: 
            :param labels: 
            :param node_name_mode: 
            :param taints: 
            :param unschedulable: 
            :param user_data: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "runtime": runtime,
                "runtime_version": runtime_version,
            }
            if cms_enabled is not None:
                self._values["cms_enabled"] = cms_enabled
            if cpu_policy is not None:
                self._values["cpu_policy"] = cpu_policy
            if labels is not None:
                self._values["labels"] = labels
            if node_name_mode is not None:
                self._values["node_name_mode"] = node_name_mode
            if taints is not None:
                self._values["taints"] = taints
            if unschedulable is not None:
                self._values["unschedulable"] = unschedulable
            if user_data is not None:
                self._values["user_data"] = user_data

        @builtins.property
        def runtime(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: runtime: The name of the container runtime.
            '''
            result = self._values.get("runtime")
            assert result is not None, "Required property 'runtime' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def runtime_version(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: runtimeVersion: The version of the container runtime.
            '''
            result = self._values.get("runtime_version")
            assert result is not None, "Required property 'runtime_version' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def cms_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            cmsEnabled: Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
            true: installs the CloudMonitor agent on ECS nodes.
            false: does not install the CloudMonitor agent on ECS nodes.
            Default value: false.
            '''
            result = self._values.get("cms_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cpu_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
            static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
            none: This policy indicates that the default CPU affinity is used.
            Default value: none.
            '''
            result = self._values.get("cpu_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def labels(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.LabelsProperty"]]]]:
            '''
            :Property: labels: You can add labels to nodes that are added to the cluster.
            '''
            result = self._values.get("labels")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.LabelsProperty"]]]], result)

        @builtins.property
        def node_name_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.

            - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
            - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
            '''
            result = self._values.get("node_name_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def taints(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.TaintsProperty"]]]]:
            '''
            :Property: taints: The taints of the nodes.
            '''
            result = self._values.get("taints")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.TaintsProperty"]]]], result)

        @builtins.property
        def unschedulable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: unschedulable: Set new nodes to unschedulable. If true, newly added nodes become unschedulable after they are registered to the cluster. You can enable scheduling for the nodes on the Nodes page in the console.
            '''
            result = self._values.get("unschedulable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def user_data(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: userData: The user-defined data.
            '''
            result = self._values.get("user_data")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "KubernetesConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable": "enable",
            "auto_repair": "autoRepair",
            "upgrade_config": "upgradeConfig",
        },
    )
    class ManagementProperty:
        def __init__(
            self,
            *,
            enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            auto_repair: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            upgrade_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.UpgradeConfigProperty"]] = None,
        ) -> None:
            '''
            :param enable: 
            :param auto_repair: 
            :param upgrade_config: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "enable": enable,
            }
            if auto_repair is not None:
                self._values["auto_repair"] = auto_repair
            if upgrade_config is not None:
                self._values["upgrade_config"] = upgrade_config

        @builtins.property
        def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
            '''
            :Property:

            enable: Specifies whether to enable managed node pools. Valid values:
            true: enables managed node pools.
            false: disables managed node pools. The other parameters in this section take effect only when Enable=true is specified.
            '''
            result = self._values.get("enable")
            assert result is not None, "Required property 'enable' is missing"
            return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

        @builtins.property
        def auto_repair(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            autoRepair: Specifies whether to enable auto repairing. This parameter takes effect only when Enable=true is specified.
            true: enables auto repairing.
            false: disables auto repairing.
            '''
            result = self._values.get("auto_repair")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def upgrade_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.UpgradeConfigProperty"]]:
            '''
            :Property: upgradeConfig: The configurations of auto upgrading. The configurations take effect only when Enable=true is specified.
            '''
            result = self._values.get("upgrade_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.UpgradeConfigProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ManagementProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "resource_group_id": "resourceGroupId"},
    )
    class NodePoolInfoProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param resource_group_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
            }
            if resource_group_id is not None:
                self._values["resource_group_id"] = resource_group_id

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: The name of the node pool.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def resource_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: resourceGroupId: The ID of the resource group to which the node pool belongs.
            '''
            result = self._values.get("resource_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NodePoolInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_types": "instanceTypes",
            "system_disk_size": "systemDiskSize",
            "v_switch_ids": "vSwitchIds",
            "auto_renew": "autoRenew",
            "auto_renew_period": "autoRenewPeriod",
            "compensate_with_on_demand": "compensateWithOnDemand",
            "data_disks": "dataDisks",
            "image_id": "imageId",
            "instance_charge_type": "instanceChargeType",
            "internet_charge_type": "internetChargeType",
            "internet_max_bandwidth_out": "internetMaxBandwidthOut",
            "key_pair": "keyPair",
            "login_password": "loginPassword",
            "multi_az_policy": "multiAzPolicy",
            "on_demand_base_capacity": "onDemandBaseCapacity",
            "on_demand_percentage_above_base_capacity": "onDemandPercentageAboveBaseCapacity",
            "period": "period",
            "period_unit": "periodUnit",
            "platform": "platform",
            "rds_instances": "rdsInstances",
            "scaling_policy": "scalingPolicy",
            "security_group_id": "securityGroupId",
            "spot_instance_pools": "spotInstancePools",
            "spot_instance_remedy": "spotInstanceRemedy",
            "spot_price_limit": "spotPriceLimit",
            "spot_strategy": "spotStrategy",
            "system_disk_category": "systemDiskCategory",
            "system_disk_performance_level": "systemDiskPerformanceLevel",
            "tags": "tags",
        },
    )
    class ScalingGroupProperty:
        def __init__(
            self,
            *,
            instance_types: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
            system_disk_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            v_switch_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
            auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            compensate_with_on_demand: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.DataDisksProperty"]]]] = None,
            image_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            key_pair: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            login_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            multi_az_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            on_demand_base_capacity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            on_demand_percentage_above_base_capacity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            platform: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            rds_instances: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            scaling_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            spot_instance_pools: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            spot_price_limit: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.SpotPriceLimitProperty"]]]] = None,
            spot_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            system_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            system_disk_performance_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            tags: typing.Optional[typing.Sequence["RosClusterNodePool.TagsProperty"]] = None,
        ) -> None:
            '''
            :param instance_types: 
            :param system_disk_size: 
            :param v_switch_ids: 
            :param auto_renew: 
            :param auto_renew_period: 
            :param compensate_with_on_demand: 
            :param data_disks: 
            :param image_id: 
            :param instance_charge_type: 
            :param internet_charge_type: 
            :param internet_max_bandwidth_out: 
            :param key_pair: 
            :param login_password: 
            :param multi_az_policy: 
            :param on_demand_base_capacity: 
            :param on_demand_percentage_above_base_capacity: 
            :param period: 
            :param period_unit: 
            :param platform: 
            :param rds_instances: 
            :param scaling_policy: 
            :param security_group_id: 
            :param spot_instance_pools: 
            :param spot_instance_remedy: 
            :param spot_price_limit: 
            :param spot_strategy: 
            :param system_disk_category: 
            :param system_disk_performance_level: 
            :param tags: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "instance_types": instance_types,
                "system_disk_size": system_disk_size,
                "v_switch_ids": v_switch_ids,
            }
            if auto_renew is not None:
                self._values["auto_renew"] = auto_renew
            if auto_renew_period is not None:
                self._values["auto_renew_period"] = auto_renew_period
            if compensate_with_on_demand is not None:
                self._values["compensate_with_on_demand"] = compensate_with_on_demand
            if data_disks is not None:
                self._values["data_disks"] = data_disks
            if image_id is not None:
                self._values["image_id"] = image_id
            if instance_charge_type is not None:
                self._values["instance_charge_type"] = instance_charge_type
            if internet_charge_type is not None:
                self._values["internet_charge_type"] = internet_charge_type
            if internet_max_bandwidth_out is not None:
                self._values["internet_max_bandwidth_out"] = internet_max_bandwidth_out
            if key_pair is not None:
                self._values["key_pair"] = key_pair
            if login_password is not None:
                self._values["login_password"] = login_password
            if multi_az_policy is not None:
                self._values["multi_az_policy"] = multi_az_policy
            if on_demand_base_capacity is not None:
                self._values["on_demand_base_capacity"] = on_demand_base_capacity
            if on_demand_percentage_above_base_capacity is not None:
                self._values["on_demand_percentage_above_base_capacity"] = on_demand_percentage_above_base_capacity
            if period is not None:
                self._values["period"] = period
            if period_unit is not None:
                self._values["period_unit"] = period_unit
            if platform is not None:
                self._values["platform"] = platform
            if rds_instances is not None:
                self._values["rds_instances"] = rds_instances
            if scaling_policy is not None:
                self._values["scaling_policy"] = scaling_policy
            if security_group_id is not None:
                self._values["security_group_id"] = security_group_id
            if spot_instance_pools is not None:
                self._values["spot_instance_pools"] = spot_instance_pools
            if spot_instance_remedy is not None:
                self._values["spot_instance_remedy"] = spot_instance_remedy
            if spot_price_limit is not None:
                self._values["spot_price_limit"] = spot_price_limit
            if spot_strategy is not None:
                self._values["spot_strategy"] = spot_strategy
            if system_disk_category is not None:
                self._values["system_disk_category"] = system_disk_category
            if system_disk_performance_level is not None:
                self._values["system_disk_performance_level"] = system_disk_performance_level
            if tags is not None:
                self._values["tags"] = tags

        @builtins.property
        def instance_types(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
            '''
            :Property: instanceTypes: The ECS instance types of the nodes.
            '''
            result = self._values.get("instance_types")
            assert result is not None, "Required property 'instance_types' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

        @builtins.property
        def system_disk_size(
            self,
        ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
            '''
            result = self._values.get("system_disk_size")
            assert result is not None, "Required property 'system_disk_size' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
            '''
            :Property: vSwitchIds: The IDs of vSwitches.
            '''
            result = self._values.get("v_switch_ids")
            assert result is not None, "Required property 'v_switch_ids' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

        @builtins.property
        def auto_renew(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            autoRenew: Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
            true: enables auto-renewal.
            false: disables auto-renewal.
            Default value: true.
            '''
            result = self._values.get("auto_renew")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def auto_renew_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            autoRenewPeriod: The auto-renewal period for nodes in the node pool. This parameter takes effect and is required only when instance_charge_type is set to PrePaid and auto_renew is set to true. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
            Default value: 1
            '''
            result = self._values.get("auto_renew_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def compensate_with_on_demand(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect when multi_az_policy is set to COST_OPTIMIZED. Valid values:
            true: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
            false: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
            '''
            result = self._values.get("compensate_with_on_demand")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def data_disks(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.DataDisksProperty"]]]]:
            '''
            :Property: dataDisks: The configurations of data disks.
            '''
            result = self._values.get("data_disks")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.DataDisksProperty"]]]], result)

        @builtins.property
        def image_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: imageId: The ID of a custom image. By default, the image provided by ACK is used.
            '''
            result = self._values.get("image_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def instance_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            instanceChargeType: The billing method of nodes in the node pool. Valid values:
            PrePaid: subscription.
            PostPaid: pay-as-you-go.
            Default value: PostPaid.
            '''
            result = self._values.get("instance_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def internet_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
            '''
            result = self._values.get("internet_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def internet_max_bandwidth_out(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            internetMaxBandwidthOut: The release version of the operating system. Valid values:
            CentOS, AliyunLinux, Windows, WindowsCore.
            Default value: AliyunLinux.
            '''
            result = self._values.get("internet_max_bandwidth_out")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def key_pair(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
            '''
            result = self._values.get("key_pair")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def login_password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
            '''
            result = self._values.get("login_password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def multi_az_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            multiAzPolicy: The scaling policy of ECS instances in a multi-zone scaling group. Valid values:
            PRIORITY: the scaling group is scaled based on the VSwitchIds.N parameter. When ECS instances cannot be created in the zone where the vSwitch with the highest priority is deployed, the system attempts to create ECS instances in the zone where the vSwitch with the next highest priority is deployed.
            COST_OPTIMIZED: ECS instances are created based on the unit price of vCPUs in ascending order. Preemptible instances are preferably created when multiple instance types are specified in the scaling configurations. You can set the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
            BALANCE: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances are not evenly distributed across multiple zones due to insufficient inventory, you can call the RebalanceInstances operation to balance the instance distribution among zones.
            Default value: PRIORITY.
            '''
            result = self._values.get("multi_az_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def on_demand_base_capacity(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: onDemandBaseCapacity: The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. When the number of pay-as-you-go instances is lower than this value, pay-as-you-go instances are preferably created to meet the required number.
            '''
            result = self._values.get("on_demand_base_capacity")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def on_demand_percentage_above_base_capacity(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by on_demand_base_capacity. Valid values: 0 to 100.
            '''
            result = self._values.get("on_demand_percentage_above_base_capacity")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
            Default value: 1.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def period_unit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
            '''
            result = self._values.get("period_unit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def platform(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            platform: The release version of the operating system. Valid values:
            CentOS, AliyunLinux, Windows, WindowsCore.
            Default value: AliyunLinux.
            '''
            result = self._values.get("platform")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_instances(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: rdsInstances: The IDs of the ApsaraDB RDS instances.
            '''
            result = self._values.get("rds_instances")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def scaling_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            scalingPolicy: The scaling mode of the scaling group. Valid values:
            release: the standard mode. ECS instances are created and released based on the resource usage.
            recycle: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances attached with local disks.
            Default value:release.
            '''
            result = self._values.get("scaling_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: securityGroupId: The ID of the security group to which the nodes belong.
            '''
            result = self._values.get("security_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def spot_instance_pools(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: spotInstancePools: The number of available instance types. The scaling group creates preemptible instances of multiple instance types at the lowest cost. Valid values: 1 to 10.
            '''
            result = self._values.get("spot_instance_pools")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def spot_instance_remedy(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
            true: supplements preemptible instances.
            false: does not supplement preemptible instances.
            '''
            result = self._values.get("spot_instance_remedy")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def spot_price_limit(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.SpotPriceLimitProperty"]]]]:
            '''
            :Property: spotPriceLimit: The instance type for preemptible instances and the price limit of the instance type.
            '''
            result = self._values.get("spot_price_limit")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosClusterNodePool.SpotPriceLimitProperty"]]]], result)

        @builtins.property
        def spot_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            spotStrategy: The type of preemptible instance. Valid values:
            NoSpot: non-preemptible instance.
            SpotWithPriceLimit: specifies the highest bid for a preemptible instance.
            SpotAsPriceGo: automatically submits bids based on the up-to-date market price.
            '''
            result = self._values.get("spot_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def system_disk_category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            systemDiskCategory: The type of system disk. Valid values:
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            Default value: cloud_efficiency.
            '''
            result = self._values.get("system_disk_category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def system_disk_performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            '''
            result = self._values.get("system_disk_performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def tags(
            self,
        ) -> typing.Optional[typing.List["RosClusterNodePool.TagsProperty"]]:
            '''
            :Property:

            tags: Adds labels only to ECS instances.
            A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.
            '''
            result = self._values.get("tags")
            return typing.cast(typing.Optional[typing.List["RosClusterNodePool.TagsProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScalingGroupProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty",
        jsii_struct_bases=[],
        name_mapping={"instance_type": "instanceType", "price_limit": "priceLimit"},
    )
    class SpotPriceLimitProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            price_limit: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param instance_type: 
            :param price_limit: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "instance_type": instance_type,
                "price_limit": price_limit,
            }

        @builtins.property
        def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: instanceType: The instance type for preemptible instances.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def price_limit(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: priceLimit: The price limit of a preemptible instance.
            '''
            result = self._values.get("price_limit")
            assert result is not None, "Required property 'price_limit' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SpotPriceLimitProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty",
        jsii_struct_bases=[],
        name_mapping={"effect": "effect", "key": "key", "value": "value"},
    )
    class TaintsProperty:
        def __init__(
            self,
            *,
            effect: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param effect: 
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "effect": effect,
                "key": key,
                "value": value,
            }

        @builtins.property
        def effect(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            effect: The scheduling policy. Valid values:
            NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
            NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
            PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
            Default value: NoSchedule.
            '''
            result = self._values.get("effect")
            assert result is not None, "Required property 'effect' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TaintsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"tee_enable": "teeEnable"},
    )
    class TeeConfigProperty:
        def __init__(
            self,
            *,
            tee_enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param tee_enable: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "tee_enable": tee_enable,
            }

        @builtins.property
        def tee_enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
            '''
            :Property: teeEnable: Specifies whether to enable confidential computing for the cluster.
            '''
            result = self._values.get("tee_enable")
            assert result is not None, "Required property 'tee_enable' is missing"
            return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TeeConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "auto_upgrade": "autoUpgrade",
            "max_unavailable": "maxUnavailable",
            "surge": "surge",
            "surge_percentage": "surgePercentage",
        },
    )
    class UpgradeConfigProperty:
        def __init__(
            self,
            *,
            auto_upgrade: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            max_unavailable: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            surge: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            surge_percentage: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param auto_upgrade: 
            :param max_unavailable: 
            :param surge: 
            :param surge_percentage: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if auto_upgrade is not None:
                self._values["auto_upgrade"] = auto_upgrade
            if max_unavailable is not None:
                self._values["max_unavailable"] = max_unavailable
            if surge is not None:
                self._values["surge"] = surge
            if surge_percentage is not None:
                self._values["surge_percentage"] = surge_percentage

        @builtins.property
        def auto_upgrade(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            autoUpgrade: Specifies whether to enable auto upgrading. Valid values:
            true: enables auto upgrading.
            false: disables auto upgrading.
            '''
            result = self._values.get("auto_upgrade")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def max_unavailable(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            maxUnavailable: The maximum number of nodes that can be in the unschedulable state.
            Valid values: 1 to 1000.
            Default value: 1.
            '''
            result = self._values.get("max_unavailable")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def surge(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: surge: The number of extra nodes that can be added to the node pool during an auto upgrade.
            '''
            result = self._values.get("surge")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def surge_percentage(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: surgePercentage: The ratio of extra nodes to the nodes in the node pool. You must set this parameter or Surge.
            '''
            result = self._values.get("surge_percentage")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UpgradeConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePoolProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "scaling_group": "scalingGroup",
        "auto_scaling": "autoScaling",
        "count": "count",
        "kubernetes_config": "kubernetesConfig",
        "management": "management",
        "node_pool_info": "nodePoolInfo",
        "tee_config": "teeConfig",
    },
)
class RosClusterNodePoolProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        scaling_group: typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.ScalingGroupProperty],
        auto_scaling: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.AutoScalingProperty]] = None,
        count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        kubernetes_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.KubernetesConfigProperty]] = None,
        management: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.ManagementProperty]] = None,
        node_pool_info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.NodePoolInfoProperty]] = None,
        tee_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.TeeConfigProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ClusterNodePool``.

        :param cluster_id: 
        :param scaling_group: 
        :param auto_scaling: 
        :param count: 
        :param kubernetes_config: 
        :param management: 
        :param node_pool_info: 
        :param tee_config: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "scaling_group": scaling_group,
        }
        if auto_scaling is not None:
            self._values["auto_scaling"] = auto_scaling
        if count is not None:
            self._values["count"] = count
        if kubernetes_config is not None:
            self._values["kubernetes_config"] = kubernetes_config
        if management is not None:
            self._values["management"] = management
        if node_pool_info is not None:
            self._values["node_pool_info"] = node_pool_info
        if tee_config is not None:
            self._values["tee_config"] = tee_config

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def scaling_group(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.ScalingGroupProperty]:
        '''
        :Property: scalingGroup: The configurations of the scaling group used by the node pool.
        '''
        result = self._values.get("scaling_group")
        assert result is not None, "Required property 'scaling_group' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.ScalingGroupProperty], result)

    @builtins.property
    def auto_scaling(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.AutoScalingProperty]]:
        '''
        :Property: autoScaling: The configurations of auto scaling.
        '''
        result = self._values.get("auto_scaling")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.AutoScalingProperty]], result)

    @builtins.property
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: count: The number of nodes in the node pool.
        '''
        result = self._values.get("count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def kubernetes_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.KubernetesConfigProperty]]:
        '''
        :Property: kubernetesConfig: The configurations of the ACK cluster.
        '''
        result = self._values.get("kubernetes_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.KubernetesConfigProperty]], result)

    @builtins.property
    def management(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.ManagementProperty]]:
        '''
        :Property: management: The configurations of the managed node pool.
        '''
        result = self._values.get("management")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.ManagementProperty]], result)

    @builtins.property
    def node_pool_info(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.NodePoolInfoProperty]]:
        '''
        :Property: nodePoolInfo: The configurations of the node pool.
        '''
        result = self._values.get("node_pool_info")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.NodePoolInfoProperty]], result)

    @builtins.property
    def tee_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.TeeConfigProperty]]:
        '''
        :Property: teeConfig: The configurations of confidential computing.
        '''
        result = self._values.get("tee_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosClusterNodePool.TeeConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterNodePoolProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKubernetesCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster",
):
    '''A ROS template type:  ``ALIYUN::CS::KubernetesCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosKubernetesClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::KubernetesCluster``.

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
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: APIServerSLBId: The id of API server SLB
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Nodes: The list of cluster nodes.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: Scaling configuration id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingRuleId: Scaling rule id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: WorkerRamRoleName: Worker ram role name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

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
    @jsii.member(jsii_name="masterInstanceTypes")
    def master_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property:

        masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        List size must be 3, Instance Type can be repeated.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "masterInstanceTypes"))

    @master_instance_types.setter
    def master_instance_types(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "masterInstanceTypes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterVSwitchIds")
    def master_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "masterVSwitchIds"))

    @master_v_switch_ids.setter
    def master_v_switch_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "masterVSwitchIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VPC ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerInstanceTypes")
    def worker_instance_types(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "workerInstanceTypes"))

    @worker_instance_types.setter
    def worker_instance_types(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "workerInstanceTypes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerVSwitchIds")
    def worker_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: workerVSwitchIds: The virtual switch ID of the worker node.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "workerVSwitchIds"))

    @worker_v_switch_ids.setter
    def worker_v_switch_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "workerVSwitchIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]]:
        '''
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]], jsii.get(self, "addons"))

    @addons.setter
    def addons(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]],
    ) -> None:
        jsii.set(self, "addons", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cisEnabled")
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "cisEnabled"))

    @cis_enabled.setter
    def cis_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cisEnabled", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cloudMonitorFlags")
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "cloudMonitorFlags"))

    @cloud_monitor_flags.setter
    def cloud_monitor_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cloudMonitorFlags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="containerCidr")
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "containerCidr"))

    @container_cidr.setter
    def container_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "containerCidr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cpuPolicy")
    def cpu_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cpuPolicy"))

    @cpu_policy.setter
    def cpu_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cpuPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionProtection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="disableRollback")
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "disableRollback"))

    @disable_rollback.setter
    def disable_rollback(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "disableRollback", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "endpointPublicAccess"))

    @endpoint_public_access.setter
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="formatDisk")
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        formatDisk: Specifies whether to mount a data disk to nodes that are created
        on existing Elastic Compute Service (ECS) instances. Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "formatDisk"))

    @format_disk.setter
    def format_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "formatDisk", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isEnterpriseSecurityGroup")
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "isEnterpriseSecurityGroup"))

    @is_enterprise_security_group.setter
    def is_enterprise_security_group(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isEnterpriseSecurityGroup", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keepInstanceName")
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "keepInstanceName"))

    @keep_instance_name.setter
    def keep_instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "keepInstanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keyPair")
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "keyPair"))

    @key_pair.setter
    def key_pair(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "keyPair", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="kubernetesVersion")
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "kubernetesVersion"))

    @kubernetes_version.setter
    def kubernetes_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "kubernetesVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loadBalancerSpec")
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loadBalancerSpec"))

    @load_balancer_spec.setter
    def load_balancer_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loadBalancerSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loginPassword")
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loginPassword"))

    @login_password.setter
    def login_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loginPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterCount")
    def master_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "masterCount"))

    @master_count.setter
    def master_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterDataDisk")
    def master_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterDataDisk: Whether the master node mounts data disks can be selected as:
        true: mount the data disk
        false: no data disk is mounted, default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "masterDataDisk"))

    @master_data_disk.setter
    def master_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterDataDisk", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterDataDisks")
    def master_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]]:
        '''
        :Property: masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]], jsii.get(self, "masterDataDisks"))

    @master_data_disks.setter
    def master_data_disks(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]],
    ) -> None:
        jsii.set(self, "masterDataDisks", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterSystemDiskCategory")
    def master_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterSystemDiskCategory: Master disk system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        cloud_essd: ESSD cloud diskDefault to cloud_ssd.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterSystemDiskCategory"))

    @master_system_disk_category.setter
    def master_system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterSystemDiskCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterSystemDiskPerformanceLevel")
    def master_system_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.
        Valid values: PL0|PL1|PL2|PL3
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterSystemDiskPerformanceLevel"))

    @master_system_disk_performance_level.setter
    def master_system_disk_performance_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterSystemDiskPerformanceLevel", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterSystemDiskSize")
    def master_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterSystemDiskSize: Master disk system disk size in GiB.
        Default to 120.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "masterSystemDiskSize"))

    @master_system_disk_size.setter
    def master_system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterSystemDiskSize", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterSystemDiskSnapshotPolicyId")
    def master_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterSystemDiskSnapshotPolicyId"))

    @master_system_disk_snapshot_policy_id.setter
    def master_system_disk_snapshot_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterSystemDiskSnapshotPolicyId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="nodeCidrMask")
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "nodeCidrMask"))

    @node_cidr_mask.setter
    def node_cidr_mask(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "nodeCidrMask", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="nodePortRange")
    def node_port_range(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nodePortRange: Node service port. The value range is [30000, 65535].
        Default to 30000-65535.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "nodePortRange"))

    @node_port_range.setter
    def node_port_range(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "nodePortRange", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="numOfNodes")
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "numOfNodes"))

    @num_of_nodes.setter
    def num_of_nodes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "numOfNodes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="osType")
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        osType: The type of operating system. Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "osType"))

    @os_type.setter
    def os_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "osType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "periodUnit", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="platform")
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        platform: The release version of the operating system. Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "platform"))

    @platform.setter
    def platform(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "platform", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="podVswitchIds")
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "podVswitchIds"))

    @pod_vswitch_ids.setter
    def pod_vswitch_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "podVswitchIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="proxyMode")
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "proxyMode"))

    @proxy_mode.setter
    def proxy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "proxyMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="runtime")
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.RuntimeProperty"]]:
        '''
        :Property: runtime: The container runtime of the cluster. The default runtime is Docker.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.RuntimeProperty"]], jsii.get(self, "runtime"))

    @runtime.setter
    def runtime(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.RuntimeProperty"]],
    ) -> None:
        jsii.set(self, "runtime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceCidr"))

    @service_cidr.setter
    def service_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "serviceCidr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="snatEntry")
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "snatEntry"))

    @snat_entry.setter
    def snat_entry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "snatEntry", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="socEnabled")
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        socEnabled: Valid values:
        true: enables reinforcement based on classified protection.
        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "socEnabled"))

    @soc_enabled.setter
    def soc_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "socEnabled", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sshFlags")
    def ssh_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sshFlags: Whether to enable public network SSH login:
        true: open
        false: not open
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "sshFlags"))

    @ssh_flags.setter
    def ssh_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sshFlags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosKubernetesCluster.TagsProperty"]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        return typing.cast(typing.Optional[typing.List["RosKubernetesCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosKubernetesCluster.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="taint")
    def taint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], jsii.get(self, "taint"))

    @taint.setter
    def taint(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]],
    ) -> None:
        jsii.set(self, "taint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "timeoutMins"))

    @timeout_mins.setter
    def timeout_mins(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "timeoutMins", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="timeZone")
    def time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeZone: The time zone of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "timeZone"))

    @time_zone.setter
    def time_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "timeZone", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userCa")
    def user_ca(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userCa: The CA of cluster
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "userCa"))

    @user_ca.setter
    def user_ca(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "userCa", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userData")
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "userData"))

    @user_data.setter
    def user_data(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "userData", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerDataDisk")
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "workerDataDisk"))

    @worker_data_disk.setter
    def worker_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerDataDisk", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerDataDisks")
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]]:
        '''
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]], jsii.get(self, "workerDataDisks"))

    @worker_data_disks.setter
    def worker_data_disks(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]],
    ) -> None:
        jsii.set(self, "workerDataDisks", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerSystemDiskCategory")
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "workerSystemDiskCategory"))

    @worker_system_disk_category.setter
    def worker_system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerSystemDiskCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerSystemDiskSize")
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "workerSystemDiskSize"))

    @worker_system_disk_size.setter
    def worker_system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerSystemDiskSize", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerSystemDiskSnapshotPolicyId")
    def worker_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "workerSystemDiskSnapshotPolicyId"))

    @worker_system_disk_snapshot_policy_id.setter
    def worker_system_disk_snapshot_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerSystemDiskSnapshotPolicyId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "config": "config", "disabled": "disabled"},
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            config: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            disabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param config: 
            :param disabled: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if disabled is not None:
                self._values["disabled"] = disabled

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: Addon plugin name
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: config: When the value is empty, no configuration is required.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def disabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: disabled: Specifies whether to disable default installation.
            '''
            result = self._values.get("disabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size"},
    )
    class MasterDataDisksProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param category: 
            :param size: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "category": category,
                "size": size,
            }

        @builtins.property
        def category(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            category: Data disk type. Value includes:
            cloud: ordinary cloud disk
            cloud_efficiency: efficient cloud disk
            cloud_ssd: SSD cloud disk
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: size: Data disk size in GiB.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MasterDataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.RuntimeProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "version": "version"},
    )
    class RuntimeProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param version: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
            }
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: The name of the container runtime. Supports containerd, docker or sandboxed-container.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: version: The version of the container runtime.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuntimeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: Tag key.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: Tag value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size"},
    )
    class WorkerDataDisksProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param category: 
            :param size: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "category": category,
                "size": size,
            }

        @builtins.property
        def category(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            category: Data disk type. Value includes:
            cloud: ordinary cloud disk
            cloud_efficiency: efficient cloud disk
            cloud_ssd: SSD cloud disk
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: size: Data disk size in GiB.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WorkerDataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "master_instance_types": "masterInstanceTypes",
        "master_v_switch_ids": "masterVSwitchIds",
        "name": "name",
        "vpc_id": "vpcId",
        "worker_instance_types": "workerInstanceTypes",
        "worker_v_switch_ids": "workerVSwitchIds",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cis_enabled": "cisEnabled",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "container_cidr": "containerCidr",
        "cpu_policy": "cpuPolicy",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "format_disk": "formatDisk",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "keep_instance_name": "keepInstanceName",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "load_balancer_spec": "loadBalancerSpec",
        "login_password": "loginPassword",
        "master_count": "masterCount",
        "master_data_disk": "masterDataDisk",
        "master_data_disks": "masterDataDisks",
        "master_system_disk_category": "masterSystemDiskCategory",
        "master_system_disk_performance_level": "masterSystemDiskPerformanceLevel",
        "master_system_disk_size": "masterSystemDiskSize",
        "master_system_disk_snapshot_policy_id": "masterSystemDiskSnapshotPolicyId",
        "node_cidr_mask": "nodeCidrMask",
        "node_port_range": "nodePortRange",
        "num_of_nodes": "numOfNodes",
        "os_type": "osType",
        "period": "period",
        "period_unit": "periodUnit",
        "platform": "platform",
        "pod_vswitch_ids": "podVswitchIds",
        "proxy_mode": "proxyMode",
        "resource_group_id": "resourceGroupId",
        "runtime": "runtime",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "soc_enabled": "socEnabled",
        "ssh_flags": "sshFlags",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "time_zone": "timeZone",
        "user_ca": "userCa",
        "user_data": "userData",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
        "worker_system_disk_snapshot_policy_id": "workerSystemDiskSnapshotPolicyId",
    },
)
class RosKubernetesClusterProps:
    def __init__(
        self,
        *,
        master_instance_types: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        master_v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        worker_instance_types: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        worker_v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.AddonsProperty]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cis_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cpu_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        format_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        keep_instance_name: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        master_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        master_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.MasterDataDisksProperty]]]] = None,
        master_system_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_system_disk_performance_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_system_disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        master_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        node_port_range: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        num_of_nodes: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        platform: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pod_vswitch_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        runtime: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.RuntimeProperty]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        soc_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ssh_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosKubernetesCluster.TagsProperty]] = None,
        taint: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        time_zone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_ca: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.WorkerDataDisksProperty]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        worker_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::KubernetesCluster``.

        :param master_instance_types: 
        :param master_v_switch_ids: 
        :param name: 
        :param vpc_id: 
        :param worker_instance_types: 
        :param worker_v_switch_ids: 
        :param addons: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param charge_type: 
        :param cis_enabled: 
        :param cloud_monitor_flags: 
        :param container_cidr: 
        :param cpu_policy: 
        :param deletion_protection: 
        :param disable_rollback: 
        :param endpoint_public_access: 
        :param format_disk: 
        :param is_enterprise_security_group: 
        :param keep_instance_name: 
        :param key_pair: 
        :param kubernetes_version: 
        :param load_balancer_spec: 
        :param login_password: 
        :param master_count: 
        :param master_data_disk: 
        :param master_data_disks: 
        :param master_system_disk_category: 
        :param master_system_disk_performance_level: 
        :param master_system_disk_size: 
        :param master_system_disk_snapshot_policy_id: 
        :param node_cidr_mask: 
        :param node_port_range: 
        :param num_of_nodes: 
        :param os_type: 
        :param period: 
        :param period_unit: 
        :param platform: 
        :param pod_vswitch_ids: 
        :param proxy_mode: 
        :param resource_group_id: 
        :param runtime: 
        :param security_group_id: 
        :param service_cidr: 
        :param snat_entry: 
        :param soc_enabled: 
        :param ssh_flags: 
        :param tags: 
        :param taint: 
        :param timeout_mins: 
        :param time_zone: 
        :param user_ca: 
        :param user_data: 
        :param worker_data_disk: 
        :param worker_data_disks: 
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        :param worker_system_disk_snapshot_policy_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "master_instance_types": master_instance_types,
            "master_v_switch_ids": master_v_switch_ids,
            "name": name,
            "vpc_id": vpc_id,
            "worker_instance_types": worker_instance_types,
            "worker_v_switch_ids": worker_v_switch_ids,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cis_enabled is not None:
            self._values["cis_enabled"] = cis_enabled
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if cpu_policy is not None:
            self._values["cpu_policy"] = cpu_policy
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if format_disk is not None:
            self._values["format_disk"] = format_disk
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if keep_instance_name is not None:
            self._values["keep_instance_name"] = keep_instance_name
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if login_password is not None:
            self._values["login_password"] = login_password
        if master_count is not None:
            self._values["master_count"] = master_count
        if master_data_disk is not None:
            self._values["master_data_disk"] = master_data_disk
        if master_data_disks is not None:
            self._values["master_data_disks"] = master_data_disks
        if master_system_disk_category is not None:
            self._values["master_system_disk_category"] = master_system_disk_category
        if master_system_disk_performance_level is not None:
            self._values["master_system_disk_performance_level"] = master_system_disk_performance_level
        if master_system_disk_size is not None:
            self._values["master_system_disk_size"] = master_system_disk_size
        if master_system_disk_snapshot_policy_id is not None:
            self._values["master_system_disk_snapshot_policy_id"] = master_system_disk_snapshot_policy_id
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if node_port_range is not None:
            self._values["node_port_range"] = node_port_range
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if os_type is not None:
            self._values["os_type"] = os_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if platform is not None:
            self._values["platform"] = platform
        if pod_vswitch_ids is not None:
            self._values["pod_vswitch_ids"] = pod_vswitch_ids
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if runtime is not None:
            self._values["runtime"] = runtime
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if soc_enabled is not None:
            self._values["soc_enabled"] = soc_enabled
        if ssh_flags is not None:
            self._values["ssh_flags"] = ssh_flags
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if time_zone is not None:
            self._values["time_zone"] = time_zone
        if user_ca is not None:
            self._values["user_ca"] = user_ca
        if user_data is not None:
            self._values["user_data"] = user_data
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size
        if worker_system_disk_snapshot_policy_id is not None:
            self._values["worker_system_disk_snapshot_policy_id"] = worker_system_disk_snapshot_policy_id

    @builtins.property
    def master_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property:

        masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        List size must be 3, Instance Type can be repeated.
        '''
        result = self._values.get("master_instance_types")
        assert result is not None, "Required property 'master_instance_types' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def master_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        '''
        result = self._values.get("master_v_switch_ids")
        assert result is not None, "Required property 'master_v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VPC ID.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        assert result is not None, "Required property 'worker_instance_types' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def worker_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: workerVSwitchIds: The virtual switch ID of the worker node.
        '''
        result = self._values.get("worker_v_switch_ids")
        assert result is not None, "Required property 'worker_v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.AddonsProperty]]]]:
        '''
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.AddonsProperty]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        result = self._values.get("cis_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cpu_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
        '''
        result = self._values.get("cpu_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        formatDisk: Specifies whether to mount a data disk to nodes that are created
        on existing Elastic Compute Service (ECS) instances. Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        result = self._values.get("format_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        result = self._values.get("keep_instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
        '''
        result = self._values.get("master_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterDataDisk: Whether the master node mounts data disks can be selected as:
        true: mount the data disk
        false: no data disk is mounted, default is false
        '''
        result = self._values.get("master_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.MasterDataDisksProperty]]]]:
        '''
        :Property: masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
        '''
        result = self._values.get("master_data_disks")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.MasterDataDisksProperty]]]], result)

    @builtins.property
    def master_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterSystemDiskCategory: Master disk system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        cloud_essd: ESSD cloud diskDefault to cloud_ssd.
        '''
        result = self._values.get("master_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_system_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.
        Valid values: PL0|PL1|PL2|PL3
        '''
        result = self._values.get("master_system_disk_performance_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        masterSystemDiskSize: Master disk system disk size in GiB.
        Default to 120.
        '''
        result = self._values.get("master_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
        '''
        result = self._values.get("master_system_disk_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def node_port_range(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nodePortRange: Node service port. The value range is [30000, 65535].
        Default to 30000-65535.
        '''
        result = self._values.get("node_port_range")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        '''
        result = self._values.get("num_of_nodes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        osType: The type of operating system. Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        platform: The release version of the operating system. Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        result = self._values.get("pod_vswitch_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.RuntimeProperty]]:
        '''
        :Property: runtime: The container runtime of the cluster. The default runtime is Docker.
        '''
        result = self._values.get("runtime")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.RuntimeProperty]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        socEnabled: Valid values:
        true: enables reinforcement based on classified protection.
        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        result = self._values.get("soc_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssh_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sshFlags: Whether to enable public network SSH login:
        true: open
        false: not open
        '''
        result = self._values.get("ssh_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosKubernetesCluster.TagsProperty]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosKubernetesCluster.TagsProperty]], result)

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        result = self._values.get("taint")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeZone: The time zone of the cluster.
        '''
        result = self._values.get("time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_ca(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userCa: The CA of cluster
        '''
        result = self._values.get("user_ca")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.WorkerDataDisksProperty]]]]:
        '''
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        '''
        result = self._values.get("worker_data_disks")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.WorkerDataDisksProperty]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
        '''
        result = self._values.get("worker_system_disk_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosManagedEdgeKubernetesCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster",
):
    '''A ROS template type:  ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosManagedEdgeKubernetesClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

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
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: APIServerSLBId: The id of API server SLB
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Nodes: The list of cluster nodes.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: Scaling configuration id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingRuleId: Scaling rule id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: WorkerRamRoleName: Worker ram role name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

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
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="numOfNodes")
    def num_of_nodes(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: numOfNodes: Number of worker nodes. The range is [0,300]
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "numOfNodes"))

    @num_of_nodes.setter
    def num_of_nodes(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "numOfNodes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]]:
        '''
        :Property: addons: The add-ons to be installed for the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]], jsii.get(self, "addons"))

    @addons.setter
    def addons(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]],
    ) -> None:
        jsii.set(self, "addons", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cloudMonitorFlags")
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "cloudMonitorFlags"))

    @cloud_monitor_flags.setter
    def cloud_monitor_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cloudMonitorFlags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterSpec")
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        clusterSpec: The edge managed cluster spec. Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "clusterSpec"))

    @cluster_spec.setter
    def cluster_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "clusterSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="containerCidr")
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "containerCidr"))

    @container_cidr.setter
    def container_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "containerCidr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionProtection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="disableRollback")
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "disableRollback"))

    @disable_rollback.setter
    def disable_rollback(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "disableRollback", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "endpointPublicAccess"))

    @endpoint_public_access.setter
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isEnterpriseSecurityGroup")
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "isEnterpriseSecurityGroup"))

    @is_enterprise_security_group.setter
    def is_enterprise_security_group(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isEnterpriseSecurityGroup", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keyPair")
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "keyPair"))

    @key_pair.setter
    def key_pair(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "keyPair", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loginPassword")
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loginPassword"))

    @login_password.setter
    def login_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loginPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="nodeCidrMask")
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "nodeCidrMask"))

    @node_cidr_mask.setter
    def node_cidr_mask(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "nodeCidrMask", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "periodUnit", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="profile")
    def profile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: profile: Edge cluster ID. The default value is Edge.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "profile"))

    @profile.setter
    def profile(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "profile", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="proxyMode")
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "proxyMode"))

    @proxy_mode.setter
    def proxy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "proxyMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceCidr"))

    @service_cidr.setter
    def service_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "serviceCidr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="snatEntry")
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "snatEntry"))

    @snat_entry.setter
    def snat_entry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "snatEntry", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosManagedEdgeKubernetesCluster.TagsProperty"]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        return typing.cast(typing.Optional[typing.List["RosManagedEdgeKubernetesCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosManagedEdgeKubernetesCluster.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "timeoutMins"))

    @timeout_mins.setter
    def timeout_mins(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "timeoutMins", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchIds"))

    @v_switch_ids.setter
    def v_switch_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerDataDisk")
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "workerDataDisk"))

    @worker_data_disk.setter
    def worker_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerDataDisk", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerDataDiskCategory")
    def worker_data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: workerDataDiskCategory: Data disk type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "workerDataDiskCategory"))

    @worker_data_disk_category.setter
    def worker_data_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerDataDiskCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerDataDiskSize")
    def worker_data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: workerDataDiskSize: Data disk size in GiB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "workerDataDiskSize"))

    @worker_data_disk_size.setter
    def worker_data_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerDataDiskSize", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerInstanceTypes")
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "workerInstanceTypes"))

    @worker_instance_types.setter
    def worker_instance_types(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "workerInstanceTypes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerSystemDiskCategory")
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type.
        Default to cloud_efficiency.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "workerSystemDiskCategory"))

    @worker_system_disk_category.setter
    def worker_system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerSystemDiskCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerSystemDiskSize")
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "workerSystemDiskSize"))

    @worker_system_disk_size.setter
    def worker_system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerSystemDiskSize", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "config": "config", "disabled": "disabled"},
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            config: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            disabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param config: 
            :param disabled: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if disabled is not None:
                self._values["disabled"] = disabled

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: The name of the add-on.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: config: When the value is empty, no configuration is required.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def disabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: disabled: Specifies whether to disable default installation.
            '''
            result = self._values.get("disabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: Tag key.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: Tag value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "num_of_nodes": "numOfNodes",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "cluster_spec": "clusterSpec",
        "container_cidr": "containerCidr",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "key_pair": "keyPair",
        "login_password": "loginPassword",
        "node_cidr_mask": "nodeCidrMask",
        "period": "period",
        "period_unit": "periodUnit",
        "profile": "profile",
        "proxy_mode": "proxyMode",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "tags": "tags",
        "timeout_mins": "timeoutMins",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disk_category": "workerDataDiskCategory",
        "worker_data_disk_size": "workerDataDiskSize",
        "worker_instance_types": "workerInstanceTypes",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
    },
)
class RosManagedEdgeKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        num_of_nodes: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosManagedEdgeKubernetesCluster.AddonsProperty]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        profile: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosManagedEdgeKubernetesCluster.TagsProperty]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_data_disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        worker_instance_types: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

        :param name: 
        :param num_of_nodes: 
        :param addons: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param charge_type: 
        :param cloud_monitor_flags: 
        :param cluster_spec: 
        :param container_cidr: 
        :param deletion_protection: 
        :param disable_rollback: 
        :param endpoint_public_access: 
        :param is_enterprise_security_group: 
        :param key_pair: 
        :param login_password: 
        :param node_cidr_mask: 
        :param period: 
        :param period_unit: 
        :param profile: 
        :param proxy_mode: 
        :param service_cidr: 
        :param snat_entry: 
        :param tags: 
        :param timeout_mins: 
        :param vpc_id: 
        :param v_switch_ids: 
        :param worker_data_disk: 
        :param worker_data_disk_category: 
        :param worker_data_disk_size: 
        :param worker_instance_types: 
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "num_of_nodes": num_of_nodes,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if login_password is not None:
            self._values["login_password"] = login_password
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if profile is not None:
            self._values["profile"] = profile
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if tags is not None:
            self._values["tags"] = tags
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disk_category is not None:
            self._values["worker_data_disk_category"] = worker_data_disk_category
        if worker_data_disk_size is not None:
            self._values["worker_data_disk_size"] = worker_data_disk_size
        if worker_instance_types is not None:
            self._values["worker_instance_types"] = worker_instance_types
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def num_of_nodes(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: numOfNodes: Number of worker nodes. The range is [0,300]
        '''
        result = self._values.get("num_of_nodes")
        assert result is not None, "Required property 'num_of_nodes' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosManagedEdgeKubernetesCluster.AddonsProperty]]]]:
        '''
        :Property: addons: The add-ons to be installed for the cluster.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosManagedEdgeKubernetesCluster.AddonsProperty]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        clusterSpec: The edge managed cluster spec. Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def profile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: profile: Edge cluster ID. The default value is Edge.
        '''
        result = self._values.get("profile")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosManagedEdgeKubernetesCluster.TagsProperty]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosManagedEdgeKubernetesCluster.TagsProperty]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        '''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: workerDataDiskCategory: Data disk type.
        '''
        result = self._values.get("worker_data_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: workerDataDiskSize: Data disk size in GiB.
        '''
        result = self._values.get("worker_data_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type.
        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosManagedEdgeKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosManagedKubernetesCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster",
):
    '''A ROS template type:  ``ALIYUN::CS::ManagedKubernetesCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosManagedKubernetesClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ManagedKubernetesCluster``.

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
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: APIServerSLBId: The id of API server SLB
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Nodes: The list of cluster nodes.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: Scaling configuration id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingRuleId: Scaling rule id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: WorkerRamRoleName: Worker ram role name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

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
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VPC ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "vSwitchIds"))

    @v_switch_ids.setter
    def v_switch_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerInstanceTypes")
    def worker_instance_types(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "workerInstanceTypes"))

    @worker_instance_types.setter
    def worker_instance_types(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "workerInstanceTypes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]]:
        '''
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]], jsii.get(self, "addons"))

    @addons.setter
    def addons(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]],
    ) -> None:
        jsii.set(self, "addons", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cisEnabled")
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "cisEnabled"))

    @cis_enabled.setter
    def cis_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cisEnabled", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cloudMonitorFlags")
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "cloudMonitorFlags"))

    @cloud_monitor_flags.setter
    def cloud_monitor_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cloudMonitorFlags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterSpec")
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        clusterSpec: The managed cluster spec. Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "clusterSpec"))

    @cluster_spec.setter
    def cluster_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "clusterSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="containerCidr")
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "containerCidr"))

    @container_cidr.setter
    def container_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "containerCidr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionProtection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="disableRollback")
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "disableRollback"))

    @disable_rollback.setter
    def disable_rollback(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "disableRollback", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="encryptionProviderKey")
    def encryption_provider_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "encryptionProviderKey"))

    @encryption_provider_key.setter
    def encryption_provider_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "encryptionProviderKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "endpointPublicAccess"))

    @endpoint_public_access.setter
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="formatDisk")
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        formatDisk: Specifies whether to mount a data disk to nodes that are created
        on existing Elastic Compute Service (ECS) instances. Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "formatDisk"))

    @format_disk.setter
    def format_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "formatDisk", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isEnterpriseSecurityGroup")
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "isEnterpriseSecurityGroup"))

    @is_enterprise_security_group.setter
    def is_enterprise_security_group(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isEnterpriseSecurityGroup", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keepInstanceName")
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "keepInstanceName"))

    @keep_instance_name.setter
    def keep_instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "keepInstanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keyPair")
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "keyPair"))

    @key_pair.setter
    def key_pair(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "keyPair", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="kubernetesVersion")
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "kubernetesVersion"))

    @kubernetes_version.setter
    def kubernetes_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "kubernetesVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loadBalancerSpec")
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loadBalancerSpec"))

    @load_balancer_spec.setter
    def load_balancer_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loadBalancerSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loginPassword")
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loginPassword"))

    @login_password.setter
    def login_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loginPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="nodeCidrMask")
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "nodeCidrMask"))

    @node_cidr_mask.setter
    def node_cidr_mask(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "nodeCidrMask", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="numOfNodes")
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "numOfNodes"))

    @num_of_nodes.setter
    def num_of_nodes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "numOfNodes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="osType")
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        osType: The type of operating system. Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "osType"))

    @os_type.setter
    def os_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "osType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "periodUnit", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="platform")
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        platform: The release version of the operating system. Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "platform"))

    @platform.setter
    def platform(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "platform", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="podVswitchIds")
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "podVswitchIds"))

    @pod_vswitch_ids.setter
    def pod_vswitch_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "podVswitchIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="proxyMode")
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "proxyMode"))

    @proxy_mode.setter
    def proxy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "proxyMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="runtime")
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]]:
        '''
        :Property: runtime: The container runtime of the cluster. The default runtime is Docker.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]], jsii.get(self, "runtime"))

    @runtime.setter
    def runtime(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]],
    ) -> None:
        jsii.set(self, "runtime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceCidr"))

    @service_cidr.setter
    def service_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "serviceCidr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="snatEntry")
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "snatEntry"))

    @snat_entry.setter
    def snat_entry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "snatEntry", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="socEnabled")
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        socEnabled: Valid values:
        true: enables reinforcement based on classified protection.
        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "socEnabled"))

    @soc_enabled.setter
    def soc_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "socEnabled", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosManagedKubernetesCluster.TagsProperty"]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        return typing.cast(typing.Optional[typing.List["RosManagedKubernetesCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosManagedKubernetesCluster.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="taint")
    def taint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], jsii.get(self, "taint"))

    @taint.setter
    def taint(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]],
    ) -> None:
        jsii.set(self, "taint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "timeoutMins"))

    @timeout_mins.setter
    def timeout_mins(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "timeoutMins", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userData")
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "userData"))

    @user_data.setter
    def user_data(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "userData", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerDataDisk")
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "workerDataDisk"))

    @worker_data_disk.setter
    def worker_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerDataDisk", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerDataDisks")
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]]:
        '''
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]], jsii.get(self, "workerDataDisks"))

    @worker_data_disks.setter
    def worker_data_disks(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]],
    ) -> None:
        jsii.set(self, "workerDataDisks", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerSystemDiskCategory")
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "workerSystemDiskCategory"))

    @worker_system_disk_category.setter
    def worker_system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerSystemDiskCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="workerSystemDiskSize")
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "workerSystemDiskSize"))

    @worker_system_disk_size.setter
    def worker_system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerSystemDiskSize", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "config": "config",
            "disabled": "disabled",
            "version": "version",
        },
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            config: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            disabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param config: 
            :param disabled: 
            :param version: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if disabled is not None:
                self._values["disabled"] = disabled
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: Addon plugin name
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: config: When the value is empty, no configuration is required.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def disabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: disabled: Specifies whether to disable default installation.
            '''
            result = self._values.get("disabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: version: When the value is empty, the latest version is selected by default.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.RuntimeProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "version": "version"},
    )
    class RuntimeProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param version: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
            }
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: The name of the container runtime. Supports containerd, Docker or Sandboxed-Container.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: version: The version of the container runtime.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuntimeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: Tag key.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: Tag value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.WorkerDataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size"},
    )
    class WorkerDataDisksProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param category: 
            :param size: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "category": category,
                "size": size,
            }

        @builtins.property
        def category(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            category: Data disk type. Value includes:
            cloud: ordinary cloud disk
            cloud_efficiency: efficient cloud disk
            cloud_ssd: SSD cloud disk
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: size: Data disk size in GiB.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WorkerDataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "worker_instance_types": "workerInstanceTypes",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cis_enabled": "cisEnabled",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "cluster_spec": "clusterSpec",
        "container_cidr": "containerCidr",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "encryption_provider_key": "encryptionProviderKey",
        "endpoint_public_access": "endpointPublicAccess",
        "format_disk": "formatDisk",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "keep_instance_name": "keepInstanceName",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "load_balancer_spec": "loadBalancerSpec",
        "login_password": "loginPassword",
        "node_cidr_mask": "nodeCidrMask",
        "num_of_nodes": "numOfNodes",
        "os_type": "osType",
        "period": "period",
        "period_unit": "periodUnit",
        "platform": "platform",
        "pod_vswitch_ids": "podVswitchIds",
        "proxy_mode": "proxyMode",
        "runtime": "runtime",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "soc_enabled": "socEnabled",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "user_data": "userData",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
    },
)
class RosManagedKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        worker_instance_types: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.AddonsProperty]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cis_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        encryption_provider_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        format_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        keep_instance_name: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        num_of_nodes: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        platform: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pod_vswitch_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        runtime: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.RuntimeProperty]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        soc_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosManagedKubernetesCluster.TagsProperty]] = None,
        taint: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.WorkerDataDisksProperty]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ManagedKubernetesCluster``.

        :param name: 
        :param vpc_id: 
        :param v_switch_ids: 
        :param worker_instance_types: 
        :param addons: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param charge_type: 
        :param cis_enabled: 
        :param cloud_monitor_flags: 
        :param cluster_spec: 
        :param container_cidr: 
        :param deletion_protection: 
        :param disable_rollback: 
        :param encryption_provider_key: 
        :param endpoint_public_access: 
        :param format_disk: 
        :param is_enterprise_security_group: 
        :param keep_instance_name: 
        :param key_pair: 
        :param kubernetes_version: 
        :param load_balancer_spec: 
        :param login_password: 
        :param node_cidr_mask: 
        :param num_of_nodes: 
        :param os_type: 
        :param period: 
        :param period_unit: 
        :param platform: 
        :param pod_vswitch_ids: 
        :param proxy_mode: 
        :param runtime: 
        :param security_group_id: 
        :param service_cidr: 
        :param snat_entry: 
        :param soc_enabled: 
        :param tags: 
        :param taint: 
        :param timeout_mins: 
        :param user_data: 
        :param worker_data_disk: 
        :param worker_data_disks: 
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "vpc_id": vpc_id,
            "v_switch_ids": v_switch_ids,
            "worker_instance_types": worker_instance_types,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cis_enabled is not None:
            self._values["cis_enabled"] = cis_enabled
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if encryption_provider_key is not None:
            self._values["encryption_provider_key"] = encryption_provider_key
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if format_disk is not None:
            self._values["format_disk"] = format_disk
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if keep_instance_name is not None:
            self._values["keep_instance_name"] = keep_instance_name
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if login_password is not None:
            self._values["login_password"] = login_password
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if os_type is not None:
            self._values["os_type"] = os_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if platform is not None:
            self._values["platform"] = platform
        if pod_vswitch_ids is not None:
            self._values["pod_vswitch_ids"] = pod_vswitch_ids
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if runtime is not None:
            self._values["runtime"] = runtime
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if soc_enabled is not None:
            self._values["soc_enabled"] = soc_enabled
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if user_data is not None:
            self._values["user_data"] = user_data
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VPC ID.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        '''
        result = self._values.get("v_switch_ids")
        assert result is not None, "Required property 'v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        assert result is not None, "Required property 'worker_instance_types' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.AddonsProperty]]]]:
        '''
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.AddonsProperty]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        result = self._values.get("cis_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        clusterSpec: The managed cluster spec. Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_provider_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
        '''
        result = self._values.get("encryption_provider_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        formatDisk: Specifies whether to mount a data disk to nodes that are created
        on existing Elastic Compute Service (ECS) instances. Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        result = self._values.get("format_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        result = self._values.get("keep_instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        '''
        result = self._values.get("num_of_nodes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        osType: The type of operating system. Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        platform: The release version of the operating system. Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        result = self._values.get("pod_vswitch_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.RuntimeProperty]]:
        '''
        :Property: runtime: The container runtime of the cluster. The default runtime is Docker.
        '''
        result = self._values.get("runtime")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.RuntimeProperty]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        socEnabled: Valid values:
        true: enables reinforcement based on classified protection.
        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        result = self._values.get("soc_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosManagedKubernetesCluster.TagsProperty]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosManagedKubernetesCluster.TagsProperty]], result)

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        result = self._values.get("taint")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.WorkerDataDisksProperty]]]]:
        '''
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        '''
        result = self._values.get("worker_data_disks")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.WorkerDataDisksProperty]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosManagedKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosServerlessKubernetesCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosServerlessKubernetesCluster",
):
    '''A ROS template type:  ``ALIYUN::CS::ServerlessKubernetesCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosServerlessKubernetesClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ServerlessKubernetesCluster``.

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
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: APIServerSLBId: The id of API server SLB
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Nodes: The list of cluster nodes.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: Scaling configuration id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScalingRuleId: Scaling rule id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: WorkerRamRoleName: Worker ram role name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

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
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosServerlessKubernetesCluster.AddonsProperty"]]]]:
        '''
        :Property: addons: The add-ons to be installed for the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosServerlessKubernetesCluster.AddonsProperty"]]]], jsii.get(self, "addons"))

    @addons.setter
    def addons(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosServerlessKubernetesCluster.AddonsProperty"]]]],
    ) -> None:
        jsii.set(self, "addons", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "endpointPublicAccess"))

    @endpoint_public_access.setter
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="kubernetesVersion")
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "kubernetesVersion"))

    @kubernetes_version.setter
    def kubernetes_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "kubernetesVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="natGateway")
    def nat_gateway(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "natGateway"))

    @nat_gateway.setter
    def nat_gateway(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "natGateway", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="privateZone")
    def private_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateZone: Whether to enable PrivateZone for service discovery.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "privateZone"))

    @private_zone.setter
    def private_zone(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "privateZone", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceCidr"))

    @service_cidr.setter
    def service_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "serviceCidr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosServerlessKubernetesCluster.TagsProperty"]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        return typing.cast(typing.Optional[typing.List["RosServerlessKubernetesCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosServerlessKubernetesCluster.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
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
        :Property: vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
        Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchIds"))

    @v_switch_ids.setter
    def v_switch_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: The zone ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosServerlessKubernetesCluster.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "config": "config", "disabled": "disabled"},
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            config: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            disabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param config: 
            :param disabled: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if disabled is not None:
                self._values["disabled"] = disabled

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: The name of the add-on.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: config: When the value is empty, no configuration is required.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def disabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: disabled: Specifies whether to disable default installation.
            '''
            result = self._values.get("disabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosServerlessKubernetesCluster.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: Tag key.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: Tag value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosServerlessKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "addons": "addons",
        "endpoint_public_access": "endpointPublicAccess",
        "kubernetes_version": "kubernetesVersion",
        "nat_gateway": "natGateway",
        "private_zone": "privateZone",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "v_switch_ids": "vSwitchIds",
        "zone_id": "zoneId",
    },
)
class RosServerlessKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosServerlessKubernetesCluster.AddonsProperty]]]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        nat_gateway: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        private_zone: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosServerlessKubernetesCluster.TagsProperty]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ServerlessKubernetesCluster``.

        :param name: 
        :param addons: 
        :param endpoint_public_access: 
        :param kubernetes_version: 
        :param nat_gateway: 
        :param private_zone: 
        :param security_group_id: 
        :param service_cidr: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        :param v_switch_ids: 
        :param zone_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }
        if addons is not None:
            self._values["addons"] = addons
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if nat_gateway is not None:
            self._values["nat_gateway"] = nat_gateway
        if private_zone is not None:
            self._values["private_zone"] = private_zone
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerlessKubernetesCluster.AddonsProperty]]]]:
        '''
        :Property: addons: The add-ons to be installed for the cluster.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerlessKubernetesCluster.AddonsProperty]]]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def nat_gateway(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
        '''
        result = self._values.get("nat_gateway")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateZone: Whether to enable PrivateZone for service discovery.
        '''
        result = self._values.get("private_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosServerlessKubernetesCluster.TagsProperty]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosServerlessKubernetesCluster.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
        Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        '''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneId: The zone ID.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServerlessKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ServerlessKubernetesCluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.ServerlessKubernetesCluster",
):
    '''A ROS resource type:  ``ALIYUN::CS::ServerlessKubernetesCluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ServerlessKubernetesClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ServerlessKubernetesCluster``.

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
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> ros_cdk_core.IResolvable:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ServerlessKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "addons": "addons",
        "endpoint_public_access": "endpointPublicAccess",
        "kubernetes_version": "kubernetesVersion",
        "nat_gateway": "natGateway",
        "private_zone": "privateZone",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "v_switch_ids": "vSwitchIds",
        "zone_id": "zoneId",
    },
)
class ServerlessKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosServerlessKubernetesCluster.AddonsProperty]]]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        nat_gateway: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        private_zone: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosServerlessKubernetesCluster.TagsProperty]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ServerlessKubernetesCluster``.

        :param name: Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        :param addons: Property addons: The add-ons to be installed for the cluster.
        :param endpoint_public_access: Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
        :param kubernetes_version: Property kubernetesVersion: The version of the Kubernetes cluster.
        :param nat_gateway: Property natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
        :param private_zone: Property privateZone: Whether to enable PrivateZone for service discovery.
        :param security_group_id: Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        :param service_cidr: Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        :param tags: Property tags: Tag the cluster.
        :param vpc_id: Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        :param v_switch_id: Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
        :param v_switch_ids: Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch. Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        :param zone_id: Property zoneId: The zone ID.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }
        if addons is not None:
            self._values["addons"] = addons
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if nat_gateway is not None:
            self._values["nat_gateway"] = nat_gateway
        if private_zone is not None:
            self._values["private_zone"] = private_zone
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The name of the cluster.

        The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerlessKubernetesCluster.AddonsProperty]]]]:
        '''Property addons: The add-ons to be installed for the cluster.'''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerlessKubernetesCluster.AddonsProperty]]]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.

        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property kubernetesVersion: The version of the Kubernetes cluster.'''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def nat_gateway(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property natGateway: Whether to create a NAT gateway.

        The value can be true or false. If not set, the system defaults to false.
        '''
        result = self._values.get("nat_gateway")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property privateZone: Whether to enable PrivateZone for service discovery.'''
        result = self._values.get("private_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.

        When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosServerlessKubernetesCluster.TagsProperty]]:
        '''Property tags: Tag the cluster.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosServerlessKubernetesCluster.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: VPC ID.

        If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property vSwitchIds: The IDs of VSwitches.

        If you leave this property empty, the system automatically creates a VSwitch.
        Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        '''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneId: The zone ID.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServerlessKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AnyCluster",
    "AnyClusterProps",
    "ClusterNodePool",
    "ClusterNodePoolProps",
    "KubernetesCluster",
    "KubernetesClusterProps",
    "ManagedEdgeKubernetesCluster",
    "ManagedEdgeKubernetesClusterProps",
    "ManagedKubernetesCluster",
    "ManagedKubernetesClusterProps",
    "RosAnyCluster",
    "RosAnyClusterProps",
    "RosClusterNodePool",
    "RosClusterNodePoolProps",
    "RosKubernetesCluster",
    "RosKubernetesClusterProps",
    "RosManagedEdgeKubernetesCluster",
    "RosManagedEdgeKubernetesClusterProps",
    "RosManagedKubernetesCluster",
    "RosManagedKubernetesClusterProps",
    "RosServerlessKubernetesCluster",
    "RosServerlessKubernetesClusterProps",
    "ServerlessKubernetesCluster",
    "ServerlessKubernetesClusterProps",
]

publication.publish()
