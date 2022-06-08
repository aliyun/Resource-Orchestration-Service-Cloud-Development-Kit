using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROS::StackInstances`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.StackInstancesProps")]
    public class StackInstancesProps : AlibabaCloud.SDK.ROS.CDK.Ros.IStackInstancesProps
    {
        /// <summary>Property regionIds: undefined.</summary>
        [JsiiProperty(name: "regionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object RegionIds
        {
            get;
            set;
        }

        /// <summary>Property stackGroupName: undefined.</summary>
        [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object StackGroupName
        {
            get;
            set;
        }

        /// <summary>Property accountIds: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "accountIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? AccountIds
        {
            get;
            set;
        }

        /// <summary>Property deploymentTargets: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "deploymentTargets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.DeploymentTargetsProperty\"}]}}", isOptional: true)]
        public object? DeploymentTargets
        {
            get;
            set;
        }

        /// <summary>Property disableRollback: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DisableRollback
        {
            get;
            set;
        }

        /// <summary>Property operationDescription: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "operationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OperationDescription
        {
            get;
            set;
        }

        /// <summary>Property operationPreferences: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "operationPreferences", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackInstances.OperationPreferencesProperty\"}]}}", isOptional: true)]
        public object? OperationPreferences
        {
            get;
            set;
        }

        /// <summary>Property parameterOverrides: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "parameterOverrides", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? ParameterOverrides
        {
            get;
            set;
        }

        /// <summary>Property retainStacks: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "retainStacks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RetainStacks
        {
            get;
            set;
        }

        /// <summary>Property timeoutInMinutes: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "timeoutInMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TimeoutInMinutes
        {
            get;
            set;
        }
    }
}
