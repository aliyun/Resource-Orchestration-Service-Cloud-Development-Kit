using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Handshake`.</summary>
    [JsiiInterface(nativeType: typeof(IRosHandshakeProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosHandshakeProps")]
    public interface IRosHandshakeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: targetEntity: Invited account ID or login email
        /// </remarks>
        [JsiiProperty(name: "targetEntity", typeJson: "{\"primitive\":\"string\"}")]
        string TargetEntity
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetType: Type of account being invited. Valid values: Account, Email
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"primitive\":\"string\"}")]
        string TargetType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: note: Remarks
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosHandshakeProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosHandshakeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosHandshakeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: targetEntity: Invited account ID or login email
            /// </remarks>
            [JsiiProperty(name: "targetEntity", typeJson: "{\"primitive\":\"string\"}")]
            public string TargetEntity
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetType: Type of account being invited. Valid values: Account, Email
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"primitive\":\"string\"}")]
            public string TargetType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: note: Remarks
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "note", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Note
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
