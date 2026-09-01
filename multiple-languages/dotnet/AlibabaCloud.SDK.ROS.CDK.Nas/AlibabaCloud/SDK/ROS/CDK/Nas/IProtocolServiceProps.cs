using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `ProtocolService`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProtocolServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.ProtocolServiceProps")]
    public interface IProtocolServiceProps
    {
        /// <summary>Property fileSystemId: File system ID.</summary>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <summary>Property protocolSpec: The spec of protocol service.</summary>
        /// <remarks>
        /// Default: General. Values: General
        /// </remarks>
        [JsiiProperty(name: "protocolSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolSpec
        {
            get;
        }

        /// <summary>Property protocolType: The protocol type of the protocol service.</summary>
        /// <remarks>
        /// Valid value: NFS (default). Only NFSv3 is supported.
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolType
        {
            get;
        }

        /// <summary>Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: Agreement service vswitchid.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property description: The description of the protocol service.</summary>
        /// <remarks>
        /// The name of the protocol service appears
        /// in the console.
        /// Limits:
        ///
        /// <list type="bullet">
        /// <description>The description must be 2 to 128 characters in length.</description>
        /// <description>The description must start with a letter but cannot start with <c>http:\/\/</c> or
        /// <c>https:\/\/</c>.</description>
        /// <description>The description can contain letters, digits, colons (:), underscores (_), and
        /// hyphens (-).</description>
        /// </list>
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

        /// <summary>Property throughput: The bandwidth of the agreement service.</summary>
        /// <remarks>
        /// Unit: MB/S.
        /// </remarks>
        [JsiiProperty(name: "throughput", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Throughput
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ProtocolService`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProtocolServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.ProtocolServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IProtocolServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property fileSystemId: File system ID.</summary>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocolSpec: The spec of protocol service.</summary>
            /// <remarks>
            /// Default: General. Values: General
            /// </remarks>
            [JsiiProperty(name: "protocolSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocolType: The protocol type of the protocol service.</summary>
            /// <remarks>
            /// Valid value: NFS (default). Only NFSv3 is supported.
            /// </remarks>
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: Agreement service vswitchid.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the protocol service.</summary>
            /// <remarks>
            /// The name of the protocol service appears
            /// in the console.
            /// Limits:
            ///
            /// <list type="bullet">
            /// <description>The description must be 2 to 128 characters in length.</description>
            /// <description>The description must start with a letter but cannot start with <c>http:\/\/</c> or
            /// <c>https:\/\/</c>.</description>
            /// <description>The description can contain letters, digits, colons (:), underscores (_), and
            /// hyphens (-).</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property throughput: The bandwidth of the agreement service.</summary>
            /// <remarks>
            /// Unit: MB/S.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "throughput", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Throughput
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
