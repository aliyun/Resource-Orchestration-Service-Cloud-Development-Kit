import * as ros from '@alicloud/ros-cdk-core';
import { RosAlias } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlias as AliasProperty };

/**
 * Properties for defining a `Alias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-alias
 */
export interface AliasProps {

    /**
     * Property aliasName: Alias name
     */
    readonly aliasName: string | ros.IResolvable;

    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property additionalVersion: Additional version
     */
    readonly additionalVersion?: string | ros.IResolvable;

    /**
     * Property additionalWeight: Traffic weight of additional version. From 0 to 100.
     */
    readonly additionalWeight?: number | ros.IResolvable;

    /**
     * Property description: Version description
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property versionId: Version ID
     */
    readonly versionId?: string | ros.IResolvable;
}

/**
 * Represents a `Alias`.
 */
export interface IAlias extends ros.IResource {
    readonly props: AliasProps;

    /**
     * Attribute AliasName: The alias name
     */
    readonly attrAliasName: ros.IResolvable | string;

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
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::Alias`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlias`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-alias
 */
export class Alias extends ros.Resource implements IAlias {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AliasProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AliasName: The alias name
     */
    public readonly attrAliasName: ros.IResolvable | string;

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
    constructor(scope: ros.Construct, id: string, props: AliasProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAlias = new RosAlias(this, id,  {
            versionId: props.versionId,
            description: props.description,
            serviceName: props.serviceName,
            additionalVersion: props.additionalVersion,
            aliasName: props.aliasName,
            additionalWeight: props.additionalWeight,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlias;
        this.attrAliasName = rosAlias.attrAliasName;
        this.attrServiceName = rosAlias.attrServiceName;
        this.attrVersionId = rosAlias.attrVersionId;
    }
}
