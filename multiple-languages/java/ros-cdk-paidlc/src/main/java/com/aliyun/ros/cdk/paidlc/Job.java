package com.aliyun.ros.cdk.paidlc;

/**
 * A ROS resource type:  <code>ALIYUN::PAIDLC::Job</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.705Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidlc.$Module.class, fqn = "@alicloud/ros-cdk-paidlc.Job")
public class Job extends com.aliyun.ros.cdk.core.Resource {

    protected Job(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Job(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::PAIDLC::Job</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Job(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paidlc.JobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::PAIDLC::Job</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Job(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paidlc.JobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute JobId: The task ID created this time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.paidlc.Job}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.paidlc.Job> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.paidlc.JobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.paidlc.JobProps.Builder();
        }

        /**
         * Property displayName: The name of the task is as follows: The name length does not exceed 256 characters.
         * <p>
         * Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: The name of the task is as follows: The name length does not exceed 256 characters. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: The name of the task is as follows: The name length does not exceed 256 characters.
         * <p>
         * Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: The name of the task is as follows: The name length does not exceed 256 characters. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.
         * <p>
         * The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
         * <p>
         * @return {@code this}
         * @param jobSpecs Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc. This parameter is required.
         */
        public Builder jobSpecs(final com.aliyun.ros.cdk.core.IResolvable jobSpecs) {
            this.props.jobSpecs(jobSpecs);
            return this;
        }
        /**
         * Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.
         * <p>
         * The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
         * <p>
         * @return {@code this}
         * @param jobSpecs Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc. This parameter is required.
         */
        public Builder jobSpecs(final java.util.List<? extends java.lang.Object> jobSpecs) {
            this.props.jobSpecs(jobSpecs);
            return this;
        }

        /**
         * Property jobType: The type of job.
         * <p>
         * Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
         * <p>
         * @return {@code this}
         * @param jobType Property jobType: The type of job. This parameter is required.
         */
        public Builder jobType(final java.lang.String jobType) {
            this.props.jobType(jobType);
            return this;
        }
        /**
         * Property jobType: The type of job.
         * <p>
         * Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
         * <p>
         * @return {@code this}
         * @param jobType Property jobType: The type of job. This parameter is required.
         */
        public Builder jobType(final com.aliyun.ros.cdk.core.IResolvable jobType) {
            this.props.jobType(jobType);
            return this;
        }

        /**
         * Property userCommand: Start commands of all nodes in the task.
         * <p>
         * @return {@code this}
         * @param userCommand Property userCommand: Start commands of all nodes in the task. This parameter is required.
         */
        public Builder userCommand(final java.lang.String userCommand) {
            this.props.userCommand(userCommand);
            return this;
        }
        /**
         * Property userCommand: Start commands of all nodes in the task.
         * <p>
         * @return {@code this}
         * @param userCommand Property userCommand: Start commands of all nodes in the task. This parameter is required.
         */
        public Builder userCommand(final com.aliyun.ros.cdk.core.IResolvable userCommand) {
            this.props.userCommand(userCommand);
            return this;
        }

        /**
         * Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.
         * <p>
         * @return {@code this}
         * @param codeSource Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container. This parameter is required.
         */
        public Builder codeSource(final com.aliyun.ros.cdk.core.IResolvable codeSource) {
            this.props.codeSource(codeSource);
            return this;
        }
        /**
         * Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.
         * <p>
         * @return {@code this}
         * @param codeSource Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container. This parameter is required.
         */
        public Builder codeSource(final com.aliyun.ros.cdk.paidlc.RosJob.CodeSourceProperty codeSource) {
            this.props.codeSource(codeSource);
            return this;
        }

        /**
         * Property dataSources: List of data source used for task operation.
         * <p>
         * @return {@code this}
         * @param dataSources Property dataSources: List of data source used for task operation. This parameter is required.
         */
        public Builder dataSources(final com.aliyun.ros.cdk.core.IResolvable dataSources) {
            this.props.dataSources(dataSources);
            return this;
        }
        /**
         * Property dataSources: List of data source used for task operation.
         * <p>
         * @return {@code this}
         * @param dataSources Property dataSources: List of data source used for task operation. This parameter is required.
         */
        public Builder dataSources(final java.util.List<? extends java.lang.Object> dataSources) {
            this.props.dataSources(dataSources);
            return this;
        }

        /**
         * Property envs: Environment variable configuration.
         * <p>
         * @return {@code this}
         * @param envs Property envs: Environment variable configuration. This parameter is required.
         */
        public Builder envs(final java.lang.String envs) {
            this.props.envs(envs);
            return this;
        }
        /**
         * Property envs: Environment variable configuration.
         * <p>
         * @return {@code this}
         * @param envs Property envs: Environment variable configuration. This parameter is required.
         */
        public Builder envs(final com.aliyun.ros.cdk.core.IResolvable envs) {
            this.props.envs(envs);
            return this;
        }

        /**
         * Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.
         * <p>
         * @return {@code this}
         * @param jobMaxRunningTimeMinutes Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes. This parameter is required.
         */
        public Builder jobMaxRunningTimeMinutes(final java.lang.Number jobMaxRunningTimeMinutes) {
            this.props.jobMaxRunningTimeMinutes(jobMaxRunningTimeMinutes);
            return this;
        }
        /**
         * Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.
         * <p>
         * @return {@code this}
         * @param jobMaxRunningTimeMinutes Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes. This parameter is required.
         */
        public Builder jobMaxRunningTimeMinutes(final com.aliyun.ros.cdk.core.IResolvable jobMaxRunningTimeMinutes) {
            this.props.jobMaxRunningTimeMinutes(jobMaxRunningTimeMinutes);
            return this;
        }

        /**
         * Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.
         * <p>
         * @return {@code this}
         * @param options Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16. This parameter is required.
         */
        public Builder options(final java.lang.String options) {
            this.props.options(options);
            return this;
        }
        /**
         * Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.
         * <p>
         * @return {@code this}
         * @param options Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16. This parameter is required.
         */
        public Builder options(final com.aliyun.ros.cdk.core.IResolvable options) {
            this.props.options(options);
            return this;
        }

        /**
         * Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in: 1 is the minimum priority. 9 is the highest priority.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in: 1 is the minimum priority. 9 is the highest priority. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in: 1 is the minimum priority. 9 is the highest priority.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in: 1 is the minimum priority. 9 is the highest priority. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property resourceId: Resource group ID, optional parameter.
         * <p>
         * The parameter value is empty indicating that submitted to the public resource group.
         * If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: Resource group ID, optional parameter. This parameter is required.
         */
        public Builder resourceId(final java.lang.String resourceId) {
            this.props.resourceId(resourceId);
            return this;
        }
        /**
         * Property resourceId: Resource group ID, optional parameter.
         * <p>
         * The parameter value is empty indicating that submitted to the public resource group.
         * If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: Resource group ID, optional parameter. This parameter is required.
         */
        public Builder resourceId(final com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.props.resourceId(resourceId);
            return this;
        }

        /**
         * Property settings: Job settings.
         * <p>
         * @return {@code this}
         * @param settings Property settings: Job settings. This parameter is required.
         */
        public Builder settings(final com.aliyun.ros.cdk.core.IResolvable settings) {
            this.props.settings(settings);
            return this;
        }
        /**
         * Property settings: Job settings.
         * <p>
         * @return {@code this}
         * @param settings Property settings: Job settings. This parameter is required.
         */
        public Builder settings(final java.util.Map<java.lang.String, ? extends java.lang.Object> settings) {
            this.props.settings(settings);
            return this;
        }

        /**
         * Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.
         * <p>
         * ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
         * All workers: All workers must be successful to think that the entire task is successful.
         * <p>
         * @return {@code this}
         * @param successPolicy Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task. This parameter is required.
         */
        public Builder successPolicy(final java.lang.String successPolicy) {
            this.props.successPolicy(successPolicy);
            return this;
        }
        /**
         * Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.
         * <p>
         * ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
         * All workers: All workers must be successful to think that the entire task is successful.
         * <p>
         * @return {@code this}
         * @param successPolicy Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task. This parameter is required.
         */
        public Builder successPolicy(final com.aliyun.ros.cdk.core.IResolvable successPolicy) {
            this.props.successPolicy(successPolicy);
            return this;
        }

        /**
         * Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.
         * <p>
         * @return {@code this}
         * @param thirdpartyLibDir Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation. This parameter is required.
         */
        public Builder thirdpartyLibDir(final java.lang.String thirdpartyLibDir) {
            this.props.thirdpartyLibDir(thirdpartyLibDir);
            return this;
        }
        /**
         * Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.
         * <p>
         * @return {@code this}
         * @param thirdpartyLibDir Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation. This parameter is required.
         */
        public Builder thirdpartyLibDir(final com.aliyun.ros.cdk.core.IResolvable thirdpartyLibDir) {
            this.props.thirdpartyLibDir(thirdpartyLibDir);
            return this;
        }

        /**
         * Property thirdpartyLibs: Python third-party library list to be installed.
         * <p>
         * @return {@code this}
         * @param thirdpartyLibs Property thirdpartyLibs: Python third-party library list to be installed. This parameter is required.
         */
        public Builder thirdpartyLibs(final com.aliyun.ros.cdk.core.IResolvable thirdpartyLibs) {
            this.props.thirdpartyLibs(thirdpartyLibs);
            return this;
        }
        /**
         * Property thirdpartyLibs: Python third-party library list to be installed.
         * <p>
         * @return {@code this}
         * @param thirdpartyLibs Property thirdpartyLibs: Python third-party library list to be installed. This parameter is required.
         */
        public Builder thirdpartyLibs(final java.util.List<? extends java.lang.Object> thirdpartyLibs) {
            this.props.thirdpartyLibs(thirdpartyLibs);
            return this;
        }

        /**
         * Property userVpc: User VPC configuration.
         * <p>
         * @return {@code this}
         * @param userVpc Property userVpc: User VPC configuration. This parameter is required.
         */
        public Builder userVpc(final com.aliyun.ros.cdk.core.IResolvable userVpc) {
            this.props.userVpc(userVpc);
            return this;
        }
        /**
         * Property userVpc: User VPC configuration.
         * <p>
         * @return {@code this}
         * @param userVpc Property userVpc: User VPC configuration. This parameter is required.
         */
        public Builder userVpc(final com.aliyun.ros.cdk.paidlc.RosJob.UserVpcProperty userVpc) {
            this.props.userVpc(userVpc);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.paidlc.Job}.
         */
        @Override
        public com.aliyun.ros.cdk.paidlc.Job build() {
            return new com.aliyun.ros.cdk.paidlc.Job(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
