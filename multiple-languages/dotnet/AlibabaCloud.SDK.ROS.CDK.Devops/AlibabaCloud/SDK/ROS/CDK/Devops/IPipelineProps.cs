using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Devops
{
    /// <summary>Properties for defining a `Pipeline`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPipelineProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.PipelineProps")]
    public interface IPipelineProps
    {
        /// <summary>Property content: Pipeline description in YAML format.</summary>
        [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Content
        {
            get;
        }

        /// <summary>Property name: Pipeline name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.</summary>
        [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OrganizationId
        {
            get;
        }

        /// <summary>Properties for defining a `Pipeline`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPipelineProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.PipelineProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Devops.IPipelineProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property content: Pipeline description in YAML format.</summary>
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Content
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: Pipeline name.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.</summary>
            [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OrganizationId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
