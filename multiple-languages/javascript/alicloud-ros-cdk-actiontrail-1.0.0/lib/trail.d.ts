import * as ros from '@alicloud/ros-cdk-core';
import { RosTrail } from './actiontrail.generated';
export { RosTrail as TrailProperty };
/**
 * Properties for defining a `ALIYUN::ACTIONTRAIL::Trail`
 */
export interface TrailProps {
    /**
     * @Property name: The name of the trail to be created, which must be unique for an account.
     */
    readonly name: string;
    /**
     * @Property ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
     */
    readonly ossBucketName: string;
    /**
     * @Property roleName: The RAM role in ActionTrail permitted by the user.
     */
    readonly roleName: string;
    /**
     * @Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
     */
    readonly eventRw?: string;
    /**
     * @Property ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
     */
    readonly ossKeyPrefix?: string;
    /**
     * @Property slsProjectArn: The unique ARN of the Log Service project.
     */
    readonly slsProjectArn?: string;
    /**
     * @Property slsWriteRoleArn: The unique ARN of the Log Service role.
     */
    readonly slsWriteRoleArn?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ACTIONTRAIL::Trail`
 */
export declare class Trail extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute Name: The name of the trail to be created, which must be unique for an account.
     */
    readonly attrName: any;
    /**
     * Create a new `ALIYUN::ACTIONTRAIL::Trail`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrailProps, enableResourcePropertyConstraint?: boolean);
}
