import * as ros from '@alicloud/ros-cdk-core';
import { RosServices } from './pai.generated';
export { RosServices as ServicesProperty };
/**
 * Properties for defining a `Services`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
 */
export interface ServicesProps {
    /**
     * Property labels: Service Tag.
     */
    readonly labels?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property serviceName: Service Name.
     */
    readonly serviceName?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Services`, which is used to query the information about Elastic Algorithm Service (EAS) services of Machine Learning Platform for AI (PAI).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServices`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
 */
export declare class Services extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ServicesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ServiceNames: The list of service names.
     */
    readonly attrServiceNames: ros.IResolvable;
    /**
     * Attribute Services: The list of services.
     */
    readonly attrServices: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ServicesProps, enableResourcePropertyConstraint?: boolean);
}
