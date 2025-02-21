import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosJobMonitorRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
 */
export interface RosJobMonitorRuleProps {
    /**
     * @Property dtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    readonly dtsJobId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::JobMonitorRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `JobMonitorRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
 */
export declare class RosJobMonitorRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::JobMonitorRule";
    /**
     * @Attribute DelayRuleTime: The threshold that triggers the alert.
     */
    readonly attrDelayRuleTime: ros.IResolvable;
    /**
     * @Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    readonly attrDtsJobId: ros.IResolvable;
    /**
     * @Attribute Period: The statistical period for incremental validation tasks, in minutes.
     */
    readonly attrPeriod: ros.IResolvable;
    /**
     * @Attribute Phone: The mobile phone numbers that receive alert notifications. Multiple mobile numbers are separated by commas (,).
     */
    readonly attrPhone: ros.IResolvable;
    /**
     * @Attribute State: Indicates whether the monitoring rule is enabled.
     */
    readonly attrState: ros.IResolvable;
    /**
     * @Attribute Times: The number of cycles for the incremental validation task.
     */
    readonly attrTimes: ros.IResolvable;
    /**
     * @Attribute Type: The type of the monitoring rule.
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dtsJobId: The ID of the data migration, data synchronization, or change tracking task.
     */
    dtsJobId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosJobMonitorRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosJobMonitorRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrules
 */
export interface RosJobMonitorRulesProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::JobMonitorRules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `JobMonitorRules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrules
 */
export declare class RosJobMonitorRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::JobMonitorRules";
    /**
     * @Attribute DtsJobIds: The list of dts job IDs.
     */
    readonly attrDtsJobIds: ros.IResolvable;
    /**
     * @Attribute JobMonitorRules: The list of job monitor rules.
     */
    readonly attrJobMonitorRules: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosJobMonitorRulesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMigrationInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export interface RosMigrationInstancesProps {
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::MigrationInstances`, which is used to query information about Data Transmission Service (DTS) tasks.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrationInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export declare class RosMigrationInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::MigrationInstances";
    /**
     * @Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable;
    /**
     * @Attribute MigrationInstances: The list of migration instances.
     */
    readonly attrMigrationInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    dtsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMigrationInstancesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMigrationJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjob
 */
export interface RosMigrationJobProps {
    /**
     * @Property dtsInstanceId: The ID of the synchronization instance.
     */
    readonly dtsInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::MigrationJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrationJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjob
 */
export declare class RosMigrationJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::MigrationJob";
    /**
     * @Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DestinationEndpointEngineName: The target database engine type.
     */
    readonly attrDestinationEndpointEngineName: ros.IResolvable;
    /**
     * @Attribute DestinationSourceEndpointRegion: The target database engine type.
     */
    readonly attrDestinationSourceEndpointRegion: ros.IResolvable;
    /**
     * @Attribute DtsInstanceId: The ID of the synchronization instance.
     */
    readonly attrDtsInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    readonly attrInstanceClass: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute SourceEndpointEngineName: The type of the source instance database engine.
     */
    readonly attrSourceEndpointEngineName: ros.IResolvable;
    /**
     * @Attribute SourceEndpointRegion: The type of the source instance database engine.
     */
    readonly attrSourceEndpointRegion: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dtsInstanceId: The ID of the synchronization instance.
     */
    dtsInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMigrationJobProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMigrationJobs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjobs
 */
export interface RosMigrationJobsProps {
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::MigrationJobs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrationJobs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjobs
 */
export declare class RosMigrationJobs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::MigrationJobs";
    /**
     * @Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable;
    /**
     * @Attribute MigrationInstances: The list of migration instances.
     */
    readonly attrMigrationInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    dtsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMigrationJobsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSynchronizationJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjob
 */
export interface RosSynchronizationJobProps {
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::SynchronizationJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SynchronizationJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjob
 */
export declare class RosSynchronizationJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::SynchronizationJob";
    /**
     * @Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DestinationEndpointEngineName: The target database engine type.
     */
    readonly attrDestinationEndpointEngineName: ros.IResolvable;
    /**
     * @Attribute DestinationEndpointRegion: Region of source instance.
     */
    readonly attrDestinationEndpointRegion: ros.IResolvable;
    /**
     * @Attribute DtsInstanceId: Synchronization instance ID.
     */
    readonly attrDtsInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    readonly attrInstanceClass: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute SourceEndpointEngineName: Source instance database engine type.
     */
    readonly attrSourceEndpointEngineName: ros.IResolvable;
    /**
     * @Attribute SourceEndpointRegion: Region of source instance.
     */
    readonly attrSourceEndpointRegion: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    dtsInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSynchronizationJobProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSynchronizationJobs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjobs
 */
export interface RosSynchronizationJobsProps {
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::SynchronizationJobs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SynchronizationJobs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjobs
 */
export declare class RosSynchronizationJobs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::SynchronizationJobs";
    /**
     * @Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable;
    /**
     * @Attribute SynchronizationInstances: The list of synchronization instances.
     */
    readonly attrSynchronizationInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    dtsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSynchronizationJobsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
