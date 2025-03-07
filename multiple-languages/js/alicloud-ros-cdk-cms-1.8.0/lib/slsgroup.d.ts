import * as ros from '@alicloud/ros-cdk-core';
import { RosSlsGroup } from './cms.generated';
export { RosSlsGroup as SlsGroupProperty };
/**
 * Properties for defining a `SlsGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-slsgroup
 */
export interface SlsGroupProps {
    /**
     * Property slsGroupConfig: The configurations of the Logstore group.Valid values of N: 1 to 25.
     */
    readonly slsGroupConfig: Array<RosSlsGroup.SlsGroupConfigProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property slsGroupName: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter.
     */
    readonly slsGroupName: string | ros.IResolvable;
    /**
     * Property slsGroupDescription: The description of the Logstore group.
     */
    readonly slsGroupDescription?: string | ros.IResolvable;
}
/**
 * Represents a `SlsGroup`.
 */
export interface ISlsGroup extends ros.IResource {
    readonly props: SlsGroupProps;
    /**
     * Attribute CreateTime: The creation time of the Logstore group.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute SlsGroupConfig: The configurations of the Logstore group.
     */
    readonly attrSlsGroupConfig: ros.IResolvable | string;
    /**
     * Attribute SlsGroupDescription: The description of the Logstore group.
     */
    readonly attrSlsGroupDescription: ros.IResolvable | string;
    /**
     * Attribute SlsGroupName: The name of the Logstore group.
     */
    readonly attrSlsGroupName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::SlsGroup`, which is used to create a Logstore group for the metrics of Simple Log Service logs.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSlsGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-slsgroup
 */
export declare class SlsGroup extends ros.Resource implements ISlsGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SlsGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the Logstore group.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute SlsGroupConfig: The configurations of the Logstore group.
     */
    readonly attrSlsGroupConfig: ros.IResolvable | string;
    /**
     * Attribute SlsGroupDescription: The description of the Logstore group.
     */
    readonly attrSlsGroupDescription: ros.IResolvable | string;
    /**
     * Attribute SlsGroupName: The name of the Logstore group.
     */
    readonly attrSlsGroupName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SlsGroupProps, enableResourcePropertyConstraint?: boolean);
}
