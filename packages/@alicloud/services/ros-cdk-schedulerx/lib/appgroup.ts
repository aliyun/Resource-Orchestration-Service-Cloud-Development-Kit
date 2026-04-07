import * as ros from '@alicloud/ros-cdk-core';
import { RosAppGroup } from './schedulerx.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAppGroup as AppGroupProperty };

/**
 * Properties for defining a `AppGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
 */
export interface AppGroupProps {

    /**
     * Property appName: The application name.
     */
    readonly appName: string | ros.IResolvable;

    /**
     * Property groupId: The group ID of the application group.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * Property namespace: The namespace of the application group.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * Property appKey: The application key.
     */
    readonly appKey?: string | ros.IResolvable;

    /**
     * Property appType: The type of the application.
     */
    readonly appType?: number | ros.IResolvable;

    /**
     * Property appVersion: The version of the application.
     */
    readonly appVersion?: number | ros.IResolvable;

    /**
     * Property description: The description of the application group.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property enableLog: Whether to enable log.
     */
    readonly enableLog?: boolean | ros.IResolvable;

    /**
     * Property maxJobs: The maximum number of jobs.
     */
    readonly maxJobs?: number | ros.IResolvable;

    /**
     * Property monitorConfig: The monitor configuration in JSON format.
     */
    readonly monitorConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property monitorContacts: The monitor contacts in JSON format.
     */
    readonly monitorContacts?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property namespaceName: The name of the namespace.
     */
    readonly namespaceName?: string | ros.IResolvable;

    /**
     * Property namespaceSource: The namespace source of the job.
     */
    readonly namespaceSource?: string | ros.IResolvable;

    /**
     * Property notificationPolicyName: The notification policy name.
     */
    readonly notificationPolicyName?: string | ros.IResolvable;

    /**
     * Property scheduleBusyWorkers: Whether to schedule busy workers.
     */
    readonly scheduleBusyWorkers?: boolean | ros.IResolvable;
}

/**
 * Represents a `AppGroup`.
 */
export interface IAppGroup extends ros.IResource {
    readonly props: AppGroupProps;

    /**
     * Attribute AppGroupId: The group ID of the application group.
     */
    readonly attrAppGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SchedulerX::AppGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAppGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
 */
export class AppGroup extends ros.Resource implements IAppGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AppGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppGroupId: The group ID of the application group.
     */
    public readonly attrAppGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAppGroup = new RosAppGroup(this, id,  {
            monitorContacts: props.monitorContacts,
            description: props.description,
            enableLog: props.enableLog,
            namespace: props.namespace,
            appName: props.appName,
            groupId: props.groupId,
            appVersion: props.appVersion,
            namespaceName: props.namespaceName,
            appKey: props.appKey,
            namespaceSource: props.namespaceSource,
            notificationPolicyName: props.notificationPolicyName,
            appType: props.appType,
            maxJobs: props.maxJobs,
            monitorConfig: props.monitorConfig,
            scheduleBusyWorkers: props.scheduleBusyWorkers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAppGroup;
        this.attrAppGroupId = rosAppGroup.attrAppGroupId;
    }
}
