import * as ros from '@alicloud/ros-cdk-core';
import { RosDataFlow } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDataFlow as DataFlowProperty };

/**
 * Properties for defining a `DataFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
 */
export interface DataFlowProps {

    /**
     * Property fileSystemId: The ID of the file system.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-125487\*\*\*\*.
     * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
     * bmcpfs-0015\*\*\*\*.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * Property fsetId: The fileset ID.
     * >  This parameter is required for CPFS file systems.
     */
    readonly fsetId: string | ros.IResolvable;

    /**
     * Property sourceStorage: The access path of the source storage. Format: `<storage type>:\/\/[<account
     * id>:]<path>`.
     * Parameters:
     * *   storage type: Only OSS is supported.
     * *   account id (optional): the UID of the account of the source storage. This
     * parameter is required when you use OSS buckets across accounts.
     * *   path: the name of the OSS bucket. Limits:
     * *   The name can contain only lowercase letters, digits, and hyphens (-). The
     * name must start and end with a lowercase letter or digit.
     * *   The name can be up to 128 characters in length.
     * *   The name must be encoded in UTF-8.
     * > *   The OSS bucket must be an existing bucket in the region.
     * > *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
     */
    readonly sourceStorage: string | ros.IResolvable;

    /**
     * Property throughput: The maximum data flow throughput. Unit: MB\/s. Valid values:
     * *   600
     * *   1200
     * *   1500
     * >  The data flow throughput must be less than the I\/O throughput of the file
     * system. This parameter is required for CPFS file systems.
     */
    readonly throughput: number | ros.IResolvable;

    /**
     * Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
     * Scope of value: 5 ~ 525600, default value: 10.
     */
    readonly autoRefreshInterval?: number | ros.IResolvable;

    /**
     * Property autoRefreshPolicy: The automatic update policy. The updated data in the source storage is imported
     * into the CPFS file system based on the policy.
     * *   None (default): Updated data in the source storage is not automatically
     * imported into the CPFS file system. You can run a data flow task to import the
     * updated data from the source storage.
     * *   ImportChanged: Updated data in the source storage is automatically imported
     * into the CPFS file system.
     * >  This parameter takes effect only for CPFS file systems.
     */
    readonly autoRefreshPolicy?: string | ros.IResolvable;

    /**
     * Property autoRefreshs:
     */
    readonly autoRefreshs?: Array<RosDataFlow.AutoRefreshsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property description: The description of the dataflow.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
     * No (default value): It means that the source storage does not need to be accessed by safe protection.
     * SSL: Protective access through SSL certificates.
     */
    readonly sourceSecurityType?: string | ros.IResolvable;
}

/**
 * Represents a `DataFlow`.
 */
export interface IDataFlow extends ros.IResource {
    readonly props: DataFlowProps;

    /**
     * Attribute DataFlowId: Data flow ID.
     */
    readonly attrDataFlowId: ros.IResolvable | string;

    /**
     * Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::DataFlow`Creates a data flow between a Cloud Parallel File Storage (CPFS) file system and an Object Storage Service (OSS) bucket.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDataFlow`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
 */
export class DataFlow extends ros.Resource implements IDataFlow {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DataFlowProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DataFlowId: Data flow ID.
     */
    public readonly attrDataFlowId: ros.IResolvable | string;

    /**
     * Attribute FileSystemId: File system ID.
     */
    public readonly attrFileSystemId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DataFlowProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDataFlow = new RosDataFlow(this, id,  {
            fsetId: props.fsetId,
            sourceStorage: props.sourceStorage,
            description: props.description,
            sourceSecurityType: props.sourceSecurityType,
            fileSystemId: props.fileSystemId,
            throughput: props.throughput,
            autoRefreshs: props.autoRefreshs,
            autoRefreshPolicy: props.autoRefreshPolicy,
            autoRefreshInterval: props.autoRefreshInterval === undefined || props.autoRefreshInterval === null ? 10 : props.autoRefreshInterval,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDataFlow;
        this.attrDataFlowId = rosDataFlow.attrDataFlowId;
        this.attrFileSystemId = rosDataFlow.attrFileSystemId;
    }
}
