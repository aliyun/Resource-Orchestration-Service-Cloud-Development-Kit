using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROS::StackInstances`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.RosStackInstancesProps")]
    public class RosStackInstancesProps : AlibabaCloud.SDK.ROS.CDK.Ros.IRosStackInstancesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: regionIds: undefined
        /// </remarks>
        [JsiiProperty(name: "regionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object RegionIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: stackGroupName: undefined
        /// </remarks>
        [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object StackGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountIds: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? AccountIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deploymentTargets: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deploymentTargets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.DeploymentTargetsProperty\"}]}}", isOptional: true)]
        public object? DeploymentTargets
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: disableRollback: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DisableRollback
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: operationDescription: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "operationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OperationDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: operationPreferences: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "operationPreferences", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.OperationPreferencesProperty\"}]}}", isOptional: true)]
        public object? OperationPreferences
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: parameterOverrides: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parameterOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? ParameterOverrides
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: retainStacks: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "retainStacks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RetainStacks
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeoutInMinutes: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeoutInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TimeoutInMinutes
        {
            get;
            set;
        }
    }
}
