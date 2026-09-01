import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTablePropagation } from './cen.generated';
export { RosTransitRouterRouteTablePropagation as TransitRouterRouteTablePropagationProperty };
/**
 * Properties for defining a `TransitRouterRouteTablePropagation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetablepropagation
 */
export interface TransitRouterRouteTablePropagationProps {
    /**
     * Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;
    /**
     * Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
}
/**
 * Represents a `TransitRouterRouteTablePropagation`.
 */
export interface ITransitRouterRouteTablePropagation extends ros.IResource {
    readonly props: TransitRouterRouteTablePropagationProps;
    /**
     * Attribute ResourceId: ResourceId
     */
    readonly attrResourceId: ros.IResolvable | string;
    /**
     * Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;
    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly attrTransitRouterRouteTableId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterRouteTablePropagation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterRouteTablePropagation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetablepropagation
 */
export declare class TransitRouterRouteTablePropagation extends ros.Resource implements ITransitRouterRouteTablePropagation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TransitRouterRouteTablePropagationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ResourceId: ResourceId
     */
    readonly attrResourceId: ros.IResolvable | string;
    /**
     * Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;
    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly attrTransitRouterRouteTableId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTablePropagationProps, enableResourcePropertyConstraint?: boolean);
}
