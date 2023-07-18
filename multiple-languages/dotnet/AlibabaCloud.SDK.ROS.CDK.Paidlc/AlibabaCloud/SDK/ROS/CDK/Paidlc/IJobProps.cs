using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paidlc
{
    /// <summary>Properties for defining a `ALIYUN::PAIDLC::Job`.</summary>
    [JsiiInterface(nativeType: typeof(IJobProps), fullyQualifiedName: "@alicloud/ros-cdk-paidlc.JobProps")]
    public interface IJobProps
    {
        /// <summary>Property displayName: The name of the task is as follows: The name length does not exceed 256 characters.</summary>
        /// <remarks>
        /// Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <summary>Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.</summary>
        /// <remarks>
        /// The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
        /// </remarks>
        [JsiiProperty(name: "jobSpecs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidlc.RosJob.JobSpecsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object JobSpecs
        {
            get;
        }

        /// <summary>Property jobType: The type of job.</summary>
        /// <remarks>
        /// Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
        /// </remarks>
        [JsiiProperty(name: "jobType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object JobType
        {
            get;
        }

        /// <summary>Property userCommand: Start commands of all nodes in the task.</summary>
        [JsiiProperty(name: "userCommand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserCommand
        {
            get;
        }

        /// <summary>Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <summary>Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.</summary>
        [JsiiProperty(name: "codeSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidlc.RosJob.CodeSourceProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CodeSource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataSources: List of data source used for task operation.</summary>
        [JsiiProperty(name: "dataSources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidlc.RosJob.DataSourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSources
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property envs: Environment variable configuration.</summary>
        [JsiiProperty(name: "envs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Envs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.</summary>
        [JsiiProperty(name: "jobMaxRunningTimeMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JobMaxRunningTimeMinutes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.</summary>
        [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Options
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in: 1 is the minimum priority. 9 is the highest priority.</summary>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceId: Resource group ID, optional parameter.</summary>
        /// <remarks>
        /// The parameter value is empty indicating that submitted to the public resource group.
        /// If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
        /// </remarks>
        [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property settings: Job settings.</summary>
        [JsiiProperty(name: "settings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Settings
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.</summary>
        /// <remarks>
        /// ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
        /// All workers: All workers must be successful to think that the entire task is successful.
        /// </remarks>
        [JsiiProperty(name: "successPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SuccessPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.</summary>
        [JsiiProperty(name: "thirdpartyLibDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ThirdpartyLibDir
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property thirdpartyLibs: Python third-party library list to be installed.</summary>
        [JsiiProperty(name: "thirdpartyLibs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ThirdpartyLibs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userVpc: User VPC configuration.</summary>
        [JsiiProperty(name: "userVpc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidlc.RosJob.UserVpcProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserVpc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::PAIDLC::Job`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IJobProps), fullyQualifiedName: "@alicloud/ros-cdk-paidlc.JobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paidlc.IJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property displayName: The name of the task is as follows: The name length does not exceed 256 characters.</summary>
            /// <remarks>
            /// Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.</summary>
            /// <remarks>
            /// The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
            /// </remarks>
            [JsiiProperty(name: "jobSpecs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidlc.RosJob.JobSpecsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object JobSpecs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property jobType: The type of job.</summary>
            /// <remarks>
            /// Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
            /// </remarks>
            [JsiiProperty(name: "jobType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object JobType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userCommand: Start commands of all nodes in the task.</summary>
            [JsiiProperty(name: "userCommand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserCommand
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.</summary>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "codeSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidlc.RosJob.CodeSourceProperty\"}]}}", isOptional: true)]
            public object? CodeSource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataSources: List of data source used for task operation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataSources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidlc.RosJob.DataSourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DataSources
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property envs: Environment variable configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "envs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Envs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "jobMaxRunningTimeMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JobMaxRunningTimeMinutes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in: 1 is the minimum priority. 9 is the highest priority.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceId: Resource group ID, optional parameter.</summary>
            /// <remarks>
            /// The parameter value is empty indicating that submitted to the public resource group.
            /// If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property settings: Job settings.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "settings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Settings
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.</summary>
            /// <remarks>
            /// ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
            /// All workers: All workers must be successful to think that the entire task is successful.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "successPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SuccessPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "thirdpartyLibDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ThirdpartyLibDir
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property thirdpartyLibs: Python third-party library list to be installed.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "thirdpartyLibs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ThirdpartyLibs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userVpc: User VPC configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userVpc", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-paidlc.RosJob.UserVpcProperty\"}]}}", isOptional: true)]
            public object? UserVpc
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
