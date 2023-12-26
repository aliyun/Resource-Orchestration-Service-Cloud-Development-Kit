import * as ros from '@alicloud/ros-cdk-core';
import { RosTensorboard } from './paidlc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTensorboard as TensorboardProperty };

/**
 * Properties for defining a `Tensorboard`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-tensorboard
 */
export interface TensorboardProps {

    /**
     * Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
     */
    readonly dataSourceId: string | ros.IResolvable;

    /**
     * Property displayName: Tensorboard name.
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * Property cpu: CPU nuclear number.
     */
    readonly cpu?: number | ros.IResolvable;

    /**
     * Property dataSources: Data source configuration.
     */
    readonly dataSources?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property dataSourceType: The type of dataset. Values: OSS,NAS
     */
    readonly dataSourceType?: string | ros.IResolvable;

    /**
     * Property jobId: Task ID.How to get the task ID, see Listjobs.
     */
    readonly jobId?: string | ros.IResolvable;

    /**
     * Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.
     */
    readonly maxRunningTimeMinutes?: number | ros.IResolvable;

    /**
     * Property memory: Memory size, the unit is: GB.
     */
    readonly memory?: number | ros.IResolvable;

    /**
     * Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
     */
    readonly options?: string | ros.IResolvable;

    /**
     * Property sourceId: Source ID.
     */
    readonly sourceId?: string | ros.IResolvable;

    /**
     * Property sourceType: Source type.
     */
    readonly sourceType?: string | ros.IResolvable;

    /**
     * Property summaryPath: Summary directory.
     */
    readonly summaryPath?: string | ros.IResolvable;

    /**
     * Property summaryRelativePath: Summary relative directory. Summary relative directory and Summary directory are mutually exclusive
     */
    readonly summaryRelativePath?: string | ros.IResolvable;

    /**
     * Property uri: URI of a dataset:
     * When DataSourceType is OSS, the format is: OSS: \/\/ [OSS-BUCET]. [Endpoint]\/[Path].
     * When the DataSourceType is NAS, the format is: nas:\/\/ [nas-filesystem-id]. [Region]\/[PATH].
     */
    readonly uri?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIDLC::Tensorboard`, which is used to create a TensorBoard instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTensorboard`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-tensorboard
 */
export class Tensorboard extends ros.Resource {

    /**
     * Attribute TensorboardId: Tensorboard id.
     */
    public readonly attrTensorboardId: ros.IResolvable;

    /**
     * Attribute TensorboardUrl: Tensorboard url.
     */
    public readonly attrTensorboardUrl: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TensorboardProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTensorboard = new RosTensorboard(this, id,  {
            maxRunningTimeMinutes: props.maxRunningTimeMinutes,
            options: props.options,
            memory: props.memory,
            summaryPath: props.summaryPath,
            sourceId: props.sourceId,
            sourceType: props.sourceType,
            workspaceId: props.workspaceId,
            cpu: props.cpu,
            uri: props.uri,
            dataSources: props.dataSources,
            summaryRelativePath: props.summaryRelativePath,
            dataSourceType: props.dataSourceType,
            displayName: props.displayName,
            jobId: props.jobId,
            dataSourceId: props.dataSourceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTensorboard;
        this.attrTensorboardId = rosTensorboard.attrTensorboardId;
        this.attrTensorboardUrl = rosTensorboard.attrTensorboardUrl;
    }
}
