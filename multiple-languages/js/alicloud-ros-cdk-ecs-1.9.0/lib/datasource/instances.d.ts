import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './ecs.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
 */
export interface InstancesProps {
    /**
     * Property additionalAttributes: The value of attribute N. Valid values of N: 1 to 20. Valid values:
     * META_OPTIONS: instance metadata
     * DDH_CLUSTER: dedicated host cluster
     * NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
     */
    readonly additionalAttributes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property eipAddresses: The elastic IP addresses (EIPs) of instances. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly eipAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property filters: Filter value when querying resources
     */
    readonly filters?: Array<RosInstances.FiltersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
     */
    readonly hpcClusterId?: string | ros.IResolvable;
    /**
     * Property imageId: The ID of the image.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * Property innerIpAddresses: The internal IP addresses of instances located in the classic network. This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly innerIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property instanceChargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     *
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * Property instanceId: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property instanceIds: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property instanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard is supported.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * Property instanceNetworkType: The network type of the instance. Valid values:
     * classic: classic network
     * vpc: VPC
     *
     */
    readonly instanceNetworkType?: string | ros.IResolvable;
    /**
     * Property instanceType: The instance type of the instance.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property instanceTypeFamily: The instance family of the instance.
     */
    readonly instanceTypeFamily?: string | ros.IResolvable;
    /**
     * Property internetChargeType: The billing method for network usage. Valid values:
     * PayByBandwidth: pay-by-bandwidth
     * PayByTraffic: pay-by-traffic
     *
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * Property ioOptimized: Specifies whether the instance is I\/O optimized.
     */
    readonly ioOptimized?: boolean | ros.IResolvable;
    /**
     * Property ipv6Address: IPv6 address N of the elastic network interface (ENI). You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    readonly ipv6Address?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property keyPairName: The name of the SSH key pair bound to the instance.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * Property privateIpAddresses: The private IP addresses of instances located in VPCs. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly privateIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property publicIpAddresses: The public IP addresses of instances. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly publicIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
     */
    readonly rdmaIpAddresses?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the instance belongs.
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityGroupId: The ID of the security group to which the instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property status: The state of the instance. Valid values:
     * Pending
     * Running
     * Starting
     * Stopping
     * Stopped
     *
     */
    readonly status?: string | ros.IResolvable;
    /**
     * Property tags: Tags of instance.
     */
    readonly tags?: RosInstances.TagsProperty[];
    /**
     * Property vpcId: The ID of the virtual private cloud (VPC).
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * Property zoneId: The zone ID of the instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * Represents a `Instances`.
 */
export interface IInstances extends ros.IResource {
    readonly props: InstancesProps;
    /**
     * Attribute InstanceIds: The list of InstanceIds.
     */
    readonly attrInstanceIds: ros.IResolvable | string;
    /**
     * Attribute Instances: The list of Instances.
     */
    readonly attrInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Instances`, which is used to query the information about Elastic Compute Service (ECS) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
 */
export declare class Instances extends ros.Resource implements IInstances {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceIds: The list of InstanceIds.
     */
    readonly attrInstanceIds: ros.IResolvable | string;
    /**
     * Attribute Instances: The list of Instances.
     */
    readonly attrInstances: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
