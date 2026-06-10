import * as ros from '@alicloud/ros-cdk-core';
import { RosApplication } from './bpstudio.generated';
export { RosApplication as ApplicationProperty };
/**
 * Properties for defining a `Application`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-application
 */
export interface ApplicationProps {
    /**
     * Property applicationId: The first ID of the resource.
     */
    readonly applicationId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Application`.
 */
export interface IApplication extends ros.IResource {
    readonly props: ApplicationProps;
    /**
     * Attribute ApplicationId: The first ID of the resource.
     */
    readonly attrApplicationId: ros.IResolvable | string;
    /**
     * Attribute ApplicationName: Application name.
     */
    readonly attrApplicationName: ros.IResolvable | string;
    /**
     * Attribute ImageUrl: The Picture in the OSS Storage Address.
     */
    readonly attrImageUrl: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the resource belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Status: The status of the resource.
     */
    readonly attrStatus: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::BPStudio::Application`, which is used to query the information about an application.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-application
 */
export declare class Application extends ros.Resource implements IApplication {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ApplicationId: The first ID of the resource.
     */
    readonly attrApplicationId: ros.IResolvable | string;
    /**
     * Attribute ApplicationName: Application name.
     */
    readonly attrApplicationName: ros.IResolvable | string;
    /**
     * Attribute ImageUrl: The Picture in the OSS Storage Address.
     */
    readonly attrImageUrl: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the resource belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Status: The status of the resource.
     */
    readonly attrStatus: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationProps, enableResourcePropertyConstraint?: boolean);
}
