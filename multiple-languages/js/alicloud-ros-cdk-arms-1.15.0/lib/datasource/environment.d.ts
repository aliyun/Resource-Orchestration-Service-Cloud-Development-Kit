import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvironment } from './arms.generated';
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
export declare class Environment extends ros.Resource implements IEnvironment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnvironmentProps;
    protected enableResourcePropertyConstraint: boolean;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnvironmentProps, enableResourcePropertyConstraint?: boolean);
}
