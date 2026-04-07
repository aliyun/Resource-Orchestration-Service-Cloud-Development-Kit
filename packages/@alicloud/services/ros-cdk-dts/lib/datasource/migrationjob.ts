import * as ros from '@alicloud/ros-cdk-core';
import { RosMigrationJob } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `MigrationJob`.
 */
export interface IMigrationJob extends ros.IResource {
    readonly props: MigrationJobProps;

    /**
     * Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DestinationEndpointEngineName: The target database engine type.
     */
    readonly attrDestinationEndpointEngineName: ros.IResolvable | string;

    /**
     * Attribute DestinationSourceEndpointRegion: The target database engine type.
     */
    readonly attrDestinationSourceEndpointRegion: ros.IResolvable | string;

    /**
     * Attribute DtsInstanceId: The ID of the synchronization instance.
     */
    readonly attrDtsInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    readonly attrInstanceClass: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute SourceEndpointEngineName: The type of the source instance database engine.
     */
    readonly attrSourceEndpointEngineName: ros.IResolvable | string;

    /**
     * Attribute SourceEndpointRegion: The type of the source instance database engine.
     */
    readonly attrSourceEndpointRegion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::MigrationJob`, which is used to query the execution information about a data migration task in Data Transmission Service (DTS).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMigrationJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjob
 */
export class MigrationJob extends ros.Resource implements IMigrationJob {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: MigrationJobProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DestinationEndpointEngineName: The target database engine type.
     */
    public readonly attrDestinationEndpointEngineName: ros.IResolvable | string;

    /**
     * Attribute DestinationSourceEndpointRegion: The target database engine type.
     */
    public readonly attrDestinationSourceEndpointRegion: ros.IResolvable | string;

    /**
     * Attribute DtsInstanceId: The ID of the synchronization instance.
     */
    public readonly attrDtsInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    public readonly attrInstanceClass: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute SourceEndpointEngineName: The type of the source instance database engine.
     */
    public readonly attrSourceEndpointEngineName: ros.IResolvable | string;

    /**
     * Attribute SourceEndpointRegion: The type of the source instance database engine.
     */
    public readonly attrSourceEndpointRegion: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MigrationJobProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMigrationJob = new RosMigrationJob(this, id,  {
            dtsInstanceId: props.dtsInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMigrationJob;
        this.attrCreateTime = rosMigrationJob.attrCreateTime;
        this.attrDestinationEndpointEngineName = rosMigrationJob.attrDestinationEndpointEngineName;
        this.attrDestinationSourceEndpointRegion = rosMigrationJob.attrDestinationSourceEndpointRegion;
        this.attrDtsInstanceId = rosMigrationJob.attrDtsInstanceId;
        this.attrInstanceClass = rosMigrationJob.attrInstanceClass;
        this.attrPaymentType = rosMigrationJob.attrPaymentType;
        this.attrSourceEndpointEngineName = rosMigrationJob.attrSourceEndpointEngineName;
        this.attrSourceEndpointRegion = rosMigrationJob.attrSourceEndpointRegion;
    }
}
