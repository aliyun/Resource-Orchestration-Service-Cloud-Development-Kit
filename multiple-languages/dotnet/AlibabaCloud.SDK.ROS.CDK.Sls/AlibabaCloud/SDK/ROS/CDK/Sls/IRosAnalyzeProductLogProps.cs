using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `RosAnalyzeProductLog`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-analyzeproductlog
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAnalyzeProductLogProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAnalyzeProductLogProps")]
    public interface IRosAnalyzeProductLogProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cloudProduct: The cloud product name.
        /// </remarks>
        [JsiiProperty(name: "cloudProduct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CloudProduct
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logstore: The logstore name.
        /// </remarks>
        [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Logstore
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: project: The project name.
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: overwrite: Whether to overwrite the existing analysis rule.
        /// </remarks>
        [JsiiProperty(name: "overwrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Overwrite
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAnalyzeProductLog`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-analyzeproductlog
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAnalyzeProductLogProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAnalyzeProductLogProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosAnalyzeProductLogProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudProduct: The cloud product name.
            /// </remarks>
            [JsiiProperty(name: "cloudProduct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CloudProduct
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logstore: The logstore name.
            /// </remarks>
            [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Logstore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: project: The project name.
            /// </remarks>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: overwrite: Whether to overwrite the existing analysis rule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "overwrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Overwrite
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
