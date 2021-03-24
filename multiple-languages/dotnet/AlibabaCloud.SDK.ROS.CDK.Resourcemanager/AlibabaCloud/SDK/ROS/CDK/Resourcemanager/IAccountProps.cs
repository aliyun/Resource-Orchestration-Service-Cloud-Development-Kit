using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Account`.</summary>
    [JsiiInterface(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.AccountProps")]
    public interface IAccountProps
    {
        /// <summary>Property displayName: Member name.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}")]
        string DisplayName
        {
            get;
        }

        /// <summary>Property folderId: The ID of the parent folder.</summary>
        [JsiiProperty(name: "folderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? FolderId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payerAccountId:.</summary>
        [JsiiProperty(name: "payerAccountId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PayerAccountId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ResourceManager::Account`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.AccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property displayName: Member name.</summary>
            [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}")]
            public string DisplayName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property folderId: The ID of the parent folder.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "folderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? FolderId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property payerAccountId:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "payerAccountId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PayerAccountId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
