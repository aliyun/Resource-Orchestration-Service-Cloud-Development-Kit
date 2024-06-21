using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `RosOssExport`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosOssExportProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosOssExportProps")]
    public interface IRosOssExportProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configuration: The configuration of the export job.
        /// </remarks>
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosOssExport.ConfigurationProperty\"}]}}")]
        object Configuration
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: displayName: The display name of the export job. It must be 4 to 100 characters in length.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: exportName: The name of the export job. This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
        /// </remarks>
        [JsiiProperty(name: "exportName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExportName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: The project name of SLS.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the export job. It could be 0 to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosOssExport`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosOssExportProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosOssExportProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosOssExportProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: configuration: The configuration of the export job.
            /// </remarks>
            [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosOssExport.ConfigurationProperty\"}]}}")]
            public object Configuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: The display name of the export job. It must be 4 to 100 characters in length.
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: exportName: The name of the export job. This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
            /// </remarks>
            [JsiiProperty(name: "exportName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExportName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: The project name of SLS.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the export job. It could be 0 to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
