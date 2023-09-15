import * as ros from '@alicloud/ros-cdk-core';
import { RosGrantCcnToCen } from './sag.generated';
export { RosGrantCcnToCen as GrantCcnToCenProperty };
/**
 * Properties for defining a `ALIYUN::SAG::GrantCcnToCen`
 */
export interface GrantCcnToCenProps {
    /**
     * Property ccnInstanceId: The ID of the CCN instance.
     */
    readonly ccnInstanceId: string | ros.IResolvable;
    /**
     * Property cenInstanceId: The ID of the CEN instance.
     */
    readonly cenInstanceId: string | ros.IResolvable;
    /**
     * Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    readonly cenUid: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SAG::GrantCcnToCen`
 */
export declare class GrantCcnToCen extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CcnInstanceId: The ID of the CCN instance.
     */
    readonly attrCcnInstanceId: ros.IResolvable;
    /**
     * Attribute CenInstanceId: The ID of the CEN instance.
     */
    readonly attrCenInstanceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::GrantCcnToCen`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GrantCcnToCenProps, enableResourcePropertyConstraint?: boolean);
}
