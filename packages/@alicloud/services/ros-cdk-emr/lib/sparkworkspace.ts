import * as ros from '@alicloud/ros-cdk-core';
import { RosSparkWorkspace } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSparkWorkspace as SparkWorkspaceProperty };

/**
 * Properties for defining a `SparkWorkspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-sparkworkspace
 */
export interface SparkWorkspaceProps {

    /**
     * Property ossBucket: The OSS bucket path of the workspace. The path must start with oss:\/\/<bucket-name>\/.
     */
    readonly ossBucket: string | ros.IResolvable;

    /**
     * Property paymentType: The billing method of the workspace.
     */
    readonly paymentType: string | ros.IResolvable;

    /**
     * Property ramRoleName: The RAM role used to run Spark jobs.
     */
    readonly ramRoleName: string | ros.IResolvable;

    /**
     * Property resourceSpec: The resource specifications of the workspace.
     */
    readonly resourceSpec: RosSparkWorkspace.ResourceSpecProperty | ros.IResolvable;

    /**
     * Property workspaceName: The workspace name. The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (_).
     */
    readonly workspaceName: string | ros.IResolvable;

    /**
     * Property autoRenew: Whether to enable automatic renewal for a subscription.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property autoRenewPeriod: The automatic renewal duration.
     */
    readonly autoRenewPeriod?: string | ros.IResolvable;

    /**
     * Property autoRenewPeriodUnit: The unit of the automatic renewal duration.
     */
    readonly autoRenewPeriodUnit?: string | ros.IResolvable;

    /**
     * Property autoStartSessionCluster: Whether to automatically start a session cluster.
     */
    readonly autoStartSessionCluster?: boolean | ros.IResolvable;

    /**
     * Property dlfCatalogId: The ID of the DLF catalog.
     */
    readonly dlfCatalogId?: string | ros.IResolvable;

    /**
     * Property dlfType: The DLF type bound to the workspace.
     */
    readonly dlfType?: string | ros.IResolvable;

    /**
     * Property duration: The subscription duration.
     */
    readonly duration?: string | ros.IResolvable;

    /**
     * Property gpuSpec: The GPU instance types of the workspace.
     */
    readonly gpuSpec?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property gpuSubscription: The GPU subscription configuration. This configuration is applied after the workspace is created.
     */
    readonly gpuSubscription?: RosSparkWorkspace.GpuSubscriptionProperty | ros.IResolvable;

    /**
     * Property ipWhiteList: The IP whitelist of the workspace. This configuration is applied after the workspace is created.
     */
    readonly ipWhiteList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property paymentDurationUnit: The unit of the subscription duration.
     */
    readonly paymentDurationUnit?: string | ros.IResolvable;

    /**
     * Property releaseType: The release type of the workspace.
     */
    readonly releaseType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property subscription: The configuration used to convert a pay-as-you-go workspace to a subscription workspace. This configuration is applied after the workspace is created.
     */
    readonly subscription?: RosSparkWorkspace.SubscriptionProperty | ros.IResolvable;

    /**
     * Property tags: Tags to attach to workspace. Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosSparkWorkspace.TagsProperty[];
}

/**
 * Represents a `SparkWorkspace`.
 */
export interface ISparkWorkspace extends ros.IResource {
    readonly props: SparkWorkspaceProps;

    /**
     * Attribute Storage: The OSS storage path of the workspace.
     */
    readonly attrStorage: ros.IResolvable | string;

    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EMR::SparkWorkspace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSparkWorkspace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-sparkworkspace
 */
export class SparkWorkspace extends ros.Resource implements ISparkWorkspace {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SparkWorkspaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Storage: The OSS storage path of the workspace.
     */
    public readonly attrStorage: ros.IResolvable | string;

    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    public readonly attrWorkspaceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SparkWorkspaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSparkWorkspace = new RosSparkWorkspace(this, id,  {
            autoRenewPeriod: props.autoRenewPeriod,
            releaseType: props.releaseType,
            dlfType: props.dlfType,
            resourceGroupId: props.resourceGroupId,
            autoRenew: props.autoRenew,
            resourceSpec: props.resourceSpec,
            ossBucket: props.ossBucket,
            paymentDurationUnit: props.paymentDurationUnit,
            ipWhiteList: props.ipWhiteList,
            duration: props.duration,
            gpuSubscription: props.gpuSubscription,
            ramRoleName: props.ramRoleName,
            gpuSpec: props.gpuSpec,
            workspaceName: props.workspaceName,
            paymentType: props.paymentType,
            autoStartSessionCluster: props.autoStartSessionCluster,
            subscription: props.subscription,
            dlfCatalogId: props.dlfCatalogId,
            tags: props.tags,
            autoRenewPeriodUnit: props.autoRenewPeriodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSparkWorkspace;
        this.attrStorage = rosSparkWorkspace.attrStorage;
        this.attrWorkspaceId = rosSparkWorkspace.attrWorkspaceId;
    }
}
