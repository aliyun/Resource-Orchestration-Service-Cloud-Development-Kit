using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DMS::User`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dms.UserProps")]
    public class UserProps : AlibabaCloud.SDK.ROS.CDK.Dms.IUserProps
    {
        /// <summary>Property uid: UserAliYunUid.</summary>
        [JsiiProperty(name: "uid", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Uid
        {
            get;
            set;
        }

        /// <summary>Property mobile: UserMobile.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "mobile", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Mobile
        {
            get;
            set;
        }

        /// <summary>Property roleNames: UserRole.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "roleNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? RoleNames
        {
            get;
            set;
        }

        /// <summary>Property status: UserStatus.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Status
        {
            get;
            set;
        }

        /// <summary>Property tid:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tid", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Tid
        {
            get;
            set;
        }

        /// <summary>Property userName: UserNickName.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? UserName
        {
            get;
            set;
        }
    }
}
