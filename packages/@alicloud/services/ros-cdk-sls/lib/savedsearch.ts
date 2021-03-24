import * as ros from '@alicloud/ros-cdk-core';
import { RosSavedsearch } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
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
    readonly project: string;
}

/**
 * A ROS resource type:  `ALIYUN::SLS::Savedsearch`
 */
export class Savedsearch extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute SavedsearchName: Savedsearch name.
     */
    public readonly attrSavedsearchName: any;

    /**
     * Create a new `ALIYUN::SLS::Savedsearch`.
     *
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
