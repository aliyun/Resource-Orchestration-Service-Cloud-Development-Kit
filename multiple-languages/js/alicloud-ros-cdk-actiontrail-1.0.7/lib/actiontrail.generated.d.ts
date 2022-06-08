import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ACTIONTRAIL::Trail`
 */
export interface RosTrailProps {
    /**
     * @Property name: The name of the trail to be created, which must be unique for an account.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
     */
    readonly ossBucketName: string | ros.IResolvable;
    /**
     * @Property roleName: The RAM role in ActionTrail permitted by the user.
     */
    readonly roleName: string | ros.IResolvable;
    /**
     * @Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
     */
    readonly eventRw?: string | ros.IResolvable;
    /**
     * @Property ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
     */
    readonly ossKeyPrefix?: string | ros.IResolvable;
    /**
     * @Property slsProjectArn: The unique ARN of the Log Service project.
     */
    readonly slsProjectArn?: string | ros.IResolvable;
    /**
     * @Property slsWriteRoleArn: The unique ARN of the Log Service role.
     */
    readonly slsWriteRoleArn?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ACTIONTRAIL::Trail`
 */
export declare class RosTrail extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACTIONTRAIL::Trail";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Name: The name of the trail to be created, which must be unique for an account.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the trail to be created, which must be unique for an account.
     */
    name: string | ros.IResolvable;
    /**
     * @Property ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
     */
    ossBucketName: string | ros.IResolvable;
    /**
     * @Property roleName: The RAM role in ActionTrail permitted by the user.
     */
    roleName: string | ros.IResolvable;
    /**
     * @Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
     */
    eventRw: string | ros.IResolvable | undefined;
    /**
     * @Property ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
     */
    ossKeyPrefix: string | ros.IResolvable | undefined;
    /**
     * @Property slsProjectArn: The unique ARN of the Log Service project.
     */
    slsProjectArn: string | ros.IResolvable | undefined;
    /**
     * @Property slsWriteRoleArn: The unique ARN of the Log Service role.
     */
    slsWriteRoleArn: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ACTIONTRAIL::Trail`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrailProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ACTIONTRAIL::TrailLogging`
 */
export interface RosTrailLoggingProps {
    /**
     * @Property enable: Whether to enable the trail logging.
     */
    readonly enable: boolean | ros.IResolvable;
    /**
     * @Property name: The name of the trail to be enabled.
     */
    readonly name: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ACTIONTRAIL::TrailLogging`
 */
export declare class RosTrailLogging extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACTIONTRAIL::TrailLogging";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute IsLogging: Indicates whether the trail is logging API invocations.
     */
    readonly attrIsLogging: ros.IResolvable;
    /**
     * @Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
     */
    readonly attrLatestDeliveryError: ros.IResolvable;
    /**
     * @Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.
     */
    readonly attrLatestDeliveryTime: ros.IResolvable;
    /**
     * @Attribute StartLoggingTime: The most recent date and time when the user enables the trail.
     */
    readonly attrStartLoggingTime: ros.IResolvable;
    /**
     * @Attribute StopLoggingTime: The most recent date and time when the user disables the trail.
     */
    readonly attrStopLoggingTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property enable: Whether to enable the trail logging.
     */
    enable: boolean | ros.IResolvable;
    /**
     * @Property name: The name of the trail to be enabled.
     */
    name: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::ACTIONTRAIL::TrailLogging`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrailLoggingProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
//# sourceMappingURL=actiontrail.generated.d.ts.map