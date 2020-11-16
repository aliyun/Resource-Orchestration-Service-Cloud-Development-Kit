import * as ros from '@ros-cdk/core';
import { RosVersion } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVersion as VersionProperty };

/**
 * Properties for defining a `ALIYUN::FC::Version`
 */
export interface VersionProps {

    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string;

    /**
     * @Property description: Version description
     */
    readonly description?: string;
}

/**
 * A ROS resource type:  `ALIYUN::FC::Version`
 */
export class Version extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ServiceName: The service name
     */
    public readonly attrServiceName: any;

    /**
     * @Attribute VersionId: The version ID
     */
    public readonly attrVersionId: any;

    /**
     * Create a new `ALIYUN::FC::Version`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VersionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVersion = new RosVersion(this, id,  {
            description: props.description,
            serviceName: props.serviceName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVersion;
        this.attrServiceName = rosVersion.attrServiceName;
        this.attrVersionId = rosVersion.attrVersionId;
    }
}
