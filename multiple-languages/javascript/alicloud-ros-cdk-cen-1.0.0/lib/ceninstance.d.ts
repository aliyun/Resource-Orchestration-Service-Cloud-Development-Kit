import * as ros from '@alicloud/ros-cdk-core';
import { RosCenInstance } from './cen.generated';
export { RosCenInstance as CenInstanceProperty };
/**
 * Properties for defining a `ALIYUN::CEN::CenInstance`
 */
export interface CenInstanceProps {
    /**
     * @Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    readonly description?: string;
    /**
     * @Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    readonly name?: string;
}
/**
 * A ROS resource type:  `ALIYUN::CEN::CenInstance`
 */
export declare class CenInstance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute CenId: The ID of the request.
     */
    readonly attrCenId: any;
    /**
     * Create a new `ALIYUN::CEN::CenInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: CenInstanceProps, enableResourcePropertyConstraint?: boolean);
}
