import * as ros from '@alicloud/ros-cdk-core';
import { RosDisk } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDisk as DiskProperty };

/**
 * Properties for defining a `Disk`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-disk
 */
export interface DiskProps {

    /**
     * Property category: The category of the disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: all-flash disk.
     */
    readonly category: string | ros.IResolvable;

    /**
     * Property ensRegionId: The ID of the edge node.
     */
    readonly ensRegionId: string | ros.IResolvable;

    /**
     * Property instanceChargeType: The billing method of the instance. Set the value to PostPaid.
     */
    readonly instanceChargeType: string | ros.IResolvable;

    /**
     * Property size: The size of the disk. Unit: GiB.
     */
    readonly size: string | ros.IResolvable;

    /**
     * Property diskName: The name of the disk.
     */
    readonly diskName?: string | ros.IResolvable;

    /**
     * Property encrypted: Specifies whether to encrypt the new system disk. Valid values:
     * true
     * false (default): no
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
     * Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * Property snapshotId: The ID of the snapshot that you want to use to create the disk.
     * The following limits apply to the SnapshotId and Size parameters:
     * If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
     * If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
     */
    readonly snapshotId?: string | ros.IResolvable;
}

/**
 * Represents a `Disk`.
 */
export interface IDisk extends ros.IResource {
    readonly props: DiskProps;

    /**
     * Attribute DiskId: The ID of the instance.
     */
    readonly attrDiskId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::Disk`, which is used to create a pay-as-you-go or subscription data disk.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDisk`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-disk
 */
export class Disk extends ros.Resource implements IDisk {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DiskProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DiskId: The ID of the instance.
     */
    public readonly attrDiskId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDisk = new RosDisk(this, id,  {
            snapshotId: props.snapshotId,
            category: props.category,
            kmsKeyId: props.kmsKeyId,
            encrypted: props.encrypted,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            size: props.size,
            diskName: props.diskName,
            ensRegionId: props.ensRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDisk;
        this.attrDiskId = rosDisk.attrDiskId;
    }
}
