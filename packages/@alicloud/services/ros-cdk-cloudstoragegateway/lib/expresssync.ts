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
     * Property bucketName: The name of the bucket. Note:
     * - You can specify only one OSS bucket for a synchronization group. All data
     * changes in the bucket are synchronized to your on-premises environment.
     * - If you have not created a share for the OSS bucket, you must first create a
     * share between the file gateway and the OSS bucket.
     */
    readonly bucketName: string | ros.IResolvable;

    /**
     * Property bucketRegion: The region of the OSS bucket.
     */
    readonly bucketRegion: string | ros.IResolvable;

    /**
     * Property name: The name of the express synchronization group. The name must be 1 to 128
     * characters in length and can contain letters, Chinese characters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter or a
     * Chinese character.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property bucketPrefix: The prefix of the OSS bucket.
     */
    readonly bucketPrefix?: string | ros.IResolvable;

    /**
     * Property description: The description of the express synchronization group. The description can be up
     * to 255 characters in length.
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
