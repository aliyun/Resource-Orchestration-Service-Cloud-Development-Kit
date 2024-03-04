using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `RosSCIMServerCredential`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSCIMServerCredentialProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosSCIMServerCredentialProps")]
    public interface IRosSCIMServerCredentialProps
    {
        /// <remarks>
        /// <strong>Property</strong>: directoryId: The ID of the directory.
        /// </remarks>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: status: The new status of the SCIM credential. Valid values:
        /// - Enabled: The SCIM credential is enabled.
        /// - Disabled: The SCIM credential is disabled.
        /// The default value is Enabled.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSCIMServerCredential`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSCIMServerCredentialProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosSCIMServerCredentialProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IRosSCIMServerCredentialProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: directoryId: The ID of the directory.
            /// </remarks>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: status: The new status of the SCIM credential. Valid values:
            /// - Enabled: The SCIM credential is enabled.
            /// - Disabled: The SCIM credential is disabled.
            /// The default value is Enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
