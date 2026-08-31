import * as ros from '@alicloud/ros-cdk-core';
import { RosSavedsearch } from './sls.generated';
export { RosSavedsearch as SavedsearchProperty };
/**
 * Properties for defining a `Savedsearch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
 */
export interface SavedsearchProps {
    /**
     * Property detail:
     */
    readonly detail: RosSavedsearch.DetailProperty | ros.IResolvable;
    /**
     * Property project: Project name
     */
    readonly project: string | ros.IResolvable;
}
/**
 * Represents a `Savedsearch`.
 */
export interface ISavedsearch extends ros.IResource {
    readonly props: SavedsearchProps;
    /**
     * Attribute SavedsearchName: Savedsearch name.
     */
    readonly attrSavedsearchName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Savedsearch`, which is used to save search results as a saved search.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSavedsearch`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
 */
export declare class Savedsearch extends ros.Resource implements ISavedsearch {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SavedsearchProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SavedsearchName: Savedsearch name.
     */
    readonly attrSavedsearchName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SavedsearchProps, enableResourcePropertyConstraint?: boolean);
}
