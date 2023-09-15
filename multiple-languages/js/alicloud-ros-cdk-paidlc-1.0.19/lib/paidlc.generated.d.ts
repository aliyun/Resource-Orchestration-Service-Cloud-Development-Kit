import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::PAIDLC::Job`
 */
export interface RosJobProps {
    /**
     * @Property displayName: The name of the task is as follows:
     * The name length does not exceed 256 characters.
     * Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * @Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.
     * The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
     */
    readonly jobSpecs: Array<RosJob.JobSpecsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property jobType: The type of job. Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
     */
    readonly jobType: string | ros.IResolvable;
    /**
     * @Property userCommand: Start commands of all nodes in the task.
     */
    readonly userCommand: string | ros.IResolvable;
    /**
     * @Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.
     */
    readonly codeSource?: RosJob.CodeSourceProperty | ros.IResolvable;
    /**
     * @Property dataSources: List of data source used for task operation.
     */
    readonly dataSources?: Array<RosJob.DataSourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property envs: Environment variable configuration.
     */
    readonly envs?: string | ros.IResolvable;
    /**
     * @Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.
     */
    readonly jobMaxRunningTimeMinutes?: number | ros.IResolvable;
    /**
     * @Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.
     */
    readonly options?: string | ros.IResolvable;
    /**
     * @Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in:
     * 1 is the minimum priority.
     * 9 is the highest priority.
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * @Property resourceId: Resource group ID, optional parameter.
     * The parameter value is empty indicating that submitted to the public resource group.
     * If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
     */
    readonly resourceId?: string | ros.IResolvable;
    /**
     * @Property settings: Job settings.
     */
    readonly settings?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.
     * ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
     * All workers: All workers must be successful to think that the entire task is successful.
     */
    readonly successPolicy?: string | ros.IResolvable;
    /**
     * @Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.
     */
    readonly thirdpartyLibDir?: string | ros.IResolvable;
    /**
     * @Property thirdpartyLibs: Python third-party library list to be installed.
     */
    readonly thirdpartyLibs?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property userVpc: User VPC configuration.
     */
    readonly userVpc?: RosJob.UserVpcProperty | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::PAIDLC::Job`
 */
export declare class RosJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIDLC::Job";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute JobId: The task ID created this time.
     */
    readonly attrJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property displayName: The name of the task is as follows:
     * The name length does not exceed 256 characters.
     * Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
     */
    displayName: string | ros.IResolvable;
    /**
     * @Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.
     * The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
     */
    jobSpecs: Array<RosJob.JobSpecsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property jobType: The type of job. Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
     */
    jobType: string | ros.IResolvable;
    /**
     * @Property userCommand: Start commands of all nodes in the task.
     */
    userCommand: string | ros.IResolvable;
    /**
     * @Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.
     */
    codeSource: RosJob.CodeSourceProperty | ros.IResolvable | undefined;
    /**
     * @Property dataSources: List of data source used for task operation.
     */
    dataSources: Array<RosJob.DataSourcesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property envs: Environment variable configuration.
     */
    envs: string | ros.IResolvable | undefined;
    /**
     * @Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.
     */
    jobMaxRunningTimeMinutes: number | ros.IResolvable | undefined;
    /**
     * @Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.
     */
    options: string | ros.IResolvable | undefined;
    /**
     * @Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in:
     * 1 is the minimum priority.
     * 9 is the highest priority.
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @Property resourceId: Resource group ID, optional parameter.
     * The parameter value is empty indicating that submitted to the public resource group.
     * If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
     */
    resourceId: string | ros.IResolvable | undefined;
    /**
     * @Property settings: Job settings.
     */
    settings: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.
     * ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
     * All workers: All workers must be successful to think that the entire task is successful.
     */
    successPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.
     */
    thirdpartyLibDir: string | ros.IResolvable | undefined;
    /**
     * @Property thirdpartyLibs: Python third-party library list to be installed.
     */
    thirdpartyLibs: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property userVpc: User VPC configuration.
     */
    userVpc: RosJob.UserVpcProperty | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::PAIDLC::Job`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosJobProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosJob {
    /**
     * @stability external
     */
    interface CodeSourceProperty {
        /**
         * @Property mountPath: This task needs to be mounted, optional parameters, and the mounting path is configured in the default code source.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property commit: This task needs to download the code Commit ID, optional parameters, and use the Commith configuration of the code source by default.
         */
        readonly commit?: string | ros.IResolvable;
        /**
         * @Property branch: When running this task, the branch of the cited code warehouse can be selected, and the configuration branch field can be used by default.
         */
        readonly branch?: string | ros.IResolvable;
        /**
         * @Property codeSourceId: Code source ID.How to get code source ID, see ListCodesources.
         */
        readonly codeSourceId: string | ros.IResolvable;
    }
}
export declare namespace RosJob {
    /**
     * @stability external
     */
    interface DataSourcesProperty {
        /**
         * @Property mountPath: This task needs to be mounted, optional parameters, and the mounting path is configured in the default code source.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property dataSourceId: The ID of the data source.How to view the data source ID, see ListDataSets.
         */
        readonly dataSourceId: string | ros.IResolvable;
    }
}
export declare namespace RosJob {
    /**
     * @stability external
     */
    interface JobSpecsProperty {
        /**
         * @Property podCount: The count of pod.
         */
        readonly podCount: number | ros.IResolvable;
        /**
         * @Property imageConfig: The configuration of image
         */
        readonly imageConfig?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property useSpotInstance: Whether to use spot instance
         */
        readonly useSpotInstance: boolean | ros.IResolvable;
        /**
         * @Property type: Type is closely related to Job Type, and different Job Types support different Worker Types.
     * TFJob: supports Chief, PS, Worker, Evaluator, GraphLearn
     * PyTorchJob: Support Worker, Master
     * XGBoostJob: support Worker, Master
     * The Master in PyTorchJob and XGBoostJob is optional; if the Master is not specified, the system will automatically regard the first Worker node as the Master node.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property ecsSpec: Worker hardware specifications.
         */
        readonly ecsSpec: string | ros.IResolvable;
        /**
         * @Property resourceConfig: Resource configuration.
         */
        readonly resourceConfig?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property image: The running image address of this type of Worker.
     * You can call ListImages to obtain the community and PAI-optimized images provided by the PAI platform. It is also possible to specify an image publicized by a third party.
         */
        readonly image: string | ros.IResolvable;
        /**
         * @Property extraPodSpec: Extra pod configuration.
         */
        readonly extraPodSpec?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
    }
}
export declare namespace RosJob {
    /**
     * @stability external
     */
    interface UserVpcProperty {
        /**
         * @Property vpcId: User VPC ID.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the user security group.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property switchId: The ID of the user switch, optional parameter
     * When the parameter value is empty, the system will automatically select the appropriate switch according to the inventory situation;
     * You can also specify the switch ID yourself.
         */
        readonly switchId?: string | ros.IResolvable;
        /**
         * @Property extendedCidRs: Expansion network segment
     * When the switch ID is empty, this parameter can not be provided, and the system will automatically obtain all network segments under the VPC;
     * When the switch ID is not empty, this parameter must be provided. It is recommended to fill in all the network segments under the VPC.
         */
        readonly extendedCidRs?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::PAIDLC::Tensorboard`
 */
export interface RosTensorboardProps {
    /**
     * @Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
     */
    readonly dataSourceId: string | ros.IResolvable;
    /**
     * @Property displayName: Tensorboard name.
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * @Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property cpu: CPU nuclear number.
     */
    readonly cpu?: number | ros.IResolvable;
    /**
     * @Property dataSources: Data source configuration.
     */
    readonly dataSources?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dataSourceType: The type of dataset. Values: OSS,NAS
     */
    readonly dataSourceType?: string | ros.IResolvable;
    /**
     * @Property jobId: Task ID.How to get the task ID, see Listjobs.
     */
    readonly jobId?: string | ros.IResolvable;
    /**
     * @Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.
     */
    readonly maxRunningTimeMinutes?: number | ros.IResolvable;
    /**
     * @Property memory: Memory size, the unit is: GB.
     */
    readonly memory?: number | ros.IResolvable;
    /**
     * @Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
     */
    readonly options?: string | ros.IResolvable;
    /**
     * @Property sourceId: Source ID.
     */
    readonly sourceId?: string | ros.IResolvable;
    /**
     * @Property sourceType: Source type.
     */
    readonly sourceType?: string | ros.IResolvable;
    /**
     * @Property summaryPath: Summary directory.
     */
    readonly summaryPath?: string | ros.IResolvable;
    /**
     * @Property summaryRelativePath: Summary relative directory. Summary relative directory and Summary directory are mutually exclusive
     */
    readonly summaryRelativePath?: string | ros.IResolvable;
    /**
     * @Property uri: URI of a dataset:
     * When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET]. [Endpoint]/[Path].
     * When the DataSourceType is NAS, the format is: nas:// [nas-filesystem-id]. [Region]/[PATH].
     */
    readonly uri?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::PAIDLC::Tensorboard`
 */
export declare class RosTensorboard extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIDLC::Tensorboard";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute TensorboardId: Tensorboard id.
     */
    readonly attrTensorboardId: ros.IResolvable;
    /**
     * @Attribute TensorboardUrl: Tensorboard url.
     */
    readonly attrTensorboardUrl: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
     */
    dataSourceId: string | ros.IResolvable;
    /**
     * @Property displayName: Tensorboard name.
     */
    displayName: string | ros.IResolvable;
    /**
     * @Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property cpu: CPU nuclear number.
     */
    cpu: number | ros.IResolvable | undefined;
    /**
     * @Property dataSources: Data source configuration.
     */
    dataSources: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dataSourceType: The type of dataset. Values: OSS,NAS
     */
    dataSourceType: string | ros.IResolvable | undefined;
    /**
     * @Property jobId: Task ID.How to get the task ID, see Listjobs.
     */
    jobId: string | ros.IResolvable | undefined;
    /**
     * @Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.
     */
    maxRunningTimeMinutes: number | ros.IResolvable | undefined;
    /**
     * @Property memory: Memory size, the unit is: GB.
     */
    memory: number | ros.IResolvable | undefined;
    /**
     * @Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
     */
    options: string | ros.IResolvable | undefined;
    /**
     * @Property sourceId: Source ID.
     */
    sourceId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceType: Source type.
     */
    sourceType: string | ros.IResolvable | undefined;
    /**
     * @Property summaryPath: Summary directory.
     */
    summaryPath: string | ros.IResolvable | undefined;
    /**
     * @Property summaryRelativePath: Summary relative directory. Summary relative directory and Summary directory are mutually exclusive
     */
    summaryRelativePath: string | ros.IResolvable | undefined;
    /**
     * @Property uri: URI of a dataset:
     * When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET]. [Endpoint]/[Path].
     * When the DataSourceType is NAS, the format is: nas:// [nas-filesystem-id]. [Region]/[PATH].
     */
    uri: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::PAIDLC::Tensorboard`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTensorboardProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
