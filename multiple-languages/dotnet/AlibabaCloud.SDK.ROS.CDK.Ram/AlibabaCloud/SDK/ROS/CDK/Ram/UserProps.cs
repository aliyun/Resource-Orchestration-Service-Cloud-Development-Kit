using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::User`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.UserProps")]
    public class UserProps : AlibabaCloud.SDK.ROS.CDK.Ram.IUserProps
    {
        /// <summary>Property userName: Specifies the user name, containing up to 64 characters.</summary>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object UserName
        {
            get;
            set;
        }

        /// <summary>Property comments: Comments of ram user.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Comments
        {
            get;
            set;
        }

        /// <summary>Property displayName: Display name, up to 128 characters or Chinese characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DisplayName
        {
            get;
            set;
        }

        /// <summary>Property email: Email of ram user.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Email
        {
            get;
            set;
        }

        /// <summary>Property groups: A name of a group to which you want to add the user.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "groups", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Groups
        {
            get;
            set;
        }

        /// <summary>Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "loginProfile", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.LoginProfileProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? LoginProfile
        {
            get;
            set;
        }

        /// <summary>Property mobilePhone: Phone number of ram user.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "mobilePhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? MobilePhone
        {
            get;
            set;
        }

        /// <summary>Property policies: Describes what actions are allowed on what resources.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosUser.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Policies
        {
            get;
            set;
        }
    }
}
