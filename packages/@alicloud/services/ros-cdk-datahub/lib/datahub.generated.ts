// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-project
 */
export interface RosProjectProps {

    /**
     * @Property comment: The comment of project.
     */
    readonly comment: string | ros.IResolvable;

    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly projectName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.requiredValidator)(properties.comment));
    if(properties.comment && (Array.isArray(properties.comment) || (typeof properties.comment) === 'string')) {
        errors.collect(ros.propertyValidator('comment', ros.validateLength)({
            data: properties.comment.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DATAHUB::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DATAHUB::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      Comment: ros.stringToRosTemplate(properties.comment),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DATAHUB::Project`, which is used to create a DataHub project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-project
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DATAHUB::Project";

    /**
     * @Attribute ProjectName: Project name
     */
    public readonly attrProjectName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property comment: The comment of project.
     */
    public comment: string | ros.IResolvable;

    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProjectName = this.getAtt('ProjectName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.comment = props.comment;
        this.projectName = props.projectName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            comment: this.comment,
            projectName: this.projectName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-topic
 */
export interface RosTopicProps {

    /**
     * @Property comment: The comment of topic.
     */
    readonly comment: string | ros.IResolvable;

    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
     */
    readonly recordType: string | ros.IResolvable;

    /**
     * @Property topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * @Property lifecycle: Data storage life cycle.
     */
    readonly lifecycle?: number | ros.IResolvable;

    /**
     * @Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
     */
    readonly recordSchema?: string | ros.IResolvable;

    /**
     * @Property shardCount: Initial shard number.
     */
    readonly shardCount?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTopicProps`
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the result of the validation.
 */
function RosTopicPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.requiredValidator)(properties.comment));
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('recordType', ros.requiredValidator)(properties.recordType));
    if(properties.recordType && (typeof properties.recordType) !== 'object') {
        errors.collect(ros.propertyValidator('recordType', ros.validateAllowedValues)({
          data: properties.recordType,
          allowedValues: ["TUPLE","BLOB"],
        }));
    }
    errors.collect(ros.propertyValidator('recordType', ros.validateString)(properties.recordType));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    if(properties.lifecycle && (typeof properties.lifecycle) !== 'object') {
        errors.collect(ros.propertyValidator('lifecycle', ros.validateRange)({
            data: properties.lifecycle,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('lifecycle', ros.validateNumber)(properties.lifecycle));
    errors.collect(ros.propertyValidator('recordSchema', ros.validateString)(properties.recordSchema));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    if(properties.topicName && (Array.isArray(properties.topicName) || (typeof properties.topicName) === 'string')) {
        errors.collect(ros.propertyValidator('topicName', ros.validateLength)({
            data: properties.topicName.length,
            min: 3,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    if(properties.shardCount && (typeof properties.shardCount) !== 'object') {
        errors.collect(ros.propertyValidator('shardCount', ros.validateRange)({
            data: properties.shardCount,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('shardCount', ros.validateNumber)(properties.shardCount));
    return errors.wrap('supplied properties not correct for "RosTopicProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DATAHUB::Topic` resource
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DATAHUB::Topic` resource.
 */
// @ts-ignore TS6133
function rosTopicPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTopicPropsValidator(properties).assertSuccess();
    }
    return {
      Comment: ros.stringToRosTemplate(properties.comment),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
      RecordType: ros.stringToRosTemplate(properties.recordType),
      TopicName: ros.stringToRosTemplate(properties.topicName),
      Lifecycle: ros.numberToRosTemplate(properties.lifecycle),
      RecordSchema: ros.stringToRosTemplate(properties.recordSchema),
      ShardCount: ros.numberToRosTemplate(properties.shardCount),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DATAHUB::Topic`, which is used to create a topic.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-topic
 */
export class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DATAHUB::Topic";

    /**
     * @Attribute ProjectName: Project name
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * @Attribute TopicName: Topic name
     */
    public readonly attrTopicName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property comment: The comment of topic.
     */
    public comment: string | ros.IResolvable;

    /**
     * @Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
     */
    public recordType: string | ros.IResolvable;

    /**
     * @Property topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    public topicName: string | ros.IResolvable;

    /**
     * @Property lifecycle: Data storage life cycle.
     */
    public lifecycle: number | ros.IResolvable | undefined;

    /**
     * @Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
     */
    public recordSchema: string | ros.IResolvable | undefined;

    /**
     * @Property shardCount: Initial shard number.
     */
    public shardCount: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProjectName = this.getAtt('ProjectName');
        this.attrTopicName = this.getAtt('TopicName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.comment = props.comment;
        this.projectName = props.projectName;
        this.recordType = props.recordType;
        this.topicName = props.topicName;
        this.lifecycle = props.lifecycle;
        this.recordSchema = props.recordSchema;
        this.shardCount = props.shardCount;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            comment: this.comment,
            projectName: this.projectName,
            recordType: this.recordType,
            topicName: this.topicName,
            lifecycle: this.lifecycle,
            recordSchema: this.recordSchema,
            shardCount: this.shardCount,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
