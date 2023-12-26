import * as ros from '@alicloud/ros-cdk-core';
import { RosCenInstance } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenInstance as CenInstanceProperty };

/**
 * Properties for defining a `CenInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstance
 */
export interface CenInstanceProps {

    /**
     * Property description: The description of the instance.
     * The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property name: The name of the instance.
     * The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property protectionLevel: The level of CIDR block overlapping. 
     * Set the value to REDUCED. REDUCED indicates that the 
     * CIDR blocks can overlap with each other but must not be the same.
     */
    readonly protectionLevel?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCenInstance.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::CenInstance`, which is used to create a Cloud Enterprise Network (CEN) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstance
 */
export class CenInstance extends ros.Resource {

    /**
     * Attribute CenId: The ID of the request.
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenInstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCenInstance = new RosCenInstance(this, id,  {
            protectionLevel: props.protectionLevel,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            tags: props.tags,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenInstance;
        this.attrCenId = rosCenInstance.attrCenId;
    }
}
