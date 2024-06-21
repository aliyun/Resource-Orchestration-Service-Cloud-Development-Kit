using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `OssExport`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOssExportProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.OssExportProps")]
    public interface IOssExportProps
    {
        /// <summary>Property configuration: The configuration of the export job.</summary>
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosOssExport.ConfigurationProperty\"}]}}")]
        object Configuration
        {
            get;
        }

        /// <summary>Property displayName: The display name of the export job.</summary>
        /// <remarks>
        /// It must be 4 to 100 characters in length.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <summary>Property exportName: The name of the export job.</summary>
        /// <remarks>
        /// This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
        /// </remarks>
        [JsiiProperty(name: "exportName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExportName
        {
            get;
        }

        /// <summary>Property projectName: The project name of SLS.</summary>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Property description: The description of the export job.</summary>
        /// <remarks>
        /// It could be 0 to 256 characters in length.
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

        /// <summary>Properties for defining a `OssExport`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOssExportProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.OssExportProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IOssExportProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property configuration: The configuration of the export job.</summary>
            [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosOssExport.ConfigurationProperty\"}]}}")]
            public object Configuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property displayName: The display name of the export job.</summary>
            /// <remarks>
            /// It must be 4 to 100 characters in length.
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property exportName: The name of the export job.</summary>
            /// <remarks>
            /// This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
            /// </remarks>
            [JsiiProperty(name: "exportName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExportName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectName: The project name of SLS.</summary>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the export job.</summary>
            /// <remarks>
            /// It could be 0 to 256 characters in length.
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
