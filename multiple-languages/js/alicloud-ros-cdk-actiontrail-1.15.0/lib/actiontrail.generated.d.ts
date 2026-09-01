import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAdvancedQueryTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
 */
export interface RosAdvancedQueryTemplateProps {
    /**
     * @Property simpleQuery: Indicates whether the template is a simple query.
     */
    readonly simpleQuery: boolean | ros.IResolvable;
    /**
     * @Property templateSql: The SQL statement of the advanced query template.
     */
    readonly templateSql: string | ros.IResolvable;
    /**
     * @Property templateName: The name of the template, which can contain a maximum of 64 characters.
     * Uniqueness is not required.
     */
    readonly templateName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACTIONTRAIL::AdvancedQueryTemplate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AdvancedQueryTemplate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
 */
export declare class RosAdvancedQueryTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACTIONTRAIL::AdvancedQueryTemplate";
    /**
     * @Attribute TemplateId: The ID of the advanced query template.
     */
    readonly attrTemplateId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property simpleQuery: Indicates whether the template is a simple query.
     */
    simpleQuery: boolean | ros.IResolvable;
    /**
     * @Property templateSql: The SQL statement of the advanced query template.
     */
    templateSql: string | ros.IResolvable;
    /**
     * @Property templateName: The name of the template, which can contain a maximum of 64 characters.
     * Uniqueness is not required.
     */
    templateName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAdvancedQueryTemplateProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosHistoryDeliveryJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob
 */
export interface RosHistoryDeliveryJobProps {
    /**
     * @Property trailName: The name of the trail.
     */
    readonly trailName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACTIONTRAIL::HistoryDeliveryJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HistoryDeliveryJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob
 */
export declare class RosHistoryDeliveryJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACTIONTRAIL::HistoryDeliveryJob";
    /**
     * @Attribute JobId: The ID of the delivery history job.
     */
    readonly attrJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property trailName: The name of the trail.
     */
    trailName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHistoryDeliveryJobProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosTrail`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
 */
export interface RosTrailProps {
    /**
     * @Property name: The name of the trail to be created.
     * Length should be between 6 and 36 characters, must start with a lowercase letter,
     * and can include lowercase letters, numbers, hyphens (-), and underscores (_).
     * > The trail name must be unique within the same account.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
     */
    readonly eventRw?: string | ros.IResolvable;
    /**
     * @Property ossBucketName: The OSS bucket for the trail delivery.
     * Length should be between 3 and 63 characters, must start with a lowercase letter
     * or number, and can include lowercase letters, numbers, and hyphens (-).
     * > At least one of OssBucketName and SlsProjectArn must be specified.
     */
    readonly ossBucketName?: string | ros.IResolvable;
    /**
     * @Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.
     * Length should be between 6 and 32 characters, must start with a letter, and can
     * include letters, numbers, hyphens (-), forward slashes (\/), and underscores (_).
     */
    readonly ossKeyPrefix?: string | ros.IResolvable;
    /**
     * @Property roleName: The name of the associated role for Operation Audit, with a default value of
     * serviceroleforactiontrail.
     */
    readonly roleName?: string | ros.IResolvable;
    /**
     * @Property slsProjectArn: The ARN of the Log Service project for the trail delivery.
     * > At least one of OssBucketName and SlsProjectArn must be specified.
     */
    readonly slsProjectArn?: string | ros.IResolvable;
    /**
     * @Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events
     * to the Log Service project.
     * - If this parameter is not specified, Operation Audit will create the necessary
     * resources by creating a service-linked role.
     * - If this parameter is specified, when you need to deliver events to the current
     * account, you need to grant the RAM role the permissions of the Operation Audit
     * service-linked role. When you need to deliver events to another account, you need
     * to bind the system permission policy for event delivery to the RAM role. For more
     * information on cross-account delivery, see Deliver Events from Multiple
     * Accounts to One Account.
     */
    readonly slsWriteRoleArn?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACTIONTRAIL::Trail`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Trail` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
 */
export declare class RosTrail extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACTIONTRAIL::Trail";
    /**
     * @Attribute Name: The name of the trail to be created, which must be unique for an account.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the trail to be created.
     * Length should be between 6 and 36 characters, must start with a lowercase letter,
     * and can include lowercase letters, numbers, hyphens (-), and underscores (_).
     * > The trail name must be unique within the same account.
     */
    name: string | ros.IResolvable;
    /**
     * @Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
     */
    eventRw: string | ros.IResolvable | undefined;
    /**
     * @Property ossBucketName: The OSS bucket for the trail delivery.
     * Length should be between 3 and 63 characters, must start with a lowercase letter
     * or number, and can include lowercase letters, numbers, and hyphens (-).
     * > At least one of OssBucketName and SlsProjectArn must be specified.
     */
    ossBucketName: string | ros.IResolvable | undefined;
    /**
     * @Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.
     * Length should be between 6 and 32 characters, must start with a letter, and can
     * include letters, numbers, hyphens (-), forward slashes (\/), and underscores (_).
     */
    ossKeyPrefix: string | ros.IResolvable | undefined;
    /**
     * @Property roleName: The name of the associated role for Operation Audit, with a default value of
     * serviceroleforactiontrail.
     */
    roleName: string | ros.IResolvable | undefined;
    /**
     * @Property slsProjectArn: The ARN of the Log Service project for the trail delivery.
     * > At least one of OssBucketName and SlsProjectArn must be specified.
     */
    slsProjectArn: string | ros.IResolvable | undefined;
    /**
     * @Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events
     * to the Log Service project.
     * - If this parameter is not specified, Operation Audit will create the necessary
     * resources by creating a service-linked role.
     * - If this parameter is specified, when you need to deliver events to the current
     * account, you need to grant the RAM role the permissions of the Operation Audit
     * service-linked role. When you need to deliver events to another account, you need
     * to bind the system permission policy for event delivery to the RAM role. For more
     * information on cross-account delivery, see Deliver Events from Multiple
     * Accounts to One Account.
     */
    slsWriteRoleArn: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosTrailLogging`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
 */
export interface RosTrailLoggingProps {
    /**
     * @Property enable: Whether to enable the trail logging.
     */
    readonly enable: boolean | ros.IResolvable;
    /**
     * @Property name: The name of the trail.\
     * The name must be 6 to 36 characters in length and can contain lowercase letters,
     * digits, hyphens (-), and underscores (_). It must start with a lowercase letter.
     * >  The name must be unique within an account.
     */
    readonly name: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACTIONTRAIL::TrailLogging`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrailLogging` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
 */
export declare class RosTrailLogging extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACTIONTRAIL::TrailLogging";
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
     * @Property name: The name of the trail.\
     * The name must be 6 to 36 characters in length and can contain lowercase letters,
     * digits, hyphens (-), and underscores (_). It must start with a lowercase letter.
     * >  The name must be unique within an account.
     */
    name: string | ros.IResolvable;
    /**
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
