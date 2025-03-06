using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms.Datasource
{
    /// <summary>Represents a `SyntheticTask`.</summary>
    [JsiiInterface(nativeType: typeof(ISyntheticTask), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.ISyntheticTask")]
    public interface ISyntheticTask : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AvailableAssertions: The list of assertions.</summary>
        [JsiiProperty(name: "attrAvailableAssertions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAvailableAssertions
        {
            get;
        }

        /// <summary>Attribute CommonSetting: The general settings.</summary>
        [JsiiProperty(name: "attrCommonSetting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommonSetting
        {
            get;
        }

        /// <summary>Attribute CustomPeriod: The custom cycle.</summary>
        [JsiiProperty(name: "attrCustomPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCustomPeriod
        {
            get;
        }

        /// <summary>Attribute Frequency: The detection frequency.</summary>
        [JsiiProperty(name: "attrFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFrequency
        {
            get;
        }

        /// <summary>Attribute MonitorCategory: The detection point type.</summary>
        /// <remarks>
        /// 1: PC. 2: mobile device.
        /// </remarks>
        [JsiiProperty(name: "attrMonitorCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMonitorCategory
        {
            get;
        }

        /// <summary>Attribute MonitorConf: The monitoring configurations.</summary>
        [JsiiProperty(name: "attrMonitorConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMonitorConf
        {
            get;
        }

        /// <summary>Attribute Monitors: The list of monitoring points.</summary>
        [JsiiProperty(name: "attrMonitors", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMonitors
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SyntheticTaskName: The name of synthetic task.</summary>
        [JsiiProperty(name: "attrSyntheticTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSyntheticTaskName
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the instance.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute TaskId: The ID of the synthetic monitoring task.</summary>
        [JsiiProperty(name: "attrTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskId
        {
            get;
        }

        /// <summary>Attribute TaskType: The type of the task.</summary>
        [JsiiProperty(name: "attrTaskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.SyntheticTaskProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.ISyntheticTaskProps Props
        {
            get;
        }

        /// <summary>Represents a `SyntheticTask`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISyntheticTask), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.ISyntheticTask")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.ISyntheticTask
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AvailableAssertions: The list of assertions.</summary>
            [JsiiProperty(name: "attrAvailableAssertions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAvailableAssertions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommonSetting: The general settings.</summary>
            [JsiiProperty(name: "attrCommonSetting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommonSetting
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CustomPeriod: The custom cycle.</summary>
            [JsiiProperty(name: "attrCustomPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCustomPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Frequency: The detection frequency.</summary>
            [JsiiProperty(name: "attrFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFrequency
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MonitorCategory: The detection point type.</summary>
            /// <remarks>
            /// 1: PC. 2: mobile device.
            /// </remarks>
            [JsiiProperty(name: "attrMonitorCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMonitorCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MonitorConf: The monitoring configurations.</summary>
            [JsiiProperty(name: "attrMonitorConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMonitorConf
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Monitors: The list of monitoring points.</summary>
            [JsiiProperty(name: "attrMonitors", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMonitors
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SyntheticTaskName: The name of synthetic task.</summary>
            [JsiiProperty(name: "attrSyntheticTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSyntheticTaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the instance.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskId: The ID of the synthetic monitoring task.</summary>
            [JsiiProperty(name: "attrTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskType: The type of the task.</summary>
            [JsiiProperty(name: "attrTaskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.SyntheticTaskProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.ISyntheticTaskProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.ISyntheticTaskProps>()!;
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
