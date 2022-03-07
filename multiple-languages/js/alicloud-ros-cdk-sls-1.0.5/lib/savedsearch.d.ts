import * as ros from '@alicloud/ros-cdk-core';
import { RosSavedsearch } from './sls.generated';
export { RosSavedsearch as SavedsearchProperty };
/**
 * Properties for defining a `ALIYUN::SLS::Savedsearch`
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
 * A ROS resource type:  `ALIYUN::SLS::Savedsearch`
 */
export declare class Savedsearch extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SavedsearchName: Savedsearch name.
     */
    readonly attrSavedsearchName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLS::Savedsearch`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SavedsearchProps, enableResourcePropertyConstraint?: boolean);
}
