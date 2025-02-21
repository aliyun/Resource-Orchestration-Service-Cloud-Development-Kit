'''
## Aliyun ROS ACS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ACS from '@alicloud/ros-cdk-acs';
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-acs.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "addons": "addons",
        "cluster_spec": "clusterSpec",
        "deletion_protection": "deletionProtection",
        "endpoint_public_access": "endpointPublicAccess",
        "ip_stack": "ipStack",
        "kubernetes_version": "kubernetesVersion",
        "load_balancer_spec": "loadBalancerSpec",
        "logging_type": "loggingType",
        "maintenance_window": "maintenanceWindow",
        "pod_v_switch_ids": "podVSwitchIds",
        "resource_group_id": "resourceGroupId",
        "service_cidr": "serviceCidr",
        "service_discovery_types": "serviceDiscoveryTypes",
        "sls_project_name": "slsProjectName",
        "snat_entry": "snatEntry",
        "tags": "tags",
        "time_zone": "timeZone",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "zone_ids": "zoneIds",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.AddonsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_stack: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        logging_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintenance_window: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCluster.MaintenanceWindowProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        pod_v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_discovery_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        sls_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``Cluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster

        :param name: Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        :param addons: Property addons: The add-ons to be installed for the cluster.
        :param cluster_spec: Property clusterSpec: The managed cluster spec. Value: ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster". ack.standard: Standard hosting cluster. Default value: ack.pro.small.
        :param deletion_protection: Property deletionProtection: Specifies whether to enable deletion protection for the cluster. After deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster. false: disables deletion protection for the cluster. Default value: false.
        :param endpoint_public_access: Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        :param ip_stack: Property ipStack: The IP stack of the cluster.
        :param kubernetes_version: Property kubernetesVersion: The version of the Kubernetes cluster.
        :param load_balancer_spec: Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        :param logging_type: Property loggingType: The logging type of the cluster. By default, no logging service is used.
        :param maintenance_window: Property maintenanceWindow: The maintenance window of the cluster.
        :param pod_v_switch_ids: Property podVSwitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, you must specify at least one pod vSwitch in the same zone. The pod vSwitches cannot be the same as the node vSwitches. We recommend that you set the mask length of the CIDR block to a value no greater than 19 for the pod vSwitches. The pod_vswitch_ids parameter is required when the Terway network plug-in is selected for the cluster.
        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param service_cidr: Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        :param service_discovery_types: Property serviceDiscoveryTypes: Intra-cluster service discovery type, used to specify the service discovery method in the ASK cluster. CoreDNS: To use Kubernetes native standard service discovery component CoreDNS, a set of containers needs to be deployed in the cluster for DNS resolution. By default, two ECI instances with a size of 0.25 Core and 512 MiB are used. PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities, the PrivateZone service needs to be enabled. Default value: off
        :param sls_project_name: Property slsProjectName: The SLS project name of the cluster. If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
        :param snat_entry: Property snatEntry: Whether to configure SNAT for the network. When a VPC can access the public network environment, set it to false. When an existing VPC cannot access the public network environment: When set to True, SNAT is configured and the public network environment can be accessed at this time. If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time. Default to true.
        :param tags: Property tags: Tag the cluster.
        :param time_zone: Property timeZone: The time zone of the cluster.
        :param vpc_id: Property vpcId: VPC ID.
        :param v_switch_ids: Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch. Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        :param zone_ids: Property zoneIds: The zone IDs of the cluster.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__244af60392b2d2f4b2412168c3ce76918444a1112e2701fb52f590a372364a73)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument endpoint_public_access", value=endpoint_public_access, expected_type=type_hints["endpoint_public_access"])
            check_type(argname="argument ip_stack", value=ip_stack, expected_type=type_hints["ip_stack"])
            check_type(argname="argument kubernetes_version", value=kubernetes_version, expected_type=type_hints["kubernetes_version"])
            check_type(argname="argument load_balancer_spec", value=load_balancer_spec, expected_type=type_hints["load_balancer_spec"])
            check_type(argname="argument logging_type", value=logging_type, expected_type=type_hints["logging_type"])
            check_type(argname="argument maintenance_window", value=maintenance_window, expected_type=type_hints["maintenance_window"])
            check_type(argname="argument pod_v_switch_ids", value=pod_v_switch_ids, expected_type=type_hints["pod_v_switch_ids"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument service_cidr", value=service_cidr, expected_type=type_hints["service_cidr"])
            check_type(argname="argument service_discovery_types", value=service_discovery_types, expected_type=type_hints["service_discovery_types"])
            check_type(argname="argument sls_project_name", value=sls_project_name, expected_type=type_hints["sls_project_name"])
            check_type(argname="argument snat_entry", value=snat_entry, expected_type=type_hints["snat_entry"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument time_zone", value=time_zone, expected_type=type_hints["time_zone"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument zone_ids", value=zone_ids, expected_type=type_hints["zone_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if addons is not None:
            self._values["addons"] = addons
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if ip_stack is not None:
            self._values["ip_stack"] = ip_stack
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if logging_type is not None:
            self._values["logging_type"] = logging_type
        if maintenance_window is not None:
            self._values["maintenance_window"] = maintenance_window
        if pod_v_switch_ids is not None:
            self._values["pod_v_switch_ids"] = pod_v_switch_ids
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if service_discovery_types is not None:
            self._values["service_discovery_types"] = service_discovery_types
        if sls_project_name is not None:
            self._values["sls_project_name"] = sls_project_name
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if tags is not None:
            self._values["tags"] = tags
        if time_zone is not None:
            self._values["time_zone"] = time_zone
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids
        if zone_ids is not None:
            self._values["zone_ids"] = zone_ids

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the cluster.

        The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AddonsProperty"]]]]:
        '''Property addons: The add-ons to be installed for the cluster.'''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AddonsProperty"]]]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterSpec: The managed cluster spec.

        Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.pro.small.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionProtection: Specifies whether to enable deletion protection for the cluster.

        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.

        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_stack(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipStack: The IP stack of the cluster.'''
        result = self._values.get("ip_stack")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kubernetesVersion: The version of the Kubernetes cluster.'''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerSpec: The specification of the Server Load Balancer instance.

        Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def logging_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loggingType: The logging type of the cluster.

        By default, no logging service is used.
        '''
        result = self._values.get("logging_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maintenance_window(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.MaintenanceWindowProperty"]]:
        '''Property maintenanceWindow: The maintenance window of the cluster.'''
        result = self._values.get("maintenance_window")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.MaintenanceWindowProperty"]], result)

    @builtins.property
    def pod_v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property podVSwitchIds: The list of pod vSwitches.

        For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        result = self._values.get("pod_v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.

        When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_discovery_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property serviceDiscoveryTypes: Intra-cluster service discovery type, used to specify the service discovery method in the ASK cluster.

        CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
        a set of containers needs to be deployed in the cluster for DNS resolution.
        By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
        PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
        the PrivateZone service needs to be enabled.
        Default value: off
        '''
        result = self._values.get("service_discovery_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def sls_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slsProjectName: The SLS project name of the cluster.

        If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
        '''
        result = self._values.get("sls_project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snatEntry: Whether to configure SNAT for the network.

        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosCluster.TagsProperty"]]:
        '''Property tags: Tag the cluster.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosCluster.TagsProperty"]], result)

    @builtins.property
    def time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeZone: The time zone of the cluster.'''
        result = self._values.get("time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: VPC ID.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property vSwitchIds: The IDs of VSwitches.

        If you leave this property empty, the system automatically creates a VSwitch.
        Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        '''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property zoneIds: The zone IDs of the cluster.'''
        result = self._values.get("zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-acs.ICluster")
class ICluster(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Cluster``.'''

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster instance ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIngressSlbId")
    def attr_ingress_slb_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IngressSLBId: The id of ingress SLB.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Nodes: The list of cluster nodes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroupId: Scaling group id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterProps:
        ...


class _IClusterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Cluster``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-acs.ICluster"

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrIngressSlbId")
    def attr_ingress_slb_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IngressSLBId: The id of ingress SLB.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIngressSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkerRamRoleName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterProps:
        return typing.cast(ClusterProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICluster).__jsii_proxy_class__ = lambda : _IClusterProxy


class RosCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-acs.RosCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ACS::Cluster``, which is used to create a Container Compute Service (ACS) cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Cluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0aea5d6f246e8946ab82367918fa0edec7ea8826837865435d2d03e7c6d85a12)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d7b65eeea6a42eef3d0844488d34667939ce04fdfc1c8ce40e1726ddef78da22)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: APIServerSLBId: The id of API server SLB
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrIngressSlbId")
    def attr_ingress_slb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IngressSLBId: The id of ingress SLB
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIngressSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Nodes: The list of cluster nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: Scaling configuration id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleId: Scaling rule id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkerRamRoleName: Worker ram role name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5bd8676db1bf098427949538794fee660165a8e52d1893918ead79efc34da4bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e688c2d8e52ef852ee9445927c2e2c17b047d8c9f500d4c72955a96660740a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AddonsProperty"]]]]:
        '''
        :Property: addons: The add-ons to be installed for the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AddonsProperty"]]]], jsii.get(self, "addons"))

    @addons.setter
    def addons(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.AddonsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14c071ca3acd81118184711678ecb42f117078013cb4e44193b88a09466198d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addons", value)

    @builtins.property
    @jsii.member(jsii_name="clusterSpec")
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterSpec: The managed cluster spec. Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.pro.small.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterSpec"))

    @cluster_spec.setter
    def cluster_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80d3f05aef503f0290c06d10c3cbe03c872f6c77c54e8f6986a29c302f85d8e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterSpec", value)

    @builtins.property
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aecd1445bc10cc8ae7277fdc3d6d796acfb51c55ad3c65876c44f14fb4fa633f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionProtection", value)

    @builtins.property
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointPublicAccess"))

    @endpoint_public_access.setter
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06b3678739cc2e54c3722f812c73b8bbc9fa278c6edeafb0f8813284886f54a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property
    @jsii.member(jsii_name="ipStack")
    def ip_stack(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipStack: The IP stack of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipStack"))

    @ip_stack.setter
    def ip_stack(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9604744dc58c9017547b2e0bfc57b4adbf7cefa200c6aed3960ac773c46efbf4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipStack", value)

    @builtins.property
    @jsii.member(jsii_name="kubernetesVersion")
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kubernetesVersion"))

    @kubernetes_version.setter
    def kubernetes_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5bbddaf4378d92fa1e96e697f563deb681cc762b324638d0633d233a17e9473)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kubernetesVersion", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerSpec")
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerSpec"))

    @load_balancer_spec.setter
    def load_balancer_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cabf6c30552d73e2537f9963af603020f3f8fd4ea7a566e59c37c3910e946ace)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerSpec", value)

    @builtins.property
    @jsii.member(jsii_name="loggingType")
    def logging_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loggingType: The logging type of the cluster. By default, no logging service is used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loggingType"))

    @logging_type.setter
    def logging_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b37a6553c90df24a53cb868efa81d52d89298656e599918215b0977685318398)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loggingType", value)

    @builtins.property
    @jsii.member(jsii_name="maintenanceWindow")
    def maintenance_window(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.MaintenanceWindowProperty"]]:
        '''
        :Property: maintenanceWindow: The maintenance window of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.MaintenanceWindowProperty"]], jsii.get(self, "maintenanceWindow"))

    @maintenance_window.setter
    def maintenance_window(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCluster.MaintenanceWindowProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa0cef3eb070747375b72e8679427c13e079ab2fbe3bdf8e9b2d2eecb5902c41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maintenanceWindow", value)

    @builtins.property
    @jsii.member(jsii_name="podVSwitchIds")
    def pod_v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        podVSwitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "podVSwitchIds"))

    @pod_v_switch_ids.setter
    def pod_v_switch_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c26ad2da1014151dc9b3c3fa0ad3a0ef9d7b5ffa61042ea64b4b49d484612910)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "podVSwitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35e05a7806675ada756dc2425f2cc5bfd927675fe088afe0b40b32524e02dba5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceCidr"))

    @service_cidr.setter
    def service_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09c119c1a8c2be9b43bc208f08f7f4c15afade1c87b0216bc2216719d99401af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceCidr", value)

    @builtins.property
    @jsii.member(jsii_name="serviceDiscoveryTypes")
    def service_discovery_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        serviceDiscoveryTypes: Intra-cluster service discovery type,
        used to specify the service discovery method in the ASK cluster.
        CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
        a set of containers needs to be deployed in the cluster for DNS resolution.
        By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
        PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
        the PrivateZone service needs to be enabled.
        Default value: off
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "serviceDiscoveryTypes"))

    @service_discovery_types.setter
    def service_discovery_types(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27316651f7bc235ee8c23a35f95faef846327b9024c045ce6512983ee101ba8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceDiscoveryTypes", value)

    @builtins.property
    @jsii.member(jsii_name="slsProjectName")
    def sls_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsProjectName: The SLS project name of the cluster. If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slsProjectName"))

    @sls_project_name.setter
    def sls_project_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da4c4fdcc85092cf1ea3dd46fd1632db575577344d007a2f2075dc6bd0eed7a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsProjectName", value)

    @builtins.property
    @jsii.member(jsii_name="snatEntry")
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snatEntry"))

    @snat_entry.setter
    def snat_entry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3246bf885b27412a94a159497a05086c1eff4a4fe70a99bf6c569ef73ca9ec6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snatEntry", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosCluster.TagsProperty"]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        return typing.cast(typing.Optional[typing.List["RosCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosCluster.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22b7f9f90d2f5bd5ec59dd709d9b8d30022f315e0d87f297391d4254dae5d315)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="timeZone")
    def time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeZone: The time zone of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeZone"))

    @time_zone.setter
    def time_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1b2121426df69708eed16d26b9d6fc5993feacf83641752e806888f9432abb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeZone", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: VPC ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3aec726ffecdf9f80699d01b99158e6082bf1d229d6d0c5b9574a5d0211d6a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
        Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "vSwitchIds"))

    @v_switch_ids.setter
    def v_switch_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b6009637465585294c5d1c6595dcb1dc1c623626601186f99f20bc14fd0d169)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="zoneIds")
    def zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: zoneIds: The zone IDs of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "zoneIds"))

    @zone_ids.setter
    def zone_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af7e9e834e365ccb79fa8a8056309de6343ba49a4d386aaa21110ee937224762)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneIds", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-acs.RosCluster.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "config": "config", "disabled": "disabled"},
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param config: 
            :param disabled: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4fc95457883865eee725f37a468f2f4ab9d623c76e3f7e9b43500f3127eb56a3)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument config", value=config, expected_type=type_hints["config"])
                check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if disabled is not None:
                self._values["disabled"] = disabled

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the add-on.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: config: When the value is empty, no configuration is required.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def disabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: disabled: Specifies whether to disable default installation.
            '''
            result = self._values.get("disabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-acs.RosCluster.MaintenanceWindowProperty",
        jsii_struct_bases=[],
        name_mapping={
            "duration": "duration",
            "enable": "enable",
            "maintenance_time": "maintenanceTime",
            "weekly_period": "weeklyPeriod",
        },
    )
    class MaintenanceWindowProperty:
        def __init__(
            self,
            *,
            duration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            maintenance_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            weekly_period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param duration: 
            :param enable: 
            :param maintenance_time: 
            :param weekly_period: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__fe8f9971261d04d0a853a38ac72324e6c3843fff2c67b2d934ddd20ab788758f)
                check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
                check_type(argname="argument maintenance_time", value=maintenance_time, expected_type=type_hints["maintenance_time"])
                check_type(argname="argument weekly_period", value=weekly_period, expected_type=type_hints["weekly_period"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if duration is not None:
                self._values["duration"] = duration
            if enable is not None:
                self._values["enable"] = enable
            if maintenance_time is not None:
                self._values["maintenance_time"] = maintenance_time
            if weekly_period is not None:
                self._values["weekly_period"] = weekly_period

        @builtins.property
        def duration(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: duration: The duration of the maintenance window.
            '''
            result = self._values.get("duration")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enable: Whether to enable the maintenance window.
            '''
            result = self._values.get("enable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def maintenance_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maintenanceTime: The maintenance time of the maintenance window.
            '''
            result = self._values.get("maintenance_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def weekly_period(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: weeklyPeriod: The weekly period of the maintenance window.
            '''
            result = self._values.get("weekly_period")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MaintenanceWindowProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-acs.RosCluster.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__ec5bfc3623ddde54f6cfe4e2d49a51482bea25f1e777329961e2cf84400bebd8)
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
            :Property: key: Tag key.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Tag value.
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
    jsii_type="@alicloud/ros-cdk-acs.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "addons": "addons",
        "cluster_spec": "clusterSpec",
        "deletion_protection": "deletionProtection",
        "endpoint_public_access": "endpointPublicAccess",
        "ip_stack": "ipStack",
        "kubernetes_version": "kubernetesVersion",
        "load_balancer_spec": "loadBalancerSpec",
        "logging_type": "loggingType",
        "maintenance_window": "maintenanceWindow",
        "pod_v_switch_ids": "podVSwitchIds",
        "resource_group_id": "resourceGroupId",
        "service_cidr": "serviceCidr",
        "service_discovery_types": "serviceDiscoveryTypes",
        "sls_project_name": "slsProjectName",
        "snat_entry": "snatEntry",
        "tags": "tags",
        "time_zone": "timeZone",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "zone_ids": "zoneIds",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_stack: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        logging_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maintenance_window: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.MaintenanceWindowProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        pod_v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_discovery_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        sls_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster

        :param name: 
        :param addons: 
        :param cluster_spec: 
        :param deletion_protection: 
        :param endpoint_public_access: 
        :param ip_stack: 
        :param kubernetes_version: 
        :param load_balancer_spec: 
        :param logging_type: 
        :param maintenance_window: 
        :param pod_v_switch_ids: 
        :param resource_group_id: 
        :param service_cidr: 
        :param service_discovery_types: 
        :param sls_project_name: 
        :param snat_entry: 
        :param tags: 
        :param time_zone: 
        :param vpc_id: 
        :param v_switch_ids: 
        :param zone_ids: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97b516173ff3e94e03eb317f1f7fec0fb29b4e598dc7779cb4c2476bd1e0d452)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument endpoint_public_access", value=endpoint_public_access, expected_type=type_hints["endpoint_public_access"])
            check_type(argname="argument ip_stack", value=ip_stack, expected_type=type_hints["ip_stack"])
            check_type(argname="argument kubernetes_version", value=kubernetes_version, expected_type=type_hints["kubernetes_version"])
            check_type(argname="argument load_balancer_spec", value=load_balancer_spec, expected_type=type_hints["load_balancer_spec"])
            check_type(argname="argument logging_type", value=logging_type, expected_type=type_hints["logging_type"])
            check_type(argname="argument maintenance_window", value=maintenance_window, expected_type=type_hints["maintenance_window"])
            check_type(argname="argument pod_v_switch_ids", value=pod_v_switch_ids, expected_type=type_hints["pod_v_switch_ids"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument service_cidr", value=service_cidr, expected_type=type_hints["service_cidr"])
            check_type(argname="argument service_discovery_types", value=service_discovery_types, expected_type=type_hints["service_discovery_types"])
            check_type(argname="argument sls_project_name", value=sls_project_name, expected_type=type_hints["sls_project_name"])
            check_type(argname="argument snat_entry", value=snat_entry, expected_type=type_hints["snat_entry"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument time_zone", value=time_zone, expected_type=type_hints["time_zone"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument zone_ids", value=zone_ids, expected_type=type_hints["zone_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if addons is not None:
            self._values["addons"] = addons
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if ip_stack is not None:
            self._values["ip_stack"] = ip_stack
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if logging_type is not None:
            self._values["logging_type"] = logging_type
        if maintenance_window is not None:
            self._values["maintenance_window"] = maintenance_window
        if pod_v_switch_ids is not None:
            self._values["pod_v_switch_ids"] = pod_v_switch_ids
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if service_discovery_types is not None:
            self._values["service_discovery_types"] = service_discovery_types
        if sls_project_name is not None:
            self._values["sls_project_name"] = sls_project_name
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if tags is not None:
            self._values["tags"] = tags
        if time_zone is not None:
            self._values["time_zone"] = time_zone
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids
        if zone_ids is not None:
            self._values["zone_ids"] = zone_ids

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.AddonsProperty]]]]:
        '''
        :Property: addons: The add-ons to be installed for the cluster.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.AddonsProperty]]]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterSpec: The managed cluster spec. Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.pro.small.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_stack(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipStack: The IP stack of the cluster.
        '''
        result = self._values.get("ip_stack")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def logging_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loggingType: The logging type of the cluster. By default, no logging service is used.
        '''
        result = self._values.get("logging_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maintenance_window(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.MaintenanceWindowProperty]]:
        '''
        :Property: maintenanceWindow: The maintenance window of the cluster.
        '''
        result = self._values.get("maintenance_window")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.MaintenanceWindowProperty]], result)

    @builtins.property
    def pod_v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        podVSwitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        result = self._values.get("pod_v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_discovery_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        serviceDiscoveryTypes: Intra-cluster service discovery type,
        used to specify the service discovery method in the ASK cluster.
        CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
        a set of containers needs to be deployed in the cluster for DNS resolution.
        By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
        PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
        the PrivateZone service needs to be enabled.
        Default value: off
        '''
        result = self._values.get("service_discovery_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def sls_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsProjectName: The SLS project name of the cluster. If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
        '''
        result = self._values.get("sls_project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosCluster.TagsProperty]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosCluster.TagsProperty]], result)

    @builtins.property
    def time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeZone: The time zone of the cluster.
        '''
        result = self._values.get("time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: VPC ID.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
        Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
        '''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: zoneIds: The zone IDs of the cluster.
        '''
        result = self._values.get("zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ICluster)
class Cluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-acs.Cluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ACS::Cluster``, which is used to create a Container Compute Service (ACS) cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98454d628834583c7cf4c70faa5122697bb583e8f1135a1fa3325b82783daf5c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrIngressSlbId")
    def attr_ingress_slb_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IngressSLBId: The id of ingress SLB.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIngressSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkerRamRoleName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterProps:
        return typing.cast(ClusterProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7638081e1343a216df961a4b160b9ed3ee850f2a00b404f31b98aa67233064fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7086d20040f8d61f5371ac936019361c00be9caacce67c3a1d03296a4cd3a5cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__290d30ba9ad2583c8bbcca3913519b99c0e540b6e572e8c65c6688a8b76f8d06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Cluster",
    "ClusterProps",
    "ICluster",
    "RosCluster",
    "RosClusterProps",
]

publication.publish()

def _typecheckingstub__244af60392b2d2f4b2412168c3ce76918444a1112e2701fb52f590a372364a73(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_stack: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    logging_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintenance_window: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.MaintenanceWindowProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    pod_v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_discovery_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    sls_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0aea5d6f246e8946ab82367918fa0edec7ea8826837865435d2d03e7c6d85a12(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7b65eeea6a42eef3d0844488d34667939ce04fdfc1c8ce40e1726ddef78da22(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bd8676db1bf098427949538794fee660165a8e52d1893918ead79efc34da4bd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e688c2d8e52ef852ee9445927c2e2c17b047d8c9f500d4c72955a96660740a2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14c071ca3acd81118184711678ecb42f117078013cb4e44193b88a09466198d5(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.AddonsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80d3f05aef503f0290c06d10c3cbe03c872f6c77c54e8f6986a29c302f85d8e4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aecd1445bc10cc8ae7277fdc3d6d796acfb51c55ad3c65876c44f14fb4fa633f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06b3678739cc2e54c3722f812c73b8bbc9fa278c6edeafb0f8813284886f54a5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9604744dc58c9017547b2e0bfc57b4adbf7cefa200c6aed3960ac773c46efbf4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5bbddaf4378d92fa1e96e697f563deb681cc762b324638d0633d233a17e9473(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cabf6c30552d73e2537f9963af603020f3f8fd4ea7a566e59c37c3910e946ace(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b37a6553c90df24a53cb868efa81d52d89298656e599918215b0977685318398(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa0cef3eb070747375b72e8679427c13e079ab2fbe3bdf8e9b2d2eecb5902c41(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCluster.MaintenanceWindowProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c26ad2da1014151dc9b3c3fa0ad3a0ef9d7b5ffa61042ea64b4b49d484612910(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35e05a7806675ada756dc2425f2cc5bfd927675fe088afe0b40b32524e02dba5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09c119c1a8c2be9b43bc208f08f7f4c15afade1c87b0216bc2216719d99401af(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27316651f7bc235ee8c23a35f95faef846327b9024c045ce6512983ee101ba8f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da4c4fdcc85092cf1ea3dd46fd1632db575577344d007a2f2075dc6bd0eed7a0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3246bf885b27412a94a159497a05086c1eff4a4fe70a99bf6c569ef73ca9ec6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22b7f9f90d2f5bd5ec59dd709d9b8d30022f315e0d87f297391d4254dae5d315(
    value: typing.Optional[typing.List[RosCluster.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1b2121426df69708eed16d26b9d6fc5993feacf83641752e806888f9432abb1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3aec726ffecdf9f80699d01b99158e6082bf1d229d6d0c5b9574a5d0211d6a9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b6009637465585294c5d1c6595dcb1dc1c623626601186f99f20bc14fd0d169(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af7e9e834e365ccb79fa8a8056309de6343ba49a4d386aaa21110ee937224762(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fc95457883865eee725f37a468f2f4ab9d623c76e3f7e9b43500f3127eb56a3(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe8f9971261d04d0a853a38ac72324e6c3843fff2c67b2d934ddd20ab788758f(
    *,
    duration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintenance_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    weekly_period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec5bfc3623ddde54f6cfe4e2d49a51482bea25f1e777329961e2cf84400bebd8(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97b516173ff3e94e03eb317f1f7fec0fb29b4e598dc7779cb4c2476bd1e0d452(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_stack: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    logging_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maintenance_window: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCluster.MaintenanceWindowProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    pod_v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_discovery_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    sls_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98454d628834583c7cf4c70faa5122697bb583e8f1135a1fa3325b82783daf5c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7638081e1343a216df961a4b160b9ed3ee850f2a00b404f31b98aa67233064fa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7086d20040f8d61f5371ac936019361c00be9caacce67c3a1d03296a4cd3a5cd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__290d30ba9ad2583c8bbcca3913519b99c0e540b6e572e8c65c6688a8b76f8d06(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
