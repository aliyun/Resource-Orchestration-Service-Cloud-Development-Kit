import * as ros from '@alicloud/ros-cdk-core';
import { RosSwimmingLaneGroup } from './edas.generated';
export { RosSwimmingLaneGroup as SwimmingLaneGroupProperty };
/**
 * Properties for defining a `SwimmingLaneGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglanegroup
 */
export interface SwimmingLaneGroupProps {
    /**
     * Property appIds: The list of application IDs involved in the swimming lane group.
     */
    readonly appIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property entryApp: The entry application. Format: EDAS:{application ID}.
     */
    readonly entryApp: string | ros.IResolvable;
    /**
     * Property logicalRegionId: The RegionId of the custom namespace. Format: `physical Region:custom namespace identifier`.
     */
    readonly logicalRegionId: string | ros.IResolvable;
    /**
     * Property name: The name of the swimming lane group.
     * The value can be up to 64 characters in length.
     */
    readonly name: string | ros.IResolvable;
}
/**
 * Represents a `SwimmingLaneGroup`.
 */
export interface ISwimmingLaneGroup extends ros.IResource {
    readonly props: SwimmingLaneGroupProps;
    /**
     * Attribute GroupId: The ID of the swimming lane group.
     */
    readonly attrGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::SwimmingLaneGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSwimmingLaneGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglanegroup
 */
export declare class SwimmingLaneGroup extends ros.Resource implements ISwimmingLaneGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SwimmingLaneGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupId: The ID of the swimming lane group.
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SwimmingLaneGroupProps, enableResourcePropertyConstraint?: boolean);
}
