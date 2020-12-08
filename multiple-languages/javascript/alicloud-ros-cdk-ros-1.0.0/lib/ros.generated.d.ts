import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ROS::AutoEnableService`
 */
export interface RosAutoEnableServiceProps {
    /**
     * @Property serviceName: Which service to enable. Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
     * ApiGateway: API Gateway
     * BatchCompute: Batch Compute
     * CMS: Cloud Monitor Service
     * DataHub: Data Hub
     * EMAS: Enterprise Mobile Application Studio
     * FC: Function Compute
     * NAS: Network Attached Storage
     * HBR: Hybrid Backup Recovery
     * IMM: Intelligent Media Management
     * KMS: Key Management Service
     * NLP: Natural Language Processing
     * OSS: Object Storage Service
     * OTS: Table Store
     * PrivateLink: Private Link
     * RocketMQ: RocketMQ
     * SLS: Log Service
     *
     */
    readonly serviceName: string;
}
/**
 * A ROS template type:  `ALIYUN::ROS::AutoEnableService`
 */
export declare class RosAutoEnableService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::AutoEnableService";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceName: Which service to enable. Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
     * ApiGateway: API Gateway
     * BatchCompute: Batch Compute
     * CMS: Cloud Monitor Service
     * DataHub: Data Hub
     * EMAS: Enterprise Mobile Application Studio
     * FC: Function Compute
     * NAS: Network Attached Storage
     * HBR: Hybrid Backup Recovery
     * IMM: Intelligent Media Management
     * KMS: Key Management Service
     * NLP: Natural Language Processing
     * OSS: Object Storage Service
     * OTS: Table Store
     * PrivateLink: Private Link
     * RocketMQ: RocketMQ
     * SLS: Log Service
     *
     */
    serviceName: string;
    /**
     * Create a new `ALIYUN::ROS::AutoEnableService`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoEnableServiceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::ROS::CustomResource`
 */
export interface RosCustomResourceProps {
    /**
     * @Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * Allowed values:
     * - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
     * - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
     * - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
     * - HTTP&HTTPS: web[options]:<url>
     *   Two options are supported:
     *   - sync: sync HTTP&HTTPS request.
     *   - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:
     *   - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
     *   - acs:mns:cn-hangzhou:123456789:queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:/queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:topics/test-topic
     *   - acs:mns:cn-hangzhou:123456789:/topics/test-topic
     *   - web:https://abc.com
     *   - web[sync]:http://abc.com
     *   - web[sync,idempotent]:https://abc.com
     */
    readonly serviceToken: string;
    /**
     * @Property timeout: Timeout seconds before service provider responses.
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&HTTPS request.
     */
    readonly timeout: number;
    /**
     * @Property parameters: Parameters to be passed to service provider.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ROS::CustomResource`
 */
export declare class RosCustomResource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::CustomResource";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Outputs: Output data received from service provider.
     */
    readonly attrOutputs: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * Allowed values:
     * - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
     * - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
     * - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
     * - HTTP&HTTPS: web[options]:<url>
     *   Two options are supported:
     *   - sync: sync HTTP&HTTPS request.
     *   - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:
     *   - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
     *   - acs:mns:cn-hangzhou:123456789:queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:/queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:topics/test-topic
     *   - acs:mns:cn-hangzhou:123456789:/topics/test-topic
     *   - web:https://abc.com
     *   - web[sync]:http://abc.com
     *   - web[sync,idempotent]:https://abc.com
     */
    serviceToken: string;
    /**
     * @Property timeout: Timeout seconds before service provider responses.
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&HTTPS request.
     */
    timeout: number;
    /**
     * @Property parameters: Parameters to be passed to service provider.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ROS::CustomResource`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomResourceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::ROS::Stack`
 */
export interface RosStackProps {
    /**
     * @Property parameters: The set of parameters passed to this nested stack.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property templateBody: Structure containing the template body.
     * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    readonly templateBody?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property templateId: Template ID of template containing the template body.
     */
    readonly templateId?: string;
    /**
     * @Property templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    readonly templateUrl?: string;
    /**
     * @Property templateVersion: Template version of template containing the template body.
     */
    readonly templateVersion?: string;
    /**
     * @Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
     */
    readonly timeoutMins?: number;
}
/**
 * A ROS template type:  `ALIYUN::ROS::Stack`
 */
export declare class RosStack extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::Stack";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property parameters: The set of parameters passed to this nested stack.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property templateBody: Structure containing the template body.
     * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    templateBody: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property templateId: Template ID of template containing the template body.
     */
    templateId: string | undefined;
    /**
     * @Property templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    templateUrl: string | undefined;
    /**
     * @Property templateVersion: Template version of template containing the template body.
     */
    templateVersion: string | undefined;
    /**
     * @Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
     */
    timeoutMins: number | undefined;
    /**
     * Create a new `ALIYUN::ROS::Stack`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::ROS::WaitCondition`
 */
export interface RosWaitConditionProps {
    /**
     * @Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    readonly handle: string;
    /**
     * @Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    readonly timeout: number;
    /**
     * @Property count: The number of success signals that must be received before the stack creation process continues.
     */
    readonly count?: number;
}
/**
 * A ROS template type:  `ALIYUN::ROS::WaitCondition`
 */
export declare class RosWaitCondition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::WaitCondition";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    readonly attrData: any;
    /**
     * @Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    readonly attrErrorData: any;
    /**
     * @Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    readonly attrJoinedErrorData: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    handle: string;
    /**
     * @Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    timeout: number;
    /**
     * @Property count: The number of success signals that must be received before the stack creation process continues.
     */
    count: number | undefined;
    /**
     * Create a new `ALIYUN::ROS::WaitCondition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitConditionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::ROS::WaitConditionHandle`
 */
export interface RosWaitConditionHandleProps {
    /**
     * @Property count: There are 3 preconditions that make Count taking effect:
     * 1.Mode is set to Full.
     * 2.Count >= 0.
     * 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
     *
     * If Count takes effect, signals with id > Count will be deleted before update.
     * The default value is -1, which means no effect.
     * It is recommended to quote the same value with WaitCondition.Count.
     */
    readonly count?: number;
    /**
     * @Property mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
     *
     * If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
     *
     * Default to Full.
     */
    readonly mode?: string;
}
/**
 * A ROS template type:  `ALIYUN::ROS::WaitConditionHandle`
 */
export declare class RosWaitConditionHandle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::WaitConditionHandle";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.  You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
     */
    readonly attrCurlCli: any;
    /**
     * @Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.
     */
    readonly attrHeaders: any;
    /**
     * @Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure. As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
     */
    readonly attrPowerShellCurlCli: any;
    /**
     * @Attribute URL: HTTP POST URL used for signalling handle completion or failure.
     */
    readonly attrUrl: any;
    /**
     * @Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure. As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{\"status\": \"SUCCESS\"}" , or signal failure by adding --data-binary "{\"status\": \"FAILURE\"}"
     */
    readonly attrWindowsCurlCli: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property count: There are 3 preconditions that make Count taking effect:
     * 1.Mode is set to Full.
     * 2.Count >= 0.
     * 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
     *
     * If Count takes effect, signals with id > Count will be deleted before update.
     * The default value is -1, which means no effect.
     * It is recommended to quote the same value with WaitCondition.Count.
     */
    count: number | undefined;
    /**
     * @Property mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
     *
     * If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
     *
     * Default to Full.
     */
    mode: string | undefined;
    /**
     * Create a new `ALIYUN::ROS::WaitConditionHandle`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitConditionHandleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
