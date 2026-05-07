import * as ros from '@alicloud/ros-cdk-core';
import { RosObjectAcl } from './oss.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::ObjectAcl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosObjectAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
 */
export declare class ObjectAcl extends ros.Resource implements IObjectAcl {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ObjectAclProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ObjectAclProps, enableResourcePropertyConstraint?: boolean);
}
