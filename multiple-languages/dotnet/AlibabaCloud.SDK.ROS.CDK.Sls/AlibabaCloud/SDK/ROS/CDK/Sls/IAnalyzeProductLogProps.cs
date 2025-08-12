using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `AnalyzeProductLog`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-analyzeproductlog
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAnalyzeProductLogProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.AnalyzeProductLogProps")]
    public interface IAnalyzeProductLogProps
    {
        /// <summary>Property cloudProduct: The cloud product name.</summary>
        [JsiiProperty(name: "cloudProduct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CloudProduct
        {
            get;
        }

        /// <summary>Property logstore: The logstore name.</summary>
        [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Logstore
        {
            get;
        }

        /// <summary>Property project: The project name.</summary>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <summary>Property overwrite: Whether to overwrite the existing analysis rule.</summary>
        [JsiiProperty(name: "overwrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Overwrite
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AnalyzeProductLog`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-analyzeproductlog
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAnalyzeProductLogProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.AnalyzeProductLogProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IAnalyzeProductLogProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cloudProduct: The cloud product name.</summary>
            [JsiiProperty(name: "cloudProduct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CloudProduct
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logstore: The logstore name.</summary>
            [JsiiProperty(name: "logstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Logstore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property project: The project name.</summary>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property overwrite: Whether to overwrite the existing analysis rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "overwrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Overwrite
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
