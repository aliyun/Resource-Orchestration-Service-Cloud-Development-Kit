using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    /// <summary>Properties for defining a `ALIYUN::DMS::User`.</summary>
    [JsiiInterface(nativeType: typeof(IUserProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.UserProps")]
    public interface IUserProps
    {
        /// <summary>Property uid: UserAliYunUid.</summary>
        [JsiiProperty(name: "uid", typeJson: "{\"primitive\":\"string\"}")]
        string Uid
        {
            get;
        }

        /// <summary>Property mobile: UserMobile.</summary>
        [JsiiProperty(name: "mobile", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Mobile
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property roleNames: UserRole.</summary>
        [JsiiProperty(name: "roleNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? RoleNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: UserStatus.</summary>
        [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tid:.</summary>
        [JsiiProperty(name: "tid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Tid
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userName: UserNickName.</summary>
        [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? UserName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DMS::User`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUserProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.UserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dms.IUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property uid: UserAliYunUid.</summary>
            [JsiiProperty(name: "uid", typeJson: "{\"primitive\":\"string\"}")]
            public string Uid
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property mobile: UserMobile.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mobile", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Mobile
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property roleNames: UserRole.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "roleNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? RoleNames
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Property status: UserStatus.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Status
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tid:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Tid
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property userName: UserNickName.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? UserName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
