using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `SCIMSynchronization`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISCIMSynchronizationProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.SCIMSynchronizationProps")]
    public interface ISCIMSynchronizationProps
    {
        /// <summary>Property directoryId: The ID of the directory.</summary>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <summary>Property scimSynchronizationStatus: The status of SCIM synchronization.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Enabled</description>
        /// <description>Disabled
        /// The default value is Enabled.</description>
        /// </list>
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

        /// <summary>Properties for defining a `SCIMSynchronization`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISCIMSynchronizationProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.SCIMSynchronizationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.ISCIMSynchronizationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property directoryId: The ID of the directory.</summary>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scimSynchronizationStatus: The status of SCIM synchronization.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Enabled</description>
            /// <description>Disabled
            /// The default value is Enabled.</description>
            /// </list>
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
