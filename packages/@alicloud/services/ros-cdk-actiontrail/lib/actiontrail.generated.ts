// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosTrail`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
 */
export interface RosTrailProps {

    /**
     * @Property name: The name of the trail to be created, which must be unique for an account.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
     */
    readonly eventRw?: string | ros.IResolvable;

    /**
     * @Property ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
     */
    readonly ossBucketName?: string | ros.IResolvable;

    /**
     * @Property ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
     */
    readonly ossKeyPrefix?: string | ros.IResolvable;

    /**
     * @Property roleName: The RAM role in ActionTrail permitted by the user.
     */
    readonly roleName?: string | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosTrailProps`
 *
 * @param properties - the TypeScript properties of a `RosTrailProps`
 *
 * @returns the result of the validation.
 */
function RosTrailPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slsProjectArn', ros.validateString)(properties.slsProjectArn));
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    if(properties.eventRw && (typeof properties.eventRw) !== 'object') {
        errors.collect(ros.propertyValidator('eventRw', ros.validateAllowedValues)({
          data: properties.eventRw,
          allowedValues: ["All","Read","Write"],
        }));
    }
    errors.collect(ros.propertyValidator('eventRw', ros.validateString)(properties.eventRw));
    errors.collect(ros.propertyValidator('ossKeyPrefix', ros.validateString)(properties.ossKeyPrefix));
    errors.collect(ros.propertyValidator('ossBucketName', ros.validateString)(properties.ossBucketName));
    errors.collect(ros.propertyValidator('slsWriteRoleArn', ros.validateString)(properties.slsWriteRoleArn));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosTrailProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ACTIONTRAIL::Trail` resource
 *
 * @param properties - the TypeScript properties of a `RosTrailProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ACTIONTRAIL::Trail` resource.
 */
// @ts-ignore TS6133
function rosTrailPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTrailPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'EventRW': ros.stringToRosTemplate(properties.eventRw),
      'OssBucketName': ros.stringToRosTemplate(properties.ossBucketName),
      'OssKeyPrefix': ros.stringToRosTemplate(properties.ossKeyPrefix),
      'RoleName': ros.stringToRosTemplate(properties.roleName),
      'SlsProjectArn': ros.stringToRosTemplate(properties.slsProjectArn),
      'SlsWriteRoleArn': ros.stringToRosTemplate(properties.slsWriteRoleArn),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACTIONTRAIL::Trail`, which is used to create a trail to deliver events to Simple Log Service or Object Storage Service (OSS).
 * @Note This class does not contain additional functions, so it is recommended to use the `Trail` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
 */
export class RosTrail extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACTIONTRAIL::Trail";

    /**
     * @Attribute Name: The name of the trail to be created, which must be unique for an account.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the trail to be created, which must be unique for an account.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
     */
    public eventRw: string | ros.IResolvable | undefined;

    /**
     * @Property ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
     */
    public ossBucketName: string | ros.IResolvable | undefined;

    /**
     * @Property ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
     */
    public ossKeyPrefix: string | ros.IResolvable | undefined;

    /**
     * @Property roleName: The RAM role in ActionTrail permitted by the user.
     */
    public roleName: string | ros.IResolvable | undefined;

    /**
     * @Property slsProjectArn: The unique ARN of the Log Service project.
     */
    public slsProjectArn: string | ros.IResolvable | undefined;

    /**
     * @Property slsWriteRoleArn: The unique ARN of the Log Service role.
     */
    public slsWriteRoleArn: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrailProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTrail.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.eventRw = props.eventRw;
        this.ossBucketName = props.ossBucketName;
        this.ossKeyPrefix = props.ossKeyPrefix;
        this.roleName = props.roleName;
        this.slsProjectArn = props.slsProjectArn;
        this.slsWriteRoleArn = props.slsWriteRoleArn;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            eventRw: this.eventRw,
            ossBucketName: this.ossBucketName,
            ossKeyPrefix: this.ossKeyPrefix,
            roleName: this.roleName,
            slsProjectArn: this.slsProjectArn,
            slsWriteRoleArn: this.slsWriteRoleArn,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTrailPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
     * @Property name: The name of the trail to be enabled.
     */
    readonly name: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTrailLoggingProps`
 *
 * @param properties - the TypeScript properties of a `RosTrailLoggingProps`
 *
 * @returns the result of the validation.
 */
function RosTrailLoggingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosTrailLoggingProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ACTIONTRAIL::TrailLogging` resource
 *
 * @param properties - the TypeScript properties of a `RosTrailLoggingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ACTIONTRAIL::TrailLogging` resource.
 */
// @ts-ignore TS6133
function rosTrailLoggingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTrailLoggingPropsValidator(properties).assertSuccess();
    }
    return {
      'Enable': ros.booleanToRosTemplate(properties.enable),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACTIONTRAIL::TrailLogging`, which is used to enable or disable trail logging.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrailLogging` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
 */
export class RosTrailLogging extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACTIONTRAIL::TrailLogging";

    /**
     * @Attribute IsLogging: Indicates whether the trail is logging API invocations.
     */
    public readonly attrIsLogging: ros.IResolvable;

    /**
     * @Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
     */
    public readonly attrLatestDeliveryError: ros.IResolvable;

    /**
     * @Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.
     */
    public readonly attrLatestDeliveryTime: ros.IResolvable;

    /**
     * @Attribute StartLoggingTime: The most recent date and time when the user enables the trail.
     */
    public readonly attrStartLoggingTime: ros.IResolvable;

    /**
     * @Attribute StopLoggingTime: The most recent date and time when the user disables the trail.
     */
    public readonly attrStopLoggingTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property enable: Whether to enable the trail logging.
     */
    public enable: boolean | ros.IResolvable;

    /**
     * @Property name: The name of the trail to be enabled.
     */
    public name: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrailLoggingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTrailLogging.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIsLogging = this.getAtt('IsLogging');
        this.attrLatestDeliveryError = this.getAtt('LatestDeliveryError');
        this.attrLatestDeliveryTime = this.getAtt('LatestDeliveryTime');
        this.attrStartLoggingTime = this.getAtt('StartLoggingTime');
        this.attrStopLoggingTime = this.getAtt('StopLoggingTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.enable = props.enable;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            enable: this.enable,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTrailLoggingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
