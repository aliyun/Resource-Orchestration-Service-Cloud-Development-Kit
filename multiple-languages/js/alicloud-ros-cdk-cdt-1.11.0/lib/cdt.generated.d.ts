import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosResourcePackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
 */
export interface RosResourcePackageProps {
    /**
     * @Property capacity: The capacity of the specified CDT resource package.
     */
    readonly capacity: number | ros.IResolvable;
    /**
     * @Property pack: The pack of the specified CDT resource package. It can be obtained from the `components` field in the payload of the `getPrice` network request on the CDT common buy page.
     */
    readonly pack: string | ros.IResolvable;
    /**
     * @Property region: The region of the specified CDT resource package.
     */
    readonly region: string | ros.IResolvable;
    /**
     * @Property isp: The ISP of the specified CDT resource package.
     */
    readonly isp?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDT::ResourcePackage`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourcePackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
 */
export declare class RosResourcePackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDT::ResourcePackage";
    /**
     * @Attribute InstanceId: The ID of the specified instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute OrderId: The ID of the specified order.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property capacity: The capacity of the specified CDT resource package.
     */
    capacity: number | ros.IResolvable;
    /**
     * @Property pack: The pack of the specified CDT resource package. It can be obtained from the `components` field in the payload of the `getPrice` network request on the CDT common buy page.
     */
    pack: string | ros.IResolvable;
    /**
     * @Property region: The region of the specified CDT resource package.
     */
    region: string | ros.IResolvable;
    /**
     * @Property isp: The ISP of the specified CDT resource package.
     */
    isp: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourcePackageProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
