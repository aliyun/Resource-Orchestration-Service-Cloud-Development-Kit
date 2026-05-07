// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAppGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
 */
export interface RosAppGroupProps {

    /**
     * @Property appName: The application name.
     */
    readonly appName: string | ros.IResolvable;

    /**
     * @Property groupId: The group ID of the application group.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * @Property namespace: The namespace of the application group.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * @Property appKey: The application key.
     */
    readonly appKey?: string | ros.IResolvable;

    /**
     * @Property appType: The type of the application.
     */
    readonly appType?: number | ros.IResolvable;

    /**
     * @Property appVersion: The version of the application.
     */
    readonly appVersion?: number | ros.IResolvable;

    /**
     * @Property description: The description of the application group.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property enableLog: Whether to enable log.
     */
    readonly enableLog?: boolean | ros.IResolvable;

    /**
     * @Property maxJobs: The maximum number of jobs.
     */
    readonly maxJobs?: number | ros.IResolvable;

    /**
     * @Property monitorConfig: The monitor configuration in JSON format.
     */
    readonly monitorConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property monitorContacts: The monitor contacts in JSON format.
     */
    readonly monitorContacts?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property namespaceName: The name of the namespace.
     */
    readonly namespaceName?: string | ros.IResolvable;

    /**
     * @Property namespaceSource: The namespace source of the job.
     */
    readonly namespaceSource?: string | ros.IResolvable;

    /**
     * @Property notificationPolicyName: The notification policy name.
     */
    readonly notificationPolicyName?: string | ros.IResolvable;

    /**
     * @Property scheduleBusyWorkers: Whether to schedule busy workers.
     */
    readonly scheduleBusyWorkers?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAppGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAppGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAppGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.monitorContacts && (Array.isArray(properties.monitorContacts) || (typeof properties.monitorContacts) === 'string')) {
        errors.collect(ros.propertyValidator('monitorContacts', ros.validateLength)({
            data: properties.monitorContacts.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('monitorContacts', ros.listValidator(ros.validateAny))(properties.monitorContacts));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('enableLog', ros.validateBoolean)(properties.enableLog));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('appName', ros.requiredValidator)(properties.appName));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    if(properties.appVersion && (typeof properties.appVersion) !== 'object') {
        errors.collect(ros.propertyValidator('appVersion', ros.validateAllowedValues)({
          data: properties.appVersion,
          allowedValues: [1,2],
        }));
    }
    errors.collect(ros.propertyValidator('appVersion', ros.validateNumber)(properties.appVersion));
    errors.collect(ros.propertyValidator('namespaceName', ros.validateString)(properties.namespaceName));
    errors.collect(ros.propertyValidator('appKey', ros.validateString)(properties.appKey));
    errors.collect(ros.propertyValidator('namespaceSource', ros.validateString)(properties.namespaceSource));
    errors.collect(ros.propertyValidator('notificationPolicyName', ros.validateString)(properties.notificationPolicyName));
    if(properties.appType && (typeof properties.appType) !== 'object') {
        errors.collect(ros.propertyValidator('appType', ros.validateAllowedValues)({
          data: properties.appType,
          allowedValues: [1,2],
        }));
    }
    errors.collect(ros.propertyValidator('appType', ros.validateNumber)(properties.appType));
    errors.collect(ros.propertyValidator('maxJobs', ros.validateNumber)(properties.maxJobs));
    errors.collect(ros.propertyValidator('monitorConfig', ros.hashValidator(ros.validateAny))(properties.monitorConfig));
    errors.collect(ros.propertyValidator('scheduleBusyWorkers', ros.validateBoolean)(properties.scheduleBusyWorkers));
    return errors.wrap('supplied properties not correct for "RosAppGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SchedulerX::AppGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosAppGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SchedulerX::AppGroup` resource.
 */
// @ts-ignore TS6133
function rosAppGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAppGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'AppName': ros.stringToRosTemplate(properties.appName),
      'GroupId': ros.stringToRosTemplate(properties.groupId),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'AppKey': ros.stringToRosTemplate(properties.appKey),
      'AppType': ros.numberToRosTemplate(properties.appType),
      'AppVersion': ros.numberToRosTemplate(properties.appVersion),
      'Description': ros.stringToRosTemplate(properties.description),
      'EnableLog': ros.booleanToRosTemplate(properties.enableLog),
      'MaxJobs': ros.numberToRosTemplate(properties.maxJobs),
      'MonitorConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.monitorConfig),
      'MonitorContacts': ros.listMapper(ros.objectToRosTemplate)(properties.monitorContacts),
      'NamespaceName': ros.stringToRosTemplate(properties.namespaceName),
      'NamespaceSource': ros.stringToRosTemplate(properties.namespaceSource),
      'NotificationPolicyName': ros.stringToRosTemplate(properties.notificationPolicyName),
      'ScheduleBusyWorkers': ros.booleanToRosTemplate(properties.scheduleBusyWorkers),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SchedulerX::AppGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AppGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
 */
export class RosAppGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SchedulerX::AppGroup";

    /**
     * @Attribute AppGroupId: The group ID of the application group.
     */
    public readonly attrAppGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appName: The application name.
     */
    public appName: string | ros.IResolvable;

    /**
     * @Property groupId: The group ID of the application group.
     */
    public groupId: string | ros.IResolvable;

    /**
     * @Property namespace: The namespace of the application group.
     */
    public namespace: string | ros.IResolvable;

    /**
     * @Property appKey: The application key.
     */
    public appKey: string | ros.IResolvable | undefined;

    /**
     * @Property appType: The type of the application.
     */
    public appType: number | ros.IResolvable | undefined;

    /**
     * @Property appVersion: The version of the application.
     */
    public appVersion: number | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the application group.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property enableLog: Whether to enable log.
     */
    public enableLog: boolean | ros.IResolvable | undefined;

    /**
     * @Property maxJobs: The maximum number of jobs.
     */
    public maxJobs: number | ros.IResolvable | undefined;

    /**
     * @Property monitorConfig: The monitor configuration in JSON format.
     */
    public monitorConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property monitorContacts: The monitor contacts in JSON format.
     */
    public monitorContacts: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property namespaceName: The name of the namespace.
     */
    public namespaceName: string | ros.IResolvable | undefined;

    /**
     * @Property namespaceSource: The namespace source of the job.
     */
    public namespaceSource: string | ros.IResolvable | undefined;

    /**
     * @Property notificationPolicyName: The notification policy name.
     */
    public notificationPolicyName: string | ros.IResolvable | undefined;

    /**
     * @Property scheduleBusyWorkers: Whether to schedule busy workers.
     */
    public scheduleBusyWorkers: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAppGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppGroupId = this.getAtt('AppGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.groupId = props.groupId;
        this.namespace = props.namespace;
        this.appKey = props.appKey;
        this.appType = props.appType;
        this.appVersion = props.appVersion;
        this.description = props.description;
        this.enableLog = props.enableLog;
        this.maxJobs = props.maxJobs;
        this.monitorConfig = props.monitorConfig;
        this.monitorContacts = props.monitorContacts;
        this.namespaceName = props.namespaceName;
        this.namespaceSource = props.namespaceSource;
        this.notificationPolicyName = props.notificationPolicyName;
        this.scheduleBusyWorkers = props.scheduleBusyWorkers;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appName: this.appName,
            groupId: this.groupId,
            namespace: this.namespace,
            appKey: this.appKey,
            appType: this.appType,
            appVersion: this.appVersion,
            description: this.description,
            enableLog: this.enableLog,
            maxJobs: this.maxJobs,
            monitorConfig: this.monitorConfig,
            monitorContacts: this.monitorContacts,
            namespaceName: this.namespaceName,
            namespaceSource: this.namespaceSource,
            notificationPolicyName: this.notificationPolicyName,
            scheduleBusyWorkers: this.scheduleBusyWorkers,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAppGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
 */
export interface RosJobProps {

    /**
     * @Property executeMode: The execute mode of the job.
     */
    readonly executeMode: string | ros.IResolvable;

    /**
     * @Property groupId: The group ID of the job.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * @Property jobType: The type of the job.
     */
    readonly jobType: string | ros.IResolvable;

    /**
     * @Property name: The name of the job.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property namespace: The namespace of the job.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * @Property timeType: The time type of the job.
     * cron：1
     * fixed_rate：3
     * second_delay：4
     * one_time ：5
     * api：100
     * none：-1
     */
    readonly timeType: number | ros.IResolvable;

    /**
     * @Property attemptInterval: The attempt interval of the job.
     */
    readonly attemptInterval?: number | ros.IResolvable;

    /**
     * @Property calendar: The calendar of the job.
     */
    readonly calendar?: string | ros.IResolvable;

    /**
     * @Property className: The class name of the job.
     */
    readonly className?: string | ros.IResolvable;

    /**
     * @Property consumerSize: The consumer size of the job.
     */
    readonly consumerSize?: number | ros.IResolvable;

    /**
     * @Property contactInfo: The contact info of the job.
     */
    readonly contactInfo?: Array<RosJob.ContactInfoProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property content: The content of the job.
     */
    readonly content?: string | ros.IResolvable;

    /**
     * @Property dataOffset: The data offset of the job.
     */
    readonly dataOffset?: number | ros.IResolvable;

    /**
     * @Property description: The description of the job.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property dispatcherSize: The dispatcher size of the job.
     */
    readonly dispatcherSize?: number | ros.IResolvable;

    /**
     * @Property failEnable: Whether fail is enabled for the job.
     */
    readonly failEnable?: boolean | ros.IResolvable;

    /**
     * @Property failTimes: The fail times of the job.
     */
    readonly failTimes?: number | ros.IResolvable;

    /**
     * @Property maxAttempt: The max attempt of the job.
     */
    readonly maxAttempt?: number | ros.IResolvable;

    /**
     * @Property maxConcurrency: The max concurrency of the job.
     */
    readonly maxConcurrency?: number | ros.IResolvable;

    /**
     * @Property missWorkerEnable: Whether miss worker is enabled for the job.
     */
    readonly missWorkerEnable?: boolean | ros.IResolvable;

    /**
     * @Property namespaceSource: The namespace source of the job.
     */
    readonly namespaceSource?: string | ros.IResolvable;

    /**
     * @Property pageSize: Advanced configuration for parallel grid tasks, the default number of sub-tasks pulled at a time is 100.
     */
    readonly pageSize?: number | ros.IResolvable;

    /**
     * @Property parameters: The parameters of the job.
     */
    readonly parameters?: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the job.
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * @Property queueSize: The queue size of the job.
     */
    readonly queueSize?: number | ros.IResolvable;

    /**
     * @Property sendChannel: The send channel of the job.
     */
    readonly sendChannel?: string | ros.IResolvable;

    /**
     * @Property successNoticeEnable: Whether success notice is enabled for the job.
     */
    readonly successNoticeEnable?: boolean | ros.IResolvable;

    /**
     * @Property taskAttemptInterval: The task attempt interval of the job.
     */
    readonly taskAttemptInterval?: number | ros.IResolvable;

    /**
     * @Property taskMaxAttempt: The task max attempt of the job.
     */
    readonly taskMaxAttempt?: number | ros.IResolvable;

    /**
     * @Property timeExpression: The time expression of the job.
     */
    readonly timeExpression?: string | ros.IResolvable;

    /**
     * @Property timeout: The timeout of the job.
     */
    readonly timeout?: number | ros.IResolvable;

    /**
     * @Property timeoutEnable: Whether timeout is enabled for the job.
     */
    readonly timeoutEnable?: boolean | ros.IResolvable;

    /**
     * @Property timeoutKillEnable: Whether timeout kill is enabled for the job.
     */
    readonly timeoutKillEnable?: boolean | ros.IResolvable;

    /**
     * @Property timezone: The timezone of the job.
     */
    readonly timezone?: string | ros.IResolvable;

    /**
     * @Property xAttrs: The extended attributes of the job.
     */
    readonly xAttrs?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosJobProps`
 *
 * @param properties - the TypeScript properties of a `RosJobProps`
 *
 * @returns the result of the validation.
 */
function RosJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timezone', ros.validateString)(properties.timezone));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('pageSize', ros.validateNumber)(properties.pageSize));
    errors.collect(ros.propertyValidator('timeExpression', ros.validateString)(properties.timeExpression));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('timeType', ros.requiredValidator)(properties.timeType));
    if(properties.timeType && (typeof properties.timeType) !== 'object') {
        errors.collect(ros.propertyValidator('timeType', ros.validateAllowedValues)({
          data: properties.timeType,
          allowedValues: [1,3,4,5,100,-1],
        }));
    }
    errors.collect(ros.propertyValidator('timeType', ros.validateNumber)(properties.timeType));
    errors.collect(ros.propertyValidator('queueSize', ros.validateNumber)(properties.queueSize));
    errors.collect(ros.propertyValidator('dispatcherSize', ros.validateNumber)(properties.dispatcherSize));
    errors.collect(ros.propertyValidator('taskMaxAttempt', ros.validateNumber)(properties.taskMaxAttempt));
    errors.collect(ros.propertyValidator('missWorkerEnable', ros.validateBoolean)(properties.missWorkerEnable));
    errors.collect(ros.propertyValidator('namespaceSource', ros.validateString)(properties.namespaceSource));
    errors.collect(ros.propertyValidator('className', ros.validateString)(properties.className));
    errors.collect(ros.propertyValidator('failEnable', ros.validateBoolean)(properties.failEnable));
    errors.collect(ros.propertyValidator('attemptInterval', ros.validateNumber)(properties.attemptInterval));
    if(properties.contactInfo && (Array.isArray(properties.contactInfo) || (typeof properties.contactInfo) === 'string')) {
        errors.collect(ros.propertyValidator('contactInfo', ros.validateLength)({
            data: properties.contactInfo.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('contactInfo', ros.listValidator(RosJob_ContactInfoPropertyValidator))(properties.contactInfo));
    errors.collect(ros.propertyValidator('consumerSize', ros.validateNumber)(properties.consumerSize));
    errors.collect(ros.propertyValidator('executeMode', ros.requiredValidator)(properties.executeMode));
    if(properties.executeMode && (typeof properties.executeMode) !== 'object') {
        errors.collect(ros.propertyValidator('executeMode', ros.validateAllowedValues)({
          data: properties.executeMode,
          allowedValues: ["standalone","broadcast","parallel","batch","sharding"],
        }));
    }
    errors.collect(ros.propertyValidator('executeMode', ros.validateString)(properties.executeMode));
    errors.collect(ros.propertyValidator('xAttrs', ros.hashValidator(ros.validateAny))(properties.xAttrs));
    errors.collect(ros.propertyValidator('maxAttempt', ros.validateNumber)(properties.maxAttempt));
    errors.collect(ros.propertyValidator('parameters', ros.validateString)(properties.parameters));
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('successNoticeEnable', ros.validateBoolean)(properties.successNoticeEnable));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateAllowedValues)({
          data: properties.priority,
          allowedValues: [1,5,10,15],
        }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('calendar', ros.validateString)(properties.calendar));
    if(properties.maxConcurrency && (typeof properties.maxConcurrency) !== 'object') {
        errors.collect(ros.propertyValidator('maxConcurrency', ros.validateRange)({
            data: properties.maxConcurrency,
            min: 1,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('maxConcurrency', ros.validateNumber)(properties.maxConcurrency));
    errors.collect(ros.propertyValidator('dataOffset', ros.validateNumber)(properties.dataOffset));
    errors.collect(ros.propertyValidator('timeoutKillEnable', ros.validateBoolean)(properties.timeoutKillEnable));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    errors.collect(ros.propertyValidator('taskAttemptInterval', ros.validateNumber)(properties.taskAttemptInterval));
    errors.collect(ros.propertyValidator('jobType', ros.requiredValidator)(properties.jobType));
    if(properties.jobType && (typeof properties.jobType) !== 'object') {
        errors.collect(ros.propertyValidator('jobType', ros.validateAllowedValues)({
          data: properties.jobType,
          allowedValues: ["python","xxljob","java","shell","golang","go","http","dataworks"],
        }));
    }
    errors.collect(ros.propertyValidator('jobType', ros.validateString)(properties.jobType));
    errors.collect(ros.propertyValidator('timeoutEnable', ros.validateBoolean)(properties.timeoutEnable));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    errors.collect(ros.propertyValidator('failTimes', ros.validateNumber)(properties.failTimes));
    errors.collect(ros.propertyValidator('sendChannel', ros.validateString)(properties.sendChannel));
    return errors.wrap('supplied properties not correct for "RosJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SchedulerX::Job` resource
 *
 * @param properties - the TypeScript properties of a `RosJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SchedulerX::Job` resource.
 */
// @ts-ignore TS6133
function rosJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosJobPropsValidator(properties).assertSuccess();
    }
    return {
      'ExecuteMode': ros.stringToRosTemplate(properties.executeMode),
      'GroupId': ros.stringToRosTemplate(properties.groupId),
      'JobType': ros.stringToRosTemplate(properties.jobType),
      'Name': ros.stringToRosTemplate(properties.name),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'TimeType': ros.numberToRosTemplate(properties.timeType),
      'AttemptInterval': ros.numberToRosTemplate(properties.attemptInterval),
      'Calendar': ros.stringToRosTemplate(properties.calendar),
      'ClassName': ros.stringToRosTemplate(properties.className),
      'ConsumerSize': ros.numberToRosTemplate(properties.consumerSize),
      'ContactInfo': ros.listMapper(rosJobContactInfoPropertyToRosTemplate)(properties.contactInfo),
      'Content': ros.stringToRosTemplate(properties.content),
      'DataOffset': ros.numberToRosTemplate(properties.dataOffset),
      'Description': ros.stringToRosTemplate(properties.description),
      'DispatcherSize': ros.numberToRosTemplate(properties.dispatcherSize),
      'FailEnable': ros.booleanToRosTemplate(properties.failEnable),
      'FailTimes': ros.numberToRosTemplate(properties.failTimes),
      'MaxAttempt': ros.numberToRosTemplate(properties.maxAttempt),
      'MaxConcurrency': ros.numberToRosTemplate(properties.maxConcurrency),
      'MissWorkerEnable': ros.booleanToRosTemplate(properties.missWorkerEnable),
      'NamespaceSource': ros.stringToRosTemplate(properties.namespaceSource),
      'PageSize': ros.numberToRosTemplate(properties.pageSize),
      'Parameters': ros.stringToRosTemplate(properties.parameters),
      'Priority': ros.numberToRosTemplate(properties.priority),
      'QueueSize': ros.numberToRosTemplate(properties.queueSize),
      'SendChannel': ros.stringToRosTemplate(properties.sendChannel),
      'SuccessNoticeEnable': ros.booleanToRosTemplate(properties.successNoticeEnable),
      'TaskAttemptInterval': ros.numberToRosTemplate(properties.taskAttemptInterval),
      'TaskMaxAttempt': ros.numberToRosTemplate(properties.taskMaxAttempt),
      'TimeExpression': ros.stringToRosTemplate(properties.timeExpression),
      'Timeout': ros.numberToRosTemplate(properties.timeout),
      'TimeoutEnable': ros.booleanToRosTemplate(properties.timeoutEnable),
      'TimeoutKillEnable': ros.booleanToRosTemplate(properties.timeoutKillEnable),
      'Timezone': ros.stringToRosTemplate(properties.timezone),
      'XAttrs': ros.hashMapper(ros.objectToRosTemplate)(properties.xAttrs),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SchedulerX::Job`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Job` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
 */
export class RosJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SchedulerX::Job";

    /**
     * @Attribute JobId: The ID of the job.
     */
    public readonly attrJobId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property executeMode: The execute mode of the job.
     */
    public executeMode: string | ros.IResolvable;

    /**
     * @Property groupId: The group ID of the job.
     */
    public groupId: string | ros.IResolvable;

    /**
     * @Property jobType: The type of the job.
     */
    public jobType: string | ros.IResolvable;

    /**
     * @Property name: The name of the job.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property namespace: The namespace of the job.
     */
    public namespace: string | ros.IResolvable;

    /**
     * @Property timeType: The time type of the job.
     * cron：1
     * fixed_rate：3
     * second_delay：4
     * one_time ：5
     * api：100
     * none：-1
     */
    public timeType: number | ros.IResolvable;

    /**
     * @Property attemptInterval: The attempt interval of the job.
     */
    public attemptInterval: number | ros.IResolvable | undefined;

    /**
     * @Property calendar: The calendar of the job.
     */
    public calendar: string | ros.IResolvable | undefined;

    /**
     * @Property className: The class name of the job.
     */
    public className: string | ros.IResolvable | undefined;

    /**
     * @Property consumerSize: The consumer size of the job.
     */
    public consumerSize: number | ros.IResolvable | undefined;

    /**
     * @Property contactInfo: The contact info of the job.
     */
    public contactInfo: Array<RosJob.ContactInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property content: The content of the job.
     */
    public content: string | ros.IResolvable | undefined;

    /**
     * @Property dataOffset: The data offset of the job.
     */
    public dataOffset: number | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the job.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property dispatcherSize: The dispatcher size of the job.
     */
    public dispatcherSize: number | ros.IResolvable | undefined;

    /**
     * @Property failEnable: Whether fail is enabled for the job.
     */
    public failEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property failTimes: The fail times of the job.
     */
    public failTimes: number | ros.IResolvable | undefined;

    /**
     * @Property maxAttempt: The max attempt of the job.
     */
    public maxAttempt: number | ros.IResolvable | undefined;

    /**
     * @Property maxConcurrency: The max concurrency of the job.
     */
    public maxConcurrency: number | ros.IResolvable | undefined;

    /**
     * @Property missWorkerEnable: Whether miss worker is enabled for the job.
     */
    public missWorkerEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property namespaceSource: The namespace source of the job.
     */
    public namespaceSource: string | ros.IResolvable | undefined;

    /**
     * @Property pageSize: Advanced configuration for parallel grid tasks, the default number of sub-tasks pulled at a time is 100.
     */
    public pageSize: number | ros.IResolvable | undefined;

    /**
     * @Property parameters: The parameters of the job.
     */
    public parameters: string | ros.IResolvable | undefined;

    /**
     * @Property priority: The priority of the job.
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * @Property queueSize: The queue size of the job.
     */
    public queueSize: number | ros.IResolvable | undefined;

    /**
     * @Property sendChannel: The send channel of the job.
     */
    public sendChannel: string | ros.IResolvable | undefined;

    /**
     * @Property successNoticeEnable: Whether success notice is enabled for the job.
     */
    public successNoticeEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property taskAttemptInterval: The task attempt interval of the job.
     */
    public taskAttemptInterval: number | ros.IResolvable | undefined;

    /**
     * @Property taskMaxAttempt: The task max attempt of the job.
     */
    public taskMaxAttempt: number | ros.IResolvable | undefined;

    /**
     * @Property timeExpression: The time expression of the job.
     */
    public timeExpression: string | ros.IResolvable | undefined;

    /**
     * @Property timeout: The timeout of the job.
     */
    public timeout: number | ros.IResolvable | undefined;

    /**
     * @Property timeoutEnable: Whether timeout is enabled for the job.
     */
    public timeoutEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property timeoutKillEnable: Whether timeout kill is enabled for the job.
     */
    public timeoutKillEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property timezone: The timezone of the job.
     */
    public timezone: string | ros.IResolvable | undefined;

    /**
     * @Property xAttrs: The extended attributes of the job.
     */
    public xAttrs: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrJobId = this.getAtt('JobId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.executeMode = props.executeMode;
        this.groupId = props.groupId;
        this.jobType = props.jobType;
        this.name = props.name;
        this.namespace = props.namespace;
        this.timeType = props.timeType;
        this.attemptInterval = props.attemptInterval;
        this.calendar = props.calendar;
        this.className = props.className;
        this.consumerSize = props.consumerSize;
        this.contactInfo = props.contactInfo;
        this.content = props.content;
        this.dataOffset = props.dataOffset;
        this.description = props.description;
        this.dispatcherSize = props.dispatcherSize;
        this.failEnable = props.failEnable;
        this.failTimes = props.failTimes;
        this.maxAttempt = props.maxAttempt;
        this.maxConcurrency = props.maxConcurrency;
        this.missWorkerEnable = props.missWorkerEnable;
        this.namespaceSource = props.namespaceSource;
        this.pageSize = props.pageSize;
        this.parameters = props.parameters;
        this.priority = props.priority;
        this.queueSize = props.queueSize;
        this.sendChannel = props.sendChannel;
        this.successNoticeEnable = props.successNoticeEnable;
        this.taskAttemptInterval = props.taskAttemptInterval;
        this.taskMaxAttempt = props.taskMaxAttempt;
        this.timeExpression = props.timeExpression;
        this.timeout = props.timeout;
        this.timeoutEnable = props.timeoutEnable;
        this.timeoutKillEnable = props.timeoutKillEnable;
        this.timezone = props.timezone;
        this.xAttrs = props.xAttrs;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            executeMode: this.executeMode,
            groupId: this.groupId,
            jobType: this.jobType,
            name: this.name,
            namespace: this.namespace,
            timeType: this.timeType,
            attemptInterval: this.attemptInterval,
            calendar: this.calendar,
            className: this.className,
            consumerSize: this.consumerSize,
            contactInfo: this.contactInfo,
            content: this.content,
            dataOffset: this.dataOffset,
            description: this.description,
            dispatcherSize: this.dispatcherSize,
            failEnable: this.failEnable,
            failTimes: this.failTimes,
            maxAttempt: this.maxAttempt,
            maxConcurrency: this.maxConcurrency,
            missWorkerEnable: this.missWorkerEnable,
            namespaceSource: this.namespaceSource,
            pageSize: this.pageSize,
            parameters: this.parameters,
            priority: this.priority,
            queueSize: this.queueSize,
            sendChannel: this.sendChannel,
            successNoticeEnable: this.successNoticeEnable,
            taskAttemptInterval: this.taskAttemptInterval,
            taskMaxAttempt: this.taskMaxAttempt,
            timeExpression: this.timeExpression,
            timeout: this.timeout,
            timeoutEnable: this.timeoutEnable,
            timeoutKillEnable: this.timeoutKillEnable,
            timezone: this.timezone,
            xAttrs: this.xAttrs,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosJob {
    /**
     * @stability external
     */
    export interface ContactInfoProperty {
        /**
         * @Property userName: The user name in contact info.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property userPhone: The user phone in contact info.
         */
        readonly userPhone?: string | ros.IResolvable;
        /**
         * @Property userMail: The user mail in contact info.
         */
        readonly userMail?: string | ros.IResolvable;
        /**
         * @Property ding: The ding in contact info.
         */
        readonly ding?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ContactInfoProperty`
 *
 * @param properties - the TypeScript properties of a `ContactInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosJob_ContactInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('userPhone', ros.validateString)(properties.userPhone));
    errors.collect(ros.propertyValidator('userMail', ros.validateString)(properties.userMail));
    errors.collect(ros.propertyValidator('ding', ros.validateString)(properties.ding));
    return errors.wrap('supplied properties not correct for "ContactInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SchedulerX::Job.ContactInfo` resource
 *
 * @param properties - the TypeScript properties of a `ContactInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SchedulerX::Job.ContactInfo` resource.
 */
// @ts-ignore TS6133
function rosJobContactInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosJob_ContactInfoPropertyValidator(properties).assertSuccess();
    return {
      'UserName': ros.stringToRosTemplate(properties.userName),
      'UserPhone': ros.stringToRosTemplate(properties.userPhone),
      'UserMail': ros.stringToRosTemplate(properties.userMail),
      'Ding': ros.stringToRosTemplate(properties.ding),
    };
}

/**
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
 */
export interface RosNamespaceProps {

    /**
     * @Property name: The name of the namespace.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property description: The description of the namespace.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property uid: Namespace UID is globally unique; it is recommended to generate it using UUID.
     */
    readonly uid?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('uid', ros.validateString)(properties.uid));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosNamespaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SchedulerX::Namespace` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SchedulerX::Namespace` resource.
 */
// @ts-ignore TS6133
function rosNamespacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacePropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'Description': ros.stringToRosTemplate(properties.description),
      'Uid': ros.stringToRosTemplate(properties.uid),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SchedulerX::Namespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
 */
export class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SchedulerX::Namespace";

    /**
     * @Attribute NamespaceUid: The ID of the namespace.
     */
    public readonly attrNamespaceUid: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the namespace.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property description: The description of the namespace.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property uid: Namespace UID is globally unique; it is recommended to generate it using UUID.
     */
    public uid: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaceUid = this.getAtt('NamespaceUid');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.description = props.description;
        this.uid = props.uid;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            description: this.description,
            uid: this.uid,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWorkFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
 */
export interface RosWorkFlowProps {

    /**
     * @Property groupId: The application Group ID, which is obtained from the application management page of the console.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * @Property namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * @Property timeType: Time type. Currently, the following time types are supported:
     * - cron: 1
     * - api: 100.
     */
    readonly timeType: number | ros.IResolvable;

    /**
     * @Property workflowName: Workflow Name.
     */
    readonly workflowName: string | ros.IResolvable;

    /**
     * @Property description: Workflow description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property maxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    readonly maxConcurrency?: number | ros.IResolvable;

    /**
     * @Property namespaceSource: Special third parties are required.
     */
    readonly namespaceSource?: string | ros.IResolvable;

    /**
     * @Property timeExpression: Time expression, which is set based on the selected time type.
     * - cron: Fill in standard cron expressions to support online verification.
     * - api: No time expression.
     */
    readonly timeExpression?: string | ros.IResolvable;

    /**
     * @Property timezone: Time Zone.
     */
    readonly timezone?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkFlowProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkFlowProps`
 *
 * @returns the result of the validation.
 */
function RosWorkFlowPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timezone', ros.validateString)(properties.timezone));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('workflowName', ros.requiredValidator)(properties.workflowName));
    errors.collect(ros.propertyValidator('workflowName', ros.validateString)(properties.workflowName));
    errors.collect(ros.propertyValidator('namespaceSource', ros.validateString)(properties.namespaceSource));
    errors.collect(ros.propertyValidator('maxConcurrency', ros.validateNumber)(properties.maxConcurrency));
    errors.collect(ros.propertyValidator('timeExpression', ros.validateString)(properties.timeExpression));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('timeType', ros.requiredValidator)(properties.timeType));
    if(properties.timeType && (typeof properties.timeType) !== 'object') {
        errors.collect(ros.propertyValidator('timeType', ros.validateAllowedValues)({
          data: properties.timeType,
          allowedValues: [1,100],
        }));
    }
    errors.collect(ros.propertyValidator('timeType', ros.validateNumber)(properties.timeType));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosWorkFlowProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SchedulerX::WorkFlow` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkFlowProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SchedulerX::WorkFlow` resource.
 */
// @ts-ignore TS6133
function rosWorkFlowPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkFlowPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupId': ros.stringToRosTemplate(properties.groupId),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'TimeType': ros.numberToRosTemplate(properties.timeType),
      'WorkflowName': ros.stringToRosTemplate(properties.workflowName),
      'Description': ros.stringToRosTemplate(properties.description),
      'MaxConcurrency': ros.numberToRosTemplate(properties.maxConcurrency),
      'NamespaceSource': ros.stringToRosTemplate(properties.namespaceSource),
      'TimeExpression': ros.stringToRosTemplate(properties.timeExpression),
      'Timezone': ros.stringToRosTemplate(properties.timezone),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SchedulerX::WorkFlow`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WorkFlow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
 */
export class RosWorkFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SchedulerX::WorkFlow";

    /**
     * @Attribute Description: Workflow description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * @Attribute MaxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    public readonly attrMaxConcurrency: ros.IResolvable;

    /**
     * @Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * @Attribute TimeExpression: Time expression, which is set based on the selected time type.
     */
    public readonly attrTimeExpression: ros.IResolvable;

    /**
     * @Attribute TimeType: Time type.
     */
    public readonly attrTimeType: ros.IResolvable;

    /**
     * @Attribute WorkFlowId: workflow id.
     */
    public readonly attrWorkFlowId: ros.IResolvable;

    /**
     * @Attribute WorkflowName: Workflow Name.
     */
    public readonly attrWorkflowName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupId: The application Group ID, which is obtained from the application management page of the console.
     */
    public groupId: string | ros.IResolvable;

    /**
     * @Property namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    public namespace: string | ros.IResolvable;

    /**
     * @Property timeType: Time type. Currently, the following time types are supported:
     * - cron: 1
     * - api: 100.
     */
    public timeType: number | ros.IResolvable;

    /**
     * @Property workflowName: Workflow Name.
     */
    public workflowName: string | ros.IResolvable;

    /**
     * @Property description: Workflow description.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property maxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    public maxConcurrency: number | ros.IResolvable | undefined;

    /**
     * @Property namespaceSource: Special third parties are required.
     */
    public namespaceSource: string | ros.IResolvable | undefined;

    /**
     * @Property timeExpression: Time expression, which is set based on the selected time type.
     * - cron: Fill in standard cron expressions to support online verification.
     * - api: No time expression.
     */
    public timeExpression: string | ros.IResolvable | undefined;

    /**
     * @Property timezone: Time Zone.
     */
    public timezone: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkFlowProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkFlow.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrGroupId = this.getAtt('GroupId');
        this.attrMaxConcurrency = this.getAtt('MaxConcurrency');
        this.attrNamespace = this.getAtt('Namespace');
        this.attrTimeExpression = this.getAtt('TimeExpression');
        this.attrTimeType = this.getAtt('TimeType');
        this.attrWorkFlowId = this.getAtt('WorkFlowId');
        this.attrWorkflowName = this.getAtt('WorkflowName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.namespace = props.namespace;
        this.timeType = props.timeType;
        this.workflowName = props.workflowName;
        this.description = props.description;
        this.maxConcurrency = props.maxConcurrency;
        this.namespaceSource = props.namespaceSource;
        this.timeExpression = props.timeExpression;
        this.timezone = props.timezone;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupId: this.groupId,
            namespace: this.namespace,
            timeType: this.timeType,
            workflowName: this.workflowName,
            description: this.description,
            maxConcurrency: this.maxConcurrency,
            namespaceSource: this.namespaceSource,
            timeExpression: this.timeExpression,
            timezone: this.timezone,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkFlowPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
