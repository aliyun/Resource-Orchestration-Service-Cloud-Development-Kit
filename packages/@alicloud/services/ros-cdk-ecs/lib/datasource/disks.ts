import * as ros from '@alicloud/ros-cdk-core';
import { RosDisks } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDisks as DisksProperty };

/**
 * Properties for defining a `Disks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
 */
export interface DisksProps {

    /**
     * Property additionalAttributes: The value of attribute N. Set the value to IOPS, which indicates the maximum IOPS of the disk.
     */
    readonly additionalAttributes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * Property category: The category of the disk. Valid values:
     * all: all disk categories
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral: retired local disk
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     * local_ssd_pro: I\/O-intensive local disk
     * local_hdd_pro: throughput-intensive local disk
     */
    readonly category?: string | ros.IResolvable;

    /**
     * Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
     * Default value: false.
     */
    readonly deleteAutoSnapshot?: string | ros.IResolvable;

    /**
     * Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released. Valid values:
     * true: The cloud disk is released when its associated instance is released.
     * false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
     * Default value: false.
     */
    readonly deleteWithInstance?: boolean | ros.IResolvable;

    /**
     * Property diskChargeType: The billing method of the disk. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    readonly diskChargeType?: string | ros.IResolvable;

    /**
     * Property diskIds: The IDs of disks.
     * The value is a JSON array that consists of up to 100 disk IDs.
     * Separate the disk IDs with commas (,).
     */
    readonly diskIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property diskName: The name of the disk.
     */
    readonly diskName?: string | ros.IResolvable;

    /**
     * Property diskType: The type of the disk. Valid values:
     * all: system disk and data disk
     * system: system disk
     * data: data disk
     * Default value: all.
     */
    readonly diskType?: string | ros.IResolvable;

    /**
     * Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
     * true: An automatic snapshot policy is applied to the cloud disk.
     * false: No automatic snapshot policy is applied to the cloud disk.
     * Default value: false.
     */
    readonly enableAutomatedSnapshotPolicy?: boolean | ros.IResolvable;

    /**
     * Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
     * true: The automatic snapshot policy feature is enabled for the cloud disk.
     * false: The automatic snapshot policy feature is disabled for the cloud disk.
     * Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
     */
    readonly enableAutoSnapshot?: boolean | ros.IResolvable;

    /**
     * Property enableShared: Specifies whether the disk is a Shared Block Storage device.
     */
    readonly enableShared?: string | ros.IResolvable;

    /**
     * Property encrypted: Specifies whether to query only encrypted cloud disks.
     * Default value: false.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * Property filters: Filter value when querying resources
     */
    readonly filters?: Array<RosDisks.FiltersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property instanceId: The ID of the instance to which the disk is attached.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk. Valid values:
     * Disabled: The multi-attach feature is disabled.
     * Enabled: The multi-attach feature is enabled.
     * LegacyShared: Shared Block Storage devices are queried.
     * The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
     */
    readonly multiAttach?: string | ros.IResolvable;

    /**
     * Property portable: Specifies whether the disk is removable. Valid values:
     * true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
     * false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
     * The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
     * Local disks
     * Local SSDs
     * Subscription data disks
     */
    readonly portable?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the disk belongs. 
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property snapshotId: The ID of the snapshot used to create the cloud disk.
     */
    readonly snapshotId?: string | ros.IResolvable;

    /**
     * Property status: The state of the cloud disk. For more information, see Disk states. Valid values:
     * In_use
     * Available
     * Attaching
     * Detaching
     * Creating
     * ReIniting
     * All
     * Default value: All.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * Property tags: Tags of disks.
     */
    readonly tags?: RosDisks.TagsProperty[];

    /**
     * Property zoneId: The ID of the zone for which to query resources.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Disks`, which is used to query the Elastic Block Storage (EBS) devices that you created, including cloud disks and local disks.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDisks`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
 */
export class Disks extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DisksProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DiskIds: The list of disk IDs.
     */
    public readonly attrDiskIds: ros.IResolvable;

    /**
     * Attribute Disks: The list of disks.
     */
    public readonly attrDisks: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DisksProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDisks = new RosDisks(this, id,  {
            status: props.status,
            diskIds: props.diskIds,
            enableShared: props.enableShared,
            category: props.category,
            kmsKeyId: props.kmsKeyId,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            instanceId: props.instanceId,
            encrypted: props.encrypted,
            deleteWithInstance: props.deleteWithInstance,
            deleteAutoSnapshot: props.deleteAutoSnapshot,
            enableAutomatedSnapshotPolicy: props.enableAutomatedSnapshotPolicy,
            diskChargeType: props.diskChargeType,
            enableAutoSnapshot: props.enableAutoSnapshot,
            autoSnapshotPolicyId: props.autoSnapshotPolicyId,
            diskName: props.diskName,
            multiAttach: props.multiAttach,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            diskType: props.diskType,
            snapshotId: props.snapshotId,
            portable: props.portable,
            filters: props.filters,
            additionalAttributes: props.additionalAttributes,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDisks;
        this.attrDiskIds = rosDisks.attrDiskIds;
        this.attrDisks = rosDisks.attrDisks;
    }
}
