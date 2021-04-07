using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::UserToGroupAddition`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.UserToGroupAdditionProps")]
    public class UserToGroupAdditionProps : AlibabaCloud.SDK.ROS.CDK.Ram.IUserToGroupAdditionProps
    {
        /// <summary>Property groupName: Specifies the group name, containing up to 64 characters.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupName
        {
            get;
            set;
        }

        /// <summary>Property users: list name of a users to which you want to add the group.</summary>
        [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Users
        {
            get;
            set;
        }
    }
}
