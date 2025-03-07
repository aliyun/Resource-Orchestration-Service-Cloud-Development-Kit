using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts.Datasource
{
    /// <summary>Represents a `JobMonitorRules`.</summary>
    [JsiiInterface(nativeType: typeof(IJobMonitorRules), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.IJobMonitorRules")]
    public interface IJobMonitorRules : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DtsJobIds: The list of dts job IDs.</summary>
        [JsiiProperty(name: "attrDtsJobIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDtsJobIds
        {
            get;
        }

        /// <summary>Attribute JobMonitorRules: The list of job monitor rules.</summary>
        [JsiiProperty(name: "attrJobMonitorRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJobMonitorRules
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.JobMonitorRulesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRulesProps Props
        {
            get;
        }

        /// <summary>Represents a `JobMonitorRules`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IJobMonitorRules), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.IJobMonitorRules")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRules
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DtsJobIds: The list of dts job IDs.</summary>
            [JsiiProperty(name: "attrDtsJobIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDtsJobIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute JobMonitorRules: The list of job monitor rules.</summary>
            [JsiiProperty(name: "attrJobMonitorRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJobMonitorRules
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.JobMonitorRulesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRulesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRulesProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
