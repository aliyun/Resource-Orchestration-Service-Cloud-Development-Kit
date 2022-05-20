import * as ros from '@alicloud/ros-cdk-core';
import { RosBackupClients } from './hbr.generated';
export { RosBackupClients as BackupClientsProperty };
/**
 * Properties for defining a `ALIYUN::HBR::BackupClients`
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
 * A ROS resource type:  `ALIYUN::HBR::BackupClients`
 */
export declare class BackupClients extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClientIds: ID list of clients installed in instances
     */
    readonly attrClientIds: ros.IResolvable;
    /**
     * Attribute InstanceIds: ID list of instances to install backup client
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Create a new `ALIYUN::HBR::BackupClients`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackupClientsProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=backupclients.d.ts.map