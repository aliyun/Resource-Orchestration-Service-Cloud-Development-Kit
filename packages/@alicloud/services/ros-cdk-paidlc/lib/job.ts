import * as ros from '@alicloud/ros-cdk-core';
import { RosJob } from './paidlc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosJob as JobProperty };

/**
 * Properties for defining a `ALIYUN::PAIDLC::Job`
 */
export interface JobProps {

    /**
     * Property displayName: The name of the task is as follows:
     * The name length does not exceed 256 characters.
     * Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.
     * The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
     */
    readonly jobSpecs: Array<RosJob.JobSpecsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property jobType: The type of job. Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
     */
    readonly jobType: string | ros.IResolvable;

    /**
     * Property userCommand: Start commands of all nodes in the task.
     */
    readonly userCommand: string | ros.IResolvable;

    /**
     * Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.
     */
    readonly codeSource?: RosJob.CodeSourceProperty | ros.IResolvable;

    /**
     * Property dataSources: List of data source used for task operation.
     */
    readonly dataSources?: Array<RosJob.DataSourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property envs: Environment variable configuration.
     */
    readonly envs?: string | ros.IResolvable;

    /**
     * Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.
     */
    readonly jobMaxRunningTimeMinutes?: number | ros.IResolvable;

    /**
     * Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.
     */
    readonly options?: string | ros.IResolvable;

    /**
     * Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in:
     * 1 is the minimum priority.
     * 9 is the highest priority.
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * Property resourceId: Resource group ID, optional parameter.
     * The parameter value is empty indicating that submitted to the public resource group.
     * If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
     */
    readonly resourceId?: string | ros.IResolvable;

    /**
     * Property settings: Job settings.
     */
    readonly settings?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.
     * ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
     * All workers: All workers must be successful to think that the entire task is successful.
     */
    readonly successPolicy?: string | ros.IResolvable;

    /**
     * Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.
     */
    readonly thirdpartyLibDir?: string | ros.IResolvable;

    /**
     * Property thirdpartyLibs: Python third-party library list to be installed.
     */
    readonly thirdpartyLibs?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property userVpc: User VPC configuration.
     */
    readonly userVpc?: RosJob.UserVpcProperty | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::PAIDLC::Job`
 */
export class Job extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute JobId: The task ID created this time.
     */
    public readonly attrJobId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::PAIDLC::Job`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: JobProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosJob = new RosJob(this, id,  {
            thirdpartyLibs: props.thirdpartyLibs,
            options: props.options,
            priority: props.priority,
            envs: props.envs,
            jobMaxRunningTimeMinutes: props.jobMaxRunningTimeMinutes,
            workspaceId: props.workspaceId,
            codeSource: props.codeSource,
            userVpc: props.userVpc,
            jobSpecs: props.jobSpecs,
            userCommand: props.userCommand,
            dataSources: props.dataSources,
            jobType: props.jobType,
            resourceId: props.resourceId,
            thirdpartyLibDir: props.thirdpartyLibDir,
            displayName: props.displayName,
            successPolicy: props.successPolicy,
            settings: props.settings,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosJob;
        this.attrJobId = rosJob.attrJobId;
    }
}
