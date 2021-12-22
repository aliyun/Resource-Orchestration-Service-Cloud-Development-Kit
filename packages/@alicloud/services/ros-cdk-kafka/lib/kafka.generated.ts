// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::KAFKA::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values: 
     *   4: Instance of the public type 
     *   5: Instance of the VPC type
     */
    readonly deployType: number | ros.IResolvable;

    /**
     * @Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
     */
    readonly diskSize: number | ros.IResolvable;

    /**
     * @Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values: 
     * 0: Ultra disk 
     * 1: SSD
     */
    readonly diskType: string | ros.IResolvable;

    /**
     * @Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance. 
     * The default value of this parameter varies with different peak traffic values. 
     * Additional fees are charged if the default values are exceeded.
     *  Different specifications have different default values, and extra fees are charged. 
     * For more information, see Billing.
     */
    readonly topicQuota: number | ros.IResolvable;

    /**
     * @Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
     */
    readonly deployOption?: RosInstance.DeployOptionProperty | ros.IResolvable;

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
     * @Property payType: Pay by hour or month.
     */
    readonly payType?: string | ros.IResolvable;

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
          allowedValues: ["Hour","Month"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('diskType', ros.requiredValidator)(properties.diskType));
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
    errors.collect(ros.propertyValidator('diskSize', ros.requiredValidator)(properties.diskSize));
    errors.collect(ros.propertyValidator('diskSize', ros.validateNumber)(properties.diskSize));
    errors.collect(ros.propertyValidator('topicQuota', ros.requiredValidator)(properties.topicQuota));
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
      DiskSize: ros.numberToRosTemplate(properties.diskSize),
      DiskType: ros.stringToRosTemplate(properties.diskType),
      TopicQuota: ros.numberToRosTemplate(properties.topicQuota),
      DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
      DeployOption: rosInstanceDeployOptionPropertyToRosTemplate(properties.deployOption),
      EipMax: ros.numberToRosTemplate(properties.eipMax),
      IoMax: ros.numberToRosTemplate(properties.ioMax),
      IoMaxSpec: ros.stringToRosTemplate(properties.ioMaxSpec),
      OpenConnector: ros.booleanToRosTemplate(properties.openConnector),
      PayType: ros.stringToRosTemplate(properties.payType),
      SpecType: ros.stringToRosTemplate(properties.specType),
      Tags: ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::KAFKA::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KAFKA::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values: 
     *   4: Instance of the public type 
     *   5: Instance of the VPC type
     */
    public deployType: number | ros.IResolvable;

    /**
     * @Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
     */
    public diskSize: number | ros.IResolvable;

    /**
     * @Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values: 
     * 0: Ultra disk 
     * 1: SSD
     */
    public diskType: string | ros.IResolvable;

    /**
     * @Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance. 
     * The default value of this parameter varies with different peak traffic values. 
     * Additional fees are charged if the default values are exceeded.
     *  Different specifications have different default values, and extra fees are charged. 
     * For more information, see Billing.
     */
    public topicQuota: number | ros.IResolvable;

    /**
     * @Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
     */
    public deployOption: RosInstance.DeployOptionProperty | ros.IResolvable | undefined;

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
     * @Property payType: Pay by hour or month.
     */
    public payType: string | ros.IResolvable | undefined;

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
     * Create a new `ALIYUN::KAFKA::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrName = this.getAtt('Name');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deployType = props.deployType;
        this.diskSize = props.diskSize;
        this.diskType = props.diskType;
        this.topicQuota = props.topicQuota;
        this.deletionForce = props.deletionForce;
        this.deployOption = props.deployOption;
        this.eipMax = props.eipMax;
        this.ioMax = props.ioMax;
        this.ioMaxSpec = props.ioMaxSpec;
        this.openConnector = props.openConnector;
        this.payType = props.payType;
        this.specType = props.specType;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deployType: this.deployType,
            diskSize: this.diskSize,
            diskType: this.diskType,
            topicQuota: this.topicQuota,
            deletionForce: this.deletionForce,
            deployOption: this.deployOption,
            eipMax: this.eipMax,
            ioMax: this.ioMax,
            ioMaxSpec: this.ioMaxSpec,
            openConnector: this.openConnector,
            payType: this.payType,
            specType: this.specType,
            tags: this.tags,
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
         * @Property isEipInner: Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
     *   true: The instance supports EIP mode.
     *   false: The instance does not support EIP mode.
     * This parameter must be consistent with the instance type. 
     * Set the parameter to true for instances of the Internet and VPC type or to false for instances of the VPC type.
         */
        readonly isEipInner?: boolean | ros.IResolvable;
        /**
         * @Property vpcId: The ID of the VPC on which you want to deploy the instance.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property zoneId: The ID of the zone where you want to deploy the instance. 
     * The zone ID of the instance must be the same as that of the vSwitch.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property username: The new user name for the instance. 
     * This parameter is supported only for instances of the Internet and VPC type.
     * Support characters (uppercase and lowercase), numbers, length 8-40
         */
        readonly username?: string | ros.IResolvable;
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
         * @Property deployModule: The deployment mode of the instance. Valid values:
     *   vpc: virtual private cloud (VPC) 
     *   eip: Internet and VPC
     * The deployment mode of the instance must be consistent with the instance type. 
     * Set this value to vpc if your instance type is VPC. 
     * Set this value to eip if your instance type is Internet and VPC.
         */
        readonly deployModule: string | ros.IResolvable;
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
         * @Property password: The new password for the instance. 
     * This parameter is supported only for instances of the Internet and VPC type.
     * Support characters (uppercase and lowercase), numbers, length 8-40, 
     * containing at least one lowercase letter, one uppercase letter, and one number
         */
        readonly password?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('isEipInner', ros.validateBoolean)(properties.isEipInner));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.username && (typeof properties.username) !== 'object') {
        errors.collect(ros.propertyValidator('username', ros.validateAllowedPattern)({
          data: properties.username,
          reg: /[a-zA-Z0-9]{8,40}/
        }));
    }
    errors.collect(ros.propertyValidator('username', ros.validateString)(properties.username));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroup', ros.validateString)(properties.securityGroup));
    errors.collect(ros.propertyValidator('deployModule', ros.requiredValidator)(properties.deployModule));
    if(properties.deployModule && (typeof properties.deployModule) !== 'object') {
        errors.collect(ros.propertyValidator('deployModule', ros.validateAllowedValues)({
          data: properties.deployModule,
          allowedValues: ["vpc","eip"],
        }));
    }
    errors.collect(ros.propertyValidator('deployModule', ros.validateString)(properties.deployModule));
    errors.collect(ros.propertyValidator('isSetUserAndPassword', ros.validateBoolean)(properties.isSetUserAndPassword));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.password && (typeof properties.password) !== 'object') {
        errors.collect(ros.propertyValidator('password', ros.validateAllowedPattern)({
          data: properties.password,
          reg: /^(?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])[A-Za-z\d]{8,40}$/
        }));
    }
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
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
      IsEipInner: ros.booleanToRosTemplate(properties.isEipInner),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      Username: ros.stringToRosTemplate(properties.username),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      SecurityGroup: ros.stringToRosTemplate(properties.securityGroup),
      DeployModule: ros.stringToRosTemplate(properties.deployModule),
      IsSetUserAndPassword: ros.booleanToRosTemplate(properties.isSetUserAndPassword),
      Name: ros.stringToRosTemplate(properties.name),
      Password: ros.stringToRosTemplate(properties.password),
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
 * Properties for defining a `ALIYUN::KAFKA::Topic`
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
     * @Property partitionNum: The number of partitions in the topic. Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    readonly partitionNum?: number | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('topic', ros.requiredValidator)(properties.topic));
    errors.collect(ros.propertyValidator('topic', ros.validateString)(properties.topic));
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
      PartitionNum: ros.numberToRosTemplate(properties.partitionNum),
    };
}

/**
 * A ROS template type:  `ALIYUN::KAFKA::Topic`
 */
export class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::KAFKA::Topic";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * @Property partitionNum: The number of partitions in the topic. Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    public partitionNum: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::KAFKA::Topic`.
     *
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
        this.partitionNum = props.partitionNum;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            remark: this.remark,
            topic: this.topic,
            partitionNum: this.partitionNum,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
