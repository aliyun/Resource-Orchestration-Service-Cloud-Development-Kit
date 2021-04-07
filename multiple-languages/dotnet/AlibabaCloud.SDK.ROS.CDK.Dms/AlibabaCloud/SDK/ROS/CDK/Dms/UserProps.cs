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
        [JsiiProperty(name: "uid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Uid
        {
            get;
            set;
        }

        /// <summary>Property mobile: UserMobile.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "mobile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Mobile
        {
            get;
            set;
        }

        /// <summary>Property roleNames: UserRole.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "roleNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? RoleNames
        {
            get;
            set;
        }

        /// <summary>Property status: UserStatus.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Status
        {
            get;
            set;
        }

        /// <summary>Property tid:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Tid
        {
            get;
            set;
        }

        /// <summary>Property userName: UserNickName.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? UserName
        {
            get;
            set;
        }
    }
}
