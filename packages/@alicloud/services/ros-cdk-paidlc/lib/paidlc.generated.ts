// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-job
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
    readonly settings?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosJobProps`
 *
 * @param properties - the TypeScript properties of a `RosJobProps`
 *
 * @returns the result of the validation.
 */
function RosJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('thirdpartyLibs', ros.listValidator(ros.validateString))(properties.thirdpartyLibs));
    errors.collect(ros.propertyValidator('options', ros.validateString)(properties.options));
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('envs', ros.validateString)(properties.envs));
    errors.collect(ros.propertyValidator('jobMaxRunningTimeMinutes', ros.validateNumber)(properties.jobMaxRunningTimeMinutes));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    errors.collect(ros.propertyValidator('codeSource', RosJob_CodeSourcePropertyValidator)(properties.codeSource));
    errors.collect(ros.propertyValidator('userVpc', RosJob_UserVpcPropertyValidator)(properties.userVpc));
    errors.collect(ros.propertyValidator('jobSpecs', ros.requiredValidator)(properties.jobSpecs));
    errors.collect(ros.propertyValidator('jobSpecs', ros.listValidator(RosJob_JobSpecsPropertyValidator))(properties.jobSpecs));
    errors.collect(ros.propertyValidator('userCommand', ros.requiredValidator)(properties.userCommand));
    errors.collect(ros.propertyValidator('userCommand', ros.validateString)(properties.userCommand));
    errors.collect(ros.propertyValidator('dataSources', ros.listValidator(RosJob_DataSourcesPropertyValidator))(properties.dataSources));
    errors.collect(ros.propertyValidator('jobType', ros.requiredValidator)(properties.jobType));
    if(properties.jobType && (typeof properties.jobType) !== 'object') {
        errors.collect(ros.propertyValidator('jobType', ros.validateAllowedValues)({
          data: properties.jobType,
          allowedValues: ["TFJob","PyTorchJob","XGBoostJob","OneFlowJob","ElasticBatch"],
        }));
    }
    errors.collect(ros.propertyValidator('jobType', ros.validateString)(properties.jobType));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('thirdpartyLibDir', ros.validateString)(properties.thirdpartyLibDir));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('successPolicy', ros.validateString)(properties.successPolicy));
    errors.collect(ros.propertyValidator('settings', ros.hashValidator(ros.validateAny))(properties.settings));
    return errors.wrap('supplied properties not correct for "RosJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Job` resource
 *
 * @param properties - the TypeScript properties of a `RosJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Job` resource.
 */
// @ts-ignore TS6133
function rosJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosJobPropsValidator(properties).assertSuccess();
    }
    return {
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      JobSpecs: ros.listMapper(rosJobJobSpecsPropertyToRosTemplate)(properties.jobSpecs),
      JobType: ros.stringToRosTemplate(properties.jobType),
      UserCommand: ros.stringToRosTemplate(properties.userCommand),
      WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
      CodeSource: rosJobCodeSourcePropertyToRosTemplate(properties.codeSource),
      DataSources: ros.listMapper(rosJobDataSourcesPropertyToRosTemplate)(properties.dataSources),
      Envs: ros.stringToRosTemplate(properties.envs),
      JobMaxRunningTimeMinutes: ros.numberToRosTemplate(properties.jobMaxRunningTimeMinutes),
      Options: ros.stringToRosTemplate(properties.options),
      Priority: ros.numberToRosTemplate(properties.priority),
      ResourceId: ros.stringToRosTemplate(properties.resourceId),
      Settings: ros.hashMapper(ros.objectToRosTemplate)(properties.settings),
      SuccessPolicy: ros.stringToRosTemplate(properties.successPolicy),
      ThirdpartyLibDir: ros.stringToRosTemplate(properties.thirdpartyLibDir),
      ThirdpartyLibs: ros.listMapper(ros.stringToRosTemplate)(properties.thirdpartyLibs),
      UserVpc: rosJobUserVpcPropertyToRosTemplate(properties.userVpc),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIDLC::Job`, which is used to create a Machine Learning Platform for AI (PAI) job to run in a cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Job` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-job
 */
export class RosJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIDLC::Job";

    /**
     * @Attribute JobId: The task ID created this time.
     */
    public readonly attrJobId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property displayName: The name of the task is as follows:
     * The name length does not exceed 256 characters.
     * Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.
     * The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
     */
    public jobSpecs: Array<RosJob.JobSpecsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property jobType: The type of job. Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
     */
    public jobType: string | ros.IResolvable;

    /**
     * @Property userCommand: Start commands of all nodes in the task.
     */
    public userCommand: string | ros.IResolvable;

    /**
     * @Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.
     */
    public codeSource: RosJob.CodeSourceProperty | ros.IResolvable | undefined;

    /**
     * @Property dataSources: List of data source used for task operation.
     */
    public dataSources: Array<RosJob.DataSourcesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property envs: Environment variable configuration.
     */
    public envs: string | ros.IResolvable | undefined;

    /**
     * @Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.
     */
    public jobMaxRunningTimeMinutes: number | ros.IResolvable | undefined;

    /**
     * @Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.
     */
    public options: string | ros.IResolvable | undefined;

    /**
     * @Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in:
     * 1 is the minimum priority.
     * 9 is the highest priority.
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * @Property resourceId: Resource group ID, optional parameter.
     * The parameter value is empty indicating that submitted to the public resource group.
     * If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
     */
    public resourceId: string | ros.IResolvable | undefined;

    /**
     * @Property settings: Job settings.
     */
    public settings: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.
     * ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
     * All workers: All workers must be successful to think that the entire task is successful.
     */
    public successPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.
     */
    public thirdpartyLibDir: string | ros.IResolvable | undefined;

    /**
     * @Property thirdpartyLibs: Python third-party library list to be installed.
     */
    public thirdpartyLibs: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property userVpc: User VPC configuration.
     */
    public userVpc: RosJob.UserVpcProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrJobId = this.getAtt('JobId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.displayName = props.displayName;
        this.jobSpecs = props.jobSpecs;
        this.jobType = props.jobType;
        this.userCommand = props.userCommand;
        this.workspaceId = props.workspaceId;
        this.codeSource = props.codeSource;
        this.dataSources = props.dataSources;
        this.envs = props.envs;
        this.jobMaxRunningTimeMinutes = props.jobMaxRunningTimeMinutes;
        this.options = props.options;
        this.priority = props.priority;
        this.resourceId = props.resourceId;
        this.settings = props.settings;
        this.successPolicy = props.successPolicy;
        this.thirdpartyLibDir = props.thirdpartyLibDir;
        this.thirdpartyLibs = props.thirdpartyLibs;
        this.userVpc = props.userVpc;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            displayName: this.displayName,
            jobSpecs: this.jobSpecs,
            jobType: this.jobType,
            userCommand: this.userCommand,
            workspaceId: this.workspaceId,
            codeSource: this.codeSource,
            dataSources: this.dataSources,
            envs: this.envs,
            jobMaxRunningTimeMinutes: this.jobMaxRunningTimeMinutes,
            options: this.options,
            priority: this.priority,
            resourceId: this.resourceId,
            settings: this.settings,
            successPolicy: this.successPolicy,
            thirdpartyLibDir: this.thirdpartyLibDir,
            thirdpartyLibs: this.thirdpartyLibs,
            userVpc: this.userVpc,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosJob {
    /**
     * @stability external
     */
    export interface CodeSourceProperty {
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
/**
 * Determine whether the given properties match those of a `CodeSourceProperty`
 *
 * @param properties - the TypeScript properties of a `CodeSourceProperty`
 *
 * @returns the result of the validation.
 */
function RosJob_CodeSourcePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPath', ros.validateString)(properties.mountPath));
    errors.collect(ros.propertyValidator('commit', ros.validateString)(properties.commit));
    errors.collect(ros.propertyValidator('branch', ros.validateString)(properties.branch));
    errors.collect(ros.propertyValidator('codeSourceId', ros.requiredValidator)(properties.codeSourceId));
    errors.collect(ros.propertyValidator('codeSourceId', ros.validateString)(properties.codeSourceId));
    return errors.wrap('supplied properties not correct for "CodeSourceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Job.CodeSource` resource
 *
 * @param properties - the TypeScript properties of a `CodeSourceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Job.CodeSource` resource.
 */
// @ts-ignore TS6133
function rosJobCodeSourcePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosJob_CodeSourcePropertyValidator(properties).assertSuccess();
    return {
      MountPath: ros.stringToRosTemplate(properties.mountPath),
      Commit: ros.stringToRosTemplate(properties.commit),
      Branch: ros.stringToRosTemplate(properties.branch),
      CodeSourceId: ros.stringToRosTemplate(properties.codeSourceId),
    };
}

export namespace RosJob {
    /**
     * @stability external
     */
    export interface DataSourcesProperty {
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
/**
 * Determine whether the given properties match those of a `DataSourcesProperty`
 *
 * @param properties - the TypeScript properties of a `DataSourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosJob_DataSourcesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPath', ros.validateString)(properties.mountPath));
    errors.collect(ros.propertyValidator('dataSourceId', ros.requiredValidator)(properties.dataSourceId));
    errors.collect(ros.propertyValidator('dataSourceId', ros.validateString)(properties.dataSourceId));
    return errors.wrap('supplied properties not correct for "DataSourcesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Job.DataSources` resource
 *
 * @param properties - the TypeScript properties of a `DataSourcesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Job.DataSources` resource.
 */
// @ts-ignore TS6133
function rosJobDataSourcesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosJob_DataSourcesPropertyValidator(properties).assertSuccess();
    return {
      MountPath: ros.stringToRosTemplate(properties.mountPath),
      DataSourceId: ros.stringToRosTemplate(properties.dataSourceId),
    };
}

export namespace RosJob {
    /**
     * @stability external
     */
    export interface JobSpecsProperty {
        /**
         * @Property podCount: The count of pod.
         */
        readonly podCount: number | ros.IResolvable;
        /**
         * @Property imageConfig: The configuration of image
         */
        readonly imageConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
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
        readonly resourceConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property image: The running image address of this type of Worker.
     * You can call ListImages to obtain the community and PAI-optimized images provided by the PAI platform. It is also possible to specify an image publicized by a third party.
         */
        readonly image: string | ros.IResolvable;
        /**
         * @Property extraPodSpec: Extra pod configuration.
         */
        readonly extraPodSpec?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `JobSpecsProperty`
 *
 * @param properties - the TypeScript properties of a `JobSpecsProperty`
 *
 * @returns the result of the validation.
 */
function RosJob_JobSpecsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('podCount', ros.requiredValidator)(properties.podCount));
    errors.collect(ros.propertyValidator('podCount', ros.validateNumber)(properties.podCount));
    errors.collect(ros.propertyValidator('imageConfig', ros.hashValidator(ros.validateAny))(properties.imageConfig));
    errors.collect(ros.propertyValidator('useSpotInstance', ros.requiredValidator)(properties.useSpotInstance));
    errors.collect(ros.propertyValidator('useSpotInstance', ros.validateBoolean)(properties.useSpotInstance));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('ecsSpec', ros.requiredValidator)(properties.ecsSpec));
    errors.collect(ros.propertyValidator('ecsSpec', ros.validateString)(properties.ecsSpec));
    errors.collect(ros.propertyValidator('resourceConfig', ros.hashValidator(ros.validateAny))(properties.resourceConfig));
    errors.collect(ros.propertyValidator('image', ros.requiredValidator)(properties.image));
    errors.collect(ros.propertyValidator('image', ros.validateString)(properties.image));
    errors.collect(ros.propertyValidator('extraPodSpec', ros.hashValidator(ros.validateAny))(properties.extraPodSpec));
    return errors.wrap('supplied properties not correct for "JobSpecsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Job.JobSpecs` resource
 *
 * @param properties - the TypeScript properties of a `JobSpecsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Job.JobSpecs` resource.
 */
// @ts-ignore TS6133
function rosJobJobSpecsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosJob_JobSpecsPropertyValidator(properties).assertSuccess();
    return {
      PodCount: ros.numberToRosTemplate(properties.podCount),
      ImageConfig: ros.hashMapper(ros.objectToRosTemplate)(properties.imageConfig),
      UseSpotInstance: ros.booleanToRosTemplate(properties.useSpotInstance),
      Type: ros.stringToRosTemplate(properties.type),
      EcsSpec: ros.stringToRosTemplate(properties.ecsSpec),
      ResourceConfig: ros.hashMapper(ros.objectToRosTemplate)(properties.resourceConfig),
      Image: ros.stringToRosTemplate(properties.image),
      ExtraPodSpec: ros.hashMapper(ros.objectToRosTemplate)(properties.extraPodSpec),
    };
}

export namespace RosJob {
    /**
     * @stability external
     */
    export interface UserVpcProperty {
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
 * Determine whether the given properties match those of a `UserVpcProperty`
 *
 * @param properties - the TypeScript properties of a `UserVpcProperty`
 *
 * @returns the result of the validation.
 */
function RosJob_UserVpcPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('switchId', ros.validateString)(properties.switchId));
    errors.collect(ros.propertyValidator('extendedCidRs', ros.listValidator(ros.validateString))(properties.extendedCidRs));
    return errors.wrap('supplied properties not correct for "UserVpcProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Job.UserVpc` resource
 *
 * @param properties - the TypeScript properties of a `UserVpcProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Job.UserVpc` resource.
 */
// @ts-ignore TS6133
function rosJobUserVpcPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosJob_UserVpcPropertyValidator(properties).assertSuccess();
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SwitchId: ros.stringToRosTemplate(properties.switchId),
      ExtendedCIDRs: ros.listMapper(ros.stringToRosTemplate)(properties.extendedCidRs),
    };
}

/**
 * Properties for defining a `RosTensorboard`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-tensorboard
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
     * When DataSourceType is OSS, the format is: OSS: \/\/ [OSS-BUCET]. [Endpoint]\/[Path].
     * When the DataSourceType is NAS, the format is: nas:\/\/ [nas-filesystem-id]. [Region]\/[PATH].
     */
    readonly uri?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTensorboardProps`
 *
 * @param properties - the TypeScript properties of a `RosTensorboardProps`
 *
 * @returns the result of the validation.
 */
function RosTensorboardPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('maxRunningTimeMinutes', ros.validateNumber)(properties.maxRunningTimeMinutes));
    errors.collect(ros.propertyValidator('options', ros.validateString)(properties.options));
    errors.collect(ros.propertyValidator('memory', ros.validateNumber)(properties.memory));
    errors.collect(ros.propertyValidator('summaryPath', ros.validateString)(properties.summaryPath));
    errors.collect(ros.propertyValidator('sourceId', ros.validateString)(properties.sourceId));
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('uri', ros.validateString)(properties.uri));
    errors.collect(ros.propertyValidator('dataSources', ros.listValidator(ros.validateAny))(properties.dataSources));
    errors.collect(ros.propertyValidator('summaryRelativePath', ros.validateString)(properties.summaryRelativePath));
    if(properties.dataSourceType && (typeof properties.dataSourceType) !== 'object') {
        errors.collect(ros.propertyValidator('dataSourceType', ros.validateAllowedValues)({
          data: properties.dataSourceType,
          allowedValues: ["OSS","NAS"],
        }));
    }
    errors.collect(ros.propertyValidator('dataSourceType', ros.validateString)(properties.dataSourceType));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('jobId', ros.validateString)(properties.jobId));
    errors.collect(ros.propertyValidator('dataSourceId', ros.requiredValidator)(properties.dataSourceId));
    errors.collect(ros.propertyValidator('dataSourceId', ros.validateString)(properties.dataSourceId));
    return errors.wrap('supplied properties not correct for "RosTensorboardProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Tensorboard` resource
 *
 * @param properties - the TypeScript properties of a `RosTensorboardProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIDLC::Tensorboard` resource.
 */
// @ts-ignore TS6133
function rosTensorboardPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTensorboardPropsValidator(properties).assertSuccess();
    }
    return {
      DataSourceId: ros.stringToRosTemplate(properties.dataSourceId),
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
      Cpu: ros.numberToRosTemplate(properties.cpu),
      DataSources: ros.listMapper(ros.objectToRosTemplate)(properties.dataSources),
      DataSourceType: ros.stringToRosTemplate(properties.dataSourceType),
      JobId: ros.stringToRosTemplate(properties.jobId),
      MaxRunningTimeMinutes: ros.numberToRosTemplate(properties.maxRunningTimeMinutes),
      Memory: ros.numberToRosTemplate(properties.memory),
      Options: ros.stringToRosTemplate(properties.options),
      SourceId: ros.stringToRosTemplate(properties.sourceId),
      SourceType: ros.stringToRosTemplate(properties.sourceType),
      SummaryPath: ros.stringToRosTemplate(properties.summaryPath),
      SummaryRelativePath: ros.stringToRosTemplate(properties.summaryRelativePath),
      Uri: ros.stringToRosTemplate(properties.uri),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIDLC::Tensorboard`, which is used to create a TensorBoard instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Tensorboard` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-tensorboard
 */
export class RosTensorboard extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIDLC::Tensorboard";

    /**
     * @Attribute TensorboardId: Tensorboard id.
     */
    public readonly attrTensorboardId: ros.IResolvable;

    /**
     * @Attribute TensorboardUrl: Tensorboard url.
     */
    public readonly attrTensorboardUrl: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
     */
    public dataSourceId: string | ros.IResolvable;

    /**
     * @Property displayName: Tensorboard name.
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property cpu: CPU nuclear number.
     */
    public cpu: number | ros.IResolvable | undefined;

    /**
     * @Property dataSources: Data source configuration.
     */
    public dataSources: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property dataSourceType: The type of dataset. Values: OSS,NAS
     */
    public dataSourceType: string | ros.IResolvable | undefined;

    /**
     * @Property jobId: Task ID.How to get the task ID, see Listjobs.
     */
    public jobId: string | ros.IResolvable | undefined;

    /**
     * @Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.
     */
    public maxRunningTimeMinutes: number | ros.IResolvable | undefined;

    /**
     * @Property memory: Memory size, the unit is: GB.
     */
    public memory: number | ros.IResolvable | undefined;

    /**
     * @Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
     */
    public options: string | ros.IResolvable | undefined;

    /**
     * @Property sourceId: Source ID.
     */
    public sourceId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceType: Source type.
     */
    public sourceType: string | ros.IResolvable | undefined;

    /**
     * @Property summaryPath: Summary directory.
     */
    public summaryPath: string | ros.IResolvable | undefined;

    /**
     * @Property summaryRelativePath: Summary relative directory. Summary relative directory and Summary directory are mutually exclusive
     */
    public summaryRelativePath: string | ros.IResolvable | undefined;

    /**
     * @Property uri: URI of a dataset:
     * When DataSourceType is OSS, the format is: OSS: \/\/ [OSS-BUCET]. [Endpoint]\/[Path].
     * When the DataSourceType is NAS, the format is: nas:\/\/ [nas-filesystem-id]. [Region]\/[PATH].
     */
    public uri: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTensorboardProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTensorboard.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTensorboardId = this.getAtt('TensorboardId');
        this.attrTensorboardUrl = this.getAtt('TensorboardUrl');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dataSourceId = props.dataSourceId;
        this.displayName = props.displayName;
        this.workspaceId = props.workspaceId;
        this.cpu = props.cpu;
        this.dataSources = props.dataSources;
        this.dataSourceType = props.dataSourceType;
        this.jobId = props.jobId;
        this.maxRunningTimeMinutes = props.maxRunningTimeMinutes;
        this.memory = props.memory;
        this.options = props.options;
        this.sourceId = props.sourceId;
        this.sourceType = props.sourceType;
        this.summaryPath = props.summaryPath;
        this.summaryRelativePath = props.summaryRelativePath;
        this.uri = props.uri;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dataSourceId: this.dataSourceId,
            displayName: this.displayName,
            workspaceId: this.workspaceId,
            cpu: this.cpu,
            dataSources: this.dataSources,
            dataSourceType: this.dataSourceType,
            jobId: this.jobId,
            maxRunningTimeMinutes: this.maxRunningTimeMinutes,
            memory: this.memory,
            options: this.options,
            sourceId: this.sourceId,
            sourceType: this.sourceType,
            summaryPath: this.summaryPath,
            summaryRelativePath: this.summaryRelativePath,
            uri: this.uri,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTensorboardPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
