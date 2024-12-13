import * as ros from '@alicloud/ros-cdk-core';
import { RosMigrationJob } from './dts.generated';
export { RosMigrationJob as MigrationJobProperty };
/**
 * Properties for defining a `MigrationJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjob
 */
export interface MigrationJobProps {
    /**
     * Property dtsInstanceId: The ID of the synchronization instance.
     */
    readonly dtsInstanceId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::MigrationJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMigrationJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjob
 */
export declare class MigrationJob extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MigrationJobProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DestinationEndpointEngineName: The target database engine type.
     */
    readonly attrDestinationEndpointEngineName: ros.IResolvable;
    /**
     * Attribute DestinationSourceEndpointRegion: The target database engine type.
     */
    readonly attrDestinationSourceEndpointRegion: ros.IResolvable;
    /**
     * Attribute DtsInstanceId: The ID of the synchronization instance.
     */
    readonly attrDtsInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    readonly attrInstanceClass: ros.IResolvable;
    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute SourceEndpointEngineName: The type of the source instance database engine.
     */
    readonly attrSourceEndpointEngineName: ros.IResolvable;
    /**
     * Attribute SourceEndpointRegion: The type of the source instance database engine.
     */
    readonly attrSourceEndpointRegion: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MigrationJobProps, enableResourcePropertyConstraint?: boolean);
}
