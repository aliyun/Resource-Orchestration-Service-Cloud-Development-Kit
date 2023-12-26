using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `RosProtocolService`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProtocolServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosProtocolServiceProps")]
    public interface IRosProtocolServiceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fileSystemId: File system ID.
        /// </remarks>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocolSpec: The spec of protocol service. Default: General. Values: General
        /// </remarks>
        [JsiiProperty(name: "protocolSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolSpec
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocolType: The protocol type of agreement service.
        /// Ranges:
        /// NFS: Agreement service supports NFS protocol access.
        /// The default value: NFS.
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: Agreement service vswitchid.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of protocol service.The console shows the "protocol service name".
        /// limit:
        /// The length is 2 to 128 English or Chinese characters.
        /// Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/.
        /// It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
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

        /// <remarks>
        /// <strong>Property</strong>: throughput: The bandwidth of the agreement service.
        /// Unit: MB\/S.
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

        /// <summary>Properties for defining a `RosProtocolService`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProtocolServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosProtocolServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IRosProtocolServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemId: File system ID.
            /// </remarks>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocolSpec: The spec of protocol service. Default: General. Values: General
            /// </remarks>
            [JsiiProperty(name: "protocolSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocolType: The protocol type of agreement service.
            /// Ranges:
            /// NFS: Agreement service supports NFS protocol access.
            /// The default value: NFS.
            /// </remarks>
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: Agreement service vswitchid.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of protocol service.The console shows the "protocol service name".
            /// limit:
            /// The length is 2 to 128 English or Chinese characters.
            /// Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/.
            /// It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: throughput: The bandwidth of the agreement service.
            /// Unit: MB\/S.
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
