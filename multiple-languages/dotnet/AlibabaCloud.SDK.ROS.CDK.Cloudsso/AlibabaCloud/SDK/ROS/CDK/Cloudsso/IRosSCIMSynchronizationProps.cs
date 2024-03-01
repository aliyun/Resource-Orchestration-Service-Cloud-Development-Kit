using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `RosSCIMSynchronization`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSCIMSynchronizationProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosSCIMSynchronizationProps")]
    public interface IRosSCIMSynchronizationProps
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
        /// <strong>Property</strong>: scimSynchronizationStatus: The status of SCIM synchronization. Valid values:
        /// - Enabled
        /// - Disabled
        /// The default value is Enabled.
        /// </remarks>
        [JsiiProperty(name: "scimSynchronizationStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScimSynchronizationStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSCIMSynchronization`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSCIMSynchronizationProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosSCIMSynchronizationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IRosSCIMSynchronizationProps
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
            /// <strong>Property</strong>: scimSynchronizationStatus: The status of SCIM synchronization. Valid values:
            /// - Enabled
            /// - Disabled
            /// The default value is Enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scimSynchronizationStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScimSynchronizationStatus
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
