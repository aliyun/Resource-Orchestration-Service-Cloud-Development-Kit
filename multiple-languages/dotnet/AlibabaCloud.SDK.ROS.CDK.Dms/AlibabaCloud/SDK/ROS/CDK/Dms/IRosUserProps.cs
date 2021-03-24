using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    /// <summary>Properties for defining a `ALIYUN::DMS::User`.</summary>
    [JsiiInterface(nativeType: typeof(IRosUserProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.RosUserProps")]
    public interface IRosUserProps
    {
        /// <remarks>
        /// <strong>Property</strong>: uid: UserAliYunUid
        /// </remarks>
        [JsiiProperty(name: "uid", typeJson: "{\"primitive\":\"string\"}")]
        string Uid
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: mobile: UserMobile
        /// </remarks>
        [JsiiProperty(name: "mobile", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Mobile
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: roleNames: UserRole
        /// </remarks>
        [JsiiProperty(name: "roleNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? RoleNames
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: status: UserStatus
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Status
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tid:
        /// </remarks>
        [JsiiProperty(name: "tid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Tid
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: userName: UserNickName
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosUserProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.RosUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dms.IRosUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: uid: UserAliYunUid
            /// </remarks>
            [JsiiProperty(name: "uid", typeJson: "{\"primitive\":\"string\"}")]
            public string Uid
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: mobile: UserMobile
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mobile", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Mobile
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: roleNames: UserRole
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "roleNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? RoleNames
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: status: UserStatus
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Status
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tid:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Tid
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: UserNickName
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? UserName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
