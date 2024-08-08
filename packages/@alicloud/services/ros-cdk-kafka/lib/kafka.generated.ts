// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
 */
export interface RosAclProps {

    /**
     * @Property aclOperationTypes: The types of operations allowed by the ACL.
     */
    readonly aclOperationTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aclResourceName: The resource name.
     * The value can be a topic name, a group ID, a cluster name, or a transaction ID.
     * You can use an asterisk (*) to specify the names of all resources of the specified type.
     * Note You can use an asterisk (*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
     */
    readonly aclResourceName: string | ros.IResolvable;

    /**
     * @Property aclResourcePatternType: The matching mode. Valid values:
     * LITERAL: exact match
     * PREFIXED: prefix match
     */
    readonly aclResourcePatternType: string | ros.IResolvable;

    /**
     * @Property aclResourceType: The resource type. Valid values:
     * Topic
     * Group
     * Cluster
     * TransactionalId: transactional ID
     */
    readonly aclResourceType: string | ros.IResolvable;

    /**
     * @Property instanceId: The instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property username: The username.
     * You can use an asterisk (*) to specify all usernames.
     * Note You can use an asterisk (*) to query the authorized users only after you grant the required permissions to all users.
     */
    readonly username: string | ros.IResolvable;

    /**
     * @Property aclPermissionType: The authorization method. Valid values:
     * DENY
     * ALLOW
     * Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    readonly aclPermissionType?: string | ros.IResolvable;

    /**
     * @Property host: The source IP address.
     * Note
     * You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
     * This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    readonly host?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAclProps`
 *
 * @param properties - the TypeScript properties of a `RosAclProps`
 *
 * @returns the result of the validation.
 */
function RosAclPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('aclResourceName', ros.requiredValidator)(properties.aclResourceName));
    if(properties.aclResourceName && (Array.isArray(properties.aclResourceName) || (typeof properties.aclResourceName) === 'string')) {
        errors.collect(ros.propertyValidator('aclResourceName', ros.validateLength)({
            data: properties.aclResourceName.length,
            min: 1,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('aclResourceName', ros.validateString)(properties.aclResourceName));
    errors.collect(ros.propertyValidator('aclOperationTypes', ros.requiredValidator)(properties.aclOperationTypes));
    if(properties.aclOperationTypes && (Array.isArray(properties.aclOperationTypes) || (typeof properties.aclOperationTypes) === 'string')) {
        errors.collect(ros.propertyValidator('aclOperationTypes', ros.validateLength)({
            data: properties.aclOperationTypes.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('aclOperationTypes', ros.listValidator(ros.validateString))(properties.aclOperationTypes));
    errors.collect(ros.propertyValidator('username', ros.requiredValidator)(properties.username));
    if(properties.username && (typeof properties.username) !== 'object') {
        errors.collect(ros.propertyValidator('username', ros.validateAllowedPattern)({
          data: properties.username,
          reg: /^[a-zA-Z][a-zA-Z0-9_]{2,63}$/
        }));
    }
    errors.collect(ros.propertyValidator('username', ros.validateString)(properties.username));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    if(properties.instanceId && (Array.isArray(properties.instanceId) || (typeof properties.instanceId) === 'string')) {
        errors.collect(ros.propertyValidator('instanceId', ros.validateLength)({
            data: properties.instanceId.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('aclResourceType', ros.requiredValidator)(properties.aclResourceType));
    if(properties.aclResourceType && (typeof properties.aclResourceType) !== 'object') {
        errors.collect(ros.propertyValidator('aclResourceType', ros.validateAllowedValues)({
          data: properties.aclResourceType,
          allowedValues: ["Cluster","Group","Topic","TransactionalId"],
        }));
    }
    errors.collect(ros.propertyValidator('aclResourceType', ros.validateString)(properties.aclResourceType));
    if(properties.aclPermissionType && (typeof properties.aclPermissionType) !== 'object') {
        errors.collect(ros.propertyValidator('aclPermissionType', ros.validateAllowedValues)({
          data: properties.aclPermissionType,
          allowedValues: ["ALLOW","DENY"],
        }));
    }
    errors.collect(ros.propertyValidator('aclPermissionType', ros.validateString)(properties.aclPermissionType));
    errors.collect(ros.propertyValidator('aclResourcePatternType', ros.requiredValidator)(properties.aclResourcePatternType));
    if(properties.aclResourcePatternType && (typeof properties.aclResourcePatternType) !== 'object') {
        errors.collect(ros.propertyValidator('aclResourcePatternType', ros.validateAllowedValues)({
          data: properties.aclResourcePatternType,
          allowedValues: ["LITERAL","PREFIXED"],
        }));
    }
    errors.collect(ros.propertyValidator('aclResourcePatternType', ros.validateString)(properties.aclResourcePatternType));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "RosAclProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Acl` resource
 *
 * @param properties - the TypeScript properties of a `RosAclProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Acl` resource.
 */
// @ts-ignore TS6133
function rosAclPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAclPropsValidator(properties).assertSuccess();
    }
    return {
      AclOperationTypes: ros.listMapper(ros.stringToRosTemplate)(properties.aclOperationTypes),
      AclResourceName: ros.stringToRosTemplate(properties.aclResourceName),
      AclResourcePatternType: ros.stringToRosTemplate(properties.aclResourcePatternType),
      AclResourceType: ros.stringToRosTemplate(properties.aclResourceType),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Username: ros.stringToRosTemplate(properties.username),
      AclPermissionType: ros.stringToRosTemplate(properties.aclPermissionType),
      Host: ros.stringToRosTemplate(properties.host),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KAFKA::Acl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Acl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
 */
export class RosAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KAFKA::Acl";

    /**
     * @Attribute AclResourceType: The resource type.
     */
    public readonly attrAclResourceType: ros.IResolvable;

    /**
     * @Attribute InstanceId: The instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Username: The username.
     */
    public readonly attrUsername: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclOperationTypes: The types of operations allowed by the ACL.
     */
    public aclOperationTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aclResourceName: The resource name.
     * The value can be a topic name, a group ID, a cluster name, or a transaction ID.
     * You can use an asterisk (*) to specify the names of all resources of the specified type.
     * Note You can use an asterisk (*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
     */
    public aclResourceName: string | ros.IResolvable;

    /**
     * @Property aclResourcePatternType: The matching mode. Valid values:
     * LITERAL: exact match
     * PREFIXED: prefix match
     */
    public aclResourcePatternType: string | ros.IResolvable;

    /**
     * @Property aclResourceType: The resource type. Valid values:
     * Topic
     * Group
     * Cluster
     * TransactionalId: transactional ID
     */
    public aclResourceType: string | ros.IResolvable;

    /**
     * @Property instanceId: The instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property username: The username.
     * You can use an asterisk (*) to specify all usernames.
     * Note You can use an asterisk (*) to query the authorized users only after you grant the required permissions to all users.
     */
    public username: string | ros.IResolvable;

    /**
     * @Property aclPermissionType: The authorization method. Valid values:
     * DENY
     * ALLOW
     * Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    public aclPermissionType: string | ros.IResolvable | undefined;

    /**
     * @Property host: The source IP address.
     * Note
     * You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
     * This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    public host: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAcl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclResourceType = this.getAtt('AclResourceType');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrUsername = this.getAtt('Username');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclOperationTypes = props.aclOperationTypes;
        this.aclResourceName = props.aclResourceName;
        this.aclResourcePatternType = props.aclResourcePatternType;
        this.aclResourceType = props.aclResourceType;
        this.instanceId = props.instanceId;
        this.username = props.username;
        this.aclPermissionType = props.aclPermissionType;
        this.host = props.host;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclOperationTypes: this.aclOperationTypes,
            aclResourceName: this.aclResourceName,
            aclResourcePatternType: this.aclResourcePatternType,
            aclResourceType: this.aclResourceType,
            instanceId: this.instanceId,
            username: this.username,
            aclPermissionType: this.aclPermissionType,
            host: this.host,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAclPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
 */
export interface RosConsumerGroupProps {

    /**
     * @Property consumerId: Group name. Value:
     * Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.
     * The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.
     * Once the group name is created, it cannot be modified.
     */
    readonly consumerId: string | ros.IResolvable;

    /**
     * @Property instanceId: Kafka instance id.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property remark: Remark description.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosConsumerGroup.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosConsumerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('consumerId', ros.requiredValidator)(properties.consumerId));
    errors.collect(ros.propertyValidator('consumerId', ros.validateString)(properties.consumerId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosConsumerGroup_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosConsumerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::ConsumerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::ConsumerGroup` resource.
 */
// @ts-ignore TS6133
function rosConsumerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConsumerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      ConsumerId: ros.stringToRosTemplate(properties.consumerId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Remark: ros.stringToRosTemplate(properties.remark),
      Tags: ros.listMapper(rosConsumerGroupTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KAFKA::ConsumerGroup`, which is used to create a consumer group.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
 */
export class RosConsumerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KAFKA::ConsumerGroup";

    /**
     * @Attribute ConsumerId: Consumer group ID
     */
    public readonly attrConsumerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property consumerId: Group name. Value:
     * Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.
     * The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.
     * Once the group name is created, it cannot be modified.
     */
    public consumerId: string | ros.IResolvable;

    /**
     * @Property instanceId: Kafka instance id.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property remark: Remark description.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosConsumerGroup.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConsumerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConsumerId = this.getAtt('ConsumerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.consumerId = props.consumerId;
        this.instanceId = props.instanceId;
        this.remark = props.remark;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            consumerId: this.consumerId,
            instanceId: this.instanceId,
            remark: this.remark,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConsumerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosConsumerGroup {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroup_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::ConsumerGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::ConsumerGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosConsumerGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConsumerGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
 */
export interface RosInstanceProps {

    /**
     * @Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values: 
     *   4: Instance of the public type 
     *   5: Instance of the VPC type
     */
    readonly deployType: number | ros.IResolvable;

    /**
     * @Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
     */
    readonly deployOption?: RosInstance.DeployOptionProperty | ros.IResolvable;

    /**
     * @Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
     */
    readonly diskSize?: number | ros.IResolvable;

    /**
     * @Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values: 
     * 0: Ultra disk 
     * 1: SSD
     */
    readonly diskType?: string | ros.IResolvable;

    /**
     * @Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance. 
     * This parameter must be specified when the DeployType parameter is set to 4.
     */
    readonly eipMax?: number | ros.IResolvable;

    /**
     * @Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance. 
     * For more information about the value range, see Billing.
     */
    readonly ioMax?: number | ros.IResolvable;

    /**
     * @Property ioMaxSpec: Flow specification (recommended) 
     * The IoMax and IoMaxSpec must be optional. 
     * When filling in at the same time, subject to IoMaxSpec. 
     * It is recommended that you only fill in the flow specification 
     *
     */
    readonly ioMaxSpec?: string | ros.IResolvable;

    /**
     * @Property openConnector: Whether open kafka connector or not
     */
    readonly openConnector?: boolean | ros.IResolvable;

    /**
     * @Property partitionNum: Number of partitions(recommended).
     * The number of partitions to be configured for the Message Queue for Apache Kafka instance. 
     * PartitionNum and TopicQuota must be selected. 
     * It is recommended that you only fill in the number of partitions.
     *
     */
    readonly partitionNum?: number | ros.IResolvable;

    /**
     * @Property payType: Pay by hour or month.
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property serverlessConfig: Serverless instance related settings.
     */
    readonly serverlessConfig?: RosInstance.ServerlessConfigProperty | ros.IResolvable;

    /**
     * @Property specType: The edition of the Message Queue for Apache Kafka instance. Valid values: 
     * professional: Professional Edition 
     * normal: Normal version
     */
    readonly specType?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];

    /**
     * @Property topicQuota: Number of topics (not recommended).
     * The number of topics to be configured for the Message Queue for Apache Kafka instance. 
     * PartitionNum and TopicQuota must be selected. 
     * It is recommended that you only fill in the number of partitions.
     * The default value of this parameter varies with different peak traffic values. 
     * Additional fees are charged if the default values are exceeded.
     *  Different specifications have different default values, and extra fees are charged. 
     * For more information, see Billing.
     */
    readonly topicQuota?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('deployType', ros.requiredValidator)(properties.deployType));
    if(properties.deployType && (typeof properties.deployType) !== 'object') {
        errors.collect(ros.propertyValidator('deployType', ros.validateAllowedValues)({
          data: properties.deployType,
          allowedValues: [4,5],
        }));
    }
    errors.collect(ros.propertyValidator('deployType', ros.validateNumber)(properties.deployType));
    errors.collect(ros.propertyValidator('eipMax', ros.validateNumber)(properties.eipMax));
    if(properties.specType && (typeof properties.specType) !== 'object') {
        errors.collect(ros.propertyValidator('specType', ros.validateAllowedValues)({
          data: properties.specType,
          allowedValues: ["normal","professional","professionalForHighRead"],
        }));
    }
    errors.collect(ros.propertyValidator('specType', ros.validateString)(properties.specType));
    errors.collect(ros.propertyValidator('ioMax', ros.validateNumber)(properties.ioMax));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Hour","Month","PrePaid","PostPaid","Serverless"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('partitionNum', ros.validateNumber)(properties.partitionNum));
    if(properties.diskType && (typeof properties.diskType) !== 'object') {
        errors.collect(ros.propertyValidator('diskType', ros.validateAllowedValues)({
          data: properties.diskType,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('deployOption', RosInstance_DeployOptionPropertyValidator)(properties.deployOption));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('ioMaxSpec', ros.validateString)(properties.ioMaxSpec));
    errors.collect(ros.propertyValidator('serverlessConfig', RosInstance_ServerlessConfigPropertyValidator)(properties.serverlessConfig));
    errors.collect(ros.propertyValidator('diskSize', ros.validateNumber)(properties.diskSize));
    errors.collect(ros.propertyValidator('topicQuota', ros.validateNumber)(properties.topicQuota));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('openConnector', ros.validateBoolean)(properties.openConnector));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DeployType: ros.numberToRosTemplate(properties.deployType),
      DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
      DeployOption: rosInstanceDeployOptionPropertyToRosTemplate(properties.deployOption),
      DiskSize: ros.numberToRosTemplate(properties.diskSize),
      DiskType: ros.stringToRosTemplate(properties.diskType),
      EipMax: ros.numberToRosTemplate(properties.eipMax),
      IoMax: ros.numberToRosTemplate(properties.ioMax),
      IoMaxSpec: ros.stringToRosTemplate(properties.ioMaxSpec),
      OpenConnector: ros.booleanToRosTemplate(properties.openConnector),
      PartitionNum: ros.numberToRosTemplate(properties.partitionNum),
      PayType: ros.stringToRosTemplate(properties.payType),
      ServerlessConfig: rosInstanceServerlessConfigPropertyToRosTemplate(properties.serverlessConfig),
      SpecType: ros.stringToRosTemplate(properties.specType),
      Tags: ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
      TopicQuota: ros.numberToRosTemplate(properties.topicQuota),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KAFKA::Instance`, which is used to create an ApsaraMQ for Kafka instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KAFKA::Instance";

    /**
     * @Attribute DomainEndpoint: The default endpoints of the instance in domain name mode.
     */
    public readonly attrDomainEndpoint: ros.IResolvable;

    /**
     * @Attribute Endpoint: The SSL endpoints of the instance in IP address mode.
     */
    public readonly attrEndpoint: ros.IResolvable;

    /**
     * @Attribute InstanceId: Id of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Name: Name of the instance.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute OrderId: Id of the order.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute SaslDomainEndpoint: The Simple Authentication and Security Layer (SASL) endpoints of the instance in domain name mode.
     */
    public readonly attrSaslDomainEndpoint: ros.IResolvable;

    /**
     * @Attribute SslDomainEndpoint: The SSL endpoints of the instance in domain name mode.
     */
    public readonly attrSslDomainEndpoint: ros.IResolvable;

    /**
     * @Attribute SslEndpoint: The SSL endpoints of the instance in IP address mode.
     */
    public readonly attrSslEndpoint: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values: 
     *   4: Instance of the public type 
     *   5: Instance of the VPC type
     */
    public deployType: number | ros.IResolvable;

    /**
     * @Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
     */
    public deployOption: RosInstance.DeployOptionProperty | ros.IResolvable | undefined;

    /**
     * @Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
     */
    public diskSize: number | ros.IResolvable | undefined;

    /**
     * @Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values: 
     * 0: Ultra disk 
     * 1: SSD
     */
    public diskType: string | ros.IResolvable | undefined;

    /**
     * @Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance. 
     * This parameter must be specified when the DeployType parameter is set to 4.
     */
    public eipMax: number | ros.IResolvable | undefined;

    /**
     * @Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance. 
     * For more information about the value range, see Billing.
     */
    public ioMax: number | ros.IResolvable | undefined;

    /**
     * @Property ioMaxSpec: Flow specification (recommended) 
     * The IoMax and IoMaxSpec must be optional. 
     * When filling in at the same time, subject to IoMaxSpec. 
     * It is recommended that you only fill in the flow specification 
     *
     */
    public ioMaxSpec: string | ros.IResolvable | undefined;

    /**
     * @Property openConnector: Whether open kafka connector or not
     */
    public openConnector: boolean | ros.IResolvable | undefined;

    /**
     * @Property partitionNum: Number of partitions(recommended).
     * The number of partitions to be configured for the Message Queue for Apache Kafka instance. 
     * PartitionNum and TopicQuota must be selected. 
     * It is recommended that you only fill in the number of partitions.
     *
     */
    public partitionNum: number | ros.IResolvable | undefined;

    /**
     * @Property payType: Pay by hour or month.
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property serverlessConfig: Serverless instance related settings.
     */
    public serverlessConfig: RosInstance.ServerlessConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property specType: The edition of the Message Queue for Apache Kafka instance. Valid values: 
     * professional: Professional Edition 
     * normal: Normal version
     */
    public specType: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstance.TagsProperty[] | undefined;

    /**
     * @Property topicQuota: Number of topics (not recommended).
     * The number of topics to be configured for the Message Queue for Apache Kafka instance. 
     * PartitionNum and TopicQuota must be selected. 
     * It is recommended that you only fill in the number of partitions.
     * The default value of this parameter varies with different peak traffic values. 
     * Additional fees are charged if the default values are exceeded.
     *  Different specifications have different default values, and extra fees are charged. 
     * For more information, see Billing.
     */
    public topicQuota: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainEndpoint = this.getAtt('DomainEndpoint');
        this.attrEndpoint = this.getAtt('Endpoint');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrName = this.getAtt('Name');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrSaslDomainEndpoint = this.getAtt('SaslDomainEndpoint');
        this.attrSslDomainEndpoint = this.getAtt('SslDomainEndpoint');
        this.attrSslEndpoint = this.getAtt('SslEndpoint');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deployType = props.deployType;
        this.deletionForce = props.deletionForce;
        this.deployOption = props.deployOption;
        this.diskSize = props.diskSize;
        this.diskType = props.diskType;
        this.eipMax = props.eipMax;
        this.ioMax = props.ioMax;
        this.ioMaxSpec = props.ioMaxSpec;
        this.openConnector = props.openConnector;
        this.partitionNum = props.partitionNum;
        this.payType = props.payType;
        this.serverlessConfig = props.serverlessConfig;
        this.specType = props.specType;
        this.tags = props.tags;
        this.topicQuota = props.topicQuota;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deployType: this.deployType,
            deletionForce: this.deletionForce,
            deployOption: this.deployOption,
            diskSize: this.diskSize,
            diskType: this.diskType,
            eipMax: this.eipMax,
            ioMax: this.ioMax,
            ioMaxSpec: this.ioMaxSpec,
            openConnector: this.openConnector,
            partitionNum: this.partitionNum,
            payType: this.payType,
            serverlessConfig: this.serverlessConfig,
            specType: this.specType,
            tags: this.tags,
            topicQuota: this.topicQuota,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface DeployOptionProperty {
        /**
         * @Property kmsKeyId: The ID of the KMS key that is used to encrypt the data disk. This parameter is supported only for instances of the VPC type.
         */
        readonly kmsKeyId?: string | ros.IResolvable;
        /**
         * @Property zoneId: The ID of the zone where you want to deploy the instance. 
     * The zone ID of the instance must be the same as that of the vSwitch.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property selectedZones: Select the primary availability zone candidate set for deployment and the two-dimensional array of the standby availability zone candidate set.
         */
        readonly selectedZones?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property vSwitchIds: List of vSwitch IDs deployed by the instance. This parameter is required for V2 and V3 series instances. Confluent type instances support this parameter, and at least one of VSwitchIds and VSwitchId needs to be filled in. When both are filled in, VSwitchIds is used first.
         */
        readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property config: The initial configurations of the Message Queue for Apache Kafka instance. If you do not specify this parameter, it is left empty.The Config parameter supports the following parameters:
     * enable.vpc_sasl_ssl: specifies whether to enable VPC transmission encryption. Valid values: 
     * true: indicates that VPC transmission encryption is enabled. If you enable VPC transmission encryption, enable access control list (ACL).
     * false: indicates that VPC transmission encryption is disabled. By default, VPC transmission encryption is disabled.
     * 
     * enable.acl: specifies whether to enable ACL. Valid values: 
     * true: indicates that ACL is enabled.
     * false: indicates that ACL is disabled. By default, ACL is disabled.
     * 
     * kafka.log.retention.hours: the maximum message retention period when the disk capacity is sufficient. Unit: hours. Valid values: 24 to 480. Default value: 72. When the disk usage reaches 85%, the disk capacity is considered insufficient, and the system deletes messages in the order in which messages are stored, from the earliest to latest.
     * 
     * kafka.message.max.bytes: the maximum size of messages that Message Queue for Apache Kafka can send and receive. Unit: byte. Valid values: 1048576 to 10485760. Default value: 1048576. Before you modify the maximum message size, make sure that the new value is consistent with those on the producer and consumer.
         */
        readonly config?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch associated with the VPC.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property securityGroup: The security group of the instance. 
     * If you do not specify this parameter, Message Queue for Apache Kafka automatically 
     * configures a security group for the instance. If you specify this parameter, 
     * you must create the specified security group in advance. 
     * For more information, see Create a security group.
         */
        readonly securityGroup?: string | ros.IResolvable;
        /**
         * @Property isSetUserAndPassword: Specifies whether to set a new user name and password for instance. Valid values:
     *   true: Set a new user name and password.
     *   false: Do not set a new user name and password.
     * This parameter is supported only for instances of the Internet and VPC type.
         */
        readonly isSetUserAndPassword?: boolean | ros.IResolvable;
        /**
         * @Property name: The new name of the instance.
         */
        readonly name?: string | ros.IResolvable;
        /**
         * @Property isEipInner: Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
     *   true: The instance supports EIP mode.
     *   false: The instance does not support EIP mode.
     * This parameter must be consistent with the instance type. 
     * Set the parameter to true for instances of the Internet and VPC type or to false for instances of the VPC type.
         */
        readonly isEipInner?: boolean | ros.IResolvable;
        /**
         * @Property crossZone: Specifies whether to enable cross-zone deployment. Valid values: 
     * true: indicates that cross-zone deployment is enabled. 
     * false: indicates that cross-zone deployment is disabled.
         */
        readonly crossZone?: boolean | ros.IResolvable;
        /**
         * @Property vpcId: The ID of the VPC on which you want to deploy the instance.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property username: The new user name for the instance. 
     * This parameter is supported only for instances of the Internet and VPC type.
     * Support characters (uppercase and lowercase), numbers, length 8-40
         */
        readonly username?: string | ros.IResolvable;
        /**
         * @Property isForceSelectedZones: Whether to force deployment in the selected availability zone.
         */
        readonly isForceSelectedZones?: boolean | ros.IResolvable;
        /**
         * @Property serviceVersion: The version of the Message Queue for Apache Kafka instance. For example: 0.10.2, 2.2.0 and etc.
         */
        readonly serviceVersion?: string | ros.IResolvable;
        /**
         * @Property userPhoneNum: The phone number of the alert contact.
         */
        readonly userPhoneNum?: string | ros.IResolvable;
        /**
         * @Property deployModule: The deployment mode of the instance. Valid values:
     *   vpc: virtual private cloud (VPC) 
     *   eip: Internet and VPC
     * The deployment mode of the instance must be consistent with the instance type. 
     * Set this value to vpc if your instance type is VPC. 
     * Set this value to eip if your instance type is Internet and VPC.
         */
        readonly deployModule: string | ros.IResolvable;
        /**
         * @Property password: The new password for the instance. 
     * This parameter is supported only for instances of the Internet and VPC type.
     * Support characters (uppercase and lowercase), numbers, length 8-40, 
     * containing at least one lowercase letter, one uppercase letter, and one number
         */
        readonly password?: string | ros.IResolvable;
        /**
         * @Property notifier: Alert contact.
         */
        readonly notifier?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DeployOptionProperty`
 *
 * @param properties - the TypeScript properties of a `DeployOptionProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_DeployOptionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.selectedZones && (Array.isArray(properties.selectedZones) || (typeof properties.selectedZones) === 'string')) {
        errors.collect(ros.propertyValidator('selectedZones', ros.validateLength)({
            data: properties.selectedZones.length,
            min: 0,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('selectedZones', ros.listValidator(ros.validateString))(properties.selectedZones));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('config', ros.hashValidator(ros.validateAny))(properties.config));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroup', ros.validateString)(properties.securityGroup));
    errors.collect(ros.propertyValidator('isSetUserAndPassword', ros.validateBoolean)(properties.isSetUserAndPassword));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('isEipInner', ros.validateBoolean)(properties.isEipInner));
    errors.collect(ros.propertyValidator('crossZone', ros.validateBoolean)(properties.crossZone));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.username && (typeof properties.username) !== 'object') {
        errors.collect(ros.propertyValidator('username', ros.validateAllowedPattern)({
          data: properties.username,
          reg: /[a-zA-Z0-9]{8,40}/
        }));
    }
    errors.collect(ros.propertyValidator('username', ros.validateString)(properties.username));
    errors.collect(ros.propertyValidator('isForceSelectedZones', ros.validateBoolean)(properties.isForceSelectedZones));
    errors.collect(ros.propertyValidator('serviceVersion', ros.validateString)(properties.serviceVersion));
    errors.collect(ros.propertyValidator('userPhoneNum', ros.validateString)(properties.userPhoneNum));
    errors.collect(ros.propertyValidator('deployModule', ros.requiredValidator)(properties.deployModule));
    if(properties.deployModule && (typeof properties.deployModule) !== 'object') {
        errors.collect(ros.propertyValidator('deployModule', ros.validateAllowedValues)({
          data: properties.deployModule,
          allowedValues: ["vpc","eip"],
        }));
    }
    errors.collect(ros.propertyValidator('deployModule', ros.validateString)(properties.deployModule));
    if(properties.password && (typeof properties.password) !== 'object') {
        errors.collect(ros.propertyValidator('password', ros.validateAllowedPattern)({
          data: properties.password,
          reg: /^(?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])[A-Za-z\d]{8,40}$/
        }));
    }
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    errors.collect(ros.propertyValidator('notifier', ros.validateString)(properties.notifier));
    return errors.wrap('supplied properties not correct for "DeployOptionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Instance.DeployOption` resource
 *
 * @param properties - the TypeScript properties of a `DeployOptionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Instance.DeployOption` resource.
 */
// @ts-ignore TS6133
function rosInstanceDeployOptionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_DeployOptionPropertyValidator(properties).assertSuccess();
    return {
      KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      SelectedZones: ros.listMapper(ros.stringToRosTemplate)(properties.selectedZones),
      VSwitchIds: ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      Config: ros.hashMapper(ros.objectToRosTemplate)(properties.config),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      SecurityGroup: ros.stringToRosTemplate(properties.securityGroup),
      IsSetUserAndPassword: ros.booleanToRosTemplate(properties.isSetUserAndPassword),
      Name: ros.stringToRosTemplate(properties.name),
      IsEipInner: ros.booleanToRosTemplate(properties.isEipInner),
      CrossZone: ros.booleanToRosTemplate(properties.crossZone),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      Username: ros.stringToRosTemplate(properties.username),
      IsForceSelectedZones: ros.booleanToRosTemplate(properties.isForceSelectedZones),
      ServiceVersion: ros.stringToRosTemplate(properties.serviceVersion),
      UserPhoneNum: ros.stringToRosTemplate(properties.userPhoneNum),
      DeployModule: ros.stringToRosTemplate(properties.deployModule),
      Password: ros.stringToRosTemplate(properties.password),
      Notifier: ros.stringToRosTemplate(properties.notifier),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface ServerlessConfigProperty {
        /**
         * @Property reservedPublishCapacity: Reserved sending traffic specification value, minimum 60
         */
        readonly reservedPublishCapacity: number | ros.IResolvable;
        /**
         * @Property reservedSubscribeCapacity: Reserved consumption traffic specification value, minimum 20
         */
        readonly reservedSubscribeCapacity: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServerlessConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ServerlessConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_ServerlessConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('reservedPublishCapacity', ros.requiredValidator)(properties.reservedPublishCapacity));
    if(properties.reservedPublishCapacity && (typeof properties.reservedPublishCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('reservedPublishCapacity', ros.validateRange)({
            data: properties.reservedPublishCapacity,
            min: 60,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('reservedPublishCapacity', ros.validateNumber)(properties.reservedPublishCapacity));
    errors.collect(ros.propertyValidator('reservedSubscribeCapacity', ros.requiredValidator)(properties.reservedSubscribeCapacity));
    if(properties.reservedSubscribeCapacity && (typeof properties.reservedSubscribeCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('reservedSubscribeCapacity', ros.validateRange)({
            data: properties.reservedSubscribeCapacity,
            min: 20,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('reservedSubscribeCapacity', ros.validateNumber)(properties.reservedSubscribeCapacity));
    return errors.wrap('supplied properties not correct for "ServerlessConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Instance.ServerlessConfig` resource
 *
 * @param properties - the TypeScript properties of a `ServerlessConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Instance.ServerlessConfig` resource.
 */
// @ts-ignore TS6133
function rosInstanceServerlessConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_ServerlessConfigPropertyValidator(properties).assertSuccess();
    return {
      ReservedPublishCapacity: ros.numberToRosTemplate(properties.reservedPublishCapacity),
      ReservedSubscribeCapacity: ros.numberToRosTemplate(properties.reservedSubscribeCapacity),
    };
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosSaslUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
 */
export interface RosSaslUserProps {

    /**
     * @Property instanceId: The instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property password: The password of the SASL user.
     */
    readonly password: string | ros.IResolvable;

    /**
     * @Property username: The name of the SASL user.
     */
    readonly username: string | ros.IResolvable;

    /**
     * @Property mechanism: The encryption method. Valid values:
     * SCRAM-SHA-512 (default)
     * SCRAM-SHA-256
     * Note
     * This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    readonly mechanism?: string | ros.IResolvable;

    /**
     * @Property type: The type of the Simple Authentication and Security Layer (SASL) user. Valid values:
     * plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
     * SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
     * LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
     * Default value: plain.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSaslUserProps`
 *
 * @param properties - the TypeScript properties of a `RosSaslUserProps`
 *
 * @returns the result of the validation.
 */
function RosSaslUserPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["LDAP","plain","scram"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('username', ros.requiredValidator)(properties.username));
    if(properties.username && (typeof properties.username) !== 'object') {
        errors.collect(ros.propertyValidator('username', ros.validateAllowedPattern)({
          data: properties.username,
          reg: /^[a-zA-Z][a-zA-Z0-9_]{2,63}$/
        }));
    }
    errors.collect(ros.propertyValidator('username', ros.validateString)(properties.username));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    if(properties.instanceId && (Array.isArray(properties.instanceId) || (typeof properties.instanceId) === 'string')) {
        errors.collect(ros.propertyValidator('instanceId', ros.validateLength)({
            data: properties.instanceId.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.mechanism && (typeof properties.mechanism) !== 'object') {
        errors.collect(ros.propertyValidator('mechanism', ros.validateAllowedValues)({
          data: properties.mechanism,
          allowedValues: ["SCRAM-SHA-512","SCRAM-SHA-256"],
        }));
    }
    errors.collect(ros.propertyValidator('mechanism', ros.validateString)(properties.mechanism));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosSaslUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::SaslUser` resource
 *
 * @param properties - the TypeScript properties of a `RosSaslUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::SaslUser` resource.
 */
// @ts-ignore TS6133
function rosSaslUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSaslUserPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Password: ros.stringToRosTemplate(properties.password),
      Username: ros.stringToRosTemplate(properties.username),
      Mechanism: ros.stringToRosTemplate(properties.mechanism),
      Type: ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KAFKA::SaslUser`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SaslUser` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
 */
export class RosSaslUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KAFKA::SaslUser";

    /**
     * @Attribute InstanceId: The instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Username: The user name of the instance.
     */
    public readonly attrUsername: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property password: The password of the SASL user.
     */
    public password: string | ros.IResolvable;

    /**
     * @Property username: The name of the SASL user.
     */
    public username: string | ros.IResolvable;

    /**
     * @Property mechanism: The encryption method. Valid values:
     * SCRAM-SHA-512 (default)
     * SCRAM-SHA-256
     * Note
     * This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    public mechanism: string | ros.IResolvable | undefined;

    /**
     * @Property type: The type of the Simple Authentication and Security Layer (SASL) user. Valid values:
     * plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
     * SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
     * LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
     * Default value: plain.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSaslUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSaslUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrUsername = this.getAtt('Username');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.password = props.password;
        this.username = props.username;
        this.mechanism = props.mechanism;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            password: this.password,
            username: this.username,
            mechanism: this.mechanism,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSaslUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-topic
 */
export interface RosTopicProps {

    /**
     * @Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * You can call the GetInstanceList operation to query instances.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property remark: The description of the topic. The value of this parameter must meet the following
     * requirements:
     * The value can only contain letters, digits, hyphens (-), and underscores (_).
     * The value must be 3 to 64 characters in length.
     */
    readonly remark: string | ros.IResolvable;

    /**
     * @Property topic: The name of the topic. The value of this parameter must meet the following requirements:
     * The name can only contain letters, digits, hyphens (-), and underscores (_).
     * The name must be 3 to 64 characters in length, and will be automatically truncated
     * if it contains more characters.
     * The name cannot be modified after being created.
     */
    readonly topic: string | ros.IResolvable;

    /**
     * @Property compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values:
     * false: uses the default log cleanup policy.
     * true: uses the Apache Kafka log compaction policy.
     */
    readonly compactTopic?: boolean | ros.IResolvable;

    /**
     * @Property config: Supplementary configuration.
     * Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
     * This parameter can only be specified if the LocalTopic value is true.
     * NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
     */
    readonly config?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property localTopic: The storage engine of the topic. Valid values:
     * false: the Cloud Storage mode.
     * true: the Local Storage mode.
     */
    readonly localTopic?: boolean | ros.IResolvable;

    /**
     * @Property minInsyncReplicas: The minimum number of ISR sync replicas.
     * This parameter can only be specified if the LocalTopic value is true.
     * The value must be less than the number of Topic copies.
     * The number of synchronous replicas is limited to 1~3.
     */
    readonly minInsyncReplicas?: number | ros.IResolvable;

    /**
     * @Property partitionNum: The number of partitions in the topic. Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    readonly partitionNum?: number | ros.IResolvable;

    /**
     * @Property replicationFactor: The number of copies of the topic.
     * This parameter can only be specified if the LocalTopic value is true.
     * The number of copies is limited to 1~3.
     * Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
     */
    readonly replicationFactor?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosTopic.TagsProperty[];
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
    errors.collect(ros.propertyValidator('partitionNum', ros.validateNumber)(properties.partitionNum));
    errors.collect(ros.propertyValidator('compactTopic', ros.validateBoolean)(properties.compactTopic));
    if(properties.replicationFactor && (typeof properties.replicationFactor) !== 'object') {
        errors.collect(ros.propertyValidator('replicationFactor', ros.validateRange)({
            data: properties.replicationFactor,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('replicationFactor', ros.validateNumber)(properties.replicationFactor));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('config', ros.hashValidator(ros.validateAny))(properties.config));
    errors.collect(ros.propertyValidator('topic', ros.requiredValidator)(properties.topic));
    errors.collect(ros.propertyValidator('topic', ros.validateString)(properties.topic));
    if(properties.minInsyncReplicas && (typeof properties.minInsyncReplicas) !== 'object') {
        errors.collect(ros.propertyValidator('minInsyncReplicas', ros.validateRange)({
            data: properties.minInsyncReplicas,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('minInsyncReplicas', ros.validateNumber)(properties.minInsyncReplicas));
    errors.collect(ros.propertyValidator('localTopic', ros.validateBoolean)(properties.localTopic));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosTopic_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('remark', ros.requiredValidator)(properties.remark));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosTopicProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Topic` resource
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Topic` resource.
 */
// @ts-ignore TS6133
function rosTopicPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTopicPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Remark: ros.stringToRosTemplate(properties.remark),
      Topic: ros.stringToRosTemplate(properties.topic),
      CompactTopic: ros.booleanToRosTemplate(properties.compactTopic),
      Config: ros.hashMapper(ros.objectToRosTemplate)(properties.config),
      LocalTopic: ros.booleanToRosTemplate(properties.localTopic),
      MinInsyncReplicas: ros.numberToRosTemplate(properties.minInsyncReplicas),
      PartitionNum: ros.numberToRosTemplate(properties.partitionNum),
      ReplicationFactor: ros.numberToRosTemplate(properties.replicationFactor),
      Tags: ros.listMapper(rosTopicTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::KAFKA::Topic`, which is used to create a topic.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-topic
 */
export class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KAFKA::Topic";

    /**
     * @Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
You can call the GetInstanceList operation to query instances.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Topic: Topic name.
     */
    public readonly attrTopic: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * You can call the GetInstanceList operation to query instances.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property remark: The description of the topic. The value of this parameter must meet the following
     * requirements:
     * The value can only contain letters, digits, hyphens (-), and underscores (_).
     * The value must be 3 to 64 characters in length.
     */
    public remark: string | ros.IResolvable;

    /**
     * @Property topic: The name of the topic. The value of this parameter must meet the following requirements:
     * The name can only contain letters, digits, hyphens (-), and underscores (_).
     * The name must be 3 to 64 characters in length, and will be automatically truncated
     * if it contains more characters.
     * The name cannot be modified after being created.
     */
    public topic: string | ros.IResolvable;

    /**
     * @Property compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values:
     * false: uses the default log cleanup policy.
     * true: uses the Apache Kafka log compaction policy.
     */
    public compactTopic: boolean | ros.IResolvable | undefined;

    /**
     * @Property config: Supplementary configuration.
     * Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
     * This parameter can only be specified if the LocalTopic value is true.
     * NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
     */
    public config: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property localTopic: The storage engine of the topic. Valid values:
     * false: the Cloud Storage mode.
     * true: the Local Storage mode.
     */
    public localTopic: boolean | ros.IResolvable | undefined;

    /**
     * @Property minInsyncReplicas: The minimum number of ISR sync replicas.
     * This parameter can only be specified if the LocalTopic value is true.
     * The value must be less than the number of Topic copies.
     * The number of synchronous replicas is limited to 1~3.
     */
    public minInsyncReplicas: number | ros.IResolvable | undefined;

    /**
     * @Property partitionNum: The number of partitions in the topic. Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    public partitionNum: number | ros.IResolvable | undefined;

    /**
     * @Property replicationFactor: The number of copies of the topic.
     * This parameter can only be specified if the LocalTopic value is true.
     * The number of copies is limited to 1~3.
     * Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
     */
    public replicationFactor: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosTopic.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrTopic = this.getAtt('Topic');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.remark = props.remark;
        this.topic = props.topic;
        this.compactTopic = props.compactTopic;
        this.config = props.config;
        this.localTopic = props.localTopic;
        this.minInsyncReplicas = props.minInsyncReplicas;
        this.partitionNum = props.partitionNum;
        this.replicationFactor = props.replicationFactor;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            remark: this.remark,
            topic: this.topic,
            compactTopic: this.compactTopic,
            config: this.config,
            localTopic: this.localTopic,
            minInsyncReplicas: this.minInsyncReplicas,
            partitionNum: this.partitionNum,
            replicationFactor: this.replicationFactor,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosTopic {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosTopic_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Topic.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::KAFKA::Topic.Tags` resource.
 */
// @ts-ignore TS6133
function rosTopicTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTopic_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
