using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `DeliverTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDeliverTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.DeliverTaskProps")]
    public interface IDeliverTaskProps
    {
        /// <summary>Property targetList: The list of the target.</summary>
        [JsiiProperty(name: "targetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-arms.RosDeliverTask.TargetListProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object TargetList
        {
            get;
        }

        /// <summary>Property taskName: The name of the task.</summary>
        [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskName
        {
            get;
        }

        /// <summary>Property dataSourceId: The ID of the data source.</summary>
        [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataSourceName: The name of the data source.</summary>
        [JsiiProperty(name: "dataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property externalLabel: The external label of the task.</summary>
        [JsiiProperty(name: "externalLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExternalLabel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.</summary>
        [JsiiProperty(name: "filterList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FilterList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property filterType: Whether the data filtering adopts the whitelist mechanism.</summary>
        /// <remarks>
        /// Default value: true.
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

        /// <summary>Property taskDescription: The description of the task.</summary>
        [JsiiProperty(name: "taskDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TaskDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DeliverTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDeliverTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.DeliverTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IDeliverTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property targetList: The list of the target.</summary>
            [JsiiProperty(name: "targetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-arms.RosDeliverTask.TargetListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object TargetList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property taskName: The name of the task.</summary>
            [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataSourceId: The ID of the data source.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataSourceName: The name of the data source.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property externalLabel: The external label of the task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "externalLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExternalLabel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "filterList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilterList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property filterType: Whether the data filtering adopts the whitelist mechanism.</summary>
            /// <remarks>
            /// Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilterType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property taskDescription: The description of the task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "taskDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TaskDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
