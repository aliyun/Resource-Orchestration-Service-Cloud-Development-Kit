using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `ALIYUN::HBR::BackupClients`.</summary>
    [JsiiInterface(nativeType: typeof(IBackupClientsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.BackupClientsProps")]
    public interface IBackupClientsProps
    {
        /// <summary>Property instanceIds: ID list of instances to install backup client.</summary>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] InstanceIds
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::HBR::BackupClients`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBackupClientsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.BackupClientsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IBackupClientsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceIds: ID list of instances to install backup client.</summary>
            [JsiiProperty(name: "instanceIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] InstanceIds
            {
                get => GetInstanceProperty<string[]>()!;
            }
        }
    }
}
