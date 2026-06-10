import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosVpd`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
 */
export interface RosVpdProps {
    /**
     * @Property cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0\/8,172.16.0.0\/12,192.168.0.0\/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, or 169.254.0.0\/16 and their subnets as the primary IPv4 CIDR block of the VPD.
     */
    readonly cidr: string | ros.IResolvable;
    /**
     * @Property vpdName: Lingjun CIDR block instance name.
     */
    readonly vpdName: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property secondaryCidrBlocks: List of additional network segment information.
     */
    readonly secondaryCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property subnets: Lingjun subnet information List.
     */
    readonly subnets?: Array<RosVpd.SubnetsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags of vpd.
     */
    readonly tags?: RosVpd.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Eflo::Vpd`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Vpd` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
 */
export declare class RosVpd extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Eflo::Vpd";
    /**
     * @Attribute Cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
     */
    readonly attrCidr: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute GmtModified: Modification time.
     */
    readonly attrGmtModified: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecondaryCidrBlocks: List of additional network segment information.
     */
    readonly attrSecondaryCidrBlocks: ros.IResolvable;
    /**
     * @Attribute Tags: The tag of the resource.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VpdId: The ID of the VPD.
     */
    readonly attrVpdId: ros.IResolvable;
    /**
     * @Attribute VpdName: Lingjun CIDR block instance name.
     */
    readonly attrVpdName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0\/8,172.16.0.0\/12,192.168.0.0\/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, or 169.254.0.0\/16 and their subnets as the primary IPv4 CIDR block of the VPD.
     */
    cidr: string | ros.IResolvable;
    /**
     * @Property vpdName: Lingjun CIDR block instance name.
     */
    vpdName: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property secondaryCidrBlocks: List of additional network segment information.
     */
    secondaryCidrBlocks: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property subnets: Lingjun subnet information List.
     */
    subnets: Array<RosVpd.SubnetsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of vpd.
     */
    tags: RosVpd.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpdProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVpd {
    /**
     * @stability external
     */
    interface SubnetsProperty {
        /**
         * @Property subnetName: Lingjun subnet instance name.
         */
        readonly subnetName?: string | ros.IResolvable;
        /**
         * @Property type: Lingjun subnet usage type; Optional; Optional value:
     * - **General type does not fill in * *;
     * - **OOB**:OOB type
     * - **LB**: LB type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property cidr: The Subnet segment.
     * - The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8~65536 addresses.
     * For example, the network segment of the Lingjun network segment is 192.168.0.0\/16, and the network segments of the subnets under the Lingjun network segment are 192.168.0.0\/17 to 192.168.0.0\/29.
     * - The first and last three IP addresses of each subnet segment are reserved for the system.
     * For example, the four IP address blocks of the subnet are 192.168.1.0\/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
         */
        readonly cidr?: string | ros.IResolvable;
        /**
         * @Property zoneId: Availability Zone.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property regionId: Geography.
         */
        readonly regionId?: string | ros.IResolvable;
    }
}
export declare namespace RosVpd {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
