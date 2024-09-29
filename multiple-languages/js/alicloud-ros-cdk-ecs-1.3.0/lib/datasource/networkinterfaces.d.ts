import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterfaces } from './ecs.generated';
export { RosNetworkInterfaces as NetworkInterfacesProperty };
/**
 * Properties for defining a `NetworkInterfaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
 */
export interface NetworkInterfacesProps {
    /**
     * Property instanceId: The ID of the instance to which the ENI is bound.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property ipv6Addresses: IPv6 address N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    readonly ipv6Addresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property networkInterfaceIds: The ID of ENI N. Valid values of N: 1 to 100.
     */
    readonly networkInterfaceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property networkInterfaceName: The name of the ENI.
     */
    readonly networkInterfaceName?: string | ros.IResolvable;
    /**
     * Property primaryIpAddress: The primary private IPv4 address of the ENI.
     */
    readonly primaryIpAddress?: string | ros.IResolvable;
    /**
     * Property privateIpAddresses: Secondary private IPv4 address N of the ENI. Valid values of N: 1 to 100.
     */
    readonly privateIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the eni belongs.
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
     * To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
     * To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
     */
    readonly serviceManaged?: boolean | ros.IResolvable;
    /**
     * Property status: The state of the ENI. Valid values:
     * Creating: The ENI is being created.
     * Available: The ENI is not bound to an instance.
     * Attaching: The ENI is being bound to an instance.
     * InUse: The ENI is bound to an instance.
     * Detaching: The ENI is being unbound from an instance.
     * Deleting: The ENI is being deleted.
     * CreateFailed: The ENI cannot be created.
     * This parameter is empty by default, which indicates that ENIs in all states are queried.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * Property tags: Tags of eni.
     */
    readonly tags?: RosNetworkInterfaces.TagsProperty[];
    /**
     * Property type: The type of the ENI. Valid values:
     * Primary
     * Secondary
     * This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
     */
    readonly type?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::NetworkInterfaces`, which is used to query the details of elastic network interfaces (ENIs).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkInterfaces`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
 */
export declare class NetworkInterfaces extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NetworkInterfacesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NetworkInterfaceIds: The list of NetworkInterfaceIds.
     */
    readonly attrNetworkInterfaceIds: ros.IResolvable;
    /**
     * Attribute NetworkInterfaces: The list of NetworkInterfaces.
     */
    readonly attrNetworkInterfaces: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: NetworkInterfacesProps, enableResourcePropertyConstraint?: boolean);
}
