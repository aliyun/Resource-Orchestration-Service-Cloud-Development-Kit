using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `ALIYUN::HBR::BackupClients`.</summary>
    [JsiiInterface(nativeType: typeof(IRosBackupClientsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosBackupClientsProps")]
    public interface IRosBackupClientsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceIds: ID list of instances to install backup client
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] InstanceIds
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::HBR::BackupClients`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosBackupClientsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosBackupClientsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IRosBackupClientsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceIds: ID list of instances to install backup client
            /// </remarks>
            [JsiiProperty(name: "instanceIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] InstanceIds
            {
                get => GetInstanceProperty<string[]>()!;
            }
        }
    }
}
