using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Handshake`.</summary>
    [JsiiInterface(nativeType: typeof(IHandshakeProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.HandshakeProps")]
    public interface IHandshakeProps
    {
        /// <summary>Property targetEntity: Invited account ID or login email.</summary>
        [JsiiProperty(name: "targetEntity", typeJson: "{\"primitive\":\"string\"}")]
        string TargetEntity
        {
            get;
        }

        /// <summary>Property targetType: Type of account being invited.</summary>
        /// <remarks>
        /// Valid values: Account, Email
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"primitive\":\"string\"}")]
        string TargetType
        {
            get;
        }

        /// <summary>Property note: Remarks.</summary>
        [JsiiProperty(name: "note", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Note
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ResourceManager::Handshake`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHandshakeProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.HandshakeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IHandshakeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property targetEntity: Invited account ID or login email.</summary>
            [JsiiProperty(name: "targetEntity", typeJson: "{\"primitive\":\"string\"}")]
            public string TargetEntity
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property targetType: Type of account being invited.</summary>
            /// <remarks>
            /// Valid values: Account, Email
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"primitive\":\"string\"}")]
            public string TargetType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property note: Remarks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "note", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Note
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
