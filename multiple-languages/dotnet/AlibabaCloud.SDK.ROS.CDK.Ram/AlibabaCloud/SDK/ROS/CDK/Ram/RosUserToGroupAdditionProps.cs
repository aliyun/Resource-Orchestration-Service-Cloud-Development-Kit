using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::UserToGroupAddition`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosUserToGroupAdditionProps")]
    public class RosUserToGroupAdditionProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRosUserToGroupAdditionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: Specifies the group name, containing up to 64 characters.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: users: list name of a users to which you want to add the group.
        /// </remarks>
        [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Users
        {
            get;
            set;
        }
    }
}
