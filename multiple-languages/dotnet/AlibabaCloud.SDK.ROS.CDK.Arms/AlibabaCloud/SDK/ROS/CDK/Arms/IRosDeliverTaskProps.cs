using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `RosDeliverTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDeliverTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosDeliverTaskProps")]
    public interface IRosDeliverTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: targetList: The list of the target.
        /// </remarks>
        [JsiiProperty(name: "targetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-arms.RosDeliverTask.TargetListProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object TargetList
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: taskName: The name of the task.
        /// </remarks>
        [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSourceId: The ID of the data source.
        /// </remarks>
        [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSourceName: The name of the data source.
        /// </remarks>
        [JsiiProperty(name: "dataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: externalLabel: The external label of the task.
        /// </remarks>
        [JsiiProperty(name: "externalLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExternalLabel
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
        /// </remarks>
        [JsiiProperty(name: "filterList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FilterList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: filterType: Whether the data filtering adopts the whitelist mechanism. Default value: true.
        /// </remarks>
        [JsiiProperty(name: "filterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FilterType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: taskDescription: The description of the task.
        /// </remarks>
        [JsiiProperty(name: "taskDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TaskDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDeliverTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDeliverTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosDeliverTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRosDeliverTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: targetList: The list of the target.
            /// </remarks>
            [JsiiProperty(name: "targetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-arms.RosDeliverTask.TargetListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object TargetList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: taskName: The name of the task.
            /// </remarks>
            [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSourceId: The ID of the data source.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSourceName: The name of the data source.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: externalLabel: The external label of the task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "externalLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExternalLabel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filterList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilterList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: filterType: Whether the data filtering adopts the whitelist mechanism. Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilterType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: taskDescription: The description of the task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "taskDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TaskDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
