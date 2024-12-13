using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `Run`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRunProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RunProps")]
    public interface IRunProps
    {
        /// <summary>Property experimentId: Resource attribute field of the experiment ID to which Run belongs.</summary>
        [JsiiProperty(name: "experimentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExperimentId
        {
            get;
        }

        /// <summary>Property runName: The name of the Run.</summary>
        [JsiiProperty(name: "runName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RunName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceId: Attribute Resource field representing the source task ID.</summary>
        [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceType: Resource attribute fields representing the source type.</summary>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Run`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRunProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RunProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IRunProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property experimentId: Resource attribute field of the experiment ID to which Run belongs.</summary>
            [JsiiProperty(name: "experimentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExperimentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property runName: The name of the Run.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "runName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RunName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceId: Attribute Resource field representing the source task ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceType: Resource attribute fields representing the source type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
