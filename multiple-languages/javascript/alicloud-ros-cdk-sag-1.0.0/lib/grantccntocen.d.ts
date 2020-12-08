import * as ros from '@alicloud/ros-cdk-core';
import { RosGrantCcnToCen } from './sag.generated';
export { RosGrantCcnToCen as GrantCcnToCenProperty };
/**
 * Properties for defining a `ALIYUN::SAG::GrantCcnToCen`
 */
export interface GrantCcnToCenProps {
    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    readonly ccnInstanceId: string;
    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    readonly cenInstanceId: string;
    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    readonly cenUid: string;
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
     * @Attribute CcnInstanceId: The ID of the CCN instance.
     */
    readonly attrCcnInstanceId: any;
    /**
     * @Attribute CenInstanceId: The ID of the CEN instance.
     */
    readonly attrCenInstanceId: any;
    /**
     * Create a new `ALIYUN::SAG::GrantCcnToCen`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GrantCcnToCenProps, enableResourcePropertyConstraint?: boolean);
}
