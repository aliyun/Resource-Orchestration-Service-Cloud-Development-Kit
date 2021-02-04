"""
## Aliyun ROS CS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_cs as CS
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


class AnyCluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.AnyCluster",
):
    """A ROS resource type:  ``ALIYUN::CS::AnyCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AnyClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CS::AnyCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AnyCluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster instance ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> typing.Any:
        """
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        """
        return jsii.get(self, "attrTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> typing.Any:
        """
        :Attribute: WorkerRamRoleName: Worker ram role name.
        """
        return jsii.get(self, "attrWorkerRamRoleName")


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
        """Properties for defining a ``ALIYUN::CS::AnyCluster``.

        :param cluster_config: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_config": cluster_config,
        }

    @builtins.property
    def cluster_config(
        self,
    ) -> typing.Union[typing.Mapping[builtins.str, typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: clusterConfig: Cluster config.
        """
        result = self._values.get("cluster_config")
        assert result is not None, "Required property 'cluster_config' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AnyClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class KubernetesCluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.KubernetesCluster",
):
    """A ROS resource type:  ``ALIYUN::CS::KubernetesCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "KubernetesClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CS::KubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(KubernetesCluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster instance ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> typing.Any:
        """
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        """
        return jsii.get(self, "attrTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> typing.Any:
        """
        :Attribute: WorkerRamRoleName: Worker ram role name.
        """
        return jsii.get(self, "attrWorkerRamRoleName")


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
        "cloud_monitor_flags": "cloudMonitorFlags",
        "container_cidr": "containerCidr",
        "cpu_policy": "cpuPolicy",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "login_password": "loginPassword",
        "master_auto_renew": "masterAutoRenew",
        "master_auto_renew_period": "masterAutoRenewPeriod",
        "master_count": "masterCount",
        "master_data_disk": "masterDataDisk",
        "master_data_disks": "masterDataDisks",
        "master_instance_charge_type": "masterInstanceChargeType",
        "master_period": "masterPeriod",
        "master_period_unit": "masterPeriodUnit",
        "master_system_disk_category": "masterSystemDiskCategory",
        "master_system_disk_size": "masterSystemDiskSize",
        "node_port_range": "nodePortRange",
        "num_of_nodes": "numOfNodes",
        "proxy_mode": "proxyMode",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "ssh_flags": "sshFlags",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "worker_auto_renew": "workerAutoRenew",
        "worker_auto_renew_period": "workerAutoRenewPeriod",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_instance_charge_type": "workerInstanceChargeType",
        "worker_period": "workerPeriod",
        "worker_period_unit": "workerPeriodUnit",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
    },
)
class KubernetesClusterProps:
    def __init__(
        self,
        *,
        master_instance_types: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        master_v_switch_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        name: builtins.str,
        vpc_id: builtins.str,
        worker_instance_types: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        worker_v_switch_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[builtins.str] = None,
        cpu_policy: typing.Optional[builtins.str] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[builtins.str] = None,
        kubernetes_version: typing.Optional[builtins.str] = None,
        login_password: typing.Optional[builtins.str] = None,
        master_auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        master_auto_renew_period: typing.Optional[jsii.Number] = None,
        master_count: typing.Optional[jsii.Number] = None,
        master_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        master_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]] = None,
        master_instance_charge_type: typing.Optional[builtins.str] = None,
        master_period: typing.Optional[jsii.Number] = None,
        master_period_unit: typing.Optional[builtins.str] = None,
        master_system_disk_category: typing.Optional[builtins.str] = None,
        master_system_disk_size: typing.Optional[jsii.Number] = None,
        node_port_range: typing.Optional[builtins.str] = None,
        num_of_nodes: typing.Optional[jsii.Number] = None,
        proxy_mode: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        service_cidr: typing.Optional[builtins.str] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ssh_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        taint: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        timeout_mins: typing.Optional[jsii.Number] = None,
        worker_auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_auto_renew_period: typing.Optional[jsii.Number] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]] = None,
        worker_instance_charge_type: typing.Optional[builtins.str] = None,
        worker_period: typing.Optional[jsii.Number] = None,
        worker_period_unit: typing.Optional[builtins.str] = None,
        worker_system_disk_category: typing.Optional[builtins.str] = None,
        worker_system_disk_size: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CS::KubernetesCluster``.

        :param master_instance_types: 
        :param master_v_switch_ids: 
        :param name: 
        :param vpc_id: 
        :param worker_instance_types: 
        :param worker_v_switch_ids: 
        :param addons: 
        :param cloud_monitor_flags: 
        :param container_cidr: 
        :param cpu_policy: 
        :param disable_rollback: 
        :param endpoint_public_access: 
        :param key_pair: 
        :param kubernetes_version: 
        :param login_password: 
        :param master_auto_renew: 
        :param master_auto_renew_period: 
        :param master_count: 
        :param master_data_disk: 
        :param master_data_disks: 
        :param master_instance_charge_type: 
        :param master_period: 
        :param master_period_unit: 
        :param master_system_disk_category: 
        :param master_system_disk_size: 
        :param node_port_range: 
        :param num_of_nodes: 
        :param proxy_mode: 
        :param security_group_id: 
        :param service_cidr: 
        :param snat_entry: 
        :param ssh_flags: 
        :param tags: 
        :param taint: 
        :param timeout_mins: 
        :param worker_auto_renew: 
        :param worker_auto_renew_period: 
        :param worker_data_disk: 
        :param worker_data_disks: 
        :param worker_instance_charge_type: 
        :param worker_period: 
        :param worker_period_unit: 
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        """
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
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if cpu_policy is not None:
            self._values["cpu_policy"] = cpu_policy
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if login_password is not None:
            self._values["login_password"] = login_password
        if master_auto_renew is not None:
            self._values["master_auto_renew"] = master_auto_renew
        if master_auto_renew_period is not None:
            self._values["master_auto_renew_period"] = master_auto_renew_period
        if master_count is not None:
            self._values["master_count"] = master_count
        if master_data_disk is not None:
            self._values["master_data_disk"] = master_data_disk
        if master_data_disks is not None:
            self._values["master_data_disks"] = master_data_disks
        if master_instance_charge_type is not None:
            self._values["master_instance_charge_type"] = master_instance_charge_type
        if master_period is not None:
            self._values["master_period"] = master_period
        if master_period_unit is not None:
            self._values["master_period_unit"] = master_period_unit
        if master_system_disk_category is not None:
            self._values["master_system_disk_category"] = master_system_disk_category
        if master_system_disk_size is not None:
            self._values["master_system_disk_size"] = master_system_disk_size
        if node_port_range is not None:
            self._values["node_port_range"] = node_port_range
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if ssh_flags is not None:
            self._values["ssh_flags"] = ssh_flags
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if worker_auto_renew is not None:
            self._values["worker_auto_renew"] = worker_auto_renew
        if worker_auto_renew_period is not None:
            self._values["worker_auto_renew_period"] = worker_auto_renew_period
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_instance_charge_type is not None:
            self._values["worker_instance_charge_type"] = worker_instance_charge_type
        if worker_period is not None:
            self._values["worker_period"] = worker_period
        if worker_period_unit is not None:
            self._values["worker_period_unit"] = worker_period_unit
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size

    @builtins.property
    def master_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property:

        masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        List size must be 3, Instance Type can be repeated.
        """
        result = self._values.get("master_instance_types")
        assert result is not None, "Required property 'master_instance_types' is missing"
        return result

    @builtins.property
    def master_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        """
        result = self._values.get("master_v_switch_ids")
        assert result is not None, "Required property 'master_v_switch_ids' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC ID.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        """
        result = self._values.get("worker_instance_types")
        assert result is not None, "Required property 'worker_instance_types' is missing"
        return result

    @builtins.property
    def worker_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: workerVSwitchIds: The virtual switch ID of the worker node.
        """
        result = self._values.get("worker_v_switch_ids")
        assert result is not None, "Required property 'worker_v_switch_ids' is missing"
        return result

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]]:
        """
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        """
        result = self._values.get("addons")
        return result

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        """
        result = self._values.get("cloud_monitor_flags")
        return result

    @builtins.property
    def container_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        """
        result = self._values.get("container_cidr")
        return result

    @builtins.property
    def cpu_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies. The default is none.
        """
        result = self._values.get("cpu_policy")
        return result

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        """
        result = self._values.get("disable_rollback")
        return result

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        """
        result = self._values.get("endpoint_public_access")
        return result

    @builtins.property
    def key_pair(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("key_pair")
        return result

    @builtins.property
    def kubernetes_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: kubernetesVersion: Kubernetes version. Default to 1.14.8-aliyun.1, 1.16.9-aliyun.1 and so on .
        """
        result = self._values.get("kubernetes_version")
        return result

    @builtins.property
    def login_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("login_password")
        return result

    @builtins.property
    def master_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        masterAutoRenew: Whether the master node automatically renews. It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        """
        result = self._values.get("master_auto_renew")
        return result

    @builtins.property
    def master_auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        """
        result = self._values.get("master_auto_renew_period")
        return result

    @builtins.property
    def master_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
        """
        result = self._values.get("master_count")
        return result

    @builtins.property
    def master_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        masterDataDisk: Whether the master node mounts data disks can be selected as:
        true: mount the data disk
        false: no data disk is mounted, default is false
        """
        result = self._values.get("master_data_disk")
        return result

    @builtins.property
    def master_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]]:
        """
        :Property: masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
        """
        result = self._values.get("master_data_disks")
        return result

    @builtins.property
    def master_instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterInstanceChargeType: Master node payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        """
        result = self._values.get("master_instance_charge_type")
        return result

    @builtins.property
    def master_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        masterPeriod: The duration of the annual subscription and monthly subscription. It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        """
        result = self._values.get("master_period")
        return result

    @builtins.property
    def master_period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        """
        result = self._values.get("master_period_unit")
        return result

    @builtins.property
    def master_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterSystemDiskCategory: Master disk system disk type. The value range is:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_ssd.
        """
        result = self._values.get("master_system_disk_category")
        return result

    @builtins.property
    def master_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        masterSystemDiskSize: Master disk system disk size in GiB.
        Default to 120.
        """
        result = self._values.get("master_system_disk_size")
        return result

    @builtins.property
    def node_port_range(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        nodePortRange: Node service port. The value range is [30000, 65535].
        Default to 30000-65535.
        """
        result = self._values.get("node_port_range")
        return result

    @builtins.property
    def num_of_nodes(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        """
        result = self._values.get("num_of_nodes")
        return result

    @builtins.property
    def proxy_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        """
        result = self._values.get("proxy_mode")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        result = self._values.get("service_cidr")
        return result

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        """
        result = self._values.get("snat_entry")
        return result

    @builtins.property
    def ssh_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        sshFlags: Whether to enable public network SSH login:
        true: open
        false: not open
        """
        result = self._values.get("ssh_flags")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tag the cluster.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        """
        result = self._values.get("taint")
        return result

    @builtins.property
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        """
        result = self._values.get("timeout_mins")
        return result

    @builtins.property
    def worker_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        """
        result = self._values.get("worker_auto_renew")
        return result

    @builtins.property
    def worker_auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        """
        result = self._values.get("worker_auto_renew_period")
        return result

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        """
        result = self._values.get("worker_data_disk")
        return result

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]]:
        """
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        """
        result = self._values.get("worker_data_disks")
        return result

    @builtins.property
    def worker_instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerInstanceChargeType: Worker node payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        """
        result = self._values.get("worker_instance_charge_type")
        return result

    @builtins.property
    def worker_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        """
        result = self._values.get("worker_period")
        return result

    @builtins.property
    def worker_period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month.
        """
        result = self._values.get("worker_period_unit")
        return result

    @builtins.property
    def worker_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        """
        result = self._values.get("worker_system_disk_category")
        return result

    @builtins.property
    def worker_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        """
        result = self._values.get("worker_system_disk_size")
        return result

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
    """A ROS resource type:  ``ALIYUN::CS::ManagedEdgeKubernetesCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ManagedEdgeKubernetesClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ManagedEdgeKubernetesCluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster instance ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> typing.Any:
        """
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        """
        return jsii.get(self, "attrTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> typing.Any:
        """
        :Attribute: WorkerRamRoleName: Worker ram role name.
        """
        return jsii.get(self, "attrWorkerRamRoleName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ManagedEdgeKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "num_of_nodes": "numOfNodes",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "container_cidr": "containerCidr",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "key_pair": "keyPair",
        "login_password": "loginPassword",
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
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
    },
)
class ManagedEdgeKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: builtins.str,
        num_of_nodes: jsii.Number,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[builtins.str] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[builtins.str] = None,
        login_password: typing.Optional[builtins.str] = None,
        profile: typing.Optional[builtins.str] = None,
        proxy_mode: typing.Optional[builtins.str] = None,
        service_cidr: typing.Optional[builtins.str] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        timeout_mins: typing.Optional[jsii.Number] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disk_category: typing.Optional[builtins.str] = None,
        worker_data_disk_size: typing.Optional[jsii.Number] = None,
        worker_system_disk_category: typing.Optional[builtins.str] = None,
        worker_system_disk_size: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

        :param name: 
        :param num_of_nodes: 
        :param cloud_monitor_flags: 
        :param container_cidr: 
        :param disable_rollback: 
        :param endpoint_public_access: 
        :param key_pair: 
        :param login_password: 
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
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "num_of_nodes": num_of_nodes,
        }
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if login_password is not None:
            self._values["login_password"] = login_password
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
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def num_of_nodes(self) -> jsii.Number:
        """
        :Property: numOfNodes: Number of worker nodes. The range is [0,300]
        """
        result = self._values.get("num_of_nodes")
        assert result is not None, "Required property 'num_of_nodes' is missing"
        return result

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        """
        result = self._values.get("cloud_monitor_flags")
        return result

    @builtins.property
    def container_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        """
        result = self._values.get("container_cidr")
        return result

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        """
        result = self._values.get("disable_rollback")
        return result

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        """
        result = self._values.get("endpoint_public_access")
        return result

    @builtins.property
    def key_pair(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("key_pair")
        return result

    @builtins.property
    def login_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("login_password")
        return result

    @builtins.property
    def profile(self) -> typing.Optional[builtins.str]:
        """
        :Property: profile: Edge cluster ID. The default value is Edge.
        """
        result = self._values.get("profile")
        return result

    @builtins.property
    def proxy_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        """
        result = self._values.get("proxy_mode")
        return result

    @builtins.property
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        result = self._values.get("service_cidr")
        return result

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        """
        result = self._values.get("snat_entry")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tag the cluster.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        """
        result = self._values.get("timeout_mins")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        """
        result = self._values.get("v_switch_ids")
        return result

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        """
        result = self._values.get("worker_data_disk")
        return result

    @builtins.property
    def worker_data_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property: workerDataDiskCategory: Data disk type.
        """
        result = self._values.get("worker_data_disk_category")
        return result

    @builtins.property
    def worker_data_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property: workerDataDiskSize: Data disk size in GiB.
        """
        result = self._values.get("worker_data_disk_size")
        return result

    @builtins.property
    def worker_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerSystemDiskCategory: Worker node system disk type.
        Default to cloud_efficiency.
        """
        result = self._values.get("worker_system_disk_category")
        return result

    @builtins.property
    def worker_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        """
        result = self._values.get("worker_system_disk_size")
        return result

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
    """A ROS resource type:  ``ALIYUN::CS::ManagedKubernetesCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ManagedKubernetesClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CS::ManagedKubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ManagedKubernetesCluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster instance ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> typing.Any:
        """
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        """
        return jsii.get(self, "attrTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> typing.Any:
        """
        :Attribute: WorkerRamRoleName: Worker ram role name.
        """
        return jsii.get(self, "attrWorkerRamRoleName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ManagedKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "worker_instance_types": "workerInstanceTypes",
        "addons": "addons",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "container_cidr": "containerCidr",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "login_password": "loginPassword",
        "num_of_nodes": "numOfNodes",
        "proxy_mode": "proxyMode",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "worker_auto_renew": "workerAutoRenew",
        "worker_auto_renew_period": "workerAutoRenewPeriod",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_instance_charge_type": "workerInstanceChargeType",
        "worker_period": "workerPeriod",
        "worker_period_unit": "workerPeriodUnit",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
    },
)
class ManagedKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: builtins.str,
        vpc_id: builtins.str,
        v_switch_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        worker_instance_types: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[builtins.str] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[builtins.str] = None,
        kubernetes_version: typing.Optional[builtins.str] = None,
        login_password: typing.Optional[builtins.str] = None,
        num_of_nodes: typing.Optional[jsii.Number] = None,
        proxy_mode: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        service_cidr: typing.Optional[builtins.str] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        taint: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        timeout_mins: typing.Optional[jsii.Number] = None,
        worker_auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_auto_renew_period: typing.Optional[jsii.Number] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]] = None,
        worker_instance_charge_type: typing.Optional[builtins.str] = None,
        worker_period: typing.Optional[jsii.Number] = None,
        worker_period_unit: typing.Optional[builtins.str] = None,
        worker_system_disk_category: typing.Optional[builtins.str] = None,
        worker_system_disk_size: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CS::ManagedKubernetesCluster``.

        :param name: 
        :param vpc_id: 
        :param v_switch_ids: 
        :param worker_instance_types: 
        :param addons: 
        :param cloud_monitor_flags: 
        :param container_cidr: 
        :param disable_rollback: 
        :param endpoint_public_access: 
        :param key_pair: 
        :param kubernetes_version: 
        :param login_password: 
        :param num_of_nodes: 
        :param proxy_mode: 
        :param security_group_id: 
        :param service_cidr: 
        :param snat_entry: 
        :param tags: 
        :param taint: 
        :param timeout_mins: 
        :param worker_auto_renew: 
        :param worker_auto_renew_period: 
        :param worker_data_disk: 
        :param worker_data_disks: 
        :param worker_instance_charge_type: 
        :param worker_period: 
        :param worker_period_unit: 
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "vpc_id": vpc_id,
            "v_switch_ids": v_switch_ids,
            "worker_instance_types": worker_instance_types,
        }
        if addons is not None:
            self._values["addons"] = addons
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if login_password is not None:
            self._values["login_password"] = login_password
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if worker_auto_renew is not None:
            self._values["worker_auto_renew"] = worker_auto_renew
        if worker_auto_renew_period is not None:
            self._values["worker_auto_renew_period"] = worker_auto_renew_period
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_instance_charge_type is not None:
            self._values["worker_instance_charge_type"] = worker_instance_charge_type
        if worker_period is not None:
            self._values["worker_period"] = worker_period
        if worker_period_unit is not None:
            self._values["worker_period_unit"] = worker_period_unit
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC ID.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        """
        result = self._values.get("v_switch_ids")
        assert result is not None, "Required property 'v_switch_ids' is missing"
        return result

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        """
        result = self._values.get("worker_instance_types")
        assert result is not None, "Required property 'worker_instance_types' is missing"
        return result

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]]:
        """
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        """
        result = self._values.get("addons")
        return result

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        """
        result = self._values.get("cloud_monitor_flags")
        return result

    @builtins.property
    def container_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        """
        result = self._values.get("container_cidr")
        return result

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        """
        result = self._values.get("disable_rollback")
        return result

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        """
        result = self._values.get("endpoint_public_access")
        return result

    @builtins.property
    def key_pair(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("key_pair")
        return result

    @builtins.property
    def kubernetes_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: kubernetesVersion: Kubernetes version. Default to 1.16.9-aliyun.1, 1.14.8-aliyun.1 and so on.
        """
        result = self._values.get("kubernetes_version")
        return result

    @builtins.property
    def login_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("login_password")
        return result

    @builtins.property
    def num_of_nodes(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        """
        result = self._values.get("num_of_nodes")
        return result

    @builtins.property
    def proxy_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        """
        result = self._values.get("proxy_mode")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        result = self._values.get("service_cidr")
        return result

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        """
        result = self._values.get("snat_entry")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tag the cluster.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        """
        result = self._values.get("taint")
        return result

    @builtins.property
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        """
        result = self._values.get("timeout_mins")
        return result

    @builtins.property
    def worker_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        """
        result = self._values.get("worker_auto_renew")
        return result

    @builtins.property
    def worker_auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        """
        result = self._values.get("worker_auto_renew_period")
        return result

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        """
        result = self._values.get("worker_data_disk")
        return result

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]]:
        """
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        """
        result = self._values.get("worker_data_disks")
        return result

    @builtins.property
    def worker_instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerInstanceChargeType: Worker node payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        """
        result = self._values.get("worker_instance_charge_type")
        return result

    @builtins.property
    def worker_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        """
        result = self._values.get("worker_period")
        return result

    @builtins.property
    def worker_period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month.
        """
        result = self._values.get("worker_period_unit")
        return result

    @builtins.property
    def worker_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        """
        result = self._values.get("worker_system_disk_category")
        return result

    @builtins.property
    def worker_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        """
        result = self._values.get("worker_system_disk_size")
        return result

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
    """A ROS template type:  ``ALIYUN::CS::AnyCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAnyClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CS::AnyCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAnyCluster, self, [scope, id, props, enable_resource_property_constraint])

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
        :Attribute: ClusterId: Cluster instance ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> typing.Any:
        """
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        """
        return jsii.get(self, "attrTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> typing.Any:
        """
        :Attribute: WorkerRamRoleName: Worker ram role name.
        """
        return jsii.get(self, "attrWorkerRamRoleName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterConfig")
    def cluster_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        """
        :Property: clusterConfig: Cluster config.
        """
        return jsii.get(self, "clusterConfig")

    @cluster_config.setter # type: ignore
    def cluster_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        jsii.set(self, "clusterConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
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
        """Properties for defining a ``ALIYUN::CS::AnyCluster``.

        :param cluster_config: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_config": cluster_config,
        }

    @builtins.property
    def cluster_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        """
        :Property: clusterConfig: Cluster config.
        """
        result = self._values.get("cluster_config")
        assert result is not None, "Required property 'cluster_config' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAnyClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKubernetesCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster",
):
    """A ROS template type:  ``ALIYUN::CS::KubernetesCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosKubernetesClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CS::KubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosKubernetesCluster, self, [scope, id, props, enable_resource_property_constraint])

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
        :Attribute: ClusterId: Cluster instance ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> typing.Any:
        """
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        """
        return jsii.get(self, "attrTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> typing.Any:
        """
        :Attribute: WorkerRamRoleName: Worker ram role name.
        """
        return jsii.get(self, "attrWorkerRamRoleName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tag the cluster.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterInstanceTypes")
    def master_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property:

        masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        List size must be 3, Instance Type can be repeated.
        """
        return jsii.get(self, "masterInstanceTypes")

    @master_instance_types.setter # type: ignore
    def master_instance_types(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "masterInstanceTypes", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterVSwitchIds")
    def master_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        """
        return jsii.get(self, "masterVSwitchIds")

    @master_v_switch_ids.setter # type: ignore
    def master_v_switch_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "masterVSwitchIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC ID.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: builtins.str) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerInstanceTypes")
    def worker_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        """
        return jsii.get(self, "workerInstanceTypes")

    @worker_instance_types.setter # type: ignore
    def worker_instance_types(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "workerInstanceTypes", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerVSwitchIds")
    def worker_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: workerVSwitchIds: The virtual switch ID of the worker node.
        """
        return jsii.get(self, "workerVSwitchIds")

    @worker_v_switch_ids.setter # type: ignore
    def worker_v_switch_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "workerVSwitchIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]]:
        """
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        """
        return jsii.get(self, "addons")

    @addons.setter # type: ignore
    def addons(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]],
    ) -> None:
        jsii.set(self, "addons", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cloudMonitorFlags")
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        """
        return jsii.get(self, "cloudMonitorFlags")

    @cloud_monitor_flags.setter # type: ignore
    def cloud_monitor_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cloudMonitorFlags", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="containerCidr")
    def container_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        """
        return jsii.get(self, "containerCidr")

    @container_cidr.setter # type: ignore
    def container_cidr(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "containerCidr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cpuPolicy")
    def cpu_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies. The default is none.
        """
        return jsii.get(self, "cpuPolicy")

    @cpu_policy.setter # type: ignore
    def cpu_policy(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "cpuPolicy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="disableRollback")
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        """
        return jsii.get(self, "disableRollback")

    @disable_rollback.setter # type: ignore
    def disable_rollback(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "disableRollback", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        """
        return jsii.get(self, "endpointPublicAccess")

    @endpoint_public_access.setter # type: ignore
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="keyPair")
    def key_pair(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        """
        return jsii.get(self, "keyPair")

    @key_pair.setter # type: ignore
    def key_pair(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "keyPair", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="kubernetesVersion")
    def kubernetes_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: kubernetesVersion: Kubernetes version. Default to 1.14.8-aliyun.1, 1.16.9-aliyun.1 and so on .
        """
        return jsii.get(self, "kubernetesVersion")

    @kubernetes_version.setter # type: ignore
    def kubernetes_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "kubernetesVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="loginPassword")
    def login_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        """
        return jsii.get(self, "loginPassword")

    @login_password.setter # type: ignore
    def login_password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "loginPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterAutoRenew")
    def master_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        masterAutoRenew: Whether the master node automatically renews. It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        """
        return jsii.get(self, "masterAutoRenew")

    @master_auto_renew.setter # type: ignore
    def master_auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterAutoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterAutoRenewPeriod")
    def master_auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        """
        return jsii.get(self, "masterAutoRenewPeriod")

    @master_auto_renew_period.setter # type: ignore
    def master_auto_renew_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "masterAutoRenewPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterCount")
    def master_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
        """
        return jsii.get(self, "masterCount")

    @master_count.setter # type: ignore
    def master_count(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "masterCount", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterDataDisk")
    def master_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        masterDataDisk: Whether the master node mounts data disks can be selected as:
        true: mount the data disk
        false: no data disk is mounted, default is false
        """
        return jsii.get(self, "masterDataDisk")

    @master_data_disk.setter # type: ignore
    def master_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterDataDisk", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterDataDisks")
    def master_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]]:
        """
        :Property: masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
        """
        return jsii.get(self, "masterDataDisks")

    @master_data_disks.setter # type: ignore
    def master_data_disks(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]],
    ) -> None:
        jsii.set(self, "masterDataDisks", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterInstanceChargeType")
    def master_instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterInstanceChargeType: Master node payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        """
        return jsii.get(self, "masterInstanceChargeType")

    @master_instance_charge_type.setter # type: ignore
    def master_instance_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterInstanceChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterPeriod")
    def master_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        masterPeriod: The duration of the annual subscription and monthly subscription. It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        """
        return jsii.get(self, "masterPeriod")

    @master_period.setter # type: ignore
    def master_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "masterPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterPeriodUnit")
    def master_period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        """
        return jsii.get(self, "masterPeriodUnit")

    @master_period_unit.setter # type: ignore
    def master_period_unit(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterPeriodUnit", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterSystemDiskCategory")
    def master_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterSystemDiskCategory: Master disk system disk type. The value range is:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_ssd.
        """
        return jsii.get(self, "masterSystemDiskCategory")

    @master_system_disk_category.setter # type: ignore
    def master_system_disk_category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "masterSystemDiskCategory", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="masterSystemDiskSize")
    def master_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        masterSystemDiskSize: Master disk system disk size in GiB.
        Default to 120.
        """
        return jsii.get(self, "masterSystemDiskSize")

    @master_system_disk_size.setter # type: ignore
    def master_system_disk_size(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "masterSystemDiskSize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="nodePortRange")
    def node_port_range(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        nodePortRange: Node service port. The value range is [30000, 65535].
        Default to 30000-65535.
        """
        return jsii.get(self, "nodePortRange")

    @node_port_range.setter # type: ignore
    def node_port_range(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "nodePortRange", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="numOfNodes")
    def num_of_nodes(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        """
        return jsii.get(self, "numOfNodes")

    @num_of_nodes.setter # type: ignore
    def num_of_nodes(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "numOfNodes", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="proxyMode")
    def proxy_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        """
        return jsii.get(self, "proxyMode")

    @proxy_mode.setter # type: ignore
    def proxy_mode(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "proxyMode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        return jsii.get(self, "serviceCidr")

    @service_cidr.setter # type: ignore
    def service_cidr(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "serviceCidr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="snatEntry")
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        """
        return jsii.get(self, "snatEntry")

    @snat_entry.setter # type: ignore
    def snat_entry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "snatEntry", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sshFlags")
    def ssh_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        sshFlags: Whether to enable public network SSH login:
        true: open
        false: not open
        """
        return jsii.get(self, "sshFlags")

    @ssh_flags.setter # type: ignore
    def ssh_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sshFlags", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="taint")
    def taint(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        """
        return jsii.get(self, "taint")

    @taint.setter # type: ignore
    def taint(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "taint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        """
        return jsii.get(self, "timeoutMins")

    @timeout_mins.setter # type: ignore
    def timeout_mins(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "timeoutMins", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerAutoRenew")
    def worker_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        """
        return jsii.get(self, "workerAutoRenew")

    @worker_auto_renew.setter # type: ignore
    def worker_auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerAutoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerAutoRenewPeriod")
    def worker_auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        """
        return jsii.get(self, "workerAutoRenewPeriod")

    @worker_auto_renew_period.setter # type: ignore
    def worker_auto_renew_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "workerAutoRenewPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerDataDisk")
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        """
        return jsii.get(self, "workerDataDisk")

    @worker_data_disk.setter # type: ignore
    def worker_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerDataDisk", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerDataDisks")
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]]:
        """
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        """
        return jsii.get(self, "workerDataDisks")

    @worker_data_disks.setter # type: ignore
    def worker_data_disks(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]],
    ) -> None:
        jsii.set(self, "workerDataDisks", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerInstanceChargeType")
    def worker_instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerInstanceChargeType: Worker node payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        """
        return jsii.get(self, "workerInstanceChargeType")

    @worker_instance_charge_type.setter # type: ignore
    def worker_instance_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "workerInstanceChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerPeriod")
    def worker_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        """
        return jsii.get(self, "workerPeriod")

    @worker_period.setter # type: ignore
    def worker_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "workerPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerPeriodUnit")
    def worker_period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month.
        """
        return jsii.get(self, "workerPeriodUnit")

    @worker_period_unit.setter # type: ignore
    def worker_period_unit(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "workerPeriodUnit", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerSystemDiskCategory")
    def worker_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        """
        return jsii.get(self, "workerSystemDiskCategory")

    @worker_system_disk_category.setter # type: ignore
    def worker_system_disk_category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "workerSystemDiskCategory", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerSystemDiskSize")
    def worker_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        """
        return jsii.get(self, "workerSystemDiskSize")

    @worker_system_disk_size.setter # type: ignore
    def worker_system_disk_size(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "workerSystemDiskSize", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "config": "config", "version": "version"},
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: builtins.str,
            config: typing.Optional[builtins.str] = None,
            version: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param name: 
            :param config: 
            :param version: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def name(self) -> builtins.str:
            """
            :Property: name: Addon plugin name
            """
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return result

        @builtins.property
        def config(self) -> typing.Optional[builtins.str]:
            """
            :Property: config: When the value is empty, no configuration is required.
            """
            result = self._values.get("config")
            return result

        @builtins.property
        def version(self) -> typing.Optional[builtins.str]:
            """
            :Property: version: When the value is empty, the latest version is selected by default.
            """
            result = self._values.get("version")
            return result

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
        def __init__(self, *, category: builtins.str, size: jsii.Number) -> None:
            """
            :param category: 
            :param size: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "category": category,
                "size": size,
            }

        @builtins.property
        def category(self) -> builtins.str:
            """
            :Property:

            category: Data disk type. Value includes:
            cloud: ordinary cloud disk
            cloud_efficiency: efficient cloud disk
            cloud_ssd: SSD cloud disk
            """
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return result

        @builtins.property
        def size(self) -> jsii.Number:
            """
            :Property: size: Data disk size in GiB.
            """
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MasterDataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size"},
    )
    class WorkerDataDisksProperty:
        def __init__(self, *, category: builtins.str, size: jsii.Number) -> None:
            """
            :param category: 
            :param size: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "category": category,
                "size": size,
            }

        @builtins.property
        def category(self) -> builtins.str:
            """
            :Property:

            category: Data disk type. Value includes:
            cloud: ordinary cloud disk
            cloud_efficiency: efficient cloud disk
            cloud_ssd: SSD cloud disk
            """
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return result

        @builtins.property
        def size(self) -> jsii.Number:
            """
            :Property: size: Data disk size in GiB.
            """
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return result

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
        "cloud_monitor_flags": "cloudMonitorFlags",
        "container_cidr": "containerCidr",
        "cpu_policy": "cpuPolicy",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "login_password": "loginPassword",
        "master_auto_renew": "masterAutoRenew",
        "master_auto_renew_period": "masterAutoRenewPeriod",
        "master_count": "masterCount",
        "master_data_disk": "masterDataDisk",
        "master_data_disks": "masterDataDisks",
        "master_instance_charge_type": "masterInstanceChargeType",
        "master_period": "masterPeriod",
        "master_period_unit": "masterPeriodUnit",
        "master_system_disk_category": "masterSystemDiskCategory",
        "master_system_disk_size": "masterSystemDiskSize",
        "node_port_range": "nodePortRange",
        "num_of_nodes": "numOfNodes",
        "proxy_mode": "proxyMode",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "ssh_flags": "sshFlags",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "worker_auto_renew": "workerAutoRenew",
        "worker_auto_renew_period": "workerAutoRenewPeriod",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_instance_charge_type": "workerInstanceChargeType",
        "worker_period": "workerPeriod",
        "worker_period_unit": "workerPeriodUnit",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
    },
)
class RosKubernetesClusterProps:
    def __init__(
        self,
        *,
        master_instance_types: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        master_v_switch_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        name: builtins.str,
        vpc_id: builtins.str,
        worker_instance_types: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        worker_v_switch_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.AddonsProperty]]]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[builtins.str] = None,
        cpu_policy: typing.Optional[builtins.str] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[builtins.str] = None,
        kubernetes_version: typing.Optional[builtins.str] = None,
        login_password: typing.Optional[builtins.str] = None,
        master_auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        master_auto_renew_period: typing.Optional[jsii.Number] = None,
        master_count: typing.Optional[jsii.Number] = None,
        master_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        master_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.MasterDataDisksProperty]]]] = None,
        master_instance_charge_type: typing.Optional[builtins.str] = None,
        master_period: typing.Optional[jsii.Number] = None,
        master_period_unit: typing.Optional[builtins.str] = None,
        master_system_disk_category: typing.Optional[builtins.str] = None,
        master_system_disk_size: typing.Optional[jsii.Number] = None,
        node_port_range: typing.Optional[builtins.str] = None,
        num_of_nodes: typing.Optional[jsii.Number] = None,
        proxy_mode: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        service_cidr: typing.Optional[builtins.str] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ssh_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        taint: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        timeout_mins: typing.Optional[jsii.Number] = None,
        worker_auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_auto_renew_period: typing.Optional[jsii.Number] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.WorkerDataDisksProperty]]]] = None,
        worker_instance_charge_type: typing.Optional[builtins.str] = None,
        worker_period: typing.Optional[jsii.Number] = None,
        worker_period_unit: typing.Optional[builtins.str] = None,
        worker_system_disk_category: typing.Optional[builtins.str] = None,
        worker_system_disk_size: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CS::KubernetesCluster``.

        :param master_instance_types: 
        :param master_v_switch_ids: 
        :param name: 
        :param vpc_id: 
        :param worker_instance_types: 
        :param worker_v_switch_ids: 
        :param addons: 
        :param cloud_monitor_flags: 
        :param container_cidr: 
        :param cpu_policy: 
        :param disable_rollback: 
        :param endpoint_public_access: 
        :param key_pair: 
        :param kubernetes_version: 
        :param login_password: 
        :param master_auto_renew: 
        :param master_auto_renew_period: 
        :param master_count: 
        :param master_data_disk: 
        :param master_data_disks: 
        :param master_instance_charge_type: 
        :param master_period: 
        :param master_period_unit: 
        :param master_system_disk_category: 
        :param master_system_disk_size: 
        :param node_port_range: 
        :param num_of_nodes: 
        :param proxy_mode: 
        :param security_group_id: 
        :param service_cidr: 
        :param snat_entry: 
        :param ssh_flags: 
        :param tags: 
        :param taint: 
        :param timeout_mins: 
        :param worker_auto_renew: 
        :param worker_auto_renew_period: 
        :param worker_data_disk: 
        :param worker_data_disks: 
        :param worker_instance_charge_type: 
        :param worker_period: 
        :param worker_period_unit: 
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        """
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
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if cpu_policy is not None:
            self._values["cpu_policy"] = cpu_policy
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if login_password is not None:
            self._values["login_password"] = login_password
        if master_auto_renew is not None:
            self._values["master_auto_renew"] = master_auto_renew
        if master_auto_renew_period is not None:
            self._values["master_auto_renew_period"] = master_auto_renew_period
        if master_count is not None:
            self._values["master_count"] = master_count
        if master_data_disk is not None:
            self._values["master_data_disk"] = master_data_disk
        if master_data_disks is not None:
            self._values["master_data_disks"] = master_data_disks
        if master_instance_charge_type is not None:
            self._values["master_instance_charge_type"] = master_instance_charge_type
        if master_period is not None:
            self._values["master_period"] = master_period
        if master_period_unit is not None:
            self._values["master_period_unit"] = master_period_unit
        if master_system_disk_category is not None:
            self._values["master_system_disk_category"] = master_system_disk_category
        if master_system_disk_size is not None:
            self._values["master_system_disk_size"] = master_system_disk_size
        if node_port_range is not None:
            self._values["node_port_range"] = node_port_range
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if ssh_flags is not None:
            self._values["ssh_flags"] = ssh_flags
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if worker_auto_renew is not None:
            self._values["worker_auto_renew"] = worker_auto_renew
        if worker_auto_renew_period is not None:
            self._values["worker_auto_renew_period"] = worker_auto_renew_period
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_instance_charge_type is not None:
            self._values["worker_instance_charge_type"] = worker_instance_charge_type
        if worker_period is not None:
            self._values["worker_period"] = worker_period
        if worker_period_unit is not None:
            self._values["worker_period_unit"] = worker_period_unit
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size

    @builtins.property
    def master_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property:

        masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        List size must be 3, Instance Type can be repeated.
        """
        result = self._values.get("master_instance_types")
        assert result is not None, "Required property 'master_instance_types' is missing"
        return result

    @builtins.property
    def master_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        """
        result = self._values.get("master_v_switch_ids")
        assert result is not None, "Required property 'master_v_switch_ids' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC ID.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        """
        result = self._values.get("worker_instance_types")
        assert result is not None, "Required property 'worker_instance_types' is missing"
        return result

    @builtins.property
    def worker_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: workerVSwitchIds: The virtual switch ID of the worker node.
        """
        result = self._values.get("worker_v_switch_ids")
        assert result is not None, "Required property 'worker_v_switch_ids' is missing"
        return result

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.AddonsProperty]]]]:
        """
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        """
        result = self._values.get("addons")
        return result

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        """
        result = self._values.get("cloud_monitor_flags")
        return result

    @builtins.property
    def container_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        """
        result = self._values.get("container_cidr")
        return result

    @builtins.property
    def cpu_policy(self) -> typing.Optional[builtins.str]:
        """
        :Property: cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies. The default is none.
        """
        result = self._values.get("cpu_policy")
        return result

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        """
        result = self._values.get("disable_rollback")
        return result

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        """
        result = self._values.get("endpoint_public_access")
        return result

    @builtins.property
    def key_pair(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("key_pair")
        return result

    @builtins.property
    def kubernetes_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: kubernetesVersion: Kubernetes version. Default to 1.14.8-aliyun.1, 1.16.9-aliyun.1 and so on .
        """
        result = self._values.get("kubernetes_version")
        return result

    @builtins.property
    def login_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("login_password")
        return result

    @builtins.property
    def master_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        masterAutoRenew: Whether the master node automatically renews. It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        """
        result = self._values.get("master_auto_renew")
        return result

    @builtins.property
    def master_auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        """
        result = self._values.get("master_auto_renew_period")
        return result

    @builtins.property
    def master_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
        """
        result = self._values.get("master_count")
        return result

    @builtins.property
    def master_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        masterDataDisk: Whether the master node mounts data disks can be selected as:
        true: mount the data disk
        false: no data disk is mounted, default is false
        """
        result = self._values.get("master_data_disk")
        return result

    @builtins.property
    def master_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.MasterDataDisksProperty]]]]:
        """
        :Property: masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
        """
        result = self._values.get("master_data_disks")
        return result

    @builtins.property
    def master_instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterInstanceChargeType: Master node payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        """
        result = self._values.get("master_instance_charge_type")
        return result

    @builtins.property
    def master_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        masterPeriod: The duration of the annual subscription and monthly subscription. It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        """
        result = self._values.get("master_period")
        return result

    @builtins.property
    def master_period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month
        """
        result = self._values.get("master_period_unit")
        return result

    @builtins.property
    def master_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        masterSystemDiskCategory: Master disk system disk type. The value range is:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_ssd.
        """
        result = self._values.get("master_system_disk_category")
        return result

    @builtins.property
    def master_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        masterSystemDiskSize: Master disk system disk size in GiB.
        Default to 120.
        """
        result = self._values.get("master_system_disk_size")
        return result

    @builtins.property
    def node_port_range(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        nodePortRange: Node service port. The value range is [30000, 65535].
        Default to 30000-65535.
        """
        result = self._values.get("node_port_range")
        return result

    @builtins.property
    def num_of_nodes(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        """
        result = self._values.get("num_of_nodes")
        return result

    @builtins.property
    def proxy_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        """
        result = self._values.get("proxy_mode")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        result = self._values.get("service_cidr")
        return result

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        """
        result = self._values.get("snat_entry")
        return result

    @builtins.property
    def ssh_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        sshFlags: Whether to enable public network SSH login:
        true: open
        false: not open
        """
        result = self._values.get("ssh_flags")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tag the cluster.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        """
        result = self._values.get("taint")
        return result

    @builtins.property
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        """
        result = self._values.get("timeout_mins")
        return result

    @builtins.property
    def worker_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        """
        result = self._values.get("worker_auto_renew")
        return result

    @builtins.property
    def worker_auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        """
        result = self._values.get("worker_auto_renew_period")
        return result

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        """
        result = self._values.get("worker_data_disk")
        return result

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosKubernetesCluster.WorkerDataDisksProperty]]]]:
        """
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        """
        result = self._values.get("worker_data_disks")
        return result

    @builtins.property
    def worker_instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerInstanceChargeType: Worker node payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        """
        result = self._values.get("worker_instance_charge_type")
        return result

    @builtins.property
    def worker_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        """
        result = self._values.get("worker_period")
        return result

    @builtins.property
    def worker_period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month.
        """
        result = self._values.get("worker_period_unit")
        return result

    @builtins.property
    def worker_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        """
        result = self._values.get("worker_system_disk_category")
        return result

    @builtins.property
    def worker_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        """
        result = self._values.get("worker_system_disk_size")
        return result

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
    """A ROS template type:  ``ALIYUN::CS::ManagedEdgeKubernetesCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosManagedEdgeKubernetesClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosManagedEdgeKubernetesCluster, self, [scope, id, props, enable_resource_property_constraint])

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
        :Attribute: ClusterId: Cluster instance ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> typing.Any:
        """
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        """
        return jsii.get(self, "attrTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> typing.Any:
        """
        :Attribute: WorkerRamRoleName: Worker ram role name.
        """
        return jsii.get(self, "attrWorkerRamRoleName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tag the cluster.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="numOfNodes")
    def num_of_nodes(self) -> jsii.Number:
        """
        :Property: numOfNodes: Number of worker nodes. The range is [0,300]
        """
        return jsii.get(self, "numOfNodes")

    @num_of_nodes.setter # type: ignore
    def num_of_nodes(self, value: jsii.Number) -> None:
        jsii.set(self, "numOfNodes", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cloudMonitorFlags")
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        """
        return jsii.get(self, "cloudMonitorFlags")

    @cloud_monitor_flags.setter # type: ignore
    def cloud_monitor_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cloudMonitorFlags", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="containerCidr")
    def container_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        """
        return jsii.get(self, "containerCidr")

    @container_cidr.setter # type: ignore
    def container_cidr(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "containerCidr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="disableRollback")
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        """
        return jsii.get(self, "disableRollback")

    @disable_rollback.setter # type: ignore
    def disable_rollback(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "disableRollback", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        """
        return jsii.get(self, "endpointPublicAccess")

    @endpoint_public_access.setter # type: ignore
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="keyPair")
    def key_pair(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        """
        return jsii.get(self, "keyPair")

    @key_pair.setter # type: ignore
    def key_pair(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "keyPair", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="loginPassword")
    def login_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        """
        return jsii.get(self, "loginPassword")

    @login_password.setter # type: ignore
    def login_password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "loginPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="profile")
    def profile(self) -> typing.Optional[builtins.str]:
        """
        :Property: profile: Edge cluster ID. The default value is Edge.
        """
        return jsii.get(self, "profile")

    @profile.setter # type: ignore
    def profile(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "profile", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="proxyMode")
    def proxy_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        """
        return jsii.get(self, "proxyMode")

    @proxy_mode.setter # type: ignore
    def proxy_mode(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "proxyMode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        return jsii.get(self, "serviceCidr")

    @service_cidr.setter # type: ignore
    def service_cidr(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "serviceCidr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="snatEntry")
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        """
        return jsii.get(self, "snatEntry")

    @snat_entry.setter # type: ignore
    def snat_entry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "snatEntry", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        """
        return jsii.get(self, "timeoutMins")

    @timeout_mins.setter # type: ignore
    def timeout_mins(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "timeoutMins", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        """
        return jsii.get(self, "vSwitchIds")

    @v_switch_ids.setter # type: ignore
    def v_switch_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerDataDisk")
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        """
        return jsii.get(self, "workerDataDisk")

    @worker_data_disk.setter # type: ignore
    def worker_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerDataDisk", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerDataDiskCategory")
    def worker_data_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property: workerDataDiskCategory: Data disk type.
        """
        return jsii.get(self, "workerDataDiskCategory")

    @worker_data_disk_category.setter # type: ignore
    def worker_data_disk_category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "workerDataDiskCategory", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerDataDiskSize")
    def worker_data_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property: workerDataDiskSize: Data disk size in GiB.
        """
        return jsii.get(self, "workerDataDiskSize")

    @worker_data_disk_size.setter # type: ignore
    def worker_data_disk_size(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "workerDataDiskSize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerSystemDiskCategory")
    def worker_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerSystemDiskCategory: Worker node system disk type.
        Default to cloud_efficiency.
        """
        return jsii.get(self, "workerSystemDiskCategory")

    @worker_system_disk_category.setter # type: ignore
    def worker_system_disk_category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "workerSystemDiskCategory", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerSystemDiskSize")
    def worker_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        """
        return jsii.get(self, "workerSystemDiskSize")

    @worker_system_disk_size.setter # type: ignore
    def worker_system_disk_size(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "workerSystemDiskSize", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "num_of_nodes": "numOfNodes",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "container_cidr": "containerCidr",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "key_pair": "keyPair",
        "login_password": "loginPassword",
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
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
    },
)
class RosManagedEdgeKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: builtins.str,
        num_of_nodes: jsii.Number,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[builtins.str] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[builtins.str] = None,
        login_password: typing.Optional[builtins.str] = None,
        profile: typing.Optional[builtins.str] = None,
        proxy_mode: typing.Optional[builtins.str] = None,
        service_cidr: typing.Optional[builtins.str] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        timeout_mins: typing.Optional[jsii.Number] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disk_category: typing.Optional[builtins.str] = None,
        worker_data_disk_size: typing.Optional[jsii.Number] = None,
        worker_system_disk_category: typing.Optional[builtins.str] = None,
        worker_system_disk_size: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

        :param name: 
        :param num_of_nodes: 
        :param cloud_monitor_flags: 
        :param container_cidr: 
        :param disable_rollback: 
        :param endpoint_public_access: 
        :param key_pair: 
        :param login_password: 
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
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "num_of_nodes": num_of_nodes,
        }
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if login_password is not None:
            self._values["login_password"] = login_password
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
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def num_of_nodes(self) -> jsii.Number:
        """
        :Property: numOfNodes: Number of worker nodes. The range is [0,300]
        """
        result = self._values.get("num_of_nodes")
        assert result is not None, "Required property 'num_of_nodes' is missing"
        return result

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        """
        result = self._values.get("cloud_monitor_flags")
        return result

    @builtins.property
    def container_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        """
        result = self._values.get("container_cidr")
        return result

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        """
        result = self._values.get("disable_rollback")
        return result

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        """
        result = self._values.get("endpoint_public_access")
        return result

    @builtins.property
    def key_pair(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("key_pair")
        return result

    @builtins.property
    def login_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("login_password")
        return result

    @builtins.property
    def profile(self) -> typing.Optional[builtins.str]:
        """
        :Property: profile: Edge cluster ID. The default value is Edge.
        """
        result = self._values.get("profile")
        return result

    @builtins.property
    def proxy_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        """
        result = self._values.get("proxy_mode")
        return result

    @builtins.property
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        result = self._values.get("service_cidr")
        return result

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        """
        result = self._values.get("snat_entry")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tag the cluster.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        """
        result = self._values.get("timeout_mins")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        """
        result = self._values.get("v_switch_ids")
        return result

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        """
        result = self._values.get("worker_data_disk")
        return result

    @builtins.property
    def worker_data_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property: workerDataDiskCategory: Data disk type.
        """
        result = self._values.get("worker_data_disk_category")
        return result

    @builtins.property
    def worker_data_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property: workerDataDiskSize: Data disk size in GiB.
        """
        result = self._values.get("worker_data_disk_size")
        return result

    @builtins.property
    def worker_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerSystemDiskCategory: Worker node system disk type.
        Default to cloud_efficiency.
        """
        result = self._values.get("worker_system_disk_category")
        return result

    @builtins.property
    def worker_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        """
        result = self._values.get("worker_system_disk_size")
        return result

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
    """A ROS template type:  ``ALIYUN::CS::ManagedKubernetesCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosManagedKubernetesClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CS::ManagedKubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosManagedKubernetesCluster, self, [scope, id, props, enable_resource_property_constraint])

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
        :Attribute: ClusterId: Cluster instance ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> typing.Any:
        """
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        """
        return jsii.get(self, "attrTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> typing.Any:
        """
        :Attribute: WorkerRamRoleName: Worker ram role name.
        """
        return jsii.get(self, "attrWorkerRamRoleName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tag the cluster.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC ID.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: builtins.str) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        """
        return jsii.get(self, "vSwitchIds")

    @v_switch_ids.setter # type: ignore
    def v_switch_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerInstanceTypes")
    def worker_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        """
        return jsii.get(self, "workerInstanceTypes")

    @worker_instance_types.setter # type: ignore
    def worker_instance_types(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "workerInstanceTypes", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]]:
        """
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        """
        return jsii.get(self, "addons")

    @addons.setter # type: ignore
    def addons(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]],
    ) -> None:
        jsii.set(self, "addons", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cloudMonitorFlags")
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        """
        return jsii.get(self, "cloudMonitorFlags")

    @cloud_monitor_flags.setter # type: ignore
    def cloud_monitor_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cloudMonitorFlags", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="containerCidr")
    def container_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        """
        return jsii.get(self, "containerCidr")

    @container_cidr.setter # type: ignore
    def container_cidr(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "containerCidr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="disableRollback")
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        """
        return jsii.get(self, "disableRollback")

    @disable_rollback.setter # type: ignore
    def disable_rollback(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "disableRollback", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        """
        return jsii.get(self, "endpointPublicAccess")

    @endpoint_public_access.setter # type: ignore
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="keyPair")
    def key_pair(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        """
        return jsii.get(self, "keyPair")

    @key_pair.setter # type: ignore
    def key_pair(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "keyPair", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="kubernetesVersion")
    def kubernetes_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: kubernetesVersion: Kubernetes version. Default to 1.16.9-aliyun.1, 1.14.8-aliyun.1 and so on.
        """
        return jsii.get(self, "kubernetesVersion")

    @kubernetes_version.setter # type: ignore
    def kubernetes_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "kubernetesVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="loginPassword")
    def login_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        """
        return jsii.get(self, "loginPassword")

    @login_password.setter # type: ignore
    def login_password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "loginPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="numOfNodes")
    def num_of_nodes(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        """
        return jsii.get(self, "numOfNodes")

    @num_of_nodes.setter # type: ignore
    def num_of_nodes(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "numOfNodes", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="proxyMode")
    def proxy_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        """
        return jsii.get(self, "proxyMode")

    @proxy_mode.setter # type: ignore
    def proxy_mode(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "proxyMode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        return jsii.get(self, "serviceCidr")

    @service_cidr.setter # type: ignore
    def service_cidr(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "serviceCidr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="snatEntry")
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        """
        return jsii.get(self, "snatEntry")

    @snat_entry.setter # type: ignore
    def snat_entry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "snatEntry", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="taint")
    def taint(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        """
        return jsii.get(self, "taint")

    @taint.setter # type: ignore
    def taint(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "taint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        """
        return jsii.get(self, "timeoutMins")

    @timeout_mins.setter # type: ignore
    def timeout_mins(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "timeoutMins", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerAutoRenew")
    def worker_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        """
        return jsii.get(self, "workerAutoRenew")

    @worker_auto_renew.setter # type: ignore
    def worker_auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerAutoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerAutoRenewPeriod")
    def worker_auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        """
        return jsii.get(self, "workerAutoRenewPeriod")

    @worker_auto_renew_period.setter # type: ignore
    def worker_auto_renew_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "workerAutoRenewPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerDataDisk")
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        """
        return jsii.get(self, "workerDataDisk")

    @worker_data_disk.setter # type: ignore
    def worker_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "workerDataDisk", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerDataDisks")
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]]:
        """
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        """
        return jsii.get(self, "workerDataDisks")

    @worker_data_disks.setter # type: ignore
    def worker_data_disks(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]],
    ) -> None:
        jsii.set(self, "workerDataDisks", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerInstanceChargeType")
    def worker_instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerInstanceChargeType: Worker node payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        """
        return jsii.get(self, "workerInstanceChargeType")

    @worker_instance_charge_type.setter # type: ignore
    def worker_instance_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "workerInstanceChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerPeriod")
    def worker_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        """
        return jsii.get(self, "workerPeriod")

    @worker_period.setter # type: ignore
    def worker_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "workerPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerPeriodUnit")
    def worker_period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month.
        """
        return jsii.get(self, "workerPeriodUnit")

    @worker_period_unit.setter # type: ignore
    def worker_period_unit(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "workerPeriodUnit", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerSystemDiskCategory")
    def worker_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        """
        return jsii.get(self, "workerSystemDiskCategory")

    @worker_system_disk_category.setter # type: ignore
    def worker_system_disk_category(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "workerSystemDiskCategory", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="workerSystemDiskSize")
    def worker_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        """
        return jsii.get(self, "workerSystemDiskSize")

    @worker_system_disk_size.setter # type: ignore
    def worker_system_disk_size(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "workerSystemDiskSize", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "config": "config", "version": "version"},
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: builtins.str,
            config: typing.Optional[builtins.str] = None,
            version: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param name: 
            :param config: 
            :param version: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def name(self) -> builtins.str:
            """
            :Property: name: Addon plugin name
            """
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return result

        @builtins.property
        def config(self) -> typing.Optional[builtins.str]:
            """
            :Property: config: When the value is empty, no configuration is required.
            """
            result = self._values.get("config")
            return result

        @builtins.property
        def version(self) -> typing.Optional[builtins.str]:
            """
            :Property: version: When the value is empty, the latest version is selected by default.
            """
            result = self._values.get("version")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.WorkerDataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size"},
    )
    class WorkerDataDisksProperty:
        def __init__(self, *, category: builtins.str, size: jsii.Number) -> None:
            """
            :param category: 
            :param size: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "category": category,
                "size": size,
            }

        @builtins.property
        def category(self) -> builtins.str:
            """
            :Property:

            category: Data disk type. Value includes:
            cloud: ordinary cloud disk
            cloud_efficiency: efficient cloud disk
            cloud_ssd: SSD cloud disk
            """
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return result

        @builtins.property
        def size(self) -> jsii.Number:
            """
            :Property: size: Data disk size in GiB.
            """
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return result

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
        "cloud_monitor_flags": "cloudMonitorFlags",
        "container_cidr": "containerCidr",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "login_password": "loginPassword",
        "num_of_nodes": "numOfNodes",
        "proxy_mode": "proxyMode",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "worker_auto_renew": "workerAutoRenew",
        "worker_auto_renew_period": "workerAutoRenewPeriod",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_instance_charge_type": "workerInstanceChargeType",
        "worker_period": "workerPeriod",
        "worker_period_unit": "workerPeriodUnit",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
    },
)
class RosManagedKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: builtins.str,
        vpc_id: builtins.str,
        v_switch_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        worker_instance_types: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.AddonsProperty]]]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        container_cidr: typing.Optional[builtins.str] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_pair: typing.Optional[builtins.str] = None,
        kubernetes_version: typing.Optional[builtins.str] = None,
        login_password: typing.Optional[builtins.str] = None,
        num_of_nodes: typing.Optional[jsii.Number] = None,
        proxy_mode: typing.Optional[builtins.str] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        service_cidr: typing.Optional[builtins.str] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        taint: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        timeout_mins: typing.Optional[jsii.Number] = None,
        worker_auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_auto_renew_period: typing.Optional[jsii.Number] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.WorkerDataDisksProperty]]]] = None,
        worker_instance_charge_type: typing.Optional[builtins.str] = None,
        worker_period: typing.Optional[jsii.Number] = None,
        worker_period_unit: typing.Optional[builtins.str] = None,
        worker_system_disk_category: typing.Optional[builtins.str] = None,
        worker_system_disk_size: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CS::ManagedKubernetesCluster``.

        :param name: 
        :param vpc_id: 
        :param v_switch_ids: 
        :param worker_instance_types: 
        :param addons: 
        :param cloud_monitor_flags: 
        :param container_cidr: 
        :param disable_rollback: 
        :param endpoint_public_access: 
        :param key_pair: 
        :param kubernetes_version: 
        :param login_password: 
        :param num_of_nodes: 
        :param proxy_mode: 
        :param security_group_id: 
        :param service_cidr: 
        :param snat_entry: 
        :param tags: 
        :param taint: 
        :param timeout_mins: 
        :param worker_auto_renew: 
        :param worker_auto_renew_period: 
        :param worker_data_disk: 
        :param worker_data_disks: 
        :param worker_instance_charge_type: 
        :param worker_period: 
        :param worker_period_unit: 
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "vpc_id": vpc_id,
            "v_switch_ids": v_switch_ids,
            "worker_instance_types": worker_instance_types,
        }
        if addons is not None:
            self._values["addons"] = addons
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if login_password is not None:
            self._values["login_password"] = login_password
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if worker_auto_renew is not None:
            self._values["worker_auto_renew"] = worker_auto_renew
        if worker_auto_renew_period is not None:
            self._values["worker_auto_renew_period"] = worker_auto_renew_period
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_instance_charge_type is not None:
            self._values["worker_instance_charge_type"] = worker_instance_charge_type
        if worker_period is not None:
            self._values["worker_period"] = worker_period
        if worker_period_unit is not None:
            self._values["worker_period_unit"] = worker_period_unit
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: VPC ID.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        """
        result = self._values.get("v_switch_ids")
        assert result is not None, "Required property 'v_switch_ids' is missing"
        return result

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        """
        result = self._values.get("worker_instance_types")
        assert result is not None, "Required property 'worker_instance_types' is missing"
        return result

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.AddonsProperty]]]]:
        """
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        """
        result = self._values.get("addons")
        return result

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        """
        result = self._values.get("cloud_monitor_flags")
        return result

    @builtins.property
    def container_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        """
        result = self._values.get("container_cidr")
        return result

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        """
        result = self._values.get("disable_rollback")
        return result

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        """
        result = self._values.get("endpoint_public_access")
        return result

    @builtins.property
    def key_pair(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("key_pair")
        return result

    @builtins.property
    def kubernetes_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: kubernetesVersion: Kubernetes version. Default to 1.16.9-aliyun.1, 1.14.8-aliyun.1 and so on.
        """
        result = self._values.get("kubernetes_version")
        return result

    @builtins.property
    def login_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        """
        result = self._values.get("login_password")
        return result

    @builtins.property
    def num_of_nodes(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        """
        result = self._values.get("num_of_nodes")
        return result

    @builtins.property
    def proxy_mode(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        """
        result = self._values.get("proxy_mode")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        result = self._values.get("service_cidr")
        return result

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        """
        result = self._values.get("snat_entry")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tag the cluster.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        """
        result = self._values.get("taint")
        return result

    @builtins.property
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        """
        result = self._values.get("timeout_mins")
        return result

    @builtins.property
    def worker_auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        """
        result = self._values.get("worker_auto_renew")
        return result

    @builtins.property
    def worker_auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        """
        result = self._values.get("worker_auto_renew_period")
        return result

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        """
        result = self._values.get("worker_data_disk")
        return result

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosManagedKubernetesCluster.WorkerDataDisksProperty]]]]:
        """
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        """
        result = self._values.get("worker_data_disks")
        return result

    @builtins.property
    def worker_instance_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerInstanceChargeType: Worker node payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        """
        result = self._values.get("worker_instance_charge_type")
        return result

    @builtins.property
    def worker_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        Default to 1.
        """
        result = self._values.get("worker_period")
        return result

    @builtins.property
    def worker_period_unit(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Default to Month.
        """
        result = self._values.get("worker_period_unit")
        return result

    @builtins.property
    def worker_system_disk_category(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        """
        result = self._values.get("worker_system_disk_category")
        return result

    @builtins.property
    def worker_system_disk_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        """
        result = self._values.get("worker_system_disk_size")
        return result

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
    """A ROS template type:  ``ALIYUN::CS::ServerlessKubernetesCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosServerlessKubernetesClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CS::ServerlessKubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosServerlessKubernetesCluster, self, [scope, id, props, enable_resource_property_constraint])

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
        :Attribute: ClusterId: Cluster instance ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> typing.Any:
        """
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        """
        return jsii.get(self, "attrTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> typing.Any:
        """
        :Attribute: WorkerRamRoleName: Worker ram role name.
        """
        return jsii.get(self, "attrWorkerRamRoleName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tag the cluster.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosServerlessKubernetesCluster.AddonsProperty"]]]]:
        """
        :Property: addons: The add-ons to be installed for the cluster.
        """
        return jsii.get(self, "addons")

    @addons.setter # type: ignore
    def addons(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosServerlessKubernetesCluster.AddonsProperty"]]]],
    ) -> None:
        jsii.set(self, "addons", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
        """
        return jsii.get(self, "endpointPublicAccess")

    @endpoint_public_access.setter # type: ignore
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="kubernetesVersion")
    def kubernetes_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: kubernetesVersion: Kubernetes version. Default to 1.14.8-aliyun.1, 1.16.9-aliyun.1 and so on .
        """
        return jsii.get(self, "kubernetesVersion")

    @kubernetes_version.setter # type: ignore
    def kubernetes_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "kubernetesVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="natGateway")
    def nat_gateway(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
        """
        return jsii.get(self, "natGateway")

    @nat_gateway.setter # type: ignore
    def nat_gateway(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "natGateway", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="privateZone")
    def private_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: privateZone: Whether to enable PrivateZone for service discovery.
        """
        return jsii.get(self, "privateZone")

    @private_zone.setter # type: ignore
    def private_zone(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "privateZone", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        """
        return jsii.get(self, "securityGroupId")

    @security_group_id.setter # type: ignore
    def security_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        return jsii.get(self, "serviceCidr")

    @service_cidr.setter # type: ignore
    def service_cidr(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "serviceCidr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
        Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        """
        return jsii.get(self, "vSwitchIds")

    @v_switch_ids.setter # type: ignore
    def v_switch_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone ID.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
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
            name: builtins.str,
            config: typing.Optional[builtins.str] = None,
            disabled: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param name: 
            :param config: 
            :param disabled: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if disabled is not None:
                self._values["disabled"] = disabled

        @builtins.property
        def name(self) -> builtins.str:
            """
            :Property: name: The name of the add-on.
            """
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return result

        @builtins.property
        def config(self) -> typing.Optional[builtins.str]:
            """
            :Property: config: When the value is empty, no configuration is required.
            """
            result = self._values.get("config")
            return result

        @builtins.property
        def disabled(self) -> typing.Optional[builtins.str]:
            """
            :Property: disabled: Specifies whether to disable default installation.
            """
            result = self._values.get("disabled")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
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
        name: builtins.str,
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerlessKubernetesCluster.AddonsProperty]]]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        kubernetes_version: typing.Optional[builtins.str] = None,
        nat_gateway: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        private_zone: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        service_cidr: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CS::ServerlessKubernetesCluster``.

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
        """
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
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerlessKubernetesCluster.AddonsProperty]]]]:
        """
        :Property: addons: The add-ons to be installed for the cluster.
        """
        result = self._values.get("addons")
        return result

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
        """
        result = self._values.get("endpoint_public_access")
        return result

    @builtins.property
    def kubernetes_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: kubernetesVersion: Kubernetes version. Default to 1.14.8-aliyun.1, 1.16.9-aliyun.1 and so on .
        """
        result = self._values.get("kubernetes_version")
        return result

    @builtins.property
    def nat_gateway(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
        """
        result = self._values.get("nat_gateway")
        return result

    @builtins.property
    def private_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: privateZone: Whether to enable PrivateZone for service discovery.
        """
        result = self._values.get("private_zone")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        result = self._values.get("service_cidr")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tag the cluster.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
        Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        """
        result = self._values.get("v_switch_ids")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone ID.
        """
        result = self._values.get("zone_id")
        return result

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
    """A ROS resource type:  ``ALIYUN::CS::ServerlessKubernetesCluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ServerlessKubernetesClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CS::ServerlessKubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ServerlessKubernetesCluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster instance ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> typing.Any:
        """
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        """
        return jsii.get(self, "attrTaskId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> typing.Any:
        """
        :Attribute: WorkerRamRoleName: Worker ram role name.
        """
        return jsii.get(self, "attrWorkerRamRoleName")


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
        name: builtins.str,
        addons: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerlessKubernetesCluster.AddonsProperty]]]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        kubernetes_version: typing.Optional[builtins.str] = None,
        nat_gateway: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        private_zone: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        security_group_id: typing.Optional[builtins.str] = None,
        service_cidr: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CS::ServerlessKubernetesCluster``.

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
        """
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
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerlessKubernetesCluster.AddonsProperty]]]]:
        """
        :Property: addons: The add-ons to be installed for the cluster.
        """
        result = self._values.get("addons")
        return result

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
        """
        result = self._values.get("endpoint_public_access")
        return result

    @builtins.property
    def kubernetes_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: kubernetesVersion: Kubernetes version. Default to 1.14.8-aliyun.1, 1.16.9-aliyun.1 and so on .
        """
        result = self._values.get("kubernetes_version")
        return result

    @builtins.property
    def nat_gateway(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
        """
        result = self._values.get("nat_gateway")
        return result

    @builtins.property
    def private_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: privateZone: Whether to enable PrivateZone for service discovery.
        """
        result = self._values.get("private_zone")
        return result

    @builtins.property
    def security_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        """
        result = self._values.get("security_group_id")
        return result

    @builtins.property
    def service_cidr(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        """
        result = self._values.get("service_cidr")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tag the cluster.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property:

        vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
        Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        """
        result = self._values.get("v_switch_ids")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The zone ID.
        """
        result = self._values.get("zone_id")
        return result

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
    "KubernetesCluster",
    "KubernetesClusterProps",
    "ManagedEdgeKubernetesCluster",
    "ManagedEdgeKubernetesClusterProps",
    "ManagedKubernetesCluster",
    "ManagedKubernetesClusterProps",
    "RosAnyCluster",
    "RosAnyClusterProps",
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
