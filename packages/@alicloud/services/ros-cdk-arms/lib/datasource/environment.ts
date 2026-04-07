import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvironment } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEnvironment as EnvironmentProperty };

/**
 * Properties for defining a `Environment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-environment
 */
export interface EnvironmentProps {

    /**
     * Property environmentId: The first ID of the resource.
     */
    readonly environmentId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Environment`.
 */
export interface IEnvironment extends ros.IResource {
    readonly props: EnvironmentProps;

    /**
     * Attribute BindResourceId: The id or vpcId of the bound container instance.
     */
    readonly attrBindResourceId: ros.IResolvable | string;

    /**
     * Attribute BindResourceType: Binding resource type.
     */
    readonly attrBindResourceType: ros.IResolvable | string;

    /**
     * Attribute BindVpcCidr: The network segment of the bound vpc.
     */
    readonly attrBindVpcCidr: ros.IResolvable | string;

    /**
     * Attribute EnvironmentId: The first ID of the resource.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;

    /**
     * Attribute EnvironmentName: The name of the resource.
     */
    readonly attrEnvironmentName: ros.IResolvable | string;

    /**
     * Attribute EnvironmentSubType: Subtype of environment.
     */
    readonly attrEnvironmentSubType: ros.IResolvable | string;

    /**
     * Attribute EnvironmentType: Type of environment.
     */
    readonly attrEnvironmentType: ros.IResolvable | string;

    /**
     * Attribute FeePackage: Paid package.
     */
    readonly attrFeePackage: ros.IResolvable | string;

    /**
     * Attribute GrafanaDatasourceUid: The uid of the Grafana data source.
     */
    readonly attrGrafanaDatasourceUid: ros.IResolvable | string;

    /**
     * Attribute GrafanaFolderUid: Binding Grafana directory uid.
     */
    readonly attrGrafanaFolderUid: ros.IResolvable | string;

    /**
     * Attribute ManagedType: Hosting type.
     */
    readonly attrManagedType: ros.IResolvable | string;

    /**
     * Attribute PrometheusInstanceId: The ID of the prometheus instance.
     */
    readonly attrPrometheusInstanceId: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tag of the resource.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute UserId: User ID.
     */
    readonly attrUserId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::Environment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvironment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-environment
 */
export class Environment extends ros.Resource implements IEnvironment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EnvironmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BindResourceId: The id or vpcId of the bound container instance.
     */
    public readonly attrBindResourceId: ros.IResolvable | string;

    /**
     * Attribute BindResourceType: Binding resource type.
     */
    public readonly attrBindResourceType: ros.IResolvable | string;

    /**
     * Attribute BindVpcCidr: The network segment of the bound vpc.
     */
    public readonly attrBindVpcCidr: ros.IResolvable | string;

    /**
     * Attribute EnvironmentId: The first ID of the resource.
     */
    public readonly attrEnvironmentId: ros.IResolvable | string;

    /**
     * Attribute EnvironmentName: The name of the resource.
     */
    public readonly attrEnvironmentName: ros.IResolvable | string;

    /**
     * Attribute EnvironmentSubType: Subtype of environment.
     */
    public readonly attrEnvironmentSubType: ros.IResolvable | string;

    /**
     * Attribute EnvironmentType: Type of environment.
     */
    public readonly attrEnvironmentType: ros.IResolvable | string;

    /**
     * Attribute FeePackage: Paid package.
     */
    public readonly attrFeePackage: ros.IResolvable | string;

    /**
     * Attribute GrafanaDatasourceUid: The uid of the Grafana data source.
     */
    public readonly attrGrafanaDatasourceUid: ros.IResolvable | string;

    /**
     * Attribute GrafanaFolderUid: Binding Grafana directory uid.
     */
    public readonly attrGrafanaFolderUid: ros.IResolvable | string;

    /**
     * Attribute ManagedType: Hosting type.
     */
    public readonly attrManagedType: ros.IResolvable | string;

    /**
     * Attribute PrometheusInstanceId: The ID of the prometheus instance.
     */
    public readonly attrPrometheusInstanceId: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tag of the resource.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute UserId: User ID.
     */
    public readonly attrUserId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnvironmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEnvironment = new RosEnvironment(this, id,  {
            environmentId: props.environmentId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEnvironment;
        this.attrBindResourceId = rosEnvironment.attrBindResourceId;
        this.attrBindResourceType = rosEnvironment.attrBindResourceType;
        this.attrBindVpcCidr = rosEnvironment.attrBindVpcCidr;
        this.attrEnvironmentId = rosEnvironment.attrEnvironmentId;
        this.attrEnvironmentName = rosEnvironment.attrEnvironmentName;
        this.attrEnvironmentSubType = rosEnvironment.attrEnvironmentSubType;
        this.attrEnvironmentType = rosEnvironment.attrEnvironmentType;
        this.attrFeePackage = rosEnvironment.attrFeePackage;
        this.attrGrafanaDatasourceUid = rosEnvironment.attrGrafanaDatasourceUid;
        this.attrGrafanaFolderUid = rosEnvironment.attrGrafanaFolderUid;
        this.attrManagedType = rosEnvironment.attrManagedType;
        this.attrPrometheusInstanceId = rosEnvironment.attrPrometheusInstanceId;
        this.attrResourceGroupId = rosEnvironment.attrResourceGroupId;
        this.attrTags = rosEnvironment.attrTags;
        this.attrUserId = rosEnvironment.attrUserId;
    }
}
