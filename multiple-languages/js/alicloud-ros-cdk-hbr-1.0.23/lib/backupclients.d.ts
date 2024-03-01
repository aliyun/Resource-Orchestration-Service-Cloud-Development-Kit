import * as ros from '@alicloud/ros-cdk-core';
import { RosBackupClients } from './hbr.generated';
export { RosBackupClients as BackupClientsProperty };
/**
 * Properties for defining a `BackupClients`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
 */
export interface BackupClientsProps {
    /**
     * Property instanceIds: ID list of instances to install backup client
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosBackupClients.TagsProperty[];
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::BackupClients`, which is used to install backup clients on Elastic Compute Service (ECS) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackupClients`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
 */
export declare class BackupClients extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BackupClientsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClientIds: ID list of clients installed in instances
     */
    readonly attrClientIds: ros.IResolvable;
    /**
     * Attribute InstanceIds: ID list of instances to install backup client
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackupClientsProps, enableResourcePropertyConstraint?: boolean);
}
