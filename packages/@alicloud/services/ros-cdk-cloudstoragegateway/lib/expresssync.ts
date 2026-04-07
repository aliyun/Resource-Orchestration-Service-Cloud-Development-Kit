import * as ros from '@alicloud/ros-cdk-core';
import { RosExpressSync } from './cloudstoragegateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosExpressSync as ExpressSyncProperty };

/**
 * Properties for defining a `ExpressSync`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
 */
export interface ExpressSyncProps {

    /**
     * Property bucketName: The name of the OSS bucket.
     */
    readonly bucketName: string | ros.IResolvable;

    /**
     * Property bucketRegion: The region of the OSS bucket.
     */
    readonly bucketRegion: string | ros.IResolvable;

    /**
     * Property name: The name of the ExpressSync.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property bucketPrefix: The prefix of the OSS bucket.
     */
    readonly bucketPrefix?: string | ros.IResolvable;

    /**
     * Property description: The description of the ExpressSync.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `ExpressSync`.
 */
export interface IExpressSync extends ros.IResource {
    readonly props: ExpressSyncProps;

    /**
     * Attribute ExpressSyncId: The ID of the ExpressSync.
     */
    readonly attrExpressSyncId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudStorageGateway::ExpressSync`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosExpressSync`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
 */
export class ExpressSync extends ros.Resource implements IExpressSync {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ExpressSyncProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ExpressSyncId: The ID of the ExpressSync.
     */
    public readonly attrExpressSyncId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ExpressSyncProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosExpressSync = new RosExpressSync(this, id,  {
            description: props.description,
            bucketName: props.bucketName,
            bucketRegion: props.bucketRegion,
            bucketPrefix: props.bucketPrefix,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosExpressSync;
        this.attrExpressSyncId = rosExpressSync.attrExpressSyncId;
    }
}
