import * as ros from '@alicloud/ros-cdk-core';
import { RosObjectAcl } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosObjectAcl as ObjectAclProperty };

/**
 * Properties for defining a `ObjectAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
 */
export interface ObjectAclProps {

    /**
     * Property bucket: Bucket name.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * Property objectAcl: Object acl.
     */
    readonly objectAcl: string | ros.IResolvable;

    /**
     * Property objectKey: Object key.
     */
    readonly objectKey: string | ros.IResolvable;
}

/**
 * Represents a `ObjectAcl`.
 */
export interface IObjectAcl extends ros.IResource {
    readonly props: ObjectAclProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::ObjectAcl`, which is used to modify the access control list (ACL) of an Object Storage Service (OSS) object.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosObjectAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
 */
export class ObjectAcl extends ros.Resource implements IObjectAcl {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ObjectAclProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ObjectAclProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosObjectAcl = new RosObjectAcl(this, id,  {
            objectAcl: props.objectAcl,
            bucket: props.bucket,
            objectKey: props.objectKey,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosObjectAcl;
    }
}
