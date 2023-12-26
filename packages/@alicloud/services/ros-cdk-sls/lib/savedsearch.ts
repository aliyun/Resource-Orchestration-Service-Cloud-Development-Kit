import * as ros from '@alicloud/ros-cdk-core';
import { RosSavedsearch } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Savedsearch`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSavedsearch`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
 */
export class Savedsearch extends ros.Resource {

    /**
     * Attribute SavedsearchName: Savedsearch name.
     */
    public readonly attrSavedsearchName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SavedsearchProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSavedsearch = new RosSavedsearch(this, id,  {
            project: props.project,
            detail: props.detail,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSavedsearch;
        this.attrSavedsearchName = rosSavedsearch.attrSavedsearchName;
    }
}
