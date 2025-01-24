import * as ros from '@alicloud/ros-cdk-core';
import { RosVersion } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVersion as VersionProperty };

/**
 * Properties for defining a `Version`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
 */
export interface VersionProps {

    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property description: Version description
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `Version`.
 */
export interface IVersion extends ros.IResource {
    readonly props: VersionProps;

    /**
     * Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable | string;

    /**
     * Attribute VersionId: The version ID
     */
    readonly attrVersionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::Version`, which is used to release a Version.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVersion`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
 */
export class Version extends ros.Resource implements IVersion {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VersionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ServiceName: The service name
     */
    public readonly attrServiceName: ros.IResolvable | string;

    /**
     * Attribute VersionId: The version ID
     */
    public readonly attrVersionId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VersionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVersion = new RosVersion(this, id,  {
            description: props.description,
            serviceName: props.serviceName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVersion;
        this.attrServiceName = rosVersion.attrServiceName;
        this.attrVersionId = rosVersion.attrVersionId;
    }
}
