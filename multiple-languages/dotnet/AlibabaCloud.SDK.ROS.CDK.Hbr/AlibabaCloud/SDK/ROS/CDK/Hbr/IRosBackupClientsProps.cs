using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `RosBackupClients`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBackupClientsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosBackupClientsProps")]
    public interface IRosBackupClientsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceIds: ID list of instances to install backup client
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object InstanceIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hbr.RosBackupClients.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Hbr.RosBackupClients.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosBackupClients`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBackupClientsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosBackupClientsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IRosBackupClientsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceIds: ID list of instances to install backup client
            /// </remarks>
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object InstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hbr.RosBackupClients.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Hbr.RosBackupClients.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbr.RosBackupClients.ITagsProperty[]?>();
            }
        }
    }
}
