using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DMS::User`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dms.RosUserProps")]
    public class RosUserProps : AlibabaCloud.SDK.ROS.CDK.Dms.IRosUserProps
    {
        /// <remarks>
        /// <strong>Property</strong>: uid: UserAliYunUid
        /// </remarks>
        [JsiiProperty(name: "uid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Uid
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: mobile: UserMobile
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mobile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Mobile
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleNames: UserRole
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "roleNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? RoleNames
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: status: UserStatus
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Status
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tid:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Tid
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userName: UserNickName
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UserName
        {
            get;
            set;
        }
    }
}
