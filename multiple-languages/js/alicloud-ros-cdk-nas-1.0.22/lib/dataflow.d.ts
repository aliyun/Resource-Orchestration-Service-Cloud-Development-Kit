import * as ros from '@alicloud/ros-cdk-core';
import { RosDataFlow } from './nas.generated';
export { RosDataFlow as DataFlowProperty };
/**
 * Properties for defining a `DataFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
 */
export interface DataFlowProps {
    /**
     * Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * Property fsetId: Fileset ID.
     */
    readonly fsetId: string | ros.IResolvable;
    /**
     * Property sourceStorage: Access path stored at the source.Format: <storage Type>: \/\/ <PATH>.
     * in:
     * Storage Type: Currently only supports OSS.
     * PATH: OSS's bucket name.Limit the following.
     * Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number.
     * The length is 8 ~ 128 English characters.
     * Use UTF-8 encoding.
     * Can't start with http: \/\/ and https: \/\/.
     * Explain that the OSS BUCKET must be the bucket that exists in the region.
     */
    readonly sourceStorage: string | ros.IResolvable;
    /**
     * Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB\/s.
     * Value:
     * 600
     * 1200
     * 1500
     *
     * Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
     */
    readonly throughput: number | ros.IResolvable;
    /**
     * Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
     * Scope of value: 5 ~ 525600, default value: 10.
     */
    readonly autoRefreshInterval?: number | ros.IResolvable;
    /**
     * Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
     * None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
     * Importchanged: The data update at the source automatically imports CPFS.
     */
    readonly autoRefreshPolicy?: string | ros.IResolvable;
    /**
     * Property autoRefreshs:
     */
    readonly autoRefreshs?: Array<RosDataFlow.AutoRefreshsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property description: Description of data flow.
     * limit:
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::DataFlow`, which is used to create a data flow between a Cloud Parallel File Storage (CPFS) file system and an Object Storage Service (OSS) bucket.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDataFlow`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
 */
export declare class DataFlow extends ros.Resource {
    /**
     * Attribute DataFlowId: Data flow ID.
     */
    readonly attrDataFlowId: ros.IResolvable;
    /**
     * Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DataFlowProps, enableResourcePropertyConstraint?: boolean);
}
