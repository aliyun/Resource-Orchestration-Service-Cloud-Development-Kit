import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
 */
export interface RosHostProps {
    /**
     * @Property activeAddressType: The endpoint type of the host that you want to create. Valid values:
     * Public: a public endpoint
     * Private: an internal endpoint
     */
    readonly activeAddressType: string | ros.IResolvable;
    /**
     * @Property hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
     */
    readonly hostName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the Bastionhost instance where you want to create the host.
     * Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property osType: The operating system of the host that you want to create. Valid values:
     * - Linux
     * - Windows
     */
    readonly osType: string | ros.IResolvable;
    /**
     * @Property source: The source of the host that you want to create. Valid values:
     * - Local: an on-premises host
     * - Ecs: an Elastic Compute Service (ECS) instance
     * - Rds: a host in a dedicated cluster
     */
    readonly source: string | ros.IResolvable;
    /**
     * @Property comment: The description of the host that you want to create. The value can be up to 500 characters.
     */
    readonly comment?: string | ros.IResolvable;
    /**
     * @Property hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Private.
     */
    readonly hostPrivateAddress?: string | ros.IResolvable;
    /**
     * @Property hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Public.
     */
    readonly hostPublicAddress?: string | ros.IResolvable;
    /**
     * @Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
     * Note: This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    readonly instanceRegionId?: string | ros.IResolvable;
    /**
     * @Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
     * Note This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    readonly sourceInstanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::Host`, which is used to create a host for O&M in a bastion host.
 * @Note This class does not contain additional functions, so it is recommended to use the `Host` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
 */
export declare class RosHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::Host";
    /**
     * @Attribute HostId: The ID of the host that was created.
     */
    readonly attrHostId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property activeAddressType: The endpoint type of the host that you want to create. Valid values:
     * Public: a public endpoint
     * Private: an internal endpoint
     */
    activeAddressType: string | ros.IResolvable;
    /**
     * @Property hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
     */
    hostName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the Bastionhost instance where you want to create the host.
     * Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property osType: The operating system of the host that you want to create. Valid values:
     * - Linux
     * - Windows
     */
    osType: string | ros.IResolvable;
    /**
     * @Property source: The source of the host that you want to create. Valid values:
     * - Local: an on-premises host
     * - Ecs: an Elastic Compute Service (ECS) instance
     * - Rds: a host in a dedicated cluster
     */
    source: string | ros.IResolvable;
    /**
     * @Property comment: The description of the host that you want to create. The value can be up to 500 characters.
     */
    comment: string | ros.IResolvable | undefined;
    /**
     * @Property hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Private.
     */
    hostPrivateAddress: string | ros.IResolvable | undefined;
    /**
     * @Property hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Public.
     */
    hostPublicAddress: string | ros.IResolvable | undefined;
    /**
     * @Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
     * Note: This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    instanceRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
     * Note This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    sourceInstanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHostProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
