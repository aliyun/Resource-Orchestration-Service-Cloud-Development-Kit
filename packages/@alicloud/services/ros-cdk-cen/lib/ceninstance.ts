import * as ros from '@alicloud/ros-cdk-core';
import { RosCenInstance } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenInstance as CenInstanceProperty };

/**
 * Properties for defining a `ALIYUN::CEN::CenInstance`
 */
export interface CenInstanceProps {

    /**
     * Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    readonly description?: string;

    /**
     * Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:// or https://.
     */
    readonly name?: string;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];
}

/**
 * A ROS resource type:  `ALIYUN::CEN::CenInstance`
 */
export class CenInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CenId: The ID of the request.
     */
    public readonly attrCenId: any;

    /**
     * Create a new `ALIYUN::CEN::CenInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenInstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCenInstance = new RosCenInstance(this, id,  {
            description: props.description,
            tags: ros.tagFactory(props.tags),
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenInstance;
        this.attrCenId = rosCenInstance.attrCenId;
    }
}
